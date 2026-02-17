import { Server, ShieldCheck, Globe, ClipboardCheck, Lock } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT & Infrastructure — Built for Security, Stability, and Reliability",
    text: "Ongoing management of servers, endpoints, networks, and cloud infrastructure to ensure stability and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity and Endpoint Protection",
    text: "Protect systems from unauthorized access, malware, and security threats using enterprise-grade security tools and monitoring.",
  },
  {
    icon: Globe,
    title: "Firewall and Network Security",
    text: "Secure network infrastructure, remote access systems, and firewall configurations to prevent unauthorized access.",
  },
  {
    icon: ClipboardCheck,
    title: "Infrastructure Audit and Optimization",
    text: "Assess your IT environment to identify risks, inefficiencies, and unnecessary infrastructure costs.",
  },
  {
    icon: Lock,
    title: "Secure Remote Access and VPN Management",
    text: "Implement controlled, secure remote access solutions aligned with security and compliance requirements.",
  },
];

const CoreServicesSection = () => {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-3xl font-bold text-primary md:text-4xl">
          Core Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
