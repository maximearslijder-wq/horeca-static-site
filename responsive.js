
(function(){
  function fit(){
    var wrap = document.querySelector('.screen-wrap');
    if(!wrap) return;
    var margin = 32;
    var scale = Math.min(1, (window.innerWidth - margin) / 900, (window.innerHeight - margin) / 600);
    if (scale > 1) scale = 1;
    wrap.style.transform = 'scale(' + scale + ')';
    wrap.style.transformOrigin = 'center center';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('DOMContentLoaded', fit);
  fit();
})();
