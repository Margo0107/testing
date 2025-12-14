function Shoes(img, title, price) {
  this.img = img;

  let _title = title;
  let _price = price;

  this.titleEl = null;
  this.priceEl = null;

  this.getTitle = function () {
    return _title;
  };
  this.setTitle = function (newTitle) {
    _title = newTitle;

    if (this.titleEl) {
      this.titleEl.textContent = newTitle;
    }
  };
  this.getPrice = function () {
    return _price;
  };
  this.setPrice = function (newPrice) {
    if (newPrice > 0) {
      _price = newPrice;
    }
    if (this.priceEl) {
      this.priceEl.textContent = `$ ${newPrice}`;
    }
  };
}

Shoes.prototype.render = function () {
  const cardSlider = document.createElement("div");
  cardSlider.classList.add("card-slider");

  const imgShoes = document.createElement("img");
  imgShoes.src = this.img;
  imgShoes.alt = this.getTitle();

  const h2Shoes = document.createElement("h2");
  h2Shoes.textContent = this.getTitle();
  h2Shoes.classList.add("card-title");

  const spanShoes = document.createElement("span");
  spanShoes.textContent = `$ ${this.getPrice()}`;
  spanShoes.classList.add("card-price");

  this.titleEl = h2Shoes;
  this.priceEl = spanShoes;

  cardSlider.append(imgShoes, h2Shoes, spanShoes);
  return cardSlider;
};

const slider = document.querySelector(".slider");
const trackWrapper = document.createElement("div");
trackWrapper.classList.add("track-wrapper");
const track = document.createElement("div");
track.classList.add("track");

const arrowLeft = document.createElement("i");
arrowLeft.classList.add("fa-solid", "fa-arrow-left", "left");

const arrowRight = document.createElement("i");
arrowRight.classList.add("fa-solid", "fa-arrow-right", "right");

trackWrapper.append(track);
slider.append(arrowLeft, trackWrapper, arrowRight);

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

//  c1.setTitle("yepi");
//    console.log(c1.getTitle());

//   c1.setPrice("99");
// console.log(c1.getPrice());
