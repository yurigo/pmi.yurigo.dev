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

Course content lives in `src/content/course/` as Markdown files. Each file has frontmatter:

```md
---
title: "Sesión 01 - Introducción a Web"
section: "HTML"
order: 1
description: "Optional short description"
---
```

### Adding a New Lesson

1. Create a new file `src/content/course/sessionNN.md`
2. Add the required frontmatter fields: `title`, `section`, `order`
3. Write the content in Markdown below the `---` closing delimiter

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