const button = document.querySelector("button");

button.addEventListener("click", () => {
  const naw = document.body.classList.toggle("dark");

  localStorage.setItem("theme", naw ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
//todo

const input = document.querySelector(".input-text");
const btnSave = document.querySelector(".save");
const result = document.querySelector(".result");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function render() {
  result.replaceChildren();

  notes.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    result.append(newLi);
  });
}
render();

btnSave.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  render();
});
