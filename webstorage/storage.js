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

  notes.forEach((item, index) => {
    //new li
    const newLi = document.createElement("li");
    newLi.textContent = item;
    newLi.draggable = true;

    //create delete li
    const btnDel = document.createElement("button");
    btnDel.classList.add("btn-del");
    btnDel.textContent = "delete";

    //delete li
    btnDel.addEventListener("click", () => {
      notes.splice(index, 1);

      localStorage.setItem("notes", JSON.stringify(notes));
      render();
    });

    newLi.append(btnDel);
    result.append(newLi);
    
    //darg li
    let draggedItem = null;
    result.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    result.addEventListener("drop", drop);

    newLi.addEventListener("dragstart", dragStart);
    newLi.addEventListener("dragend", dragend);

    function dragStart() {
      draggedItem = this;
    }
    function drop(event) {
      event.preventDefault();
      if (event.target.tagName === "LI") {
        result.insertBefore(draggedItem, event.target);
      }
    }
    function dragend() {
      draggedItem = null;
    }
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
