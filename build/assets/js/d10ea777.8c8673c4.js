(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[67098],{16239:function(o,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(22122),a=e(19756),r=e(86010),i=e(67294),l="docsButton_2Emz",s="docsButtonRound_3i9G";function c(o){var t,e=o.href,c=o.round,u=void 0!==c&&c,p=(0,a.Z)(o,["href","round"]);return p.className=(0,r.Z)(((t={})[p.className]=Boolean(p.className),t[l]=!0,t["docs-button"]=!0,t[s]=u,t["docs-button--round"]=u,t)),e?i.createElement("a",(0,n.Z)({href:e,className:"docsButton"},p),p.children):i.createElement("button",(0,n.Z)({className:"docsButton"},p),p.children)}},18807:function(o,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=e(22122),a=e(19756),r=(e(67294),e(3905)),i=e(28312),l=e(16239),s=e(41395),c=e(58215),u=e(81840),p={title:"Photo Library"},d={unversionedId:"native/plugins/photo-library",id:"native/plugins/photo-library",isDocsHomePage:!1,title:"Photo Library",description:"The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.",source:"@site/docs/native/plugins/photo-library.md",sourceDirName:"native/plugins",slug:"/native/plugins/photo-library",permalink:"/docs/native/plugins/photo-library",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/photo-library.md",version:"current",frontMatter:{title:"Photo Library"},sidebar:"native",previous:{title:"Phonegap Local Notification",permalink:"/docs/native/plugins/phonegap-local-notification"},next:{title:"Photo Viewer",permalink:"/docs/native/plugins/photo-viewer"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],h={toc:m};function g(o){var t=o.components,e=(0,a.Z)(o,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.\nSaving photos and videos to the library is also supported.\ncdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/terikon/cordova-plugin-photo-library",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/terikon/cordova-plugin-photo-library")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-photo-library ","\n","$ npm install @ionic-native/photo-library ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-photo-library ","\n","$ npm install @ionic-native/photo-library ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PhotoLibrary } from '@ionic-native/photo-library/ngx';\n\nconstructor(private photoLibrary: PhotoLibrary) { }\n\nthis.photoLibrary.requestAuthorization().then(() => {\n  this.photoLibrary.getLibrary().subscribe({\n    next: library => {\n      library.forEach(function(libraryItem) {\n        console.log(libraryItem.id);          // ID of the photo\n        console.log(libraryItem.photoURL);    // Cross-platform access to photo\n        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail\n        console.log(libraryItem.fileName);\n        console.log(libraryItem.width);\n        console.log(libraryItem.height);\n        console.log(libraryItem.creationDate);\n        console.log(libraryItem.latitude);\n        console.log(libraryItem.longitude);\n        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used\n      });\n    },\n    error: err => { console.log('could not get photos'); },\n    complete: () => { console.log('done getting photos'); }\n  });\n})\n.catch(err => console.log('permissions weren\\'t granted'));\n\n")))}g.isMDXComponent=!0}}]);