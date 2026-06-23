"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav className="max-w-page mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-parchment">
          hamza<span className="text-amber">@</span>portfolio
          <span className="text-slate">:~$</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-xs text-slate">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-teal ${
                  active === link.href ? "text-teal" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="font-mono text-xs border border-line px-3 py-1.5 rounded text-parchment hover:border-amber hover:text-amber transition-colors"
          >
            résumé ↓
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-1.5"
          >
            <span
              className={`block h-px w-5 bg-parchment transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-parchment transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-parchment transition-transform ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* scroll progress bar */}
      <div
        className="h-px bg-gradient-to-r from-teal to-amber transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-line/60 transition-[max-height] duration-300 ease-out ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2 font-mono text-sm text-slate">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line/40 last:border-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 transition-colors hover:text-teal ${
                  active === link.href ? "text-teal" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
