//====================================================
//  Function: Quantity input
//====================================================
function componentQuantityInput() {
  if ($('.js-quantity').length) {
    $('.js-quantity').each(function () {
      var inst = $(this),
        newVal = 0,
        input = inst.find('.js-quantity-input'),
        quantityUp = inst.find('.js-quantity-increment'),
        quantityDown = inst.find('.js-quantity-decrement'),
        min = input.attr('min'),
        max = input.attr('max')

      quantityUp.click(function () {
        var oldValue = parseFloat(input.val())
        if (oldValue >= max) {
          newVal = oldValue
        } else {
          newVal = oldValue + 1
        }
        inst.find('.js-quantity-input').val(newVal)
        inst.find('.js-quantity-input').trigger('change')
      })

      quantityDown.click(function () {
        var oldValue = parseFloat(input.val())
        if (oldValue <= min) {
          newVal = oldValue
        } else {
          newVal = oldValue - 1
        }
        inst.find('.js-quantity-input').val(newVal)
        inst.find('.js-quantity-input').trigger('change')
      })
    })
  }
}
