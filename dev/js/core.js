// --- GLOBAL VARIABLES --- //
var $window = $(window);
var $document = $(document);
var $header = $(".header");
var bp_small = 771;
var bp_medium = 992;
var bp_large = 1200;
var class_active = "is-active";
var class_disabled = "is-disabled";
var class_last = "is-last";
var class_has_error = "has-error";
var class_loading = "is-loading";
var class_opened = "is-opened";
var class_selected = "is-selected";
var class_collapse = "is-collapse";
var class_animated = "is-animated";
var $this = null;
var $containers = $("html,body");


// --- COMPONENTS, PARTS --- //
$(document).ready(function() {
	// ---  COMPONENTS --- //
	fn_components_modal();
	fn_components_select();
	fn_components_range_slider()
	fn_components_quantity_input();
	fn_components_calendar();
	fn_components_slider();
	fn_components_accordion();
	fn_components_tabs()
	fn_components_google_map();
	fn_components_gallery();
	fn_components_remove();
	fn_components_tooltip();
	fn_components_rate();
	fn_components_fullscreen_navigation();
	fn_components_ajaxLoad();
	fn_components_aos();
	fn_components_file_upload();
	// fn_components_clear_filter();
	
	// ---  PARTS --- //
	fn_parts_placeholder();
	fn_parts_detectIE();
	fn_parts_scroll_to();
	fn_parts_show_hidden();
	fn_parts_dropdown();
	
	fn_parts_scroll_resize();
});

var resizeTimer;

// --- SCROLL EVENT --- //
$(document).scroll(function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		fn_parts_scroll_resize();
	}, 250);
});

// --- RESIZE EVENT --- //
$(window).resize(function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		fn_parts_scroll_resize();
		// fn_checkNavigationTrigger();
	}, 250);
});

// --- LOAD EVENT --- //
$(window).bind("load", function() {
	fn_parts_dots();

	// pageLoader
	$( 'body' ).addClass( class_active );

	// cookies bar
	setTimeout(function(){ 
		$( '#cookies-bar' ).addClass( class_active );
	}, 2000);
});

