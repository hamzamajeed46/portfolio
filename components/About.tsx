const specs = [
  { label: "ROLE", value: "Software Engineer, AI/ML" },
  { label: "BASED", value: "Lahore, Pakistan (UTC+5)" },
  { label: "STACK", value: "Python · FastAPI · Django · LangGraph · Next.js" },
  { label: "CURRENTLY", value: "Building Mood Refresh, a RAG product recommendation engine" },
  { label: "EDUCATION", value: "BS Data Science, PUCIT, 2025" },
];

export default function About() {
  return (
    <section id="about" className="max-w-page mx-auto px-6 py-20">
      <p className="eyebrow text-slate mb-3">01 — about</p>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <p className="text-lg sm:text-xl leading-relaxed text-parchment">
            I&apos;m an engineer who got tired of AI demos that only talk. My
            background is in data science, but most of my time goes into the
            unglamorous half of AI products: the backend services, vector
            stores, and orchestration logic that turn a model into something
            a real user can rely on.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            At Meissasoft I ship backend APIs and wire LLMs into internal
            workflows. Outside of work I build my own products end-to-end —
            chatbots, trading platforms, recommendation engines — usually
            starting from &ldquo;this RAG pipeline is too slow&rdquo; and
            ending somewhere better.
          </p>
        </div>
        <div className="md:col-span-2 card p-5 font-mono text-xs self-start">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex gap-3 py-2.5 ${i !== 0 ? "border-t border-line" : ""}`}
            >
              <span className="text-slate w-24 shrink-0">{s.label}</span>
              <span className="text-parchment">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
