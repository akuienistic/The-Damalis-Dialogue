import { motion, useInView } from "framer-motion";
import { Play, Headphones, Users, Mic, TrendingUp, ArrowDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
};

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
            className="font-display text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="block">The</span>
            <span className="text-gradient">Damalis Dialogue</span>
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

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="group mx-auto flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Scroll to bottom"
            >
              <ArrowDown className="w-6 h-6 text-primary group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mt-16"
          >
            <StatItem icon={Headphones} end={25} suffix="+" label="Episodes" />
            <StatItem icon={Users} end={5200} suffix="+" label="Listeners" />
            <StatItem icon={Mic} end={55} suffix="+" label="Guests" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stat Item Component
const StatItem = ({ icon: Icon, end, suffix, label }: { icon: any; end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 md:p-6 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        {/* Icon */}
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </div>

        {/* Number */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-display mb-1 md:mb-2">
          {count.toLocaleString()}
          {suffix}
        </div>

        {/* Label */}
        <div className="text-xs md:text-sm text-muted-foreground font-medium">{label}</div>

        {/* Decorative element */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default Hero;
