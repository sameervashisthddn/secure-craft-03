import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCallback } from "react";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring" },
  { value: "<15min", label: "Response Time" },
  { value: "100+", label: "Clients Served" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (e: React.MouseEvent, hash: string) => {
      e.preventDefault();
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <footer className="border-t border-border bg-card">
      {/* Social Proof Stats */}
      <div className="border-b border-border bg-primary/5">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-6 py-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Logo + Tagline */}
        <div className="mb-6 flex flex-col items-center gap-3 border-b border-border pb-6 text-center lg:flex-row lg:items-center lg:text-left">
          <img src={logo} alt="Crabtree Solutions Inc." className="h-10 rounded-md" />
          <div>
            <p className="text-sm font-semibold text-foreground">Crabtree Solutions Inc.</p>
            <p className="text-xs text-muted-foreground">Secure Managed IT &amp; Cybersecurity Services</p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Contact */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <div className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
              <p>
                Email:{" "}
                <a href="mailto:info@crabtreesolutions.us" className="text-primary hover:underline">
                  info@crabtreesolutions.us
                </a>
              </p>
              <div>
                <p className="font-medium text-foreground">USA Office</p>
                <p>Crabtree Solutions Inc.</p>
                <p>11700 Lebanon Rd, Suite 924</p>
                <p>Frisco, TX 75035</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground">
              Solutions
            </h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="/#services" onClick={(e) => handleNavClick(e, "#services")} className="transition-colors hover:text-primary">Managed IT Services</a></li>
              <li><a href="/#services" onClick={(e) => handleNavClick(e, "#services")} className="transition-colors hover:text-primary">Enterprise VPN Services</a></li>
              <li><Link to="/startup" className="transition-colors hover:text-primary">Startup IT Services</Link></li>
              <li><a href="/#services" onClick={(e) => handleNavClick(e, "#services")} className="transition-colors hover:text-primary">Infrastructure Audit</a></li>
              <li><a href="/#vapt" onClick={(e) => handleNavClick(e, "#vapt")} className="transition-colors hover:text-primary">Endpoint Security</a></li>
              <li><a href="/#services" onClick={(e) => handleNavClick(e, "#services")} className="transition-colors hover:text-primary">Firewall &amp; Network Security</a></li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground">
              Industries
            </h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><Link to="/startup" className="transition-colors hover:text-primary">Startups</Link></li>
              <li><Link to="/industries/healthcare" className="transition-colors hover:text-primary">Healthcare</Link></li>
              <li><Link to="/industries/legal" className="transition-colors hover:text-primary">Legal</Link></li>
              <li><Link to="/industries/staffing" className="transition-colors hover:text-primary">Staffing Agencies</Link></li>
              <li><Link to="/industries/smb" className="transition-colors hover:text-primary">Small &amp; Midsize Business</Link></li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <ul className="space-y-1 text-xs">
              <li><a href="/#about" onClick={(e) => handleNavClick(e, "#about")} className="text-muted-foreground transition-colors hover:text-primary">About Us</a></li>
              <li><a href="/#services" onClick={(e) => handleNavClick(e, "#services")} className="text-muted-foreground transition-colors hover:text-primary">Services</a></li>
              <li><a href="/#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-muted-foreground transition-colors hover:text-primary">Contact</a></li>
              <li><Link to="/partnerships" className="font-medium text-primary transition-colors hover:text-primary/80">Partnerships →</Link></li>
              <li><Link to="/partner" className="text-muted-foreground transition-colors hover:text-primary">Partner Portal</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="border-t border-border bg-[hsl(231,66%,20%)]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-3 text-xs text-white/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="tel:+14697272810" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              (469) 727-2810
            </a>
            <a href="mailto:info@crabtreesolutions.us" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              info@crabtreesolutions.us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
