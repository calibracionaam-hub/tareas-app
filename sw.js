self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("tareas-cache").then(cache => {
            return cache.addAll(["index.html"]);
        })
    );
});
