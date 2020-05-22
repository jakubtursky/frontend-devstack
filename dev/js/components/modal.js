//====================================================
//  Function: Modal
//====================================================
function componentModal(){
	if ($( '.js-modal-trigger' ).length){
		
		// open modal 
		$( '.js-modal-trigger' ).on( 'click' , function(){
			var inst = $(this);
			var modalId = inst.data( 'modal' );
			
			if ($('.modal-block.is-active').length){
				// $( '.modal-block.' + classActive + '' ).addClass( 'modal-hidden' );
				$( '.modal-block.' + classActive + '' ).removeClass( classActive );
			} else {
				$( '.modal-block.' + classActive + '' ).removeClass( classActive );
				$( '.modal-overlay' ).addClass( classActive );
			}
			$( '.modal-block[data-modal=' + modalId + ']' ).addClass( classActive );

			return false;
		});

		// close modal 
		$( '.js-close-modal' ).on( 'click' , function(){
			if (!$('.modal-hidden').length){
				$( '.modal-overlay' ).removeClass( classActive );
			}
			
			$(this).closest('.modal-block.' + classActive + '').removeClass( classActive );
			return false;
		});

		// close modal keypress key escape
		$(document).keydown(function(event) { 
			if (event.keyCode == 27 && $( '.modal-block' ).hasClass( classActive )) { 
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