import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant incremental loading progress simulation
    let count = 0;
    const interval = setInterval(() => {
      // Staged speed increase to feel authentic
      const increment = count < 40 ? 3 : count < 75 ? 7 : count < 90 ? 4 : 2;
      count = Math.min(count + increment, 100);
      setProgress(count);

      if (count === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 1200); // Wait for the slide-up animation to fully finish before unmounting
        }, 600); // Pause briefly at 100% for impact
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // ANWESH letters array for staggered entrance
  const letters = ["A", "N", "W", "E", "S", "H"];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#0c0c0e] text-[#f5f5f7] z-50 flex flex-col justify-between p-8 md:p-14 select-none pointer-events-auto"
        >
          {/* Top Thin Progress Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-ghost/10 overflow-hidden">
            <motion.div 
              style={{ scaleX: progress / 100, originX: 0 }}
              className="w-full h-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
            />
          </div>

          {/* Top Row Tech Specs */}
          <div className="flex justify-between items-center text-[9px] tracking-[0.25em] font-mono text-muted-foreground/60 select-none">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              <span>SYS_INIT: ANWESH_PORTFOLIO_2026</span>
            </div>
            <span className="hidden sm:block">CORE: ML_SYSTEMS_ENGINEER</span>
          </div>

          {/* Center Title Staggered Slide-Up Reveal */}
          <div className="flex justify-center items-center">
            <h1 className="font-display text-[15vw] md:text-[10vw] leading-none tracking-[-0.04em] uppercase flex overflow-hidden py-4 select-none">
              {letters.map((char, index) => (
                <span key={index} className="inline-block overflow-hidden relative">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.215, 0.61, 0.355, 1],
                      delay: 0.1 + index * 0.08,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Bottom Row Loading Info and Counter */}
          <div className="flex justify-between items-end text-[9px] tracking-[0.2em] font-mono text-muted-foreground/60 select-none">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${progress === 100 ? "bg-accent-moss" : "bg-accent-coral animate-pulse"}`} />
                <span>
                  {progress === 100 ? "STATUS: COMPLETED" : "STATUS: INDEXING_RESOURCES..."}
                </span>
              </div>
              <div className="opacity-45 text-[8px]">
                {progress < 30 ? "LOADING: core_styles.css" : progress < 70 ? "LOADING: intelligent_ml_modules.py" : progress < 100 ? "LOADING: portfolio_selected_works.tsx" : "LOADING: sys_ready"}
              </div>
            </div>

            {/* Micro Tabular Percentage Count */}
            <div className="font-mono text-3xl md:text-5xl tracking-tighter text-[#f5f5f7]/95 tabular-nums flex items-baseline">
              <span>{String(progress).padStart(3, "0")}</span>
              <span className="text-[10px] tracking-normal text-muted-foreground/40 ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
