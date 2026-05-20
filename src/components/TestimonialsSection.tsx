import { MapPin, Shield, Server, FileCheck, Lock } from "lucide-react";

const points = [
  { icon: MapPin, text: "U.S.-focused managed IT and cybersecurity support" },
  { icon: Shield, text: "Security-first approach tailored for small and mid-sized U.S. businesses" },
  { icon: Server, text: "Hands-on experience with firewall, endpoint security, Microsoft 365, VPN, backup, and server environments" },
  { icon: FileCheck, text: "Support for HIPAA, SOC 2, and PCI DSS aligned environments" },
  { icon: Lock, text: "Client references available on request due to sensitive infrastructure work" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-primary md:text-4xl">
          Why Businesses Trust Crabtree Solutions Inc.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Because we work with sensitive infrastructure, client references are shared on request rather than displayed publicly.
        </p>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.text} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <p.icon className="h-4 w-4 text-primary" />
              </span>
              <p className="text-sm text-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          Client references and engagement examples are available upon request, subject to confidentiality and client approval.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
