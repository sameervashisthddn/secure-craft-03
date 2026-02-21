import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_MESSAGE = 1000;

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: typeof errors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) errs.name = "Name is required.";
    else if (name.length > MAX_NAME) errs.name = `Name must be under ${MAX_NAME} characters.`;

    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    else if (email.length > MAX_EMAIL) errs.email = `Email must be under ${MAX_EMAIL} characters.`;

    if (!message) errs.message = "Message is required.";
    else if (message.length > MAX_MESSAGE) errs.message = `Message must be under ${MAX_MESSAGE} characters.`;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const safeName = form.name.trim().slice(0, MAX_NAME);
    const safeEmail = form.email.trim().slice(0, MAX_EMAIL);
    const safeMessage = form.message.trim().slice(0, MAX_MESSAGE);

    window.location.href = `mailto:info@crabtreesolutions.us?subject=${encodeURIComponent(`Inquiry from ${safeName}`)}&body=${encodeURIComponent(safeMessage)}%0A%0AFrom: ${encodeURIComponent(safeName)} (${encodeURIComponent(safeEmail)})`;
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">Let's Talk About Your IT Needs</h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          Whether you need managed IT support, a security assessment, or infrastructure optimization — we'll respond within one business day.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  maxLength={MAX_NAME}
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: undefined })); }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  maxLength={MAX_EMAIL}
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined })); }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  maxLength={MAX_MESSAGE}
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: undefined })); }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your IT challenges or how we can help..."
                />
                <div className="mt-1 flex justify-between">
                  {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
                  <span className="text-xs text-muted-foreground">{form.message.length}/{MAX_MESSAGE}</span>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Our Office</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p>11700 Lebanon Rd, Suite 924</p>
                  <p>Frisco, TX 75035</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+14697272810" className="text-primary hover:underline" rel="noopener noreferrer">
                  +1 (469) 727-2810
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@crabtreesolutions.us" className="text-primary hover:underline" rel="noopener noreferrer">
                  info@crabtreesolutions.us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;