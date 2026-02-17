import { ShieldCheck, Activity, TrendingUp, Clock, Cpu, Award } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Cybersecurity-First", desc: "Security is embedded in every solution we deliver." },
  { icon: Activity, title: "Proactive Monitoring", desc: "24/7 monitoring to prevent issues before they impact operations." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Infrastructure that grows seamlessly with your business." },
  { icon: Clock, title: "Fast, Dependable Support", desc: "Responsive support when you need it most." },
  { icon: Cpu, title: "Enterprise-Grade Tech", desc: "Fortinet, SentinelOne, Sophos, and Microsoft platforms." },
  { icon: Award, title: "Industry Best Practices", desc: "SOC-2 aligned architecture and proven methodologies." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Trusted by Businesses{" "}
            <span className="text-gradient-cyber">Across the US</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
