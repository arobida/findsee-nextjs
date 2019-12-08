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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_src_context_ShowContext__WEBPACK_IMPORTED_MODULE_4__["ShowContext"]),
      showId = _useContext.showId,
      getId = _useContext.getId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      show = _useState[0],
      setShow = _useState[1];

  getId(router.query.show);
  console.log(getId(router.query.show));

  var getShow =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getId(router.query.show);

            case 2:
              id = _context.sent;
              _context.next = 5;
              return fetch("https://api.tvmaze.com/shows/".concat(id));

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              data = _context.sent;
              setShow(data);
              return _context.abrupt("return", show);

            case 11:
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getShow();
  }, [showId]);
  var isImage = show.image ? show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
  var isTime = show.schedule ? show.schedule.time : 'N/A';

  var exists = function exists(con, val) {
    return con && val;
  };

  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return router.back();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Go Back"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, show.name), __jsx("img", {
    src: isImage,
    alt: show.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: show.officialSite && show.officialSite,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, show.officialSite ? 'Watch' : '')), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Air Date: ", show.premiered), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Status: ", show.status), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Schedule ", __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Time - ", isTime), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Days -", ' ', show.schedule && show.schedule.days.map(function (day) {
    return show.schedule.days.length - 1 === show.schedule.days.indexOf(day) ? day + '' : day + ', ';
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Network ", __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Company: ", show.network && show.network.name), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Code: ", show.network && show.network.country.code), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Country: ", show.network && show.network.country.name), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Timezone: ", show.network && show.network.country.timezone), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=[show].js.e505bd673afa06cf5da4.hot-update.js.map