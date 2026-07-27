// Click-to-expand lightbox for body images. Loaded with `defer` on every
// page (see _layouts/default.html) but exits immediately if there's nothing
// to do, so pages with no .post-content images pay almost no runtime cost.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Scoped to .post-content only - hero/thumbnail images and post-grid
    // card images (blog.md, visual.md, etc.) are intentionally not
    // clickable, since those already link to the full article.
    var images = document.querySelectorAll('.post-content img');
    if (!images.length) return;

    // One overlay element shared by every image on the page, reused on each
    // click rather than creating a new one per image.
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close" aria-label="Close">&times;</span><img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);
    var lightboxImg = overlay.querySelector('.lightbox-img');

    // Body images are served at a capped width (see _includes/img.html /
    // the w_1200 transform), so clicking them just displays that same
    // capped-size file at a larger CSS size. This strips whatever
    // Cloudinary transform segment is already in the URL (e.g. w_1200,
    // or the /v12345/ version segment when there's no transform) and
    // requests f_auto,q_auto with no width cap, so the expanded view is
    // as sharp as the original upload.
    function fullSizeUrl(url) {
      var marker = '/upload/';
      var idx = url.indexOf(marker);
      if (idx === -1) return url;
      var prefix = url.slice(0, idx + marker.length);
      var parts = url.slice(idx + marker.length).split('/');
      // Cloudinary URLs look like /upload/<transform>/<version>/<file> or
      // /upload/<version>/<file> (no transform). A version segment always
      // matches v\d+, so if the first segment isn't one, it must be a
      // transform we should drop rather than a version to keep.
      if (parts.length > 1 && !/^v\d+$/.test(parts[0])) {
        parts.shift();
      }
      return prefix + 'f_auto,q_auto/' + parts.join('/');
    }

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.classList.add('is-open');
      document.body.classList.add('lightbox-locked'); // suppresses body scroll while open
    }

    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('lightbox-locked');
      lightboxImg.src = ''; // stop/discard the full-size image fetch once closed
    }

    images.forEach(function (img) {
      img.classList.add('is-expandable'); // CSS: swaps cursor to zoom-in
      img.addEventListener('click', function () {
        open(fullSizeUrl(img.src), img.alt);
      });
    });

    // Click anywhere on the overlay (backdrop or image) closes it; Escape
    // works globally regardless of what's focused.
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  });
})();
