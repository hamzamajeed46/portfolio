export default function Experience() {
  return (
    <section id="experience" className="max-w-page mx-auto px-6 py-20">
      <p className="eyebrow text-slate mb-3">02 — experience</p>
      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display font-bold text-2xl">Meissasoft</h3>
          <span className="font-mono text-xs text-slate">Aug 2025 — Present</span>
        </div>
        <p className="font-mono text-sm text-amber mt-1">Python Developer · Lahore, Pakistan</p>
        <ul className="mt-5 space-y-3 text-slate leading-relaxed">
          <li className="flex gap-3">
            <span className="text-teal mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            Build and maintain backend APIs in FastAPI and Django, cutting response latency by 25%.
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            Integrate LLMs into internal systems for automation, knowledge retrieval, and user-facing workflows.
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            Deploy and operate services on AWS EC2, with an eye on uptime, security, and resource cost.
          </li>
        </ul>
      </div>
    </section>
  );
}
