type ProjectCardProps = {
  eyebrow: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
  link?: { href: string; label: string };
};

export default function ProjectCard({
  eyebrow,
  title,
  period,
  description,
  stack,
  link,
}: ProjectCardProps) {
  return (
    <div className="card group p-6 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[0.7rem] text-amber uppercase tracking-wide">{eyebrow}</p>
        <p className="font-mono text-[0.7rem] text-slate whitespace-nowrap">{period}</p>
      </div>
      <h3 className="font-display font-bold text-xl mt-3 group-hover:text-teal transition-colors">
        {title}
      </h3>
      <p className="text-slate text-sm leading-relaxed mt-3 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-teal mt-5 inline-flex items-center gap-1.5 hover:text-parchment transition-colors"
        >
          {link.label}{" "}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      )}
    </div>
  );
}
