//====================================================
//  Function: Fields placeholder
//====================================================
function partPlaceholder() {
  if ($('.js-placeholder-trigger').length) {
    $('.js-placeholder-trigger').focusin(function () {
      $(this).closest('.js-placeholder-block').addClass(classIsActive)
    })

    $('.js-placeholder-trigger').blur(function () {
      if (!$(this).val().length) {
        $(this).closest('.js-placeholder-block').removeClass(classIsActive)
      }
    })
  }
}
