import { TrendingDown, ShieldCheck, Eye, DollarSign, ClipboardCheck, Headphones } from "lucide-react";

const outcomes = [
  { icon: TrendingDown, text: "Reduced downtime with proactive monitoring and managed IT support" },
  { icon: ShieldCheck, text: "Strengthened security posture through endpoint protection and firewall hardening" },
  { icon: Eye, text: "Full visibility into network activity, user access, and system health" },
  { icon: DollarSign, text: "Lower IT costs through right-sized infrastructure and vendor optimization" },
  { icon: ClipboardCheck, text: "Audit-ready compliance for HIPAA, SOC 2, and PCI DSS requirements" },
  { icon: Headphones, text: "Faster issue resolution with dedicated IT help desk and 24/7 support escalation" },
];

const OutcomesSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
          What Our Managed IT Clients Achieve
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Measurable improvements our clients see after partnering with us:
        </p>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
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

export default OutcomesSection;
