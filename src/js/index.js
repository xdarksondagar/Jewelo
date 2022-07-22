import Hamburger from "./hamb";
import smoothScroll from "./scroll";

// nav logic
const hamburger = document.querySelector("#nav__hamburger");
const nav = document.querySelector(".nav-side");
const body = document.querySelector("body");
const close = document.querySelector(".close-btn");

const nav_bar = new Hamburger(hamburger, nav, body, close);

// scroll
const scroll__container = document.querySelector(".scroll__container");
const scrolling = new smoothScroll(scroll__container);

// slide

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 60
});

const swiperInsta = new Swiper(".insta__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 1000,
    pauseOnMouseEnter: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper2 = new Swiper(".swiper-2", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30
});

// const top = document.querySelector(".toTop");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     top.style.display = "block";
//   } else if (window.scrollY < 100) {
//     top.style.display = "none";
//   }
// });
