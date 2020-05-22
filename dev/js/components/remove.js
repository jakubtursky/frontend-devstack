//====================================================
//  Function: Remove block
//====================================================
function componentRemove(){
	$( document ).on('click', '.js-remove-trigger' , function(e){
		$(this).closest( '.js-remove-block' ).remove();
		e.preventDefault();
	});

	$( document ).on('click', '.js-remove-content-trigger' , function(e){
		var inst = $(this),
			removeContent = inst.data('remove-content');
		$( '.js-remove-content[data-remove-content="' + removeContent + '"]' ).remove();
		inst.remove();
		e.preventDefault();
	});
}
