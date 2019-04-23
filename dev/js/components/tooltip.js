/* ==========================================================================
 *  Function: Tooltip
 * ======================================================================= */
function fn_components_tooltip(){
	if ($( '.js-tooltip' ).length){
		tippy('.js-tooltip', {
			placement: 'top-center',
			animation: 'shift-away',
			allowTitleHTML: true,
			// trigger: 'click',
			arrow: true
		})
	}
}