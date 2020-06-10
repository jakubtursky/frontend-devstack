//====================================================
//  Function: Fullscreen navigation
//====================================================
function componentFullscreenNavigation() {
  if ($('.js-navigation').length) {
    $('.js-navigation-trigger').on('click', function (e) {
      $(this).closest('.js-navigation').toggleClass(classIsCollapse)
      e.preventDefault()
    })
    checkNavigationTrigger()
  }
}

function checkNavigationTrigger() {
  ;(function ($) {
    if (
      $('.js-navigation').hasClass(classIsCollapse) &&
      $(window).width() > bp_medium
    ) {
      $('.js-navigation').removeClass(classIsCollapse)
      // $("body").removeClass("overflow-hidden");
      // $("main, footer").show();
    }
  })(jQuery)
}
