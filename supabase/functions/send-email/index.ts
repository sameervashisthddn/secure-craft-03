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

const FORM_LABELS: Record<string, string> = {
  security_assessment: "Security Assessment Request",
  general_inquiry: "General Inquiry",
  partner_request: "Partner Request",
};

const MAX_SUBJECT = 200;
const MAX_BODY = 10000;
const MAX_EMAIL = 255;
const MAX_SHORT = 200;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, "\n").trim().slice(0, max) : "";

const cleanLine = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

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

    const {
      formType,
      subject: rawSubject,
      body: rawBody,
      replyTo: rawReplyTo,
      company: rawCompany,
      sourcePage: rawSourcePage,
    } = payload as Record<string, unknown>;

    const type = typeof formType === "string" ? formType : "";
    const to = RECIPIENTS[type];
    if (!to) {
      return json({ error: "Unknown form type" }, 400);
    }

    const subject = clean(rawSubject, MAX_SUBJECT);
    const body = clean(rawBody, MAX_BODY);
    if (!subject || !body) {
      return json({ error: "Missing required fields: subject, body" }, 400);
    }

    const replyToCandidate = cleanLine(rawReplyTo, MAX_EMAIL);
    const visitorEmail = EMAIL_RE.test(replyToCandidate) ? replyToCandidate : "";

    // Fall back to parsing structured lines out of the plain-text body so the
    // notification always carries company / source page context.
    const pick = (label: string) => {
      const m = body.match(new RegExp(`^${label}:\\s*(.+)$`, "im"));
      return m ? m[1].trim().slice(0, MAX_SHORT) : "";
    };

    const company = cleanLine(rawCompany, MAX_SHORT) || pick("Company");
    const sourcePage = cleanLine(rawSourcePage, MAX_SHORT) || pick("Page");

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceKey) {
      console.error("Missing Supabase environment configuration");
      return json({ error: "Email service unavailable" }, 503);
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serviceKey}`,
        apikey: serviceKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateName: "website-form-notification",
        recipientEmail: to,
        idempotencyKey: `website-form-${crypto.randomUUID()}`,
        templateData: {
          formType: type,
          formLabel: FORM_LABELS[type],
          visitorEmail,
          company,
          sourcePage,
          submittedAt: new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC",
          message: body,
          fields: [{ label: "Form subject", value: subject }],
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Transactional send failed [${response.status}] formType=${type} to=${to}: ${errorBody}`,
      );
      return json({ error: "Email could not be delivered at this time" }, 502);
    }

    await response.text();
    console.log(`Email queued successfully — formType=${type} to=${to} subject="${subject}"`);

    return json({ success: true }, 200);
  } catch (error) {
    console.error("send-email error:", error instanceof Error ? error.stack : error);
    return json({ error: "Unexpected error" }, 500);
  }
});
