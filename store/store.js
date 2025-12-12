function Product(img, price, title, brand) {
  this.img = img;
  this.price = price;
  this.title = title;
  this.brand = brand;
}

Product.prototype.render = function () {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = this.img;
  img.alt = this.title;

  const h2 = document.createElement("h2");
  h2.textContent = `$ ${this.price}`;

  const p = document.createElement("p");
  p.textContent = this.title;

  const span = document.createElement("span");
  span.textContent = this.brand;
  card.append(img, h2, p, span);
  return card;
};

const root = document.querySelector(".root");
const p1 = new Product("img/p1.jpg", 235, "Air Zoom Alphafly", "Nike");
const p2 = new Product("img/p2.jpg", 250, "Air Zoom Alphafly", "abibas");
const p3 = new Product("img/p3.jpg", 290, "Air Zoom Alphafly", "abibas");
const p4 = new Product("img/p4.jpg", 280, "Air Zoom Alphafly", "abibas");
root.append(p1.render(), p2.render(), p3.render(), p4.render());
