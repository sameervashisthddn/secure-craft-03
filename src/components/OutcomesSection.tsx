const outcomes = [
  "Improved infrastructure reliability",
  "Reduced security risks",
  "Better visibility into system access and activity",
  "More efficient and cost-effective IT infrastructure",
  "Improved compliance readiness",
];

const OutcomesSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
          Outcomes Clients Achieve
        </h2>
        <p className="mb-6 text-base text-muted-foreground">Our clients gain:</p>
        <ul className="max-w-2xl space-y-3">
          {outcomes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OutcomesSection;
