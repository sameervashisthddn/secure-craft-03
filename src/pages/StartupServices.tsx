import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Server,
  Monitor,
  Wifi,
  ClipboardCheck,
  FileCheck,
  Headphones,
  Rocket,
  DollarSign,
  TrendingUp,
  Lock,
  Settings,
} from "lucide-react";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Assessment-First Approach",
    desc: "We evaluate your current setup and identify what is truly required, avoiding unnecessary tools and expenses.",
  },
  {
    icon: DollarSign,
    title: "Cost-Optimized Infrastructure",
    desc: "We help startups implement secure and reliable IT solutions that align with their budget and growth stage.",
  },
  {
    icon: TrendingUp,
    title: "Scalable IT Foundation",
    desc: "We design infrastructure that can grow seamlessly as your team and operations expand.",
  },
  {
    icon: Lock,
    title: "Security-Focused from Day One",
    desc: "We help startups implement essential security controls early to prevent future risks and compliance challenges.",
  },
  {
    icon: Settings,
    title: "Flexible and Startup-Friendly Support",
    desc: "We provide ongoing support and management that adapts as your business evolves.",
  },
];

const services = [
  {
    icon: Server,
    title: "IT Infrastructure Setup and Management",
    desc: "We help startups design and manage secure and reliable IT infrastructure, whether cloud-based or hybrid.",
    items: [
      "Microsoft 365 setup and management",
      "Cloud infrastructure setup (AWS, Azure, etc.)",
      "Endpoint configuration and management",
      "Secure user access and permissions",
    ],
  },
  {
    icon: Shield,
    title: "Endpoint Security and Device Protection",
    desc: "We secure startup laptops and endpoints to prevent unauthorized access, malware, and data compromise.",
    items: [
      "Endpoint protection deployment (SentinelOne, Sophos, etc.)",
      "Device security configuration",
      "Patch and update management",
      "Access control enforcement",
    ],
  },
  {
    icon: Wifi,
    title: "Secure Remote Work Enablement",
    desc: "We implement secure access solutions for distributed startup teams.",
    items: [
      "Secure VPN and remote access setup",
      "Access control and authentication policies",
      "Remote access monitoring and management",
    ],
  },
  {
    icon: Monitor,
    title: "Infrastructure Audit and Cost Optimization",
    desc: "We review your current IT environment to identify inefficiencies, risks, and unnecessary spending.",
    items: [
      "Infrastructure assessment",
      "Security gap identification",
      "Cost optimization recommendations",
      "IT planning aligned with business growth",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance-Ready Infrastructure Preparation",
    desc: "For startups planning SOC 2, HIPAA, or other compliance certifications, we help prepare your IT infrastructure.",
    items: [
      "Access control implementation",
      "Endpoint security deployment",
      "Infrastructure hardening",
      "Logging and monitoring readiness",
    ],
  },
  {
    icon: Headphones,
    title: "Ongoing IT Management and Support",
    desc: "We provide continuous management and support to ensure stability and security.",
    items: [
      "Infrastructure monitoring",
      "Endpoint and server management",
      "Security monitoring and maintenance",
      "Ongoing technical support",
    ],
  },
];

const StartupServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 section-padding">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            For Startups
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Avoid Costly IT Mistakes — Implement the Right Infrastructure from Day One
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We assess your current needs and implement secure, reliable, and cost-effective IT solutions aligned with your startup's growth stage — ensuring you invest only where it delivers real value.
          </p>
          <a href="#contact-startup" className="mt-8 inline-block">
            <Button size="lg" className="text-base px-8 py-6">
              Schedule Startup IT Assessment
            </Button>
          </a>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            Startup-friendly, scalable IT and security designed for growing teams.
          </p>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Startups need reliable and secure IT infrastructure, but building an in-house IT and security team early on can be expensive and inefficient.{" "}
              <strong className="text-foreground">Crabtree Solutions Inc.</strong> provides startups with practical, scalable, and cost-effective IT and cybersecurity services designed to support rapid growth while maintaining security and operational stability.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We begin with a structured assessment of your current environment and business requirements. Based on this, we recommend and implement solutions that provide the right balance of security, reliability, and cost efficiency — without unnecessary enterprise overhead.
            </p>
            <p className="mt-6 text-base font-semibold text-foreground">
              Our goal is to help startups build a strong IT foundation that supports long-term growth.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Startups Choose Us */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Why Startups Choose Crabtree Solutions Inc.
            </h2>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What We Provide */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              What We Provide for Startups
            </h2>
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{s.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Built to Support Growth */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <Rocket className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Built to Support Startup Growth
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We understand startup environments require flexibility, cost efficiency, and rapid scalability. Our approach ensures your IT infrastructure supports your business growth without unnecessary complexity or expense.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We help startups focus on building their product and business, while we ensure their IT environment remains secure, reliable, and scalable.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section id="contact-startup" className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Schedule a Startup IT Assessment
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We'll review your current setup and provide practical recommendations to improve security, reliability, and efficiency.
            </p>
            <a href="/#contact">
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 text-base px-8 py-6"
              >
                Schedule Consultation
              </Button>
            </a>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default StartupServices;
