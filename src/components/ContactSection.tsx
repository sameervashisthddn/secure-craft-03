import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-card p-10 text-center shadow-glow md:p-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Get Started</p>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Ready to <span className="text-gradient-cyber">Secure</span> Your Business?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Schedule a consultation with our team to discuss how Crabtree Solutions can strengthen your IT infrastructure and cybersecurity posture.
          </p>

          <a href="mailto:info@crabtreesolutions.com">
            <Button size="lg" className="bg-gradient-cyber text-primary-foreground font-semibold shadow-glow hover:opacity-90 px-10">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              info@crabtreesolutions.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              United States
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
