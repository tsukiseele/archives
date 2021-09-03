exports.ids = [21];
exports.modules = {

/***/ 40:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_1495abe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_1495abe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_1495abe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_1495abe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_1495abe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_page.vue?vue&type=template&id=1495abe4&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[_c('TheBanner',{ref:"banner",attrs:{"title":_vm.header.title,"subtitle":_vm.header.subtitle,"isFull":_vm.header.isFull,"isHide":_vm.header.isHide,"isHideSubtitle":_vm.header.isHideSubtitle,"cover":_vm.$src.images.backgrounds[7]}}),_vm._ssrNode("<main id=\"main\" data-v-1495abe4>","</main>",[_vm._ssrNode("<div"+(_vm._ssrClass("aside-wrap",{ down: !_vm.isMobile && /*scroll.change < 0 && */ _vm.scroll.pos > _vm.bannerHeight() }))+" data-v-1495abe4>","</div>",[_c('TheInfoCard',{class:_vm.asideClasses,style:(_vm.asideStyles),attrs:{"icon":_vm.res.icon}}),_vm._ssrNode("<div class=\"sticky\" data-v-1495abe4>","</div>",[_c('SLabelClouds',{staticClass:"card",attrs:{"labels":_vm.labels}}),_c('TheArchives',{attrs:{"archives":_vm.arch}})],1)],1),_vm._ssrNode("<div class=\"post\" data-v-1495abe4>","</div>",[_vm._ssrNode(((_vm.error)?("<div class=\"error\" data-v-1495abe4>"+_vm._ssrEscape(_vm._s(_vm.error))+"</div>"):"<!---->")),_vm._l((_vm.archives),function(item,index){return _vm._ssrNode("<div class=\"post-item-wrap\" data-v-1495abe4>","</div>",[_c('SPostItem',{key:index,attrs:{"title":item.title,"cover":item.cover.url,"date":item.createAt,"labels":item.labels,"description":item.description,"to":("/archives/" + (item.id || '')),"placeholder":_vm.res.placeholder,"data-aos":index % 2 == 0 ? 'fade-left' : 'fade-right',"data-aos-once":_vm.isAosOnce}})],1)}),_c('SPagination',{attrs:{"current":_vm.page,"size":10,"loading":_vm.isLoading},on:{"change":_vm.onChange}})],2)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/post/_page.vue?vue&type=template&id=1495abe4&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _pagevue_type_script_lang_js_ = ({
  scrollToTop: true,
  data: () => ({
    header: {
      title: "WATORA"
    },
    arch: null,
    error: null,
    isLoading: false,
    itemActive: null,
    isAosOnce: true,
    // 侧栏
    asideStyles: {},
    asideClasses: {},
    asidePos: null
  }),
  watch: {
    itemActive(newVal, oldVal) {
      if (newVal) {
        this.$store.commit("live2dText", `要阅读『${newVal} 』吗?`);
      }
    }
    /*
    $route: {
    handler(to, from) {
      if (process.client) {
        this.$nextTick(() => {
          setTimeout(() => {
            document
              .getElementById("container")
              .scrollIntoView({ behavior: "smooth" });
          }, 0);
        });
      }
    },
    deep: true,
    immediate: true,
    },*/


  },
  computed: { ...Object(external_vuex_["mapState"])(["page", "scroll", "archives", "labels"]),

    isMobile() {
      return this.$store.getters.isMobile;
    },

    res() {
      const icon = `${this.$static}/icon/icon.png`;
      const placeholder = this.$src.images.placeholder;
      return {
        icon,
        placeholder
      };
    }

  },
  methods: {
    async onChange(page) {
      this.$router.push({
        params: {
          page
        }
      });
    },

    bannerHeight() {
      if (false) {}
    }

  },

  async fetch({
    store,
    params
  }) {
    await Promise.all([store.dispatch("archives", {
      page: Number(params.page || 1),
      count: 10
    }), store.dispatch("labels")]);
  }

});
// CONCATENATED MODULE: ./pages/post/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/post/_page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1495abe4",
  "2be62816"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheBanner: function () { return __webpack_require__.e(/* import() | components/the-banner */ 11).then(__webpack_require__.bind(null, 101)).then(function(m) { return m['default'] || m }) },TheInfoCard: function () { return __webpack_require__.e(/* import() | components/the-info-card */ 13).then(__webpack_require__.bind(null, 94)).then(function(m) { return m['default'] || m }) },SLabelClouds: function () { return __webpack_require__.e(/* import() | components/s-label-clouds */ 4).then(__webpack_require__.bind(null, 97)).then(function(m) { return m['default'] || m }) },TheArchives: function () { return __webpack_require__.e(/* import() | components/the-archives */ 9).then(__webpack_require__.bind(null, 93)).then(function(m) { return m['default'] || m }) },SPostItem: function () { return __webpack_require__.e(/* import() | components/s-post-item */ 7).then(__webpack_require__.bind(null, 100)).then(function(m) { return m['default'] || m }) },SPagination: function () { return __webpack_require__.e(/* import() | components/s-pagination */ 6).then(__webpack_require__.bind(null, 99)).then(function(m) { return m['default'] || m }) }})


/***/ })

};;
//# sourceMappingURL=_page.js.map