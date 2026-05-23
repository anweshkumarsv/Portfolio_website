import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import portrait from "@/assets/anwesh.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative px-8 md:px-14 pt-32 md:pt-40 pb-20 md:pb-28"
    >
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* LEFT COLUMN: Texts and Details (col-span-7) */}
        <motion.div
          style={{ opacity: sideOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          className="md:col-span-7 space-y-8 md:space-y-12"
        >
          {/* Availability Status Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-ghost border border-border select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-moss opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-moss" />
              </span>
              Available for roles · 2026
            </span>
          </div>

          {/* Main Statement */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              B.Tech CSE Student @ DSCE Bengaluru
            </p>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.1] tracking-tight text-foreground">
              Building <span className="text-accent-coral">intelligent ML/DL systems</span>, AI models, and deep data insights.
            </h2>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed pt-2">
              Turning complex real-world data into actionable insights, robust machine learning architectures, and deep learning solutions. Passionate about AI integration and data-driven systems engineering.
            </p>
          </div>

          {/* Meta Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-hairline max-w-xl">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Expertise</p>
              <p className="text-sm font-medium">ML Engineer</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
              <p className="text-sm font-medium">AI & Data Science</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</p>
              <p className="text-sm font-medium">Bengaluru, IN</p>
            </div>
          </div>

          {/* Social Connect Row */}
          <div className="flex flex-wrap items-center gap-5 pt-6 select-none pointer-events-auto">
            <a 
              href="https://www.linkedin.com/in/anwesh-kumar-sv"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn: www.linkedin.com/in/anwesh-kumar-sv"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-accent/20 bg-accent/5 text-accent hover:text-accent-coral hover:border-accent-coral hover:bg-accent-coral/5 transition-all duration-300 group cursor-none hover:scale-110 hover:shadow-[0_0_15px_rgba(85,110,230,0.2)]"
            >
              <svg className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-115" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="https://github.com/anweshkumarsv"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub: https://github.com/anweshkumarsv"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-accent/20 bg-accent/5 text-accent hover:text-accent-coral hover:border-accent-coral hover:bg-accent-coral/5 transition-all duration-300 group cursor-none hover:scale-110 hover:shadow-[0_0_15px_rgba(85,110,230,0.2)]"
            >
              <svg className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-115" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Perfectly Circular & Larger Image (col-span-5) */}
        <motion.div
          style={{ opacity: sideOpacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative group select-none w-full max-w-[380px] md:max-w-[440px] aspect-square">
            {/* Ambient Circular Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-accent-coral/10 to-accent-moss/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Elegant Scaling Outer Circle Ring */}
            <div className="absolute -inset-1.5 border border-accent/20 rounded-full scale-100 group-hover:scale-103 group-hover:border-accent/40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none" />

            {/* Main Circular Picture Container */}
            <div className="relative w-full h-full overflow-hidden rounded-full border border-border/80 bg-ghost shadow-2xl transition-all duration-500 group-hover:border-accent/30">
              <motion.img
                style={{ y: imgY, scale: imgScale }}
                src={portrait}
                alt="Anwesh Kumar S V"
                className="absolute inset-0 w-full h-[115%] object-cover object-top grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 rounded-full pointer-events-none"
              />
            </div>
          </div>
        </motion.div>
      </div>


      <motion.div style={{ y: titleY }} className="mt-16 md:mt-20 overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
          className="font-display text-[20vw] md:text-[15vw] leading-[0.85] tracking-[-0.05em] uppercase"
        >
          Anw<span className="italic text-accent">e</span>sh
        </motion.h1>
      </motion.div>
    </section>
  );
}
