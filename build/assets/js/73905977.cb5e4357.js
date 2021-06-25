(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[41978],{16239:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(22122),o=n(19756),a=n(86010),s=n(67294),i="docsButton_2Emz",l="docsButtonRound_3i9G";function c(e){var t,n=e.href,c=e.round,u=void 0!==c&&c,p=(0,o.Z)(e,["href","round"]);return p.className=(0,a.Z)(((t={})[p.className]=Boolean(p.className),t[i]=!0,t["docs-button"]=!0,t[l]=u,t["docs-button--round"]=u,t)),n?s.createElement("a",(0,r.Z)({href:n,className:"docsButton"},p),p.children):s.createElement("button",(0,r.Z)({className:"docsButton"},p),p.children)}},36133:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g},default:function(){return h}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=n(28312),i=n(16239),l=n(41395),c=n(58215),u=n(81840),p={title:"User Agent"},d={unversionedId:"native/plugins/user-agent",id:"native/plugins/user-agent",isDocsHomePage:!1,title:"User Agent",description:"The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please see the HTTP User-Agent docs.",source:"@site/docs/native/plugins/user-agent.md",sourceDirName:"native/plugins",slug:"/native/plugins/user-agent",permalink:"/docs/native/plugins/user-agent",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/user-agent.md",version:"current",frontMatter:{title:"User Agent"},sidebar:"native",previous:{title:"Usabilla",permalink:"/docs/native/plugins/usabilla-cordova-sdk"},next:{title:"Vibes",permalink:"/docs/native/plugins/vibes"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],m={toc:g};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"see the HTTP User-Agent docs"),"."),(0,a.kt)("p",null,"Requires Cordova plugin: ",(0,a.kt)("inlineCode",{parentName:"p"},"cordova-useragent"),". For more info, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LouisT/cordova-useragent"},"User-Agent plugin docs"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/danielsogl/cordova-plugin-useragent",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/danielsogl/cordova-plugin-useragent")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-useragent ","\n","$ npm install @ionic-native/user-agent ","\n","$ ionic cap sync")),(0,a.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-useragent ","\n","$ npm install @ionic-native/user-agent ","\n")),(0,a.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android"),(0,a.kt)("li",{parentName:"ul"},"iOS")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UserAgent } from '@ionic-native/user-agent/ngx';\n\n\nconstructor(private userAgent: UserAgent) { }\n\n...\n\n\nthis.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n* this.userAgent.get()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n* this.userAgent.reset()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}h.isMDXComponent=!0}}]);