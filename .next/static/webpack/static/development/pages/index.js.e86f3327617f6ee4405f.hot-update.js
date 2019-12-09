webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_ShowContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ShowContext */ "./src/context/ShowContext.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-headroom */ "./node_modules/react-headroom/dist/index.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Eye__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Eye */ "./src/components/Eye.js");

var _jsxFileName = "/Users/andrew/Projects/findsee/src/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ShowContext__WEBPACK_IMPORTED_MODULE_4__["ShowContext"]),
      shows = _useContext.shows,
      getShows = _useContext.getShows,
      query = _useContext.query,
      getQuery = _useContext.getQuery;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var searchRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      results = _useState[0],
      setResults = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    var shortcut = function shortcut(e) {
      return e.key === 'K' && e.shiftKey === true ? searchRef.current.focus() : null;
    };

    document.body.addEventListener('keyup', shortcut());
    console.log(searchRef);
    return function () {
      document.body.removeEventListener('keyup');
    };
  }, []);

  var change = function change(e) {
    var params = [e.target.value];
    var esc = encodeURIComponent;

    var encodedQuery = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(function (k) {
      return esc(k) + esc(params[k]);
    }).join('&');

    getQuery(encodedQuery);
    setResults(e.target.value);
    console.log(query);
  };

  var toTop = function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  var submit = function submit(e) {
    e.preventDefault();
    router.replace('/'); // const checkPath = () =>
    // 	location.pathname === '/' ? null : history.goBack();

    getShows();
    toTop();
    e.target.reset();
  };

  return __jsx(StyledLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "home",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_Eye__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(react_headroom__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      zIndex: '40'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("form", {
    onSubmit: submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("input", {
    className: "search",
    type: "text",
    placeholder: "\uD83D\uDD0E Shows Search \uD83D\uDD0D",
    ref: searchRef,
    onChange: change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), results ? __jsx("span", {
    className: "results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Results for: ", results) : null), __jsx("main", {
    className: "routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, children));
};

var StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__StyledLayout",
  componentId: "sc-1faptvp-0"
})(["text-align:center;.loader{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#333;}.loader h2{animation:animate 15s linear infinite;background-image:url('https://i.postimg.cc/3JfYgrnj/water-2.png');background-repeat:repeat-x;color:rgba(255,255,255,0.1);font-size:3em;margin:0;padding:0;text-transform:uppercase;-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;}@keyframes animate{0%{background-position:left 0px top 150px;}40%{background-position:left 600px top -30px;}80%{background-position:left 1400px top -30px;}100%{background-position:left 2000px top 150px;}}.eye{position:fixed;width:3em;top:18px;left:5px;z-index:5;}.search{width:60vw;font-size:1.3em;height:2em;background:#333;color:white;text-align:center;margin-top:1em;margin-bottom:1em;}.search::placeholder{color:#f57f17;}.summary{padding:0 1em 0 1em;text-align:center;font-size:1em;font-weight:500;}.results{background:#333;color:#f57f17;border-radius:1em;padding:8px;font-size:1.2em;}@keyframes App-logo-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.showLink{z-index:2;position:absolute;margin-top:265px;margin-left:150px;color:white;}.view{border-radius:0.9em;background:#0091ea;color:white;padding:0.5em;font-size:1em;}.shadow{-webkit-box-shadow:3px 3px 5px 6px #333;-moz-box-shadow:3px 3px 5px 6px #333;box-shadow:3px 3px 5px 2px #333;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.e86f3327617f6ee4405f.hot-update.js.map