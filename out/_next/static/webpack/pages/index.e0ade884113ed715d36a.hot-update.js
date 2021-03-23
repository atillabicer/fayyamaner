webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/slnsrn/Documents/Projects/Yamaner/pages/index.js\";\n\n\nvar banks = [{\n  name: \"GARANTi BANKASI\",\n  account: \"TR18  0006  2001  1520  0006  2985  70\"\n}, {\n  name: \"iS BANKASI\",\n  account: \"TR75  0006  4000  0014  3001  6422  69\"\n}, {\n  name: \"AKBANK\",\n  account: \"TR85  0004  6001  0788  8000  1671  81\"\n}, {\n  name: \"YAPI KREDi BANKASI\",\n  account: \"TR88  0006  7010  0000  0095  7594  36\"\n}, {\n  name: \"FiNANSBANK\",\n  account: \"TR91  0011  1000  0000  0058  1183  60\"\n}, {\n  name: \"HALKBANK\",\n  account: \"TR13  0001  2009  2560  0010  2604  17\"\n}, {\n  name: \"ZiRAAT BANKASI\",\n  account: \"TR13  0001  0000  5070  3293  9850  01\"\n}, {\n  name: \"VAKIFBANK\",\n  account: \"TR64  0001  5001  5800  7305  1855  78\"\n}, {\n  name: \"TEB\",\n  account: \"TR64  0003  2000  0000  0025  9863  30\"\n}];\nfunction Home() {\n  var _this = this;\n\n  var copyToClipboard = function copyToClipboard(value) {\n    var tempInput = document.createElement(\"input\");\n    tempInput.value = value;\n    document.body.appendChild(tempInput);\n    tempInput.select();\n    document.execCommand(\"copy\");\n    document.body.removeChild(tempInput);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"opacity-25 w-full h-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"pine.jpeg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 49\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-6\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"font-bold text-center text-lg\",\n        children: \"Banka Hesap Bilgileri\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-col 4 py-4\",\n        children: banks.map(function (bank, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-4 flex flex-col\",\n            onClick: function onClick() {\n              return copyToClipboard(bank.account);\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-4 text-center\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"px-4 py-2 border-2 border-gray-600 rounded-xl bg-gray-100\",\n                children: bank.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 47\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"p-2 border-2 border-gray-600 rounded-md\",\n              children: bank.account\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYW5rcyIsIm5hbWUiLCJhY2NvdW50IiwiSG9tZSIsImNvcHlUb0NsaXBib2FyZCIsInZhbHVlIiwidGVtcElucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIm1hcCIsImJhbmsiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUNDLE1BQUksRUFBQyxpQkFBTjtBQUF3QkMsU0FBTyxFQUFDO0FBQWhDLENBRFksRUFFWjtBQUFDRCxNQUFJLEVBQUMsWUFBTjtBQUFtQkMsU0FBTyxFQUFDO0FBQTNCLENBRlksRUFHWjtBQUFDRCxNQUFJLEVBQUMsUUFBTjtBQUFlQyxTQUFPLEVBQUM7QUFBdkIsQ0FIWSxFQUlaO0FBQUNELE1BQUksRUFBQyxvQkFBTjtBQUEyQkMsU0FBTyxFQUFDO0FBQW5DLENBSlksRUFLWjtBQUFDRCxNQUFJLEVBQUMsWUFBTjtBQUFtQkMsU0FBTyxFQUFDO0FBQTNCLENBTFksRUFNWjtBQUFDRCxNQUFJLEVBQUMsVUFBTjtBQUFpQkMsU0FBTyxFQUFDO0FBQXpCLENBTlksRUFPWjtBQUFDRCxNQUFJLEVBQUMsZ0JBQU47QUFBdUJDLFNBQU8sRUFBQztBQUEvQixDQVBZLEVBUVo7QUFBQ0QsTUFBSSxFQUFDLFdBQU47QUFBa0JDLFNBQU8sRUFBQztBQUExQixDQVJZLEVBU1o7QUFBQ0QsTUFBSSxFQUFDLEtBQU47QUFBWUMsU0FBTyxFQUFDO0FBQXBCLENBVFksQ0FBZDtBQWFlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFFN0IsTUFBTUMsZUFBZSxHQUFFLFNBQWpCQSxlQUFpQixDQUFDQyxLQUFELEVBQVM7QUFDOUIsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQUYsYUFBUyxDQUFDRCxLQUFWLEdBQWtCQSxLQUFsQjtBQUNBRSxZQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosU0FBMUI7QUFDQUEsYUFBUyxDQUFDSyxNQUFWO0FBQ0FKLFlBQVEsQ0FBQ0ssV0FBVCxDQUFxQixNQUFyQjtBQUNBTCxZQUFRLENBQUNFLElBQVQsQ0FBY0ksV0FBZCxDQUEwQlAsU0FBMUI7QUFDRCxHQVBEOztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQU0sWUFBSSxFQUFDLHdEQUFYO0FBQW9FLFdBQUcsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFBMEM7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDQTtBQUFJLGlCQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtCQUNHTixLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU1DLENBQU47QUFBQSw4QkFBVztBQUFjLHFCQUFTLEVBQUMsb0JBQXhCO0FBQTZDLG1CQUFPLEVBQUU7QUFBQSxxQkFBS1osZUFBZSxDQUFDVyxJQUFJLENBQUNiLE9BQU4sQ0FBcEI7QUFBQSxhQUF0RDtBQUFBLG9DQUNwQjtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxxQ0FBa0M7QUFBTSx5QkFBUyxFQUFDLDJEQUFoQjtBQUFBLDBCQUE2RWEsSUFBSSxDQUFDZDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG9CLGVBRXBCO0FBQU0sdUJBQVMsRUFBQyx5Q0FBaEI7QUFBQSx3QkFBNERjLElBQUksQ0FBQ2I7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGb0I7QUFBQSxhQUFVYyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVg7QUFBQSxTQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEO0tBN0J1QmIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IGJhbmtzID0gW1xuICB7bmFtZTpcIkdBUkFOVGkgQkFOS0FTSVwiLGFjY291bnQ6XCJUUjE4ICAwMDA2ICAyMDAxICAxNTIwICAwMDA2ICAyOTg1ICA3MFwifSxcbiAge25hbWU6XCJpUyBCQU5LQVNJXCIsYWNjb3VudDpcIlRSNzUgIDAwMDYgIDQwMDAgIDAwMTQgIDMwMDEgIDY0MjIgIDY5XCJ9LFxuICB7bmFtZTpcIkFLQkFOS1wiLGFjY291bnQ6XCJUUjg1ICAwMDA0ICA2MDAxICAwNzg4ICA4MDAwICAxNjcxICA4MVwifSxcbiAge25hbWU6XCJZQVBJIEtSRURpIEJBTktBU0lcIixhY2NvdW50OlwiVFI4OCAgMDAwNiAgNzAxMCAgMDAwMCAgMDA5NSAgNzU5NCAgMzZcIn0sXG4gIHtuYW1lOlwiRmlOQU5TQkFOS1wiLGFjY291bnQ6XCJUUjkxICAwMDExICAxMDAwICAwMDAwICAwMDU4ICAxMTgzICA2MFwifSxcbiAge25hbWU6XCJIQUxLQkFOS1wiLGFjY291bnQ6XCJUUjEzICAwMDAxICAyMDA5ICAyNTYwICAwMDEwICAyNjA0ICAxN1wifSxcbiAge25hbWU6XCJaaVJBQVQgQkFOS0FTSVwiLGFjY291bnQ6XCJUUjEzICAwMDAxICAwMDAwICA1MDcwICAzMjkzICA5ODUwICAwMVwifSxcbiAge25hbWU6XCJWQUtJRkJBTktcIixhY2NvdW50OlwiVFI2NCAgMDAwMSAgNTAwMSAgNTgwMCAgNzMwNSAgMTg1NSAgNzhcIn0sXG4gIHtuYW1lOlwiVEVCXCIsYWNjb3VudDpcIlRSNjQgIDAwMDMgIDIwMDAgIDAwMDAgIDAwMjUgIDk4NjMgIDMwXCJ9LFxuXVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0odmFsdWUpPT57XG4gICAgY29uc3QgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRlbXBJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KTtcbiAgICB0ZW1wSW5wdXQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcElucHV0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjIvZGlzdC90YWlsd2luZC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGFjaXR5LTI1IHctZnVsbCBoLWF1dG8nPjxpbWcgc3JjPSdwaW5lLmpwZWcnPjwvaW1nPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNic+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1sZyc+QmFua2EgSGVzYXAgQmlsZ2lsZXJpPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgNCBweS00Jz5cbiAgICAgICAgICB7YmFua3MubWFwKChiYW5rLGkpPT4oPGRpdiBrZXk9e2l9ICBjbGFzc05hbWU9J21iLTQgZmxleCBmbGV4LWNvbCcgb25DbGljaz17KCk9PiBjb3B5VG9DbGlwYm9hcmQoYmFuay5hY2NvdW50KX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNCB0ZXh0LWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPSdweC00IHB5LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQteGwgYmctZ3JheS0xMDAnPntiYW5rLm5hbWV9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwLTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQnID57YmFuay5hY2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj4pKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})