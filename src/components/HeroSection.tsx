import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-services.jpg";

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_COMPANY = 100;

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const safeName = form.name.trim().slice(0, MAX_NAME);
    const safeEmail = form.email.trim().slice(0, MAX_EMAIL);
    const safeCompany = form.company.trim().slice(0, MAX_COMPANY);

    window.location.href = `mailto:info@crabtreesolutions.us?subject=${encodeURIComponent(
      `Free Security Assessment Request from ${safeName}`
    )}&body=${encodeURIComponent(
      `Name: ${safeName}\nEmail: ${safeEmail}\nCompany: ${safeCompany || "N/A"}\n\nRequesting a free security assessment.`
    )}`;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 section-padding">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Shield className="h-3.5 w-3.5" />
              Assessment-First IT & Security
            </span>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              Assessment-First IT &amp; Security
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Protect your business with compliance-driven IT solutions. We
              identify risks first — then deliver the right solution.
            </p>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="mb-4 inline-flex items-center gap-2 rounded-lg border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                HIPAA · SOC 2 · PCI DSS Aligned
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Serving businesses across the United States
              </span>
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="w-full max-w-md flex-1">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-xl shadow-primary/5 sm:p-8">
              <h2 className="mb-1 text-xl font-bold text-foreground">
                Book Free Security Assessment
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We respond within one business day.
              </p>

              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-primary">
                    Thank you!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your email client should open shortly. We'll be in touch
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <input
                      type="text"
                      required
                      maxLength={MAX_NAME}
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      maxLength={MAX_EMAIL}
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      maxLength={MAX_COMPANY}
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Company Name (optional)"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2">
                    Book Free Security Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
