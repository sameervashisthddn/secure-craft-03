import { Search, ShieldCheck, FileText, Heart, Users, Quote } from "lucide-react";

const values = [
  {
    icon: Search,
    title: "Assess First, Always",
    desc: "We review your infrastructure before recommending a single thing. Every solution we propose is grounded in your reality.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance You Can Stand Behind",
    desc: "HIPAA, SOC 2, PCI DSS — built into your environment, not bolted on at audit time.",
  },
  {
    icon: FileText,
    title: "You Choose What You Need",
    desc: "Free assessment. Transparent plan. No bundles, no pressure, no surprises on your invoice.",
  },
  {
    icon: Heart,
    title: "Industries That Can't Afford Downtime",
    desc: "Healthcare, legal, HR — we understand your obligations better than most, and we deliver accordingly.",
  },
  {
    icon: Users,
    title: "Support That Feels Like a Partner",
    desc: "US-based, certified, and genuinely invested in keeping your business running.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            About Crabtree Solutions
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We built Crabtree Solutions for businesses that carry real responsibility.
            Healthcare providers, law firms, HR companies, and growth-stage SMBs trust us
            to manage their IT and cybersecurity — because getting it wrong isn't something
            they can afford.
          </p>
        </div>

        {/* Origin Story */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Where We Come From
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Running a business is already demanding. Managing a medical practice, a law
              firm, or a staffing agency means juggling client expectations, regulatory
              obligations, and a team that depends on systems working every single day.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We started Crabtree Solutions because we saw too many businesses stuck in a
              cycle — reactive IT support that showed up after problems happened, solutions
              that were never quite tailored to the industry, and compliance conversations
              that felt more like a burden than a benefit. We knew there was a better way.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-primary/5 p-8">
            <Quote className="mb-4 h-8 w-8 text-primary/40" />
            <p className="text-lg font-medium italic leading-relaxed text-foreground">
              "We don't wait for things to break. We make sure they don't."
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-primary">
              <span>10+ Years Experience</span>
              <span className="hidden h-4 w-px bg-primary/30 sm:block" />
              <span>Compliance-Ready From Day One</span>
              <span className="hidden h-4 w-px bg-primary/30 sm:block" />
              <span>US-Based Support</span>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="mt-20">
          <h3 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
            What We Stand For
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            We assess your environment first, build solutions that genuinely fit, and stay
            with you long after the work is done.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{v.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            Why It Matters
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            The businesses we work with carry real responsibility — for patient records,
            client confidences, employee livelihoods. A security lapse isn't just an IT
            problem. It's a trust problem. We take that seriously. And we show up every
            day to make sure your systems, your data, and your reputation are protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
