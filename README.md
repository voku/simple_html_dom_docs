# simple_html_dom docs site

This repository contains the Vite-powered documentation and landing page for [`voku/simple_html_dom`](https://github.com/voku/simple_html_dom).

## Stack

- React 19
- Vite 6
- Tailwind CSS 4
- TypeScript

## Local development

No environment variables are required for normal development or GitHub Pages deployment.

```bash
npm install
npm run dev
```

The app starts on `http://localhost:3000`.

## Available scripts

```bash
npm run dev      # local dev server
npm run lint     # TypeScript type-check
npm run build    # production build
npm run preview  # preview the production build
```

## Deployment

The site is configured for GitHub Pages deployment from the `main` branch with the workflow at `.github/workflows/deploy.yml`.

Deployment flow:

1. Push changes to `main`
2. GitHub Actions runs `npm ci`, `npm run lint`, and `npm run build`
3. The built `dist/` output is deployed to GitHub Pages

Make sure the repository Pages setting uses **GitHub Actions** as the source.

## Key files

- `index.html` — SEO, Open Graph, Twitter card, canonical URL, and favicon metadata
- `vite.config.ts` — Vite config plus GitHub Pages base path handling
- `src/App.tsx` — main docs/landing page layout
- `src/data/examples.ts` — PHP code samples shown in the UI
- `src/components/CodeBlock.tsx` — syntax-highlighted code renderer
- `public/favicon.svg` — browser favicon
- `public/social-preview.svg` — share image used by social metadata
- `.github/workflows/deploy.yml` — automated GitHub Pages deployment

## Key Files Detector helper prompt

```text
You are editing the simple_html_dom docs site. Before making changes, inspect:
- index.html for metadata, favicon, and page-level SEO tags
- vite.config.ts for GitHub Pages base path behavior
- src/App.tsx for layout and content structure
- src/data/examples.ts for example snippets and labels
- src/components/CodeBlock.tsx for code presentation
- public/favicon.svg and public/social-preview.svg for site branding assets
- .github/workflows/deploy.yml for deployment behavior

If the requested change affects documentation, deployment, metadata, branding, or examples, start with the matching file from this list.
```

## Verification

Before merging, run:

```bash
npm run lint
npm run build
```
