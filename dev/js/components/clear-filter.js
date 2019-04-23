/* ==========================================================================
 *  Function: Clear filter
 * ======================================================================= */
function fn_components_clear_filter(){
	if ($( '.js-clear-filter' ).length){
		$( '.js-clear-filter' ).on( 'click' , function(e){
			$( '.js-select-item' ).each(function( index ) {
				$(this).removeClass(class_active);
			});
			// rangeSlider.reset();
			// $( '.js-price-value' ).text($('.filter-form .js-range-slider-price').data('min') + '€-'+ $('.filter-form .js-range-slider-price').data('max') +'€');
			// checkFilterItems();
			e.preventDefault();
		});
	}
}