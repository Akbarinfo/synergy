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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/Forms.json */ \"./database/Forms.json\");\n/* harmony import */ var _database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database/FormsText.json */ \"./database/FormsText.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Forms() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Очная\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), array = ref1[0], setArray = ref1[1];\n    var FilterHandler = function(event) {\n        setActive(event);\n        setArray(_database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__.map(function(item) {\n            if (event === item.cat) {\n                return item.text;\n            }\n        }));\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"forms\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"forms__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"forms__title\",\n                                children: \"Формы обучения\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"forms__text\",\n                                children: \"Совмещайте работу с учебой и участвуйте в образовательном процессе в комфортном формате\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__boxs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"forms__list\",\n                                children: _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__.map(function(item, key) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"forms__item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return FilterHandler(item.name);\n                                            },\n                                            className: \"forms__btn \".concat(active === item.name ? \"forms__btn-active\" : null),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, key + 356, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"forms__descbox\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"forms__desc\",\n                                    children: array\n                                }, void 0, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Forms, \"MmaDySBpT9HsBeTYtTeLYy3C74w=\");\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDTTtBQUNPO0FBRTFDLFNBQVNJLEtBQUssR0FBRzs7O0lBQzlCLElBQTBCSCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxPQUFPLENBQUMsRUFBdENJLE1BQU0sR0FBZUosR0FBaUIsR0FBaEMsRUFBRUssU0FBUyxHQUFJTCxHQUFpQixHQUFyQjtJQUN0QixJQUF3QkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdCTSxLQUFLLEdBQWNOLElBQVUsR0FBeEIsRUFBRU8sUUFBUSxHQUFJUCxJQUFVLEdBQWQ7SUFFcEIsSUFBSVEsYUFBYSxHQUFHLFNBQUNDLEtBQUssRUFBSztRQUM3QkosU0FBUyxDQUFDSSxLQUFLLENBQUMsQ0FBQztRQUNqQkYsUUFBUSxDQUNOTCx5REFBYSxDQUFDLFNBQUNTLElBQUksRUFBSztZQUN0QixJQUFJRixLQUFLLEtBQUtFLElBQUksQ0FBQ0MsR0FBRyxFQUFFO2dCQUN0QixPQUFPRCxJQUFJLENBQUNFLElBQUksQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRGQsNENBQVM7SUFFVCxxQkFDRSw4REFBQ2UsU0FBTztRQUFDQyxTQUFTLEVBQUMsT0FBTztrQkFDeEIsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7c0JBQ3hCLDRFQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsZUFBZTs7a0NBQzVCLDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsWUFBWTs7MENBQ3pCLDhEQUFDRSxJQUFFO2dDQUFDRixTQUFTLEVBQUMsY0FBYzswQ0FBQyxnQkFBYzs7Ozs7b0NBQUs7MENBQ2hELDhEQUFDRyxHQUFDO2dDQUFDSCxTQUFTLEVBQUMsYUFBYTswQ0FBQyx5RkFHM0I7Ozs7O29DQUFJOzs7Ozs7NEJBQ0E7a0NBRU4sOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxhQUFhOzswQ0FDMUIsOERBQUNJLElBQUU7Z0NBQUNKLFNBQVMsRUFBQyxhQUFhOzBDQUN4QmQscURBQVUsQ0FBQyxTQUFDVSxJQUFJLEVBQUVTLEdBQUcsRUFBSztvQ0FDekIscUJBQ0UsOERBQUNDLElBQUU7d0NBQWlCTixTQUFTLEVBQUMsYUFBYTtrREFDekMsNEVBQUNPLFFBQU07NENBQ0xDLE9BQU8sRUFBRTt1REFBTWYsYUFBYSxDQUFDRyxJQUFJLENBQUNhLElBQUksQ0FBQzs2Q0FBQTs0Q0FDdkNULFNBQVMsRUFBRSxhQUFZLENBRXRCLE9BRENYLE1BQU0sS0FBS08sSUFBSSxDQUFDYSxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUNqRDtzREFFRGIsSUFBSSxDQUFDYSxJQUFJOzs7OztpREFDSDt1Q0FSRkosR0FBRyxHQUFHLEdBQUc7Ozs7NkNBU2IsQ0FDTDtnQ0FDSixDQUFDLENBQUM7Ozs7O29DQUNDOzBDQUNMLDhEQUFDSixLQUFHO2dDQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzBDQUM3Qiw0RUFBQ0csR0FBQztvQ0FBQ0gsU0FBUyxFQUFDLGFBQWE7OENBQUVULEtBQUs7Ozs7O3dDQUFLOzs7OztvQ0FDbEM7Ozs7Ozs0QkFDRjs7Ozs7O29CQUNGOzs7OztnQkFDRjs7Ozs7WUFDRSxDQUNWO0FBQ0osQ0FBQztHQXREdUJILEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4PzY4MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1zcyBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvRm9ybXMuanNvblwiO1xuaW1wb3J0IEZvcm1zVGV4dCBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvRm9ybXNUZXh0Lmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXMoKSB7XG4gIGxldCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCLQntGH0L3QsNGPXCIpO1xuICBsZXQgW2FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBGaWx0ZXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlKGV2ZW50KTtcbiAgICBzZXRBcnJheShcbiAgICAgIEZvcm1zVGV4dC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSBpdGVtLmNhdCkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnRleHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3RcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19iaWdib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19ib3hcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3Jtc19fdGl0bGVcIj7QpNC+0YDQvNGLINC+0LHRg9GH0LXQvdC40Y88L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybXNfX3RleHRcIj5cbiAgICAgICAgICAgICAg0KHQvtCy0LzQtdGJ0LDQudGC0LUg0YDQsNCx0L7RgtGDINGBINGD0YfQtdCx0L7QuSDQuCDRg9GH0LDRgdGC0LLRg9C50YLQtSDQsiDQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdC+0Lwg0L/RgNC+0YbQtdGB0YHQtVxuICAgICAgICAgICAgICDQsiDQutC+0LzRhNC+0YDRgtC90L7QvCDRhNC+0YDQvNCw0YLQtVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm94c1wiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvcm1zX19saXN0XCI+XG4gICAgICAgICAgICAgIHtGb3Jtc3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5ICsgMzU2fSBjbGFzc05hbWU9XCJmb3Jtc19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRmlsdGVySGFuZGxlcihpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm1zX19idG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5uYW1lID8gXCJmb3Jtc19fYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2Nib3hcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2NcIj57YXJyYXl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybXNzIiwiRm9ybXNUZXh0IiwiRm9ybXMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhcnJheSIsInNldEFycmF5IiwiRmlsdGVySGFuZGxlciIsImV2ZW50IiwibWFwIiwiaXRlbSIsImNhdCIsInRleHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwidWwiLCJrZXkiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main/Forms/Forms.jsx\n"));

/***/ })

});