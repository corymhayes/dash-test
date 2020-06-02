webpackHotUpdate("static/development/pages/mammoth.js",{

/***/ "./pages/mammoth/index.js":
/*!********************************!*\
  !*** ./pages/mammoth/index.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/mammoth/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__Container\",\n  componentId: \"wulb8y-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LogoSide\",\n  componentId: \"wulb8y-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LoginSide\",\n  componentId: \"wulb8y-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;flex-flow:column;\"]);\n_c3 = LoginSide;\nvar SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__SiteHeader\",\n  componentId: \"wulb8y-3\"\n})([\"height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;margin-top:10rem;\"]);\n_c4 = SiteHeader;\nvar SiteList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul.withConfig({\n  displayName: \"mammoth__SiteList\",\n  componentId: \"wulb8y-4\"\n})([\"list-style:none;margin-top:2rem;li,a{font-size:1.8rem;text-align:center;height:5rem;width:20rem;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#292929;}a:hover,li:hover{background-color:#ff7e26;color:#fff;}\"]);\n_c5 = SiteList;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileContainer\",\n  componentId: \"wulb8y-5\"\n})([\"display:grid;grid-template-rows:35% 65%;width:100vw;height:100vh;background-color:\", \"\"], color.jct);\n_c6 = MobileContainer;\nvar MobileSiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileSiteHeader\",\n  componentId: \"wulb8y-6\"\n})([\"height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;\"]);\n_c7 = MobileSiteHeader;\nvar MobileLoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileLoginSide\",\n  componentId: \"wulb8y-7\"\n})([\"display:flex;align-items:center;width:100%;flex-flow:column;margin-top:5rem;\"]);\n_c8 = MobileLoginSide;\n\nvar Home = function Home(_ref) {\n  var data = _ref.data,\n      isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  })), __jsx(MobileLoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(MobileSiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  })))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(SiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  }))));\n};\n\n_c9 = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"SiteHeader\");\n$RefreshReg$(_c5, \"SiteList\");\n$RefreshReg$(_c6, \"MobileContainer\");\n$RefreshReg$(_c7, \"MobileSiteHeader\");\n$RefreshReg$(_c8, \"MobileLoginSide\");\n$RefreshReg$(_c9, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL2luZGV4LmpzPzk2MjgiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTG9nb1NpZGUiLCJMb2dpblNpZGUiLCJTaXRlSGVhZGVyIiwiU2l0ZUxpc3QiLCJ1bCIsIk1vYmlsZUNvbnRhaW5lciIsImNvbG9yIiwiamN0IiwiTW9iaWxlU2l0ZUhlYWRlciIsIk1vYmlsZUxvZ2luU2lkZSIsIkhvbWUiLCJkYXRhIiwiaXNNb2JpbGUiLCJtYXAiLCJkIiwiaSIsIkJBVFRFUlkiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBZjtLQUFNRixTO0FBT04sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtIQUFkO01BQU1DLFE7QUFZTixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWY7TUFBTUUsUztBQVFOLElBQU1DLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4S0FBaEI7TUFBTUcsVTtBQWFOLElBQU1DLFFBQVEsR0FBR0wseURBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSx5UEFBZDtNQUFNRCxRO0FBc0JOLElBQU1FLGVBQWUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrRkFLQ08sS0FBSyxDQUFDQyxHQUxQLENBQXJCO01BQU1GLGU7QUFRTixJQUFNRyxnQkFBZ0IsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2SkFBdEI7TUFBTVMsZ0I7QUFZTixJQUFNQyxlQUFlLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0ZBQXJCO01BQU1VLGU7O0FBU04sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25DLFNBQ0VBLFFBQVEsR0FDTixNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDUDtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVksTUFBQyxnREFBRDtBQUFNLFVBQUksc0JBQWVELENBQUMsQ0FBQ0UsT0FBRixDQUFVQyxXQUFWLEVBQWYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUgsQ0FBQyxDQUFDRSxPQUFOLENBQXBELENBQVosQ0FETztBQUFBLEdBQVQsQ0FGSixDQUZGLENBSkYsQ0FETSxHQWlCTixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJTCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNQO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxzQkFBZUQsQ0FBQyxDQUFDRSxPQUFGLENBQVVDLFdBQVYsRUFBZixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxDQUFDLENBQUNFLE9BQU4sQ0FBcEQsQ0FBWixDQURPO0FBQUEsR0FBVCxDQUZKLENBRkYsQ0FKRixDQWxCSjtBQWtDRCxDQW5DRDs7TUFBTU4sSTs7QUFvRFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbWFtbW90aC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbmBcblxuY29uc3QgTG9nb1NpZGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1ne1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbmBcblxuY29uc3QgTG9naW5TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbmBcblxuY29uc3QgU2l0ZUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTByZW07XG5gXG5cbmNvbnN0IFNpdGVMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gIGxpLCBhe1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gIH1cblxuICBhOmhvdmVyLCBsaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZTI2O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5gXG5cbmNvbnN0IE1vYmlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzUlIDY1JTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdH1cbmBcblxuY29uc3QgTW9iaWxlU2l0ZUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuY29uc3QgTW9iaWxlTG9naW5TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuYFxuXG5cbmNvbnN0IEhvbWUgPSAoeyBkYXRhLCBpc01vYmlsZSB9KSA9PiB7XG4gIHJldHVybihcbiAgICBpc01vYmlsZSA/XG4gICAgICA8TW9iaWxlQ29udGFpbmVyPlxuICAgICAgICA8TG9nb1NpZGU+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9tYW1tb3RoLWxvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9Mb2dvU2lkZT5cbiAgICAgICAgPE1vYmlsZUxvZ2luU2lkZT5cbiAgICAgICAgICA8TW9iaWxlU2l0ZUhlYWRlcj5TaXRlczwvTW9iaWxlU2l0ZUhlYWRlcj5cbiAgICAgICAgICA8U2l0ZUxpc3Q+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRhdGEubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+PExpbmsgaHJlZj17YC4vbWFtbW90aC8ke2QuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntkLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2l0ZUxpc3Q+XG4gICAgICAgIDwvTW9iaWxlTG9naW5TaWRlPlxuICAgICAgPC9Nb2JpbGVDb250YWluZXI+XG4gICAgICA6XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TG9nb1NpZGU+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9tYW1tb3RoLWxvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9Mb2dvU2lkZT5cbiAgICAgICAgPExvZ2luU2lkZT5cbiAgICAgICAgICA8U2l0ZUhlYWRlcj5TaXRlczwvU2l0ZUhlYWRlcj5cbiAgICAgICAgICA8U2l0ZUxpc3Q+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRhdGEubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+PExpbmsgaHJlZj17YC4vbWFtbW90aC8ke2QuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntkLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2l0ZUxpc3Q+XG4gICAgICAgIDwvTG9naW5TaWRlPlxuICAgICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xuICBsZXQgdXNlckFnZW50O1xuICBjdHggPyB1c2VyQWdlbnQgPSBjdHgucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgbGV0IGlzTW9iaWxlID0gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goXG4gICAgL0FuZHJvaWR8QmxhY2tCZXJyeXxpUGhvbmV8aVBhZHxpUG9kfE9wZXJhIE1pbml8SUVNb2JpbGV8V1BEZXNrdG9wL2lcbiAgKSlcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pjdC1zeXN0ZW1zLmNvbS9hcGkvbWFtbW90aCcpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSwgaXNNb2JpbGUgfVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mammoth/index.js\n");

/***/ })

})