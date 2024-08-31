// Install and activate service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('offline-cache').then(function(cache) {
            return cache.addAll([
                '/offline/offline.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match('/offline/offline.html');
        })
    );
});

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('push', function (e) {
    if (!(
        self.Notification &&
        self.Notification.permission === 'granted'
    )) {
        return;
    }

    if (e.data) {
        let message = e.data.json();

        e.waitUntil(self.registration.showNotification(message.title, {
            ...message
        }));
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    clients.openWindow(event.notification.data.action);
}, false);