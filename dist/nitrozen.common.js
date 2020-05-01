module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "013a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0299":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "069b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__("41fa");
var build = __webpack_require__("3df9");
var isValid = __webpack_require__("dd14");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__("9fc2") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "091d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "10e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1106":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "15f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1c13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var svgs = {};
svgs['cross'] = `<svg width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with sketchtool.</desc>
                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Text-fields" transform="translate(-1076.000000, -1612.000000)">
                        <g id="cross-black" transform="translate(1073.000000, 1608.000000)">
                            <rect id="Rectangle" x="0" y="0" width="16" height="16"></rect>
                            <path d="M4,4 L12,12 M12,4 L4,12" id="Imported-Layers-Copy-6" stroke="#41434C" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </g>
                </g>
                </svg>`;
svgs['search'] = `<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with sketchtool.</desc>
                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Text-fields" transform="translate(-167.000000, -1346.000000)" fill="#41434C" fill-rule="nonzero">
                        <g id="Group-2" transform="translate(149.000000, 1333.000000)">
                            <g id="search-black" transform="translate(18.000000, 13.000000)">
                                <path d="M9.7848573,8.70634175 C9.8719311,8.74598369 9.953344,8.80145225 10.0245169,8.87262516 L13.7577948,12.605903 C14.0785101,12.9266183 14.082497,13.4426136 13.7617395,13.763371 C13.4432029,14.0819077 12.921818,14.0769729 12.6042714,13.7594263 L8.87099363,10.0261485 C8.79956965,9.9547245 8.7438542,9.8736154 8.70393584,9.7871344 C7.79450938,10.4714775 6.66349636,10.8770903 5.43776104,10.8770903 C2.43456855,10.8770903 0,8.44217072 0,5.43854516 C0,2.43491961 2.43456855,0 5.43776104,0 C8.44095354,0 10.8755221,2.43491961 10.8755221,5.43854516 C10.8755221,6.66497431 10.4696255,7.79658757 9.7848573,8.70634175 Z M5.43776104,9.7893813 C7.84031504,9.7893813 9.7879699,7.84144561 9.7879699,5.43854516 C9.7879699,3.03564472 7.84031504,1.08770903 5.43776104,1.08770903 C3.03520705,1.08770903 1.08755221,3.03564472 1.08755221,5.43854516 C1.08755221,7.84144561 3.03520705,9.7893813 5.43776104,9.7893813 Z" id="Search-Icon"></path>
                            </g>
                        </g>
                    </g>
                </g>
                </svg>`;
svgs['info'] = `<svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>Created with sketchtool.</desc>
                    <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Text-fields" transform="translate(-312.000000, -1846.000000)" fill="#41434C" fill-rule="nonzero">
                            <g id="Group-9" transform="translate(306.000000, 1840.000000)">
                                <g id="noun_Information_55404" transform="translate(6.000000, 6.000000)">
                                    <g id="Group" transform="translate(5.000000, 3.000000)">
                                        <path d="M1.31973333,1.37536 C1.55773333,1.37536 1.75053333,1.31662222 1.89266667,1.20088889 C2.04053333,1.08067556 2.1156,0.918026667 2.1156,0.717297778 C2.1156,0.516817778 2.04066667,0.354044444 1.8928,0.233831111 C1.7504,0.117848889 1.55746667,0.0592355556 1.31973333,0.0592355556 C1.09506667,0.0592355556 0.906133333,0.117351111 0.758133333,0.231964444 C0.602666667,0.352302222 0.524,0.515448889 0.524,0.717297778 C0.524,0.919271111 0.6028,1.08266667 0.758133333,1.20263111 C0.905866667,1.31724444 1.09493333,1.37536 1.31973333,1.37536 Z" id="Path"></path>
                                        <polygon id="Path" points="1.94306667 5.98839111 1.94306667 1.96497778 0.052 1.96497778 0.052 2.63735111 0.723466667 2.63735111 0.723466667 5.98839111 0.052 5.98839111 0.052 6.66076444 2.61466667 6.66076444 2.61466667 5.98839111"></polygon>
                                    </g>
                                    <path d="M6,0.666666667 C8.9408,0.666666667 11.3333333,3.0592 11.3333333,6 C11.3333333,8.9408 8.9408,11.3333333 6,11.3333333 C3.0592,11.3333333 0.666666667,8.9408 0.666666667,6 C0.666666667,3.0592 3.0592,0.666666667 6,0.666666667 M6,0 C2.68626667,0 0,2.68626667 0,6 C0,9.31373333 2.68626667,12 6,12 C9.31373333,12 12,9.31373333 12,6 C12,2.68626667 9.31373333,0 6,0 L6,0 Z" id="Shape"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                    </svg>`;
svgs['dropdown_arrow_down'] = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                                <title>DropDown Arrow Down</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Group-8">
                                        <rect id="Rectangle" fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
                                        <polygon id="Shape" fill="#5C6BDD" points="8 10 12 14 16 10"></polygon>
                                    </g>
                                </g>
                            </svg>`;
svgs['dots'] = `<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                <desc>Created with Sketch.</desc>
                <g id="Link-Shortner" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group-8">
                        <rect id="Rectangle" fill-opacity="0.01" fill="#FFFFFF" x="-5.32907052e-15" y="-5.32907052e-15" width="30" height="30"></rect>
                        <path d="M15,10 C16.375,10 17.5,8.875 17.5,7.5 C17.5,6.125 16.375,5 15,5 C13.625,5 12.5,6.125 12.5,7.5 C12.5,8.875 13.625,10 15,10 L15,10 Z M15,12.5 C13.625,12.5 12.5,13.625 12.5,15 C12.5,16.375 13.625,17.5 15,17.5 C16.375,17.5 17.5,16.375 17.5,15 C17.5,13.625 16.375,12.5 15,12.5 L15,12.5 Z M15,20 C13.625,20 12.5,21.125 12.5,22.5 C12.5,23.875 13.625,25 15,25 C16.375,25 17.5,23.875 17.5,22.5 C17.5,21.125 16.375,20 15,20 L15,20 Z" id="Shape-Copy-2" fill="#41434C" transform="translate(15.000000, 15.000000) rotate(90.000000) translate(-15.000000, -15.000000) "></path>
                    </g>
                </g>
            </svg>`;
svgs['arrow-left-black'] = `<svg width="24px" height="24px" transform="rotate(180)" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 53 (72520) - https://sketchapp.com -->
                                <desc>Created with Sketch.</desc>
                                <g id="arrow-left-black" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <g id="Line-+-Line-Copy-4" transform="translate(12.500000, 12.500000) rotate(90.000000) translate(-12.500000, -12.500000) translate(8.000000, 9.000000)" stroke="#41434C">
                                        <path d="M0.236842105,5.70567867 L4.5,1.039012" id="Line"></path>
                                        <path d="M4.5,5.70567867 L8.76315789,1.039012" id="Line-Copy-4" transform="translate(6.631579, 3.372345) scale(-1, 1) translate(-6.631579, -3.372345) "></path>
                                    </g>
                                </g>
                            </svg>`;
svgs['arrow-right-black'] = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 53 (72520) - https://sketchapp.com -->
                                <desc>Created with Sketch.</desc>
                                <g id="arrow-right-black" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <g id="Line-+-Line-Copy-4" transform="translate(12.500000, 12.500000) rotate(90.000000) translate(-12.500000, -12.500000) translate(8.000000, 9.000000)" stroke="#41434C">
                                        <path d="M0.236842105,5.70567867 L4.5,1.039012" id="Line"></path>
                                        <path d="M4.5,5.70567867 L8.76315789,1.039012" id="Line-Copy-4" transform="translate(6.631579, 3.372345) scale(-1, 1) translate(-6.631579, -3.372345) "></path>
                                    </g>
                                </g>
                            </svg>`;
module.exports = svgs;

/***/ }),

/***/ "2168":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("30cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2293":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "28fb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ba3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "31a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("874e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "34d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1106");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "351f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c760");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "38cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3df9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__("bd92");
var alphabet = __webpack_require__("41fa");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "3ebb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "41fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__("7eac");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "4418":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "493f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("15f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4ade":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5a59":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5f91":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6eb4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a59");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7eac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "874e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "898b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2293");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8dee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__("069b");


/***/ }),

/***/ "8eba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4418");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "90ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0299");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9771":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f91");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9fc2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "b224":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28fb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b2f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95d5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b67f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ba3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bb86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bd92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__("41fa");
var random = __webpack_require__("091d");
var format = __webpack_require__("e51f");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "bd98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb86");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bdce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NSnackbar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("38cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NSnackbar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NSnackbar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NSnackbar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c2a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ebb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c54b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ade");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c5cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f4eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c635":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader-white.99baa26e.gif";

/***/ }),

/***/ "c760":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c8b5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "d329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10e7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d553":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAbRJREFUWAntVzFLw1AQvksbHCzFXyCCuERxVkGsiKCr4KAVB1EHZ39Ad8FZ6OBgJzu7iDhY0VUHOwkO6hqUWluxeeel8Mrra5M+IqVLMvTdfe969+XL5R0BiK8BK4D/rb+wlV8WBGucxyGgMQT0CKDKid2lid3FXA5FWI1k2GbY3mq2kP6C2oknaEONYxJN1/99coo9bzAygQrVjgDai6tETG3LNFCNy2TzM+zvqVhUO5ICAmEFiDR50Vf9isFnQGj4hCbL61TswSwaAQFOR16LDm8L+8cqXjIQKdIjQKRxtZBv25C40DETPxIBIOxQzrPx26SgHhONgJ7lH77WSN0zZQ7OU+l6pRXr/og7bsIpNdpKoDNiW28Sq//a4vJsuyr9oLVDym6Bjc+Pd5cg3W1PYsKjsut50uUXQdyzM9cCAoy+PQJ+SV8CarbBfSPAiQdLgEeCEQGjHuAz7poAh6V2CDTLx15K+s0VscRF6xLjEfgg7bC11dlhQfre/Gb+kafetIpbQ8nRm9OdVxUzsfvWAybF/ZiYQKxArECswMAVMJoF+qnGo9b/2gn94tH/E/tBCvwBrENsNIpwjxYAAAAASUVORK5CYII="

/***/ }),

/***/ "dd14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__("41fa");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "e51f":
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "ede7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fdc0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f4eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.a9ea6bef.gif";

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NitrozenAutocomplete", function() { return /* reexport */ components_NAutocomplete; });
__webpack_require__.d(__webpack_exports__, "NitrozenButton", function() { return /* reexport */ components_NBtn; });
__webpack_require__.d(__webpack_exports__, "NitrozenBadge", function() { return /* reexport */ components_NBadge; });
__webpack_require__.d(__webpack_exports__, "NitrozenCheckBox", function() { return /* reexport */ components_NCheckbox; });
__webpack_require__.d(__webpack_exports__, "NitrozenChips", function() { return /* reexport */ components_NChips; });
__webpack_require__.d(__webpack_exports__, "NitrozenDropdown", function() { return /* reexport */ components_NDropdown; });
__webpack_require__.d(__webpack_exports__, "NitrozenDialog", function() { return /* reexport */ components_NDialog; });
__webpack_require__.d(__webpack_exports__, "NitrozenError", function() { return /* reexport */ components_NError; });
__webpack_require__.d(__webpack_exports__, "NitrozenInline", function() { return /* reexport */ components_NInline; });
__webpack_require__.d(__webpack_exports__, "NitrozenInput", function() { return /* reexport */ components_NInput; });
__webpack_require__.d(__webpack_exports__, "NitrozenMenu", function() { return /* reexport */ components_NMenu; });
__webpack_require__.d(__webpack_exports__, "NitrozenMenuItem", function() { return /* reexport */ components_NMenuItem; });
__webpack_require__.d(__webpack_exports__, "NitrozenTab", function() { return /* reexport */ components_NTab; });
__webpack_require__.d(__webpack_exports__, "NitrozenTabItem", function() { return /* reexport */ components_NTabItem; });
__webpack_require__.d(__webpack_exports__, "NitrozenPagination", function() { return /* reexport */ components_NPagination; });
__webpack_require__.d(__webpack_exports__, "NitrozenRadio", function() { return /* reexport */ components_NRadio; });
__webpack_require__.d(__webpack_exports__, "NitrozenStepper", function() { return /* reexport */ components_NStepper; });
__webpack_require__.d(__webpack_exports__, "NitrozenToggleBtn", function() { return /* reexport */ components_NToggleBtn; });
__webpack_require__.d(__webpack_exports__, "NitrozenTooltip", function() { return /* reexport */ components_NTooltip; });
__webpack_require__.d(__webpack_exports__, "strokeBtn", function() { return /* reexport */ NStrokeBtn; });
__webpack_require__.d(__webpack_exports__, "flatBtn", function() { return /* reexport */ NFlatBtn; });
__webpack_require__.d(__webpack_exports__, "clickOutside", function() { return /* reexport */ NClickOutside; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__("c8b5");
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammer);

// CONCATENATED MODULE: ./node_modules/animejs/lib/anime.es.js
/*
 * anime.js v3.2.0
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function anime_es_timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = anime_es_timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ var anime_es = (anime);

// CONCATENATED MODULE: ./src/components/NSnackbar/js/animations.js

let duration = 300;
/* harmony default export */ var animations = ({
  animateIn: el => {
    anime_es({
      targets: el,
      translateY: '-35px',
      opacity: 1,
      duration: duration,
      easing: 'easeOutCubic'
    });
  },
  animateOut: (el, onComplete) => {
    anime_es({
      targets: el,
      opacity: 0,
      marginTop: '-40px',
      duration: duration,
      easing: 'easeOutExpo',
      complete: onComplete
    });
  },
  animateOutBottom: (el, onComplete) => {
    anime_es({
      targets: el,
      opacity: 0,
      marginBottom: '-40px',
      duration: duration,
      easing: 'easeOutExpo',
      complete: onComplete
    });
  },
  animateReset: el => {
    anime_es({
      targets: el,
      left: 0,
      opacity: 1,
      duration: duration,
      easing: 'easeOutExpo'
    });
  },
  animatePanning: (el, left, opacity) => {
    anime_es({
      targets: el,
      duration: 10,
      easing: 'easeOutQuad',
      left: left,
      opacity: opacity
    });
  },
  animatePanEnd: (el, onComplete) => {
    anime_es({
      targets: el,
      opacity: 0,
      duration: duration,
      easing: 'easeOutExpo',
      complete: onComplete
    });
  },
  clearAnimation: toasts => {
    let timeline = anime_es.timeline();
    toasts.forEach(t => {
      timeline.add({
        targets: t.el,
        opacity: 0,
        right: '-40px',
        duration: 300,
        offset: '-=150',
        easing: 'easeOutExpo',
        complete: () => {
          t.remove();
        }
      });
    });
  }
});
// CONCATENATED MODULE: ./src/components/NSnackbar/js/object.js
 // fade the toast away

const goAway = (el, delay, instance) => {
  // Animate toast out
  setTimeout(function () {
    // if the toast is on bottom set it as bottom animation
    if (instance.cached_options.position && instance.cached_options.position.includes('bottom')) {
      animations.animateOutBottom(el, () => {
        instance.remove(el);
      });
      return;
    }

    animations.animateOut(el, () => {
      instance.remove(el);
    });
  }, delay);
  return true;
}; // change the text of toast

const changeText = (el, text) => {
  if (typeof HTMLElement === "object" ? text instanceof HTMLElement : text && typeof text === "object" && text !== null && text.nodeType === 1 && typeof text.nodeName === "string") {
    el.appendChild(text);
  } else {
    el.innerHTML = text;
  }

  return undefined;
};
const toastObject = function (el, instance) {
  let disposed = false;
  return {
    el: el,
    text: function (text) {
      changeText(el, text);
      return this;
    },
    goAway: function (delay = 800) {
      disposed = true;
      return goAway(el, delay, instance);
    },
    remove: function () {
      instance.remove(el);
    },
    disposed: function () {
      return disposed;
    }
  };
};
// CONCATENATED MODULE: ./src/components/NSnackbar/js/show.js




const uuid = __webpack_require__("8dee"); // string includes polyfill


if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function (search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    }
  });
}

let show_options = {};
let _instance = null;
/**
 * parse Options
 *
 * @param options
 * @returns {{el: *, text: text, goAway: goAway}}
 */

const parseOptions = function (options) {
  // class name to be added on the toast
  options.className = options.className || null; // complete call back of the toast

  options.onComplete = options.onComplete || null; // toast position

  options.position = options.position || "top-right"; // toast duration

  options.duration = options.duration || null; // keep toast open on mouse over

  options.keepOnHover = options.keepOnHover || false; // normal type will allow the basic color

  options.theme = options.theme || "nitrozen-snackbar-primary"; // normal type will allow the basic color

  options.type = options.type || "default"; // class name to be added on the toast container

  options.containerClass = options.containerClass || null; // check if the fullWidth is enabled

  options.fullWidth = options.fullWidth || false; // get icon name

  options.icon = options.icon || null; // get action name

  options.action = options.action || null; // check if the toast needs to be fitted in the screen (no margin gap between screen)

  options.fitToScreen = options.fitToScreen || null; // check if closes the toast when the user swipes it

  options.closeOnSwipe = typeof options.closeOnSwipe !== 'undefined' ? options.closeOnSwipe : true; // get the icon pack name. defaults to material

  options.iconPack = options.iconPack || 'material';
  /* transform options */
  // toast class

  if (options.className && typeof options.className === "string") {
    options.className = options.className.split(' ');
  }

  if (!options.className) {
    options.className = [];
  }

  options.theme && options.className.push(options.theme.trim());
  options.type && options.className.push(options.type); // toast container class

  if (options.containerClass && typeof options.containerClass === "string") {
    options.containerClass = options.containerClass.split(' ');
  }

  if (!options.containerClass) {
    options.containerClass = [];
  }

  options.position && options.containerClass.push(options.position.trim());
  options.fullWidth && options.containerClass.push('full-width');
  options.fitToScreen && options.containerClass.push('fit-to-screen');
  show_options = options;
  return options;
};

const createToast = function (html, options) {
  // Create toast
  let toast = document.createElement('div');
  toast.classList.add('nitrozen-snackbar'); // set unique identifier

  toast.hash = uuid.generate();

  if (options.className) {
    options.className.forEach(className => {
      toast.classList.add(className);
    });
  } // If type of parameter is HTML Element


  if (typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName === "string") {
    toast.appendChild(html);
  } else {
    // Insert as text;
    toast.innerHTML = html;
  } // add material icon if available


  createIcon(options, toast);

  if (options.closeOnSwipe) {
    // Bind hammer
    let hammerHandler = new hammer_default.a(toast, {
      prevent_default: false
    });
    hammerHandler.on('pan', function (e) {
      let deltaX = e.deltaX;
      let activationDistance = 80; // Change toast state

      if (!toast.classList.contains('panning')) {
        toast.classList.add('panning');
      }

      let opacityPercent = 1 - Math.abs(deltaX / activationDistance);
      if (opacityPercent < 0) opacityPercent = 0;
      animations.animatePanning(toast, deltaX, opacityPercent);
    });
    hammerHandler.on('panend', function (e) {
      let deltaX = e.deltaX;
      let activationDistance = 80; // If toast dragged past activation point

      if (Math.abs(deltaX) > activationDistance) {
        animations.animatePanEnd(toast, function () {
          if (typeof options.onComplete === "function") {
            options.onComplete();
          }

          if (toast.parentNode) {
            _instance.remove(toast);
          }
        });
      } else {
        toast.classList.remove('panning'); // Put toast back into original position

        animations.animateReset(toast);
      }
    });
  } // create and append actions


  if (Array.isArray(options.action)) {
    options.action.forEach(action => {
      let el = createAction(action, toastObject(toast, _instance));
      if (el) toast.appendChild(el);
    });
  } else if (typeof options.action === 'object') {
    let action = createAction(options.action, toastObject(toast, _instance));
    if (action) toast.appendChild(action);
  }

  return toast;
};

const createIcon = (options, toast) => {
  // add material icon if available
  if (options.icon) {
    let iel = document.createElement('i');
    iel.setAttribute('aria-hidden', 'true');

    switch (options.iconPack) {
      case 'fontawesome':
        iel.classList.add('fa');
        let faName = options.icon.name ? options.icon.name : options.icon;

        if (faName.includes('fa-')) {
          iel.classList.add(faName.trim());
        } else {
          iel.classList.add('fa-' + faName.trim());
        }

        break;

      case 'mdi':
        iel.classList.add('mdi');
        let mdiName = options.icon.name ? options.icon.name : options.icon;

        if (mdiName.includes('mdi-')) {
          iel.classList.add(mdiName.trim());
        } else {
          iel.classList.add('mdi-' + mdiName.trim());
        }

        break;

      case 'custom-class':
        let classes = options.icon.name ? options.icon.name : options.icon;

        if (typeof classes === 'string') {
          classes.split(' ').forEach(className => {
            iel.classList.add(className);
          });
        } else if (Array.isArray(classes)) {
          classes.forEach(className => {
            iel.classList.add(className.trim());
          });
        }

        break;

      case 'callback':
        let callback = options.icon && options.icon instanceof Function ? options.icon : null;

        if (callback) {
          iel = callback(iel);
        }

        break;

      default:
        iel.classList.add('material-icons');
        iel.textContent = options.icon.name ? options.icon.name : options.icon;
    }

    if (options.icon.after) {
      iel.classList.add('after');
    }

    appendIcon(options, iel, toast);
  }
};

const appendIcon = (options, el, toast) => {
  if (options.icon) {
    if (options.icon.after && options.icon.name) {
      toast.appendChild(el);
    } else if (options.icon.name) {
      toast.insertBefore(el, toast.firstChild);
    } else {
      toast.insertBefore(el, toast.firstChild);
    }
  }
};
/**
 * Create Action for the toast
 *
 * @param action
 * @param toastObject
 * @returns {Element}
 */


const createAction = (action, toastObject) => {
  if (!action) {
    return null;
  }

  let el = document.createElement('a');
  el.classList.add('action');
  el.classList.add('ripple');

  if (action.text) {
    el.text = action.text;
  }

  if (action.href) {
    el.href = action.href;
  }

  if (action.target) {
    el.target = action.target;
  }

  if (action.icon) {
    // add icon class to style it
    el.classList.add('icon'); // create icon element

    let iel = document.createElement('i');

    switch (show_options.iconPack) {
      case 'fontawesome':
        iel.classList.add('fa');

        if (action.icon.includes('fa-')) {
          iel.classList.add(action.icon.trim());
        } else {
          iel.classList.add('fa-' + action.icon.trim());
        }

        break;

      case 'mdi':
        iel.classList.add('mdi');

        if (action.icon.includes('mdi-')) {
          iel.classList.add(action.icon.trim());
        } else {
          iel.classList.add('mdi-' + action.icon.trim());
        }

        break;

      case 'custom-class':
        if (typeof action.icon === 'string') {
          action.icon.split(' ').forEach(className => {
            el.classList.add(className);
          });
        } else if (Array.isArray(action.icon)) {
          action.icon.forEach(className => {
            el.classList.add(className.trim());
          });
        }

        break;

      default:
        iel.classList.add('material-icons');
        iel.textContent = action.icon;
    } // append it to the button


    el.appendChild(iel);
  }

  if (action.class) {
    if (typeof action.class === 'string') {
      action.class.split(' ').forEach(className => {
        el.classList.add(className);
      });
    } else if (Array.isArray(action.class)) {
      action.class.forEach(className => {
        el.classList.add(className.trim());
      });
    }
  } // initiate push with ready


  if (action.push) {
    el.addEventListener('click', e => {
      e.preventDefault(); // check if vue router passed through global options

      if (!show_options.router) {
        console.warn('[nitrozen-snackbar] : Vue Router instance is not attached. please check the docs');
        return;
      }

      show_options.router.push(action.push); // fade away toast after action.


      if (!action.push.dontClose) {
        toastObject.goAway(0);
      }
    });
  }

  if (action.onClick && typeof action.onClick === 'function') {
    el.addEventListener('click', e => {
      if (action.onClick) {
        e.preventDefault();
        action.onClick(e, toastObject);
      }
    });
  }

  return el;
};
/**
 * this method will create the toast
 *
 * @param instance
 * @param message
 * @param options
 * @returns {{el: *, text: text, goAway: goAway}}
 */


/* harmony default export */ var show = (function (instance, message, options) {
  // share the instance across
  _instance = instance;
  options = parseOptions(options);
  const container = _instance.container;
  options.containerClass.unshift('nitrozen-snackbar-container'); // check if the container classes has changed if so update it

  if (container.className !== options.containerClass.join(' ')) {
    container.className = "";
    options.containerClass.forEach(className => {
      container.classList.add(className);
    });
  } // Select and append toast


  let newToast = createToast(message, options); // only append toast if message is not undefined

  if (message) {
    container.appendChild(newToast);
  }

  newToast.style.opacity = 0; // Animate toast in

  animations.animateIn(newToast); // Allows timer to be pause while being panned

  let timeLeft = options.duration;
  let counterInterval;

  if (timeLeft !== null) {
    const createInterval = () => setInterval(function () {
      if (newToast.parentNode === null) window.clearInterval(counterInterval); // If toast is not being dragged, decrease its time remaining

      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        animations.animateOut(newToast, function () {
          // Call the optional callback
          if (typeof options.onComplete === "function") options.onComplete(); // Remove toast after it times out

          if (newToast.parentNode) {
            _instance.remove(newToast);
          }
        });
        window.clearInterval(counterInterval);
      }
    }, 20);

    counterInterval = createInterval(); // Toggle interval on hover

    if (options.keepOnHover) {
      newToast.addEventListener('mouseover', () => {
        window.clearInterval(counterInterval);
      });
      newToast.addEventListener('mouseout', () => {
        counterInterval = createInterval();
      });
    }
  }

  return toastObject(newToast, _instance);
});
;
// CONCATENATED MODULE: ./src/components/NSnackbar/js/snackbar.js



const snackbar_uuid = __webpack_require__("8dee"); // add Object.assign Polyfill
// require('es6-object-assign').polyfill();

/**
 * Toast
 * core instance of toast
 *
 * @param _options
 * @returns {Snackbar}
 * @constructor
 */


const Snackbar = function (_options) {
  /**
   * Unique id of the toast
   */
  this.id = snackbar_uuid.generate();
  /**
   * Shared Options of the Toast
   */

  this.options = _options;
  /**
   * Cached Options of the Toast
   */

  this.cached_options = {};
  /**
   * Shared Toasts list
   */

  this.global = {};
  /**
   * All Registered Groups
   */

  this.groups = [];
  /**
   * All Registered Toasts
   */

  this.toasts = [];
  /**
   * Element of the Toast Container
   */

  this.container = null;
  /**
   * Initiate toast container
   */

  initiateToastContainer(this);
  /**
   * Initiate custom toasts
   */

  initiateCustomToasts(this);
  /**
   * Create New Group of Toasts
   *
   * @param o
   */

  this.group = o => {
    if (!o) o = {};

    if (!o.globalToasts) {
      o.globalToasts = {};
    } // share parents global toasts


    Object.assign(o.globalToasts, this.global); // tell parent about the group

    let group = new Snackbar(o);
    this.groups.push(group);
    return group;
  };
  /**
   * Register a Global Toast
   *
   * @param name
   * @param payload
   * @param options
   */


  this.register = (name, payload, options) => {
    options = options || {};
    return register(this, name, payload, options);
  };
  /**
   * Show a Simple Toast
   *
   * @param message
   * @param options
   * @returns {*}
   */


  this.show = (message, options) => {
    return _show(this, message, options);
  };
  /**
   * Show a Toast with Success Style
   *
   * @param message
   * @param options
   * @returns {*}
   */


  this.success = (message, options) => {
    options = options || {};
    options.type = "success";
    return _show(this, message, options);
  };
  /**
   * Show a Toast with Info Style
   *
   * @param message
   * @param options
   * @returns {*}
   */


  this.info = (message, options) => {
    options = options || {};
    options.type = "info";
    return _show(this, message, options);
  };
  /**
   * Show a Toast with Error Style
   *
   * @param message
   * @param options
   * @returns {*}
   */


  this.error = (message, options) => {
    options = options || {};
    options.type = "error";
    return _show(this, message, options);
  };
  /**
   * Remove a Toast
   * @param el
   */


  this.remove = el => {
    this.toasts = this.toasts.filter(t => {
      return t.el.hash !== el.hash;
    });
    if (el.parentNode) el.parentNode.removeChild(el);
  };
  /**
   * Clear All Toasts
   *
   * @returns {boolean}
   */


  this.clear = onClear => {
    animations.clearAnimation(this.toasts, () => {
      onClear && onClear();
    });
    this.toasts = [];
    return true;
  };

  return this;
};
/**
 * Wrapper for show method in order to manipulate options
 *
 * @param instance
 * @param message
 * @param options
 * @returns {*}
 * @private
 */

const _show = function (instance, message, options) {
  options = options || {};
  let toast = null;

  if (typeof options !== "object") {
    console.error("Options should be a type of object. given : " + options);
    return null;
  } // singleton feature


  if (instance.options.singleton && instance.toasts.length > 0) {
    instance.cached_options = options;
    instance.toasts[instance.toasts.length - 1].goAway(0);
  } // clone the global options


  let _options = Object.assign({}, instance.options); // merge the cached global options with options


  Object.assign(_options, options);
  toast = show(instance, message, _options);
  instance.toasts.push(toast);
  return toast;
};
/**
 * Register the Custom Toasts
 */

const initiateCustomToasts = function (instance) {
  let customToasts = instance.options.globalToasts; // this will initiate toast for the custom toast.

  let initiate = (message, options) => {
    // check if passed option is a available method if so call it.
    if (typeof options === 'string' && instance[options]) {
      return instance[options].apply(instance, [message, {}]);
    } // or else create a new toast with passed options.


    return _show(instance, message, options);
  };

  if (customToasts) {
    instance.global = {};
    Object.keys(customToasts).forEach(key => {
      // register the custom toast events to the Toast.custom property
      instance.global[key] = (payload = {}) => {
        //console.log(payload);
        // return the it in order to expose the Toast methods
        return customToasts[key].apply(null, [payload, initiate]);
      };
    });
  }
};

const initiateToastContainer = function (instance) {
  // create notification container
  const container = document.createElement('div');
  container.id = instance.id;
  container.setAttribute('role', 'status');
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('aria-atomic', 'false');
  document.body.appendChild(container);
  instance.container = container;
};

const register = function (instance, name, callback, options) {
  !instance.options.globalToasts ? instance.options.globalToasts = {} : null;

  instance.options.globalToasts[name] = function (payload, initiate) {
    // if call back is string we will keep it that way..
    let message = null;

    if (typeof callback === 'string') {
      message = callback;
    }

    if (typeof callback === 'function') {
      message = callback(payload);
    }

    return initiate(message, options);
  };

  initiateCustomToasts(instance);
};

/* harmony default export */ var snackbar = ({
  Snackbar
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NSnackbar/NSnackbar.vue?vue&type=template&id=1749b5fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NSnackbar/NSnackbar.vue?vue&type=template&id=1749b5fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NSnackbar/NSnackbar.vue?vue&type=script&lang=js&
//
/* harmony default export */ var NSnackbarvue_type_script_lang_js_ = ({
  name: "nitrozen-snackbar",
  props: {},

  data() {
    return {};
  },

  computed: {}
});
// CONCATENATED MODULE: ./src/components/NSnackbar/NSnackbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var NSnackbar_NSnackbarvue_type_script_lang_js_ = (NSnackbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NSnackbar/NSnackbar.vue?vue&type=style&index=0&lang=less&
var NSnackbarvue_type_style_index_0_lang_less_ = __webpack_require__("bdce");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/NSnackbar/NSnackbar.vue






/* normalize component */

var component = normalizeComponent(
  NSnackbar_NSnackbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NSnackbar = (component.exports);
// CONCATENATED MODULE: ./src/components/NSnackbar/index.js
// import NSnackbar from './NSnackbar';
// export default NSnackbar;

/**
 * Clone from https://github.com/shakee93/vue-toasted
 */


const NSnackbar_NSnackbar = {
  install(Vue, options) {
    if (!options) {
      options = {};
    }

    const Snack = new Snackbar(options);
    Vue.component('nitrozen-snackbar', NSnackbar);
    Vue.Snackbar = Vue.snackbar = Vue.prototype.$snackbar = Snack;
  }

}; // register plugin if it is used via cdn or directly as a script tag

if (typeof window !== 'undefined' && window.Vue) {
  window.Snackbar = window.snackbar = NSnackbar_NSnackbar;
}

/* harmony default export */ var components_NSnackbar = (NSnackbar_NSnackbar);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NAutocomplete/NAutocomplete.vue?vue&type=template&id=91f50dce&
var NAutocompletevue_type_template_id_91f50dce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-autocomplete",attrs:{"id":"parent-div"}},[_c('nitrozen-input',{attrs:{"type":_vm.type,"showSearchIcon":true,"id":_vm.id,"placeholder":_vm.placeholder},on:{"input":function($event){return _vm.autocomplete($event)},"keydown":function($event){return _vm.keydownFunc($event)}},model:{value:(_vm.autocompleteModal),callback:function ($$v) {_vm.autocompleteModal=$$v},expression:"autocompleteModal"}})],1)}
var NAutocompletevue_type_template_id_91f50dce_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NAutocomplete/NAutocomplete.vue?vue&type=template&id=91f50dce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInput.vue?vue&type=template&id=58a2dc39&
var NInputvue_type_template_id_58a2dc39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-form-input"},[(_vm.loaderShow && _vm.search)?_c('span',{staticClass:"nitrozen-loader-div"},[_c('img',{attrs:{"src":__webpack_require__("fa5e")}})]):_vm._e(),(_vm.showSearchIcon)?_c('span',{staticClass:"nitrozen-search-icon"},[_c('nitrozen-inline',{attrs:{"icon":'search'}})],1):_vm._e(),_c('div',{staticClass:"nitrozen-input-grp"},[(_vm.showPrefix)?_c('nitrozen-input-prefix',{staticClass:"nitrozen-input-prefix nitrozen-remove-right-border",class:{ 'nitrozen-prefix-padding': !_vm.custom }},[(_vm.custom)?_c('span',[_vm._t("default")],2):_c('span',[_vm._v(_vm._s(_vm.prefix))])]):_vm._e(),(_vm.type != 'textarea')?_c('input',{staticClass:"n-input input-text",class:{ 
        'nitrozen-search-input-padding': _vm.showSearchIcon,
        'nitrozen-remove-left-border': _vm.showPrefix, 
        'nitrozen-remove-right-border': _vm.showSuffix 
      },attrs:{"maxlength":_vm.maxlength,"type":_vm.type,"placeholder":_vm.placeholder,"id":_vm.id,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.eventEmit($event, 'keyup')},"change":function($event){return _vm.eventEmit($event, 'change')},"blur":function($event){return _vm.eventEmit($event, 'blur')},"focus":function($event){return _vm.eventEmit($event, 'focus')},"click":function($event){return _vm.eventEmit($event, 'click')},"keypress":function($event){return _vm.eventEmit($event, 'keypress')},"input":_vm.valueChange}}):_vm._e(),(_vm.type == 'textarea')?_c('textarea',{staticClass:"n-input input-text",class:{ 'n-input-textarea': _vm.type == 'textarea' },attrs:{"maxlength":_vm.maxlength,"disabled":_vm.disabled,"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.eventEmit($event, 'keyup')},"change":function($event){return _vm.eventEmit($event, 'change')},"blur":function($event){return _vm.eventEmit($event, 'blur')},"focus":function($event){return _vm.eventEmit($event, 'focus')},"click":function($event){return _vm.eventEmit($event, 'click')},"keypress":function($event){return _vm.eventEmit($event, 'keypress')},"input":_vm.valueChange}}):_vm._e(),(_vm.showSuffix)?_c('nitrozen-input-suffix',{staticClass:"nitrozen-input-suffix nitrozen-remove-left-border",class:{ 'nitrozen-suffix-padding': !_vm.custom }},[(_vm.custom)?_c('span',[_vm._t("default")],2):_c('span',[_vm._v(_vm._s(_vm.suffix))])]):_vm._e()],1),_c('div',{staticClass:"n-input-label-container"},[(_vm.label)?_c('label',{staticClass:"n-input-label",attrs:{"for":_vm.id}},[_vm._v(" "+_vm._s(_vm.label)+" "),(_vm.showTooltip)?_c('span',{staticClass:"nitrozen-tooltip-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":_vm.tooltipText}})],1):_vm._e()]):_vm._e(),(_vm.maxlength)?_c('label',{staticClass:"n-input-label n-input-maxlength"},[_vm._v(_vm._s(_vm.length)+"/"+_vm._s(_vm.maxlength))]):_vm._e()])])}
var NInputvue_type_template_id_58a2dc39_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NInput/NInput.vue?vue&type=template&id=58a2dc39&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputPrefix.vue?vue&type=template&id=0872c97f&
var NInputPrefixvue_type_template_id_0872c97f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var NInputPrefixvue_type_template_id_0872c97f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NInput/NInputPrefix.vue?vue&type=template&id=0872c97f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputPrefix.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NInputPrefixvue_type_script_lang_js_ = ({
  name: 'nitrozen-input-prefix'
});
// CONCATENATED MODULE: ./src/components/NInput/NInputPrefix.vue?vue&type=script&lang=js&
 /* harmony default export */ var NInput_NInputPrefixvue_type_script_lang_js_ = (NInputPrefixvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NInput/NInputPrefix.vue





/* normalize component */

var NInputPrefix_component = normalizeComponent(
  NInput_NInputPrefixvue_type_script_lang_js_,
  NInputPrefixvue_type_template_id_0872c97f_render,
  NInputPrefixvue_type_template_id_0872c97f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInputPrefix = (NInputPrefix_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputSuffix.vue?vue&type=template&id=98c548c2&
var NInputSuffixvue_type_template_id_98c548c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var NInputSuffixvue_type_template_id_98c548c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NInput/NInputSuffix.vue?vue&type=template&id=98c548c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputSuffix.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NInputSuffixvue_type_script_lang_js_ = ({
  name: 'nitrozen-input-suffix'
});
// CONCATENATED MODULE: ./src/components/NInput/NInputSuffix.vue?vue&type=script&lang=js&
 /* harmony default export */ var NInput_NInputSuffixvue_type_script_lang_js_ = (NInputSuffixvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NInput/NInputSuffix.vue





/* normalize component */

var NInputSuffix_component = normalizeComponent(
  NInput_NInputSuffixvue_type_script_lang_js_,
  NInputSuffixvue_type_template_id_98c548c2_render,
  NInputSuffixvue_type_template_id_98c548c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInputSuffix = (NInputSuffix_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTooltip/NTooltip.vue?vue&type=template&id=78f5e4c4&
var NTooltipvue_type_template_id_78f5e4c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-tooltip"},[_c('nitrozen-inline',{attrs:{"icon":'info'}}),_c('span',{staticClass:"nitrozen-tooltiptext",class:_vm.tooltipPositionClass},[(_vm.tooltipText)?[_vm._v(_vm._s(_vm.tooltipText))]:[_vm._t("default")]],2)],1)}
var NTooltipvue_type_template_id_78f5e4c4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTooltip/NTooltip.vue?vue&type=template&id=78f5e4c4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInline/NInline.vue?vue&type=template&id=65d43b41&
var NInlinevue_type_template_id_65d43b41_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({staticClass:"nitrozen-inline-svg",domProps:{"innerHTML":_vm._s(_vm.getSVG)}},_vm.$listeners))}
var NInlinevue_type_template_id_65d43b41_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NInline/NInline.vue?vue&type=template&id=65d43b41&

// EXTERNAL MODULE: ./src/utils/svgs.js
var svgs = __webpack_require__("1c13");
var svgs_default = /*#__PURE__*/__webpack_require__.n(svgs);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInline/NInline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var NInlinevue_type_script_lang_js_ = ({
  name: 'nitrozen-inline',
  props: {
    icon: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      basePath: './../../assets/'
    };
  },

  computed: {
    getSVG() {
      return svgs_default.a[this.icon];
    }

  }
});
// CONCATENATED MODULE: ./src/components/NInline/NInline.vue?vue&type=script&lang=js&
 /* harmony default export */ var NInline_NInlinevue_type_script_lang_js_ = (NInlinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NInline/NInline.vue?vue&type=style&index=0&lang=less&
var NInlinevue_type_style_index_0_lang_less_ = __webpack_require__("898b");

// CONCATENATED MODULE: ./src/components/NInline/NInline.vue






/* normalize component */

var NInline_component = normalizeComponent(
  NInline_NInlinevue_type_script_lang_js_,
  NInlinevue_type_template_id_65d43b41_render,
  NInlinevue_type_template_id_65d43b41_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInline = (NInline_component.exports);
// CONCATENATED MODULE: ./src/components/NInline/index.js

/* harmony default export */ var components_NInline = (NInline);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTooltip/NTooltip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NTooltipvue_type_script_lang_js_ = ({
  name: "nitrozen-tooltip",
  components: {
    "nitrozen-inline": components_NInline
  },
  props: {
    position: {
      type: String,
      default: "bottom"
    },
    tooltipText: {
      type: String,
      default: ""
    }
  },
  computed: {
    tooltipPositionClass: function () {
      return {
        "nitrozen-tooltip-top": this.position == "top",
        "nitrozen-tooltip-right": this.position == "right",
        "nitrozen-tooltip-left": this.position == "left",
        "nitrozen-tooltip-bottom": this.position == "bottom"
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/NTooltip/NTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var NTooltip_NTooltipvue_type_script_lang_js_ = (NTooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NTooltip/NTooltip.vue?vue&type=style&index=0&lang=less&
var NTooltipvue_type_style_index_0_lang_less_ = __webpack_require__("b224");

// CONCATENATED MODULE: ./src/components/NTooltip/NTooltip.vue






/* normalize component */

var NTooltip_component = normalizeComponent(
  NTooltip_NTooltipvue_type_script_lang_js_,
  NTooltipvue_type_template_id_78f5e4c4_render,
  NTooltipvue_type_template_id_78f5e4c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NTooltip = (NTooltip_component.exports);
// CONCATENATED MODULE: ./src/components/NTooltip/index.js

/* harmony default export */ var components_NTooltip = (NTooltip);
// CONCATENATED MODULE: ./src/utils/NUuid.js
const NitrozenUuid = () => {
  return Math.random().toString(36).slice(4);
};

/* harmony default export */ var NUuid = (NitrozenUuid);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var NInputvue_type_script_lang_js_ = ({
  name: "nitrozen-input",
  components: {
    'nitrozen-input-prefix': NInputPrefix,
    'nitrozen-input-suffix': NInputSuffix,
    "nitrozen-tooltip": components_NTooltip,
    "nitrozen-inline": components_NInline
  },

  data() {
    return {
      loaderShow: false
    };
  },

  computed: {
    length: function () {
      return this.value.length;
    }
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ""
    },
    showError: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ""
    },
    search: {
      type: Boolean,
      default: false
    },
    showSearchIcon: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: false
    },
    tooltipText: {
      type: String,
      default: ""
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-input" + NUuid()
    },
    maxlength: {
      type: Number
    },
    showPrefix: {
      type: Boolean,
      default: false
    },
    showSuffix: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String
    },
    suffix: {
      type: String
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    valueChange: function (event) {
      let value = event.target.value;

      if (this.type === 'number') {
        value = Number(event.target.value);
      }

      this.$emit("input", value);

      if (this.search) {
        // Do this with debouncing
        this.loaderShow = true;
      }
    },
    eventEmit: function (event, type) {
      this.$emit(type, event);
    }
  } // render(createElement){
  //     let inputAttrs = {
  //         staticClass= "n-input input-text"
  //     }
  // }

});
// CONCATENATED MODULE: ./src/components/NInput/NInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var NInput_NInputvue_type_script_lang_js_ = (NInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NInput/NInput.vue?vue&type=style&index=0&lang=less&
var NInputvue_type_style_index_0_lang_less_ = __webpack_require__("fcf0");

// CONCATENATED MODULE: ./src/components/NInput/NInput.vue






/* normalize component */

var NInput_component = normalizeComponent(
  NInput_NInputvue_type_script_lang_js_,
  NInputvue_type_template_id_58a2dc39_render,
  NInputvue_type_template_id_58a2dc39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInput = (NInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NAutocomplete/NAutocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var NAutocompletevue_type_script_lang_js_ = ({
  name: 'nitrozen-autocomplete',
  components: {
    'nitrozen-input': NInput
  },
  props: {
    id: {
      type: [Number, String]
    },
    placeholder: {
      type: String,
      default: ''
    },
    dataset: {
      type: Array,
      default: []
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      currentFocus: 0,
      autocompleteModal: ''
    };
  },

  methods: {
    autocomplete: function (event) {
      var autocompleteList,
          autocompleteItem,
          index,
          inputValue = event;
      /*close any already open lists of autocompleted values*/

      this.closeAllLists();

      if (!inputValue) {
        return false;
      }

      this.currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/

      autocompleteList = document.createElement("DIV");
      autocompleteList.setAttribute("id", this.id + "autocomplete-list");
      autocompleteList.setAttribute("class", "nitrozen-autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/

      document.getElementById('parent-div').appendChild(autocompleteList);
      /*for each item in the array...*/

      for (index = 0; index < this.dataset.length; index++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (this.dataset[index].substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          autocompleteItem = document.createElement("DIV");
          /*make the matching letters bold:*/

          autocompleteItem.innerHTML = "<span>" + this.dataset[index].substr(0, inputValue.length) + "</span>";
          autocompleteItem.innerHTML += this.dataset[index].substr(inputValue.length);
          /*insert a input field that will hold the current array item's value:*/

          autocompleteItem.innerHTML += "<input type='hidden' value='" + this.dataset[index] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/

          var vm = this;
          autocompleteItem.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            var value = this.getElementsByTagName("input")[0].value;
            vm.autocompleteModal = value;
            vm.$emit('input', value);
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/

            vm.closeAllLists(value);
          });
          autocompleteList.appendChild(autocompleteItem);
        }
      }
    },
    keydownFunc: function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");

      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        this.currentFocus++;
        /*and and make the current item more visible:*/

        this.addActive(x);
      } else if (e.keyCode == 38) {
        //up

        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        this.currentFocus--;
        /*and and make the current item more visible:*/

        this.addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();

        if (this.currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[this.currentFocus].click();
        }
      }
    },
    addActive: function (x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/

      this.removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/

      x[currentFocus].classList.add("autocomplete-active");
    },
    removeActive: function (x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    },
    closeAllLists: function (element) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("nitrozen-autocomplete-items");

      for (var i = 0; i < x.length; i++) {
        if (element != x[i]) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/NAutocomplete/NAutocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var NAutocomplete_NAutocompletevue_type_script_lang_js_ = (NAutocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NAutocomplete/NAutocomplete.vue?vue&type=style&index=0&lang=less&
var NAutocompletevue_type_style_index_0_lang_less_ = __webpack_require__("c54b");

// CONCATENATED MODULE: ./src/components/NAutocomplete/NAutocomplete.vue






/* normalize component */

var NAutocomplete_component = normalizeComponent(
  NAutocomplete_NAutocompletevue_type_script_lang_js_,
  NAutocompletevue_type_template_id_91f50dce_render,
  NAutocompletevue_type_template_id_91f50dce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NAutocomplete = (NAutocomplete_component.exports);
// CONCATENATED MODULE: ./src/components/NAutocomplete/index.js

/* harmony default export */ var components_NAutocomplete = (NAutocomplete);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBtn/NBtnContent.vue?vue&type=template&id=7042c6ec&
var NBtnContentvue_type_template_id_7042c6ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"n-button-content"},[(_vm.icon)?_c('div',{staticClass:"social-icon"},[(_vm.icon == 'facebook')?_c('img',{attrs:{"src":__webpack_require__("d553")}}):_vm._e()]):_vm._e(),(!_vm.showProgress)?_vm._t("default"):_vm._e(),(_vm.showProgress)?_c('div',{staticClass:"n-btn-spin"},[_c('img',{staticClass:"n-btn-spinner",staticStyle:{"width":"50px"},attrs:{"src":__webpack_require__("c635")}})]):_vm._e()],2)}
var NBtnContentvue_type_template_id_7042c6ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NBtn/NBtnContent.vue?vue&type=template&id=7042c6ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBtn/NBtnContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NBtnContentvue_type_script_lang_js_ = ({
  name: 'nitrozen-button-content',
  props: {
    showProgress: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/NBtn/NBtnContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var NBtn_NBtnContentvue_type_script_lang_js_ = (NBtnContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NBtn/NBtnContent.vue?vue&type=style&index=0&lang=less&
var NBtnContentvue_type_style_index_0_lang_less_ = __webpack_require__("8eba");

// CONCATENATED MODULE: ./src/components/NBtn/NBtnContent.vue






/* normalize component */

var NBtnContent_component = normalizeComponent(
  NBtn_NBtnContentvue_type_script_lang_js_,
  NBtnContentvue_type_template_id_7042c6ec_render,
  NBtnContentvue_type_template_id_7042c6ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NBtnContent = (NBtnContent_component.exports);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/directives/NStrokeBtn.js

const strokeBtn = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('stroke-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-button-stroke');

    if (vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    } else {
      el.classList.add('n-button-stroke-primary');
    }
  }
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(strokeBtn); // bind
// inserted
// update
// componentUpdated
// unbind

/* harmony default export */ var NStrokeBtn = (strokeBtn);
// CONCATENATED MODULE: ./src/directives/NFlatBtn.js

const flatBtn = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('flat-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-flat-button');

    if (vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-flat-button-secondary');
    } else {
      el.classList.add('n-flat-button-primary');
    }
  }
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(flatBtn); // bind
// inserted
// update
// componentUpdated
// unbind

/* harmony default export */ var NFlatBtn = (flatBtn);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBtn/NBtn.vue?vue&type=script&lang=js&



/* harmony default export */ var NBtnvue_type_script_lang_js_ = ({
  name: 'nitrozen-button',
  components: {
    NButtonContent: NBtnContent
  },
  directives: {
    strokeBtn: NStrokeBtn,
    flatBtn: NFlatBtn
  },
  props: {
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    content: String,
    rounded: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary'
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    focused: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },

  render(createElement) {
    const slotElement = createElement('n-button-content', {
      props: {
        showProgress: this.showProgress,
        icon: this.icon
      }
    }, this.$slots.default);
    let buttonAttrs = {
      staticClass: 'n-button ripple',
      class: [{
        'n-button-rounded': this.rounded,
        'n-button-primary': this.theme == 'primary',
        'n-button-secondary': this.theme == 'secondary',
        'n-button-large': this.size == 'large',
        'n-button-mid': this.size == 'medium',
        'n-button-focused': this.focused
      }],
      attrs: {
        href: this.href,
        disabled: this.disabled,
        type: !this.href && (this.type || 'button')
      },
      on: { ...this.$listeners
      }
    };
    let tag = 'button';

    if (this.href) {
      tag = 'a';
      buttonAttrs;
    } // const slotElement = this.content;
    // const slotElement = createElement('slot');


    return createElement(tag, buttonAttrs, [slotElement]);
  }

});
// CONCATENATED MODULE: ./src/components/NBtn/NBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var NBtn_NBtnvue_type_script_lang_js_ = (NBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NBtn/NBtn.vue?vue&type=style&index=0&lang=less&
var NBtnvue_type_style_index_0_lang_less_ = __webpack_require__("90ff");

// CONCATENATED MODULE: ./src/components/NBtn/NBtn.vue
var NBtn_render, NBtn_staticRenderFns





/* normalize component */

var NBtn_component = normalizeComponent(
  NBtn_NBtnvue_type_script_lang_js_,
  NBtn_render,
  NBtn_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NBtn = (NBtn_component.exports);
// CONCATENATED MODULE: ./src/components/NBtn/index.js

/* harmony default export */ var components_NBtn = (NBtn);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBadge/NBadge.vue?vue&type=template&id=2234aa39&
var NBadgevue_type_template_id_2234aa39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"nitrozen-badge"}},[_c('div',{staticClass:"nitrozen-badge",class:[_vm.addClass]},[_vm._t("default")],2)])}
var NBadgevue_type_template_id_2234aa39_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NBadge/NBadge.vue?vue&type=template&id=2234aa39&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBadge/NBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var NBadgevue_type_script_lang_js_ = ({
  name: "nitrozen-badge",
  props: {
    state: {
      type: String,
      default: "none"
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      let className = "";

      switch (this.state) {
        case "default":
        case "none":
          className = "nitrozen-badge-default";
          break;

        case "info":
          className = "nitrozen-badge-info";
          break;

        case "success":
          className = "nitrozen-badge-success";
          break;

        case "warn":
          className = "nitrozen-badge-warn";
          break;

        case "error":
          className = "nitrozen-badge-error";
          break;

        case "disable":
          className = "nitrozen-badge-disable";
          break;

        default:
          break;
      }

      if (this.fill) {
        className += "-fill";
      }

      return className;
    }

  }
});
// CONCATENATED MODULE: ./src/components/NBadge/NBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var NBadge_NBadgevue_type_script_lang_js_ = (NBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NBadge/NBadge.vue?vue&type=style&index=0&lang=less&
var NBadgevue_type_style_index_0_lang_less_ = __webpack_require__("493f");

// CONCATENATED MODULE: ./src/components/NBadge/NBadge.vue






/* normalize component */

var NBadge_component = normalizeComponent(
  NBadge_NBadgevue_type_script_lang_js_,
  NBadgevue_type_template_id_2234aa39_render,
  NBadgevue_type_template_id_2234aa39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NBadge = (NBadge_component.exports);
// CONCATENATED MODULE: ./src/components/NBadge/index.js

/* harmony default export */ var components_NBadge = (NBadge);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCheckbox/NCheckbox.vue?vue&type=template&id=5c5e8b39&
var NCheckboxvue_type_template_id_5c5e8b39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"nitrozen-checkbox-container"},[_vm._t("default"),_c('input',{attrs:{"id":_vm.id,"type":"checkbox","disabled":_vm.disabled},domProps:{"value":_vm.checkboxValue || _vm.value,"checked":_vm.isSelected},on:{"change":_vm.toggle}}),_c('span',{staticClass:"nitrozen-checkbox",attrs:{"for":_vm.id}})],2)])}
var NCheckboxvue_type_template_id_5c5e8b39_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=template&id=5c5e8b39&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCheckbox/NCheckbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NCheckboxvue_type_script_lang_js_ = ({
  name: "nitrozen-checkbox",
  props: {
    value: {
      type: [Array, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkboxValue: {
      type: [Number, Array, Object, Boolean, String],
      default: true
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-checkbox" + NUuid()
    }
  },
  event: "change",
  computed: {
    isSelected() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.checkboxValue);
      }

      return this.checkboxValue ? this.checkboxValue === this.value : this.value;
    }

  },
  methods: {
    toggle: function (event) {
      let checkboxModel = this.value;

      if (Array.isArray(this.value)) {
        checkboxModel = [...this.value];
        let index = checkboxModel.indexOf(this.checkboxValue);

        if (index == -1) {
          checkboxModel.push(this.checkboxValue);
        } else {
          checkboxModel.splice(index, 1);
        }

        this.$emit("input", checkboxModel);
        this.$emit("change", checkboxModel);
      } else {
        this.$emit("change", event); // TODO: need to look into this, why we need?

        this.$emit("input", event.target.checked);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var NCheckbox_NCheckboxvue_type_script_lang_js_ = (NCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=style&index=0&lang=less&
var NCheckboxvue_type_style_index_0_lang_less_ = __webpack_require__("351f");

// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue






/* normalize component */

var NCheckbox_component = normalizeComponent(
  NCheckbox_NCheckboxvue_type_script_lang_js_,
  NCheckboxvue_type_template_id_5c5e8b39_render,
  NCheckboxvue_type_template_id_5c5e8b39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NCheckbox = (NCheckbox_component.exports);
// CONCATENATED MODULE: ./src/components/NCheckbox/index.js

/* harmony default export */ var components_NCheckbox = (NCheckbox);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NChips/NChips.vue?vue&type=template&id=0bef9c5c&
var NChipsvue_type_template_id_0bef9c5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"nitrozen-chip"}},[_c('div',_vm._g({ref:_vm.chipId,staticClass:"nitrozen-chip ripple",class:[_vm.chipClasses],attrs:{"tabindex":"0"},on:{"click":_vm.setBackground}},_vm.$listeners),[_vm._t("default"),_c('transition',{attrs:{"name":"nitrozen-input-action"}},[(!_vm.disable && _vm.deletable)?_c('span',{ref:_vm.iconId,staticClass:"nitrozen-icon",on:{"click":function($event){return _vm.spliceElement(_vm.chipId)}}},[_c('nitrozen-inline',{attrs:{"icon":'cross'}})],1):_vm._e(),(!_vm.disable && _vm.inProgress)?_c('span',{ref:_vm.iconId,staticClass:"nitrozen-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":'Info Text'}})],1):_vm._e()])],2)])}
var NChipsvue_type_template_id_0bef9c5c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NChips/NChips.vue?vue&type=template&id=0bef9c5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NChips/NChips.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NChipsvue_type_script_lang_js_ = ({
  name: 'nitrozen-chips',
  components: {
    'nitrozen-inline': components_NInline,
    'nitrozen-tooltip': components_NTooltip
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary'
    },
    inProgress: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    iconId: {
      type: [Number, String],
      default: () => 'nitrozen-icon' + NUuid()
    },
    chipId: {
      type: [Number, String],
      default: () => 'nitrozen-chip' + NUuid()
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    chipClasses() {
      return {
        'nitrozen-disabled': this.disable,
        'nitrozen-inprogress': this.inProgress,
        'nitrozen-error': this.error,
        'nitrozen-chip-error': this.state == 'error',
        'nitrozen-chip-success': this.state == 'success',
        'nitrozen-chip-progress': this.state == 'progress',
        'nitrozen-chip-selected': this.state == 'selected'
      };
    }

  },
  methods: {
    spliceElement: function (id) {
      this.$refs[id].parentElement.style.display = "none";
      this.$emit("remove");
    },
    setBackground: function () {
      if (this.multiSelect) {
        let flag = this.$refs[this.chipId].classList.contains('nitrozen-primary-active-chip') || this.$refs[this.chipId].classList.contains('nitrozen-secondary-active-chip');

        if (!flag) {
          if (this.theme == 'primary') {
            this.$refs[this.chipId].classList.add('nitrozen-primary-active-chip');
          } else {
            this.$refs[this.chipId].classList.add('nitrozen-secondary-active-chip');
          }
        } else {
          this.$refs[this.chipId].classList.remove('nitrozen-primary-active-chip');
          this.$refs[this.chipId].classList.remove('nitrozen-secondary-active-chip');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/NChips/NChips.vue?vue&type=script&lang=js&
 /* harmony default export */ var NChips_NChipsvue_type_script_lang_js_ = (NChipsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NChips/NChips.vue?vue&type=style&index=0&lang=less&
var NChipsvue_type_style_index_0_lang_less_ = __webpack_require__("2168");

// CONCATENATED MODULE: ./src/components/NChips/NChips.vue






/* normalize component */

var NChips_component = normalizeComponent(
  NChips_NChipsvue_type_script_lang_js_,
  NChipsvue_type_template_id_0bef9c5c_render,
  NChipsvue_type_template_id_0bef9c5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NChips = (NChips_component.exports);
// CONCATENATED MODULE: ./src/components/NChips/index.js

/* harmony default export */ var components_NChips = (NChips);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDropdown/NDropdown.vue?vue&type=template&id=52515cf0&
var NDropdownvue_type_template_id_52515cf0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-dropdown-container"},[(_vm.label)?_c('label',{staticClass:"nitrozen-dropdown-label"},[_vm._v(" "+_vm._s(_vm.label)+" "+_vm._s(_vm.required ? " *" : "")+" "),(_vm.tooltip!='')?_c('span',{staticClass:"nitrozen-tooltip-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":_vm.tooltip}})],1):_vm._e()]):_vm._e(),_c('div',{staticClass:"nitrozen-select-wrapper",on:{"click":_vm.toggle}},[_c('div',{ref:"n_dropdown",staticClass:"nitrozen-select",class:{
        disabled: _vm.disabled,
        'nitrozen-dropdown-open': _vm.showOptions
      }},[_c('div',{staticClass:"nitrozen-select__trigger"},[(_vm.searchable)?_c('span',{staticClass:"nitrozen-searchable-input-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchInput),expression:"searchInput"}],attrs:{"type":"search","placeholder":_vm.searchInputPlaceholder},domProps:{"value":(_vm.searchInput)},on:{"search":_vm.searchInputChange,"keyup":_vm.searchInputChange,"input":function($event){if($event.target.composing){ return; }_vm.searchInput=$event.target.value}}})]):_c('span',[_vm._v(_vm._s(_vm.selectedText))]),_c('div',{staticClass:"nitrozen-dropdown-arrow"},[_c('nitrozen-inline',{attrs:{"icon":"dropdown_arrow_down"}})],1)]),_c('div',{ref:"nitrozen-select-option",staticClass:"nitrozen-options",class:{ 'nitrozen-dropup': _vm.dropUp },on:{"&scroll":function($event){return _vm.handleScroll($event)}}},[_vm._l((_vm.items),function(item,index){return _c('span',{key:index,staticClass:"nitrozen-option ripple",class:{ selected: item == _vm.selected },attrs:{"data-value":item.value},on:{"click":function($event){return _vm.selectItem(index, item)}}},[(_vm.multiple)?[_c('nitrozen-checkbox',{ref:("multicheckbox-" + index),refInFor:true,attrs:{"checkboxValue":item.value},on:{"change":_vm.setCheckedItem},model:{value:(_vm.selectedItems),callback:function ($$v) {_vm.selectedItems=$$v},expression:"selectedItems"}},[_vm._v(_vm._s(item.text))])]:[_vm._v(_vm._s(item.text))]],2)}),(_vm.searchable && _vm.items.length == 0)?_c('span',{staticClass:"nitrozen-option"},[_vm._v("No "+_vm._s(_vm.label)+" Found")]):_vm._e()],2)])])])}
var NDropdownvue_type_template_id_52515cf0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=template&id=52515cf0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDropdown/NDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var NDropdownvue_type_script_lang_js_ = ({
  name: "nitrozen-dropdown",
  components: {
    "nitrozen-inline": components_NInline,
    "nitrozen-checkbox": components_NCheckbox,
    "nitrozen-tooltip": components_NTooltip
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dropdown-" + NUuid()
    },

    /**
     * array of item in dropdown
     * @example `
     * {
     *    text: String,
     *    value: Object,
     * }
     * `
     */
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },

    /**
     * disbaled dropdown
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * dropdown label
     */
    label: {
      type: String
    },

    /**
     * multiselect value
     */
    multiple: {
      default: false
    },
    placeholder: {
      type: String
    },

    /**
     * dropdown selection required
     */
    required: {
      type: Boolean,
      default: false
    },

    /**
     * searchable value
     */
    searchable: {
      default: false
    },
    tooltip: {
      type: String,
      default: ""
    },

    /**
     * selected value
     */
    value: {
      required: true
    }
  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null
    };
  },
  watch: {
    value() {
      if (Array.isArray(this.value)) {
        this.selectedItems = [...this.value];
      }

      if (!this.multiple && this.searchable) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : this.value;
      }
    }

  },
  computed: {
    selectedText: function () {
      if (!this.multiple) {
        this.selected = {};

        if (this.value) {
          if (this.items.length) {
            this.selected = this.items.find(i => i.value == this.value);
            this.searchInput = this.selected.text;
          }
        }

        if (this.selected && this.selected.text) {
          return this.selected.text;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      } else {
        let tmp = [];
        let selected = {};

        if (this.value) {
          this.searchInput = "";
        }

        if (this.selectedItems.length) {
          this.selectedItems.forEach(ele => {
            if (!selected[ele]) {
              selected[ele] = true;
            }
          });
          this.items.forEach(ele => {
            if (selected[ele.value]) {
              tmp.push(ele.text);
            }
          });
          tmp = [...new Set(tmp)];
          return `${tmp.join(', ')}`;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      }
    },
    searchInputPlaceholder: function () {
      return this.placeholder || `Search ${this.label}`;
    }
  },

  mounted() {
    if (!this.multiple) {
      if (this.value) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : "";
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
      }
    }
  },

  methods: {
    selectItem(index, item) {
      if (!this.multiple) {
        this.selected = item;

        if (item.text) {
          this.searchInput = item.text;
        }

        this.$emit("input", item.value); // v-model implementation

        this.$emit("change", item.value);
      } else {
        const multicheckbox = this.$refs[`multicheckbox-${index}`][0];
        if (multicheckbox) multicheckbox.toggle();
        event.stopPropagation();
      }
    },

    setCheckedItem() {
      this.$emit("input", this.selectedItems); // v-model implementation

      this.$emit("change", this.selectedItems);
    },

    searchInputChange(e) {
      this.showOptions = true;
      this.searchInput = e.target.value;
      let obj = {
        id: this.id,
        text: this.searchInput
      };
      this.eventEmit(obj, "searchInputChange");
      this.calculateViewport();
    },

    toggle() {
      if (this.disabled) return;
      this.showOptions = !this.showOptions;

      if (this.showOptions) {
        this.calculateDropUpDown();
      }
    },

    /**
     * @description calclulate position of dropdwon
     */
    calculateDropUpDown() {
      const dropdown = this.$refs["n_dropdown"];
      if (!dropdown) return;
      const dropdownRect = dropdown.getBoundingClientRect();
      const topSpace = dropdownRect.top;
      const bottomSpace = this.viewport.height - dropdownRect.top - dropdown.offsetHeight;
      const dropdownOptionsHeight = dropdown.children[1].offsetHeight;

      if (dropdownOptionsHeight < bottomSpace) {
        this.dropUp = false;
      } else {
        this.dropUp = true;
      }
    },

    documentClick(e) {
      // close dropdown on outside click
      const select = this.$refs.n_dropdown;

      if (!select.contains(e.target)) {
        this.showOptions = false;
      }
    },

    calculateViewport() {
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      this.viewport = {
        width: vw,
        height: vh
      };
      this.calculateDropUpDown();
    },

    eventEmit(event, type) {
      this.$emit(type, event);
    },

    handleScroll(event) {
      let elem = this.$refs["nitrozen-select-option"];
      this.$emit("scroll", elem);
    }

  },

  created() {
    this.calculateViewport();
    document.addEventListener("click", this.documentClick);
    window.addEventListener("resize", this.calculateViewport);
    window.addEventListener("scroll", this.calculateViewport);
  },

  destroyed() {
    document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.calculateViewport);
    window.removeEventListener("scroll", this.calculateViewport);
  }

});
// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var NDropdown_NDropdownvue_type_script_lang_js_ = (NDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=style&index=0&lang=less&
var NDropdownvue_type_style_index_0_lang_less_ = __webpack_require__("b67f");

// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue






/* normalize component */

var NDropdown_component = normalizeComponent(
  NDropdown_NDropdownvue_type_script_lang_js_,
  NDropdownvue_type_template_id_52515cf0_render,
  NDropdownvue_type_template_id_52515cf0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NDropdown = (NDropdown_component.exports);
// CONCATENATED MODULE: ./src/components/NDropdown/index.js


/* harmony default export */ var components_NDropdown = (NDropdown);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDialog/NDialog.vue?vue&type=template&id=8effd6ae&
var NDialogvue_type_template_id_8effd6ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isModalVisible),expression:"isModalVisible"}]},[_c('transition',{attrs:{"name":"nitrozen-dialog-fade"}},[_c('div',{staticClass:"nitrozen-dialog-backdrop",on:{"click":_vm.backdropClick}},[_c('div',{ref:"dialog",staticClass:"nitrozen-dialog",attrs:{"role":"dialog","aria-labelledby":_vm.id + '_title',"aria-describedby":_vm.id + '_desc'}},[_c('header',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}],staticClass:"nitrozen-dialog-header",attrs:{"id":_vm.id + '_title'}},[_vm._t("header",[_vm._v(" "+_vm._s(_vm.title)+" "),(_vm.showCloseButton)?_c('nitrozen-inline',{attrs:{"title":"close","icon":"cross"},on:{"click":function($event){return _vm.close('close')}}}):_vm._e()])],2),_c('section',{staticClass:"nitrozen-dialog-body",attrs:{"id":_vm.id + '_desc'}},[_vm._t("body")],2),_c('footer',{staticClass:"nitrozen-dialog-footer"},[_vm._t("footer",[(_vm.neutralButtonLabel)?_c('nitrozen-button',{attrs:{"theme":"secondary"},on:{"click":function($event){return _vm.close(_vm.neutralButtonLabel)}}},[_vm._v(_vm._s(_vm.neutralButtonLabel))]):_vm._e(),(_vm.negativeButtonLabel)?_c('nitrozen-button',{staticClass:"nitrozen-dialog-negative-button",on:{"click":function($event){return _vm.close(_vm.negativeButtonLabel)}}},[_vm._v(_vm._s(_vm.negativeButtonLabel))]):_vm._e(),(_vm.positiveButtonLabel)?_c('nitrozen-button',{on:{"click":function($event){return _vm.close(_vm.positiveButtonLabel)}}},[_vm._v(_vm._s(_vm.positiveButtonLabel))]):_vm._e()])],2)])])])],1)}
var NDialogvue_type_template_id_8effd6ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue?vue&type=template&id=8effd6ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDialog/NDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NDialogvue_type_script_lang_js_ = ({
  name: "nitrozen-dialog",
  components: {
    "nitrozen-button": components_NBtn,
    "nitrozen-inline": components_NInline
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dialog-" + NUuid()
    },

    /**
     * title of dialog
     */
    title: {
      type: String
    }
  },
  data: () => {
    return {
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "Ok",
      positiveButtonLabel: false,
      showCloseButton: false
    };
  },
  methods: {
    open(config = {}) {
      // background scroll disabled on nitrozen dialog open
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      this.isModalVisible = true;
      if (config.height != undefined) this.$refs["dialog"].style.height = config.height;
      if (config.width != undefined) this.$refs["dialog"].style.width = config.width;

      if (config.positiveButtonLabel != undefined) {
        this.positiveButtonLabel = config.positiveButtonLabel;
      }

      if (config.negativeButtonLabel != undefined) {
        this.negativeButtonLabel = config.negativeButtonLabel;
      }

      if (config.neutralButtonLabel != undefined) {
        this.neutralButtonLabel = config.neutralButtonLabel;
      }

      if (config.dismissible != undefined) {
        this.dismissible = config.dismissible;
      }

      if (config.showCloseButton != undefined) {
        this.showCloseButton = config.showCloseButton;
      }

      if (config.data != undefined) {
        this.data = config.data;
      }

      this.$emit("open");
      return this;
    },

    close(data) {
      // background scroll enable on nitrozen dialog close
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      this.isModalVisible = false;
      this.$emit("close", data);
      return this;
    },

    isOpen() {
      return this.isModalVisible;
    },

    backdropClick(e) {
      // close dialog on outside click
      const dialog = this.$refs["dialog"];

      if (this.dismissible && !dialog.contains(e.target)) {
        this.close(null);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var NDialog_NDialogvue_type_script_lang_js_ = (NDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NDialog/NDialog.vue?vue&type=style&index=0&lang=less&
var NDialogvue_type_style_index_0_lang_less_ = __webpack_require__("c5cf");

// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue






/* normalize component */

var NDialog_component = normalizeComponent(
  NDialog_NDialogvue_type_script_lang_js_,
  NDialogvue_type_template_id_8effd6ae_render,
  NDialogvue_type_template_id_8effd6ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NDialog = (NDialog_component.exports);
// CONCATENATED MODULE: ./src/components/NDialog/index.js


/* harmony default export */ var components_NDialog = (NDialog);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NError/NError.vue?vue&type=template&id=66da709a&
var NErrorvue_type_template_id_66da709a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-error-visible"},[_vm._t("default")],2)}
var NErrorvue_type_template_id_66da709a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NError/NError.vue?vue&type=template&id=66da709a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NError/NError.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NErrorvue_type_script_lang_js_ = ({
  name: 'nitrozen-error'
});
// CONCATENATED MODULE: ./src/components/NError/NError.vue?vue&type=script&lang=js&
 /* harmony default export */ var NError_NErrorvue_type_script_lang_js_ = (NErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NError/NError.vue?vue&type=style&index=0&lang=less&
var NErrorvue_type_style_index_0_lang_less_ = __webpack_require__("34d0");

// CONCATENATED MODULE: ./src/components/NError/NError.vue






/* normalize component */

var NError_component = normalizeComponent(
  NError_NErrorvue_type_script_lang_js_,
  NErrorvue_type_template_id_66da709a_render,
  NErrorvue_type_template_id_66da709a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NError = (NError_component.exports);
// CONCATENATED MODULE: ./src/components/NError/index.js

/* harmony default export */ var components_NError = (NError);
// CONCATENATED MODULE: ./src/components/NInput/index.js
 // import NInputPrefix from './NInputPrefix.vue';
// import NInputSuffix from './NInputSuffix.vue';
// export {
//     NInput,
//     NInputPrefix,
//     NInputSuffix
// };

/* harmony default export */ var components_NInput = (NInput);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenu/NMenu.vue?vue&type=template&id=0e20a047&
var NMenuvue_type_template_id_0e20a047_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[_c('div',{directives:[{name:"clickOutside",rawName:"v-clickOutside",value:(_vm.closeMenu),expression:"closeMenu"}],staticClass:"nitrozen-menu-content",attrs:{"id":_vm.id},on:{"click":function($event){_vm.toggleMenu = !_vm.toggleMenu}}},[_c('nitrozen-inline',{class:{ 'nitrozen-menu-vertical-dots': _vm.mode == 'vertical' },attrs:{"icon":'dots'}}),_c('transition',{attrs:{"name":"fade"}},[(_vm.toggleMenu)?_c('ul',{class:{ 'nitrozen-menu-vertical-dropdown': _vm.mode == 'vertical' }},[_vm._t("default")],2):_vm._e()])],1)])}
var NMenuvue_type_template_id_0e20a047_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NMenu/NMenu.vue?vue&type=template&id=0e20a047&

// CONCATENATED MODULE: ./src/directives/NClickOutside.js

const clickOutside = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // Check that click was outside the element
      if (!(el === event.target || el.contains(event.target))) {
        // call  function expression assigned
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(clickOutside);
/* harmony default export */ var NClickOutside = (clickOutside);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenu/NMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NMenuvue_type_script_lang_js_ = ({
  name: "nitrozen-menu",
  directives: {
    clickOutside: NClickOutside
  },
  components: {
    "nitrozen-inline": components_NInline
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu" + NUuid()
    },
    mode: {
      type: String,
      default: () => "horizontal"
    }
  },

  data() {
    return {
      toggleMenu: false
    };
  },

  methods: {
    closeMenu() {
      this.toggleMenu = false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/NMenu/NMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var NMenu_NMenuvue_type_script_lang_js_ = (NMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NMenu/NMenu.vue?vue&type=style&index=0&lang=less&
var NMenuvue_type_style_index_0_lang_less_ = __webpack_require__("9771");

// CONCATENATED MODULE: ./src/components/NMenu/NMenu.vue






/* normalize component */

var NMenu_component = normalizeComponent(
  NMenu_NMenuvue_type_script_lang_js_,
  NMenuvue_type_template_id_0e20a047_render,
  NMenuvue_type_template_id_0e20a047_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NMenu = (NMenu_component.exports);
// CONCATENATED MODULE: ./src/components/NMenu/index.js

/* harmony default export */ var components_NMenu = (NMenu);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenuItem/NMenuItem.vue?vue&type=template&id=835c1ace&
var NMenuItemvue_type_template_id_835c1ace_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[_c('li',_vm._g({staticClass:"nitrozen-menu-item"},_vm.$listeners),[_vm._t("default")],2)])}
var NMenuItemvue_type_template_id_835c1ace_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NMenuItem/NMenuItem.vue?vue&type=template&id=835c1ace&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenuItem/NMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var NMenuItemvue_type_script_lang_js_ = ({
  name: "nitrozen-menu-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu-item" + NUuid()
    }
  }
});
// CONCATENATED MODULE: ./src/components/NMenuItem/NMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var NMenuItem_NMenuItemvue_type_script_lang_js_ = (NMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NMenuItem/NMenuItem.vue?vue&type=style&index=0&lang=less&
var NMenuItemvue_type_style_index_0_lang_less_ = __webpack_require__("ede7");

// CONCATENATED MODULE: ./src/components/NMenuItem/NMenuItem.vue






/* normalize component */

var NMenuItem_component = normalizeComponent(
  NMenuItem_NMenuItemvue_type_script_lang_js_,
  NMenuItemvue_type_template_id_835c1ace_render,
  NMenuItemvue_type_template_id_835c1ace_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NMenuItem = (NMenuItem_component.exports);
// CONCATENATED MODULE: ./src/components/NMenuItem/index.js

/* harmony default export */ var components_NMenuItem = (NMenuItem);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTab/NTab.vue?vue&type=template&id=2c61829c&scoped=true&
var NTabvue_type_template_id_2c61829c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-tab-container",attrs:{"id":_vm.id}},[_c('ul',{staticClass:"nitrozen-tab"},_vm._l((_vm.tabItem),function(item,index){return _c('nitrozen-tab-item',{key:index,class:{ 'nitrozen-tab-active': _vm.activeTab == index },on:{"click":function($event){return _vm.selectTab(index, item)}}},[_vm._v(_vm._s(item[_vm.label] || item))])}),1)])}
var NTabvue_type_template_id_2c61829c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTab/NTab.vue?vue&type=template&id=2c61829c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTabItem/NTabItem.vue?vue&type=template&id=cfd6b808&scoped=true&
var NTabItemvue_type_template_id_cfd6b808_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',_vm._g({staticClass:"nitrozen-tab-item"},_vm.$listeners),[_vm._t("default")],2)}
var NTabItemvue_type_template_id_cfd6b808_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTabItem/NTabItem.vue?vue&type=template&id=cfd6b808&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTabItem/NTabItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NTabItemvue_type_script_lang_js_ = ({
  name: "nitrozen-tab-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab-item" + NUuid()
    }
  }
});
// CONCATENATED MODULE: ./src/components/NTabItem/NTabItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var NTabItem_NTabItemvue_type_script_lang_js_ = (NTabItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NTabItem/NTabItem.vue?vue&type=style&index=0&id=cfd6b808&lang=less&scoped=true&
var NTabItemvue_type_style_index_0_id_cfd6b808_lang_less_scoped_true_ = __webpack_require__("6eb4");

// CONCATENATED MODULE: ./src/components/NTabItem/NTabItem.vue






/* normalize component */

var NTabItem_component = normalizeComponent(
  NTabItem_NTabItemvue_type_script_lang_js_,
  NTabItemvue_type_template_id_cfd6b808_scoped_true_render,
  NTabItemvue_type_template_id_cfd6b808_scoped_true_staticRenderFns,
  false,
  null,
  "cfd6b808",
  null
  
)

/* harmony default export */ var NTabItem = (NTabItem_component.exports);
// CONCATENATED MODULE: ./src/components/NTabItem/index.js

/* harmony default export */ var components_NTabItem = (NTabItem);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTab/NTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var NTabvue_type_script_lang_js_ = ({
  name: "nitrozen-tab",
  components: {
    "nitrozen-tab-item": components_NTabItem
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab" + NUuid()
    },
    tabItem: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      activeTab: this.activeIndex
    };
  },

  methods: {
    selectTab: function (index, item) {
      let obj = {
        index: index,
        item: item
      };
      this.activeTab = index;
      this.$emit("tab-change", obj);
    }
  }
});
// CONCATENATED MODULE: ./src/components/NTab/NTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var NTab_NTabvue_type_script_lang_js_ = (NTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NTab/NTab.vue?vue&type=style&index=0&id=2c61829c&lang=less&scoped=true&
var NTabvue_type_style_index_0_id_2c61829c_lang_less_scoped_true_ = __webpack_require__("bd98");

// CONCATENATED MODULE: ./src/components/NTab/NTab.vue






/* normalize component */

var NTab_component = normalizeComponent(
  NTab_NTabvue_type_script_lang_js_,
  NTabvue_type_template_id_2c61829c_scoped_true_render,
  NTabvue_type_template_id_2c61829c_scoped_true_staticRenderFns,
  false,
  null,
  "2c61829c",
  null
  
)

/* harmony default export */ var NTab = (NTab_component.exports);
// CONCATENATED MODULE: ./src/components/NTab/index.js

/* harmony default export */ var components_NTab = (NTab);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NPagination/NPagination.vue?vue&type=template&id=016f49ea&
var NPaginationvue_type_template_id_016f49ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value.total > 0)?_c('div',{staticClass:"nitrozen-pagination-container"},[_c('div',{staticClass:"nitrozen-pagination"},[_c('div',{staticClass:"nitrozen-pagination__left"},[_c('span',{staticClass:"nitrozen-pagination__count"},[_vm._v(_vm._s(_vm.countsText))])]),_c('div',{staticClass:"nitrozen-pagination__right"},[_c('div',{staticClass:"nitrozen-pagination__select"},[_c('span',{staticClass:"nitrozen-pagination__select__label"},[_vm._v("Rows per page")]),_c('nitrozen-dropdown',{staticClass:"nitrozen-pagination-page-size",attrs:{"items":_vm.pageSizes},on:{"change":_vm.pageSizeChange},model:{value:(_vm.selectedPageSize),callback:function ($$v) {_vm.selectedPageSize=$$v},expression:"selectedPageSize"}})],1),_c('nitrozen-button',{staticClass:"nitrozen-pagination__prev",class:{'pagination-diabled' : _vm.value.current == 1},attrs:{"title":"Previous"},on:{"click":_vm.previous}},[_c('nitrozen-inline',{attrs:{"icon":"arrow-left-black"}})],1),_c('nitrozen-button',{staticClass:"nitrozen-pagination__next",class:{'pagination-diabled' : _vm.value.current >= _vm.pages},attrs:{"title":"Next"},on:{"click":_vm.next}},[_c('nitrozen-inline',{attrs:{"icon":"arrow-right-black"}})],1)],1)])]):_vm._e()}
var NPaginationvue_type_template_id_016f49ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NPagination/NPagination.vue?vue&type=template&id=016f49ea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NPagination/NPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var NPaginationvue_type_script_lang_js_ = ({
  name: "nitrozen-pagination",
  components: {
    "nitrozen-button": components_NBtn,
    "nitrozen-dropdown": components_NDropdown,
    "nitrozen-inline": components_NInline
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-pagination-" + NUuid()
    },

    /**
     * kind of pagination
     */
    name: {
      type: String
    },

    /**
     * Show total records available.
     * default value is true.
     */
    showTotal: {
      type: Boolean,
      default: true
    },

    /**
     * page size dropdown options
     */
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100];
      }
    },

    /**
     * pagination config value
     * @example `
     * {
     *     limit: Number,
     *     total: Number,
     *     current: Number
     *  }
     * `
     */
    value: {
      type: Object,
      required: true,
      default: () => {
        return {
          limit: 0,
          total: 0,
          current: 0
        };
      }
    }
  },
  data: () => {
    return {};
  },
  computed: {
    pages: function () {
      if (this.value.limit > 0) {
        return Math.ceil(this.value.total / this.value.limit);
      }

      return 0;
    },

    pageSizes() {
      const po = this.pageSizeOptions.map(p => {
        return {
          text: p,
          value: p
        };
      });

      if (!this.selectedPageSize) {
        this.selectedPageSize = this.value.limit ? this.value.limit : po.length > 0 ? po[0].value : null;
      }

      return po;
    },

    firstRecord() {
      return this.value.limit * (this.value.current - 1) + 1;
    },

    lastRecord() {
      return this.value.limit * this.value.current < this.value.total ? this.value.limit * this.value.current : this.value.total;
    },

    countsText() {
      let txt = ` ${this.firstRecord} - ${this.lastRecord}`;

      if (this.showTotal) {
        txt += ` / ${this.value.total}`;
      }

      txt += ` ${this.name || ""}`;
      return txt;
    }

  },
  methods: {
    previous() {
      if (this.value.current === 1) return;
      this.value.current--;
      this.change();
    },

    next() {
      if (this.value.current >= this.pages) {
        this.value.current = this.pages;
        return;
      }

      if (this.pages === 0) {
        this.value.current = 0;
        return;
      }

      this.value.current++;
      this.change();
    },

    pageSizeChange(size) {
      this.value.current = 1;
      this.value.limit = size;
      this.change();
    },

    change() {
      this.$emit("input", this.value);
      this.$emit("change", this.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/NPagination/NPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var NPagination_NPaginationvue_type_script_lang_js_ = (NPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NPagination/NPagination.vue?vue&type=style&index=0&lang=less&
var NPaginationvue_type_style_index_0_lang_less_ = __webpack_require__("31a4");

// CONCATENATED MODULE: ./src/components/NPagination/NPagination.vue






/* normalize component */

var NPagination_component = normalizeComponent(
  NPagination_NPaginationvue_type_script_lang_js_,
  NPaginationvue_type_template_id_016f49ea_render,
  NPaginationvue_type_template_id_016f49ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NPagination = (NPagination_component.exports);
// CONCATENATED MODULE: ./src/components/NPagination/index.js


/* harmony default export */ var components_NPagination = (NPagination);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NRadio/NRadio.vue?vue&type=template&id=4c1d842e&
var NRadiovue_type_template_id_4c1d842e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-radio-group"},[_c('input',{attrs:{"id":_vm.id,"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"checked":_vm.value==_vm.radioValue,"value":_vm.radioValue},on:{"input":function($event){return _vm.changeEvent($event,'input')},"change":function($event){return _vm.changeEvent($event,'change')}}}),_c('label',{attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var NRadiovue_type_template_id_4c1d842e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NRadio/NRadio.vue?vue&type=template&id=4c1d842e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NRadio/NRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NRadiovue_type_script_lang_js_ = ({
  name: "nitrozen-radio",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    radioValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-radio" + NUuid()
    },
    name: {
      type: [Number, String],
      required: true,
      default: () => "nitrozen-radio-name"
    },
    value: {}
  },

  data() {
    return {};
  },

  methods: {
    changeEvent: function (event, type) {
      this.$emit(type, this.radioValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/NRadio/NRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var NRadio_NRadiovue_type_script_lang_js_ = (NRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NRadio/NRadio.vue?vue&type=style&index=0&lang=less&
var NRadiovue_type_style_index_0_lang_less_ = __webpack_require__("b2f7");

// CONCATENATED MODULE: ./src/components/NRadio/NRadio.vue






/* normalize component */

var NRadio_component = normalizeComponent(
  NRadio_NRadiovue_type_script_lang_js_,
  NRadiovue_type_template_id_4c1d842e_render,
  NRadiovue_type_template_id_4c1d842e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NRadio = (NRadio_component.exports);
// CONCATENATED MODULE: ./src/components/NRadio/index.js

/* harmony default export */ var components_NRadio = (NRadio);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NStepper/NStepper.vue?vue&type=template&id=2023bb58&
var NSteppervue_type_template_id_2023bb58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-stepper",attrs:{"id":_vm.id}},[_c('div',{staticClass:"nitrozen-stepper-container"},_vm._l((_vm.elements),function(item,index){return _c('div',{key:index,staticClass:"nitrozen-stepper-group"},[_c('div',{staticClass:"nitrozen-flex-center"},[(index <= _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-bar nitrozen-active"}):_vm._e(),(index > _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-bar nitrozen-disabled"}):_vm._e(),(index == _vm.data.activeIndex)?_c('div',{staticClass:"nitrozen-circle-outer-container nitrozen-pointer",on:{"click":function($event){return _vm.stepperClicked(index)}}},[_c('div',{staticClass:"nitrozen-circle-outer"}),_c('div',{staticClass:"nitrozen-circle-inner"})]):_vm._e(),(index != _vm.data.activeIndex && index <= _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-cirle-check-container nitrozen-pointer",on:{"click":function($event){return _vm.stepperClicked(index)}}},[_c('div',{staticClass:"nitrozen-circle-outer"}),_c('div',{staticClass:"nitrozen-checkmark"})]):_vm._e(),(index <= _vm.elements.length-1 && index > _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-circle-outer-container",on:{"click":function($event){return _vm.stepperClicked(index)}}},[_c('div',{staticClass:"nitrozen-circle-outer nitrozen-disabled"}),_c('div',{staticClass:"nitrozen-checkmark nitrozen-checkbox-hidden"})]):_vm._e(),(index < _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-bar nitrozen-active"}):_vm._e(),(index > _vm.data.maxActiveIndex-1)?_c('div',{staticClass:"nitrozen-bar nitrozen-disabled"}):_vm._e()]),(!(index == _vm.data.activeIndex || index <= _vm.data.maxActiveIndex))?_c('div',{staticClass:"nitrozen-text nitrozen-text-disabled"},[_vm._v(_vm._s(item.text))]):_vm._e(),(index == _vm.data.activeIndex || index <= _vm.data.maxActiveIndex)?_c('div',{staticClass:"nitrozen-text"},[_vm._v(_vm._s(item.text))]):_vm._e()])}),0)])}
var NSteppervue_type_template_id_2023bb58_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NStepper/NStepper.vue?vue&type=template&id=2023bb58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NStepper/NStepper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NSteppervue_type_script_lang_js_ = ({
  name: 'nitrozen-stepper',
  watch: {
    activeIndex(index) {
      if (index <= this.maxActiveIndex && index < this.elements.length) {
        this.data.activeIndex = index;
      }
    },

    maxActiveIndex(maxIndex) {
      if (this.activeIndex <= maxIndex && maxIndex < this.elements.length) {
        this.data.maxActiveIndex = maxIndex;
      }
    }

  },

  data() {
    return {
      data: {
        activeIndex: this.activeIndex,
        maxActiveIndex: this.maxActiveIndex
      }
    };
  },

  mounted() {},

  props: {
    activeIndex: {
      type: Number
    },
    maxActiveIndex: {
      type: Number
    },
    elements: {
      type: Array,
      // { text:""}
      default: () => {
        return [{
          text: "Step 1"
        }, {
          text: "Step 2"
        }, {
          text: "Step 3"
        }, {
          text: "Step 4"
        }, {
          text: "Step 5"
        }];
      }
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-stepper" + NUuid()
    }
  },
  methods: {
    stepperClicked(nextIndex) {
      this.$emit("stepperClicked", {
        previousIndex: this.activeIndex,
        nextIndex: nextIndex
      }); // this.data.activeIndex = nextIndex
    }

  }
});
// CONCATENATED MODULE: ./src/components/NStepper/NStepper.vue?vue&type=script&lang=js&
 /* harmony default export */ var NStepper_NSteppervue_type_script_lang_js_ = (NSteppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NStepper/NStepper.vue?vue&type=style&index=0&lang=less&
var NSteppervue_type_style_index_0_lang_less_ = __webpack_require__("d329");

// CONCATENATED MODULE: ./src/components/NStepper/NStepper.vue






/* normalize component */

var NStepper_component = normalizeComponent(
  NStepper_NSteppervue_type_script_lang_js_,
  NSteppervue_type_template_id_2023bb58_render,
  NSteppervue_type_template_id_2023bb58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NStepper = (NStepper_component.exports);
// CONCATENATED MODULE: ./src/components/NStepper/index.js

/* harmony default export */ var components_NStepper = (NStepper);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d3c93126-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NToggleBtn/NToggleBtn.vue?vue&type=template&id=4a462506&
var NToggleBtnvue_type_template_id_4a462506_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-toggle-container"},[_c('label',{staticClass:"nitrozen-switch"},[_c('input',{attrs:{"type":"checkbox"},domProps:{"checked":_vm.value,"value":_vm.value},on:{"change":_vm.change}}),_c('span',{staticClass:"nitrozen-slider nitrozen-round"})])])}
var NToggleBtnvue_type_template_id_4a462506_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NToggleBtn/NToggleBtn.vue?vue&type=template&id=4a462506&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NToggleBtn/NToggleBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NToggleBtnvue_type_script_lang_js_ = ({
  name: 'nitrozen-toggle-btn',
  // props: {
  //     curstate: {
  //         default: false,
  //         type: Boolean
  //     }
  // },
  props: ['value'],

  data() {
    return {
      selectedState: this.value
    };
  },

  methods: {
    change(event) {
      // console.log(this.value,'selectedState',this.selectedState)
      this.$emit("input", event.target.checked);
      this.$emit('change', event);
    }

  }
});
// CONCATENATED MODULE: ./src/components/NToggleBtn/NToggleBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var NToggleBtn_NToggleBtnvue_type_script_lang_js_ = (NToggleBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NToggleBtn/NToggleBtn.vue?vue&type=style&index=0&lang=less&
var NToggleBtnvue_type_style_index_0_lang_less_ = __webpack_require__("c2a2");

// CONCATENATED MODULE: ./src/components/NToggleBtn/NToggleBtn.vue






/* normalize component */

var NToggleBtn_component = normalizeComponent(
  NToggleBtn_NToggleBtnvue_type_script_lang_js_,
  NToggleBtnvue_type_template_id_4a462506_render,
  NToggleBtnvue_type_template_id_4a462506_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NToggleBtn = (NToggleBtn_component.exports);
// CONCATENATED MODULE: ./src/components/NToggleBtn/index.js

/* harmony default export */ var components_NToggleBtn = (NToggleBtn);
// CONCATENATED MODULE: ./src/components/index.js




















// CONCATENATED MODULE: ./src/directives/index.js


 // import Vue from 'vue';
// const directive = {
//     storkeBtn,
//     flatBtn
// }
// Vue.use(directive);
// Object.values(directive).forEach(ele => {
//     Vue.use(ele)
// })


// CONCATENATED MODULE: ./src/entry-lib.js



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fcf0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("013a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fdc0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=nitrozen.common.js.map