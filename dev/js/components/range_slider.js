/* ==========================================================================
 *  Initialization range_slider
 * ======================================================================= */
function fn_components_range_slider(){
    if ($('.js-range-block').length){
		
    	$('.js-range-block').each(function(){
			var inst = $(this);
			var rangeSlider;
	    	var $range = inst.find('.js-range-slider-price'),
			    $from = inst.find('.js-range-value'),
			    min = 0,
			    max = 2000,
			    from,
			    to;

			var updateValues = function () {
			    $from.val(from);
			};

			$range.ionRangeSlider({
			    type: 'single',
			    // step: 100,
				// from: 0,
				grid: false,
				force_edges: false,
				hide_min_max: false,
				postfix: ' €',
				hide_from_to: true,
			    onChange: function (data) {
			        from = data.from;
			        to = data.to;
			        updateValues();
			    }
			});

			inst = $range.data('ionRangeSlider');

			$from.keyup( function () {
				var inputVal = $from.val().replace(/ /g,'');
				if (inputVal.length > 0){
					inst.update({
				        from: inputVal
				    });
				}
			});

    	});
		
    }
}

