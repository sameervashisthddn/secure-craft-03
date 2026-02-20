import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Layers,
  Headphones,
  Users,
  TrendingUp,
  Lock,
  Wifi,
  Server,
  Globe,
  ArrowRight,
  Upload,
  ChevronRight,
  EyeOff,
  Handshake,
  Zap,
  Star,
} from "lucide-react";

// ─── Partner Requirement Form ────────────────────────────────────────────────

const MAX_TEXT = 500;
const MAX_SHORT = 120;

function PartnerForm() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    companyName: "",
    yourName: "",
    email: "",
    phone: "",
    serviceArea: "",
    clientIndustry: "",
    endpointCount: "",
    locations: "",
    currentEnvironment: "",
    clientGoals: "",
    timeline: "",
    budget: "",
    needWhiteLabel: "",
    ndaRequired: "",
  });
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName.trim()) e.companyName = "Company name is required.";
    if (!form.yourName.trim()) e.yourName = "Your name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid business email is required.";
    if (!form.serviceArea.trim()) e.serviceArea = "Service area / state is required.";
    if (!form.endpointCount.trim()) e.endpointCount = "User / endpoint count is required.";
    if (!form.locations.trim()) e.locations = "Number of locations is required.";
    if (!form.clientGoals.trim()) e.clientGoals = "Client goals are required.";
    if (!form.needWhiteLabel) e.needWhiteLabel = "Please select an option.";
    if (!form.ndaRequired) e.ndaRequired = "Please select an option.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const body = `
Partner Company: ${form.companyName.slice(0, MAX_SHORT)}
Contact Name: ${form.yourName.slice(0, MAX_SHORT)}
Email: ${form.email.slice(0, MAX_SHORT)}
Phone: ${form.phone.slice(0, MAX_SHORT)}
Service Area / State: ${form.serviceArea.slice(0, MAX_SHORT)}
Client Industry: ${form.clientIndustry.slice(0, MAX_SHORT)}
User / Endpoint Count: ${form.endpointCount.slice(0, MAX_SHORT)}
Locations: ${form.locations.slice(0, MAX_SHORT)}
Current Environment: ${form.currentEnvironment.slice(0, MAX_TEXT)}
Client Goals: ${form.clientGoals.slice(0, MAX_TEXT)}
Timeline: ${form.timeline.slice(0, MAX_SHORT)}
Budget: ${form.budget.slice(0, MAX_SHORT)}
Need White-Label Quote: ${form.needWhiteLabel}
NDA Required: ${form.ndaRequired}
Attachment: ${fileName || "None"}
    `.trim();
    window.location.href = `mailto:info@crabtreesolutions.us?subject=${encodeURIComponent(
      `[Partner Portal] Quote Request — ${form.companyName.slice(0, 60)}`
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-secondary p-10 text-center">
        <CheckCircle className="mx-auto mb-4 h-14 w-14 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-foreground">Request Received</h3>
        <p className="text-muted-foreground">
          Thanks — our partner team will respond with clarifications or a quote within 24–48 hours.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const errMsg = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;
  const label = (text: string, required = false) => (
    <label className="mb-1 block text-sm font-medium text-foreground">
      {text} {required && <span className="text-destructive">*</span>}
    </label>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("Partner Company Name", true)}
          <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Acme IT Solutions" className={field} />
          {errMsg("companyName")}
        </div>
        <div>
          {label("Your Name", true)}
          <input name="yourName" value={form.yourName} onChange={handleChange} placeholder="Jane Smith" className={field} />
          {errMsg("yourName")}
        </div>
        <div>
          {label("Business Email", true)}
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@acmeit.com" className={field} />
          {errMsg("email")}
        </div>
        <div>
          {label("Phone (optional)")}
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={field} />
        </div>
        <div>
          {label("Service Area / State", true)}
          <input name="serviceArea" value={form.serviceArea} onChange={handleChange} placeholder="Texas, Florida…" className={field} />
          {errMsg("serviceArea")}
        </div>
        <div>
          {label("Client Industry (optional)")}
          <input name="clientIndustry" value={form.clientIndustry} onChange={handleChange} placeholder="Healthcare, Legal, Finance…" className={field} />
        </div>
        <div>
          {label("User / Endpoint Count", true)}
          <input name="endpointCount" value={form.endpointCount} onChange={handleChange} placeholder="e.g. 50 users, 80 endpoints" className={field} />
          {errMsg("endpointCount")}
        </div>
        <div>
          {label("Number of Locations", true)}
          <input name="locations" value={form.locations} onChange={handleChange} placeholder="e.g. 3 offices" className={field} />
          {errMsg("locations")}
        </div>
      </div>

      <div>
        {label("Current Environment")}
        <textarea name="currentEnvironment" value={form.currentEnvironment} onChange={handleChange} rows={3} placeholder="Describe existing infrastructure, tools, vendors…" className={field} maxLength={MAX_TEXT} />
      </div>

      <div>
        {label("Client Goals", true)}
        <textarea name="clientGoals" value={form.clientGoals} onChange={handleChange} rows={3} placeholder="What does the client need to achieve?" className={field} maxLength={MAX_TEXT} />
        {errMsg("clientGoals")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("Desired Timeline")}
          <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 30 days, Q3 2025" className={field} />
        </div>
        <div>
          {label("Budget (optional)")}
          <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $5,000–$15,000" className={field} />
        </div>

        <div>
          {label("Need White-Label Quote?", true)}
          <select name="needWhiteLabel" value={form.needWhiteLabel} onChange={handleChange} className={field}>
            <option value="">Select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errMsg("needWhiteLabel")}
        </div>
        <div>
          {label("NDA Required Before Sharing?", true)}
          <select name="ndaRequired" value={form.ndaRequired} onChange={handleChange} className={field}>
            <option value="">Select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errMsg("ndaRequired")}
        </div>
      </div>

      <div>
        {label("Attach Diagrams, RFP, or Screenshots (optional)")}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 rounded-lg border border-dashed border-border bg-secondary px-4 py-3 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
        >
          <Upload className="h-4 w-4" />
          {fileName ? fileName : "Click to upload file"}
        </button>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg,.docx,.xlsx,.zip,.vsd,.vsdx"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        <p className="mt-1 text-xs text-muted-foreground">PDF, PNG, JPG, DOCX, XLSX, ZIP accepted</p>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Partner Quote Request <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const services = [
  { icon: Server, label: "Managed IT Services" },
  { icon: Shield, label: "Firewall + VPN (Fortinet / Sophos)" },
  { icon: Zap, label: "Endpoint Security (EDR / MDR)" },
  { icon: Globe, label: "Microsoft 365 Security Hardening" },
  { icon: FileText, label: "VAPT Coordination" },
  { icon: Layers, label: "Backup & Disaster Recovery" },
  { icon: Wifi, label: "Network Redesign (Wi-Fi + Switching)" },
  { icon: Lock, label: "SOC 2 Readiness Controls" },
];

const steps = [
  { n: "01", title: "Submit Requirements", body: "Share your client's technical requirements via our partner request form." },
  { n: "02", title: "We Clarify + Recommend", body: "Our engineers respond with clarifying questions and initial recommendations within hours." },
  { n: "03", title: "Receive White-Label Quote", body: "You receive a proposal-ready scope, BOM, and pricing you can present as your own." },
  { n: "04", title: "Deliver to Your Client", body: "You stay the client owner — we support execution behind the scenes if needed." },
];

const benefits = [
  { icon: Clock, title: "Fast Structured Quotes", body: "Proposal-ready scope + BOM delivered within 24–48 hours." },
  { icon: EyeOff, title: "White-Label Delivery", body: "All work appears under your brand. We stay invisible." },
  { icon: Handshake, title: "Co-Delivery Option", body: "We join calls or projects when you need boots on the ground — you still lead." },
  { icon: Users, title: "Engineering Support", body: "Expert help for discovery, design, and architecture." },
  { icon: Layers, title: "Implementation + Ongoing", body: "From kickoff to steady-state managed support." },
  { icon: TrendingUp, title: "Win Bigger Clients", body: "Pitch enterprise-grade services without hiring a single engineer." },
];

const engagements = [
  {
    icon: EyeOff,
    title: "White-Label Delivery",
    body: "You own the client, we work entirely behind the scenes. All deliverables carry your branding.",
  },
  {
    icon: Handshake,
    title: "Co-Delivery",
    body: "We join calls or projects as needed. You lead — we provide technical depth and execution.",
  },
  {
    icon: Headphones,
    title: "Back-End Engineering",
    body: "Design and architecture support only. You handle the client relationship; we handle the complexity.",
  },
];

export default function PartnerPortal() {
  return (
    <>
      <Helmet>
        <title>Partner & Vendor Portal | Crabtree Solutions Inc.</title>
        <meta
          name="description"
          content="White-label IT delivery for small MSPs and IT vendors in the USA. Submit client requirements and receive proposal-ready quotes you can present as your own."
        />
        <link rel="canonical" href="https://crabtreesolutions.us/partner" />
        <meta property="og:title" content="Partner & Vendor Portal | Crabtree Solutions Inc." />
        <meta property="og:url" content="https://crabtreesolutions.us/partner" />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-foreground pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Star className="h-3.5 w-3.5" /> Partner &amp; Vendor Portal
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Grow Your MSP With a Trusted Behind-the-Scenes Delivery Partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Share your client's requirements and get fast, white-label-ready quotes you can present
            as your own. You stay the primary provider — we help you deliver more, win more, and
            scale without hiring.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#partner-form">
              <Button size="lg" className="px-8 text-base">
                Request a Partner Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#apply">
              <Button size="lg" variant="outline" className="border-primary/50 px-8 text-base text-primary hover:bg-primary/10">
                Apply for Partner Access
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Who This Is For
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Built For */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </span>
                <h3 className="text-xl font-bold text-foreground">Built For</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Small MSPs & IT vendors (1–25 staff)",
                  "Independent IT consultants",
                  "VoIP, networking & security resellers",
                  "Break-fix shops expanding into managed services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </span>
                <h3 className="text-xl font-bold text-foreground">Not For</h3>
              </div>
              <ul className="space-y-3">
                {["End customers", "Large national MSPs"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Partners Choose Us ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Why Partners Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            You keep full control of your customers — always. We never pitch, market, or sell
            directly to your clients. We act as your silent delivery engine, helping you grow
            without competing with you.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-8 py-5">
            <EyeOff className="h-6 w-6 shrink-0 text-primary" />
            <p className="text-base font-semibold text-foreground">
              We're your silent delivery arm — not a competitor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner Benefits ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Partner Benefits
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Everything you need to win bigger deals and deliver with confidence.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-base font-semibold text-primary">
            We grow only when our partners grow.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            From requirement to quote in 4 simple steps.
          </p>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ n, title, body }) => (
              <div
                key={n}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <span className="mb-4 block text-4xl font-black text-primary/20">{n}</span>
                <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-4 text-sm font-semibold text-foreground sm:mx-auto sm:w-fit">
            <Clock className="h-4 w-4 text-primary" />
            Typical turnaround: 24–48 hours
          </div>
        </div>
      </section>

      {/* ── Partner Protection ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Partner Protection — No-Compete Policy
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Your client relationships are sacred. Here's our commitment.
          </p>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "Clients remain 100% yours — always.",
              "No contact with your end client without written approval.",
              "NDA available before you share any client data.",
              "No poaching or cross-selling — ever.",
              "All work appears under your brand unless you prefer co-delivery.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 px-8 py-5 text-center">
            <p className="text-base font-semibold text-foreground">
              We're your silent delivery arm — not a competitor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Services You Can Request Quotes For
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            White-label quotes available across our full service portfolio.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Form ── */}
      <section id="partner-form" className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
              Submit a Partner Requirement
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Fill in your client's details and we'll come back with a white-label-ready quote or
              clarifying questions within 24–48 hours.
            </p>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Engagement Options ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Engagement Options
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Choose the level of involvement that fits your client delivery model.
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {engagements.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner-Only Access ── */}
      <section id="apply" className="section-padding bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Lock className="h-3.5 w-3.5" /> Partner-Only Access
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Scale Your MSP?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            This portal is exclusively available to approved partners. Apply below and our team will
            review your request. Approved partners gain access to priority quoting, white-label
            delivery, and dedicated engineering support.
          </p>
          <div className="mt-10">
            <a href="#partner-form">
              <Button size="lg" className="px-10 text-base">
                Apply for Partner Access <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
