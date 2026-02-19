import { Server, ShieldCheck, Globe, ClipboardCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Server,
    title: "Managed IT",
    text: "Reliable IT support tailored for SMBs.",
    cta: "Schedule Consultation",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Compliance-first protection for HIPAA, SOC 2, PCI DSS.",
    cta: "Talk to an Expert",
  },
  {
    icon: Globe,
    title: "VAPT",
    text: "Identify vulnerabilities before attackers do.",
    cta: "Request Assessment",
  },
  {
    icon: ClipboardCheck,
    title: "Startup IT",
    text: "Scalable IT setups for growing startups.",
    cta: "Get Started",
  },
  {
    icon: Lock,
    title: "Secure Remote Access & VPN",
    text: "Controlled, secure remote access aligned with compliance requirements.",
    cta: "Learn More",
  },
];

const CoreServicesSection = () => {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">
          Our Services
        </h2>
        <p className="mb-10 max-w-lg text-muted-foreground">
          Cybersecurity Services in Texas — built for compliance and reliability.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              <a href="#contact">
                <Button variant="outline" size="sm" className="w-full">
                  {s.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
