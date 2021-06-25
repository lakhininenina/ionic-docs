(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[48823],{16239:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var a=o(22122),n=o(19756),r=o(86010),i=o(67294),s="docsButton_2Emz",l="docsButtonRound_3i9G";function c(e){var t,o=e.href,c=e.round,u=void 0!==c&&c,p=(0,n.Z)(e,["href","round"]);return p.className=(0,r.Z)(((t={})[p.className]=Boolean(p.className),t[s]=!0,t["docs-button"]=!0,t[l]=u,t["docs-button--round"]=u,t)),o?i.createElement("a",(0,a.Z)({href:o,className:"docsButton"},p),p.children):i.createElement("button",(0,a.Z)({className:"docsButton"},p),p.children)}},20847:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var a=o(22122),n=o(19756),r=(o(67294),o(3905)),i=o(28312),s=o(16239),l=o(41395),c=o(58215),u=o(81840),p={title:"Browser Tab"},d={unversionedId:"native/plugins/browser-tab",id:"native/plugins/browser-tab",isDocsHomePage:!1,title:"Browser Tab",description:"This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically Custom Tabs on Android (including the Chrome Custom Tabs implementation), and SFSafariViewController on iOS.",source:"@site/docs/native/plugins/browser-tab.md",sourceDirName:"native/plugins",slug:"/native/plugins/browser-tab",permalink:"/docs/native/plugins/browser-tab",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/browser-tab.md",version:"current",frontMatter:{title:"Browser Tab"},sidebar:"native",previous:{title:"Broadcaster",permalink:"/docs/native/plugins/broadcaster"},next:{title:"Build Info",permalink:"/docs/native/plugins/build-info"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],b={toc:m};function v(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically ",(0,r.kt)("a",{parentName:"p",href:"http://developer.android.com/tools/support-library/features.html#custom-tabs"},"Custom Tabs")," on Android (including the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/multidevice/android/customtabs"},"Chrome Custom Tabs")," implementation), and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/"},"SFSafariViewController")," on iOS."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/google/cordova-plugin-browsertab",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/google/cordova-plugin-browsertab")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-browsertab ","\n","$ npm install @ionic-native/browser-tab ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-browsertab ","\n","$ npm install @ionic-native/browser-tab ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BrowserTab } from '@ionic-native/browser-tab/ngx';\n\nconstructor(private browserTab: BrowserTab) {\n\n  browserTab.isAvailable()\n    .then(isAvailable => {\n      if (isAvailable) {\n        browserTab.openUrl('https://ionic.io');\n      } else {\n        // open URL with InAppBrowser instead or SafariViewController\n      }\n    });\n}\n\n")))}v.isMDXComponent=!0}}]);