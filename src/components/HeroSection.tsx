import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cybersecurity shield" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-dark" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary animate-fade-in-up">
            <Shield className="h-4 w-4" />
            Managed IT & Cybersecurity
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Secure, Reliable &{" "}
            <span className="text-gradient-cyber">Scalable</span>{" "}
            IT Solutions
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Crabtree Solutions Inc. helps businesses design, secure, and manage their IT infrastructure with enterprise-grade cybersecurity and proactive support.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact">
              <Button size="lg" className="bg-gradient-cyber text-primary-foreground font-semibold shadow-glow hover:opacity-90 px-8">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8">
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
