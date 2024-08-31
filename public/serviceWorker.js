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
    event.notification.close();
    clients.openWindow(event.notification.data.action);
}, false);