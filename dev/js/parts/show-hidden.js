//====================================================
//  Function: Show/hidden
//====================================================
function fn_parts_show_hidden(){
	if ($( '.js-active-class-toggle' ).length){
		$( '.js-active-class-toggle' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).toggleClass( class_active );
		});
	}

	if ($( '.js-active-class-add' ).length){
		$( '.js-active-class-add' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).addClass( class_active );
		});
	}

	if ($( '.js-active-class-remove' ).length){
		$( '.js-active-class-remove' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).removeClass( class_active );
		});
	}

	if ($( '.js-active-class-hide' ).length){
		$( '.js-active-class-hide' ).bind( 'click' , function() {
			$(this).hide();
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).addClass( class_active );
		});
	}
}

