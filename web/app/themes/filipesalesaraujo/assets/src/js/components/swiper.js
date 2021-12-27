import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
export default function () {
    const swiper = new Swiper('.js-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.js-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.js-swiper__button-next',
            prevEl: '.js-swiper__button-prev',
        },
    });
}