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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/Forms.json */ \"./database/Forms.json\");\n/* harmony import */ var _database_FormsText_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database/FormsText.json */ \"./database/FormsText.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Forms() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Очная\"), active = ref[0], setActive = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"forms\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"forms__bigbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"forms__title\",\n                                children: \"Формы обучения\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"forms__text\",\n                                children: \"Совмещайте работу с учебой и участвуйте в образовательном процессе в комфортном формате\"\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"forms__boxs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"forms__list\",\n                                children: _database_Forms_json__WEBPACK_IMPORTED_MODULE_2__.map(function(item, key) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"forms__item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return setActive(item.name);\n                                            },\n                                            className: \"forms__btn \".concat(active === item.name ? \"forms__btn-active\" : null),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, key + 356, false, {\n                                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"forms__descbox\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"forms__desc\",\n                                    children: \"Онлайн-обучение в Университете \\xabСинергия\\xbb — это возможность получить востребованную профессию где и когда вам удобно. Вам нужен только компьютер или планшет с выходом в интернет. Учебный процесс организован на современной платформе онлайн-обучения lms. synergy, которая дает доступ к мультиформатным учебным материалам, интерактивному тестированию, видеолекциям, семинарам и мастер-классам известных бизнес-спикеров.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akbarali/Webpark/synergy/components/Main/Forms/Forms.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_s(Forms, \"oWBh28wffueK0xgg6BGSbOIE9H0=\");\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vRm9ybXMvRm9ybXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDaUI7QUFDTztBQUUxQyxTQUFTRyxLQUFLLEdBQUc7OztJQUM5QixJQUEwQkgsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBQXRDSSxNQUFNLEdBQWVKLEdBQWlCLEdBQWhDLEVBQUVLLFNBQVMsR0FBSUwsR0FBaUIsR0FBckI7SUFFdEIscUJBQ0UsOERBQUNNLFNBQU87UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ3hCLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxXQUFXO3NCQUN4Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O2tDQUM1Qiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLFlBQVk7OzBDQUN6Qiw4REFBQ0UsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLGNBQWM7MENBQUMsZ0JBQWM7Ozs7O29DQUFLOzBDQUNoRCw4REFBQ0csR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLGFBQWE7MENBQUMseUZBRzNCOzs7OztvQ0FBSTs7Ozs7OzRCQUNBO2tDQUVOLDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsYUFBYTs7MENBQzFCLDhEQUFDSSxJQUFFO2dDQUFDSixTQUFTLEVBQUMsYUFBYTswQ0FDeEJOLHFEQUFVLENBQUMsU0FBQ1ksSUFBSSxFQUFFQyxHQUFHLEVBQUs7b0NBQ3pCLHFCQUNFLDhEQUFDQyxJQUFFO3dDQUFpQlIsU0FBUyxFQUFDLGFBQWE7a0RBQ3pDLDRFQUFDUyxRQUFNOzRDQUNMQyxPQUFPLEVBQUU7dURBQU1aLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDSyxJQUFJLENBQUM7NkNBQUE7NENBQ25DWCxTQUFTLEVBQUUsYUFBWSxDQUV0QixPQURDSCxNQUFNLEtBQUtTLElBQUksQ0FBQ0ssSUFBSSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FDakQ7c0RBRURMLElBQUksQ0FBQ0ssSUFBSTs7Ozs7aURBQ0g7dUNBUkZKLEdBQUcsR0FBRyxHQUFHOzs7OzZDQVNiLENBQ0w7Z0NBQ0osQ0FBQyxDQUFDOzs7OztvQ0FDQzswQ0FDTCw4REFBQ04sS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLGdCQUFnQjswQ0FDN0IsNEVBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyxhQUFhOzhDQUFDLHdhQVEzQjs7Ozs7d0NBQUk7Ozs7O29DQUNBOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0UsQ0FDVjtBQUNKLENBQUM7R0FoRHVCSixLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Zvcm1zL0Zvcm1zLmpzeD82ODJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybXNzIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9Gb3Jtcy5qc29uXCI7XG5pbXBvcnQgRm9ybXNUZXh0IGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9Gb3Jtc1RleHQuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtcygpIHtcbiAgbGV0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcItCe0YfQvdCw0Y9cIik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3Jtc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYmlnYm94XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc19fYm94XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybXNfX3RpdGxlXCI+0KTQvtGA0LzRiyDQvtCx0YPRh9C10L3QuNGPPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1zX190ZXh0XCI+XG4gICAgICAgICAgICAgINCh0L7QstC80LXRidCw0LnRgtC1INGA0LDQsdC+0YLRgyDRgSDRg9GH0LXQsdC+0Lkg0Lgg0YPRh9Cw0YHRgtCy0YPQudGC0LUg0LIg0L7QsdGA0LDQt9C+0LLQsNGC0LXQu9GM0L3QvtC8INC/0YDQvtGG0LXRgdGB0LVcbiAgICAgICAgICAgICAg0LIg0LrQvtC80YTQvtGA0YLQvdC+0Lwg0YTQvtGA0LzQsNGC0LVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2JveHNcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb3Jtc19fbGlzdFwiPlxuICAgICAgICAgICAgICB7Rm9ybXNzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleSArIDM1Nn0gY2xhc3NOYW1lPVwiZm9ybXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm1zX19idG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5uYW1lID8gXCJmb3Jtc19fYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2Nib3hcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybXNfX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICDQntC90LvQsNC50L0t0L7QsdGD0YfQtdC90LjQtSDQsiDQo9C90LjQstC10YDRgdC40YLQtdGC0LUgwqvQodC40L3QtdGA0LPQuNGPwrsg4oCUINGN0YLQviDQstC+0LfQvNC+0LbQvdC+0YHRgtGMXG4gICAgICAgICAgICAgICAg0L/QvtC70YPRh9C40YLRjCDQstC+0YHRgtGA0LXQsdC+0LLQsNC90L3Rg9GOINC/0YDQvtGE0LXRgdGB0LjRjiDQs9C00LUg0Lgg0LrQvtCz0LTQsCDQstCw0Lwg0YPQtNC+0LHQvdC+LiDQktCw0LxcbiAgICAgICAgICAgICAgICDQvdGD0LbQtdC9INGC0L7Qu9GM0LrQviDQutC+0LzQv9GM0Y7RgtC10YAg0LjQu9C4INC/0LvQsNC90YjQtdGCINGBINCy0YvRhdC+0LTQvtC8INCyINC40L3RgtC10YDQvdC10YIuINCj0YfQtdCx0L3Ri9C5XG4gICAgICAgICAgICAgICAg0L/RgNC+0YbQtdGB0YEg0L7RgNCz0LDQvdC40LfQvtCy0LDQvSDQvdCwINGB0L7QstGA0LXQvNC10L3QvdC+0Lkg0L/Qu9Cw0YLRhNC+0YDQvNC1INC+0L3Qu9Cw0LnQvS3QvtCx0YPRh9C10L3QuNGPXG4gICAgICAgICAgICAgICAgbG1zLiBzeW5lcmd5LCDQutC+0YLQvtGA0LDRjyDQtNCw0LXRgiDQtNC+0YHRgtGD0L8g0Log0LzRg9C70YzRgtC40YTQvtGA0LzQsNGC0L3Ri9C8INGD0YfQtdCx0L3Ri9C8XG4gICAgICAgICAgICAgICAg0LzQsNGC0LXRgNC40LDQu9Cw0LwsINC40L3RgtC10YDQsNC60YLQuNCy0L3QvtC80YMg0YLQtdGB0YLQuNGA0L7QstCw0L3QuNGOLCDQstC40LTQtdC+0LvQtdC60YbQuNGP0LwsINGB0LXQvNC40L3QsNGA0LDQvFxuICAgICAgICAgICAgICAgINC4INC80LDRgdGC0LXRgC3QutC70LDRgdGB0LDQvCDQuNC30LLQtdGB0YLQvdGL0YUg0LHQuNC30L3QtdGBLdGB0L/QuNC60LXRgNC+0LIuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm1zcyIsIkZvcm1zVGV4dCIsIkZvcm1zIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsInVsIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main/Forms/Forms.jsx\n"));

/***/ })

});