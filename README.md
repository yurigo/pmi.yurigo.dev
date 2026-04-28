# pmi.yurigo.dev

Documentation site for the **Programación de Medios Interactivos (PMI)** course, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

- **Astro 5** — static site generator
- **Tailwind CSS 3** with `@tailwindcss/typography`
- **Astro Content Collections** for course content

## Development

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build to ./dist/
npm run preview  # preview the production build
```

## Content Organization

Course content lives in `src/content/course/` as Markdown files.

### Frontmatter Guide (new sessions)

Astro schema requirements in `src/content/config.ts`:
- Required: `title`, `section`, `order`
- Optional (schema): `description`, `duration`, `objectives`, `exercises`, `checklist`, `commonErrors`

Project convention (recommended for all new sessions):
- Use all 9 fields so every session has consistent metadata and teaching structure.

```md
---
title: "Sesion NN - Tema"
section: "HTML | CSS | JavaScript"
order: NN
description: "Resumen corto de la sesion"
duration: 2
objectives:
    - "Objetivo 1"
    - "Objetivo 2"
exercises:
    - title: "Ejercicio 1"
        description: "Descripcion breve del ejercicio"
    - title: "Ejercicio 2"
        description: "Descripcion breve del ejercicio"
checklist:
    - "Puedo hacer X"
    - "Entiendo Y"
commonErrors:
    - "Error frecuente 1"
    - "Error frecuente 2"
---
```

Rules of thumb:
- `order` must be numeric and unique.
- Keep `title` aligned with file number (example: `session19.md` -> `order: 19`).
- Keep `section` consistent (`HTML`, `CSS`, `JavaScript`) to preserve sidebar grouping.
- Use concise and actionable items in `objectives`, `checklist`, and `commonErrors`.

### Adding a New Lesson

1. Create `src/content/course/sessionNN.md`
2. Paste the template above and complete all fields
3. Write the lesson body below the closing `---`

### Controlling Navigation Order

The `order` field in the frontmatter controls the order in which sessions appear in the sidebar and in the prev/next navigation. Sessions are sorted numerically by `order`.

### Section Grouping

Sessions are grouped in the sidebar by their `section` field. Current sections:
- `HTML` — Sessions 01–03 and 05
- `CSS` — Sessions 04 and 06–10

## Project Structure

```
src/
├── content/
│   ├── config.ts           # Collection schema
│   └── course/             # Markdown lesson files
├── layouts/
│   └── DocsLayout.astro    # Main layout with header + sidebar
├── components/
│   ├── Header.astro        # Top nav with dark mode toggle
│   ├── Sidebar.astro       # Section-grouped nav sidebar
│   └── PrevNext.astro      # Previous/Next lesson navigation
└── pages/
    ├── index.astro          # Home page with session cards
    └── course/
        ├── index.astro      # Table of contents
        └── [slug].astro     # Individual lesson pages
```