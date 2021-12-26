import Glide from '@glidejs/glide';
export default function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 3000,
        hoverpause: true,
        gap: 20,
        breakpoints: {
            991: {
                perView: 1,
                gap: 0
            }
        }
    }).mount()
}