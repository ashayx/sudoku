/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 矩阵坐标
 */
const matrixToolkit = {
    makeRow(v = 0) {
        var array = new Array(9)
        array.fill(v)
        return array
    },
    makeMatrix(v = 0) {
        return Array.from({ length: 9 }, () => this.makeRow(v)) // Array.from() 第二个参数 mapFunc
    },
    /**
     * Fisher-Yates 算法 
     */
    shuffle(array) {
        const endIndex = array.length - 1
        for (let i = 0; i < endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    },

    checkFillable(matrix, n, rowIndex, colIndex) {
        // 获取n所在行的数组
        const row = matrix[rowIndex] 
        // 获取n所在列的数组
        const col = this.makeRow().map((v, i) => matrix[i][colIndex])
        // 获取n所在宫的数组
        const { boxIndex } = boxToolkit.convertToBoxIndex(rowIndex, colIndex)
        const box = boxToolkit.getBoxCells(matrix, boxIndex)
        for (let i = 0; i < 9; i++) {
            if (row[i] === n || col[i] === n || box[i] === n) return false        
        }
        return true
    }
}
/**
 * 宫坐标系工具
 */
const boxToolkit = {
    getBoxCells(matrix, boxIndex) {
        const startRowIndex = Math.floor(boxIndex / 3) * 3
        const startColIndex = boxIndex % 3 * 3
        const result = []
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            const rowIndex = startRowIndex + Math.floor(cellIndex / 3)
            const colIndex = startColIndex + cellIndex % 3
            result.push(matrix[rowIndex][colIndex])
        }
        return result
    },
    convertToBoxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        }
       
    },
    convertFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        }
    }
}
class Toolkit {
    /**
     * 矩阵和数据相关工具
     */
    static get matrix() {
        return matrixToolkit
    }
    /**
     * 宫坐标系
     */
    static get box() {
        return boxToolkit
    }
}



/* harmony default export */ __webpack_exports__["a"] = (Toolkit);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_less__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_grid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_popupnumber__ = __webpack_require__(11);






let grid = new __WEBPACK_IMPORTED_MODULE_1__ui_grid__["a" /* default */]($("#containner"))
grid.build()
grid.layout()

const popupNumbers = new __WEBPACK_IMPORTED_MODULE_2__ui_popupnumber__["a" /* default */]($('#popupNumbers'));
grid.bindPopup(popupNumbers)

$('#check').on('click', e => {
    if (grid.check()) {
        alert("成功");
    }

})
$('#reset').on('click', e => {
    grid.reset()
})
$('#clear').on('click', e => {
    grid.clear()
})
$('#rebuild').on('click', e => {
    grid.rebuild()
})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/._css-loader@0.28.9@css-loader/index.js!../../node_modules/._less-loader@4.0.5@less-loader/dist/cjs.js!./style.less", function() {
			var newContent = require("!!../../node_modules/._css-loader@0.28.9@css-loader/index.js!../../node_modules/._less-loader@4.0.5@less-loader/dist/cjs.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html {\n  font-size: 14px;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: #eee;\n  font-family: \"Consolas\", \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  user-select: none;\n  max-width: 450px;\n}\nbody > * {\n  max-width: 450px;\n}\n.title {\n  padding: 1rem 5%;\n  background: steelblue;\n  color: white;\n  margin-bottom: 2rem;\n  box-shadow: 0 0.2rem 0.3rem #303030;\n}\n.title h1 {\n  margin: 0;\n  padding: 0;\n}\n.hidden {\n  display: none;\n}\n.containner {\n  padding-left: 5%;\n}\n.containner .row > span {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  width: 10%;\n  line-height: 24px;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-right-width: 0;\n  border-bottom-width: 0;\n}\n.containner .row > span.col_g_right {\n  border-right-width: 2px;\n}\n.containner .row > span:first-child {\n  border-left-width: 2px;\n}\n.containner .row > span:last-child {\n  border-right-width: 2px;\n}\n.containner .row > span.empty {\n  color: #fff;\n}\n.containner .row > span.fixed {\n  background: #eee;\n}\n.containner .row > span.mark1 {\n  background: lightpink;\n}\n.containner .row > span.mark1.empty {\n  color: lightpink;\n}\n.containner .row > span.mark2 {\n  background: lightgreen;\n}\n.containner .row > span.mark2.empty {\n  color: lightgreen;\n}\n.containner .row > span.error {\n  background: #af7272;\n}\n.containner .row > span.error.empty {\n  color: #af7272;\n}\n.containner .row.row_g_bottom > span {\n  border-bottom-width: 2px;\n}\n.containner .row:first-child > span {\n  border-top-width: 2px;\n}\n.containner .row:last-child > span {\n  border-bottom-width: 2px;\n}\n.popum-num {\n  padding-left: 5%;\n  position: absolute;\n  padding-left: 0;\n}\n.popum-num .row > span {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  width: 10%;\n  line-height: 24px;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-right-width: 0;\n  border-bottom-width: 0;\n}\n.popum-num .row > span.col_g_right {\n  border-right-width: 2px;\n}\n.popum-num .row > span:first-child {\n  border-left-width: 2px;\n}\n.popum-num .row > span:last-child {\n  border-right-width: 2px;\n}\n.popum-num .row > span.empty {\n  color: #fff;\n}\n.popum-num .row > span.fixed {\n  background: #eee;\n}\n.popum-num .row > span.mark1 {\n  background: lightpink;\n}\n.popum-num .row > span.mark1.empty {\n  color: lightpink;\n}\n.popum-num .row > span.mark2 {\n  background: lightgreen;\n}\n.popum-num .row > span.mark2.empty {\n  color: lightgreen;\n}\n.popum-num .row > span.error {\n  background: #af7272;\n}\n.popum-num .row > span.error.empty {\n  color: #af7272;\n}\n.popum-num .row.row_g_bottom > span {\n  border-bottom-width: 2px;\n}\n.popum-num .row:first-child > span {\n  border-top-width: 2px;\n}\n.popum-num .row:last-child > span {\n  border-bottom-width: 2px;\n}\n.popum-num .row span {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n.dashboard {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: steelblue;\n  box-sizing: border-box;\n  box-shadow: 0 -0.1rem 0.3rem #303030;\n  height: 3rem;\n}\n.dashboard .button {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dashboard .button button {\n  float: left;\n  width: 25%;\n  height: 3rem;\n  font-size: 1.3rem;\n  color: white;\n  border: 1px solid #ccc;\n  background: transparent;\n  border-right-width: 0;\n}\n.dashboard .button button:last-child {\n  border-right-width: 1px;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sudoku__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_checker__ = __webpack_require__(10);
// 生成九宫格


class Grid {
    constructor(container) {
        this._$container = container
    }

    build() {
        const sudoku = new __WEBPACK_IMPORTED_MODULE_0__core_sudoku__["a" /* default */]()
        sudoku.make()
        console.log(JSON.stringify(sudoku.solutionMatrix))
        console.log(JSON.stringify(sudoku.puzzleMatrix))
        const matrix = sudoku.puzzleMatrix

        const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"]
        const colGroupClasses = ["col_g_left", "col_g_middle", "col_g_right"]

        const $cells = matrix.map(rowValues => rowValues.
            map((cellValue, colIndex) => {
                return $("<span>")
                    .addClass(colGroupClasses[colIndex % 3])
                    .addClass(cellValue ? 'fixed' : 'empty')
                    .text(cellValue)
            }))

        const $divArray = $cells.map(($spanArray, rowIndex) => {
            return $("<div>")
                .addClass("row")
                .addClass(rowGroupClasses[rowIndex % 3])
                .append($spanArray)
        })

        this._$container.append($divArray)
    }

    layout() {
        const width = $('span:first').width()
        $('span').css({
            'line-height': `${width}px`,
            'height': `${width}px`
        })
    }
    // 重新生成迷盘
    rebuild() {
        this._$container.empty()
        this.build()
        this.layout()
    }
    // 检查用户解谜结果
    check() {
        const data = this._$container.children()
            .map((rowIndex, div) => {
                return $(div).children()
                    .map((colIndex, span) => parseInt($(span).text()) || 0)
            })
            .toArray()
            .map($data => $data.toArray())

        const checker = new __WEBPACK_IMPORTED_MODULE_1__core_checker__["a" /* default */](data)
        if (checker.check()) {
            return true
        }

        const marks = checker.matrixMarks
        this._$container.children()
            .each((rowIndex, div) => {
                $(div).children().each((colIndex, span) => {
                    const $span = $(span)
                    if ($span.is('fixed') || marks[rowIndex][colIndex]) {
                        $span.removeClass('error')
                    } else {
                        $(span).addClass('error')
                    }

                })
            })
    }
    // 重置用户输入
    reset() {
        this._$container.find("span:not(.fixed)")
            .removeClass("error mark1 mark2")
            .addClass("empty")
            .text(0)
    }
    // 推倒重来
    clear() {
        this._$container.find("span.error")
            .removeClass("error")
    }
    // 重新开始新的一局
    rebuild() {
        this._$container.empty()
        this.build()
        this.layout()
    }

    bindPopup(popupNumbers) {
        this._$container.on('click', 'span', e => {
            const $cell = $(e.target)
            if ($cell.is(".fixed")) {
                return
            }
            popupNumbers.popup($cell)
        })
    }

}
/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator__ = __webpack_require__(9);
// 生成数独游戏


class Sudoku {
    constructor() {
        const generator = new __WEBPACK_IMPORTED_MODULE_0__generator__["a" /* default */]()
        generator.generate()
        this.solutionMatrix = generator.matrix
    }
    make(level = 5) {
        this.puzzleMatrix = this.solutionMatrix.map(row => row.map(cell => Math.random() * 9 < level ? 0 : cell))
    }

}
/* harmony default export */ __webpack_exports__["a"] = (Sudoku);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolkit__ = __webpack_require__(0);
// 数独解决方案


class Generator {
    constructor() {

    }
    generate() {
        while (!this.internalGenerator()) {
            // TODO
            console.warn('try agin');
            
        }
    }
     
    internalGenerator() {
        this.matrix = __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].matrix.makeMatrix()
        this.orders = __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].matrix.makeMatrix()
                            .map(row => row.map((v, i) => i))
                            .map(row => __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].matrix.shuffle(row))

        for (let n = 1; n < 10; n++) {
            if(!this.fillNumber(n)) {
                return false
            }
        }
        return true
    }
    fillNumber(n) {
        return this.fillRow(n, 0)

    }

    fillRow(n, rowIndex) {
        if(rowIndex > 8) {
            return true
        }
        const row = this.matrix[rowIndex]
        const orders = this.orders[rowIndex]

        for (let i = 0; i < 9; i++) {
            const colIndex = orders[i]

            // 如果这个位置有数据就跳过
            if(row[colIndex]) {
                continue
            }

            // 检查这个位置是否可以填n
            if (!__WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                continue
            }

            row[colIndex] = n

            // 去下一行填写n，如果没有填写成功，继续在当前行填写n
            if(!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0
                continue
            }
            return true
        }
        return false
    }
}


/* harmony default export */ __webpack_exports__["a"] = (Generator);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolkit__ = __webpack_require__(0);
// 检查数据解决方案
function checkArray(array) {
    const length = array.length
    const marks = new Array(length)
    marks.fill(true)
    for (let i = 0; i < length; i++) {
        const v = array[i];
        if(!marks[i]) {
            continue
        }
        if(!v) {
            marks[i] = false
            continue
        }
        for (let j = i + 1; j < length - 1; j++) {
            if( v === array[j]) {
                marks[i] = marks[j] = false
            } 
            
        }
        
    }
    return marks
}


class Checker {
    constructor(matrix) {
        this._matrix = matrix
        this._matrixMarks = __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].matrix.makeMatrix(true)
    }
    get matrixMarks() {
        return this._matrixMarks
    }
    get success() {
        return this._success
    }
    check() {
        this.checkRows()
        this.checkCols()
        this.checkBoxes()

        this._success = this._matrixMarks.every(row => row.every(mark => mark))
        return this._success

    }
    checkRows() {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            const row = this._matrix[rowIndex]
            const marks = checkArray(row)

            for (let colIndex = 0; colIndex < 9; colIndex++) {
               
                if(!marks[colIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                    
                }
                
            }
        }
    }
    checkCols() {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const cols = []

            for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
                cols[rowIndex] = this._matrix[rowIndex][colIndex]
            }

            const marks = checkArray(cols)

            for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
                if(!marks[rowIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                }
                
            }
        }
    }
    checkBoxes() {
        for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
            const box = __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].box.getBoxCells(this._matrix, boxIndex)
            const marks = checkArray(box)
            
            for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
                const {rowIndex, colIndex} = __WEBPACK_IMPORTED_MODULE_0__toolkit__["a" /* default */].box.convertFromBoxIndex(boxIndex, cellIndex)
                if (!marks[cellIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                }

            }
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Checker);





/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_toolkit__ = __webpack_require__(0);
// 弹出的操作面板


// 处理弹出操作面板
class PopupNumbers {
    constructor($panel) {
        this._$panel = $panel.hide().removeClass("hidden")

        this._$panel.on("click", "span", e => {
            const $cell = this._$targetCell
            const $span = $(e.target)

            if ($span.hasClass("mark1")) {
                if ($cell.hasClass("mark1")) {
                    $cell.removeClass("mark1")
                } else {
                    $cell.removeClass("mark2")
                        .addClass("mark1")
                }
                // 回填样式
            }
            else if ($span.hasClass("mark2")) {
                if ($span.hasClass("mark2")) {
                    if ($cell.hasClass("mark2")) {
                        $cell.removeClass("mark2")
                    } else {
                        $cell.removeClass("mark1")
                            .addClass("mark2")
                    }
                    // 回填样式
                }
            }
            else if ($span.hasClass("empty")) {
                // 取消数字和mark
                $cell.text(0)
                    .addClass("empty")
            }
            else {
                // 回填数字1~9
                $cell.removeClass("empty")
                    .text($span.text())
            }
            this.hide()
        })
    }

    popup($cell) {
        this._$targetCell = $cell
        let { left, top } = $cell.position()
        const maxLeft = $('body').width() - this._$panel.width()
        left = left > maxLeft ? maxLeft : left
        this._$panel.css({
            left: `${left}px`,
            top: `${top}px`
        }).show()

    }

    hide() {
        this._$panel.hide()
    }
}

/* harmony default export */ __webpack_exports__["a"] = (PopupNumbers);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDkzMzljYTQ0ODRlZmVhYmU3NzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdG9vbGtpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmxlc3M/YjRjZCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5fY3NzLWxvYWRlckAwLjI4LjlAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5fc3R5bGUtbG9hZGVyQDAuMTkuMUBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLl9zdHlsZS1sb2FkZXJAMC4xOS4xQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdWkvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9zdWRva3UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpL3BvcHVwbnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFp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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixLQUFLO0FBQzFCLG9CQUFvQixJQUFJO0FBQ3hCLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDkzMzljYTQ0ODRlZmVhYmU3NzciLCIvKipcclxuICog55+p6Zi15Z2Q5qCHXHJcbiAqL1xyXG5jb25zdCBtYXRyaXhUb29sa2l0ID0ge1xyXG4gICAgbWFrZVJvdyh2ID0gMCkge1xyXG4gICAgICAgIHZhciBhcnJheSA9IG5ldyBBcnJheSg5KVxyXG4gICAgICAgIGFycmF5LmZpbGwodilcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgIH0sXHJcbiAgICBtYWtlTWF0cml4KHYgPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gdGhpcy5tYWtlUm93KHYpKSAvLyBBcnJheS5mcm9tKCkg56ys5LqM5Liq5Y+C5pWwIG1hcEZ1bmNcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEZpc2hlci1ZYXRlcyDnrpfms5UgXHJcbiAgICAgKi9cclxuICAgIHNodWZmbGUoYXJyYXkpIHtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDFcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IGkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyYXkubGVuZ3RoIC0gaSkpO1xyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja0ZpbGxhYmxlKG1hdHJpeCwgbiwgcm93SW5kZXgsIGNvbEluZGV4KSB7XHJcbiAgICAgICAgLy8g6I635Y+WbuaJgOWcqOihjOeahOaVsOe7hFxyXG4gICAgICAgIGNvbnN0IHJvdyA9IG1hdHJpeFtyb3dJbmRleF0gXHJcbiAgICAgICAgLy8g6I635Y+WbuaJgOWcqOWIl+eahOaVsOe7hFxyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMubWFrZVJvdygpLm1hcCgodiwgaSkgPT4gbWF0cml4W2ldW2NvbEluZGV4XSlcclxuICAgICAgICAvLyDojrflj5Zu5omA5Zyo5a6r55qE5pWw57uEXHJcbiAgICAgICAgY29uc3QgeyBib3hJbmRleCB9ID0gYm94VG9vbGtpdC5jb252ZXJ0VG9Cb3hJbmRleChyb3dJbmRleCwgY29sSW5kZXgpXHJcbiAgICAgICAgY29uc3QgYm94ID0gYm94VG9vbGtpdC5nZXRCb3hDZWxscyhtYXRyaXgsIGJveEluZGV4KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dbaV0gPT09IG4gfHwgY29sW2ldID09PSBuIHx8IGJveFtpXSA9PT0gbikgcmV0dXJuIGZhbHNlICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG4vKipcclxuICog5a6r5Z2Q5qCH57O75bel5YW3XHJcbiAqL1xyXG5jb25zdCBib3hUb29sa2l0ID0ge1xyXG4gICAgZ2V0Qm94Q2VsbHMobWF0cml4LCBib3hJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Um93SW5kZXggPSBNYXRoLmZsb29yKGJveEluZGV4IC8gMykgKiAzXHJcbiAgICAgICAgY29uc3Qgc3RhcnRDb2xJbmRleCA9IGJveEluZGV4ICUgMyAqIDNcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGNlbGxJbmRleCA9IDA7IGNlbGxJbmRleCA8IDk7IGNlbGxJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc3RhcnRSb3dJbmRleCArIE1hdGguZmxvb3IoY2VsbEluZGV4IC8gMylcclxuICAgICAgICAgICAgY29uc3QgY29sSW5kZXggPSBzdGFydENvbEluZGV4ICsgY2VsbEluZGV4ICUgM1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChtYXRyaXhbcm93SW5kZXhdW2NvbEluZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSxcclxuICAgIGNvbnZlcnRUb0JveEluZGV4KHJvd0luZGV4LCBjb2xJbmRleCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJveEluZGV4OiBNYXRoLmZsb29yKHJvd0luZGV4IC8gMykgKiAzICsgTWF0aC5mbG9vcihjb2xJbmRleCAvIDMpLFxyXG4gICAgICAgICAgICBjZWxsSW5kZXg6IHJvd0luZGV4ICUgMyAqIDMgKyBjb2xJbmRleCAlIDNcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBjb252ZXJ0RnJvbUJveEluZGV4KGJveEluZGV4LCBjZWxsSW5kZXgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByb3dJbmRleDogTWF0aC5mbG9vcihib3hJbmRleCAvIDMpICogMyArIE1hdGguZmxvb3IoY2VsbEluZGV4IC8gMyksXHJcbiAgICAgICAgICAgIGNvbEluZGV4OiBib3hJbmRleCAlIDMgKiAzICsgY2VsbEluZGV4ICUgM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBUb29sa2l0IHtcclxuICAgIC8qKlxyXG4gICAgICog55+p6Zi15ZKM5pWw5o2u55u45YWz5bel5YW3XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgbWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiBtYXRyaXhUb29sa2l0XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWuq+WdkOagh+ezu1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IGJveCgpIHtcclxuICAgICAgICByZXR1cm4gYm94VG9vbGtpdFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xraXRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb3JlL3Rvb2xraXQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmxlc3MnXHJcbmltcG9ydCBHcmlkIGZyb20gJy4vdWkvZ3JpZCdcclxuaW1wb3J0IFBvcHVwTnVtYmVycyBmcm9tICcuL3VpL3BvcHVwbnVtYmVyJ1xyXG5cclxuXHJcbmxldCBncmlkID0gbmV3IEdyaWQoJChcIiNjb250YWlubmVyXCIpKVxyXG5ncmlkLmJ1aWxkKClcclxuZ3JpZC5sYXlvdXQoKVxyXG5cclxuY29uc3QgcG9wdXBOdW1iZXJzID0gbmV3IFBvcHVwTnVtYmVycygkKCcjcG9wdXBOdW1iZXJzJykpO1xyXG5ncmlkLmJpbmRQb3B1cChwb3B1cE51bWJlcnMpXHJcblxyXG4kKCcjY2hlY2snKS5vbignY2xpY2snLCBlID0+IHtcclxuICAgIGlmIChncmlkLmNoZWNrKCkpIHtcclxuICAgICAgICBhbGVydChcIuaIkOWKn1wiKTtcclxuICAgIH1cclxuXHJcbn0pXHJcbiQoJyNyZXNldCcpLm9uKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZ3JpZC5yZXNldCgpXHJcbn0pXHJcbiQoJyNjbGVhcicpLm9uKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZ3JpZC5jbGVhcigpXHJcbn0pXHJcbiQoJyNyZWJ1aWxkJykub24oJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBncmlkLnJlYnVpbGQoKVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8uX2Nzcy1sb2FkZXJAMC4yOC45QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5fbGVzcy1sb2FkZXJANC4wLjVAbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5fc3R5bGUtbG9hZGVyQDAuMTkuMUBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5fY3NzLWxvYWRlckAwLjI4LjlAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLl9sZXNzLWxvYWRlckA0LjAuNUBsZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8uX2Nzcy1sb2FkZXJAMC4yOC45QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5fbGVzcy1sb2FkZXJANC4wLjVAbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUubGVzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5fY3NzLWxvYWRlckAwLjI4LjlAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBmb250LWZhbWlseTogXFxcIkNvbnNvbGFzXFxcIiwgXFxcIlxcXFw1RkFFXFxcXDhGNkZcXFxcOTZDNVxcXFw5RUQxXFxcIjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuYm9keSA+ICoge1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDFyZW0gNSU7XFxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjJyZW0gMC4zcmVtICMzMDMwMzA7XFxufVxcbi50aXRsZSBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250YWlubmVyIHtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMCU7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG59XFxuLmNvbnRhaW5uZXIgLnJvdyA+IHNwYW4uY29sX2dfcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuLmVtcHR5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY29udGFpbm5lciAucm93ID4gc3Bhbi5maXhlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG4uY29udGFpbm5lciAucm93ID4gc3Bhbi5tYXJrMSB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuLm1hcmsxLmVtcHR5IHtcXG4gIGNvbG9yOiBsaWdodHBpbms7XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuLm1hcmsyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5jb250YWlubmVyIC5yb3cgPiBzcGFuLm1hcmsyLmVtcHR5IHtcXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uY29udGFpbm5lciAucm93ID4gc3Bhbi5lcnJvciB7XFxuICBiYWNrZ3JvdW5kOiAjYWY3MjcyO1xcbn1cXG4uY29udGFpbm5lciAucm93ID4gc3Bhbi5lcnJvci5lbXB0eSB7XFxuICBjb2xvcjogI2FmNzI3MjtcXG59XFxuLmNvbnRhaW5uZXIgLnJvdy5yb3dfZ19ib3R0b20gPiBzcGFuIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLmNvbnRhaW5uZXIgLnJvdzpmaXJzdC1jaGlsZCA+IHNwYW4ge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcbn1cXG4uY29udGFpbm5lciAucm93Omxhc3QtY2hpbGQgPiBzcGFuIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLnBvcHVtLW51bSB7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4ucG9wdW0tbnVtIC5yb3cgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMCU7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG59XFxuLnBvcHVtLW51bSAucm93ID4gc3Bhbi5jb2xfZ19yaWdodCB7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXG59XFxuLnBvcHVtLW51bSAucm93ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xcbn1cXG4ucG9wdW0tbnVtIC5yb3cgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxufVxcbi5wb3B1bS1udW0gLnJvdyA+IHNwYW4uZW1wdHkge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5wb3B1bS1udW0gLnJvdyA+IHNwYW4uZml4ZWQge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuLnBvcHVtLW51bSAucm93ID4gc3Bhbi5tYXJrMSB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XFxufVxcbi5wb3B1bS1udW0gLnJvdyA+IHNwYW4ubWFyazEuZW1wdHkge1xcbiAgY29sb3I6IGxpZ2h0cGluaztcXG59XFxuLnBvcHVtLW51bSAucm93ID4gc3Bhbi5tYXJrMiB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG4ucG9wdW0tbnVtIC5yb3cgPiBzcGFuLm1hcmsyLmVtcHR5IHtcXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4ucG9wdW0tbnVtIC5yb3cgPiBzcGFuLmVycm9yIHtcXG4gIGJhY2tncm91bmQ6ICNhZjcyNzI7XFxufVxcbi5wb3B1bS1udW0gLnJvdyA+IHNwYW4uZXJyb3IuZW1wdHkge1xcbiAgY29sb3I6ICNhZjcyNzI7XFxufVxcbi5wb3B1bS1udW0gLnJvdy5yb3dfZ19ib3R0b20gPiBzcGFuIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLnBvcHVtLW51bSAucm93OmZpcnN0LWNoaWxkID4gc3BhbiB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxufVxcbi5wb3B1bS1udW0gLnJvdzpsYXN0LWNoaWxkID4gc3BhbiB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcbi5wb3B1bS1udW0gLnJvdyBzcGFuIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi5kYXNoYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaGFkb3c6IDAgLTAuMXJlbSAwLjNyZW0gIzMwMzAzMDtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuLmRhc2hib2FyZCAuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuLmRhc2hib2FyZCAuYnV0dG9uIGJ1dHRvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcXG59XFxuLmRhc2hib2FyZCAuYnV0dG9uIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy8uX2Nzcy1sb2FkZXJAMC4yOC45QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvLl9sZXNzLWxvYWRlckA0LjAuNUBsZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jc3Mvc3R5bGUubGVzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy8uX2Nzcy1sb2FkZXJAMC4yOC45QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzLy5fc3R5bGUtbG9hZGVyQDAuMTkuMUBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzLy5fc3R5bGUtbG9hZGVyQDAuMTkuMUBzdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8g55Sf5oiQ5Lmd5a6r5qC8XHJcbmltcG9ydCBTdWRva3UgZnJvbSAnLi4vY29yZS9zdWRva3UnXHJcbmltcG9ydCBDaGVja2VyIGZyb20gJy4uL2NvcmUvY2hlY2tlcidcclxuY2xhc3MgR3JpZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLl8kY29udGFpbmVyID0gY29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Vkb2t1ID0gbmV3IFN1ZG9rdSgpXHJcbiAgICAgICAgc3Vkb2t1Lm1ha2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN1ZG9rdS5zb2x1dGlvbk1hdHJpeCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3Vkb2t1LnB1enpsZU1hdHJpeCkpXHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gc3Vkb2t1LnB1enpsZU1hdHJpeFxyXG5cclxuICAgICAgICBjb25zdCByb3dHcm91cENsYXNzZXMgPSBbXCJyb3dfZ190b3BcIiwgXCJyb3dfZ19taWRkbGVcIiwgXCJyb3dfZ19ib3R0b21cIl1cclxuICAgICAgICBjb25zdCBjb2xHcm91cENsYXNzZXMgPSBbXCJjb2xfZ19sZWZ0XCIsIFwiY29sX2dfbWlkZGxlXCIsIFwiY29sX2dfcmlnaHRcIl1cclxuXHJcbiAgICAgICAgY29uc3QgJGNlbGxzID0gbWF0cml4Lm1hcChyb3dWYWx1ZXMgPT4gcm93VmFsdWVzLlxyXG4gICAgICAgICAgICBtYXAoKGNlbGxWYWx1ZSwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPHNwYW4+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGNvbEdyb3VwQ2xhc3Nlc1tjb2xJbmRleCAlIDNdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjZWxsVmFsdWUgPyAnZml4ZWQnIDogJ2VtcHR5JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjZWxsVmFsdWUpXHJcbiAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICBjb25zdCAkZGl2QXJyYXkgPSAkY2VsbHMubWFwKCgkc3BhbkFycmF5LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJyb3dcIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhyb3dHcm91cENsYXNzZXNbcm93SW5kZXggJSAzXSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJHNwYW5BcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl8kY29udGFpbmVyLmFwcGVuZCgkZGl2QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgbGF5b3V0KCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gJCgnc3BhbjpmaXJzdCcpLndpZHRoKClcclxuICAgICAgICAkKCdzcGFuJykuY3NzKHtcclxuICAgICAgICAgICAgJ2xpbmUtaGVpZ2h0JzogYCR7d2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogYCR7d2lkdGh9cHhgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIOmHjeaWsOeUn+aIkOi/t+ebmFxyXG4gICAgcmVidWlsZCgpIHtcclxuICAgICAgICB0aGlzLl8kY29udGFpbmVyLmVtcHR5KClcclxuICAgICAgICB0aGlzLmJ1aWxkKClcclxuICAgICAgICB0aGlzLmxheW91dCgpXHJcbiAgICB9XHJcbiAgICAvLyDmo4Dmn6XnlKjmiLfop6PosJznu5PmnpxcclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl8kY29udGFpbmVyLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgLm1hcCgocm93SW5kZXgsIGRpdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoZGl2KS5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY29sSW5kZXgsIHNwYW4pID0+IHBhcnNlSW50KCQoc3BhbikudGV4dCgpKSB8fCAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAgIC5tYXAoJGRhdGEgPT4gJGRhdGEudG9BcnJheSgpKVxyXG5cclxuICAgICAgICBjb25zdCBjaGVja2VyID0gbmV3IENoZWNrZXIoZGF0YSlcclxuICAgICAgICBpZiAoY2hlY2tlci5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXJrcyA9IGNoZWNrZXIubWF0cml4TWFya3NcclxuICAgICAgICB0aGlzLl8kY29udGFpbmVyLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgLmVhY2goKHJvd0luZGV4LCBkaXYpID0+IHtcclxuICAgICAgICAgICAgICAgICQoZGl2KS5jaGlsZHJlbigpLmVhY2goKGNvbEluZGV4LCBzcGFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNwYW4gPSAkKHNwYW4pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzcGFuLmlzKCdmaXhlZCcpIHx8IG1hcmtzW3Jvd0luZGV4XVtjb2xJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNwYW4ucmVtb3ZlQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW4pLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDph43nva7nlKjmiLfovpPlhaVcclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuXyRjb250YWluZXIuZmluZChcInNwYW46bm90KC5maXhlZClcIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZXJyb3IgbWFyazEgbWFyazJcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiZW1wdHlcIilcclxuICAgICAgICAgICAgLnRleHQoMClcclxuICAgIH1cclxuICAgIC8vIOaOqOWAkumHjeadpVxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fJGNvbnRhaW5lci5maW5kKFwic3Bhbi5lcnJvclwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgLy8g6YeN5paw5byA5aeL5paw55qE5LiA5bGAXHJcbiAgICByZWJ1aWxkKCkge1xyXG4gICAgICAgIHRoaXMuXyRjb250YWluZXIuZW1wdHkoKVxyXG4gICAgICAgIHRoaXMuYnVpbGQoKVxyXG4gICAgICAgIHRoaXMubGF5b3V0KClcclxuICAgIH1cclxuXHJcbiAgICBiaW5kUG9wdXAocG9wdXBOdW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fJGNvbnRhaW5lci5vbignY2xpY2snLCAnc3BhbicsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY2VsbCA9ICQoZS50YXJnZXQpXHJcbiAgICAgICAgICAgIGlmICgkY2VsbC5pcyhcIi5maXhlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9wdXBOdW1iZXJzLnBvcHVwKCRjZWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91aS9ncmlkLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIOeUn+aIkOaVsOeLrOa4uOaIj1xyXG5pbXBvcnQgR2VuZXJhdG9yIGZyb20gJy4vZ2VuZXJhdG9yJ1xyXG5cclxuY2xhc3MgU3Vkb2t1IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3IoKVxyXG4gICAgICAgIGdlbmVyYXRvci5nZW5lcmF0ZSgpXHJcbiAgICAgICAgdGhpcy5zb2x1dGlvbk1hdHJpeCA9IGdlbmVyYXRvci5tYXRyaXhcclxuICAgIH1cclxuICAgIG1ha2UobGV2ZWwgPSA1KSB7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVNYXRyaXggPSB0aGlzLnNvbHV0aW9uTWF0cml4Lm1hcChyb3cgPT4gcm93Lm1hcChjZWxsID0+IE1hdGgucmFuZG9tKCkgKiA5IDwgbGV2ZWwgPyAwIDogY2VsbCkpXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1ZG9rdVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvcmUvc3Vkb2t1LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIOaVsOeLrOino+WGs+aWueahiFxyXG5pbXBvcnQgVG9vbGtpdCBmcm9tICcuL3Rvb2xraXQnXHJcblxyXG5jbGFzcyBHZW5lcmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGUoKSB7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmludGVybmFsR2VuZXJhdG9yKCkpIHtcclxuICAgICAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3RyeSBhZ2luJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIGludGVybmFsR2VuZXJhdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gVG9vbGtpdC5tYXRyaXgubWFrZU1hdHJpeCgpXHJcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBUb29sa2l0Lm1hdHJpeC5tYWtlTWF0cml4KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5tYXAoKHYsIGkpID0+IGkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChyb3cgPT4gVG9vbGtpdC5tYXRyaXguc2h1ZmZsZShyb3cpKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBuID0gMTsgbiA8IDEwOyBuKyspIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZmlsbE51bWJlcihuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGZpbGxOdW1iZXIobikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGxSb3cobiwgMClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFJvdyhuLCByb3dJbmRleCkge1xyXG4gICAgICAgIGlmKHJvd0luZGV4ID4gOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLm1hdHJpeFtyb3dJbmRleF1cclxuICAgICAgICBjb25zdCBvcmRlcnMgPSB0aGlzLm9yZGVyc1tyb3dJbmRleF1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sSW5kZXggPSBvcmRlcnNbaV1cclxuXHJcbiAgICAgICAgICAgIC8vIOWmguaenOi/meS4quS9jee9ruacieaVsOaNruWwsei3s+i/h1xyXG4gICAgICAgICAgICBpZihyb3dbY29sSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmo4Dmn6Xov5nkuKrkvY3nva7mmK/lkKblj6/ku6XloatuXHJcbiAgICAgICAgICAgIGlmICghVG9vbGtpdC5tYXRyaXguY2hlY2tGaWxsYWJsZSh0aGlzLm1hdHJpeCwgbiwgcm93SW5kZXgsIGNvbEluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcm93W2NvbEluZGV4XSA9IG5cclxuXHJcbiAgICAgICAgICAgIC8vIOWOu+S4i+S4gOihjOWhq+WGmW7vvIzlpoLmnpzmsqHmnInloavlhpnmiJDlip/vvIznu6fnu63lnKjlvZPliY3ooYzloavlhpluXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmZpbGxSb3cobiwgcm93SW5kZXggKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgcm93W2NvbEluZGV4XSA9IDBcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3JcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb3JlL2dlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyDmo4Dmn6XmlbDmja7op6PlhrPmlrnmoYhcclxuZnVuY3Rpb24gY2hlY2tBcnJheShhcnJheSkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoXHJcbiAgICBjb25zdCBtYXJrcyA9IG5ldyBBcnJheShsZW5ndGgpXHJcbiAgICBtYXJrcy5maWxsKHRydWUpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmKCFtYXJrc1tpXSkge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdikge1xyXG4gICAgICAgICAgICBtYXJrc1tpXSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGxlbmd0aCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBpZiggdiA9PT0gYXJyYXlbal0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmtzW2ldID0gbWFya3Nbal0gPSBmYWxzZVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya3NcclxufVxyXG5pbXBvcnQgVG9vbGtpdCBmcm9tICcuL3Rvb2xraXQnXHJcblxyXG5jbGFzcyBDaGVja2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMuX21hdHJpeCA9IG1hdHJpeFxyXG4gICAgICAgIHRoaXMuX21hdHJpeE1hcmtzID0gVG9vbGtpdC5tYXRyaXgubWFrZU1hdHJpeCh0cnVlKVxyXG4gICAgfVxyXG4gICAgZ2V0IG1hdHJpeE1hcmtzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXhNYXJrc1xyXG4gICAgfVxyXG4gICAgZ2V0IHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Y2Nlc3NcclxuICAgIH1cclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tSb3dzKClcclxuICAgICAgICB0aGlzLmNoZWNrQ29scygpXHJcbiAgICAgICAgdGhpcy5jaGVja0JveGVzKClcclxuXHJcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHRoaXMuX21hdHJpeE1hcmtzLmV2ZXJ5KHJvdyA9PiByb3cuZXZlcnkobWFyayA9PiBtYXJrKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc1xyXG5cclxuICAgIH1cclxuICAgIGNoZWNrUm93cygpIHtcclxuICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgOTsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLl9tYXRyaXhbcm93SW5kZXhdXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtzID0gY2hlY2tBcnJheShyb3cpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgOTsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCFtYXJrc1tjb2xJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRyaXhNYXJrc1tyb3dJbmRleF1bY29sSW5kZXhdID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tDb2xzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCA5OyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHMgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IDk7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbHNbcm93SW5kZXhdID0gdGhpcy5fbWF0cml4W3Jvd0luZGV4XVtjb2xJbmRleF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFya3MgPSBjaGVja0FycmF5KGNvbHMpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgOTsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIW1hcmtzW3Jvd0luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdHJpeE1hcmtzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0JveGVzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGJveEluZGV4ID0gMDsgYm94SW5kZXggPCA5OyBib3hJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IFRvb2xraXQuYm94LmdldEJveENlbGxzKHRoaXMuX21hdHJpeCwgYm94SW5kZXgpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtzID0gY2hlY2tBcnJheShib3gpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBjZWxsSW5kZXggPSAwOyBjZWxsSW5kZXggPCA5OyBjZWxsSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3Jvd0luZGV4LCBjb2xJbmRleH0gPSBUb29sa2l0LmJveC5jb252ZXJ0RnJvbUJveEluZGV4KGJveEluZGV4LCBjZWxsSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hcmtzW2NlbGxJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRyaXhNYXJrc1tyb3dJbmRleF1bY29sSW5kZXhdID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tlclxyXG5cclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb3JlL2NoZWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIOW8ueWHuueahOaTjeS9nOmdouadv1xyXG5pbXBvcnQgVG9vbGtpdCBmcm9tIFwiLi4vY29yZS90b29sa2l0XCJcclxuXHJcbi8vIOWkhOeQhuW8ueWHuuaTjeS9nOmdouadv1xyXG5jbGFzcyBQb3B1cE51bWJlcnMge1xyXG4gICAgY29uc3RydWN0b3IoJHBhbmVsKSB7XHJcbiAgICAgICAgdGhpcy5fJHBhbmVsID0gJHBhbmVsLmhpZGUoKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKVxyXG5cclxuICAgICAgICB0aGlzLl8kcGFuZWwub24oXCJjbGlja1wiLCBcInNwYW5cIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjZWxsID0gdGhpcy5fJHRhcmdldENlbGxcclxuICAgICAgICAgICAgY29uc3QgJHNwYW4gPSAkKGUudGFyZ2V0KVxyXG5cclxuICAgICAgICAgICAgaWYgKCRzcGFuLmhhc0NsYXNzKFwibWFyazFcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkY2VsbC5oYXNDbGFzcyhcIm1hcmsxXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNlbGwucmVtb3ZlQ2xhc3MoXCJtYXJrMVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2VsbC5yZW1vdmVDbGFzcyhcIm1hcmsyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcIm1hcmsxXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlm57loavmoLflvI9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkc3Bhbi5oYXNDbGFzcyhcIm1hcmsyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNwYW4uaGFzQ2xhc3MoXCJtYXJrMlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY2VsbC5oYXNDbGFzcyhcIm1hcmsyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjZWxsLnJlbW92ZUNsYXNzKFwibWFyazJcIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2VsbC5yZW1vdmVDbGFzcyhcIm1hcmsxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJtYXJrMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDlm57loavmoLflvI9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkc3Bhbi5oYXNDbGFzcyhcImVtcHR5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlj5bmtojmlbDlrZflkoxtYXJrXHJcbiAgICAgICAgICAgICAgICAkY2VsbC50ZXh0KDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiZW1wdHlcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWbnuWhq+aVsOWtlzF+OVxyXG4gICAgICAgICAgICAgICAgJGNlbGwucmVtb3ZlQ2xhc3MoXCJlbXB0eVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KCRzcGFuLnRleHQoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcG9wdXAoJGNlbGwpIHtcclxuICAgICAgICB0aGlzLl8kdGFyZ2V0Q2VsbCA9ICRjZWxsXHJcbiAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSAkY2VsbC5wb3NpdGlvbigpXHJcbiAgICAgICAgY29uc3QgbWF4TGVmdCA9ICQoJ2JvZHknKS53aWR0aCgpIC0gdGhpcy5fJHBhbmVsLndpZHRoKClcclxuICAgICAgICBsZWZ0ID0gbGVmdCA+IG1heExlZnQgPyBtYXhMZWZ0IDogbGVmdFxyXG4gICAgICAgIHRoaXMuXyRwYW5lbC5jc3Moe1xyXG4gICAgICAgICAgICBsZWZ0OiBgJHtsZWZ0fXB4YCxcclxuICAgICAgICAgICAgdG9wOiBgJHt0b3B9cHhgXHJcbiAgICAgICAgfSkuc2hvdygpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5fJHBhbmVsLmhpZGUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cE51bWJlcnNcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91aS9wb3B1cG51bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==