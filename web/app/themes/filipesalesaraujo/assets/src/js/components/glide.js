import Glide from '@glidejs/glide';
export default function () {
    new Glide('.js-carousel', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
    }).mount()
}