// Install and activate service worker
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Receive push notifications
self.addEventListener('push', function (e) {
    if (!(
        self.Notification &&
        self.Notification.permission === 'granted'
    )) {
        //notifications aren't supported or permission not granted!
        console.log('nononono')
        return;
    }

    if (e.data) {
        let message = e.data.json();
        e.waitUntil(self.registration.showNotification(message.title, {
            body: message.body,
            icon: message.icon,
            actions: message.actions
        }));
    }
});

// Click and open notification
self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'farm') clients.openWindow("/farm");
    else if (event.action === 'home') clients.openWindow("/");
    else if (event.action === 'training') clients.openWindow("/mining-training");
    else if (event.action === 'dns') clients.openWindow("/shops/dns");
    else if (event.action === 'ali') clients.openWindow("/shops/aliexpress");
    else if (event.action === 'avito') clients.openWindow("/avito");
    else if (event.action === 'friends') clients.openWindow("/friends");
    else if (event.action === 'locations') clients.openWindow("/locations");
    else if (event.action === 'google') clients.openWindow("https://google.com");
    else clients.openWindow(event.action); // Open link from action
}, false);