//====================================================
//  Function: Slider
//====================================================
function componentSlider() {
  classicSlider()
  detailSlider()
}

function classicSlider() {
  if ($('.js-slider-classic').length) {
    $('.js-slider-classic').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      // cssEase: 'linear',
      speed: 500,
      variableWidth: false,
      prevArrow:
        '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
      nextArrow:
        '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  }
}

function detailSlider() {
  if ($('.js-slider-main-product').length) {
    $('.js-slider-main-product').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      autoplaySpeed: 2000,
      // cssEase: 'linear',
      speed: 500,
      fade: true,
      prevArrow:
        '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
      nextArrow:
        '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
      variableWidth: false,
      mobileFirst: true,
      asNavFor: '.js-slider-thumbnail-product',
    })
  }

  if ($('.js-slider-thumbnail-product').length) {
    $('.js-slider-thumbnail-product').slick({
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      centerMode: true,
      autoplaySpeed: 2000,
      // cssEase: 'linear',
      speed: 500,
      asNavFor: '.js-slider-main-product',
      focusOnSelect: true,
      vertical: true,
      prevArrow:
        '<span class="slick-arrows slick-prev"><span class="slick-icon"><svg class="icon-svg icon-arrow-left"><use xlink:href="images/sprites.svg#icon-arrow-left"></use></svg> </span></span>',
      nextArrow:
        '<span class="slick-arrows slick-next"><span class="slick-icon"><svg class="icon-svg icon-arrow-right"><use xlink:href="images/sprites.svg#icon-arrow-right"></use></svg> </span></span>',
      verticalSwiping: true,
    })
  }
}
