const slider2 = document.querySelector(".slider2");
const images = document.querySelectorAll(".slider2 img");

const arrowIcon = document.querySelectorAll(".wrapper2 i");

let scrollImg = images[0].clientWidth + 6;

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    slider2.scrollLeft += icon.id == "left" ? -scrollImg : scrollImg;
  });
});

slider2.addEventListener("scroll", () => {
  let center = slider2.scrollLeft + slider2.offsetWidth / 2;

  images.forEach((img) => {
    let imgCenter = img.offsetLeft + img.offsetWidth / 2;

    let distance = Math.abs(center - imgCenter);

    if (distance < img.offsetWidth / 2) {
      img.classList.add("big");
      img.classList.remove("small");
    } else {
      img.classList.remove("big");
      img.classList.add("small");
    }
  });
});
