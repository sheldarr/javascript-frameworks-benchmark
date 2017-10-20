webpackJsonp([7],{

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stats = __webpack_require__(314);\n\nvar _stats2 = _interopRequireDefault(_stats);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n    var stats = new _stats2.default();\n\n    document.body.appendChild(stats.dom);\n\n    requestAnimationFrame(function loop() {\n        stats.update();\n        requestAnimationFrame(loop);\n    });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./helpers/stats.js\n// module id = 582\n// module chunks = 7\n\n//# sourceURL=webpack:///./helpers/stats.js?");

/***/ })

},[582]);