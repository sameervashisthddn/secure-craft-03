import { Server, ShieldCheck, Globe, ClipboardCheck, Lock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    text: "24/7 monitoring, helpdesk, and proactive infrastructure management — so your team stays productive and your systems stay running.",
    cta: "Schedule Consultation",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    text: "Endpoint protection, threat detection, and compliance alignment for HIPAA, SOC 2, and PCI DSS regulated environments.",
    cta: "Talk to an Expert",
  },
  {
    icon: Globe,
    title: "Vulnerability Assessment & Pen Testing",
    text: "Comprehensive security assessments to uncover gaps in your network, applications, and infrastructure before attackers do.",
    cta: "Request Assessment",
  },
  {
    icon: ClipboardCheck,
    title: "Startup IT & Security",
    text: "Right-sized IT infrastructure and security for early-stage companies — scalable, cost-effective, and built for growth.",
    cta: "Get Started",
  },
  {
    icon: Lock,
    title: "Enterprise VPN & Secure Remote Access",
    text: "Site-to-site and remote access VPN solutions with zero-trust policies, MFA enforcement, and compliance-ready configurations.",
    cta: "Learn More",
  },
  {
    icon: Flame,
    title: "Firewall & Network Security",
    text: "Next-gen firewall deployment, network segmentation, and real-time intrusion detection to protect your perimeter and internal traffic.",
    cta: "Secure Your Network",
  },
];

const CoreServicesSection = () => {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary md:text-4xl">
          Managed IT & Cybersecurity Services
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-muted-foreground">
          End-to-end IT management and security solutions — built for compliance, reliability, and business continuity.
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
