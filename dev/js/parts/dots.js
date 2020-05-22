//====================================================
//  Function: Dots
//====================================================
function partDots() {
	if ($( '.js-dots' ).length){
		dots( '.js-dots' );
	}
}

function dots(elem) {
	$(elem).each(function () {
		$(this).shave($(this).data('height'));
		// $(this).dotdotdot({ 'watch' : true});
	});
}
