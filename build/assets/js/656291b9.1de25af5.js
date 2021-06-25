(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[54377],{16239:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(22122),n=a(19756),o=a(86010),s=a(67294),l="docsButton_2Emz",r="docsButtonRound_3i9G";function c(e){var t,a=e.href,c=e.round,u=void 0!==c&&c,d=(0,n.Z)(e,["href","round"]);return d.className=(0,o.Z)(((t={})[d.className]=Boolean(d.className),t[l]=!0,t["docs-button"]=!0,t[r]=u,t["docs-button--round"]=u,t)),a?s.createElement("a",(0,i.Z)({href:a,className:"docsButton"},d),d.children):s.createElement("button",(0,i.Z)({className:"docsButton"},d),d.children)}},13270:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g},default:function(){return v}});var i=a(22122),n=a(19756),o=(a(67294),a(3905)),s=a(28312),l=a(16239),r=a(41395),c=a(58215),u=a(81840),d={title:"Dialogs"},p={unversionedId:"native/plugins/dialogs",id:"native/plugins/dialogs",isDocsHomePage:!1,title:"Dialogs",description:"This plugin gives you ability to access and customize the device native dialogs.",source:"@site/docs/native/plugins/dialogs.md",sourceDirName:"native/plugins",slug:"/native/plugins/dialogs",permalink:"/docs/native/plugins/dialogs",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/dialogs.md",version:"current",frontMatter:{title:"Dialogs"},sidebar:"native",previous:{title:"Diagnostic",permalink:"/docs/native/plugins/diagnostic"},next:{title:"DNS",permalink:"/docs/native/plugins/dns"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],m={toc:g};function v(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This plugin gives you ability to access and customize the device native dialogs."),(0,o.kt)("p",null,"Requires Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-dialogs"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-dialogs"},"Dialogs plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-dialogs",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-dialogs")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(r.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-dialogs ","\n","$ npm install @ionic-native/dialogs ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-dialogs ","\n","$ npm install @ionic-native/dialogs ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dialogs } from '@ionic-native/dialogs/ngx';\n\nconstructor(private dialogs: Dialogs) { }\n\n...\n\nthis.dialogs.alert('Hello world')\n  .then(() => console.log('Dialog dismissed'))\n  .catch(e => console.log('Error displaying dialog', e));\n\n\n")))}v.isMDXComponent=!0}}]);