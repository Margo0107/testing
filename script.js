const input = document.querySelector(".input-text");

const inputValue = input.value.trim();
const badRegexp = /(убийство|блять|сука|тварь|пошел нахуй|тупой)/i;

input.addEventListener("input", () => {
  if (badRegexp.test(inputValue)) {
    const error = input.nextElementSibling();
    error.textContent = "такие слова не допустими!";
    console.log("такие слова не допустими!");
  } else {
    error.textContent = "все ок";
    console00.log("все ок");
  }
});
