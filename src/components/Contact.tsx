import { motion } from "framer-motion";
import {
  Send,
  Facebook,
  Youtube,
  Instagram,
  VideoIcon,
  Podcast,
  Headphones,
  Star,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

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
      icon: VideoIcon,
      name: "Tiktok",
      href: "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40the_damalisdialogue%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExN3RHV2dwWExtaTJ3OUIxOHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5JGaUY-gSza9DFlisXpyY8rN5mPC6NPsCdSvwaeAdDBBFR3H1BJkf6uQbHxQ_aem_AZNiqr76CgG9LO19NYMgaQ&h=AT3iV3mlRXmxstL8dfFWX4ypmtoUxpIWchsUUAtL3y-fsq0xDNai1ReU1No6G9CZIuLUL8I4AIBZQdXOZzolWKbnXG4M4ZzuHzNdivo6RsgkpZM69cR_WgJlv5kL_nXk74jf",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Join The <span className="text-gradient">Dialogue</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions, feedback, or a story to share? We'd love to hear from you. Connect with us and become part
            of our growing community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background border border-accent/20 rounded-2xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-background border-accent/20 focus:border-primary pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    required
                    className="bg-background border-accent/20 focus:border-primary pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={5}
                    className="bg-background border-accent/20 focus:border-primary resize-none pl-10 pt-2"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground py-6 text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Creative Sections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Listen Now CTA */}
            <div className="bg-background border border-accent/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Listen Anywhere</h3>
                  <p className="text-sm text-muted-foreground">Available on all major platforms</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/20 hover:border-primary/50 p-2"
                  aria-label="Apple Podcasts"
                >
                  <Podcast className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/20 hover:border-primary/50 p-2"
                  aria-label="Spotify"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/20 hover:border-primary/50 p-2"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background border border-accent/20 rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-accent/10 rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Rate & Review */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-6 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border border-primary-foreground/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-primary-foreground/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-300 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Your Review Matters!</h3>

                <p className="text-primary-foreground/90 text-sm mb-6 leading-relaxed">
                  Help us grow our community by sharing your thoughts. Every review inspires more meaningful
                  conversations.
                </p>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20"
                    onClick={() => window.open("https://www.youtube.com/@thedamalisdialogue", "_blank")}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Rate on YouTube
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20"
                    onClick={() => window.open("https://podcasts.apple.com", "_blank")}
                  >
                    <Podcast className="w-4 h-4 mr-2" />
                    Review on Apple Podcasts
                  </Button>
                </div>

                <div className="mt-4 text-xs text-primary-foreground/70">
                  ⭐ Average rating: 4.9/5 from 200+ reviews
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
