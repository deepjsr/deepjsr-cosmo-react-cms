# Lumière Skin — Chaipress / Astro CMS

A cosmetics & beauty marketing site generated from the **Chaipress** **Astro** CMS
template. Content is authored as Markdown + JSON and edited visually in
[CloudCannon](https://cloudcannon.com/).

> Example client build: **Lumière Skin** — soft blush / rose-gold / cream theme,
> serif display headings. The tech stack and folder layout are fixed by the
> template; only content, copy and theme vary per client.

## Tech stack

- [Astro 5](https://astro.build/) (`astro`) with [`@astrojs/react`](https://docs.astro.build/en/guides/integrations-guide/react/)
- [React 19](https://react.dev/) (`react`, `react-dom`)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` + `@tailwindcss/typography`
- [CloudCannon editable regions](https://github.com/CloudCannon/editable-regions) (`@cloudcannon/editable-regions`) + `cloudcannon.config.yml`
- [`astro-seo`](https://github.com/jonasmerlin/astro-seo) for SEO
- TypeScript 5
- Markdown collections (`pages`, `posts`) + JSON data (`data/*.json`)

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:4321)
npm run build      # build the static site to ./dist
npm run preview    # preview the production build
npm run astro      # run the Astro CLI
npm run check      # type-check with astro check
```

## Project structure

```
.
├── astro.config.mjs          # Astro + React + Tailwind + CloudCannon integrations
├── cloudcannon.config.yml    # CloudCannon collections, inputs, structures
├── data/                     # Site-wide JSON settings (edited in CloudCannon)
│   ├── site.json             # Site title, description, favicon, OG image
│   ├── navigation.json       # Header navigation links
│   ├── footer.json           # Footer columns + copyright
│   ├── social.json           # Social links
│   └── theme.json            # Colours, fonts, radius, spacing (re-themes site)
├── public/                   # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   ├── global/           # Page-builder blocks (hero, features, faq, ...)
│   │   │   ├── ContentBlocks.astro   # maps content_blocks -> components
│   │   │   ├── hero/ cta/ faq/ ...   # one folder per block
│   │   │   └── content-block/        # generic nested block
│   │   ├── layouts/          # Navigation + Footer chrome
│   │   └── shared/           # Button, SectionWrapper, ThemeInjector
│   ├── layouts/              # Layout.astro, PageLayout.astro, PostLayout.astro
│   ├── pages/
│   │   ├── [...slug].astro   # renders the `pages` collection
│   │   └── blog/             # blog index + `posts` collection renderer
│   ├── content/
│   │   ├── pages/            # Markdown pages (home, shop, about, ...)
│   │   └── posts/            # Blog / "Routines" Markdown posts
│   ├── content.config.ts     # Zod schemas for pages & posts
│   └── styles/global.css     # Tailwind entry + theme CSS variables
└── .cloudcannon/
    ├── schemas/              # CloudCannon editing schemas (page, post, ...)
    └── *.json                # initial site settings
```

## Authoring content

### Pages

Pages live in `src/content/pages/*.md` and use a `content_blocks` array. Each
block references a global component via its `_name` (e.g. `global/hero`,
`global/features-grid`, `global/faq`):

```markdown
---
title: Home
content_blocks:
  - _name: global/hero
    heading: "Glow from within"
    subheading: "Clean, effective skincare."
    primary_button:
      text: "Shop now"
      link: /shop
  - _name: global/features-grid
    heading: "Why Lumière"
    features:
      - icon: "✿"
        title: "Clean formulas"
        text: "..."
seo:
  no_index: false
---

Optional Markdown body content rendered below the blocks.
```

Available blocks live in `src/components/global/*` and are auto-discovered by
CloudCannon via `*.cloudcannon.structure-value.yml` files.

### Blog / Routines

Blog posts live in `src/content/posts/*.md` with frontmatter
(`title`, `description`, `date`, `image`, `tags`, `draft`). Set `draft: true`
to hide a post from the live build.

### Site settings & theming

Edit the JSON files in `data/` to change navigation, footer, social links and
the **theme** (colours, heading/body fonts, corner radius, spacing). The theme
is injected as CSS custom properties at runtime, so editors can re-skin the
entire site from CloudCannon without touching code.

## Deployment

This is a **static** site (`output: "static"`). Build with `npm run build` and
deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, CloudCannon).

## Scaffolding a new client site

The fixed stack and layout are documented in `prompts/new-client-site.md`. To
create a new site, fill in the client brief there and author
`src/content/pages/*.md` with `content_blocks` referencing `global/<component>`.
