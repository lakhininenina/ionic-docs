(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[77596],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(22122),r=t(19756),i=t(86010),a=t(67294),s="docsButton_2Emz",l="docsButtonRound_3i9G";function c(e){var n,t=e.href,c=e.round,u=void 0!==c&&c,d=(0,r.Z)(e,["href","round"]);return d.className=(0,i.Z)(((n={})[d.className]=Boolean(d.className),n[s]=!0,n["docs-button"]=!0,n[l]=u,n["docs-button--round"]=u,n)),t?a.createElement("a",(0,o.Z)({href:t,className:"docsButton"},d),d.children):a.createElement("button",(0,o.Z)({className:"docsButton"},d),d.children)}},2805:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),a=t(28312),s=t(16239),l=t(41395),c=t(58215),u=t(81840),d={title:"Android Full Screen"},p={unversionedId:"native/plugins/android-full-screen",id:"native/plugins/android-full-screen",isDocsHomePage:!1,title:"Android Full Screen",description:"This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.",source:"@site/docs/native/plugins/android-full-screen.md",sourceDirName:"native/plugins",slug:"/native/plugins/android-full-screen",permalink:"/docs/native/plugins/android-full-screen",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/android-full-screen.md",version:"current",frontMatter:{title:"Android Full Screen"},sidebar:"native",previous:{title:"Android ExoPlayer",permalink:"/docs/native/plugins/android-exoplayer"},next:{title:"Android Notch",permalink:"/docs/native/plugins/android-notch"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],f={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.\nUsing Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.\nIn Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.'),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/mesmotronic/cordova-plugin-fullscreen",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/mesmotronic/cordova-plugin-fullscreen")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-fullscreen ","\n","$ npm install @ionic-native/android-full-screen ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-fullscreen ","\n","$ npm install @ionic-native/android-full-screen ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';\n\nconstructor(private androidFullScreen: AndroidFullScreen) { }\n\n...\n\nthis.androidFullScreen.isImmersiveModeSupported()\n  .then(() => console.log('Immersive mode supported'))\n  .catch(err => console.log(err));\n\n")))}h.isMDXComponent=!0}}]);