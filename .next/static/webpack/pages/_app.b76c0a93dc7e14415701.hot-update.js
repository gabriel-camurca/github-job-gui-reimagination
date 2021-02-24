webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/JobsContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/JobsContext.tsx ***!
  \**************************************/
/*! exports provided: JobsContext, JobsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsContext", function() { return JobsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsProvider", function() { return JobsProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jobs_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jobs.json */ "./jobs.json");
var _jobs_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../jobs.json */ "./jobs.json", 1);


var _jsxFileName = "C:\\Users\\gabri\\Documents\\GitHub\\github-job-gui-reimagination\\src\\contexts\\JobsContext.tsx",
    _s = $RefreshSig$();



var JobsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function JobsProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState3[0],
      setTitle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      company_logo = _useState5[0],
      setCompany_logo = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_jobs_json__WEBPACK_IMPORTED_MODULE_2__[2]),
      uniqueJob = _useState6[0],
      setUniqueJob = _useState6[1];

  function getJob() {
    var job = _jobs_json__WEBPACK_IMPORTED_MODULE_2__[3];
    setUniqueJob(job);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JobsContext.Provider, {
    value: {
      type: type,
      location: location,
      title: title,
      description: description,
      company_logo: company_logo,
      uniqueJob: uniqueJob,
      getJob: getJob
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(JobsProvider, "HooxIlxw7KnkSWRoXcKdp2I89V8=");

_c = JobsProvider;

var _c;

$RefreshReg$(_c, "JobsProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0pvYnNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJKb2JzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJKb2JzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidHlwZSIsInNldFR5cGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJjb21wYW55X2xvZ28iLCJzZXRDb21wYW55X2xvZ28iLCJqb2JzIiwidW5pcXVlSm9iIiwic2V0VW5pcXVlSm9iIiwiZ2V0Sm9iIiwiam9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBOEJPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUVBLFNBQVNDLFlBQVQsT0FBb0Q7QUFBQTs7QUFBQSxNQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCOztBQUFBLGtCQUUvQkMsc0RBQVEsQ0FBQyxFQUFELENBRnVCO0FBQUEsTUFFaERDLElBRmdEO0FBQUEsTUFFMUNDLE9BRjBDOztBQUFBLG1CQUd2QkYsc0RBQVEsQ0FBQyxFQUFELENBSGU7QUFBQSxNQUdoREcsUUFIZ0Q7QUFBQSxNQUd0Q0MsV0FIc0M7O0FBQUEsbUJBSTdCSixzREFBUSxDQUFDLEVBQUQsQ0FKcUI7QUFBQSxNQUloREssS0FKZ0Q7QUFBQSxNQUl6Q0MsUUFKeUM7O0FBQUEsbUJBS2pCTixzREFBUSxDQUFDLEVBQUQsQ0FMUztBQUFBLE1BS2hETyxXQUxnRDtBQUFBLE1BS25DQyxjQUxtQzs7QUFBQSxtQkFNZlIsc0RBQVEsQ0FBQyxFQUFELENBTk87QUFBQSxNQU1oRFMsWUFOZ0Q7QUFBQSxNQU1sQ0MsZUFOa0M7O0FBQUEsbUJBUXJCVixzREFBUSxDQUFDVyx1Q0FBSSxDQUFDLENBQUQsQ0FBTCxDQVJhO0FBQUEsTUFRaERDLFNBUmdEO0FBQUEsTUFRckNDLFlBUnFDOztBQVV2RCxXQUFTQyxNQUFULEdBQWlCO0FBQ2IsUUFBTUMsR0FBRyxHQUFHSix1Q0FBSSxDQUFDLENBQUQsQ0FBaEI7QUFDQUUsZ0JBQVksQ0FBQ0UsR0FBRCxDQUFaO0FBQ0g7O0FBRUQsc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQ3pCZCxVQUFJLEVBQUpBLElBRHlCO0FBRXpCRSxjQUFRLEVBQVJBLFFBRnlCO0FBR3pCRSxXQUFLLEVBQUxBLEtBSHlCO0FBSXpCRSxpQkFBVyxFQUFYQSxXQUp5QjtBQUt6QkUsa0JBQVksRUFBWkEsWUFMeUI7QUFNekJHLGVBQVMsRUFBVEEsU0FOeUI7QUFPekJFLFlBQU0sRUFBTkE7QUFQeUIsS0FBN0I7QUFBQSxjQVNLZjtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztHQTVCZUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI3NmMwYTkzZGM3ZTE0NDE1NzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgam9icyBmcm9tIFwiLi4vLi4vam9icy5qc29uXCJcclxuXHJcbmludGVyZmFjZSBKb2J7XHJcbiAgICBpZDogICAgICAgICAgIHN0cmluZztcclxuICAgIHR5cGU6ICAgICAgICAgc3RyaW5nO1xyXG4gICAgdXJsOiAgICAgICAgICBzdHJpbmc7XHJcbiAgICBjcmVhdGVkX2F0OiAgIHN0cmluZztcclxuICAgIGNvbXBhbnk6ICAgICAgc3RyaW5nO1xyXG4gICAgY29tcGFueV91cmw6ICBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogICAgIHN0cmluZztcclxuICAgIHRpdGxlOiAgICAgICAgc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246ICBzdHJpbmc7XHJcbiAgICBob3dfdG9fYXBwbHk6IHN0cmluZztcclxuICAgIGNvbXBhbnlfbG9nbzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSm9ic0NvbnRleHREYXRhe1xyXG4gICAgdHlwZTogICAgICAgICAgIHN0cmluZztcclxuICAgIGxvY2F0aW9uOiAgICAgICBzdHJpbmc7XHJcbiAgICB0aXRsZTogICAgICAgICAgc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246ICAgIHN0cmluZztcclxuICAgIGNvbXBhbnlfbG9nbzogICBzdHJpbmc7XHJcbiAgICB1bmlxdWVKb2I6ICAgICAgSm9iO1xyXG4gICAgZ2V0Sm9iOiAgICAgICAgICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBKb2JzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBKb2JzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgSm9ic0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBKb2JzUHJvdmlkZXIoe2NoaWxkcmVufTogSm9ic1Byb3ZpZGVyUHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbXBhbnlfbG9nbywgc2V0Q29tcGFueV9sb2dvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IFt1bmlxdWVKb2IsIHNldFVuaXF1ZUpvYl0gPSB1c2VTdGF0ZShqb2JzWzJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKb2IoKXtcclxuICAgICAgICBjb25zdCBqb2IgPSBqb2JzWzNdO1xyXG4gICAgICAgIHNldFVuaXF1ZUpvYihqb2IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Sm9ic0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgY29tcGFueV9sb2dvLFxyXG4gICAgICAgICAgICB1bmlxdWVKb2IsXHJcbiAgICAgICAgICAgIGdldEpvYlxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Kb2JzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9