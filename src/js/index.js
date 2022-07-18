import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css";

// import styles bundle
import LocomotiveScroll from "locomotive-scroll";

const hamburger = document.querySelector(".nav__hamburger");
const nav_list = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__list a");
// new Hamburger(hamburger, nav_list, navLink);

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("nav__list--active");
  hamburger.classList.toggle("nav--hamburger--active");
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    nav_list.classList.toggle("nav__list--active");
    hamburger.classList.toggle("nav--hamburger--active");
  });
});

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 60
});

class smoothScroll {
  constructor(element) {
    this.element = element;
    this.scroll = null;
    this.createScroll();
    this.events();
  }

  createScroll() {
    this.scroll = new LocomotiveScroll({
      el: this.element,
      smooth: true,
      getDirection: true
    });
  }

  events() {
    window.addEventListener("resize", this.update.bind(this));
  }

  update() {
    this.scroll.update();
  }

  destroy() {
    this.scroll.destroy();
  }

  pause() {
    this.scroll.pause();
  }
}

const scroll__container = document.querySelector(".scroll__container");
const scrolling = new smoothScroll(scroll__container);
