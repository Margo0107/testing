// // function greet(price) {
// //   return price - 100;
// // }
// // function prinPrice(price, fn) {
// //   console.log(`сумма: ${fn(price)}`);
// // }
// // prinPrice(600, greet);

// // function seyHi() {
// //   console.log("hi");
// // }
// // function doLaTer(collback) {
// //   console.log("я началась");
// //   setTimeout(() => {
// //     collback();
// //   }, 2000);
// //   console.log("язакончилась");
// // }
// // doLaTer(seyHi);

// class Timer {
//   constructor(minute, seconds) {
//     this.totalSeconst = minute * 60 + seconds;
//     this.timer = document.querySelector(".timer");
//     this.timerId = null;
//   }
//   start() {
//     this.createTimer();
//     this.timerId = setInterval(() => {
//       this.totalSeconst--;

//       if (this.totalSeconst <= 0) {
//         this.timer.textContent = "00:00";
//         clearInterval(this.timerId);
//       } else {
//         this.createTimer();
//       }
//     }, 1000);
//   }

//   createTimer() {
//     const minutes = Math.floor(this.totalSeconst / 60);
//     const seconds = this.totalSeconst % 60;

//     const createMinutes = String(minutes).padStart(2, "0");
//     const createSeconds = String(seconds).padStart(2, "0");

//     this.timer.textContent = `${createMinutes} : ${createSeconds}`;
//   }
// }
// const timer = new Timer(1, 25);
// timer.start();
// //
// class Clock {
//   #isRunning = false;
//   #intervalId = null;
//   constructor(timeSelector) {
//     this.element = document.querySelector(timeSelector);
//   }
//   startClock = () => {
//     if (!this.#isRunning) {
//       this.#isRunning = true;
//       this.#intervalId = setInterval(this.updateClock, 1000);
//     }
//   };
//   stopClock = () => {
//     if (this.#isRunning) {
//       this.#isRunning = false;
//       clearInterval(this.#intervalId);
//     }
//   };
//   updateClock = () => {
//     const now = new Date();
//     const nowHors = now.getHours().toString().padStart(2, "0");
//     const nowMinutes = now.getMinutes().toString().padStart(2, "0");
//     const nowSeconds = now.getSeconds().toString().padStart(2, "0");

//     this.element.textContent = `${nowHors} : ${nowMinutes} : ${nowSeconds}`;
//   };
// }
// const time = new Clock(".time");

// const run = document.querySelector(".run");
// const stop = document.querySelector(".stop");

// run.addEventListener("click", time.startClock);
// stop.addEventListener("click", time.stopClock);

// //
// class Timer2 {
//   constructor(minutes, seconds) {
//     this.totalSeconds2 = minutes * 60 + seconds;
//     this.initSeconds = minutes * 60 + seconds;
//     this.intervalId2 = null;
//     this.isRannin2 = false;
//     this.timer2 = document.querySelector(".timer2");
//   }
//   startTimer2 = () => {
//     if (this.isRannin2) return;
//     this.isRannin2 = true;
//     if (this.totalSeconds2 <= 0) {
//       this.reset();
//     }
//     this.intervalId2 = setInterval(() => {
//       this.totalSeconds2--;

//       if (this.totalSeconds2 <= 0) {
//         this.stop2();
//         this.render();
//         this.timer2.textContent = "00 : 00";
//       } else {
//         this.render();
//       }
//     }, 1000);
//   };
//   reset = () => {
//     this.totalSeconds2 = this.initSeconds;
//   };
//   stop2 = () => {
//     clearInterval(this.intervalId2);
//     this.isRannin2 = false;
//     this.intervalId2 = null;
//     this.render();
//   };

//   render = () => {
//     const minutes2 = Math.floor(this.totalSeconds2 / 60);
//     const seconds = this.totalSeconds2 % 60;

//     const createMinutes2 = String(minutes2).padStart(2, "0");
//     const createSeconds2 = String(seconds).padStart(2, "0");

//     this.timer2.textContent = `${createMinutes2} : ${createSeconds2}`;
//   };
// }

// const timer2 = new Timer2(1, 25);
// timer2.render();
// const run2 = document.querySelector(".go-btn2");
// const stop2 = document.querySelector(".stop-btn2");

// run2.addEventListener("click", () => timer2.startTimer2());
// stop2.addEventListener("click", () => timer2.stop2());

// function repeat(n, callback) {
//   if (n === 0) return;

//   callback(n);
//   repeat(n - 1, callback);
// }

// repeat(3, function (num) {
//   console.log("hello", num);
// });

const city = "Sumy";
const units = "metric";
const lang = "uk";
const apiKey = "886e80809c613062d67c25b258bf1249";

const url =
  `https://api.openweathermap.org/data/2.5/weather` +
  `?q=${city}` +
  `&units=${units}` +
  `&lang=${lang}` +
  `&appid=${apiKey}`;

// const wither = fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     //container
//     const block = document.querySelector(".wither");
//     //data
//     const cityName = data.name;
//     const temp = Math.round(data.main.temp);
//     const icon = data.weather[0].icon;
//     const descripyion = data.weather[0].description;
//     const sensations = data.main.humidity;

//     //elemets
//     const h2 = document.createElement("h2");
//     h2.textContent = cityName;

//     const p = document.createElement("p");
//     p.textContent = `${temp}°C`;

//     const imgIcon = document.createElement("img");
//     imgIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//     const textDesc = document.createElement("p");
//     textDesc.textContent = `${descripyion}`;

//     const text2 = document.createElement("p");
//     text2.textContent = `влажность ${sensations}`;

//     block.append(h2, p, imgIcon, textDesc, text2);

//     console.log(data);
//   })
//   .catch((error) => console.log(error));

const witherUrl = fetch(url);

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

$(function () {
  const todo = $(".todo");

  $(".btn-todo").on("click", function (value) {
    const input = $(".inpt-todo").val();
    if (!input) return;

    const newLi = $("<li>").text(input);
    newLi.addClass("list-group-item list-group-item-info");

    const delBtn = $("<button>").text("delete");
    delBtn.addClass("btn btn-primary");
    delBtn.on("click", function () {
      $(newLi).remove();
    });

    newLi.append(delBtn);
    todo.append(newLi);
    $(".inpt-todo").val("");
  });
});

