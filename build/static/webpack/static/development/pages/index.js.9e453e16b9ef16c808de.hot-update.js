webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/screensizes */ \"./public/screensizes.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import { isMobile } from 'react-device-detect'\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-1i3xtr-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LogoSide\",\n  componentId: \"sc-1i3xtr-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__LoginSide\",\n  componentId: \"sc-1i3xtr-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;form{display:flex;flex-flow:column;}label{font-size:1.4rem;margin-bottom:.5rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\n_c3 = LoginSide;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileContainer\",\n  componentId: \"sc-1i3xtr-3\"\n})([\"display:grid;grid-template-rows:35% 1fr;width:100vw;height:100vh;background-color:\", \";\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_1__[\"color\"].jctDarkGray);\n_c4 = MobileContainer;\nvar MobileLoginSide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].form.withConfig({\n  displayName: \"pages__MobileLoginSide\",\n  componentId: \"sc-1i3xtr-4\"\n})([\"display:flex;flex-flow:column;label{font-size:1.4rem;}input[type=\\\"text\\\"]{height:5rem;width:100%;margin-bottom:2rem;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.5);border-radius:0;color:#fff;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}input[type=\\\"text\\\"]::placeholder{font-family:'Industry',sans-serif;color:#fff;font-size:1.4rem;padding-bottom:3rem;padding-left:.5rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\n_c5 = MobileLoginSide;\n\nvar Home = function Home(_ref) {\n  var isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  })), __jsx(MobileLoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 12\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    placeholder: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 43\n    }\n  }, \"LOGIN\")))))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 8\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/jct-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 10\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 8\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 10\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 12\n    }\n  }, \"username\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 12\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 12\n    }\n  }, \"password\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 12\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"./mammoth\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 20\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 43\n    }\n  }, \"LOGIN\"))))));\n};\n\n_c6 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nHome.getInitialProps = function (_ref2) {\n  var req = _ref2.req;\n  var userAgent;\n\n  if (req) {\n    // if you are on the server and you get a 'req' property from your context\n    userAgent = req.headers['user-agent']; // get the user-agent from the headers\n  } else {\n    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object\n  }\n\n  var isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));\n  return {\n    isMobile: isMobile\n  };\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"MobileContainer\");\n$RefreshReg$(_c5, \"MobileLoginSide\");\n$RefreshReg$(_c6, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJMb2dvU2lkZSIsImRpdiIsIkxvZ2luU2lkZSIsIk1vYmlsZUNvbnRhaW5lciIsImNvbG9yIiwiamN0RGFya0dyYXkiLCJNb2JpbGVMb2dpblNpZGUiLCJmb3JtIiwiSG9tZSIsImlzTW9iaWxlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwidXNlckFnZW50IiwiaGVhZGVycyIsIm5hdmlnYXRvciIsIkJvb2xlYW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw0RUFBZjtLQUFNRixTO0FBT04sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtIQUFkO01BQU1ELFE7QUFZTixJQUFNRSxTQUFTLEdBQUdKLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ2FBQWY7TUFBTUMsUztBQXNDTixJQUFNQyxlQUFlLEdBQUdMLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBS0NHLHlEQUFLLENBQUNDLFdBTFAsQ0FBckI7TUFBTUYsZTtBQVFOLElBQU1HLGVBQWUsR0FBR1IseURBQU0sQ0FBQ1MsSUFBVjtBQUFBO0FBQUE7QUFBQSxtaUJBQXJCO01BQU1ELGU7O0FBMENOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRTdCLFNBQ0VBLFFBQVEsR0FDTixNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFtQyxlQUFXLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsVUFBeEI7QUFBbUMsZUFBVyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXZCLENBQVIsQ0FIRixDQURELENBSkYsQ0FETSxHQWNOLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxFQUlDLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixFQUlFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXZCLENBQVIsQ0FMRixDQURGLENBSkQsQ0FmSjtBQThCRCxDQWhDRDs7TUFBTUQsSTtBQWtDU0EsbUVBQWY7O0FBRUFBLElBQUksQ0FBQ0UsZUFBTCxHQUF1QixpQkFBYTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUNsQyxNQUFJQyxTQUFKOztBQUVBLE1BQUlELEdBQUosRUFBUztBQUFFO0FBQ1RDLGFBQVMsR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksWUFBWixDQUFaLENBRE8sQ0FDK0I7QUFDdkMsR0FGRCxNQUVPO0FBQ0xELGFBQVMsR0FBR0UsU0FBUyxDQUFDRixTQUF0QixDQURLLENBQzJCO0FBQ2pDOztBQUVELE1BQUlILFFBQVEsR0FBR00sT0FBTyxDQUFDSCxTQUFTLENBQUNJLEtBQVYsQ0FDckIsb0VBRHFCLENBQUQsQ0FBdEI7QUFJQSxTQUFPO0FBQUVQLFlBQVEsRUFBUkE7QUFBRixHQUFQO0FBQ0QsQ0FkRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IExvZ29TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZ3tcbiAgICB3aWR0aDogNTAlO1xuICB9XG5gXG5cbmNvbnN0IExvZ2luU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl06bGFzdC1vZi10eXBle1xuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIH1cblxuICBidXR0b24sIGF7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdlMjY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kdXN0cnknO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBNb2JpbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSAxZnI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG5gXG5cbmNvbnN0IE1vYmlsZUxvZ2luU2lkZSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcblxuICBsYWJlbHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl06bGFzdC1vZi10eXBle1xuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgfVxuXG4gIGJ1dHRvbiwgYXtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UyNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmNvbnN0IEhvbWUgPSAoeyBpc01vYmlsZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIGlzTW9iaWxlID8gXG4gICAgICA8TW9iaWxlQ29udGFpbmVyPlxuICAgICAgICA8TG9nb1NpZGU+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9qY3QtbG9nby5wbmdcIiAvPlxuICAgICAgICA8L0xvZ29TaWRlPlxuICAgICAgICA8TW9iaWxlTG9naW5TaWRlPlxuICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiLi9tYW1tb3RoXCI+PGE+TE9HSU48L2E+PC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvTW9iaWxlTG9naW5TaWRlPlxuICAgICAgPC9Nb2JpbGVDb250YWluZXI+XG4gICAgICA6XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxMb2dvU2lkZT5cbiAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvamN0LWxvZ28ucG5nXCIgLz5cbiAgICAgICA8L0xvZ29TaWRlPlxuICAgICAgIDxMb2dpblNpZGU+XG4gICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPnVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiLi9tYW1tb3RoXCI+PGE+TE9HSU48L2E+PC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvTG9naW5TaWRlPlxuICAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcbiAgbGV0IHVzZXJBZ2VudDtcbiAgXG4gIGlmIChyZXEpIHsgLy8gaWYgeW91IGFyZSBvbiB0aGUgc2VydmVyIGFuZCB5b3UgZ2V0IGEgJ3JlcScgcHJvcGVydHkgZnJvbSB5b3VyIGNvbnRleHRcbiAgICB1c2VyQWdlbnQgPSByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIC8vIGdldCB0aGUgdXNlci1hZ2VudCBmcm9tIHRoZSBoZWFkZXJzXG4gIH0gZWxzZSB7XG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBpZiB5b3UgYXJlIG9uIHRoZSBjbGllbnQgeW91IGNhbiBhY2Nlc3MgdGhlIG5hdmlnYXRvciBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaChcbiAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxuICApKVxuXG4gIHJldHVybiB7IGlzTW9iaWxlIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})