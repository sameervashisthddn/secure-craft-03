import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.jpeg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "VAPT", href: "#vapt" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logoHorizontal} alt="Crabtree Solutions" className="h-10" />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact">
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
            {navLinks.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2">Get a Free Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
