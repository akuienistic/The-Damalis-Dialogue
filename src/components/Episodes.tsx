import { motion } from "framer-motion";
import { Play, Clock, Calendar, ChevronRight } from "lucide-react";

interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  guest?: string;
}

const Episodes = () => {
  const episodes: Episode[] = [
    {
      id: "1",
      number: 20,
      title: "Finding Your Voice: The Power of Self-Expression",
      description:
        "An empowering discussion on authenticity, confidence, and speaking your truth in all aspects of life.",
      duration: "52 min",
      date: "Jan 10, 2026",
      guest: "Grace Amara",
    },
    {
      id: "2",
      number: 19,
      title: "Purpose, Faith & Living Authentically",
      description:
        "A candid conversation about discovering purpose, maintaining faith, and embracing your authentic self.",
      duration: "48 min",
      date: "Jan 3, 2026",
      guest: "Sandra Cope",
    },
    {
      id: "3",
      number: 18,
      title: "Building Healthy Relationships",
      description:
        "Expert insights on nurturing meaningful connections and creating lasting bonds with those around you.",
      duration: "55 min",
      date: "Dec 27, 2025",
      guest: "Dr. Nadia Okello",
    },
    {
      id: "4",
      number: 17,
      title: "Sobriety, Self-Love & Breaking Stereotypes",
      description:
        "A powerful dialogue about personal transformation, embracing sobriety, and challenging societal norms.",
      duration: "45 min",
      date: "Dec 20, 2025",
      guest: "Michelle Wanjiku",
    },
  ];

  return (
    <section id="episodes" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recent Episodes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured <span className="text-gradient">Dialogues</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of transformative conversations with inspiring 
            guests who share their wisdom and experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-accent/10 rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Episode Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {episode.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </span>
                    {episode.guest && (
                      <span className="text-primary font-medium">
                        ft. {episode.guest}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-muted-foreground">{episode.description}</p>
                </div>

                {/* Play Button */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Play className="w-6 h-6 text-primary group-hover:text-primary-foreground ml-0.5 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            View All Episodes
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Episodes;
