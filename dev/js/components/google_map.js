/* ==========================================================================
 *  Initialization Google maps
 * ======================================================================= */
function fn_components_google_map() {
	$(".map-block").each(function() {
		var inst = $(this);
		var id = inst.attr("id");
		var langitude = inst.data("langitude");
		var longitude = inst.data("longitude");
		fn_init_map(id, langitude, longitude);
	});
}

function fn_init_map(id, langitude, longitude) {
	var map;
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
			opened: false
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
		//styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
	};
	var mapElement = document.getElementById(id);
	var map = new google.maps.Map(mapElement, mapOptions);

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		var markerImg = "images/map-marker.png";
	} else {
		var markerImg = "images/map-marker.svg";
	}

	var locations = [[langitude, longitude, markerImg]];
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			icon: locations[i][2],
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map
		});
	}
}
