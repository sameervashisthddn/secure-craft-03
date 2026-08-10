import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const MAX_EMAIL = 255;
const MAX_COMPANY = 100;
const MAX_MESSAGE = 1000;

const INTERESTS = [
  "Managed IT Services",
  "Cybersecurity & Compliance Support",
  "Vulnerability Assessment & Pen Testing",
  "Startup IT & Security",
  "Firewall & Network Security",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({ email: "", company: "", interest: "", message: "" });
  const [errors, setErrors] = useState<{ email?: string; company?: string; interest?: string; message?: string }>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const errs: typeof errors = {};
    const email = form.email.trim();
    const company = form.company.trim();
    const interest = form.interest.trim();
    const message = form.message.trim();

    if (!email) errs.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    else if (email.length > MAX_EMAIL) errs.email = `Email must be under ${MAX_EMAIL} characters.`;

    if (!company) errs.company = "Company name is required.";
    else if (company.length > MAX_COMPANY) errs.company = `Company must be under ${MAX_COMPANY} characters.`;

    if (!interest) errs.interest = "Please select a primary interest.";

    if (message.length > MAX_MESSAGE) errs.message = `Message must be under ${MAX_MESSAGE} characters.`;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const safeEmail = form.email.trim().slice(0, MAX_EMAIL);
    const safeCompany = form.company.trim().slice(0, MAX_COMPANY);
    const safeInterest = form.interest.trim();
    const safeMessage = form.message.trim().slice(0, MAX_MESSAGE);
    const pageUrl = window.location.href;

    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: {
          formType: "general_inquiry",
          subject: `Website Inquiry – ${safeInterest} | ${safeCompany}`,
          body:
            `Work Email: ${safeEmail}\n` +
            `Company Name: ${safeCompany}\n` +
            `Primary Interest: ${safeInterest}\n` +
            `Message / Requirement: ${safeMessage || "(none provided)"}\n\n` +
            `Page: ${pageUrl}\n` +
            `Form: Homepage Contact`,
          replyTo: safeEmail,
        },
      });
      if (error) throw error;
      setSubmitted(true);
      setForm({ email: "", company: "", interest: "", message: "" });
    } catch (err) {
      console.error("Failed to send contact form:", err);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in mx-auto max-w-xl py-16 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 animate-scale-in">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <p className="text-lg font-semibold text-primary">Thanks — we'll respond within one business day.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">Let's Talk About Your IT Needs</h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          Tell us a little about your company and what you need help with — we'll respond within one business day.
        </p>

        <div className="mx-auto max-w-xl">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Request Free Assessment</h3>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Work Email <span className="text-destructive">*</span></label>
              <input
                type="email"
                required
                maxLength={MAX_EMAIL}
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined })); }}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@yourcompany.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Company Name <span className="text-destructive">*</span></label>
              <input
                type="text"
                required
                maxLength={MAX_COMPANY}
                value={form.company}
                onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors((p) => ({ ...p, company: undefined })); }}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your company name"
              />
              {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Primary Interest <span className="text-destructive">*</span></label>
              <select
                required
                value={form.interest}
                onChange={(e) => { setForm({ ...form, interest: e.target.value }); setErrors((p) => ({ ...p, interest: undefined })); }}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select an option…</option>
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              {errors.interest && <p className="mt-1 text-xs text-destructive">{errors.interest}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message / Requirement</label>
              <textarea
                rows={4}
                maxLength={MAX_MESSAGE}
                value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: undefined })); }}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Briefly tell us what you need help with"
              />
              <div className="mt-1 flex justify-between">
                {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
                <span className="text-xs text-muted-foreground">{form.message.length}/{MAX_MESSAGE}</span>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
                {sending ? "Sending…" : "Request Free Assessment"}
              </Button>
            </div>
          </form>

          <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="text-center">
                <p>11700 Lebanon Rd, Suite 924</p>
                <p>Frisco, TX 75035</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href="mailto:sales@crabtreesolutions.us" className="text-primary hover:underline" rel="noopener noreferrer">
                sales@crabtreesolutions.us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
