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

/***/ "./components/Main/Faculties/Faculties.jsx":
/*!*************************************************!*\
  !*** ./components/Main/Faculties/Faculties.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faculties; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/Categories.json */ \"./database/Categories.json\");\n/* harmony import */ var _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../database/Faculties.json */ \"./database/Faculties.json\");\n/* harmony import */ var _FacultiesItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FacultiesItem */ \"./components/Main/Faculties/FacultiesItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Faculties() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"all\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12), count = ref1[0], setCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__), array = ref2[0], setArray = ref2[1];\n    var FilterHandler = function(event) {\n        setActive(event);\n        setArray(array.filter(function(item) {\n            return item.cat === event.name;\n        }));\n    };\n    //display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"faculties\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"faculties__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"faculties__title\",\n                        children: \"Факультеты\"\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__clist\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"faculties__citem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function() {\n                                        return setActive(\"all\");\n                                    },\n                                    className: \"faculties__cbtn \".concat(active === \"all\" ? \"faculties__cbtn-active\" : null),\n                                    children: \"Все\"\n                                }, void 0, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__.map(function(item, key) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"faculties__citem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: FilterHandler(item.name),\n                                        className: \"faculties__cbtn \".concat(active === item.name ? \"faculties__cbtn-active\" : null),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, key + 545, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__list\",\n                        children: array.map(function(item, key) {\n                            if (key + 1 <= count) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FacultiesItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, key + 897, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 24\n                                }, _this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"faculties__btnbox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setCount(+count + 12);\n                            },\n                            className: \"faculties__btn\",\n                            children: \"Показать еще\"\n                        }, void 0, false, {\n                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Faculties, \"NErRHGsQYGMRskT3ZrTAZMy2Fk4=\");\n_c = Faculties;\nvar _c;\n$RefreshReg$(_c, \"Faculties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRmFjdWx0aWVzL0ZhY3VsdGllcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDRTtBQUMwQjtBQUNEO0FBQ2Q7QUFFN0IsU0FBU00sU0FBUyxHQUFHOzs7SUFDbEMsSUFBMEJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE1BQU0sR0FBZUwsR0FBZSxHQUE5QixFQUFFTSxTQUFTLEdBQUlOLEdBQWUsR0FBbkI7SUFDdEIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JPLEtBQUssR0FBY1AsSUFBWSxHQUExQixFQUFFUSxRQUFRLEdBQUlSLElBQVksR0FBaEI7SUFDcEIsSUFBd0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFDRSxxREFBVSxDQUFDLEVBQXZDTyxLQUFLLEdBQWNULElBQW9CLEdBQWxDLEVBQUVVLFFBQVEsR0FBSVYsSUFBb0IsR0FBeEI7SUFFcEIsSUFBSVcsYUFBYSxHQUFHLFNBQUNDLEtBQUssRUFBSztRQUM3Qk4sU0FBUyxDQUFDTSxLQUFLLENBQUM7UUFDaEJGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDSSxNQUFNLENBQUMsU0FBQ0MsSUFBSTttQkFBS0EsSUFBSSxDQUFDQyxHQUFHLEtBQUtILEtBQUssQ0FBQ0ksSUFBSTtTQUFBLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsU0FBUztJQUNULHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUM1Qiw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O2tDQUNoQyw4REFBQ0UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLGtCQUFrQjtrQ0FBQyxZQUFVOzs7Ozs0QkFBSztrQ0FHaEQsOERBQUNHLElBQUU7d0JBQUNILFNBQVMsRUFBQyxrQkFBa0I7OzBDQUM5Qiw4REFBQ0ksSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLGtCQUFrQjswQ0FDOUIsNEVBQUNLLFFBQU07b0NBQ0xDLE9BQU8sRUFBRTsrQ0FBTWxCLFNBQVMsQ0FBQyxLQUFLLENBQUM7cUNBQUE7b0NBQy9CWSxTQUFTLEVBQUUsa0JBQWlCLENBRTNCLE9BRENiLE1BQU0sS0FBSyxLQUFLLEdBQUcsd0JBQXdCLEdBQUcsSUFBSSxDQUNsRDs4Q0FDSCxLQUVEOzs7Ozt3Q0FBUzs7Ozs7b0NBQ047NEJBQ0pKLDBEQUFjLENBQUMsU0FBQ2EsSUFBSSxFQUFFWSxHQUFHLEVBQUs7Z0NBQzdCLHFCQUNFLDhEQUFDSixJQUFFO29DQUFpQkosU0FBUyxFQUFDLGtCQUFrQjs4Q0FDOUMsNEVBQUNLLFFBQU07d0NBQ0xDLE9BQU8sRUFBRWIsYUFBYSxDQUFDRyxJQUFJLENBQUNFLElBQUksQ0FBQzt3Q0FDakNFLFNBQVMsRUFBRSxrQkFBaUIsQ0FFM0IsT0FEQ2IsTUFBTSxLQUFLUyxJQUFJLENBQUNFLElBQUksR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQ3REO2tEQUVERixJQUFJLENBQUNFLElBQUk7Ozs7OzZDQUNIO21DQVJGVSxHQUFHLEdBQUcsR0FBRzs7Ozt5Q0FTYixDQUNMOzRCQUNKLENBQUMsQ0FBQzs7Ozs7OzRCQUNDO2tDQUdMLDhEQUFDTCxJQUFFO3dCQUFDSCxTQUFTLEVBQUMsaUJBQWlCO2tDQUM1QlQsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNYLElBQUksRUFBRVksR0FBRyxFQUFLOzRCQUN4QixJQUFJQSxHQUFHLEdBQUcsQ0FBQyxJQUFJbkIsS0FBSyxFQUFFO2dDQUNwQixxQkFBTyw4REFBQ0osc0RBQWE7b0NBQWlCVyxJQUFJLEVBQUVBLElBQUk7bUNBQXJCWSxHQUFHLEdBQUcsR0FBRzs7Ozt5Q0FBZ0IsQ0FBQzs0QkFDdkQsQ0FBQzt3QkFDSCxDQUFDLENBQUM7Ozs7OzRCQUNDO2tDQUdMLDhEQUFDUCxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsbUJBQW1CO2tDQUNoQyw0RUFBQ0ssUUFBTTs0QkFDTEMsT0FBTyxFQUFFO3VDQUFNaEIsUUFBUSxDQUFDLENBQUNELEtBQUssR0FBRyxFQUFFLENBQUM7NkJBQUE7NEJBQ3BDVyxTQUFTLEVBQUMsZ0JBQWdCO3NDQUMzQixjQUVEOzs7OztnQ0FBUzs7Ozs7NEJBQ0w7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0UsQ0FDVjtBQUNKLENBQUM7R0FuRXVCZCxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0ZhY3VsdGllcy9GYWN1bHRpZXMuanN4PzUwN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0NhdGVnb3JpZXMuanNvblwiO1xuaW1wb3J0IEZhY3VsdGllc3MgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0ZhY3VsdGllcy5qc29uXCI7XG5pbXBvcnQgRmFjdWx0aWVzSXRlbSBmcm9tIFwiLi9GYWN1bHRpZXNJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhY3VsdGllcygpIHtcbiAgbGV0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgbGV0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMTIpO1xuICBsZXQgW2FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShGYWN1bHRpZXNzKVxuXG4gIGxldCBGaWx0ZXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlKGV2ZW50KVxuICAgIHNldEFycmF5KGFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXQgPT09IGV2ZW50Lm5hbWUpKVxuICB9XG5cbiAgLy9kaXNwbGF5XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmFjdWx0aWVzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYmlnYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZhY3VsdGllc19fdGl0bGVcIj7QpNCw0LrRg9C70YzRgtC10YLRizwvaDE+XG5cbiAgICAgICAgICB7LyogLy9DYXRlZ29yaWVzICAgKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZhY3VsdGllc19fY2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2NpdGVtXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoXCJhbGxcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFjdWx0aWVzX19jYnRuICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IFwiYWxsXCIgPyBcImZhY3VsdGllc19fY2J0bi1hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCS0YHQtVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7Q2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleSArIDU0NX0gY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19jaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtGaWx0ZXJIYW5kbGVyKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhY3VsdGllc19fY2J0biAke1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5uYW1lID8gXCJmYWN1bHRpZXNfX2NidG4tYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICB7LyogLy9GYWN1bHRpZXMgKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZhY3VsdGllc19fbGlzdFwiPlxuICAgICAgICAgICAge2FycmF5Lm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChrZXkgKyAxIDw9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGYWN1bHRpZXNJdGVtIGtleT17a2V5ICsgODk3fSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIHsvKiAvL1lhbmEgKyAxMiBpdGVtICAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYnRuYm94XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvdW50KCtjb3VudCArIDEyKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19idG5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINC10YnQtVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwiQ2F0ZWdvcmllcyIsIkZhY3VsdGllc3MiLCJGYWN1bHRpZXNJdGVtIiwiRmFjdWx0aWVzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY291bnQiLCJzZXRDb3VudCIsImFycmF5Iiwic2V0QXJyYXkiLCJGaWx0ZXJIYW5kbGVyIiwiZXZlbnQiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0IiwibmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main/Faculties/Faculties.jsx\n"));

/***/ })

});