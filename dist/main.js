/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    padding: 0;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n#logo-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-grow: 2;\\n    font-size: 2rem;\\n    font-weight: 700;\\n}\\n\\n#container {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 5;\\n    align-items: center;\\n}\\n\\n#content {\\n    display: flex;\\n    justify-content: center;\\n    gap: 4rem;\\n    height: 55%;\\n    width: 100%;\\n}\\n\\n.box {\\n    height: 20rem;\\n    width: 20rem;\\n    border: 2px solid black;\\n    display: flex;\\n    flex-flow: row wrap;\\n}\\n\\n.tile {\\n    height: 2.8571rem;\\n    width: 2.8571rem;\\n    border: 1px solid black;\\n    box-sizing: border-box;\\n}\\n\\nbutton {\\n    margin: 1rem;\\n    width: 5rem;\\n}\\n\\n#container > div:last-child {\\n    margin-top: .5rem;\\n    font-size: .75rem;\\n    color: rgb(106, 104, 104);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleships/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleships/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ship.js */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/board.js */ \"./src/modules/board.js\");\n/* harmony import */ var _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/computer.js */ \"./src/modules/computer.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/index.js?");

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerBoard\": () => (/* binding */ computerBoard),\n/* harmony export */   \"computerTestBoard\": () => (/* binding */ computerTestBoard),\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard),\n/* harmony export */   \"loadState\": () => (/* binding */ loadState),\n/* harmony export */   \"loadStateComputer\": () => (/* binding */ loadStateComputer),\n/* harmony export */   \"recieveAttack\": () => (/* binding */ recieveAttack),\n/* harmony export */   \"recieveAttackComputer\": () => (/* binding */ recieveAttackComputer),\n/* harmony export */   \"resetBoards\": () => (/* binding */ resetBoards),\n/* harmony export */   \"saveState\": () => (/* binding */ saveState),\n/* harmony export */   \"saveStateComputer\": () => (/* binding */ saveStateComputer),\n/* harmony export */   \"testBoard\": () => (/* binding */ testBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nlet boardOriginal = [['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', ''],\n                ['', '', '', '', '', '', '']];\n\nlet gameBoard = structuredClone(boardOriginal);\n\nlet testBoard = structuredClone(boardOriginal);\n\nlet computerBoard = structuredClone(boardOriginal);\n\nlet computerTestBoard = structuredClone(boardOriginal);\n\nfunction saveState() {\n    gameBoard = structuredClone(testBoard);\n}\n\nfunction loadState() {\n    testBoard = structuredClone(gameBoard);\n}\n\nfunction saveStateComputer() {\n    computerBoard = structuredClone(computerTestBoard);\n}\n\nfunction loadStateComputer() {\n    computerTestBoard = structuredClone(computerBoard);\n}\n\nfunction resetBoards() {\n    gameBoard = structuredClone(boardOriginal);\n    testBoard = structuredClone(boardOriginal);\n    computerBoard = structuredClone(boardOriginal);\n    computerTestBoard = structuredClone(boardOriginal);\n}\n\nfunction recieveAttack(y, x) {\n    if (gameBoard[y][x] === 'X') {\n        console.log('attack rejected');\n        return;\n    }\n    if (gameBoard[y][x] != '') {\n        _ship__WEBPACK_IMPORTED_MODULE_0__.playerShips.forEach(item => {\n            if (gameBoard[y][x] === item.name) {\n                item.hit();\n                gameBoard[y][x] = 'X';\n            }\n        });\n    } else {\n        gameBoard[y][x] = 'X';\n    }\n    loadState();\n}\n\nfunction recieveAttackComputer(y, x) {\n    if (computerBoard[y][x] === 'X') {\n        console.log('attack rejected');\n        return;\n    }\n    if (computerBoard[y][x] != '') {\n        _ship__WEBPACK_IMPORTED_MODULE_0__.computerShips.forEach(item => {\n            if (computerBoard[y][x] === item.name) {\n                item.hit();\n                computerBoard[y][x] = 'X';\n            }\n        });\n    } else {\n        computerBoard[y][x] = 'X';\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/board.js?");

/***/ }),

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiPlaceAll\": () => (/* binding */ aiPlaceAll)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nfunction aiPlaceAll() {\n    for (let i = 0; i < _ship__WEBPACK_IMPORTED_MODULE_0__.computerShips.length; i++) {\n        let x = Math.random();\n        (x >= .5) ? _ship__WEBPACK_IMPORTED_MODULE_0__.computerShips[i].aiRandomPlace() : _ship__WEBPACK_IMPORTED_MODULE_0__.computerShips[i].aiRandomPlaceVertical();\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/computer.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/modules/board.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/modules/game.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ \"./src/modules/logic.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\n\nconst button = document.querySelector('#start');\nlet placeState = false;\n\nbutton.addEventListener('click', () => {\n    if (_game_js__WEBPACK_IMPORTED_MODULE_1__.gameState === false) {\n        _game_js__WEBPACK_IMPORTED_MODULE_1__.initGame();\n        placeState = 'c';\n        button.textContent = 'Cancel?';\n    } else if (_game_js__WEBPACK_IMPORTED_MODULE_1__.gameState === true) {\n        button.textContent = 'Start?';\n        displayArray = [];\n        _game_js__WEBPACK_IMPORTED_MODULE_1__.endGame();\n        placeState = true;\n        handleMouseOut();\n        placeState = false;\n    }\n});\n\nconst tiles = document.querySelectorAll('.player.tile');\nlet tilesArray = Array.from(tiles);\ntilesArray = _logic_js__WEBPACK_IMPORTED_MODULE_2__.listToMatrix(tilesArray, 7);\n\nlet currentTile\n\ntiles.forEach((tile, index) => {\n    let data = _logic_js__WEBPACK_IMPORTED_MODULE_2__.indexToArray(index);\n    tile.setAttribute('data-index', index);\n    tile.setAttribute('data-array', data[0] + ' ' + data[1]);\n    tile.addEventListener(\"click\", (tile) => {\n        handleClick(tile);\n    });\n    tile.addEventListener(\"mouseover\", (tile) => {\n        currentTile = tile;\n        handleMouseHover(tile);\n    });\n    tile.addEventListener(\"mouseout\", handleMouseOut);\n});\n\nlet displayArray = [];\n\nlet rotateState = false;\n\ndocument.addEventListener('keydown', (e) => {\n    let name = e.code;\n    if (name === \"KeyR\") {\n        rotateState = !rotateState;\n        handleMouseOut();\n        handleMouseHover(currentTile);\n    };\n});\n\nfunction handleMouseOut() {\n    if (placeState !== false) {\n        tiles.forEach((tile, index) => {\n            if (!displayArray.includes(index)) tile.style.backgroundColor = 'white';\n        });\n    }\n}\n\nfunction clickPlace(tile, data, n, colorValue) {\n    for (let i = 0; i < n; i++) {\n        let targetTile = tilesArray[parseInt(data[0])][parseInt(data[1])+i];\n        displayArray.push(parseInt(tile.target.dataset.index) + i);\n        targetTile.style.backgroundColor = colorValue;\n    }\n}\n\nfunction clickPlaceVertical(tile, data, n, colorValue) {\n    for (let i = 0; i < n; i++) {\n        let targetTile = tilesArray[parseInt(data[0])+i][parseInt(data[1])];\n        displayArray.push(parseInt(tile.target.dataset.index) + i*7);\n        targetTile.style.backgroundColor = colorValue;\n    }\n}\n\nfunction handleClick(tile) {\n    if (placeState === false) {\n\n    } else if (placeState === 'c' && rotateState === false) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[0].setPos(data[0], data[1])) {\n            clickPlace(tile, data, 5, 'hsl(4, 84%, 64%)')\n            placeState = 'b';\n        }\n    } else if (placeState === 'b' && rotateState === false) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[1].setPos(data[0], data[1])) {\n            clickPlace(tile, data, 4, 'hsl(177, 100%, 50%)');\n            placeState = 'd';\n        }\n    } else if (placeState === 'd' && rotateState === false) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[2].setPos(data[0], data[1])) {\n            clickPlace(tile, data, 3, 'hsl(40, 100%, 50%)');\n            placeState = 's';\n        }\n    } else if (placeState === 's' && rotateState === false) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[3].setPos(data[0], data[1])) {\n            clickPlace(tile, data, 3, 'hsl(241, 100%, 50%)');\n            placeState = 'p';\n        }\n    } else if (placeState === 'p' && rotateState === false) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[4].setPos(data[0], data[1])) {\n            clickPlace(tile, data, 2, 'hsl(122, 100%, 50%)');\n            placeState = false;\n        }\n    } else if (placeState === 'c' && rotateState === true) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[0].setPosVertical(data[0], data[1])) {\n            clickPlaceVertical(tile, data, 5, 'hsl(4, 84%, 64%)');\n            placeState = 'b';\n        }\n    } else if (placeState === 'b' && rotateState === true) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[1].setPosVertical(data[0], data[1])) {\n            clickPlaceVertical(tile, data, 4, 'hsl(177, 100%, 50%)');\n            placeState = 'd';\n        }\n    } else if (placeState === 'd' && rotateState === true) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[2].setPosVertical(data[0], data[1])) {\n            clickPlaceVertical(tile, data, 3, 'hsl(40, 100%, 50%)');\n            placeState = 's';\n        }\n    } else if (placeState === 's' && rotateState === true) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[3].setPosVertical(data[0], data[1])) {\n            clickPlaceVertical(tile, data, 3, 'hsl(241, 100%, 50%)');\n            placeState = 'p';\n        }\n    } else if (placeState === 'p' && rotateState === true) {\n        let data = tile.target.dataset.array.split(' ');\n        if (_ship__WEBPACK_IMPORTED_MODULE_3__.playerShips[4].setPosVertical(data[0], data[1])) {\n            clickPlaceVertical(tile, data, 2, 'hsl(122, 100%, 50%)');\n            placeState = false;\n            console.table(_board_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard);\n        }\n    }\n}\n\nfunction hoverAtCursor(index, data, n, colorValue) {\n    for (let i = 0; i < n; i++) {\n        if (!displayArray.includes(parseInt(index)+i) && tilesArray[parseInt(data[0])][parseInt(data[1])+i]) {\n            let tile = tilesArray[parseInt(data[0])][parseInt(data[1])+i];\n            tile.style.backgroundColor = colorValue;\n        }\n    }\n}\n\nfunction hoverAtCursorVertical(index, data, n, colorValue) {\n    for (let i = 0; i < n; i++) {\n        if (!displayArray.includes(parseInt(index) + i*7) && tilesArray[parseInt(data[0])+i]) {\n            let tile = tilesArray[parseInt(data[0])+i][parseInt(data[1])];\n            tile.style.backgroundColor = colorValue;\n        } else {\n            return;\n        }\n    }\n}\n\nfunction handleMouseHover(tile) {\n    if (placeState === false) {\n        //do nothing\n    } else if (placeState === 'c' && rotateState === false) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursor(index, data, 5, 'hsla(4, 84%, 64%, 0.62)');\n    } else if (placeState === 'b' && rotateState === false) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursor(index, data, 4, 'hsl(177, 100%, 77%)');\n    } else if (placeState === 'd' && rotateState === false) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursor(index, data, 3, 'hsl(40, 100%, 68%)');\n    } else if (placeState === 's' && rotateState === false) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursor(index, data, 3, 'hsl(241, 100%, 66%)');\n    } else if (placeState === 'p' && rotateState === false) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursor(index, data, 2, 'hsl(122, 100%, 76%)');\n    } else if (placeState === 'c' && rotateState === true) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursorVertical(index, data, 5, 'hsla(4, 84%, 64%, 0.62)');\n    } else if (placeState === 'b' && rotateState === true) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursorVertical(index, data, 4, 'hsl(177, 100%, 77%)');\n    } else if (placeState === 'd' && rotateState === true) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursorVertical(index, data, 3, 'hsl(40, 100%, 68%)');\n    } else if (placeState === 's' && rotateState === true) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursorVertical(index, data, 3, 'hsl(241, 100%, 66%)');\n    } else if (placeState === 'p' && rotateState === true) {\n        let index = tile.target.dataset.index;\n        let data = tile.target.dataset.array.split(' ');\n        hoverAtCursorVertical(index, data, 2, 'hsl(122, 100%, 76%)');\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decideWinner\": () => (/* binding */ decideWinner),\n/* harmony export */   \"endGame\": () => (/* binding */ endGame),\n/* harmony export */   \"gameState\": () => (/* binding */ gameState),\n/* harmony export */   \"initGame\": () => (/* binding */ initGame)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer.js */ \"./src/modules/computer.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.js */ \"./src/modules/board.js\");\n\n\n\n\n\nlet gameState = false;\n\nfunction initGame() {\n    gameState = true;\n    _ship__WEBPACK_IMPORTED_MODULE_0__.shipInit();\n    _computer_js__WEBPACK_IMPORTED_MODULE_1__.aiPlaceAll();\n}\n\nfunction endGame() {\n    gameState = false;\n    _ship__WEBPACK_IMPORTED_MODULE_0__.resetShips();\n    _board_js__WEBPACK_IMPORTED_MODULE_3__.resetBoards();\n}\n\nfunction decideWinner() {\n    if (_ship__WEBPACK_IMPORTED_MODULE_0__.playerShips.every(item => item.alive === false)) {\n        console.log('player dead');\n    } else if (_ship__WEBPACK_IMPORTED_MODULE_0__.computerShips.every(item => item.alive === false)){\n        console.log('computer dead');\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexToArray\": () => (/* binding */ indexToArray),\n/* harmony export */   \"listToMatrix\": () => (/* binding */ listToMatrix)\n/* harmony export */ });\nfunction listToMatrix(list, elementsPerSubArray) {\n    let matrix = [], i, k;\n    for (i = 0, k = -1; i < list.length; i++) {\n        if (i % elementsPerSubArray === 0) {\n            k++;\n            matrix[k] = [];\n        }\n        matrix[k].push(list[i]);\n    }\n    return matrix;\n}\n\nfunction indexToArray(index) {\n    return [Math.floor(index/7), index % 7];\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/logic.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerShips\": () => (/* binding */ computerShips),\n/* harmony export */   \"playerShips\": () => (/* binding */ playerShips),\n/* harmony export */   \"resetShips\": () => (/* binding */ resetShips),\n/* harmony export */   \"shipInit\": () => (/* binding */ shipInit)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/modules/board.js\");\n\n\nlet playerShips = [];\nlet computerShips = [];\n\nfunction ShipConstructor(name, health) {\n    this.name = name;\n    this.health = health;\n    this.alive = true;\n}\n\nfunction resetShips() {\n    computerShips = [];\n    playerShips = [];\n}\n\nfunction shipInit() {\n    const carrier = new ShipConstructor(\"C\", 5);\n    const battleship = new ShipConstructor(\"B\", 4);\n    const destroyer = new ShipConstructor(\"D\", 3);\n    const submarine = new ShipConstructor(\"S\", 3);\n    const patrolBoat = new ShipConstructor(\"P\", 2);\n    playerShips.push(carrier, battleship, destroyer, submarine, patrolBoat);\n    const carrierAI = new ShipConstructor(\"C\", 5);\n    const battleshipAI = new ShipConstructor(\"B\", 4);\n    const destroyerAI = new ShipConstructor(\"D\", 3);\n    const submarineAI = new ShipConstructor(\"S\", 3);\n    const patrolBoatAI = new ShipConstructor(\"P\", 2);\n    computerShips.push(carrierAI, battleshipAI, destroyerAI, submarineAI, patrolBoatAI);\n}\n\nShipConstructor.prototype.setPos = function(y, x) {\n    // y = parseInt(y);\n    // x = parseInt(x);\n    for (let i = 0; i < this.health; i++) {\n        if (_board_js__WEBPACK_IMPORTED_MODULE_0__.testBoard[y][x] != '') {\n            _board_js__WEBPACK_IMPORTED_MODULE_0__.loadState();\n            return;\n        }\n        _board_js__WEBPACK_IMPORTED_MODULE_0__.testBoard[y][x] = this.name;\n        x++;\n    }\n    _board_js__WEBPACK_IMPORTED_MODULE_0__.saveState();\n    return true;\n}\n\nShipConstructor.prototype.setPosVertical = function(y, x) {\n    for (let i = 0; i < this.health; i++) {\n        if (!_board_js__WEBPACK_IMPORTED_MODULE_0__.testBoard[y] || _board_js__WEBPACK_IMPORTED_MODULE_0__.testBoard[y][x] != '') {\n            _board_js__WEBPACK_IMPORTED_MODULE_0__.loadState();\n            return;\n        }\n        _board_js__WEBPACK_IMPORTED_MODULE_0__.testBoard[y][x] = this.name;\n        y++;\n    }\n    _board_js__WEBPACK_IMPORTED_MODULE_0__.saveState();\n    return true;\n}\n\nShipConstructor.prototype.aiRandomPlace = function() {\n    let y = Math.floor(Math.random() * 7);\n    let x = Math.floor(Math.random() * 7);\n    for (let i = 0; i < this.health; i++) {\n        if (!_board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y] || _board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y][x] != '') {\n            _board_js__WEBPACK_IMPORTED_MODULE_0__.loadStateComputer();\n            return this.aiRandomPlace();\n        }\n        _board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y][x] = this.name;\n        x++;\n    }\n    _board_js__WEBPACK_IMPORTED_MODULE_0__.saveStateComputer();\n}\n\nShipConstructor.prototype.aiRandomPlaceVertical = function() {\n    let y = Math.floor(Math.random() * 7);\n    let x = Math.floor(Math.random() * 7);\n    for (let i = 0; i < this.health; i++) {\n        if (!_board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y] || _board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y][x] != '') {\n            _board_js__WEBPACK_IMPORTED_MODULE_0__.loadStateComputer();\n            return this.aiRandomPlace();\n        }\n        _board_js__WEBPACK_IMPORTED_MODULE_0__.computerTestBoard[y][x] = this.name;\n        y++;\n    }\n    _board_js__WEBPACK_IMPORTED_MODULE_0__.saveStateComputer();\n}\n\nShipConstructor.prototype.hit = function() {\n    this.health--;\n    console.log(this.name, 'hit', this.health)\n    if (this.health <= 0) {\n        this.alive = false;\n        game.decideWinner()\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-battleships/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;