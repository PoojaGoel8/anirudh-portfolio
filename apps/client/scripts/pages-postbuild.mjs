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
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
const indexHtml = resolve(dist, "index.html");

if (!existsSync(indexHtml)) {
  console.error("[pages] dist/index.html missing - run `vite build` first");
  process.exit(1);
}

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
