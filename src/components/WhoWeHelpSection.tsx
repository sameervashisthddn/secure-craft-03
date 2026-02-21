import { Shield, Lock, Server, FileCheck, Users, Building2 } from "lucide-react";

const items = [
  { icon: Shield, text: "Handle sensitive data requiring strict confidentiality and protection" },
  { icon: Lock, text: "Require secure remote access for distributed teams and locations" },
  { icon: Server, text: "Need infrastructure stability, uptime, and reliability for daily operations" },
  { icon: FileCheck, text: "Require compliance-aligned IT infrastructure (HIPAA, SOC 2, PCI DSS)" },
  { icon: Users, text: "Need scalable IT support as their teams and client base grow" },
  { icon: Building2, text: "Operate across multiple locations requiring unified IT management" },
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
          Who We Help
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          We support businesses across the United States that rely on secure, stable, and compliant IT infrastructure to operate and grow.
        </p>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-4 w-4 text-primary" />
              </span>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;