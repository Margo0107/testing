
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const naw = document.body.classList.toggle("dark");

  localStorage.setItem("theme", naw ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
