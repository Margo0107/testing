const slider2 = document.querySelector(".slider2");
const image = document.querySelectorAll(".slider2 img");

const arrowIcon = document.querySelectorAll(".wrapper2 i");

let scrollImg = image[0].clientWidth + 14;

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    slider2.scrollLeft += icon.id == "left" ? -scrollImg : scrollImg;
  });
});



let images = slider2.querySelectorAll("img");

const firstImg = images[0];
const lastImg = images[images.length - 1];

const cloneImgFirst = firstImg.cloneNode(true);
const cloneLastImg = lastImg.cloneNode(true);

slider2.appendChild(cloneImgFirst);
slider2.insertBefore(cloneLastImg, firstImg);

slider2.scrollLeft = firstImg.offsetWidth;

images = slider2.querySelectorAll("img");

slider2.addEventListener("scroll", () => {
  const scroll = slider2.scrollLeft;
  const max = slider2.scrollWidth - slider2.offsetWidth;

  if (scroll >= max - firstImg.offsetWidth) {
    slider2.scrollLeft = firstImg.offsetWidth;
    return;
  }
  if (scroll <= 0) {
    slider2.scrollLeft = max - lastImg.offsetWidth * 2;
    return;
  }
  let center = slider2.scrollLeft + slider2.offsetWidth / 2;

  images.forEach((img) => {
    let imgCenter = img.offsetLeft + img.offsetWidth / 2;
    let distance = Math.abs(center - imgCenter);

    if (distance < img.offsetWidth / 2) {
      img.classList.add("big");
      img.classList.remove("small");
    } else {
      img.classList.add("small");
      img.classList.remove("big");
    }
  });
});
