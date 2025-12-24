// function greet(price) {
//   return price - 100;
// }
// function prinPrice(price, fn) {
//   console.log(`сумма: ${fn(price)}`);
// }
// prinPrice(600, greet);

// function seyHi() {
//   console.log("hi");
// }
// function doLaTer(collback) {
//   console.log("я началась");
//   setTimeout(() => {
//     collback();
//   }, 2000);
//   console.log("язакончилась");
// }
// doLaTer(seyHi);
function fakeServer(collback) {
  setTimeout(() => {

  }, Math.random() * 3000);
}
function loadNotify(collback) {
  console.log(`запрос отправлен`);
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  loadNotify((error, data) => {});
});
