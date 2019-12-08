webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_context_ShowContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/context/ShowContext */ "./src/context/ShowContext.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _src_routes_Show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/routes/Show */ "./src/routes/Show.js");
var _jsxFileName = "/Users/andrew/Projects/findsee/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index(_ref) {
  var location = _ref.location,
      match = _ref.match,
      history = _ref.history;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_context_ShowContext__WEBPACK_IMPORTED_MODULE_2__["ShowContext"]),
      shows = _useContext.shows;

  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, shows.length === 0 ? __jsx("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Waiting For Your Search...")) : shows.map(function (i) {
    var strip = function strip(html) {
      var temporalDivElement = document.createElement('div');
      temporalDivElement.innerHTML = html;
      return temporalDivElement.textContent || temporalDivElement.innerText || '';
    };

    var item = {
      key: i.show.id,
      title: i.show.name,
      rating: i.show.rating.average,
      net: i.show.network ? '@' + i.show.network.name : null,
      netSite: i.show.officialSite ? i.show.officialSite : null,
      altText: i.show.name.toString(),
      imgSrc: i.show.image ? i.show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
      sum: strip(i.show.summary)
    };
    return __jsx("div", {
      className: "show",
      key: item.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("h1", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.title), __jsx("h3", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Rating: ", item.rating), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "show/[show]",
      as: "show/".concat(item.key),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("a", {
      className: "showLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("button", {
      className: "view shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "View"))), __jsx("img", {
      className: "pic",
      alt: item.altText,
      src: item.imgSrc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, item.netSite ? __jsx("a", {
      href: item.netSite,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        marginRight: '.5em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Watch Now") : null, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, item.net))), __jsx("p", {
      className: "summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, item.sum));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.85d6f3595dfb2334f001.hot-update.js.map