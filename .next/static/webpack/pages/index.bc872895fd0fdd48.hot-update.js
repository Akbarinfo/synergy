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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faculties; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/Categories.json */ \"./database/Categories.json\");\n/* harmony import */ var _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../database/Faculties.json */ \"./database/Faculties.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Faculties() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"all\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"11\"), count = ref1[0], setCount = ref1[1];\n    console.log(count);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"faculties\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"faculties__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"faculties__title\",\n                        children: \"Факультеты\"\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__clist\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"faculties__citem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function() {\n                                        return setActive(\"all\");\n                                    },\n                                    className: \"faculties__cbtn \".concat(active === \"all\" ? \"faculties__cbtn-active\" : null),\n                                    children: [\n                                        \" \",\n                                        \"Все\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            _database_Categories_json__WEBPACK_IMPORTED_MODULE_4__.map(function(item, key) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"faculties__citem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return setActive(item.name);\n                                        },\n                                        className: \"faculties__cbtn \".concat(active === item.name ? \"faculties__cbtn-active\" : null),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, key + 545, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"faculties__list\",\n                        children: _database_Faculties_json__WEBPACK_IMPORTED_MODULE_5__.map(function(item, key) {\n                            if (key <= count) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"faculties__item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"faculties__infobox\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"faculties__name\",\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 27\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"faculties__count\",\n                                                            children: [\n                                                                item.count,\n                                                                \" специальностей\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 27\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"faculties__iconbox\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        className: \"faculties__icon\",\n                                                        src: \"/images/icon.png\",\n                                                        alt: \"ascjsacnl\",\n                                                        width: 82,\n                                                        height: 82,\n                                                        layout: \"responsive\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 27\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, key + 741, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, _this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"faculties__btnbox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setCount(+count + 11);\n                            },\n                            className: \"faculties__btn\",\n                            children: \"Показать еще\"\n                        }, void 0, false, {\n                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Faculties/Faculties.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Faculties, \"QdPvynxfhzDxwPXEibcW3BBmrxk=\");\n_c = Faculties;\nvar _c;\n$RefreshReg$(_c, \"Faculties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRmFjdWx0aWVzL0ZhY3VsdGllcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNFO0FBQzBCO0FBQ0Q7QUFFM0MsU0FBU0ssU0FBUyxHQUFHOzs7SUFDbEMsSUFBMEJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENJLE1BQU0sR0FBZUosR0FBZSxHQUE5QixFQUFFSyxTQUFTLEdBQUlMLEdBQWUsR0FBbkI7SUFDdEIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBakNNLEtBQUssR0FBY04sSUFBYyxHQUE1QixFQUFFTyxRQUFRLEdBQUlQLElBQWMsR0FBbEI7SUFFcEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7SUFFbEIscUJBQ0UsOERBQUNJLFNBQU87UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQzVCLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxXQUFXO3NCQUN4Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjs7a0NBQ2hDLDhEQUFDRSxJQUFFO3dCQUFDRixTQUFTLEVBQUMsa0JBQWtCO2tDQUFDLFlBQVU7Ozs7OzRCQUFLO2tDQUdoRCw4REFBQ0csSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLGtCQUFrQjs7MENBQzlCLDhEQUFDSSxJQUFFO2dDQUFDSixTQUFTLEVBQUMsa0JBQWtCOzBDQUM5Qiw0RUFBQ0ssUUFBTTtvQ0FDTEMsT0FBTyxFQUFFOytDQUFNWixTQUFTLENBQUMsS0FBSyxDQUFDO3FDQUFBO29DQUMvQk0sU0FBUyxFQUFFLGtCQUFpQixDQUUzQixPQURDUCxNQUFNLEtBQUssS0FBSyxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FDbEQ7O3dDQUVELEdBQUc7d0NBQUMsS0FFUDs7Ozs7O3dDQUFTOzs7OztvQ0FDTjs0QkFDSkgsMERBQWMsQ0FBQyxTQUFDa0IsSUFBSSxFQUFFQyxHQUFHLEVBQUs7Z0NBQzdCLHFCQUNFLDhEQUFDTCxJQUFFO29DQUFpQkosU0FBUyxFQUFDLGtCQUFrQjs4Q0FDOUMsNEVBQUNLLFFBQU07d0NBQ0xDLE9BQU8sRUFBRTttREFBTVosU0FBUyxDQUFDYyxJQUFJLENBQUNFLElBQUksQ0FBQzt5Q0FBQTt3Q0FDbkNWLFNBQVMsRUFBRSxrQkFBaUIsQ0FFM0IsT0FEQ1AsTUFBTSxLQUFLZSxJQUFJLENBQUNFLElBQUksR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQ3REO2tEQUVERixJQUFJLENBQUNFLElBQUk7Ozs7OzZDQUNIO21DQVJGRCxHQUFHLEdBQUcsR0FBRzs7Ozt5Q0FTYixDQUNMOzRCQUNKLENBQUMsQ0FBQzs7Ozs7OzRCQUNDO2tDQUlMLDhEQUFDTixJQUFFO3dCQUFDSCxTQUFTLEVBQUMsaUJBQWlCO2tDQUM1QlQseURBQWMsQ0FBQyxTQUFDaUIsSUFBSSxFQUFFQyxHQUFHLEVBQUs7NEJBQzdCLElBQUlBLEdBQUcsSUFBSWQsS0FBSyxFQUFFO2dDQUNoQixxQkFDRSw4REFBQ1MsSUFBRTtvQ0FBaUJKLFNBQVMsRUFBQyxpQkFBaUI7OENBQzdDLDRFQUFDYixrREFBSTt3Q0FBQ3dCLElBQUksRUFBRSxHQUFHO2tEQUNiLDRFQUFDQyxHQUFDOzs4REFDQSw4REFBQ1gsS0FBRztvREFBQ0QsU0FBUyxFQUFDLG9CQUFvQjs7c0VBQ2pDLDhEQUFDYSxJQUFFOzREQUFDYixTQUFTLEVBQUMsaUJBQWlCO3NFQUFFUSxJQUFJLENBQUNNLEtBQUs7Ozs7O2lFQUFNO3NFQUNqRCw4REFBQ0MsR0FBQzs0REFBQ2YsU0FBUyxFQUFDLGtCQUFrQjs7Z0VBQzVCUSxJQUFJLENBQUNiLEtBQUs7Z0VBQUMsaUJBQ2Q7Ozs7OztpRUFBSTs7Ozs7O3lEQUNBOzhEQUNOLDhEQUFDTSxLQUFHO29EQUFDRCxTQUFTLEVBQUMsb0JBQW9COzhEQUNqQyw0RUFBQ1osbURBQUs7d0RBQ0pZLFNBQVMsRUFBQyxpQkFBaUI7d0RBQzNCZ0IsR0FBRyxFQUFDLGtCQUFrQjt3REFDdEJDLEdBQUcsRUFBQyxXQUFXO3dEQUNmQyxLQUFLLEVBQUUsRUFBRTt3REFDVEMsTUFBTSxFQUFFLEVBQUU7d0RBQ1ZDLE1BQU0sRUFBQyxZQUFZOzs7Ozs2REFDbkI7Ozs7O3lEQUNFOzs7Ozs7aURBQ0o7Ozs7OzZDQUNDO21DQXBCQVgsR0FBRyxHQUFHLEdBQUc7Ozs7eUNBcUJiLENBQ0w7NEJBQ0osQ0FBQzt3QkFDSCxDQUFDLENBQUM7Ozs7OzRCQUNDO2tDQUVMLDhEQUFDUixLQUFHO3dCQUFDRCxTQUFTLEVBQUMsbUJBQW1CO2tDQUNoQyw0RUFBQ0ssUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNVixRQUFRLENBQUMsQ0FBQ0QsS0FBSyxHQUFHLEVBQUUsQ0FBQzs2QkFBQTs0QkFBRUssU0FBUyxFQUFDLGdCQUFnQjtzQ0FBQyxjQUFZOzs7OztnQ0FBUzs7Ozs7NEJBQzFGOzs7Ozs7b0JBQ0Y7Ozs7O2dCQUNGOzs7OztZQUNFLENBQ1Y7QUFDSixDQUFDO0dBakZ1QlIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi9GYWN1bHRpZXMvRmFjdWx0aWVzLmpzeD81MDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9DYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCBGYWN1bHRpZXNzIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9GYWN1bHRpZXMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYWN1bHRpZXMoKSB7XG4gIGxldCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJhbGxcIik7XG4gIGxldCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFwiMTFcIilcblxuICBjb25zb2xlLmxvZyhjb3VudClcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhY3VsdGllc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2JpZ2JveFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX3RpdGxlXCI+0KTQsNC60YPQu9GM0YLQtdGC0Ys8L2gxPlxuXG4gICAgICAgICAgey8qIC8vQ2F0ZWdvcmllcyAgICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2NsaXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19jaXRlbVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwiYWxsXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhY3VsdGllc19fY2J0biAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlID09PSBcImFsbFwiID8gXCJmYWN1bHRpZXNfX2NidG4tYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAg0JLRgdC1XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtDYXRlZ29yaWVzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17a2V5ICsgNTQ1fSBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2NpdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYWN1bHRpZXNfX2NidG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGl0ZW0ubmFtZSA/IFwiZmFjdWx0aWVzX19jYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgey8qIC8vRmFjdWx0aWVzICovfVxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZhY3VsdGllc19fbGlzdFwiPlxuICAgICAgICAgICAge0ZhY3VsdGllc3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGtleSA8PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXkgKyA3NDF9IGNsYXNzTmFtZT1cImZhY3VsdGllc19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19faW5mb2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19uYW1lXCI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fSDRgdC/0LXRhtC40LDQu9GM0L3QvtGB0YLQtdC5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWN1bHRpZXNfX2ljb25ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhc2Nqc2FjbmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs4Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3VsdGllc19fYnRuYm94XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KCtjb3VudCArIDExKX0gY2xhc3NOYW1lPVwiZmFjdWx0aWVzX19idG5cIj7Qn9C+0LrQsNC30LDRgtGMINC10YnQtTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkNhdGVnb3JpZXMiLCJGYWN1bHRpZXNzIiwiRmFjdWx0aWVzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY291bnQiLCJzZXRDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJrZXkiLCJuYW1lIiwiaHJlZiIsImEiLCJoMiIsInRpdGxlIiwicCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main/Faculties/Faculties.jsx\n"));

/***/ })

});