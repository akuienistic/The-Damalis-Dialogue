import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Mic className="w-16 h-16 mx-auto text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          The Damalis Dialogue
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground"
        >
          "Where voices meet & stories connect"
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.6 }}
          className="mt-4 h-1 bg-primary rounded-full mx-auto max-w-xs"
        />
      </div>
    </div>
  );
};

export default Loader;