import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Crabtree Solutions helped us achieve HIPAA compliance seamlessly. Their assessment-first approach gave us confidence from day one.",
    name: "Dr. Sarah Mitchell",
    company: "Greenfield Medical Group",
  },
  {
    quote:
      "Their proactive IT management reduced our downtime by 80%. We finally have an IT partner that understands our business.",
    name: "James Rivera",
    company: "Summit Staffing Co.",
  },
  {
    quote:
      "The cybersecurity audit uncovered gaps we didn't know existed. Their team fixed everything quickly and professionally.",
    name: "Linda Chen",
    company: "Apex Legal Advisors",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary md:text-4xl">
          Trusted by IT Leaders Across Industries
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-muted-foreground">
          From healthcare to legal to staffing — hear how our managed IT and
          cybersecurity services deliver real results.
        </p>

        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-background p-8 text-center shadow-sm sm:p-10">
            <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
            <div
              key={current}
              className="animate-fade-in"
            >
              <blockquote className="mb-6 text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.company}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
