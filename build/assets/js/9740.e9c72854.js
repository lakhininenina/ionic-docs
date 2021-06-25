exports.id = 9740;
exports.ids = [9740];
exports.modules = {

/***/ 59740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70655);
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75121);
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23007);
/* harmony import */ var _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98934);
/* harmony import */ var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42494);
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13262);
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92741);
var iosEnterAnimation=function(i){var n=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var e=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var t=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])};var iosLeaveAnimation=function(i){var n=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var e=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var t=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])};var mdEnterAnimation=function(i){var n=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var e=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var t=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])};var mdLeaveAnimation=function(i){var n=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var e=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();var t=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_4__.c)();e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])};var loadingIosCss=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";var loadingMdCss=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";var Loading=function(){function i(i){var n=this;(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,i);this.didPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingDidPresent",7);this.willPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingWillPresent",7);this.willDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingWillDismiss",7);this.didDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingDidDismiss",7);this.presented=false;this.keyboardClose=true;this.duration=0;this.backdropDismiss=false;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){n.dismiss(undefined,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.B)}}i.prototype.connectedCallback=function(){(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.el)};i.prototype.componentWillLoad=function(){if(this.spinner===undefined){var i=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);this.spinner=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("loadingSpinner",_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner",i==="ios"?"lines":"crescent"))}};i.prototype.present=function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this,void 0,void 0,(function(){var i=this;return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.d)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,undefined)];case 1:n.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)}return[2]}}))}))};i.prototype.dismiss=function(i,n){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return (0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.f)(this,i,n,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)};i.prototype.onDidDismiss=function(){return (0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionLoadingDidDismiss")};i.prototype.onWillDismiss=function(){return (0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionLoadingWillDismiss")};i.prototype.render=function(){var i;var n=this,e=n.message,t=n.spinner;var o=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)),(i={},i[o]=true,i["loading-translucent"]=this.translucent,i))},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0"}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},t&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-spinner"},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{name:t,"aria-hidden":"true"})),e&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-content",innerHTML:(0,_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__.s)(e)})),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0"}))};Object.defineProperty(i.prototype,"el",{get:function(){return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)},enumerable:false,configurable:true});return i}();Loading.style={ios:loadingIosCss,md:loadingMdCss};

/***/ }),

/***/ 13262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70655);
var hostContext=function(r,t){return t.closest(r)!==null};var createColorClasses=function(r,t){var e;return typeof r==="string"&&r.length>0?Object.assign((e={"ion-color":true},e["ion-color-"+r]=true,e),t):t};var getClassList=function(r){if(r!==undefined){var t=Array.isArray(r)?r:r.split(" ");return t.filter((function(r){return r!=null})).map((function(r){return r.trim()})).filter((function(r){return r!==""}))}return[]};var getClassMap=function(r){var t={};getClassList(r).forEach((function(r){return t[r]=true}));return t};var SCHEME=/^[a-z][a-z0-9+\-.]*:/;var openURL=function(r,t,e,n){return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0,void 0,void 0,(function(){var o;return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this,(function(a){if(r!=null&&r[0]!=="#"&&!SCHEME.test(r)){o=document.querySelector("ion-router");if(o){if(t!=null){t.preventDefault()}return[2,o.push(r,e,n)]}}return[2,false]}))}))};

/***/ })

};
;