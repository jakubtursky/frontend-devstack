//====================================================
//  Function: Detect IE
//====================================================
function partDetectIE() {
  var ua = window.navigator.userAgent
  var msie = ua.indexOf('MSIE ')

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    $('body').addClass('ie')
  }

  if ($('.no-object-fit').length) {
    fitImg('.img--cover')
  }

  function fitImg(imgClass) {
    $(imgClass).each(function () {
      var imgElement = $(this),
        imgSrc = 'url(' + imgElement.attr('src') + ')',
        imgParent = imgElement.parent(),
        imgNewElement = $('<div></div>')
      imgElement.hide()
      imgParent.append(imgNewElement)
      imgNewElement.css({
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        width: '100%',
        'background-image': imgSrc,
      })
      imgNewElement.addClass('ie-img')
    })
  }

  return false
}
