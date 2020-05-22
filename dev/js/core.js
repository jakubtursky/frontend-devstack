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
