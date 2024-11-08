"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-html-isomorphic";
exports.ids = ["vendor-chunks/hast-util-from-html-isomorphic"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-from-html-isomorphic/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/hast-util-from-html-isomorphic/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHtmlIsomorphic: () => (/* binding */ fromHtmlIsomorphic)\n/* harmony export */ });\n/* harmony import */ var hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-from-html */ \"(rsc)/./node_modules/hast-util-from-html/lib/index.js\");\n/* harmony import */ var unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-remove-position */ \"(rsc)/./node_modules/unist-util-remove-position/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n *\n * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options\n */\n\n\n\n\n/**\n * Turn HTML into a syntax tree, using browser APIs when available, so it has\n * a smaller bundle size there.\n *\n * @param {string} value\n *   Serialized HTML to parse.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Root}\n *   Tree.\n */\nfunction fromHtmlIsomorphic(value, options) {\n  const tree = (0,hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__.fromHtml)(value, options)\n  ;(0,unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__.removePosition)(tree, {force: true})\n  delete tree.data\n  return tree\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEU7O0FBRTRDO0FBQ2E7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsZUFBZSw2REFBUTtBQUN2QixFQUFFLDJFQUFjLFFBQVEsWUFBWTtBQUNwQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWJpeC1kb2N1bWVudHMvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljL2xpYi9pbmRleC5qcz8zMTRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqXG4gKiBAdHlwZWRlZiB7UGljazxpbXBvcnQoJ2hhc3QtdXRpbC1mcm9tLWh0bWwnKS5PcHRpb25zLCAnZnJhZ21lbnQnPn0gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7ZnJvbUh0bWx9IGZyb20gJ2hhc3QtdXRpbC1mcm9tLWh0bWwnXG5pbXBvcnQge3JlbW92ZVBvc2l0aW9ufSBmcm9tICd1bmlzdC11dGlsLXJlbW92ZS1wb3NpdGlvbidcblxuLyoqXG4gKiBUdXJuIEhUTUwgaW50byBhIHN5bnRheCB0cmVlLCB1c2luZyBicm93c2VyIEFQSXMgd2hlbiBhdmFpbGFibGUsIHNvIGl0IGhhc1xuICogYSBzbWFsbGVyIGJ1bmRsZSBzaXplIHRoZXJlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBTZXJpYWxpemVkIEhUTUwgdG8gcGFyc2UuXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge1Jvb3R9XG4gKiAgIFRyZWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSHRtbElzb21vcnBoaWModmFsdWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgdHJlZSA9IGZyb21IdG1sKHZhbHVlLCBvcHRpb25zKVxuICByZW1vdmVQb3NpdGlvbih0cmVlLCB7Zm9yY2U6IHRydWV9KVxuICBkZWxldGUgdHJlZS5kYXRhXG4gIHJldHVybiB0cmVlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-from-html-isomorphic/lib/index.js\n");

/***/ })

};
;