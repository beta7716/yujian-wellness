// Post-build:
// 1. Copy index.html to 404.html (SPA fallback for GitHub Pages)
// 2. Append a version query string to all asset URLs to bust caches
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("[postbuild] dist/index.html not found");
  process.exit(1);
}

// 1. SPA fallback
fs.copyFileSync(indexPath, fallbackPath);

// 2. Remove any CNAME file (custom domain was reverted to default GitHub Pages URL)
const cnamePath = path.join(distDir, "CNAME");
if (fs.existsSync(cnamePath)) {
  fs.unlinkSync(cnamePath);
  console.log(`[postbuild] CNAME removed (reverted to default domain)`);
}

// 2. Inject no-cache meta tags so browsers never cache index.html
let html = fs.readFileSync(indexPath, "utf8");
const noCacheMetas = `    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
`;
html = html.replace(/(\s*)<title>/, `${noCacheMetas}    <title>`);

// 3. Cache-bust all asset URLs in index.html
const version = crypto.randomBytes(4).toString("hex");
const stamped = html
  .replace(/(href|src)="(\/[^"]+\.(?:js|css|svg|png|jpg|jpeg|webp|ico))"/g,
    (_m, attr, url) => `${attr}="${url}?v=${version}"`);

fs.writeFileSync(indexPath, stamped);
fs.writeFileSync(fallbackPath, stamped);

console.log(`[postbuild] 404.html copy: OK`);
console.log(`[postbuild] no-cache metas: injected`);
console.log(`[postbuild] cache-bust version: ?v=${version}`);
console.log(`[postbuild] rewrites: ${(html.match(/(href|src)="\/[^"]+\.(?:js|css|svg|png|jpg|jpeg|webp|ico)"/g) || []).length}`);
