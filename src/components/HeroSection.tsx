import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-services.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary md:text-5xl lg:text-[3.25rem]">
              We Identify Your IT & Security Gaps First — Then Deliver the Right Solution
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Managed IT, Cybersecurity, and Infrastructure Support built around your actual business needs. We assess your environment, identify risks and inefficiencies, and implement reliable, security-focused solutions — without unnecessary product sales.
            </p>
            <div className="mb-4 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg">Schedule Security Assessment</Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline">Review Our Services</Button>
              </a>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Supporting businesses handling sensitive data, compliance requirements, and secure remote access environments.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={heroImg}
              alt="Professional IT services"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
