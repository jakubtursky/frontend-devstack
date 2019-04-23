// --- GLOBAL VARIABLES --- //
var $window = $(window);
var $document = $(document);
var $header = $(".header");
var bp_small = 771;
var bp_medium = 992;
var bp_large = 1200;
var class_active = "is-active";
var class_disabled = "is-disabled";
var class_last = "is-last";
var class_has_error = "has-error";
var class_loading = "is-loading";
var class_opened = "is-opened";
var class_selected = "is-selected";
var class_collapse = "is-collapse";
var class_animated = "is-animated";
var $this = null;
var $containers = $("html,body");


// --- COMPONENTS, PARTS --- //
$(document).ready(function() {
	// ---  COMPONENTS --- //
	fn_components_modal();
	fn_components_select();
	fn_components_range_slider()
	fn_components_quantity_input();
	fn_components_calendar();
	fn_components_slider();
	fn_components_accordion();
	fn_components_tabs()
	fn_components_google_map();
	fn_components_gallery();
	fn_components_remove();
	fn_components_tooltip();
	fn_components_rate();
	fn_components_fullscreen_navigation();
	fn_components_ajaxLoad();
	fn_components_aos();
	fn_components_file_upload();
	// fn_components_clear_filter();
	
	// ---  PARTS --- //
	fn_parts_placeholder();
	fn_parts_detectIE();
	fn_parts_scroll_to();
	fn_parts_show_hidden();
	fn_parts_dropdown();
	
	fn_parts_scroll_resize();
});

var resizeTimer;

// --- SCROLL EVENT --- //
$(document).scroll(function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		fn_parts_scroll_resize();
	}, 250);
});

// --- RESIZE EVENT --- //
$(window).resize(function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		fn_parts_scroll_resize();
		// fn_checkNavigationTrigger();
	}, 250);
});

// --- LOAD EVENT --- //
$(window).bind("load", function() {
	fn_parts_dots();

	// pageLoader
	$( 'body' ).addClass( class_active );

	// cookies bar
	setTimeout(function(){ 
		$( '#cookies-bar' ).addClass( class_active );
	}, 2000);
});



//====================================================
//  Function: Accordion
//====================================================
function fn_components_accordion() {
	if ($(".js-accordion-group").length) {
		$(".js-accordion-trigger").click(function() {
			var inst = $(this);
			var thisItem = inst.closest(".js-accordion-item");
			var content = ".js-accordion-content";
			var accordionBlock = inst.closest(".js-accordion-group");

			if (thisItem.hasClass(class_active)) {
				thisItem.toggleClass(class_active);
			} else {
				accordionBlock
					.find(".js-accordion-item." + class_active + "")
					.removeClass(class_active);
				inst.closest(".js-accordion-item").addClass(class_active);
			}
			return false;
		});
	}
}


/* ==========================================================================
 *  Function: Ajax load
 * ======================================================================= */
function fn_components_ajaxLoad(){
    if ($( '.js-load-more-content' ).length){
        $( '.js-load-more-content' ).bind('click', function(){
            var thisGrid = $(this).closest( '.js-load-more-block' );
            var thisContent = $(this).data('content');
            $.ajax({
                url: 'js/data/' + thisContent + '.html',
                data: 'html',
                beforeSend:function(){
                    thisGrid.find( '.js-load-more' ).addClass( class_disabled );
                    thisGrid.find( '.js-load-more .loading-post' ).addClass( class_active );
                },
                success:function(data){
                    setTimeout(function(){ 
                        thisGrid.find( '.js-load-more-grid' ).append(data);
                        thisGrid.find( '.js-load-more' ).removeClass( class_disabled )
                        thisGrid.find( '.js-load-more .loading-post' ).removeClass( class_active );
                        fn_parts_dots();
                        if ($( '.js-gallery' ).length){
                            $( '.js-gallery' ).lightGallery().destroy(true);
                            fn_components_gallery();
                        }
                        thisGrid.addClass( class_last );
                    }, 2000);
                },
                error:function(){
                    console.log( 'error' );
                }
            });
        });
    }
}

// .load-more-block.js-load-more-block
// 		.js-load-more-grid
// 		.js-load-more.load-more
//			.load-more-content.js-load-more-content(data-content="portfolio") Další reference
//			.loading-post.loading-spinner

//====================================================
//  Initialization Aos
//  (data-aos="fade-in" data-aos-delay="300" data-aos-once="true" data-aos-duration="700")
//====================================================
function fn_components_aos(){
	AOS.init();
}


/* ==========================================================================
 *  Function: Calendar
 * ======================================================================= */
function fn_components_calendar(){
	if ($('.js-flatpickr-calendar').length){
		calendarDate = flatpickr(".js-flatpickr-calendar", {
			animate: false,
			dateFormat: "d/m/Y",
			disableMobile: "true",
			locale: "sk"
		});
	}
}


/* ==========================================================================
 *  Function: Clear filter
 * ======================================================================= */
function fn_components_clear_filter(){
	if ($( '.js-clear-filter' ).length){
		$( '.js-clear-filter' ).on( 'click' , function(e){
			$( '.js-select-item' ).each(function( index ) {
				$(this).removeClass(class_active);
			});
			// rangeSlider.reset();
			// $( '.js-price-value' ).text($('.filter-form .js-range-slider-price').data('min') + '€-'+ $('.filter-form .js-range-slider-price').data('max') +'€');
			// checkFilterItems();
			e.preventDefault();
		});
	}
}

//====================================================
//  Function: file upload
//====================================================

function fn_components_file_upload(){
    if ($('.js-file-upload-trigger').length){
        ;( function( $, window, document, undefined )
        {
            $( '.js-file-upload-trigger' ).each( function()
            {
                var $input   = $( this ),
                    $label   = $input.next( 'label' ),
                    labelVal = $label.html();

                $input.on( 'change', function( e ) {
                    var fileName, fileType, fileSize;
                    if( this.files ){
                        fileName = this.files[0].name;
                        fileType = this.files[0].name.split( '.' ).pop();
                        fileSize = this.files[0].size;
                    }
                    if( fileName ){
                        $(this).closest('.js-file-upload-block').find( '.js-file-upload-output' ).html('<span class="js-remove-block">' + fileName + '<span class="js-remove-file file-upload-remove"></span></span>');
                    }
                    else{
                        $(this).html( labelVal );
                    }
                    callbackUploadedFile($(this));
                });

                // Firefox bug fix
                $input
                .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
                .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
            });
        })( jQuery, window, document );
        

        $(document).on('click','.js-remove-file', function(){
            var fileInput = $(this).closest('.js-file-upload-block').find('input')
            $(this).closest('.js-remove-block').remove();
            fileInput.val('');
            callBackRemoveFile(fileInput);
        });


        function callbackUploadedFile(thisInput){
            console.log('callBack Upload File');
            console.log(thisInput);
        }

        function callBackRemoveFile(thisInput){
            console.log('callBack Remove File');
            console.log(thisInput);
        }

    }
}


//====================================================
//  Initialization Fullscreeen navigation
//====================================================
function fn_components_fullscreen_navigation() {
	if ($(".navigation").length) {
		$(".navigation-trigger").on("click", function(e) {
			$(this)
				.closest(".navigation")
				.toggleClass("is-collapse");
			e.preventDefault();
			$("main, footer").toggle();
			$("body").toggleClass("overflow-hidden");
		});
		fn_checkNavigationTrigger();
	}
}

function fn_checkNavigationTrigger(){
	(function($){
		if($( '.navigation' ).hasClass( 'is-collapse' ) && $(window).width() > bp_medium ){
			$( '.navigation' ).removeClass( 'is-collapse' );
			$("body").removeClass("overflow-hidden");
			$("main, footer").show();
		}
	})(jQuery);
}


//====================================================
//  Function: Gallery
//====================================================
function fn_components_gallery(){
	if ($( '.js-gallery' ).length){
		$( '.js-gallery' ).lightGallery({
			selector: '.js-gallery-item',
			hash: false
		})
	}
}

/* ==========================================================================
 *  Initialization Google maps
 * ======================================================================= */
function fn_components_google_map() {
	$(".map-block").each(function() {
		var inst = $(this);
		var id = inst.attr("id");
		var langitude = inst.data("langitude");
		var longitude = inst.data("longitude");
		fn_init_map(id, langitude, longitude);
	});
}

function fn_init_map(id, langitude, longitude) {
	var map;
	var mapOptions = {
		center: new google.maps.LatLng(langitude, longitude),
		zoom: 17,
		zoomControl: true,
		disableDoubleClickZoom: false,
		mapTypeControl: false,
		scaleControl: true,
		scrollwheel: false,
		panControl: true,
		streetViewControl: false,
		draggable: true,
		overviewMapControl: false,
		overviewMapControlOptions: {
			opened: false
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
		//styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
	};
	var mapElement = document.getElementById(id);
	var map = new google.maps.Map(mapElement, mapOptions);

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		var markerImg = "images/map-marker.png";
	} else {
		var markerImg = "images/map-marker.svg";
	}

	var locations = [[langitude, longitude, markerImg]];
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			icon: locations[i][2],
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map
		});
	}
}


//====================================================
//  Function: Modal
//====================================================
function fn_components_modal(){
	if ($( '.js-modal-trigger' ).length){
		
		// open modal 
		$( '.js-modal-trigger' ).on( 'click' , function(){
			var inst = $(this);
			var modalId = inst.data( 'modal' );
			
			if ($('.modal-block.is-active').length){
				$( '.modal-block.' + class_active + '' ).addClass( 'modal-hidden' );
			} else {
				$( '.modal-block.' + class_active + '' ).removeClass( class_active );
				$( '.modal-overlay' ).addClass( class_active );
			}
			$( '.modal-block[data-modal=' + modalId + ']' ).addClass( class_active );

			return false;
		});

		// close modal 
		$( '.js-close-modal' ).on( 'click' , function(){
			if ($('.modal-hidden').length){
				$( '.modal-hidden' ).removeClass( 'modal-hidden' );
			} else {
				$( '.modal-overlay' ).removeClass( class_active );
			}
			$(this).closest('.modal-block.' + class_active + '').removeClass( class_active );
			return false;
		});

		// close modal keypress key escape
		$(document).keydown(function(event) { 
			if (event.keyCode == 27 && $( '.modal-block' ).hasClass( class_active )) { 
				$( '.js-close-modal' ).trigger( 'click' );
			}
		});

		// close modal on click outside from modal box
		$(document).on('click', function(event) {
			if (!$(event.target).closest( '.modal-body' ).length) {
				$( '.js-close-modal' ).trigger( 'click' );
			}
		});

	}
}

/* ==========================================================================
 *  Function: Quantity input
 * ======================================================================= */
function fn_components_quantity_input(){
	if ($( '.js-quantity' ).length){
		$( '.js-quantity' ).each(function () {
			var inst = $(this),
				input = inst.find( '.js-quantity-input' ),
				quantityUp = inst.find( '.js-quantity-up' ),
				quantityDown = inst.find( '.js-quantity-down' ),
				min = input.attr( 'min' ),
				max = input.attr( 'max' );

			quantityUp.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});

			quantityDown.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});
		});
	}
}

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



//====================================================
//  Function: Rate
//====================================================
function fn_components_rate(){
	if ($( '.js-rate' ).length) {
		$( '.js-rate .js-rate-list-item' ).hover(function(){
			var inst = $(this);
			var list = inst.closest( '.js-rate-list' );
			var rateBlock = inst.closest( '.js-rate' );
			var percent = inst.data( 'percent' );
			var id = inst.index() + 1;

			for(i = 0; i <= 5; i++){
				if (i < id){
					list.find( '.js-rate-list-item' ).eq(i).addClass( class_active );
				} else {
					list.find( '.js-rate-list-item' ).eq(i).removeClass( class_active );
				}
			}

			rateBlock.find( '.js-rate-input' ).val(percent);
			rateBlock.find( '.js-rate-percent' ).text(percent);
			

			callbackSetRate(id, percent);
			return false;
		});

		// Callback for set rate
		function callbackSetRate(id, percent){
			console.log('Hviezdiček: ' + id);
			console.log('Percenta: ' + percent);
			console.log('\n\n');
		}
	}
	
}


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


/* ==========================================================================
 *  Function: Tooltip
 * ======================================================================= */
function fn_components_tooltip(){
	if ($( '.js-tooltip' ).length){
		tippy('.js-tooltip', {
			placement: 'top-center',
			animation: 'shift-away',
			allowTitleHTML: true,
			// trigger: 'click',
			arrow: true
		})
	}
}

/* ==========================================================================
 *  Function: Detect IE
 * ======================================================================= */
function fn_parts_detectIE(){
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$('body').addClass('ie');
	}

	return false;
}

//====================================================
//  Function: Dots
//====================================================
function fn_parts_dots() {
	if ($( '.dots' ).length){
		fn_dots( '.dots' );
	}
}

function fn_dots(elem) {
	$(elem).each(function () {
		$(this).dotdotdot({ 'watch' : true});
	});
}


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

//====================================================
//  Function: Placeholder
//====================================================
function fn_parts_placeholder(){
	if ($( '.js-placeholder-trigger' ).length){
		$( '.js-placeholder-trigger' ).focusin(function() {
			$(this).closest( '.js-placeholder-block' ).addClass( class_active );
		})

		$( '.js-placeholder-trigger' ).blur(function() {
			if (!$(this).val().length){
				$(this).closest( '.js-placeholder-block' ).removeClass( class_active );
			}
		});
	}
}


/* ==========================================================================
 *  Function: Add navingation scroll
 * ======================================================================= */

var windowScrollTop;
var windowWidth;
var bottomTop;
var bottomHeight;

if ($('.navigation').length){
	var navigation = $('.navigation');
}

if ($('#bottom-bar').length){
	var bottomBar = $('#bottom-bar');
}

function fn_parts_scroll_resize(){
	windowScrollTop = $(window).scrollTop();
	windowWidth = $(window).width();

	if ($('.navigation').length){
		if (windowScrollTop > 1 && windowWidth > bp_small) {
			navigation.addClass( 'navigation-scroll' );
		} else {
			navigation.removeClass( 'navigation-scroll' );
		}
	}

	if ($('#bottom-bar').length && windowWidth < bp_medium){
		var bottomTop = $('.content-offset-top').offset().top;
		var bottomHeight = $('.content-height').outerHeight();
		if (($(window).scrollTop() > bottomTop - 60 ) && ($(window).scrollTop() < bottomHeight - 60) ) {
			bottomBar.addClass( class_active );
		} else {
			bottomBar.removeClass( class_active );
		}
	}
}


//====================================================
//  Function: Scroll to 
//====================================================
function fn_parts_scroll_to(){
	if( $( '.js-scroll-trigger' ).length ){
		$( '.js-scroll-trigger' ).bind( 'click' , function () {
			var inst = $(this);
			var target = $(this).attr( 'data-scroll' );
			var navigationHeight = $('.navigation').height();
			if (target.length) {
				$( 'html, body' ).stop().animate({
					scrollTop: $( '#' + target + '' ).offset().top - navigationHeight
				});
				return false;
			}
		});
	}
}

//====================================================
//  Function: Show/hidden
//====================================================
function fn_parts_show_hidden(){
	if ($( '.js-active-class-toggle' ).length){
		$( '.js-active-class-toggle' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).toggleClass( class_active );
		});
	}

	if ($( '.js-active-class-add' ).length){
		$( '.js-active-class-add' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).addClass( class_active );
		});
	}

	if ($( '.js-active-class-remove' ).length){
		$( '.js-active-class-remove' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).removeClass( class_active );
		});
	}

	if ($( '.js-active-class-hide' ).length){
		$( '.js-active-class-hide' ).bind( 'click' , function() {
			$(this).hide();
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).addClass( class_active );
		});
	}
}


//# sourceMappingURL=app.js.map
