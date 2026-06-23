# Hamza Majeed — Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and
Tailwind CSS. The hero features a small animated diagram of an agent
retrieve → reason → tool-call loop — a nod to the agentic AI / RAG work this
site is showcasing.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app, so it deploys as-is to Vercel, or anywhere
else that runs Node (including a Coolify instance, similar to the Mood
Refresh deployment).

## Editing content

- Copy/text for each section lives directly in the matching file under
  `components/` (e.g. `components/Projects.tsx`, `components/Skills.tsx`).
- Contact details are in `components/Footer.tsx` — double check the LinkedIn
  URL, since it was OCR'd from a PDF and may need a fix.
- Swap `public/resume.pdf` for an updated résumé any time; the "résumé ↓"
  button in the nav always points to that file.
- Colors and fonts are defined in `tailwind.config.ts` and `app/layout.tsx`.
