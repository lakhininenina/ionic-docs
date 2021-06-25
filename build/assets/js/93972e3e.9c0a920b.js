(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[19845],{16239:function(n,a,e){"use strict";e.d(a,{Z:function(){return p}});var t=e(22122),o=e(19756),i=e(86010),r=e(67294),l="docsButton_2Emz",s="docsButtonRound_3i9G";function p(n){var a,e=n.href,p=n.round,c=void 0!==p&&p,u=(0,o.Z)(n,["href","round"]);return u.className=(0,i.Z)(((a={})[u.className]=Boolean(u.className),a[l]=!0,a["docs-button"]=!0,a[s]=c,a["docs-button--round"]=c,a)),e?r.createElement("a",(0,t.Z)({href:e,className:"docsButton"},u),u.children):r.createElement("button",(0,t.Z)({className:"docsButton"},u),u.children)}},78257:function(n,a,e){"use strict";e.r(a),e.d(a,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var t=e(22122),o=e(19756),i=(e(67294),e(3905)),r=e(28312),l=e(16239),s=e(41395),p=e(58215),c=e(81840),u={title:"PayPal"},d={unversionedId:"native/plugins/paypal",id:"native/plugins/paypal",isDocsHomePage:!1,title:"PayPal",description:"PayPal plugin for Cordova/Ionic Applications",source:"@site/docs/native/plugins/paypal.md",sourceDirName:"native/plugins",slug:"/native/plugins/paypal",permalink:"/docs/native/plugins/paypal",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/paypal.md",version:"current",frontMatter:{title:"PayPal"},sidebar:"native",previous:{title:"OpenALPR",permalink:"/docs/native/plugins/openalpr"},next:{title:"PDFGenerator",permalink:"/docs/native/plugins/pdf-generator"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],y={toc:m};function v(n){var a=n.components,e=(0,o.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},y,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PayPal plugin for Cordova/Ionic Applications"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/paypal/PayPal-Cordova-Plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/paypal/PayPal-Cordova-Plugin")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(s.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com.paypal.cordova.mobilesdk ","\n","$ npm install @ionic-native/paypal ","\n","$ ionic cap sync")),(0,i.kt)(p.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com.paypal.cordova.mobilesdk ","\n","$ npm install @ionic-native/paypal ","\n")),(0,i.kt)(p.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { PayPal, PayPalPayment, PayPalConfiguration } from \'@ionic-native/paypal/ngx\';\n\nconstructor(private payPal: PayPal) { }\n\n...\n\n\nthis.payPal.init({\n  PayPalEnvironmentProduction: \'YOUR_PRODUCTION_CLIENT_ID\',\n  PayPalEnvironmentSandbox: \'YOUR_SANDBOX_CLIENT_ID\'\n}).then(() => {\n  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction\n  this.payPal.prepareToRender(\'PayPalEnvironmentSandbox\', new PayPalConfiguration({\n    // Only needed if you get an "Internal Service Error" after PayPal login!\n    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal\n  })).then(() => {\n    let payment = new PayPalPayment(\'3.33\', \'USD\', \'Description\', \'sale\');\n    this.payPal.renderSinglePaymentUI(payment).then(() => {\n      // Successfully paid\n\n      // Example sandbox response\n      //\n      // {\n      //   "client": {\n      //     "environment": "sandbox",\n      //     "product_name": "PayPal iOS SDK",\n      //     "paypal_sdk_version": "2.16.0",\n      //     "platform": "iOS"\n      //   },\n      //   "response_type": "payment",\n      //   "response": {\n      //     "id": "PAY-1AB23456CD789012EF34GHIJ",\n      //     "state": "approved",\n      //     "create_time": "2016-10-03T13:33:33Z",\n      //     "intent": "sale"\n      //   }\n      // }\n    }, () => {\n      // Error or render dialog closed without being successful\n    });\n  }, () => {\n    // Error in configuration\n  });\n}, () => {\n  // Error in initialization, maybe PayPal isn\'t supported or something else\n});\n')))}v.isMDXComponent=!0}}]);