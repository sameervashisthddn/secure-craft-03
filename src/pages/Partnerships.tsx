import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Handshake,
  Users,
  Lock,
  Server,
  ArrowRight,
  Star,
  Award,
  FileText,
  Globe,
  Zap,
  EyeOff,
  Layers,
} from "lucide-react";
import eliteRcmLogo from "@/assets/partners/elite-rcm-logo.png";
import fortinetLogo from "@/assets/vendors/fortinet.png";
import sophosLogo from "@/assets/vendors/sophos.png";
import sentineloneLogo from "@/assets/vendors/sentinelone.png";
import microsoftLogo from "@/assets/vendors/microsoft.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const techPartners = [
  {
    name: "SentinelOne",
    logo: sentineloneLogo,
    badge: "Authorized Partner",
    role: "Endpoint Security and Threat Protection Platform",
    description:
      "Crabtree Solutions Inc is an Authorized SentinelOne Partner, delivering advanced endpoint protection and threat defense solutions.",
    logoClass: "h-28 max-w-[160px]",
  },
  {
    name: "Sophos",
    logo: sophosLogo,
    badge: null,
    role: "Network and Endpoint Security Solutions",
    description:
      "Supporting firewall, endpoint protection, and secure remote access deployments.",
    logoClass: "h-28 max-w-[160px]",
  },
  {
    name: "Fortinet",
    logo: fortinetLogo,
    badge: null,
    role: "Enterprise Network Security Platform",
    description:
      "Providing firewall, VPN, and secure network infrastructure solutions.",
    logoClass: "h-10 max-w-[140px]",
  },
  {
    name: "Microsoft",
    logo: microsoftLogo,
    badge: null,
    role: "Cloud and Productivity Infrastructure",
    description:
      "Supporting Microsoft 365 environments, endpoint management, and secure cloud infrastructure.",
    logoClass: "h-10 max-w-[140px]",
  },
];

const strategicBenefits = [
  { icon: Zap, text: "Fast partner quotations and technical solution design" },
  { icon: EyeOff, text: "White-label delivery support" },
  { icon: Server, text: "Engineering expertise for infrastructure and security projects" },
  { icon: Layers, text: "Implementation and ongoing technical support" },
  { icon: Shield, text: "Access to enterprise-grade security and infrastructure solutions" },
  { icon: Lock, text: "Confidential and partner-first engagement model" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Partnerships() {
  return (
    <>
      <Helmet>
        <title>Partnerships | Crabtree Solutions Inc.</title>
        <meta
          name="description"
          content="Crabtree Solutions Inc collaborates with strategic partners, technology providers, and IT service organizations across the United States to deliver secure, reliable, and scalable IT infrastructure solutions."
        />
        <link rel="canonical" href="https://crabtreesolutions.us/partnerships" />
        <meta property="og:title" content="Partnerships | Crabtree Solutions Inc." />
        <meta property="og:url" content="https://crabtreesolutions.us/partnerships" />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-background border-b border-border pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Handshake className="h-3.5 w-3.5" /> Strategic Partnerships
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Partnerships Built on Trust, Capability, and Mutual Growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Crabtree Solutions Inc collaborates with strategic partners, technology providers, and IT
            service organizations across the United States to deliver secure, reliable, and scalable
            IT infrastructure solutions. Our partnerships are built on professionalism, trust, and
            long-term mutual success.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#channel-partner">
            <Button size="lg" className="px-8 text-base">
                Become a Strategic Partner <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="/partner#partner-form">
              <Button size="lg" variant="outline" className="border-primary/50 px-8 text-base text-primary hover:bg-primary/10">
                Request Partner Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Strategic Partnership Highlight ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-2 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Strategic Partnership Highlight
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Strategic Partnership Highlight
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Crabtree Solutions Inc maintains strategic partnerships with established organizations
              to support secure IT infrastructure, strengthen operational reliability, and enable
              long-term mutual growth.
            </p>

            {/* Partner Card */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {/* Logo + Badge Header */}
              <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-40 w-80 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-6 shadow-sm">
                  <img
                    src={eliteRcmLogo}
                    alt="Elite Revenue Cycle Management System"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    <Award className="h-3 w-3" /> Strategic Partner — USA
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Elite Revenue Cycle Management System
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    Healthcare Revenue Cycle Management Organization — USA
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Crabtree Solutions Inc maintains a strategic partnership with Elite Revenue Cycle
                  Management System, supporting their IT infrastructure and collaborating on aligned
                  technical initiatives.
                </p>
                <p>
                  This relationship reflects a shared commitment to operational reliability,
                  security, and professional collaboration. Through this partnership, both
                  organizations benefit from strengthened infrastructure, coordinated technical
                  expertise, and long-term operational stability.
                </p>
                <p className="font-medium text-foreground">
                  This partnership reflects trust, professional collaboration, and long-term mutual growth.
                </p>
              </div>

              {/* Trust signal footer */}
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                <Shield className="h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm font-semibold text-primary">
                  Trusted Strategic Partner supporting real-world production infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Partners ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Technology Partners
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Technology Partners
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Crabtree Solutions Inc works with industry-leading technology platforms to deliver
            secure, scalable, and enterprise-grade IT infrastructure and security solutions.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techPartners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-28 items-center justify-center rounded-xl border border-border bg-background p-4">
                  <img src={p.logo} alt={p.name} className={`${p.logoClass} object-contain`} />
                </div>
                {p.badge && (
                  <span className="mb-2 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    ✓ {p.badge}
                  </span>
                )}
                <h3 className="mb-1 text-base font-bold text-foreground">{p.name}</h3>
                <p className="mb-2 text-xs font-medium text-muted-foreground">{p.role}</p>
                <p className="mt-auto text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Partner Program ── */}
      <section id="channel-partner" className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Strategic Partner Program
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Strategic Partner Program
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Crabtree Solutions Inc collaborates with IT service providers, MSPs, consultants, and
              technology vendors across the United States to support service delivery, provide
              technical expertise, and help partners expand their service capabilities.
            </p>
            <p className="mb-10 text-lg text-muted-foreground">
              Our strategic partner program enables organizations to leverage our engineering expertise
              while maintaining full ownership of their client relationships.
            </p>

            <h3 className="mb-6 text-xl font-bold text-foreground">Strategic Partner Benefits</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {strategicBenefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <b.icon className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-sm text-foreground">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="/partner#partner-form">
                <Button size="lg" className="px-8 text-base">
                  Apply for Strategic Partner Access <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Protection Commitment ── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Lock className="h-3.5 w-3.5" /> Partner Protection Commitment
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Partner Protection Commitment
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Crabtree Solutions Inc operates with strict partner protection standards. We respect
              partner ownership and maintain full confidentiality of partner and client information.
            </p>
            <p className="mb-4 text-lg font-semibold text-foreground">
              We do not engage directly with partner clients without explicit partner authorization.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              Our partner-first approach ensures that partners maintain complete control over their
              client relationships while benefiting from our infrastructure expertise and technical
              support.
            </p>
            <p className="text-lg text-muted-foreground">
              This commitment reflects the same professional standards applied across our strategic
              partnerships.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { icon: EyeOff, label: "Full Confidentiality" },
              { icon: Lock, label: "No Direct Client Contact" },
              { icon: Shield, label: "Partner-First Standards" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <b.icon className="h-7 w-7 text-primary" />
                <p className="text-sm font-semibold text-foreground">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Quote Desk ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Partner Quote Desk
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Partner Quote Desk
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Approved partners can submit infrastructure, security, or managed IT requirements to
              receive fast, structured quotations and technical recommendations.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              Our engineering team reviews partner submissions and provides professional solution
              recommendations aligned with client requirements.
            </p>
            <p className="mb-10 text-lg text-muted-foreground">
              This enables partners to deliver reliable, secure, and scalable solutions to their
              clients.
            </p>
            <a href="/partner#partner-form">
              <Button size="lg" className="px-8 text-base">
                Request Partner Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Closing Trust Statement ── */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center shadow-sm">
            <Globe className="mx-auto mb-5 h-10 w-10 text-primary" />
            <p className="text-lg leading-relaxed text-foreground">
              Crabtree Solutions Inc is committed to building long-term strategic partnerships based
              on trust, professionalism, and operational excellence.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our partnerships reflect real-world collaboration, trusted infrastructure support, and
              shared commitment to delivering reliable IT solutions across the United States.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
