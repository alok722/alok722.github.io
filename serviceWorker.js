const cacheName = "alok-raj-portfolio-v2.0.0";
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
  "/dependencies/isotope/isotope.min.js",
  "/dependencies/magnific-popup/dist/jquery.magnific-popup.js",
  "/dependencies/magnific-popup/dist/jquery.magnific-popup.min.js",
  "/dependencies/magnific-popup/dist/magnific-popup.css",
  "/dependencies/owl-carousel/css/owl.carousel.min.css",
  "/dependencies/owl-carousel/css/owl.theme.default.min.css",
  "/dependencies/owl-carousel/js/owl.carousel.min.js",
  "/dependencies/Typewriter/typewriter.min.js",
  "https://fonts.googleapis.com/css2?family=Kodchasan&display=swap",
  "https://fonts.gstatic.com/s/kodchasan/v6/1cXxaUPOAJv9sG4I-DJWnHGFucE.woff2",
  "https://fonts.gstatic.com/s/kodchasan/v6/1cXxaUPOAJv9sG4I-DJWh3GFucE.woff2",
  "https://fonts.gstatic.com/s/kodchasan/v6/1cXxaUPOAJv9sG4I-DJWhnGFucE.woff2",
  "https://fonts.gstatic.com/s/kodchasan/v6/1cXxaUPOAJv9sG4I-DJWiHGF.woff2",
  "/favicon.ico",
  "/js/all.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.3.4.1.js",
  "/js/main.js",
  "/img/footer-bg.png",
  "/img/cursor.svg",
  "/img/client-info-bg.png",
  "/img/body-bg.png",
  "/img/testimonials/avinash.jpg",
  "/img/testimonials/ayush.jpg",
  "/img/testimonials/mihir.jpg",
  "/img/testimonials/pawan.jpg",
  "/img/testimonials/raunak.jpg",
  "/img/testimonials/rhaynel-parra.jpg",
  "/img/testimonials/udit.jpg",
  "/img/testimonials/vishal.jpg",
  "/img/testimonials/alberto.jpg",
  "/img/testimonials/jayshri-patil.jpg",
  "/img/testimonials/priya-pal.jpg",
  "/img/testimonials/rajeshwari.jpg",
  "/img/testimonials/sravan.jpg",
  "/img/logo/logo.png",
  "/img/banner/1.svg",
  "/img/banner/2.svg",
  "/img/banner/4.svg",
  "/img/banner/5.svg",
  "/img/banner/7.svg",
  "/img/banner/8.svg",
  "/img/banner/banner.svg",
  "/img/skills/agile.svg",
  "/img/skills/android.svg",
  "/img/skills/angular-material.svg",
  "/img/skills/angular.svg",
  "/img/skills/bootstrap.svg",
  "/img/skills/css.svg",
  "/img/skills/docker.svg",
  "/img/skills/expressjs.svg",
  "/img/skills/fastify.svg",
  "/img/skills/github.svg",
  "/img/skills/html.svg",
  "/img/skills/java.svg",
  "/img/skills/javascript.svg",
  "/img/skills/material-ui.svg",
  "/img/skills/mocha.svg",
  "/img/skills/mongodb.svg",
  "/img/skills/mysql.svg",
  "/img/skills/nestjs.svg",
  "/img/skills/nodejs.svg",
  "/img/skills/php.svg",
  "/img/skills/react.svg",
  "/img/skills/redis.svg",
  "/img/skills/redux.svg",
  "/img/skills/rxjs1.svg",
  "/img/skills/typescript.svg",
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

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  )
});
