(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.post-content img');
    if (!images.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close" aria-label="Close">&times;</span><img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);
    var lightboxImg = overlay.querySelector('.lightbox-img');

    function fullSizeUrl(url) {
      var marker = '/upload/';
      var idx = url.indexOf(marker);
      if (idx === -1) return url;
      var prefix = url.slice(0, idx + marker.length);
      var parts = url.slice(idx + marker.length).split('/');
      if (parts.length > 1 && !/^v\d+$/.test(parts[0])) {
        parts.shift();
      }
      return prefix + 'f_auto,q_auto/' + parts.join('/');
    }

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.classList.add('is-open');
      document.body.classList.add('lightbox-locked');
    }

    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('lightbox-locked');
      lightboxImg.src = '';
    }

    images.forEach(function (img) {
      img.classList.add('is-expandable');
      img.addEventListener('click', function () {
        open(fullSizeUrl(img.src), img.alt);
      });
    });

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  });
})();
