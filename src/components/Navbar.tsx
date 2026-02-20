import { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-new.jpeg";

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

  const isRouteLink = (href: string) => !href.startsWith("/#") && href !== "/";

  const renderNavLink = (l: { label: string; href: string }, onClick?: () => void) => {
    const cls = "text-sm font-medium text-foreground/80 transition-colors hover:text-primary whitespace-nowrap";
    if (l.href === "/") {
      return (
        <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "instant" }); onClick?.(); }} className={cls}>
          {l.label}
        </Link>
      );
    }
    if (isRouteLink(l.href)) {
      return <Link to={l.href} onClick={onClick} className={cls}>{l.label}</Link>;
    }
    return (
      <a href={l.href} onClick={(e) => { handleHashClick(e, l.href); onClick?.(); }} className={cls}>
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
    return () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-[166px] items-center justify-between gap-8 px-6 overflow-hidden">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="flex shrink-0 items-center"
        >
          <img src={logo} alt="Crabtree Solutions Inc." className="h-44 w-auto object-contain" />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => openDropdown(l.label)}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary whitespace-nowrap">
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {dropdown === l.label && (
                  <div className="absolute left-1/2 top-full z-50 mt-1 w-52 -translate-x-1/2 rounded-xl border border-border bg-popover p-1.5 shadow-xl">
                    {l.children.map((child) => (
                      <div key={child.label}>
                        {isRouteLink(child.href) ? (
                          <Link
                            to={child.href}
                            onClick={() => setDropdown(null)}
                            className="block rounded-lg px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            href={child.href}
                            onClick={(e) => { handleHashClick(e, child.href); setDropdown(null); }}
                            className="block rounded-lg px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
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
              <div key={l.label} className="rounded-md px-3 py-2">
                {renderNavLink(l)}
              </div>
            )
          )}
        </div>

        {/* CTA — right */}
        <div className="hidden shrink-0 lg:block">
          <a href="/#contact" onClick={(e) => handleHashClick(e, "/#contact")}>
            <Button size="sm" className="whitespace-nowrap">Get a Free Quote</Button>
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button className="ml-auto lg:hidden text-foreground" onClick={() => setOpen(!open)}>
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
                    className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {l.label}
                    <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${mobileExpanded === l.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === l.label && (
                    <div className="ml-4 flex flex-col gap-0.5 border-l border-border pl-3 pb-1">
                      {l.children.map((child) => (
                        <div key={child.label}>
                          {isRouteLink(child.href) ? (
                            <Link
                              to={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              href={child.href}
                              onClick={(e) => { handleHashClick(e, child.href); setOpen(false); }}
                              className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
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
                <div key={l.label} className="rounded-md px-2">
                  {renderNavLink(l, () => setOpen(false))}
                </div>
              )
            )}
            <a
              href="/#contact"
              onClick={(e) => { handleHashClick(e, "/#contact"); setOpen(false); }}
              className="mt-2"
            >
              <Button className="w-full">Get a Free Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
