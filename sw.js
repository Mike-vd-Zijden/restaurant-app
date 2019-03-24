self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('restaurant-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/restaurant.html',
                'js/main.js',
                'js/restaurant_info.js',
                'js/dbhelper.js',
                'css/styles.css',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
