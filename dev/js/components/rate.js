//====================================================
//  Function: Rate list
//====================================================
function componentRate(){
	if ($( '.js-rate' ).length) {
		$( '.js-rate .js-rate-list-item' ).hover(function(){
			var inst = $(this);
			var list = inst.closest( '.js-rate-list' );
			var rateBlock = inst.closest( '.js-rate' );
			var percent = inst.data( 'percent' );
			var id = inst.index() + 1;

			for(i = 0; i <= 5; i++){
				if (i < id){
					list.find( '.js-rate-list-item' ).eq(i).addClass( classActive );
				} else {
					list.find( '.js-rate-list-item' ).eq(i).removeClass( classActive );
				}
			}

			rateBlock.find( '.js-rate-input' ).val(percent);
			rateBlock.find( '.js-rate-percent' ).text(percent);
			

			callbackSetRate(id, percent);
			return false;
		});

	}
	
	// Callback for set rate
	function callbackSetRate(id, percent){
		console.log('Hviezdiček: ' + id);
		console.log('Percenta: ' + percent);
		console.log('\n\n');
	}
}
