import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoId, title }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 bg-card border-accent/20 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          Watch {title} video from The KDTV Podcast
        </DialogDescription>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
