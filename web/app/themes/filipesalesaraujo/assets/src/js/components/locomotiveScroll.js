import LocomotiveScroll from 'locomotive-scroll';
export default function () {
    window.addEventListener("load", () => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            multiplier: 0.75,
            scrollFromAnywhere: true,
        });
    });
}