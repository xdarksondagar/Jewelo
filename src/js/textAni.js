import Animation from "textify.js";

export default class TextAni {
  constructor() {
    this.events();
  }
  events() {
    const animation = new Animation.Textify({
      selector: "[data-textify-text]",
      duration: 1000,
      stagger: 100,
      once: false,
      rotation: 0,
      scale: 1.5,
      easing: "bounceIn"
    });
    const animationTitle = new Animation.TextifyTitle({
      duration: 1000,
      stagger: 15,
      fade: false,
      reveal: true,
      once: false,
      easing: "elasticInOut",
      threshold: 0.5,
      transformOrigin: "center center"
    });
  }
}
