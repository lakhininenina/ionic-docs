(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[50401],{16239:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(22122),a=t(19756),s=t(86010),o=t(67294),l="docsButton_2Emz",r="docsButtonRound_3i9G";function c(e){var i,t=e.href,c=e.round,u=void 0!==c&&c,p=(0,a.Z)(e,["href","round"]);return p.className=(0,s.Z)(((i={})[p.className]=Boolean(p.className),i[l]=!0,i["docs-button"]=!0,i[r]=u,i["docs-button--round"]=u,i)),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},p),p.children):o.createElement("button",(0,n.Z)({className:"docsButton"},p),p.children)}},63302:function(e,i,t){"use strict";t.r(i),t.d(i,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=t(22122),a=t(19756),s=(t(67294),t(3905)),o=t(28312),l=t(16239),r=t(41395),c=t(58215),u=t(81840),p={title:"Mobile Accessibility"},d={unversionedId:"native/plugins/mobile-accessibility",id:"native/plugins/mobile-accessibility",isDocsHomePage:!1,title:"Mobile Accessibility",description:"This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.",source:"@site/docs/native/plugins/mobile-accessibility.md",sourceDirName:"native/plugins",slug:"/native/plugins/mobile-accessibility",permalink:"/docs/native/plugins/mobile-accessibility",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/mobile-accessibility.md",version:"current",frontMatter:{title:"Mobile Accessibility"},sidebar:"native",previous:{title:"MLKitTranslate",permalink:"/docs/native/plugins/mlkit-translate"},next:{title:"Mobile Messaging",permalink:"/docs/native/plugins/mobile-messaging"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],b={toc:m};function g(e){var i=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},b,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.\nIt also allows an application to send a string to be spoken by the screen reader, or a command to stop the screen reader from speaking."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/phonegap/phonegap-mobile-accessibility",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/phonegap/phonegap-mobile-accessibility")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(r.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install phonegap-plugin-mobile-accessibility ","\n","$ npm install @ionic-native/mobile-accessibility ","\n","$ ionic cap sync")),(0,s.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add phonegap-plugin-mobile-accessibility ","\n","$ npm install @ionic-native/mobile-accessibility ","\n")),(0,s.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android Fire OS"),(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS"),(0,s.kt)("li",{parentName:"ul"},"Windows")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';\n\n\nconstructor(private mobileAccessibility: MobileAccessibility) { }\n\n...\n\nif(this.mobileAccessibility.isScreenReaderRunningCallback();\n\n")))}g.isMDXComponent=!0}}]);