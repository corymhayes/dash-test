webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/screensizes */ \"./public/screensizes.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import { isMobile } from 'react-device-detect'\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-1i3xtr-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LogoSide\",\n  componentId: \"sc-1i3xtr-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LoginSide\",\n  componentId: \"sc-1i3xtr-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;form{display:flex;flex-flow:column;}label{font-size:1.4rem;margin-bottom:.5rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\n_c3 = LoginSide;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileContainer\",\n  componentId: \"sc-1i3xtr-3\"\n})([\"display:grid;grid-template-rows:35% 1fr;width:100vw;height:100vh;background-color:\", \";\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_1__[\"color\"].jctDarkGray);\n_c4 = MobileContainer;\nvar MobileLoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileLoginSide\",\n  componentId: \"sc-1i3xtr-4\"\n})([\"display:flex;justify-content:center;form{display:flex;flex-flow:column;}label{font-size:1.4rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;background:none;border:none;border-bottom:1px solid \", \";border-radius:0;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}input[type=\\\"text\\\"]::placeholder{font-family:'Industry',sans-serif;color:#fff;font-size:1.4rem;padding-bottom:3rem;padding-left:.5rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_1__[\"color\"].jctOrange);\n_c5 = MobileLoginSide;\n\nvar Home = function Home(_ref) {\n  var isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  })), __jsx(MobileLoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 12\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    placeholder: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 43\n    }\n  }, \"LOGIN\")))))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 8\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 10\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 8\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 10\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 12\n    }\n  }, \"username\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 12\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 12\n    }\n  }, \"password\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 43\n    }\n  }, \"LOGIN\"))))));\n};\n\n_c6 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nHome.getInitialProps = function (_ref2) {\n  var req = _ref2.req;\n  var userAgent;\n\n  if (req) {\n    // if you are on the server and you get a 'req' property from your context\n    userAgent = req.headers['user-agent']; // get the user-agent from the headers\n  } else {\n    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object\n  }\n\n  var isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));\n  return {\n    isMobile: isMobile\n  };\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"MobileContainer\");\n$RefreshReg$(_c5, \"MobileLoginSide\");\n$RefreshReg$(_c6, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJMb2dvU2lkZSIsImRpdiIsIkxvZ2luU2lkZSIsIk1vYmlsZUNvbnRhaW5lciIsImNvbG9yIiwiamN0RGFya0dyYXkiLCJNb2JpbGVMb2dpblNpZGUiLCJqY3RPcmFuZ2UiLCJIb21lIiwiaXNNb2JpbGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwibmF2aWdhdG9yIiwiQm9vbGVhbiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDRFQUFmO0tBQU1GLFM7QUFPTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWQ7TUFBTUQsUTtBQVlOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnYUFBZjtNQUFNQyxTO0FBc0NOLElBQU1DLGVBQWUsR0FBR0wseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FLQ0cseURBQUssQ0FBQ0MsV0FMUCxDQUFyQjtNQUFNRixlO0FBUU4sSUFBTUcsZUFBZSxHQUFHUix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9qQkFtQlVHLHlEQUFLLENBQUNHLFNBbkJoQixDQUFyQjtNQUFNRCxlOztBQThDTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUU3QixTQUNFQSxRQUFRLEdBQ04sTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHVCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsVUFBeEI7QUFBbUMsZUFBVyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFVBQXhCO0FBQW1DLGVBQVcsRUFBQyxVQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVEsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF2QixDQUFSLENBSEYsQ0FERCxDQUpGLENBRE0sR0FjTixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsRUFJQyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsRUFJRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVEsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF2QixDQUFSLENBTEYsQ0FERixDQUpELENBZko7QUE4QkQsQ0FoQ0Q7O01BQU1ELEk7QUFrQ1NBLG1FQUFmOztBQUVBQSxJQUFJLENBQUNFLGVBQUwsR0FBdUIsaUJBQWE7QUFBQSxNQUFWQyxHQUFVLFNBQVZBLEdBQVU7QUFDbEMsTUFBSUMsU0FBSjs7QUFFQSxNQUFJRCxHQUFKLEVBQVM7QUFBRTtBQUNUQyxhQUFTLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFlBQVosQ0FBWixDQURPLENBQytCO0FBQ3ZDLEdBRkQsTUFFTztBQUNMRCxhQUFTLEdBQUdFLFNBQVMsQ0FBQ0YsU0FBdEIsQ0FESyxDQUMyQjtBQUNqQzs7QUFFRCxNQUFJSCxRQUFRLEdBQUdNLE9BQU8sQ0FBQ0gsU0FBUyxDQUFDSSxLQUFWLENBQ3JCLG9FQURxQixDQUFELENBQXRCO0FBSUEsU0FBTztBQUFFUCxZQUFRLEVBQVJBO0FBQUYsR0FBUDtBQUNELENBZEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuYFxuXG5jb25zdCBMb2dvU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICB3aWR0aDogMTAwJTtcblxuICBpbWd7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuYFxuXG5jb25zdCBMb2dpblNpZGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBmb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cblxuICBsYWJlbHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmxhc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICB9XG5cbiAgYnV0dG9uLCBhe1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZTI2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgTW9iaWxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgMWZyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuYFxuXG5jb25zdCBNb2JpbGVMb2dpblNpZGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBmb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cblxuICBsYWJlbHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvci5qY3RPcmFuZ2V9O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpsYXN0LW9mLXR5cGV7XG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlcntcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICB9XG5cbiAgYnV0dG9uLCBhe1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZTI2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgSG9tZSA9ICh7IGlzTW9iaWxlIH0pID0+IHtcblxuICByZXR1cm4oXG4gICAgaXNNb2JpbGUgPyBcbiAgICAgIDxNb2JpbGVDb250YWluZXI+XG4gICAgICAgIDxMb2dvU2lkZT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2pjdC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgIDxNb2JpbGVMb2dpblNpZGU+XG4gICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIuL21hbW1vdGhcIj48YT5MT0dJTjwvYT48L0xpbms+PC9idXR0b24+XG4gICAgICAgICA8L2Zvcm0+XG4gICAgICAgPC9Nb2JpbGVMb2dpblNpZGU+XG4gICAgICA8L01vYmlsZUNvbnRhaW5lcj5cbiAgICAgIDpcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgPExvZ29TaWRlPlxuICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9qY3QtbG9nby5wbmdcIiAvPlxuICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgPExvZ2luU2lkZT5cbiAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+dXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+cGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIuL21hbW1vdGhcIj48YT5MT0dJTjwvYT48L0xpbms+PC9idXR0b24+XG4gICAgICAgICA8L2Zvcm0+XG4gICAgICAgPC9Mb2dpblNpZGU+XG4gICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXEgfSkgPT4ge1xuICBsZXQgdXNlckFnZW50O1xuICBcbiAgaWYgKHJlcSkgeyAvLyBpZiB5b3UgYXJlIG9uIHRoZSBzZXJ2ZXIgYW5kIHlvdSBnZXQgYSAncmVxJyBwcm9wZXJ0eSBmcm9tIHlvdXIgY29udGV4dFxuICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gLy8gZ2V0IHRoZSB1c2VyLWFnZW50IGZyb20gdGhlIGhlYWRlcnNcbiAgfSBlbHNlIHtcbiAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IC8vIGlmIHlvdSBhcmUgb24gdGhlIGNsaWVudCB5b3UgY2FuIGFjY2VzcyB0aGUgbmF2aWdhdG9yIGZyb20gdGhlIHdpbmRvdyBvYmplY3RcbiAgfVxuXG4gIGxldCBpc01vYmlsZSA9IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKFxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXG4gICkpXG5cbiAgcmV0dXJuIHsgaXNNb2JpbGUgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})