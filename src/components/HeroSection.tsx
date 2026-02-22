import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(231,66%,20%)] via-[hsl(231,66%,30%)] to-[hsl(231,66%,40%)] section-padding">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Pulsing shield */}
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg shadow-primary/20">
            <Shield className="h-10 w-10 text-white animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
            Assessment-First IT & Security
          </span>

          <h1 className="mb-6 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Secure Your Business Future
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70">
            We assess your infrastructure first, then deliver secure, reliable,
            and cost-effective IT solutions tailored to your business.
          </p>

          <a href="#contact">
            <Button size="lg" className="gap-2 bg-white text-[hsl(231,66%,30%)] hover:bg-white/90 text-base px-8 py-6 font-bold shadow-xl">
              Get a Free Assessment
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              HIPAA · SOC 2 · PCI DSS Aligned
            </span>
            <span>Serving businesses across the United States</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
