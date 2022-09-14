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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faculties; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/Categories.json */ \"./database/Categories.json\");\n/* harmony import */ var _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../database/Faculties.json */ \"./database/Faculties.json\");\n/* harmony import */ var _FacultiesItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FacultiesItem */ \"./components/Main/Faculties/FacultiesItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Faculties() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"all\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12), count = ref1[0], setCount = ref1[1];\n    //dispa\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"faculties\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"faculties__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"faculties__title\",\n                        children: \"Факультеты\"\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__clist\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"faculties__citem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function() {\n                                        return setActive(\"all\");\n                                    },\n                                    className: \"faculties__cbtn \".concat(active === \"all\" ? \"faculties__cbtn-active\" : null),\n                                    children: [\n                                        \" \",\n                                        \"Все\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__.map(function(item, key) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"faculties__citem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return setActive(item.name);\n                                        },\n                                        className: \"faculties__cbtn \".concat(active === item.name ? \"faculties__cbtn-active\" : null),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, key + 545, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__list\",\n                        children: _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__.map(function(item, key) {\n                            if (key + 1 <= count) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FacultiesItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, key + 897, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, _this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"faculties__btnbox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setCount(+count + 12);\n                            },\n                            className: \"faculties__btn\",\n                            children: \"Показать еще\"\n                        }, void 0, false, {\n                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Faculties, \"VakUpEg7UTQPNx74Fb8XE0SJ9Lc=\");\n_c = Faculties;\nvar _c;\n$RefreshReg$(_c, \"Faculties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRmFjdWx0aWVzL0ZhY3VsdGllcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDRTtBQUMwQjtBQUNEO0FBQ2Q7QUFFN0IsU0FBU00sU0FBUyxHQUFHOzs7SUFDbEMsSUFBMEJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE1BQU0sR0FBZUwsR0FBZSxHQUE5QixFQUFFTSxTQUFTLEdBQUlOLEdBQWUsR0FBbkI7SUFDdEIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JPLEtBQUssR0FBY1AsSUFBWSxHQUExQixFQUFFUSxRQUFRLEdBQUlSLElBQVksR0FBaEI7SUFFcEIsT0FBTztJQUNQLHFCQUNFLDhEQUFDUyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUM1Qiw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O2tDQUNoQyw4REFBQ0UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLGtCQUFrQjtrQ0FBQyxZQUFVOzs7Ozs0QkFBSztrQ0FHaEQsOERBQUNHLElBQUU7d0JBQUNILFNBQVMsRUFBQyxrQkFBa0I7OzBDQUM5Qiw4REFBQ0ksSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLGtCQUFrQjswQ0FDOUIsNEVBQUNLLFFBQU07b0NBQ0xDLE9BQU8sRUFBRTsrQ0FBTVYsU0FBUyxDQUFDLEtBQUssQ0FBQztxQ0FBQTtvQ0FDL0JJLFNBQVMsRUFBRSxrQkFBaUIsQ0FFM0IsT0FEQ0wsTUFBTSxLQUFLLEtBQUssR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQ2xEOzt3Q0FFRCxHQUFHO3dDQUFDLEtBRVA7Ozs7Ozt3Q0FBUzs7Ozs7b0NBQ047NEJBQ0pKLDBEQUFjLENBQUMsU0FBQ2lCLElBQUksRUFBRUMsR0FBRyxFQUFLO2dDQUM3QixxQkFDRSw4REFBQ0wsSUFBRTtvQ0FBaUJKLFNBQVMsRUFBQyxrQkFBa0I7OENBQzlDLDRFQUFDSyxRQUFNO3dDQUNMQyxPQUFPLEVBQUU7bURBQU1WLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDRSxJQUFJLENBQUM7eUNBQUE7d0NBQ25DVixTQUFTLEVBQUUsa0JBQWlCLENBRTNCLE9BRENMLE1BQU0sS0FBS2EsSUFBSSxDQUFDRSxJQUFJLEdBQUcsd0JBQXdCLEdBQUcsSUFBSSxDQUN0RDtrREFFREYsSUFBSSxDQUFDRSxJQUFJOzs7Ozs2Q0FDSDttQ0FSRkQsR0FBRyxHQUFHLEdBQUc7Ozs7eUNBU2IsQ0FDTDs0QkFDSixDQUFDLENBQUM7Ozs7Ozs0QkFDQztrQ0FJTCw4REFBQ04sSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLGlCQUFpQjtrQ0FDNUJSLHlEQUFjLENBQUMsU0FBQ2dCLElBQUksRUFBRUMsR0FBRyxFQUFLOzRCQUM3QixJQUFJQSxHQUFHLEdBQUMsQ0FBQyxJQUFJWixLQUFLLEVBQUU7Z0NBQ2xCLHFCQUNFLDhEQUFDSixzREFBYTtvQ0FBaUJlLElBQUksRUFBRUEsSUFBSTttQ0FBckJDLEdBQUcsR0FBRyxHQUFHOzs7O3lDQUFlLENBQzVDOzRCQUNKLENBQUM7d0JBQ0gsQ0FBQyxDQUFDOzs7Ozs0QkFDQztrQ0FFTCw4REFBQ1IsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjtrQ0FDaEMsNEVBQUNLLFFBQU07NEJBQUNDLE9BQU8sRUFBRTt1Q0FBTVIsUUFBUSxDQUFDLENBQUNELEtBQUssR0FBRyxFQUFFLENBQUM7NkJBQUE7NEJBQUVHLFNBQVMsRUFBQyxnQkFBZ0I7c0NBQUMsY0FBWTs7Ozs7Z0NBQVM7Ozs7OzRCQUMxRjs7Ozs7O29CQUNGOzs7OztnQkFDRjs7Ozs7WUFDRSxDQUNWO0FBQ0osQ0FBQztHQTNEdUJOLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4vRmFjdWx0aWVzL0ZhY3VsdGllcy5qc3g/NTA3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvQ2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgRmFjdWx0aWVzcyBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvRmFjdWx0aWVzLmpzb25cIjtcbmltcG9ydCBGYWN1bHRpZXNJdGVtIGZyb20gXCIuL0ZhY3VsdGllc0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFjdWx0aWVzKCkge1xuICBsZXQgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBsZXQgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgxMilcblxuICAvL2Rpc3BhXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmFjdWx0aWVzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYmlnYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZhY3VsdGllc19fdGl0bGVcIj7QpNCw0LrRg9C70YzRgtC10YLRizwvaDE+XG5cbiAgICAgICAgICB7LyogLy9DYXRlZ29yaWVzICAgKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZhY3VsdGllc19fY2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2NpdGVtXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoXCJhbGxcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFjdWx0aWVzX19jYnRuICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IFwiYWxsXCIgPyBcImZhY3VsdGllc19fY2J0bi1hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICDQktGB0LVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge0NhdGVnb3JpZXMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXkgKyA1NDV9IGNsYXNzTmFtZT1cImZhY3VsdGllc19fY2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhY3VsdGllc19fY2J0biAke1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5uYW1lID8gXCJmYWN1bHRpZXNfX2NidG4tYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICB7LyogLy9GYWN1bHRpZXMgKi99XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19saXN0XCI+XG4gICAgICAgICAgICB7RmFjdWx0aWVzcy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5KzEgPD0gY291bnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEZhY3VsdGllc0l0ZW0ga2V5PXtrZXkgKyA4OTd9IGl0ZW09e2l0ZW19Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2J0bmJveFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgrY291bnQgKyAxMil9IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYnRuXCI+0J/QvtC60LDQt9Cw0YLRjCDQtdGJ0LU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlU3RhdGUiLCJDYXRlZ29yaWVzIiwiRmFjdWx0aWVzcyIsIkZhY3VsdGllc0l0ZW0iLCJGYWN1bHRpZXMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb3VudCIsInNldENvdW50Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwia2V5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/Faculties/Faculties.jsx\n"));

/***/ })

});