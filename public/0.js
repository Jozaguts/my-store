(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      buttons: [{
        icon: "mdi-facebook",
        href: "https://www.facebook.com/JozagutsDev"
      }, {
        icon: "mdi-twitter",
        href: "https://www.twitter.com/jozaguts"
      }, {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/jozaguts/"
      }, {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/jozagutsdev"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    { attrs: { dark: "", padless: "" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", align: "center" } },
                _vm._l(_vm.buttons, function(button) {
                  return _c(
                    "v-btn",
                    {
                      key: button.icon,
                      staticClass: "mx-4 white--text",
                      attrs: { href: button.href, target: "_blank" }
                    },
                    [
                      _c("v-icon", { attrs: { size: "24px" } }, [
                        _vm._v(_vm._s(button.icon))
                      ])
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12", align: "center" } }, [
                _c("p", { staticClass: "white--text pt-0" }, [
                  _vm._v(
                    "This platform was created with the following technologies."
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { align: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/vuetify.png */ "./resources/js/assets/img/vuetify.png"),
                      "max-width": "100",
                      alt: "Vuetify",
                      name: "Vuetify"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/vuejs.png */ "./resources/js/assets/img/vuejs.png"),
                      "max-width": "100",
                      "aspect-ratio": "1",
                      contain: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/vue-router.png */ "./resources/js/assets/img/vue-router.png"),
                      "max-width": "100",
                      "aspect-ratio": "1",
                      contain: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/vuex.png */ "./resources/js/assets/img/vuex.png"),
                      "max-width": "100",
                      "aspect-ratio": "1",
                      contain: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/laravel.png */ "./resources/js/assets/img/laravel.png"),
                      "max-width": "100",
                      "aspect-ratio": "1",
                      contain: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! ../assets/img/S3.png */ "./resources/js/assets/img/S3.png"),
                      "max-width": "100",
                      "aspect-ratio": "1",
                      contain: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", align: "center" } },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("p", { staticClass: "white--text" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(new Date().getFullYear()) +
                        " —\n          "
                    ),
                    _c("strong", [_vm._v("Jozaguts")])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/S3.png":
/*!****************************************!*\
  !*** ./resources/js/assets/img/S3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/S3.png?2ced04acafdeda74781e12e4af2d1f9b";

/***/ }),

/***/ "./resources/js/assets/img/laravel.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/img/laravel.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/laravel.png?9b2988e66bbc62ceea4f3b28c0295237";

/***/ }),

/***/ "./resources/js/assets/img/vue-router.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/vue-router.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vue-router.png?bc780e6a98d4edd433665b9abac0a57e";

/***/ }),

/***/ "./resources/js/assets/img/vuejs.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/vuejs.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vuejs.png?ab8615a14e0c913d0b9d951c3480a943";

/***/ }),

/***/ "./resources/js/assets/img/vuetify.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/img/vuetify.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vuetify.png?73ff51f649d22eb349175ba9fd7b9631";

/***/ }),

/***/ "./resources/js/assets/img/vuex.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/vuex.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vuex.png?3ec7a538a9b50e121496e0408c1ab7d0";

/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);