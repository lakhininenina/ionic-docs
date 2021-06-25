(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[88304],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(22122),i=t(19756),s=t(86010),a=t(67294),r="docsButton_2Emz",u="docsButtonRound_3i9G";function c(e){var n,t=e.href,c=e.round,d=void 0!==c&&c,l=(0,i.Z)(e,["href","round"]);return l.className=(0,s.Z)(((n={})[l.className]=Boolean(l.className),n[r]=!0,n["docs-button"]=!0,n[u]=d,n["docs-button--round"]=d,n)),t?a.createElement("a",(0,o.Z)({href:t,className:"docsButton"},l),l.children):a.createElement("button",(0,o.Z)({className:"docsButton"},l),l.children)}},68287:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return v}});var o=t(22122),i=t(19756),s=(t(67294),t(3905)),a=t(28312),r=t(16239),u=t(41395),c=t(58215),d=t(81840),l={title:"Push Notifications - WonderPush"},p={unversionedId:"native/plugins/wonderpush",id:"native/plugins/wonderpush",isDocsHomePage:!1,title:"Push Notifications - WonderPush",description:"Send unlimited push notifications to iOS and Android devices.",source:"@site/docs/native/plugins/wonderpush.md",sourceDirName:"native/plugins",slug:"/native/plugins/wonderpush",permalink:"/docs/native/plugins/wonderpush",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/wonderpush.md",version:"current",frontMatter:{title:"Push Notifications - WonderPush"},sidebar:"native",previous:{title:"WifiWizard2",permalink:"/docs/native/plugins/wifi-wizard-2"},next:{title:"Youtube Video Player",permalink:"/docs/native/plugins/youtube-video-player"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],m={toc:h};function v(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Send unlimited push notifications to iOS and Android devices."),(0,s.kt)("p",null,"Get started in minutes: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.wonderpush.com/docs/ionic-quickstart"},"Ionic Quickstart Guide"),"."),(0,s.kt)("p",null,"Advanced segmentation, automation and personalization of push messages for \u20ac1 per 1000 subscribers."),(0,s.kt)("p",null,"Requires the Cordova plugin ",(0,s.kt)("inlineCode",{parentName:"p"},"wonderpush-cordova-sdk"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.wonderpush.com"},"WonderPush push notifications")," are the most effective way\nto retain your users and grow your audience while remaining fully GDPR compliant."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/wonderpush/wonderpush-cordova-sdk",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/wonderpush/wonderpush-cordova-sdk")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(u.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install wonderpush-cordova-sdk ","\n","$ npm install @ionic-native/wonderpush ","\n","$ ionic cap sync")),(0,s.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add wonderpush-cordova-sdk ","\n","$ npm install @ionic-native/wonderpush ","\n")),(0,s.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WonderPush } from '@ionic-native/wonderpush';\n\n\nconstructor(private wonderPush: WonderPush) { }\n\n...\n\n// Subscribe user\nthis.wonderPush.subscribeToNotifications()\n  .then(() => console.log(\"User subscribed to notifications\"))\n  .catch((error: any) => console.error(error));\n\n\n// Send an event (a purchase in this example)\nthis.wonderPush.sendEvent('purchase', {\n  float_price: 12.99,\n  string_sku: \"X123456\"\n});\n\n// Tag users (as customers)\nthis.wonderPush.addTag('customer');\n\n// Personalize\n// 1. Store user details.\n// 2. Use those details to create segments.\n// 3. Include those details in your notifications.\nthis.wonderPush.putProperties({\n  string_name: 'John D.',\n  int_age: 24\n});\n\n// GDPR\n// 1. set REQUIRES_USER_CONSENT=true to enable GDPR compliance.\n// 2. WonderPush doesn't start until setUserConsent(true) is called.\nconst onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);\n\n// Listen to notification clicks\ndocument.addEventListener('wonderpush.notificationOpen', function(event) {\n  console.log('Notification opened', event.notification);\n  if (event.notificationType === 'data') {\n    console.log('Silent notification', event.notification);\n  }\n});\n")))}v.isMDXComponent=!0}}]);