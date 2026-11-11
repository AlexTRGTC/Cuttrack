const CACHE='cuttrack-v1';
const SDK='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.0/dist/umd/supabase.min.js';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll(CORE);try{await cache.add(SDK)}catch(e){} }).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request;const url=new URL(req.url);
 if(req.method!=='GET'||url.hostname.includes('supabase.co'))return;
 if(url.origin===self.location.origin||url.hostname==='cdn.jsdelivr.net'){event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));return res}).catch(()=>url.origin===self.location.origin?caches.match('./index.html'):Promise.reject(new Error('Offline SDK unavailable')))));}
});
