import { MapPin, Clock, Award, Settings } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "US-Based Support",
    text: "Local expertise with nationwide reach — real people, real time zones.",
  },
  {
    icon: Clock,
    title: "Fast Response SLAs",
    text: "Industry-leading response times so your business never skips a beat.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    text: "Our team holds top certifications from Microsoft, Cisco, and CompTIA.",
  },
  {
    icon: Settings,
    title: "Tailored IT Solutions",
    text: "No cookie-cutter plans — every solution is built around your business needs.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary md:text-4xl">
          Why Choose Us
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-muted-foreground">
          Trusted by businesses across the United States for reliable, expert IT
          support.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
