//====================================================
//  Function: Scroll & resize events
//====================================================
var windowScrollTop
var windowWidth
// var bottomTop;
// var bottomHeight;

if ($('.js-navigation').length) {
  var navigation = $('.js-navigation')
}

// if ($('#bottom-bar').length){
// 	var bottomBar = $('#bottom-bar');
// }

function partScrollResize() {
  windowScrollTop = $(window).scrollTop()
  windowWidth = $(window).width()

  if ($('.js-navigation').length) {
    if (windowScrollTop > 1 && windowWidth > bpMedium) {
      navigation.addClass('is-scrolling')
    } else {
      navigation.removeClass('is-scrolling')
    }
  }

  // if ($('#bottom-bar').length && windowWidth < bp_medium){
  // 	var bottomTop = $('.content-offset-top').offset().top;
  // 	var bottomHeight = $('.content-height').outerHeight();
  // 	if ((windowScrollTop > bottomTop - 60 ) && (windowScrollTop < bottomHeight - 60) ) {
  // 		bottomBar.addClass( classIsActive );
  // 	} else {
  // 		bottomBar.removeClass( classIsActive );
  // 	}
  // }
}
