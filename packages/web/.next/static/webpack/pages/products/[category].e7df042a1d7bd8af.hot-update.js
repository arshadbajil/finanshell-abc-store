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

/***/ "./src/pages/products/[category].tsx":
/*!*******************************************!*\
  !*** ./src/pages/products/[category].tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProductCard */ \"./src/components/ProductCard.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductListing = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { category } = router.query;\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProductsByCategory = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://fakestoreapi.com/products/category/\".concat(category));\n                setProducts(response.data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        if (category) {\n            fetchProductsByCategory();\n        }\n    }, [\n        category\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl mb-4\",\n                            children: [\n                                \"Products in \",\n                                category\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                            children: Array.from({\n                                length: 6\n                            }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white p-4 rounded-lg shadow-md animate-pulse\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-gray-200 h-40 mb-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-6 bg-gray-200 w-2/3 mb-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-6 bg-gray-200 w-1/3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl mb-4\",\n                        children: [\n                            \"Products in \",\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: product.id,\n                                title: product.title,\n                                price: product.price,\n                                image: product.image\n                            }, product.id, false, {\n                                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arshadbajil/Desktop/interview-tests/finanshells/packages/web/src/pages/products/[category].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductListing, \"ALGS8HW4u4D4NA8iTnXP02ELQRI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductListing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductListing);\nvar _c;\n$RefreshReg$(_c, \"ProductListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvW2NhdGVnb3J5XS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDSztBQUNVO0FBQzdCO0FBUzFCLE1BQU1PLGlCQUEyQjs7SUFDL0IsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU0sUUFBUSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDakMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFVO0lBRWhERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLDBCQUEwQjtZQUM5QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVYsaURBQVMsQ0FBQyw4Q0FBdUQsT0FBVEc7Z0JBQy9FRyxZQUFZSSxTQUFTRSxJQUFJO2dCQUN6QkosV0FBVztZQUNiLEVBQUUsT0FBT0ssT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFDNUM7UUFDRjtRQUVBLElBQUlWLFVBQVU7WUFDWk07UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBUztJQUViLElBQUlJLFNBQVM7UUFDWCxxQkFDRTs7OEJBQ0UsOERBQUNULDBEQUFNQTs7Ozs7OEJBQ1AsOERBQUNpQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVOztnQ0FBZ0I7Z0NBQWFiOzs7Ozs7O3NDQUMzQyw4REFBQ1k7NEJBQUlDLFdBQVU7c0NBQ1pFLE1BQU1DLElBQUksQ0FBQztnQ0FBRUMsUUFBUTs0QkFBRSxHQUFHLENBQUNDLEdBQUdDLHNCQUM3Qiw4REFBQ1A7b0NBQWdCQyxXQUFVOztzREFDekIsOERBQUNEOzRDQUFJQyxXQUFVOzs7Ozs7c0RBQ2YsOERBQUNEOzRDQUFJQyxXQUFVOzs7Ozs7c0RBQ2YsOERBQUNEOzRDQUFJQyxXQUFVOzs7Ozs7O21DQUhQTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVXRCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDeEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ2lCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzRCQUFnQjs0QkFBYWI7Ozs7Ozs7a0NBQzNDLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDWlgsU0FBU2tCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ3pCLCtEQUFXQTtnQ0FFVjBCLElBQUlELFFBQVFDLEVBQUU7Z0NBQ2RDLE9BQU9GLFFBQVFFLEtBQUs7Z0NBQ3BCQyxPQUFPSCxRQUFRRyxLQUFLO2dDQUNwQkMsT0FBT0osUUFBUUksS0FBSzsrQkFKZkosUUFBUUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzdCO0dBN0RNeEI7O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTtBQStETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMvW2NhdGVnb3J5XS50c3g/MDkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpbWFnZTogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9kdWN0TGlzdGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0c0J5Q2F0ZWdvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCk7XG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhdGVnb3J5KSB7XG4gICAgICBmZXRjaFByb2R1Y3RzQnlDYXRlZ29yeSgpO1xuICAgIH1cbiAgfSwgW2NhdGVnb3J5XSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi00XCI+UHJvZHVjdHMgaW4ge2NhdGVnb3J5fTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogNiB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgaC00MCBtYi0yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgYmctZ3JheS0yMDAgdy0yLzMgbWItMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02IGJnLWdyYXktMjAwIHctMS8zXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi00XCI+UHJvZHVjdHMgaW4ge2NhdGVnb3J5fTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0aW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJQcm9kdWN0Q2FyZCIsImF4aW9zIiwiUHJvZHVjdExpc3RpbmciLCJyb3V0ZXIiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products/[category].tsx\n"));

/***/ })

});