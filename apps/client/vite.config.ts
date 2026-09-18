// vite.config.ts
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-oxc';
import tailwindcss from '@tailwindcss/vite';
import path from "path";

// Images and downloads are referenced as root-absolute literals in JSX, e.g.
// src="/assets/slots/home.hero.webp". Vite only rewrites paths it can resolve
// as module imports, so on a GitHub Pages project site these keep pointing at
// the domain root and 404. Rewrite them to the configured base at build time,
// which keeps the source readable and means new references need no ceremony.
//
// This covers the client bundle. The prerendered markup in index.html is
// produced outside vite and is handled by scripts/pages-postbuild.mjs.
function basePrefixAssets(base: string): Plugin {
  const prefix = base.replace(/\/$/, '');

  return {
    name: 'base-prefix-assets',
    apply: 'build',
    // Run before the React transform so we still see the original source text.
    enforce: 'pre',
    transform(code, id) {
      if (!/\.[jt]sx?$/.test(id) || id.includes('node_modules')) return null;
      if (!code.includes('/assets/')) return null;
      return { code: code.replace(/(["'`])\/assets\//g, `$1${prefix}/assets/`), map: null };
    },
    transformIndexHtml(html) {
      // og:image / twitter:image sit in `content` attributes, which Vite's own
      // HTML asset handling leaves alone.
      return html.replace(/(content=["'])\/assets\//g, `$1${prefix}/assets/`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages serves a project site from a subpath
  // (https://<user>.github.io/<repo>/), so every asset URL needs that prefix
  // baked in at build time. Override with GH_PAGES_BASE when the repo is
  // renamed; dev stays at "/".
  const base = mode === 'production'
    ? (process.env.GH_PAGES_BASE ?? '/anirudh-portfolio/')
    : '/';

  return {
    base,
    server: {
      host: "::",
      port: 3100,
    },
    plugins: [
      tailwindcss(),
      react(),
      base !== '/' && basePrefixAssets(base),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});
