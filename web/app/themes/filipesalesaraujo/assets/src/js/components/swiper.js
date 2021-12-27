//   import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
// import 'swiper/css/bundle';
export default function () {
    const swiper = new Swiper('.js-swiper', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.js-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.js-swiper__button-next',
            prevEl: '.js-swiper__button-prev',
        },
        scrollbar: {
            el: '.js-swiper__scrollbar',
        },
    });
}