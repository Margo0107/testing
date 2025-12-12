function Shoes(img, title, price) {
  this.img = img;
  this.title = title;
  this.price = price;
}

Shoes.prototype.render = function () {
  const cardSlider = document.createElement("div");
  cardSlider.classList.add("card-slider");

  const imgShoes = document.createElement("img");
  imgShoes.src = this.img;
  imgShoes.alt = this.title;

  const h2Shoes = document.createElement("h2");
  h2Shoes.textContent = this.title;

  const spanShoes = document.createElement("span");
  spanShoes.textContent = `$ ${this.price}`;

  cardSlider.append(imgShoes, h2Shoes, spanShoes);
  return cardSlider;
};

const slider = document.querySelector(".slider");
const c1 = new Shoes(
  "img-slider/c1.avif",
  "Кросівки Mostro OG Sneakers Unisex",
  5990
);
const c2 = new Shoes(
  "img-slider/c2.avif",
  "Кросівки Mostro XC Sneakers Unisex",
  6990
);
const c3 = new Shoes(
  "img-slider/c3.avif",
  "Кросівки Mostro XC GORE-TEX® Sneakers Unisex",
  7990
);
const c4 = new Shoes(
  "img-slider/c4.avif",
  "Кросівки Mostro Metallic Sneakers Unisex",
  5540
);
slider.append(c1.render(), c2.render(), c3.render(), c4.render());
