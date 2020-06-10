//====================================================
//  Function: Tooltip
//====================================================
function componentTooltip() {
  if ($('.js-tooltip').length) {
    tippy('.js-tooltip', {
      placement: 'top-center',
      animation: 'shift-away',
      // allowTitleHTML: true,
      // trigger: 'click',
      arrow: true,
    })
  }
}
