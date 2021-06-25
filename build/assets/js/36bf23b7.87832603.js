(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[40207],{16239:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var n=t(22122),i=t(19756),o=t(86010),r=t(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var a,t=e.href,l=e.round,p=void 0!==l&&l,u=(0,i.Z)(e,["href","round"]);return u.className=(0,o.Z)(((a={})[u.className]=Boolean(u.className),a[s]=!0,a["docs-button"]=!0,a[c]=p,a["docs-button--round"]=p,a)),t?r.createElement("a",(0,n.Z)({href:t,className:"docsButton"},u),u.children):r.createElement("button",(0,n.Z)({className:"docsButton"},u),u.children)}},67422:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return v}});var n=t(22122),i=t(19756),o=(t(67294),t(3905)),r=t(28312),s=t(16239),c=t(41395),l=t(58215),p=t(81840),u={title:"Camera"},m={unversionedId:"native/plugins/camera",id:"native/plugins/camera",isDocsHomePage:!1,title:"Camera",description:"Take a photo or capture video.",source:"@site/docs/native/plugins/camera.md",sourceDirName:"native/plugins",slug:"/native/plugins/camera",permalink:"/docs/native/plugins/camera",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/camera.md",version:"current",frontMatter:{title:"Camera"},sidebar:"native",previous:{title:"Camera Preview",permalink:"/docs/native/plugins/camera-preview"},next:{title:"Card IO",permalink:"/docs/native/plugins/card-io"}},d=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],g={toc:d};function v(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Take a photo or capture video."),(0,o.kt)("p",null,"Requires the Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-camera"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-camera"},"Cordova Camera Plugin Docs"),"."),(0,o.kt)("p",null,"[Warning]"," Since IOS 10 the camera requires permissions to be placed in your config.xml add"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">\n <string>You can take photos</string>\n</config-file>\n')),(0,o.kt)("p",null,"inside of the <platform name='ios> section"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-camera",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-camera")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-camera ","\n","$ npm install @ionic-native/camera ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-camera ","\n","$ npm install @ionic-native/camera ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Camera, CameraOptions } from '@ionic-native/camera/ngx';\n\nconstructor(private camera: Camera) { }\n\n...\n\n\nconst options: CameraOptions = {\n  quality: 100,\n  destinationType: this.camera.DestinationType.FILE_URI,\n  encodingType: this.camera.EncodingType.JPEG,\n  mediaType: this.camera.MediaType.PICTURE\n}\n\nthis.camera.getPicture(options).then((imageData) => {\n // imageData is either a base64 encoded string or a file URI\n // If it's base64 (DATA_URL):\n let base64Image = 'data:image/jpeg;base64,' + imageData;\n}, (err) => {\n // Handle error\n});\n")))}v.isMDXComponent=!0}}]);