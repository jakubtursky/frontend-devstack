//====================================================
//  Function: Slider
//====================================================
function fn_components_slider(){
	fn_classic_slider();
	fn_detail_slider();
}

function fn_classic_slider(){
	if ($( '.js-slider-classic' ).length) {
		$( '.js-slider-classic' ).slick({
			infinite: true,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			autoplaySpeed: 3000,
			// cssEase: 'linear',
			speed: 500,
			variableWidth: false,
			nextArrow: '<span class="slick-arrows slick-next"><i class="icon icon-chevron-thin-right"></i></span>',
			prevArrow: '<span class="slick-arrows slick-prev"><i class="icon icon-chevron-thin-left"></i></span>',
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1220,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 770,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 460,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}
}

function fn_detail_slider(){
	if ($( '.js-slider-main-product' ).length) {
		$( '.js-slider-main-product' ).slick({
			infinite: true,
			dots: false,
			slidesToShow:1,
			slidesToScroll: 1,
			autoplay: false,
			arrows: true,
			autoplaySpeed: 2000,
			// cssEase: 'linear',
			speed: 500,
			fade: true,
			nextArrow: '<span class="slick-arrows style-mobile slick-next"><i class="icon icon-chevron-thin-right"></i></span>',
			prevArrow: '<span class="slick-arrows style-mobile slick-prev"><i class="icon icon-chevron-thin-left"></i></span>',
			variableWidth: false,
			mobileFirst: true,
			asNavFor:  '.js-slider-thumbnail-product' 
		});
	}

	if ($( '.js-slider-thumbnail-product' ).length) {
		$( '.js-slider-thumbnail-product' ).slick({
			infinite: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			autoplay: false,
			centerMode: true,
			autoplaySpeed: 2000,
			// cssEase: 'linear',
			speed: 500,
			asNavFor: '.js-slider-main-product' ,
			focusOnSelect: true,
			vertical: true,
			nextArrow: '<span class="slick-arrows style-1 slick-next"><i class="icon icon-chevron-thin-down"></i></span>',
			prevArrow: '<span class="slick-arrows style-1 slick-prev"><i class="icon icon-chevron-thin-up"></i></span>',
			verticalSwiping: true
		});
	}
}

