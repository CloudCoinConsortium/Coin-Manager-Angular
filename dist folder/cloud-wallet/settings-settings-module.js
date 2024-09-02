(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "ArlS":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/settings/settings-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "lGhB");





const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
    }
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Xxu/":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/settings/settings.module.ts ***!
  \*******************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "ArlS");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "lGhB");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "NiZn");









class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGhB":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");











function SettingsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Performance Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "These settings are used to manually control your server timeouts, modes of transaction, etc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " These are optimised based on your internet speed. & location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Max Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-slider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsComponent_div_13_Template_mat_slider_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.updateSetting($event, "max"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "1800");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Request Timeout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "1%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-slider", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsComponent_div_13_Template_mat_slider_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateSetting($event, "req"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Echo Timeout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "1%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-slider", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsComponent_div_13_Template_mat_slider_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.updateSetting($event, "echo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r0.formatLabel1)("value", ctx_r0.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r0.formatLabel)("value", ctx_r0.req);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.req);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r0.formatLabel)("value", ctx_r0.echo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.echo);
} }
function SettingsComponent_div_14_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter domain name in valid format. Max length is 61.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { btnDisable: a0 }; };
function SettingsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_14_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSubmit(ctx_r8.nftSettingsForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " You can publish your NFTs on your web server and record their authenticity in your DNS server. This allows people to verify the authenticity of the NFTs you have created and will make them more valuable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " You can find instructions on how to do this here: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "https://github.com/CloudCoinConsortium/CoinManager/tree/main/nft");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Your Domain Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SettingsComponent_div_14_Template_input_keydown_enter_19_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SettingsComponent_div_14_div_20_Template, 4, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Upload NFTs To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SettingsComponent_div_14_Template_input_keydown_enter_28_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Upload Page Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SettingsComponent_div_14_Template_input_keydown_enter_36_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CloudFlare DNS Api Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SettingsComponent_div_14_Template_input_keydown_enter_44_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.nftSettingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isValidInput("dnsname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r1.nftSettingsForm.invalid));
} }
const _c1 = function (a0) { return { "btnDisable": a0 }; };
function SettingsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.taskSetting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r2.settings == false));
} }
class SettingsComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.settings = false;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
        };
        this.tabSelector = 'performance';
    }
    ngOnInit() {
        this.regexp = "^(?:[a-zA-Z0-9\-][a-zA-Z0-9\-]{0,61})*([\.]{1,1}[a-z]{2,})+$";
        this.nftSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'dnsname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexp)),
            'url': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.upload_url, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'secretkey': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.secret_key, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'apikey': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.api_key, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.getAllwallet();
        this.getSetting();
        this.getConfDetails();
    }
    onSubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.nftSettingsForm);
            this.uploadConfFile();
        });
    }
    isValidInput(value) {
        return this.nftSettingsForm.controls[value].invalid &&
            (this.nftSettingsForm.controls[value].dirty || this.nftSettingsForm.controls[value].touched);
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    getSetting() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response = yield this.api.setting();
            if (response.status == 'success') {
                this.req = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.default_timeout_mult;
                this.echo = (_b = response.payload) === null || _b === void 0 ? void 0 : _b.echo_timeout_mult;
                this.max = (_c = response.payload) === null || _c === void 0 ? void 0 : _c.max_notes;
            }
        });
    }
    getAllwallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                this.all = response.payload;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    tabToggler(val) {
        this.tabSelector = val;
    }
    updateSetting(e, name) {
        this.settings = true;
        if (name == 'req') {
            this.req = e.value;
        }
        else if (name == 'echo') {
            this.echo = e.value;
        }
        else if (name == 'max') {
            this.max = e.value;
        }
    }
    taskSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.settings == true) {
                try {
                    var data = {
                        "default_timeout_mult": this.req,
                        "echo_timeout_mult": this.echo,
                        "max_notes": this.max,
                        "change_server_sn": 2
                    };
                    let response = yield this.api.settingTask(data);
                    console.log(response);
                    if (response.status === "success") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "Changes saved successfully!",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    uploadConfFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    upload_url: String(this.nftSettingsForm.get('url').value),
                    upload_secret_key: String(this.nftSettingsForm.get('secretkey').value),
                    cf_api_key: String(this.nftSettingsForm.get('apikey').value)
                };
                console.log(data);
                let response = yield this.api.updateNftConf(data);
                if (response.status === "success") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Changes have been uploaded successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    });
                    this.router.navigate(['/dashboard/create-settings']);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Failed to save changes',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    });
                    this.router.navigate(['/dashboard/create-settings']);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getConfDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.returnNftConf();
                if (response.status === "success") {
                    this.upload_url = response.payload.upload_url;
                    this.secret_key = response.payload.upload_secret_key;
                    this.api_key = response.payload.cf_api_key;
                    var splitted = this.upload_url.split("/", 3);
                    this.dname = splitted[2];
                }
                else {
                    console.log('no previous configurations found');
                }
                this.nftSettingsForm.patchValue({
                    secretkey: this.secret_key,
                    apikey: this.api_key,
                    url: this.upload_url,
                    dnsname: this.dname
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    clearForm() {
        this.nftSettingsForm.reset();
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 16, vars: 5, consts: [[1, "settingsWrapper"], [1, "headerbackWrap"], [1, "titleOne"], [1, "gap10"], [1, "settingBody"], [1, "tabHolder"], [1, "tabHeader"], ["href", "javascript:;", 1, "tabItem", 3, "ngClass", "click"], [1, "tabBody"], ["class", "tabPerformCont", 4, "ngIf"], [4, "ngIf"], ["class", "footerFixed", 4, "ngIf"], [1, "tabPerformCont"], [1, "subHedOne"], [1, "textOne"], [1, "note"], ["src", "assets/info-white.svg", "alt", "icon", "data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "Minimum means that it is faster but more likely to time out. Maximum means it is slower and less likely to time out."], [1, "gap20"], [1, "row"], [1, "col-md-12"], [1, "formField"], ["for", ""], ["data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "Coins the program will send at one time.", "src", "assets/question-white.svg", "alt", "icon"], [1, "text-white"], ["thumbLabel", "", "tickInterval", "100", "min", "1", "max", "1800", "aria-label", "units", 1, "min", 2, "width", "65%", 3, "displayWith", "value", "change"], [1, "badge", "badge-primary", 2, "border-radius", "100%", "width", "auto", "height", "30px", "padding-top", "10px", "margin-left", "60px"], ["data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "This is the amount of time the program will wait for a RAIDA to respond before it gives up. Normally a RAIDA should respond within .5 seconds. Increasing this to 100% will have it wait for 2 seconds. You can reduce this time to make the program run faster at the expense of accuracy.", "src", "assets/question-white.svg", "alt", "icon"], ["thumbLabel", "", "tickInterval", "100", "min", "1", "max", "100", "aria-label", "units", 1, "min", 2, "width", "65%", 3, "displayWith", "value", "change"], [1, "badge", "badge-primary", 2, "border-radius", "100%", "width", "auto", "height", "30px", "padding-top", "10px", "margin-left", "50px"], [3, "formGroup", "ngSubmit"], [1, "titleTwo", 2, "opacity", "0.8"], ["href", "https://github.com/CloudCoinConsortium/CoinManager/tree/main/nft", "target", "_blank"], [1, "formfield"], [1, "col-md-3"], ["for", "qualname", 1, "dark_mode_text"], [1, "ml-2"], ["src", "assets/icons_info1.png", "title", "You can create records in your DNS Server that prove that you are the creator of the NFT and customize each NFT.", 2, "height", "18px", "width", "18px"], [1, "col-md-2"], ["type", "text", "formControlName", "dnsname", "placeholder", "YourDomain.com", "maxlength", "61", 1, "form-control", "text_box_two", 3, "keydown.enter"], ["for", "url", 1, "dark_mode_text"], ["type", "text", "formControlName", "url", 1, "form-control", "text_box_two", 3, "keydown.enter"], ["for", "secretkey", 1, "dark_mode_text"], ["type", "text", "formControlName", "secretkey", 1, "form-control", "text_box_two", 3, "keydown.enter"], ["for", "apikey", 1, "dark_mode_text"], ["type", "text", "formControlName", "apikey", 1, "form-control", "text_box_two", 3, "keydown.enter"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], [1, "container"], ["href", "javascript:;", "type", "submit", 1, "btnCustomBlack", 3, "ngClass"], [1, "errorMsg1"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "footerFixed"], [1, "btnCustomBlack", 3, "ngClass", "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_8_listener() { return ctx.tabToggler("performance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_10_listener() { return ctx.tabToggler("nft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "NFT Publishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SettingsComponent_div_13_Template, 44, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SettingsComponent_div_14_Template, 51, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SettingsComponent_div_15_Template, 3, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tabSelector == "performance" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tabSelector == "nft" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "nft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "performance");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltip"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".settingsWrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  position: relative;\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n  height: calc(100vh - 240px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 1320px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 290px);\n  }\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 310px);\n  }\n}\n@media screen and (max-width: 576px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 320px);\n  }\n}\n.settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -30px;\n  left: -30px;\n  right: 0;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.04);\n  width: calc(100vw + 60px);\n  z-index: 500;\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n    bottom: -70px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n    bottom: 0px;\n    position: fixed;\n    left: 0;\n  }\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.15rem !important;\n  vertical-align: baseline !important;\n}\n.smalInfoDivWoFlex[_ngcontent-%COMP%] {\n  display: block;\n}\n.subHedOne[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 500;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.textOne[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.lineSection[_ngcontent-%COMP%] {\n  width: initial;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n  display: inline-block;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n  padding: 0px 10px !important;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   .flgIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin-bottom: 10px;\n  text-align: left;\n  line-height: 16px;\n  color: #fff;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0px 10px !important;\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   .flgIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.lineSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 0;\n  margin-left: 20px;\n  display: inline-block;\n}\n.note[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.formField[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent;\n  color: #777;\n  font-size: 16px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #777;\n  font-size: 16px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.radioInpHolderTri[_ngcontent-%COMP%] {\n  width: initial;\n  margin-right: 20px;\n}\n.bgFill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #393939;\n}\n.menuShowTwo[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 200px;\n}\n  .mat-accent .mat-slider-thumb, .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: #0076ff;\n}\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: #0076ff;\n}\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: #0076ff;\n}\n  .mat-slider-wrapper {\n  background-color: rgba(255, 255, 255, 0.26) !important;\n}\n  .mat-slider-horizontal {\n  min-width: 300px !important;\n  margin-top: 10px !important;\n  margin-bottom: 5px !important;\n}\n  .mat-slider-thumb-label {\n  transform: rotate(45deg) !important;\n  border-radius: 50% 50% 0 !important;\n}\n  .mat-slider-thumb {\n  transform: scale(0) !important;\n}\n  .mat-slider-thumb-label-text {\n  opacity: 1 !important;\n}\n.raidaStatOuter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   .raidaStatDesc[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #048100;\n  text-align: left;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   .raidaStatDesc.redText[_ngcontent-%COMP%] {\n  color: #b40000;\n  font-size: 16px;\n}\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  border: 1px solid #fff;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 4px;\n  left: 4px;\n  height: 12px;\n  width: 12px;\n  border-radius: 50px;\n  background-color: #0076ff;\n  opacity: 0;\n}\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.text_box_two[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #2d2d2d;\n  border: 1px solid #bcbbbb;\n  border-radius: 4px;\n  display: inline;\n  font-size: 14px;\n  width: 500px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBSEo7SUFJUSxZQUFBO0VBR047QUFDRjtBQUZJO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFIUTtFQUpKO0lBS1EsMkJBQUE7RUFNVjtBQUNGO0FBTFE7RUFQSjtJQVFRLDJCQUFBO0VBUVY7QUFDRjtBQVBRO0VBVko7SUFXUSwyQkFBQTtFQVVWO0FBQ0Y7QUFSSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBVVI7QUFUUTtFQVRKO0lBVVEsYUFBQTtFQVlWO0FBQ0Y7QUFYUTtFQVpKO0lBYVEsV0FBQTtJQUNBLGVBQUE7SUFDQSxPQUFBO0VBY1Y7QUFDRjtBQVZBOztFQUVJLDJCQUFBO0VBQ0EsbUNBQUE7QUFhSjtBQVZBO0VBQ0ksY0FBQTtBQWFKO0FBWEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQVpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBZUo7QUFiQTtFQUNJLGNBQUE7QUFnQko7QUFmSTtFQUNJLHFCQUFBO0FBaUJSO0FBaEJRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBa0JaO0FBakJZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFtQmhCO0FBakJZO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQW1CaEI7QUFoQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBa0JaO0FBZkk7RUFDSSxxQkFBQTtBQWlCUjtBQWhCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWtCWjtBQWhCUTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFrQlo7QUFqQlk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW1CaEI7QUFqQlk7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBbUJoQjtBQWhCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFrQlo7QUFmSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBaUJSO0FBZEE7RUFDSSxXQUFBO0FBaUJKO0FBZkE7RUFDSSxtQkFBQTtBQWtCSjtBQWhCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFrQlI7QUFqQlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQW1CWjtBQWpCUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFtQlo7QUFoQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQWtCUjtBQWpCUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbUJaO0FBakJRO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQW1CWjtBQWZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBa0JKO0FBZkk7RUFDSSx5QkFBQTtBQWtCUjtBQWJJO0VBQ0kseUJBQUE7QUFnQlI7QUFiQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFnQko7QUFkQTs7O0VBR0ksa0NBQUE7QUFpQko7QUFmQTtFQUNJLHlCQUFBO0FBa0JKO0FBZkE7RUFDSSx5QkFBQTtBQWtCSjtBQWhCQTtFQUNJLHlCQUFBO0FBbUJKO0FBakJBO0VBQ0ksc0RBQUE7QUFvQko7QUFsQkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFxQko7QUFuQkE7RUFDSSxtQ0FBQTtFQUNBLG1DQUFBO0FBc0JKO0FBbkJBO0VBQ0ksOEJBQUE7QUFzQko7QUFuQkE7RUFDSSxxQkFBQTtBQXNCSjtBQW5CQTtFQUNJLG1CQUFBO0FBc0JKO0FBckJJO0VBS0ksZ0JBQUE7QUFtQlI7QUFsQlE7RUFDSSxXQUFBO0FBb0JaO0FBbEJRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW9CWjtBQW5CWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBcUJoQjtBQWhCQTtFQUNJLGFBQUE7QUFtQko7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW9CSjtBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBcUJKO0FBbkJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBc0JKO0FBcEJBO0VBQ0ksVUFBQTtBQXVCSjtBQXJCQTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXVCSiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nc1dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC50YWJCb2R5IHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMyMHB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI5MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlckZpeGVkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgKyA2MHB4KTtcclxuICAgICAgICB6LWluZGV4OiA1MDA7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAtNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB0ZCxcclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDAuMTVyZW0gIWltcG9ydGFudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc21hbEluZm9EaXZXb0ZsZXgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnN1YkhlZE9uZSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi50ZXh0T25lIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmxpbmVTZWN0aW9uIHtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgLmlucHV0U2VsZWN0T25lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzA4ODRmZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGdJY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlucHV0U2VsZWN0VHdvIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDg4NGZmO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsZ0ljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuLm5vdGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDg4NGZmO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDg4NGZmO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJhZGlvSW5wSG9sZGVyVHJpIHtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5iZ0ZpbGwge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gICAgaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XHJcbiAgICB9XHJcbn1cclxuLm1lbnVTaG93VHdvIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXHJcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLFxyXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzZmZjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYWlkYVN0YXRPdXRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLnJhaWRhU3RhdFdyYXAge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhaWRhU3RhdERlc2Mge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDQ4MTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAmLnJlZFRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNiNDAwMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmN1c3RvbV9jaGVjayBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jdXN0b21fY2hlY2sgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmN1c3RvbV9jaGVjayBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5jdXN0b21fY2hlY2sgbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NmZmO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uY3VzdG9tX2NoZWNrIGlucHV0OmNoZWNrZWQgfiBsYWJlbDo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLnRleHRfYm94X3R3byB7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg4LCAxODcsIDE4Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map