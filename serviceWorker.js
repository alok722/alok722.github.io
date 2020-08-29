const cacheName = "alok-raj-portfolio";
const filesToCache = [
  "/",
  "/index.html",
  "/certificates.html",
  "/favicon.ico",
  "/css/*.css",
  "/js/*.js",
  "/img/*.png",
  "/img/*.svg",
  "/img/skills/*.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});