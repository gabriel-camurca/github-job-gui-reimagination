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
          className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailContent,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9iQ2FyZC50c3giXSwibmFtZXMiOlsiSm9iQ2FyZCIsImpvYiIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZURpc3BsYXkiLCJzdHlsZXMiLCJqb2JDb250YWluZXIiLCJqb2JDb250YWluZXJBY3RpdmUiLCJ0ZXh0SW5mbyIsInRpdGxlIiwibG9jYXRpb24iLCJ0eXBlIiwiY29tcGFueV9sb2dvIiwiY29tcGFueSIsImRldGFpbHNDb250YWluZXIiLCJkZXRhaWxDb250ZW50IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBb0JPLFNBQVNBLE9BQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFuQkMsR0FBbUIsUUFBbkJBLEdBQW1COztBQUFBLGtCQUVSQyxzREFBUSxDQUFDLEtBQUQsQ0FGQTtBQUFBLE1BRWpDQyxRQUZpQztBQUFBLE1BRXZCQyxXQUZ1Qjs7QUFJeEMsV0FBU0MsYUFBVCxHQUF3QjtBQUNwQixRQUFJRixRQUFKLEVBQWM7QUFDVkMsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDtBQUNKLEdBVnVDLENBV3hDO0FBQ0E7OztBQUNBLHNCQUNJO0FBQUEsY0FDS0QsUUFBUSxnQkFDTDtBQUFBLDhCQUNBO0FBQUssaUJBQVMsWUFBS0csNEVBQU0sQ0FBQ0MsWUFBWixjQUE0QkQsNEVBQU0sQ0FBQ0Usa0JBQW5DLENBQWQ7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVGLDRFQUFNLENBQUNHLFFBQXZCO0FBQWlDLGlCQUFPLEVBQUVKLGFBQTFDO0FBQUEsa0NBQ0k7QUFBQSxzQkFBT0osR0FBRyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUNJO0FBQUEsd0JBQU9ULEdBQUcsQ0FBQ1U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBLHdCQUFPVixHQUFHLENBQUNXO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBU0k7QUFBSyxhQUFHLEVBQUVYLEdBQUcsQ0FBQ1ksWUFBZDtBQUE0QixhQUFHLEVBQUVaLEdBQUcsQ0FBQ2E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVlBO0FBQUssaUJBQVMsRUFBRVIsNEVBQU0sQ0FBQ1MsZ0JBQXZCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUVULDRFQUFNLENBQUNVLGFBQXZCO0FBQUEsaUNBQ0kscUVBQUMscURBQUQ7QUFBZSxrQkFBTSxFQUFFZixHQUFHLENBQUNnQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaQTtBQUFBLG9CQURLLGdCQXFCVDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRVgsNEVBQU0sQ0FBQ0MsWUFBdkI7QUFBQSxnQ0FDSTtBQUFLLGlCQUFPLEVBQUVGLGFBQWQ7QUFBOEIsbUJBQVMsRUFBRUMsNEVBQU0sQ0FBQ0csUUFBaEQ7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPUixHQUFHLENBQUNTO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsb0NBQ0k7QUFBQSx3QkFBT1QsR0FBRyxDQUFDVTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUEsd0JBQU9WLEdBQUcsQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFTSTtBQUFLLGFBQUcsRUFBRVgsR0FBRyxDQUFDWSxZQUFkO0FBQTRCLGFBQUcsRUFBRVosR0FBRyxDQUFDYTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBdEJKLG1CQURKO0FBdUNIOztHQXBEZWQsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjA2OTZkOWQyYjJiMTBlZDAzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Kb2JDYXJkLm1vZHVsZS5jc3NcIlxyXG5cclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcblxyXG5pbnRlcmZhY2UgSm9ie1xyXG4gICAgaWQ6ICAgICAgICAgICBzdHJpbmc7XHJcbiAgICB0eXBlOiAgICAgICAgIHN0cmluZztcclxuICAgIHVybDogICAgICAgICAgc3RyaW5nO1xyXG4gICAgY3JlYXRlZF9hdDogICBzdHJpbmc7XHJcbiAgICBjb21wYW55OiAgICAgIHN0cmluZztcclxuICAgIGNvbXBhbnlfdXJsOiAgc3RyaW5nO1xyXG4gICAgbG9jYXRpb246ICAgICBzdHJpbmc7XHJcbiAgICB0aXRsZTogICAgICAgIHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiAgc3RyaW5nO1xyXG4gICAgaG93X3RvX2FwcGx5OiBzdHJpbmc7XHJcbiAgICBjb21wYW55X2xvZ286IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEpvYkRhdGFQYXJhbXtcclxuICAgIGpvYjogSm9iXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBKb2JDYXJkKHtqb2J9OiBKb2JEYXRhUGFyYW0pe1xyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZURpc3BsYXkoKXtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRPRE86IEEgc2Vzc8OjbyBhIHNlZ3VpciBwb2RlIHNlciBtZWxob3JhZGEgY29tIG8gdXNvIGRlIGJvb3RzdHJhcC4gUG9yIHVtYSBxdWVzdMOjbyBkZSB0ZW1wbyBuw6NvIGZvaSBwb3Nzw612ZWwgYWRpY2lvbmFyIHRhbCBmZXJyYW1lbnRhLlxyXG4gICAgLy8gVE9ETzogU2VwYXJhciBvIGNvbnRlw7pkbyBkYSBkaXYgam9iQ29udGFpbmVyIGVtIG91dHJvIGNvbXBvbmVudGVcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5qb2JDb250YWluZXJ9ICR7c3R5bGVzLmpvYkNvbnRhaW5lckFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbmZvfSBvbkNsaWNrPXtjaGFuZ2VEaXNwbGF5fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi50eXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2pvYi5jb21wYW55X2xvZ299IGFsdD17am9iLmNvbXBhbnl9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXNjcmnDp8Ojbzo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17am9iLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvYkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtjaGFuZ2VEaXNwbGF5fSAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57am9iLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntqb2IubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi50eXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2pvYi5jb21wYW55X2xvZ299IGFsdD17am9iLmNvbXBhbnl9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==