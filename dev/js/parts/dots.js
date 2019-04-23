//====================================================
//  Function: Dots
//====================================================
function fn_parts_dots() {
	if ($( '.dots' ).length){
		fn_dots( '.dots' );
	}
}

function fn_dots(elem) {
	$(elem).each(function () {
		$(this).dotdotdot({ 'watch' : true});
	});
}
