const cacheName = "alok-raj-portfolio-v3.0.0";
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
  "/dependencies/magnific-popup/dist/magnific-popup.css",
  "/dependencies/owl-carousel/css/owl.carousel.min.css",
  "/dependencies/owl-carousel/css/owl.theme.default.min.css",
  "/dependencies/owl-carousel/js/owl.carousel.min.js",
  "/dependencies/Typewriter/typewriter.min.js",
  "/favicon.ico",
  "/js/all.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.3.4.1.js",
  "/js/main.js",
  "/img/logo/logo.png",
  "/img/banner/Blogging.json",
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
  "/img/testimonials/sravan.jpg"
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
