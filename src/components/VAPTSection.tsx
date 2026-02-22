import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe, Cpu } from "lucide-react";

const vaptCards = [
  { icon: ShieldCheck, title: "Application Security Testing", desc: "Web and mobile application assessments, including business logic testing and secure code review." },
  { icon: Globe, title: "Network & Cloud Penetration Testing", desc: "Internal/external network testing, cloud configuration reviews, and exploitation of misconfigurations." },
  { icon: Cpu, title: "Connected Device Security Assessment", desc: "We identify security risks in network-connected devices such as biometric systems, medical equipment, cameras, and other embedded devices to prevent unauthorized access and network compromise." },
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
  "Protects confidential data from breaches and unauthorized access",
  "Detects and prioritizes critical vulnerabilities methodically",
  "Covers web/mobile apps, networks, and cloud environments",
  "Reduces financial and reputational risk from cyberattacks",
  "Supports compliance with HIPAA, SOC 2, PCI DSS, and more",
  "Builds client and stakeholder trust through proven security",
  "Delivers actionable insights for continuous security improvement",
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
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">
          Vulnerability Assessment & Penetration Testing (VAPT)
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
          Alerting today for a safer tomorrow. Identify weaknesses before attackers do and prioritize remediation to reduce risk across applications, networks, and cloud.
        </p>

        {/* Two-column: What is VAPT + Why needed */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-3 text-xl font-semibold text-foreground">What is VAPT?</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              VAPT combines two complementary approaches: Vulnerability Assessment to discover weaknesses across assets, and Penetration Testing to safely exploit and validate real-world impact. Together they provide a comprehensive view of security posture and actionable remediation guidance.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Why do organizations need VAPT?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {whyNeeded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Two-column: Process + Benefits */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Typical VAPT Process</h3>
            <ol className="space-y-2">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Benefits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 text-center">
          <a href="#contact">
            <Button size="lg">Get a Free Consultation</Button>
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {vaptCards.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-background p-6 text-center">
              <c.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
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