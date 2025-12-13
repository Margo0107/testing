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
  h2Shoes.classList.add("card-title");

  const spanShoes = document.createElement("span");
  spanShoes.textContent = `$ ${this.price}`;
  spanShoes.classList.add("card-price");

  cardSlider.append(imgShoes, h2Shoes, spanShoes);
  return cardSlider;
};

const slider = document.querySelector(".slider");
const track = document.createElement("div");
track.classList.add("track");

const arrowLeft = document.createElement("i");
arrowLeft.classList.add("fa-solid", "fa-arrow-left", "left");

const arrowRight = document.createElement("i");
arrowRight.classList.add("fa-solid", "fa-arrow-right", "right");

slider.append(arrowLeft, track, arrowRight);

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
const c5 = new Shoes(
  "img-slider/c5.avif",
  "Кросівки Mostro OG Prime Sneakers Unisex",
  5500
);
const c6 = new Shoes(
  "img-slider/c6.avif",
  "Штани FUTURE.PUMA.ARCHIVE Extreme Cargo Pants Unisex",
  2690
);
const c7 = new Shoes(
  "img-slider/c7.avif",
  "Штани FENTY x PUMA T7 Track Pants Unisex",
  5590
);
const c8 = new Shoes(
  "img-slider/c8.avif",
  "Спідниця FUTURE.PUMA.ARCHIVE Zip-Off Maxi Woven Skirt Women",
  1199
);
track.append(
  c1.render(),
  c2.render(),
  c3.render(),
  c4.render(),
  c5.render(),
  c6.render(),
  c7.render(),
  c8.render()
);

const cartWidth = document.querySelector(".card-slider").offsetWidth;
const gap = 14;

arrowLeft.addEventListener("click", () => {
  track.scrollLeft -= cartWidth + gap;
  console.log("click left");
});
arrowRight.addEventListener("click", () => {
  track.scrollLeft += cartWidth + gap;
  console.log("click right");
});
