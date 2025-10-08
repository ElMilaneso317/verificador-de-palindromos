/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\n  var boton = document.getElementById(\"btnVerificar\");\n  boton.addEventListener(\"click\", function () {\n    var texto = document.getElementById(\"texto\").value.trim();\n    if (texto === \"\") {\n      Swal.fire({\n        icon: \"warning\",\n        title: \"Oye viejo...\",\n        text: \"Escribe algo antes de comprobar no seas sonso\",\n        confirmButtonColor: \"#6c5ce7\"\n      });\n      return;\n    }\n    var limpio = texto.toLowerCase().replace(/\\s/g, \"\");\n    var invertido = limpio.split(\"\").reverse().join(\"\");\n    if (limpio === invertido) {\n      Swal.fire({\n        icon: \"success\",\n        title: \"¡Sí jala, es un palíndromo!\",\n        text: \"\\\"\".concat(texto, \"\\\" se lee igual al rev\\xE9s.\"),\n        confirmButtonColor: \"#0984e3\"\n      });\n    } else {\n      Swal.fire({\n        icon: \"error\",\n        title: \"No es un palíndromo (todo pndejo)\",\n        text: \"Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda..\",\n        confirmButtonColor: \"#d63031\"\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;