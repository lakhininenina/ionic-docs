(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[68592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(v,c(c({ref:t},l),{},{components:n})):r.createElement(v,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(19756),a=n(67294),i=n(73727),c=n(13919),o=n(10412),s=(0,a.createContext)({collectLink:function(){}}),u=n(44996);var l=function(e){var t,n,l,f=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,g=void 0===b||b,y=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=(0,u.C)().withBaseUrl,E=(0,a.useContext)(s),w=d||m,O=(0,c.Z)(w),N=null==w?void 0:w.replace("pathname://",""),k=void 0!==N?(n=N,g&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0,Z=(0,a.useRef)(!1),x=f?i.OL:i.rU,j=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!j&&O&&null!=k&&window.docusaurus.prefetch(k),function(){j&&l&&l.disconnect()}}),[k,j,O]);var P=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,I=!k||!O||P;return k&&O&&!P&&!h&&E.collectLink(k),I?a.createElement("a",Object.assign({href:k},w&&!O&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(x,Object.assign({},y,{onMouseEnter:function(){Z.current||null==k||(window.docusaurus.preload(k),Z.current=!0)},innerRef:function(e){var t,n;j&&e&&O&&(t=e,n=function(){null!=k&&window.docusaurus.prefetch(k)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:k||""},f&&{isActive:p,activeClassName:v}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return c}});var r=n(52263),a=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),a=n(80944),i=n(86010),c="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var l=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=(0,a.Z)(),p=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,r.useState)(l),g=b[0],y=b[1],C=r.Children.toArray(e.children),E=[];if(null!=d){var w=p[d];null!=w&&w!==g&&f.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),r=f[n].value;y(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,i,c,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,c=window,s=c.innerHeight,u=c.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=E.indexOf(e.target)+1;n=E[r]||E[0];break;case s:var a=E.indexOf(e.target)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":g===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(C.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},28312:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i=n(36742),c=n(44996),o=n(22122),s=function(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 512 512"},e),r.createElement("path",{d:"M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"}))};var u=function(e){var t,n=void 0===e.href,o=void 0!==e.href&&/^http/.test(e.href),u="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header," ",o?r.createElement(s,null):null),l=e.hoverIcon||e.icon,f=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},e.icon&&r.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&r.createElement("img",{src:(0,c.Z)(l),className:"Card-icon Card-icon-hover"}),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return r.createElement("img",{src:(0,c.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&u,r.createElement("div",{className:"Card-content"},e.children))),d=(0,a.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?r.createElement("docs-card",{class:d},r.createElement("div",{className:"Card"},f)):o?r.createElement("docs-card",{class:d},r.createElement("a",{className:"Card",href:e.href,target:"_blank"},f)):r.createElement("docs-card",{class:d},r.createElement(i.Z,{to:e.href,className:"Card"},f))}},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);