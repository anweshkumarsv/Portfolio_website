import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import githubIcon from "../assets/github.png";
import customerBehaviorPowerBI from "../assets/customer_behavior_powerbi.png";
import customerBehaviorDashboard from "../assets/customer_behavior_dashboard.png";

const accents = ["accent-coral", "accent", "accent-citrus", "accent-moss", "accent-violet"];

interface Project {
  n: string;
  title: string;
  desc: string;
  year: string;
  tag: string;
  detailedDesc: string;
  tools: string[];
  image?: string;
  images?: { label: string; src: string }[];
  github?: string;
}

const selectedProjects: Project[] = [
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
    title: "Customer Shopping Behavior Analysis",
    desc: "Transactional customer analytics & interactive Power BI dashboards",
    year: "2026",
    tag: "Data Analytics",
    detailedDesc: "Leveraged Python & Pandas to preprocess transaction records and perform cohort and demographic segmentation. Integrated PostgreSQL with 10 business queries to extract key sales, loyalty patterns, and product trends. Developed interactive Power BI dashboards highlighting customer subscription status, shipping modes, and spending distributions to support data-driven strategy.",
    tools: ["Python", "Pandas", "PostgreSQL", "Power BI", "SQL"],
    images: [
      { label: "Power BI Overview", src: customerBehaviorPowerBI },
      { label: "Detailed Analysis", src: customerBehaviorDashboard },
    ],
    github: "https://github.com/svanweshkumar/customer_behavior_analysis",
  },
  {
    n: "03",
    title: "College Result Analysis & Visualization",
    desc: "SEE scores & attendance analytics dashboards",
    year: "2025",
    tag: "Data Viz",
    detailedDesc: "Analyzed semester-wise student performance by integrating SEE scores and attendance records across departments to surface actionable academic insights. Cleaned and preprocessed raw institutional data to uncover patterns like attendance–performance correlations and subject-wise failure rates. Delivered interactive dashboards to faculty stakeholders to support data-driven academic decision-making.",
    tools: ["Python", "Pandas", "Microsoft Excel", "Tableau"],
  },
  {
    n: "04",
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
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  const getActiveImageIndex = (projectId: string) => activeImageIndices[projectId] || 0;
  const setActiveImageIndex = (projectId: string, index: number) => {
    setActiveImageIndices(prev => ({ ...prev, [projectId]: index }));
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const labelX2 = useTransform(scrollYProgress, [0, 1], [50, -50]); // Elegantly slides in opposite direction!

  const isMobile = useIsMobile();
  const headerX = isMobile ? 0 : labelX;
  const headerX2 = isMobile ? 0 : labelX2;

  return (
    <section id="work" ref={ref} className="px-8 md:px-14 py-24 md:py-32 border-t hairline overflow-hidden">
      {/* SECTION 1: SELECTED WORK */}
      <motion.div style={{ x: headerX }} className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between select-none">
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-accent-coral">[</span> Selected Work{" "}
            <span className="text-accent-coral">]</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums sm:hidden">
            {String(selectedProjects.length).padStart(2, "0")} Projects
          </span>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
          <a
            href="https://github.com/anweshkumarsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-display font-black text-accent hover:text-accent-coral pb-0.5 border-b border-accent/25 hover:border-accent-coral/50 transition-all duration-300 pointer-events-auto cursor-none select-none hover:scale-105 active:scale-95 group"
            title="View all projects on GitHub (anweshkumarsv)"
          >
            <svg className="w-3.5 h-3.5 text-accent group-hover:text-accent-coral transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>view all projects</span>
          </a>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
            {String(selectedProjects.length).padStart(2, "0")} Projects
          </span>
        </div>
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
                {(() => {
                  const projectImages = p.images || (p.image ? [{ label: "Preview", src: p.image }] : []);
                  const hasImages = projectImages.length > 0;
                  return (
                    <div className="pb-8 pt-2 pl-[calc(16.666667%+1rem)] md:pl-[calc(8.333333%+1rem)] pr-4 grid md:grid-cols-12 gap-8 border-t border-dashed border-border/10">
                      <div className={`${hasImages ? "md:col-span-7" : "md:col-span-8"} space-y-5 pt-4`}>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed select-text text-justify md:text-left">
                          {p.detailedDesc}
                        </p>
                        {p.github && (
                          <div className="pt-2 select-none pointer-events-auto">
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-display font-black text-accent hover:text-accent-coral pb-0.5 border-b border-accent/25 hover:border-accent-coral/50 transition-all duration-300 pointer-events-auto cursor-none select-none hover:scale-105 active:scale-95 group/link"
                              title={`Explore codebase for ${p.title}`}
                            >
                              <svg className="w-3.5 h-3.5 text-accent group-hover/link:text-accent-coral transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                              </svg>
                              <span>explore codebase</span>
                            </a>
                          </div>
                        )}
                      </div>
                      <div className={`${hasImages ? "md:col-span-5" : "md:col-span-4"} space-y-5 pt-4`}>
                        <div className="space-y-3">
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
                        {hasImages && (
                          <div className="space-y-3 pt-2">
                            {projectImages.length > 1 && (
                              <div className="flex flex-wrap gap-2 select-none pointer-events-auto">
                                {projectImages.map((img, idx) => {
                                  const isActive = getActiveImageIndex(p.n) === idx;
                                  return (
                                    <button
                                      key={img.label}
                                      id={`project-tab-${p.n}-${idx}`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveImageIndex(p.n, idx);
                                      }}
                                      className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-none select-none border ${
                                        isActive
                                          ? `bg-accent border-accent text-accent-foreground font-black scale-105 shadow-sm`
                                          : "bg-transparent border-border/80 text-muted-foreground hover:text-foreground font-bold hover:border-accent/50"
                                      }`}
                                    >
                                      {img.label}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                            <div 
                              data-cursor={`#project-tab-${p.n}-${getActiveImageIndex(p.n) === 0 ? 1 : 0}`}
                              className="relative group/img overflow-hidden rounded-xl border border-border/80 bg-ghost shadow-lg transition-all duration-500 hover:border-accent/30 max-w-full select-none cursor-none"
                            >
                              <img
                                src={projectImages[getActiveImageIndex(p.n)].src}
                                alt={`${p.title} Preview`}
                                className="w-full h-auto object-contain transition-all duration-700 ease-out group-hover/img:scale-[1.01]"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* SECTION 2: SIDE PROJECTS */}
      <motion.div style={{ x: headerX2 }} className="mt-24 mb-16 flex items-baseline justify-between select-none">
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
              <span className="col-span-7 md:col-span-5 font-display text-xl md:text-3xl lg:text-4xl tracking-tight flex flex-col lg:flex-row lg:items-baseline lg:gap-x-2 relative select-text">
                <span className={`hidden lg:inline-block text-xs lg:text-sm font-mono font-black tracking-wider lowercase text-${accents[(i + 3) % accents.length]} opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] shrink-0 select-none`}>
                  click to view →
                </span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1 lg:group-hover:translate-x-1">
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
