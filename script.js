// Author: Ian Pearce (@peeinears)
// License: MIT

(function () {

  function playGIFs() {
    var els, i, a, img, matches;
    els = document.getElementsByClassName('rg_di');
    for (i = 0; i < els.length; i++) {
      if (els[i].animated) continue;
      els[i].animated = true;
      a = els[i].getElementsByTagName('a')[0];
      if (!a) continue;
      img = els[i].getElementsByTagName('img')[0];
      if (!img) continue;
      matches = a.href.match(/imgurl=(\S+\.gif)/i);
      if (matches !== null && matches.length > 1)
        img.src = gifUrlMatches[1];
    }
  }

  // continue to load GIFs added to DOM after initial page load
  window.setInterval(playGIFs, 1000);

})();
