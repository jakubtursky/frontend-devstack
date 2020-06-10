//====================================================
//  Function: Show/hidden
//====================================================
function partShowHidden() {
  if ($('.js-active-class-toggle').length) {
    $('.js-active-class-toggle').bind('click', function () {
      $(this)
        .closest('.js-active-block')
        .toggleClass(classIsActive)
        .find('.js-hidden-content')
        .toggleClass(classIsActive)
    })
  }

  if ($('.js-active-content-toggle').length) {
    $('.js-active-content-toggle').bind('click', function (e) {
      e.preventDefault()
      var inst = $(this)
      var contentId = inst.data('content')
      $('.js-hidden-content[data-content="' + contentId + '"]').toggleClass(
        classIsActive,
      )
    })
  }

  if ($('.js-active-class-add').length) {
    $('.js-active-class-add').bind('click', function () {
      $(this)
        .closest('.js-active-block')
        .find('.js-hidden-content')
        .addClass(classIsActive)
    })
  }

  if ($('.js-active-class-remove').length) {
    $('.js-active-class-remove').bind('click', function () {
      $(this)
        .closest('.js-active-block')
        .find('.js-hidden-content')
        .removeClass(classIsActive)
    })
  }

  if ($('.js-active-class-hide').length) {
    $('.js-active-class-hide').bind('click', function () {
      $(this).hide()
      $(this)
        .closest('.js-active-block')
        .toggleClass(classIsActive)
        .find('.js-hidden-content')
        .addClass(classIsActive)
    })
  }

  var elementOfClicked = '.dropdown-basket'
  $(document).on('click', function (event) {
    if (!$(event.target).closest(elementOfClicked).length) {
      $(elementOfClicked + '.is-active').removeClass(classIsActive)
    }
  })
}
