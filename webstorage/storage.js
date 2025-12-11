const button = document.querySelector("button");

button.addEventListener("click", () => {
  const naw = document.body.classList.toggle("dark");

  localStorage.setItem("theme", naw ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// //todo
const input = document.querySelector(".wish-input");
const addBtn = document.querySelector(".add-wish");
const list = document.querySelector(".wish-list");
const btnClear = document.querySelector(".btn-clear-wish");

let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
let editId = null;

function render() {
  list.replaceChildren();

  wishes.forEach((item, index) => {
    const newLi = document.createElement("li");
    //id-li
    newLi.setAttribute("data-uuid", item.id);
    //checkbox true/false
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.done;
    //text li
    const text = document.createElement("span");
    text.textContent = item.text;
    text.style.textDecoration = item.done ? "none" : "line-through";

    checkBox.addEventListener("change", () => {
      item.done = checkBox.checked;

      text.style.textDecoration = item.done ? "none" : "line-through";
      localStorage.setItem("wishes", JSON.stringify(wishes));
    });
    //edit
    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    editButton.addEventListener("click", () => {
      input.value = item.text;
      editId = item.id;
      input.focus();
    });
    //delete
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "delete";
    btnDelete.addEventListener("click", () => {
      wishes.splice(index, 1);

      localStorage.setItem("wishes", JSON.stringify(wishes));
      render();
    });

    newLi.append(checkBox, text, editButton, btnDelete);
    list.append(newLi);
  });
}
render();

btnClear.addEventListener("click", () => {
  localStorage.removeItem("wishes");
  wishes = [];
  render();
});

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  const uuid = Date.now();
  if (!text) return;

  if (editId !== null) {
    const found = wishes.find((item) => item.id === editId);
    found.text = text;
    wishes.sort((a, b) => a.text.localeCompare(b.text));
    editId = null;
  } else {
    wishes.push({ text: text, done: false, id: uuid });
    wishes.sort((a, b) => a.text.localeCompare(b.text));
  }
  localStorage.setItem("wishes", JSON.stringify(wishes));

  input.value = "";
  render();
});

