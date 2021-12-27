import Swiper from 'swiper';
export default function () {
    var Swipes = new Swiper('.js-swiper', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.js-swiper__pagination',
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