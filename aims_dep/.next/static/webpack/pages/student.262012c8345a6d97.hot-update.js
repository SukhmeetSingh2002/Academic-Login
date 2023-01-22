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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllCoursesStudent\": function() { return /* binding */ AllCoursesStudent; },\n/* harmony export */   \"ApplyCourseStudent\": function() { return /* binding */ ApplyCourseStudent; },\n/* harmony export */   \"GetCoursesStudent\": function() { return /* binding */ GetCoursesStudent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nconst serverAddress = \"http://localhost:8000\";\nconst CourseListPath = \"/apply/\";\nconst ALlCourseListPath = \"/course/\";\nconst RegisterCoursePath = \"create/\";\n\nconst GetCoursesStudent = async ()=>{\n    console.log(\"in get\");\n    const data = await fetch(serverAddress + CourseListPath, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        }\n    });\n    const result = await data.json();\n    return result;\n};\n_c = GetCoursesStudent;\nconst ChangeStatusStudent = async (action, id)=>{\n    // alert(action);\n    // alert(\"hi2\")\n    // console.log(\"in change called by: \"+ChangeStatusStudent.caller)\n    let courseStatus = 4;\n    if (action === \"Withdraw\") {\n        courseStatus = 3;\n    }\n    // alert('hai1')\n    const data = await fetch(serverAddress + \"/apply/\" + id + \"/\", {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        },\n        body: JSON.stringify({\n            \"status\": courseStatus\n        })\n    });\n    // alert('hai2')\n    console.log(data);\n    // alert('hai3')\n    const result = await data.json();\n    // alert('hai4')\n    alert(result.status);\n    // reload page\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().reload(window.location.pathname);\n// if (result.error === undefined) {\n//   if (action === \"Reject\"){\n//     alert(\"Application rejected\")\n//   }\n//   else{\n//     alert(\"Application approved\")\n//   }\n// }\n// else {\n//   alert(result.error)\n// }\n};\n_c1 = ChangeStatusStudent;\nconst AllCoursesStudent = async ()=>{\n    // console.log(\"in get\")\n    const data = await fetch(serverAddress + ALlCourseListPath, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        }\n    });\n    const result = await data.json();\n    return result;\n};\n_c2 = AllCoursesStudent;\nconst ApplyCourseStudent = async (id)=>{\n    console.log(\"in course apply\");\n    const data = await fetch(serverAddress + CourseListPath + RegisterCoursePath, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            //add authentication token\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n        },\n        body: JSON.stringify({\n            \"course\": id\n        })\n    });\n    const result = await data.json();\n    if (data.status === 201) {\n        alert(\"Course applied\");\n    }\n};\n_c3 = ApplyCourseStudent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeStatusStudent);\n\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"GetCoursesStudent\");\n$RefreshReg$(_c1, \"ChangeStatusStudent\");\n$RefreshReg$(_c2, \"AllCoursesStudent\");\n$RefreshReg$(_c3, \"ApplyCourseStudent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL1N0dWRlbnRGdW5jdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUN6QixNQUFNQyxnQkFBZ0I7QUFDdEIsTUFBTUMsaUJBQWlCO0FBQ3ZCLE1BQU1DLG9CQUFvQjtBQUMxQixNQUFNQyxxQkFBcUI7QUFDSztBQUVoQyxNQUFNRSxvQkFBb0IsVUFBWTtJQUNwQ0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsT0FBTyxNQUFNQyxNQUFNVCxnQkFBZ0JDLGdCQUFnQjtRQUN2RFMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQixpQkFBaUIsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBRXBEO0lBQ0Y7SUFDQSxNQUFNQyxTQUFTLE1BQU1OLEtBQUtPLElBQUk7SUFDOUIsT0FBT0Q7QUFDVDtLQWJNVDtBQWVOLE1BQU1XLHNCQUFzQixPQUFPQyxRQUFRQyxLQUFPO0lBQ2hELGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0VBQWtFO0lBRWxFLElBQUlDLGVBQWU7SUFDbkIsSUFBSUYsV0FBVyxZQUFZO1FBQ3pCRSxlQUFlO0lBQ2pCLENBQUM7SUFDRCxnQkFBZ0I7SUFDaEIsTUFBTVgsT0FBTyxNQUFNQyxNQUFNVCxnQkFBZSxZQUFZa0IsS0FBRyxLQUFLO1FBQzFEUixRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsaUJBQWlCLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUNwRDtRQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRSxVQUFVSDtRQUFhO0lBQ2hEO0lBQ0EsZ0JBQWdCO0lBQ2hCYixRQUFRQyxHQUFHLENBQUNDO0lBQ1osZ0JBQWdCO0lBQ2hCLE1BQU1NLFNBQVMsTUFBTU4sS0FBS08sSUFBSTtJQUM5QixnQkFBZ0I7SUFFaEJRLE1BQU1ULE9BQU9VLE1BQU07SUFDbkIsY0FBYztJQUNkcEIseURBQWEsQ0FBQ3NCLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtBQUV0QyxvQ0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLG9DQUFvQztBQUNwQyxNQUFNO0FBQ04sVUFBVTtBQUNWLG9DQUFvQztBQUNwQyxNQUFNO0FBQ04sSUFBSTtBQUNKLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIsSUFBSTtBQUNOO01BdkNNWjtBQXlDTixNQUFNYSxvQkFBb0IsVUFBWTtJQUNwQyx3QkFBd0I7SUFDeEIsTUFBTXJCLE9BQU8sTUFBTUMsTUFBTVQsZ0JBQWdCRSxtQkFBbUI7UUFDMURRLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQiwwQkFBMEI7WUFDMUIsaUJBQWlCLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUVwRDtJQUNGO0lBQ0EsTUFBTUMsU0FBUyxNQUFNTixLQUFLTyxJQUFJO0lBQzlCLE9BQU9EO0FBQ1Q7TUFiTWU7QUFlTixNQUFNQyxxQkFBcUIsT0FBT1osS0FBTztJQUN2Q1osUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsT0FBTyxNQUFNQyxNQUFNVCxnQkFBZ0JDLGlCQUFpQkUsb0JBQW9CO1FBQzVFTyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLGlCQUFpQixZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFFcEQ7UUFDQU8sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUUsVUFBVUo7UUFBRztJQUN0QztJQUNBLE1BQU1KLFNBQVMsTUFBTU4sS0FBS08sSUFBSTtJQUM5QixJQUFJUCxLQUFLZ0IsTUFBTSxLQUFLLEtBQUk7UUFDdEJELE1BQU07SUFDUixDQUFDO0FBQ0g7TUFoQk1PO0FBa0JOLCtEQUFlZCxtQkFBbUJBLEVBQUE7QUFDNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9TdHVkZW50RnVuY3Rpb25zLmpzP2Y3MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBzZXJ2ZXJBZGRyZXNzID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcclxuY29uc3QgQ291cnNlTGlzdFBhdGggPSBcIi9hcHBseS9cIjtcclxuY29uc3QgQUxsQ291cnNlTGlzdFBhdGggPSBcIi9jb3Vyc2UvXCI7XHJcbmNvbnN0IFJlZ2lzdGVyQ291cnNlUGF0aCA9IFwiY3JlYXRlL1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgR2V0Q291cnNlc1N0dWRlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBnZXRcIilcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goc2VydmVyQWRkcmVzcyArIENvdXJzZUxpc3RQYXRoLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAvL2FkZCBhdXRoZW50aWNhdGlvbiB0b2tlblxyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxyXG5cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuY29uc3QgQ2hhbmdlU3RhdHVzU3R1ZGVudCA9IGFzeW5jIChhY3Rpb24sIGlkKSA9PiB7XHJcbiAgLy8gYWxlcnQoYWN0aW9uKTtcclxuICAvLyBhbGVydChcImhpMlwiKVxyXG4gIC8vIGNvbnNvbGUubG9nKFwiaW4gY2hhbmdlIGNhbGxlZCBieTogXCIrQ2hhbmdlU3RhdHVzU3R1ZGVudC5jYWxsZXIpXHJcblxyXG4gIGxldCBjb3Vyc2VTdGF0dXMgPSA0XHJcbiAgaWYgKGFjdGlvbiA9PT0gXCJXaXRoZHJhd1wiKSB7XHJcbiAgICBjb3Vyc2VTdGF0dXMgPSAzO1xyXG4gIH1cclxuICAvLyBhbGVydCgnaGFpMScpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHNlcnZlckFkZHJlc3MgKycvYXBwbHkvJyArIGlkK1wiL1wiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJzdGF0dXNcIjogY291cnNlU3RhdHVzIH0pLFxyXG4gIH0pO1xyXG4gIC8vIGFsZXJ0KCdoYWkyJylcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIC8vIGFsZXJ0KCdoYWkzJylcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAvLyBhbGVydCgnaGFpNCcpXHJcblxyXG4gIGFsZXJ0KHJlc3VsdC5zdGF0dXMpXHJcbiAgLy8gcmVsb2FkIHBhZ2VcclxuICBSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuXHJcbiAgLy8gaWYgKHJlc3VsdC5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgLy8gICBpZiAoYWN0aW9uID09PSBcIlJlamVjdFwiKXtcclxuICAvLyAgICAgYWxlcnQoXCJBcHBsaWNhdGlvbiByZWplY3RlZFwiKVxyXG4gIC8vICAgfVxyXG4gIC8vICAgZWxzZXtcclxuICAvLyAgICAgYWxlcnQoXCJBcHBsaWNhdGlvbiBhcHByb3ZlZFwiKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBlbHNlIHtcclxuICAvLyAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAvLyB9XHJcbn1cclxuXHJcbmNvbnN0IEFsbENvdXJzZXNTdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiaW4gZ2V0XCIpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHNlcnZlckFkZHJlc3MgKyBBTGxDb3Vyc2VMaXN0UGF0aCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgLy9hZGQgYXV0aGVudGljYXRpb24gdG9rZW5cclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcclxuXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmNvbnN0IEFwcGx5Q291cnNlU3R1ZGVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gY291cnNlIGFwcGx5XCIpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHNlcnZlckFkZHJlc3MgKyBDb3Vyc2VMaXN0UGF0aCArIFJlZ2lzdGVyQ291cnNlUGF0aCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIC8vYWRkIGF1dGhlbnRpY2F0aW9uIHRva2VuXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXHJcblxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJjb3Vyc2VcIjogaWQgfSksXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgaWYoIGRhdGEuc3RhdHVzID09PSAyMDEpe1xyXG4gICAgYWxlcnQoXCJDb3Vyc2UgYXBwbGllZFwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlU3RhdHVzU3R1ZGVudFxyXG5leHBvcnQge0dldENvdXJzZXNTdHVkZW50LEFsbENvdXJzZXNTdHVkZW50LEFwcGx5Q291cnNlU3R1ZGVudH0iXSwibmFtZXMiOlsiUmVhY3QiLCJzZXJ2ZXJBZGRyZXNzIiwiQ291cnNlTGlzdFBhdGgiLCJBTGxDb3Vyc2VMaXN0UGF0aCIsIlJlZ2lzdGVyQ291cnNlUGF0aCIsIlJvdXRlciIsIkdldENvdXJzZXNTdHVkZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzdWx0IiwianNvbiIsIkNoYW5nZVN0YXR1c1N0dWRlbnQiLCJhY3Rpb24iLCJpZCIsImNvdXJzZVN0YXR1cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJzdGF0dXMiLCJyZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiQWxsQ291cnNlc1N0dWRlbnQiLCJBcHBseUNvdXJzZVN0dWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/StudentFunctions.js\n"));

/***/ })

});