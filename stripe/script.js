class Product {
  #name;
  #price;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  set name(newName) {
    if (newName.length >= 3) {
      this.#name = newName;
    }
  }
  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    }
  }

  showInfo() {
    return `${this.name} - ${this.price}`;
  }
  render(containerSelector) {
    const container = document.querySelector(containerSelector);

    const card = document.createElement("div");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = this.name;

    const span = document.createElement("span");
    span.textContent = this.price;

    const p = document.createElement("p");
    p.textContent = this.size;
    card.append(h2, span, p);
    container.append(card);
  }
}

class Shoes extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  showInfo() {
    return `${super.showInfo()} розмер: ${this.size}`;
  }
}

const product1 = new Shoes("iaiaiaia", 456, 38).render(".container");
