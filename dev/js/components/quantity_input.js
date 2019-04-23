/* ==========================================================================
 *  Function: Quantity input
 * ======================================================================= */
function fn_components_quantity_input(){
	if ($( '.js-quantity' ).length){
		$( '.js-quantity' ).each(function () {
			var inst = $(this),
				input = inst.find( '.js-quantity-input' ),
				quantityUp = inst.find( '.js-quantity-up' ),
				quantityDown = inst.find( '.js-quantity-down' ),
				min = input.attr( 'min' ),
				max = input.attr( 'max' );

			quantityUp.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});

			quantityDown.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});
		});
	}
}