import logo from "@/assets/logo-new.jpeg";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="mb-10 flex items-center">
          <img src={logo} alt="Crabtree Solutions Inc." className="h-32" />
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Email:{" "}
                <a href="mailto:info@crabtreesolutions.com" className="text-primary hover:underline">
                  info@crabtreesolutions.com
                </a>
              </p>
              <div>
                <p className="font-medium text-foreground">Crabtree Solutions Inc.</p>
                <p>Secure Managed IT &amp; Cybersecurity Services</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule Consultation
                </button>
              </li>
              <li>
                <span className="text-muted-foreground">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
