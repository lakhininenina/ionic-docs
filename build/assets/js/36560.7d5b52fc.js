(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[36560],{23789:function(o,e,t){"use strict";t.d(e,{a:function(){return n},d:function(){return s}});var r=t(70655),i=t(98840),n=function(o,e,t,n,s){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var a;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:if(o)return[2,o.attachViewToDom(e,t,s,n)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t,n&&n.forEach((function(o){return a.classList.add(o)})),s&&Object.assign(a,s),e.appendChild(a),[4,new Promise((function(o){return(0,i.c)(a,o)}))];case 1:return r.sent(),[2,a]}}))}))},s=function(o,e){if(e){if(o){var t=e.parentElement;return o.removeViewFromDom(t,e)}e.remove()}return Promise.resolve()}},36560:function(o,e,t){"use strict";t.r(e),t.d(e,{ion_popover:function(){return m}});var r=t(70655),i=t(75121),n=t(23007),s=t(23789),a=t(98934),p=t(13262),c=t(41859),l=t(92741),d=function(o,e){var t="top",r="left",i=o.querySelector(".popover-content"),n=i.getBoundingClientRect(),s=n.width,a=n.height,p=o.ownerDocument.defaultView.innerWidth,c=o.ownerDocument.defaultView.innerHeight,d=e&&e.target&&e.target.getBoundingClientRect(),h=null!=d&&"top"in d?d.top:c/2-a/2,v=null!=d&&"left"in d?d.left:p/2,f=d&&d.width||0,m=d&&d.height||0,b=o.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,x=g.height;null==d&&(b.style.display="none");var y={top:h+m,left:v+f/2-w/2},k={top:h+m+(x-1),left:v+f/2-s/2},D=!1,E=!1;k.left<u+25?(D=!0,k.left=u):s+u+k.left+25>p&&(E=!0,k.left=p-s-u,r="right"),h+m+a>c&&h-a>0?(y.top=h-(x+1),k.top=h-a-(x-1),o.className=o.className+" popover-bottom",t="bottom"):h+m+a>c&&(i.style.bottom=u+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",D&&(i.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"),E&&(i.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=t+" "+r;var P=(0,l.c)(),S=(0,l.c)(),_=(0,l.c)();return S.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),_.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(o).easing("ease").duration(100).addAnimation([S,_])},u=5,h=function(o){var e=(0,l.c)(),t=(0,l.c)(),r=(0,l.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,r])},v=function(o,e){var t=o.ownerDocument,r="rtl"===t.dir,i="top",n=r?"right":"left",s=o.querySelector(".popover-content"),a=s.getBoundingClientRect(),p=a.width,c=a.height,d=t.defaultView.innerWidth,u=t.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),v=null!=h&&"bottom"in h?h.bottom:u/2-c/2,f=null!=h&&"left"in h?r?h.left-p+h.width:h.left:d/2-p/2,m=h&&h.height||0,b={top:v,left:f};b.left<12?(b.left=12,n="left"):p+12+b.left>d&&(b.left=d-p-12,n="right"),v+m+c>u&&v-c>0?(b.top=v-c-m,o.className=o.className+" popover-bottom",i="bottom"):v+m+c>u&&(s.style.bottom="12px");var g=(0,l.c)(),w=(0,l.c)(),x=(0,l.c)(),y=(0,l.c)(),k=(0,l.c)();return w.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),x.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":i+" "+n}).fromTo("transform","scale(0.001)","scale(1)"),k.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,x,y,k])},f=function(o){var e=(0,l.c)(),t=(0,l.c)(),r=(0,l.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,r])},m=function(){function o(o){var e=this;(0,i.r)(this,o),this.didPresent=(0,i.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,i.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,i.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(o){o.stopPropagation(),o.preventDefault(),e.dismiss()},this.onBackdropTap=function(){e.dismiss(void 0,a.B)},this.onLifecycle=function(o){var t=e.usersElement,r=b[o.type];if(t&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:o.detail});t.dispatchEvent(i)}}}return o.prototype.connectedCallback=function(){(0,a.e)(this.el)},o.prototype.present=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){var o,e,t;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(o=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return e=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t=this,[4,(0,s.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e)];case 1:return t.usersElement=r.sent(),[4,(0,c.e)(this.usersElement)];case 2:return r.sent(),[2,(0,a.d)(this,"popoverEnter",d,v,this.event)]}}))}))},o.prototype.dismiss=function(o,e){return(0,r.__awaiter)(this,void 0,void 0,(function(){var t;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,(0,a.f)(this,o,e,"popoverLeave",h,f,this.event)];case 1:return(t=r.sent())?[4,(0,s.d)(this.delegate,this.usersElement)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t]}}))}))},o.prototype.onDidDismiss=function(){return(0,a.g)(this.el,"ionPopoverDidDismiss")},o.prototype.onWillDismiss=function(){return(0,a.g)(this.el,"ionPopoverWillDismiss")},o.prototype.render=function(){var o,e=(0,n.b)(this),t=this.onLifecycle;return(0,i.h)(i.H,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,p.g)(this.cssClass)),(o={},o[e]=!0,o["popover-translucent"]=this.translucent,o)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,i.h)("div",{class:"popover-arrow"}),(0,i.h)("div",{class:"popover-content"})),(0,i.h)("div",{tabindex:"0"}))},Object.defineProperty(o.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),o}(),b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};m.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},13262:function(o,e,t){"use strict";t.d(e,{c:function(){return n},g:function(){return s},h:function(){return i},o:function(){return p}});var r=t(70655),i=function(o,e){return null!==e.closest(o)},n=function(o,e){var t;return"string"==typeof o&&o.length>0?Object.assign(((t={"ion-color":!0})["ion-color-"+o]=!0,t),e):e},s=function(o){var e={};return function(o){return void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter((function(o){return null!=o})).map((function(o){return o.trim()})).filter((function(o){return""!==o})):[]}(o).forEach((function(o){return e[o]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,p=function(o,e,t,i){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var n;return(0,r.__generator)(this,(function(r){return null!=o&&"#"!==o[0]&&!a.test(o)&&(n=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,n.push(o,t,i)]):[2,!1]}))}))}}}]);