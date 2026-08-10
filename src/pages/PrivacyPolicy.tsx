import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Privacy Policy – Crabtree Solutions Inc."
        description="Read our privacy policy to understand how Crabtree Solutions Inc. collects, uses, and protects your personal information."
        path="/privacy-policy/"
      />
      <Navbar />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Crabtree Solutions Inc. ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect the following types of information, where applicable:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, company name, and an optional phone number submitted through our forms.</li>
              <li><strong className="text-foreground">Partner and Project Information:</strong> Details submitted through our partner and inquiry forms, such as service area, industry, user count, number of locations, project goals, timeline, budget range, and environment details.</li>
              <li><strong className="text-foreground">Documents and Attachments:</strong> Files you voluntarily upload through the partner form.</li>
              <li><strong className="text-foreground">Technical Data:</strong> Standard technical information, such as IP address and request details, that is automatically processed by our hosting and security providers to deliver and protect the website.</li>
            </ul>
            <p className="mt-2">
              We do not use advertising cookies, analytics tracking tools, or third-party marketing trackers on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries</li>
              <li>To prepare requested quotations or service recommendations</li>
              <li>To evaluate partner applications</li>
              <li>To deliver and improve the services you request</li>
              <li>To maintain security and comply with legal obligations</li>
            </ul>
          </section>


          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information,
              including encryption, secure servers, and access controls. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with trusted service providers who assist us in operating our website and
              conducting business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:support@crabtreesolutions.us" className="text-primary hover:underline">
                support@crabtreesolutions.us
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
