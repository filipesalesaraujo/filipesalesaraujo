import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'slick-carousel';
import 'jquery.nicescroll';
import 'jquery-mask-plugin';
import 'jquery-parallax.js';
import * as AOS from "../../node_modules/aos/dist/aos.js";

import niceScroll from "./components/niceScroll.js";
import jqueryMask from "./components/jqueryMask.js";

import barba from "@barba/core";
import gsap from "gsap";

AOS.init({
    disable: 'mobile',
    once: true
});

barba.init({
  transitions: [
    {
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
    },
  ],
  views: [
    {
      namespace: "inicio",
      beforeEnter: () => {
      },
      afterEnter() {
        $(function () {
          $("body").getNiceScroll().resize();
          $("body").parallax();
        });
      },
    },
  ],
});

$(function () {
  niceScroll();
  jqueryMask();
});