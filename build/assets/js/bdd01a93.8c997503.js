(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[73223],{39372:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return er},frontMatter:function(){return $},metadata:function(){return rr},toc:function(){return tr}});var e=n(22122),i=n(19756),s=n(67294),a=n(3905),o="colorGenerator_noIQ",c=n(86010),p=function(r){var t=r.toString(16);return 1===t.length?"0"+t:t},l=function(r){return"#"+(r=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(r,t,n,e){return t+t+n+n+e+e}))).replace("#","")},_=function(r){var t=r.r,n=r.g,e=r.b;return"#"+p(t)+p(n)+p(e)},j=function(r){var t=r.r,n=r.g,e=r.b;t=Math.max(Math.min(t/255,1),0),n=Math.max(Math.min(n/255,1),0),e=Math.max(Math.min(e/255,1),0);var i,s,a,o=Math.max(t,n,e),c=Math.min(t,n,e),p=Math.min(1,Math.max(0,(o+c)/2));return o!==c?(i=o-c,a=p>.5?i/(2-o-c):i/(o+c),s=o===t?(n-e)/i+(n<e?6:0):o===n?(e-t)/i+2:(t-n)/i+4,s/=6):s=a=0,{h:Math.round(360*s),s:Math.round(100*a),l:Math.round(100*p)}},S=function(){function r(r){if("string"==typeof r&&/rgb\(/.test(r)){var t,n=null!=(t=/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(r))?t:[];r={r:parseInt(n[0],10),g:parseInt(n[1],10),b:parseInt(n[2],10)}}else if("string"==typeof r&&/hsl\(/.test(r)){var e,i=null!=(e=/hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(r))?e:[];r={h:parseInt(i[0],10),s:parseInt(i[1],10),l:parseInt(i[2],10)}}if("string"==typeof r)r=r.replace(/\s/g,""),this.hex=l(r),this.rgb=function(r){r=(r=l(r)).replace("#","");var t=parseInt(r,16);return{r:t>>16&255,g:t>>8&255,b:255&t}}(this.hex),this.hsl=j(this.rgb);else if("r"in r&&"g"in r&&"b"in r)this.rgb=r,this.hex=_(this.rgb),this.hsl=j(this.rgb);else{if(!("h"in r&&"s"in r&&"l"in r))throw new Error("Incorrect value passed.");this.hsl=r,this.rgb=function(r){var t=r.h,n=r.s,e=r.l;if(t/=360,e/=100,0==(n/=100))return{r:e=Math.round(255*e),g:e,b:e};var i=function(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(t-r)*n:n<.5?t:n<2/3?r+(t-r)*(2/3-n)*6:r},s=e<.5?e*(1+n):e+n-e*n,a=2*e-s,o=i(a,s,t+1/3),c=i(a,s,t),p=i(a,s,t-1/3);return{r:Math.round(255*o),g:Math.round(255*c),b:Math.round(255*p)}}(this.hsl),this.hex=_(this.rgb)}var s;this.yiq=(299*(s=this.rgb).r+587*s.g+114*s.b)/1e3}r.isColor=function(r){return!!/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(r)||/(^#[0-9a-fA-F]+)/.test(r.trim())};var t=r.prototype;return t.contrast=function(t){return void 0===t&&(t=128),new r(this.yiq>=t?"#000":"#fff")},t.mix=function(t,n){void 0===n&&(n=.5);var e=t instanceof r?t:new r(t);return new r(function(r,t,n){void 0===n&&(n=.5);var e=r.rgb,i=t.rgb,s=1-n;return{r:Math.round(n*i.r+s*e.r),g:Math.round(n*i.g+s*e.g),b:Math.round(n*i.b+s*e.b)}}(this,e,n))},t.shade=function(r){return void 0===r&&(r=.12),this.mix({r:0,g:0,b:0},r)},t.tint=function(r){return void 0===r&&(r=.1),this.mix({r:255,g:255,b:255},r)},t.toList=function(){var r=this.rgb;return r.r+","+r.g+","+r.b},r}(),u=["Primary","Secondary","Tertiary","Success","Warning","Danger","Dark","Medium","Light"],d=function(r){var t=new S(r),n=t.contrast(),e=t.tint(),i=t.shade();return{value:r,valueRgb:m(t.rgb),contrast:n.hex,contrastRgb:m(n.rgb),tint:e.hex,shade:i.hex}},h=function(r){var t=new Map;return u.forEach((function(n){for(var e={value:"",valueRgb:"-rgb",contrast:"-contrast",contrastRgb:"-contrast-rgb",shade:"-shade",tint:"-tint"},i={},s="--ion-color-"+n.toLowerCase(),a=0,o=Object.keys(e);a<o.length;a++){var c=o[a];i[c]=g(s+e[c],r)}t.set(n,Object.assign({},i,{property:s}))})),t},g=function(r,t){return y(r,t).trim().split(":")[1].trim()},y=function(r,t){var n=t.indexOf(r),e=t.substring(n+r.length),i=e.indexOf("}"),s=e.indexOf(";"),a=n+r.length+Math.min(i,s);return t.substring(n,a)},m=function(r){return r.r+","+r.g+","+r.b},E="variableSelector_3XCH",f="name_b_WV",x="swatch_sRCz",b="formGroup_1yTB",C="input_118v",v="inputValue_30Ov",P="inputFocused_3IMG",B="variableSelectorValueError_19ZV",k="colorWrap_hmHQ",M="error_1OsK",G=function(r){var t,n,a=r.name,o=r.isParentOpen,p=void 0!==o&&o,l=(0,i.Z)(r,["name","isParentOpen"]),_=(0,s.useContext)(Y),j=_.state,S=_.controls,u=j.colors.get(a).value,h=(0,s.useState)(!1),g=h[0],y=h[1],m=(0,s.useState)(!1),G=m[0],N=m[1],O=function(r){var t=r.currentTarget.value.trim();S.setColors((function(r){var n=d(t),e=function(r){return"--ion-color-"+r.toLowerCase()}(a);return r.set(a,Object.assign({},n,{property:e})),new Map(r)}))};(0,s.useEffect)((function(){T()}),[u]);var T=function(){var r,t=void 0!==(r=u)&&/^#[0-9A-F]{6}$/i.test(r);y(!t||void 0===u||7!==u.length)};return s.createElement("div",(0,e.Z)({},l,{className:(0,c.Z)((t={},t[l.className]=Boolean(l.className),t[E]=!0,t[B]=g,t))}),s.createElement("div",{className:f},s.createElement("i",{className:x,style:{backgroundColor:u}}),s.createElement("span",null,a)),s.createElement("div",{className:b},s.createElement("div",{className:(0,c.Z)((n={},n[C]=!0,n[v]=!0,n[P]=G,n)),onClick:function(r){p&&r.stopPropagation()}},s.createElement("div",{className:k,style:{backgroundColor:u}},s.createElement("input",{type:"color",value:u,onInput:O,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},tabIndex:-1})),s.createElement("input",{type:"text",value:u,onInput:O,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)}})),g&&s.createElement("span",{className:M},"Please enter a valid six digit hex code.")))},N="selectColors_YbDn",O="submenu_2ji7",T="swatch_14DA",w="item_3_Xo",I="headingGroup_1woQ",A="hex_yMVh",L="isOpen_2ANX",D=function(){var r=(0,s.useContext)(Y),t=r.state,n=(r.controls,(0,s.useState)("")),e=n[0],i=n[1];return s.createElement("ul",{className:N},Array.from(t.colors).map((function(r){var n,a=r[0],o=t.colors.get(a),p=o.tint,l=o.shade,_=e===a;return s.createElement("li",{className:(0,c.Z)((n={},n[w]=!0,n[L]=_,n))},s.createElement(G,{name:a,isParentOpen:_,onClick:function(){var r;i(e===(r=a)?"":r)}}),s.createElement("svg",{width:"10px",height:"6px",viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s.createElement("g",{id:"Welcome",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},s.createElement("g",{id:"Desktop-HD",transform:"translate(-1025.000000, -335.000000)",stroke:"#AEB4BE",strokeWidth:"2"},s.createElement("polyline",{id:"arrow",transform:"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) ",points:"1028 334 1032 338.020022 1028 342"})))),s.createElement("ul",{className:O},s.createElement("li",null,s.createElement("div",{className:I},s.createElement("i",{className:T,style:{backgroundColor:l}}),s.createElement("span",null,a,"-shade")),s.createElement("span",{className:A},l)),s.createElement("li",null,s.createElement("div",{className:I},s.createElement("i",{className:T,style:{backgroundColor:p}}),s.createElement("span",null,a,"-tint")),s.createElement("span",{className:A},p))))})))},H=n(14973),K=n(22254),W=n(52263),Z=n(83583),R="playgroundContainer_gDao",U="playgroundEditor_2-T8",V="copyButton_3aAD",F=n(24973),X=n(735);function z(r){var t,n=r.children,a=r.transformCode,o=(0,i.Z)(r,["children","transformCode"]),p=(0,W.default)().isClient,l=(0,Z.Z)(),_=(0,s.useState)(!1),j=_[0],S=_[1],u=(0,s.useRef)(null),d=(Array.isArray(n)?n.join(""):n).replace(/\n$/,"");return s.createElement("div",{className:R},s.createElement(K.nu,(0,e.Z)({key:p,code:p?n.replace(/\n$/,""):"",transformCode:a||function(r){return r+";"},theme:l},o),s.createElement(K.uz,(0,e.Z)({},o,{className:(0,c.Z)((t={},t[U]=!0,t[o.className]=Boolean(o.className),t))})),s.createElement("button",{ref:u,type:"button","aria-label":(0,F.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(V),onClick:function(){(0,X.Z)(d),S(!0),setTimeout((function(){return S(!1)}),2e3)}},j?s.createElement(F.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(F.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}var Y=(0,s.createContext)(void 0),q={value:"",valueRgb:"-rgb",contrast:"-contrast",contrastRgb:"-contrast-rgb",shade:"-shade",tint:"-tint"},J=function(r){var t=(0,s.useState)(Q),n=t[0],i=t[1],a=(0,s.useState)(h(Q)),c=a[0],p=a[1],l=(0,s.useRef)(Q);return(0,s.useEffect)((function(){p(h(n)),l.current=n;var r=new CustomEvent("demoMessage",{detail:{cssText:n}});window.dispatchEvent(r)}),[n]),(0,s.useEffect)((function(){Array.from(c).forEach((function(r){r[0];for(var t=r[1],n=Object.keys(q),e=d(t.value),s=function(){var r=o[a];i((function(n){return function(r,t,n){if(void 0===n)return t;var e=y(r,t),i=r+": "+n;return t.replace(e,i)}(t.property+q[r],n,e[r])}))},a=0,o=n;a<o.length;a++)s()}))}),[c]),s.createElement("section",{className:o},s.createElement(Y.Provider,{value:{controls:{setColors:p},state:{colors:c}}},s.createElement(D,null),n&&s.createElement(H.XJ,{name:"code",live:!0,className:"language-css",components:{code:function(r){return s.createElement(z,(0,e.Z)({},r,{language:"css",onChange:function(r){return l.current=r},onBlur:function(){return i(l.current)},onMouseOut:function(){return i(l.current)}}))}}},n)))},Q="\n:root {\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56,128,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61,194,255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82,96,255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45,211,111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255,255,255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255,196,9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235,68,90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34,36,40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146,148,156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244,245,248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n",$={hide_table_of_contents:!0,demoUrl:"/docs/demos/color-generator/index.html"},rr={unversionedId:"theming/color-generator",id:"theming/color-generator",isDocsHomePage:!1,title:"Color Generator",description:"Create custom color palettes for your app\u2019s UI. Update a color\u2019s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project.",source:"@site/docs/theming/color-generator.mdx",sourceDirName:"theming",slug:"/theming/color-generator",permalink:"/docs/theming/color-generator",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/theming/color-generator.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,demoUrl:"/docs/demos/color-generator/index.html"},sidebar:"docs",previous:{title:"Advanced Theming",permalink:"/docs/theming/advanced"},next:{title:"Ionic Angular Overview",permalink:"/docs/angular/overview"}},tr=[],nr={toc:tr};function er(r){var t=r.components,n=(0,i.Z)(r,["components"]);return(0,a.kt)("wrapper",(0,e.Z)({},nr,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create custom color palettes for your app\u2019s UI. Update a color\u2019s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project."),(0,a.kt)(J,{mdxType:"ColorGenerator"}))}er.isMDXComponent=!0},14640:function(r,t,n){var e={"./Binary_Property/ASCII.js":46962,"./Binary_Property/ASCII_Hex_Digit.js":60270,"./Binary_Property/Alphabetic.js":26969,"./Binary_Property/Any.js":22499,"./Binary_Property/Assigned.js":9213,"./Binary_Property/Bidi_Control.js":38838,"./Binary_Property/Bidi_Mirrored.js":5720,"./Binary_Property/Case_Ignorable.js":49965,"./Binary_Property/Cased.js":32948,"./Binary_Property/Changes_When_Casefolded.js":65314,"./Binary_Property/Changes_When_Casemapped.js":78562,"./Binary_Property/Changes_When_Lowercased.js":12104,"./Binary_Property/Changes_When_NFKC_Casefolded.js":41347,"./Binary_Property/Changes_When_Titlecased.js":50589,"./Binary_Property/Changes_When_Uppercased.js":50046,"./Binary_Property/Dash.js":77336,"./Binary_Property/Default_Ignorable_Code_Point.js":32016,"./Binary_Property/Deprecated.js":42339,"./Binary_Property/Diacritic.js":97707,"./Binary_Property/Emoji.js":23694,"./Binary_Property/Emoji_Component.js":94007,"./Binary_Property/Emoji_Modifier.js":13916,"./Binary_Property/Emoji_Modifier_Base.js":98053,"./Binary_Property/Emoji_Presentation.js":10906,"./Binary_Property/Extended_Pictographic.js":66359,"./Binary_Property/Extender.js":17743,"./Binary_Property/Grapheme_Base.js":75530,"./Binary_Property/Grapheme_Extend.js":38693,"./Binary_Property/Hex_Digit.js":91556,"./Binary_Property/IDS_Binary_Operator.js":2103,"./Binary_Property/IDS_Trinary_Operator.js":18502,"./Binary_Property/ID_Continue.js":19494,"./Binary_Property/ID_Start.js":20567,"./Binary_Property/Ideographic.js":19586,"./Binary_Property/Join_Control.js":36983,"./Binary_Property/Logical_Order_Exception.js":72947,"./Binary_Property/Lowercase.js":49111,"./Binary_Property/Math.js":65667,"./Binary_Property/Noncharacter_Code_Point.js":20052,"./Binary_Property/Pattern_Syntax.js":60514,"./Binary_Property/Pattern_White_Space.js":78588,"./Binary_Property/Quotation_Mark.js":1053,"./Binary_Property/Radical.js":25361,"./Binary_Property/Regional_Indicator.js":94375,"./Binary_Property/Sentence_Terminal.js":89697,"./Binary_Property/Soft_Dotted.js":35514,"./Binary_Property/Terminal_Punctuation.js":21043,"./Binary_Property/Unified_Ideograph.js":75771,"./Binary_Property/Uppercase.js":28368,"./Binary_Property/Variation_Selector.js":27186,"./Binary_Property/White_Space.js":61846,"./Binary_Property/XID_Continue.js":74003,"./Binary_Property/XID_Start.js":3468,"./General_Category/Cased_Letter.js":13090,"./General_Category/Close_Punctuation.js":8526,"./General_Category/Connector_Punctuation.js":26100,"./General_Category/Control.js":80282,"./General_Category/Currency_Symbol.js":15352,"./General_Category/Dash_Punctuation.js":45647,"./General_Category/Decimal_Number.js":98349,"./General_Category/Enclosing_Mark.js":18220,"./General_Category/Final_Punctuation.js":88482,"./General_Category/Format.js":87586,"./General_Category/Initial_Punctuation.js":88147,"./General_Category/Letter.js":65964,"./General_Category/Letter_Number.js":66793,"./General_Category/Line_Separator.js":63061,"./General_Category/Lowercase_Letter.js":19340,"./General_Category/Mark.js":93748,"./General_Category/Math_Symbol.js":23150,"./General_Category/Modifier_Letter.js":66710,"./General_Category/Modifier_Symbol.js":43026,"./General_Category/Nonspacing_Mark.js":95580,"./General_Category/Number.js":90055,"./General_Category/Open_Punctuation.js":25622,"./General_Category/Other.js":76288,"./General_Category/Other_Letter.js":61453,"./General_Category/Other_Number.js":88795,"./General_Category/Other_Punctuation.js":47221,"./General_Category/Other_Symbol.js":66733,"./General_Category/Paragraph_Separator.js":12600,"./General_Category/Private_Use.js":61704,"./General_Category/Punctuation.js":36290,"./General_Category/Separator.js":64661,"./General_Category/Space_Separator.js":54343,"./General_Category/Spacing_Mark.js":11276,"./General_Category/Surrogate.js":93474,"./General_Category/Symbol.js":54581,"./General_Category/Titlecase_Letter.js":8550,"./General_Category/Unassigned.js":22525,"./General_Category/Uppercase_Letter.js":28829,"./Script/Adlam.js":56129,"./Script/Ahom.js":50147,"./Script/Anatolian_Hieroglyphs.js":50926,"./Script/Arabic.js":56820,"./Script/Armenian.js":14899,"./Script/Avestan.js":69929,"./Script/Balinese.js":30706,"./Script/Bamum.js":15533,"./Script/Bassa_Vah.js":89979,"./Script/Batak.js":83765,"./Script/Bengali.js":72693,"./Script/Bhaiksuki.js":10236,"./Script/Bopomofo.js":30468,"./Script/Brahmi.js":45770,"./Script/Braille.js":65529,"./Script/Buginese.js":74206,"./Script/Buhid.js":96208,"./Script/Canadian_Aboriginal.js":66700,"./Script/Carian.js":93961,"./Script/Caucasian_Albanian.js":74121,"./Script/Chakma.js":12128,"./Script/Cham.js":52189,"./Script/Cherokee.js":75033,"./Script/Chorasmian.js":73507,"./Script/Common.js":85998,"./Script/Coptic.js":56036,"./Script/Cuneiform.js":13563,"./Script/Cypriot.js":49182,"./Script/Cyrillic.js":84087,"./Script/Deseret.js":48844,"./Script/Devanagari.js":35690,"./Script/Dives_Akuru.js":57201,"./Script/Dogra.js":71932,"./Script/Duployan.js":95187,"./Script/Egyptian_Hieroglyphs.js":49778,"./Script/Elbasan.js":42781,"./Script/Elymaic.js":83103,"./Script/Ethiopic.js":26672,"./Script/Georgian.js":73661,"./Script/Glagolitic.js":85857,"./Script/Gothic.js":32096,"./Script/Grantha.js":71742,"./Script/Greek.js":62199,"./Script/Gujarati.js":11931,"./Script/Gunjala_Gondi.js":27600,"./Script/Gurmukhi.js":76482,"./Script/Han.js":26294,"./Script/Hangul.js":38858,"./Script/Hanifi_Rohingya.js":50043,"./Script/Hanunoo.js":95307,"./Script/Hatran.js":20280,"./Script/Hebrew.js":12674,"./Script/Hiragana.js":54058,"./Script/Imperial_Aramaic.js":70521,"./Script/Inherited.js":21448,"./Script/Inscriptional_Pahlavi.js":64086,"./Script/Inscriptional_Parthian.js":35772,"./Script/Javanese.js":98272,"./Script/Kaithi.js":52764,"./Script/Kannada.js":98276,"./Script/Katakana.js":98285,"./Script/Kayah_Li.js":10821,"./Script/Kharoshthi.js":67559,"./Script/Khitan_Small_Script.js":48304,"./Script/Khmer.js":39834,"./Script/Khojki.js":42593,"./Script/Khudawadi.js":64415,"./Script/Lao.js":37740,"./Script/Latin.js":46818,"./Script/Lepcha.js":7647,"./Script/Limbu.js":92627,"./Script/Linear_A.js":16193,"./Script/Linear_B.js":71901,"./Script/Lisu.js":25734,"./Script/Lycian.js":6450,"./Script/Lydian.js":28293,"./Script/Mahajani.js":48193,"./Script/Makasar.js":50865,"./Script/Malayalam.js":24789,"./Script/Mandaic.js":9535,"./Script/Manichaean.js":83061,"./Script/Marchen.js":76528,"./Script/Masaram_Gondi.js":9921,"./Script/Medefaidrin.js":93378,"./Script/Meetei_Mayek.js":6940,"./Script/Mende_Kikakui.js":3897,"./Script/Meroitic_Cursive.js":65999,"./Script/Meroitic_Hieroglyphs.js":59758,"./Script/Miao.js":65484,"./Script/Modi.js":34575,"./Script/Mongolian.js":75392,"./Script/Mro.js":36388,"./Script/Multani.js":60556,"./Script/Myanmar.js":15837,"./Script/Nabataean.js":6820,"./Script/Nandinagari.js":51892,"./Script/New_Tai_Lue.js":32003,"./Script/Newa.js":15297,"./Script/Nko.js":17594,"./Script/Nushu.js":7493,"./Script/Nyiakeng_Puachue_Hmong.js":14406,"./Script/Ogham.js":75847,"./Script/Ol_Chiki.js":88416,"./Script/Old_Hungarian.js":40115,"./Script/Old_Italic.js":29109,"./Script/Old_North_Arabian.js":96840,"./Script/Old_Permic.js":39291,"./Script/Old_Persian.js":24678,"./Script/Old_Sogdian.js":78647,"./Script/Old_South_Arabian.js":70744,"./Script/Old_Turkic.js":59527,"./Script/Oriya.js":23761,"./Script/Osage.js":39384,"./Script/Osmanya.js":90237,"./Script/Pahawh_Hmong.js":62976,"./Script/Palmyrene.js":60351,"./Script/Pau_Cin_Hau.js":19767,"./Script/Phags_Pa.js":25712,"./Script/Phoenician.js":86458,"./Script/Psalter_Pahlavi.js":74874,"./Script/Rejang.js":27603,"./Script/Runic.js":84788,"./Script/Samaritan.js":45810,"./Script/Saurashtra.js":37632,"./Script/Sharada.js":15058,"./Script/Shavian.js":76250,"./Script/Siddham.js":39573,"./Script/SignWriting.js":54039,"./Script/Sinhala.js":1611,"./Script/Sogdian.js":34250,"./Script/Sora_Sompeng.js":43065,"./Script/Soyombo.js":18135,"./Script/Sundanese.js":95849,"./Script/Syloti_Nagri.js":46566,"./Script/Syriac.js":7810,"./Script/Tagalog.js":67833,"./Script/Tagbanwa.js":58009,"./Script/Tai_Le.js":1187,"./Script/Tai_Tham.js":40377,"./Script/Tai_Viet.js":99e3,"./Script/Takri.js":72294,"./Script/Tamil.js":98682,"./Script/Tangut.js":75540,"./Script/Telugu.js":65084,"./Script/Thaana.js":6867,"./Script/Thai.js":49907,"./Script/Tibetan.js":29341,"./Script/Tifinagh.js":81261,"./Script/Tirhuta.js":57954,"./Script/Ugaritic.js":29097,"./Script/Vai.js":5767,"./Script/Wancho.js":27172,"./Script/Warang_Citi.js":17315,"./Script/Yezidi.js":34961,"./Script/Yi.js":90923,"./Script/Zanabazar_Square.js":92108,"./Script_Extensions/Adlam.js":99614,"./Script_Extensions/Ahom.js":24915,"./Script_Extensions/Anatolian_Hieroglyphs.js":8983,"./Script_Extensions/Arabic.js":75627,"./Script_Extensions/Armenian.js":13585,"./Script_Extensions/Avestan.js":79384,"./Script_Extensions/Balinese.js":47072,"./Script_Extensions/Bamum.js":31856,"./Script_Extensions/Bassa_Vah.js":24945,"./Script_Extensions/Batak.js":92147,"./Script_Extensions/Bengali.js":61530,"./Script_Extensions/Bhaiksuki.js":64063,"./Script_Extensions/Bopomofo.js":29962,"./Script_Extensions/Brahmi.js":61752,"./Script_Extensions/Braille.js":28434,"./Script_Extensions/Buginese.js":15148,"./Script_Extensions/Buhid.js":78881,"./Script_Extensions/Canadian_Aboriginal.js":55254,"./Script_Extensions/Carian.js":79110,"./Script_Extensions/Caucasian_Albanian.js":76550,"./Script_Extensions/Chakma.js":88753,"./Script_Extensions/Cham.js":98451,"./Script_Extensions/Cherokee.js":80196,"./Script_Extensions/Chorasmian.js":23352,"./Script_Extensions/Common.js":46921,"./Script_Extensions/Coptic.js":44141,"./Script_Extensions/Cuneiform.js":30286,"./Script_Extensions/Cypriot.js":73326,"./Script_Extensions/Cyrillic.js":77115,"./Script_Extensions/Deseret.js":59108,"./Script_Extensions/Devanagari.js":59426,"./Script_Extensions/Dives_Akuru.js":44660,"./Script_Extensions/Dogra.js":41422,"./Script_Extensions/Duployan.js":66667,"./Script_Extensions/Egyptian_Hieroglyphs.js":20449,"./Script_Extensions/Elbasan.js":25810,"./Script_Extensions/Elymaic.js":83509,"./Script_Extensions/Ethiopic.js":37837,"./Script_Extensions/Georgian.js":77680,"./Script_Extensions/Glagolitic.js":97772,"./Script_Extensions/Gothic.js":60674,"./Script_Extensions/Grantha.js":52336,"./Script_Extensions/Greek.js":86310,"./Script_Extensions/Gujarati.js":92436,"./Script_Extensions/Gunjala_Gondi.js":20642,"./Script_Extensions/Gurmukhi.js":33831,"./Script_Extensions/Han.js":16613,"./Script_Extensions/Hangul.js":87001,"./Script_Extensions/Hanifi_Rohingya.js":88583,"./Script_Extensions/Hanunoo.js":82758,"./Script_Extensions/Hatran.js":66416,"./Script_Extensions/Hebrew.js":85222,"./Script_Extensions/Hiragana.js":60191,"./Script_Extensions/Imperial_Aramaic.js":57632,"./Script_Extensions/Inherited.js":96988,"./Script_Extensions/Inscriptional_Pahlavi.js":52121,"./Script_Extensions/Inscriptional_Parthian.js":82809,"./Script_Extensions/Javanese.js":31899,"./Script_Extensions/Kaithi.js":57574,"./Script_Extensions/Kannada.js":81868,"./Script_Extensions/Katakana.js":10774,"./Script_Extensions/Kayah_Li.js":76701,"./Script_Extensions/Kharoshthi.js":81466,"./Script_Extensions/Khitan_Small_Script.js":21325,"./Script_Extensions/Khmer.js":6068,"./Script_Extensions/Khojki.js":77706,"./Script_Extensions/Khudawadi.js":54258,"./Script_Extensions/Lao.js":77149,"./Script_Extensions/Latin.js":38334,"./Script_Extensions/Lepcha.js":12299,"./Script_Extensions/Limbu.js":25476,"./Script_Extensions/Linear_A.js":54625,"./Script_Extensions/Linear_B.js":38810,"./Script_Extensions/Lisu.js":90845,"./Script_Extensions/Lycian.js":68978,"./Script_Extensions/Lydian.js":67905,"./Script_Extensions/Mahajani.js":89576,"./Script_Extensions/Makasar.js":3405,"./Script_Extensions/Malayalam.js":974,"./Script_Extensions/Mandaic.js":28940,"./Script_Extensions/Manichaean.js":6677,"./Script_Extensions/Marchen.js":14740,"./Script_Extensions/Masaram_Gondi.js":82278,"./Script_Extensions/Medefaidrin.js":55949,"./Script_Extensions/Meetei_Mayek.js":13329,"./Script_Extensions/Mende_Kikakui.js":97146,"./Script_Extensions/Meroitic_Cursive.js":23715,"./Script_Extensions/Meroitic_Hieroglyphs.js":43199,"./Script_Extensions/Miao.js":26499,"./Script_Extensions/Modi.js":36995,"./Script_Extensions/Mongolian.js":98606,"./Script_Extensions/Mro.js":11462,"./Script_Extensions/Multani.js":45402,"./Script_Extensions/Myanmar.js":76318,"./Script_Extensions/Nabataean.js":34924,"./Script_Extensions/Nandinagari.js":8236,"./Script_Extensions/New_Tai_Lue.js":14575,"./Script_Extensions/Newa.js":71314,"./Script_Extensions/Nko.js":40577,"./Script_Extensions/Nushu.js":44432,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":53612,"./Script_Extensions/Ogham.js":19298,"./Script_Extensions/Ol_Chiki.js":55285,"./Script_Extensions/Old_Hungarian.js":16737,"./Script_Extensions/Old_Italic.js":73023,"./Script_Extensions/Old_North_Arabian.js":35723,"./Script_Extensions/Old_Permic.js":56370,"./Script_Extensions/Old_Persian.js":1402,"./Script_Extensions/Old_Sogdian.js":14718,"./Script_Extensions/Old_South_Arabian.js":40316,"./Script_Extensions/Old_Turkic.js":5462,"./Script_Extensions/Oriya.js":29434,"./Script_Extensions/Osage.js":77045,"./Script_Extensions/Osmanya.js":82301,"./Script_Extensions/Pahawh_Hmong.js":84766,"./Script_Extensions/Palmyrene.js":72685,"./Script_Extensions/Pau_Cin_Hau.js":34107,"./Script_Extensions/Phags_Pa.js":66506,"./Script_Extensions/Phoenician.js":42186,"./Script_Extensions/Psalter_Pahlavi.js":55507,"./Script_Extensions/Rejang.js":35435,"./Script_Extensions/Runic.js":76355,"./Script_Extensions/Samaritan.js":1509,"./Script_Extensions/Saurashtra.js":23386,"./Script_Extensions/Sharada.js":86116,"./Script_Extensions/Shavian.js":51826,"./Script_Extensions/Siddham.js":22026,"./Script_Extensions/SignWriting.js":96007,"./Script_Extensions/Sinhala.js":51104,"./Script_Extensions/Sogdian.js":82401,"./Script_Extensions/Sora_Sompeng.js":44399,"./Script_Extensions/Soyombo.js":37415,"./Script_Extensions/Sundanese.js":3894,"./Script_Extensions/Syloti_Nagri.js":5419,"./Script_Extensions/Syriac.js":21038,"./Script_Extensions/Tagalog.js":1744,"./Script_Extensions/Tagbanwa.js":54217,"./Script_Extensions/Tai_Le.js":63153,"./Script_Extensions/Tai_Tham.js":4926,"./Script_Extensions/Tai_Viet.js":39311,"./Script_Extensions/Takri.js":55970,"./Script_Extensions/Tamil.js":80882,"./Script_Extensions/Tangut.js":46776,"./Script_Extensions/Telugu.js":40444,"./Script_Extensions/Thaana.js":23431,"./Script_Extensions/Thai.js":94846,"./Script_Extensions/Tibetan.js":137,"./Script_Extensions/Tifinagh.js":67065,"./Script_Extensions/Tirhuta.js":98082,"./Script_Extensions/Ugaritic.js":29213,"./Script_Extensions/Vai.js":85388,"./Script_Extensions/Wancho.js":68659,"./Script_Extensions/Warang_Citi.js":27900,"./Script_Extensions/Yezidi.js":8051,"./Script_Extensions/Yi.js":99799,"./Script_Extensions/Zanabazar_Square.js":25904,"./index.js":94274,"./unicode-version.js":47993};function i(r){var t=s(r);return n(t)}function s(r){if(!n.o(e,r)){var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}return e[r]}i.keys=function(){return Object.keys(e)},i.resolve=s,r.exports=i,i.id=14640}}]);