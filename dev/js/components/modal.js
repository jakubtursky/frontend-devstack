//====================================================
//  Function: Modal
//====================================================
function componentModal() {
  if ($('.js-modal-trigger').length) {
    // open modal
    $('.js-modal-trigger').on('click', function () {
      var inst = $(this)
      var modalId = inst.data('modal')

      if ($('.js-modal.is--active').length) {
        $('.js-modal.' + classIsActive + '').addClass('modal-hidden')
      } else {
        $('.js-modal.' + classIsActive + '').removeClass(classIsActive)
        $('.js-modal-overlay').addClass(classIsActive)
      }
      $('.js-modal[data-modal=' + modalId + ']').addClass(classIsActive)

      $('body').addClass('is--modal-open')
      return false
    })

    // close modal
    $('.js-close-modal').on('click', function () {
      if ($('.modal-hidden').length) {
        $('.modal-hidden').removeClass('modal-hidden')
      } else {
        $('.js-modal-overlay').removeClass(classIsActive)
      }
      $(this)
        .closest('.js-modal.' + classIsActive + '')
        .removeClass(classIsActive)
      $('body').removeClass('is--modal-open')
      return false
    })

    // close modal keypress key escape
    $(document).keydown(function (event) {
      if (event.keyCode == 27 && $('.js-modal-body').hasClass(classIsActive)) {
        $('.js-close-modal').trigger('click')
      }
    })

    // close modal on click outside from modal box
    $(document).on('click', function (event) {
      if (!$(event.target).closest('.js-modal-body').length) {
        $('.js-close-modal').trigger('click')
      }
    })
  }
}
