import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe, Cpu, AlertTriangle, Target, FileCheck, Search, ClipboardList, RefreshCw } from "lucide-react";

const vaptCards = [
  { icon: ShieldCheck, title: "Application Security Testing", desc: "Web and mobile application assessments, including business logic testing and secure code review." },
  { icon: Globe, title: "Network & Cloud Penetration Testing", desc: "Internal/external network testing, cloud configuration reviews, and exploitation of misconfigurations." },
  { icon: Cpu, title: "Connected Device Security Assessment", desc: "We identify security risks in network-connected devices such as biometric systems, medical equipment, cameras, and other embedded devices." },
];

const steps = [
  { icon: Search, label: "Information gathering and scoping" },
  { icon: ClipboardList, label: "Planning and analysis" },
  { icon: Target, label: "Automated and manual vulnerability discovery" },
  { icon: AlertTriangle, label: "Penetration testing and validation" },
  { icon: FileCheck, label: "Reporting with risk-based recommendations" },
  { icon: RefreshCw, label: "Re-testing and final report" },
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

        {/* Two-column: What is VAPT + Why needed */}
        <div className="mx-auto mb-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-foreground">What is VAPT?</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              VAPT combines two complementary approaches: <strong className="text-foreground">Vulnerability Assessment</strong> to discover weaknesses across assets, and <strong className="text-foreground">Penetration Testing</strong> to safely exploit and validate real-world impact. Together they provide a comprehensive view of security posture and actionable remediation guidance.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Why do organizations need VAPT?</h3>
            <ul className="space-y-2.5">
              {whyNeeded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VAPT Process — horizontal steps */}
        <div className="mx-auto mb-14 max-w-5xl">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Typical VAPT Process</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mb-14 max-w-4xl">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Benefits</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </span>
                <p className="text-sm text-foreground">{b}</p>
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
        <div className="grid gap-6 sm:grid-cols-3">
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
