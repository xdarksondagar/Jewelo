export default class Hamburger {
  constuctor(hamburger, nav_link, nav_list) {
    this.hamburger = hamburger;
    this.nav_list = nav_list;
    this.nav_link = nav_link;
    this.events();
  }

  addClasses() {
    this.nav_list.classList.toggle("nav__list--active");
    this.hamburger.classList.toggle("nav--hamburger--active");
    console.log("click");
  }

  events() {
    this.hamburger.addEventListener("click", this.addClasses.bind(this));
    this.nav_link.forEach((el) => {
      el.addEventListener("click", () => {
        this.nav_list.classList.toggle("nav__list--active");
        this.hamburger.classList.toggle("nav--hamburger--active");
      });
    });
  }
}
