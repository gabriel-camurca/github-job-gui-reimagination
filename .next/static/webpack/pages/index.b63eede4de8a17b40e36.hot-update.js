webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/JobCard.tsx":
/*!************************************!*\
  !*** ./src/components/JobCard.tsx ***!
  \************************************/
/*! exports provided: JobCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCard", function() { return JobCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/JobCard.module.css */ "./src/styles/components/JobCard.module.css");
/* harmony import */ var _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\gabri\\Documents\\GitHub\\github-job-gui-reimagination\\src\\components\\JobCard.tsx",
    _s = $RefreshSig$();




function JobCard(_ref) {
  _s();

  var job = _ref.job;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  function changeDisplay() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  } // TODO: A sessão a seguir pode ser melhorada com o uso de bootstrap. Por uma questão de tempo não foi possível adicionar tal ferramenta.
  // TODO: Separar o conteúdo da div jobContainer em outro componente


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainer, " ").concat(_styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainerActive),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInfo,
          onClick: changeDisplay,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: job.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: job.company_logo,
          alt: job.company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailsContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Descri\xE7\xE3o:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            source: job.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: changeDisplay,
          className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: job.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " - "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: job.company_logo,
          alt: job.company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)
    }, void 0, false)
  }, void 0, false);
}

_s(JobCard, "OFRYOMGmWDzfQ4dzLF00ag1mHo0=");

_c = JobCard;

var _c;

$RefreshReg$(_c, "JobCard");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9iQ2FyZC50c3giXSwibmFtZXMiOlsiSm9iQ2FyZCIsImpvYiIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZURpc3BsYXkiLCJzdHlsZXMiLCJqb2JDb250YWluZXIiLCJqb2JDb250YWluZXJBY3RpdmUiLCJ0ZXh0SW5mbyIsInRpdGxlIiwibG9jYXRpb24iLCJ0eXBlIiwiY29tcGFueV9sb2dvIiwiY29tcGFueSIsImRldGFpbHNDb250YWluZXIiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFvQk8sU0FBU0EsT0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsS0FBRCxDQUZBO0FBQUEsTUFFakNDLFFBRmlDO0FBQUEsTUFFdkJDLFdBRnVCOztBQUl4QyxXQUFTQyxhQUFULEdBQXdCO0FBQ3BCLFFBQUlGLFFBQUosRUFBYztBQUNWQyxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEtBRkQsTUFFTztBQUNIQSxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIO0FBQ0osR0FWdUMsQ0FXeEM7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBQSxjQUNLRCxRQUFRLGdCQUNMO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxZQUFLRyw0RUFBTSxDQUFDQyxZQUFaLGNBQTRCRCw0RUFBTSxDQUFDRSxrQkFBbkMsQ0FBZDtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUYsNEVBQU0sQ0FBQ0csUUFBdkI7QUFBaUMsaUJBQU8sRUFBRUosYUFBMUM7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPSixHQUFHLENBQUNTO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsb0NBQ0k7QUFBQSx3QkFBT1QsR0FBRyxDQUFDVTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUEsd0JBQU9WLEdBQUcsQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFTSTtBQUFLLGFBQUcsRUFBRVgsR0FBRyxDQUFDWSxZQUFkO0FBQTRCLGFBQUcsRUFBRVosR0FBRyxDQUFDYTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBWUE7QUFBSyxpQkFBUyxFQUFFUiw0RUFBTSxDQUFDUyxnQkFBdkI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsaUNBQ0kscUVBQUMscURBQUQ7QUFBZSxrQkFBTSxFQUFFZCxHQUFHLENBQUNlO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpBO0FBQUEsb0JBREssZ0JBcUJUO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFViw0RUFBTSxDQUFDQyxZQUF2QjtBQUFBLGdDQUNJO0FBQUssaUJBQU8sRUFBRUYsYUFBZDtBQUE4QixtQkFBUyxFQUFFQyw0RUFBTSxDQUFDRyxRQUFoRDtBQUFBLGtDQUNJO0FBQUEsc0JBQU9SLEdBQUcsQ0FBQ1M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxvQ0FDSTtBQUFBLHdCQUFPVCxHQUFHLENBQUNVO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQSx3QkFBT1YsR0FBRyxDQUFDVztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJO0FBQUssYUFBRyxFQUFFWCxHQUFHLENBQUNZLFlBQWQ7QUFBNEIsYUFBRyxFQUFFWixHQUFHLENBQUNhO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUF0QkosbUJBREo7QUF1Q0g7O0dBcERlZCxPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2M2VlZGU0ZGU4YTE3YjQwZTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0pvYkNhcmQubW9kdWxlLmNzc1wiXHJcblxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuXHJcbmludGVyZmFjZSBKb2J7XHJcbiAgICBpZDogICAgICAgICAgIHN0cmluZztcclxuICAgIHR5cGU6ICAgICAgICAgc3RyaW5nO1xyXG4gICAgdXJsOiAgICAgICAgICBzdHJpbmc7XHJcbiAgICBjcmVhdGVkX2F0OiAgIHN0cmluZztcclxuICAgIGNvbXBhbnk6ICAgICAgc3RyaW5nO1xyXG4gICAgY29tcGFueV91cmw6ICBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogICAgIHN0cmluZztcclxuICAgIHRpdGxlOiAgICAgICAgc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246ICBzdHJpbmc7XHJcbiAgICBob3dfdG9fYXBwbHk6IHN0cmluZztcclxuICAgIGNvbXBhbnlfbG9nbzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSm9iRGF0YVBhcmFte1xyXG4gICAgam9iOiBKb2JcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEpvYkNhcmQoe2pvYn06IEpvYkRhdGFQYXJhbSl7XHJcblxyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRGlzcGxheSgpe1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogQSBzZXNzw6NvIGEgc2VndWlyIHBvZGUgc2VyIG1lbGhvcmFkYSBjb20gbyB1c28gZGUgYm9vdHN0cmFwLiBQb3IgdW1hIHF1ZXN0w6NvIGRlIHRlbXBvIG7Do28gZm9pIHBvc3PDrXZlbCBhZGljaW9uYXIgdGFsIGZlcnJhbWVudGEuXHJcbiAgICAvLyBUT0RPOiBTZXBhcmFyIG8gY29udGXDumRvIGRhIGRpdiBqb2JDb250YWluZXIgZW0gb3V0cm8gY29tcG9uZW50ZVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmpvYkNvbnRhaW5lcn0gJHtzdHlsZXMuam9iQ29udGFpbmVyQWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEluZm99IG9uQ2xpY2s9e2NoYW5nZURpc3BsYXl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17am9iLmNvbXBhbnlfbG9nb30gYWx0PXtqb2IuY29tcGFueX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2NyacOnw6NvOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtqb2IuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApOihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9iQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NoYW5nZURpc3BsYXl9ICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17am9iLmNvbXBhbnlfbG9nb30gYWx0PXtqb2IuY29tcGFueX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9