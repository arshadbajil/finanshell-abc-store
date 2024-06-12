"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[category]",{

/***/ "./src/components/ProductCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/slices/cartSlice */ \"./src/redux/slices/cartSlice.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n// packages/web/components/ProductCard.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductCard = (param)=>{\n    let { id, title, price, image, description } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleAddToCart = ()=>{\n        const product = {\n            id,\n            title,\n            price,\n            quantity: 1\n        };\n        dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.addItem)(product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/product/\".concat(id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: title,\n                        className: \"w-full h-48 object-cover mb-4 rounded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 2\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700 mb-2\",\n                        children: [\n                            \"$\",\n                            price.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 mb-4\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 56\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddToCart,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\",\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/components/ProductCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMENBQTBDOzs7QUFDaEI7QUFDZ0I7QUFDVTtBQUN2QjtBQVU3QixNQUFNSSxjQUEwQztRQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFOztJQUN2RixNQUFNQyxXQUFXVCx3REFBV0E7SUFFNUIsTUFBTVUsa0JBQWtCO1FBQ3RCLE1BQU1DLFVBQVU7WUFBRVA7WUFBSUM7WUFBT0M7WUFBT00sVUFBVTtRQUFFO1FBQ2hESCxTQUFTUixnRUFBT0EsQ0FBQ1U7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQW9DLDhEQUFDWixrREFBSUE7Z0JBQUNhLE1BQU0sWUFBZSxPQUFIWDs7a0NBQzlFLDhEQUFDWTt3QkFBSUMsS0FBS1Y7d0JBQU9XLEtBQUtiO3dCQUFPUyxXQUFVOzs7Ozs7a0NBQ2xDLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBOEJUOzs7Ozs7a0NBQzVDLDhEQUFDZTt3QkFBRU4sV0FBVTs7NEJBQXFCOzRCQUFFUixNQUFNZSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ2xELDhEQUFDRDt3QkFBRU4sV0FBVTtrQ0FBc0JOOzs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDYztnQkFDQ0MsU0FBU2I7Z0JBQ1RJLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0dBeEJNWDs7UUFDYUgsb0RBQVdBOzs7S0FEeEJHO0FBMEJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeD82MGI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3dlYi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpbWFnZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7IGlkLCB0aXRsZSwgcHJpY2UsIGltYWdlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHsgaWQsIHRpdGxlLCBwcmljZSwgcXVhbnRpdHk6IDEgfTtcbiAgICBkaXNwYXRjaChhZGRJdGVtKHByb2R1Y3QpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC00XCI+PExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aWR9YH0+XG4gPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgbWItNCByb3VuZGVkXCIgLz5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPnt0aXRsZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtYi0yXCI+JHtwcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9MaW5rPlxuICAgICBcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgID5cbiAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VEaXNwYXRjaCIsImFkZEl0ZW0iLCJMaW5rIiwiUHJvZHVjdENhcmQiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiZGlzcGF0Y2giLCJoYW5kbGVBZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductCard.tsx\n"));

/***/ })

});