function Product(id, img, price, title, brand) {
  this.id = id;
  this.img = img;
  this.price = price;
  this.title = title;
  this.brand = brand;
}
const likes = JSON.parse(localStorage.getItem("likes")) || {};
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

  const iconHeart = document.createElement("i");

  if (likes[this.id]) {
    iconHeart.classList.add("fa-solid", "fa-heart");
  } else {
    iconHeart.classList.add("fa-regular", "fa-heart");
  }

  iconHeart.addEventListener("click", () => {
    if (iconHeart.classList.contains("fa-regular")) {
      iconHeart.classList.remove("fa-regular");
      iconHeart.classList.add("fa-solid");
      likes[this.id] = true;
    } else {
      iconHeart.classList.add("fa-regular");
      iconHeart.classList.remove("fa-solid");
      likes[this.id] = false;
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  });

  card.append(img, h2, p, span, iconHeart);
  return card;
};

const root = document.querySelector(".root");

const p1 = new Product(1, "img/p1.jpg", 235, "Air Zoom Alphafly", "Nike");
const p2 = new Product(2, "img/p2.jpg", 250, "Air Zoom Alphafly", "abibas");
const p3 = new Product(3, "img/p3.jpg", 250, "Air Zoom Alphafly", "abibas");
const p4 = new Product(4, "img/p4.jpg", 280, "Air Zoom Alphafly", "abibas");
const p5 = new Product(5, "img/p5.jpg", 280, "Air Zoom Alphafly", "abibas");
const p6 = new Product(6, "img/p6.jpg", "320", "juds jjdksn", "abobus");
const p7 = new Product(7, "img/p7.jpg", "350", "juds jjdksn", "abobus");
const p8 = new Product(8, "img/p8.jpg", "360", "jds jjdksn", "abobus");
root.append(
  p1.render(),
  p2.render(),
  p3.render(),
  p4.render(),
  p5.render(),
  p6.render(),
  p7.render(),
  p8.render()
);

