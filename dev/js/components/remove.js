//====================================================
//  Function: Remove block
//====================================================
function fn_components_remove(){
	if ($( '.js-remove-trigger' ).length){
		$( '.js-remove-trigger' ).on('click' , function(e){
			$(this).closest( '.js-remove-block' ).remove();
			e.preventDefault();
		});
	}
}
