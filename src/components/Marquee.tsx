const items = [
  "Machine Learning", "Deep Learning", "Web Development",
  "AI Integration", "Data Analysis", "Python", "PyTorch", "SQL",
];

export function Marquee() {
  return (
    <div className="border-y hairline py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 text-xl md:text-3xl font-display uppercase whitespace-nowrap tracking-tight">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-foreground/70">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
