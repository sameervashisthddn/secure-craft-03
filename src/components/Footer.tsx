import logo from "@/assets/logo-new.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Crabtree Solutions Inc." className="h-48" />
        </div>
        <p>© {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
