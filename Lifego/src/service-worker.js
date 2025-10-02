self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("Lifego-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "logolifego-192x192.png",
        "logolifego-512x512.png",
        "casa.png",
        "chat.png",
        "comentarios.png",
        "compartilhar.png",
        "ia.png",
        "like.png",
        "modelo.png",
        "notificações.png",
        "perfil.png",
        "procurar.png",
        "upload.png",
        "voltar.png",
        "configuracoes.png",
        "modo-escuro.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );

});
