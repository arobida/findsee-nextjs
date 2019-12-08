webpackHotUpdate("static/development/pages/[show].js",{

/***/ "./pages/[show].js":
/*!*************************!*\
  !*** ./pages/[show].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_context_ShowContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/context/ShowContext */ "./src/context/ShowContext.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "/Users/andrew/Projects/findsee/pages/[show].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Show = function Show() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_context_ShowContext__WEBPACK_IMPORTED_MODULE_2__["ShowContext"]),
      shows = _useContext.shows;

  var getShow = function getShow() {///lookup/shows?thetvdb=:id
  };

  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, router.query.show));
};

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=[show].js.8bfa9ed9239905383108.hot-update.js.map