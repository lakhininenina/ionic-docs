(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[37491],{16239:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(22122),o=a(19756),r=a(86010),s=a(67294),i="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var t,a=e.href,l=e.round,d=void 0!==l&&l,u=(0,o.Z)(e,["href","round"]);return u.className=(0,r.Z)(((t={})[u.className]=Boolean(u.className),t[i]=!0,t["docs-button"]=!0,t[c]=d,t["docs-button--round"]=d,t)),a?s.createElement("a",(0,n.Z)({href:a,className:"docsButton"},u),u.children):s.createElement("button",(0,n.Z)({className:"docsButton"},u),u.children)}},60874:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),s=a(28312),i=a(16239),c=a(41395),l=a(58215),d=a(81840),u={title:"Broadcaster"},p={unversionedId:"native/plugins/broadcaster",id:"native/plugins/broadcaster",isDocsHomePage:!1,title:"Broadcaster",description:"This plugin adds exchanging events between native code and your app.",source:"@site/docs/native/plugins/broadcaster.md",sourceDirName:"native/plugins",slug:"/native/plugins/broadcaster",permalink:"/docs/native/plugins/broadcaster",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/broadcaster.md",version:"current",frontMatter:{title:"Broadcaster"},sidebar:"native",previous:{title:"Brightness",permalink:"/docs/native/plugins/brightness"},next:{title:"Browser Tab",permalink:"/docs/native/plugins/browser-tab"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:m};function g(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin adds exchanging events between native code and your app."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/bsorrentino/cordova-broadcaster",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/bsorrentino/cordova-broadcaster")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-broadcaster ","\n","$ npm install @ionic-native/broadcaster ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-broadcaster ","\n","$ npm install @ionic-native/broadcaster ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Browser")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Broadcaster } from '@ionic-native/broadcaster/ngx';\n\nconstructor(private broadcaster: Broadcaster) { }\n\n...\n\n// Listen to events from Native\nthis.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));\n\n// Send event to Native\nthis.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));\n\n")))}g.isMDXComponent=!0}}]);