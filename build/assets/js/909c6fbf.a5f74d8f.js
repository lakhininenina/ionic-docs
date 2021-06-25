(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[21800],{16239:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(22122),r=n(19756),s=n(86010),a=n(67294),i="docsButton_2Emz",c="docsButtonRound_3i9G";function u(e){var t,n=e.href,u=e.round,l=void 0!==u&&u,p=(0,r.Z)(e,["href","round"]);return p.className=(0,s.Z)(((t={})[p.className]=Boolean(p.className),t[i]=!0,t["docs-button"]=!0,t[c]=l,t["docs-button--round"]=l,t)),n?a.createElement("a",(0,o.Z)({href:n,className:"docsButton"},p),p.children):a.createElement("button",(0,o.Z)({className:"docsButton"},p),p.children)}},61901:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var o=n(22122),r=n(19756),s=(n(67294),n(3905)),a=n(28312),i=n(16239),c=n(41395),u=n(58215),l=n(81840),p={title:"Stepcounter"},d={unversionedId:"native/plugins/stepcounter",id:"native/plugins/stepcounter",isDocsHomePage:!1,title:"Stepcounter",description:"Cordova plugin for using device's stepcounter on Android (API > 19)",source:"@site/docs/native/plugins/stepcounter.md",sourceDirName:"native/plugins",slug:"/native/plugins/stepcounter",permalink:"/docs/native/plugins/stepcounter",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/stepcounter.md",version:"current",frontMatter:{title:"Stepcounter"},sidebar:"native",previous:{title:"Status Bar",permalink:"/docs/native/plugins/status-bar"},next:{title:"Streaming Media",permalink:"/docs/native/plugins/streaming-media"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cordova plugin for using device's stepcounter on Android (API > 19)"),(0,s.kt)("p",null,"Use to"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"start and stop stepcounter service"),(0,s.kt)("li",{parentName:"ul"},"read device's stepcounter data")),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/ihadeed/cordova-plugin-stepcounter",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/ihadeed/cordova-plugin-stepcounter")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-stepcounter ","\n","$ npm install @ionic-native/stepcounter ","\n","$ ionic cap sync")),(0,s.kt)(u.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-stepcounter ","\n","$ npm install @ionic-native/stepcounter ","\n")),(0,s.kt)(u.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Stepcounter } from '@ionic-native/stepcounter/ngx';\n\nconstructor(private stepcounter: Stepcounter) { }\n\n...\n\nlet startingOffset = 0;\nthis.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));\n\nthis.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));\n\n")))}g.isMDXComponent=!0}}]);