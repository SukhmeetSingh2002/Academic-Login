"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/student",{

/***/ "./helpers/StudentFunctions.js":
/*!*************************************!*\
  !*** ./helpers/StudentFunctions.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllCoursesStudent\": function() { return /* binding */ AllCoursesStudent; },\n/* harmony export */   \"GetCoursesStudent\": function() { return /* binding */ GetCoursesStudent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nconst serverAddress = \"http://localhost:8000\";\nconst CourseListPath = \"/apply/\";\nconst ALlCourseListPath = \"/course/\";\n\nconst GetCoursesStudent = async ()=>{\n    console.log(\"in get\");\n    const data = await fetch(serverAddress + CourseListPath, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        }\n    });\n    const result = await data.json();\n    return result;\n};\n_c = GetCoursesStudent;\nconst ChangeStatusStudent = async (action, id)=>{\n    // alert(action);\n    // alert(\"hi2\")\n    // console.log(\"in change called by: \"+ChangeStatusStudent.caller)\n    let courseStatus = 4;\n    if (action === \"Withdraw\") {\n        courseStatus = 3;\n    }\n    // alert('hai1')\n    const data = await fetch(serverAddress + \"/apply/\" + id + \"/\", {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        },\n        body: JSON.stringify({\n            \"status\": courseStatus\n        })\n    });\n    // alert('hai2')\n    console.log(data);\n    // alert('hai3')\n    const result = await data.json();\n    // alert('hai4')\n    alert(result.status);\n    // reload page\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().reload(window.location.pathname);\n// if (result.error === undefined) {\n//   if (action === \"Reject\"){\n//     alert(\"Application rejected\")\n//   }\n//   else{\n//     alert(\"Application approved\")\n//   }\n// }\n// else {\n//   alert(result.error)\n// }\n};\n_c1 = ChangeStatusStudent;\nconst AllCoursesStudent = async ()=>{\n    // console.log(\"in get\")\n    const data = await fetch(serverAddress + ALlCourseListPath, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        }\n    });\n    const result = await data.json();\n    return result;\n};\n_c2 = AllCoursesStudent;\nconst ApplyCourseStudent = async ()=>{\n    console.log(\"in get\");\n    const data = await fetch(serverAddress + CourseListPath, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        }\n    });\n    const result = await data.json();\n    return result;\n};\n_c3 = ApplyCourseStudent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeStatusStudent);\n\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"GetCoursesStudent\");\n$RefreshReg$(_c1, \"ChangeStatusStudent\");\n$RefreshReg$(_c2, \"AllCoursesStudent\");\n$RefreshReg$(_c3, \"ApplyCourseStudent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL1N0dWRlbnRGdW5jdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3pCLE1BQU1DLGdCQUFnQjtBQUN0QixNQUFNQyxpQkFBaUI7QUFDdkIsTUFBTUMsb0JBQW9CO0FBRU07QUFFaEMsTUFBTUUsb0JBQW9CLFVBQVk7SUFDcENDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLE1BQU1DLE9BQU8sTUFBTUMsTUFBTVIsZ0JBQWdCQyxnQkFBZ0I7UUFDdkRRLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQiwwQkFBMEI7WUFDMUIsaUJBQWlCLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUVwRDtJQUNGO0lBQ0EsTUFBTUMsU0FBUyxNQUFNTixLQUFLTyxJQUFJO0lBQzlCLE9BQU9EO0FBQ1Q7S0FiTVQ7QUFlTixNQUFNVyxzQkFBc0IsT0FBT0MsUUFBUUMsS0FBTztJQUNoRCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtFQUFrRTtJQUVsRSxJQUFJQyxlQUFlO0lBQ25CLElBQUlGLFdBQVcsWUFBWTtRQUN6QkUsZUFBZTtJQUNqQixDQUFDO0lBQ0QsZ0JBQWdCO0lBQ2hCLE1BQU1YLE9BQU8sTUFBTUMsTUFBTVIsZ0JBQWUsWUFBWWlCLEtBQUcsS0FBSztRQUMxRFIsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQixZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFDcEQ7UUFDQU8sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUUsVUFBVUg7UUFBYTtJQUNoRDtJQUNBLGdCQUFnQjtJQUNoQmIsUUFBUUMsR0FBRyxDQUFDQztJQUNaLGdCQUFnQjtJQUNoQixNQUFNTSxTQUFTLE1BQU1OLEtBQUtPLElBQUk7SUFDOUIsZ0JBQWdCO0lBRWhCUSxNQUFNVCxPQUFPVSxNQUFNO0lBQ25CLGNBQWM7SUFDZHBCLHlEQUFhLENBQUNzQixPQUFPQyxRQUFRLENBQUNDLFFBQVE7QUFFdEMsb0NBQW9DO0FBQ3BDLDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOLFVBQVU7QUFDVixvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOLElBQUk7QUFDSixTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLElBQUk7QUFDTjtNQXZDTVo7QUF5Q04sTUFBTWEsb0JBQW9CLFVBQVk7SUFDcEMsd0JBQXdCO0lBQ3hCLE1BQU1yQixPQUFPLE1BQU1DLE1BQU1SLGdCQUFnQkUsbUJBQW1CO1FBQzFETyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLGlCQUFpQixZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFFcEQ7SUFDRjtJQUNBLE1BQU1DLFNBQVMsTUFBTU4sS0FBS08sSUFBSTtJQUM5QixPQUFPRDtBQUNUO01BYk1lO0FBZU4sTUFBTUMscUJBQXFCLFVBQVk7SUFDckN4QixRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxPQUFPLE1BQU1DLE1BQU1SLGdCQUFnQkMsZ0JBQWdCO1FBQ3ZEUSxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLGlCQUFpQixZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFFcEQ7SUFDRjtJQUNBLE1BQU1DLFNBQVMsTUFBTU4sS0FBS08sSUFBSTtJQUM5QixPQUFPRDtBQUNUO01BYk1nQjtBQWVOLCtEQUFlZCxtQkFBbUJBLEVBQUE7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9oZWxwZXJzL1N0dWRlbnRGdW5jdGlvbnMuanM/ZjcxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNvbnN0IHNlcnZlckFkZHJlc3MgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xyXG5jb25zdCBDb3Vyc2VMaXN0UGF0aCA9IFwiL2FwcGx5L1wiO1xyXG5jb25zdCBBTGxDb3Vyc2VMaXN0UGF0aCA9IFwiL2NvdXJzZS9cIjtcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBHZXRDb3Vyc2VzU3R1ZGVudCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImluIGdldFwiKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChzZXJ2ZXJBZGRyZXNzICsgQ291cnNlTGlzdFBhdGgsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIC8vYWRkIGF1dGhlbnRpY2F0aW9uIHRva2VuXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXHJcblxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5jb25zdCBDaGFuZ2VTdGF0dXNTdHVkZW50ID0gYXN5bmMgKGFjdGlvbiwgaWQpID0+IHtcclxuICAvLyBhbGVydChhY3Rpb24pO1xyXG4gIC8vIGFsZXJ0KFwiaGkyXCIpXHJcbiAgLy8gY29uc29sZS5sb2coXCJpbiBjaGFuZ2UgY2FsbGVkIGJ5OiBcIitDaGFuZ2VTdGF0dXNTdHVkZW50LmNhbGxlcilcclxuXHJcbiAgbGV0IGNvdXJzZVN0YXR1cyA9IDRcclxuICBpZiAoYWN0aW9uID09PSBcIldpdGhkcmF3XCIpIHtcclxuICAgIGNvdXJzZVN0YXR1cyA9IDM7XHJcbiAgfVxyXG4gIC8vIGFsZXJ0KCdoYWkxJylcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goc2VydmVyQWRkcmVzcyArJy9hcHBseS8nICsgaWQrXCIvXCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInN0YXR1c1wiOiBjb3Vyc2VTdGF0dXMgfSksXHJcbiAgfSk7XHJcbiAgLy8gYWxlcnQoJ2hhaTInKVxyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgLy8gYWxlcnQoJ2hhaTMnKVxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIC8vIGFsZXJ0KCdoYWk0JylcclxuXHJcbiAgYWxlcnQocmVzdWx0LnN0YXR1cylcclxuICAvLyByZWxvYWQgcGFnZVxyXG4gIFJvdXRlci5yZWxvYWQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG5cclxuICAvLyBpZiAocmVzdWx0LmVycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAvLyAgIGlmIChhY3Rpb24gPT09IFwiUmVqZWN0XCIpe1xyXG4gIC8vICAgICBhbGVydChcIkFwcGxpY2F0aW9uIHJlamVjdGVkXCIpXHJcbiAgLy8gICB9XHJcbiAgLy8gICBlbHNle1xyXG4gIC8vICAgICBhbGVydChcIkFwcGxpY2F0aW9uIGFwcHJvdmVkXCIpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIGVsc2Uge1xyXG4gIC8vICAgYWxlcnQocmVzdWx0LmVycm9yKVxyXG4gIC8vIH1cclxufVxyXG5cclxuY29uc3QgQWxsQ291cnNlc1N0dWRlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJpbiBnZXRcIilcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goc2VydmVyQWRkcmVzcyArIEFMbENvdXJzZUxpc3RQYXRoLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAvL2FkZCBhdXRoZW50aWNhdGlvbiB0b2tlblxyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxyXG5cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuY29uc3QgQXBwbHlDb3Vyc2VTdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gZ2V0XCIpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHNlcnZlckFkZHJlc3MgKyBDb3Vyc2VMaXN0UGF0aCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgLy9hZGQgYXV0aGVudGljYXRpb24gdG9rZW5cclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcclxuXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5nZVN0YXR1c1N0dWRlbnRcclxuZXhwb3J0IHtHZXRDb3Vyc2VzU3R1ZGVudCxBbGxDb3Vyc2VzU3R1ZGVudH0iXSwibmFtZXMiOlsiUmVhY3QiLCJzZXJ2ZXJBZGRyZXNzIiwiQ291cnNlTGlzdFBhdGgiLCJBTGxDb3Vyc2VMaXN0UGF0aCIsIlJvdXRlciIsIkdldENvdXJzZXNTdHVkZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzdWx0IiwianNvbiIsIkNoYW5nZVN0YXR1c1N0dWRlbnQiLCJhY3Rpb24iLCJpZCIsImNvdXJzZVN0YXR1cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJzdGF0dXMiLCJyZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiQWxsQ291cnNlc1N0dWRlbnQiLCJBcHBseUNvdXJzZVN0dWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/StudentFunctions.js\n"));

/***/ })

});