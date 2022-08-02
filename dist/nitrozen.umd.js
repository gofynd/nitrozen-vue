(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nitrozen"] = factory(require("vue"));
	else
		root["nitrozen"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "00f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bbf3");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "051f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a07a");
 // import NInputPrefix from './NInputPrefix.vue';
// import NInputSuffix from './NInputSuffix.vue';
// export {
//     NInput,
//     NInputPrefix,
//     NInputSuffix
// };

/* harmony default export */ __webpack_exports__["a"] = (_NInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "0c8e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1467":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: NDropdown

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDropdown/NDropdown.vue?vue&type=template&id=4dd9c7d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-dropdown-container"},[(_vm.label)?_c('label',{staticClass:"nitrozen-dropdown-label"},[_vm._v(" "+_vm._s(_vm.label)+" "+_vm._s(_vm.required ? " *" : "")+" "),(_vm.tooltip != '')?_c('span',{staticClass:"nitrozen-tooltip-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":_vm.tooltip,"position":"top"}})],1):_vm._e()]):_vm._e(),_c('div',{staticClass:"nitrozen-select-wrapper",on:{"click":_vm.toggle}},[_c('div',{ref:"n_dropdown",staticClass:"nitrozen-select",class:{
        disabled: _vm.disabled,
        'nitrozen-dropdown-open': _vm.showOptions,
      }},[_c('div',{staticClass:"nitrozen-select__trigger"},[(_vm.searchable && !_vm.disabled)?_c('span',{staticClass:"nitrozen-searchable-input-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchInput),expression:"searchInput"}],attrs:{"type":"search","placeholder":_vm.searchInputPlaceholder},domProps:{"value":(_vm.searchInput)},on:{"search":_vm.searchInputChange,"keyup":_vm.searchInputChange,"input":function($event){if($event.target.composing){ return; }_vm.searchInput=$event.target.value}}})]):_c('span',[_vm._v(_vm._s(_vm.selectedText))]),_c('div',{staticClass:"nitrozen-dropdown-arrow"},[_c('nitrozen-inline',{attrs:{"icon":"dropdown_arrow_down"}})],1)]),_c('div',{ref:"nitrozen-select-option",staticClass:"nitrozen-options",class:{ 'nitrozen-dropup': _vm.dropUp },on:{"&scroll":function($event){return _vm.handleScroll.apply(null, arguments)}}},[(_vm.enable_select_all)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchInput),expression:"!searchInput"}],staticClass:"nitrozen-option ripple",on:{"click":function($event){return _vm.selectItem('all', _vm.all_option)}}},[_vm._t("option",function(){return [_c('div',{staticClass:"nitrozen-option-container"},[_c('nitrozen-checkbox',{ref:"multicheckbox-all",attrs:{"checkboxValue":_vm.allSelected,"value":_vm.allSelected},on:{"change":_vm.setCheckedItem}},[_c('span',{staticClass:"nitrozen-option-image",class:{
                    'nitrozen-dropdown-multicheckbox-selected': _vm.allSelected,
                  }},[_vm._v("All")])])],1)]},{"item":_vm.all_option,"selected":_vm.allSelected})],2):_vm._e(),(_vm.enable_select_all)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchInput),expression:"!searchInput"}],staticClass:"horizantal-divider"}):_vm._e(),_vm._l((_vm.items),function(item,index){return _c('span',{key:index,staticClass:"nitrozen-option ripple",class:{
            selected: item == _vm.selected,
            'nitrozen-option-group-label': item.isGroupLabel,
          },attrs:{"data-value":item.value},on:{"click":function($event){return _vm.selectItem(index, item)}}},[_vm._t("option",function(){return [_c('div',{staticClass:"nitrozen-option-container"},[(_vm.multiple && !item.isGroupLabel)?[_c('nitrozen-checkbox',{ref:("multicheckbox-" + index),refInFor:true,attrs:{"checkboxValue":item.value},on:{"change":_vm.setCheckedItem},model:{value:(_vm.selectedItems),callback:function ($$v) {_vm.selectedItems=$$v},expression:"selectedItems"}},[_c('span',{staticClass:"nitrozen-option-image",class:{
                      'nitrozen-dropdown-multicheckbox-selected': _vm.selectedItems.includes(
                        item.value
                      ),
                    }},[(item.logo)?_c('img',{staticClass:"nitrozen-option-logo",attrs:{"src":item.logo,"alt":"logo"}}):_vm._e(),_vm._v(" "+_vm._s(item.text))])])]:[_c('span',{staticClass:"nitrozen-option-image",class:{
                    'nitrozen-option-child-label':
                      _vm.items.find(function (i) { return i.isGroupLabel; }) && !item.isGroupLabel,
                  }},[(item.logo)?_c('img',{staticClass:"nitrozen-option-logo",attrs:{"src":item.logo,"alt":"logo"}}):_vm._e(),_vm._v(" "+_vm._s(item.text)+" ")])]],2)]},{"item":item,"selected":item == _vm.selected})],2)}),(_vm.searchable && _vm.items.length == 0)?_c('span',{staticClass:"nitrozen-option"},[(!_vm.add_option)?_c('div',{staticClass:"nitrozen-option-container"},[_vm._v("No "+_vm._s(_vm.label)+" Found")]):(_vm.add_option && _vm.searchInput.length)?_c('div',{staticClass:"nitrozen-option-container"},[_c('div',{staticClass:"nitrozen-dropdown-empty",on:{"click":_vm.addOption}},[_c('nitrozen-inline',{attrs:{"icon":"plus-btn"}}),_c('p',[_vm._v("Add "+_vm._s(_vm.searchInput))])],1)]):_vm._e()]):_vm._e()],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=template&id=4dd9c7d4&

// EXTERNAL MODULE: ./src/utils/NUuid.js
var NUuid = __webpack_require__("4fe2");

// EXTERNAL MODULE: ./src/components/NInline/index.js + 5 modules
var NInline = __webpack_require__("579b");

// EXTERNAL MODULE: ./src/components/NCheckbox/index.js + 5 modules
var NCheckbox = __webpack_require__("2158");

// EXTERNAL MODULE: ./src/components/NTooltip/index.js + 5 modules
var NTooltip = __webpack_require__("95b9");

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "nitrozen-inline": NInline["a" /* default */],
    "nitrozen-checkbox": NCheckbox["a" /* default */],
    "nitrozen-tooltip": NTooltip["a" /* default */]
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dropdown-" + Object(NUuid["a" /* default */])()
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
     * disabled dropdown
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
    },

    /**
     * Add if not present
     */
    add_option: {
      type: Boolean,
      default: false
    },
    enable_select_all: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null,
      allSelected: false,
      allOptionsSelected: false,
      all_option: {
        'text': 'Select All',
        'value': 'all'
      }
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

      this.setAllOptions();
    },

    items: {
      handler: function () {
        this.setAllOptions();
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
            this.searchInput = this.selected ? this.selected.text : '';
          }
        }

        if (this.selected && this.selected.text) {
          return this.selected.text;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      } else {
        if (this.allOptionsSelected) {
          return `All ${this.selectedItems.length} ${this.label} selected`;
        }

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
          return `${tmp.join(", ")}`;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      }
    },
    searchInputPlaceholder: function () {
      if (this.enable_select_all && this.selectedItems.length) {
        if (this.selectedItems.length === this.getItems(this.items).length) {
          return `All ${this.label}(s) selected`;
        }

        return `${this.selectedItems.length} ${this.label}(s) selected`;
      }

      return this.placeholder || `Search ${this.label}`;
    }
  },

  mounted() {
    if (!this.multiple) {
      this.enable_select_all = false;

      if (this.value) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : "";
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
        this.setAllOptions(true);
      }
    }
  },

  methods: {
    getItems(items) {
      return items.filter(function (item) {
        return !item.isGroupLabel;
      }).map(item => item.value);
    },

    setAllOptions(mounted = false) {
      let items = [...this.items];

      if (mounted) {
        items = [...this.value];
      }

      if (this.multiple && this.enable_select_all) {
        this.allOptionsSelected = this.selectedItems.length === this.getItems(items).length && this.enable_select_all;
        this.allSelected = this.allOptionsSelected;
      }
    },

    selectItem(index, item) {
      if (item.isGroupLabel) {
        return;
      }

      if (!this.multiple) {
        this.selected = item;

        if (item.text) {
          this.searchInput = item.text;
        }

        this.$emit("input", item.value); // v-model implementation

        this.$emit("change", item.value);
      } else {
        if (index === 'all') {
          this.allSelected = !this.allSelected;

          if (this.allSelected) {
            this.selectedItems = this.getItems(this.items);
          } else {
            this.selectedItems = [];
          }

          const multicheckbox = this.$refs[`multicheckbox-${index}`];
          if (multicheckbox) multicheckbox.toggleAll(this.selectedItems);
          event.stopPropagation();
        } else {
          const multicheckbox = this.$refs[`multicheckbox-${index}`][0];
          if (multicheckbox) multicheckbox.toggle();
          event.stopPropagation();
          this.allSelected = this.allOptionsSelected;
        }
      }
    },

    addOption() {
      let value = this.searchInput;
      this.searchInput = '';
      this.$emit("addOption", value);
      this.eventEmit({}, "searchInputChange");
      this.calculateViewport();
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

      if (!this.searchInput) {
        this.setAllOptions();
      }

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

      if (select && !select.contains(e.target)) {
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
    },

    handleTABKey: function (event) {
      // TAB key detection
      if (event.keyCode == 9 && this.showOptions) {
        event.preventDefault();
        event.stopPropagation();
        this.showOptions = false;
      }
    }
  },

  created() {
    this.calculateViewport();

    if (typeof document !== "undefined") {
      document.addEventListener("click", this.documentClick);
      document.addEventListener("keydown", this.handleTABKey);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.calculateViewport);
      window.addEventListener("scroll", this.calculateViewport);
    }
  },

  destroyed() {
    document.removeEventListener("click", this.documentClick);
    document.removeEventListener("keydown", this.handleTABKey);
    window.removeEventListener("resize", this.calculateViewport);
    window.removeEventListener("scroll", this.calculateViewport);
  }

});
// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var NDropdown_NDropdownvue_type_script_lang_js_ = (NDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NDropdown/NDropdown.vue?vue&type=style&index=0&lang=less&
var NDropdownvue_type_style_index_0_lang_less_ = __webpack_require__("b67f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NDropdown/NDropdown.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NDropdown_NDropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NDropdown = (component.exports);
// CONCATENATED MODULE: ./src/components/NDropdown/index.js


/* harmony default export */ var components_NDropdown = __webpack_exports__["a"] = (NDropdown);

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
svgs['cross-filled'] = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#E0E0E0"/>
                    <path d="M16.6666 8.2735L15.7266 7.3335L11.9999 11.0602L8.27325 7.3335L7.33325 8.2735L11.0599 12.0002L7.33325 15.7268L8.27325 16.6668L11.9999 12.9402L15.7266 16.6668L16.6666 15.7268L12.9399 12.0002L16.6666 8.2735Z" fill="#999999"/>
                </svg>
`;
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
svgs['arrow-left-black'] = `<svg width="24px" height="24px" style="transform: rotate(180deg)" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 53 (72520) - https://sketchapp.com -->
                            <title>arrow-left-black</title>
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
svgs['white-dots'] = `<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                            <title>Group 9</title>
                            <desc>Created with Sketch.</desc>
                            <g id="Link-Shortner" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-9">
                                    <rect id="Rectangle" fill-opacity="0.01" fill="#FFFFFF" x="-5.32907052e-15" y="-5.32907052e-15" width="30" height="30"></rect>
                                    <path d="M15,10 C16.375,10 17.5,8.875 17.5,7.5 C17.5,6.125 16.375,5 15,5 C13.625,5 12.5,6.125 12.5,7.5 C12.5,8.875 13.625,10 15,10 L15,10 Z M15,12.5 C13.625,12.5 12.5,13.625 12.5,15 C12.5,16.375 13.625,17.5 15,17.5 C16.375,17.5 17.5,16.375 17.5,15 C17.5,13.625 16.375,12.5 15,12.5 L15,12.5 Z M15,20 C13.625,20 12.5,21.125 12.5,22.5 C12.5,23.875 13.625,25 15,25 C16.375,25 17.5,23.875 17.5,22.5 C17.5,21.125 16.375,20 15,20 L15,20 Z" id="Shape-Copy-2" fill="#ffffff" transform="translate(15.000000, 15.000000) rotate(90.000000) translate(-15.000000, -15.000000) "></path>
                                </g>
                            </g>
                        </svg>`;
svgs['plus-btn'] = `<?xml version="1.0" encoding="iso-8859-1"?>
                            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="add" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="height: 25px;width: 25px;" xml:space="preserve">
                                <circle style="fill:#43B05C;" cx="25" cy="25" r="25"></circle>
                                <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="25" y1="13" x2="25" y2="38"></line>
                                <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="37.5" y1="25" x2="12.5" y2="25"></line>
                            </svg>`;
svgs['help'] = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.445312" width="24" height="24" fill="white" fill-opacity="0.01"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12.4453C19 16.3112 15.8659 19.4453 12 19.4453C8.13409 19.4453 5 16.3112 5 12.4453C5 8.5794 8.13409 5.44531 12 5.44531C15.8659 5.44531 19 8.5794 19 12.4453Z" stroke="#2E31BE" stroke-width="1.15385" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1954 13.7057C12.1891 13.8029 12.1859 13.9136 12.1859 14.0378H11.3019C11.3051 13.8084 11.3147 13.6197 11.3306 13.4716C11.3465 13.3235 11.38 13.1913 11.4309 13.075C11.4819 12.9587 11.5552 12.8472 11.6507 12.7405C11.7463 12.6338 11.8737 12.5072 12.033 12.3607C12.1413 12.2492 12.252 12.1345 12.3651 12.0166C12.4781 11.8988 12.5817 11.7754 12.6756 11.6463C12.7696 11.5173 12.8469 11.3812 12.9074 11.2378C12.9679 11.0945 12.9982 10.9432 12.9982 10.7839C12.9982 10.4367 12.8978 10.1715 12.6971 9.98835C12.4965 9.80519 12.2098 9.71361 11.8371 9.71361C11.6874 9.71361 11.5416 9.73192 11.3999 9.76856C11.2581 9.80519 11.1323 9.86253 11.0224 9.94057C10.9125 10.0186 10.8241 10.1174 10.7572 10.2368C10.6903 10.3563 10.6569 10.4988 10.6569 10.6644H9.77295C9.77613 10.3969 9.83188 10.1564 9.94018 9.94296C10.0485 9.72954 10.1942 9.54876 10.3774 9.40064C10.5605 9.25252 10.7771 9.13944 11.0272 9.0614C11.2773 8.98336 11.5472 8.94434 11.8371 8.94434C12.1588 8.94434 12.4463 8.98495 12.6995 9.06618C12.9528 9.1474 13.167 9.26606 13.3422 9.42215C13.5174 9.57823 13.6512 9.76776 13.7435 9.99074C13.8359 10.2137 13.8821 10.4685 13.8821 10.7552C13.8821 10.9846 13.8423 11.2004 13.7627 11.4027C13.683 11.6049 13.5811 11.7961 13.4569 11.976C13.3326 12.156 13.1933 12.324 13.0388 12.4801C12.8843 12.6362 12.7322 12.7811 12.5825 12.9149C12.4869 13.0073 12.4128 13.0949 12.3603 13.1777C12.3077 13.2605 12.2687 13.345 12.2432 13.431C12.2177 13.517 12.2018 13.6086 12.1954 13.7057ZM12.1597 15.9023C12.0657 16.001 11.9279 16.0504 11.7464 16.0504C11.5648 16.0504 11.4286 16.001 11.3378 15.9023C11.2471 15.8035 11.2017 15.6809 11.2017 15.5344C11.2017 15.3815 11.2471 15.2541 11.3378 15.1521C11.4286 15.0502 11.5648 14.9992 11.7464 14.9992C11.9279 14.9992 12.0657 15.0502 12.1597 15.1521C12.2536 15.2541 12.3006 15.3815 12.3006 15.5344C12.3006 15.6809 12.2536 15.8035 12.1597 15.9023Z" fill="#2E31BE"/>
                <path d="M12.1859 14.0378V14.1532H12.3013V14.0378H12.1859ZM12.1954 13.7057L12.0803 13.6982V13.6982L12.1954 13.7057ZM11.3019 14.0378L11.1866 14.0362L11.1849 14.1532H11.3019V14.0378ZM11.4309 13.075L11.5366 13.1213H11.5366L11.4309 13.075ZM11.6507 12.7405L11.5648 12.6636L11.6507 12.7405ZM12.033 12.3607L12.1112 12.4457L12.1158 12.4411L12.033 12.3607ZM12.3651 12.0166L12.4483 12.0965H12.4483L12.3651 12.0166ZM12.9074 11.2378L13.0137 11.2827L12.9074 11.2378ZM12.6971 9.98835L12.6194 10.0736L12.6971 9.98835ZM11.3999 9.76856L11.371 9.65684H11.371L11.3999 9.76856ZM11.0224 9.94057L11.0892 10.0346L11.0224 9.94057ZM10.7572 10.2368L10.6566 10.1804H10.6566L10.7572 10.2368ZM10.6569 10.6644V10.7798H10.7723V10.6644H10.6569ZM9.77295 10.6644L9.65757 10.6631L9.65618 10.7798H9.77295V10.6644ZM9.94018 9.94296L9.83729 9.89074L9.83729 9.89074L9.94018 9.94296ZM10.3774 9.40064L10.4499 9.49036L10.3774 9.40064ZM11.0272 9.0614L10.9928 8.95125V8.95125L11.0272 9.0614ZM12.6995 9.06618L12.6643 9.17605L12.6995 9.06618ZM13.3422 9.42215L13.4189 9.33599V9.33599L13.3422 9.42215ZM13.7435 9.99074L13.6369 10.0349L13.7435 9.99074ZM13.7627 11.4027L13.6553 11.3604V11.3604L13.7627 11.4027ZM13.4569 11.976L13.3619 11.9105L13.4569 11.976ZM13.0388 12.4801L12.9568 12.399L12.9568 12.399L13.0388 12.4801ZM12.5825 12.9149L12.5055 12.8288L12.5023 12.832L12.5825 12.9149ZM12.3603 13.1777L12.4577 13.2396H12.4577L12.3603 13.1777ZM12.1597 15.9023L12.2433 15.9818V15.9818L12.1597 15.9023ZM11.3378 15.9023L11.2529 15.9804H11.2529L11.3378 15.9023ZM11.3378 15.1521L11.2517 15.0754H11.2517L11.3378 15.1521ZM12.1597 15.1521L12.2445 15.0739H12.2445L12.1597 15.1521ZM12.3013 14.0378C12.3013 13.9154 12.3044 13.8073 12.3106 13.7133L12.0803 13.6982C12.0737 13.7984 12.0705 13.9117 12.0705 14.0378H12.3013ZM11.3019 14.1532H12.1859V13.9224H11.3019V14.1532ZM11.2159 13.4592C11.1994 13.6123 11.1898 13.8049 11.1866 14.0362L11.4173 14.0394C11.4205 13.8119 11.4299 13.6271 11.4453 13.4839L11.2159 13.4592ZM11.3253 13.0287C11.2688 13.1574 11.2329 13.3014 11.2159 13.4592L11.4453 13.4839C11.4602 13.3455 11.4911 13.2251 11.5366 13.1213L11.3253 13.0287ZM11.5648 12.6636C11.4621 12.7782 11.3817 12.8999 11.3253 13.0287L11.5366 13.1213C11.5821 13.0176 11.6483 12.9163 11.7367 12.8175L11.5648 12.6636ZM11.9549 12.2758C11.7941 12.4237 11.6637 12.5531 11.5648 12.6636L11.7367 12.8175C11.8289 12.7146 11.9533 12.5907 12.1111 12.4456L11.9549 12.2758ZM12.2818 11.9368C12.1689 12.0545 12.0584 12.169 11.9502 12.2803L12.1158 12.4411C12.2242 12.3294 12.3351 12.2146 12.4483 12.0965L12.2818 11.9368ZM12.5824 11.5784C12.4915 11.7031 12.3914 11.8226 12.2818 11.9368L12.4483 12.0965C12.5649 11.975 12.6718 11.8476 12.7689 11.7143L12.5824 11.5784ZM12.8011 11.1929C12.7441 11.3279 12.6713 11.4564 12.5824 11.5784L12.7689 11.7143C12.868 11.5783 12.9496 11.4344 13.0137 11.2827L12.8011 11.1929ZM12.8828 10.7839C12.8828 10.9281 12.8555 11.0641 12.8011 11.1929L13.0137 11.2827C13.0803 11.1248 13.1135 10.9582 13.1135 10.7839H12.8828ZM12.6194 10.0736C12.7898 10.2292 12.8828 10.4595 12.8828 10.7839H13.1135C13.1135 10.4139 13.0058 10.1139 12.7749 9.90312L12.6194 10.0736ZM11.8371 9.82899C12.1918 9.82899 12.4468 9.91604 12.6194 10.0736L12.7749 9.90312C12.5462 9.69434 12.2278 9.59822 11.8371 9.59822V9.82899ZM11.4288 9.88027C11.5609 9.84613 11.6969 9.82899 11.8371 9.82899V9.59822C11.6779 9.59822 11.5224 9.61772 11.371 9.65684L11.4288 9.88027ZM11.0892 10.0346C11.1867 9.96542 11.2994 9.91369 11.4288 9.88027L11.371 9.65684C11.2168 9.69669 11.0779 9.75963 10.9556 9.84649L11.0892 10.0346ZM10.8579 10.2932C10.9166 10.1884 10.9935 10.1026 11.0892 10.0346L10.9556 9.84649C10.8315 9.9346 10.7317 10.0463 10.6566 10.1804L10.8579 10.2932ZM10.7723 10.6644C10.7723 10.5144 10.8025 10.3921 10.8579 10.2932L10.6566 10.1804C10.5782 10.3204 10.5415 10.4832 10.5415 10.6644H10.7723ZM9.77295 10.7798H10.6569V10.5491H9.77295V10.7798ZM9.83729 9.89074C9.72008 10.1217 9.66094 10.3799 9.65757 10.6631L9.88833 10.6658C9.89133 10.4138 9.94368 10.191 10.0431 9.99517L9.83729 9.89074ZM10.3048 9.31093C10.1088 9.46944 9.95283 9.66306 9.83729 9.89074L10.0431 9.99517C10.1441 9.79601 10.2796 9.62809 10.4499 9.49036L10.3048 9.31093ZM10.9928 8.95125C10.7304 9.03315 10.5005 9.15268 10.3048 9.31093L10.4499 9.49036C10.6206 9.35237 10.8239 9.24573 11.0616 9.17154L10.9928 8.95125ZM11.8371 8.82895C11.5368 8.82895 11.2551 8.86939 10.9928 8.95125L11.0616 9.17154C11.2994 9.09732 11.5576 9.05972 11.8371 9.05972V8.82895ZM12.7348 8.95631C12.468 8.87075 12.1684 8.82895 11.8371 8.82895V9.05972C12.1493 9.05972 12.4245 9.09915 12.6643 9.17605L12.7348 8.95631ZM13.4189 9.33599C13.2302 9.16785 13.0013 9.0418 12.7348 8.95631L12.6643 9.17605C12.9042 9.25301 13.1038 9.36427 13.2654 9.5083L13.4189 9.33599ZM13.8501 9.94658C13.7513 9.70801 13.6075 9.50398 13.4189 9.33599L13.2654 9.5083C13.4273 9.65248 13.551 9.82752 13.6369 10.0349L13.8501 9.94658ZM13.9975 10.7552C13.9975 10.4562 13.9493 10.1859 13.8501 9.94658L13.6369 10.0349C13.7225 10.2415 13.7667 10.4809 13.7667 10.7552H13.9975ZM13.87 11.4449C13.9552 11.2285 13.9975 10.9982 13.9975 10.7552H13.7667C13.7667 10.9709 13.7293 11.1723 13.6553 11.3604L13.87 11.4449ZM13.5518 12.0416C13.681 11.8544 13.7871 11.6555 13.87 11.4449L13.6553 11.3604C13.5789 11.5544 13.4812 11.7377 13.3619 11.9105L13.5518 12.0416ZM13.1208 12.5613C13.28 12.4004 13.4237 12.2272 13.5518 12.0416L13.3619 11.9105C13.2415 12.0849 13.1065 12.2477 12.9568 12.399L13.1208 12.5613ZM12.6594 13.001C12.811 12.8655 12.9648 12.7189 13.1208 12.5613L12.9568 12.399C12.8038 12.5535 12.6534 12.6968 12.5056 12.8289L12.6594 13.001ZM12.4577 13.2396C12.504 13.1666 12.5715 13.086 12.6627 12.9979L12.5023 12.832C12.4023 12.9286 12.3217 13.0232 12.2629 13.1159L12.4577 13.2396ZM12.3539 13.4637C12.376 13.3889 12.4103 13.3142 12.4577 13.2396L12.2629 13.1159C12.2051 13.2069 12.1614 13.301 12.1326 13.3982L12.3539 13.4637ZM12.3106 13.7133C12.3164 13.6239 12.331 13.5409 12.3539 13.4637L12.1326 13.3982C12.1045 13.4931 12.0872 13.5932 12.0803 13.6982L12.3106 13.7133ZM11.7464 16.1658C11.9486 16.1658 12.121 16.1103 12.2433 15.9818L12.0761 15.8227C12.0104 15.8917 11.9073 15.935 11.7464 15.935V16.1658ZM11.2529 15.9804C11.3724 16.1104 11.5444 16.1658 11.7464 16.1658V15.935C11.5852 15.935 11.4848 15.8916 11.4228 15.8242L11.2529 15.9804ZM11.0863 15.5344C11.0863 15.7069 11.1407 15.8583 11.2529 15.9804L11.4228 15.8242C11.3535 15.7488 11.317 15.6549 11.317 15.5344H11.0863ZM11.2517 15.0754C11.1398 15.201 11.0863 15.3568 11.0863 15.5344H11.317C11.317 15.4061 11.3543 15.3071 11.424 15.2289L11.2517 15.0754ZM11.7464 14.8838C11.5433 14.8838 11.371 14.9414 11.2517 15.0754L11.424 15.2289C11.4863 15.1589 11.5863 15.1146 11.7464 15.1146V14.8838ZM12.2445 15.0739C12.1225 14.9415 11.9496 14.8838 11.7464 14.8838V15.1146C11.9062 15.1146 12.0089 15.1588 12.0748 15.2303L12.2445 15.0739ZM12.416 15.5344C12.416 15.3557 12.3602 15.1994 12.2445 15.0739L12.0748 15.2303C12.1471 15.3087 12.1852 15.4072 12.1852 15.5344H12.416ZM12.2433 15.9818C12.3593 15.8599 12.416 15.7081 12.416 15.5344H12.1852C12.1852 15.6537 12.148 15.7471 12.0761 15.8227L12.2433 15.9818Z" fill="#2E31BE"/>
                </svg>`;
module.exports = svgs;

/***/ }),

/***/ "1d83":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2158":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCheckbox/NCheckbox.vue?vue&type=template&id=598e3116&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"nitrozen-checkbox-container",class:{ 'nitrozen-checkbox-container-disabled': _vm.disabled }},[_vm._t("default"),_c('input',{directives:[{name:"indeterminate",rawName:"v-indeterminate",value:(_vm.indeterminateValue),expression:"indeterminateValue"}],attrs:{"id":_vm.id,"type":"checkbox","disabled":_vm.disabled},domProps:{"value":_vm.checkboxValue || _vm.value,"checked":_vm.isSelected},on:{"change":_vm.toggle}}),_c('span',{staticClass:"nitrozen-checkbox",attrs:{"for":_vm.id}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=template&id=598e3116&

// EXTERNAL MODULE: ./src/utils/NUuid.js
var NUuid = __webpack_require__("4fe2");

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
      default: () => "nitrozen-checkbox" + Object(NUuid["a" /* default */])()
    },
    indeterminateValue: {
      type: Boolean,
      default: false
    }
  },
  event: "change",
  watch: {
    indeterminateValue() {
      if (this.indeterminateValue) {
        this.$forceUpdate();
      }
    },

    value() {
      console.log(this.value, "value");
    }

  },
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
    },
    toggleAll: function (items) {
      this.$emit("input", items);
      this.$emit("change", items);
    }
  }
});
// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var NCheckbox_NCheckboxvue_type_script_lang_js_ = (NCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NCheckbox/NCheckbox.vue?vue&type=style&index=0&lang=less&
var NCheckboxvue_type_style_index_0_lang_less_ = __webpack_require__("351f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NCheckbox/NCheckbox.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NCheckbox_NCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NCheckbox = (component.exports);
// CONCATENATED MODULE: ./src/components/NCheckbox/index.js

/* harmony default export */ var components_NCheckbox = __webpack_exports__["a"] = (NCheckbox);

/***/ }),

/***/ "2168":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf37");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NChips_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2539":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2611":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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


/***/ }),

/***/ "31a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2611");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NPagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "34d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f38c");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NError_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "351f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2539");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCheckbox_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3a15":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3cc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NError/NError.vue?vue&type=template&id=66da709a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-error-visible"},[_vm._t("default")],2)}
var staticRenderFns = []


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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NError/NError.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NError_NErrorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NError = (component.exports);
// CONCATENATED MODULE: ./src/components/NError/index.js

/* harmony default export */ var components_NError = __webpack_exports__["a"] = (NError);

/***/ }),

/***/ "3e84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "parsePhoneNumberWithError", function() { return /* reexport */ parsePhoneNumberWithError; });
__webpack_require__.d(__webpack_exports__, "parsePhoneNumber", function() { return /* reexport */ parsePhoneNumberWithError; });
__webpack_require__.d(__webpack_exports__, "parsePhoneNumberFromString", function() { return /* reexport */ exports_parsePhoneNumberFromString_parsePhoneNumberFromString; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ exports_parsePhoneNumberFromString_parsePhoneNumberFromString; });
__webpack_require__.d(__webpack_exports__, "isValidPhoneNumber", function() { return /* reexport */ isValidPhoneNumber_isValidPhoneNumber; });
__webpack_require__.d(__webpack_exports__, "isPossiblePhoneNumber", function() { return /* reexport */ exports_isPossiblePhoneNumber_isPossiblePhoneNumber; });
__webpack_require__.d(__webpack_exports__, "findNumbers", function() { return /* reexport */ exports_findNumbers_findNumbers; });
__webpack_require__.d(__webpack_exports__, "searchNumbers", function() { return /* reexport */ searchNumbers_searchNumbers; });
__webpack_require__.d(__webpack_exports__, "findPhoneNumbersInText", function() { return /* reexport */ findPhoneNumbersInText_findPhoneNumbersInText; });
__webpack_require__.d(__webpack_exports__, "searchPhoneNumbersInText", function() { return /* reexport */ searchPhoneNumbersInText_searchPhoneNumbersInText; });
__webpack_require__.d(__webpack_exports__, "PhoneNumberMatcher", function() { return /* reexport */ exports_PhoneNumberMatcher_PhoneNumberMatcher; });
__webpack_require__.d(__webpack_exports__, "AsYouType", function() { return /* reexport */ exports_AsYouType_AsYouType; });
__webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return /* reexport */ DIGIT_PLACEHOLDER; });
__webpack_require__.d(__webpack_exports__, "isSupportedCountry", function() { return /* reexport */ isSupportedCountry_isSupportedCountry; });
__webpack_require__.d(__webpack_exports__, "getCountries", function() { return /* reexport */ getCountries_getCountries; });
__webpack_require__.d(__webpack_exports__, "getCountryCallingCode", function() { return /* reexport */ getCountryCallingCode_getCountryCallingCode; });
__webpack_require__.d(__webpack_exports__, "getPhoneCode", function() { return /* reexport */ getCountryCallingCode_getCountryCallingCode; });
__webpack_require__.d(__webpack_exports__, "getExtPrefix", function() { return /* reexport */ getExtPrefix_getExtPrefix; });
__webpack_require__.d(__webpack_exports__, "Metadata", function() { return /* reexport */ Metadata_Metadata; });
__webpack_require__.d(__webpack_exports__, "getExampleNumber", function() { return /* reexport */ getExampleNumber_getExampleNumber; });
__webpack_require__.d(__webpack_exports__, "formatIncompletePhoneNumber", function() { return /* reexport */ formatIncompletePhoneNumber_formatIncompletePhoneNumber; });
__webpack_require__.d(__webpack_exports__, "ParseError", function() { return /* reexport */ ParseError; });
__webpack_require__.d(__webpack_exports__, "parseIncompletePhoneNumber", function() { return /* reexport */ parseIncompletePhoneNumber; });
__webpack_require__.d(__webpack_exports__, "parsePhoneNumberCharacter", function() { return /* reexport */ parsePhoneNumberCharacter; });
__webpack_require__.d(__webpack_exports__, "parseDigits", function() { return /* reexport */ parseDigits; });
__webpack_require__.d(__webpack_exports__, "parseRFC3966", function() { return /* reexport */ parseRFC3966; });
__webpack_require__.d(__webpack_exports__, "formatRFC3966", function() { return /* reexport */ formatRFC3966; });
__webpack_require__.d(__webpack_exports__, "parseNumber", function() { return /* reexport */ parse_parse; });
__webpack_require__.d(__webpack_exports__, "parse", function() { return /* reexport */ parse_parse; });
__webpack_require__.d(__webpack_exports__, "formatNumber", function() { return /* reexport */ format_format; });
__webpack_require__.d(__webpack_exports__, "format", function() { return /* reexport */ format_format; });
__webpack_require__.d(__webpack_exports__, "getNumberType", function() { return /* reexport */ index_es6_exports_getNumberType_getNumberType; });
__webpack_require__.d(__webpack_exports__, "isPossibleNumber", function() { return /* reexport */ index_es6_exports_isPossibleNumber_isPossibleNumber; });
__webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return /* reexport */ isValidNumber_isValidNumber; });
__webpack_require__.d(__webpack_exports__, "isValidNumberForRegion", function() { return /* reexport */ index_es6_exports_isValidNumberForRegion_isValidNumberForRegion; });
__webpack_require__.d(__webpack_exports__, "findPhoneNumbers", function() { return /* reexport */ index_es6_exports_findPhoneNumbers_findPhoneNumbers; });
__webpack_require__.d(__webpack_exports__, "searchPhoneNumbers", function() { return /* reexport */ searchPhoneNumbers_searchPhoneNumbers; });
__webpack_require__.d(__webpack_exports__, "PhoneNumberSearch", function() { return /* reexport */ PhoneNumberSearch_PhoneNumberSearch; });
__webpack_require__.d(__webpack_exports__, "DIGITS", function() { return /* reexport */ DIGITS; });
__webpack_require__.d(__webpack_exports__, "parseCustom", function() { return /* reexport */ parseNumber; });
__webpack_require__.d(__webpack_exports__, "formatCustom", function() { return /* reexport */ es6_format_formatNumber; });
__webpack_require__.d(__webpack_exports__, "isValidNumberCustom", function() { return /* reexport */ validate_isValidNumber; });
__webpack_require__.d(__webpack_exports__, "findPhoneNumbersCustom", function() { return /* reexport */ findPhoneNumbers_findPhoneNumbers; });
__webpack_require__.d(__webpack_exports__, "searchPhoneNumbersCustom", function() { return /* reexport */ findPhoneNumbers_searchPhoneNumbers; });
__webpack_require__.d(__webpack_exports__, "PhoneNumberSearchCustom", function() { return /* reexport */ findPhoneNumbers_PhoneNumberSearch; });
__webpack_require__.d(__webpack_exports__, "getNumberTypeCustom", function() { return /* reexport */ getNumberType_getNumberType; });
__webpack_require__.d(__webpack_exports__, "getCountryCallingCodeCustom", function() { return /* reexport */ getCountryCallingCode; });
__webpack_require__.d(__webpack_exports__, "getPhoneCodeCustom", function() { return /* reexport */ getCountryCallingCode; });
__webpack_require__.d(__webpack_exports__, "AsYouTypeCustom", function() { return /* reexport */ AsYouType_AsYouType; });

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/metadata.min.json.js
// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
/* harmony default export */ var metadata_min_json = ({"version":4,"country_calling_codes":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"383":["XK"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"880":["BD"],"886":["TW"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],"AD":["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],"AE":["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],"AF":["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],"AG":["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([457]\\d{6})$","268$1",0,"268"],"AI":["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2457]\\d{6})$","264$1",0,"264"],"AL":["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],"AM":["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],"AO":["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],"AR":["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],"AS":["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"1|([267]\\d{6})$","684$1",0,"684"],"AT":["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],"AU":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"0|(183[12])",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"AW":["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],"AX":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],"AZ":["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365|46","1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],"BA":["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],"BB":["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","246$1",0,"246"],"BD":["880","00","1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],"BE":["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],"BF":["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],"BG":["359","00","[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],"BH":["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],"BI":["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],"BJ":["229","00","[25689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[25689]"]]]],"BL":["590","00","(?:590|(?:69|80)\\d|976)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["976[01]\\d{5}"]]],"BM":["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-8]\\d{6})$","441$1",0,"441"],"BN":["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],"BQ":["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],"BR":["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],"BS":["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([3-8]\\d{6})$","242$1",0,"242"],"BT":["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],"BW":["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],"BY":["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],"BZ":["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],"CA":["1","011","(?:[2-8]\\d|90)\\d{8}",[10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"],0,0,0,["600[2-9]\\d{6}"]]],"CC":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CD":["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],"CF":["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],"CG":["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],"CH":["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],"CI":["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],"CK":["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],"CL":["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-3]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],"CM":["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],"CN":["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"0|(1(?:[12]\\d|79)\\d\\d)",0,0,0,0,"00"],"CO":["57","00(?:4(?:[14]4|56)|[579])","(?:1\\d|3)\\d{9}|[124-8]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1 $2",["[14][2-9]|[25-8]"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],"CR":["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],"CU":["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],"CV":["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],"CW":["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],"CX":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CY":["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],"CZ":["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],"DE":["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:[12]\\d|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],"DJ":["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],"DK":["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],"DM":["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","767$1",0,"767"],"DO":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],"DZ":["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],"EC":["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],"EE":["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],"EG":["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],"EH":["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],"ER":["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],"ES":["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],"ET":["251","00","(?:11|[2-59]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],"0"],"FI":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],"FJ":["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],"FK":["500","00","[2-7]\\d{4}",[5]],"FM":["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],"FO":["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],"FR":["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],"GA":["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],0,0,"0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})","$1"],"GB":["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|4(?:[0-5]\\d\\d|69[7-9]|70[059])|(?:5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[02]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],"GD":["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","473$1",0,"473"],"GE":["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],"GF":["594","00","(?:[56]94|80\\d|976)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"GG":["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"0|([25-9]\\d{5})$","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],"GH":["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],"GI":["350","00","(?:[25]\\d\\d|606)\\d{5}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],"GL":["299","00","(?:19|[2-689]\\d)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]]],"GM":["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"GN":["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","00","(?:590|(?:69|80)\\d|976)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["976[01]\\d{5}"]]],"GQ":["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],"GR":["30","00","5005000\\d{3}|8\\d{9,10}|(?:[269]\\d|70)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["8"]]]],"GT":["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"1|([3-9]\\d{6})$","671$1",0,"671"],"GW":["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],"GY":["592","001","(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],"HK":["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],"HN":["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],"HR":["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],"HT":["509","00","[2-489]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]]],"HU":["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],"ID":["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],"IE":["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"IL":["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],"IM":["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([25-8]\\d{5})$","1624$1",0,"74576|(?:16|7[56])24"],"IN":["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],"IO":["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],"IQ":["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"IR":["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],"IS":["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],"IT":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],"JE":["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([0-24-8]\\d{5})$","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}"],["56\\d{8}"]]],"JM":["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],"JO":["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"JP":["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],"KE":["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],"KG":["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"KH":["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"KI":["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],"KM":["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],"KN":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","869$1",0,"869"],"KP":["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],"KR":["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],"KW":["965","00","(?:18|[2569]\\d\\d)\\d{5}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[25]"]]]],"KY":["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","345$1",0,"345"],"KZ":["7","810","33622\\d{5}|(?:7\\d|80)\\d{8}",[10],0,"8",0,0,0,0,"33|7",0,"8~10"],"LA":["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],"LB":["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],"LC":["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"1|([2-8]\\d{6})$","758$1",0,"758"],"LI":["423","00","90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"0|(1001)"],"LK":["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],"LR":["231","00","(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],"0"],"LS":["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],"LT":["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],"LU":["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],"LV":["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],"LY":["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],"MA":["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]","5(?:29|38)[89]0"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0\\d|10|6[1267]|7[0-57]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],"MC":["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],"MD":["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],"ME":["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],"MF":["590","00","(?:590|(?:69|80)\\d|976)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["976[01]\\d{5}"]]],"MG":["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"0|([24-9]\\d{6})$","20$1"],"MH":["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],"MK":["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],"ML":["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],"MM":["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],"MN":["976","001","[12]\\d{7,9}|[57-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],"MO":["853","00","(?:28|[68]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],"MP":["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","670$1",0,"670"],"MQ":["596","00","(?:69|80)\\d{7}|(?:59|97)6\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"MR":["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"1|([34]\\d{6})$","664$1",0,"664"],"MT":["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],"MU":["230","0(?:0|[24-7]0|3[03])","(?:[2-468]|5\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["5"]]],0,0,0,0,0,0,0,"020"],"MV":["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[3467]|9[13-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],"MW":["265","00","1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],"MX":["52","0[09]","(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],"MY":["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9])|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],"MZ":["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],"NA":["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],"NC":["687","00","[2-57-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]]],"NE":["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],"NF":["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],"NG":["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],"NI":["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],"NL":["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",[5,6,7,8,9,10],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],"NO":["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],"NP":["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-579]|6[2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],"NR":["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],"NU":["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],"NZ":["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],"OM":["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],"PA":["507","00","8\\d{9}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],"PE":["51","19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,0," Anexo "],"PF":["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],"PG":["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],"PH":["63","00","1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],"PK":["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],"PL":["48","00","6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],"PM":["508","00","(?:[45]|80\\d\\d)\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"PR":["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],"PS":["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"PT":["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],"PW":["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"PY":["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],"QA":["974","00","[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]]]],"RE":["262","00","9769\\d{5}|(?:26|[68]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,"26[23]|69|[89]"],"RO":["40","00","(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],"RS":["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],"RU":["7","810","[347-9]\\d{9}",[10],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",1]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],"RW":["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],"SA":["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],"SB":["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],"SC":["248","010|0[0-2]","8000\\d{3}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],"SD":["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],"SE":["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],"SG":["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-4]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"SH":["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],"SI":["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],"SJ":["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],"SK":["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],"SL":["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],"SM":["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],"SN":["221","00","(?:[378]\\d{4}|93330)\\d{4}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],"SO":["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["24|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[1-35-9]|9[2-9]"]]],"0"],"SR":["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],"ST":["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],"SV":["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|(5\\d{6})$","721$1",0,"721"],"SY":["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],"SZ":["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],"TA":["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],"TC":["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"1|([2-479]\\d{6})$","649$1",0,"649"],"TD":["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],"TG":["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","00[1-9]","1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"TJ":["992","810","(?:[02]0|11|[3-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"],0,1],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],0,1],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"],0,1],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02-57-9]|11"],0,1]],"8",0,0,0,0,0,0,"8~10"],"TK":["690","00","[2-47]\\d{3,6}",[4,5,6,7]],"TL":["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],"TM":["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"TN":["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],"TO":["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],"TR":["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],"TT":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-46-8]\\d{6})$","868$1",0,"868"],"TV":["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],"TW":["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],"TZ":["255","00[056]","(?:[26-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],"UA":["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]","4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["[3-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],"UG":["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],"US":["1","011","[2-9]\\d{9}",[10],[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[02357]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],"UY":["598","0(?:0|1[3-9]\\d)","4\\d{9}|[249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[24]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"]],"0",0,0,0,0,0,0,"00"," int. "],"UZ":["998","810","(?:33|55|[679]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"VA":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],"VC":["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","784$1",0,"784"],"VE":["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],"VG":["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-578]\\d{6})$","284$1",0,"284"],"VI":["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","340$1",0,"340"],"VN":["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],"VU":["678","00","[48]8\\d{3}|(?:[23]|[579]\\d\\d)\\d{4}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[579]"]]]],"WF":["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],"WS":["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],"XK":["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],"YE":["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],"YT":["262","00","80\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,"269|63"],"ZA":["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],"ZM":["260","00","(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],"ZW":["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},"nonGeographic":{"800":["800",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,["[1-9]\\d{7}"]]],"808":["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],"870":["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],"878":["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],"881":["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],"882":["882",0,"[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["4"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[19]"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-3]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]],"883":["883",0,"210\\d{7}|51\\d{7}(?:\\d{3})?",[9,10,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["5"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:210|51[013]0\\d)\\d{7}|5100\\d{5}"]]],"888":["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],"979":["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}});
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/metadata.js
// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239

/* harmony default export */ var min_metadata = (metadata_min_json);

function withMetadata(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(metadata_min_json)
	return func.apply(this, args)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/constants.js
// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.

var MAX_LENGTH_FOR_NSN = 17; // The maximum length of the country calling code.

var MAX_LENGTH_COUNTRY_CODE = 3; // Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).

var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"; // `DASHES` will be right after the opening square bracket of the "character class"

var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.

var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B"; // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/ParseError.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://stackoverflow.com/a/46971044/970769
var ParseError = function ParseError(code) {
  _classCallCheck(this, ParseError);

  this.name = this.constructor.name;
  this.message = code;
  this.stack = new Error(code).stack;
};


ParseError.prototype = Object.create(Error.prototype);
ParseError.prototype.constructor = ParseError;
//# sourceMappingURL=ParseError.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/tools/semver-compare.js
// Copy-pasted from:
// https://github.com/substack/semver-compare/blob/master/index.js
//
// Inlining this function because some users reported issues with
// importing from `semver-compare` in a browser with ES6 "native" modules.
//
// Fixes `semver-compare` not being able to compare versions with alpha/beta/etc "tags".
// https://github.com/catamphetamine/libphonenumber-js/issues/381
/* harmony default export */ var semver_compare = (function (a, b) {
  a = a.split('-');
  b = b.split('-');
  var pa = a[0].split('.');
  var pb = b[0].split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }

  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }

  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
});
//# sourceMappingURL=semver-compare.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/metadata.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function metadata_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Added "possibleLengths" and renamed
// "country_phone_code_to_countries" to "country_calling_codes".

var V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

var V3 = '1.2.0'; // Moved `001` country code to "nonGeographic" section of metadata.

var V4 = '1.7.35';
var DEFAULT_EXT_PREFIX = ' ext. ';
var CALLING_CODE_REG_EXP = /^\d+$/;
/**
 * See: https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md
 */

var Metadata =
/*#__PURE__*/
function () {
  function Metadata(metadata) {
    metadata_classCallCheck(this, Metadata);

    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }

  _createClass(Metadata, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function (_) {
        return _ !== '001';
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return; // `nonGeographical` was a typo.
      // It's present in metadata generated from `1.7.35` to `1.7.37`.

      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== undefined;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }

      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    } // Deprecated.

  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      // Supports just passing `callingCode` as the first argument.
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }

      if (countryCode && countryCode !== '001') {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }

        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }

        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = undefined;
      }

      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];

      if (countryCodes) {
        // Metadata before V4 included "non-geographic entity" calling codes
        // inside `country_calling_codes` (for example, `"881":["001"]`).
        // Now the semantics of `country_calling_codes` has changed:
        // it's specifically for "countries" now.
        // Older versions of custom metadata will simply skip parsing
        // "non-geographic entity" phone numbers with new versions
        // of this library: it's not considered a bug,
        // because such numbers are extremely rare,
        // and developers extremely rarely use custom metadata.
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }

        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);

      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);

      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }

      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];

        if (metadata) {
          return metadata;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return this.metadata.countries['001'];
        }
      }
    } // Deprecated.

  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    } // Deprecated.

  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    } // Deprecated.

  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    } // Deprecated.

  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    } // Deprecated.

  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    } // Deprecated.

  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    } // Deprecated.

  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    } // Deprecated.

  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    } // Deprecated.

  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    } // Deprecated.

  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    } // Deprecated.

  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    } // Deprecated.

  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    } // Deprecated.

  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== undefined;
    }
  }]);

  return Metadata;
}();



var NumberingPlan =
/*#__PURE__*/
function () {
  function NumberingPlan(metadata, globalMetadataObject) {
    metadata_classCallCheck(this, NumberingPlan);

    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }

  _createClass(NumberingPlan, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    } // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.

  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    } // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "formats",
    value: function formats() {
      var _this = this;

      var formats = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats.map(function (_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    } // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    } // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.


      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && metadata_getType(this.types(), _type2)) {
        return new Type(metadata_getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);

  return NumberingPlan;
}();

var Format =
/*#__PURE__*/
function () {
  function Format(format, metadata) {
    metadata_classCallCheck(this, Format);

    this._format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      // (and it is not enforced explicitly)
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    } // Checks whether national prefix formatting rule contains national prefix.

  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) // In compressed metadata, `this.nationalPrefixFormattingRule()` is `0`
      // when `national_prefix_formatting_rule` is not present.
      // So, `true` or `false` are returned explicitly here, so that
      // `0` number isn't returned.
      ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);

  return Format;
}();
/**
 * A pattern that is used to determine if the national prefix formatting rule
 * has the first group only, i.e., does not start with the national prefix.
 * Note that the pattern explicitly allows for unbalanced parentheses.
 */


var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;

var Type =
/*#__PURE__*/
function () {
  function Type(type, metadata) {
    metadata_classCallCheck(this, Type);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);

  return Type;
}();

function metadata_getType(types, type) {
  switch (type) {
    case 'FIXED_LINE':
      return types[0];

    case 'MOBILE':
      return types[1];

    case 'TOLL_FREE':
      return types[2];

    case 'PREMIUM_RATE':
      return types[3];

    case 'PERSONAL_NUMBER':
      return types[4];

    case 'VOICEMAIL':
      return types[5];

    case 'UAN':
      return types[6];

    case 'PAGER':
      return types[7];

    case 'VOIP':
      return types[8];

    case 'SHARED_COST':
      return types[9];
  }
}

function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  } // `country_phone_code_to_countries` was renamed to
  // `country_calling_codes` in `1.0.18`.


  if (!is_object(metadata) || !is_object(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + type_of(metadata) + ': ' + metadata, "."));
  }
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var is_object = function is_object(_) {
  return _typeof(_) === 'object';
}; // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var type_of = function type_of(_) {
  return _typeof(_);
};
/**
 * Returns extension prefix for a country.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string?}
 * @example
 * // Returns " ext. "
 * getExtPrefix("US")
 */


function getExtPrefix(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).ext();
  }

  return DEFAULT_EXT_PREFIX;
}
/**
 * Returns "country calling code" for a country.
 * Throws an error if the country doesn't exist or isn't supported by this library.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string}
 * @example
 * // Returns "44"
 * getCountryCallingCode("GB")
 */

function getCountryCallingCode(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).countryCallingCode();
  }

  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadata) {
  // metadata = new Metadata(metadata)
  // return metadata.hasCountry(country)
  return metadata.countries[country] !== undefined;
}

function setVersion(metadata) {
  var version = metadata.version;

  if (typeof version === 'number') {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
} // const ISO_COUNTRY_CODE = /^[A-Z]{2}$/
// function isCountryCode(countryCode) {
// 	return ISO_COUNTRY_CODE.test(countryCodeOrCountryCallingCode)
// }
//# sourceMappingURL=metadata.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
 // The RFC 3966 format for extensions.

var RFC3966_EXTN_PREFIX = ';ext=';
/**
 * Helper method for constructing regular expressions for parsing. Creates
 * an expression that captures up to max_length digits.
 * @return {string} RegEx pattern to capture extension digits.
 */

var createExtensionPattern_getExtensionDigitsPattern = function getExtensionDigitsPattern(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
/**
 * Helper initialiser method to create the regular-expression pattern to match
 * extensions.
 * Copy-pasted from Google's `libphonenumber`:
 * https://github.com/google/libphonenumber/blob/55b2646ec9393f4d3d6661b9c82ef9e258e8b829/javascript/i18n/phonenumbers/phonenumberutil.js#L759-L766
 * @return {string} RegEx pattern to capture extensions.
 */


function createExtensionPattern(purpose) {
  // We cap the maximum length of an extension based on the ambiguity of the way
  // the extension is prefixed. As per ITU, the officially allowed length for
  // extensions is actually 40, but we don't support this since we haven't seen real
  // examples and this introduces many false interpretations as the extension labels
  // are not standardized.

  /** @type {string} */
  var extLimitAfterExplicitLabel = '20';
  /** @type {string} */

  var extLimitAfterLikelyLabel = '15';
  /** @type {string} */

  var extLimitAfterAmbiguousChar = '9';
  /** @type {string} */

  var extLimitWhenNotSure = '6';
  /** @type {string} */

  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*"; // Optional full stop (.) or colon, followed by zero or more spaces/tabs/commas.

  /** @type {string} */

  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  /** @type {string} */

  var optionalExtnSuffix = "#?"; // Here the extension is called out in more explicit way, i.e mentioning it obvious
  // patterns like "ext.".

  /** @type {string} */

  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)"; // One-character symbols that can be used to indicate an extension, and less
  // commonly used or more ambiguous extension labels.

  /** @type {string} */

  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)"; // When extension is not separated clearly.

  /** @type {string} */

  var ambiguousSeparator = "[- ]+"; // This is the same as possibleSeparatorsBetweenNumberAndExtLabel, but not matching
  // comma as extension label may have it.

  /** @type {string} */

  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*"; // ",," is commonly used for auto dialling the extension when connected. First
  // comma is matched through possibleSeparatorsBetweenNumberAndExtLabel, so we do
  // not repeat it here. Semi-colon works in Iphone and Android also to pop up a
  // button with the extension number following.

  /** @type {string} */

  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  /** @type {string} */

  var rfcExtn = RFC3966_EXTN_PREFIX + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  /** @type {string} */

  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  /** @type {string} */

  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  /** @type {string} */

  var americanStyleExtnWithSuffix = ambiguousSeparator + createExtensionPattern_getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  /** @type {string} */

  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  /** @type {string} */

  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix; // The first regular expression covers RFC 3966 format, where the extension is added
  // using ";ext=". The second more generic where extension is mentioned with explicit
  // labels like "ext:". In both the above cases we allow more numbers in extension than
  // any other extension labels. The third one captures when single character extension
  // labels or less commonly used labels are used. In such cases we capture fewer
  // extension digits in order to reduce the chance of falsely interpreting two
  // numbers beside each other as a number + extension. The fourth one covers the
  // special case of American numbers where the extension is written with a hash
  // at the end, such as "- 503#". The fifth one is exclusively for extension
  // autodialling formats which are used when dialling and in this case we accept longer
  // extensions. The last one is more liberal on the number of commas that acts as
  // extension labels, so we have a strict cap on the number of digits in such extensions.

  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}
//# sourceMappingURL=createExtensionPattern.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js

 //  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//

var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}'; //
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//

var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
'(?:' + createExtensionPattern() + ')?'; // The combined regular expression for valid phone numbers:
//

var VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + // Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER_WITH_EXTENSION + '$', 'i'); // Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//

function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
//# sourceMappingURL=isViablePhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
 // Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.

var EXTN_PATTERN = new RegExp('(?:' + createExtensionPattern() + ')$', 'i'); // Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.

function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);

  if (start < 0) {
    return {};
  } // If we find a potential extension, and the number preceding this is a viable
  // number, we assume it is an extension.


  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;

  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }

    i++;
  }
}
//# sourceMappingURL=extractExtension.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/parseDigits.js
// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGITS = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  "\uFF10": '0',
  // Fullwidth digit 0
  "\uFF11": '1',
  // Fullwidth digit 1
  "\uFF12": '2',
  // Fullwidth digit 2
  "\uFF13": '3',
  // Fullwidth digit 3
  "\uFF14": '4',
  // Fullwidth digit 4
  "\uFF15": '5',
  // Fullwidth digit 5
  "\uFF16": '6',
  // Fullwidth digit 6
  "\uFF17": '7',
  // Fullwidth digit 7
  "\uFF18": '8',
  // Fullwidth digit 8
  "\uFF19": '9',
  // Fullwidth digit 9
  "\u0660": '0',
  // Arabic-indic digit 0
  "\u0661": '1',
  // Arabic-indic digit 1
  "\u0662": '2',
  // Arabic-indic digit 2
  "\u0663": '3',
  // Arabic-indic digit 3
  "\u0664": '4',
  // Arabic-indic digit 4
  "\u0665": '5',
  // Arabic-indic digit 5
  "\u0666": '6',
  // Arabic-indic digit 6
  "\u0667": '7',
  // Arabic-indic digit 7
  "\u0668": '8',
  // Arabic-indic digit 8
  "\u0669": '9',
  // Arabic-indic digit 9
  "\u06F0": '0',
  // Eastern-Arabic digit 0
  "\u06F1": '1',
  // Eastern-Arabic digit 1
  "\u06F2": '2',
  // Eastern-Arabic digit 2
  "\u06F3": '3',
  // Eastern-Arabic digit 3
  "\u06F4": '4',
  // Eastern-Arabic digit 4
  "\u06F5": '5',
  // Eastern-Arabic digit 5
  "\u06F6": '6',
  // Eastern-Arabic digit 6
  "\u06F7": '7',
  // Eastern-Arabic digit 7
  "\u06F8": '8',
  // Eastern-Arabic digit 8
  "\u06F9": '9' // Eastern-Arabic digit 9

};
function parseDigit(character) {
  return DIGITS[character];
}
/**
 * Parses phone number digits from a string.
 * Drops all punctuation leaving only digits.
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parseDigits('8 (800) 555')
 * // Outputs '8800555'.
 * ```
 */

function parseDigits(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    var digit = parseDigit(character);

    if (digit) {
      result += digit;
    }
  }

  return result;
}
//# sourceMappingURL=parseDigits.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js

/**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '+7800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * ```
 */

function parseIncompletePhoneNumber(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    result += parsePhoneNumberCharacter(character, result) || '';
  }

  return result;
}
/**
 * Parses next character while parsing phone number digits (including a `+`)
 * from text: discards everything except `+` and digits, and `+` is only allowed
 * at the start of a phone number.
 * For example, is used in `react-phone-number-input` where it uses
 * [`input-format`](https://gitlab.com/catamphetamine/input-format).
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string?} prevParsedCharacters - Previous parsed characters.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */

function parsePhoneNumberCharacter(character, prevParsedCharacters) {
  // Only allow a leading `+`.
  if (character === '+') {
    // If this `+` is not the first parsed character
    // then discard it.
    if (prevParsedCharacters) {
      return;
    }

    return '+';
  } // Allow digits.


  return parseDigit(character);
}
//# sourceMappingURL=parseIncompletePhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
/**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */
function mergeArrays(a, b) {
  var merged = a.slice();

  for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var element = _ref;

    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }

  return merged.sort(function (a, b) {
    return a - b;
  }); // ES6 version, requires Set polyfill.
  // let merged = new Set(a)
  // for (const element of b) {
  // 	merged.add(i)
  // }
  // return Array.from(merged).sort((a, b) => a - b)
}
//# sourceMappingURL=mergeArrays.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js

function checkNumberLength(nationalNumber, metadata) {
  return checkNumberLengthForType(nationalNumber, undefined, metadata);
} // Checks whether a number is possible for the country based on its length.
// Should only be called for the "new" metadata which has "possible lengths".

function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type); // There should always be "<possiblePengths/>" set for every type element.
  // This is declared in the XML schema.
  // For size efficiency, where a sub-description (e.g. fixed-line)
  // has the same "<possiblePengths/>" as the "general description", this is missing,
  // so we fall back to the "general description". Where no numbers of the type
  // exist at all, there is one possible length (-1) which is guaranteed
  // not to match the length of any real phone number.

  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths(); // let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()
  // Metadata before version `1.0.18` didn't contain `possible_lengths`.

  if (!possible_lengths) {
    return 'IS_POSSIBLE';
  }

  if (type === 'FIXED_LINE_OR_MOBILE') {
    // No such country in metadata.

    /* istanbul ignore next */
    if (!metadata.type('FIXED_LINE')) {
      // The rare case has been encountered where no fixedLine data is available
      // (true for some non-geographic entities), so we just check mobile.
      return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
    }

    var mobile_type = metadata.type('MOBILE');

    if (mobile_type) {
      // Merge the mobile data in if there was any. "Concat" creates a new
      // array, it doesn't edit possible_lengths in place, so we don't need a copy.
      // Note that when adding the possible lengths from mobile, we have
      // to again check they aren't empty since if they are this indicates
      // they are the same as the general desc and should be obtained from there.
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths()); // The current list is sorted; we need to merge in the new list and
      // re-sort (duplicates are okay). Sorting isn't so expensive because
      // the lists are very small.
      // if (local_lengths) {
      // 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
      // } else {
      // 	local_lengths = mobile_type.possibleLengthsLocal()
      // }
    }
  } // If the type doesn't exist then return 'INVALID_LENGTH'.
  else if (type && !type_info) {
      return 'INVALID_LENGTH';
    }

  var actual_length = nationalNumber.length; // In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
  // // This is safe because there is never an overlap beween the possible lengths
  // // and the local-only lengths; this is checked at build time.
  // if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
  // {
  // 	return 'IS_POSSIBLE_LOCAL_ONLY'
  // }

  var minimum_length = possible_lengths[0];

  if (minimum_length === actual_length) {
    return 'IS_POSSIBLE';
  }

  if (minimum_length > actual_length) {
    return 'TOO_SHORT';
  }

  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return 'TOO_LONG';
  } // We skip the first element since we've already checked it.


  return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
}
//# sourceMappingURL=checkNumberLength.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isPossibleNumber_.js


function isPossiblePhoneNumber(input, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  metadata = new Metadata(metadata);

  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error('Invalid phone number object passed');
    }

    metadata.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }

    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }

      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error('Invalid phone number object passed');
      }

      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }

  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  } else {
    // There was a bug between `1.7.35` and `1.7.37` where "possible_lengths"
    // were missing for "non-geographical" numbering plans.
    // Just assume the number is possible in such cases:
    // it's unlikely that anyone generated their custom metadata
    // in that short period of time (one day).
    // This code can be removed in some future major version update.
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      // "Non-geographic entities" did't have `possibleLengths`
      // due to a bug in metadata generation process.
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata) {
  //, isInternational) {
  switch (checkNumberLength(nationalNumber, metadata)) {
    case 'IS_POSSIBLE':
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational

    default:
      return false;
  }
}
//# sourceMappingURL=isPossibleNumber_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // https://www.ietf.org/rfc/rfc3966.txt

/**
 * @param  {string} text - Phone URI (RFC 3966).
 * @return {object} `{ ?number, ?ext }`.
 */

function parseRFC3966(text) {
  var number;
  var ext; // Replace "tel:" with "tel=" for parsing convenience.

  text = text.replace(/^tel:/, 'tel=');

  for (var _iterator = text.split(';'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var part = _ref;

    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        name = _part$split2[0],
        value = _part$split2[1];

    switch (name) {
      case 'tel':
        number = value;
        break;

      case 'ext':
        ext = value;
        break;

      case 'phone-context':
        // Only "country contexts" are supported.
        // "Domain contexts" are ignored.
        if (value[0] === '+') {
          number = value + number;
        }

        break;
    }
  } // If the phone number is not viable, then abort.


  if (!isViablePhoneNumber(number)) {
    return {};
  }

  var result = {
    number: number
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * @param  {object} - `{ ?number, ?extension }`.
 * @return {string} Phone URI (RFC 3966).
 */

function formatRFC3966(_ref2) {
  var number = _ref2.number,
      ext = _ref2.ext;

  if (!number) {
    return '';
  }

  if (number[0] !== '+') {
    throw new Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
  }

  return "tel:".concat(number).concat(ext ? ';ext=' + ext : '');
}
//# sourceMappingURL=RFC3966.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
/**
 * Checks whether the entire input sequence can be matched
 * against the regular expression.
 * @return {boolean}
 */
function matchesEntirely(text, regular_expression) {
  // If assigning the `''` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  text = text || '';
  return new RegExp('^(?:' + regular_expression + ')$').test(text);
}
//# sourceMappingURL=matchesEntirely.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getNumberType.js


var NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL']; // Finds out national phone number type (fixed line, mobile, etc)

function getNumberType(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {}; // When `parse()` returned `{}`
  // meaning that the phone number is not a valid one.

  if (!input.country) {
    return;
  }

  metadata = new Metadata(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // The following is copy-pasted from the original function:
  // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
  // Is this national number even valid for this country

  if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  } // Is it fixed line number


  if (isNumberTypeEqualTo(nationalNumber, 'FIXED_LINE', metadata)) {
    // Because duplicate regular expressions are removed
    // to reduce metadata size, if "mobile" pattern is ""
    // then it means it was removed due to being a duplicate of the fixed-line pattern.
    //
    if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
      return 'FIXED_LINE_OR_MOBILE';
    } // v1 metadata.
    // Legacy.
    // Deprecated.


    if (!metadata.type('MOBILE')) {
      return 'FIXED_LINE_OR_MOBILE';
    } // Check if the number happens to qualify as both fixed line and mobile.
    // (no such country in the minimal metadata set)

    /* istanbul ignore if */


    if (isNumberTypeEqualTo(nationalNumber, 'MOBILE', metadata)) {
      return 'FIXED_LINE_OR_MOBILE';
    }

    return 'FIXED_LINE';
  }

  for (var _i = 0, _NON_FIXED_LINE_PHONE = NON_FIXED_LINE_PHONE_TYPES; _i < _NON_FIXED_LINE_PHONE.length; _i++) {
    var type = _NON_FIXED_LINE_PHONE[_i];

    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  type = metadata.type(type);

  if (!type || !type.pattern()) {
    return false;
  } // Check if any possible number lengths are present;
  // if so, we use them to avoid checking
  // the validation pattern if they don't match.
  // If they are absent, this means they match
  // the general description, which we have
  // already checked before a specific number type.


  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }

  return matchesEntirely(nationalNumber, type.pattern());
}
//# sourceMappingURL=getNumberType.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/validate_.js



/**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

function isValidNumber(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new Metadata(metadata); // This is just to support `isValidNumber({})`
  // for cases when `parseNumber()` returns `{}`.

  if (!input.country) {
    return false;
  }

  metadata.selectNumberingPlan(input.country, input.countryCallingCode); // By default, countries only have type regexps when it's required for
  // distinguishing different countries having the same `countryCallingCode`.

  if (metadata.hasTypes()) {
    return getNumberType(input, options, metadata.metadata) !== undefined;
  } // If there are no type regexps for this country in metadata then use
  // `nationalNumberPattern` as a "better than nothing" replacement.


  var national_number = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(national_number, metadata.nationalNumberPattern());
}
//# sourceMappingURL=validate_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
 // Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
// For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
// Meanwhile, there's no single opinion about using punctuation in international phone numbers.
//
// For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
// And here's a quote from WikiPedia's "North American Numbering Plan" page:
// https://en.wikipedia.org/wiki/North_American_Numbering_Plan
//
// "The country calling code for all countries participating in the NANP is 1.
// In international format, an NANP number should be listed as +1 301 555 01 00,
// where 301 is an area code (Maryland)."
//
// I personally prefer the international format without any punctuation.
// For example, brackets are remnants of the old age, meaning that the
// phone number part in brackets (so called "area code") can be omitted
// if dialing within the same "area".
// And hyphens were clearly introduced for splitting local numbers into memorizable groups.
// For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
// Imagine a man taking a bus from home to work and seeing an ad with a phone number.
// He has a couple of seconds to memorize that number until it passes by.
// If it were spaces instead of hyphens the man wouldn't necessarily get it,
// but with hyphens instead of spaces the grouping is more explicit.
// I personally think that hyphens introduce visual clutter,
// so I prefer replacing them with spaces in international numbers.
// In the modern age all output is done on displays where spaces are clearly distinguishable
// so hyphens can be safely replaced with spaces without losing any legibility.
//

function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), 'g'), ' ').trim();
}
//# sourceMappingURL=applyInternationalSeparatorStyle.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
 // This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly. Therefore, we use `\d`, so that the first
// group actually used in the pattern will be matched.

var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat,
      withNationalPrefix = _ref.withNationalPrefix,
      carrierCode = _ref.carrierCode,
      metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : // This library doesn't use `domestic_carrier_code_formatting_rule`,
  // because that one is only used when formatting phone numbers
  // for dialing from a mobile phone, and this is not a dialing library.
  // carrierCode && format.domesticCarrierCodeFormattingRule()
  // 	// First, replace the $CC in the formatting rule with the desired carrier code.
  // 	// Then, replace the $FG in the formatting rule with the first group
  // 	// and the carrier code combined in the appropriate way.
  // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
  // 	: (
  // 		withNationalPrefix && format.nationalPrefixFormattingRule()
  // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
  // 			: format.format()
  // 	)
  withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }

  return formattedNumber;
}
//# sourceMappingURL=formatNationalNumberUsingFormat.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js

/**
 * Pattern that makes it easy to distinguish whether a region has a single
 * international dialing prefix or not. If a region has a single international
 * prefix (e.g. 011 in USA), it will be represented as a string that contains
 * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
 * the tone. If there are multiple available international prefixes in a
 * region, they will be represented as a regex string that always contains one
 * or more characters that are not ASCII digits or a tilde.
 */

var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/; // For regions that have multiple IDD prefixes
// a preferred IDD prefix is returned.

function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);

  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }

  return countryMetadata.defaultIDDPrefix();
}
//# sourceMappingURL=getIddPrefix.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/format_.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js





var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  } // Formats a phone number
  //
  // Example use cases:
  //
  // ```js
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL')
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
  // formatNumber('+78005553535', 'NATIONAL')
  // formatNumber('+78005553535', 'NATIONAL', metadata)
  // ```
  //

};
function format_formatNumber(input, format, options, metadata) {
  // Apply default options.
  if (options) {
    options = _objectSpread({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }

  metadata = new Metadata(metadata);

  if (input.country && input.country !== '001') {
    // Validate `input.country`.
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }

    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || '';

  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // This variable should have been declared inside `case`s
  // but Babel has a bug and it says "duplicate variable declaration".

  var number;

  switch (format) {
    case 'NATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return '';
      }

      number = formatNationalNumber(nationalNumber, input.carrierCode, 'NATIONAL', metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'INTERNATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }

      number = formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'E.164':
      // `E.164` doesn't define "phone number extensions".
      return "+".concat(countryCallingCode).concat(nationalNumber);

    case 'RFC3966':
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?

    case 'IDD':
      if (!options.fromCountry) {
        return; // throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
      }

      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);

    default:
      throw new Error("Unknown \"format\" argument passed to \"formatNumber()\": \"".concat(format, "\""));
  }
}

function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);

  if (!format) {
    return number;
  }

  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === 'INTERNATIONAL',
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode: carrierCode,
    metadata: metadata
  });
}

function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = availableFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var format = _ref;

    // Validate leading digits
    if (format.leadingDigitsPatterns().length > 0) {
      // The last leading_digits_pattern is used here, as it is the most detailed
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    } // Check that the national number matches the phone number format regular expression


    if (matchesEntirely(nationalNnumber, format.pattern())) {
      return format;
    }
  }
}

function addExtension(formattedNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
}

function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata); // When calling within the same country calling code.

  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, 'NATIONAL', metadata); // For NANPA regions, return the national format for these regions
    // but prefix it with the country calling code.

    if (countryCallingCode === '1') {
      return countryCallingCode + ' ' + formattedNumber;
    } // If regions share a country calling code, the country calling code need
    // not be dialled. This also applies when dialling within a region, so this
    // if clause covers both these cases. Technically this is the case for
    // dialling from La Reunion to other overseas departments of France (French
    // Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
    // this edge case for now and for those cases return the version including
    // country calling code. Details here:
    // http://www.petitfute.com/voyage/225-info-pratiques-reunion
    //


    return formattedNumber;
  }

  var iddPrefix = getIddPrefix(fromCountry, undefined, metadata.metadata);

  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata));
  }
}
//# sourceMappingURL=format_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/PhoneNumber.js
function PhoneNumber_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

function PhoneNumber_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PhoneNumber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PhoneNumber_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PhoneNumber_createClass(Constructor, protoProps, staticProps) { if (protoProps) PhoneNumber_defineProperties(Constructor.prototype, protoProps); if (staticProps) PhoneNumber_defineProperties(Constructor, staticProps); return Constructor; }







var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var PhoneNumber_PhoneNumber =
/*#__PURE__*/
function () {
  function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
    PhoneNumber_classCallCheck(this, PhoneNumber);

    if (!countryCallingCode) {
      throw new TypeError('`country` or `countryCallingCode` not passed');
    }

    if (!nationalNumber) {
      throw new TypeError('`nationalNumber` not passed');
    }

    var _metadata = new Metadata(metadata); // If country code is passed then derive `countryCallingCode` from it.
    // Also store the country code as `.country`.


    if (isCountryCode(countryCallingCode)) {
      this.country = countryCallingCode;

      _metadata.country(countryCallingCode);

      countryCallingCode = _metadata.countryCallingCode();
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
          this.country = '001';
        }
      }
    }

    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = '+' + this.countryCallingCode + this.nationalNumber;
    this.metadata = metadata;
  }

  PhoneNumber_createClass(PhoneNumber, [{
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new Metadata(this.metadata);
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    } // // Is just an alias for `this.isValid() && this.country === country`.
    // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
    // isValidForRegion(country) {
    // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
    // }

  }, {
    key: "getType",
    value: function getType() {
      return getNumberType(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return format_formatNumber(this, _format, options ? PhoneNumber_objectSpread({}, options, {
        v2: true
      }) : {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format('NATIONAL', options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format('INTERNATIONAL', options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format('RFC3966', options);
    }
  }]);

  return PhoneNumber;
}();



var isCountryCode = function isCountryCode(value) {
  return /^[A-Z]{2}$/.test(value);
};
//# sourceMappingURL=PhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js


var CAPTURING_DIGIT_PATTERN = new RegExp('([' + VALID_DIGITS + '])');
function stripIddPrefix(number, country, callingCode, metadata) {
  if (!country) {
    return;
  } // Check if the number is IDD-prefixed.


  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  } // Strip IDD prefix.


  number = number.slice(number.match(IDDPrefixPattern)[0].length); // If there're any digits after an IDD prefix,
  // then those digits are a country calling code.
  // Since no country code starts with a `0`,
  // the code below validates that the next digit (if present) is not `0`.

  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);

  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === '0') {
      return;
    }
  }

  return number;
}
//# sourceMappingURL=stripIddPrefix.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
/**
 * Strips any national prefix (such as 0, 1) present in a
 * (possibly incomplete) number provided.
 * "Carrier codes" are only used  in Colombia and Brazil,
 * and only when dialing within those countries from a mobile phone to a fixed line number.
 * Sometimes it won't actually strip national prefix
 * and will instead prepend some digits to the `number`:
 * for example, when number `2345678` is passed with `VI` country selected,
 * it will return `{ number: "3402345678" }`, because `340` area code is prepended.
 * @param {string} number — National number digits.
 * @param {object} metadata — Metadata with country selected.
 * @return {object} `{ nationalNumber: string, nationalPrefix: string? carrierCode: string? }`.
 */
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    // See METADATA.md for the description of
    // `national_prefix_for_parsing` and `national_prefix_transform_rule`.
    // Attempt to parse the first digits as a national prefix.
    var prefixPattern = new RegExp('^(?:' + metadata.numberingPlan.nationalPrefixForParsing() + ')');
    var prefixMatch = prefixPattern.exec(number);

    if (prefixMatch) {
      var nationalNumber;
      var carrierCode; // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule
      // If a `national_prefix_for_parsing` has any "capturing groups"
      // then it means that the national (significant) number is equal to
      // those "capturing groups" transformed via `national_prefix_transform_rule`,
      // and nothing could be said about the actual national prefix:
      // what is it and was it even there.
      // If a `national_prefix_for_parsing` doesn't have any "capturing groups",
      // then everything it matches is a national prefix.
      // To determine whether `national_prefix_for_parsing` matched any
      // "capturing groups", the value of the result of calling `.exec()`
      // is looked at, and if it has non-undefined values where there're
      // "capturing groups" in the regular expression, then it means
      // that "capturing groups" have been matched.
      // It's not possible to tell whether there'll be any "capturing gropus"
      // before the matching process, because a `national_prefix_for_parsing`
      // could exhibit both behaviors.

      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];

      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule()); // If there's more than one captured group,
        // then carrier code is the second one.

        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } // If there're no "capturing groups",
      // or if there're "capturing groups" but no
      // `national_prefix_transform_rule`,
      // then just strip the national prefix from the number,
      // and possibly a carrier code.
      // Seems like there could be more.
      else {
          // `prefixBeforeNationalNumber` is the whole substring matched by
          // the `national_prefix_for_parsing` regular expression.
          // There seem to be no guarantees that it's just a national prefix.
          // For example, if there's a carrier code, it's gonna be a
          // part of `prefixBeforeNationalNumber` too.
          var prefixBeforeNationalNumber = prefixMatch[0];
          nationalNumber = number.slice(prefixBeforeNationalNumber.length); // If there's at least one captured group,
          // then carrier code is the first one.

          if (hasCapturedGroups) {
            carrierCode = prefixMatch[1];
          }
        } // Tries to guess whether a national prefix was present in the input.
      // This is not something copy-pasted from Google's library:
      // they don't seem to have an equivalent for that.
      // So this isn't an "officially approved" way of doing something like that.
      // But since there seems no other existing method, this library uses it.


      var nationalPrefix;

      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup); // Example: an Argentinian (AR) phone number `0111523456789`.
        // `prefixMatch[0]` is `01115`, and `$1` is `11`,
        // and the rest of the phone number is `23456789`.
        // The national number is transformed via `9$1` to `91123456789`.
        // National prefix `0` is detected being present at the start.
        // if (possibleNationalPrefix.indexOf(metadata.numberingPlan.nationalPrefix()) === 0) {

        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }

      return {
        nationalNumber: nationalNumber,
        nationalPrefix: nationalPrefix,
        carrierCode: carrierCode
      };
    }
  }

  return {
    nationalNumber: number
  };
}
//# sourceMappingURL=extractNationalNumberFromPossiblyIncompleteNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js



/**
 * Strips national prefix and carrier code from a complete phone number.
 * The difference from the non-"FromCompleteNumber" function is that
 * it won't extract national prefix if the resultant number is too short
 * to be a complete number for the selected phone numbering plan.
 * @param  {string} number — Complete phone number digits.
 * @param  {Metadata} metadata — Metadata with a phone numbering plan selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */

function extractNationalNumber(number, metadata) {
  // Parsing national prefixes and carrier codes
  // is only required for local phone numbers
  // but some people don't understand that
  // and sometimes write international phone numbers
  // with national prefixes (or maybe even carrier codes).
  // http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
  // Google's original library forgives such mistakes
  // and so does this library, because it has been requested:
  // https://github.com/catamphetamine/libphonenumber-js/issues/127
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata),
      nationalNumber = _extractNationalNumbe.nationalNumber,
      carrierCode = _extractNationalNumbe.carrierCode;

  if (!shouldExtractNationalPrefix(number, nationalNumber, metadata)) {
    // Don't strip the national prefix.
    return {
      nationalNumber: number
    };
  } // If a national prefix has been extracted, check to see
  // if the resultant number isn't too short.
  // Same code in Google's `libphonenumber`:
  // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3291-L3302
  // For some reason, they do this check right after the `national_number_pattern` check
  // this library does in `shouldExtractNationalPrefix()` function.
  // Why is there a second "resultant" number validity check?
  // They don't provide an explanation.
  // This library just copies the behavior.


  if (number.length !== nationalNumber.length + (carrierCode ? carrierCode.length : 0)) {
    // If not using legacy generated metadata (before version `1.0.18`)
    // then it has "possible lengths", so use those to validate the number length.
    if (metadata.possibleLengths()) {
      // "We require that the NSN remaining after stripping the national prefix and
      // carrier code be long enough to be a possible length for the region.
      // Otherwise, we don't do the stripping, since the original number could be
      // a valid short number."
      // https://github.com/google/libphonenumber/blob/876268eb1ad6cdc1b7b5bef17fc5e43052702d57/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3236-L3250
      switch (checkNumberLength(nationalNumber, metadata)) {
        case 'TOO_SHORT':
        case 'INVALID_LENGTH':
          // case 'IS_POSSIBLE_LOCAL_ONLY':
          // Don't strip the national prefix.
          return {
            nationalNumber: number
          };
      }
    }
  }

  return {
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
} // In some countries, the same digit could be a national prefix
// or a leading digit of a valid phone number.
// For example, in Russia, national prefix is `8`,
// and also `800 555 35 35` is a valid number
// in which `8` is not a national prefix, but the first digit
// of a national (significant) number.
// Same's with Belarus:
// `82004910060` is a valid national (significant) number,
// but `2004910060` is not.
// To support such cases (to prevent the code from always stripping
// national prefix), a condition is imposed: a national prefix
// is not extracted when the original number is "viable" and the
// resultant number is not, a "viable" national number being the one
// that matches `national_number_pattern`.

function shouldExtractNationalPrefix(number, nationalSignificantNumber, metadata) {
  // The equivalent in Google's code is:
  // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L2969-L3004
  if (matchesEntirely(number, metadata.nationalNumberPattern()) && !matchesEntirely(nationalSignificantNumber, metadata.nationalNumberPattern())) {
    return false;
  } // Just "possible" number check would be more relaxed, so it's not used.
  // if (isPossibleNumber(number, metadata) &&
  // 	!isPossibleNumber(numberWithNationalPrefixExtracted, metadata)) {
  // 	return false
  // }


  return true;
}
//# sourceMappingURL=extractNationalNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js





/**
 * Sometimes some people incorrectly input international phone numbers
 * without the leading `+`. This function corrects such input.
 * @param  {string} number — Phone number digits.
 * @param  {string?} country
 * @param  {string?} callingCode
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`.
 */

function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
  var countryCallingCode = country ? getCountryCallingCode(country, metadata) : callingCode;

  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(country, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);

    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata),
        possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;

    var _extractNationalNumbe2 = extractNationalNumber(number, metadata),
        nationalNumber = _extractNationalNumbe2.nationalNumber; // If the number was not valid before but is valid now,
    // or if it was too long before, we consider the number
    // with the country calling code stripped to be a better result
    // and keep that instead.
    // For example, in Germany (+49), `49` is a valid area code,
    // so if a number starts with `49`, it could be both a valid
    // national German number or an international number without
    // a leading `+`.


    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === 'TOO_LONG') {
      return {
        countryCallingCode: countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }

  return {
    number: number
  };
}
//# sourceMappingURL=extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js




/**
 * Converts a phone number digits (possibly with a `+`)
 * into a calling code and the rest phone number digits.
 * The "rest phone number digits" could include
 * a national prefix, carrier code, and national
 * (significant) number.
 * @param  {string} number — Phone number digits (possibly with a `+`).
 * @param  {string} [country] — Default country.
 * @param  {string} [callingCode] — Default calling code (some phone numbering plans are non-geographic).
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`
 * @example
 * // Returns `{ countryCallingCode: "1", number: "2133734253" }`.
 * extractCountryCallingCode('2133734253', 'US', null, metadata)
 * extractCountryCallingCode('2133734253', null, '1', metadata)
 * extractCountryCallingCode('+12133734253', null, null, metadata)
 * extractCountryCallingCode('+12133734253', 'RU', null, metadata)
 */

function extractCountryCallingCode_extractCountryCallingCode(number, country, callingCode, metadata) {
  if (!number) {
    return {};
  } // If this is not an international phone number,
  // then either extract an "IDD" prefix, or extract a
  // country calling code from a number by autocorrecting it
  // by prepending a leading `+` in cases when it starts
  // with the country calling code.
  // https://wikitravel.org/en/International_dialling_prefix
  // https://github.com/catamphetamine/libphonenumber-js/issues/376


  if (number[0] !== '+') {
    // Convert an "out-of-country" dialing phone number
    // to a proper international phone number.
    var numberWithoutIDD = stripIddPrefix(number, country, callingCode, metadata); // If an IDD prefix was stripped then
    // convert the number to international one
    // for subsequent parsing.

    if (numberWithoutIDD && numberWithoutIDD !== number) {
      number = '+' + numberWithoutIDD;
    } else {
      // Check to see if the number starts with the country calling code
      // for the default country. If so, we remove the country calling code,
      // and do some checks on the validity of the number before and after.
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      if (country || callingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata),
            countryCallingCode = _extractCountryCallin.countryCallingCode,
            shorterNumber = _extractCountryCallin.number;

        if (countryCallingCode) {
          return {
            countryCallingCode: countryCallingCode,
            number: shorterNumber
          };
        }
      }

      return {
        number: number
      };
    }
  } // Fast abortion: country codes do not begin with a '0'


  if (number[1] === '0') {
    return {};
  }

  metadata = new Metadata(metadata); // The thing with country phone codes
  // is that they are orthogonal to each other
  // i.e. there's no such country phone code A
  // for which country phone code B exists
  // where B starts with A.
  // Therefore, while scanning digits,
  // if a valid country code is found,
  // that means that it is the country code.
  //

  var i = 2;

  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);

    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }

    i++;
  }

  return {};
}
//# sourceMappingURL=extractCountryCallingCode.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js


var getCountryByCallingCode_USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
  /* istanbul ignore if */
  if (getCountryByCallingCode_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return '001';
    }
  } // Is always non-empty, because `callingCode` is always valid


  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);

  if (!possibleCountries) {
    return;
  } // If there's just one country corresponding to the country code,
  // then just return it, without further phone number digits validation.


  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }

  return selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata.metadata);
}

function selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata) {
  // Re-create `metadata` because it will be selecting a `country`.
  metadata = new Metadata(metadata);

  for (var _iterator = possibleCountries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var country = _ref;
    metadata.country(country); // Leading digits check would be the simplest one

    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } // Else perform full validation with all of those
    // fixed-line/mobile/etc regular expressions.
    else if (getNumberType({
        phone: nationalPhoneNumber,
        country: country
      }, undefined, metadata.metadata)) {
        return country;
      }
  }
}
//# sourceMappingURL=getCountryByCallingCode.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parse_.js
// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js















 // We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.

var MAX_INPUT_STRING_LENGTH = 250; // This consists of the plus symbol, digits, and arabic-indic digits.

var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']'); // Regular expression of trailing characters that we want to remove.
// A trailing `#` is sometimes used when writing phone numbers with extensions in US.
// Example: "+1 (645) 123 1234-910#" number has extension "910".

var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + '#' + ']+$');
var parse_USE_NON_GEOGRAPHIC_COUNTRY_CODE = false; // Examples:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//

function parse(text, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new Metadata(metadata); // Validate `defaultCountry`.

  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError('INVALID_COUNTRY');
    }

    throw new Error("Unknown country: ".concat(options.defaultCountry));
  } // Parse the phone number.


  var _parseInput = parseInput(text, options.v2, options.extract),
      formattedPhoneNumber = _parseInput.number,
      ext = _parseInput.ext; // If the phone number is not viable then return nothing.


  if (!formattedPhoneNumber) {
    if (options.v2) {
      throw new ParseError('NOT_A_NUMBER');
    }

    return {};
  }

  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata),
      country = _parsePhoneNumber.country,
      nationalNumber = _parsePhoneNumber.nationalNumber,
      countryCallingCode = _parsePhoneNumber.countryCallingCode,
      carrierCode = _parsePhoneNumber.carrierCode;

  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError('INVALID_COUNTRY');
    }

    return {};
  } // Validate national (significant) number length.


  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    // Won't throw here because the regexp already demands length > 1.

    /* istanbul ignore if */
    if (options.v2) {
      throw new ParseError('TOO_SHORT');
    } // Google's demo just throws an error in this case.


    return {};
  } // Validate national (significant) number length.
  //
  // A sidenote:
  //
  // They say that sometimes national (significant) numbers
  // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
  // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
  // Such numbers will just be discarded.
  //


  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError('TOO_LONG');
    } // Google's demo just throws an error in this case.


    return {};
  }

  if (options.v2) {
    var phoneNumber = new PhoneNumber_PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);

    if (country) {
      phoneNumber.country = country;
    }

    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }

    if (ext) {
      phoneNumber.ext = ext;
    }

    return phoneNumber;
  } // Check if national phone number pattern matches the number.
  // National number pattern is different for each country,
  // even for those ones which are part of the "NANPA" group.


  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;

  if (!options.extended) {
    return valid ? parse_result(country, nationalNumber, ext) : {};
  } // isInternational: countryCallingCode !== undefined


  return {
    country: country,
    countryCallingCode: countryCallingCode,
    carrierCode: carrierCode,
    valid: valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext: ext
  };
}
/**
 * Extracts a formatted phone number from text.
 * Doesn't guarantee that the extracted phone number
 * is a valid phone number (for example, doesn't validate its length).
 * @param  {string} text
 * @param  {boolean} [extract] — If `false`, then will parse the entire `text` as a phone number.
 * @param  {boolean} [throwOnError] — By default, it won't throw if the text is too long.
 * @return {string}
 * @example
 * // Returns "(213) 373-4253".
 * extractFormattedPhoneNumber("Call (213) 373-4253 for assistance.")
 */

function extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }

  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError('TOO_LONG');
    }

    return;
  }

  if (extract === false) {
    return text;
  } // Attempt to extract a possible number from the string passed in


  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);

  if (startsAt < 0) {
    return;
  }

  return text // Trim everything to the left of the phone number
  .slice(startsAt) // Remove trailing non-numerical characters
  .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}
/**
 * @param  {string} text - Input.
 * @param  {boolean} v2 - Legacy API functions don't pass `v2: true` flag.
 * @param  {boolean} [extract] - Whether to extract a phone number from `text`, or attempt to parse the entire text as a phone number.
 * @return {object} `{ ?number, ?ext }`.
 */


function parseInput(text, v2, extract) {
  // Parse RFC 3966 phone number URI.
  if (text && text.indexOf('tel:') === 0) {
    return parseRFC3966(text);
  }

  var number = extractFormattedPhoneNumber(text, extract, v2); // If the phone number is not viable, then abort.

  if (!number || !isViablePhoneNumber(number)) {
    return {};
  } // Attempt to parse extension first, since it doesn't require region-specific
  // data and we want to have the non-normalised number here.


  var withExtensionStripped = extractExtension(number);

  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }

  return {
    number: number
  };
}
/**
 * Creates `parse()` result object.
 */


function parse_result(country, nationalNumber, ext) {
  var result = {
    country: country,
    phone: nationalNumber
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * Parses a viable phone number.
 * @param {string} formattedPhoneNumber — Example: "(213) 373-4253".
 * @param {string} [defaultCountry]
 * @param {string} [defaultCallingCode]
 * @param {Metadata} metadata
 * @return {object} Returns `{ country: string?, countryCallingCode: string?, nationalNumber: string? }`.
 */


function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  // Extract calling code from phone number.
  var _extractCountryCallin = extractCountryCallingCode_extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata),
      countryCallingCode = _extractCountryCallin.countryCallingCode,
      number = _extractCountryCallin.number; // Choose a country by `countryCallingCode`.


  var country;

  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } // If `formattedPhoneNumber` is in "national" format
  // then `number` is defined and `countryCallingCode` isn't.
  else if (number && (defaultCountry || defaultCallingCode)) {
      metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);

      if (defaultCountry) {
        country = defaultCountry;
      } else {
        /* istanbul ignore if */
        if (parse_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            country = '001';
          }
        }
      }

      countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
    } else return {};

  if (!number) {
    return {
      countryCallingCode: countryCallingCode
    };
  }

  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata),
      nationalNumber = _extractNationalNumbe.nationalNumber,
      carrierCode = _extractNationalNumbe.carrierCode; // Sometimes there are several countries
  // corresponding to the same country phone code
  // (e.g. NANPA countries all having `1` country phone code).
  // Therefore, to reliably determine the exact country,
  // national (significant) number should have been parsed first.
  //
  // When `metadata.json` is generated, all "ambiguous" country phone codes
  // get their countries populated with the full set of
  // "phone number type" regular expressions.
  //


  var exactCountry = getCountryByCallingCode(countryCallingCode, nationalNumber, metadata);

  if (exactCountry) {
    country = exactCountry;
    /* istanbul ignore if */

    if (exactCountry === '001') {// Can't happen with `USE_NON_GEOGRAPHIC_COUNTRY_CODE` being `false`.
      // If `USE_NON_GEOGRAPHIC_COUNTRY_CODE` is set to `true` for some reason,
      // then remove the "istanbul ignore if".
    } else {
      metadata.country(country);
    }
  }

  return {
    country: country,
    countryCallingCode: countryCallingCode,
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
}
//# sourceMappingURL=parse_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function parsePhoneNumber_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { parsePhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

function parsePhoneNumber_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function parsePhoneNumber_parsePhoneNumber(text, options, metadata) {
  return parse(text, parsePhoneNumber_objectSpread({}, options, {
    v2: true
  }), metadata);
}
//# sourceMappingURL=parsePhoneNumber_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumber.js
function parsePhoneNumber_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { parsePhoneNumber_typeof = function _typeof(obj) { return typeof obj; }; } else { parsePhoneNumber_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return parsePhoneNumber_typeof(obj); }

function es6_parsePhoneNumber_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { es6_parsePhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

function es6_parsePhoneNumber_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function parsePhoneNumber_slicedToArray(arr, i) { return parsePhoneNumber_arrayWithHoles(arr) || parsePhoneNumber_iterableToArrayLimit(arr, i) || parsePhoneNumber_nonIterableRest(); }

function parsePhoneNumber_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function parsePhoneNumber_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function parsePhoneNumber_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function es6_parsePhoneNumber_parsePhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return parsePhoneNumber_parsePhoneNumber(text, options, metadata);
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = parsePhoneNumber_slicedToArray(_Array$prototype$slic, 4),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3];

  var text;
  var options;
  var metadata; // If the phone number is passed as a string.
  // `parsePhoneNumber('88005553535', ...)`.

  if (typeof arg_1 === 'string') {
    text = arg_1;
  } else throw new TypeError('A text for parsing must be a string.'); // If "default country" argument is being passed then move it to `options`.
  // `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.


  if (!arg_2 || typeof arg_2 === 'string') {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = undefined;
      metadata = arg_3;
    }

    if (arg_2) {
      options = es6_parsePhoneNumber_objectSpread({
        defaultCountry: arg_2
      }, options);
    }
  } // `defaultCountry` is not passed.
  // Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
  else if (isObject(arg_2)) {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else throw new Error("Invalid second argument: ".concat(arg_2));

  return {
    text: text,
    options: options,
    metadata: metadata
  };
} // Otherwise istanbul would show this as "branch not covered".

/* istanbul ignore next */

var isObject = function isObject(_) {
  return parsePhoneNumber_typeof(_) === 'object';
};
//# sourceMappingURL=parsePhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js



function parsePhoneNumberWithError() {
	return withMetadata(es6_parsePhoneNumber_parsePhoneNumber, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js
function parsePhoneNumberFromString_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { parsePhoneNumberFromString_defineProperty(target, key, source[key]); }); } return target; }

function parsePhoneNumberFromString_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parsePhoneNumberFromString(text, options, metadata) {
  // Validate `defaultCountry`.
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
    options = parsePhoneNumberFromString_objectSpread({}, options, {
      defaultCountry: undefined
    });
  } // Parse phone number.


  try {
    return parsePhoneNumber_parsePhoneNumber(text, options, metadata);
  } catch (error) {
    /* istanbul ignore else */
    if (error instanceof ParseError) {//
    } else {
      throw error;
    }
  }
}
//# sourceMappingURL=parsePhoneNumberFromString_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js


function parsePhoneNumberFromString_parsePhoneNumberFromString() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return parsePhoneNumberFromString(text, options, metadata);
}
//# sourceMappingURL=parsePhoneNumberFromString.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js



function exports_parsePhoneNumberFromString_parsePhoneNumberFromString() {
	return withMetadata(parsePhoneNumberFromString_parsePhoneNumberFromString, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function isValidPhoneNumber_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { isValidPhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

function isValidPhoneNumber_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function isValidPhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  options = isValidPhoneNumber_objectSpread({}, options, {
    extract: false
  });
  var phoneNumber = parsePhoneNumberFromString(text, options, metadata);
  return phoneNumber && phoneNumber.isValid() || false;
}
//# sourceMappingURL=isValidPhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js



function isValidPhoneNumber_isValidPhoneNumber() {
	return withMetadata(isValidPhoneNumber, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isPossiblePhoneNumber.js
function isPossiblePhoneNumber_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { isPossiblePhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

function isPossiblePhoneNumber_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function isPossiblePhoneNumber_isPossiblePhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  options = isPossiblePhoneNumber_objectSpread({}, options, {
    extract: false
  });
  var phoneNumber = parsePhoneNumberFromString(text, options, metadata);
  return phoneNumber && phoneNumber.isPossible() || false;
}
//# sourceMappingURL=isPossiblePhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/isPossiblePhoneNumber.js



function exports_isPossiblePhoneNumber_isPossiblePhoneNumber() {
	return withMetadata(isPossiblePhoneNumber_isPossiblePhoneNumber, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/LRUCache.js
function LRUCache_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LRUCache_createClass(Constructor, protoProps, staticProps) { if (protoProps) LRUCache_defineProperties(Constructor.prototype, protoProps); if (staticProps) LRUCache_defineProperties(Constructor, staticProps); return Constructor; }

function LRUCache_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://medium.com/dsinjs/implementing-lru-cache-in-javascript-94ba6755cda9
var Node = function Node(key, value) {
  var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var prev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  LRUCache_classCallCheck(this, Node);

  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
};

var LRUCache =
/*#__PURE__*/
function () {
  //set default limit of 10 if limit is not passed.
  function LRUCache() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    LRUCache_classCallCheck(this, LRUCache);

    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  } // Write Node to head of LinkedList
  // update cache with Node key and Node reference


  LRUCache_createClass(LRUCache, [{
    key: "put",
    value: function put(key, value) {
      this.ensureLimit();

      if (!this.head) {
        this.head = this.tail = new Node(key, value);
      } else {
        var node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      } //Update the cache map


      this.cache[key] = this.head;
      this.size++;
    } // Read from cache map and make that node as new Head of LinkedList

  }, {
    key: "get",
    value: function get(key) {
      if (this.cache[key]) {
        var value = this.cache[key].value; // node removed from it's position and cache

        this.remove(key); // write node again to the head of LinkedList to make it most recently used

        this.put(key, value);
        return value;
      }

      console.log("Item not available in cache for key ".concat(key));
    }
  }, {
    key: "ensureLimit",
    value: function ensureLimit() {
      if (this.size === this.limit) {
        this.remove(this.tail.key);
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var node = this.cache[key];

      if (node.prev !== null) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }

      if (node.next !== null) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }

      delete this.cache[key];
      this.size--;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cache = {};
    } // // Invokes the callback function with every node of the chain and the index of the node.
    // forEach(fn) {
    //   let node = this.head;
    //   let counter = 0;
    //   while (node) {
    //     fn(node, counter);
    //     node = node.next;
    //     counter++;
    //   }
    // }
    // // To iterate over LRU with a 'for...of' loop
    // *[Symbol.iterator]() {
    //   let node = this.head;
    //   while (node) {
    //     yield node;
    //     node = node.next;
    //   }
    // }

  }]);

  return LRUCache;
}();


//# sourceMappingURL=LRUCache.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/RegExpCache.js
function RegExpCache_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RegExpCache_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RegExpCache_createClass(Constructor, protoProps, staticProps) { if (protoProps) RegExpCache_defineProperties(Constructor.prototype, protoProps); if (staticProps) RegExpCache_defineProperties(Constructor, staticProps); return Constructor; }

 // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
// countries being used for the same doc with ~10 patterns for each country. Some pages will have
// a lot more countries in use, but typically fewer numbers for each so expanding the cache for
// that use-case won't have a lot of benefit.

var RegExpCache_RegExpCache =
/*#__PURE__*/
function () {
  function RegExpCache(size) {
    RegExpCache_classCallCheck(this, RegExpCache);

    this.cache = new LRUCache(size);
  }

  RegExpCache_createClass(RegExpCache, [{
    key: "getPatternForRegExp",
    value: function getPatternForRegExp(pattern) {
      var regExp = this.cache.get(pattern);

      if (!regExp) {
        regExp = new RegExp('^' + pattern);
        this.cache.put(pattern, regExp);
      }

      return regExp;
    }
  }]);

  return RegExpCache;
}();


//# sourceMappingURL=RegExpCache.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/util.js
/** Returns a regular expression quantifier with an upper and lower limit. */
function limit(lower, upper) {
  if (lower < 0 || upper <= 0 || upper < lower) {
    throw new TypeError();
  }

  return "{".concat(lower, ",").concat(upper, "}");
}
/**
 * Trims away any characters after the first match of {@code pattern} in {@code candidate},
 * returning the trimmed version.
 */

function trimAfterFirstMatch(regexp, string) {
  var index = string.search(regexp);

  if (index >= 0) {
    return string.slice(0, index);
  }

  return string;
}
function startsWith(string, substring) {
  return string.indexOf(substring) === 0;
}
function endsWith(string, substring) {
  return string.indexOf(substring, string.length - substring.length) === string.length - substring.length;
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/utf-8.js
// Javascript doesn't support UTF-8 regular expressions.
// So mimicking them here.
// Copy-pasted from `PhoneNumberMatcher.js`.

/**
 * "\p{Z}" is any kind of whitespace or invisible separator ("Separator").
 * http://www.regular-expressions.info/unicode.html
 * "\P{Z}" is the reverse of "\p{Z}".
 * "\p{N}" is any kind of numeric character in any script ("Number").
 * "\p{Nd}" is a digit zero through nine in any script except "ideographic scripts" ("Decimal_Digit_Number").
 * "\p{Sc}" is a currency symbol ("Currency_Symbol").
 * "\p{L}" is any kind of letter from any language ("Letter").
 * "\p{Mn}" is "non-spacing mark".
 *
 * Javascript doesn't support Unicode Regular Expressions
 * so substituting it with this explicit set of characters.
 *
 * https://stackoverflow.com/questions/13210194/javascript-regex-equivalent-of-a-za-z-using-pl
 * https://github.com/danielberndt/babel-plugin-utf-8-regex/blob/master/src/transformer.js
 */
var _pZ = " \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000";
var pZ = "[".concat(_pZ, "]");
var PZ = "[^".concat(_pZ, "]");
var _pN = "0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19"; // const pN = `[${_pN}]`

var _pNd = "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19";
var pNd = "[".concat(_pNd, "]");
var _pL = "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var pL = "[".concat(_pL, "]");
var pL_regexp = new RegExp(pL);
var _pSc = "$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20B9\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6";
var pSc = "[".concat(_pSc, "]");
var pSc_regexp = new RegExp(pSc);
var _pMn = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u08FE\u0900-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1DC0-\u1DE6\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26";
var pMn = "[".concat(_pMn, "]");
var pMn_regexp = new RegExp(pMn);
var _InBasic_Latin = "\0-\x7F";
var _InLatin_1_Supplement = "\x80-\xFF";
var _InLatin_Extended_A = "\u0100-\u017F";
var _InLatin_Extended_Additional = "\u1E00-\u1EFF";
var _InLatin_Extended_B = "\u0180-\u024F";
var _InCombining_Diacritical_Marks = "\u0300-\u036F";
var latinLetterRegexp = new RegExp('[' + _InBasic_Latin + _InLatin_1_Supplement + _InLatin_Extended_A + _InLatin_Extended_Additional + _InLatin_Extended_B + _InCombining_Diacritical_Marks + ']');
/**
 * Helper method to determine if a character is a Latin-script letter or not.
 * For our purposes, combining marks should also return true since we assume
 * they have been added to a preceding Latin character.
 */

function isLatinLetter(letter) {
  // Combining marks are a subset of non-spacing-mark.
  if (!pL_regexp.test(letter) && !pMn_regexp.test(letter)) {
    return false;
  }

  return latinLetterRegexp.test(letter);
}
function isInvalidPunctuationSymbol(character) {
  return character === '%' || pSc_regexp.test(character);
}
//# sourceMappingURL=utf-8.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/Leniency.js



/**
 * Leniency when finding potential phone numbers in text segments
 * The levels here are ordered in increasing strictness.
 */

/* harmony default export */ var Leniency = ({
  /**
   * Phone numbers accepted are "possible", but not necessarily "valid".
   */
  POSSIBLE: function POSSIBLE(number, candidate, metadata) {
    return true;
  },

  /**
   * Phone numbers accepted are "possible" and "valid".
   * Numbers written in national format must have their national-prefix
   * present if it is usually written for a number of this type.
   */
  VALID: function VALID(number, candidate, metadata) {
    if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidate.toString(), metadata)) {
      return false;
    } // Skipped for simplicity.
    // return isNationalPrefixPresentIfRequired(number, metadata)


    return true;
  },

  /**
   * Phone numbers accepted are "valid" and
   * are grouped in a possible way for this locale. For example, a US number written as
   * "65 02 53 00 00" and "650253 0000" are not accepted at this leniency level, whereas
   * "650 253 0000", "650 2530000" or "6502530000" are.
   * Numbers with more than one '/' symbol in the national significant number
   * are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use,
   * email the discussion group libphonenumber-discuss@googlegroups.com.
   */
  STRICT_GROUPING: function STRICT_GROUPING(number, candidate, metadata, regExpCache) {
    var candidateString = candidate.toString();

    if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString, metadata) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number, metadata)) {
      return false;
    }

    return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsRemainGrouped, regExpCache);
  },

  /**
   * Phone numbers accepted are {@linkplain PhoneNumberUtil#isValidNumber(PhoneNumber) valid} and
   * are grouped in the same way that we would have formatted it, or as a single block. For
   * example, a US number written as "650 2530000" is not accepted at this leniency level, whereas
   * "650 253 0000" or "6502530000" are.
   * Numbers with more than one '/' symbol are also dropped at this level.
   * <p>
   * Warning: This level might result in lower coverage especially for regions outside of country
   * code "+1". If you are not sure about which level to use, email the discussion group
   * libphonenumber-discuss@googlegroups.com.
   */
  EXACT_GROUPING: function EXACT_GROUPING(number, candidate, metadata, regExpCache) {
    var candidateString = candidate.toString();

    if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString, metadata) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number, metadata)) {
      return false;
    }

    return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsAreExactlyPresent, regExpCache);
  }
});

function containsOnlyValidXChars(number, candidate, metadata) {
  // The characters 'x' and 'X' can be (1) a carrier code, in which case they always precede the
  // national significant number or (2) an extension sign, in which case they always precede the
  // extension number. We assume a carrier code is more than 1 digit, so the first case has to
  // have more than 1 consecutive 'x' or 'X', whereas the second case can only have exactly 1 'x'
  // or 'X'. We ignore the character if it appears as the last character of the string.
  for (var index = 0; index < candidate.length - 1; index++) {
    var charAtIndex = candidate.charAt(index);

    if (charAtIndex === 'x' || charAtIndex === 'X') {
      var charAtNextIndex = candidate.charAt(index + 1);

      if (charAtNextIndex === 'x' || charAtNextIndex === 'X') {
        // This is the carrier code case, in which the 'X's always precede the national
        // significant number.
        index++;

        if (util.isNumberMatch(number, candidate.substring(index)) != MatchType.NSN_MATCH) {
          return false;
        } // This is the extension sign case, in which the 'x' or 'X' should always precede the
        // extension number.

      } else if (parseDigits(candidate.substring(index)) !== number.ext) {
        return false;
      }
    }
  }

  return true;
}

function isNationalPrefixPresentIfRequired(number, _metadata) {
  // First, check how we deduced the country code. If it was written in international format, then
  // the national prefix is not required.
  if (number.getCountryCodeSource() != 'FROM_DEFAULT_COUNTRY') {
    return true;
  }

  var phoneNumberRegion = util.getRegionCodeForCountryCode(number.getCountryCode());
  var metadata = util.getMetadataForRegion(phoneNumberRegion);

  if (metadata == null) {
    return true;
  } // Check if a national prefix should be present when formatting this number.


  var nationalNumber = util.getNationalSignificantNumber(number);
  var formatRule = util.chooseFormattingPatternForNumber(metadata.numberFormats(), nationalNumber); // To do this, we check that a national prefix formatting rule was present
  // and that it wasn't just the first-group symbol ($1) with punctuation.

  if (formatRule && formatRule.getNationalPrefixFormattingRule().length > 0) {
    if (formatRule.getNationalPrefixOptionalWhenFormatting()) {
      // The national-prefix is optional in these cases, so we don't need to check if it was
      // present.
      return true;
    }

    if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(formatRule.getNationalPrefixFormattingRule())) {
      // National Prefix not needed for this number.
      return true;
    } // Normalize the remainder.


    var rawInputCopy = PhoneNumberUtil.normalizeDigitsOnly(number.getRawInput()); // Check if we found a national prefix and/or carrier code at the start of the raw input, and
    // return the result.

    return util.maybeStripNationalPrefixAndCarrierCode(rawInputCopy, metadata, null);
  }

  return true;
}

function containsMoreThanOneSlashInNationalNumber(number, candidate) {
  var firstSlashInBodyIndex = candidate.indexOf('/');

  if (firstSlashInBodyIndex < 0) {
    // No slashes, this is okay.
    return false;
  } // Now look for a second one.


  var secondSlashInBodyIndex = candidate.indexOf('/', firstSlashInBodyIndex + 1);

  if (secondSlashInBodyIndex < 0) {
    // Only one slash, this is okay.
    return false;
  } // If the first slash is after the country calling code, this is permitted.


  var candidateHasCountryCode = number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN;

  if (candidateHasCountryCode && PhoneNumberUtil.normalizeDigitsOnly(candidate.substring(0, firstSlashInBodyIndex)) === String(number.getCountryCode())) {
    // Any more slashes and this is illegal.
    return candidate.slice(secondSlashInBodyIndex + 1).indexOf('/') >= 0;
  }

  return true;
}

function checkNumberGroupingIsValid(number, candidate, metadata, checkGroups, regExpCache) {
  var normalizedCandidate = normalizeDigits(candidate, true
  /* keep non-digits */
  );
  var formattedNumberGroups = getNationalNumberGroups(metadata, number, null);

  if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
    return true;
  } // If this didn't pass, see if there are any alternate formats that match, and try them instead.


  var alternateFormats = MetadataManager.getAlternateFormatsForCountry(number.getCountryCode());
  var nationalSignificantNumber = util.getNationalSignificantNumber(number);

  if (alternateFormats) {
    for (var _iterator = alternateFormats.numberFormats(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alternateFormat = _ref;

      if (alternateFormat.leadingDigitsPatterns().length > 0) {
        // There is only one leading digits pattern for alternate formats.
        var leadingDigitsRegExp = regExpCache.getPatternForRegExp('^' + alternateFormat.leadingDigitsPatterns()[0]);

        if (!leadingDigitsRegExp.test(nationalSignificantNumber)) {
          // Leading digits don't match; try another one.
          continue;
        }
      }

      formattedNumberGroups = getNationalNumberGroups(metadata, number, alternateFormat);

      if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
        return true;
      }
    }
  }

  return false;
}
/**
 * Helper method to get the national-number part of a number, formatted without any national
 * prefix, and return it as a set of digit blocks that would be formatted together following
 * standard formatting rules.
 */


function getNationalNumberGroups(metadata, number, formattingPattern) {
  if (formattingPattern) {
    // We format the NSN only, and split that according to the separator.
    var nationalSignificantNumber = util.getNationalSignificantNumber(number);
    return util.formatNsnUsingPattern(nationalSignificantNumber, formattingPattern, 'RFC3966', metadata).split('-');
  } // This will be in the format +CC-DG1-DG2-DGX;ext=EXT where DG1..DGX represents groups of digits.


  var rfc3966Format = formatNumber(number, 'RFC3966', metadata); // We remove the extension part from the formatted string before splitting it into different
  // groups.

  var endIndex = rfc3966Format.indexOf(';');

  if (endIndex < 0) {
    endIndex = rfc3966Format.length;
  } // The country-code will have a '-' following it.


  var startIndex = rfc3966Format.indexOf('-') + 1;
  return rfc3966Format.slice(startIndex, endIndex).split('-');
}

function allNumberGroupsAreExactlyPresent(metadata, number, normalizedCandidate, formattedNumberGroups) {
  var candidateGroups = normalizedCandidate.split(NON_DIGITS_PATTERN); // Set this to the last group, skipping it if the number has an extension.

  var candidateNumberGroupIndex = number.hasExtension() ? candidateGroups.length - 2 : candidateGroups.length - 1; // First we check if the national significant number is formatted as a block.
  // We use contains and not equals, since the national significant number may be present with
  // a prefix such as a national number prefix, or the country code itself.

  if (candidateGroups.length == 1 || candidateGroups[candidateNumberGroupIndex].contains(util.getNationalSignificantNumber(number))) {
    return true;
  } // Starting from the end, go through in reverse, excluding the first group, and check the
  // candidate and number groups are the same.


  var formattedNumberGroupIndex = formattedNumberGroups.length - 1;

  while (formattedNumberGroupIndex > 0 && candidateNumberGroupIndex >= 0) {
    if (candidateGroups[candidateNumberGroupIndex] !== formattedNumberGroups[formattedNumberGroupIndex]) {
      return false;
    }

    formattedNumberGroupIndex--;
    candidateNumberGroupIndex--;
  } // Now check the first group. There may be a national prefix at the start, so we only check
  // that the candidate group ends with the formatted number group.


  return candidateNumberGroupIndex >= 0 && endsWith(candidateGroups[candidateNumberGroupIndex], formattedNumberGroups[0]);
}

function allNumberGroupsRemainGrouped(metadata, number, normalizedCandidate, formattedNumberGroups) {
  var fromIndex = 0;

  if (number.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
    // First skip the country code if the normalized candidate contained it.
    var countryCode = String(number.getCountryCode());
    fromIndex = normalizedCandidate.indexOf(countryCode) + countryCode.length();
  } // Check each group of consecutive digits are not broken into separate groupings in the
  // {@code normalizedCandidate} string.


  for (var i = 0; i < formattedNumberGroups.length; i++) {
    // Fails if the substring of {@code normalizedCandidate} starting from {@code fromIndex}
    // doesn't contain the consecutive digits in formattedNumberGroups[i].
    fromIndex = normalizedCandidate.indexOf(formattedNumberGroups[i], fromIndex);

    if (fromIndex < 0) {
      return false;
    } // Moves {@code fromIndex} forward.


    fromIndex += formattedNumberGroups[i].length();

    if (i == 0 && fromIndex < normalizedCandidate.length()) {
      // We are at the position right after the NDC. We get the region used for formatting
      // information based on the country code in the phone number, rather than the number itself,
      // as we do not need to distinguish between different countries with the same country
      // calling code and this is faster.
      var region = util.getRegionCodeForCountryCode(number.getCountryCode());

      if (util.getNddPrefixForRegion(region, true) != null && Character.isDigit(normalizedCandidate.charAt(fromIndex))) {
        // This means there is no formatting symbol after the NDC. In this case, we only
        // accept the number if there is no formatting symbol at all in the number, except
        // for extensions. This is only important for countries with national prefixes.
        var nationalSignificantNumber = util.getNationalSignificantNumber(number);
        return startsWith(normalizedCandidate.slice(fromIndex - formattedNumberGroups[i].length), nationalSignificantNumber);
      }
    }
  } // The check here makes sure that we haven't mistakenly already used the extension to
  // match the last group of the subscriber number. Note the extension cannot have
  // formatting in-between digits.


  return normalizedCandidate.slice(fromIndex).contains(number.getExtension());
}
//# sourceMappingURL=Leniency.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/parsePreCandidate.js
 // Regular expression of characters typically used to start a second phone number for the purposes
// of parsing. This allows us to strip off parts of the number that are actually the start of
// another number, such as for: (530) 583-6985 x302/x2303 -> the second extension here makes this
// actually two phone numbers, (530) 583-6985 x302 and (530) 583-6985 x2303. We remove the second
// extension so that the first number is parsed correctly.
//
// Matches a slash (\ or /) followed by a space followed by an `x`.
//

var SECOND_NUMBER_START_PATTERN = /[\\/] *x/;
function parsePreCandidate(candidate) {
  // Check for extra numbers at the end.
  // TODO: This is the place to start when trying to support extraction of multiple phone number
  // from split notations (+41 79 123 45 67 / 68).
  return trimAfterFirstMatch(SECOND_NUMBER_START_PATTERN, candidate);
}
//# sourceMappingURL=parsePreCandidate.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/isValidPreCandidate.js
// Matches strings that look like dates using "/" as a separator.
// Examples: 3/10/2011, 31/10/96 or 08/31/95.
var SLASH_SEPARATED_DATES = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/; // Matches timestamps.
// Examples: "2012-01-02 08:00".
// Note that the reg-ex does not include the
// trailing ":\d\d" -- that is covered by TIME_STAMPS_SUFFIX.

var TIME_STAMPS = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/;
var TIME_STAMPS_SUFFIX_LEADING = /^:[0-5]\d/;
function isValidPreCandidate(candidate, offset, text) {
  // Skip a match that is more likely to be a date.
  if (SLASH_SEPARATED_DATES.test(candidate)) {
    return false;
  } // Skip potential time-stamps.


  if (TIME_STAMPS.test(candidate)) {
    var followingText = text.slice(offset + candidate.length);

    if (TIME_STAMPS_SUFFIX_LEADING.test(followingText)) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=isValidPreCandidate.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers/isValidCandidate.js
// Copy-pasted from `PhoneNumberMatcher.js`.



var OPENING_PARENS = "(\\[\uFF08\uFF3B";
var CLOSING_PARENS = ")\\]\uFF09\uFF3D";
var NON_PARENS = "[^".concat(OPENING_PARENS).concat(CLOSING_PARENS, "]");
var LEAD_CLASS = "[".concat(OPENING_PARENS).concat(PLUS_CHARS, "]"); // Punctuation that may be at the start of a phone number - brackets and plus signs.

var LEAD_CLASS_LEADING = new RegExp('^' + LEAD_CLASS); // Limit on the number of pairs of brackets in a phone number.

var BRACKET_PAIR_LIMIT = limit(0, 3);
/**
 * Pattern to check that brackets match. Opening brackets should be closed within a phone number.
 * This also checks that there is something inside the brackets. Having no brackets at all is also
 * fine.
 *
 * An opening bracket at the beginning may not be closed, but subsequent ones should be.  It's
 * also possible that the leading bracket was dropped, so we shouldn't be surprised if we see a
 * closing bracket first. We limit the sets of brackets in a phone number to four.
 */

var MATCHING_BRACKETS_ENTIRE = new RegExp('^' + "(?:[" + OPENING_PARENS + "])?" + "(?:" + NON_PARENS + "+" + "[" + CLOSING_PARENS + "])?" + NON_PARENS + "+" + "(?:[" + OPENING_PARENS + "]" + NON_PARENS + "+[" + CLOSING_PARENS + "])" + BRACKET_PAIR_LIMIT + NON_PARENS + "*" + '$');
/**
 * Matches strings that look like publication pages. Example:
 * <pre>Computing Complete Answers to Queries in the Presence of Limited Access Patterns.
 * Chen Li. VLDB J. 12(3): 211-227 (2003).</pre>
 *
 * The string "211-227 (2003)" is not a telephone number.
 */

var PUB_PAGES = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;
function isValidCandidate(candidate, offset, text, leniency) {
  // Check the candidate doesn't contain any formatting
  // which would indicate that it really isn't a phone number.
  if (!MATCHING_BRACKETS_ENTIRE.test(candidate) || PUB_PAGES.test(candidate)) {
    return;
  } // If leniency is set to VALID or stricter, we also want to skip numbers that are surrounded
  // by Latin alphabetic characters, to skip cases like abc8005001234 or 8005001234def.


  if (leniency !== 'POSSIBLE') {
    // If the candidate is not at the start of the text,
    // and does not start with phone-number punctuation,
    // check the previous character.
    if (offset > 0 && !LEAD_CLASS_LEADING.test(candidate)) {
      var previousChar = text[offset - 1]; // We return null if it is a latin letter or an invalid punctuation symbol.

      if (isInvalidPunctuationSymbol(previousChar) || isLatinLetter(previousChar)) {
        return false;
      }
    }

    var lastCharIndex = offset + candidate.length;

    if (lastCharIndex < text.length) {
      var nextChar = text[lastCharIndex];

      if (isInvalidPunctuationSymbol(nextChar) || isLatinLetter(nextChar)) {
        return false;
      }
    }
  }

  return true;
}
//# sourceMappingURL=isValidCandidate.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/PhoneNumberMatcher.js
function PhoneNumberMatcher_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PhoneNumberMatcher_defineProperty(target, key, source[key]); }); } return target; }

function PhoneNumberMatcher_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PhoneNumberMatcher_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PhoneNumberMatcher_createClass(Constructor, protoProps, staticProps) { if (protoProps) PhoneNumberMatcher_defineProperties(Constructor.prototype, protoProps); if (staticProps) PhoneNumberMatcher_defineProperties(Constructor, staticProps); return Constructor; }

function PhoneNumberMatcher_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A port of Google's `PhoneNumberMatcher.java`.
 * https://github.com/googlei18n/libphonenumber/blob/master/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberMatcher.java
 * Date: 08.03.2018.
 */












var EXTN_PATTERNS_FOR_MATCHING = createExtensionPattern('matching');
/**
 * Patterns used to extract phone numbers from a larger phone-number-like pattern. These are
 * ordered according to specificity. For example, white-space is last since that is frequently
 * used in numbers, not just to separate two numbers. We have separate patterns since we don't
 * want to break up the phone-number-like text on more than one different kind of symbol at one
 * time, although symbols of the same type (e.g. space) can be safely grouped together.
 *
 * Note that if there is a match, we will always check any text found up to the first match as
 * well.
 */

var INNER_MATCHES = [// Breaks on the slash - e.g. "651-234-2345/332-445-1234"
'\\/+(.*)/', // Note that the bracket here is inside the capturing group, since we consider it part of the
// phone number. Will match a pattern like "(650) 223 3345 (754) 223 3321".
'(\\([^(]*)', // Breaks on a hyphen - e.g. "12345 - 332-445-1234 is my number."
// We require a space on either side of the hyphen for it to be considered a separator.
"(?:".concat(pZ, "-|-").concat(pZ, ")").concat(pZ, "*(.+)"), // Various types of wide hyphens. Note we have decided not to enforce a space here, since it's
// possible that it's supposed to be used to break two numbers without spaces, and we haven't
// seen many instances of it used within a number.
"[\u2012-\u2015\uFF0D]".concat(pZ, "*(.+)"), // Breaks on a full stop - e.g. "12345. 332-445-1234 is my number."
"\\.+".concat(pZ, "*([^.]+)"), // Breaks on space - e.g. "3324451234 8002341234"
"".concat(pZ, "+(").concat(PZ, "+)")]; // Limit on the number of leading (plus) characters.

var leadLimit = limit(0, 2); // Limit on the number of consecutive punctuation characters.

var punctuationLimit = limit(0, 4);
/* The maximum number of digits allowed in a digit-separated block. As we allow all digits in a
 * single block, set high enough to accommodate the entire national number and the international
 * country code. */

var digitBlockLimit = MAX_LENGTH_FOR_NSN + MAX_LENGTH_COUNTRY_CODE; // Limit on the number of blocks separated by punctuation.
// Uses digitBlockLimit since some formats use spaces to separate each digit.

var blockLimit = limit(0, digitBlockLimit);
/* A punctuation sequence allowing white space. */

var punctuation = "[".concat(VALID_PUNCTUATION, "]") + punctuationLimit; // A digits block without punctuation.

var digitSequence = pNd + limit(1, digitBlockLimit);
/**
 * Phone number pattern allowing optional punctuation.
 * The phone number pattern used by `find()`, similar to
 * VALID_PHONE_NUMBER, but with the following differences:
 * <ul>
 *   <li>All captures are limited in order to place an upper bound to the text matched by the
 *       pattern.
 * <ul>
 *   <li>Leading punctuation / plus signs are limited.
 *   <li>Consecutive occurrences of punctuation are limited.
 *   <li>Number of digits is limited.
 * </ul>
 *   <li>No whitespace is allowed at the start or end.
 *   <li>No alpha digits (vanity numbers such as 1-800-SIX-FLAGS) are currently supported.
 * </ul>
 */

var PATTERN = '(?:' + LEAD_CLASS + punctuation + ')' + leadLimit + digitSequence + '(?:' + punctuation + digitSequence + ')' + blockLimit + '(?:' + EXTN_PATTERNS_FOR_MATCHING + ')?'; // Regular expression of trailing characters that we want to remove.
// We remove all characters that are not alpha or numerical characters.
// The hash character is retained here, as it may signify
// the previous block was an extension.
//
// // Don't know what does '&&' mean here.
// const UNWANTED_END_CHAR_PATTERN = new RegExp(`[[\\P{N}&&\\P{L}]&&[^#]]+$`)
//

var UNWANTED_END_CHAR_PATTERN = new RegExp("[^".concat(_pN).concat(_pL, "#]+$"));
var PhoneNumberMatcher_NON_DIGITS_PATTERN = /(\D+)/;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
/**
 * A stateful class that finds and extracts telephone numbers from {@linkplain CharSequence text}.
 * Instances can be created using the {@linkplain PhoneNumberUtil#findNumbers factory methods} in
 * {@link PhoneNumberUtil}.
 *
 * <p>Vanity numbers (phone numbers using alphabetic digits such as <tt>1-800-SIX-FLAGS</tt> are
 * not found.
 *
 * <p>This class is not thread-safe.
 */

var PhoneNumberMatcher_PhoneNumberMatcher =
/*#__PURE__*/
function () {
  /** The iteration tristate. */

  /** The next index to start searching at. Undefined in {@link State#DONE}. */
  // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
  // countries being used for the same doc with ~10 patterns for each country. Some pages will have
  // a lot more countries in use, but typically fewer numbers for each so expanding the cache for
  // that use-case won't have a lot of benefit.

  /**
   * Creates a new instance. See the factory methods in {@link PhoneNumberUtil} on how to obtain a
   * new instance.
   *
   * @param util  the phone number util to use
   * @param text  the character sequence that we will search, null for no text
   * @param country  the country to assume for phone numbers not written in international format
   *     (with a leading plus, or with the international dialing prefix of the specified region).
   *     May be null or "ZZ" if only numbers with a leading plus should be
   *     considered.
   * @param leniency  the leniency to use when evaluating candidate phone numbers
   * @param maxTries  the maximum number of invalid numbers to try before giving up on the text.
   *     This is to cover degenerate cases where the text has a lot of false positives in it. Must
   *     be {@code >= 0}.
   */
  function PhoneNumberMatcher() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var metadata = arguments.length > 2 ? arguments[2] : undefined;

    PhoneNumberMatcher_classCallCheck(this, PhoneNumberMatcher);

    PhoneNumberMatcher_defineProperty(this, "state", 'NOT_READY');

    PhoneNumberMatcher_defineProperty(this, "searchIndex", 0);

    PhoneNumberMatcher_defineProperty(this, "regExpCache", new RegExpCache_RegExpCache(32));

    options = PhoneNumberMatcher_objectSpread({}, options, {
      defaultCallingCode: options.defaultCallingCode,
      defaultCountry: options.defaultCountry && isSupportedCountry(options.defaultCountry, metadata) ? options.defaultCountry : undefined,
      leniency: options.leniency || options.extended ? 'POSSIBLE' : 'VALID',
      maxTries: options.maxTries || MAX_SAFE_INTEGER
    });

    if (!options.leniency) {
      throw new TypeError('`Leniency` not supplied');
    }

    if (options.maxTries < 0) {
      throw new TypeError('`maxTries` not supplied');
    }

    this.text = text;
    this.options = options;
    this.metadata = metadata;
    /** The degree of validation requested. */

    this.leniency = Leniency[options.leniency];

    if (!this.leniency) {
      throw new TypeError("Unknown leniency: ".concat(options.leniency, "."));
    }
    /** The maximum number of retries after matching an invalid number. */


    this.maxTries = options.maxTries;
    this.PATTERN = new RegExp(PATTERN, 'ig');
  }
  /**
   * Attempts to find the next subsequence in the searched sequence on or after {@code searchIndex}
   * that represents a phone number. Returns the next match, null if none was found.
   *
   * @param index  the search index to start searching at
   * @return  the phone number match found, null if none can be found
   */


  PhoneNumberMatcher_createClass(PhoneNumberMatcher, [{
    key: "find",
    value: function find() {
      // // Reset the regular expression.
      // this.PATTERN.lastIndex = index
      var matches;

      while (this.maxTries > 0 && (matches = this.PATTERN.exec(this.text)) !== null) {
        var candidate = matches[0];
        var offset = matches.index;
        candidate = parsePreCandidate(candidate);

        if (isValidPreCandidate(candidate, offset, this.text)) {
          var match = // Try to come up with a valid match given the entire candidate.
          this.parseAndVerify(candidate, offset, this.text) // If that failed, try to find an "inner match" -
          // there might be a phone number within this candidate.
          || this.extractInnerMatch(candidate, offset, this.text);

          if (match) {
            if (this.options.v2) {
              var phoneNumber = new PhoneNumber_PhoneNumber(match.country || match.countryCallingCode, match.phone, this.metadata);

              if (match.ext) {
                phoneNumber.ext = match.ext;
              }

              return {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                number: phoneNumber
              };
            }

            return match;
          }
        }

        this.maxTries--;
      }
    }
    /**
     * Attempts to extract a match from `substring`
     * if the substring itself does not qualify as a match.
     */

  }, {
    key: "extractInnerMatch",
    value: function extractInnerMatch(substring, offset, text) {
      for (var _i = 0, _INNER_MATCHES = INNER_MATCHES; _i < _INNER_MATCHES.length; _i++) {
        var innerMatchPattern = _INNER_MATCHES[_i];
        var isFirstMatch = true;
        var candidateMatch = void 0;
        var innerMatchRegExp = new RegExp(innerMatchPattern, 'g');

        while (this.maxTries > 0 && (candidateMatch = innerMatchRegExp.exec(substring)) !== null) {
          if (isFirstMatch) {
            // We should handle any group before this one too.
            var _candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, substring.slice(0, candidateMatch.index));

            var _match = this.parseAndVerify(_candidate, offset, text);

            if (_match) {
              return _match;
            }

            this.maxTries--;
            isFirstMatch = false;
          }

          var candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, candidateMatch[1]); // Java code does `groupMatcher.start(1)` here,
          // but there's no way in javascript to get a `candidate` start index,
          // therefore resort to using this kind of an approximation.
          // (`groupMatcher` is called `candidateInSubstringMatch` in this javascript port)
          // https://stackoverflow.com/questions/15934353/get-index-of-each-capture-in-a-javascript-regex

          var candidateIndexGuess = substring.indexOf(candidate, candidateMatch.index);
          var match = this.parseAndVerify(candidate, offset + candidateIndexGuess, text);

          if (match) {
            return match;
          }

          this.maxTries--;
        }
      }
    }
    /**
     * Parses a phone number from the `candidate` using `parseNumber` and
     * verifies it matches the requested `leniency`. If parsing and verification succeed,
     * a corresponding `PhoneNumberMatch` is returned, otherwise this method returns `null`.
     *
     * @param candidate  the candidate match
     * @param offset  the offset of {@code candidate} within {@link #text}
     * @return  the parsed and validated phone number match, or null
     */

  }, {
    key: "parseAndVerify",
    value: function parseAndVerify(candidate, offset, text) {
      if (!isValidCandidate(candidate, offset, text, this.options.leniency)) {
        return;
      }

      var number = parse(candidate, {
        extended: true,
        defaultCountry: this.options.defaultCountry,
        defaultCallingCode: this.options.defaultCallingCode
      }, this.metadata);

      if (!number.possible) {
        return;
      }

      if (this.leniency(number, candidate, this.metadata, this.regExpCache)) {
        // // We used parseAndKeepRawInput to create this number,
        // // but for now we don't return the extra values parsed.
        // // TODO: stop clearing all values here and switch all users over
        // // to using rawInput() rather than the rawString() of PhoneNumberMatch.
        // number.clearCountryCodeSource()
        // number.clearRawInput()
        // number.clearPreferredDomesticCarrierCode()
        var result = {
          startsAt: offset,
          endsAt: offset + candidate.length,
          phone: number.phone
        };

        if (number.country && number.country !== '001') {
          result.country = number.country;
        } else {
          result.countryCallingCode = number.countryCallingCode;
        }

        if (number.ext) {
          result.ext = number.ext;
        }

        return result;
      }
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === 'NOT_READY') {
        this.lastMatch = this.find(); // (this.searchIndex)

        if (this.lastMatch) {
          // this.searchIndex = this.lastMatch.endsAt
          this.state = 'READY';
        } else {
          this.state = 'DONE';
        }
      }

      return this.state === 'READY';
    }
  }, {
    key: "next",
    value: function next() {
      // Check the state and find the next match as a side-effect if necessary.
      if (!this.hasNext()) {
        throw new Error('No next element');
      } // Don't retain that memory any longer than necessary.


      var result = this.lastMatch;
      this.lastMatch = null;
      this.state = 'NOT_READY';
      return result;
    }
  }]);

  return PhoneNumberMatcher;
}();


//# sourceMappingURL=PhoneNumberMatcher.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers_.js

function findNumbers(text, options, metadata) {
  var matcher = new PhoneNumberMatcher_PhoneNumberMatcher(text, options, metadata);
  var results = [];

  while (matcher.hasNext()) {
    results.push(matcher.next());
  }

  return results;
}
//# sourceMappingURL=findNumbers_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findNumbers.js


function findNumbers_findNumbers() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return findNumbers(text, options, metadata);
}
//# sourceMappingURL=findNumbers.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/findNumbers.js



function exports_findNumbers_findNumbers() {
	return withMetadata(findNumbers_findNumbers, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/searchNumbers.js
function searchNumbers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @return ES6 `for ... of` iterator.
 */

function searchNumbers() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  var matcher = new PhoneNumberMatcher_PhoneNumberMatcher(text, options, metadata);
  return searchNumbers_defineProperty({}, Symbol.iterator, function () {
    return {
      next: function next() {
        if (matcher.hasNext()) {
          return {
            done: false,
            value: matcher.next()
          };
        }

        return {
          done: true
        };
      }
    };
  });
}
//# sourceMappingURL=searchNumbers.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/searchNumbers.js



function searchNumbers_searchNumbers() {
	return withMetadata(searchNumbers, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findPhoneNumbersInText.js
function findPhoneNumbersInText_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { findPhoneNumbersInText_typeof = function _typeof(obj) { return typeof obj; }; } else { findPhoneNumbersInText_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return findPhoneNumbersInText_typeof(obj); }

function findPhoneNumbersInText_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { findPhoneNumbersInText_defineProperty(target, key, source[key]); }); } return target; }

function findPhoneNumbersInText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function findPhoneNumbersInText(text, defaultCountry, options, metadata) {
  var args = getArguments(defaultCountry, options, metadata);
  return findNumbers_findNumbers(text, args.options, args.metadata);
}
function getArguments(defaultCountry, options, metadata) {
  if (metadata) {
    if (defaultCountry) {
      options = findPhoneNumbersInText_objectSpread({}, options, {
        defaultCountry: defaultCountry
      });
    }
  } else {
    if (options) {
      metadata = options;

      if (defaultCountry) {
        if (findPhoneNumbersInText_is_object(defaultCountry)) {
          options = defaultCountry;
        } else {
          options = {
            defaultCountry: defaultCountry
          };
        }
      } else {
        options = undefined;
      }
    } else {
      metadata = defaultCountry;
      options = undefined;
    }
  }

  return {
    options: findPhoneNumbersInText_objectSpread({}, options, {
      v2: true
    }),
    metadata: metadata
  };
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var findPhoneNumbersInText_is_object = function is_object(_) {
  return findPhoneNumbersInText_typeof(_) === 'object';
};
//# sourceMappingURL=findPhoneNumbersInText.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/findPhoneNumbersInText.js



function findPhoneNumbersInText_findPhoneNumbersInText() {
	return withMetadata(findPhoneNumbersInText, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/searchPhoneNumbersInText.js


function searchPhoneNumbersInText(text, defaultCountry, options, metadata) {
  var args = getArguments(defaultCountry, options, metadata);
  return searchNumbers(text, args.options, args.metadata);
}
//# sourceMappingURL=searchPhoneNumbersInText.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/searchPhoneNumbersInText.js



function searchPhoneNumbersInText_searchPhoneNumbersInText() {
	return withMetadata(searchPhoneNumbersInText, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/PhoneNumberMatcher.js



function exports_PhoneNumberMatcher_PhoneNumberMatcher(text, options) {
	return PhoneNumberMatcher_PhoneNumberMatcher.call(this, text, options, min_metadata)
}
exports_PhoneNumberMatcher_PhoneNumberMatcher.prototype = Object.create(PhoneNumberMatcher_PhoneNumberMatcher.prototype, {})
exports_PhoneNumberMatcher_PhoneNumberMatcher.prototype.constructor = exports_PhoneNumberMatcher_PhoneNumberMatcher

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouTypeState.js
function AsYouTypeState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AsYouTypeState_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AsYouTypeState_createClass(Constructor, protoProps, staticProps) { if (protoProps) AsYouTypeState_defineProperties(Constructor.prototype, protoProps); if (staticProps) AsYouTypeState_defineProperties(Constructor, staticProps); return Constructor; }

function AsYouTypeState_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AsYouTypeState =
/*#__PURE__*/
function () {
  function AsYouTypeState(_ref) {
    var _this = this;

    var onCountryChange = _ref.onCountryChange,
        onCallingCodeChange = _ref.onCallingCodeChange;

    AsYouTypeState_classCallCheck(this, AsYouTypeState);

    AsYouTypeState_defineProperty(this, "update", function (properties) {
      for (var _i = 0, _Object$keys = Object.keys(properties); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        _this[key] = properties[key];
      }
    });

    this.onCountryChange = onCountryChange;
    this.onCallingCodeChange = onCallingCodeChange;
  }

  AsYouTypeState_createClass(AsYouTypeState, [{
    key: "reset",
    value: function reset(defaultCountry, defaultCallingCode) {
      this.international = false;
      this.IDDPrefix = undefined;
      this.missingPlus = undefined;
      this.callingCode = undefined;
      this.digits = '';
      this.resetNationalSignificantNumber();
      this.initCountryAndCallingCode(defaultCountry, defaultCallingCode);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function resetNationalSignificantNumber() {
      this.nationalSignificantNumber = this.getNationalDigits();
      this.nationalSignificantNumberMatchesInput = true;
      this.nationalPrefix = undefined;
      this.carrierCode = undefined;
      this.complexPrefixBeforeNationalSignificantNumber = undefined;
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function initCountryAndCallingCode(country, callingCode) {
      this.setCountry(country);
      this.setCallingCode(callingCode);
    }
  }, {
    key: "setCountry",
    value: function setCountry(country) {
      this.country = country;
      this.onCountryChange(country);
    }
  }, {
    key: "setCallingCode",
    value: function setCallingCode(callingCode) {
      this.callingCode = callingCode;
      return this.onCallingCodeChange(this.country, callingCode);
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber() {
      // Prepend the `+` to parsed input.
      this.international = true; // If a default country was set then reset it
      // because an explicitly international phone
      // number is being entered.

      this.initCountryAndCallingCode();
    }
  }, {
    key: "appendDigits",
    value: function appendDigits(nextDigits) {
      this.digits += nextDigits;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function appendNationalSignificantNumberDigits(nextDigits) {
      this.nationalSignificantNumber += nextDigits;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */

  }, {
    key: "getNationalDigits",
    value: function getNationalDigits() {
      if (this.international) {
        return this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0));
      }

      return this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function getDigitsWithoutInternationalPrefix() {
      if (this.international) {
        if (this.IDDPrefix) {
          return this.digits.slice(this.IDDPrefix.length);
        }
      }

      return this.digits;
    }
  }]);

  return AsYouTypeState;
}();


//# sourceMappingURL=AsYouTypeState.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.util.js
// Should be the same as `DIGIT_PLACEHOLDER` in `libphonenumber-metadata-generator`.
var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)

var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER); // Counts all occurences of a symbol in a string.
// Unicode-unsafe (because using `.split()`).

function countOccurences(symbol, string) {
  var count = 0; // Using `.split('')` to iterate through a string here
  // to avoid requiring `Symbol.iterator` polyfill.
  // `.split('')` is generally not safe for Unicode,
  // but in this particular case for counting brackets it is safe.
  // for (const character of string)

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;

    if (character === symbol) {
      count++;
    }
  }

  return count;
} // Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript

function repeat(string, times) {
  if (times < 1) {
    return '';
  }

  var result = '';

  while (times > 1) {
    if (times & 1) {
      result += string;
    }

    times >>= 1;
    string += string;
  }

  return result + string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ')') {
    cutBeforeIndex++;
  }

  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function closeNonPairedParens(template, cut_before) {
  var retained_template = template.slice(0, cut_before);
  var opening_braces = countOccurences('(', retained_template);
  var closing_braces = countOccurences(')', retained_template);
  var dangling_braces = opening_braces - closing_braces;

  while (dangling_braces > 0 && cut_before < template.length) {
    if (template[cut_before] === ')') {
      dangling_braces--;
    }

    cut_before++;
  }

  return template.slice(0, cut_before);
}
function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i = 0;

  while (i < string.length) {
    if (string[i] === '(') {
      dangling_braces.push(i);
    } else if (string[i] === ')') {
      dangling_braces.pop();
    }

    i++;
  }

  var start = 0;
  var cleared_string = '';
  dangling_braces.push(string.length);

  for (var _i2 = 0, _dangling_braces = dangling_braces; _i2 < _dangling_braces.length; _i2++) {
    var index = _dangling_braces[_i2];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }

  return cleared_string;
}
function populateTemplateWithDigits(template, position, digits) {
  // Using `.split('')` to iterate through a string here
  // to avoid requiring `Symbol.iterator` polyfill.
  // `.split('')` is generally not safe for Unicode,
  // but in this particular case for `digits` it is safe.
  // for (const digit of digits)
  for (var _iterator2 = digits.split(''), _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i3 >= _iterator2.length) break;
      _ref2 = _iterator2[_i3++];
    } else {
      _i3 = _iterator2.next();
      if (_i3.done) break;
      _ref2 = _i3.value;
    }

    var digit = _ref2;

    // If there is room for more digits in current `template`,
    // then set the next digit in the `template`,
    // and return the formatted digits so far.
    // If more digits are entered than the current format could handle.
    if (template.slice(position + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
      return;
    }

    position = template.search(DIGIT_PLACEHOLDER_MATCHER);
    template = template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  }

  return [template, position];
}
//# sourceMappingURL=AsYouTypeFormatter.util.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.complete.js



function formatCompleteNumber(state, format, _ref) {
  var metadata = _ref.metadata,
      shouldTryNationalPrefixFormattingRule = _ref.shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref.getSeparatorAfterNationalPrefix;
  var matcher = new RegExp("^(?:".concat(format.pattern(), ")$"));

  if (matcher.test(state.nationalSignificantNumber)) {
    return formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, {
      metadata: metadata,
      shouldTryNationalPrefixFormattingRule: shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix
    });
  }
}
function canFormatCompleteNumber(nationalSignificantNumber, metadata) {
  return checkNumberLength(nationalSignificantNumber, metadata) === 'IS_POSSIBLE';
}

function formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, _ref2) {
  var metadata = _ref2.metadata,
      shouldTryNationalPrefixFormattingRule = _ref2.shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref2.getSeparatorAfterNationalPrefix;
  // `format` has already been checked for `nationalPrefix` requirement.
  var nationalSignificantNumber = state.nationalSignificantNumber,
      international = state.international,
      nationalPrefix = state.nationalPrefix,
      carrierCode = state.carrierCode; // Format the number with using `national_prefix_formatting_rule`.
  // If the resulting formatted number is a valid formatted number, then return it.
  //
  // Google's AsYouType formatter is different in a way that it doesn't try
  // to format using the "national prefix formatting rule", and instead it
  // simply prepends a national prefix followed by a " " character.
  // This code does that too, but as a fallback.
  // The reason is that "national prefix formatting rule" may use parentheses,
  // which wouldn't be included has it used the simpler Google's way.
  //

  if (shouldTryNationalPrefixFormattingRule(format)) {
    var formattedNumber = AsYouTypeFormatter_complete_formatNationalNumber(state, format, {
      useNationalPrefixFormattingRule: true,
      getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix,
      metadata: metadata
    });

    if (formattedNumber) {
      return formattedNumber;
    }
  } // Format the number without using `national_prefix_formatting_rule`.


  return AsYouTypeFormatter_complete_formatNationalNumber(state, format, {
    useNationalPrefixFormattingRule: false,
    getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix,
    metadata: metadata
  });
}

function AsYouTypeFormatter_complete_formatNationalNumber(state, format, _ref3) {
  var metadata = _ref3.metadata,
      useNationalPrefixFormattingRule = _ref3.useNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref3.getSeparatorAfterNationalPrefix;
  var formattedNationalNumber = formatNationalNumberUsingFormat(state.nationalSignificantNumber, format, {
    carrierCode: state.carrierCode,
    useInternationalFormat: state.international,
    withNationalPrefix: useNationalPrefixFormattingRule,
    metadata: metadata
  });

  if (!useNationalPrefixFormattingRule) {
    if (state.nationalPrefix) {
      // If a national prefix was extracted, then just prepend it,
      // followed by a " " character.
      formattedNationalNumber = state.nationalPrefix + getSeparatorAfterNationalPrefix(format) + formattedNationalNumber;
    } else if (state.complexPrefixBeforeNationalSignificantNumber) {
      formattedNationalNumber = state.complexPrefixBeforeNationalSignificantNumber + ' ' + formattedNationalNumber;
    }
  }

  if (isValidFormattedNationalNumber(formattedNationalNumber, state)) {
    return formattedNationalNumber;
  }
} // Check that the formatted phone number contains exactly
// the same digits that have been input by the user.
// For example, when "0111523456789" is input for `AR` country,
// the extracted `this.nationalSignificantNumber` is "91123456789",
// which means that the national part of `this.digits` isn't simply equal to
// `this.nationalPrefix` + `this.nationalSignificantNumber`.
//
// Also, a `format` can add extra digits to the `this.nationalSignificantNumber`
// being formatted via `metadata[country].national_prefix_transform_rule`.
// For example, for `VI` country, it prepends `340` to the national number,
// and if this check hasn't been implemented, then there would be a bug
// when `340` "area coude" is "duplicated" during input for `VI` country:
// https://github.com/catamphetamine/libphonenumber-js/issues/318
//
// So, all these "gotchas" are filtered out.
//
// In the original Google's code, the comments say:
// "Check that we didn't remove nor add any extra digits when we matched
// this formatting pattern. This usually happens after we entered the last
// digit during AYTF. Eg: In case of MX, we swallow mobile token (1) when
// formatted but AYTF should retain all the number entered and not change
// in order to match a format (of same leading digits and length) display
// in that way."
// "If it's the same (i.e entered number and format is same), then it's
// safe to return this in formatted number as nothing is lost / added."
// Otherwise, don't use this format.
// https://github.com/google/libphonenumber/commit/3e7c1f04f5e7200f87fb131e6f85c6e99d60f510#diff-9149457fa9f5d608a11bb975c6ef4bc5
// https://github.com/google/libphonenumber/commit/3ac88c7106e7dcb553bcc794b15f19185928a1c6#diff-2dcb77e833422ee304da348b905cde0b
//


function isValidFormattedNationalNumber(formattedNationalNumber, state) {
  return parseDigits(formattedNationalNumber) === state.getNationalDigits();
}
//# sourceMappingURL=AsYouTypeFormatter.complete.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.js
function AsYouTypeFormatter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AsYouTypeFormatter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AsYouTypeFormatter_createClass(Constructor, protoProps, staticProps) { if (protoProps) AsYouTypeFormatter_defineProperties(Constructor.prototype, protoProps); if (staticProps) AsYouTypeFormatter_defineProperties(Constructor, staticProps); return Constructor; }

function AsYouTypeFormatter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Used in phone number format template creation.
// Could be any digit, I guess.

var DUMMY_DIGIT = '9'; // I don't know why is it exactly `15`

var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15; // Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.

var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH); // A set of characters that, if found in a national prefix formatting rules, are an indicator to
// us that we should separate the national prefix from the number when formatting.

var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/; // Deprecated: Google has removed some formatting pattern related code from their repo.
// https://github.com/googlei18n/libphonenumber/commit/a395b4fef3caf57c4bc5f082e1152a4d2bd0ba4c
// "We no longer have numbers in formatting matching patterns, only \d."
// Because this library supports generating custom metadata
// some users may still be using old metadata so the relevant
// code seems to stay until some next major version update.

var SUPPORT_LEGACY_FORMATTING_PATTERNS = true; // A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".

var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\[([^\[\]])*\]/g;
}; // Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.


var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\d(?=[^,}][^,}])/g;
}; // A regular expression that is used to determine if a `format` is
// suitable to be used in the "as you type formatter".
// A `format` is suitable when the resulting formatted number has
// the same digits as the user has entered.
//
// In the simplest case, that would mean that the format
// doesn't add any additional digits when formatting a number.
// Google says that it also shouldn't add "star" (`*`) characters,
// like it does in some Israeli formats.
// Such basic format would only contain "valid punctuation"
// and "captured group" identifiers ($1, $2, etc).
//
// An example of a format that adds additional digits:
//
// Country: `AR` (Argentina).
// Format:
// {
//    "pattern": "(\\d)(\\d{2})(\\d{4})(\\d{4})",
//    "leading_digits_patterns": ["91"],
//    "national_prefix_formatting_rule": "0$1",
//    "format": "$2 15-$3-$4",
//    "international_format": "$1 $2 $3-$4"
// }
//
// In the format above, the `format` adds `15` to the digits when formatting a number.
// A sidenote: this format actually is suitable because `national_prefix_for_parsing`
// has previously removed `15` from a national number, so re-adding `15` in `format`
// doesn't actually result in any extra digits added to user's input.
// But verifying that would be a complex procedure, so the code chooses a simpler path:
// it simply filters out all `format`s that contain anything but "captured group" ids.
//
// This regular expression is called `ELIGIBLE_FORMAT_PATTERN` in Google's
// `libphonenumber` code.
//


var NON_ALTERING_FORMAT_REG_EXP = new RegExp('^' + '[' + VALID_PUNCTUATION + ']*' + '(\\$\\d[' + VALID_PUNCTUATION + ']*)+' + '$'); // This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.

var MIN_LEADING_DIGITS_LENGTH = 3;

var AsYouTypeFormatter_AsYouTypeFormatter =
/*#__PURE__*/
function () {
  function AsYouTypeFormatter(_ref) {
    var _this = this;

    var state = _ref.state,
        metadata = _ref.metadata;

    AsYouTypeFormatter_classCallCheck(this, AsYouTypeFormatter);

    AsYouTypeFormatter_defineProperty(this, "getSeparatorAfterNationalPrefix", function (format) {
      // `US` metadata doesn't have a `national_prefix_formatting_rule`,
      // so the `if` condition below doesn't apply to `US`,
      // but in reality there shoudl be a separator
      // between a national prefix and a national (significant) number.
      // So `US` national prefix separator is a "special" "hardcoded" case.
      if (_this.isNANP) {
        return ' ';
      } // If a `format` has a `national_prefix_formatting_rule`
      // and that rule has a separator after a national prefix,
      // then it means that there should be a separator
      // between a national prefix and a national (significant) number.


      if (format && format.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format.nationalPrefixFormattingRule())) {
        return ' ';
      } // At this point, there seems to be no clear evidence that
      // there should be a separator between a national prefix
      // and a national (significant) number. So don't insert one.


      return '';
    });

    AsYouTypeFormatter_defineProperty(this, "shouldTryNationalPrefixFormattingRule", function (format, _ref2) {
      var international = _ref2.international,
          nationalPrefix = _ref2.nationalPrefix;

      if (format.nationalPrefixFormattingRule()) {
        // In some countries, `national_prefix_formatting_rule` is `($1)`,
        // so it applies even if the user hasn't input a national prefix.
        // `format.usesNationalPrefix()` detects such cases.
        var usesNationalPrefix = format.usesNationalPrefix();

        if (usesNationalPrefix && nationalPrefix || !usesNationalPrefix && !international) {
          return true;
        }
      }
    });

    this.metadata = metadata;
    this.resetFormat();
  }

  AsYouTypeFormatter_createClass(AsYouTypeFormatter, [{
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = undefined;
      this.template = undefined;
      this.nationalNumberTemplate = undefined;
      this.populatedNationalNumberTemplate = undefined;
      this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan, state) {
      this.resetFormat();

      if (numberingPlan) {
        this.isNANP = numberingPlan.callingCode() === '1';
        this.matchingFormats = numberingPlan.formats();

        if (state.nationalSignificantNumber) {
          this.narrowDownMatchingFormats(state);
        }
      } else {
        this.isNANP = undefined;
        this.matchingFormats = [];
      }
    }
  }, {
    key: "format",
    value: function format(nextDigits, state) {
      var _this2 = this;

      // See if the phone number digits can be formatted as a complete phone number.
      // If not, use the results from `formatNationalNumberWithNextDigits()`,
      // which formats based on the chosen formatting pattern.
      //
      // Attempting to format complete phone number first is how it's done
      // in Google's `libphonenumber`, so this library just follows it.
      // Google's `libphonenumber` code doesn't explain in detail why does it
      // attempt to format digits as a complete phone number
      // instead of just going with a previoulsy (or newly) chosen `format`:
      //
      // "Checks to see if there is an exact pattern match for these digits.
      //  If so, we should use this instead of any other formatting template
      //  whose leadingDigitsPattern also matches the input."
      //
      if (canFormatCompleteNumber(state.nationalSignificantNumber, this.metadata)) {
        for (var _iterator = this.matchingFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref3 = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref3 = _i.value;
          }

          var format = _ref3;
          var formattedCompleteNumber = formatCompleteNumber(state, format, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function shouldTryNationalPrefixFormattingRule(format) {
              return _this2.shouldTryNationalPrefixFormattingRule(format, {
                international: state.international,
                nationalPrefix: state.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: this.getSeparatorAfterNationalPrefix
          });

          if (formattedCompleteNumber) {
            this.resetFormat();
            this.chosenFormat = format;
            this.setNationalNumberTemplate(formattedCompleteNumber.replace(/\d/g, DIGIT_PLACEHOLDER), state);
            this.populatedNationalNumberTemplate = formattedCompleteNumber; // With a new formatting template, the matched position
            // using the old template needs to be reset.

            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(DIGIT_PLACEHOLDER);
            return formattedCompleteNumber;
          }
        }
      } // Format the digits as a partial (incomplete) phone number
      // using the previously chosen formatting pattern (or a newly chosen one).


      return this.formatNationalNumberWithNextDigits(nextDigits, state);
    } // Formats the next phone number digits.

  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits, state) {
      var previouslyChosenFormat = this.chosenFormat; // Choose a format from the list of matching ones.

      var newlyChosenFormat = this.chooseFormat(state);

      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          // If it can format the next (current) digits
          // using the previously chosen phone number format
          // then return the updated formatted number.
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          // If a more appropriate phone number format
          // has been chosen for these "leading digits",
          // then re-format the national phone number part
          // using the newly selected format.
          return this.formatNextNationalNumberDigits(state.getNationalDigits());
        }
      }
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function narrowDownMatchingFormats(_ref4) {
      var _this3 = this;

      var nationalSignificantNumber = _ref4.nationalSignificantNumber,
          nationalPrefix = _ref4.nationalPrefix,
          international = _ref4.international;
      var leadingDigits = nationalSignificantNumber; // "leading digits" pattern list starts with a
      // "leading digits" pattern fitting a maximum of 3 leading digits.
      // So, after a user inputs 3 digits of a national (significant) phone number
      // this national (significant) number can already be formatted.
      // The next "leading digits" pattern is for 4 leading digits max,
      // and the "leading digits" pattern after it is for 5 leading digits max, etc.
      // This implementation is different from Google's
      // in that it searches for a fitting format
      // even if the user has entered less than
      // `MIN_LEADING_DIGITS_LENGTH` digits of a national number.
      // Because some leading digit patterns already match for a single first digit.

      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;

      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }

      this.matchingFormats = this.matchingFormats.filter(function (format) {
        return _this3.formatSuits(format, international, nationalPrefix) && _this3.formatMatches(format, leadingDigits, leadingDigitsPatternIndex);
      }); // If there was a phone number format chosen
      // and it no longer holds given the new leading digits then reset it.
      // The test for this `if` condition is marked as:
      // "Reset a chosen format when it no longer holds given the new leading digits".
      // To construct a valid test case for this one can find a country
      // in `PhoneNumberMetadata.xml` yielding one format for 3 `<leadingDigits>`
      // and yielding another format for 4 `<leadingDigits>` (Australia in this case).

      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "formatSuits",
    value: function formatSuits(format, international, nationalPrefix) {
      // When a prefix before a national (significant) number is
      // simply a national prefix, then it's parsed as `this.nationalPrefix`.
      // In more complex cases, a prefix before national (significant) number
      // could include a national prefix as well as some "capturing groups",
      // and in that case there's no info whether a national prefix has been parsed.
      // If national prefix is not used when formatting a phone number
      // using this format, but a national prefix has been entered by the user,
      // and was extracted, then discard such phone number format.
      // In Google's "AsYouType" formatter code, the equivalent would be this part:
      // https://github.com/google/libphonenumber/blob/0a45cfd96e71cad8edb0e162a70fcc8bd9728933/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L175-L184
      if (nationalPrefix && !format.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !format.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
        return false;
      } // If national prefix is mandatory for this phone number format
      // and there're no guarantees that a national prefix is present in user input
      // then discard this phone number format as not suitable.
      // In Google's "AsYouType" formatter code, the equivalent would be this part:
      // https://github.com/google/libphonenumber/blob/0a45cfd96e71cad8edb0e162a70fcc8bd9728933/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L185-L193


      if (!international && !nationalPrefix && format.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
        return false;
      }

      return true;
    }
  }, {
    key: "formatMatches",
    value: function formatMatches(format, leadingDigits, leadingDigitsPatternIndex) {
      var leadingDigitsPatternsCount = format.leadingDigitsPatterns().length; // If this format is not restricted to a certain
      // leading digits pattern then it fits.

      if (leadingDigitsPatternsCount === 0) {
        return true;
      } // Start excluding any non-matching formats only when the
      // national number entered so far is at least 3 digits long,
      // otherwise format matching would give false negatives.
      // For example, when the digits entered so far are `2`
      // and the leading digits pattern is `21` –
      // it's quite obvious in this case that the format could be the one
      // but due to the absence of further digits it would give false negative.


      if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
        return true;
      } // If at least `MIN_LEADING_DIGITS_LENGTH` digits of a national number are available
      // then format matching starts narrowing down the list of possible formats
      // (only previously matched formats are considered for next digits).


      leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
      var leadingDigitsPattern = format.leadingDigitsPatterns()[leadingDigitsPatternIndex]; // Brackets are required for `^` to be applied to
      // all or-ed (`|`) parts, not just the first one.

      return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format, international) {
      return international ? format.internationalFormat() : format.format();
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat(state) {
      var _this4 = this;

      var _loop2 = function _loop2() {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) return "break";
          _ref5 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) return "break";
          _ref5 = _i2.value;
        }

        var format = _ref5;

        // If this format is currently being used
        // and is still suitable, then stick to it.
        if (_this4.chosenFormat === format) {
          return "break";
        } // Sometimes, a formatting rule inserts additional digits in a phone number,
        // and "as you type" formatter can't do that: it should only use the digits
        // that the user has input.
        //
        // For example, in Argentina, there's a format for mobile phone numbers:
        //
        // {
        //    "pattern": "(\\d)(\\d{2})(\\d{4})(\\d{4})",
        //    "leading_digits_patterns": ["91"],
        //    "national_prefix_formatting_rule": "0$1",
        //    "format": "$2 15-$3-$4",
        //    "international_format": "$1 $2 $3-$4"
        // }
        //
        // In that format, `international_format` is used instead of `format`
        // because `format` inserts `15` in the formatted number,
        // and `AsYouType` formatter should only use the digits
        // the user has actually input, without adding any extra digits.
        // In this case, it wouldn't make a difference, because the `15`
        // is first stripped when applying `national_prefix_for_parsing`
        // and then re-added when using `format`, so in reality it doesn't
        // add any new digits to the number, but to detect that, the code
        // would have to be more complex: it would have to try formatting
        // the digits using the format and then see if any digits have
        // actually been added or removed, and then, every time a new digit
        // is input, it should re-check whether the chosen format doesn't
        // alter the digits.
        //
        // Google's code doesn't go that far, and so does this library:
        // it simply requires that a `format` doesn't add any additonal
        // digits to user's input.
        //
        // Also, people in general should move from inputting phone numbers
        // in national format (possibly with national prefixes)
        // and use international phone number format instead:
        // it's a logical thing in the modern age of mobile phones,
        // globalization and the internet.
        //

        /* istanbul ignore if */


        if (!NON_ALTERING_FORMAT_REG_EXP.test(_this4.getFormatFormat(format, state.international))) {
          return "continue";
        }

        if (!_this4.createTemplateForFormat(format, state)) {
          // Remove the format if it can't generate a template.
          _this4.matchingFormats = _this4.matchingFormats.filter(function (_) {
            return _ !== format;
          });
          return "continue";
        }

        _this4.chosenFormat = format;
        return "break";
      };

      // When there are multiple available formats, the formatter uses the first
      // format where a formatting template could be created.
      _loop: for (var _iterator2 = this.matchingFormats.slice(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref5;

        var _ret = _loop2();

        switch (_ret) {
          case "break":
            break _loop;

          case "continue":
            continue;
        }
      }

      if (!this.chosenFormat) {
        // No format matches the national (significant) phone number.
        this.resetFormat();
      }

      return this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function createTemplateForFormat(format, state) {
      // The formatter doesn't format numbers when numberPattern contains '|', e.g.
      // (20|3)\d{4}. In those cases we quickly return.
      // (Though there's no such format in current metadata)

      /* istanbul ignore if */
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format.pattern().indexOf('|') >= 0) {
        return;
      } // Get formatting template for this phone number format


      var template = this.getTemplateForFormat(format, state); // If the national number entered is too long
      // for any phone number format, then abort.

      if (template) {
        this.setNationalNumberTemplate(template, state);
        return true;
      }
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function getInternationalPrefixBeforeCountryCallingCode(_ref6, options) {
      var IDDPrefix = _ref6.IDDPrefix,
          missingPlus = _ref6.missingPlus;

      if (IDDPrefix) {
        return options && options.spacing === false ? IDDPrefix : IDDPrefix + ' ';
      }

      if (missingPlus) {
        return '';
      }

      return '+';
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(state) {
      if (!this.template) {
        return;
      } // `this.template` holds the template for a "complete" phone number.
      // The currently entered phone number is most likely not "complete",
      // so trim all non-populated digits.


      var index = -1;
      var i = 0;
      var internationalPrefix = state.international ? this.getInternationalPrefixBeforeCountryCallingCode(state, {
        spacing: false
      }) : '';

      while (i < internationalPrefix.length + state.getDigitsWithoutInternationalPrefix().length) {
        index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
        i++;
      }

      return cutAndStripNonPairedParens(this.template, index + 1);
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function setNationalNumberTemplate(template, state) {
      this.nationalNumberTemplate = template;
      this.populatedNationalNumberTemplate = template; // With a new formatting template, the matched position
      // using the old template needs to be reset.

      this.populatedNationalNumberTemplatePosition = -1; // For convenience, the public `.template` property
      // contains the whole international number
      // if the phone number being input is international:
      // 'x' for the '+' sign, 'x'es for the country phone code,
      // a spacebar and then the template for the formatted national number.

      if (state.international) {
        this.template = this.getInternationalPrefixBeforeCountryCallingCode(state).replace(/[\d\+]/g, DIGIT_PLACEHOLDER) + repeat(DIGIT_PLACEHOLDER, state.callingCode.length) + ' ' + template;
      } else {
        this.template = template;
      }
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */

  }, {
    key: "getTemplateForFormat",
    value: function getTemplateForFormat(format, _ref7) {
      var nationalSignificantNumber = _ref7.nationalSignificantNumber,
          international = _ref7.international,
          nationalPrefix = _ref7.nationalPrefix,
          complexPrefixBeforeNationalSignificantNumber = _ref7.complexPrefixBeforeNationalSignificantNumber;
      var pattern = format.pattern();
      /* istanbul ignore else */

      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern // Replace anything in the form of [..] with \d
        .replace(CREATE_CHARACTER_CLASS_PATTERN(), '\\d') // Replace any standalone digit (not the one in `{}`) with \d
        .replace(CREATE_STANDALONE_DIGIT_PATTERN(), '\\d');
      } // Generate a dummy national number (consisting of `9`s)
      // that fits this format's `pattern`.
      //
      // This match will always succeed,
      // because the "longest dummy phone number"
      // has enough length to accomodate any possible
      // national phone number format pattern.
      //


      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0]; // If the national number entered is too long
      // for any phone number format, then abort.

      if (nationalSignificantNumber.length > digits.length) {
        return;
      } // Get a formatting template which can be used to efficiently format
      // a partial number where digits are added one by one.
      // Below `strictPattern` is used for the
      // regular expression (with `^` and `$`).
      // This wasn't originally in Google's `libphonenumber`
      // and I guess they don't really need it
      // because they're not using "templates" to format phone numbers
      // but I added `strictPattern` after encountering
      // South Korean phone number formatting bug.
      //
      // Non-strict regular expression bug demonstration:
      //
      // this.nationalSignificantNumber : `111111111` (9 digits)
      //
      // pattern : (\d{2})(\d{3,4})(\d{4})
      // format : `$1 $2 $3`
      // digits : `9999999999` (10 digits)
      //
      // '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
      //
      // template : xx xxxx xxxx
      //
      // But the correct template in this case is `xx xxx xxxx`.
      // The template was generated incorrectly because of the
      // `{3,4}` variability in the `pattern`.
      //
      // The fix is, if `this.nationalSignificantNumber` has already sufficient length
      // to satisfy the `pattern` completely then `this.nationalSignificantNumber`
      // is used instead of `digits`.


      var strictPattern = new RegExp('^' + pattern + '$');
      var nationalNumberDummyDigits = nationalSignificantNumber.replace(/\d/g, DUMMY_DIGIT); // If `this.nationalSignificantNumber` has already sufficient length
      // to satisfy the `pattern` completely then use it
      // instead of `digits`.

      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }

      var numberFormat = this.getFormatFormat(format, international);
      var nationalPrefixIncludedInTemplate; // If a user did input a national prefix (and that's guaranteed),
      // and if a `format` does have a national prefix formatting rule,
      // then see if that national prefix formatting rule
      // prepends exactly the same national prefix the user has input.
      // If that's the case, then use the `format` with the national prefix formatting rule.
      // Otherwise, use  the `format` without the national prefix formatting rule,
      // and prepend a national prefix manually to it.

      if (this.shouldTryNationalPrefixFormattingRule(format, {
        international: international,
        nationalPrefix: nationalPrefix
      })) {
        var numberFormatWithNationalPrefix = numberFormat.replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()); // If `national_prefix_formatting_rule` of a `format` simply prepends
        // national prefix at the start of a national (significant) number,
        // then such formatting can be used with `AsYouType` formatter.
        // There seems to be no `else` case: everywhere in metadata,
        // national prefix formatting rule is national prefix + $1,
        // or `($1)`, in which case such format isn't even considered
        // when the user has input a national prefix.

        /* istanbul ignore else */

        if (parseDigits(format.nationalPrefixFormattingRule()) === (nationalPrefix || '') + parseDigits('$1')) {
          numberFormat = numberFormatWithNationalPrefix;
          nationalPrefixIncludedInTemplate = true; // Replace all digits of the national prefix in the formatting template
          // with `DIGIT_PLACEHOLDER`s.

          if (nationalPrefix) {
            var i = nationalPrefix.length;

            while (i > 0) {
              numberFormat = numberFormat.replace(/\d/, DIGIT_PLACEHOLDER);
              i--;
            }
          }
        }
      } // Generate formatting template for this phone number format.


      var template = digits // Format the dummy phone number according to the format.
      .replace(new RegExp(pattern), numberFormat) // Replace each dummy digit with a DIGIT_PLACEHOLDER.
      .replace(new RegExp(DUMMY_DIGIT, 'g'), DIGIT_PLACEHOLDER); // If a prefix of a national (significant) number is not as simple
      // as just a basic national prefix, then just prepend such prefix
      // before the national (significant) number, optionally spacing
      // the two with a whitespace.

      if (!nationalPrefixIncludedInTemplate) {
        if (complexPrefixBeforeNationalSignificantNumber) {
          // Prepend the prefix to the template manually.
          template = repeat(DIGIT_PLACEHOLDER, complexPrefixBeforeNationalSignificantNumber.length) + ' ' + template;
        } else if (nationalPrefix) {
          // Prepend national prefix to the template manually.
          template = repeat(DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format) + template;
        }
      }

      if (international) {
        template = applyInternationalSeparatorStyle(template);
      }

      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      var result = populateTemplateWithDigits(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, digits);

      if (!result) {
        // Reset the format.
        this.resetFormat();
        return;
      }

      this.populatedNationalNumberTemplate = result[0];
      this.populatedNationalNumberTemplatePosition = result[1]; // Return the formatted phone number so far.

      return cutAndStripNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1); // The old way which was good for `input-format` but is not so good
      // for `react-phone-number-input`'s default input (`InputBasic`).
      // return closeNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
      // 	.replace(new RegExp(DIGIT_PLACEHOLDER, 'g'), ' ')
    }
  }]);

  return AsYouTypeFormatter;
}();


//# sourceMappingURL=AsYouTypeFormatter.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouTypeParser.js
function AsYouTypeParser_slicedToArray(arr, i) { return AsYouTypeParser_arrayWithHoles(arr) || AsYouTypeParser_iterableToArrayLimit(arr, i) || AsYouTypeParser_nonIterableRest(); }

function AsYouTypeParser_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function AsYouTypeParser_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AsYouTypeParser_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AsYouTypeParser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AsYouTypeParser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AsYouTypeParser_createClass(Constructor, protoProps, staticProps) { if (protoProps) AsYouTypeParser_defineProperties(Constructor.prototype, protoProps); if (staticProps) AsYouTypeParser_defineProperties(Constructor, staticProps); return Constructor; }







var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART = '[' + VALID_PUNCTUATION + VALID_DIGITS + ']+';
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN = new RegExp('^' + VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART + '$', 'i');
var VALID_FORMATTED_PHONE_NUMBER_PART = '(?:' + '[' + PLUS_CHARS + ']' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*' + '|' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']+' + ')';
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp('[^' + VALID_PUNCTUATION + VALID_DIGITS + ']+' + '.*' + '$'); // Tests whether `national_prefix_for_parsing` could match
// different national prefixes.
// Matches anything that's not a digit or a square bracket.

var COMPLEX_NATIONAL_PREFIX = /[^\d\[\]]/;

var AsYouTypeParser_AsYouTypeParser =
/*#__PURE__*/
function () {
  function AsYouTypeParser(_ref) {
    var defaultCountry = _ref.defaultCountry,
        defaultCallingCode = _ref.defaultCallingCode,
        metadata = _ref.metadata,
        onNationalSignificantNumberChange = _ref.onNationalSignificantNumberChange;

    AsYouTypeParser_classCallCheck(this, AsYouTypeParser);

    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.metadata = metadata;
    this.onNationalSignificantNumberChange = onNationalSignificantNumberChange;
  }

  AsYouTypeParser_createClass(AsYouTypeParser, [{
    key: "input",
    value: function input(text, state) {
      var _extractFormattedDigi = extractFormattedDigitsAndPlus(text),
          _extractFormattedDigi2 = AsYouTypeParser_slicedToArray(_extractFormattedDigi, 2),
          formattedDigits = _extractFormattedDigi2[0],
          hasPlus = _extractFormattedDigi2[1];

      var digits = parseDigits(formattedDigits); // Checks for a special case: just a leading `+` has been entered.

      var justLeadingPlus;

      if (hasPlus) {
        if (!state.digits) {
          state.startInternationalNumber();

          if (!digits) {
            justLeadingPlus = true;
          }
        }
      }

      if (digits) {
        this.inputDigits(digits, state);
      }

      return {
        digits: digits,
        justLeadingPlus: justLeadingPlus
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */

  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits, state) {
      var digits = state.digits;
      var hasReceivedThreeLeadingDigits = digits.length < 3 && digits.length + nextDigits.length >= 3; // Append phone number digits.

      state.appendDigits(nextDigits); // Attempt to extract IDD prefix:
      // Some users input their phone number in international format,
      // but in an "out-of-country" dialing format instead of using the leading `+`.
      // https://github.com/catamphetamine/libphonenumber-js/issues/185
      // Detect such numbers as soon as there're at least 3 digits.
      // Google's library attempts to extract IDD prefix at 3 digits,
      // so this library just copies that behavior.
      // I guess that's because the most commot IDD prefixes are
      // `00` (Europe) and `011` (US).
      // There exist really long IDD prefixes too:
      // for example, in Australia the default IDD prefix is `0011`,
      // and it could even be as long as `14880011`.
      // An IDD prefix is extracted here, and then every time when
      // there's a new digit and the number couldn't be formatted.

      if (hasReceivedThreeLeadingDigits) {
        this.extractIddPrefix(state);
      }

      if (this.isWaitingForCountryCallingCode(state)) {
        if (!this.extractCountryCallingCode(state)) {
          return;
        }
      } else {
        state.appendNationalSignificantNumberDigits(nextDigits);
      } // If a phone number is being input in international format,
      // then it's not valid for it to have a national prefix.
      // Still, some people incorrectly input such numbers with a national prefix.
      // In such cases, only attempt to strip a national prefix if the number becomes too long.
      // (but that is done later, not here)


      if (!state.international) {
        if (!this.hasExtractedNationalSignificantNumber) {
          this.extractNationalSignificantNumber(state.getNationalDigits(), state.update);
        }
      }
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function isWaitingForCountryCallingCode(_ref2) {
      var international = _ref2.international,
          callingCode = _ref2.callingCode;
      return international && !callingCode;
    } // Extracts a country calling code from a number
    // being entered in internatonal format.

  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode(state) {
      var _extractCountryCallin = extractCountryCallingCode_extractCountryCallingCode('+' + state.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
          countryCallingCode = _extractCountryCallin.countryCallingCode,
          number = _extractCountryCallin.number;

      if (countryCallingCode) {
        state.setCallingCode(countryCallingCode);
        state.update({
          nationalSignificantNumber: number
        });
        return true;
      }
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan) {
      if (numberingPlan) {
        this.hasSelectedNumberingPlan = true;

        var nationalPrefixForParsing = numberingPlan._nationalPrefixForParsing();

        this.couldPossiblyExtractAnotherNationalSignificantNumber = nationalPrefixForParsing && COMPLEX_NATIONAL_PREFIX.test(nationalPrefixForParsing);
      } else {
        this.hasSelectedNumberingPlan = undefined;
        this.couldPossiblyExtractAnotherNationalSignificantNumber = undefined;
      }
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */

  }, {
    key: "extractNationalSignificantNumber",
    value: function extractNationalSignificantNumber(nationalDigits, setState) {
      if (!this.hasSelectedNumberingPlan) {
        return;
      }

      var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata),
          nationalPrefix = _extractNationalNumbe.nationalPrefix,
          nationalNumber = _extractNationalNumbe.nationalNumber,
          carrierCode = _extractNationalNumbe.carrierCode;

      if (nationalNumber === nationalDigits) {
        return;
      }

      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */

  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function extractAnotherNationalSignificantNumber(nationalDigits, prevNationalSignificantNumber, setState) {
      if (!this.hasExtractedNationalSignificantNumber) {
        return this.extractNationalSignificantNumber(nationalDigits, setState);
      }

      if (!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        return;
      }

      var _extractNationalNumbe2 = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata),
          nationalPrefix = _extractNationalNumbe2.nationalPrefix,
          nationalNumber = _extractNationalNumbe2.nationalNumber,
          carrierCode = _extractNationalNumbe2.carrierCode; // If a national prefix has been extracted previously,
      // then it's always extracted as additional digits are added.
      // That's assuming `extractNationalNumberFromPossiblyIncompleteNumber()`
      // doesn't do anything different from what it currently does.
      // So, just in case, here's this check, though it doesn't occur.

      /* istanbul ignore if */


      if (nationalNumber === prevNationalSignificantNumber) {
        return;
      }

      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function onExtractedNationalNumber(nationalPrefix, carrierCode, nationalSignificantNumber, nationalDigits, setState) {
      var complexPrefixBeforeNationalSignificantNumber;
      var nationalSignificantNumberMatchesInput; // This check also works with empty `this.nationalSignificantNumber`.

      var nationalSignificantNumberIndex = nationalDigits.lastIndexOf(nationalSignificantNumber); // If the extracted national (significant) number is the
      // last substring of the `digits`, then it means that it hasn't been altered:
      // no digits have been removed from the national (significant) number
      // while applying `national_prefix_transform_rule`.
      // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule

      if (nationalSignificantNumberIndex >= 0 && nationalSignificantNumberIndex === nationalDigits.length - nationalSignificantNumber.length) {
        nationalSignificantNumberMatchesInput = true; // If a prefix of a national (significant) number is not as simple
        // as just a basic national prefix, then such prefix is stored in
        // `this.complexPrefixBeforeNationalSignificantNumber` property and will be
        // prepended "as is" to the national (significant) number to produce
        // a formatted result.

        var prefixBeforeNationalNumber = nationalDigits.slice(0, nationalSignificantNumberIndex); // `prefixBeforeNationalNumber` is always non-empty,
        // because `onExtractedNationalNumber()` isn't called
        // when a national (significant) number hasn't been actually "extracted":
        // when a national (significant) number is equal to the national part of `digits`,
        // then `onExtractedNationalNumber()` doesn't get called.

        if (prefixBeforeNationalNumber !== nationalPrefix) {
          complexPrefixBeforeNationalSignificantNumber = prefixBeforeNationalNumber;
        }
      }

      setState({
        nationalPrefix: nationalPrefix,
        carrierCode: carrierCode,
        nationalSignificantNumber: nationalSignificantNumber,
        nationalSignificantNumberMatchesInput: nationalSignificantNumberMatchesInput,
        complexPrefixBeforeNationalSignificantNumber: complexPrefixBeforeNationalSignificantNumber
      }); // `onExtractedNationalNumber()` is only called when
      // the national (significant) number actually did change.

      this.hasExtractedNationalSignificantNumber = true;
      this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function reExtractNationalSignificantNumber(state) {
      // Attempt to extract a national prefix.
      //
      // Some people incorrectly input national prefix
      // in an international phone number.
      // For example, some people write British phone numbers as `+44(0)...`.
      //
      // Also, in some rare cases, it is valid for a national prefix
      // to be a part of an international phone number.
      // For example, mobile phone numbers in Mexico are supposed to be
      // dialled internationally using a `1` national prefix,
      // so the national prefix will be part of an international number.
      //
      // Quote from:
      // https://www.mexperience.com/dialing-cell-phones-in-mexico/
      //
      // "Dialing a Mexican cell phone from abroad
      // When you are calling a cell phone number in Mexico from outside Mexico,
      // it’s necessary to dial an additional “1” after Mexico’s country code
      // (which is “52”) and before the area code.
      // You also ignore the 045, and simply dial the area code and the
      // cell phone’s number.
      //
      // If you don’t add the “1”, you’ll receive a recorded announcement
      // asking you to redial using it.
      //
      // For example, if you are calling from the USA to a cell phone
      // in Mexico City, you would dial +52 – 1 – 55 – 1234 5678.
      // (Note that this is different to calling a land line in Mexico City
      // from abroad, where the number dialed would be +52 – 55 – 1234 5678)".
      //
      // Google's demo output:
      // https://libphonenumber.appspot.com/phonenumberparser?number=%2b5215512345678&country=MX
      //
      if (this.extractAnotherNationalSignificantNumber(state.getNationalDigits(), state.nationalSignificantNumber, state.update)) {
        return true;
      } // If no format matches the phone number, then it could be
      // "a really long IDD" (quote from a comment in Google's library).
      // An IDD prefix is first extracted when the user has entered at least 3 digits,
      // and then here — every time when there's a new digit and the number
      // couldn't be formatted.
      // For example, in Australia the default IDD prefix is `0011`,
      // and it could even be as long as `14880011`.
      //
      // Could also check `!hasReceivedThreeLeadingDigits` here
      // to filter out the case when this check duplicates the one
      // already performed when there're 3 leading digits,
      // but it's not a big deal, and in most cases there
      // will be a suitable `format` when there're 3 leading digits.
      //


      if (this.extractIddPrefix(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      } // Google's AsYouType formatter supports sort of an "autocorrection" feature
      // when it "autocorrects" numbers that have been input for a country
      // with that country's calling code.
      // Such "autocorrection" feature looks weird, but different people have been requesting it:
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      // https://github.com/catamphetamine/libphonenumber-js/issues/375
      // https://github.com/catamphetamine/libphonenumber-js/issues/316


      if (this.fixMissingPlus(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
    }
  }, {
    key: "extractIddPrefix",
    value: function extractIddPrefix(state) {
      // An IDD prefix can't be present in a number written with a `+`.
      // Also, don't re-extract an IDD prefix if has already been extracted.
      var international = state.international,
          IDDPrefix = state.IDDPrefix,
          digits = state.digits,
          nationalSignificantNumber = state.nationalSignificantNumber;

      if (international || IDDPrefix) {
        return;
      } // Some users input their phone number in "out-of-country"
      // dialing format instead of using the leading `+`.
      // https://github.com/catamphetamine/libphonenumber-js/issues/185
      // Detect such numbers.


      var numberWithoutIDD = stripIddPrefix(digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);

      if (numberWithoutIDD !== undefined && numberWithoutIDD !== digits) {
        // If an IDD prefix was stripped then convert the IDD-prefixed number
        // to international number for subsequent parsing.
        state.update({
          IDDPrefix: digits.slice(0, digits.length - numberWithoutIDD.length)
        });
        this.startInternationalNumber(state);
        return true;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function fixMissingPlus(state) {
      if (!state.international) {
        var _extractCountryCallin2 = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(state.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
            newCallingCode = _extractCountryCallin2.countryCallingCode,
            number = _extractCountryCallin2.number;

        if (newCallingCode) {
          state.update({
            missingPlus: true
          });
          this.startInternationalNumber(state);
          return true;
        }
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(state) {
      state.startInternationalNumber(); // If a national (significant) number has been extracted before, reset it.

      if (state.nationalSignificantNumber) {
        state.resetNationalSignificantNumber();
        this.onNationalSignificantNumberChange();
        this.hasExtractedNationalSignificantNumber = undefined;
      }
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function extractCallingCodeAndNationalSignificantNumber(state) {
      if (this.extractCountryCallingCode(state)) {
        // `this.extractCallingCode()` is currently called when the number
        // couldn't be formatted during the standard procedure.
        // Normally, the national prefix would be re-extracted
        // for an international number if such number couldn't be formatted,
        // but since it's already not able to be formatted,
        // there won't be yet another retry, so also extract national prefix here.
        this.extractNationalSignificantNumber(state.getNationalDigits(), state.update);
      }
    }
  }]);

  return AsYouTypeParser;
}();
/**
 * Extracts formatted phone number from text (if there's any).
 * @param  {string} text
 * @return {string} [formattedPhoneNumber]
 */




function AsYouTypeParser_extractFormattedPhoneNumber(text) {
  // Attempt to extract a possible number from the string passed in.
  var startsAt = text.search(VALID_FORMATTED_PHONE_NUMBER_PART);

  if (startsAt < 0) {
    return;
  } // Trim everything to the left of the phone number.


  text = text.slice(startsAt); // Trim the `+`.

  var hasPlus;

  if (text[0] === '+') {
    hasPlus = true;
    text = text.slice('+'.length);
  } // Trim everything to the right of the phone number.


  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, ''); // Re-add the previously trimmed `+`.

  if (hasPlus) {
    text = '+' + text;
  }

  return text;
}
/**
 * Extracts formatted phone number digits (and a `+`) from text (if there're any).
 * @param  {string} text
 * @return {any[]}
 */


function _extractFormattedDigitsAndPlus(text) {
  // Extract a formatted phone number part from text.
  var extractedNumber = AsYouTypeParser_extractFormattedPhoneNumber(text) || ''; // Trim a `+`.

  if (extractedNumber[0] === '+') {
    return [extractedNumber.slice('+'.length), true];
  }

  return [extractedNumber];
}
/**
 * Extracts formatted phone number digits (and a `+`) from text (if there're any).
 * @param  {string} text
 * @return {any[]}
 */


function extractFormattedDigitsAndPlus(text) {
  var _extractFormattedDigi3 = _extractFormattedDigitsAndPlus(text),
      _extractFormattedDigi4 = AsYouTypeParser_slicedToArray(_extractFormattedDigi3, 2),
      formattedDigits = _extractFormattedDigi4[0],
      hasPlus = _extractFormattedDigi4[1]; // If the extracted phone number part
  // can possibly be a part of some valid phone number
  // then parse phone number characters from a formatted phone number.


  if (!VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN.test(formattedDigits)) {
    formattedDigits = '';
  }

  return [formattedDigits, hasPlus];
}
//# sourceMappingURL=AsYouTypeParser.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/AsYouType.js
function AsYouType_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AsYouType_typeof = function _typeof(obj) { return typeof obj; }; } else { AsYouType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AsYouType_typeof(obj); }

function AsYouType_slicedToArray(arr, i) { return AsYouType_arrayWithHoles(arr) || AsYouType_iterableToArrayLimit(arr, i) || AsYouType_nonIterableRest(); }

function AsYouType_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function AsYouType_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AsYouType_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AsYouType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AsYouType_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AsYouType_createClass(Constructor, protoProps, staticProps) { if (protoProps) AsYouType_defineProperties(Constructor.prototype, protoProps); if (staticProps) AsYouType_defineProperties(Constructor, staticProps); return Constructor; }







var AsYouType_USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var AsYouType_AsYouType =
/*#__PURE__*/
function () {
  /**
   * @param {(string|object)?} [optionsOrDefaultCountry] - The default country used for parsing non-international phone numbers. Can also be an `options` object.
   * @param {Object} metadata
   */
  function AsYouType(optionsOrDefaultCountry, metadata) {
    AsYouType_classCallCheck(this, AsYouType);

    this.metadata = new Metadata(metadata);

    var _this$getCountryAndCa = this.getCountryAndCallingCode(optionsOrDefaultCountry),
        _this$getCountryAndCa2 = AsYouType_slicedToArray(_this$getCountryAndCa, 2),
        defaultCountry = _this$getCountryAndCa2[0],
        defaultCallingCode = _this$getCountryAndCa2[1];

    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.reset();
  }

  AsYouType_createClass(AsYouType, [{
    key: "getCountryAndCallingCode",
    value: function getCountryAndCallingCode(optionsOrDefaultCountry) {
      // Set `defaultCountry` and `defaultCallingCode` options.
      var defaultCountry;
      var defaultCallingCode; // Turns out `null` also has type "object". Weird.

      if (optionsOrDefaultCountry) {
        if (AsYouType_typeof(optionsOrDefaultCountry) === 'object') {
          defaultCountry = optionsOrDefaultCountry.defaultCountry;
          defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
        } else {
          defaultCountry = optionsOrDefaultCountry;
        }
      }

      if (defaultCountry && !this.metadata.hasCountry(defaultCountry)) {
        defaultCountry = undefined;
      }

      if (defaultCallingCode) {
        /* istanbul ignore if */
        if (AsYouType_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            defaultCountry = '001';
          }
        }
      }

      return [defaultCountry, defaultCallingCode];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */

  }, {
    key: "input",
    value: function input(text) {
      var _this$parser$input = this.parser.input(text, this.state),
          digits = _this$parser$input.digits,
          justLeadingPlus = _this$parser$input.justLeadingPlus;

      if (justLeadingPlus) {
        this.formattedOutput = '+';
      } else if (digits) {
        this.determineTheCountryIfNeeded(); // Match the available formats by the currently available leading digits.

        if (this.state.nationalSignificantNumber) {
          this.formatter.narrowDownMatchingFormats(this.state);
        }

        var formattedNationalNumber;

        if (this.metadata.hasSelectedNumberingPlan()) {
          formattedNationalNumber = this.formatter.format(digits, this.state);
        }

        if (formattedNationalNumber === undefined) {
          // See if another national (significant) number could be re-extracted.
          if (this.parser.reExtractNationalSignificantNumber(this.state)) {
            this.determineTheCountryIfNeeded(); // If it could, then re-try formatting the new national (significant) number.

            var nationalDigits = this.state.getNationalDigits();

            if (nationalDigits) {
              formattedNationalNumber = this.formatter.format(nationalDigits, this.state);
            }
          }
        }

        this.formattedOutput = formattedNationalNumber ? this.getFullNumber(formattedNationalNumber) : this.getNonFormattedNumber();
      }

      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      this.state = new AsYouTypeState({
        onCountryChange: function onCountryChange(country) {
          // Before version `1.6.0`, the official `AsYouType` formatter API
          // included the `.country` property of an `AsYouType` instance.
          // Since that property (along with the others) have been moved to
          // `this.state`, `this.country` property is emulated for compatibility
          // with the old versions.
          _this.country = country;
        },
        onCallingCodeChange: function onCallingCodeChange(country, callingCode) {
          _this.metadata.selectNumberingPlan(country, callingCode);

          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);

          _this.parser.reset(_this.metadata.numberingPlan);
        }
      });
      this.formatter = new AsYouTypeFormatter_AsYouTypeFormatter({
        state: this.state,
        metadata: this.metadata
      });
      this.parser = new AsYouTypeParser_AsYouTypeParser({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function onNationalSignificantNumberChange() {
          _this.determineTheCountryIfNeeded();

          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
        }
      });
      this.state.reset(this.defaultCountry, this.defaultCallingCode);
      this.formattedOutput = '';
      return this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */

  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.state.international;
    }
    /**
     * Returns the "country calling code" part of the phone number.
     * Returns `undefined` if the number is not being input in international format.
     * Returns "country calling code" for "non-geographic" phone numbering plans too.
     * @return {string} [callingCode]
     */

  }, {
    key: "getCallingCode",
    value: function getCallingCode() {
      return this.state.callingCode;
    } // A legacy alias.

  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */

  }, {
    key: "getCountry",
    value: function getCountry() {
      var _this$state = this.state,
          digits = _this$state.digits,
          country = _this$state.country; // If no digits have been input yet,
      // then `this.country` is the `defaultCountry`.
      // Won't return the `defaultCountry` in such case.

      if (!digits) {
        return;
      }

      var countryCode = country;
      /* istanbul ignore if */

      if (AsYouType_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        // `AsYouType.getCountry()` returns `undefined`
        // for "non-geographic" phone numbering plans.
        if (countryCode === '001') {
          countryCode = undefined;
        }
      }

      return countryCode;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function determineTheCountryIfNeeded() {
      // Suppose a user enters a phone number in international format,
      // and there're several countries corresponding to that country calling code,
      // and a country has been derived from the number, and then
      // a user enters one more digit and the number is no longer
      // valid for the derived country, so the country should be re-derived
      // on every new digit in those cases.
      //
      // If the phone number is being input in national format,
      // then it could be a case when `defaultCountry` wasn't specified
      // when creating `AsYouType` instance, and just `defaultCallingCode` was specified,
      // and that "calling code" could correspond to a "non-geographic entity",
      // or there could be several countries corresponding to that country calling code.
      // In those cases, `this.country` is `undefined` and should be derived
      // from the number. Again, if country calling code is ambiguous, then
      // `this.country` should be re-derived with each new digit.
      //
      if (!this.state.country || this.isCountryCallingCodeAmbiguous()) {
        this.determineTheCountry();
      }
    } // Prepends `+CountryCode ` in case of an international phone number

  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      var _this2 = this;

      if (this.isInternational()) {
        var prefix = function prefix(text) {
          return _this2.formatter.getInternationalPrefixBeforeCountryCallingCode(_this2.state, {
            spacing: text ? true : false
          }) + text;
        };

        var callingCode = this.state.callingCode;

        if (!callingCode) {
          return prefix("".concat(this.state.getDigitsWithoutInternationalPrefix()));
        }

        if (!formattedNationalNumber) {
          return prefix(callingCode);
        }

        return prefix("".concat(callingCode, " ").concat(formattedNationalNumber));
      }

      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function getNonFormattedNationalNumberWithPrefix() {
      var _this$state2 = this.state,
          nationalSignificantNumber = _this$state2.nationalSignificantNumber,
          complexPrefixBeforeNationalSignificantNumber = _this$state2.complexPrefixBeforeNationalSignificantNumber,
          nationalPrefix = _this$state2.nationalPrefix;
      var number = nationalSignificantNumber;
      var prefix = complexPrefixBeforeNationalSignificantNumber || nationalPrefix;

      if (prefix) {
        number = prefix + number;
      }

      return number;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function getNonFormattedNumber() {
      var nationalSignificantNumberMatchesInput = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(nationalSignificantNumberMatchesInput ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      var number = this.getNonFormattedNumber();

      if (number) {
        return number.replace(/[\+\d]/g, DIGIT_PLACEHOLDER);
      }
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var callingCode = this.state.callingCode;
      var countryCodes = this.metadata.getCountryCodesForCallingCode(callingCode);
      return countryCodes && countryCodes.length > 1;
    } // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.

  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      this.state.setCountry(getCountryByCallingCode(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata));
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */

  }, {
    key: "getNumber",
    value: function getNumber() {
      var _this$state3 = this.state,
          nationalSignificantNumber = _this$state3.nationalSignificantNumber,
          carrierCode = _this$state3.carrierCode;

      if (this.isInternational()) {
        if (!this.state.callingCode) {
          return;
        }
      } else {
        if (!this.state.country && !this.defaultCallingCode) {
          return;
        }
      }

      if (!nationalSignificantNumber) {
        return;
      }

      var countryCode = this.getCountry();
      var callingCode = this.getCountryCallingCode() || this.defaultCallingCode;
      var phoneNumber = new PhoneNumber_PhoneNumber(countryCode || callingCode, nationalSignificantNumber, this.metadata.metadata);

      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      } // Phone number extensions are not supported by "As You Type" formatter.


      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */

  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    value: function isValid() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isValid();
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */

  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */

  }, {
    key: "getChars",
    value: function getChars() {
      return (this.state.international ? '+' : '') + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || '';
    }
  }]);

  return AsYouType;
}();


//# sourceMappingURL=AsYouType.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/AsYouType.js



function exports_AsYouType_AsYouType(country) {
	return AsYouType_AsYouType.call(this, country, min_metadata)
}

exports_AsYouType_AsYouType.prototype = Object.create(AsYouType_AsYouType.prototype, {})
exports_AsYouType_AsYouType.prototype.constructor = exports_AsYouType_AsYouType
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/isSupportedCountry.js



function isSupportedCountry_isSupportedCountry() {
	return withMetadata(isSupportedCountry, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/getCountries.js

function getCountries(metadata) {
  return new Metadata(metadata).getCountries();
}
//# sourceMappingURL=getCountries.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/getCountries.js



function getCountries_getCountries() {
	return withMetadata(getCountries, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/getCountryCallingCode.js



function getCountryCallingCode_getCountryCallingCode() {
	return withMetadata(getCountryCallingCode, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/getExtPrefix.js



function getExtPrefix_getExtPrefix() {
	return withMetadata(getExtPrefix, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/Metadata.js



function Metadata_Metadata() {
	return Metadata.call(this, min_metadata)
}

Metadata_Metadata.prototype = Object.create(Metadata.prototype, {})
Metadata_Metadata.prototype.constructor = Metadata_Metadata
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/getExampleNumber.js

function getExampleNumber(country, examples, metadata) {
  if (examples[country]) {
    return new PhoneNumber_PhoneNumber(country, examples[country], metadata);
  }
}
//# sourceMappingURL=getExampleNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/getExampleNumber.js



function getExampleNumber_getExampleNumber() {
	return withMetadata(getExampleNumber, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/formatIncompletePhoneNumber.js

/**
 * Formats a (possibly incomplete) phone number.
 * The phone number can be either in E.164 format
 * or in a form of national number digits.
 * @param {string} value - A possibly incomplete phone number. Either in E.164 format or in a form of national number digits.
 * @param {string?} country - Two-letter ("ISO 3166-1 alpha-2") country code.
 * @return {string} Formatted (possibly incomplete) phone number.
 */

function formatIncompletePhoneNumber(value, country, metadata) {
  if (!metadata) {
    metadata = country;
    country = undefined;
  }

  return new AsYouType_AsYouType(country, metadata).input(value);
}
//# sourceMappingURL=formatIncompletePhoneNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/formatIncompletePhoneNumber.js



function formatIncompletePhoneNumber_formatIncompletePhoneNumber() {
	return withMetadata(formatIncompletePhoneNumber, arguments)
}
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parse.js

 // `options`:
//  {
//    country:
//    {
//      restrict - (a two-letter country code)
//                 the phone number must be in this country
//
//      default - (a two-letter country code)
//                default country to use for phone number parsing and validation
//                (if no country code could be derived from the phone number)
//    }
//  }
//
// Returns `{ country, number }`
//
// Example use cases:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//

function parseNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return parse(text, options, metadata);
}
//# sourceMappingURL=parse.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/parse.js




function parse_parse() {
	return withMetadata(parseNumber, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/format.js
function format_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { format_typeof = function _typeof(obj) { return typeof obj; }; } else { format_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return format_typeof(obj); }

function format_slicedToArray(arr, i) { return format_arrayWithHoles(arr) || format_iterableToArrayLimit(arr, i) || format_nonIterableRest(); }

function format_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function format_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function format_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function es6_format_formatNumber() {
  var _normalizeArguments = format_normalizeArguments(arguments),
      input = _normalizeArguments.input,
      format = _normalizeArguments.format,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return format_formatNumber(input, format, options, metadata);
} // Sort out arguments

function format_normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = format_slicedToArray(_Array$prototype$slic, 5),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3],
      arg_5 = _Array$prototype$slic2[4];

  var input;
  var format;
  var options;
  var metadata; // Sort out arguments.
  // If the phone number is passed as a string.
  // `format('8005553535', ...)`.

  if (typeof arg_1 === 'string') {
    // If country code is supplied.
    // `format('8005553535', 'RU', 'NATIONAL', [options], metadata)`.
    if (typeof arg_3 === 'string') {
      format = arg_3;

      if (arg_5) {
        options = arg_4;
        metadata = arg_5;
      } else {
        metadata = arg_4;
      }

      input = parse(arg_1, {
        defaultCountry: arg_2,
        extended: true
      }, metadata);
    } // Just an international phone number is supplied
    // `format('+78005553535', 'NATIONAL', [options], metadata)`.
    else {
        if (typeof arg_2 !== 'string') {
          throw new Error('`format` argument not passed to `formatNumber(number, format)`');
        }

        format = arg_2;

        if (arg_4) {
          options = arg_3;
          metadata = arg_4;
        } else {
          metadata = arg_3;
        }

        input = parse(arg_1, {
          extended: true
        }, metadata);
      }
  } // If the phone number is passed as a parsed number object.
  // `format({ phone: '8005553535', country: 'RU' }, 'NATIONAL', [options], metadata)`.
  else if (format_is_object(arg_1)) {
      input = arg_1;
      format = arg_2;

      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        metadata = arg_3;
      }
    } else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.'); // Legacy lowercase formats.


  if (format === 'International') {
    format = 'INTERNATIONAL';
  } else if (format === 'National') {
    format = 'NATIONAL';
  }

  return {
    input: input,
    format: format,
    options: options,
    metadata: metadata
  };
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var format_is_object = function is_object(_) {
  return format_typeof(_) === 'object';
};
//# sourceMappingURL=format.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/format.js




function format_format() {
	return withMetadata(es6_format_formatNumber, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/getNumberType.js
function getNumberType_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getNumberType_typeof = function _typeof(obj) { return typeof obj; }; } else { getNumberType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getNumberType_typeof(obj); }

function getNumberType_slicedToArray(arr, i) { return getNumberType_arrayWithHoles(arr) || getNumberType_iterableToArrayLimit(arr, i) || getNumberType_nonIterableRest(); }

function getNumberType_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function getNumberType_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function getNumberType_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // Finds out national phone number type (fixed line, mobile, etc)

function getNumberType_getNumberType() {
  var _normalizeArguments = getNumberType_normalizeArguments(arguments),
      input = _normalizeArguments.input,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return getNumberType(input, options, metadata);
} // Sort out arguments

function getNumberType_normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = getNumberType_slicedToArray(_Array$prototype$slic, 4),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3];

  var input;
  var options = {};
  var metadata; // If the phone number is passed as a string.
  // `getNumberType('88005553535', ...)`.

  if (typeof arg_1 === 'string') {
    // If "default country" argument is being passed
    // then convert it to an `options` object.
    // `getNumberType('88005553535', 'RU', metadata)`.
    if (getNumberType_typeof(arg_2) !== 'object') {
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        metadata = arg_3;
      } // `parse` extracts phone numbers from raw text,
      // therefore it will cut off all "garbage" characters,
      // while this `validate` function needs to verify
      // that the phone number contains no "garbage"
      // therefore the explicit `isViablePhoneNumber` check.


      if (isViablePhoneNumber(arg_1)) {
        input = parse(arg_1, {
          defaultCountry: arg_2
        }, metadata);
      } else {
        input = {};
      }
    } // No "resrict country" argument is being passed.
    // International phone number is passed.
    // `getNumberType('+78005553535', metadata)`.
    else {
        if (arg_3) {
          options = arg_2;
          metadata = arg_3;
        } else {
          metadata = arg_2;
        } // `parse` extracts phone numbers from raw text,
        // therefore it will cut off all "garbage" characters,
        // while this `validate` function needs to verify
        // that the phone number contains no "garbage"
        // therefore the explicit `isViablePhoneNumber` check.


        if (isViablePhoneNumber(arg_1)) {
          input = parse(arg_1, undefined, metadata);
        } else {
          input = {};
        }
      }
  } // If the phone number is passed as a parsed phone number.
  // `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
  else if (getNumberType_is_object(arg_1)) {
      input = arg_1;

      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');

  return {
    input: input,
    options: options,
    metadata: metadata
  };
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var getNumberType_is_object = function is_object(_) {
  return getNumberType_typeof(_) === 'object';
};
//# sourceMappingURL=getNumberType.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/getNumberType.js




function index_es6_exports_getNumberType_getNumberType() {
	return withMetadata(getNumberType_getNumberType, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isPossibleNumber.js


/**
 * Checks if a given phone number is possible.
 * Which means it only checks phone number length
 * and doesn't test any regular expressions.
 *
 * Examples:
 *
 * ```js
 * isPossibleNumber('+78005553535', metadata)
 * isPossibleNumber('8005553535', 'RU', metadata)
 * isPossibleNumber('88005553535', 'RU', metadata)
 * isPossibleNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

function isPossibleNumber_isPossibleNumber() {
  var _normalizeArguments = getNumberType_normalizeArguments(arguments),
      input = _normalizeArguments.input,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return isPossiblePhoneNumber(input, options, metadata);
}
//# sourceMappingURL=isPossibleNumber.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/isPossibleNumber.js
// Deprecated.





function index_es6_exports_isPossibleNumber_isPossibleNumber() {
	return withMetadata(isPossibleNumber_isPossibleNumber, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/validate.js

 // Finds out national phone number type (fixed line, mobile, etc)

function validate_isValidNumber() {
  var _normalizeArguments = getNumberType_normalizeArguments(arguments),
      input = _normalizeArguments.input,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return isValidNumber(input, options, metadata);
}
//# sourceMappingURL=validate.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/isValidNumber.js
// Deprecated.





function isValidNumber_isValidNumber() {
	return withMetadata(validate_isValidNumber, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isValidNumberForRegion_.js

/**
 * Checks if a given phone number is valid within a given region.
 * Is just an alias for `phoneNumber.isValid() && phoneNumber.country === country`.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 */

function isValidNumberForRegion(input, country, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  return input.country === country && isValidNumber(input, options, metadata);
}
//# sourceMappingURL=isValidNumberForRegion_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isValidNumberForRegion.js



function isValidNumberForRegion_isValidNumberForRegion(number, country, metadata) {
  if (typeof number !== 'string') {
    throw new TypeError('number must be a string');
  }

  if (typeof country !== 'string') {
    throw new TypeError('country must be a string');
  } // `parse` extracts phone numbers from raw text,
  // therefore it will cut off all "garbage" characters,
  // while this `validate` function needs to verify
  // that the phone number contains no "garbage"
  // therefore the explicit `isViablePhoneNumber` check.


  var input;

  if (isViablePhoneNumber(number)) {
    input = parse(number, {
      defaultCountry: country
    }, metadata);
  } else {
    input = {};
  }

  return isValidNumberForRegion(input, country, undefined, metadata);
}
//# sourceMappingURL=isValidNumberForRegion.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/isValidNumberForRegion.js




function index_es6_exports_isValidNumberForRegion_isValidNumberForRegion() {
	return withMetadata(isValidNumberForRegion_isValidNumberForRegion, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findPhoneNumbers_.js
function findPhoneNumbers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findPhoneNumbers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function findPhoneNumbers_createClass(Constructor, protoProps, staticProps) { if (protoProps) findPhoneNumbers_defineProperties(Constructor.prototype, protoProps); if (staticProps) findPhoneNumbers_defineProperties(Constructor, staticProps); return Constructor; }

function findPhoneNumbers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is a legacy function.
// Use `findNumbers()` instead.







/**
 * Regexp of all possible ways to write extensions, for use when parsing. This
 * will be run as a case-insensitive regexp match. Wide character versions are
 * also provided after each ASCII version. There are three regular expressions
 * here. The first covers RFC 3966 format, where the extension is added using
 * ';ext='. The second more generic one starts with optional white space and
 * ends with an optional full stop (.), followed by zero or more spaces/tabs
 * /commas and then the numbers themselves. The other one covers the special
 * case of American numbers where the extension is written with a hash at the
 * end, such as '- 503#'. Note that the only capturing groups should be around
 * the digits that you want to capture as part of the extension, or else parsing
 * will fail! We allow two options for representing the accented o - the
 * character itself, and one in the unicode decomposed form with the combining
 * acute accent.
 */

var EXTN_PATTERNS_FOR_PARSING = createExtensionPattern('parsing');
var WHITESPACE_IN_THE_BEGINNING_PATTERN = new RegExp('^[' + WHITESPACE + ']+');
var PUNCTUATION_IN_THE_END_PATTERN = new RegExp('[' + VALID_PUNCTUATION + ']+$'); // // Regular expression for getting opening brackets for a valid number
// // found using `PHONE_NUMBER_START_PATTERN` for prepending those brackets to the number.
// const BEFORE_NUMBER_DIGITS_PUNCTUATION = new RegExp('[' + OPENING_BRACKETS + ']+' + '[' + WHITESPACE + ']*' + '$')

var VALID_PRECEDING_CHARACTER_PATTERN = /[^a-zA-Z0-9]/;
function findPhoneNumbers(text, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  var search = new findPhoneNumbers_PhoneNumberSearch(text, options, metadata);
  var phones = [];

  while (search.hasNext()) {
    phones.push(search.next());
  }

  return phones;
}
/**
 * @return ES6 `for ... of` iterator.
 */

function searchPhoneNumbers(text, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  var search = new findPhoneNumbers_PhoneNumberSearch(text, options, metadata);
  return findPhoneNumbers_defineProperty({}, Symbol.iterator, function () {
    return {
      next: function next() {
        if (search.hasNext()) {
          return {
            done: false,
            value: search.next()
          };
        }

        return {
          done: true
        };
      }
    };
  });
}
/**
 * Extracts a parseable phone number including any opening brackets, etc.
 * @param  {string} text - Input.
 * @return {object} `{ ?number, ?startsAt, ?endsAt }`.
 */

var findPhoneNumbers_PhoneNumberSearch =
/*#__PURE__*/
function () {
  // Iteration tristate.
  function PhoneNumberSearch(text, options, metadata) {
    findPhoneNumbers_classCallCheck(this, PhoneNumberSearch);

    findPhoneNumbers_defineProperty(this, "state", 'NOT_READY');

    this.text = text; // If assigning the `{}` default value is moved to the arguments above,
    // code coverage would decrease for some weird reason.

    this.options = options || {};
    this.metadata = metadata;
    this.regexp = new RegExp(VALID_PHONE_NUMBER_WITH_EXTENSION, 'ig');
  }

  findPhoneNumbers_createClass(PhoneNumberSearch, [{
    key: "find",
    value: function find() {
      var matches = this.regexp.exec(this.text);

      if (!matches) {
        return;
      }

      var number = matches[0];
      var startsAt = matches.index;
      number = number.replace(WHITESPACE_IN_THE_BEGINNING_PATTERN, '');
      startsAt += matches[0].length - number.length; // Fixes not parsing numbers with whitespace in the end.
      // Also fixes not parsing numbers with opening parentheses in the end.
      // https://github.com/catamphetamine/libphonenumber-js/issues/252

      number = number.replace(PUNCTUATION_IN_THE_END_PATTERN, '');
      number = parsePreCandidate(number);
      var result = this.parseCandidate(number, startsAt);

      if (result) {
        return result;
      } // Tail recursion.
      // Try the next one if this one is not a valid phone number.


      return this.find();
    }
  }, {
    key: "parseCandidate",
    value: function parseCandidate(number, startsAt) {
      if (!isValidPreCandidate(number, startsAt, this.text)) {
        return;
      } // Don't parse phone numbers which are non-phone numbers
      // due to being part of something else (e.g. a UUID).
      // https://github.com/catamphetamine/libphonenumber-js/issues/213
      // Copy-pasted from Google's `PhoneNumberMatcher.js` (`.parseAndValidate()`).


      if (!isValidCandidate(number, startsAt, this.text, this.options.extended ? 'POSSIBLE' : 'VALID')) {
        return;
      } // // Prepend any opening brackets left behind by the
      // // `PHONE_NUMBER_START_PATTERN` regexp.
      // const text_before_number = text.slice(this.searching_from, startsAt)
      // const full_number_starts_at = text_before_number.search(BEFORE_NUMBER_DIGITS_PUNCTUATION)
      // if (full_number_starts_at >= 0)
      // {
      // 	number   = text_before_number.slice(full_number_starts_at) + number
      // 	startsAt = full_number_starts_at
      // }
      //
      // this.searching_from = matches.lastIndex


      var result = parse(number, this.options, this.metadata);

      if (!result.phone) {
        return;
      }

      result.startsAt = startsAt;
      result.endsAt = startsAt + number.length;
      return result;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === 'NOT_READY') {
        this.last_match = this.find();

        if (this.last_match) {
          this.state = 'READY';
        } else {
          this.state = 'DONE';
        }
      }

      return this.state === 'READY';
    }
  }, {
    key: "next",
    value: function next() {
      // Check the state and find the next match as a side-effect if necessary.
      if (!this.hasNext()) {
        throw new Error('No next element');
      } // Don't retain that memory any longer than necessary.


      var result = this.last_match;
      this.last_match = null;
      this.state = 'NOT_READY';
      return result;
    }
  }]);

  return PhoneNumberSearch;
}();
//# sourceMappingURL=findPhoneNumbers_.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/findPhoneNumbers.js
// This is a legacy function.
// Use `findNumbers()` instead.


function findPhoneNumbers_findPhoneNumbers() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return findPhoneNumbers(text, options, metadata);
}
/**
 * @return ES6 `for ... of` iterator.
 */

function findPhoneNumbers_searchPhoneNumbers() {
  var _normalizeArguments2 = normalizeArguments(arguments),
      text = _normalizeArguments2.text,
      options = _normalizeArguments2.options,
      metadata = _normalizeArguments2.metadata;

  return searchPhoneNumbers(text, options, metadata);
}
//# sourceMappingURL=findPhoneNumbers.js.map
// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/findPhoneNumbers.js




function index_es6_exports_findPhoneNumbers_findPhoneNumbers() {
	return withMetadata(findPhoneNumbers_findPhoneNumbers, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/searchPhoneNumbers.js




function searchPhoneNumbers_searchPhoneNumbers() {
	return withMetadata(findPhoneNumbers_searchPhoneNumbers, arguments)
}

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.exports/PhoneNumberSearch.js




function PhoneNumberSearch_PhoneNumberSearch(text, options) {
	findPhoneNumbers_PhoneNumberSearch.call(this, text, options, min_metadata)
}

// Deprecated.
PhoneNumberSearch_PhoneNumberSearch.prototype = Object.create(findPhoneNumbers_PhoneNumberSearch.prototype, {})
PhoneNumberSearch_PhoneNumberSearch.prototype.constructor = PhoneNumberSearch_PhoneNumberSearch

// CONCATENATED MODULE: ./node_modules/libphonenumber-js/index.es6.js
// `parsePhoneNumber()` named export has been renamed to `parsePhoneNumberWithError()`.

// `parsePhoneNumberFromString()` named export is now considered legacy:
// it has been promoted to a default export due to being too verbose.





// Deprecated.

// Deprecated.











// `getPhoneCode` name is deprecated, use `getCountryCallingCode` instead.










// Deprecated (old) exports.










// Deprecated DIGITS export.
// (it was used in `react-phone-number-input`)


// Deprecated "custom" exports.











/***/ }),

/***/ "493f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e4e6");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBadge_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4fe2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NitrozenUuid = () => {
  return Math.random().toString(36).slice(4);
};

/* harmony default export */ __webpack_exports__["a"] = (NitrozenUuid);

/***/ }),

/***/ "572c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NListingOptions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9370");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NListingOptions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NListingOptions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "579b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInline/NInline.vue?vue&type=template&id=65d43b41&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({staticClass:"nitrozen-inline-svg",domProps:{"innerHTML":_vm._s(_vm.getSVG)}},_vm.$listeners))}
var staticRenderFns = []


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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NInline/NInline.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NInline_NInlinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInline = (component.exports);
// CONCATENATED MODULE: ./src/components/NInline/index.js

/* harmony default export */ var components_NInline = __webpack_exports__["a"] = (NInline);

/***/ }),

/***/ "5de3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5e4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBtn/NBtnContent.vue?vue&type=template&id=c3c0d46a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"n-button-content",class:{'disable-click':_vm.showProgress}},[(_vm.icon)?_c('div',{staticClass:"social-icon"},[(_vm.icon == 'facebook')?_c('img',{attrs:{"src":__webpack_require__("d553")}}):_vm._e()]):_vm._e(),(!_vm.showProgress)?_vm._t("default"):_vm._e(),(_vm.showProgress)?_c('div',{staticClass:"n-btn-spin"},[_c('img',{staticClass:"n-btn-spinner",staticStyle:{"width":"50px"},attrs:{"src":"https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif"}})]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NBtn/NBtnContent.vue?vue&type=template&id=c3c0d46a&

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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NBtn/NBtnContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NBtn_NBtnContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NBtnContent = (component.exports);
// EXTERNAL MODULE: ./src/directives/NStrokeBtn.js
var NStrokeBtn = __webpack_require__("9929");

// EXTERNAL MODULE: ./src/directives/NFlatBtn.js
var NFlatBtn = __webpack_require__("6477");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBtn/NBtn.vue?vue&type=script&lang=js&



/* harmony default export */ var NBtnvue_type_script_lang_js_ = ({
  name: 'nitrozen-button',
  components: {
    NButtonContent: NBtnContent
  },
  directives: {
    strokeBtn: NStrokeBtn["a" /* default */],
    flatBtn: NFlatBtn["a" /* default */]
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

var NBtn_component = Object(componentNormalizer["a" /* default */])(
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

/* harmony default export */ var components_NBtn = __webpack_exports__["a"] = (NBtn);

/***/ }),

/***/ "5fa7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6402":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6477":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

const flatBtn = vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('flat-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-flat-button');

    if (vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-flat-button-secondary');
    } else {
      el.classList.add('n-flat-button-primary');
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(flatBtn); // bind
// inserted
// update
// componentUpdated
// unbind

/* harmony default export */ __webpack_exports__["a"] = (flatBtn);

/***/ }),

/***/ "6eb4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d83");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTabItem_vue_vue_type_style_index_0_id_cfd6b808_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "71be":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* globals define,module */
/*
Using a Universal Module Loader that should be browser, require, and AMD friendly
http://ricostacruz.com/cheatsheets/umdjs.html
*/
;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
  "use strict";
  /* globals console:false */

  if ( ! Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
  }

  /**
   * Return an array that contains no duplicates (original not modified)
   * @param  {array} array   Original reference array
   * @return {array}         New array with no duplicates
   */
  function arrayUnique(array) {
    var a = [];
    for (var i=0, l=array.length; i<l; i++) {
      if (a.indexOf(array[i]) === -1) {
        a.push(array[i]);
      }
    }
    return a;
  }

  var jsonLogic = {};
  var operations = {
    "==": function(a, b) {
      return a == b;
    },
    "===": function(a, b) {
      return a === b;
    },
    "!=": function(a, b) {
      return a != b;
    },
    "!==": function(a, b) {
      return a !== b;
    },
    ">": function(a, b) {
      return a > b;
    },
    ">=": function(a, b) {
      return a >= b;
    },
    "<": function(a, b, c) {
      return (c === undefined) ? a < b : (a < b) && (b < c);
    },
    "<=": function(a, b, c) {
      return (c === undefined) ? a <= b : (a <= b) && (b <= c);
    },
    "!!": function(a) {
      return jsonLogic.truthy(a);
    },
    "!": function(a) {
      return !jsonLogic.truthy(a);
    },
    "%": function(a, b) {
      return a % b;
    },
    "log": function(a) {
      console.log(a); return a;
    },
    "in": function(a, b) {
      if (!b || typeof b.indexOf === "undefined") return false;
      return (b.indexOf(a) !== -1);
    },
    "cat": function() {
      return Array.prototype.join.call(arguments, "");
    },
    "substr": function(source, start, end) {
      if (end < 0) {
        // JavaScript doesn't support negative end, this emulates PHP behavior
        var temp = String(source).substr(start);
        return temp.substr(0, temp.length + end);
      }
      return String(source).substr(start, end);
    },
    "+": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return parseFloat(a, 10) + parseFloat(b, 10);
      }, 0);
    },
    "*": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return parseFloat(a, 10) * parseFloat(b, 10);
      });
    },
    "-": function(a, b) {
      if (b === undefined) {
        return -a;
      } else {
        return a - b;
      }
    },
    "/": function(a, b) {
      return a / b;
    },
    "min": function() {
      return Math.min.apply(this, arguments);
    },
    "max": function() {
      return Math.max.apply(this, arguments);
    },
    "merge": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return a.concat(b);
      }, []);
    },
    "var": function(a, b) {
      var not_found = (b === undefined) ? null : b;
      var data = this;
      if (typeof a === "undefined" || a==="" || a===null) {
        return data;
      }
      var sub_props = String(a).split(".");
      for (var i = 0; i < sub_props.length; i++) {
        if (data === null || data === undefined) {
          return not_found;
        }
        // Descending into data
        data = data[sub_props[i]];
        if (data === undefined) {
          return not_found;
        }
      }
      return data;
    },
    "missing": function() {
      /*
      Missing can receive many keys as many arguments, like {"missing:[1,2]}
      Missing can also receive *one* argument that is an array of keys,
      which typically happens if it's actually acting on the output of another command
      (like 'if' or 'merge')
      */

      var missing = [];
      var keys = Array.isArray(arguments[0]) ? arguments[0] : arguments;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = jsonLogic.apply({"var": key}, this);
        if (value === null || value === "") {
          missing.push(key);
        }
      }

      return missing;
    },
    "missing_some": function(need_count, options) {
      // missing_some takes two arguments, how many (minimum) items must be present, and an array of keys (just like 'missing') to check for presence.
      var are_missing = jsonLogic.apply({"missing": options}, this);

      if (options.length - are_missing.length >= need_count) {
        return [];
      } else {
        return are_missing;
      }
    },
  };

  jsonLogic.is_logic = function(logic) {
    return (
      typeof logic === "object" && // An object
      logic !== null && // but not null
      ! Array.isArray(logic) && // and not an array
      Object.keys(logic).length === 1 // with exactly one key
    );
  };

  /*
  This helper will defer to the JsonLogic spec as a tie-breaker when different language interpreters define different behavior for the truthiness of primitives.  E.g., PHP considers empty arrays to be falsy, but Javascript considers them to be truthy. JsonLogic, as an ecosystem, needs one consistent answer.

  Spec and rationale here: http://jsonlogic.com/truthy
  */
  jsonLogic.truthy = function(value) {
    if (Array.isArray(value) && value.length === 0) {
      return false;
    }
    return !! value;
  };


  jsonLogic.get_operator = function(logic) {
    return Object.keys(logic)[0];
  };

  jsonLogic.get_values = function(logic) {
    return logic[jsonLogic.get_operator(logic)];
  };

  jsonLogic.apply = function(logic, data) {
    // Does this array contain logic? Only one way to find out.
    if (Array.isArray(logic)) {
      return logic.map(function(l) {
        return jsonLogic.apply(l, data);
      });
    }
    // You've recursed to a primitive, stop!
    if ( ! jsonLogic.is_logic(logic) ) {
      return logic;
    }

    var op = jsonLogic.get_operator(logic);
    var values = logic[op];
    var i;
    var current;
    var scopedLogic;
    var scopedData;
    var filtered;
    var initial;

    // easy syntax for unary operators, like {"var" : "x"} instead of strict {"var" : ["x"]}
    if ( ! Array.isArray(values)) {
      values = [values];
    }

    // 'if', 'and', and 'or' violate the normal rule of depth-first calculating consequents, let each manage recursion as needed.
    if (op === "if" || op == "?:") {
      /* 'if' should be called with a odd number of parameters, 3 or greater
      This works on the pattern:
      if( 0 ){ 1 }else{ 2 };
      if( 0 ){ 1 }else if( 2 ){ 3 }else{ 4 };
      if( 0 ){ 1 }else if( 2 ){ 3 }else if( 4 ){ 5 }else{ 6 };

      The implementation is:
      For pairs of values (0,1 then 2,3 then 4,5 etc)
      If the first evaluates truthy, evaluate and return the second
      If the first evaluates falsy, jump to the next pair (e.g, 0,1 to 2,3)
      given one parameter, evaluate and return it. (it's an Else and all the If/ElseIf were false)
      given 0 parameters, return NULL (not great practice, but there was no Else)
      */
      for (i = 0; i < values.length - 1; i += 2) {
        if ( jsonLogic.truthy( jsonLogic.apply(values[i], data) ) ) {
          return jsonLogic.apply(values[i+1], data);
        }
      }
      if (values.length === i+1) {
        return jsonLogic.apply(values[i], data);
      }
      return null;
    } else if (op === "and") { // Return first falsy, or last
      for (i=0; i < values.length; i+=1) {
        current = jsonLogic.apply(values[i], data);
        if ( ! jsonLogic.truthy(current)) {
          return current;
        }
      }
      return current; // Last
    } else if (op === "or") {// Return first truthy, or last
      for (i=0; i < values.length; i+=1) {
        current = jsonLogic.apply(values[i], data);
        if ( jsonLogic.truthy(current) ) {
          return current;
        }
      }
      return current; // Last
    } else if (op === "filter") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData)) {
        return [];
      }
      // Return only the elements from the array in the first argument,
      // that return truthy when passed to the logic in the second argument.
      // For parity with JavaScript, reindex the returned array
      return scopedData.filter(function(datum) {
        return jsonLogic.truthy( jsonLogic.apply(scopedLogic, datum));
      });
    } else if (op === "map") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData)) {
        return [];
      }

      return scopedData.map(function(datum) {
        return jsonLogic.apply(scopedLogic, datum);
      });
    } else if (op === "reduce") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];
      initial = typeof values[2] !== "undefined" ? values[2] : null;

      if ( ! Array.isArray(scopedData)) {
        return initial;
      }

      return scopedData.reduce(
        function(accumulator, current) {
          return jsonLogic.apply(
            scopedLogic,
            {current: current, accumulator: accumulator}
          );
        },
        initial
      );
    } else if (op === "all") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];
      // All of an empty set is false. Note, some and none have correct fallback after the for loop
      if ( ! scopedData.length) {
        return false;
      }
      for (i=0; i < scopedData.length; i+=1) {
        if ( ! jsonLogic.truthy( jsonLogic.apply(scopedLogic, scopedData[i]) )) {
          return false; // First falsy, short circuit
        }
      }
      return true; // All were truthy
    } else if (op === "none") {
      filtered = jsonLogic.apply({filter: values}, data);
      return filtered.length === 0;
    } else if (op === "some") {
      filtered = jsonLogic.apply({filter: values}, data);
      return filtered.length > 0;
    }

    // Everyone else gets immediate depth-first recursion
    values = values.map(function(val) {
      return jsonLogic.apply(val, data);
    });


    // The operation is called with "data" bound to its "this" and "values" passed as arguments.
    // Structured commands like % or > can name formal arguments while flexible commands (like missing or merge) can operate on the pseudo-array arguments
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    if (operations.hasOwnProperty(op) && typeof operations[op] === "function") {
      return operations[op].apply(data, values);
    } else if (op.indexOf(".") > 0) { // Contains a dot, and not in the 0th position
      var sub_ops = String(op).split(".");
      var operation = operations;
      for (i = 0; i < sub_ops.length; i++) {

        if (!operation.hasOwnProperty(sub_ops[i])) {
          throw new Error("Unrecognized operation " + op +
            " (failed at " + sub_ops.slice(0, i+1).join(".") + ")");
        }
        // Descending into operations
        operation = operation[sub_ops[i]];
      }

      return operation.apply(data, values);
    }

    throw new Error("Unrecognized operation " + op );
  };

  jsonLogic.uses_data = function(logic) {
    var collection = [];

    if (jsonLogic.is_logic(logic)) {
      var op = jsonLogic.get_operator(logic);
      var values = logic[op];

      if ( ! Array.isArray(values)) {
        values = [values];
      }

      if (op === "var") {
        // This doesn't cover the case where the arg to var is itself a rule.
        collection.push(values[0]);
      } else {
        // Recursion!
        values.map(function(val) {
          collection.push.apply(collection, jsonLogic.uses_data(val) );
        });
      }
    }

    return arrayUnique(collection);
  };

  jsonLogic.add_operation = function(name, code) {
    operations[name] = code;
  };

  jsonLogic.rm_operation = function(name) {
    delete operations[name];
  };

  jsonLogic.rule_like = function(rule, pattern) {
    // console.log("Is ". JSON.stringify(rule) . " like " . JSON.stringify(pattern) . "?");
    if (pattern === rule) {
      return true;
    } // TODO : Deep object equivalency?
    if (pattern === "@") {
      return true;
    } // Wildcard!
    if (pattern === "number") {
      return (typeof rule === "number");
    }
    if (pattern === "string") {
      return (typeof rule === "string");
    }
    if (pattern === "array") {
      // !logic test might be superfluous in JavaScript
      return Array.isArray(rule) && ! jsonLogic.is_logic(rule);
    }

    if (jsonLogic.is_logic(pattern)) {
      if (jsonLogic.is_logic(rule)) {
        var pattern_op = jsonLogic.get_operator(pattern);
        var rule_op = jsonLogic.get_operator(rule);

        if (pattern_op === "@" || pattern_op === rule_op) {
          // echo "\nOperators match, go deeper\n";
          return jsonLogic.rule_like(
            jsonLogic.get_values(rule, false),
            jsonLogic.get_values(pattern, false)
          );
        }
      }
      return false; // pattern is logic, rule isn't, can't be eq
    }

    if (Array.isArray(pattern)) {
      if (Array.isArray(rule)) {
        if (pattern.length !== rule.length) {
          return false;
        }
        /*
          Note, array order MATTERS, because we're using this array test logic to consider arguments, where order can matter. (e.g., + is commutative, but '-' or 'if' or 'var' are NOT)
        */
        for (var i = 0; i < pattern.length; i += 1) {
          // If any fail, we fail
          if ( ! jsonLogic.rule_like(rule[i], pattern[i])) {
            return false;
          }
        }
        return true; // If they *all* passed, we pass
      } else {
        return false; // Pattern is array, rule isn't
      }
    }

    // Not logic, not array, not a === match for rule.
    return false;
  };

  return jsonLogic;
}));


/***/ }),

/***/ "7be4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8201":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "898b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("93b5");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInline_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8eba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8201");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtnContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "90ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7be4");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9370":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "93b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "95b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTooltip/NTooltip.vue?vue&type=template&id=1d649a4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-tooltip"},[_c('nitrozen-inline',{attrs:{"icon":_vm.icon}}),_c('span',{staticClass:"nitrozen-tooltiptext",class:_vm.tooltipPositionClass},[(_vm.tooltipText)?[_vm._v(_vm._s(_vm.tooltipText))]:[_vm._t("default")]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTooltip/NTooltip.vue?vue&type=template&id=1d649a4e&

// EXTERNAL MODULE: ./src/components/NInline/index.js + 5 modules
var NInline = __webpack_require__("579b");

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
    "nitrozen-inline": NInline["a" /* default */]
  },
  props: {
    position: {
      type: String,
      default: "bottom"
    },
    tooltipText: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "info"
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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NTooltip/NTooltip.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NTooltip_NTooltipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NTooltip = (component.exports);
// CONCATENATED MODULE: ./src/components/NTooltip/index.js

/* harmony default export */ var components_NTooltip = __webpack_exports__["a"] = (NTooltip);

/***/ }),

/***/ "9771":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c84c");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9929":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

const strokeBtn = vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('stroke-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-button-stroke');

    if (vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    } else {
      el.classList.add('n-button-stroke-primary');
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(strokeBtn); // bind
// inserted
// update
// componentUpdated
// unbind

/* harmony default export */ __webpack_exports__["a"] = (strokeBtn);

/***/ }),

/***/ "9cd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NToggleBtn/NToggleBtn.vue?vue&type=template&id=6e43a86e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-toggle-container"},[_c('label',{staticClass:"nitrozen-switch"},[_c('input',{attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.value,"value":_vm.value},on:{"change":_vm.change}}),_c('span',{staticClass:"nitrozen-slider nitrozen-round",class:{ 'nitrozen-disabled': _vm.disabled }})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NToggleBtn/NToggleBtn.vue?vue&type=template&id=6e43a86e&

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
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },

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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NToggleBtn/NToggleBtn.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NToggleBtn_NToggleBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NToggleBtn = (component.exports);
// CONCATENATED MODULE: ./src/components/NToggleBtn/index.js

/* harmony default export */ var components_NToggleBtn = __webpack_exports__["a"] = (NToggleBtn);

/***/ }),

/***/ "a07a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInput.vue?vue&type=template&id=fe4a82fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-form-input"},[_c('div',{staticClass:"n-input-label-container"},[(_vm.label)?_c('label',{staticClass:"n-input-label",attrs:{"for":_vm.id}},[_vm._v(" "+_vm._s(_vm.label)+" "+_vm._s(_vm.required ? ' *' : '')+" "),(_vm.showTooltip)?_c('span',{staticClass:"nitrozen-tooltip-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":_vm.tooltipText,"position":"top"}})],1):_vm._e()]):_vm._e(),(_vm.maxlength)?_c('label',{staticClass:"n-input-label n-input-maxlength"},[_vm._v(_vm._s(_vm.length)+"/"+_vm._s(_vm.maxlength))]):_vm._e()]),(_vm.loaderShow && _vm.search)?_c('span',{staticClass:"nitrozen-loader-div"},[_c('img',{attrs:{"src":__webpack_require__("fa5e")}})]):_vm._e(),_c('div',{staticClass:"nitrozen-input-grp"},[(_vm.showSearchIcon)?_c('span',{staticClass:"nitrozen-search-icon"},[_c('nitrozen-inline',{attrs:{"icon":'search'}})],1):_vm._e(),(_vm.showPrefix)?_c('nitrozen-input-prefix',{staticClass:"nitrozen-input-prefix nitrozen-remove-right-border",class:{ 'nitrozen-prefix-padding': !_vm.custom }},[(_vm.custom)?_c('span',[_vm._t("default")],2):_c('span',[_vm._v(_vm._s(_vm.prefix))])]):_vm._e(),(_vm.type != 'textarea')?_c('input',{ref:_vm.id,staticClass:"n-input input-text",class:{
        'nitrozen-search-input-padding': _vm.showSearchIcon,
        'nitrozen-remove-left-border': _vm.showPrefix,
        'nitrozen-remove-right-border': _vm.showSuffix,
      },attrs:{"min":_vm.min,"max":_vm.max,"maxlength":_vm.maxlength,"type":_vm.type,"placeholder":_vm.placeholder,"autocomplete":_vm.autocomplete,"id":_vm.id,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.eventEmit($event, 'keyup')},"change":function($event){return _vm.eventEmit($event, 'change')},"blur":function($event){return _vm.eventEmit($event, 'blur')},"focus":function($event){return _vm.eventEmit($event, 'focus')},"click":function($event){return _vm.eventEmit($event, 'click')},"keypress":function($event){return _vm.eventEmit($event, 'keypress')},"input":_vm.valueChange}}):_vm._e(),(_vm.type == 'textarea')?_c('textarea',{ref:_vm.id,staticClass:"n-input input-text",class:{ 'n-input-textarea': _vm.type == 'textarea' },attrs:{"maxlength":_vm.maxlength,"disabled":_vm.disabled,"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.eventEmit($event, 'keyup')},"change":function($event){return _vm.eventEmit($event, 'change')},"blur":function($event){return _vm.eventEmit($event, 'blur')},"focus":function($event){return _vm.eventEmit($event, 'focus')},"click":function($event){return _vm.eventEmit($event, 'click')},"keypress":function($event){return _vm.eventEmit($event, 'keypress')},"input":_vm.valueChange}}):_vm._e(),(_vm.showSuffix)?_c('nitrozen-input-suffix',{staticClass:"nitrozen-input-suffix nitrozen-remove-left-border",class:{ 'nitrozen-suffix-padding': !_vm.custom }},[(_vm.custom)?_c('span',[_vm._t("default")],2):_c('span',[_vm._v(_vm._s(_vm.suffix))])]):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NInput/NInput.vue?vue&type=template&id=fe4a82fe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputPrefix.vue?vue&type=template&id=0872c97f&
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NInput/NInputPrefix.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NInput_NInputPrefixvue_type_script_lang_js_,
  NInputPrefixvue_type_template_id_0872c97f_render,
  NInputPrefixvue_type_template_id_0872c97f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInputPrefix = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NInput/NInputSuffix.vue?vue&type=template&id=98c548c2&
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

var NInputSuffix_component = Object(componentNormalizer["a" /* default */])(
  NInput_NInputSuffixvue_type_script_lang_js_,
  NInputSuffixvue_type_template_id_98c548c2_render,
  NInputSuffixvue_type_template_id_98c548c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInputSuffix = (NInputSuffix_component.exports);
// EXTERNAL MODULE: ./src/components/NTooltip/index.js + 5 modules
var NTooltip = __webpack_require__("95b9");

// EXTERNAL MODULE: ./src/components/NInline/index.js + 5 modules
var NInline = __webpack_require__("579b");

// EXTERNAL MODULE: ./src/utils/NUuid.js
var NUuid = __webpack_require__("4fe2");

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
//
//
//
//
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
  name: 'nitrozen-input',
  components: {
    'nitrozen-input-prefix': NInputPrefix,
    'nitrozen-input-suffix': NInputSuffix,
    'nitrozen-tooltip': NTooltip["a" /* default */],
    'nitrozen-inline': NInline["a" /* default */]
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
    autocomplete: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ''
    },
    showError: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ''
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
      default: ''
    },
    id: {
      type: [Number, String],
      default: () => 'nitrozen-input' + Object(NUuid["a" /* default */])()
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
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    }
  },
  watch: {
    autofocus() {
      if (this.autofocus) {
        this.$refs[this.id].focus();
      }
    }

  },

  mounted() {
    if (this.autofocus) {
      this.$refs[this.id].focus();
    }
  },

  methods: {
    valueChange: function (event) {
      let value = event.target.value;

      if (this.type === 'number') {
        value = Number(event.target.value);
      }

      this.$emit('input', value);

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

var NInput_component = Object(componentNormalizer["a" /* default */])(
  NInput_NInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NInput = __webpack_exports__["a"] = (NInput_component.exports);

/***/ }),

/***/ "b038":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b224":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c7fd");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTooltip_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b2a1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b2f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6402");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NRadio_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b67f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b2a1");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDropdown_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bbf3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bd98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5de3");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTab_vue_vue_type_style_index_0_id_2c61829c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c2a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5fa7");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NToggleBtn_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c394":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCustomForm/NCustomForm.vue?vue&type=template&id=386a6270&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-custom-form"},[_vm._l((_vm.inputs),function(input,index){return [(!input.hidden)?_c('nitrozen-custom-form-input',{key:index,ref:input.key,refInFor:true,attrs:{"input":input},on:{"change":function($event){return _vm.inputChanged(input, $event)}},model:{value:(_vm.value[input.key]),callback:function ($$v) {_vm.$set(_vm.value, input.key, $$v)},expression:"value[input.key]"}}):_vm._e()]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomForm.vue?vue&type=template&id=386a6270&

// EXTERNAL MODULE: ./node_modules/json-logic-js/logic.js
var logic = __webpack_require__("71be");
var logic_default = /*#__PURE__*/__webpack_require__.n(logic);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCustomForm/NCustomFormInput.vue?vue&type=template&id=bbdaa70e&scoped=true&
var NCustomFormInputvue_type_template_id_bbdaa70e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-custom-form-input"},[(!_vm.validateInput(_vm.input))?[_c('div',{staticClass:"invalid-input"},[_vm._v("INVALID INPUT")])]:(['text', 'textarea', 'email', 'number'].includes(_vm.input.type))?[_c('nitrozen-input',{attrs:{"type":_vm.input.type,"label":_vm.input.display,"placeholder":_vm.input.placeholder,"required":_vm.input.required,"tooltipText":_vm.input.tooltip,"showTooltip":_vm.input.tooltip != undefined,"disabled":_vm.input.disabled,"minlength":_vm.input.min_length,"maxlength":_vm.input.max_length,"min":_vm.input.min,"max":_vm.input.max},on:{"blur":_vm.willMoveToNext},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}})]:(_vm.input.type == _vm.InputTypes.toggle.key)?[_c('div',{staticClass:"toggle-input"},[_c('span',{staticClass:"n-input-label"},[_vm._v(_vm._s(_vm.titleFor(_vm.input)))]),_c('nitrozen-toggle',{staticStyle:{"margin-right":"-10px"},attrs:{"disabled":_vm.input.disabled},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}})],1)]:(_vm.input.type == _vm.InputTypes.mobile.key)?[_c('span',{staticClass:"n-input-label"},[_vm._v(_vm._s(_vm.titleFor(_vm.input)))]),_c('vue-tel-input',{staticClass:"n-input mobile-input",attrs:{"disabledFormatting":"","enabledCountryCode":"","onlyCountries":['IN'],"required":_vm.input.required,"autocomplete":"off","mode":"international","placeholder":_vm.input.placeholder,"disabled":_vm.input.disabled},on:{"input":_vm.inputChanged,"blur":_vm.willMoveToNext},model:{value:(_vm.formInputValue.number),callback:function ($$v) {_vm.$set(_vm.formInputValue, "number", $$v)},expression:"formInputValue.number"}})]:(
      _vm.input.type == _vm.InputTypes.checkbox.key ||
      _vm.input.type == _vm.InputTypes.radio.key
    )?[_c('span',{staticClass:"n-input-label"},[_vm._v(_vm._s(_vm.titleFor(_vm.input)))]),_c('div',{staticClass:"radio-group"},_vm._l((_vm.input.enum),function(option,index){return _c('div',{key:index,staticStyle:{"margin-right":"12px","margin-bottom":"4px"},attrs:{"disabled":_vm.input.disabled}},[(_vm.input.type == _vm.InputTypes.checkbox.key)?[_c('nitrozen-checkbox',{attrs:{"checkboxValue":option.key,"name":_vm.input.key,"disabled":_vm.input.disabled},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(option.display))])])]:(_vm.input.type == _vm.InputTypes.radio.key)?[_c('nitrozen-radio',{attrs:{"radioValue":option.key,"name":_vm.input.key,"disabled":_vm.input.disabled},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(option.display))])])]:_vm._e()],2)}),0)]:(_vm.input.type == _vm.InputTypes.dropdown.key)?[_c('nitrozen-dropdown',{attrs:{"items":_vm.input.enum.map(function (x) {
          return { text: x.display, value: x.key };
        }),"label":_vm.input.display,"placeholder":_vm.input.placeholder,"required":_vm.input.required,"tooltipText":_vm.input.tooltip,"showTooltip":_vm.input.tooltip != undefined,"disabled":_vm.input.disabled},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}})]:(_vm.input.type == _vm.InputTypes.object.key)?[_c('fieldset',{staticClass:"input-group"},[(_vm.input.display && _vm.input.display.length)?_c('legend',{staticClass:"n-input-label"},[_vm._v(" "+_vm._s(_vm.titleFor(_vm.input))+" ")]):_vm._e(),_c('nitrozen-custom-form',{ref:_vm.input.key || 'form',attrs:{"inputs":_vm.input.inputs},on:{"change":_vm.inputChanged},model:{value:(_vm.formInputValue),callback:function ($$v) {_vm.formInputValue=$$v},expression:"formInputValue"}})],1)]:(_vm.input.type == _vm.InputTypes.array.key)?[_c('fieldset',{staticClass:"input-group"},[(_vm.input.display && _vm.input.display.length)?_c('legend',{staticClass:"n-input-label"},[_vm._v(" "+_vm._s(_vm.titleFor(_vm.input))+" ")]):_vm._e(),_vm._l((_vm.formInputValue),function(subResponse,index){return _c('div',{key:index + subResponse,staticStyle:{"display":"flex"},attrs:{"id":_vm.input.key + '[' + index + ']'}},[_c('nitrozen-custom-form-input',{ref:_vm.input.key + '[' + index + ']',refInFor:true,staticStyle:{"width":"100%","padding-bottom":"20px"},attrs:{"input":_vm.input.input},on:{"change":function($event){return _vm.arrayInputChanged(index, $event)}},model:{value:(_vm.formInputValue[index]),callback:function ($$v) {_vm.$set(_vm.formInputValue, index, $$v)},expression:"formInputValue[index]"}}),(!subResponse.__non_removable)?_c('nitrozen-inline',{staticClass:"delete-icon",attrs:{"icon":'cross-filled'},on:{"click":function($event){return _vm.deleteResponseAt(index)}}}):_vm._e()],1)}),_c('nitrozen-button',{attrs:{"theme":"secondary","disabled":_vm.input.disabled},on:{"click":_vm.addResponse}},[_vm._v(" Add ")])],2)]:_vm._e(),(_vm.errorMessage)?_c('nitrozen-error',[_vm._v(_vm._s(_vm.errorMessage))]):_vm._e()],2)}
var NCustomFormInputvue_type_template_id_bbdaa70e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomFormInput.vue?vue&type=template&id=bbdaa70e&scoped=true&

// CONCATENATED MODULE: ./src/components/NCustomForm/InputTypes.js
let InputTypes = {
  text: {
    display: "Single line input",
    description: "Single line of text"
  },
  textarea: {
    display: "Multi line input",
    description: "Multiple lines of text"
  },
  mobile: {
    display: "Mobile Number",
    description: "Input field for Country code and Mobile number"
  },
  email: {
    display: "Email",
    description: "Email ID"
  },
  number: {
    display: "Numeric input",
    description: "Numeric input."
  },
  radio: {
    display: "Radio Button Group",
    description: "Multiple choice question, single answer."
  },
  checkbox: {
    display: "Chexbox Group",
    description: "Multiple choice question, multiple answers."
  },
  dropdown: {
    display: "Dropdown",
    description: "Multiple choice dropdown."
  },
  toggle: {
    display: "Toggle",
    description: "An on-off toggle switch."
  },
  object: {
    display: "Group of Inputs",
    description: "Group of inputs which will be responsed in sub key"
  },
  array: {
    display: "Input having array as response",
    description: "Input having array as response"
  }
};
Object.keys(InputTypes).forEach(key => {
  InputTypes[key].key = key;
});
/* harmony default export */ var NCustomForm_InputTypes = (InputTypes);
// CONCATENATED MODULE: ./src/components/NCustomForm/util.js


function defaultResponseForInput(input) {
  switch (input.type) {
    case NCustomForm_InputTypes.text.key:
    case NCustomForm_InputTypes.textarea.key:
    case NCustomForm_InputTypes.email.key:
      return input.default || "";

    case NCustomForm_InputTypes.number.key:
      if (input.default || input.default == 0) {
        return input.default;
      }

      return null;

    case NCustomForm_InputTypes.radio.key:
      if (input.default) {
        return input.default;
      } else if (input.enum.length) {
        return input.enum[0].key;
      }

      return null;

    case NCustomForm_InputTypes.dropdown.key:
      if (input.default) {
        return input.default;
      }

      return null;

    case NCustomForm_InputTypes.checkbox.key:
      if (input.default) {
        return input.default;
      }

      return [];

    case NCustomForm_InputTypes.mobile.key:
      if (input.default) {
        return input.default;
      }

      return {
        code: 91,
        number: ""
      };

    case NCustomForm_InputTypes.toggle.key:
      if (input.default) {
        return input.default;
      }

      return false;

    case NCustomForm_InputTypes.object.key:
      const subResponse = {};
      input.inputs = input.inputs || [];
      input.inputs.forEach(io => {
        subResponse[io.key] = defaultResponseForInput(io);
      });
      return subResponse;

    case NCustomForm_InputTypes.array.key:
      if (input.default) {
        return input.default;
      }

      return [];

    default:
      return undefined;
  }
}

function isEmptyString(value) {
  return value == undefined || value == null || value.trim() == "";
}

function validateResponseForInput(input, response) {
  const inputDisplay = isEmptyString(input.display) ? "this input" : input.display;
  let errorMessage = input.error_message || "Please enter " + inputDisplay;

  if ([NCustomForm_InputTypes.dropdown.key, NCustomForm_InputTypes.checkbox.key, NCustomForm_InputTypes.radio.key].includes(input.type)) {
    errorMessage = input.error_message || "Please select " + inputDisplay;
  } else if (input.type == NCustomForm_InputTypes.array.key) {
    errorMessage = input.error_message || "Please add " + inputDisplay;
  }

  let isValid = true;

  switch (input.type) {
    case NCustomForm_InputTypes.text.key:
    case NCustomForm_InputTypes.textarea.key:
    case NCustomForm_InputTypes.email.key:
      if (input.regex && !isEmptyString(response)) {
        var re = new RegExp(input.regex);
        isValid = re.test(response) && isValid;

        if (!isValid) {
          errorMessage = "Please enter valid " + inputDisplay;
        }
      }

      if (isValid && input.required) {
        isValid = !isEmptyString(response) && isValid;

        if (!isValid) {
          errorMessage = "Please enter " + inputDisplay;
        }
      }

      if (isValid && input.min_length) {
        isValid = input.min_length <= response.length && isValid;

        if (!isValid) {
          errorMessage = "Minimum length required is " + input.min_length + " for " + inputDisplay;
        }
      }

      if (isValid && input.max_length) {
        isValid = input.max_length >= response.length && isValid;

        if (!isValid) {
          errorMessage = "Max length is " + input.max_length + " for " + inputDisplay;
        }
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.number.key:
      if (input.min) {
        isValid = input.min <= response && isValid;

        if (!isValid) {
          errorMessage = "Minimum value is " + input.min + " for " + inputDisplay;
        }
      }

      if (isValid && input.max) {
        isValid = input.max >= response && isValid;

        if (!isValid) {
          errorMessage = "Maximum value is " + input.max + " for " + inputDisplay;
        }
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.radio.key:
      if (input.required) {
        isValid = response != null;
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.dropdown.key:
      if (input.required) {
        isValid = response != null;
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.checkbox.key:
      if (input.required) {
        isValid = Array.isArray(response) && response.length;
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.mobile.key:
      if (input.regex && !isEmptyString(response.number)) {
        var re = new RegExp(input.regex);
        isValid = re.test(response.number);
      }

      if (isValid && input.required) {
        isValid = !isEmptyString(response.number) && isValid;

        if (!isValid) {
          errorMessage = "Please enter " + inputDisplay;
        }
      }

      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.toggle.key:
      return {
        isValid,
        errorMessage
      };
      0;

    case NCustomForm_InputTypes.object.key:
      isValid = validateResponsesForInputs(input.inputs, response);
      return {
        isValid,
        errorMessage
      };

    case NCustomForm_InputTypes.array.key:
      if (input.min) {
        isValid = input.min <= response.length && isValid;

        if (!isValid) {
          errorMessage = "Minimum limit for " + inputDisplay + " is " + input.min;
        }
      }

      if (isValid && input.max) {
        isValid = input.max >= response.length && isValid;

        if (!isValid) {
          errorMessage = "Maximum limit for " + inputDisplay + " is " + input.max;
        }
      }

      if (isValid) {
        response.forEach(element => {
          isValid = validateResponseForInput(input.input, element).isValid && isValid;
        });

        if (!isValid) {
          errorMessage = "Please check enclosed inputs";
        }
      }

      return {
        isValid,
        errorMessage
      };

    default:
      isValid = false;
      return {
        isValid,
        errorMessage
      };
  }
}

function validateResponsesForInputs(inputs, response) {
  let isValid = true;
  inputs.forEach(input => {
    if (!input.hidden) {
      isValid = validateResponseForInput(input, response[input.key]).isValid && isValid;
    }
  });
  return isValid;
}

function validateInput(input) {
  if (!input.type) {
    return false;
  } // if (!input.key && !skipKey) {
  //     return false
  // }
  // if (skipKey && input.key) {
  //     return false
  // }


  if (input.required != undefined && input.required != true && input.required != false) {
    return false;
  }

  switch (input.type) {
    case NCustomForm_InputTypes.text.key:
    case NCustomForm_InputTypes.textarea.key:
    case NCustomForm_InputTypes.email.key:
      return true;

    case NCustomForm_InputTypes.number.key:
      return true;

    case NCustomForm_InputTypes.radio.key:
    case NCustomForm_InputTypes.dropdown.key:
    case NCustomForm_InputTypes.checkbox.key:
      if (!input.enum || input.enum.length == 0) {
        return false;
      }

      return true;

    case NCustomForm_InputTypes.mobile.key:
      return true;

    case NCustomForm_InputTypes.toggle.key:
      return input.default == undefined || input.default == null || input.default == true || input.default == false;

    case NCustomForm_InputTypes.object.key:
      if (!input.inputs || input.inputs.length == 0) {
        return false;
      }

      let isValid = true;
      input.inputs.forEach(io => {
        isValid = validateInput(io) && isValid;
      });
      return isValid;

    case NCustomForm_InputTypes.array.key:
      return validateInput(input.input, true);

    default:
      return false;
  }
}


// EXTERNAL MODULE: ./node_modules/vue-tel-input/dist/vue-tel-input.js
var vue_tel_input = __webpack_require__("fb67");
var vue_tel_input_default = /*#__PURE__*/__webpack_require__.n(vue_tel_input);

// EXTERNAL MODULE: ./src/components/NToggleBtn/index.js + 5 modules
var NToggleBtn = __webpack_require__("9cd1");

// EXTERNAL MODULE: ./src/components/NCheckbox/index.js + 5 modules
var NCheckbox = __webpack_require__("2158");

// EXTERNAL MODULE: ./src/components/NRadio/index.js + 5 modules
var NRadio = __webpack_require__("facc");

// EXTERNAL MODULE: ./src/components/NDropdown/index.js + 5 modules
var NDropdown = __webpack_require__("1467");

// EXTERNAL MODULE: ./src/components/NInput/index.js
var NInput = __webpack_require__("051f");

// EXTERNAL MODULE: ./src/components/NError/index.js + 5 modules
var NError = __webpack_require__("3cc7");

// EXTERNAL MODULE: ./src/components/NBtn/index.js + 8 modules
var NBtn = __webpack_require__("5e4a");

// EXTERNAL MODULE: ./src/components/NInline/index.js + 5 modules
var NInline = __webpack_require__("579b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCustomForm/NCustomFormInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var NCustomFormInputvue_type_script_lang_js_ = ({
  name: "nitrozen-custom-form-input",
  props: {
    value: {},
    input: {
      type: Object
    }
  },

  data() {
    return {
      errorMessage: null,
      formInputValue: this.value,
      InputTypes: NCustomForm_InputTypes
    };
  },

  components: {
    NitrozenInput: NInput["a" /* default */],
    NitrozenDropdown: NDropdown["a" /* default */],
    NitrozenCheckbox: NCheckbox["a" /* default */],
    NitrozenRadio: NRadio["a" /* default */],
    NitrozenToggle: NToggleBtn["a" /* default */],
    NitrozenError: NError["a" /* default */],
    NitrozenButton: NBtn["a" /* default */],
    NitrozenInline: NInline["a" /* default */],
    VueTelInput: vue_tel_input_default.a,
    NitrozenCustomForm: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "c394")) // Loophole for circular imports issue

  },
  event: "change",
  watch: {
    formInputValue() {
      this.inputChanged();
    }

  },
  methods: {
    validateInput: validateInput,

    titleFor(input) {
      return input.display + (input.required ? " *" : "");
    },

    inputChanged() {
      this.errorMessage = null;
      this.$emit("change", this.formInputValue);
    },

    addResponse() {
      this.formInputValue.push(defaultResponseForInput(this.input.input));
    },

    deleteResponseAt(deletionIndex) {
      this.formInputValue.splice(deletionIndex, 1);
    },

    arrayInputChanged(index, valueAtIndex) {
      this.formInputValue[index] = valueAtIndex;
      this.inputChanged();
    },

    willMoveToNext() {
      const {
        isValid,
        errorMessage
      } = validateResponseForInput(this.input, this.formInputValue);
      this.errorMessage = isValid ? null : errorMessage;
    },

    showValidationErrorsIfAny() {
      if (this.input.inputs) {
        this.input.inputs.forEach(input => {
          if (!input.hidden) {
            this.$refs[this.input.key || "form"].showValidationErrorsIfAny();
          }
        });
      } else if (this.input.input) {
        this.formInputValue.forEach((val, index) => {
          const refs = this.$refs[this.input.key + "[" + index + "]"];
          refs[0].showValidationErrorsIfAny();
        });
        this.willMoveToNext();
      } else {
        this.willMoveToNext();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomFormInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var NCustomForm_NCustomFormInputvue_type_script_lang_js_ = (NCustomFormInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NCustomForm/NCustomFormInput.vue?vue&type=style&index=0&id=bbdaa70e&lang=less&scoped=true&
var NCustomFormInputvue_type_style_index_0_id_bbdaa70e_lang_less_scoped_true_ = __webpack_require__("dd3d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomFormInput.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NCustomForm_NCustomFormInputvue_type_script_lang_js_,
  NCustomFormInputvue_type_template_id_bbdaa70e_scoped_true_render,
  NCustomFormInputvue_type_template_id_bbdaa70e_scoped_true_staticRenderFns,
  false,
  null,
  "bbdaa70e",
  null
  
)

/* harmony default export */ var NCustomFormInput = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NCustomForm/NCustomForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NCustomFormvue_type_script_lang_js_ = ({
  name: "nitrozen-custom-form",
  props: {
    value: {
      type: Object,
      default: false
    },
    inputs: {
      type: Array,
      default: false
    }
  },
  components: {
    NitrozenCustomFormInput: NCustomFormInput
  },
  event: "change",

  beforeMount() {
    this.inputs.forEach(input => {
      if (this.value[input.key] == undefined) {
        this.value[input.key] = defaultResponseForInput(input);
      }
    });
    this.recaliberateInputs(this.inputs, this.value);
  },

  methods: {
    recaliberateInputs(inputs, response) {
      inputs.forEach(input => {
        if (input.visible_if) {
          const hidden = !logic_default.a.apply(input.visible_if, response);
          this.$set(input, "hidden", hidden);

          if (hidden) {
            delete response[input.key];
          } else if (response[input.key] == undefined) {
            response[input.key] = defaultResponseForInput(input);
          }
        }

        if (input.inputs) {
          this.recaliberateInputs(input.inputs, response[input.key]);
        }
      });
    },

    inputChanged(input, newValue) {
      this.value[input.key] = newValue;
      this.recaliberateInputs(this.inputs, this.value);
      this.$emit("change", this.value);
    },

    isResponseValid() {
      return validateResponsesForInputs(this.inputs, this.value);
    },

    showValidationErrorsIfAny() {
      this.inputs.forEach(input => {
        if (!input.hidden) {
          this.$refs[input.key][0].showValidationErrorsIfAny();
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var NCustomForm_NCustomFormvue_type_script_lang_js_ = (NCustomFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NCustomForm/NCustomForm.vue?vue&type=style&index=0&lang=less&
var NCustomFormvue_type_style_index_0_lang_less_ = __webpack_require__("00f8");

// CONCATENATED MODULE: ./src/components/NCustomForm/NCustomForm.vue






/* normalize component */

var NCustomForm_component = Object(componentNormalizer["a" /* default */])(
  NCustomForm_NCustomFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NCustomForm = __webpack_exports__["default"] = (NCustomForm_component.exports);

/***/ }),

/***/ "c54b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9c7");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NAutocomplete_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c5cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c8e");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NDialog_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c7fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c84c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9c7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cf37":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b038");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NStepper_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d553":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAbRJREFUWAntVzFLw1AQvksbHCzFXyCCuERxVkGsiKCr4KAVB1EHZ39Ad8FZ6OBgJzu7iDhY0VUHOwkO6hqUWluxeeel8Mrra5M+IqVLMvTdfe969+XL5R0BiK8BK4D/rb+wlV8WBGucxyGgMQT0CKDKid2lid3FXA5FWI1k2GbY3mq2kP6C2oknaEONYxJN1/99coo9bzAygQrVjgDai6tETG3LNFCNy2TzM+zvqVhUO5ICAmEFiDR50Vf9isFnQGj4hCbL61TswSwaAQFOR16LDm8L+8cqXjIQKdIjQKRxtZBv25C40DETPxIBIOxQzrPx26SgHhONgJ7lH77WSN0zZQ7OU+l6pRXr/og7bsIpNdpKoDNiW28Sq//a4vJsuyr9oLVDym6Bjc+Pd5cg3W1PYsKjsut50uUXQdyzM9cCAoy+PQJ+SV8CarbBfSPAiQdLgEeCEQGjHuAz7poAh6V2CDTLx15K+s0VscRF6xLjEfgg7bC11dlhQfre/Gb+kafetIpbQ8nRm9OdVxUzsfvWAybF/ZiYQKxArECswMAVMJoF+qnGo9b/2gn94tH/E/tBCvwBrENsNIpwjxYAAAAASUVORK5CYII="

/***/ }),

/***/ "dcb0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dd3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomFormInput_vue_vue_type_style_index_0_id_bbdaa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a15");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomFormInput_vue_vue_type_style_index_0_id_bbdaa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NCustomFormInput_vue_vue_type_style_index_0_id_bbdaa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e4e6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e88e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ede7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e88e");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NMenuItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f38c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fa5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.a9ea6bef.gif";

/***/ }),

/***/ "facc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NRadio/NRadio.vue?vue&type=template&id=56edff8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-radio-group"},[_c('input',{attrs:{"id":_vm.id,"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"checked":_vm.value==_vm.radioValue,"value":_vm.radioValue},on:{"input":function($event){return _vm.changeEvent($event,'input')},"change":function($event){return _vm.changeEvent($event,'change')}}}),_c('label',{attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NRadio/NRadio.vue?vue&type=template&id=56edff8a&

// EXTERNAL MODULE: ./src/utils/NUuid.js
var NUuid = __webpack_require__("4fe2");

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
      default: () => "nitrozen-radio" + Object(NUuid["a" /* default */])()
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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NRadio/NRadio.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NRadio_NRadiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NRadio = (component.exports);
// CONCATENATED MODULE: ./src/components/NRadio/index.js

/* harmony default export */ var components_NRadio = __webpack_exports__["a"] = (NRadio);

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NitrozenAutocomplete", function() { return /* reexport */ components_NAutocomplete; });
__webpack_require__.d(__webpack_exports__, "NitrozenButton", function() { return /* reexport */ NBtn["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenBadge", function() { return /* reexport */ components_NBadge; });
__webpack_require__.d(__webpack_exports__, "NitrozenCheckBox", function() { return /* reexport */ NCheckbox["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenChips", function() { return /* reexport */ components_NChips; });
__webpack_require__.d(__webpack_exports__, "NitrozenDropdown", function() { return /* reexport */ NDropdown["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenDialog", function() { return /* reexport */ components_NDialog; });
__webpack_require__.d(__webpack_exports__, "NitrozenError", function() { return /* reexport */ NError["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenInline", function() { return /* reexport */ NInline["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenInput", function() { return /* reexport */ components_NInput["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenMenu", function() { return /* reexport */ components_NMenu; });
__webpack_require__.d(__webpack_exports__, "NitrozenMenuItem", function() { return /* reexport */ components_NMenuItem; });
__webpack_require__.d(__webpack_exports__, "NitrozenTab", function() { return /* reexport */ components_NTab; });
__webpack_require__.d(__webpack_exports__, "NitrozenTabItem", function() { return /* reexport */ components_NTabItem; });
__webpack_require__.d(__webpack_exports__, "NitrozenPagination", function() { return /* reexport */ components_NPagination; });
__webpack_require__.d(__webpack_exports__, "NitrozenRadio", function() { return /* reexport */ NRadio["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenStepper", function() { return /* reexport */ components_NStepper; });
__webpack_require__.d(__webpack_exports__, "NitrozenToggleBtn", function() { return /* reexport */ NToggleBtn["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenTooltip", function() { return /* reexport */ NTooltip["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NitrozenCustomForm", function() { return /* reexport */ components_NCustomForm; });
__webpack_require__.d(__webpack_exports__, "NitrozenListingOptions", function() { return /* reexport */ components_NListingOptions; });
__webpack_require__.d(__webpack_exports__, "strokeBtn", function() { return /* reexport */ NStrokeBtn["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "flatBtn", function() { return /* reexport */ NFlatBtn["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "clickOutside", function() { return /* reexport */ NClickOutside; });
__webpack_require__.d(__webpack_exports__, "indeterminate", function() { return /* reexport */ NIndeterminate; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NAutocomplete/NAutocomplete.vue?vue&type=template&id=91f50dce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-autocomplete",attrs:{"id":"parent-div"}},[_c('nitrozen-input',{attrs:{"type":_vm.type,"showSearchIcon":true,"id":_vm.id,"placeholder":_vm.placeholder},on:{"input":function($event){return _vm.autocomplete($event)},"keydown":function($event){return _vm.keydownFunc($event)}},model:{value:(_vm.autocompleteModal),callback:function ($$v) {_vm.autocompleteModal=$$v},expression:"autocompleteModal"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NAutocomplete/NAutocomplete.vue?vue&type=template&id=91f50dce&

// EXTERNAL MODULE: ./src/components/NInput/NInput.vue + 14 modules
var NInput = __webpack_require__("a07a");

// EXTERNAL MODULE: ./src/utils/NUuid.js
var NUuid = __webpack_require__("4fe2");

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
    'nitrozen-input': NInput["a" /* default */]
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

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NAutocomplete/NAutocomplete.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NAutocomplete_NAutocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NAutocomplete = (component.exports);
// CONCATENATED MODULE: ./src/components/NAutocomplete/index.js

/* harmony default export */ var components_NAutocomplete = (NAutocomplete);
// EXTERNAL MODULE: ./src/components/NBtn/index.js + 8 modules
var NBtn = __webpack_require__("5e4a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NBadge/NBadge.vue?vue&type=template&id=2234aa39&
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

var NBadge_component = Object(componentNormalizer["a" /* default */])(
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
// EXTERNAL MODULE: ./src/components/NCheckbox/index.js + 5 modules
var NCheckbox = __webpack_require__("2158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NChips/NChips.vue?vue&type=template&id=0b6d5154&
var NChipsvue_type_template_id_0b6d5154_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"nitrozen-chip"}},[_c('div',_vm._g({ref:_vm.chipId,staticClass:"nitrozen-chip ripple",class:[_vm.chipClasses],attrs:{"tabindex":"0"},on:{"click":_vm.setBackground}},_vm.$listeners),[_vm._t("default"),_c('transition',{attrs:{"name":"nitrozen-input-action"}},[(!_vm.disable && _vm.deletable)?_c('span',{ref:_vm.iconId,staticClass:"nitrozen-icon",on:{"click":function($event){return _vm.spliceElement(_vm.chipId)}}},[_c('nitrozen-inline',{attrs:{"icon":'cross'}})],1):_vm._e(),(!_vm.disable && _vm.inProgress)?_c('span',{ref:_vm.iconId,staticClass:"nitrozen-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":'Info Text'}})],1):_vm._e()])],2)])}
var NChipsvue_type_template_id_0b6d5154_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NChips/NChips.vue?vue&type=template&id=0b6d5154&

// EXTERNAL MODULE: ./src/components/NInline/index.js + 5 modules
var NInline = __webpack_require__("579b");

// EXTERNAL MODULE: ./src/components/NTooltip/index.js + 5 modules
var NTooltip = __webpack_require__("95b9");

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
    'nitrozen-inline': NInline["a" /* default */],
    'nitrozen-tooltip': NTooltip["a" /* default */]
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
      default: () => 'nitrozen-icon' + Object(NUuid["a" /* default */])()
    },
    chipId: {
      type: [Number, String],
      default: () => 'nitrozen-chip' + Object(NUuid["a" /* default */])()
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

var NChips_component = Object(componentNormalizer["a" /* default */])(
  NChips_NChipsvue_type_script_lang_js_,
  NChipsvue_type_template_id_0b6d5154_render,
  NChipsvue_type_template_id_0b6d5154_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NChips = (NChips_component.exports);
// CONCATENATED MODULE: ./src/components/NChips/index.js

/* harmony default export */ var components_NChips = (NChips);
// EXTERNAL MODULE: ./src/components/NDropdown/index.js + 5 modules
var NDropdown = __webpack_require__("1467");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NDialog/NDialog.vue?vue&type=template&id=59ca0221&
var NDialogvue_type_template_id_59ca0221_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isModalVisible),expression:"isModalVisible"}],attrs:{"id":_vm.id}},[_c('transition',{attrs:{"name":"nitrozen-dialog-fade"}},[_c('div',{staticClass:"nitrozen-dialog-backdrop",on:{"click":_vm.backdropClick}},[_c('div',{ref:"dialog",staticClass:"nitrozen-dialog",attrs:{"role":"dialog","aria-labelledby":_vm.id + '_title',"aria-describedby":_vm.id + '_desc'}},[_c('header',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}],staticClass:"nitrozen-dialog-header",attrs:{"id":_vm.id + '_title'}},[_vm._t("header",function(){return [_vm._v(" "+_vm._s(_vm.title)+" "),(_vm.showCloseButton)?_c('nitrozen-inline',{attrs:{"title":"close","icon":"cross"},on:{"click":function($event){return _vm.close('close')}}}):_vm._e()]})],2),_c('section',{staticClass:"nitrozen-dialog-body",attrs:{"id":_vm.id + '_desc'}},[_vm._t("body")],2),_c('footer',{staticClass:"nitrozen-dialog-footer"},[_vm._t("footer",function(){return [(_vm.positiveButtonLabel)?_c('nitrozen-button',{directives:[{name:"flatBtn",rawName:"v-flatBtn"}],staticClass:"nitrozen-dialog-footer-button-margin",attrs:{"theme":("" + (_vm.theme || 'secondary'))},on:{"click":function($event){return _vm.close(_vm.positiveButtonLabel)}}},[_vm._v(_vm._s(_vm.positiveButtonLabel))]):_vm._e(),(_vm.neutralButtonLabel)?_c('nitrozen-button',{staticClass:"nitrozen-dialog-footer-button-margin",attrs:{"theme":("" + (_vm.theme || 'secondary'))},on:{"click":function($event){return _vm.close(_vm.neutralButtonLabel)}}},[_vm._v(_vm._s(_vm.neutralButtonLabel))]):_vm._e(),(_vm.negativeButtonLabel)?_c('nitrozen-button',{directives:[{name:"strokeBtn",rawName:"v-strokeBtn"}],attrs:{"theme":("" + (_vm.theme || 'secondary'))},on:{"click":function($event){return _vm.close(_vm.negativeButtonLabel)}}},[_vm._v(_vm._s(_vm.negativeButtonLabel))]):_vm._e()]})],2)])])])],1)}
var NDialogvue_type_template_id_59ca0221_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue?vue&type=template&id=59ca0221&

// EXTERNAL MODULE: ./src/directives/NStrokeBtn.js
var NStrokeBtn = __webpack_require__("9929");

// EXTERNAL MODULE: ./src/directives/NFlatBtn.js
var NFlatBtn = __webpack_require__("6477");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/directives/NClickOutside.js

const clickOutside = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('click-outside', {
  bind: function (el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name;
      let warn = `[Nitrozen-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;

      if (compName) {
        warn += ` Found in component '${compName}'`;
      }

      console.warn(warn);
    } // Define Handler and cache it on the element


    const bubble = binding.modifiers.bubble;

    const handler = e => {
      if (bubble || -1 == e.path.indexOf(el)) {
        binding.value(e);
      }
    };

    el.__nitrozenClickOutside__ = handler; // add Event Listeners

    document.addEventListener('click', handler);
  },
  unbind: function (el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__nitrozenClickOutside__);
    el.__nitrozenClickOutside__ = null;
  }
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(clickOutside);
/* harmony default export */ var NClickOutside = (clickOutside);
// CONCATENATED MODULE: ./src/directives/NIndeterminate.js

const indeterminate = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('indeterminate', {
  bind: (el, binding) => {
    if (el.type && el.type === 'checkbox') {
      el.indeterminate = binding.value;
      console.log('binding value', binding.value);
    }
  },
  update: (el, binding) => {
    if (el.type && el.type === 'checkbox') {
      el.indeterminate = binding.value;
      console.log('binding value', binding.value);
    }
  }
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(indeterminate); // bind
// inserted
// update
// componentUpdated
// unbind

/* harmony default export */ var NIndeterminate = (indeterminate);
// CONCATENATED MODULE: ./src/directives/index.js





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
//
//
//
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
    NitrozenButton: NBtn["a" /* default */],
    NitrozenInline: NInline["a" /* default */]
  },
  directives: {
    flatBtn: NFlatBtn["a" /* default */],
    strokeBtn: NStrokeBtn["a" /* default */]
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dialog-" + Object(NUuid["a" /* default */])()
    },

    /**
     * title of dialog
     */
    title: {
      type: String
    },

    /**
     * theme of button
     */
    theme: {
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
    },

    handleESCKey: function (event) {
      // ESC key detection
      if (event.keyCode == 27 && this.dismissible && this.isOpen()) {
        event.preventDefault();
        event.stopPropagation();
        this.close("close");
      }
    }
  },

  created() {
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", this.handleESCKey);
    }
  },

  destroyed() {
    document.removeEventListener("keydown", this.handleESCKey);
  }

});
// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var NDialog_NDialogvue_type_script_lang_js_ = (NDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NDialog/NDialog.vue?vue&type=style&index=0&lang=less&
var NDialogvue_type_style_index_0_lang_less_ = __webpack_require__("c5cf");

// CONCATENATED MODULE: ./src/components/NDialog/NDialog.vue






/* normalize component */

var NDialog_component = Object(componentNormalizer["a" /* default */])(
  NDialog_NDialogvue_type_script_lang_js_,
  NDialogvue_type_template_id_59ca0221_render,
  NDialogvue_type_template_id_59ca0221_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NDialog = (NDialog_component.exports);
// CONCATENATED MODULE: ./src/components/NDialog/index.js


/* harmony default export */ var components_NDialog = (NDialog);
// EXTERNAL MODULE: ./src/components/NError/index.js + 5 modules
var NError = __webpack_require__("3cc7");

// EXTERNAL MODULE: ./src/components/NInput/index.js
var components_NInput = __webpack_require__("051f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenu/NMenu.vue?vue&type=template&id=308a10e0&
var NMenuvue_type_template_id_308a10e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[_c('div',{directives:[{name:"clickOutside",rawName:"v-clickOutside",value:(_vm.closeMenu),expression:"closeMenu"}],staticClass:"nitrozen-menu-content",class:{'nitrozen-default-menu': !_vm.inverted},attrs:{"id":_vm.id},on:{"click":function($event){_vm.toggleMenu = !_vm.toggleMenu}}},[_c('nitrozen-inline',{class:{ 'nitrozen-menu-vertical-dots': _vm.mode == 'vertical' },attrs:{"icon":_vm.inverted ? 'white-dots' : 'dots'}}),_c('transition',{attrs:{"name":"fade"}},[(_vm.toggleMenu)?_c('ul',{class:{ 'nitrozen-menu-vertical-dropdown': _vm.mode == 'vertical','nitrozen-menu-top': _vm.position == 'top'  }},[_vm._t("default")],2):_vm._e()])],1)])}
var NMenuvue_type_template_id_308a10e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NMenu/NMenu.vue?vue&type=template&id=308a10e0&

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
    "nitrozen-inline": NInline["a" /* default */]
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu" + Object(NUuid["a" /* default */])()
    },
    mode: {
      type: String,
      default: () => "horizontal"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "bottom"
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

var NMenu_component = Object(componentNormalizer["a" /* default */])(
  NMenu_NMenuvue_type_script_lang_js_,
  NMenuvue_type_template_id_308a10e0_render,
  NMenuvue_type_template_id_308a10e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NMenu = (NMenu_component.exports);
// CONCATENATED MODULE: ./src/components/NMenu/index.js

/* harmony default export */ var components_NMenu = (NMenu);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NMenuItem/NMenuItem.vue?vue&type=template&id=835c1ace&
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
      default: () => "nitrozen-menu-item" + Object(NUuid["a" /* default */])()
    }
  }
});
// CONCATENATED MODULE: ./src/components/NMenuItem/NMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var NMenuItem_NMenuItemvue_type_script_lang_js_ = (NMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NMenuItem/NMenuItem.vue?vue&type=style&index=0&lang=less&
var NMenuItemvue_type_style_index_0_lang_less_ = __webpack_require__("ede7");

// CONCATENATED MODULE: ./src/components/NMenuItem/NMenuItem.vue






/* normalize component */

var NMenuItem_component = Object(componentNormalizer["a" /* default */])(
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTab/NTab.vue?vue&type=template&id=2c61829c&scoped=true&
var NTabvue_type_template_id_2c61829c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-tab-container",attrs:{"id":_vm.id}},[_c('ul',{staticClass:"nitrozen-tab"},_vm._l((_vm.tabItem),function(item,index){return _c('nitrozen-tab-item',{key:index,class:{ 'nitrozen-tab-active': _vm.activeTab == index },on:{"click":function($event){return _vm.selectTab(index, item)}}},[_vm._v(_vm._s(item[_vm.label] || item))])}),1)])}
var NTabvue_type_template_id_2c61829c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTab/NTab.vue?vue&type=template&id=2c61829c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTabItem/NTabItem.vue?vue&type=template&id=cfd6b808&scoped=true&
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
      default: () => "nitrozen-tab-item" + Object(NUuid["a" /* default */])()
    }
  }
});
// CONCATENATED MODULE: ./src/components/NTabItem/NTabItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var NTabItem_NTabItemvue_type_script_lang_js_ = (NTabItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NTabItem/NTabItem.vue?vue&type=style&index=0&id=cfd6b808&lang=less&scoped=true&
var NTabItemvue_type_style_index_0_id_cfd6b808_lang_less_scoped_true_ = __webpack_require__("6eb4");

// CONCATENATED MODULE: ./src/components/NTabItem/NTabItem.vue






/* normalize component */

var NTabItem_component = Object(componentNormalizer["a" /* default */])(
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
      default: () => "nitrozen-tab" + Object(NUuid["a" /* default */])()
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

var NTab_component = Object(componentNormalizer["a" /* default */])(
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NPagination/NPagination.vue?vue&type=template&id=2637fc16&
var NPaginationvue_type_template_id_2637fc16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-pagination-container",attrs:{"id":_vm.id}},[_c('div',{staticClass:"nitrozen-pagination"},[_c('div',{staticClass:"nitrozen-pagination__left"},[_c('span',{staticClass:"nitrozen-pagination__count"},[_vm._v(_vm._s(_vm.countsText))])]),_c('div',{staticClass:"nitrozen-pagination__right"},[_c('div',{staticClass:"nitrozen-pagination__select"},[_c('span',{staticClass:"nitrozen-pagination__select__label"},[_vm._v("Rows per page")]),_c('nitrozen-dropdown',{staticClass:"nitrozen-pagination-page-size",attrs:{"items":_vm.pageSizes},on:{"change":_vm.pageSizeChange},model:{value:(_vm.selectedPageSize),callback:function ($$v) {_vm.selectedPageSize=$$v},expression:"selectedPageSize"}})],1),_c('nitrozen-button',{staticClass:"nitrozen-pagination__prev",class:{ 'pagination-diabled': !_vm.showPrev },attrs:{"title":"Previous"},on:{"click":_vm.previous}},[_c('nitrozen-inline',{attrs:{"icon":"arrow-left-black"}})],1),_c('nitrozen-button',{staticClass:"nitrozen-pagination__next",class:{ 'pagination-diabled': !_vm.showNext },attrs:{"title":"Next"},on:{"click":_vm.next}},[_c('nitrozen-inline',{attrs:{"icon":"arrow-right-black"}})],1)],1)])])}
var NPaginationvue_type_template_id_2637fc16_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NPagination/NPagination.vue?vue&type=template&id=2637fc16&

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




const MODE_REGULAR = "regular";
const MODE_CURSOR = "cursor";
/* harmony default export */ var NPaginationvue_type_script_lang_js_ = ({
  name: "nitrozen-pagination",
  components: {
    NitrozenButton: NBtn["a" /* default */],
    NitrozenDropdown: NDropdown["a" /* default */],
    NitrozenInline: NInline["a" /* default */]
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-pagination-" + Object(NUuid["a" /* default */])()
    },

    /**
     * kind of pagination
     */
    name: {
      type: String
    },

    /**
     * mode of pagination, via
     * 'regular' - skip-limit counts or
     * 'cursor' - next-page and previous-page Ids
     */
    mode: {
      type: String,
      enum: [MODE_REGULAR, MODE_CURSOR],
      default: MODE_REGULAR
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
     *     current: Number,
     *     prevPage: String,
           nextPage: String,
           currentPage: String,
           currentTotal: Number,
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
          current: 0,
          prevPage: "",
          nextPage: "",
          // currentPage is computed.
          // on prev-button press it will be set to prevPage value
          // on next-button press it will be set to nextPage value
          currentPage: "",
          // currentTotal is count of items in current page.
          // Used when total is not available.
          currentTotal: 0
        };
      }
    }
  },

  created() {
    this.setDefaults();
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
      let txt = "";

      if (this.showTotal) {
        txt = ` ${this.firstRecord} - ${this.lastRecord}`;
        txt += ` of ${this.value.total}`;
        txt += ` ${this.name || ""}`;
      } else if (this.value.currentTotal) {
        txt = `Showing ${this.value.currentTotal} ${this.name}`;
      } else {
        txt = "";
      }

      return txt;
    },

    showTotal() {
      if (this.value.total) {
        return true;
      }

      return false;
    },

    showPrev() {
      if (this.value.total && this.value.current === 1) {
        return false;
      }

      if (this.mode === MODE_CURSOR && !this.value.prevPage) {
        return false;
      }

      return true;
    },

    showNext() {
      if (this.value.total && this.value.current >= this.pages) {
        return false;
      }

      if (this.mode === MODE_CURSOR && !this.value.nextPage) {
        return false;
      }

      return true;
    }

  },
  methods: {
    setDefaults() {
      if (!this.value.current) {
        this.$set(this.value, "current", 1);
      }
    },

    previous() {
      if (this.value.total) {
        if (this.value.current === 1) {
          return;
        }

        this.value.current--;
      } else if (this.mode === MODE_CURSOR) {
        if (!this.value.prevPage) return;
        this.value.nextPage = "";
        this.value.currentPage = this.value.prevPage;
      }

      this.change();
      this.$emit('previousClick');
    },

    next() {
      if (this.value.total) {
        if (this.value.current >= this.pages) {
          this.value.current = this.pages;
          return;
        }

        if (this.pages === 0) {
          this.value.current = 0;
          return;
        }

        this.value.current++;
      }

      if (this.mode === MODE_CURSOR) {
        if (!this.value.nextPage) return;
        this.value.prevPage = "";
        this.value.currentPage = this.value.nextPage;
      }

      this.change();
      this.$emit('nextClick');
    },

    pageSizeChange(size) {
      this.value.current = 1;
      this.value.limit = size;

      if (this.mode === MODE_CURSOR) {
        this.value.nextPage = "";
        this.value.prevPage = "";
        this.value.currentPage = "";
      }

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

var NPagination_component = Object(componentNormalizer["a" /* default */])(
  NPagination_NPaginationvue_type_script_lang_js_,
  NPaginationvue_type_template_id_2637fc16_render,
  NPaginationvue_type_template_id_2637fc16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NPagination = (NPagination_component.exports);
// CONCATENATED MODULE: ./src/components/NPagination/index.js


/* harmony default export */ var components_NPagination = (NPagination);
// EXTERNAL MODULE: ./src/components/NRadio/index.js + 5 modules
var NRadio = __webpack_require__("facc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NStepper/NStepper.vue?vue&type=template&id=2023bb58&
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
      default: () => "nitrozen-stepper" + Object(NUuid["a" /* default */])()
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

var NStepper_component = Object(componentNormalizer["a" /* default */])(
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
// EXTERNAL MODULE: ./src/components/NToggleBtn/index.js + 5 modules
var NToggleBtn = __webpack_require__("9cd1");

// EXTERNAL MODULE: ./src/components/NCustomForm/NCustomForm.vue + 11 modules
var NCustomForm = __webpack_require__("c394");

// CONCATENATED MODULE: ./src/components/NCustomForm/index.js

/* harmony default export */ var components_NCustomForm = (NCustomForm["default"]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5890a22-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NListingOptions/NListingOptions.vue?vue&type=template&id=21c6e522&
var NListingOptionsvue_type_template_id_21c6e522_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nitrozen-dropdown-container"},[(_vm.label)?_c('label',{staticClass:"nitrozen-dropdown-label"},[_vm._v(" "+_vm._s(_vm.label)+" "+_vm._s(_vm.required ? " *" : "")+" "),(_vm.tooltip != '')?_c('span',{staticClass:"nitrozen-tooltip-icon"},[_c('nitrozen-tooltip',{attrs:{"tooltipText":_vm.tooltip,"position":"top"}})],1):_vm._e()]):_vm._e(),_c('div',{staticClass:"nitrozen-select-wrapper",on:{"click":_vm.toggle}},[_c('div',{ref:"n_dropdown",staticClass:"nitrozen-select",class:{
        disabled: _vm.disabled,
        'nitrozen-dropdown-open': _vm.showOptions,
      }},[_c('div',{staticClass:"nitrozen-select__trigger"},[(_vm.searchable && !_vm.disabled)?_c('span',{staticClass:"nitrozen-searchable-input-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchInput),expression:"searchInput"}],attrs:{"type":"search","placeholder":_vm.searchInputPlaceholder},domProps:{"value":(_vm.searchInput)},on:{"search":_vm.searchInputChange,"keyup":_vm.searchInputChange,"input":function($event){if($event.target.composing){ return; }_vm.searchInput=$event.target.value}}})]):(_vm.defaultCheckbox)?_c('span',{staticClass:"nitrozen-default-checkbox"},[_c('nitrozen-checkbox',{attrs:{"value":_vm.checboxSelected,"indeterminateValue":_vm.indeterminate,"defaultCheckbox":true}})],1):_c('span',[_vm._v(_vm._s(_vm.selectedText))]),_c('div',{staticClass:"nitrozen-dropdown-arrow"},[_c('nitrozen-inline',{attrs:{"icon":"dropdown_arrow_down"}})],1)]),_c('div',{ref:"nitrozen-select-option",staticClass:"nitrozen-options",class:{ 'nitrozen-dropup': _vm.dropUp },on:{"&scroll":function($event){return _vm.handleScroll.apply(null, arguments)}}},[(_vm.enable_select_all)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchInput),expression:"!searchInput"}],staticClass:"nitrozen-option ripple",on:{"click":function($event){return _vm.selectItem('all', _vm.all_option)}}},[_vm._t("option",function(){return [_c('div',{staticClass:"nitrozen-option-container"},[_c('nitrozen-checkbox',{ref:"multicheckbox-all",attrs:{"checkboxValue":_vm.allSelected,"value":_vm.allSelected},on:{"change":_vm.setCheckedItem}},[_c('span',{staticClass:"nitrozen-option-image",class:{
                    'nitrozen-dropdown-multicheckbox-selected': _vm.allSelected,
                  }},[_vm._v("All")])])],1)]},{"item":_vm.all_option,"selected":_vm.allSelected})],2):_vm._e(),(_vm.enable_select_all)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchInput),expression:"!searchInput"}],staticClass:"horizantal-divider"}):_vm._e(),_vm._l((_vm.items),function(item,index){return _c('span',{key:index,staticClass:"nitrozen-option ripple",class:{
            selected: item == _vm.selected,
            'nitrozen-option-group-label': item.isGroupLabel,
          },attrs:{"data-value":item.value},on:{"click":function($event){return _vm.selectItem(index, item)}}},[_vm._t("option",function(){return [_c('div',{staticClass:"nitrozen-option-container"},[(_vm.multiple && !item.isGroupLabel)?[_c('nitrozen-checkbox',{ref:("multicheckbox-" + index),refInFor:true,attrs:{"checkboxValue":item.value},on:{"change":_vm.setCheckedItem},model:{value:(_vm.selectedItems),callback:function ($$v) {_vm.selectedItems=$$v},expression:"selectedItems"}},[_c('span',{staticClass:"nitrozen-option-image",class:{
                      'nitrozen-dropdown-multicheckbox-selected':
                        _vm.selectedItems.includes(item.value),
                    }},[(item.logo)?_c('img',{staticClass:"nitrozen-option-logo",attrs:{"src":item.logo,"alt":"logo"}}):_vm._e(),_vm._v(" "+_vm._s(item.text))])])]:[_c('span',{staticClass:"nitrozen-option-image",class:{
                    'nitrozen-option-child-label':
                      _vm.items.find(function (i) { return i.isGroupLabel; }) && !item.isGroupLabel,
                  }},[(item.logo)?_c('img',{staticClass:"nitrozen-option-logo",attrs:{"src":item.logo,"alt":"logo"}}):_vm._e(),_vm._v(" "+_vm._s(item.text)+" ")])]],2)]},{"item":item,"selected":item == _vm.selected})],2)}),(_vm.searchable && _vm.items.length == 0)?_c('span',{staticClass:"nitrozen-option"},[(!_vm.add_option)?_c('div',{staticClass:"nitrozen-option-container"},[_vm._v(" No "+_vm._s(_vm.label)+" Found ")]):(_vm.add_option && _vm.searchInput.length)?_c('div',{staticClass:"nitrozen-option-container"},[_c('div',{staticClass:"nitrozen-dropdown-empty",on:{"click":_vm.addOption}},[_c('nitrozen-inline',{attrs:{"icon":"plus-btn"}}),_c('p',[_vm._v("Add "+_vm._s(_vm.searchInput))])],1)]):_vm._e()]):_vm._e()],2)])])])}
var NListingOptionsvue_type_template_id_21c6e522_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NListingOptions/NListingOptions.vue?vue&type=template&id=21c6e522&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NListingOptions/NListingOptions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var NListingOptionsvue_type_script_lang_js_ = ({
  name: "nitrozen-listing-options",
  components: {
    "nitrozen-inline": NInline["a" /* default */],
    "nitrozen-checkbox": NCheckbox["a" /* default */],
    "nitrozen-tooltip": NTooltip["a" /* default */]
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dropdown-" + Object(NUuid["a" /* default */])()
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
     * disabled dropdown
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
    },

    /**
     * Add if not present
     */
    add_option: {
      type: Boolean,
      default: false
    },
    enable_select_all: {
      type: Boolean,
      default: false
    },

    /**For default checkbox */
    defaultCheckbox: {
      type: Boolean,
      default: false
    },
    itemsChecked: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    dropdownOptions: {
      type: Array,
      defult: []
    },
    selectedStatus: {
      type: [Array, Number],
      default: []
    } // indeterminate: {
    //   type: Boolean,
    //   default: false,
    // },

  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null,
      allSelected: false,
      allOptionsSelected: false,
      all_option: {
        text: "Select All",
        value: "all"
      },
      checboxSelected: false,
      indeterminate: false,
      checkDropdownStatus: ""
    };
  },
  watch: {
    totalItems() {
      console.log(this.totalItems);
      console.log(this.dropdownOptions);
    },

    itemsChecked() {
      this.checkedItems();
    },

    selectedStatus() {
      console.log(this.selectedStatus, "this.selectedStatus");
      this.$emit("checkDropdownStatus", this.selectedStatus); // let checkStatusObj = this.dropdownOptions.filter(
      //   (item) => item.value === this.selectedStatus
      // );
      // console.log(checkStatusObj);
      // this.checkDropdownStatus = checkStatusObj[0].value;
      // console.log(this.checkDropdownStatus);
      // if()
      // console.log(this.selectedStatus);
    },

    value() {
      if (Array.isArray(this.value)) {
        this.selectedItems = [...this.value];
      }

      if (!this.multiple && this.searchable) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : this.value;
      }

      this.setAllOptions();
    },

    items: {
      handler: function () {
        this.setAllOptions();
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
            this.searchInput = this.selected ? this.selected.text : "";
          }
        }

        if (this.selected && this.selected.text) {
          return this.selected.text;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      } else {
        if (this.allOptionsSelected) {
          return `All ${this.selectedItems.length} ${this.label} selected`;
        }

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
          return `${tmp.join(", ")}`;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }

        return "";
      }
    },
    searchInputPlaceholder: function () {
      if (this.enable_select_all && this.selectedItems.length) {
        if (this.selectedItems.length === this.getItems(this.items).length) {
          return `All ${this.label}(s) selected`;
        }

        return `${this.selectedItems.length} ${this.label}(s) selected`;
      }

      return this.placeholder || `Search ${this.label}`;
    }
  },

  mounted() {
    if (!this.multiple) {
      this.enable_select_all = false;

      if (this.value) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : "";
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
        this.setAllOptions(true);
      }
    }
  },

  methods: {
    checkedItems() {
      if (this.itemsChecked === 0) {
        this.checboxSelected = false;
        this.indeterminate = false;
      } else if (this.itemsChecked < this.totalItems || this.itemsChecked > this.totalItems) {
        this.checboxSelected = false;
        this.indeterminate = true;
      } else {
        this.checboxSelected = true;
        this.indeterminate = false;
      }
    },

    getItems(items) {
      return items.filter(function (item) {
        return !item.isGroupLabel;
      }).map(item => item.value);
    },

    setAllOptions(mounted = false) {
      let items = [...this.items];

      if (mounted) {
        items = [...this.value];
      }

      if (this.multiple && this.enable_select_all) {
        this.allOptionsSelected = this.selectedItems.length === this.getItems(items).length && this.enable_select_all;
        this.allSelected = this.allOptionsSelected;
      }
    },

    selectItem(index, item) {
      if (item.isGroupLabel) {
        return;
      }

      if (!this.multiple) {
        this.selected = item;

        if (item.text) {
          this.searchInput = item.text;
        }

        this.$emit("input", item.value); // v-model implementation

        this.$emit("change", item.value);
      } else {
        if (index === "all") {
          this.allSelected = !this.allSelected;

          if (this.allSelected) {
            this.selectedItems = this.getItems(this.items);
          } else {
            this.selectedItems = [];
          }

          const multicheckbox = this.$refs[`multicheckbox-${index}`];
          if (multicheckbox) multicheckbox.toggleAll(this.selectedItems);
          event.stopPropagation();
        } else {
          const multicheckbox = this.$refs[`multicheckbox-${index}`][0];
          if (multicheckbox) multicheckbox.toggle();
          event.stopPropagation();
          this.allSelected = this.allOptionsSelected;
        }
      }
    },

    addOption() {
      let value = this.searchInput;
      this.searchInput = "";
      this.$emit("addOption", value);
      this.eventEmit({}, "searchInputChange");
      this.calculateViewport();
    },

    setCheckedItem() {
      this.$emit("input", this.selectedItems); // v-model implementation

      this.$emit("change", this.selectedItems);
    },

    searchInputChange(e) {
      this.showOptions = true;
      this.searchInput = e.target.value;
      console.log(e.target.value);
      let obj = {
        id: this.id,
        text: this.searchInput
      };

      if (!this.searchInput) {
        this.setAllOptions();
      }

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

      if (select && !select.contains(e.target)) {
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
    },

    handleTABKey: function (event) {
      // TAB key detection
      if (event.keyCode == 9 && this.showOptions) {
        event.preventDefault();
        event.stopPropagation();
        this.showOptions = false;
      }
    }
  },

  created() {
    this.calculateViewport();

    if (typeof document !== "undefined") {
      document.addEventListener("click", this.documentClick);
      document.addEventListener("keydown", this.handleTABKey);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.calculateViewport);
      window.addEventListener("scroll", this.calculateViewport);
    }
  },

  destroyed() {
    document.removeEventListener("click", this.documentClick);
    document.removeEventListener("keydown", this.handleTABKey);
    window.removeEventListener("resize", this.calculateViewport);
    window.removeEventListener("scroll", this.calculateViewport);
  }

});
// CONCATENATED MODULE: ./src/components/NListingOptions/NListingOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var NListingOptions_NListingOptionsvue_type_script_lang_js_ = (NListingOptionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NListingOptions/NListingOptions.vue?vue&type=style&index=0&lang=less&
var NListingOptionsvue_type_style_index_0_lang_less_ = __webpack_require__("572c");

// CONCATENATED MODULE: ./src/components/NListingOptions/NListingOptions.vue






/* normalize component */

var NListingOptions_component = Object(componentNormalizer["a" /* default */])(
  NListingOptions_NListingOptionsvue_type_script_lang_js_,
  NListingOptionsvue_type_template_id_21c6e522_render,
  NListingOptionsvue_type_template_id_21c6e522_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NListingOptions = (NListingOptions_component.exports);
// CONCATENATED MODULE: ./src/components/NListingOptions/index.js


/* harmony default export */ var components_NListingOptions = (NListingOptions);
// CONCATENATED MODULE: ./src/components/index.js






















// CONCATENATED MODULE: ./src/entry-lib.js
// export * from './components/NSnackbar';


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb67":
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(6),r=(n.n(a),n(7)),o=n(8);t.a={name:"VueTelInput",directives:{"click-outside":{bind:function(e,t,n){if("function"!=typeof t.value){var i=n.context.name,a="[Vue-click-outside:] provided expression "+t.expression+" is not a function, but has to be";i&&(a+="Found in component "+i),console.warn(a)}var r=t.modifiers.bubble,o=function(n){var i=n.path||n.composedPath&&n.composedPath();(r||i.length&&!e.contains(i[0])&&e!==i[0])&&t.value(n)};e.__vueClickOutside__=o,document.addEventListener("click",o)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},props:{value:{type:String,default:""},placeholder:{type:String,default:"Enter a phone number"},disabledFetchingCountry:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledFormatting:{type:Boolean,default:!1},invalidMsg:{default:"",type:String},required:{type:Boolean,default:!1},defaultCountry:{type:String,default:""},enabledCountryCode:{type:Boolean,default:!1},enabledFlags:{type:Boolean,default:!0},preferredCountries:{type:Array,default:function(){return[]}},onlyCountries:{type:Array,default:function(){return[]}},ignoredCountries:{type:Array,default:function(){return[]}},autocomplete:{type:String,default:"on"},name:{type:String,default:"telephone"},wrapperClasses:{type:[String,Array,Object],default:""},inputClasses:{type:[String,Array,Object],default:""},inputId:{type:String,default:""},dropdownOptions:{type:Object,default:function(){return{}}},inputOptions:{type:Object,default:function(){return{}}},maxLen:{type:Number,default:25},validCharactersOnly:{type:Boolean,default:!1}},data:function(){return{phone:"",activeCountry:{iso2:""},open:!1,selectedIndex:null,typeToFindInput:"",typeToFindTimer:null}},computed:{mode:function(){return this.phone?"+"===this.phone[0]?"code":"0"===this.phone[0]?"prefix":"normal":""},filteredCountries:function(){var e=this;return this.onlyCountries.length?this.getCountries(this.onlyCountries):this.ignoredCountries.length?r.a.filter(function(t){var n=t.iso2;return!e.ignoredCountries.includes(n.toUpperCase())&&!e.ignoredCountries.includes(n.toLowerCase())}):r.a},sortedCountries:function(){return[].concat(i(this.getCountries(this.preferredCountries).map(function(e){return Object.assign({},e,{preferred:!0})})),i(this.filteredCountries))},formattedResult:function(){if(!this.mode||!this.filteredCountries)return"";var e=this.phone;if("code"===this.mode){var t=new a.AsYouType;t.input(this.phone),this.activeCountry=this.findCountry(t.country)||this.activeCountry}else"prefix"===this.mode&&(e=this.phone.slice(1));return this.disabledFormatting?this.phone:Object(a.formatNumber)(e,this.activeCountry&&this.activeCountry.iso2,"International")},state:function(){return Object(a.isValidNumber)(this.formattedResult,this.activeCountry&&this.activeCountry.iso2)},response:function(){var e={number:this.state?this.formattedResult:this.phone,isValid:this.state,country:this.activeCountry};return this.disabledFormatting&&Object.assign(e,{formattedNumber:Object(a.formatNumber)(this.phone,this.activeCountry&&this.activeCountry.iso2,"International")}),e}},watch:{state:function(e){e&&"prefix"!==this.mode&&(this.phone=this.formattedResult),this.$emit("onValidate",this.response),this.$emit("validate",this.response)},value:function(){this.phone=this.value},open:function(e){e?this.$emit("open"):this.$emit("close")},phone:function(e,t){var n=this;this.validCharactersOnly&&!this.testCharacters()&&this.$nextTick(function(){n.phone=t})},activeCountry:function(e){e&&e.iso2&&this.$emit("country-changed",e)}},mounted:function(){var e=this;this.initializeCountry().then(function(){!e.phone&&e.inputOptions&&e.inputOptions.showDialCode&&e.activeCountry&&(e.phone="+"+e.activeCountry.dialCode),e.$emit("validate",e.response),e.$emit("onValidate",e.response)}).catch(console.error)},created:function(){this.value&&(this.phone=this.value.trim())},methods:{initializeCountry:function(){var e=this;return new Promise(function(t){if(e.phone&&"+"===e.phone[0]){var n=Object(a.parsePhoneNumberFromString)(e.phone);if(n&&n.country)return e.activeCountry=n.country,void t()}if(e.defaultCountry){var i=e.findCountry(e.defaultCountry);if(i)return e.activeCountry=i,void t()}e.activeCountry=e.findCountry(e.preferredCountries[0])||e.filteredCountries[0],e.disabledFetchingCountry?t():Object(o.a)().then(function(t){e.activeCountry=e.findCountry(t)||e.activeCountry}).finally(t).catch(function(e){console.warn(e)})})},getCountries:function(){var e=this;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return e.findCountry(t)}).filter(Boolean)},findCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.find(function(t){return t.iso2===e.toUpperCase()})},getItemClass:function(e,t){return{highlighted:this.selectedIndex===e,"last-preferred":e===this.preferredCountries.length-1,preferred:this.preferredCountries.some(function(e){return e.toUpperCase()===t})}},choose:function(e){this.activeCountry=e,this.inputOptions&&this.inputOptions.showDialCode&&e&&(this.phone="+"+e.dialCode),this.$emit("input",this.response.number,this.response),this.$emit("onInput",this.response)},testCharacters:function(){return/^[()-+0-9\s]*$/.test(this.phone)},onInput:function(){this.validCharactersOnly&&!this.testCharacters()||(this.$refs.input.setCustomValidity(this.response.isValid?"":this.invalidMsg),this.$emit("input",this.response.number,this.response),this.$emit("onInput",this.response))},onBlur:function(){this.$emit("blur"),this.$emit("onBlur")},onEnter:function(){this.$emit("enter"),this.$emit("onEnter")},onSpace:function(){this.$emit("space"),this.$emit("onSpace")},focus:function(){this.$refs.input.focus()},toggleDropdown:function(){this.disabled||(this.open=!this.open)},clickedOutside:function(){this.open=!1},keyboardNav:function(e){var t=this;if(40===e.keyCode){e.preventDefault(),this.open=!0,null===this.selectedIndex?this.selectedIndex=0:this.selectedIndex=Math.min(this.sortedCountries.length-1,this.selectedIndex+1);var n=this.$refs.list.children[this.selectedIndex];n.offsetTop+n.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight&&(this.$refs.list.scrollTop=n.offsetTop-this.$refs.list.clientHeight+n.clientHeight)}else if(38===e.keyCode){e.preventDefault(),this.open=!0,null===this.selectedIndex?this.selectedIndex=this.sortedCountries.length-1:this.selectedIndex=Math.max(0,this.selectedIndex-1);var i=this.$refs.list.children[this.selectedIndex];i.offsetTop<this.$refs.list.scrollTop&&(this.$refs.list.scrollTop=i.offsetTop)}else if(13===e.keyCode)null!==this.selectedIndex&&this.choose(this.sortedCountries[this.selectedIndex]),this.open=!this.open;else{this.typeToFindInput+=e.key,clearTimeout(this.typeToFindTimer),this.typeToFindTimer=setTimeout(function(){t.typeToFindInput=""},700);var a=this.sortedCountries.slice(this.preferredCountries.length).findIndex(function(e){return e.name.toLowerCase().startsWith(t.typeToFindInput)});if(a>=0){this.selectedIndex=this.preferredCountries.length+a;var r=this.$refs.list.children[this.selectedIndex],o=r.offsetTop<this.$refs.list.scrollTop,s=r.offsetTop+r.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight;(o||s)&&(this.$refs.list.scrollTop=r.offsetTop-this.$refs.list.clientHeight/2)}}},reset:function(){this.selectedIndex=this.sortedCountries.map(function(e){return e.iso2}).indexOf(this.activeCountry.iso2),this.open=!1}}}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function i(e){n(3),n(4)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(9),o=n(5),s=i,u=o(a.a,r.a,!1,s,"data-v-9d46625e",null);t.default=u.exports},function(e,t){},function(e,t){},function(e,t){e.exports=function(e,t,n,i,a,r){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var d;if(r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=d):i&&(d=i),d){var c=l.functional,p=c?l.render:l.beforeCreate;c?(l._injectStyles=d,l.render=function(e,t){return d.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,d):[d]}return{esModule:o,exports:s,options:l}}},function(e,t){e.exports=__webpack_require__("3e84")},function(e,t,n){"use strict";var i=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]];t.a=i.map(function(e){return{name:e[0],iso2:e[1].toUpperCase(),dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}})},function(e,t,n){"use strict";function i(){return fetch("https://ip2c.org/s").then(function(e){return e.text()}).then(function(e){var t=(e||"").toString();if(!t||"1"!==t[0])throw new Error("unable to fetch the country");return t.substr(2,2)})}t.a=i},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vue-tel-input",e.wrapperClasses,{disabled:e.disabled}]},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutside,expression:"clickedOutside"}],staticClass:"dropdown",class:{open:e.open},attrs:{tabindex:e.dropdownOptions&&e.dropdownOptions.tabindex?e.dropdownOptions.tabindex:0},on:{keydown:[e.keyboardNav,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.reset(t)}],click:e.toggleDropdown}},[n("span",{staticClass:"selection"},[e.enabledFlags?n("div",{staticClass:"iti-flag",class:e.activeCountry.iso2.toLowerCase()}):e._e(),e._v(" "),e.enabledCountryCode?n("span",{staticClass:"country-code"},[e._v("+"+e._s(e.activeCountry.dialCode))]):e._e(),e._v(" "),e._t("arrow-icon",[n("span",{staticClass:"dropdown-arrow"},[e._v(e._s(e.open?"▲":"▼"))])],{open:e.open})],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"list"},e._l(e.sortedCountries,function(t,i){return n("li",{key:t.iso2+(t.preferred?"-preferred":""),staticClass:"dropdown-item",class:e.getItemClass(i,t.iso2),on:{click:function(n){return e.choose(t)},mousemove:function(t){e.selectedIndex=i}}},[e.enabledFlags?n("div",{staticClass:"iti-flag",class:t.iso2.toLowerCase()}):e._e(),e._v(" "),n("strong",[e._v(e._s(t.name))]),e._v(" "),e.dropdownOptions&&!e.dropdownOptions.disabledDialCode?n("span",[e._v("+"+e._s(t.dialCode))]):e._e()])}),0)]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],ref:"input",class:e.inputClasses,attrs:{placeholder:e.placeholder,disabled:e.disabled,required:e.required,autocomplete:e.autocomplete,name:e.name,id:e.inputId,maxlength:e.maxLen,tabindex:e.inputOptions&&e.inputOptions.tabindex?e.inputOptions.tabindex:0,type:"tel"},domProps:{value:e.phone},on:{blur:e.onBlur,input:[function(t){t.target.composing||(e.phone=t.target.value)},e.onInput],keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.onSpace(t)}]}})])},a=[],r={render:i,staticRenderFns:a};t.a=r}]);

/***/ }),

/***/ "fcf0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb0");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NInput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
});
//# sourceMappingURL=nitrozen.umd.js.map