import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Stop Reacting to IT Problems — Start Preventing Them
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Book a free infrastructure and security assessment. We'll identify
          vulnerabilities, compliance gaps, and cost-saving opportunities — with
          zero obligation.
        </p>
        <a href="#contact">
          <Button size="lg" className="gap-2">
            Book Free Assessment <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
