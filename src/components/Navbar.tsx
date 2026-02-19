import { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-tree.png";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Our Approach", href: "/#approach" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Core Services", href: "/#services" },
      { label: "VAPT", href: "/#vapt" },
      { label: "Startup IT", href: "/startup" },
    ],
  },
  {
    label: "Industries",
    href: "/#who-we-help",
    children: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Legal", href: "/industries/legal" },
      { label: "Staffing", href: "/industries/staffing" },
      { label: "Small & Midsize Business", href: "/industries/smb" },
    ],
  },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.replace("/", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
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

  const isHashLink = (href: string) => href.startsWith("/#");
  const isRouteLink = (href: string) => !href.startsWith("/#") && href !== "/";

  const renderNavLink = (l: { label: string; href: string }, onClick?: () => void) => {
    if (l.href === "/") {
      return (
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            onClick?.();
          }}
          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {l.label}
        </Link>
      );
    }
    if (isRouteLink(l.href)) {
      return (
        <Link
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

  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Crabtree Solutions Inc." className="h-14 w-auto" />
          <span className="hidden sm:block text-base font-semibold text-foreground leading-tight">
            Crabtree<br /><span className="text-primary text-xs font-medium tracking-wide">Solutions Inc.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => openDropdown(l.label)}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {dropdown === l.label && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-border bg-popover p-1.5 shadow-lg">
                    {l.children.map((child) => (
                      <div key={child.label}>
                        {isRouteLink(child.href) ? (
                          <Link
                            to={child.href}
                            onClick={() => setDropdown(null)}
                            className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            href={child.href}
                            onClick={(e) => {
                              handleHashClick(e, child.href);
                              setDropdown(null);
                            }}
                            className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={l.label}>{renderNavLink(l)}</div>
            )
          )}
          <a href="/#contact" onClick={(e) => handleHashClick(e, "/#contact")}>
            <Button size="sm" className="ml-2">Get a Free Quote</Button>
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) =>
              l.children ? (
                <div key={l.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground"
                  >
                    {l.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === l.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === l.label && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-border pl-3">
                      {l.children.map((child) => (
                        <div key={child.label}>
                          {isRouteLink(child.href) ? (
                            <Link
                              to={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              href={child.href}
                              onClick={(e) => {
                                handleHashClick(e, child.href);
                                setOpen(false);
                              }}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={l.label} className="py-2">
                  {renderNavLink(l, () => setOpen(false))}
                </div>
              )
            )}
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
