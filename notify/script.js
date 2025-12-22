const btnClickNotify = document.querySelector(".notify-btn");
let success = true;
btnClickNotify.addEventListener("click", () => {
  if (success) {
    new SuccessNotify("сообщение пришло :)").render();
    console.log("click 1");
  } else {
    new ErrorNotify("Произошла ошибка :(").render();
    console.log("click 2");
  }
  success = !success;
});

class Notifycation {
  // audio success 1
  static audioSucces = new Audio("audio/notify.mp3");
  // audio error 2
  static audioError = new Audio("audio/error.mp3");

  static settings = {
    vibrate: true,
    sound: true,
  };

  #text;
  constructor(text) {
    this.#text = text;
  }

  render() {
    const container = document.querySelector(".notify-container");

    this.element = document.createElement("div");
    this.element.classList.add("notifycation");
    this.element.textContent = this.#text;
    if (Notifycation.settings.vibrate && "vibrate" in navigator) {
      navigator.vibrate(200);
    }
    if (Notifycation.settings.sound) {
      Notifycation.audioSucces.play();
    }
    //notifycation limit 5
    if (container.children.length >= 5) {
      this.element.children[0].remove();
    }
    container.append(this.element);
    setTimeout(() => {
      this.remove();
    }, 3000);
  }

  remove() {
    if (!this.element) return;
    this.element.classList.add("hide");
    this.element.addEventListener("animationend", () => {
      this.element.remove();
    });
  }
}
class SuccessNotify extends Notifycation {
  render() {
    super.render();
    Notifycation.audioSucces.play();
    this.element.classList.add("success");
  }
}
class ErrorNotify extends Notifycation {
  render() {
    super.render();
    Notifycation.audioError.play();
    this.element.classList.add("error");
  }
}
