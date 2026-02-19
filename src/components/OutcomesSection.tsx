const outcomes = [
  "Reduced downtime with proactive monitoring and managed IT support",
  "Strengthened security posture through endpoint protection and firewall hardening",
  "Full visibility into network activity, user access, and system health",
  "Lower IT costs through right-sized infrastructure and vendor optimization",
  "Audit-ready compliance for HIPAA, SOC 2, and PCI DSS requirements",
];

const OutcomesSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
          What Our Managed IT Clients Achieve
        </h2>
        <p className="mb-6 text-base text-muted-foreground">Measurable improvements our clients see after partnering with us:</p>
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
