import { Button } from "@/components/ui/button";
import { Rocket, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Shield, label: "Security-First Infrastructure" },
  { icon: TrendingUp, label: "Scalable IT Foundation" },
  { icon: Rocket, label: "Built for Rapid Growth" },
];

const StartupTeaser = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          For Startups
        </span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Startup-Friendly IT &amp; Security Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Scalable, secure, and cost-effective IT support designed for growing startups. We help you build a strong IT foundation without enterprise overhead.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
            >
              <h.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-card-foreground">{h.label}</span>
            </div>
          ))}
        </div>

        <Link to="/startup" className="mt-8 inline-block">
          <Button size="lg" className="text-base px-8 py-6">
            Learn More →
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StartupTeaser;
