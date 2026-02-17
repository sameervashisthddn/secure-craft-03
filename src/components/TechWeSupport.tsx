const techs = ["Fortinet", "Sophos", "SentinelOne", "Microsoft", "VMware", "Cisco"];

const TechWeSupport = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
          Technologies We Support
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          {techs.map((t) => (
            <div
              key={t}
              className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWeSupport;
