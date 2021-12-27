import Glide from '@glidejs/glide';
export default function () {
    new Glide('.js-slider', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        focusAt: 'center',
    }).mount()
}