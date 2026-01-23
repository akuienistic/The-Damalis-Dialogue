import { useState } from "react";
import { Menu, X, Home, Info, List, Play, DollarSign, Mail, Youtube, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import damalisLogo from "@/assets/damalis-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Episodes", href: "#episodes", icon: List },
    { name: "Videos", href: "#videos", icon: Play },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
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

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right Side - Dark Mode + Subscribe */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 m-auto" />
              <span className="sr-only">Toggle theme</span>
            </button>
            <a
              href="https://www.youtube.com/@thedamalisdialogue"
              target="_blank"
              className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YT
            </a>
          </div>

          {/* Mobile Right Side - Dark Mode + Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors lg:hidden"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 m-auto" />
              <span className="sr-only">Toggle theme</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            className="fixed top-0 right-0 h-screen w-3/4 bg-card border-l border-accent/10 md:hidden z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <a href="#home" className="flex items-center gap-3">
                  <img src={damalisLogo} alt="The Damalis Dialogue" className="h-8 w-auto rounded-lg" />
                  <span className="font-display text-lg font-bold text-foreground">
                    The Damalis <span className="text-primary">Dialogue</span>
                  </span>
                </a>
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

                {/* Mobile Dark Mode Toggle */}
                <div className="flex items-center justify-between py-2">
                  <span className="text-foreground font-medium">Theme</span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 m-auto" />
                    <span className="sr-only">Toggle theme</span>
                  </button>
                </div>

                <a
                  href="https://www.youtube.com/@thedamalisdialogue"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-primary text-primary-foreground px-4 py-2.5 rounded-full font-semibold text-center hover:opacity-90 transition-opacity mt-4 flex items-center justify-center gap-2"
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
