importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const { registerRoute } = workbox.routing;
const { NetworkFirst, CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
self.__WB_DISABLE_DEV_LOGS = true;

registerRoute(
  '/',
  new NetworkFirst ({
    cacheName: 'start-url',
    expiration: {
      maxEntries: 2,
      maxAgeSeconds: 24 * 60 * 60
    }
  })
);

registerRoute(
  /\.(?:js)$/,
  new StaleWhileRevalidate({
    cacheName: 'js-cache',
    expiration: {
      maxEntries: 32,
      maxAgeSeconds: 24 * 60 * 60
    }
  })
);

registerRoute(
  /\.(?:css)$/,
  new StaleWhileRevalidate({
    cacheName: 'style-cache',
    expiration: {
      maxEntries: 32,
      maxAgeSeconds: 24 * 60 * 60
    }
  })
);

registerRoute(
  /\.(?:otf)$/,
  new StaleWhileRevalidate({
    cacheName: 'font-cache',
    expiration: {
      maxEntries: 4,
      maxAgeSeconds: 7 * 24 * 60 * 60
    }
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);