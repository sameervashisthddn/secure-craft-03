import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Ready to Secure Your Business?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Schedule your free consultation today. We'll review your IT
          infrastructure and identify risks, inefficiencies, and improvement
          opportunities.
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
