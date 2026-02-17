import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Contact us"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingCTA;
