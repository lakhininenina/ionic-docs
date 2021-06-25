exports.id = 3806;
exports.ids = [3806];
exports.modules = {

/***/ 53806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_segment": () => (/* binding */ Segment),
/* harmony export */   "ion_segment_button": () => (/* binding */ SegmentButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70655);
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75121);
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23007);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98840);
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13262);
var segmentIosCss=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";var segmentMdCss=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";var Segment=function(){function t(t){var e=this;(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t);this.ionChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionChange",7);this.ionSelect=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionSelect",7);this.ionStyle=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionStyle",7);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.swipeGesture=true;this.onClick=function(t){var o=t.target;var n=e.checked;if(o.tagName==="ION-SEGMENT"){return}e.value=o.value;if(e.scrollable||!e.swipeGesture){if(n){e.checkButton(n,o)}else{e.setCheckedClasses()}}e.checked=o}}t.prototype.colorChanged=function(t,e){if(e===undefined&&t!==undefined||e!==undefined&&t===undefined){this.emitStyle()}};t.prototype.swipeGestureChanged=function(){this.gestureChanged()};t.prototype.valueChanged=function(t,e){this.ionSelect.emit({value:t});if(e!==""||this.didInit){if(!this.activated){this.ionChange.emit({value:t})}else{this.valueAfterGesture=t}}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,o=t;e<o.length;e++){var n=o[e];n.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture){this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this,void 0,void 0,(function(){var t;var e=this;return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this,(function(o){switch(o.label){case 0:this.setCheckedClasses();t=this;return[4,Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 31402))];case 1:t.gesture=o.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}});this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);var e=this.setNextIndex(t,true);t.event.stopImmediatePropagation();if(e){this.addRipple(t)}var o=this.valueAfterGesture;if(o!==undefined){this.ionChange.emit({value:o});this.valueAfterGesture=undefined}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))};t.prototype.addRipple=function(t){var e=this;var o=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("animated",true)&&_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("rippleEffect",true);if(!o){return}var n=this.getButtons();var i=n.find((function(t){return t.value===e.value}));var r=i.shadowRoot||i;var a=r.querySelector("ion-ripple-effect");if(!a){return}var s=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.p)(t.event),l=s.x,c=s.y;a.addRipple(l,c).then((function(t){return t()}))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var o=t.event.target;var n=this.getButtons();var i=n.find((function(t){return t.value===e.value}));if(o.tagName!=="ION-SEGMENT-BUTTON"){return}if(!i){this.value=o.value;this.setCheckedClasses()}if(this.value===o.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){var e=t.shadowRoot||t;return e.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var o=this.getIndicator(t);var n=this.getIndicator(e);if(o===null||n===null){return}var i=o.getBoundingClientRect();var r=n.getBoundingClientRect();var a=i.width/r.width;var s=i.left-r.left;var l="translate3d("+s+"px, 0, 0) scaleX("+a+")";(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)((function(){n.classList.remove("segment-button-indicator-animated");n.style.setProperty("transform",l);n.getBoundingClientRect();n.classList.add("segment-button-indicator-animated");n.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var o=e.findIndex((function(e){return e.value===t.value}));var n=o+1;this.checked=e.find((function(e){return e.value===t.value}));for(var i=0,r=e;i<r.length;i++){var a=r[i];a.classList.remove("segment-button-after-checked")}if(n<e.length){e[n].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var o=this;if(e===void 0){e=false}var n=document.dir==="rtl";var i=this.activated;var r=this.getButtons();var a=r.findIndex((function(t){return t.value===o.value}));var s=r[a];var l;var c;if(a===-1){return}var d=s.getBoundingClientRect();var g=d.left;var u=d.width;var b=t.currentX;var h=d.top+d.height/2;var m=document.elementFromPoint(b,h);var v=n?b>g+u:b<g;var f=n?b<g:b>g+u;if(i&&!e){if(v){var p=a-1;if(p>=0){c=p}}else if(f){if(i&&!e){var p=a+1;if(p<r.length){c=p}}}if(c!==undefined&&!r[c].disabled){l=r[c]}}if(!i&&e){l=m}if(l!=null){if(l.tagName==="ION-SEGMENT"){return false}if(s!==l){this.checkButton(s,l)}}return true};t.prototype.emitStyle=function(){this.ionStyle.emit({segment:true})};t.prototype.render=function(){var t;var e=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist",onClick:this.onClick,class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,(t={},t[e]=true,t["in-toolbar"]=(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar",this.el),t["in-toolbar-color"]=(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}();Segment.style={ios:segmentIosCss,md:segmentMdCss};var segmentButtonIosCss=':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}';var segmentButtonMdCss=':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}';var ids=0;var SegmentButton=function(){function t(t){var e=this;(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t);this.segmentEl=null;this.checked=false;this.disabled=false;this.layout="icon-top";this.type="button";this.value="ion-sb-"+ids++;this.updateStyle=function(){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(e)};this.updateState=function(){if(e.segmentEl){e.checked=e.segmentEl.value===e.value}}}t.prototype.connectedCallback=function(){var t=this.segmentEl=this.el.closest("ion-segment");if(t){this.updateState();(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.a)(t,"ionSelect",this.updateState);(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.a)(t,"ionStyle",this.updateStyle)}};t.prototype.disconnectedCallback=function(){var t=this.segmentEl;if(t){(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.b)(t,"ionSelect",this.updateState);(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.b)(t,"ionStyle",this.updateStyle);this.segmentEl=null}};Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"tabIndex",{get:function(){if(this.disabled){return-1}var t=this.el.hasAttribute("tabindex");if(t){return this.el.getAttribute("tabindex")}return 0},enumerable:false,configurable:true});t.prototype.render=function(){var t;var e=this,o=e.checked,n=e.type,i=e.disabled,r=e.hasIcon,a=e.hasLabel,s=e.layout,l=e.segmentEl,c=e.tabIndex;var d=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);var g=function(){return l!==null&&l.color!==undefined};return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tab","aria-selected":o?"true":"false","aria-disabled":i?"true":null,tabIndex:c,class:(t={},t[d]=true,t["in-toolbar"]=(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar",this.el),t["in-toolbar-color"]=(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar[color]",this.el),t["in-segment"]=(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-segment",this.el),t["in-segment-color"]=g(),t["segment-button-has-label"]=a,t["segment-button-has-icon"]=r,t["segment-button-has-label-only"]=a&&!r,t["segment-button-has-icon-only"]=r&&!a,t["segment-button-disabled"]=i,t["segment-button-checked"]=o,t["segment-button-layout-"+s]=true,t["ion-activatable"]=true,t["ion-activatable-instant"]=true,t["ion-focusable"]=true,t)},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:n,tabIndex:-1,class:"button-native",part:"native",disabled:i},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"button-inner"},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),d==="md"&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",null)),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"indicator",class:{"segment-button-indicator":true,"segment-button-indicator-animated":true}},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))};Object.defineProperty(t.prototype,"el",{get:function(){return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)},enumerable:false,configurable:true});return t}();SegmentButton.style={ios:segmentButtonIosCss,md:segmentButtonMdCss};

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