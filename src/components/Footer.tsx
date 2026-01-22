import { Facebook, Youtube, Instagram, Video, Mail } from "lucide-react";
import damalisLogo from "@/assets/damalis-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Episodes", href: "#episodes" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "All Episodes", href: "#episodes" },
    { name: "Featured Guests", href: "#about" },
    { name: "Topics", href: "#about" },
    { name: "Suggest a Guest", href: "#contact" },
  ];

  const socials = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61579874356856",
    },
    { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/@thedamalisdialogue" },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fthedamalisdialogue%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExN3RHV2dwWExtaTJ3OUIxOHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7mz8aPUNgbvy3zxDFSFNKSDXaMy4D9LVhs5rVX3oAZ559D9ev_5Pjr-pO_yQ_aem_JWEelFvpdhpeQausKfEYLg&h=AT323ryteh9TBsGzKQOomH4Up9jDeT7Wm0L73Nw3RedhZWTaViBVh2l9hWsWOtn5DOeQTBIQEFqN-W9wlabqv-aXgp1bKpHDy2d2M05FsSaS367EFpo-ci7GkGwf_dJbKFJZ",
    },
    {
      icon: Video,
      name: "TikTok",
      href: "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40the_damalisdialogue%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExN3RHV2dwWExtaTJ3OUIxOHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5JGaUY-gSza9DFlisXpyY8rN5mPC6NPsCdSvwaeAdDBBFR3H1BJkf6uQbHxQ_aem_AZNiqr76CgG9LO19NYMgaQ&h=AT3iV3mlRXmxstL8dfFWX4ypmtoUxpIWchsUUAtL3y-fsq0xDNai1ReU1No6G9CZIuLUL8I4AIBZQdXOZzolWKbnXG4M4ZzuHzNdivo6RsgkpZM69cR_WgJlv5kL_nXk74jf",
    },
  ];

  return (
    <footer className="bg-card border-t border-accent/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={damalisLogo} alt="The Damalis Dialogue" className="h-12 w-auto rounded-lg" />
              <span className="font-display text-lg font-bold text-foreground">
                The Damalis <span className="text-primary">Dialogue</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Deep conversations that empower, enlighten, and inspire. Join us for authentic dialogues exploring life,
              purpose, and personal growth.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:211thedamalis@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                211thedamalis@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">Follow us on social media and never miss an episode.</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-accent/10 rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/10 pt-8">
          <div className="flex flex-col md:flex-col items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© {currentYear} The Damalis Dialogue. All rights reserved.</p>

            {/* Credit */}
            <p className="text-sm text-muted-foreground">
              Designed & Built by{" "}
              <a
                href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold"
              >
                Simon Star Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
