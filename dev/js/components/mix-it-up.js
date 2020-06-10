//====================================================
//  Function: Filter items
//====================================================
function componentMixItUp() {
  if ($('.js-filter-group').length) {
    var containerFilterStore = document.querySelector('.js-filter-group')
    var filterStore = mixitup(containerFilterStore)

    // var filterStore = mixitup(containerFilterStore, {
    // 	selectors: {
    // 		target: '.mix-store'
    // 	}
    // });
  }
}
