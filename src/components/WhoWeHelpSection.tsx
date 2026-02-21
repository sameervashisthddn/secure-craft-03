const items = [
  "Handle sensitive data",
  "Require secure remote access",
  "Need infrastructure stability and reliability",
  "Require compliance-aligned IT infrastructure",
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-primary md:text-4xl">
          Who We Help
        </h2>
        <p className="mb-6 text-center text-base text-muted-foreground">
          We support businesses that:
        </p>
        <ul className="mx-auto max-w-2xl space-y-3">
          {items.map((item) => (
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

export default WhoWeHelpSection;
