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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/Forms.json */ \"./database/Forms.json\");\n/* harmony import */ var _database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database/FormsText.json */ \"./database/FormsText.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Forms() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Очная\"), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), array = ref1[0], setArray = ref1[1];\n    var FilterHandler = function(event) {\n        setArray(_database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__.filter());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"forms\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"forms__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"forms__title\",\n                                children: \"Формы обучения\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"forms__text\",\n                                children: \"Совмещайте работу с учебой и участвуйте в образовательном процессе в комфортном формате\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__boxs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"forms__list\",\n                                children: _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__.map(function(item, key) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"forms__item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return setActive(item.name);\n                                            },\n                                            className: \"forms__btn \".concat(active === item.name ? \"forms__btn-active\" : null),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, key + 356, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"forms__descbox\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"forms__desc\",\n                                    children: \"Онлайн-обучение в Университете \\xabСинергия\\xbb — это возможность получить востребованную профессию где и когда вам удобно. Вам нужен только компьютер или планшет с выходом в интернет. Учебный процесс организован на современной платформе онлайн-обучения lms. synergy, которая дает доступ к мультиформатным учебным материалам, интерактивному тестированию, видеолекциям, семинарам и мастер-классам известных бизнес-спикеров.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Forms, \"MmaDySBpT9HsBeTYtTeLYy3C74w=\");\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDaUI7QUFDTztBQUUxQyxTQUFTRyxLQUFLLEdBQUc7OztJQUM5QixJQUEwQkgsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBQXRDSSxNQUFNLEdBQWVKLEdBQWlCLEdBQWhDLEVBQUVLLFNBQVMsR0FBSUwsR0FBaUIsR0FBckI7SUFDdEIsSUFBd0JBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3Qk0sS0FBSyxHQUFjTixJQUFVLEdBQXhCLEVBQUVPLFFBQVEsR0FBSVAsSUFBVSxHQUFkO0lBRXBCLElBQUlRLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDN0JGLFFBQVEsQ0FBQ0wsNERBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQscUJBQ0UsOERBQUNTLFNBQU87UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ3hCLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxXQUFXO3NCQUN4Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O2tDQUM1Qiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLFlBQVk7OzBDQUN6Qiw4REFBQ0UsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLGNBQWM7MENBQUMsZ0JBQWM7Ozs7O29DQUFLOzBDQUNoRCw4REFBQ0csR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLGFBQWE7MENBQUMseUZBRzNCOzs7OztvQ0FBSTs7Ozs7OzRCQUNBO2tDQUVOLDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsYUFBYTs7MENBQzFCLDhEQUFDSSxJQUFFO2dDQUFDSixTQUFTLEVBQUMsYUFBYTswQ0FDeEJYLHFEQUFVLENBQUMsU0FBQ2lCLElBQUksRUFBRUMsR0FBRyxFQUFLO29DQUN6QixxQkFDRSw4REFBQ0MsSUFBRTt3Q0FBaUJSLFNBQVMsRUFBQyxhQUFhO2tEQUN6Qyw0RUFBQ1MsUUFBTTs0Q0FDTEMsT0FBTyxFQUFFO3VEQUFNakIsU0FBUyxDQUFDYSxJQUFJLENBQUNLLElBQUksQ0FBQzs2Q0FBQTs0Q0FDbkNYLFNBQVMsRUFBRSxhQUFZLENBRXRCLE9BRENSLE1BQU0sS0FBS2MsSUFBSSxDQUFDSyxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUNqRDtzREFFREwsSUFBSSxDQUFDSyxJQUFJOzs7OztpREFDSDt1Q0FSRkosR0FBRyxHQUFHLEdBQUc7Ozs7NkNBU2IsQ0FDTDtnQ0FDSixDQUFDLENBQUM7Ozs7O29DQUNDOzBDQUNMLDhEQUFDTixLQUFHO2dDQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzBDQUM3Qiw0RUFBQ0csR0FBQztvQ0FBQ0gsU0FBUyxFQUFDLGFBQWE7OENBQUMsd2FBUTNCOzs7Ozt3Q0FBSTs7Ozs7b0NBQ0E7Ozs7Ozs0QkFDRjs7Ozs7O29CQUNGOzs7OztnQkFDRjs7Ozs7WUFDRSxDQUNWO0FBQ0osQ0FBQztHQXJEdUJULEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4PzY4MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3Jtc3MgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0Zvcm1zLmpzb25cIjtcbmltcG9ydCBGb3Jtc1RleHQgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0Zvcm1zVGV4dC5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zKCkge1xuICBsZXQgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwi0J7Rh9C90LDRj1wiKTtcbiAgbGV0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoKVxuICBcbiAgbGV0IEZpbHRlckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBcnJheShGb3Jtc1RleHQuZmlsdGVyKCkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19iaWdib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zX19ib3hcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3Jtc19fdGl0bGVcIj7QpNC+0YDQvNGLINC+0LHRg9GH0LXQvdC40Y88L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybXNfX3RleHRcIj5cbiAgICAgICAgICAgICAg0KHQvtCy0LzQtdGJ0LDQudGC0LUg0YDQsNCx0L7RgtGDINGBINGD0YfQtdCx0L7QuSDQuCDRg9GH0LDRgdGC0LLRg9C50YLQtSDQsiDQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdC+0Lwg0L/RgNC+0YbQtdGB0YHQtVxuICAgICAgICAgICAgICDQsiDQutC+0LzRhNC+0YDRgtC90L7QvCDRhNC+0YDQvNCw0YLQtVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm94c1wiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvcm1zX19saXN0XCI+XG4gICAgICAgICAgICAgIHtGb3Jtc3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5ICsgMzU2fSBjbGFzc05hbWU9XCJmb3Jtc19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybXNfX2J0biAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID09PSBpdGVtLm5hbWUgPyBcImZvcm1zX19idG4tYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fZGVzY2JveFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3Jtc19fZGVzY1wiPlxuICAgICAgICAgICAgICAgINCe0L3Qu9Cw0LnQvS3QvtCx0YPRh9C10L3QuNC1INCyINCj0L3QuNCy0LXRgNGB0LjRgtC10YLQtSDCq9Ch0LjQvdC10YDQs9C40Y/CuyDigJQg0Y3RgtC+INCy0L7Qt9C80L7QttC90L7RgdGC0YxcbiAgICAgICAgICAgICAgICDQv9C+0LvRg9GH0LjRgtGMINCy0L7RgdGC0YDQtdCx0L7QstCw0L3QvdGD0Y4g0L/RgNC+0YTQtdGB0YHQuNGOINCz0LTQtSDQuCDQutC+0LPQtNCwINCy0LDQvCDRg9C00L7QsdC90L4uINCS0LDQvFxuICAgICAgICAgICAgICAgINC90YPQttC10L0g0YLQvtC70YzQutC+INC60L7QvNC/0YzRjtGC0LXRgCDQuNC70Lgg0L/Qu9Cw0L3RiNC10YIg0YEg0LLRi9GF0L7QtNC+0Lwg0LIg0LjQvdGC0LXRgNC90LXRgi4g0KPRh9C10LHQvdGL0LlcbiAgICAgICAgICAgICAgICDQv9GA0L7RhtC10YHRgSDQvtGA0LPQsNC90LjQt9C+0LLQsNC9INC90LAg0YHQvtCy0YDQtdC80LXQvdC90L7QuSDQv9C70LDRgtGE0L7RgNC80LUg0L7QvdC70LDQudC9LdC+0LHRg9GH0LXQvdC40Y9cbiAgICAgICAgICAgICAgICBsbXMuIHN5bmVyZ3ksINC60L7RgtC+0YDQsNGPINC00LDQtdGCINC00L7RgdGC0YPQvyDQuiDQvNGD0LvRjNGC0LjRhNC+0YDQvNCw0YLQvdGL0Lwg0YPRh9C10LHQvdGL0LxcbiAgICAgICAgICAgICAgICDQvNCw0YLQtdGA0LjQsNC70LDQvCwg0LjQvdGC0LXRgNCw0LrRgtC40LLQvdC+0LzRgyDRgtC10YHRgtC40YDQvtCy0LDQvdC40Y4sINCy0LjQtNC10L7Qu9C10LrRhtC40Y/QvCwg0YHQtdC80LjQvdCw0YDQsNC8XG4gICAgICAgICAgICAgICAg0Lgg0LzQsNGB0YLQtdGALdC60LvQsNGB0YHQsNC8INC40LfQstC10YHRgtC90YvRhSDQsdC40LfQvdC10YEt0YHQv9C40LrQtdGA0L7Qsi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybXNzIiwiRm9ybXNUZXh0IiwiRm9ybXMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhcnJheSIsInNldEFycmF5IiwiRmlsdGVySGFuZGxlciIsImV2ZW50IiwiZmlsdGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsInVsIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main/Forms/Forms.jsx\n"));

/***/ })

});