export const sizesSlider = () => {
 new Swiper('.product__slider', {
    slidesPerView: 'auto',
    centerSlides: true,
    loop: true,
    mousewheel: {
        forceToAxis: true,
    },
    navigation: {
        prevEl: ".product__slider-button--prev",
        nextEl: ".product__slider-button--next"
    },
 })
}