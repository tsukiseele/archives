exports.ids = [18];
exports.modules = {

/***/ 37:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_045f305f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_045f305f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_045f305f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_045f305f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_045f305f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/archives/_id.vue?vue&type=template&id=045f305f&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[(_vm.archive)?_c('TheBanner',{attrs:{"title":_vm.archive.title,"cover":_vm.archive.cover.url,"subtitle":_vm.header.subtitle,"disableTyping":false}}):_vm._e(),_vm._ssrNode("<main id=\"main\" data-v-045f305f>","</main>",[_vm._ssrNode("<div class=\"archive\" data-v-045f305f>","</div>",[_vm._ssrNode("<div class=\"markdown\" data-v-045f305f>","</div>",[_c('client-only',[_c('SMarkdown',{attrs:{"content":_vm.archive.content}})],1)],1),_c('client-only',[_c('SComment',{attrs:{"title":this.$route.path}})],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/archives/_id.vue?vue&type=template&id=045f305f&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/archives/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data: () => ({
    markdown: {
      toolbars: {
        fullscreen: false
      }
    },
    comments: {}
  }),
  computed: { ...Object(external_vuex_["mapState"])(["archive"]),

    header() {
      return {
        title: this.archive ? this.archive.title : "无题",
        subtitle: this.archive ? this.archive.description : "无题",
        isHideSubtitle: true,
        isHide: true
      };
    }
    /*
    archive() {
      return this.$store.state.archive || {};
    }*/


  },
  methods: {},

  async asyncData({
    store,
    params
  }) {
    const id = parseInt(params.id);
    await store.dispatch("archive", {
      id
    });
  }

});
// CONCATENATED MODULE: ./pages/archives/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var archives_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/archives/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  archives_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "045f305f",
  "f383065c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheBanner: function () { return __webpack_require__.e(/* import() | components/the-banner */ 11).then(__webpack_require__.bind(null, 98)).then(function(m) { return m['default'] || m }) },SMarkdown: function () { return __webpack_require__.e(/* import() | components/s-markdown */ 5).then(__webpack_require__.bind(null, 95)).then(function(m) { return m['default'] || m }) },SComment: function () { return __webpack_require__.e(/* import() | components/s-comment */ 2).then(__webpack_require__.bind(null, 88)).then(function(m) { return m['default'] || m }) }})


/***/ })

};;
//# sourceMappingURL=_id.js.map