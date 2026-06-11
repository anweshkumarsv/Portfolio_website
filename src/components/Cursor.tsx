import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [cursorAngle, setCursorAngle] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      
      const cursorEl = t.closest("[data-cursor]");
      const interactiveEl = t.closest("a, button");
      
      setHovering(!!interactiveEl || !!cursorEl);
      
      const type = cursorEl ? cursorEl.getAttribute("data-cursor") : null;
      setCursorType(type);

      if (type && type.startsWith("#")) {
        const targetEl = document.querySelector(type);
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          const targetX = rect.left + rect.width / 2;
          const targetY = rect.top + rect.height / 2;
          const dx = targetX - e.clientX;
          const dy = targetY - e.clientY;
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          setCursorAngle(angle);
        }
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const isArrow = cursorType && cursorType.startsWith("#");

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference rounded-full"
        animate={{ 
          width: isArrow ? 40 : (hovering ? 44 : 8), 
          height: isArrow ? 40 : (hovering ? 44 : 8),
          backgroundColor: isArrow ? "rgba(0, 0, 0, 0)" : "var(--color-foreground)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence>
          {isArrow && (
            <motion.svg
              initial={{ opacity: 0, scale: 0.6, rotate: cursorAngle }}
              animate={{ opacity: 1, scale: 1, rotate: cursorAngle }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ 
                rotate: { type: "spring", stiffness: 450, damping: 30 },
                default: { duration: 0.25, ease: [0.65, 0, 0.35, 1] } 
              }}
              className="w-8 h-8 text-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
