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
