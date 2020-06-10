//====================================================
//  Function: Clear filter
//====================================================
function componentClearFilter() {
  if ($('.js-clear-filter-trigger').length) {
    // Clear selected checkbox
    $(document).on('click', '.js-clear-filter-trigger', function (e) {
      var inst = $(this)
      var clearBlock = inst.closest('.js-clear-filter-block')
      clearBlock.find('input').val('')
      clearBlock.find('.js-checkbox-input-hidden').prop('checked', false)
      clearBlock.removeClass('is-focused is-selected')
      clearBlock.find('.js-selected-result').text('')

      // rangeSlider.reset();
      // $( '.js-price-value' ).text($('.filter-form .js-range-slider-price').data('min') + '€-'+ $('.filter-form .js-range-slider-price').data('max') +'€');
      e.preventDefault()
    })
  }
}
