(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[37622],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(22122),r=t(19756),i=t(86010),o=t(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var n,t=e.href,l=e.round,u=void 0!==l&&l,p=(0,r.Z)(e,["href","round"]);return p.className=(0,i.Z)(((n={})[p.className]=Boolean(p.className),n[s]=!0,n["docs-button"]=!0,n[c]=u,n["docs-button--round"]=u,n)),t?o.createElement("a",(0,a.Z)({href:t,className:"docsButton"},p),p.children):o.createElement("button",(0,a.Z)({className:"docsButton"},p),p.children)}},2086:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(28312),s=t(16239),c=t(41395),l=t(58215),u=t(81840),p={title:"QR Scanner"},d={unversionedId:"native/plugins/qr-scanner",id:"native/plugins/qr-scanner",isDocsHomePage:!1,title:"QR Scanner",description:"A fast, energy efficient, highly-configurable QR code scanner for Cordova apps.",source:"@site/docs/native/plugins/qr-scanner.md",sourceDirName:"native/plugins",slug:"/native/plugins/qr-scanner",permalink:"/docs/native/plugins/qr-scanner",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/qr-scanner.md",version:"current",frontMatter:{title:"QR Scanner"},sidebar:"native",previous:{title:"QQSDK",permalink:"/docs/native/plugins/qqsdk"},next:{title:"QuikklyPlugin",permalink:"/docs/native/plugins/quikkly"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Capacitor",id:"capacitor",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],g={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A fast, energy efficient, highly-configurable QR code scanner for Cordova apps."),(0,i.kt)("p",null,"Requires Cordova plugin: ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-qrscanner"),". For more info, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitpay/cordova-plugin-qrscanner"},"QR Scanner plugin docs"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/bitpay/cordova-plugin-qrscanner",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/bitpay/cordova-plugin-qrscanner")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-qrscanner ","\n","$ npm install @ionic-native/qr-scanner ","\n","$ ionic cap sync")),(0,i.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-qrscanner ","\n","$ npm install @ionic-native/qr-scanner ","\n")),(0,i.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"Browser"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Windows")),(0,i.kt)("h2",{id:"capacitor"},"Capacitor"),(0,i.kt)("p",null,"Not Compatible"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';\n\n\nconstructor(private qrScanner: QRScanner) { }\n\n...\n\n// Optionally request the permission early\nthis.qrScanner.prepare()\n  .then((status: QRScannerStatus) => {\n     if (status.authorized) {\n       // camera permission was granted\n\n\n       // start scanning\n       let scanSub = this.qrScanner.scan().subscribe((text: string) => {\n         console.log('Scanned something', text);\n\n         this.qrScanner.hide(); // hide camera preview\n         scanSub.unsubscribe(); // stop scanning\n       });\n\n     } else if (status.denied) {\n       // camera permission was permanently denied\n       // you must use QRScanner.openSettings() method to guide the user to the settings page\n       // then they can grant the permission from there\n     } else {\n       // permission was denied, but not permanently. You can ask for permission again at a later time.\n     }\n  })\n  .catch((e: any) => console.log('Error is', e));\n\n\n")))}h.isMDXComponent=!0}}]);