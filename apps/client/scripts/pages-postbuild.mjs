// Adapts the vite build output for GitHub Pages static hosting.
//
// Two things GitHub Pages needs that a plain `vite build` does not produce:
//
//  1. 404.html — Pages has no SPA rewrite rule. A deep link like /work asks for
//     a file that does not exist, and Pages answers with 404.html. Serving a
//     copy of index.html there boots the app, and BrowserRouter then reads the
//     real URL and renders the right route. (The HTTP status is still 404, which
//     browsers don't care about and crawlers reach via the sitemap anyway.)
//  2. .nojekyll — without it Pages runs the output through Jekyll, which strips
//     files and folders whose names begin with an underscore.
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
const indexHtml = resolve(dist, "index.html");

if (!existsSync(indexHtml)) {
  console.error("[pages] dist/index.html missing - run `vite build` first");
  process.exit(1);
}

// scripts/prerender.mjs bakes the home route's markup into #root by rendering
// the .tsx sources directly in node. That path never goes through vite, so the
// base-prefix plugin in vite.config.ts does not see it and the markup lands
// holding root-absolute "/assets/..." URLs that 404 under a project subpath.
// Rewriting here, after prerender has run, is the one place that catches every
// producer of the final HTML.
//
// This covers route links as well as assets. The prerendered <a href> values
// come from react-router, which uses import.meta.env.BASE_URL, so they are only
// correct if the SSR build was told the base. Rewriting here means the output
// is right even when that does not hold.
//
// Skips anything already carrying the prefix, so the step is idempotent and
// cannot produce "/repo/repo/...". Protocol-relative "//host/path" is left
// alone; only src/href are touched, since a bare "content" attribute is not
// reliably a URL.
function applyBase(html, prefix) {
  if (!prefix) return html;
  return html.replace(/\b(src|href)="\/(?!\/)([^"]*)"/g, (match, attr, rest) => {
    const path = `/${rest}`;
    if (path === prefix || path.startsWith(`${prefix}/`)) return match;
    return `${attr}="${prefix}${path}"`;
  });
}

// og:image and twitter:image have to be absolute. Facebook, LinkedIn, X and
// WhatsApp all resolve them against nothing, so a root- or base-relative path
// means no preview card at all - the single most visible piece of metadata on
// a portfolio that gets shared on LinkedIn. Everything else stays relative so
// the site keeps working on any host.
function absolutiseSocialImages(html, origin) {
  if (!origin) return html;
  const base = origin.replace(/\/$/, "");
  return html.replace(
    /(<meta\s+(?:property|name)="(?:og:image|twitter:image)"\s+content=")(\/[^"]*)"/g,
    (_match, head, path) => `${head}${base}${path}"`
  );
}

const prefix = (process.env.GH_PAGES_BASE ?? "/anirudh-portfolio/").replace(/\/$/, "");
// Override with SITE_ORIGIN when the site moves to a custom domain. Lowercased
// because the workflow derives it from the repo owner, which keeps its original
// capitalisation: hostnames resolve either way, but scrapers and canonical URLs
// are better off with one consistent spelling.
const origin = (process.env.SITE_ORIGIN ?? "https://poojagoel8.github.io").toLowerCase();

let html = applyBase(readFileSync(indexHtml, "utf8"), prefix);
html = absolutiseSocialImages(html, origin);
writeFileSync(indexHtml, html);

copyFileSync(indexHtml, resolve(dist, "404.html"));
writeFileSync(resolve(dist, ".nojekyll"), "");

// A custom domain needs a CNAME file in the published output; skipped unless
// GH_PAGES_CNAME is set, since Pages deletes the domain setting when the file
// disappears from a later deploy.
const cname = process.env.GH_PAGES_CNAME;
if (cname) {
  writeFileSync(resolve(dist, "CNAME"), `${cname}\n`);
}

console.log(`[pages] wrote 404.html, .nojekyll${cname ? `, CNAME (${cname})` : ""}`);
