//====================================================
//  Function: Tabs
//====================================================
function fn_components_tabs(){
	if ($( '.js-tabs-group' ).length){
		$( '.js-tabs-group .js-tab-list-item' ).click(function() {
			var inst = $(this);
			var thisId = inst.attr( 'data-id' );
			var thisTabs = $(this).closest( '.js-tabs-group' );

			if(thisId == 'undefined'){
				return false;
			}
			
			if (!inst.hasClass( class_active )){
				thisTabs.find( '.js-tab-list-item.' + class_active + '' ).removeClass( class_active );
				$(this).closest( '.js-tab-list-item').addClass( class_active );
				thisTabs.find( '.js-tabs-content .js-tab-content-item.' + class_active + '' ).removeClass( class_active );
				thisTabs.find( '.js-tabs-content .js-tab-content-item[data-id="'+ thisId + '"]' ).addClass( class_active );
			}
		});
	}
}
