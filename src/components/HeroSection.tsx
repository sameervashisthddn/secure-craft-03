import { Button } from "@/components/ui/button";
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
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Assessment-First IT & Security
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              We Identify Your IT & Security Risks First —{" "}
              <span className="text-primary">Then Deliver the Right Solution</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Managed IT, Cybersecurity, and Infrastructure Support built around your actual business needs. We assess your environment, identify risks and inefficiencies, and implement reliable, security-focused solutions — without unnecessary product sales.
            </p>
            <div className="mb-4 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg" className="shadow-lg shadow-primary/25">Schedule Security Assessment</Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline">Review Our Services</Button>
              </a>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Trusted by businesses handling sensitive data, compliance requirements, and secure remote access environments.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={heroImg}
              alt="Professional IT services"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-primary/10 ring-1 ring-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
