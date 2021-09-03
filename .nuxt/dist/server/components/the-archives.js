exports.ids = [9];
exports.modules = {

/***/ 47:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheArchives_vue_vue_type_style_index_0_id_ec9f3a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheArchives_vue_vue_type_style_index_0_id_ec9f3a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheArchives_vue_vue_type_style_index_0_id_ec9f3a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheArchives_vue_vue_type_style_index_0_id_ec9f3a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheArchives_vue_vue_type_style_index_0_id_ec9f3a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheArchives.vue?vue&type=template&id=ec9f3a8a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"archive card"},[_vm._ssrNode("<div class=\"archive-title\" data-v-ec9f3a8a>归档</div>"),_vm._l((_vm.archives),function(articles,date){return _c('nuxt-link',{key:date,staticClass:"archive-item normal",attrs:{"to":("/archives/" + (articles[0].articleId))}},[_c('span',{staticClass:"article-date"},[_vm._v(_vm._s(date))])])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheArchives.vue?vue&type=template&id=ec9f3a8a&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheArchives.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheArchivesvue_type_script_lang_js_ = ({
  props: {
    articles: {
      type: Array,
      default: undefined
    }
  },
  computed: {
    archives() {
      if (this.articles) {
        let timeline = {};

        for (let article of this.articles) {
          let date = new Date(article.articleDate);
          let group = `${date.getFullYear()} ${this.dateNumConvert(date.getMonth())}月`; //`${date.getFullYear()} ${date.getMonth()}`;

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
  methods: {
    dateNumConvert(number) {
      var dict = {
        0: "零",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九",
        10: "十",
        11: "十一",
        12: "十二",
        13: "十三",
        14: "十四",
        15: "十五",
        16: "十六",
        17: "十七",
        18: "十八",
        19: "十九",
        20: "二十",
        21: "二十一",
        22: "二十二",
        23: "二十三",
        24: "二十四",
        25: "二十五",
        26: "二十六",
        27: "二十七",
        28: "二十八",
        29: "二十九",
        30: "三十",
        31: "三十一"
      };
      return dict[number];
    }

  }
});
// CONCATENATED MODULE: ./components/TheArchives.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheArchivesvue_type_script_lang_js_ = (TheArchivesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheArchives.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheArchivesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ec9f3a8a",
  "2f3287f2"
  
)

/* harmony default export */ var TheArchives = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=the-archives.js.map