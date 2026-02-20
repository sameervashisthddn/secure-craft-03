import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  CheckCircle,
  XCircle,
  Handshake,
  Zap,
  FileText,
  Lock,
  Star,
  ArrowRight,
  Clock,
  Upload,
  ChevronRight,
  Server,
  Wifi,
  Monitor,
  Globe,
  Cpu,
} from "lucide-react";

const MAX_FIELD = 500;
const MAX_EMAIL = 255;

const partnerBenefits = [
  "Fast, structured quotes for IT/security projects",
  "Proposal‑ready scopes + BOM",
  "White‑label delivery (your brand)",
  "Co‑delivery when you want support",
  "Engineering help on discovery calls",
  "Implementation + support that strengthens YOUR offering",
  "Ability to take on bigger clients without hiring",
];

const howItWorks = [
  { step: "01", title: "Submit your client's requirements", desc: "Use the partner form to share scope, environment, and goals." },
  { step: "02", title: "We send clarifications + recommended approach", desc: "We review and come back with questions or a recommended solution path." },
  { step: "03", title: "You receive a white‑label‑ready quote + scope", desc: "Proposal-ready output you can present as your own — no attribution to us." },
  { step: "04", title: "You deliver to the client — we help execute if needed", desc: "You stay the primary provider. We execute in the background." },
];

const noCompeteItems = [
  "Your clients remain 100% yours",
  "No direct client contact without your written approval",
  "NDA available before sharing details",
  "No poaching, no cross‑selling",
  "All work branded as your company unless you request co‑delivery",
];

const services = [
  { icon: Monitor, label: "Managed IT services" },
  { icon: Shield, label: "Firewall + VPN (Fortinet / Sophos)" },
  { icon: Cpu, label: "Endpoint security (EDR/MDR)" },
  { icon: Globe, label: "Microsoft 365 hardening + email security" },
  { icon: Lock, label: "VAPT coordination" },
  { icon: Server, label: "Backup & disaster recovery" },
  { icon: Wifi, label: "Network redesign (Wi‑Fi + switching)" },
  { icon: FileText, label: "SOC 2 readiness controls support" },
];

const engagementOptions = [
  {
    icon: Shield,
    title: "White‑Label Delivery",
    desc: "You own the client; we work behind the scenes. All deliverables carry your brand.",
  },
  {
    icon: Handshake,
    title: "Co‑Delivery",
    desc: "We join you on calls or projects; you lead. Joint execution, your relationship.",
  },
  {
    icon: Zap,
    title: "Back‑End Engineering Support",
    desc: "We help with scoping, design, and architecture — you pitch and close.",
  },
];

const builtFor = [
  "Small MSPs & IT vendors (1–25 staff)",
  "Independent IT consultants",
  "VoIP, networking & security resellers",
  "Break‑fix shops expanding into managed services",
];

const notFor = [
  "End customers",
  "Large national MSPs",
];

const MAX_NAME = 100;
const MAX_COMPANY = 100;

const PartnerPortal = () => {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    serviceArea: "",
    clientIndustry: "",
    endpointCount: "",
    locations: "",
    currentEnv: "",
    clientGoals: "",
    timeline: "",
    budget: "",
    whiteLabel: "",
    nda: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.company.trim()) errs.company = "Company name is required.";
    if (!form.name.trim()) errs.name = "Your name is required.";
    if (!form.email.trim()) errs.email = "Business email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      `Partner Company: ${form.company.trim().slice(0, MAX_COMPANY)}`,
      `Contact Name: ${form.name.trim().slice(0, MAX_NAME)}`,
      `Email: ${form.email.trim().slice(0, MAX_EMAIL)}`,
      `Phone: ${form.phone.trim().slice(0, 30) || "N/A"}`,
      `Service Area / State: ${form.serviceArea.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `Client Industry: ${form.clientIndustry.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `User / Endpoint Count: ${form.endpointCount.trim().slice(0, 50) || "N/A"}`,
      `Locations: ${form.locations.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `Current Environment: ${form.currentEnv.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `Client Goals: ${form.clientGoals.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `Timeline: ${form.timeline.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `Budget: ${form.budget.trim().slice(0, MAX_FIELD) || "N/A"}`,
      `White‑Label Quote Requested: ${form.whiteLabel || "Not specified"}`,
      `NDA Required: ${form.nda || "Not specified"}`,
      file ? `File attached: ${file.name} (please reply to send the file)` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:partners@crabtreesolutions.us?subject=${encodeURIComponent(
      `Partner Quote Request — ${form.company.trim().slice(0, MAX_COMPANY)}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MSP Partner Portal – Crabtree Solutions Inc.</title>
        <meta
          name="description"
          content="White‑label IT and cybersecurity delivery for MSPs, IT consultants, and resellers. Request partner quotes and scale without hiring."
        />
        <link rel="canonical" href="https://crabtreesolutions.us/partner" />
        <meta property="og:title" content="MSP Partner Portal – Crabtree Solutions Inc." />
        <meta
          property="og:description"
          content="White‑label IT delivery partner for small MSPs and IT vendors. Fast quotes, full client protection, no compete."
        />
        <meta property="og:url" content="https://crabtreesolutions.us/partner" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      {/* BLOCK 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 section-padding">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative mx-auto px-6 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Handshake className="h-3.5 w-3.5" />
            MSP Partner Portal — Approved Partners Only
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            Grow Your MSP With a Trusted Behind‑the‑Scenes Delivery Partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Share your client's requirements and get fast, white‑label‑ready quotes you can present as your own. You stay the primary provider — we help you deliver more, win more, and scale without hiring.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#partner-form">
              <Button size="lg" className="gap-2 px-8 py-6 text-base">
                Request a Partner Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#partner-form">
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-base">
                Apply for Partner Access
              </Button>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 24–48 hr turnaround</span>
            <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> NDA available</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5" /> White‑label ready</span>
          </div>
        </div>
      </section>

      {/* BLOCK 10 — Access notice banner */}
      <div className="border-b border-border bg-muted/60">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-3 text-sm">
          <span className="text-foreground font-medium">
            🔒 This portal is for approved partners only. Submit your company details — we verify each partner to prevent misuse.
          </span>
          <a href="#partner-form" className="shrink-0 text-primary hover:underline font-semibold text-xs flex items-center gap-1">
            Apply <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* BLOCK 2 — Who This Is For */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Who This Is For
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">Built for</h3>
                </div>
                <ul className="space-y-3">
                  {builtFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-semibold text-card-foreground">Not for</h3>
                </div>
                <ul className="space-y-3">
                  {notFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground leading-relaxed">
                  If you are a business looking for IT support, please visit our{" "}
                  <a href="/" className="text-primary hover:underline">main website</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 3 — Why Partners Choose Us */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why Partners Choose Us
            </h2>
            <div className="mt-8 space-y-5 text-left">
              {[
                { icon: Shield, text: "You keep full client ownership — always." },
                { icon: Lock, text: "We never market, pitch, or sell to your clients." },
                { icon: Users, text: "We act as your silent delivery team so you can grow, close more deals, and offer more services without extra hires." },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base leading-relaxed text-card-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-primary">
              Our purpose: Help small IT providers grow faster and win more business.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 4 — Key Partner Benefits */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Key Partner Benefits
            </h2>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {partnerBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-base font-semibold text-primary">
              We grow only when our partners grow.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 5 — How It Works */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mb-10 text-center text-sm font-medium text-muted-foreground">
              Turnaround: 24–48 business hours
            </p>
            <div className="mx-auto max-w-3xl space-y-4">
              {howItWorks.map((step) => (
                <div key={step.step} className="flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-extrabold text-primary">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 6 — No‑Compete Guarantee */}
      <ScrollReveal>
        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="text-center">
              <Lock className="mx-auto mb-4 h-10 w-10 text-primary-foreground/80" />
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Partner Protection — No‑Compete Guarantee
              </h2>
              <p className="mt-3 text-primary-foreground/70">
                We're your silent delivery engine — not a competitor.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {noCompeteItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 7 — Services You Can Quote */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Services You Can Quote
            </h2>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 9 — Engagement Options */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Engagement Options
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {engagementOptions.map((opt) => (
                <div
                  key={opt.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <opt.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{opt.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOCK 8 — Partner Requirements Form */}
      <ScrollReveal>
        <section id="partner-form" className="section-padding">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Partner Application
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Request a Partner Quote
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Fill in as much detail as you have — we'll follow up with any clarifications.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="text-xl font-semibold text-foreground">Request Sent!</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thanks — our partner team will respond with clarifications or a quote within 24–48 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Company */}
                    <div>
                      <label className={labelClass}>Partner Company Name *</label>
                      <input
                        type="text"
                        maxLength={MAX_COMPANY}
                        value={form.company}
                        onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors((p) => ({ ...p, company: undefined as unknown as string })); }}
                        className={inputClass}
                        placeholder="Acme IT Solutions"
                      />
                      {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
                    </div>

                    {/* Name + Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Your Name *</label>
                        <input
                          type="text"
                          maxLength={MAX_NAME}
                          value={form.name}
                          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: undefined as unknown as string })); }}
                          className={inputClass}
                          placeholder="Jane Smith"
                        />
                        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Business Email *</label>
                        <input
                          type="email"
                          maxLength={MAX_EMAIL}
                          value={form.email}
                          onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined as unknown as string })); }}
                          className={inputClass}
                          placeholder="jane@acmeit.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Service Area */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Phone (optional)</label>
                        <input type="tel" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+1 (555) 000‑0000" />
                      </div>
                      <div>
                        <label className={labelClass}>Service Area / State</label>
                        <input type="text" maxLength={100} value={form.serviceArea} onChange={(e) => setForm({ ...form, serviceArea: e.target.value })} className={inputClass} placeholder="e.g. Texas, Southeast US" />
                      </div>
                    </div>

                    {/* Client Industry + Endpoint Count */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Client Industry (optional)</label>
                        <input type="text" maxLength={100} value={form.clientIndustry} onChange={(e) => setForm({ ...form, clientIndustry: e.target.value })} className={inputClass} placeholder="e.g. Healthcare, Legal" />
                      </div>
                      <div>
                        <label className={labelClass}>User / Endpoint Count</label>
                        <input type="text" maxLength={50} value={form.endpointCount} onChange={(e) => setForm({ ...form, endpointCount: e.target.value })} className={inputClass} placeholder="e.g. 50 endpoints" />
                      </div>
                    </div>

                    {/* Locations */}
                    <div>
                      <label className={labelClass}>Locations</label>
                      <input type="text" maxLength={MAX_FIELD} value={form.locations} onChange={(e) => setForm({ ...form, locations: e.target.value })} className={inputClass} placeholder="e.g. 2 offices in Dallas, 1 remote" />
                    </div>

                    {/* Current Environment */}
                    <div>
                      <label className={labelClass}>Current Environment</label>
                      <textarea
                        maxLength={MAX_FIELD}
                        value={form.currentEnv}
                        onChange={(e) => setForm({ ...form, currentEnv: e.target.value })}
                        className={`${inputClass} min-h-[80px] resize-y`}
                        placeholder="Describe the client's current IT setup — hardware, software, existing security tools, etc."
                      />
                    </div>

                    {/* Client Goals */}
                    <div>
                      <label className={labelClass}>Client Goals</label>
                      <textarea
                        maxLength={MAX_FIELD}
                        value={form.clientGoals}
                        onChange={(e) => setForm({ ...form, clientGoals: e.target.value })}
                        className={`${inputClass} min-h-[80px] resize-y`}
                        placeholder="What is the client trying to achieve? e.g. improve security posture, HIPAA compliance, migrate to cloud"
                      />
                    </div>

                    {/* Timeline + Budget */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Timeline</label>
                        <input type="text" maxLength={100} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className={inputClass} placeholder="e.g. 30 days, ASAP, Q3" />
                      </div>
                      <div>
                        <label className={labelClass}>Budget (optional)</label>
                        <input type="text" maxLength={100} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass} placeholder="e.g. $5k–$10k/mo" />
                      </div>
                    </div>

                    {/* White-label + NDA */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>White‑Label Quote?</label>
                        <select value={form.whiteLabel} onChange={(e) => setForm({ ...form, whiteLabel: e.target.value })} className={inputClass}>
                          <option value="">Select…</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>NDA Required?</label>
                        <select value={form.nda} onChange={(e) => setForm({ ...form, nda: e.target.value })} className={inputClass}>
                          <option value="">Select…</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className={labelClass}>File Upload (diagram, RFP, screenshots)</label>
                      <div
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-4 text-sm text-muted-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors"
                        onClick={() => fileRef.current?.click()}
                      >
                        <Upload className="h-5 w-5 shrink-0" />
                        <span>{file ? file.name : "Click to attach a file (will be noted in email)"}</span>
                      </div>
                      <input
                        ref={fileRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xlsx,.zip"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                      <p className="mt-1 text-xs text-muted-foreground">Note: File name will be included in your email. Please attach the file when your email client opens.</p>
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      Submit Partner Request
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Thanks — our partner team will respond with clarifications or a quote within 24–48 business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default PartnerPortal;
