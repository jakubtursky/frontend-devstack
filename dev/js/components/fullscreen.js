//====================================================
//  Initialization Fullscreeen navigation
//====================================================
function fn_components_fullscreen_navigation() {
	if ($(".navigation").length) {
		$(".navigation-trigger").on("click", function(e) {
			$(this)
				.closest(".navigation")
				.toggleClass("is-collapse");
			e.preventDefault();
			$("main, footer").toggle();
			$("body").toggleClass("overflow-hidden");
		});
		fn_checkNavigationTrigger();
	}
}

function fn_checkNavigationTrigger(){
	(function($){
		if($( '.navigation' ).hasClass( 'is-collapse' ) && $(window).width() > bp_medium ){
			$( '.navigation' ).removeClass( 'is-collapse' );
			$("body").removeClass("overflow-hidden");
			$("main, footer").show();
		}
	})(jQuery);
}
