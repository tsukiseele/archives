exports.ids = [22];
exports.modules = {

/***/ 38:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16e8de2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16e8de2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16e8de2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16e8de2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16e8de2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/timeline/index.vue?vue&type=template&id=16e8de2b&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[_vm._ssrNode("<main id=\"main\" data-v-16e8de2b><div class=\"timeline\" data-v-16e8de2b>"+(_vm._ssrList((_vm.timeline),function(group,key){return ("<div class=\"timeline-group\" data-v-16e8de2b><p class=\"timeline-group-title\" data-v-16e8de2b>"+_vm._ssrEscape(_vm._s(key))+"</p>"+(_vm._ssrList((group),function(item,index){return ("<div class=\"timeline-item\" data-v-16e8de2b><span class=\"timeline-item-tags\" data-v-16e8de2b><i class=\"fa fa-tag\" style=\"padding: 0 .2rem;\" data-v-16e8de2b></i><span data-v-16e8de2b>"+_vm._ssrEscape(_vm._s(item.articleType || '未分类')+" ")+"</span></span><span class=\"timeline-item-title\" data-v-16e8de2b>"+_vm._ssrEscape(_vm._s(item.articleTitle))+"</span></div>")}))+"</div>")}))+"</div></main>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/timeline/index.vue?vue&type=template&id=16e8de2b&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/timeline/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var timelinevue_type_script_lang_js_ = ({
  data: () => ({
    archives: [],
    error: null
  }),

  fetch() {
    this.$store.commit("header", {
      title: "『时间线』"
    });
  },

  async asyncData({
    app
  }) {
    let archives;
    const res = await app.$api.getAllArticles();

    if (res.ok) {
      archives = res.data;
    }

    return {
      archives
    };
  },

  computed: {
    timeline() {
      if (this.archives) {
        const timeline = {};

        for (const article of this.archives) {
          const date = new Date(article.articleDate);
          const group = `${date.getFullYear()}年${date.getMonth()}月`;

          if (group in timeline) {
            timeline[group].push(article);
          } else {
            timeline[group] = [article];
          }
        }

        return timeline;
      } else {
        return [];
      }
    }

  },

  mounted() {
    console.log(this.timeline);
  }

});
// CONCATENATED MODULE: ./pages/timeline/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_timelinevue_type_script_lang_js_ = (timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/timeline/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_timelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16e8de2b",
  "4d26003a"
  
)

/* harmony default export */ var timeline = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map