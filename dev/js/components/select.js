//====================================================
//  Function: Select
//====================================================
function componentSelect() {
  if ($('.js-select').length) {
    $('.js-select')
      .select2({
        minimumResultsForSearch: Infinity,
        placeholder: function () {
          $(this).data('placeholder')
        },
      })
      .focus(function () {
        $(this).select2('open')
      })

    selectEvents($('.js-select'))
  }

  if ($('.js-select-object').length) {
    $('.js-select-object')
      .select2({
        minimumResultsForSearch: Infinity,
        templateResult: typeOfColor,
        dropdownCssClass: 'select-medium-dropdown',
        placeholder: function () {
          $(this).data('placeholder')
        },
      })
      .focus(function () {
        $(this).select2('open')
      })

    selectEvents($('.js-select-object'))
  }
}

function typeOfColor(state) {
  if (!state.id) {
    return state.text
  }
  // console.log(state);
  var optionColor = state.element.dataset.color
  var optionStatus = state.element.dataset.status
  var optionStatusText = state.element.dataset.statusText
  var $state = $(
    '<span class="select-option"><span class="select-option-left-panel"><span class="select-option-color circle circle-25 bg-' +
      optionColor +
      '-normal"></span><span class="select-option-text">' +
      state.text +
      '</span></span><span class="select-option-right-panel"><span class="select-option-status ' +
      optionStatus +
      '">' +
      optionStatusText +
      '</span></span></span>',
  )
  return $state
}

function selectEvents(element) {
  element.on('select2:open', function (e) {
    $(this).closest('.js-placeholder-block').addClass(classIsActive)
  })

  element.on('select2:select', function (e) {
    $(this).closest('.js-placeholder-block').addClass(classIsActive)
  })

  element.on('select2:close', function (e) {
    if (!$(this).val().length) {
      $(this).closest('.js-placeholder-block').removeClass(classIsActive)
    }
  })
}
