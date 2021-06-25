(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[16858],{42919:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(67294),i=function(e){var t=(0,n.useState)(e?"loading":"idle"),a=t[0],i=t[1];return(0,n.useEffect)((function(){if(e){var t=document.querySelector('script[src="'+e+'"]');if(t)i(t.getAttribute("data-status"));else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var a=function(e){t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",a),t.addEventListener("error",a)}var n=function(e){i("load"===e.type?"ready":"error")};return t.addEventListener("load",n),t.addEventListener("error",n),function(){t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}i("idle")}),[e]),a};var o=function(e){return i("https://static.codepen.io/assets/embed/ei.js"),n.createElement("div",{className:"codepen","data-height":e.height,"data-theme-id":e.theme,"data-default-tab":e.defaultTab,"data-user":e.user,"data-slug-hash":e.slug,"data-preview":e.preview?"true":"false","data-pen-title":e.penTitle,"no-prerender":"true"})}},55033:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(22122),i=a(19756),o=(a(67294),a(3905)),r=a(42919),l=a(41395),s=a(58215),p={},d={unversionedId:"developing/keyboard",id:"developing/keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application.",source:"@site/docs/developing/keyboard.md",sourceDirName:"developing",slug:"/developing/keyboard",permalink:"/docs/developing/keyboard",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developing/keyboard.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hardware Back Button",permalink:"/docs/developing/hardware-back-button"},next:{title:"Structure",permalink:"/docs/layout/structure"}},u=[{value:"inputmode",id:"inputmode",children:[{value:"Usage",id:"usage",children:[]}]},{value:"enterkeyhint",id:"enterkeyhint",children:[{value:"Usage",id:"usage-1",children:[]}]},{value:"Dark Mode",id:"dark-mode",children:[]},{value:"Hiding the Accessory Bar",id:"hiding-the-accessory-bar",children:[]},{value:"Keyboard Lifecycle Events",id:"keyboard-lifecycle-events",children:[{value:"Usage",id:"usage-2",children:[]}]}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application."),(0,o.kt)("h2",{id:"inputmode"},"inputmode"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute allows developers to specify what type of data might be entered into an input. This will prompt the browser to show a keyboard that includes buttons relevant to what the user may enter. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'inputmode="email"')," will display a keyboard with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," key as well as other optimizations for entering emails."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," is a global attribute, it can be used on Ionic components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,o.kt)("p",null,"Inputs that ",(0,o.kt)("em",{parentName:"p"},"require")," a certain data type should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute instead. For example, inputs that require an email should use ",(0,o.kt)("inlineCode",{parentName:"p"},'type="email"')," rather than specifying an ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode.")," This is because the data that will be entered is always going to be in the form of an email. On the other hand, if the input accepts an email or a username, using ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode=\u201demail\u201d")," is appropriate because the data being entered is not always going to be an email address."),(0,o.kt)("p",null,"For a list of accepted values, see the ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode",target:"_blank",rel:"noreferrer"},"inputmode Documentation"),"."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Username or Email</IonLabel>\n  <IonInput inputmode="email"></IonInput>\n</IonItem>\n\n<IonItem>\n  <IonLabel>Enter a number</IonLabel>\n  <IonTextarea inputmode="numeric"></IonTextarea>\n</IonItem>\n'))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n')))),(0,o.kt)(r.Z,{user:"ionic",slug:"abvJVVv",height:"400",mdxType:"Codepen"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute is supported on devices running Chrome 66+ and iOS Safari 12.2+: ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/#search=inputmode"},"https://caniuse.com/#search=inputmode"))),(0,o.kt)("h2",{id:"enterkeyhint"},"enterkeyhint"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint"),' attribute allows developers to specify what type of action label or icon should be shown for the "Enter" key. Using ',(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," lets the user know what will happen when they tap the \u201cEnter\u201d key. The value that should be specified here depends on the context of what the user is doing. For example, if the user is typing into a searchbox, developers should ensure that the input has ",(0,o.kt)("inlineCode",{parentName:"p"},'enterkeyhint="search"'),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," is a global attribute, it can be used on Ionic components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,o.kt)("p",null,"For a list of accepted values, see the ",(0,o.kt)("a",{href:"https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute",target:"_blank",rel:"noreferrer"},"enterkeyhint Standard"),"."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Enter search query</IonLabel>\n  <IonInput enterkeyhint="search" type="search"></IonInput>\n</IonItem>\n'))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n')))),(0,o.kt)(r.Z,{user:"ionic",slug:"GRpWyRB",height:"350",mdxType:"Codepen"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+.")),(0,o.kt)("h2",{id:"dark-mode"},"Dark Mode"),(0,o.kt)("p",null,"By default the keyboard theme is determined by the OS. For example, if dark mode is enabled on iOS, the keyboard in your app will appear with a dark theme even if your application does not have a dark theme in its CSS. "),(0,o.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to force the keyboard to appear with a certain theme."),(0,o.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to force the keyboard to appear with a certain theme. For more information regarding this configuration, see the ",(0,o.kt)("a",{href:"https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,o.kt)("h2",{id:"hiding-the-accessory-bar"},"Hiding the Accessory Bar"),(0,o.kt)("p",null,"When running any kind of web based application, iOS will show an accessory bar above the keyboard. This allows users to move to the next or previous inputs as well as close the keyboard."),(0,o.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to hide the accessory bar."),(0,o.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to hide the accessory bar. For more information regarding this configuration, see the ",(0,o.kt)("a",{href:"https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,o.kt)("h2",{id:"keyboard-lifecycle-events"},"Keyboard Lifecycle Events"),(0,o.kt)("p",null,"Detecting the presence of an on-screen keyboard is useful for adjusting the positioning of an input that would otherwise be hidden by the keyboard. For Capacitor and Cordova apps, developers typically rely on native keyboard plugins to listen for the keyboard lifecycle events. For apps running in a mobile browser or as a PWA, developers can use the ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API",rel:"noreferrer",target:"_blank"},"Visual Viewport API")," where supported. Ionic Framework wraps both of these approaches and emits ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidHide")," events on the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),". The event payload for ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," contains an approximation of the keyboard height in pixels."),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('ionKeyboardDidShow', ev => {\n  const { keyboardHeight } = ev;\n  // Do something with the keyboard height such as translating an input above the keyboard.\n});\n\nwindow.addEventListener('ionKeyboardDidHide', () => {\n  // Move input back to original location\n});\n"))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Platform } from '@ionic/angular';\n\n...\n\nconstructor(private platform: Platform) {\n  this.platform.keyboardDidShow.subscribe(ev => {\n    const { keyboardHeight } = ev;\n    // Do something with the keyboard height such as translating an input above the keyboard.\n  });\n  \n  this.platform.keyboardDidHide.subscribe(() => {\n    // Move input back to original location\n  });\n}\n"))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboardState } from '@ionic/react-hooks/keyboard';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboardState();\n\n// Do something with the keyboard height such as translating an input above the keyboard\n"))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useKeyboard } from '@ionic/vue';\nimport { watch } from 'vue';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboard();\n\nwatch(keyboardHeight, () => {\n  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);\n});\n\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+.")))}m.isMDXComponent=!0}}]);