//====================================================
//  Function: Tabs
//====================================================
function componentTabs(){
	if ($( '.js-tabs-group' ).length){
		$( '.js-tabs-group .js-tab-list-item' ).click(function() {
			var inst = $(this);
			var thisId = inst.attr( 'data-id' );
			var thisTabs = $(this).closest( '.js-tabs-group' );

			if(thisId == 'undefined'){
				return false;
			}
			
			if (!inst.hasClass( classActive )){
				thisTabs.find( '.js-tab-list-item.' + classActive + '' ).removeClass( classActive );
				$(this).closest( '.js-tab-list-item').addClass( classActive );
				thisTabs.find( '.js-tabs-content .js-tab-content-item.' + classActive + '' ).removeClass( classActive );
				thisTabs.find( '.js-tabs-content .js-tab-content-item[data-id="'+ thisId + '"]' ).addClass( classActive );
			}
		});
	}
}
