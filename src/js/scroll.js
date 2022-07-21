import LocomotiveScroll from "locomotive-scroll";

export default class smoothScroll {
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
