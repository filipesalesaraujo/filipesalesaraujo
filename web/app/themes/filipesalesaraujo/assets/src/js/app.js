import * as AOS from "../../node_modules/aos/dist/aos.js";
import barba from "@barba/core";
import gsap from "gsap";
import home from "./views/home.js";

import locomotiveScroll from "./components/locomotiveScroll.js";
import jarallax from "./components/jarallax.js";
import imask from "./components/imask.js";
import sweetalert2 from "./components/sweetalert2.js";
import anime from "./components/anime.js";
import lightGallery from "./components/lightGallery.js";
import atropos from "./components/atropos.js";
import glide from "./components/glide.js";

locomotiveScroll();
jarallax();
imask();
sweetalert2();
anime();
lightGallery();
atropos();
glide();

AOS.init({
  once: true,
});

barba.init({
  transitions: [{
    name: "opacity-transition",
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
      });
    },
  }, ],
  views: [home],
});