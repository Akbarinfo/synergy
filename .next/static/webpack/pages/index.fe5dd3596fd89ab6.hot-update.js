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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faculties; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/Categories.json */ \"./database/Categories.json\");\n/* harmony import */ var _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../database/Faculties.json */ \"./database/Faculties.json\");\n/* harmony import */ var _FacultiesItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FacultiesItem */ \"./components/Main/Faculties/FacultiesItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Faculties() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"all\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12), count = ref1[0], setCount = ref1[1];\n    //display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"faculties\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"faculties__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"faculties__title\",\n                        children: \"Факультеты\"\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__clist\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"faculties__citem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function() {\n                                        return setActive(\"all\");\n                                    },\n                                    className: \"faculties__cbtn \".concat(active === \"all\" ? \"faculties__cbtn-active\" : null),\n                                    children: \"Все\"\n                                }, void 0, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this),\n                            _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__.map(function(item, key) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"faculties__citem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return setActive(item.name);\n                                        },\n                                        className: \"faculties__cbtn \".concat(active === item.name ? \"faculties__cbtn-active\" : null),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, key + 545, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__list\",\n                        children: _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__.map(function(item, key) {\n                            if (key + 1 <= count) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FacultiesItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, key + 897, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 24\n                                }, _this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"faculties__btnbox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setCount(+count + 12);\n                            },\n                            className: \"faculties__btn\",\n                            children: \"Показать еще\"\n                        }, void 0, false, {\n                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_s(Faculties, \"VakUpEg7UTQPNx74Fb8XE0SJ9Lc=\");\n_c = Faculties;\nvar _c;\n$RefreshReg$(_c, \"Faculties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRmFjdWx0aWVzL0ZhY3VsdGllcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDRTtBQUMwQjtBQUNEO0FBQ2Q7QUFFN0IsU0FBU00sU0FBUyxHQUFHOzs7SUFDbEMsSUFBMEJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE1BQU0sR0FBZUwsR0FBZSxHQUE5QixFQUFFTSxTQUFTLEdBQUlOLEdBQWUsR0FBbkI7SUFDdEIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JPLEtBQUssR0FBY1AsSUFBWSxHQUExQixFQUFFUSxRQUFRLEdBQUlSLElBQVksR0FBaEI7SUFHcEIsU0FBUztJQUNULHFCQUNFLDhEQUFDUyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUM1Qiw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O2tDQUNoQyw4REFBQ0UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLGtCQUFrQjtrQ0FBQyxZQUFVOzs7Ozs0QkFBSztrQ0FHaEQsOERBQUNHLElBQUU7d0JBQUNILFNBQVMsRUFBQyxrQkFBa0I7OzBDQUM5Qiw4REFBQ0ksSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLGtCQUFrQjswQ0FDOUIsNEVBQUNLLFFBQU07b0NBQ0xDLE9BQU8sRUFBRTsrQ0FBTVYsU0FBUyxDQUFDLEtBQUssQ0FBQztxQ0FBQTtvQ0FDL0JJLFNBQVMsRUFBRSxrQkFBaUIsQ0FFM0IsT0FEQ0wsTUFBTSxLQUFLLEtBQUssR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQ2xEOzhDQUNILEtBRUQ7Ozs7O3dDQUFTOzs7OztvQ0FDTjs0QkFDSkosMERBQWMsQ0FBQyxTQUFDaUIsSUFBSSxFQUFFQyxHQUFHLEVBQUs7Z0NBQzdCLHFCQUNFLDhEQUFDTCxJQUFFO29DQUFpQkosU0FBUyxFQUFDLGtCQUFrQjs4Q0FDOUMsNEVBQUNLLFFBQU07d0NBQ0xDLE9BQU8sRUFBRTttREFBTVYsU0FBUyxDQUFDWSxJQUFJLENBQUNFLElBQUksQ0FBQzt5Q0FBQTt3Q0FDbkNWLFNBQVMsRUFBRSxrQkFBaUIsQ0FFM0IsT0FEQ0wsTUFBTSxLQUFLYSxJQUFJLENBQUNFLElBQUksR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQ3REO2tEQUVERixJQUFJLENBQUNFLElBQUk7Ozs7OzZDQUNIO21DQVJGRCxHQUFHLEdBQUcsR0FBRzs7Ozt5Q0FTYixDQUNMOzRCQUNKLENBQUMsQ0FBQzs7Ozs7OzRCQUNDO2tDQUdMLDhEQUFDTixJQUFFO3dCQUFDSCxTQUFTLEVBQUMsaUJBQWlCO2tDQUM1QlIseURBQWMsQ0FBQyxTQUFDZ0IsSUFBSSxFQUFFQyxHQUFHLEVBQUs7NEJBQzdCLElBQUlBLEdBQUcsR0FBRyxDQUFDLElBQUlaLEtBQUssRUFBRTtnQ0FDcEIscUJBQU8sOERBQUNKLHNEQUFhO29DQUFpQmUsSUFBSSxFQUFFQSxJQUFJO21DQUFyQkMsR0FBRyxHQUFHLEdBQUc7Ozs7eUNBQWdCLENBQUM7NEJBQ3ZELENBQUM7d0JBQ0gsQ0FBQyxDQUFDOzs7Ozs0QkFDQztrQ0FHTCw4REFBQ1IsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjtrQ0FDaEMsNEVBQUNLLFFBQU07NEJBQ0xDLE9BQU8sRUFBRTt1Q0FBTVIsUUFBUSxDQUFDLENBQUNELEtBQUssR0FBRyxFQUFFLENBQUM7NkJBQUE7NEJBQ3BDRyxTQUFTLEVBQUMsZ0JBQWdCO3NDQUMzQixjQUVEOzs7OztnQ0FBUzs7Ozs7NEJBQ0w7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0UsQ0FDVjtBQUNKLENBQUM7R0E5RHVCTixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0ZhY3VsdGllcy9GYWN1bHRpZXMuanN4PzUwN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0NhdGVnb3JpZXMuanNvblwiO1xuaW1wb3J0IEZhY3VsdGllc3MgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0ZhY3VsdGllcy5qc29uXCI7XG5pbXBvcnQgRmFjdWx0aWVzSXRlbSBmcm9tIFwiLi9GYWN1bHRpZXNJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhY3VsdGllcygpIHtcbiAgbGV0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgbGV0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMTIpO1xuXG4gIFxuICAvL2Rpc3BsYXlcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmYWN1bHRpZXNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19iaWdib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX190aXRsZVwiPtCk0LDQutGD0LvRjNGC0LXRgtGLPC9oMT5cblxuICAgICAgICAgIHsvKiAvL0NhdGVnb3JpZXMgICAqL31cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19jbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZhY3VsdGllc19fY2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImFsbFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYWN1bHRpZXNfX2NidG4gJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gXCJhbGxcIiA/IFwiZmFjdWx0aWVzX19jYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0JLRgdC1XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtDYXRlZ29yaWVzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17a2V5ICsgNTQ1fSBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2NpdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYWN1bHRpZXNfX2NidG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGl0ZW0ubmFtZSA/IFwiZmFjdWx0aWVzX19jYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgey8qIC8vRmFjdWx0aWVzICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2xpc3RcIj5cbiAgICAgICAgICAgIHtGYWN1bHRpZXNzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChrZXkgKyAxIDw9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGYWN1bHRpZXNJdGVtIGtleT17a2V5ICsgODk3fSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIHsvKiAvL1lhbmEgKyAxMiBpdGVtICAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYnRuYm94XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvdW50KCtjb3VudCArIDEyKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19idG5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINC10YnQtVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwiQ2F0ZWdvcmllcyIsIkZhY3VsdGllc3MiLCJGYWN1bHRpZXNJdGVtIiwiRmFjdWx0aWVzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY291bnQiLCJzZXRDb3VudCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImtleSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main/Faculties/Faculties.jsx\n"));

/***/ })

});