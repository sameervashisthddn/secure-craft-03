const steps = [
  { num: "01", title: "Understand", desc: "Assess your current infrastructure, requirements, and business goals." },
  { num: "02", title: "Identify", desc: "Pinpoint risks, vulnerabilities, and areas for improvement." },
  { num: "03", title: "Design", desc: "Architect secure, efficient, and scalable solutions tailored to you." },
  { num: "04", title: "Implement", desc: "Deploy and configure infrastructure with minimal disruption." },
  { num: "05", title: "Support", desc: "Monitor, maintain, and continuously improve your environment." },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Our Approach</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            A Proven <span className="text-gradient-cyber">Process</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 h-full w-px bg-border" />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-cyber font-display text-sm font-bold text-primary-foreground">
                {step.num}
              </div>
              <div className="pt-1">
                <h3 className="mb-1 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
