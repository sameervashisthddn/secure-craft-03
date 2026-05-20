import { Mail, ShieldCheck, Monitor, Database, Server, FileCheck } from "lucide-react";

const items = [
  { icon: Mail, title: "Microsoft 365 & Email Security Review", text: "Mailbox protection, MFA, spam/phishing controls, and tenant configuration review." },
  { icon: ShieldCheck, title: "Firewall, VPN & Remote Access Review", text: "Perimeter rules, remote access policies, and segmentation aligned with zero-trust principles." },
  { icon: Monitor, title: "Endpoint Protection & Device Security", text: "Antivirus/EDR coverage, patching, encryption, and device posture across workstations and laptops." },
  { icon: Database, title: "Backup & Disaster Recovery Readiness", text: "Backup coverage, recovery testing readiness, and resilience for critical business systems." },
  { icon: Server, title: "Network, Server & Cloud Infrastructure", text: "On-prem and cloud infrastructure review covering uptime risks, capacity, and security gaps." },
  { icon: FileCheck, title: "Compliance & Documentation Gaps", text: "Documentation, access control, and policy gap review aligned with HIPAA, SOC 2, and PCI DSS environments." },
];

const AssessmentCoversSection = () => {
  return (
    <section id="assessment-covers" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">
          Our Assessment Covers
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          A structured review of the areas that most often drive risk and downtime for U.S. small businesses.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <i.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{i.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentCoversSection;
