(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[89979],{16239:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var o=n(22122),a=n(19756),i=n(86010),r=n(67294),s="docsButton_2Emz",l="docsButtonRound_3i9G";function c(t){var e,n=t.href,c=t.round,p=void 0!==c&&c,d=(0,a.Z)(t,["href","round"]);return d.className=(0,i.Z)(((e={})[d.className]=Boolean(d.className),e[s]=!0,e["docs-button"]=!0,e[l]=p,e["docs-button--round"]=p,e)),n?r.createElement("a",(0,o.Z)({href:n,className:"docsButton"},d),d.children):r.createElement("button",(0,o.Z)({className:"docsButton"},d),d.children)}},83141:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=n(28312),s=n(16239),l=n(41395),c=n(58215),p=n(81840),d={title:"Httpd"},u={unversionedId:"native/plugins/httpd",id:"native/plugins/httpd",isDocsHomePage:!1,title:"Httpd",description:"Embedded httpd for Cordova apps. Light weight HTTP server.",source:"@site/docs/native/plugins/httpd.md",sourceDirName:"native/plugins",slug:"/native/plugins/httpd",permalink:"/docs/native/plugins/httpd",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/httpd.md",version:"current",frontMatter:{title:"Httpd"},sidebar:"native",previous:{title:"HTTP",permalink:"/docs/native/plugins/http"},next:{title:"Iamport Cordova",permalink:"/docs/native/plugins/iamport-cordova"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],h={toc:m};function v(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Embedded httpd for Cordova apps. Light weight HTTP server."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/floatinghotpot/cordova-httpd",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/floatinghotpot/cordova-httpd")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-httpd ","\n","$ npm install @ionic-native/httpd ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-httpd ","\n","$ npm install @ionic-native/httpd ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"macOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Httpd, HttpdOptions } from '@ionic-native/httpd/ngx';\n\nconstructor(private httpd: Httpd) { }\n\n...\n\n\nlet options: HttpdOptions = {\n     www_root: 'httpd_root', // relative path to app's www directory\n     port: 80,\n     localhost_only: false\n }\n\nthis.httpd.startServer(options).subscribe((data) => {\n console.log('Server is live');\n});\n\n")))}v.isMDXComponent=!0}}]);