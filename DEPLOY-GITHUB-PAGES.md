# Hosting this site on GitHub Pages

The portfolio is a React single-page app. It cannot be opened as a plain file —
`index.html` loads `/src/main.tsx`, which browsers cannot execute. It has to be
compiled first, and what you host is the `apps/client/dist/` folder.

## What gets hosted

Only the frontend. Every route in the router (`/`, `/work`, `/experience`,
`/leadership`, `/recommendations`, `/about`) renders from
`apps/client/src/data/portfolio.ts`, so the site is fully static.

The Hono backend in `apps/server` is **not** deployed. Nothing in the live router
calls it — the only API consumers are the auth page and `AdminGuard`, neither of
which is routed. Content edits happen in `portfolio.ts` and ship with the build.

## Automatic deploys (recommended)

`.github/workflows/deploy-pages.yml` builds and publishes on every push to `main`.

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The site lands at `https://<username>.github.io/<repo-name>/`.

The workflow reads the repo name at build time and sets the asset base path from
it, so renaming or forking the repo needs no edit.

If your default branch is `master`, change the `branches:` line in the workflow.

## Building locally

```bash
pnpm install
pnpm --filter client build:pages
```

Output is `apps/client/dist/`. Preview it exactly as Pages will serve it:

```bash
npx serve apps/client/dist
```

A local build defaults to the base path `/anirudh-portfolio/`. If your repo has a
different name, set it:

```bash
GH_PAGES_BASE=/your-repo-name/ pnpm --filter client build:pages
```

Getting this wrong is the usual cause of a blank page with 404s on the CSS/JS.

## Custom domain

```bash
GH_PAGES_BASE=/ GH_PAGES_CNAME=yourdomain.com pnpm --filter client build:pages
```

For the automated workflow, set the same two env vars on the build step in
`.github/workflows/deploy-pages.yml`, then point your DNS at GitHub Pages and set
the domain under **Settings → Pages**.

## Why 404.html exists

GitHub Pages has no SPA rewrite rule, so a deep link such as `/work` requests a
file that does not exist. Pages then serves `404.html`. The build writes a copy of
`index.html` there, so the app boots and React Router renders the correct route.
`scripts/pages-postbuild.mjs` handles this, along with the `.nojekyll` marker that
stops Pages from running the output through Jekyll.
