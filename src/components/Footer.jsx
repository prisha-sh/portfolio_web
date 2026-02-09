import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex flex-col items-center justify-center gap-4">
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-primary">
          Made with ❤️ by Prisha Sharma
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Prisha Sharma. All rights reserved.
        </p>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
