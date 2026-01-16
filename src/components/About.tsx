import { motion } from "framer-motion";
import { Mic, MessageCircle, Globe, Sparkles } from "lucide-react";
import podcastStudio from "@/assets/Damalis Dialogue.jpg";

const About = () => {
  const features = [
    {
      icon: Mic,
      title: "Authentic Voices",
      description:
        "Every episode features real stories and genuine conversations that resonate with our audience.",
    },
    {
      icon: MessageCircle,
      title: "Empowering Topics",
      description:
        "From personal growth to relationships, career to purpose - we discuss what truly matters.",
    },
    {
      icon: Globe,
      title: "Global Perspectives",
      description:
        "Connecting with voices from diverse backgrounds, sharing wisdom and experiences.",
    },
    {
      icon: Sparkles,
      title: "Transformative Insights",
      description:
        "Each dialogue is designed to inspire positive change and personal development.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <img
                src={podcastStudio}
                alt="The Damalis Dialogue studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Dialogues That{" "}
              <span className="text-gradient">Transform</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Damalis Dialogue is more than just a podcast - it's a space 
              for meaningful conversations that inspire growth, spark curiosity, 
              and foster genuine connection.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-16">
              We bring together thought leaders, everyday heroes, and inspiring
              individuals to share their journeys, insights, and wisdom. Each
              episode is crafted to leave you with actionable takeaways and
              renewed perspective.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Core Pillars
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Makes Us <span className="text-gradient">Different</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These four pillars form the foundation of every dialogue we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-accent/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-3 text-lg">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
