const CACHE_NAME = 'event-manager-v6'; // Incremented version to force update
// The core files required for the app to run.
const urlsToCache = [
    '/', // This serves index.html at the root
    'index.html', // The main admin page
    'dashboard.html', // The event-specific dashboard
    'scanner-dashboard.html', // The new dashboard for scanners
    'register.html', // The attendee registration page
    'tickets.html', // The page to view/download tickets
    'scan.html', // The QR code scanner page
    'checked-in.html', // The page to view checked-in attendees
    'styles.css', // Main stylesheet
    'app.js', // Core application logic
    'firebase-init.js', // Firebase configuration
    'manifest.json' // PWA manifest
];

// Install a service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    // Only handle GET requests. Let the browser handle all others (POST, etc.).
    if (event.request.method !== 'GET') {
        return; // This will correctly ignore Firebase POST requests.
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Go to the network in the background to update the cache.
            const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                    // Check if we received a valid response
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(err => {
                    // Network request failed, do nothing, the user has the cached version.
                });
            
            // Return the cached version immediately (if available), otherwise wait for the network.
            return cachedResponse || fetchPromise;
        })
    );
});

// Delete old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});