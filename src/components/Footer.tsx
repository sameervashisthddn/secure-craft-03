const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-primary">CRABTREE</span>
          <span>IT & Security Solutions</span>
        </div>
        <p>© {new Date().getFullYear()} Crabtree Solutions Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
