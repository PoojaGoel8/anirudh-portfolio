# Anirudh Dalmia — Portfolio

Personal portfolio site for Anirudh Dalmia, covering AI transformation,
financial crime risk, regulated change, and programme leadership.

**Live:** https://poojagoel8.github.io/anirudh-portfolio/

Static React site, no backend. Every page renders from a single content file.

## Editing the content

Almost all copy lives in one place:

```txt
apps/client/src/data/portfolio.ts
```

Edit it, commit, push. The site rebuilds and redeploys itself.

Images and documents are plain files under `apps/client/public/assets/`.
Reference them root-absolute — `/assets/slots/home.hero.webp` — and the build
rewrites them onto the correct base path.

## Running locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3100/.

To build exactly what gets deployed:

```bash
pnpm build
```

Output lands in `apps/client/dist/`. To preview it the way GitHub Pages serves
it, from a subpath, pass the base explicitly:

```bash
GH_PAGES_BASE=/anirudh-portfolio/ pnpm build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds the
site and publishes it to GitHub Pages. Nothing else is required — the workflow
enables Pages on first run and derives the base path from the repository name,
so renaming or forking the repo needs no edit here.

Pages must be set to **Settings → Pages → Source → GitHub Actions**. If it is
ever switched to "Deploy from a branch", Jekyll renders this README as the
homepage instead of the site.

## Layout

```txt
apps/client/
  index.html            page shell, meta tags, structured data
  src/data/portfolio.ts  all site content
  src/pages/             one folder per route
  src/components/        layout, navigation, shared pieces
  public/assets/         images and downloadable documents
  scripts/               build steps described below
```

Routes are `/`, `/work`, `/experience`, `/leadership`, `/recommendations` and
`/about`, declared in `src/App.tsx`.

## How the build works

`pnpm build` runs three steps:

1. **`vite build`** compiles the site. Because GitHub Pages serves a project site
   from `/<repo>/` rather than the domain root, the config sets `base` and
   rewrites root-absolute `/assets/...` references onto it.
2. **`scripts/postbuild.mjs`** writes `sitemap-routes.json`, then prerenders the
   home page and bakes the markup into `dist/index.html` so crawlers see real
   content without running JavaScript.
3. **`scripts/pages-postbuild.mjs`** rewrites links in that prerendered markup
   onto the base path, then writes `404.html` and `.nojekyll`.

Two details worth knowing before changing any of this:

- **`404.html` is a copy of `index.html`.** GitHub Pages has no SPA rewrite rule,
  so a deep link such as `/work` requests a file that does not exist and Pages
  serves `404.html`. The app boots from it and the router renders the real route.
- **Prerendering runs outside vite**, rendering the `.tsx` sources directly in
  Node. It therefore knows nothing about `base`, which is why step 3 exists. It
  also fails on Windows with `ERR_UNSUPPORTED_ESM_URL_SCHEME` and is treated as
  non-fatal, so a local Windows build produces a small, un-prerendered
  `index.html` while CI produces the full one. That is expected.
