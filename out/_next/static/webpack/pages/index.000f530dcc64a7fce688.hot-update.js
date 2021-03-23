webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/slnsrn/Documents/Projects/Yamaner/pages/index.js\";\n\n\nvar banks = [{\n  name: \"GARANTi BANKASI\",\n  account: \"TR18  0006  2001  1520  0006  2985  70\"\n}, {\n  name: \"iS BANKASI\",\n  account: \"TR75  0006  4000  0014  3001  6422  69\"\n}, {\n  name: \"AKBANK\",\n  account: \"TR85  0004  6001  0788  8000  1671  81\"\n}, {\n  name: \"YAPI KREDi BANKASI\",\n  account: \"TR88  0006  7010  0000  0095  7594  36\"\n}, {\n  name: \"FiNANSBANK\",\n  account: \"TR91  0011  1000  0000  0058  1183  60\"\n}, {\n  name: \"HALKBANK\",\n  account: \"TR13  0001  2009  2560  0010  2604  17\"\n}, {\n  name: \"ZiRAAT BANKASI\",\n  account: \"TR13  0001  0000  5070  3293  9850  01\"\n}, {\n  name: \"VAKIFBANK\",\n  account: \"TR64  0001  5001  5800  7305  1855  78\"\n}, {\n  name: \"TEB\",\n  account: \"TR64  0003  2000  0000  0025  9863  30\"\n}];\nfunction Home() {\n  var _this = this;\n\n  var copyToClipboard = function copyToClipboard(value) {\n    var tempInput = document.createElement(\"input\");\n    tempInput.value = value;\n    document.body.appendChild(tempInput);\n    tempInput.select();\n    document.execCommand(\"copy\");\n    document.body.removeChild(tempInput);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    cl: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"opacity-25 w-full h-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"pine.jpeg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 49\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-6\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"font-bold text-center text-lg\",\n        children: \"Banka Hesap Bilgileri\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-col 4 py-4\",\n        children: banks.map(function (bank, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-4 flex flex-col\",\n            onClick: function onClick() {\n              return copyToClipboard(bank.account);\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-4 text-center\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"px-4 py-2 border-2 border-gray-600 rounded-xl bg-gray-100\",\n                children: bank.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 47\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"p-2 border-2 border-gray-600 rounded-md\",\n              children: bank.account\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJiYW5rcyIsIm5hbWUiLCJhY2NvdW50IiwiSG9tZSIsImNvcHlUb0NsaXBib2FyZCIsInZhbHVlIiwidGVtcElucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIm1hcCIsImJhbmsiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUNDLE1BQUksRUFBQyxpQkFBTjtBQUF3QkMsU0FBTyxFQUFDO0FBQWhDLENBRFksRUFFWjtBQUFDRCxNQUFJLEVBQUMsWUFBTjtBQUFtQkMsU0FBTyxFQUFDO0FBQTNCLENBRlksRUFHWjtBQUFDRCxNQUFJLEVBQUMsUUFBTjtBQUFlQyxTQUFPLEVBQUM7QUFBdkIsQ0FIWSxFQUlaO0FBQUNELE1BQUksRUFBQyxvQkFBTjtBQUEyQkMsU0FBTyxFQUFDO0FBQW5DLENBSlksRUFLWjtBQUFDRCxNQUFJLEVBQUMsWUFBTjtBQUFtQkMsU0FBTyxFQUFDO0FBQTNCLENBTFksRUFNWjtBQUFDRCxNQUFJLEVBQUMsVUFBTjtBQUFpQkMsU0FBTyxFQUFDO0FBQXpCLENBTlksRUFPWjtBQUFDRCxNQUFJLEVBQUMsZ0JBQU47QUFBdUJDLFNBQU8sRUFBQztBQUEvQixDQVBZLEVBUVo7QUFBQ0QsTUFBSSxFQUFDLFdBQU47QUFBa0JDLFNBQU8sRUFBQztBQUExQixDQVJZLEVBU1o7QUFBQ0QsTUFBSSxFQUFDLEtBQU47QUFBWUMsU0FBTyxFQUFDO0FBQXBCLENBVFksQ0FBZDtBQWFlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFFN0IsTUFBTUMsZUFBZSxHQUFFLFNBQWpCQSxlQUFpQixDQUFDQyxLQUFELEVBQVM7QUFDOUIsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQUYsYUFBUyxDQUFDRCxLQUFWLEdBQWtCQSxLQUFsQjtBQUNBRSxZQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosU0FBMUI7QUFDQUEsYUFBUyxDQUFDSyxNQUFWO0FBQ0FKLFlBQVEsQ0FBQ0ssV0FBVCxDQUFxQixNQUFyQjtBQUNBTCxZQUFRLENBQUNFLElBQVQsQ0FBY0ksV0FBZCxDQUEwQlAsU0FBMUI7QUFDRCxHQVBEOztBQVNBLHNCQUNFO0FBQUssTUFBRSxNQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFlBQUksRUFBQyx3REFBWDtBQUFvRSxXQUFHLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsNkJBQTBDO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxrQkFDR04sS0FBSyxDQUFDYyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOO0FBQUEsOEJBQVc7QUFBYyxxQkFBUyxFQUFDLG9CQUF4QjtBQUE2QyxtQkFBTyxFQUFFO0FBQUEscUJBQUtaLGVBQWUsQ0FBQ1csSUFBSSxDQUFDYixPQUFOLENBQXBCO0FBQUEsYUFBdEQ7QUFBQSxvQ0FDcEI7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQWtDO0FBQU0seUJBQVMsRUFBQywyREFBaEI7QUFBQSwwQkFBNkVhLElBQUksQ0FBQ2Q7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURvQixlQUVwQjtBQUFNLHVCQUFTLEVBQUMseUNBQWhCO0FBQUEsd0JBQTREYyxJQUFJLENBQUNiO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRm9CO0FBQUEsYUFBVWMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFYO0FBQUEsU0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQTdCdUJiLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBiYW5rcyA9IFtcbiAge25hbWU6XCJHQVJBTlRpIEJBTktBU0lcIixhY2NvdW50OlwiVFIxOCAgMDAwNiAgMjAwMSAgMTUyMCAgMDAwNiAgMjk4NSAgNzBcIn0sXG4gIHtuYW1lOlwiaVMgQkFOS0FTSVwiLGFjY291bnQ6XCJUUjc1ICAwMDA2ICA0MDAwICAwMDE0ICAzMDAxICA2NDIyICA2OVwifSxcbiAge25hbWU6XCJBS0JBTktcIixhY2NvdW50OlwiVFI4NSAgMDAwNCAgNjAwMSAgMDc4OCAgODAwMCAgMTY3MSAgODFcIn0sXG4gIHtuYW1lOlwiWUFQSSBLUkVEaSBCQU5LQVNJXCIsYWNjb3VudDpcIlRSODggIDAwMDYgIDcwMTAgIDAwMDAgIDAwOTUgIDc1OTQgIDM2XCJ9LFxuICB7bmFtZTpcIkZpTkFOU0JBTktcIixhY2NvdW50OlwiVFI5MSAgMDAxMSAgMTAwMCAgMDAwMCAgMDA1OCAgMTE4MyAgNjBcIn0sXG4gIHtuYW1lOlwiSEFMS0JBTktcIixhY2NvdW50OlwiVFIxMyAgMDAwMSAgMjAwOSAgMjU2MCAgMDAxMCAgMjYwNCAgMTdcIn0sXG4gIHtuYW1lOlwiWmlSQUFUIEJBTktBU0lcIixhY2NvdW50OlwiVFIxMyAgMDAwMSAgMDAwMCAgNTA3MCAgMzI5MyAgOTg1MCAgMDFcIn0sXG4gIHtuYW1lOlwiVkFLSUZCQU5LXCIsYWNjb3VudDpcIlRSNjQgIDAwMDEgIDUwMDEgIDU4MDAgIDczMDUgIDE4NTUgIDc4XCJ9LFxuICB7bmFtZTpcIlRFQlwiLGFjY291bnQ6XCJUUjY0ICAwMDAzICAyMDAwICAwMDAwICAwMDI1ICA5ODYzICAzMFwifSxcbl1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9KHZhbHVlKT0+e1xuICAgIGNvbnN0IHRlbXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0ZW1wSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBJbnB1dCk7XG4gICAgdGVtcElucHV0LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBJbnB1dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2w+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhaWx3aW5kY3NzQF4yL2Rpc3QvdGFpbHdpbmQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3BhY2l0eS0yNSB3LWZ1bGwgaC1hdXRvJz48aW1nIHNyYz0ncGluZS5qcGVnJz48L2ltZz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTYnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtbGcnPkJhbmthIEhlc2FwIEJpbGdpbGVyaTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIDQgcHktNCc+XG4gICAgICAgICAge2JhbmtzLm1hcCgoYmFuayxpKT0+KDxkaXYga2V5PXtpfSAgY2xhc3NOYW1lPSdtYi00IGZsZXggZmxleC1jb2wnIG9uQ2xpY2s9eygpPT4gY29weVRvQ2xpcGJvYXJkKGJhbmsuYWNjb3VudCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQgdGV4dC1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT0ncHgtNCBweS0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLXhsIGJnLWdyYXktMTAwJz57YmFuay5uYW1lfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLW1kJyA+e2JhbmsuYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+KSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})