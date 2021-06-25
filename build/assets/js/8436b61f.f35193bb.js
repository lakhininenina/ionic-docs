(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[11808],{16239:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(22122),i=n(19756),o=n(86010),r=n(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var t,n=e.href,l=e.round,u=void 0!==l&&l,d=(0,i.Z)(e,["href","round"]);return d.className=(0,o.Z)(((t={})[d.className]=Boolean(d.className),t[s]=!0,t["docs-button"]=!0,t[c]=u,t["docs-button--round"]=u,t)),n?r.createElement("a",(0,a.Z)({href:n,className:"docsButton"},d),d.children):r.createElement("button",(0,a.Z)({className:"docsButton"},d),d.children)}},54487:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=n(28312),s=n(16239),c=n(41395),l=n(58215),u=n(81840),d={title:"MS ADAL"},p={unversionedId:"native/plugins/ms-adal",id:"native/plugins/ms-adal",isDocsHomePage:!1,title:"MS ADAL",description:"Active Directory Authentication Library (ADAL) plugin.",source:"@site/docs/native/plugins/ms-adal.md",sourceDirName:"native/plugins",slug:"/native/plugins/ms-adal",permalink:"/docs/native/plugins/ms-adal",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/ms-adal.md",version:"current",frontMatter:{title:"MS ADAL"},sidebar:"native",previous:{title:"Mobile Messaging",permalink:"/docs/native/plugins/mobile-messaging"},next:{title:"Multiple Documents Picker",permalink:"/docs/native/plugins/multiple-document-picker"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Active Directory Authentication Library (ADAL) plugin.\nActive Directory Authentication Library (",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet"},"ADAL"),")\nplugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of\nWindows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/AzureAD/azure-activedirectory-library-for-cordova",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/AzureAD/azure-activedirectory-library-for-cordova")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-ms-adal ","\n","$ npm install @ionic-native/ms-adal ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-ms-adal ","\n","$ npm install @ionic-native/ms-adal ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';\n\n\nconstructor(private msAdal: MSAdal) {}\n\n...\n\nlet authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');\n\nauthContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://MyDirectorySearcherApp')\n  .then((authResponse: AuthenticationResult) => {\n    console.log('Token is' , authResponse.accessToken);\n    console.log('Token will expire on', authResponse.expiresOn);\n  })\n  .catch((e: any) => console.log('Authentication failed', e));\n\n\n")))}h.isMDXComponent=!0}}]);