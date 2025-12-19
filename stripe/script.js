const btn = document.querySelector(".notify-btn");

btn.addEventListener("click", () => {
  const types = [SuccesNotify, ErrorNotify, WarningNotify];
  const randomType = types[Math.floor(Math.random() * types.length)];
  new randomType("сообщение" + Notifycation.count).render();
  console.log("сщщбщения:", Notifycation.count);
});
class Notifycation {
  static count = 0;
  #text;
  #id;
  constructor(text) {
    this.#text = text;
    this.#id = ++Notifycation.count;
  }
  //render
  render() {
    const container = document.querySelector(".notify-container");
    this.element = document.createElement("div");
    this.element.classList.add("notification");
    this.element.textContent = this.#text;

    container.append(this.element);
    setTimeout(() => {
      this.remove();
    }, 3000);
  }
  //remove
  remove() {
    if (!this.element) return;

    this.element.classList.add("hide");
    setTimeout(() => {
      this.element.remove();
    }, 300);
  }
}
class SuccesNotify extends Notifycation {
  constructor(text) {
    super(text);
  }
  render() {
    super.render();
    this.element.style.background = "#2ecc71";
  }
}
class ErrorNotify extends Notifycation {
  render() {
    super.render();
    this.element.style.background = "#e74c3c";
  }
}
class WarningNotify extends Notifycation {
  render() {
    super.render();
    this.element.style.background = "#f1c40f";
    this.element.style.color = "#222";
  }
}
