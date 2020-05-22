/* ==========================================================================
 *  Function: Dropdown
 * ======================================================================= */
function partDropdown(){
	if ($( '.js-dropdown-trigger' ).length){
		$( '.js-dropdown-trigger' ).on( 'click' , function () {
			if ($(window).width() < bpMedium){
				$(this).closest( '.js-dropdown-block' ).toggleClass(classActive);
			}
		});
	}
}