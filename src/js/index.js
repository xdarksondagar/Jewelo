import "textify.js/dist/Textify.min.css";
import TextAni from "./textAni";
import Lenis from "@studio-freight/lenis";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css";
import "../scss/index.scss";

// SMOOTH SCROLL BEHAVIOUR
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});

const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  lenis.scrollTo(".hero", 0);
});

// nav logic
const hamburger = document.querySelector("#nav__hamburger");
const nav = document.querySelector(".nav-side");
const body = document.querySelector("body");
const close = document.querySelector("#close");

function addClass() {
  nav.classList.add("nav-side--active");
  body.classList.add("body-side");
}

function rmClass() {
  nav.classList.remove("nav-side--active");
  body.classList.remove("body-side");
}

hamburger.addEventListener("click", () => addClass());
close.addEventListener("click", () => rmClass());

// text animation
const textAnimation = new TextAni();
// slide

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
