import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import podcastStudio from "@/assets/Mapia One.jpg";
import podcastConversation from "@/assets/Amac Don AMD.jpg";

interface Video {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const FeaturedVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      videoId: "2LjE9rkIWTk",
      title: "The Truth, The Journey & the Industry 🇸🇸",
      description:
        "In this episode of The Damalis Dialogue, Amac Don sits down for a raw, honest and entertaining conversation about music, criticism, growth and the realities of South Sudanese entertainment industry.",
      thumbnail: podcastConversation,
      duration: "34:02",
      views: "900",
    },
    {
      id: "2",
      videoId: "09R1f4SOiPg",
      title: "Language, Identity, Truth",
      description:
        "In this episode of The Damalis Dialogue, we sit down with Mapia One Dictionary for a powerful, insightful, and entertaining conversation about language and cultural identity.",
      thumbnail: podcastStudio,
      duration: "56:01",
      views: "2.7K",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="bg-background border border-accent/20 rounded-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Featured Content
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Watch Our <span className="text-gradient">Best Dialogues</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Catch up on our most impactful episodes and exclusive video content. Click to watch in high quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-glow">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;