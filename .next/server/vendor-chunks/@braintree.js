"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@braintree";
exports.ids = ["vendor-chunks/@braintree"];
exports.modules = {

/***/ "(ssr)/./node_modules/@braintree/sanitize-url/dist/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/@braintree/sanitize-url/dist/constants.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BLANK_URL = exports.relativeFirstCharacters = exports.whitespaceEscapeCharsRegex = exports.urlSchemeRegex = exports.ctrlCharactersRegex = exports.htmlCtrlEntityRegex = exports.htmlEntitiesRegex = exports.invalidProtocolRegex = void 0;\nexports.invalidProtocolRegex = /^([^\\w]*)(javascript|data|vbscript)/im;\nexports.htmlEntitiesRegex = /&#(\\w+)(^\\w|;)?/g;\nexports.htmlCtrlEntityRegex = /&(newline|tab);/gi;\nexports.ctrlCharactersRegex = /[\\u0000-\\u001F\\u007F-\\u009F\\u2000-\\u200D\\uFEFF]/gim;\nexports.urlSchemeRegex = /^.+(:|&colon;)/gim;\nexports.whitespaceEscapeCharsRegex = /(\\\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;\nexports.relativeFirstCharacters = [\".\", \"/\"];\nexports.BLANK_URL = \"about:blank\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGJyYWludHJlZS9zYW5pdGl6ZS11cmwvZGlzdC9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcsK0JBQStCLEdBQUcsa0NBQWtDLEdBQUcsc0JBQXNCLEdBQUcsMkJBQTJCLEdBQUcsMkJBQTJCLEdBQUcseUJBQXlCLEdBQUcsNEJBQTRCO0FBQ3hPLDRCQUE0QjtBQUM1Qix5QkFBeUIsaUJBQWlCO0FBQzFDLDJCQUEyQixtQkFBbUI7QUFDOUMsMkJBQTJCO0FBQzNCLHNCQUFzQixpQkFBaUI7QUFDdkMsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWJpeC1kb2N1bWVudHMvLi9ub2RlX21vZHVsZXMvQGJyYWludHJlZS9zYW5pdGl6ZS11cmwvZGlzdC9jb25zdGFudHMuanM/ZjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQkxBTktfVVJMID0gZXhwb3J0cy5yZWxhdGl2ZUZpcnN0Q2hhcmFjdGVycyA9IGV4cG9ydHMud2hpdGVzcGFjZUVzY2FwZUNoYXJzUmVnZXggPSBleHBvcnRzLnVybFNjaGVtZVJlZ2V4ID0gZXhwb3J0cy5jdHJsQ2hhcmFjdGVyc1JlZ2V4ID0gZXhwb3J0cy5odG1sQ3RybEVudGl0eVJlZ2V4ID0gZXhwb3J0cy5odG1sRW50aXRpZXNSZWdleCA9IGV4cG9ydHMuaW52YWxpZFByb3RvY29sUmVnZXggPSB2b2lkIDA7XG5leHBvcnRzLmludmFsaWRQcm90b2NvbFJlZ2V4ID0gL14oW15cXHddKikoamF2YXNjcmlwdHxkYXRhfHZic2NyaXB0KS9pbTtcbmV4cG9ydHMuaHRtbEVudGl0aWVzUmVnZXggPSAvJiMoXFx3KykoXlxcd3w7KT8vZztcbmV4cG9ydHMuaHRtbEN0cmxFbnRpdHlSZWdleCA9IC8mKG5ld2xpbmV8dGFiKTsvZ2k7XG5leHBvcnRzLmN0cmxDaGFyYWN0ZXJzUmVnZXggPSAvW1xcdTAwMDAtXFx1MDAxRlxcdTAwN0YtXFx1MDA5RlxcdTIwMDAtXFx1MjAwRFxcdUZFRkZdL2dpbTtcbmV4cG9ydHMudXJsU2NoZW1lUmVnZXggPSAvXi4rKDp8JmNvbG9uOykvZ2ltO1xuZXhwb3J0cy53aGl0ZXNwYWNlRXNjYXBlQ2hhcnNSZWdleCA9IC8oXFxcXHwlNVtjQ10pKCglKDZbZUVdfDcyfDc0KSl8W25ydF0pL2c7XG5leHBvcnRzLnJlbGF0aXZlRmlyc3RDaGFyYWN0ZXJzID0gW1wiLlwiLCBcIi9cIl07XG5leHBvcnRzLkJMQU5LX1VSTCA9IFwiYWJvdXQ6YmxhbmtcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@braintree/sanitize-url/dist/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@braintree/sanitize-url/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@braintree/sanitize-url/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sanitizeUrl = void 0;\nvar constants_1 = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/@braintree/sanitize-url/dist/constants.js\");\nfunction isRelativeUrlWithoutProtocol(url) {\n    return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;\n}\nfunction decodeHtmlCharacters(str) {\n    var removedNullByte = str.replace(constants_1.ctrlCharactersRegex, \"\");\n    return removedNullByte.replace(constants_1.htmlEntitiesRegex, function (match, dec) {\n        return String.fromCharCode(dec);\n    });\n}\nfunction isValidUrl(url) {\n    return URL.canParse(url);\n}\nfunction decodeURI(uri) {\n    try {\n        return decodeURIComponent(uri);\n    }\n    catch (e) {\n        // Ignoring error\n        // It is possible that the URI contains a `%` not associated\n        // with URI/URL-encoding.\n        return uri;\n    }\n}\nfunction sanitizeUrl(url) {\n    if (!url) {\n        return constants_1.BLANK_URL;\n    }\n    var charsToDecode;\n    var decodedUrl = decodeURI(url.trim());\n    do {\n        decodedUrl = decodeHtmlCharacters(decodedUrl)\n            .replace(constants_1.htmlCtrlEntityRegex, \"\")\n            .replace(constants_1.ctrlCharactersRegex, \"\")\n            .replace(constants_1.whitespaceEscapeCharsRegex, \"\")\n            .trim();\n        decodedUrl = decodeURI(decodedUrl);\n        charsToDecode =\n            decodedUrl.match(constants_1.ctrlCharactersRegex) ||\n                decodedUrl.match(constants_1.htmlEntitiesRegex) ||\n                decodedUrl.match(constants_1.htmlCtrlEntityRegex) ||\n                decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);\n    } while (charsToDecode && charsToDecode.length > 0);\n    var sanitizedUrl = decodedUrl;\n    if (!sanitizedUrl) {\n        return constants_1.BLANK_URL;\n    }\n    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {\n        return sanitizedUrl;\n    }\n    // Remove any leading whitespace before checking the URL scheme\n    var trimmedUrl = sanitizedUrl.trimStart();\n    var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);\n    if (!urlSchemeParseResults) {\n        return sanitizedUrl;\n    }\n    var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();\n    if (constants_1.invalidProtocolRegex.test(urlScheme)) {\n        return constants_1.BLANK_URL;\n    }\n    var backSanitized = trimmedUrl.replace(/\\\\/g, \"/\");\n    // Handle special cases for mailto: and custom deep-link protocols\n    if (urlScheme === \"mailto:\" || urlScheme.includes(\"://\")) {\n        return backSanitized;\n    }\n    // For http and https URLs, perform additional validation\n    if (urlScheme === \"http:\" || urlScheme === \"https:\") {\n        if (!isValidUrl(backSanitized)) {\n            return constants_1.BLANK_URL;\n        }\n        var url_1 = new URL(backSanitized);\n        url_1.protocol = url_1.protocol.toLowerCase();\n        url_1.hostname = url_1.hostname.toLowerCase();\n        return url_1.toString();\n    }\n    return backSanitized;\n}\nexports.sanitizeUrl = sanitizeUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGJyYWludHJlZS9zYW5pdGl6ZS11cmwvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsa0JBQWtCLG1CQUFPLENBQUMsbUZBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnViaXgtZG9jdW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BicmFpbnRyZWUvc2FuaXRpemUtdXJsL2Rpc3QvaW5kZXguanM/MjllNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2FuaXRpemVVcmwgPSB2b2lkIDA7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5mdW5jdGlvbiBpc1JlbGF0aXZlVXJsV2l0aG91dFByb3RvY29sKHVybCkge1xuICAgIHJldHVybiBjb25zdGFudHNfMS5yZWxhdGl2ZUZpcnN0Q2hhcmFjdGVycy5pbmRleE9mKHVybFswXSkgPiAtMTtcbn1cbmZ1bmN0aW9uIGRlY29kZUh0bWxDaGFyYWN0ZXJzKHN0cikge1xuICAgIHZhciByZW1vdmVkTnVsbEJ5dGUgPSBzdHIucmVwbGFjZShjb25zdGFudHNfMS5jdHJsQ2hhcmFjdGVyc1JlZ2V4LCBcIlwiKTtcbiAgICByZXR1cm4gcmVtb3ZlZE51bGxCeXRlLnJlcGxhY2UoY29uc3RhbnRzXzEuaHRtbEVudGl0aWVzUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgZGVjKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlYyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkVXJsKHVybCkge1xuICAgIHJldHVybiBVUkwuY2FuUGFyc2UodXJsKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVVSSSh1cmkpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHVyaSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElnbm9yaW5nIGVycm9yXG4gICAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgdGhlIFVSSSBjb250YWlucyBhIGAlYCBub3QgYXNzb2NpYXRlZFxuICAgICAgICAvLyB3aXRoIFVSSS9VUkwtZW5jb2RpbmcuXG4gICAgICAgIHJldHVybiB1cmk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2FuaXRpemVVcmwodXJsKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0YW50c18xLkJMQU5LX1VSTDtcbiAgICB9XG4gICAgdmFyIGNoYXJzVG9EZWNvZGU7XG4gICAgdmFyIGRlY29kZWRVcmwgPSBkZWNvZGVVUkkodXJsLnRyaW0oKSk7XG4gICAgZG8ge1xuICAgICAgICBkZWNvZGVkVXJsID0gZGVjb2RlSHRtbENoYXJhY3RlcnMoZGVjb2RlZFVybClcbiAgICAgICAgICAgIC5yZXBsYWNlKGNvbnN0YW50c18xLmh0bWxDdHJsRW50aXR5UmVnZXgsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShjb25zdGFudHNfMS5jdHJsQ2hhcmFjdGVyc1JlZ2V4LCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoY29uc3RhbnRzXzEud2hpdGVzcGFjZUVzY2FwZUNoYXJzUmVnZXgsIFwiXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBkZWNvZGVkVXJsID0gZGVjb2RlVVJJKGRlY29kZWRVcmwpO1xuICAgICAgICBjaGFyc1RvRGVjb2RlID1cbiAgICAgICAgICAgIGRlY29kZWRVcmwubWF0Y2goY29uc3RhbnRzXzEuY3RybENoYXJhY3RlcnNSZWdleCkgfHxcbiAgICAgICAgICAgICAgICBkZWNvZGVkVXJsLm1hdGNoKGNvbnN0YW50c18xLmh0bWxFbnRpdGllc1JlZ2V4KSB8fFxuICAgICAgICAgICAgICAgIGRlY29kZWRVcmwubWF0Y2goY29uc3RhbnRzXzEuaHRtbEN0cmxFbnRpdHlSZWdleCkgfHxcbiAgICAgICAgICAgICAgICBkZWNvZGVkVXJsLm1hdGNoKGNvbnN0YW50c18xLndoaXRlc3BhY2VFc2NhcGVDaGFyc1JlZ2V4KTtcbiAgICB9IHdoaWxlIChjaGFyc1RvRGVjb2RlICYmIGNoYXJzVG9EZWNvZGUubGVuZ3RoID4gMCk7XG4gICAgdmFyIHNhbml0aXplZFVybCA9IGRlY29kZWRVcmw7XG4gICAgaWYgKCFzYW5pdGl6ZWRVcmwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0YW50c18xLkJMQU5LX1VSTDtcbiAgICB9XG4gICAgaWYgKGlzUmVsYXRpdmVVcmxXaXRob3V0UHJvdG9jb2woc2FuaXRpemVkVXJsKSkge1xuICAgICAgICByZXR1cm4gc2FuaXRpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYW55IGxlYWRpbmcgd2hpdGVzcGFjZSBiZWZvcmUgY2hlY2tpbmcgdGhlIFVSTCBzY2hlbWVcbiAgICB2YXIgdHJpbW1lZFVybCA9IHNhbml0aXplZFVybC50cmltU3RhcnQoKTtcbiAgICB2YXIgdXJsU2NoZW1lUGFyc2VSZXN1bHRzID0gdHJpbW1lZFVybC5tYXRjaChjb25zdGFudHNfMS51cmxTY2hlbWVSZWdleCk7XG4gICAgaWYgKCF1cmxTY2hlbWVQYXJzZVJlc3VsdHMpIHtcbiAgICAgICAgcmV0dXJuIHNhbml0aXplZFVybDtcbiAgICB9XG4gICAgdmFyIHVybFNjaGVtZSA9IHVybFNjaGVtZVBhcnNlUmVzdWx0c1swXS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBpZiAoY29uc3RhbnRzXzEuaW52YWxpZFByb3RvY29sUmVnZXgudGVzdCh1cmxTY2hlbWUpKSB7XG4gICAgICAgIHJldHVybiBjb25zdGFudHNfMS5CTEFOS19VUkw7XG4gICAgfVxuICAgIHZhciBiYWNrU2FuaXRpemVkID0gdHJpbW1lZFVybC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlcyBmb3IgbWFpbHRvOiBhbmQgY3VzdG9tIGRlZXAtbGluayBwcm90b2NvbHNcbiAgICBpZiAodXJsU2NoZW1lID09PSBcIm1haWx0bzpcIiB8fCB1cmxTY2hlbWUuaW5jbHVkZXMoXCI6Ly9cIikpIHtcbiAgICAgICAgcmV0dXJuIGJhY2tTYW5pdGl6ZWQ7XG4gICAgfVxuICAgIC8vIEZvciBodHRwIGFuZCBodHRwcyBVUkxzLCBwZXJmb3JtIGFkZGl0aW9uYWwgdmFsaWRhdGlvblxuICAgIGlmICh1cmxTY2hlbWUgPT09IFwiaHR0cDpcIiB8fCB1cmxTY2hlbWUgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkVXJsKGJhY2tTYW5pdGl6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzXzEuQkxBTktfVVJMO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cmxfMSA9IG5ldyBVUkwoYmFja1Nhbml0aXplZCk7XG4gICAgICAgIHVybF8xLnByb3RvY29sID0gdXJsXzEucHJvdG9jb2wudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdXJsXzEuaG9zdG5hbWUgPSB1cmxfMS5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdXJsXzEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhY2tTYW5pdGl6ZWQ7XG59XG5leHBvcnRzLnNhbml0aXplVXJsID0gc2FuaXRpemVVcmw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@braintree/sanitize-url/dist/index.js\n");

/***/ })

};
;