/**
 * Meta Pixel + eventos customizados do ConversIA
 * Substitua PIXEL_ID pelo seu ID (ex.: 123456789012345)
 * Este arquivo dispara:
 *  - fbq('track', 'PageView') ao carregar
 *  - 'TimeOnPage10s' após 10s
 *  - 'Lead' é disparado no clique dos CTAs (via index.html)
 */
(function(){
  var PIXEL_ID = "3929736470503988"; // <-- TROQUE AQUI

  // Meta Pixel base
  !function(f,b,e,v,n,t,s){
    if(f.fbq) return; n=f.fbq=function(){ n.callMethod ?
      n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
    if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
    n.queue=[]; t=b.createElement(e); t.async=!0;
    t.src=v; s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  if (PIXEL_ID && /^\d+$/.test(PIXEL_ID)) {
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
  } else {
    console.warn("PIXEL_ID não configurado em /scripts/pixel.js");
  }

  // Evento TimeOnPage10s
  var fired10s = false;
  setTimeout(function(){
    if (!fired10s) {
      try { fbq('trackCustom', 'TimeOnPage10s'); } catch(e) {}
      fired10s = true;
    }
  }, 10000);

  // Pixel noscript fallback
  var nos = document.createElement('noscript');
  nos.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id='+PIXEL_ID+'&ev=PageView&noscript=1"/>';
  document.body.appendChild(nos);
})();

