import { Monitor, Heart, DollarSign, Phone, Briefcase, Building } from "lucide-react";

const industries = [
  { icon: Monitor, name: "IT & Technology" },
  { icon: Heart, name: "Healthcare" },
  { icon: DollarSign, name: "Insurance & Finance" },
  { icon: Phone, name: "Call Centers" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building, name: "Small & Medium Business" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Industries We Serve</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Solutions for <span className="text-gradient-cyber">Every Sector</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
            >
              <ind.icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
