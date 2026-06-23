import ProjectCard from "./ProjectCard";

const projects = [
  {
    eyebrow: "Agentic AI · SaaS",
    title: "MeiChat",
    period: "2024 — 2025",
    description:
      "A multi-tenant SaaS platform for spinning up custom AI chatbots with their own scope, instructions, and guardrails. A LangGraph agent handles tool calling, RAG retrieval, and lead capture on its own, embeddable on any site via a lightweight JS widget.",
    stack: ["FastAPI", "LangGraph", "Pinecone", "JavaScript"],
    link: { href: "https://chat.meissasoft.com/", label: "chat.meissasoft.com" },
  },
  {
    eyebrow: "RAG · Product Search",
    title: "Mood Refresh",
    period: "2026",
    description:
      "A RAG-powered product recommendation engine for furniture shopping. Give it a room and a style preference, and it retrieves and ranks matching pieces from a vector store instead of relying on keyword search.",
    stack: ["Qdrant", "FastAPI", "PostgreSQL", "OpenAI API", "Coolify"],
    link: { href: "https://moodrefresh.com/", label: "moodrefresh.com" },
  },
  {
    eyebrow: "ML · Trading Platform",
    title: "Velo Lab",
    period: "Sep — Nov 2025",
    description:
      "An AI trading and backtesting platform for training and comparing ML models across stock tickers, with a versioned recipe system for reproducible strategies and an async backend that streams training progress over WebSockets.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "TensorFlow", "scikit-learn", "AWS EC2"],
    link: { href: "https://velolab.io", label: "velolab.io" },
  },
  {
    eyebrow: "LLM · Final Year Project",
    title: "AI-Powered SEO Analysis Tool",
    period: "Oct 2024 — Jun 2025",
    description:
      "A site auditor that scores a website's SEO health and turns the findings into plain-language recommendations, using a Llama 3 70B model on Groq to do the explaining.",
    stack: ["Flask", "Groq", "BeautifulSoup", "MongoDB"],
    link: {
      href: "https://github.com/hamzamajeed46/An-AI-powered-SEO-Tool---FYP-",
      label: "github.com/hamzamajeed46",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-page mx-auto px-6 py-20">
      <p className="eyebrow text-slate mb-3">03 — projects</p>
      <h2 className="font-display font-bold text-3xl mb-10">Things I&apos;ve shipped</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
