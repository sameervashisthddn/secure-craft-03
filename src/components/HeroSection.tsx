import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-services.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 section-padding">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Shield className="h-3.5 w-3.5" />
              Assessment-First IT & Security
            </span>

            {/* Short tagline above the fold */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/70">
              Diagnose · Secure · Optimize
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              We Identify Your IT & Security Risks First —{" "}
              <span className="text-primary">Then Deliver the Right Solution</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Managed IT, Cybersecurity, and Infrastructure Support built around your actual business needs — without unnecessary product sales.
            </p>

            {/* Prominent CTAs */}
            <div className="mb-5 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg" className="shadow-lg shadow-primary/25 gap-2">
                  Schedule Security Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get a Free Quote
                </Button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                HIPAA · SOC 2 · PCI DSS Aligned
              </span>
              <span>Trusted by Healthcare, Legal & SMBs</span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={heroImg}
              alt="Enterprise IT security assessment and managed services"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-primary/10 ring-1 ring-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
