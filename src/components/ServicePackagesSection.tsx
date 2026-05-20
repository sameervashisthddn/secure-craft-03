import { Button } from "@/components/ui/button";
import { Briefcase, ShieldCheck, FileCheck } from "lucide-react";

const packages = [
  {
    icon: Briefcase,
    name: "Essential IT Support",
    desc: "For small businesses that need reliable day-to-day IT support, Microsoft 365 support, endpoint help, troubleshooting, and vendor coordination.",
  },
  {
    icon: ShieldCheck,
    name: "Security-First MSP",
    desc: "For businesses that need managed IT plus firewall, endpoint security, VPN/remote access control, backup readiness, monitoring, and proactive security management.",
    featured: true,
  },
  {
    icon: FileCheck,
    name: "Compliance-Ready MSP",
    desc: "For businesses in healthcare, staffing, legal, finance, SaaS, or regulated environments that need security documentation, access control, audit support, backup/DR planning, and compliance-aligned IT operations.",
  },
];

const ServicePackagesSection = () => {
  return (
    <section id="packages" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">
          Service Packages
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Choose the service tier that matches your environment. Final scope and pricing are confirmed after an assessment.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border bg-background p-6 transition-shadow hover:shadow-md ${
                p.featured ? "border-primary shadow-md" : "border-border"
              }`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a href="#contact">
                <Button variant={p.featured ? "default" : "outline"} className="w-full">
                  Request Assessment
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;
