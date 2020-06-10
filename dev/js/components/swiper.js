//====================================================
//  Function: Slider
//====================================================
function componentSwiper() {
  heroSlider()
  // trustUsSlider();
}

function heroSlider() {
  if ($('.js-slider-hero').length) {
    var inst = $('.js-slider-hero'),
      swiperBlock = inst.closest('.js-slider-group'),
      swiperPagination = swiperBlock.find('.js-swiper-pagination'),
      swiperArrowPrev = swiperBlock.find('.js-swiper-arrow-prev'),
      swiperArrowNext = swiperBlock.find('.js-swiper-arrow-next')

    var mySwiper = new Swiper(inst, {
      slidesPerView: 1,
      spaceBetween: 0,
      lazy: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      pagination: {
        el: swiperPagination,
        clickable: true,
      },
      navigation: {
        nextEl: swiperArrowNext,
        prevEl: swiperArrowPrev,
      },
    })
  }
}

function fn_trust_us_slider() {
  if ($('.js-slider-trust-us').length) {
    var inst = $('.js-slider-trust-us')
    var swiperArrowPrev = $('.swiper-arrow-group-trust .js-swiper-arrow-prev')
    var swiperArrowNext = $('.swiper-arrow-group-trust .js-swiper-arrow-next')

    var mySwiper = new Swiper('.js-slider-trust-us', {
      lazy: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: swiperArrowNext,
        prevEl: swiperArrowPrev,
      },

      breakpoints: {
        200: {
          loop: false,
          freeMode: false,
          slidesPerView: 1,
        },
        576: {
          loop: false,
          freeMode: false,
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          loop: false,
          freeMode: false,
        },
        992: {
          loop: false,
          slidesPerView: 'auto',
          freeMode: true,
        },
        1200: {
          loop: false,
          slidesPerView: 'auto',
          freeMode: true,
        },
      },
    })
  }
}
