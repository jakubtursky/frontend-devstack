//====================================================
//  Function: Modal
//====================================================
function fn_components_modal(){
	if ($( '.js-modal-trigger' ).length){
		
		// open modal 
		$( '.js-modal-trigger' ).on( 'click' , function(){
			var inst = $(this);
			var modalId = inst.data( 'modal' );
			
			if ($('.modal-block.is-active').length){
				$( '.modal-block.' + class_active + '' ).addClass( 'modal-hidden' );
			} else {
				$( '.modal-block.' + class_active + '' ).removeClass( class_active );
				$( '.modal-overlay' ).addClass( class_active );
			}
			$( '.modal-block[data-modal=' + modalId + ']' ).addClass( class_active );

			return false;
		});

		// close modal 
		$( '.js-close-modal' ).on( 'click' , function(){
			if ($('.modal-hidden').length){
				$( '.modal-hidden' ).removeClass( 'modal-hidden' );
			} else {
				$( '.modal-overlay' ).removeClass( class_active );
			}
			$(this).closest('.modal-block.' + class_active + '').removeClass( class_active );
			return false;
		});

		// close modal keypress key escape
		$(document).keydown(function(event) { 
			if (event.keyCode == 27 && $( '.modal-block' ).hasClass( class_active )) { 
				$( '.js-close-modal' ).trigger( 'click' );
			}
		});

		// close modal on click outside from modal box
		$(document).on('click', function(event) {
			if (!$(event.target).closest( '.modal-body' ).length) {
				$( '.js-close-modal' ).trigger( 'click' );
			}
		});

	}
}