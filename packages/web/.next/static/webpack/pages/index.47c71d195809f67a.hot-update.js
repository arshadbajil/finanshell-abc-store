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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"../../node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"../../node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"../../node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { newestProducts = [], categories = [] } = param;\n    const carouselSettings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 4,\n        slidesToScroll: 4\n    };\n    const categoryCarouselSettings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 3\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl mb-4\",\n                        children: \"Welcome to ABC Store\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mb-2\",\n                                children: \"Newest Products\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                ...carouselSettings,\n                                children: newestProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"carousel-item px-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"h-40 2-full bg-gray-100\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: product.image,\n                                                    alt: product.title,\n                                                    className: \"w-full h-full object-contain\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 18\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: product.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"$\",\n                                                    product.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, product.id, true, {\n                                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mt-4 mb-2\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                ...categoryCarouselSettings,\n                                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"carousel-item px-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"h-40 2-full bg-gray-100\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 18\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: category\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, category, true, {\n                                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVPO0FBQ087QUFDTTtBQUNKO0FBRTFDLE1BQU1HLE9BQWtFO1FBQUMsRUFBRUMsaUJBQWUsRUFBRSxFQUFFQyxhQUFXLEVBQUUsRUFBRTtJQUMzRyxNQUFNQyxtQkFBbUI7UUFDdkJDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO0lBQ2xCO0lBRUEsTUFBTUMsMkJBQTJCO1FBQy9CTCxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtJQUNsQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1QsMERBQU1BOzs7OzswQkFDUCw4REFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDOUIsOERBQUNEOzswQ0FDQyw4REFBQ0c7Z0NBQUdGLFdBQVU7MENBQWdCOzs7Ozs7MENBQzlCLDhEQUFDYixtREFBTUE7Z0NBQUUsR0FBR0ssZ0JBQWdCOzBDQUN6QkYsZUFBZWEsR0FBRyxDQUFDLENBQUNDLHdCQUNuQiw4REFBQ0w7d0NBQXFCQyxXQUFVOzswREFDOUIsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNkLDRFQUFDSztvREFBSUMsS0FBS0YsUUFBUUcsS0FBSztvREFBRUMsS0FBS0osUUFBUUssS0FBSztvREFBRVQsV0FBVTs7Ozs7Ozs7Ozs7MERBRXhELDhEQUFDVTswREFBSU4sUUFBUUssS0FBSzs7Ozs7OzBEQUNsQiw4REFBQ0U7O29EQUFFO29EQUFFUCxRQUFRUSxLQUFLOzs7Ozs7Ozt1Q0FMVlIsUUFBUVMsRUFBRTs7Ozs7Ozs7OzswQ0FTeEIsOERBQUNYO2dDQUFHRixXQUFVOzBDQUFxQjs7Ozs7OzBDQUNuQyw4REFBQ2IsbURBQU1BO2dDQUFFLEdBQUdXLHdCQUF3QjswQ0FDakNQLFdBQVdZLEdBQUcsQ0FBQyxDQUFDVyx5QkFDZiw4REFBQ2Y7d0NBQW1CQyxXQUFVOzswREFDM0IsOERBQUNEO2dEQUFJQyxXQUFVOzs7Ozs7MERBSWhCLDhEQUFDVTswREFBSUk7Ozs7Ozs7dUNBTEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFheEI7S0FuRE16Qjs7QUFxRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcblxuY29uc3QgSG9tZTogUmVhY3QuRkM8eyBuZXdlc3RQcm9kdWN0czogYW55W107IGNhdGVnb3JpZXM6IHN0cmluZ1tdIH0+ID0gKHsgbmV3ZXN0UHJvZHVjdHM9W10sIGNhdGVnb3JpZXM9W10gfSkgPT4ge1xuICBjb25zdCBjYXJvdXNlbFNldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICB9O1xuXG4gIGNvbnN0IGNhdGVnb3J5Q2Fyb3VzZWxTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNFwiPldlbGNvbWUgdG8gQUJDIFN0b3JlPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMlwiPk5ld2VzdCBQcm9kdWN0czwvaDM+XG4gICAgICAgICAgPFNsaWRlciB7Li4uY2Fyb3VzZWxTZXR0aW5nc30+XG4gICAgICAgICAgICB7bmV3ZXN0UHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gcHgtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTQwIDItZnVsbCBiZy1ncmF5LTEwMCc+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoND57cHJvZHVjdC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDxwPiR7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG10LTQgbWItMlwiPkNhdGVnb3JpZXM8L2gzPlxuICAgICAgICAgIDxTbGlkZXIgey4uLmNhdGVnb3J5Q2Fyb3VzZWxTZXR0aW5nc30+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNDAgMi1mdWxsIGJnLWdyYXktMTAwJz5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDQ+e2NhdGVnb3J5fTwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IFtuZXdlc3RQcm9kdWN0c1Jlc3BvbnNlLCBjYXRlZ29yaWVzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHM/bGltaXQ9MTAnKSxcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL2NhdGVnb3JpZXMnKSxcbiAgICBdKTtcblxuICAgIGNvbnN0IG5ld2VzdFByb2R1Y3RzID0gbmV3ZXN0UHJvZHVjdHNSZXNwb25zZS5kYXRhO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzUmVzcG9uc2UuZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBuZXdlc3RQcm9kdWN0cywgY2F0ZWdvcmllcyB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IG5ld2VzdFByb2R1Y3RzOiBbXSwgY2F0ZWdvcmllczogW10gfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJIZWFkZXIiLCJIb21lIiwibmV3ZXN0UHJvZHVjdHMiLCJjYXRlZ29yaWVzIiwiY2Fyb3VzZWxTZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjYXRlZ29yeUNhcm91c2VsU2V0dGluZ3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImgzIiwibWFwIiwicHJvZHVjdCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoNCIsInAiLCJwcmljZSIsImlkIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});