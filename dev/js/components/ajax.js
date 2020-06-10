//====================================================
//  Function: Load more content
//====================================================
function componentAjaxLoad() {
  if ($('.js-load-more-trigger').length) {
    $('.js-load-more-trigger').bind('click', function () {
      var loadMoreBlock = $(this).closest('.js-load-more-block')
      var loadContent = $(this).data('content')
      $.ajax({
        url: 'js/data/' + loadContent + '.html',
        data: 'html',
        beforeSend: function () {
          loadMoreBlock.find('.js-load-more').addClass(classIsDisabled)
          loadMoreBlock
            .find('.js-load-more .js-load-more-spinner')
            .addClass(classIsActive)
        },
        success: function (data) {
          setTimeout(function () {
            loadMoreBlock.find('.js-load-more-grid').append(data)
            loadMoreBlock.find('.js-load-more').removeClass(classIsDisabled)
            loadMoreBlock
              .find('.js-load-more .js-load-more-spinner')
              .removeClass(classIsActive)

            partDots()
            if ($('.js-gallery').length) {
              // gallery.destroy(true);
              componentGallery()
            }

            loadMoreBlock.addClass(classIsLast)
          }, 2000)
        },
        error: function () {
          console.log('error')
        },
      })
    })
  }
}

// .js-load-more-block
// 		.js-load-more-grid
// 		.js-load-more.load-more
//			.load-more__button.js-load-more-trigger(data-content="portfolio") Další reference
//			.load-more__spinner.loading-spinner.js-load-more-spinner
