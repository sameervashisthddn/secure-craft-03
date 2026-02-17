import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-display font-semibold text-foreground">Crabtree Solutions Inc.</span>
        </div>
        <p>© {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
