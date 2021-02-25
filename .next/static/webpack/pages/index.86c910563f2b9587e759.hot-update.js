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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: job.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
          source: job.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " - "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: job.type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: job.company_logo,
          alt: job.company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
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

/***/ }),

/***/ "./src/contexts/JobsContext.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9iQ2FyZC50c3giXSwibmFtZXMiOlsiSm9iQ2FyZCIsImpvYiIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZURpc3BsYXkiLCJzdHlsZXMiLCJqb2JDb250YWluZXIiLCJqb2JDb250YWluZXJBY3RpdmUiLCJ0ZXh0SW5mbyIsInRpdGxlIiwibG9jYXRpb24iLCJ0eXBlIiwiY29tcGFueV9sb2dvIiwiY29tcGFueSIsImRldGFpbHNDb250YWluZXIiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFvQk8sU0FBU0EsT0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsS0FBRCxDQUZBO0FBQUEsTUFFakNDLFFBRmlDO0FBQUEsTUFFdkJDLFdBRnVCOztBQUl4QyxXQUFTQyxhQUFULEdBQXdCO0FBQ3BCLFFBQUlGLFFBQUosRUFBYztBQUNWQyxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEtBRkQsTUFFTztBQUNIQSxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIO0FBQ0osR0FWdUMsQ0FXeEM7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBQSxjQUNLRCxRQUFRLGdCQUNMO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxZQUFLRyw0RUFBTSxDQUFDQyxZQUFaLGNBQTRCRCw0RUFBTSxDQUFDRSxrQkFBbkMsQ0FBZDtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUYsNEVBQU0sQ0FBQ0csUUFBdkI7QUFBaUMsaUJBQU8sRUFBRUosYUFBMUM7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPSixHQUFHLENBQUNTO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsb0NBQ0k7QUFBQSx3QkFBT1QsR0FBRyxDQUFDVTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUEsd0JBQU9WLEdBQUcsQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFTSTtBQUFLLGFBQUcsRUFBRVgsR0FBRyxDQUFDWSxZQUFkO0FBQTRCLGFBQUcsRUFBRVosR0FBRyxDQUFDYTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBWUE7QUFBSyxpQkFBUyxFQUFFUiw0RUFBTSxDQUFDUyxnQkFBdkI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9kLEdBQUcsQ0FBQ2U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0kscUVBQUMscURBQUQ7QUFBZSxnQkFBTSxFQUFFZixHQUFHLENBQUNlO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkE7QUFBQSxvQkFESyxnQkFvQlQ7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVWLDRFQUFNLENBQUNDLFlBQXZCO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFFRixhQUFkO0FBQThCLG1CQUFTLEVBQUVDLDRFQUFNLENBQUNHLFFBQWhEO0FBQUEsa0NBQ0k7QUFBQSxzQkFBT1IsR0FBRyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUNJO0FBQUEsd0JBQU9ULEdBQUcsQ0FBQ1U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBLHdCQUFPVixHQUFHLENBQUNXO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBU0k7QUFBSyxhQUFHLEVBQUVYLEdBQUcsQ0FBQ1ksWUFBZDtBQUE0QixhQUFHLEVBQUVaLEdBQUcsQ0FBQ2E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQXJCSixtQkFESjtBQXNDSDs7R0FuRGVkLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODZjOTEwNTYzZjJiOTU4N2U3NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvSm9iQ2FyZC5tb2R1bGUuY3NzXCJcclxuXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5cclxuaW50ZXJmYWNlIEpvYntcclxuICAgIGlkOiAgICAgICAgICAgc3RyaW5nO1xyXG4gICAgdHlwZTogICAgICAgICBzdHJpbmc7XHJcbiAgICB1cmw6ICAgICAgICAgIHN0cmluZztcclxuICAgIGNyZWF0ZWRfYXQ6ICAgc3RyaW5nO1xyXG4gICAgY29tcGFueTogICAgICBzdHJpbmc7XHJcbiAgICBjb21wYW55X3VybDogIHN0cmluZztcclxuICAgIGxvY2F0aW9uOiAgICAgc3RyaW5nO1xyXG4gICAgdGl0bGU6ICAgICAgICBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogIHN0cmluZztcclxuICAgIGhvd190b19hcHBseTogc3RyaW5nO1xyXG4gICAgY29tcGFueV9sb2dvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBKb2JEYXRhUGFyYW17XHJcbiAgICBqb2I6IEpvYlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSm9iQ2FyZCh7am9ifTogSm9iRGF0YVBhcmFtKXtcclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VEaXNwbGF5KCl7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiBBIHNlc3PDo28gYSBzZWd1aXIgcG9kZSBzZXIgbWVsaG9yYWRhIGNvbSBvIHVzbyBkZSBib290c3RyYXAuIFBvciB1bWEgcXVlc3TDo28gZGUgdGVtcG8gbsOjbyBmb2kgcG9zc8OtdmVsIGFkaWNpb25hciB0YWwgZmVycmFtZW50YS5cclxuICAgIC8vIFRPRE86IFNlcGFyYXIgbyBjb250ZcO6ZG8gZGEgZGl2IGpvYkNvbnRhaW5lciBlbSBvdXRybyBjb21wb25lbnRlXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzQWN0aXZlID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuam9iQ29udGFpbmVyfSAke3N0eWxlcy5qb2JDb250YWluZXJBY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30gb25DbGljaz17Y2hhbmdlRGlzcGxheX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IudHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtqb2IuY29tcGFueV9sb2dvfSBhbHQ9e2pvYi5jb21wYW55fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RGVzY3Jpw6fDo286PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2pvYi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2JDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Y2hhbmdlRGlzcGxheX0gIGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAtIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IudHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtqb2IuY29tcGFueV9sb2dvfSBhbHQ9e2pvYi5jb21wYW55fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=