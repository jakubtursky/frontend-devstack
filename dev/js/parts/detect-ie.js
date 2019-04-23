/* ==========================================================================
 *  Function: Detect IE
 * ======================================================================= */
function fn_parts_detectIE(){
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$('body').addClass('ie');
	}

	return false;
}