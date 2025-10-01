self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("Relogio-Motivacional-Digital-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "logolifego-192x192.png",
        "logolifego-512x512.png",
        "casa.png",
        "chat.png",
        "comentario.png",
        "compartilhar.png",
        "ia.png",
        "like.png",
        "logolifego-192x192.png",
        "logolifego-512x512.png",
        "modelo.png",
        "notificacao.png",
        "perfil.png",
        "procurar.png",
        "upload.png",
        "voltar.png",
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

