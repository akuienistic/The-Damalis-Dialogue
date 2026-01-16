import { useState } from "react";
import { Menu, X, Home, Info, List, Play, Mail, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import damalisLogo from "@/assets/damalis-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Episodes", href: "#episodes", icon: List },
    { name: "Videos", href: "#videos", icon: Play },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-accent/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={damalisLogo} alt="The Damalis Dialogue" className="h-10 w-auto rounded-lg" />
            <span className="font-display text-xl font-bold text-foreground hidden sm:block">
              The Damalis <span className="text-primary">Dialogue</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.youtube.com/@thedamalisdialogue"
              target="_blank"
              className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-1/2 bg-card border-l border-accent/10 md:hidden z-50"
          >
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)} className="text-foreground p-2" aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg flex items-center gap-3"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://www.youtube.com/@thedamalisdialogue"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-center hover:opacity-90 transition-opacity mt-4 flex items-center justify-center gap-2"
                >
                  <Youtube className="w-4 h-4" />
                  Subscribe on YT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm md:hidden z-40"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
