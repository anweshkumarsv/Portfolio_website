import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stats = [
  { n: "1st", l: "Best Social Project", c: "accent-coral" },
  { n: "07+", l: "Certifications", c: "accent-moss" },
];

const skillGroups = [
  { c: "accent", items: ["Machine Learning", "Deep Learning", "PyTorch", "Scikit-Learn"] },
  { c: "accent-coral", items: ["Python", "Pandas", "NumPy", "SQL"] },
  { c: "accent-moss", items: ["Data Analysis", "Tableau", "Flask", "AI Integration"] },
];

const timeline = [
  {
    year: "2026",
    institution: "Dayananda Sagar College of Engineering",
    location: "Bengaluru",
    detail: "B.Tech in Computer Science & Engineering",
    grade: "9 CGPA",
    c: "accent",
  },
  {
    year: "2022",
    institution: "Expert PU College",
    location: "Mangalore",
    detail: "Class XII",
    grade: "94%",
    c: "accent-coral",
  },
  {
    year: "2020",
    institution: "Sri Ramakrishna Vivekananda Residential School",
    location: "Sagar",
    detail: "Class X",
    grade: "96%",
    c: "accent-moss",
  },
];

const colorStyles: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  accent: {
    text: "text-accent",
    bg: "bg-accent/8 dark:bg-accent/15",
    border: "border-accent/15 dark:border-accent/25",
    glow: "shadow-[0_0_15px_rgba(85,110,230,0.08)] dark:shadow-[0_0_20px_rgba(85,110,230,0.15)]",
  },
  "accent-coral": {
    text: "text-accent-coral",
    bg: "bg-accent-coral/8 dark:bg-accent-coral/15",
    border: "border-accent-coral/15 dark:border-accent-coral/25",
    glow: "shadow-[0_0_15px_rgba(220,100,80,0.08)] dark:shadow-[0_0_20px_rgba(220,100,80,0.15)]",
  },
  "accent-moss": {
    text: "text-accent-moss",
    bg: "bg-accent-moss/8 dark:bg-accent-moss/15",
    border: "border-accent-moss/15 dark:border-accent-moss/25",
    glow: "shadow-[0_0_15px_rgba(90,170,120,0.08)] dark:shadow-[0_0_20px_rgba(90,170,120,0.15)]",
  },
};

function Word({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom mr-[0.25em]">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Dynamic vertical line draw scroll animation
  const { scrollYProgress: lineScroll } = useScroll({
    target: refTimeline,
    offset: ["start end", "center center"],
  });
  const lineScaleY = useTransform(lineScroll, [0, 1], [0, 1]);

  const sentence =
    "Computer Science student at DSCE Bengaluru — turning messy real-world data into intelligent ML/DL systems, predictive insights, and robust AI solutions.";
  const words = sentence.split(" ");

  return (
    <section id="about" ref={ref} className="px-8 md:px-14 py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        {/* LEFT COLUMN: Header & Key Metrics Sidebar (col-span-4) */}
        <div className="md:col-span-4 space-y-12">
          <motion.div style={{ x: labelX }} className="select-none">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-accent-violet">[</span> About{" "}
              <span className="text-accent-violet">]</span>
            </span>
          </motion.div>

          {/* Staggered Key Metrics (Spaced out vertically to balance left side) */}
          <div className="space-y-12 pt-8 border-t hairline max-w-[240px]">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground select-none">
              Key Metrics
            </div>
            <div className="space-y-20">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative py-2 transition-all duration-300 cursor-none select-none"
                >
                  <div className="font-display text-3xl md:text-4xl transition-transform duration-500 origin-left group-hover:translate-x-1.5 group-hover:text-accent">
                    {s.n}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 flex items-center gap-2">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full bg-${s.c} group-hover:scale-125 transition-transform`} />
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Intro Statement, Timeline, and Toolkit (col-span-8) */}
        <div className="md:col-span-8 space-y-24 md:space-y-32">
          <h3 className="font-display text-2xl md:text-4xl leading-[1.2] tracking-tight max-w-2xl">
            {words.map((w, i) => {
              const colored =
                w.includes("DSCE") ? "text-accent" :
                w.includes("ML/DL") ? "text-accent-coral" :
                w.includes("AI") ? "text-accent-moss" : "";
              return (
                <Word key={i} delay={i * 0.04}>
                  <span className={colored}>{w}</span>
                </Word>
              );
            })}
          </h3>

          {/* Academic Roadmap Vertical Timeline Section */}
          <div className="pt-16 border-t hairline space-y-16">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground select-none">
              Academic Roadmap
            </div>

            <div ref={refTimeline} className="relative pl-8 md:pl-10 py-4">
              {/* Central Vertical Line (Scroll-drawing) */}
              <div className="absolute left-2.5 top-0 bottom-0 w-px bg-border/40" />
              <motion.div 
                style={{ scaleY: lineScaleY, originY: 0 }}
                className="absolute left-2.5 top-0 bottom-0 w-px bg-accent-violet"
              />              {/* Timeline Items */}
              <div className="space-y-16">
                {timeline.map((item, i) => {
                  const styles = colorStyles[item.c] || colorStyles.accent;
                  return (
                    <motion.div
                    key={item.institution}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] }}
                    whileTap={{ scale: 0.99 }}
                    className="group relative flex gap-6 items-start justify-between w-full"
                  >
                    {/* Branch Junction Dot */}
                    <div className="absolute -left-[30px] md:-left-[35px] top-[7px] z-10 flex items-center justify-center">
                      <span className="relative flex h-3 w-3">
                        <span className={`absolute inline-flex h-full w-full rounded-full bg-${item.c} opacity-30 group-hover:animate-ping`} />
                        <span className={`relative inline-flex h-3 w-3 rounded-full border border-canvas bg-${item.c} group-hover:scale-110 transition-transform duration-300`} />
                      </span>
                    </div>

                    {/* Branch Horizontal Arm Line */}
                    <div className="absolute -left-6 top-[13px] w-6 h-px bg-border/40 group-hover:bg-accent/40 transition-colors pointer-events-none" />

                    {/* Content Details Block */}
                    <div className="space-y-1.5 transition-transform duration-500 ease-out group-hover:translate-x-2 select-text flex-1 min-w-0 pr-4">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className={`font-mono text-sm font-semibold text-${item.c} select-none`}>
                          {item.year}
                        </span>
                        <h4 className="font-display text-xl md:text-2xl text-foreground font-bold leading-snug">
                          {item.institution}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span className="font-medium">{item.detail}</span>
                        <span className="text-muted-foreground/30 select-none">·</span>
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Highly Highlighted Academic Score on the Right (Clean & Box-Free) */}
                    <div className="text-right ml-auto pl-4 select-none shrink-0 transition-all duration-500 group-hover:scale-105 origin-right flex flex-col items-end justify-center">
                      <div className={`font-display text-2xl md:text-3xl font-black tracking-tight ${styles.text}`}>
                        {item.grade}
                      </div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground/45 font-mono mt-0.5">
                        Score
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </div>
            </div>
          </div>

          {/* Toolkit Section (Restored to the right column with luxurious spacing) */}
          <div className="pt-16 border-t hairline space-y-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground select-none">
              Toolkit
            </div>
            <div className="space-y-6">
              {skillGroups.map((g, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.65, 0, 0.35, 1] }}
                  className="flex flex-wrap items-center gap-4 text-base"
                >
                  <span className={`inline-block h-2.5 w-2.5 rounded-full bg-${g.c}`} />
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {g.items.map((s) => (
                      <motion.span
                        key={s}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 450, damping: 15 }}
                        className={`inline-flex items-center font-mono text-xs md:text-sm font-bold cursor-none select-none transition-colors duration-300 ${
                          g.c === "accent" ? "hover:text-accent" :
                          g.c === "accent-coral" ? "hover:text-accent-coral" :
                          "hover:text-accent-moss"
                        }`}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
