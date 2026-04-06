export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,

    slideToClickedSlide: true,

    mousewheel: {
      forceToAxis: true,
    },

    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};