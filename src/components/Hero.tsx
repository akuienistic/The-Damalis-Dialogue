import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Lifestyle </span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Culture</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Entertainment</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Perspectives</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Welcome to <span className="text-gradient">The Damalis Dialogue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Deep conversations that empower, enlighten, and inspire. Join us for authentic dialogues exploring life,
            purpose, relationships, and personal growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#videos"
              className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-all hover:scale-105"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Latest Episode
            </a>
            <a
              href="#episodes"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Headphones className="w-5 h-5" />
              Browse Episodes
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-display">20+</div>
              <div className="text-sm text-muted-foreground mt-1">Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-display">5K+</div>
              <div className="text-sm text-muted-foreground mt-1">Listeners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-display">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Guests</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
