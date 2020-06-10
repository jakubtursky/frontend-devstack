/* ==========================================================================
 *  Initialization Google maps
 * ======================================================================= */
function componentGoogleMaps() {
  $('.js-map').each(function () {
    var inst = $(this)
    var id = inst.attr('id')
    var langitude = inst.data('langitude')
    var longitude = inst.data('longitude')
    initMap(id, langitude, longitude)
  })
}

function initMap(id, langitude, longitude) {
  var markerImg
  var mapOptions = {
    center: new google.maps.LatLng(langitude, longitude),
    zoom: 17,
    zoomControl: true,
    disableDoubleClickZoom: false,
    mapTypeControl: false,
    scaleControl: true,
    scrollwheel: false,
    panControl: true,
    streetViewControl: false,
    draggable: true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
  }
  var mapElement = document.getElementById(id)
  var map = new google.maps.Map(mapElement, mapOptions)

  function markerSet(image, width, height) {
    return new google.maps.MarkerImage(
      image,
      new google.maps.Size(width, height),
      // The origin for my image is 0,0.
      new google.maps.Point(0, 0),
      // The center of the image is 50,50 (my image is a circle with 100,100)
      new google.maps.Point(width / 2, height),
    )
  }

  var ua = window.navigator.userAgent
  var msie = ua.indexOf('MSIE ')

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    markerImg = markerSet('images/map-marker.png', 45, 56)
  } else {
    markerImg = markerSet('images/map-marker.svg', 45, 56)
  }

  var locations = [[langitude, longitude, markerImg]]
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      icon: locations[i][2],
      position: new google.maps.LatLng(locations[i][0], locations[i][1]),
      map: map,
    })
  }
}
