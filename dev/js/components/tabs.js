//====================================================
//  Function: Tabs
//====================================================
function componentTabs() {
  if ($('.js-tabs-group').length) {
    $('.js-tabs-group .js-tab-list-item').click(function () {
      var inst = $(this)
      var thisId = inst.attr('data-id')
      var thisTabs = $(this).closest('.js-tabs-group')

      if (thisId == 'undefined') {
        return false
      }

      if (!inst.hasClass(classIsActive)) {
        thisTabs
          .find('.js-tab-list-item.' + classIsActive + '')
          .removeClass(classIsActive)
        $(this).closest('.js-tab-list-item').addClass(classIsActive)
        thisTabs
          .find('.js-tabs-content .js-tab-content-item.' + classIsActive + '')
          .removeClass(classIsActive)
        thisTabs
          .find(
            '.js-tabs-content .js-tab-content-item[data-id="' + thisId + '"]',
          )
          .addClass(classIsActive)
      }
    })
  }
}
