# ilmer.me

Personal site of Ilmer Oliveira, Analytics Engineer. Built with [Astro](https://astro.build).

## Writing an article

1. Copy `src/content/writing/_template.md` to `src/content/writing/my-article.md`.
2. Fill in `title`, `description` and `date`, and remove `draft: true`.
3. Write the body in Markdown. It will be published at `/writing/my-article/`.

Case studies work the same way in `src/content/work/` (use `_template.md` there). `order` sets the position in the list.
Files starting with `_` are never published.

## Languages

The site is in English. The home and About pages also exist in Portuguese, Spanish and German
(`/pt/`, `/es/`, `/de/`). All of their text lives in `src/i18n/ui.ts`. Articles and case studies are English only.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
Pull requests only run the build, to check it compiles.
