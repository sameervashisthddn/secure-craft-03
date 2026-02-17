import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-services.jpg";

const highlights = [
  "Managed IT & Cloud",
  "Security Assessments",
  "Compliance & Governance",
  "24/7 Support",
];

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
              Managed IT, Cybersecurity, and Compliance-Aligned Infrastructure for US Businesses Handling Sensitive Data
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg">Get a Free Quote</Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline">Explore Services</Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {h}
                </div>
              ))}
            </div>
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
