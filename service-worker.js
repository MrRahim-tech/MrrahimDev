self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pwa-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.css',
        '/index.js',
        '/script.js',
        '/styles.xss',
        '/blogs.js',
        '/blogs.html',
        '/blogs.css',
        '/about.css',
        '/about.html',
        '/about.js',
        '/Terms.html',
        '/privacyPolicy.html',
        ''
        '/profile.png',
        '/profile.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});