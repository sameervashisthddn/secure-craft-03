import logo from "@/assets/logo-new.jpeg";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        {/* Logo + Tagline */}
        <div className="mb-12 flex flex-col items-center gap-4 border-b border-border pb-10 text-center lg:flex-row lg:items-center lg:text-left">
          <img src={logo} alt="Crabtree Solutions Inc." className="h-16 rounded-md" />
          <div>
            <p className="text-lg font-semibold text-foreground">Crabtree Solutions Inc.</p>
            <p className="text-sm text-muted-foreground">Secure Managed IT &amp; Cybersecurity Services</p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@crabtreesolutions.com"
                  className="text-primary hover:underline"
                >
                  info@crabtreesolutions.com
                </a>
              </p>
              <div>
                <p className="font-medium text-foreground">USA Office</p>
                <p>Crabtree Solutions Inc.</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
              <li>Managed IT Services</li>
              <li>Enterprise VPN Services</li>
              <li>Startup IT Services</li>
              <li>Infrastructure Audit &amp; Optimization</li>
              <li>Endpoint Security</li>
              <li>Firewall &amp; Network Security</li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
              <li>Startups</li>
              <li>Healthcare</li>
              <li>Insurance</li>
              <li>Call Centers</li>
              <li>Financial Services</li>
              <li>SMBs and Enterprises</li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo("about")} className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-muted-foreground transition-colors hover:text-primary">
                  Schedule Consultation
                </button>
              </li>
              <li>
                <span className="text-muted-foreground">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
