// --- GLOBAL VARIABLES --- //
var $window = $(window);
var $document = $(document);
var $header = $('.header');
var bpSmall = 771;
var bpMedium = 992;
var bpLarge = 1200;
var classActive = 'is-active';
var classDisabled = 'is-disabled';
var classLast = 'is-last';
var classHasError = 'has-error';
var classLoading = 'is-loading';
var classOpened = 'is-opened';
var classSelected = 'is-selected';
var classCollapse = 'is-collapse';
var classAnimated = 'is-animated';
var $this = null;
var $containers = $('html,body');

// --- COMPONENTS, PARTS --- //
$(document).ready(function() {
	// ---  COMPONENTS --- //
	// Modal
	componentModal();
	
	// Modal
	componentSelect();
	
	// Range Slider
	componentRangeSlider();
	
	// Quantity Input
	componentQuantityInput();
	
	// Calendar
	componentCalendar();
	
	// Slider
	componentSlider();
	
	// Swiper
	componentSwiper();
	
	// Accordion
	componentAccordion();
	
	// Textarea Resize
	componentTextareaResize();
	
	// Tabs
	componentTabs();
	
	// Google Maps
	componentGoogleMaps();
	
	// Gallery
	componentGallery();
	
	// Remove
	componentRemove();
	
	// Tooltip
	componentTooltip();
	
	// Rate
	componentRate();
	
	// Navigation
	componentFullscreenNavigation();
	
	// Ajax
	componentAjaxLoad();
	
	// AOS
	componentAOS();
	
	// File upload
	componentFileUpload();
	
	// mix it up
	componentMixItUp();
	
	// Validate forms
	componentValidateForms();

	// Clear Filter
	componentClearFilter();

	// ---  PART --- //
	// Placeholder
	partPlaceholder();

	// Detect IE
	partDetectIE();

	// Scroll to
	partScrollTo();

	// Show Hidden
	partShowHidden();

	// Dropdown
	partDropdown();

	// Scroll Resize
	partScrollResize();
});

var resizeTimer;

// --- SCROLL EVENT --- //
$(document).scroll(function() {
	if (resizeTimer) {
		window.cancelAnimationFrame(resizeTimer);
	}

	resizeTimer = window.requestAnimationFrame(function () {
		partScrollResize();
	});
});

// --- RESIZE EVENT --- //
$(window).resize(function() {
	if (resizeTimer) {
		window.cancelAnimationFrame(resizeTimer);
	}

	resizeTimer = window.requestAnimationFrame(function () {
		partScrollResize();
	});
});

// --- LOAD EVENT --- //
$(window).bind('load', function() {
	// Dots
	partDots();

	// Page Loader
	$('body').addClass(classActive);

	// Cookies bar
	setTimeout(function() {
		$('#cookies-bar').addClass(classActive);
	}, 2000);
});


//====================================================
//  Function: Accordion
//====================================================
function componentAccordion() {
	if ($(".js-accordion-group").length) {
		$(".js-accordion-trigger").click(function() {
			var inst = $(this);
			var thisItem = inst.closest(".js-accordion-item");
			var content = ".js-accordion-content";
			var accordionBlock = inst.closest(".js-accordion-group");

			if (thisItem.hasClass(classActive)) {
				thisItem.toggleClass(classActive);
			} else {
				accordionBlock.find(".js-accordion-item." + classActive + "").removeClass(classActive);
				inst.closest(".js-accordion-item").addClass(classActive);
			}
			return false;
		});
	}

	// var accordionBlock = document.querySelector('.js-accordion-group');
 //    var accordionTrigger = document.querySelectorAll('.js-accordion-trigger');

 //    if (accordionBlock){
 //    	for (const trigger of accordionTrigger) {
	//         trigger.addEventListener("click", function(){
	//             var inst = trigger;
	//             var thisItem = trigger.closest( '.js-accordion-item' );
	//             var thisBlock = trigger.closest( '.js-accordion-group' );
	//             var activeItem;

	//             if (thisItem.classList.contains('is-active')) {
	//                 thisItem.classList.toggle("is-active");
	//             } else {
	//                 activeItem = thisBlock.querySelectorAll( '.js-accordion-item.is-active' );
	// 	            if (activeItem.length > 0){
	// 	                for (const item of activeItem) {
	// 	                    item.classList.remove( 'is-active' );
	// 	                }
	// 	            }
	//                 inst.closest( '.js-accordion-item' ).classList.add( 'is-active' );
	//             }
	//             return false;
	//         });
	//     }
 //    }
}


//====================================================
//  Function: Load more content
//====================================================
function componentAjaxLoad(){
	if ($( '.js-load-more-content' ).length){
		$( '.js-load-more-content' ).bind('click', function(){
			var loadMoreBlock = $(this).closest( '.js-load-more-block' );
			var loadContent = $(this).data('content');
			$.ajax({
				url: 'js/data/' + loadContent + '.html',
				data: 'html',
				beforeSend:function(){
					loadMoreBlock.find( '.js-load-more' ).addClass( class_disabled );
					loadMoreBlock.find( '.js-load-more .loading-post' ).addClass( classActive );
				},
				success:function(data){
					setTimeout(function(){ 
						loadMoreBlock.find( '.js-load-more-grid' ).append(data);
						loadMoreBlock.find( '.js-load-more' ).removeClass( class_disabled )
						loadMoreBlock.find( '.js-load-more .loading-post' ).removeClass( classActive );
						
						partDots();
						if ($( '.js-gallery' ).length){
							// gallery.destroy(true);
							componentGallery();
						}
						
						loadMoreBlock.addClass( class_last );
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
function componentAOS(){
	AOS.init();
}


//====================================================
//  Function: Calendar
//====================================================
function componentCalendar(){
	if ($('.js-flatpickr-calendar-date').length){
		var calendarDate = flatpickr(".js-flatpickr-calendar-date", {
			animate: false,
			dateFormat: "d/m/Y",
			disableMobile: "true",
			locale: "sk"
		});
	}

	if ($('.js-flatpickr-calendar-time').length){
		var calendarTime = flatpickr(".js-flatpickr-calendar-time", {
			animate: false,
			disableMobile: "true",
			locale: "sk",
			enableTime: true,
			noCalendar: true,
			dateFormat: "H:i",
			time_24hr: true
		});
	}
}


//====================================================
//  Function: Clear filter
//====================================================
function componentClearFilter(){
	if ($( '.js-clear-filter-trigger' ).length){
		// Clear selected checkbox
		$( document ).on( 'click', '.js-clear-filter-trigger' , function(e){
			var inst = $(this);
			var clearBlock = inst.closest('.js-clear-filter-block');
			clearBlock.find('input').val('');
			clearBlock.find('.checkbox-hidden').prop('checked', false);
			clearBlock.removeClass('is-focused is-selected');
			clearBlock.find('.js-selected-result').text('');

			// rangeSlider.reset();
			// $( '.js-price-value' ).text($('.filter-form .js-range-slider-price').data('min') + '€-'+ $('.filter-form .js-range-slider-price').data('max') +'€');
			e.preventDefault();
		});
	}
}

//====================================================
//  Function: file upload
//====================================================
function componentFileUpload(){
    if ($('.js-file-upload-trigger').length){
        ;( function( $, window, document, undefined )
        {
            $( '.js-file-upload-trigger' ).each( function()
            {
                var $input = $( this ),
                    $label = $input.next( 'label' ),
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
    }

    function callbackUploadedFile(thisInput){
        console.log('callBack Upload File');
        console.log(thisInput);
    }

    function callBackRemoveFile(thisInput){
        console.log('callBack Remove File');
        console.log(thisInput);
    }
}


//====================================================
//  Function: Fullscreen navigation
//====================================================
function componentFullscreenNavigation() {
	if ($(".navigation").length) {
		$(".navigation-trigger").on("click", function(e) {
			$(this).closest(".navigation").toggleClass("is-collapse");
			e.preventDefault();
		});
		checkNavigationTrigger();
	}
}

function checkNavigationTrigger(){
	(function($){
		if($( '.navigation' ).hasClass( 'is-collapse' ) && $(window).width() > bp_medium ){
			$( '.navigation' ).removeClass( 'is-collapse' );
			// $("body").removeClass("overflow-hidden");
			// $("main, footer").show();
		}
	})(jQuery);
}


//====================================================
//  Function: Gallery
//====================================================
var gallery;
function componentGallery(){
	if ($( '.js-gallery' ).length){
		gallery = $( '.js-gallery' );
		gallery.lightGallery({
			selector: '.js-gallery-item',
			hash: false
		});
	}
}

/* ==========================================================================
 *  Initialization Google maps
 * ======================================================================= */
function componentGoogleMaps() {
	$(".map-block").each(function() {
		var inst = $(this);
		var id = inst.attr("id");
		var langitude = inst.data("langitude");
		var longitude = inst.data("longitude");
		initMap(id, langitude, longitude);
	});
}

function initMap(id, langitude, longitude) {
	var markerImg;
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

	function markerSet(image, width, height){
        return new google.maps.MarkerImage(
            image,
            new google.maps.Size(width, height),
            // The origin for my image is 0,0.
            new google.maps.Point(0, 0),
            // The center of the image is 50,50 (my image is a circle with 100,100)
            new google.maps.Point(width / 2, height)
        );
    }

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		markerImg = markerSet('images/map-marker.png', 45, 56);
	} else {
		markerImg = markerSet('images/map-marker.svg', 45, 56);
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
//  Function: Filter items
//====================================================
function componentMixItUp(){
	if ($( '.js-filter-group' ).length) {
		var containerFilterStore = document.querySelector('.js-filter-group');
		var filterStore = mixitup(containerFilterStore);

		// var filterStore = mixitup(containerFilterStore, {
		// 	selectors: {
		// 		target: '.mix-store'
		// 	}
		// });
	}
}


//====================================================
//  Function: Modal
//====================================================
function componentModal(){
	if ($( '.js-modal-trigger' ).length){
		
		// open modal 
		$( '.js-modal-trigger' ).on( 'click' , function(){
			var inst = $(this);
			var modalId = inst.data( 'modal' );
			
			if ($('.modal-block.is-active').length){
				// $( '.modal-block.' + classActive + '' ).addClass( 'modal-hidden' );
				$( '.modal-block.' + classActive + '' ).removeClass( classActive );
			} else {
				$( '.modal-block.' + classActive + '' ).removeClass( classActive );
				$( '.modal-overlay' ).addClass( classActive );
			}
			$( '.modal-block[data-modal=' + modalId + ']' ).addClass( classActive );

			return false;
		});

		// close modal 
		$( '.js-close-modal' ).on( 'click' , function(){
			if (!$('.modal-hidden').length){
				$( '.modal-overlay' ).removeClass( classActive );
			}
			
			$(this).closest('.modal-block.' + classActive + '').removeClass( classActive );
			return false;
		});

		// close modal keypress key escape
		$(document).keydown(function(event) { 
			if (event.keyCode == 27 && $( '.modal-block' ).hasClass( classActive )) { 
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

//====================================================
//  Function: Quantity input
//====================================================
function componentQuantityInput(){
	if ($( '.js-quantity' ).length){
		$( '.js-quantity' ).each(function () {
			var inst = $(this),
			    newVal = 0,
				input = inst.find( '.js-quantity-input' ),
				quantityUp = inst.find( '.js-quantity-up' ),
				quantityDown = inst.find( '.js-quantity-down' ),
				min = input.attr( 'min' ),
				max = input.attr( 'max' );

			quantityUp.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					newVal = oldValue;
				} else {
					newVal = oldValue + 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});

			quantityDown.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					newVal = oldValue;
				} else {
					newVal = oldValue - 1;
				}
				inst.find( '.js-quantity-input' ).val(newVal);
				inst.find( '.js-quantity-input' ).trigger( 'change' );
			});
		});
	}
}

//====================================================
//  Function: Range slider
//====================================================
function componentRangeSlider(){
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


//====================================================
//  Function: Select
//====================================================
function componentSelect(){
	if ($( '.js-select' ).length){
		$( '.js-select' ).select2({
			minimumResultsForSearch: Infinity,
			placeholder: function(){
				$(this).data( 'placeholder' );
			}
		}).focus(function () { $(this).select2( 'open' ); });

		selectEvents($( '.js-select' ));
	}

	if ($('.js-select-object').length){
		$(".js-select-object").select2({
			minimumResultsForSearch: Infinity,
			templateResult: typeOfColor,
			dropdownCssClass: "select-medium-dropdown",
			placeholder: function(){
				$(this).data('placeholder');
			}
		}).focus(function () { 
			$(this).select2( 'open' ); 
		});

		selectEvents($( '.js-select-object' ));
	}
}

function typeOfColor (state) {
	if (!state.id) { return state.text; }
	// console.log(state);
	var optionColor = state.element.dataset.color;
	var optionStatus = state.element.dataset.status;
	var optionStatusText = state.element.dataset.statusText;
	var $state = $(
		'<span class="select-option"><span class="select-option-left-panel"><span class="select-option-color circle circle-25 bg-' + optionColor + '-normal"></span><span class="select-option-text">' + state.text + '</span></span><span class="select-option-right-panel"><span class="select-option-status ' + optionStatus + '">' + optionStatusText + '</span></span></span>'
	);
	return $state;
}

function selectEvents(element){
	element.on('select2:open', function (e) {
		$(this).closest( '.js-placeholder-block' ).addClass( classActive );
	});

	element.on('select2:select', function (e) {
		$(this).closest( '.js-placeholder-block' ).addClass( classActive );
	});

	element.on('select2:close', function (e) {
		if (!$(this).val().length){
			$(this).closest( '.js-placeholder-block' ).removeClass( classActive );
		}
	});
}

//====================================================
//  Function: Slider
//====================================================
function componentSlider(){
	classicSlider();
	detailSlider();
}

function classicSlider(){
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
			prevArrow: '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
			nextArrow: '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
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

function detailSlider(){
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
			prevArrow: '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
			nextArrow: '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
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
			prevArrow: '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
			nextArrow: '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
			verticalSwiping: true
		});
	}
}



//====================================================
//  Function: Slider
//====================================================
function componentSwiper(){
	heroSlider();
	// trustUsSlider();
}

function heroSlider(){
	if ($( '.js-slider-hero' ).length) {

		var inst = $( '.js-slider-hero' ),
			swiperBlock = inst.closest('.js-slider-group'),
			swiperPagination = swiperBlock.find('.js-swiper-pagination'),
			swiperArrowPrev = swiperBlock.find('.js-swiper-arrow-prev'),
			swiperArrowNext = swiperBlock.find('.js-swiper-arrow-next');

		var mySwiper = new Swiper (inst, {
			slidesPerView: 1,
      		spaceBetween: 0,
      		lazy: true,
      		loop: true,
      		speed: 600,
      		autoplay: {
				delay: 4000,
				disableOnInteraction: true,
			},
			pagination: {
				el: swiperPagination,
				clickable: true
     		},
			navigation: {
				nextEl: swiperArrowNext,
				prevEl: swiperArrowPrev,
			}
		});
		
	}
}

function fn_trust_us_slider(){
	if ($( '.js-slider-trust-us' ).length) {

		var inst = $( '.js-slider-trust-us' );
		var swiperArrowPrev = $('.swiper-arrow-group-trust .js-swiper-arrow-prev');
		var swiperArrowNext = $('.swiper-arrow-group-trust .js-swiper-arrow-next');

		var mySwiper = new Swiper ('.js-slider-trust-us', {
      		lazy: true,
      		autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: swiperArrowNext,
				prevEl: swiperArrowPrev,
			},

			breakpoints: {
				200: {
					loop: false,
					freeMode: false,
					slidesPerView: 1,
				},
				576: {
					loop: false,
					freeMode: false,
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
					loop: false,
					freeMode: false,
				},
				992: {
					loop: false,
					slidesPerView: 'auto',
					freeMode: true,
				},
				1200: {
					loop: false,
					slidesPerView: 'auto',
					freeMode: true,
				},
			}

		});
		
	}
}



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


//====================================================
//  Function: Textarea resize
//====================================================
function componentTextareaResize(){
	if ($('textarea[data-autoresize]').length){
		autosize($('textarea[data-autoresize]'));
	}
}


//====================================================
//  Function: Tooltip
//====================================================
function componentTooltip(){
	if ($( '.js-tooltip' ).length){
		tippy('.js-tooltip', {
			placement: 'top-center',
			animation: 'shift-away',
			// allowTitleHTML: true,
			// trigger: 'click',
			arrow: true
		});
	}
}

//====================================================
//  Function: Validate forms
//====================================================

function componentValidateForms(){
	
	// Newsletter submit
	if ($( '#form-validation' ).length){
		var formValidate = $( '#form-validation' );

		formValidate.parsley().on( 'form:submit' , function(){
			formatFormResult(formValidate);

			return false;
		});
	}

	window.Parsley.on('field:error', function() {
		$(this.$element).closest('.js-field-validation').addClass('has-field-error');
		$(this.$element).closest('.js-field-validation').removeClass('has-field-success');
	});

	window.Parsley.on('field:success', function() {
		$(this.$element).closest('.js-field-validation').removeClass('has-field-error');
		$(this.$element).closest('.js-field-validation').addClass('has-field-success');
	});
	

	function formatFormResult(form){

		var unindexed_array = form.serializeArray();
		var indexed_array = {};

		$.map(unindexed_array, function(n, i){
			indexed_array[n['name']] = n['value'];
		});
		console.log("Format 1: ");
		console.log(form.serialize());
		console.log('\n');
		
		console.log("Format 2: ");
		console.log(form.serializeArray());
		console.log('\n');

		console.log("Format 3: ");
		console.log(indexed_array);
		console.log('\n');

		alert("Check console");
	}
}


//====================================================
//  Function: Detect IE
//====================================================
function partDetectIE(){
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$('body').addClass('ie');
	}

	if ($('.no-object-fit').length){
		fitImg('.img-cover');
	}

	function fitImg(imgClass){
		$(imgClass).each(function(){
			var imgElement = $(this),
				imgSrc = 'url(' + imgElement.attr('src') + ')',
				imgParent = imgElement.parent(),
				imgNewElement = $('<div></div>');
			imgElement.hide();
			imgParent.append(imgNewElement);
			imgNewElement.css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'height':'100%',
				'background-repeat':'no-repeat',
				'background-position':'center',
				'background-size':'cover',
				'width':'100%',
				'background-image':imgSrc
			});
			imgNewElement.addClass('ie-img');
		});
	}

	return false;
}

//====================================================
//  Function: Dots
//====================================================
function partDots() {
	if ($( '.js-dots' ).length){
		dots( '.js-dots' );
	}
}

function dots(elem) {
	$(elem).each(function () {
		$(this).shave($(this).data('height'));
		// $(this).dotdotdot({ 'watch' : true});
	});
}


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

//====================================================
//  Function: Fields placeholder
//====================================================
function partPlaceholder(){
	if ($( '.js-placeholder-trigger' ).length){
		$( '.js-placeholder-trigger' ).focusin(function() {
			$(this).closest( '.js-placeholder-block' ).addClass( classActive );
		});

		$( '.js-placeholder-trigger' ).blur(function() {
			if (!$(this).val().length){
				$(this).closest( '.js-placeholder-block' ).removeClass( classActive );
			}
		});
	}
}


//====================================================
//  Function: Scroll & resize events
//====================================================
var windowScrollTop;
var windowWidth;
// var bottomTop;
// var bottomHeight;

if ($('.navigation').length){
	var navigation = $('.navigation');
}

// if ($('#bottom-bar').length){
// 	var bottomBar = $('#bottom-bar');
// }

function partScrollResize(){
	windowScrollTop = $(window).scrollTop();
	windowWidth = $(window).width();

	if ($('.navigation').length){
		if (windowScrollTop > 1 && windowWidth > bpMedium) {
			navigation.addClass( 'is-navigation-scrolling' );
		} else {
			navigation.removeClass( 'is-navigation-scrolling' );
		}
	}

	// if ($('#bottom-bar').length && windowWidth < bp_medium){
	// 	var bottomTop = $('.content-offset-top').offset().top;
	// 	var bottomHeight = $('.content-height').outerHeight();
	// 	if ((windowScrollTop > bottomTop - 60 ) && (windowScrollTop < bottomHeight - 60) ) {
	// 		bottomBar.addClass( classActive );
	// 	} else {
	// 		bottomBar.removeClass( classActive );
	// 	}
	// }
}


//====================================================
//  Function: Scroll to 
//====================================================
function partScrollTo(){
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
function partShowHidden(){
	if ($( '.js-active-class-toggle' ).length){
		$( '.js-active-class-toggle' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).toggleClass( classActive ).find( '.js-hidden-content' ).toggleClass( classActive );
		});
	}

	if ($( '.js-active-content-toggle' ).length){
		$( '.js-active-content-toggle' ).bind( 'click' , function(e) {
			e.preventDefault();
			var inst = $(this);
			var contentId = inst.data('content');
			$( '.js-hidden-content[data-content="'+ contentId + '"]' ).toggleClass( classActive );
		});
	}

	if ($( '.js-active-class-add' ).length){
		$( '.js-active-class-add' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).addClass( classActive );
		});
	}

	if ($( '.js-active-class-remove' ).length){
		$( '.js-active-class-remove' ).bind( 'click' , function() {
			$(this).closest( '.js-active-block' ).find( '.js-hidden-content' ).removeClass( classActive );
		});
	}

	if ($( '.js-active-class-hide' ).length){
		$( '.js-active-class-hide' ).bind( 'click' , function() {
			$(this).hide();
			$(this).closest( '.js-active-block' ).toggleClass( classActive ).find( '.js-hidden-content' ).addClass( classActive );
		});
	}

	var elementOfClicked = '.dropdown-block-basket';
	$(document).on('click', function(event) {
		if (!$(event.target).closest( elementOfClicked ).length) {
			$( elementOfClicked + '.is-active').removeClass(classActive);
		}
	});
}


//# sourceMappingURL=app.js.map
