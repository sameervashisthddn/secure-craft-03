import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Secure and Stabilize Your IT Infrastructure
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Schedule an assessment to identify infrastructure risks, security gaps, and improvement opportunities.
        </p>
        <a href="#contact">
          <Button size="lg">
            Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
