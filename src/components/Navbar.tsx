import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Cost Calculator", href: "/cost-calculator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="text-2xl font-display font-bold tracking-tight text-secondary-foreground">
          BHUV<span className="text-gold">i</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-sm hover:bg-accent transition-colors"
          >
            Client Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-secondary-foreground/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-secondary-foreground/80 hover:text-gold transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="mt-2 px-5 py-3 text-center font-semibold bg-primary text-primary-foreground rounded-sm"
              >
                Client Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
