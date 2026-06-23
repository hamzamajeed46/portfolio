const groups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "Django",
      "FastAPI",
      "Flask",
      "LangChain",
      "LangGraph",
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Next.js",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git / GitHub",
      "Docker",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Pinecone",
      "Qdrant",
      "Cursor",
      "Claude Code",
      "Hugging Face",
      "MLflow",
      "Postman",
      "Streamlit",
      "Power BI",
    ],
  },
  {
    label: "AI/ML Expertise",
    items: [
      "Agentic AI",
      "RAG",
      "LLM Integration",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Computer Vision",
      "Model Deployment",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-page mx-auto px-6 py-20">
      <p className="eyebrow text-slate mb-3">04 — skills</p>
      <h2 className="font-display font-bold text-3xl mb-10">What I work with</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-teal mb-3">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
