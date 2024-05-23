/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home1",{

/***/ "./src/components/Footer/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.jsx ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/layouts/light.jsx":
/*!*******************************!*\
  !*** ./src/layouts/light.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Footer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/app.json */ \"./src/data/app.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-css-tags */ \n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LightLayout = function(param) {\n    var children = param.children, footerClass = param.footerClass;\n    _s();\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current, logo = logoRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n                logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_5__.darkLogo);\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n                logo.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_5__.lightLogo);\n            }\n        });\n    }, [\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\layouts\\\\light.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/assets/css/style-light.css\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\layouts\\\\light.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                navbarRef: navbarRef,\n                logoRef: logoRef,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\layouts\\\\light.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            children,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_Footer__WEBPACK_IMPORTED_MODULE_3___default()), {\n                classText: footerClass,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\layouts\\\\light.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(LightLayout, \"NJv/rvX5fPwWhnPtkwq0tuwt7xI=\");\n_c = LightLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LightLayout);\nvar _c;\n$RefreshReg$(_c, \"LightLayout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9saWdodC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLEVBQTJDLDBDQUNsQjtBQUNnQjtBQUNBO0FBQ2I7QUFDVTs7O0FBRXRDLEdBQUssQ0FBQ0ssV0FBVyxHQUFHLFFBQVEsUUFBdUIsQ0FBQztRQUE3QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFdBQVcsU0FBWEEsV0FBVzs7SUFDMUMsR0FBSyxDQUFDQyxTQUFTLEdBQUdSLG1EQUFZLENBQUMsSUFBSTtJQUNuQyxHQUFLLENBQUNVLE9BQU8sR0FBR1YsbURBQVksQ0FBQyxJQUFJO0lBRWpDQSxzREFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ3JCLEdBQUcsQ0FBQ1ksTUFBTSxHQUFHSixTQUFTLENBQUNLLE9BQU8sRUFDNUJDLElBQUksR0FBR0osT0FBTyxDQUFDRyxPQUFPO1FBQ3hCLEVBQUUsRUFBRUUsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDN0JKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBWTtRQUNuQyxDQUFDLE1BQU0sQ0FBQztZQUNOTixNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7UUFDdEMsQ0FBQztRQUNESixNQUFNLENBQUNLLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUFRLEdBQUYsQ0FBQztZQUN2QyxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUM3QkosTUFBTSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO2dCQUNqQ0osSUFBSSxDQUFDTyxZQUFZLENBQUMsQ0FBSyxNQUFFakIsb0RBQWdCO1lBQzNDLENBQUMsTUFBTSxDQUFDO2dCQUNOUSxNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7Z0JBQ3BDTCxJQUFJLENBQUNPLFlBQVksQ0FBQyxDQUFLLE1BQUVqQixxREFBaUI7WUFDNUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0k7UUFBQUEsU0FBUztJQUFBLENBQUM7SUFDZCxNQUFNOztpRkFFREwsa0RBQUk7Ozs7Ozs7K0ZBQ0ZxQixDQUFJO29CQUFDQyxHQUFHLEVBQUMsQ0FBWTtvQkFBQ0MsSUFBSSxFQUFDLENBQTZCOzs7Ozs7Ozs7aUZBRTFEekIsMERBQU07Z0JBQUNPLFNBQVMsRUFBRUEsU0FBUztnQkFBRUUsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OztZQUM3Q0osUUFBUTtpRkFDUkosMkRBQU07Z0JBQUN5QixTQUFTLEVBQUVwQixXQUFXOzs7Ozs7Ozs7O0FBR3BDLENBQUM7R0FoQ0tGLFdBQVc7S0FBWEEsV0FBVztBQWtDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9saWdodC5qc3g/Y2NlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWNzcy10YWdzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgYXBwRGF0YSBmcm9tIFwiLi4vZGF0YS9hcHAuanNvblwiO1xyXG5cclxuY29uc3QgTGlnaHRMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyQ2xhc3MgfSkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIG5hdmJhciA9IG5hdmJhclJlZi5jdXJyZW50LFxyXG4gICAgICBsb2dvID0gbG9nb1JlZi5jdXJyZW50O1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXBwRGF0YS5kYXJrTG9nbyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcERhdGEubGlnaHRMb2dvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW25hdmJhclJlZl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9hc3NldHMvY3NzL3N0eWxlLWxpZ2h0LmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdmJhciBuYXZiYXJSZWY9e25hdmJhclJlZn0gbG9nb1JlZj17bG9nb1JlZn0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIGNsYXNzVGV4dD17Zm9vdGVyQ2xhc3N9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkZvb3RlciIsIkhlYWQiLCJhcHBEYXRhIiwiTGlnaHRMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlckNsYXNzIiwibmF2YmFyUmVmIiwidXNlUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsIm5hdmJhciIsImN1cnJlbnQiLCJsb2dvIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwiZGFya0xvZ28iLCJsaWdodExvZ28iLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/light.jsx\n");

/***/ })

});