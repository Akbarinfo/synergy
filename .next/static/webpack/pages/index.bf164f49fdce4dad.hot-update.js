"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main/Forms/Forms.jsx":
/*!*****************************************!*\
  !*** ./components/Main/Forms/Forms.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/Forms.json */ \"./database/Forms.json\");\n/* harmony import */ var _database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database/FormsText.json */ \"./database/FormsText.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Forms() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Очная\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), array = ref1[0], setArray = ref1[1];\n    var FilterHandler = function(event) {\n        setActive(event);\n        setArray(_database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__.map(function(item) {\n            if (event === item.cat) {\n                return;\n            }\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"forms\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"forms__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"forms__title\",\n                                children: \"Формы обучения\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"forms__text\",\n                                children: \"Совмещайте работу с учебой и участвуйте в образовательном процессе в комфортном формате\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__boxs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"forms__list\",\n                                children: _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__.map(function(item, key) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"forms__item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return FilterHandler(item.name);\n                                            },\n                                            className: \"forms__btn \".concat(active === item.name ? \"forms__btn-active\" : null),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, key + 356, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"forms__descbox\",\n                                children: _database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__.map(function(item, key) {\n                                    if (active === item.cat) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"forms__desc\",\n                                            children: item.text\n                                        }, void 0, false, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 26\n                                        }, _this);\n                                    }\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Forms, \"MmaDySBpT9HsBeTYtTeLYy3C74w=\");\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDaUI7QUFDTztBQUUxQyxTQUFTRyxLQUFLLEdBQUc7OztJQUM5QixJQUEwQkgsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBQXRDSSxNQUFNLEdBQWVKLEdBQWlCLEdBQWhDLEVBQUVLLFNBQVMsR0FBSUwsR0FBaUIsR0FBckI7SUFDdEIsSUFBd0JBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3Qk0sS0FBSyxHQUFjTixJQUFVLEdBQXhCLEVBQUVPLFFBQVEsR0FBSVAsSUFBVSxHQUFkO0lBRXBCLElBQUlRLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDN0JKLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDO1FBQ2hCRixRQUFRLENBQUNMLHlEQUFhLENBQUNTLFNBQUFBLElBQUksRUFBSTtZQUM3QixJQUFHRixLQUFLLEtBQUtFLElBQUksQ0FBQ0MsR0FBRyxFQUFFO2dCQUNyQixPQUFNO1lBQ1IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUN4Qiw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxlQUFlOztrQ0FDNUIsOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxZQUFZOzswQ0FDekIsOERBQUNFLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxjQUFjOzBDQUFDLGdCQUFjOzs7OztvQ0FBSzswQ0FDaEQsOERBQUNHLEdBQUM7Z0NBQUNILFNBQVMsRUFBQyxhQUFhOzBDQUFDLHlGQUczQjs7Ozs7b0NBQUk7Ozs7Ozs0QkFDQTtrQ0FFTiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLGFBQWE7OzBDQUMxQiw4REFBQ0ksSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLGFBQWE7MENBQ3hCYixxREFBVSxDQUFDLFNBQUNVLElBQUksRUFBRVEsR0FBRyxFQUFLO29DQUN6QixxQkFDRSw4REFBQ0MsSUFBRTt3Q0FBaUJOLFNBQVMsRUFBQyxhQUFhO2tEQUN6Qyw0RUFBQ08sUUFBTTs0Q0FDTEMsT0FBTyxFQUFFO3VEQUFNZCxhQUFhLENBQUNHLElBQUksQ0FBQ1ksSUFBSSxDQUFDOzZDQUFBOzRDQUN2Q1QsU0FBUyxFQUFFLGFBQVksQ0FFdEIsT0FEQ1YsTUFBTSxLQUFLTyxJQUFJLENBQUNZLElBQUksR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQ2pEO3NEQUVEWixJQUFJLENBQUNZLElBQUk7Ozs7O2lEQUNIO3VDQVJGSixHQUFHLEdBQUcsR0FBRzs7Ozs2Q0FTYixDQUNMO2dDQUNKLENBQUMsQ0FBQzs7Ozs7b0NBQ0M7MENBQ0wsOERBQUNKLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyxnQkFBZ0I7MENBQzVCWix5REFBYSxDQUFDLFNBQUNTLElBQUksRUFBRVEsR0FBRyxFQUFLO29DQUM1QixJQUFJZixNQUFNLEtBQUtPLElBQUksQ0FBQ0MsR0FBRyxFQUFFO3dDQUN2QixxQkFBTyw4REFBQ0ssR0FBQzs0Q0FBQ0gsU0FBUyxFQUFDLGFBQWE7c0RBQUVILElBQUksQ0FBQ2EsSUFBSTs7Ozs7aURBQUssQ0FBQztvQ0FDcEQsQ0FBQztnQ0FDSCxDQUFDLENBQUM7Ozs7O29DQUNFOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0UsQ0FDVjtBQUNKLENBQUM7R0F2RHVCckIsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi9Gb3Jtcy9Gb3Jtcy5qc3g/NjgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1zcyBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvRm9ybXMuanNvblwiO1xuaW1wb3J0IEZvcm1zVGV4dCBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvRm9ybXNUZXh0Lmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXMoKSB7XG4gIGxldCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCLQntGH0L3QsNGPXCIpO1xuICBsZXQgW2FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBGaWx0ZXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlKGV2ZW50KVxuICAgIHNldEFycmF5KEZvcm1zVGV4dC5tYXAoaXRlbSA9PiB7XG4gICAgICBpZihldmVudCA9PT0gaXRlbS5jYXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSkpXG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19iaWdib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19ib3hcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3Jtc19fdGl0bGVcIj7QpNC+0YDQvNGLINC+0LHRg9GH0LXQvdC40Y88L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybXNfX3RleHRcIj5cbiAgICAgICAgICAgICAg0KHQvtCy0LzQtdGJ0LDQudGC0LUg0YDQsNCx0L7RgtGDINGBINGD0YfQtdCx0L7QuSDQuCDRg9GH0LDRgdGC0LLRg9C50YLQtSDQsiDQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdC+0Lwg0L/RgNC+0YbQtdGB0YHQtVxuICAgICAgICAgICAgICDQsiDQutC+0LzRhNC+0YDRgtC90L7QvCDRhNC+0YDQvNCw0YLQtVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm94c1wiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvcm1zX19saXN0XCI+XG4gICAgICAgICAgICAgIHtGb3Jtc3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5ICsgMzU2fSBjbGFzc05hbWU9XCJmb3Jtc19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRmlsdGVySGFuZGxlcihpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm1zX19idG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5uYW1lID8gXCJmb3Jtc19fYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2Nib3hcIj5cbiAgICAgICAgICAgICAge0Zvcm1zVGV4dC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUgPT09IGl0ZW0uY2F0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2NcIj57aXRlbS50ZXh0fTwvcD47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm1zcyIsIkZvcm1zVGV4dCIsIkZvcm1zIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiYXJyYXkiLCJzZXRBcnJheSIsIkZpbHRlckhhbmRsZXIiLCJldmVudCIsIm1hcCIsIml0ZW0iLCJjYXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwidWwiLCJrZXkiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYW1lIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/Forms/Forms.jsx\n"));

/***/ })

});