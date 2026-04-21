"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Background() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-background" />

      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: isLight ? [0.16, 0.24, 0.16] : [0.26, 0.44, 0.26],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-15%] right-[-10%] h-[80%] w-[80%] rounded-full bg-white/10 blur-[120px] pointer-events-none"
      />

      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: isLight ? [0.1, 0.18, 0.1] : [0.16, 0.3, 0.16],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-15%] left-[-10%] h-[70%] w-[70%] rounded-full bg-white/6 blur-[120px] pointer-events-none"
      />

      <motion.div 
        animate={{
          opacity: isLight ? [0.08, 0.14, 0.08] : [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-[50%] w-[50%] rounded-full bg-white/6 blur-[140px] pointer-events-none"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "linear-gradient(180deg, transparent 0%, rgba(244,247,251,0.08) 55%, rgba(244,247,251,0.2) 100%)"
            : "linear-gradient(180deg, transparent 0%, rgba(5,7,11,0.08) 55%, rgba(5,7,11,0.24) 100%)",
        }}
      />

      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
    </div>
  );
}
