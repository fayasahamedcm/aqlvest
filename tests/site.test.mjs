import test from "node:test";
import assert from "node:assert/strict";
import { articles, products } from "../src/lib/content.ts";
import { legalPages } from "../src/lib/legal.ts";

const base = process.env.SITE_TEST_URL;
const paths = [
  "/",
  "/learn",
  "/tools",
  "/marketplace",
  "/about",
  "/contact",
  ...Object.keys(legalPages).map((p) => `/${p}`),
  ...articles.map((a) => `/learn/${a.slug}`),
  ...products.map(
    (p) => `/${p.type === "tool" ? "tools" : "marketplace"}/${p.slug}`,
  ),
];

test(
  "Ramadan invitation, Academy previews, and search descriptions are published coherently",
  { skip: !base },
  async () => {
    const home = await (await fetch(new URL("/", base))).text();
    const learn = await (await fetch(new URL("/learn", base))).text();
    const market = await (await fetch(new URL("/marketplace", base))).text();
    assert.match(home, /Learn Halal Investing &amp; Trading/);
    for (const html of [home, learn, market]) {
      assert.match(html, /Ramadan 2027/);
      assert.match(html, /insha Allah/);
    }
    assert.match(learn, /id="academy"/);
    assert.match(learn, /What Is a Stock/);
    assert.match(learn, /not available here yet/);
    assert.doesNotMatch(learn, /<video|<iframe/);
    for (const slug of [
      "self-shariah-screener",
      "shariah-stock-research-dashboard",
      "it-shariah-comparison",
    ])
      assert.match(market, new RegExp(`/marketplace/${slug}`));
  },
);

test("published routes are distinct and content references are secure", () => {
  assert.equal(new Set(paths).size, paths.length);
  for (const a of articles) {
    assert.ok(a.sections.length >= 3);
    assert.ok(a.sources.length);
    for (const source of a.sources)
      assert.equal(new URL(source.href).protocol, "https:");
  }
});

test(
  "all public pages render, have unique metadata, and link to real internal destinations",
  { skip: !base },
  async () => {
    const responses = new Map();
    const titles = new Set();
    for (const path of paths) {
      const response = await fetch(new URL(path, base));
      assert.equal(response.status, 200, path);
      const html = await response.text();
      responses.set(path, html);
      assert.equal(
        (html.match(/<h1(?:\s|>)/g) || []).length,
        1,
        `one main heading: ${path}`,
      );
      assert.match(html, /<html[^>]*lang="en"/, path);
      assert.match(html, /<meta name="description" content="[^"]+"/, path);
      assert.match(
        html,
        /<link rel="canonical" href="https:\/\/aqlvest.com/,
        path,
      );
      assert.match(html, /href="\/privacy"/, path);
      assert.match(html, /href="\/disclaimer"/, path);
      assert.equal(response.headers.get("x-content-type-options"), "nosniff");
      assert.equal(response.headers.get("x-frame-options"), "DENY");
      const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
      assert.ok(title, path);
      assert.ok(!titles.has(title), `unique title: ${path}`);
      titles.add(title);
    }
    for (const [path, html] of responses) {
      for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
        if (!href.startsWith("/")) continue;
        const u = new URL(href, base);
        assert.ok(
          responses.has(u.pathname),
          `internal destination ${path} → ${href}`,
        );
        if (u.hash)
          assert.ok(
            responses.get(u.pathname).includes(`id="${u.hash.slice(1)}"`),
            `anchor ${href}`,
          );
      }
    }
  },
);

test(
  "unavailable products stay explicit, legacy routes redirect, and unknown pages return 404",
  { skip: !base },
  async () => {
    for (const p of products) {
      const path = `/${p.type === "tool" ? "tools" : "marketplace"}/${p.slug}`;
      const html = await (await fetch(new URL(path, base))).text();
      assert.match(html, /Coming soon/);
      assert.match(html, /Share your interest/);
      assert.doesNotMatch(html, />Buy now<|>Download now<|>Pay now</);
    }
    for (const [oldPath, newPath] of [
      ["/academy", "/learn"],
      ["/policy", "/disclaimer"],
    ]) {
      const r = await fetch(new URL(oldPath, base), { redirect: "manual" });
      assert.equal(r.status, 308);
      assert.equal(new URL(r.headers.get("location"), base).pathname, newPath);
    }
    assert.equal(
      (await fetch(new URL("/this-page-does-not-exist", base))).status,
      404,
    );
    assert.equal((await fetch(new URL("/tools/not-a-tool", base))).status, 404);
  },
);

test(
  "SEO assets are served and contain every content route",
  { skip: !base },
  async () => {
    const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
    for (const path of paths)
      assert.ok(
        sitemap.includes(`https://aqlvest.com${path === "/" ? "" : path}`),
        path,
      );
    const robots = await (await fetch(new URL("/robots.txt", base))).text();
    assert.match(robots, /Sitemap: https:\/\/aqlvest.com\/sitemap.xml/);
    const image = await fetch(new URL("/opengraph-image", base));
    assert.equal(image.status, 200);
    assert.match(image.headers.get("content-type"), /image\/png/);
  },
);
