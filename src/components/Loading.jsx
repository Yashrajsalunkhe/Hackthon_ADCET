import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextShimmer } from "./ui/text-shimmer";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="flex inset-0 flex-col w-screen h-screen items-center z-[999] justify-center fixed overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, rgba(10, 14, 39, 1) 100%)',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <motion.div
            className="relative z-10"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              {/* Holographic frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl animate-pulse"></div>
              
              <div className="relative glass-card p-8 rounded-3xl border-2 border-purple-500/40">
                <img
                  src="/Logo.svg"
                  alt="Innerve Logo"
                  className="w-32 h-32 object-cover drop-shadow-2xl"
                />
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-400"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center items-center gap-6 mt-12 text-center relative z-10">
            <div className="relative">
              <TextShimmer
                className="text-2xl font-angrybirds tracking-wider"
                duration={3}
                spread={5}
                as="h1"
              >
                Launching Innerve 10!
              </TextShimmer>
            </div>
            <div className="relative w-40 h-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-1 bg-white"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
