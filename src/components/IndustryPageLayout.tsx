import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, Server, Lock, FileCheck, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface IndustryPageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  headline: string;
  subheadline: string;
  intro: string;
  challenges: { icon: React.ReactNode; title: string; description: string }[];
  services: string[];
  compliance: string[];
  ctaText: string;
}

const IndustryPageLayout = ({
  metaTitle,
  metaDescription,
  canonicalPath,
  headline,
  subheadline,
  intro,
  challenges,
  services,
  compliance,
  ctaText,
}: IndustryPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://crabtreesolutions.us${canonicalPath}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://crabtreesolutions.us${canonicalPath}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 section-padding">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="container mx-auto px-6 text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {subheadline}
            </span>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              {headline}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <a href="/#contact">
              <Button size="lg" className="shadow-lg shadow-primary/25 gap-2">
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-padding section-alt">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
              Key Challenges We Solve
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {challenges.map((c, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              What We Deliver
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Compliance */}
        {compliance.length > 0 && (
          <section className="section-padding section-alt">
            <div className="container mx-auto px-6">
              <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
                Compliance & Standards
              </h2>
              <div className="flex flex-wrap gap-3">
                {compliance.map((c) => (
                  <span key={c} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Let us assess your environment and build a security-focused IT strategy tailored to your needs.
            </p>
            <a href="/#contact">
              <Button size="lg" className="shadow-lg shadow-primary/25 gap-2">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default IndustryPageLayout;
