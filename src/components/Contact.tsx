import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import resumePdf from "@/assets/resume_anwesh_kumar_s_v (2).pdf";

const icons: Record<string, React.ReactNode> = {
  Email: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Location: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Resume: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
};

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="contact" ref={ref} className="px-8 md:px-14 py-28 md:py-40 border-t hairline overflow-hidden">
      <div className="max-w-3xl">
        <motion.div style={{ x: labelX }} className="mb-10 block select-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-accent-citrus">[</span> Get in touch{" "}
            <span className="text-accent-citrus">]</span>
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-5xl md:text-8xl leading-[0.95] tracking-[-0.03em]"
          >
            Let's <span className="text-accent-coral">work</span>
          </motion.h2>
        </div>
        <div className="overflow-hidden pb-4 -mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
            className="font-display text-5xl md:text-8xl leading-[1.0] tracking-[-0.03em]"
          >
            <a
              href="mailto:anweshkumarsv@gmail.com"
              className="link-underline italic text-accent"
            >
              together.
            </a>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 pt-10 border-t hairline">
          {[
            ["Email", "anweshkumarsv@gmail.com", "mailto:anweshkumarsv@gmail.com", "accent", false],
            ["Phone", "+91 89700 32228", "tel:+918970032228", "accent-coral", false],
            ["Location", "Bengaluru, IN", "#", "accent-moss", false],
            ["LinkedIn", "www.linkedin.com/in/anwesh-kumar-sv", "https://www.linkedin.com/in/anwesh-kumar-sv", "accent-violet", false],
            ["GitHub", "https://github.com/anweshkumarsv", "https://github.com/anweshkumarsv", "accent-citrus", false],
            ["Resume", "Download PDF", resumePdf, "accent-coral", true],
          ].map(([k, v, href, c, isDownload], i) => (
            <motion.div
              key={k as string}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
              whileTap={{ scale: 0.98 }}
              className="group relative pb-6 transition-all duration-300 cursor-none select-none"
            >
              {/* Bottom Divider Accent Line Draw */}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-${c as string}`} />

              <div className="space-y-2 relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2 select-none">
                  <span className={`text-${c as string} transition-transform duration-300 group-hover:scale-110 flex items-center`}>
                    {icons[k as string]}
                  </span>
                  {k as string}
                </div>
                {href !== "#" ? (
                  isDownload ? (
                    <a href={href as string} download="Resume_Anwesh_Kumar_S_V.pdf" title={v as string} className="link-underline text-sm font-medium block truncate">
                      {v as string}
                    </a>
                  ) : (
                    <a href={href as string} target="_blank" rel="noopener noreferrer" title={v as string} className="link-underline text-sm font-medium block truncate">
                      {v as string}
                    </a>
                  )
                ) : (
                  <span className="text-sm font-medium block truncate select-text">
                    {v as string}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Highlighted Centered Return Arrow */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-24 flex flex-col items-center justify-center select-none w-full"
      >
        <a 
          href="#top" 
          className="group flex flex-col items-center gap-3 pointer-events-auto cursor-none"
          title="Return to Top"
        >
          {/* The Highlighted Arrow Symbol in the Middle */}
          <div className="h-12 w-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(85,110,230,0.35)]">
            <svg 
              className="w-5 h-5 text-accent transition-all duration-500 group-hover:text-canvas group-hover:-translate-y-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
          <span className="font-display text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 transition-colors duration-300 group-hover:text-accent font-bold">
            Return to Top
          </span>
        </a>
      </motion.div>
    </section>
  );
}
