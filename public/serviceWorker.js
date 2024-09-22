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
    const url = new URL(event.request.url);
    const pathBase = url.pathname.split('/')[1];

    if (pathBase !== 'api') {
        event.respondWith(
            fetch(event.request).catch(function() {
                return caches.match('/offline/offline.html');
            })
        );
    } 

});

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('push', function (e) {
    if (e.data) {
        let message = e.data.json();

        e.waitUntil(self.registration.showNotification(message.title, {
            ...message
        }));
    }
});

self.addEventListener('notificationclick', function(event) {
    // clients.openWindow(event.notification.data.action);

    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function (clientList) {
        let client = null;
        let isIphone = false;

        for (let i = 0; i < clientList.length; i++) {
            let item = clientList[i];

            const userAgent = item.userAgent || '';

            if (/iPhone/.test(userAgent)) {
                isIphone = true;
                break;
            }

            if (item.url) {
                client = item;
                break;
            }
        }

        if (isIphone) {
            event.waitUntil(self.registration.showNotification(`isIphone: ${isIphone}`));
            event.notification.close();
            clients.openWindow(event.notification.data.action);
        }

        if (client && 'navigate' in client) {
            event.waitUntil(self.registration.showNotification(`navigate: ${'navigate' in client}, ${isIphone}`));
            client.focus();
            event.notification.close();
            // client.navigate('/app');
            return 
        } else {
            event.waitUntil(self.registration.showNotification(`else: ${'navigate' in client}`, {isIphone}));
            // event.notification.close();
            // return clients.openWindow('/app');
        }
    }));
}, false);