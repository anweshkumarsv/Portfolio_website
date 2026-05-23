import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import githubIcon from "../assets/github.png";

const accents = ["accent-coral", "accent", "accent-citrus", "accent-moss", "accent-violet"];

const selectedProjects = [
  {
    n: "01",
    title: "MedImputeX",
    desc: "Medical Time-Series Data Imputation",
    year: "2026",
    tag: "ML Research",
    detailedDesc: "Tackled the real-world problem of missing data in Electronic Health Records using the MIMIC-IV dataset from PhysioNet. Implemented and benchmarked three state-of-the-art models — BRITS (Bidirectional RNN), SAITS (Self-Attention), and GAIN (GAN-based) — each trained independently on medical time-series data. Designed a Fusion Network that learns optimal weights to combine all three models, outperforming every individual baseline on MAE and RMSE.",
    tools: ["Python", "PyTorch/TensorFlow", "MIMIC-IV (PhysioNet)", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    n: "02",
    title: "College Result Analysis & Visualization",
    desc: "SEE scores & attendance analytics dashboards",
    year: "2025",
    tag: "Data Viz",
    detailedDesc: "Analyzed semester-wise student performance by integrating SEE scores and attendance records across departments to surface actionable academic insights. Cleaned and preprocessed raw institutional data to uncover patterns like attendance–performance correlations and subject-wise failure rates. Delivered interactive dashboards to faculty stakeholders to support data-driven academic decision-making.",
    tools: ["Python", "Pandas", "Microsoft Excel", "Tableau"],
  },
  {
    n: "03",
    title: "Real Estate Price Prediction",
    desc: "Full-stack price prediction model & Flask API",
    year: "2024",
    tag: "ML / Web",
    detailedDesc: "Built a full-stack web application that predicts residential property prices in Bengaluru based on area, BHK configuration, bathrooms, and location. Applied feature engineering, outlier removal, and dimensionality reduction on the housing dataset, achieving strong accuracy with Linear Regression. Deployed as a Flask REST API with a live interactive frontend for real-time price predictions.",
    tools: ["Python", "Pandas", "Scikit-learn", "Flask", "HTML", "CSS", "JavaScript"],
  },
];

const sideProjects = [
  { n: "01", title: "Advanterra", desc: "Web presence for a Bengaluru-based construction company", year: "2025", tag: "Freelance", href: "https://advanterra.in" },
  { n: "02", title: "Dhanvith Fincare", desc: "Brand site for a financial advisory LLP", year: "2025", tag: "Freelance", href: "https://dhanvithfincare.com" },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const labelX2 = useTransform(scrollYProgress, [0, 1], [50, -50]); // Elegantly slides in opposite direction!

  return (
    <section id="work" ref={ref} className="px-8 md:px-14 py-24 md:py-32 border-t hairline overflow-hidden">
      {/* SECTION 1: SELECTED WORK */}
      <motion.div style={{ x: labelX }} className="mb-16 flex items-center justify-between select-none">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-1">
          <span className="text-accent-coral">[</span> Selected Work{" "}
          <span className="text-accent-coral">]</span>
          <a 
            href="https://github.com/anweshkumarsv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-display font-black text-accent hover:text-accent-coral pb-0.5 border-b border-accent/25 hover:border-accent-coral/50 transition-all duration-300 ml-4 pointer-events-auto cursor-none select-none hover:scale-105 active:scale-95 group"
            title="View all projects on GitHub (anweshkumarsv)"
          >
            <svg className="w-3.5 h-3.5 text-accent group-hover:text-accent-coral transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>view all projects</span>
          </a>
        </h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
          {String(selectedProjects.length).padStart(2, "0")} Projects
        </span>
      </motion.div>

      <ul className="border-t hairline">
        {selectedProjects.map((p, i) => (
          <motion.li
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
            whileTap={{ scale: 0.995 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
            className="border-b hairline group cursor-pointer overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 py-7 md:py-8 items-baseline relative">
              <span className="col-span-2 md:col-span-1 text-[10px] text-muted-foreground tabular-nums uppercase tracking-[0.2em]">
                <span className={`text-${accents[i % accents.length]} mr-2`}>●</span>
                {p.n}
              </span>
              <span className="col-span-7 md:col-span-5 font-display text-xl md:text-3xl lg:text-4xl tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-3">
                {p.title}
              </span>
              <span className="hidden md:block md:col-span-4 text-sm text-muted-foreground transition-all duration-300 group-hover:opacity-40">
                {p.desc}
              </span>
              <span className="col-span-3 md:col-span-2 text-right text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.tag} · {p.year}
              </span>

              <motion.span
                initial={false}
                className={`absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] bg-${accents[i % accents.length]}`}
              />
            </div>
            
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: hoveredIndex === i ? "auto" : 0,
                opacity: hoveredIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-8 pt-2 pl-[calc(16.666667%+1rem)] md:pl-[calc(8.333333%+1rem)] pr-4 grid md:grid-cols-12 gap-6 border-t border-dashed border-border/10">
                <div className="md:col-span-8 space-y-4 pt-4">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed select-text">
                    {p.detailedDesc}
                  </p>
                </div>
                <div className="md:col-span-4 space-y-3 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Tools Used
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                    {p.tools.map((tool, idx) => (
                      <div key={tool} className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-bold text-${accents[i % accents.length]} transition-transform duration-300 hover:scale-105 select-none`}>
                          {tool}
                        </span>
                        {idx < p.tools.length - 1 && (
                          <span className="text-muted-foreground/30 text-[9px] select-none">·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* SECTION 2: SIDE PROJECTS */}
      <motion.div style={{ x: labelX2 }} className="mt-24 mb-16 flex items-baseline justify-between select-none">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-accent">[</span> Side Projects{" "}
          <span className="text-accent">]</span>
        </h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
          {String(sideProjects.length).padStart(2, "0")} Projects
        </span>
      </motion.div>

      <ul className="border-t hairline">
        {sideProjects.map((p, i) => (
          <motion.li
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
            whileTap={{ scale: 0.99 }}
            className="border-b hairline group"
          >
            <a 
              href={p.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="grid grid-cols-12 gap-4 py-7 md:py-8 items-baseline relative"
            >
              <span className="col-span-2 md:col-span-1 text-[10px] text-muted-foreground tabular-nums uppercase tracking-[0.2em]">
                <span className={`text-${accents[(i + 3) % accents.length]} mr-2`}>●</span>
                {p.n}
              </span>
              <span className="col-span-7 md:col-span-5 font-display text-2xl md:text-4xl tracking-tight flex flex-col md:flex-row md:items-baseline gap-x-2 relative select-text">
                <span className={`text-xs md:text-sm font-mono font-black tracking-wider lowercase text-${accents[(i + 3) % accents.length]} opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] shrink-0 select-none`}>
                  click to view →
                </span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1">
                  {p.title}
                </span>
              </span>
              <span className="hidden md:block md:col-span-4 text-sm text-muted-foreground">
                {p.desc}
              </span>
              <span className="col-span-3 md:col-span-2 text-right text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.tag} · {p.year}
              </span>

              <motion.span
                initial={false}
                className={`absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] bg-${accents[(i + 3) % accents.length]}`}
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
