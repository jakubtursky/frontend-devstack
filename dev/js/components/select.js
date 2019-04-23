//====================================================
//  Function: Select
//====================================================
function fn_components_select(){
	if ($( '.js-select' ).length){
		$( '.js-select' ).select2({
			minimumResultsForSearch: Infinity,
			placeholder: function(){
				$(this).data( 'placeholder' );
			}
		}).focus(function () { $(this).select2( 'open' ); });
	}
}