//====================================================
//  Function: Scroll to 
//====================================================
function fn_parts_scroll_to(){
	if( $( '.js-scroll-trigger' ).length ){
		$( '.js-scroll-trigger' ).bind( 'click' , function () {
			var inst = $(this);
			var target = $(this).attr( 'data-scroll' );
			var navigationHeight = $('.navigation').height();
			if (target.length) {
				$( 'html, body' ).stop().animate({
					scrollTop: $( '#' + target + '' ).offset().top - navigationHeight
				});
				return false;
			}
		});
	}
}