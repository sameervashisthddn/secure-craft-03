import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@crabtreesolutions.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">Get in touch</h2>
        <p className="mb-12 max-w-lg text-muted-foreground">
          Tell us about your goals. We'll reach out within one business day.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Our Office</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p>11700 Lebanon Rd, Suite 924</p>
                  <p>Frisco, TX 75035</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@crabtreesolutions.com" className="text-primary hover:underline">
                  info@crabtreesolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
