import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-new.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Services", href: "/#services" },
  { label: "VAPT", href: "/#vapt" },
  { label: "Startup IT", href: "/startup" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.replace("/", "");
      // If already on homepage, just scroll to the section
      if (location.pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home first, then scroll after render
        e.preventDefault();
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  const renderLink = (l: { label: string; href: string }, onClick?: () => void) => {
    if (l.href === "/") {
      return (
        <Link
          key={l.label}
          to={l.href}
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            onClick?.();
          }}
          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {l.label}
        </Link>
      );
    }
    if (l.href === "/startup") {
      return (
        <Link
          key={l.label}
          to={l.href}
          onClick={onClick}
          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {l.label}
        </Link>
      );
    }
    return (
      <a
        key={l.label}
        href={l.href}
        onClick={(e) => {
          handleHashClick(e, l.href);
          onClick?.();
        }}
        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        {l.label}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Crabtree Solutions Inc." className="h-48" />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => renderLink(l))}
          <a
            href="/#contact"
            onClick={(e) => handleHashClick(e, "/#contact")}
          >
            <Button size="sm" className="ml-2">Get a Free Quote</Button>
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-3 px-6 py-4">
            {navLinks.map((l) => renderLink(l, () => setOpen(false)))}
            <a
              href="/#contact"
              onClick={(e) => {
                handleHashClick(e, "/#contact");
                setOpen(false);
              }}
            >
              <Button className="w-full mt-2">Get a Free Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
