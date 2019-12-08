webpackHotUpdate("static/development/pages/[show].js",{

/***/ "./pages/[show].js":
/*!*************************!*\
  !*** ./pages/[show].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_context_ShowContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/context/ShowContext */ "./src/context/ShowContext.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");


var _jsxFileName = "/Users/andrew/Projects/findsee/pages/[show].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Show = function Show() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      show = _useState[0],
      setShow = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getShow =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var showId, res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return router.query.show;

              case 2:
                showId = _context.sent;
                _context.next = 5;
                return fetch("https://api.tvmaze.com/shows/".concat(showId));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                data = _context.sent;
                setShow(data);
                console.log(data);
                return _context.abrupt("return", data);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getShow() {
        return _ref.apply(this, arguments);
      };
    }();

    getShow();
  }, [router.query.show]);
  var image = show.image.original ? show.image.original : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, show.name), __jsx("img", {
    src: image,
    alt: show.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=[show].js.25a1501c92ceed466487.hot-update.js.map