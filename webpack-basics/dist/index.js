/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js"
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\nasync function wait() {\r\n  try {\r\n    const response = await fetch(_utils__WEBPACK_IMPORTED_MODULE_0__.url);\r\n    const data = await response.json();\r\n\r\n    const block = document.querySelector(\".wither\");\r\n    //     //data\r\n    const cityName = data.name;\r\n    const temp = Math.round(data.main.temp);\r\n    const icon = data.weather[0].icon;\r\n    const descripyion = data.weather[0].description;\r\n    const sensations = data.main.humidity;\r\n\r\n    //     //elemets\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.textContent = cityName;\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = `${temp}°C`;\r\n\r\n    const imgIcon = document.createElement(\"img\");\r\n    imgIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\r\n    imgIcon.style.width = \"200px\";\r\n\r\n    const textDesc = document.createElement(\"p\");\r\n    textDesc.textContent = `${descripyion}`;\r\n\r\n    const text2 = document.createElement(\"p\");\r\n    text2.textContent = `влажность ${sensations}`;\r\n\r\n    const btn = document.createElement(\"button\");\r\n    btn.textContent = \"click\";\r\n    btn.classList.add(\"btn\", \"btn-dark\");\r\n\r\n    block.append(h2, p, imgIcon, textDesc, text2, btn);\r\n\r\n    console.log(data);\r\n  } catch (error) {\r\n    console.error(\"error\", error);\r\n  }\r\n}\r\nwait();\r\n\n\n//# sourceURL=webpack://webpack-basics/./src/js/index.js?\n}");

/***/ },

/***/ "./src/js/utils.js"
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nconst city = \"Sumy\";\r\nconst units = \"metric\";\r\nconst lang = \"uk\";\r\nconst apiKey = \"886e80809c613062d67c25b258bf1249\";\r\n\r\nconst url =\r\n  `https://api.openweathermap.org/data/2.5/weather` +\r\n  `?q=${city}` +\r\n  `&units=${units}` +\r\n  `&lang=${lang}` +\r\n  `&appid=${apiKey}`;\r\n\n\n//# sourceURL=webpack://webpack-basics/./src/js/utils.js?\n}");

/***/ },

/***/ "./src/scss/style.scss"
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-basics/./src/scss/style.scss?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;