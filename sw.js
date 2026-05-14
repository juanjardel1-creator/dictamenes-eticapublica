// Service Worker — Buscador de Dictámenes OIAYEP
// Versión: 1.0
// Solo permite la instalación como PWA. No hace caché offline
// porque los datos vienen de Supabase en tiempo real.

const CACHE_NAME = 'dictamenes-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Sin caché: todas las peticiones van directo a la red
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
