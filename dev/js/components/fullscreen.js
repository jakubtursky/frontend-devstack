//====================================================
//  Function: Fullscreen navigation
//====================================================
function componentFullscreenNavigation() {
	if ($(".navigation").length) {
		$(".navigation-trigger").on("click", function(e) {
			$(this).closest(".navigation").toggleClass("is-collapse");
			e.preventDefault();
		});
		checkNavigationTrigger();
	}
}

function checkNavigationTrigger(){
	(function($){
		if($( '.navigation' ).hasClass( 'is-collapse' ) && $(window).width() > bp_medium ){
			$( '.navigation' ).removeClass( 'is-collapse' );
			// $("body").removeClass("overflow-hidden");
			// $("main, footer").show();
		}
	})(jQuery);
}
