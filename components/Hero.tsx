import AgentGraph from "./AgentGraph";

export default function Hero() {
  return (
    <section id="top" className="max-w-page mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 font-mono text-[0.7rem] text-teal mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-60 node-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            available for work · remote
          </span>
          <p className="eyebrow text-teal mb-5">// backend · agentic ai · rag</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            I build the systems that let AI{" "}
            <span className="text-gradient">act</span>, not just answer.
          </h1>
          <p className="mt-6 text-slate text-base sm:text-lg leading-relaxed max-w-md">
            Software engineer specializing in agentic AI, RAG pipelines, and
            the FastAPI / Django services that hold them together. Based in
            Lahore, Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="font-mono text-sm bg-amber text-ink px-5 py-3 rounded hover:bg-parchment transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border border-line px-5 py-3 rounded text-parchment hover:border-teal hover:text-teal transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="rise-in" style={{ animationDelay: "0.15s" }}>
          <AgentGraph />
        </div>
      </div>
    </section>
  );
}
