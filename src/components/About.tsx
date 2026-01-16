import { motion } from "framer-motion";
import { Mic, MessageCircle, Globe, Sparkles } from "lucide-react";
import podcastStudio from "@/assets/podcast-studio.jpg";

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
            initial={{ opacity: 0, x: -50 }}
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
            initial={{ opacity: 0, x: 50 }}
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              We bring together thought leaders, everyday heroes, and inspiring 
              individuals to share their journeys, insights, and wisdom. Each 
              episode is crafted to leave you with actionable takeaways and 
              renewed perspective.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
