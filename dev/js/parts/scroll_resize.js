/* ==========================================================================
 *  Function: Add navingation scroll
 * ======================================================================= */

var windowScrollTop;
var windowWidth;
var bottomTop;
var bottomHeight;

if ($('.navigation').length){
	var navigation = $('.navigation');
}

if ($('#bottom-bar').length){
	var bottomBar = $('#bottom-bar');
}

function fn_parts_scroll_resize(){
	windowScrollTop = $(window).scrollTop();
	windowWidth = $(window).width();

	if ($('.navigation').length){
		if (windowScrollTop > 1 && windowWidth > bp_small) {
			navigation.addClass( 'navigation-scroll' );
		} else {
			navigation.removeClass( 'navigation-scroll' );
		}
	}

	if ($('#bottom-bar').length && windowWidth < bp_medium){
		var bottomTop = $('.content-offset-top').offset().top;
		var bottomHeight = $('.content-height').outerHeight();
		if (($(window).scrollTop() > bottomTop - 60 ) && ($(window).scrollTop() < bottomHeight - 60) ) {
			bottomBar.addClass( class_active );
		} else {
			bottomBar.removeClass( class_active );
		}
	}
}
