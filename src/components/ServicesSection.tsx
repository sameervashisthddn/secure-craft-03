import { Server, ShieldCheck, Globe, Network, Headset, Lock } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    description: "End-to-end IT management including server installation, network design, infrastructure monitoring, and remote/on-site support.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    description: "Enterprise-grade protection with firewall management, endpoint security, threat monitoring, and SOC-2 aligned architecture.",
  },
  {
    icon: Lock,
    title: "Secure Remote Access",
    description: "Dedicated VPN infrastructure, secure access to internal systems, and controlled connectivity for distributed global teams.",
  },
  {
    icon: Network,
    title: "Infrastructure & Network",
    description: "Active Directory, network segmentation, hybrid cloud integration, performance optimization, and system hardening.",
  },
  {
    icon: Headset,
    title: "IT Support & Outsourcing",
    description: "Dedicated IT engineers for day-to-day operations, user support, preventive maintenance, and continuous monitoring.",
  },
  {
    icon: Globe,
    title: "IT Consulting",
    description: "Strategic IT planning, infrastructure assessment, risk identification, and roadmap development aligned with business goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Comprehensive IT &{" "}
            <span className="text-gradient-cyber">Security</span> Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border/50 bg-gradient-card p-8 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
