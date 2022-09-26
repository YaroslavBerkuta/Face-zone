import * as flsFunctions from "./modules/function.js";
import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper/core";
import { Fancybox } from "@fancyapps/ui";

import "swiper/css/bundle";
flsFunctions.isWebp();

const swiper = new Swiper(".portfolio__sertefikat", {
  modules: [EffectCoverflow, Navigation],
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 450,
    depth: 500,
    modifier: 1.5,
    slideShadows: false,
  },
});
Fancybox.bind('[data-fancybox="gallery"]', {});

const comment = new Swiper(".comment", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const populat = new Swiper('.popular',{
  modules: [Navigation],
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})