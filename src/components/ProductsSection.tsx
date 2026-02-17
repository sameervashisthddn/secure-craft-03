const products = [
  {
    title: "Endpoint Security",
    items: ["Intercept X Endpoint", "Intercept X for Server", "Mobile (UEM & MTD)", "Central Device Encryption"],
  },
  {
    title: "Network Security",
    items: ["Next-Gen Firewall", "Zero Trust Network Access (ZTNA)", "Wireless Access Points", "Switches"],
  },
  {
    title: "Email & Identity",
    items: ["Email Security", "Phish Threat (Awareness Training)", "Identity & Access Controls"],
  },
  {
    title: "Cloud Security",
    items: ["Cloud Optix (CSPM)", "Cloud Workload Protection"],
  },
  {
    title: "Detection & Response",
    items: ["Extended Detection & Response (XDR)", "Endpoint Detection & Response (EDR)"],
  },
  {
    title: "Platform & Management",
    items: ["Unified Security Management"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">Products</h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Enterprise-grade protection across endpoint, network, cloud, email, and identity — designed for healthcare, legal, and SMB environments.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
