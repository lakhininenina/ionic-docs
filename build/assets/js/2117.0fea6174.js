exports.id = 2117;
exports.ids = [2117];
exports.modules = {

/***/ 12117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70655);
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75121);
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23007);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98840);
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13262);
var textareaIosCss=".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";var textareaMdCss=".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}";var Textarea=function(){function t(t){var e=this;(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t);this.ionChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionChange",7);this.ionInput=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionInput",7);this.ionStyle=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionStyle",7);this.ionBlur=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionBlur",7);this.ionFocus=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionFocus",7);this.inputId="ion-textarea-"+textareaIds++;this.didBlurAfterEdit=false;this.inheritedAttributes={};this.fireFocusEvents=true;this.hasFocus=false;this.autocapitalize="none";this.autofocus=false;this.clearOnEdit=false;this.debounce=0;this.disabled=false;this.name=this.inputId;this.readonly=false;this.required=false;this.spellcheck=false;this.autoGrow=false;this.value="";this.onInput=function(t){if(e.nativeInput){e.value=e.nativeInput.value}e.emitStyle();e.ionInput.emit(t)};this.onFocus=function(t){e.hasFocus=true;e.focusChange();if(e.fireFocusEvents){e.ionFocus.emit(t)}};this.onBlur=function(t){e.hasFocus=false;e.focusChange();if(e.fireFocusEvents){e.ionBlur.emit(t)}};this.onKeyDown=function(){e.checkClearOnEdit()}}t.prototype.debounceChanged=function(){this.ionChange=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.ionChange,this.debounce)};t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){var t=this.nativeInput;var e=this.getValue();if(t&&t.value!==e){t.value=e}this.runAutoGrow();this.emitStyle();this.ionChange.emit({value:e})};t.prototype.connectedCallback=function(){this.emitStyle();this.debounceChanged();{document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}};t.prototype.disconnectedCallback=function(){{document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}};t.prototype.componentWillLoad=function(){this.inheritedAttributes=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,["title"])};t.prototype.componentDidLoad=function(){var t=this;(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.r)((function(){return t.runAutoGrow()}))};t.prototype.runAutoGrow=function(){var t=this;var e=this.nativeInput;if(e&&this.autoGrow){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((function(){e.style.height="auto";e.style.height=e.scrollHeight+"px";if(t.textareaWrapper){t.textareaWrapper.style.height=e.scrollHeight+"px"}}))}};t.prototype.setFocus=function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this,void 0,void 0,(function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this,(function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]}))}))};t.prototype.setBlur=function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this,void 0,void 0,(function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this,(function(t){if(this.nativeInput){this.nativeInput.blur()}return[2]}))}))};t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,textarea:true,input:true,"interactive-disabled":this.disabled,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus})};t.prototype.checkClearOnEdit=function(){if(!this.clearOnEdit){return}if(this.didBlurAfterEdit&&this.hasValue()){this.value=""}this.didBlurAfterEdit=false};t.prototype.focusChange=function(){if(this.clearOnEdit&&!this.hasFocus&&this.hasValue()){this.didBlurAfterEdit=true}this.emitStyle()};t.prototype.hasValue=function(){return this.getValue()!==""};t.prototype.getValue=function(){return this.value||""};t.prototype.render=function(){var t;var e=this;var i=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);var a=this.getValue();var n=this.inputId+"-lbl";var o=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el);if(o){o.id=n}return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{"aria-disabled":this.disabled?"true":null,class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,(t={},t[i]=true,t))},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"textarea-wrapper",ref:function(t){return e.textareaWrapper=t}},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",Object.assign({class:"native-textarea","aria-labelledby":o?n:null,ref:function(t){return e.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},this.inheritedAttributes),a)))};Object.defineProperty(t.prototype,"el",{get:function(){return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}();var textareaIds=0;Textarea.style={ios:textareaIosCss,md:textareaMdCss};

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