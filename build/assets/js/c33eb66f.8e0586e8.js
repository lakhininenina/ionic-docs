(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[40336],{96129:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=e(22122),o=e(19756),r=(e(67294),e(3905)),l=e(41395),i=e(58215),d={title:"ion-header"},p={unversionedId:"api/header",id:"api/header",isDocsHomePage:!1,title:"ion-header",description:"Header is a parent component that holds the toolbar component.",source:"@site/docs/api/header.md",sourceDirName:"api",slug:"/api/header",permalink:"/docs/api/header",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/header.md",version:"current",frontMatter:{title:"ion-header"},sidebar:"api",previous:{title:"ion-toolbar",permalink:"/docs/api/toolbar"},next:{title:"ion-footer",permalink:"/docs/api/footer"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"collapse",id:"collapse",children:[]},{value:"mode",id:"mode",children:[]},{value:"translucent",id:"translucent",children:[]}]}],m={toc:s};function u(n){var t=n.components,e=(0,o.Z)(n,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Header is a parent component that holds the toolbar component.\nIt's important to note that ion-header needs to be the one of the three root elements of a page"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Navigation Bar</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-title>Subheader</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Header without a border --\x3e\n<ion-header class="ion-no-border">\n  <ion-toolbar>\n    <ion-title>Header - No Border</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse="condense">\n    <ion-toolbar>\n      <ion-title size="large">My Navigation Bar</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n'))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Navigation Bar</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-title>Subheader</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Header without a border --\x3e\n<ion-header class="ion-no-border">\n  <ion-toolbar>\n    <ion-title>Header - No Border</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse="condense">\n    <ion-toolbar>\n      <ion-title size="large">My Navigation Bar</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n'))),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from \'@ionic/react\';\n\nexport const HeaderExample: React.FC = () => (\n  <>\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton defaultHref="/" />\n        </IonButtons>\n        <IonTitle>My Navigation Bar</IonTitle>\n      </IonToolbar>\n    \n      <IonToolbar>\n        <IonTitle>Subheader</IonTitle>\n      </IonToolbar>\n    </IonHeader>\n    \n    {/*-- Header without a border --*/}\n    <IonHeader className="ion-no-border">\n     <IonToolbar>\n      <IonTitle>Header - No Border</IonTitle>\n     </IonToolbar>\n    </IonHeader>\n    \n    <IonContent>\n      <IonHeader collapse="condense">\n        <IonToolbar>\n          <IonTitle size="large">My Navigation Bar</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n    </IonContent>\n  </>\n);\n'))),(0,r.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'header-example\',\n  styleUrl: \'header-example.css\'\n})\nexport class HeaderExample {\n  render() {\n    return [\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n          <ion-title>My Navigation Bar</ion-title>\n        </ion-toolbar>\n\n        <ion-toolbar>\n          <ion-title>Subheader</ion-title>\n        </ion-toolbar>\n      </ion-header>,\n\n      // Header without a border\n      <ion-header class="ion-no-border">\n        <ion-toolbar>\n          <ion-title>Header - No Border</ion-title>\n        </ion-toolbar>\n      </ion-header>,\n\n      <ion-content>\n        <ion-header collapse="condense">\n          <ion-toolbar>\n            <ion-title size="large">My Navigation Bar</ion-title>\n          </ion-toolbar>\n        </ion-header>\n      </ion-content>\n    ];\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>My Navigation Bar</ion-title>\n    </ion-toolbar>\n  \n    <ion-toolbar>\n      <ion-title>Subheader</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \x3c!-- Header without a border --\x3e\n  <ion-header class="ion-no-border">\n    <ion-toolbar>\n      <ion-title>Header - No Border</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-header collapse="condense">\n      <ion-toolbar>\n        <ion-title size="large">My Navigation Bar</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  </ion-content>\n</template>\n\n<script>\nimport { \n  IonBackButton, \n  IonButtons, \n  IonContent, \n  IonHeader, \n  IonTitle, \n  IonToolbar\n} from \'@ionic/vue\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: { \n    IonBackButton, \n    IonButtons, \n    IonContent, \n    IonHeader, \n    IonTitle, \n    IonToolbar\n  }\n});\n<\/script>\n')))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"collapse"},"collapse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the scroll effect that will be applied to the header",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"condense")," only applies in iOS mode.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Typically used for ",(0,r.kt)("a",{parentName:"td",href:"https://ionicframework.com/docs/api/title#collapsible-large-titles"},"Collapsible Large Titles"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collapse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"condense" \\| undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"translucent"},"translucent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the header will be translucent.",(0,r.kt)("br",null),"Only applies when the mode is ",(0,r.kt)("inlineCode",{parentName:"td"},'"ios"')," and the device supports",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility"},(0,r.kt)("inlineCode",{parentName:"a"},"backdrop-filter")),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: In order to scroll content behind the header, the ",(0,r.kt)("inlineCode",{parentName:"td"},"fullscreen"),(0,r.kt)("br",null),"attribute needs to be set on the content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"translucent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}u.isMDXComponent=!0}}]);