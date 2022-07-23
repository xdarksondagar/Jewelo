import Textify from "textify.js";

export default class TextAni {
  constructor() {
    this.events();
  }
  events() {
    new Textify();
    new Textify({
      selector: ".para",
      easing: "bounceInOut",
      duration: 1000,
      fade: true,
      once: true
    });
    new Textify({
      selector: ".title",
      rotation: 10,
      easing: "back",
      fade: true,
      once: true
    });
  }
}
