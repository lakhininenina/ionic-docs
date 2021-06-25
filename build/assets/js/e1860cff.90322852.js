(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59496],{41071:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var t=n(22122),o=n(19756),i=(n(67294),n(3905)),r=n(41395),p=n(58215),c={sidebar_label:"Setup",hide_table_of_contents:!0},l={unversionedId:"native/community",id:"native/community",isDocsHomePage:!1,title:"Cordova Community Plugins",description:"Apache Cordova is an open source native runtime that allows developers to build native mobile apps with HTML, CSS, and JavaScript. Similar to Capacitor, Ionic\u2019s own native runtime, Cordova allows developers to access native device features, such as camera, keyboard, and geolocation, using a system of plugins. A plugin is a small amount of add-on code that provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps.",source:"@site/docs/native/community.md",sourceDirName:"native",slug:"/native/community",permalink:"/docs/native/community",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/community.md",version:"current",sidebar_label:"Setup",frontMatter:{sidebar_label:"Setup",hide_table_of_contents:!0},sidebar:"native",previous:{title:"Native APIs",permalink:"/docs/native"},next:{title:"Ionic Native FAQ",permalink:"/docs/native/faq"}},s=[{value:"Capacitor Support",id:"capacitor-support",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Angular",id:"angular",children:[]},{value:"React",id:"react",children:[]},{value:"Vanilla JavaScript",id:"vanilla-javascript",children:[]}],d={toc:s};function u(e){var a=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cordova.apache.org/"},"Apache Cordova")," is an open source native runtime that allows developers to build native mobile apps with HTML, CSS, and JavaScript. Similar to ",(0,i.kt)("a",{parentName:"p",href:"https://capacitorjs.com/"},"Capacitor"),", Ionic\u2019s own native runtime, Cordova allows developers to access native device features, such as camera, keyboard, and geolocation, using a system of plugins. A plugin is a small amount of add-on code that provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps."),(0,i.kt)("p",null,"For developers using Ionic with Cordova, our team has developed a collection of TypeScript wrappers for open source Cordova plugins that make it easy to add native functionality to any Ionic app. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-native"},"Ionic Native"),"."),(0,i.kt)("p",null,"These plugins are submitted and maintained by the Ionic community. While community members are generally quick to find and fix issues, certain plugins may not function properly."),(0,i.kt)("p",null,"For professional developers and teams that require dedicated native plugin support & SLAs, ongoing maintenance, and security patches, please explore our ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/native"},"premium options"),", including plugin support and pre-built solutions for common native use cases."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please ",(0,i.kt)("a",{parentName:"p",href:"/docs/v3/native"},"see here"),".")),(0,i.kt)("h2",{id:"capacitor-support"},"Capacitor Support"),(0,i.kt)("p",null,"In addition to Cordova, Ionic Native also works with ",(0,i.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com"},"Capacitor"),", Ionic's official native runtime. Basic usage below. For complete details, ",(0,i.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins"},"see the Capacitor documentation"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"All plugins have two components - the native code (Cordova) and the TypeScript code (Ionic Native).\nCordova plugins are also wrapped in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Observable")," in order to provide a common plugin interface and modernized development approach."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/native/camera"},"Camera plugin")," as an example, first install it:"),(0,i.kt)(r.Z,{defaultValue:"cordova",values:[{value:"cordova",label:"Cordova"},{value:"capacitor",label:"Capacitor"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"cordova",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Install Cordova plugin\n$ ionic cordova plugin add cordova-plugin-camera\n\n// Install Ionic Native TypeScript wrapper\n$ npm install @ionic-native/camera\n\n// Install Ionic Native core library (once per project) \n$ npm install @ionic-native/core\n"))),(0,i.kt)(p.Z,{value:"capacitor",mdxType:"TabItem"},(0,i.kt)("p",null,"For complete details, ",(0,i.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins"},"see the Capacitor documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Install Ionic Native TypeScript wrapper\n$ npm install @ionic-native/camera\n\n// Install Cordova plugin\n$ npm install cordova-plugin-camera\n\n// Update native platform project(s) to include newly added plugin\n$ ionic cap sync\n")))),(0,i.kt)("p",null,"Next, begin using the plugin, following the various framework usage options below. For FAQ, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/native/faq"},"here"),"."),(0,i.kt)("h2",{id:"angular"},"Angular"),(0,i.kt)("p",null,"Angular apps can use either Cordova or Capacitor to build native mobile apps. Import the plugin in a ",(0,i.kt)("inlineCode",{parentName:"p"},"@NgModule")," and add it to the list of Providers. For Angular, the import path should end with ",(0,i.kt)("inlineCode",{parentName:"p"},"/ngx"),".  Angular's change detection is automatically handled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.module.ts\nimport { Camera } from '@ionic-native/camera/ngx';\n\n...\n\n@NgModule({\n  ...\n\n  providers: [\n    ...\n    Camera\n    ...\n  ]\n  ...\n})\nexport class AppModule { }\n")),(0,i.kt)("p",null,"After the plugin has been declared, it can be imported and injected like any other service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// camera.service.ts\nimport { Injectable } from '@angular/core';\nimport { Camera, CameraOptions } from '@ionic-native/camera/ngx';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class PhotoService {\n  constructor(private camera: Camera) { }\n\n  takePicture() {\n    const options: CameraOptions = {\n      quality: 100,\n      destinationType: this.camera.DestinationType.DATA_URL,\n      encodingType: this.camera.EncodingType.JPEG,\n      mediaType: this.camera.MediaType.PICTURE\n    }\n\n    this.camera.getPicture(options).then((imageData) => {\n      // Do something with the new photo\n\n    }, (err) => {\n     // Handle error\n     console.log(\"Camera issue: \" + err);\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"react"},"React"),(0,i.kt)("p",null,"React apps must use Capacitor to build native mobile apps. However, Ionic Native (and therefore, Cordova plugins) can still be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"// Install Core library (once per project)\n$ npm install @ionic-native/core\n\n// Install Ionic Native TypeScript wrapper\n$ npm install @ionic-native/barcode-scanner\n\n// Install Cordova plugin\n$ npm install phonegap-plugin-barcodescanner\n\n// Update native platform project(s) to include newly added plugin\n$ ionic cap sync\n")),(0,i.kt)("p",null,"Import the plugin object then use its static methods: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BarcodeScanner } from '@ionic-native/barcode-scanner';\n\nconst Tab1: React.FC = () => {\n  const openScanner = async () => {\n    const data = await BarcodeScanner.scan();\n    console.log(`Barcode data: ${data.text}`);\n  };\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>Tab 1</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonButton onClick={openScanner}>Scan barcode</IonButton>\n      </IonContent>\n    </IonPage>\n  );\n};\n")),(0,i.kt)("h2",{id:"vanilla-javascript"},"Vanilla JavaScript"),(0,i.kt)("p",null,"Vanilla JavaScript apps, targeting ES2015+ and/or TypeScript, can use either Cordova or Capacitor to build native mobile apps. To use any plugin, import the class from the appropriate package and use its static methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Camera } from '@ionic-native/camera';\n\ndocument.addEventListener('deviceready', () => {\n  Camera.getPicture()\n    .then(data => console.log('Took a picture!', data))\n    .catch(e => console.log('Error occurred while taking a picture', e));\n});\n")))}u.isMDXComponent=!0}}]);