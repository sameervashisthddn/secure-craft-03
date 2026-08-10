const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

/**
 * Server-side recipient map. The browser only sends a formType — never an
 * arbitrary recipient address.
 */
const RECIPIENTS: Record<string, string> = {
  security_assessment: "sales@crabtreesolutions.us",
  general_inquiry: "sales@crabtreesolutions.us",
  partner_request: "partners@crabtreesolutions.us",
};

const MAX_SUBJECT = 200;
const MAX_BODY = 10000;
const MAX_EMAIL = 255;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, "\n").trim().slice(0, max) : "";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const json = (payload: unknown, status: number) =>
    new Response(JSON.stringify(payload), {
      status,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  try {
    const payload = await req.json().catch(() => null);
    if (!payload || typeof payload !== "object") {
      return json({ error: "Invalid request body" }, 400);
    }

    const { formType, subject: rawSubject, body: rawBody, replyTo: rawReplyTo } =
      payload as Record<string, unknown>;

    const to = typeof formType === "string" ? RECIPIENTS[formType] : undefined;
    if (!to) {
      return json({ error: "Unknown form type" }, 400);
    }

    const subject = clean(rawSubject, MAX_SUBJECT);
    const body = clean(rawBody, MAX_BODY);
    if (!subject || !body) {
      return json({ error: "Missing required fields: subject, body" }, 400);
    }

    const replyToCandidate = clean(rawReplyTo, MAX_EMAIL);
    const replyTo = EMAIL_RE.test(replyToCandidate) ? replyToCandidate : undefined;

    const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not configured");
      return json({ error: "Email service unavailable" }, 503);
    }

    const message: Record<string, unknown> = {
      personalizations: [{ to: [{ email: to }] }],
      from: { email: "support@crabtreesolutions.us", name: "Crabtree Solutions" },
      subject,
      content: [{ type: "text/plain", value: body }],
    };
    if (replyTo) message.reply_to = { email: replyTo };

    const sgResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!sgResponse.ok) {
      // Full provider error stays in server logs only.
      const errorBody = await sgResponse.text();
      console.error(
        `SendGrid send failed [${sgResponse.status}] formType=${formType} to=${to}: ${errorBody}`,
      );
      return json({ error: "Email could not be delivered at this time" }, 502);
    }

    await sgResponse.text();
    console.log(`Email sent successfully — formType=${formType} to=${to} subject="${subject}"`);

    return json({ success: true }, 200);
  } catch (error) {
    console.error("send-email error:", error instanceof Error ? error.stack : error);
    return json({ error: "Unexpected error" }, 500);
  }
});
