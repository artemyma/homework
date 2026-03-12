export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },
  });
};
