const contacts = [
  { label: "Email", value: "hamzamajeed466@gmail.com", href: "mailto:hamzamajeed466@gmail.com" },
  { label: "Phone", value: "+92 349 4030936", href: "tel:+923494030936" },
  { label: "GitHub", value: "github.com/hamzamajeed46", href: "https://github.com/hamzamajeed46" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-majeed-746o",
    href: "https://linkedin.com/in/hamza-majeed-746o",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="max-w-page mx-auto px-6 py-20">
      <div className="divider mb-16" />
      <p className="eyebrow text-slate mb-3">06 — contact</p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">
        Let&apos;s build something that does more than answer.
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-xl">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card p-4"
          >
            <p className="font-mono text-[0.7rem] text-slate uppercase tracking-wide">{c.label}</p>
            <p className="text-parchment text-sm mt-1">{c.value}</p>
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-slate mt-16">
        // hamza majeed — lahore, pakistan — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
