# Placeholder images

Until real photography is supplied, this folder holds local placeholder
assets. The live site currently references hosted placeholders via
`https://picsum.photos/seed/...` and `https://placehold.co/...` in the
Markdown content blocks and `seo.featured_image` fields.

To swap in real assets:

1. Drop your files here, e.g. `hero.jpg`, `product-01.jpg`, `team-01.jpg`.
2. In CloudCannon (or the Markdown files under `src/content/`), replace the
   `image` / `featured_image` URL with `/images/placeholders/hero.jpg`.
3. Always keep the matching `image_alt` descriptive and accessible.

Suggested naming:
- `hero.jpg` — wide homepage hero (≈1200×1400 or 1600×900)
- `product-01.jpg` … `product-NN.jpg` — square product shots (≈800×800)
- `team-01.jpg` … `team-NN.jpg` — square team portraits (≈800×800)
- `logo-01.svg` — press / stockist logos (any aspect)
