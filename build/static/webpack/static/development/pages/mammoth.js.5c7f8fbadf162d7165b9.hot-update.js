webpackHotUpdate("static/development/pages/mammoth.js",{

/***/ "./pages/mammoth/index.js":
/*!********************************!*\
  !*** ./pages/mammoth/index.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/mammoth/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__Container\",\n  componentId: \"wulb8y-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LogoSide\",\n  componentId: \"wulb8y-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LoginSide\",\n  componentId: \"wulb8y-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;flex-flow:column;\"]);\n_c3 = LoginSide;\nvar SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__SiteHeader\",\n  componentId: \"wulb8y-3\"\n})([\"height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;margin-top:10rem;\"]);\n_c4 = SiteHeader;\nvar SiteList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul.withConfig({\n  displayName: \"mammoth__SiteList\",\n  componentId: \"wulb8y-4\"\n})([\"list-style:none;margin-top:2rem;li,a{font-size:1.8rem;text-align:center;height:5rem;width:20rem;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#292929;}a:hover,li:hover{background-color:#ff7e26;color:#fff;}\"]);\n_c5 = SiteList;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileContainer\",\n  componentId: \"wulb8y-5\"\n})([\"display:grid;grid-template-rows:35% 65%;width:100vw;height:100vh;background-color:\", \"\"], color.jctDarkGray);\n_c6 = MobileContainer;\nvar MobileSiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileSiteHeader\",\n  componentId: \"wulb8y-6\"\n})([\"height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;\"]);\n_c7 = MobileSiteHeader;\nvar MobileLoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileLoginSide\",\n  componentId: \"wulb8y-7\"\n})([\"display:flex;align-items:center;width:100%;flex-flow:column;margin-top:5rem;\"]);\n_c8 = MobileLoginSide;\n\nvar Home = function Home(_ref) {\n  var data = _ref.data,\n      isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  })), __jsx(MobileLoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(MobileSiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  })))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(SiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  }))));\n};\n\n_c9 = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"SiteHeader\");\n$RefreshReg$(_c5, \"SiteList\");\n$RefreshReg$(_c6, \"MobileContainer\");\n$RefreshReg$(_c7, \"MobileSiteHeader\");\n$RefreshReg$(_c8, \"MobileLoginSide\");\n$RefreshReg$(_c9, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL2luZGV4LmpzPzk2MjgiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTG9nb1NpZGUiLCJMb2dpblNpZGUiLCJTaXRlSGVhZGVyIiwiU2l0ZUxpc3QiLCJ1bCIsIk1vYmlsZUNvbnRhaW5lciIsImNvbG9yIiwiamN0RGFya0dyYXkiLCJNb2JpbGVTaXRlSGVhZGVyIiwiTW9iaWxlTG9naW5TaWRlIiwiSG9tZSIsImRhdGEiLCJpc01vYmlsZSIsIm1hcCIsImQiLCJpIiwiQkFUVEVSWSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRFQUFmO0tBQU1GLFM7QUFPTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWQ7TUFBTUMsUTtBQVlOLElBQU1DLFNBQVMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyRkFBZjtNQUFNRSxTO0FBUU4sSUFBTUMsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhLQUFoQjtNQUFNRyxVO0FBYU4sSUFBTUMsUUFBUSxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLHlQQUFkO01BQU1ELFE7QUFzQk4sSUFBTUUsZUFBZSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtGQUtDTyxLQUFLLENBQUNDLFdBTFAsQ0FBckI7TUFBTUYsZTtBQVFOLElBQU1HLGdCQUFnQixHQUFHVix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZKQUF0QjtNQUFNUyxnQjtBQVlOLElBQU1DLGVBQWUsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvRkFBckI7TUFBTVUsZTs7QUFTTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsU0FDRUEsUUFBUSxHQUNOLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNQO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxzQkFBZUQsQ0FBQyxDQUFDRSxPQUFGLENBQVVDLFdBQVYsRUFBZixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxDQUFDLENBQUNFLE9BQU4sQ0FBcEQsQ0FBWixDQURPO0FBQUEsR0FBVCxDQUZKLENBRkYsQ0FKRixDQURNLEdBaUJOLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlMLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ1A7QUFBSSxTQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHNCQUFlRCxDQUFDLENBQUNFLE9BQUYsQ0FBVUMsV0FBVixFQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILENBQUMsQ0FBQ0UsT0FBTixDQUFwRCxDQUFaLENBRE87QUFBQSxHQUFULENBRkosQ0FGRixDQUpGLENBbEJKO0FBa0NELENBbkNEOztNQUFNTixJOztBQW9EU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9tYW1tb3RoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuYFxuXG5jb25zdCBMb2dvU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICB3aWR0aDogMTAwJTtcblxuICBpbWd7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuYFxuXG5jb25zdCBMb2dpblNpZGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuYFxuXG5jb25zdCBTaXRlSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbmBcblxuY29uc3QgU2l0ZUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgbGksIGF7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgfVxuXG4gIGE6aG92ZXIsIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdlMjY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbmBcblxuY29uc3QgTW9iaWxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgNjUlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9XG5gXG5cbmNvbnN0IE1vYmlsZVNpdGVIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IE1vYmlsZUxvZ2luU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbmBcblxuXG5jb25zdCBIb21lID0gKHsgZGF0YSwgaXNNb2JpbGUgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgaXNNb2JpbGUgP1xuICAgICAgPE1vYmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPExvZ29TaWRlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvbWFtbW90aC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgIDxNb2JpbGVMb2dpblNpZGU+XG4gICAgICAgICAgPE1vYmlsZVNpdGVIZWFkZXI+U2l0ZXM8L01vYmlsZVNpdGVIZWFkZXI+XG4gICAgICAgICAgPFNpdGVMaXN0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AuL21hbW1vdGgvJHtkLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57ZC5CQVRURVJZfTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NpdGVMaXN0PlxuICAgICAgICA8L01vYmlsZUxvZ2luU2lkZT5cbiAgICAgIDwvTW9iaWxlQ29udGFpbmVyPlxuICAgICAgOlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPExvZ29TaWRlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvbWFtbW90aC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgIDxMb2dpblNpZGU+XG4gICAgICAgICAgPFNpdGVIZWFkZXI+U2l0ZXM8L1NpdGVIZWFkZXI+XG4gICAgICAgICAgPFNpdGVMaXN0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AuL21hbW1vdGgvJHtkLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57ZC5CQVRURVJZfTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NpdGVMaXN0PlxuICAgICAgICA8L0xvZ2luU2lkZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcbiAgbGV0IHVzZXJBZ2VudDtcbiAgY3R4ID8gdXNlckFnZW50ID0gY3R4LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gIGxldCBpc01vYmlsZSA9IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKFxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXG4gICkpXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qY3Qtc3lzdGVtcy5jb20vYXBpL21hbW1vdGgnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEsIGlzTW9iaWxlIH1cbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mammoth/index.js\n");

/***/ })

})