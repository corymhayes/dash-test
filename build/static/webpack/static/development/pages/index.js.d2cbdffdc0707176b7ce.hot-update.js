webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/screensizes */ \"./public/screensizes.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import { isMobile } from 'react-device-detect'\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-1i3xtr-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LogoSide\",\n  componentId: \"sc-1i3xtr-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LoginSide\",\n  componentId: \"sc-1i3xtr-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;form{display:flex;flex-flow:column;}label{font-size:1.4rem;margin-bottom:.5rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\n_c3 = LoginSide;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileContainer\",\n  componentId: \"sc-1i3xtr-3\"\n})([\"display:grid;grid-template-rows:35% 1fr;width:100vw;height:100vh;background-color:\", \";\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_1__[\"color\"].jctDarkGray);\n_c4 = MobileContainer;\nvar MobileLoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileLoginSide\",\n  componentId: \"sc-1i3xtr-4\"\n})([\"place-self:start / center;form{display:flex;flex-flow:column;width:50%;background-color:cyan;}label{font-size:1.4rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.5);border-radius:0;color:#fff;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}input[type=\\\"text\\\"]::placeholder{font-family:'Industry',sans-serif;color:#fff;font-size:1.4rem;padding-bottom:3rem;padding-left:.5rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\n_c5 = MobileLoginSide;\n\nvar Home = function Home(_ref) {\n  var isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  })), __jsx(MobileLoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 12\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    placeholder: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 43\n    }\n  }, \"LOGIN\")))))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 8\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 10\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 8\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 10\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 12\n    }\n  }, \"username\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 12\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 12\n    }\n  }, \"password\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 43\n    }\n  }, \"LOGIN\"))))));\n};\n\n_c6 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nHome.getInitialProps = function (_ref2) {\n  var req = _ref2.req;\n  var userAgent;\n\n  if (req) {\n    // if you are on the server and you get a 'req' property from your context\n    userAgent = req.headers['user-agent']; // get the user-agent from the headers\n  } else {\n    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object\n  }\n\n  var isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));\n  return {\n    isMobile: isMobile\n  };\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"MobileContainer\");\n$RefreshReg$(_c5, \"MobileLoginSide\");\n$RefreshReg$(_c6, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJMb2dvU2lkZSIsImRpdiIsIkxvZ2luU2lkZSIsIk1vYmlsZUNvbnRhaW5lciIsImNvbG9yIiwiamN0RGFya0dyYXkiLCJNb2JpbGVMb2dpblNpZGUiLCJIb21lIiwiaXNNb2JpbGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwibmF2aWdhdG9yIiwiQm9vbGVhbiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDRFQUFmO0tBQU1GLFM7QUFPTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWQ7TUFBTUQsUTtBQVlOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnYUFBZjtNQUFNQyxTO0FBc0NOLElBQU1DLGVBQWUsR0FBR0wseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FLQ0cseURBQUssQ0FBQ0MsV0FMUCxDQUFyQjtNQUFNRixlO0FBUU4sSUFBTUcsZUFBZSxHQUFHUix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9tQkFBckI7TUFBTUssZTs7QUFnRE4sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFN0IsU0FDRUEsUUFBUSxHQUNOLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFVBQXhCO0FBQW1DLGVBQVcsRUFBQyxVQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFtQyxlQUFXLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdkIsQ0FBUixDQUhGLENBREQsQ0FKRixDQURNLEdBY04sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHVCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELEVBSUMsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLEVBSUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdkIsQ0FBUixDQUxGLENBREYsQ0FKRCxDQWZKO0FBOEJELENBaENEOztNQUFNRCxJO0FBa0NTQSxtRUFBZjs7QUFFQUEsSUFBSSxDQUFDRSxlQUFMLEdBQXVCLGlCQUFhO0FBQUEsTUFBVkMsR0FBVSxTQUFWQSxHQUFVO0FBQ2xDLE1BQUlDLFNBQUo7O0FBRUEsTUFBSUQsR0FBSixFQUFTO0FBQUU7QUFDVEMsYUFBUyxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxZQUFaLENBQVosQ0FETyxDQUMrQjtBQUN2QyxHQUZELE1BRU87QUFDTEQsYUFBUyxHQUFHRSxTQUFTLENBQUNGLFNBQXRCLENBREssQ0FDMkI7QUFDakM7O0FBRUQsTUFBSUgsUUFBUSxHQUFHTSxPQUFPLENBQUNILFNBQVMsQ0FBQ0ksS0FBVixDQUNyQixvRUFEcUIsQ0FBRCxDQUF0QjtBQUlBLFNBQU87QUFBRVAsWUFBUSxFQUFSQTtBQUFGLEdBQVA7QUFDRCxDQWREIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbmBcblxuY29uc3QgTG9nb1NpZGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1ne1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbmBcblxuY29uc3QgTG9naW5TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG5cbiAgbGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpsYXN0LW9mLXR5cGV7XG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgfVxuXG4gIGJ1dHRvbiwgYXtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UyNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmNvbnN0IE1vYmlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzUlIDFmcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbmBcblxuY29uc3QgTW9iaWxlTG9naW5TaWRlID0gc3R5bGVkLmRpdmBcbiAgcGxhY2Utc2VsZjogc3RhcnQgLyBjZW50ZXI7XG5cbiAgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgfVxuXG4gIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl06bGFzdC1vZi10eXBle1xuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgfVxuXG4gIGJ1dHRvbiwgYXtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UyNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmNvbnN0IEhvbWUgPSAoeyBpc01vYmlsZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIGlzTW9iaWxlID8gXG4gICAgICA8TW9iaWxlQ29udGFpbmVyPlxuICAgICAgICA8TG9nb1NpZGU+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9qY3QtbG9nby5wbmdcIiAvPlxuICAgICAgICA8L0xvZ29TaWRlPlxuICAgICAgICA8TW9iaWxlTG9naW5TaWRlPlxuICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiLi9tYW1tb3RoXCI+PGE+TE9HSU48L2E+PC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvTW9iaWxlTG9naW5TaWRlPlxuICAgICAgPC9Nb2JpbGVDb250YWluZXI+XG4gICAgICA6XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxMb2dvU2lkZT5cbiAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvamN0LWxvZ28ucG5nXCIgLz5cbiAgICAgICA8L0xvZ29TaWRlPlxuICAgICAgIDxMb2dpblNpZGU+XG4gICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPnVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiLi9tYW1tb3RoXCI+PGE+TE9HSU48L2E+PC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvTG9naW5TaWRlPlxuICAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcbiAgbGV0IHVzZXJBZ2VudDtcbiAgXG4gIGlmIChyZXEpIHsgLy8gaWYgeW91IGFyZSBvbiB0aGUgc2VydmVyIGFuZCB5b3UgZ2V0IGEgJ3JlcScgcHJvcGVydHkgZnJvbSB5b3VyIGNvbnRleHRcbiAgICB1c2VyQWdlbnQgPSByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIC8vIGdldCB0aGUgdXNlci1hZ2VudCBmcm9tIHRoZSBoZWFkZXJzXG4gIH0gZWxzZSB7XG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBpZiB5b3UgYXJlIG9uIHRoZSBjbGllbnQgeW91IGNhbiBhY2Nlc3MgdGhlIG5hdmlnYXRvciBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaChcbiAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxuICApKVxuXG4gIHJldHVybiB7IGlzTW9iaWxlIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})