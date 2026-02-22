import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe, Cpu, CheckCircle2 } from "lucide-react";

const vaptCards = [
  { icon: ShieldCheck, title: "Application Security Testing", desc: "Web and mobile application assessments, including business logic testing and secure code review." },
  { icon: Globe, title: "Network & Cloud Penetration Testing", desc: "Internal/external network testing, cloud configuration reviews, and exploitation of misconfigurations." },
  { icon: Cpu, title: "Connected Device Security Assessment", desc: "We identify security risks in network-connected devices such as biometric systems, medical equipment, cameras, and other embedded devices." },
];

const steps = [
  "Information gathering & scoping",
  "Planning & analysis",
  "Vulnerability discovery",
  "Penetration testing",
  "Risk-based reporting",
  "Re-testing & final report",
];

const benefits = [
  "Protect confidential data from unauthorized access and breaches",
  "Methodical approach to detect and prioritize critical vulnerabilities",
  "Comprehensive analysis across web/mobile apps, networks, and cloud",
  "Reduces financial and reputational risk from cyberattacks",
  "Assists in achieving and maintaining compliance requirements",
];

const whyNeeded = [
  "Vulnerabilities exist across all environments: applications, network devices, and cloud infrastructure.",
  "SMBs are frequently targeted; proactive testing reduces financial and reputational risk.",
  "Supports compliance initiatives (e.g., HIPAA, SOC 2, PCI DSS, ISO 27001) with evidence-based reporting.",
];

const VAPTSection = () => {
  return (
    <section id="vapt" className="relative overflow-hidden bg-[hsl(231,66%,12%)] py-20 text-white">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E\")" }} />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Vulnerability Assessment &amp; Penetration Testing
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          Identify weaknesses before attackers do and prioritize remediation to reduce risk across applications, networks, and cloud.
        </p>

        {/* What is VAPT — highlighted box */}
        <div className="mx-auto mb-16 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <h3 className="mb-3 text-lg font-semibold">What is VAPT?</h3>
          <p className="text-sm leading-relaxed text-white/70">
            VAPT combines <span className="font-medium text-white">Vulnerability Assessment</span> to discover weaknesses across assets, and <span className="font-medium text-white">Penetration Testing</span> to safely exploit and validate real-world impact — providing a comprehensive view of your security posture with actionable remediation guidance.
          </p>
        </div>

        {/* Why needed */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h3 className="mb-5 text-lg font-semibold">Why Organizations Need VAPT</h3>
          <div className="space-y-3">
            {whyNeeded.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-left text-sm text-white/70">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Process — horizontal stepper */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h3 className="mb-8 text-lg font-semibold">Our Process</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {i + 1}
                </span>
                <span className="text-xs leading-snug text-white/70">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h3 className="mb-5 text-lg font-semibold">Key Benefits</h3>
          <div className="space-y-2.5">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 text-left text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 text-center">
          <a href="#contact">
            <Button size="lg" className="shadow-lg shadow-primary/30">Get a Free Consultation</Button>
          </a>
        </div>

        {/* Service Cards */}
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {vaptCards.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <c.icon className="h-6 w-6 text-primary" />
              </span>
              <h4 className="mb-2 text-sm font-semibold">{c.title}</h4>
              <p className="text-xs leading-relaxed text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VAPTSection;
