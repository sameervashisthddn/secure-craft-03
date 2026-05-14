const TestimonialsSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
          Client References Available Upon Request
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
          Client references and engagement examples are available upon request, subject to confidentiality and client approval.
        </p>

        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8 text-center shadow-sm sm:p-10">
          <p className="text-lg leading-relaxed text-foreground">
            Because many IT and cybersecurity engagements involve sensitive infrastructure, we do not publicly disclose client names without permission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
