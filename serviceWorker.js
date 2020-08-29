const cacheName = "alok-raj-portfolio";
const filesToCache = [
  "/",
  "/index.html",
  "/certificates.html",
  "/css/all.min.css",
  "/css/bootstrap.min.css",
  "/css/global.css",
  "/css/responsive.css",
  "/css/style.css",
  "/css/variables.css",
  "/dependencies/isotop/isotope.min.js",
  "/dependencies/magnific-popup/dist/jquery.magnific-popup.min.js",
  "/dependencies/magnific-popup/dist/jquery.magnific-popup.js",
  "/dependencies/magnific-popup/dist/magnific-popup.css",
  "/dependencies/Typewriter/typewriter.min.js",
  "/js/all.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.3.4.1.js",
  "/js/main.js",
  "/img/body-bg.png",
  "/img/client-info-bg.png",
  "/img/cursor.svg",
  "/img/footer-bg.png",
  "/img/banner/1.svg",
  "/img/banner/2.svg",
  "/img/banner/3.svg",
  "/img/banner/4.svg",
  "/img/banner/5.svg",
  "/img/banner/6.svg",
  "/img/banner/7.svg",
  "/img/banner/8.svg",
  "/img/skills/android.svg",
  "/img/skills/angular.svg",
  "/img/skills/bootstrap.svg",
  "/img/skills/css.svg",
  "/img/skills/docker.svg",
  "/img/skills/expressjs.svg",
  "/img/skills/github.svg",
  "/img/skills/html.svg",
  "/img/skills/java.svg",
  "/img/skills/javascript.svg",
  "/img/skills/mongodb.svg",
  "/img/skills/mysql.svg",
  "/img/skills/nodejs.svg",
  "/img/skills/php.svg",
  "/img/skills/react.svg",
  "/img/skills/redis.svg",
  "/img/skills/vuejs.svg",
  "/img/skills/wordpress.svg"
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