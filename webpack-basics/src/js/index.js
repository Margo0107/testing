import { url } from "./utils";
import "../scss/style.scss";

async function wait() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const block = document.querySelector(".wither");
    //     //data
    const cityName = data.name;
    const temp = Math.round(data.main.temp);
    const icon = data.weather[0].icon;
    const descripyion = data.weather[0].description;
    const sensations = data.main.humidity;

    //     //elemets
    const h2 = document.createElement("h2");
    h2.textContent = cityName;

    const p = document.createElement("p");
    p.textContent = `${temp}°C`;

    const imgIcon = document.createElement("img");
    imgIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    imgIcon.style.width = "200px";

    const textDesc = document.createElement("p");
    textDesc.textContent = `${descripyion}`;

    const text2 = document.createElement("p");
    text2.textContent = `влажность ${sensations}`;

    const btn = document.createElement("button");
    btn.textContent = "click";
    btn.classList.add("btn", "btn-dark");

    block.append(h2, p, imgIcon, textDesc, text2, btn);

    console.log(data);
  } catch (error) {
    console.error("error", error);
  }
}
wait();

const test = document.querySelector(".test");
const origTest = test.textContent;

test.addEventListener("click", () => {
  test.classList.toggle("active");
  test.classList.contains("active")
    ? (test.textContent = "Clicked!")
    : (test.textContent = origTest);
});

