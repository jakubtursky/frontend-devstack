/* ==========================================================================
 *  Function: Dropdown
 * ======================================================================= */
function fn_parts_dropdown(){
	if ($( '.js-dropdown-trigger' ).length && $(window).width() < bp_small){
		$( '.js-dropdown-trigger' ).on( 'click' , function () {
			$(this).closest( '.js-dropdown-block' ).toggleClass(class_active);
		});
	}
}