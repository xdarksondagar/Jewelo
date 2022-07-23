import Hamburger from "./hamb";
import smoothScroll from "./scroll";
import TextAni from "./textAni";
// nav logic
const hamburger = document.querySelector("#nav__hamburger");
const nav = document.querySelector(".nav-side");
const body = document.querySelector("body");
const close = document.querySelector(".close-btn");

const nav_bar = new Hamburger(hamburger, nav, body, close);

// scroll
const scroll__container = document.querySelector(".scroll__container");
const scrolling = new smoothScroll(scroll__container);

// text animation
const textAnimation = new TextAni();

// slide

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: {
    disableOnInteraction: false,
    delay: 4000,
    pauseOnMouseEnter: true
  },

  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});

const swiperInsta = new Swiper(".insta__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    disableOnInteraction: false,
    delay: 1000,
    pauseOnMouseEnter: true
  },

  breakpoints: {
    550: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    820: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper2 = new Swiper(".swiper-2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 60,

  autoplay: {
    disableOnInteraction: false,
    delay: 4000,
    pauseOnMouseEnter: true
  },

  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 60,
      autoplay: {
        disableOnInteraction: false,
        delay: 2000,
        pauseOnMouseEnter: true
      }
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});

// aos animation
AOS.init();

// const top = document.querySelector(".toTop");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     top.style.display = "block";
//   } else if (window.scrollY < 100) {
//     top.style.display = "none";
//   }
// });
