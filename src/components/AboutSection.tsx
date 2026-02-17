import { CheckCircle, Award, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">About Crabtree</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We partner with healthcare providers, law firms, and small-to-midsize businesses to design, implement, and manage secure IT environments. Our team blends deep expertise with a pragmatic approach to deliver measurable outcomes.
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />10+ years serving healthcare, legal, and SMB clients</li>
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />HIPAA, SOC 2, and regulatory compliance expertise</li>
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />Clear engagement model with documented handover</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Testimonials</h3>
            <div className="space-y-4">
              <blockquote className="rounded-xl border border-border bg-secondary p-6 text-sm italic text-muted-foreground">
                "Professional, responsive, and security-focused. They modernized our network with zero downtime."
              </blockquote>
              <blockquote className="rounded-xl border border-border bg-secondary p-6 text-sm italic text-muted-foreground">
                "Their managed services gave us predictable costs and faster response times."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">Why Choose Us</h2>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Enterprise-grade delivery, SMB-friendly approach. We combine proven methodologies with a pragmatic engagement model.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Award, title: "Certified Experts", desc: "Multi-vendor credentials across cloud, security, and networking." },
              { icon: CheckCircle, title: "Proven Methodology", desc: "Clear requirements, milestones, documentation, and handover." },
              { icon: ShieldCheck, title: "Security First", desc: "Best practices aligned to compliance frameworks and zero-trust." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border p-6">
                <item.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
