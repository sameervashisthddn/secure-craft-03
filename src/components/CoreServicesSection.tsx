import { useState } from "react";
import { Server, ShieldCheck, Globe, ClipboardCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Lock,
    title: "Managed IT Services",
    bullet: "24/7 monitoring & proactive support",
    text: "24/7 monitoring, helpdesk, and proactive infrastructure management — so your team stays productive and your systems stay running.",
    details:
      "Our Managed IT Services include round-the-clock network monitoring, rapid-response helpdesk support, patch management, asset lifecycle tracking, and strategic IT planning. We act as your in-house IT department — without the overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    bullet: "Endpoint protection & threat detection",
    text: "Endpoint protection, threat detection, and compliance alignment for HIPAA, SOC 2, and PCI DSS regulated environments.",
    details:
      "We deploy multi-layered security: EDR/XDR solutions, SIEM integration, vulnerability scanning, employee awareness training, and compliance gap analysis. Stay ahead of threats while meeting regulatory requirements.",
  },
  {
    icon: Globe,
    title: "Vulnerability Assessment & Pen Testing",
    bullet: "Uncover gaps before attackers do",
    text: "Comprehensive security assessments to uncover gaps in your network, applications, and infrastructure before attackers do.",
    details:
      "Our VAPT services include external/internal network penetration testing, web application security testing, social engineering simulations, and detailed remediation roadmaps with risk-prioritized findings.",
  },
  {
    icon: ClipboardCheck,
    title: "Startup IT & Security",
    bullet: "Scalable infrastructure for growth",
    text: "Right-sized IT infrastructure and security for early-stage companies — scalable, cost-effective, and built for growth.",
    details:
      "We help startups establish secure foundations: cloud architecture design, identity & access management, compliance readiness (SOC 2 Type I/II), and scalable IT processes that grow with your team.",
  },
  {
    icon: Server,
    title: "Enterprise VPN & Secure Remote Access",
    bullet: "Zero-trust remote connectivity",
    text: "Site-to-site and remote access VPN solutions with zero-trust policies, MFA enforcement, and compliance-ready configurations.",
    details:
      "Our VPN solutions support site-to-site connectivity, remote workforce access with MFA, split-tunnel configurations, and full logging for compliance audits. Built on Cisco, Fortinet, and Sophos platforms.",
  },
];

const CoreServicesSection = () => {
  const [open, setOpen] = useState<number | null>(null);

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
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mb-1 text-sm font-medium text-primary/80">
                ✓ {s.bullet}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                onClick={() => setOpen(i)}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialogs */}
      {services.map((s, i) => (
        <Dialog key={s.title} open={open === i} onOpenChange={(v) => !v && setOpen(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle>{s.title}</DialogTitle>
              <DialogDescription className="pt-2 leading-relaxed">
                {s.details}
              </DialogDescription>
            </DialogHeader>
            <a href="#contact" onClick={() => setOpen(null)}>
              <Button className="mt-2 w-full">Schedule Consultation</Button>
            </a>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default CoreServicesSection;
