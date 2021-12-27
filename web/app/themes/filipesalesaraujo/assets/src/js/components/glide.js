import Glide from '@glidejs/glide';
export default function () {
    new Glide('.js-slider', {
        type: 'slider',
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        slideWidth: '100%',
        wrapperWidth : '100%',
    }).mount()
}