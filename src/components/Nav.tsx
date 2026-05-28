import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 right-0 z-30 px-4 md:px-14 py-6 md:py-7"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-3">
        <a href="#top" className="text-[11px] tracking-[0.3em] uppercase shrink-0">
          Anwesh
        </a>

        <nav className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-foreground/70">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="link-underline hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <a
            href="/Resume_Anwesh_Kumar_S_V.pdf"
            download="Resume_Anwesh_Kumar_S_V.pdf"
            className="link-underline text-accent font-bold hover:text-accent-coral transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
