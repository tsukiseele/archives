exports.ids = [7];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SPostItem/SPostItem.vue?vue&type=template&id=0123d3ae&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-item",on:{"click":function($event){return _vm.$router.push(_vm.to)}}},[_vm._ssrNode("<div class=\"item-cover-box\" data-v-0123d3ae>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.cover || _vm.placeholder),expression:"cover || placeholder"}],staticClass:"item-cover"},[])]),_vm._ssrNode("<div class=\"item-info\" data-v-0123d3ae>","</div>",[_vm._ssrNode("<div class=\"item-title\" data-v-0123d3ae>"+_vm._ssrEscape(_vm._s(_vm.title))+"</div><span class=\"item-preview\" data-v-0123d3ae>"+_vm._ssrEscape(_vm._s(_vm.description))+"</span>"),_vm._ssrNode("<ul class=\"item-labels\" data-v-0123d3ae>","</ul>",[_vm._ssrNode("<li class=\"item-label\" data-v-0123d3ae>","</li>",[_c('SChip',{attrs:{"text":_vm._f("formatTimeAgo")(_vm.date),"icon":"event_note"}})],1),_vm._l((_vm.labels),function(label,i){return _vm._ssrNode("<li class=\"item-label\" data-v-0123d3ae>","</li>",[_c('SChip',{attrs:{"text":label.name,"icon":"sell"}})],1)})],2)],2),_vm._ssrNode("<div class=\"item-category\" data-v-0123d3ae><i class=\"category-icon material-icons\" data-v-0123d3ae>bookmark</i><span class=\"category-text\" data-v-0123d3ae>"+_vm._ssrEscape(_vm._s(_vm.category || '未分类'))+"</span></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SPostItem/SPostItem.vue?vue&type=template&id=0123d3ae&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SPostItem/SPostItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SPostItemvue_type_script_lang_js_ = ({
  props: {
    to: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    cover: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    labels: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: null
    },
    category: {
      type: Object,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/SPostItem/SPostItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SPostItem_SPostItemvue_type_script_lang_js_ = (SPostItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SPostItem/SPostItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SPostItem_SPostItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0123d3ae",
  "47b2bed5"
  
)

/* harmony default export */ var SPostItem = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SChip: function () { return __webpack_require__.e(/* import() | components/s-chip */ 1).then(__webpack_require__.bind(null, 96)).then(function(m) { return m['default'] || m }) }})


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SPostItem_vue_vue_type_style_index_0_id_0123d3ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SPostItem_vue_vue_type_style_index_0_id_0123d3ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SPostItem_vue_vue_type_style_index_0_id_0123d3ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SPostItem_vue_vue_type_style_index_0_id_0123d3ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SPostItem_vue_vue_type_style_index_0_id_0123d3ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=s-post-item.js.map