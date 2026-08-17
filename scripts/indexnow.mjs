/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, etc.).
 * Run after each production deploy:  node scripts/indexnow.mjs
 */
const KEY = "708b97c090a9d5275f8cf9c82dc47c83";
const HOST = "unionvetny.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const xml = await (await fetch(SITEMAP)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});
console.log(`IndexNow: HTTP ${res.status} — submitted ${urls.length} URLs`);
