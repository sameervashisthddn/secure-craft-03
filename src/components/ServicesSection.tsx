import { Shield, AlertTriangle, Search, Cloud, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Managed Detection & Response (MDR)",
    items: ["24/7 threat hunting and response", "Expert-led triage and remediation", "Coverage across endpoint, network, cloud, and email"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    items: ["Rapid containment and recovery", "Forensics and root-cause analysis", "Guided remediation and reporting"],
  },
  {
    icon: Search,
    title: "Managed Risk / Vulnerability Management",
    items: ["Identify critical vulnerabilities", "Attack surface reduction", "Continuous monitoring and prioritization"],
  },
  {
    icon: Cloud,
    title: "Cloud Security & CSPM",
    items: ["Posture management and compliance", "Misconfiguration and risk detection", "Governance best practices"],
  },
  {
    icon: Users,
    title: "Security Awareness & Phishing Simulation",
    items: ["Phishing campaigns and training", "User risk scoring", "Progress tracking and reporting"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    items: ["Solution design and deployment", "Migrations and modernization", "Documentation and handover"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Align your security program with MDR, Incident Response, CSPM, and awareness training — built for healthcare, legal, and SMB compliance requirements.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
              <s.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Request assessment →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
