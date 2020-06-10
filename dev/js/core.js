// --- GLOBAL VARIABLES --- //
var $window = $(window)
var $document = $(document)
var $header = $('.header')
var bpSmall = 771
var bpMedium = 992
var bpLarge = 1200
var classIsActive = 'is-active'
var classIsDisabled = 'is-disabled'
var classIsLast = 'is-last'
var classHasError = 'has-error'
var classIsLoading = 'is-loading'
var classIsOpened = 'is-opened'
var classIsSelected = 'is-selected'
var classIsCollapse = 'is-collapse'
var classIsAnimated = 'is-animated'
var $this = null
var $containers = $('html,body')

// --- COMPONENTS, PARTS --- //
$(document).ready(function () {
  // ---  COMPONENTS --- //
  // Modal
  componentModal()

  // Modal
  componentSelect()

  // Range Slider
  componentRangeSlider()

  // Quantity Input
  componentQuantityInput()

  // Calendar
  componentCalendar()

  // Slider
  componentSlider()

  // Swiper
  componentSwiper()

  // Accordion
  componentAccordion()

  // Textarea Resize
  componentTextareaResize()

  // Tabs
  componentTabs()

  // Google Maps
  componentGoogleMaps()

  // Gallery
  componentGallery()

  // Remove
  componentRemove()

  // Tooltip
  componentTooltip()

  // Rate
  componentRate()

  // Navigation
  componentFullscreenNavigation()

  // Ajax
  componentAjaxLoad()

  // AOS
  componentAOS()

  // File upload
  componentFileUpload()

  // mix it up
  componentMixItUp()

  // Validate forms
  componentValidateForms()

  // Clear Filter
  componentClearFilter()

  // ---  PART --- //
  // Placeholder
  partPlaceholder()

  // Detect IE
  partDetectIE()

  // Scroll to
  partScrollTo()

  // Show Hidden
  partShowHidden()

  // Dropdown
  partDropdown()

  // Scroll Resize
  partScrollResize()
})

var resizeTimer

// --- SCROLL EVENT --- //
$(document).scroll(function () {
  if (resizeTimer) {
    window.cancelAnimationFrame(resizeTimer)
  }

  resizeTimer = window.requestAnimationFrame(function () {
    partScrollResize()
  })
})

// --- RESIZE EVENT --- //
$(window).resize(function () {
  if (resizeTimer) {
    window.cancelAnimationFrame(resizeTimer)
  }

  resizeTimer = window.requestAnimationFrame(function () {
    partScrollResize()
  })
})

// --- LOAD EVENT --- //
$(window).bind('load', function () {
  // Dots
  partDots()

  // Page Loader
  $('body').addClass(classIsActive)

  // Cookies bar
  setTimeout(function () {
    $('#cookies-bar').addClass(classIsActive)
  }, 2000)
})
