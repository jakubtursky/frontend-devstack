//====================================================
//  Function: Gallery
//====================================================
var gallery
function componentGallery() {
  if ($('.js-gallery').length) {
    gallery = $('.js-gallery')
    gallery.lightGallery({
      selector: '.js-gallery-item',
      hash: false,
    })
  }
}
