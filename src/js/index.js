// import Swiper bundle with all modules installed
import Swiper from "swiper";

// import styles bundle
import "swiper/css";

// import Hamburger from "./hamb.js";
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

// Locomotive Scroll

const scroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true
});

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 60
});
