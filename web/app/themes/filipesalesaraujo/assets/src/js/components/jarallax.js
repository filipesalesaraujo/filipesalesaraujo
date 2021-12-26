import {
    jarallax,
    jarallaxVideo
} from 'jarallax';
export default function () {
    jarallaxVideo();
    jarallax(document.querySelectorAll('.js-jarallax'), {
        speed: 0.5
    });
}