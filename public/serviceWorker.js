// Install and activate service worker
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Receive push notifications
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

// Click and open notification
self.addEventListener('notificationclick', function(event) {
    // event.notification.close();

    // if (event.action === 'tests') clients.openWindow("/app/tests");
    // else if (event.action === 'home') clients.openWindow("/app/");
    // else clients.openWindow(event.action);

    let url = 'https://google.com';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
}, false);