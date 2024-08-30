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

    if (event.action === 'tests') clients.openWindow("/app/tests");
    else if (event.action === 'home') clients.openWindow("/app/");
    else if (event.action === 'google') clients.openWindow("https://google.com");
    else if (event.action === 'advanced') {
        event.waitUntil(
            clients
              .matchAll({
                type: "window",
              })
              .then((clientList) => {
                for (const client of clientList) {
                  if (client.url === "/app" && "focus" in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow("/app");
              }),
          );
    }
    else if (event.action === 'advanced2') {
        event.waitUntil(
            clients
              .matchAll({
                type: "window",
              })
              .then((clientList) => {
                for (const client of clientList) {
                  if (client.url === "/app/tests" && "focus" in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow("/app/tests");
              }),
          );
    }
    else clients.openWindow(event.action);


}, false);