const sliderBox = document.querySelector(".slider");
const firstImg = sliderBox.querySelectorAll("img")[0];
const arrowIcon = document.querySelectorAll(".wrapper i");

//switching forward and backward
let firstWidth = firstImg.clientWidth + 14;

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    sliderBox.scrollLeft += icon.id == "left" ? -firstWidth : firstWidth;
  });
});

//drag the slider along the container
let isDown = false;
let startX;
let scrollLeft;

sliderBox.addEventListener("mousedown", (e) => {
  isDown = true;
  sliderBox.classList.add("active");
  startX = e.pageX - sliderBox.offsetLeft;
  scrollLeft = sliderBox.scrollLeft;
});

sliderBox.addEventListener("mouseleave", () => {
  isDown = false;
});

sliderBox.addEventListener("mouseup", () => {
  isDown = false;
});

sliderBox.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderBox.offsetLeft;
  const walk = x - startX;
  sliderBox.scrollLeft = scrollLeft - walk;
});
