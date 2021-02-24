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
/* harmony import */ var _contexts_JobsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/JobsContext */ "./src/contexts/JobsContext.tsx");



var _jsxFileName = "C:\\Users\\gabri\\Documents\\GitHub\\github-job-gui-reimagination\\src\\components\\JobCard.tsx",
    _s = $RefreshSig$();




function JobCard() {
  _s();

  // function test(){
  //     console.log("It Works!");
  // }
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_JobsContext__WEBPACK_IMPORTED_MODULE_3__["JobsContext"]),
      uniqueJob = _useContext.uniqueJob,
      getJob = _useContext.getJob;

  getJob();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  function changeDisplay() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainer, " ").concat(_styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainerActive),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: changeDisplay,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: uniqueJob.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "WW - "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Full Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/levelup.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailsContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Descri\xE7\xE3o:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "DetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetails"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_JobCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jobContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: changeDisplay,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: uniqueJob.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "WW - "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Full Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/levelup.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false)
  }, void 0, false);
}

_s(JobCard, "pg9YRpj1oAo6T5MF/+k5ROJVvZI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9iQ2FyZC50c3giXSwibmFtZXMiOlsiSm9iQ2FyZCIsInVzZUNvbnRleHQiLCJKb2JzQ29udGV4dCIsInVuaXF1ZUpvYiIsImdldEpvYiIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZURpc3BsYXkiLCJzdHlsZXMiLCJqb2JDb250YWluZXIiLCJqb2JDb250YWluZXJBY3RpdmUiLCJ0aXRsZSIsImRldGFpbHNDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxTQUFTQSxPQUFULEdBQWtCO0FBQUE7O0FBQ3JCO0FBQ0E7QUFDQTtBQUhxQixvQkFLT0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FMakI7QUFBQSxNQUtkQyxTQUxjLGVBS2RBLFNBTGM7QUFBQSxNQUtIQyxNQUxHLGVBS0hBLE1BTEc7O0FBT3JCQSxRQUFNOztBQVBlLGtCQVNXQyxzREFBUSxDQUFDLEtBQUQsQ0FUbkI7QUFBQSxNQVNkQyxRQVRjO0FBQUEsTUFTSkMsV0FUSTs7QUFXckIsV0FBU0MsYUFBVCxHQUF3QjtBQUNwQixRQUFJRixRQUFKLEVBQWM7QUFDVkMsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDtBQUNKOztBQUNELHNCQUNJO0FBQUEsY0FDS0QsUUFBUSxnQkFDTDtBQUFBLDhCQUNBO0FBQUssaUJBQVMsWUFBS0csNEVBQU0sQ0FBQ0MsWUFBWixjQUE0QkQsNEVBQU0sQ0FBQ0Usa0JBQW5DLENBQWQ7QUFBQSxnQ0FDSTtBQUFLLGlCQUFPLEVBQUVILGFBQWQ7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPTCxTQUFTLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVdBO0FBQUssaUJBQVMsRUFBRUgsNEVBQU0sQ0FBQ0ksZ0JBQXZCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQTtBQUFBLG9CQURLLGdCQWtCVDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUosNEVBQU0sQ0FBQ0MsWUFBdkI7QUFBQSxnQ0FDSTtBQUFLLGlCQUFPLEVBQUVGLGFBQWQ7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPTCxTQUFTLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQW5CSixtQkFESjtBQW1DSDs7R0FyRGVaLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTI0OTZhYTUyYzZlYTAyNDI5NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvSm9iQ2FyZC5tb2R1bGUuY3NzXCJcclxuXHJcbmltcG9ydCB7IEpvYnNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0pvYnNDb250ZXh0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBKb2JDYXJkKCl7XHJcbiAgICAvLyBmdW5jdGlvbiB0ZXN0KCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJJdCBXb3JrcyFcIik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3Qge3VuaXF1ZUpvYiwgZ2V0Sm9ifSA9IHVzZUNvbnRleHQoSm9ic0NvbnRleHQpO1xyXG5cclxuICAgIGdldEpvYigpO1xyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZURpc3BsYXkoKXtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5qb2JDb250YWluZXJ9ICR7c3R5bGVzLmpvYkNvbnRhaW5lckFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NoYW5nZURpc3BsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dW5pcXVlSm9iLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldXIC0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RnVsbCBUaW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsdXAuc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2NyacOnw6NvOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHNEZXRhaWxzRGV0YWlsc0RldGFpbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApOihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9iQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NoYW5nZURpc3BsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dW5pcXVlSm9iLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldXIC0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RnVsbCBUaW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsdXAuc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9