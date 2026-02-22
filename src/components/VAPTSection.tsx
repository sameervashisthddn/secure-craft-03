import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe, Cpu } from "lucide-react";

const vaptCards = [
  { icon: ShieldCheck, title: "Application Security Testing", desc: "Web and mobile application assessments, including business logic testing and secure code review." },
  { icon: Globe, title: "Network & Cloud Penetration Testing", desc: "Internal/external network testing, cloud configuration reviews, and exploitation of misconfigurations." },
  { icon: Cpu, title: "Connected Device Security Assessment", desc: "We identify security risks in network-connected devices such as biometric systems, medical equipment, cameras, and other embedded devices." },
];

const steps = [
  "Information gathering and scoping",
  "Planning and analysis",
  "Automated and manual vulnerability discovery",
  "Penetration testing and validation",
  "Reporting with risk-based recommendations",
  "Re-testing and final report",
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
    <section id="vapt" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">
          Vulnerability Assessment &amp; Penetration Testing (VAPT)
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-muted-foreground">
          Alerting today for a safer tomorrow. Identify weaknesses before attackers do and prioritize remediation to reduce risk across applications, networks, and cloud.
        </p>

        {/* What is VAPT */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-3 text-xl font-semibold text-foreground">What is VAPT?</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VAPT combines two complementary approaches: <strong className="text-foreground">Vulnerability Assessment</strong> to discover weaknesses across assets, and <strong className="text-foreground">Penetration Testing</strong> to safely exploit and validate real-world impact. Together they provide a comprehensive view of security posture and actionable remediation guidance.
          </p>
        </div>

        {/* Why organizations need VAPT */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Why do organizations need VAPT?</h3>
          <div className="mx-auto inline-flex flex-col gap-3">
            {whyNeeded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-3 text-left shadow-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typical VAPT Process */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Typical VAPT Process</h3>
          <div className="relative mx-auto inline-flex flex-col gap-0">
            {steps.map((s, i) => (
              <div key={i} className="relative flex items-center gap-4 py-3">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <span className="absolute left-[15px] top-[calc(50%+12px)] h-[calc(100%-12px)] w-px bg-primary/20" />
                )}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Benefits</h3>
          <div className="mx-auto inline-flex flex-col gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-3 text-left shadow-sm">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-14 text-center">
          <a href="#contact">
            <Button size="lg">Get a Free Consultation</Button>
          </a>
        </div>

        {/* Service Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {vaptCards.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <c.icon className="h-6 w-6 text-primary" />
              </span>
              <h4 className="mb-2 font-semibold text-foreground">{c.title}</h4>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VAPTSection;
