//====================================================
//  Function: Placeholder
//====================================================
function fn_parts_placeholder(){
	if ($( '.js-placeholder-trigger' ).length){
		$( '.js-placeholder-trigger' ).focusin(function() {
			$(this).closest( '.js-placeholder-block' ).addClass( class_active );
		})

		$( '.js-placeholder-trigger' ).blur(function() {
			if (!$(this).val().length){
				$(this).closest( '.js-placeholder-block' ).removeClass( class_active );
			}
		});
	}
}
