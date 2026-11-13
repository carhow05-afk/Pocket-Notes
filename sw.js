const CACHE='pocket-notes-pro-v5-ocr';const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE && !k.startsWith('pocket-notes-ocr-model-assets')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url),same=url.origin===self.location.origin;
  const modelResource=['cdn.jsdelivr.net','huggingface.co','cdn-lfs.hf.co'].includes(url.hostname);
  if(!same&&!modelResource)return;
  if(modelResource){
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(response=>{
      if(response.ok||response.type==='opaque'){
        const copy=response.clone();caches.open('pocket-notes-ocr-model-assets-v1').then(c=>c.put(e.request,copy)).catch(()=>{});
      }
      return response;
    })));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}
    return r;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
