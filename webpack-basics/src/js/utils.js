const starContsiner = document.createElement("div");
starContsiner.classList.add("strs-container");
document.body.append(starContsiner);
const numbersStar = 100;

function createStars() {
  for (let i = 0; i <= numbersStar; i++) {
    const stars = document.createElement("div");
    stars.classList.add("stars");

    const size = Math.random() * 1 + 5;
    stars.style.width = `${size}px`;
    stars.style.height = `${size}px`;
    stars.style.opacity = Math.random();

    let y = Math.random() * -window.innerHeight;
    let x = Math.random() * window.innerWidth;
    stars.style.left = `${x}px`;

    const fallingSpeed = Math.random() * 0.3 + 0.7;

    const animate = () => {
      y += fallingSpeed;
      stars.style.transform = `translateY(${y}px)`;
      if (y > window.innerHeight) y = -10;
      requestAnimationFrame(animate);
    };
    animate()

    starContsiner.append(stars);
  }
}
createStars();
