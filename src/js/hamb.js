export default class Hamburger {
  constuctor(hamburger, nav, body, close) {
    this.hamburger = hamburger;
    this.nav = nav;
    this.body = body;
    this.close = close;
    this.events();
  }

  addClasses() {
    this.nav.classList.add("nav-side--active");
    this.body.classList.add("body-side");
  }
  rmClasses() {
    this.nav.classList.add("nav-side--active");
    this.body.classList.add("body-side");
  }
  events() {
    this.hamburger.addEventListener("click", this.addClasses.bind(this));
    this.close.addEventListener("click", this.rmClasses.bind(this));
  }
}
