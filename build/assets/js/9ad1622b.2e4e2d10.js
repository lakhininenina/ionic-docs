(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[29875],{16134:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l=n(41395),o=n(58215),m={title:"ion-img"},s={unversionedId:"api/img",id:"api/img",isDocsHomePage:!1,title:"ion-img",description:"Img is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses Intersection Observer internally, which is supported in most modern browser, but falls back to a setTimeout when it is not supported.",source:"@site/docs/api/img.md",sourceDirName:"api",slug:"/api/img",permalink:"/docs/api/img",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/img.md",version:"current",frontMatter:{title:"ion-img"},sidebar:"api",previous:{title:"ion-avatar",permalink:"/docs/api/avatar"},next:{title:"ion-thumbnail",permalink:"/docs/api/thumbnail"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"alt",id:"alt",children:[]},{value:"src",id:"src",children:[]}]},{value:"Events",id:"events",children:[]},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[]}],d={toc:p};function u(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Img is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses ",(0,r.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=intersectionobserver"},"Intersection Observer")," internally, which is supported in most modern browser, but falls back to a ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout")," when it is not supported."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-list>\n  <ion-item *ngFor="let item of items">\n    <ion-thumbnail slot="start">\n      <ion-img [src]="item.src"></ion-img>\n    </ion-thumbnail>\n    <ion-label>{{item.text}}</ion-label>\n  </ion-item>\n</ion-list>\n'))),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';\n\ntype Item = {\n  src: string;\n  text: string;\n};\nconst items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];\n\nexport const ImgExample: React.FC = () => (\n  <IonContent>\n    <IonList>\n      {items.map((image, i) => (\n        <IonItem key={i}>\n          <IonThumbnail slot=\"start\">\n            <IonImg src={image.src} />\n          </IonThumbnail>\n          <IonLabel>{image.text}</IonLabel>\n        </IonItem>\n      ))}\n    </IonList>\n  </IonContent>\n);\n"))),(0,r.kt)(o.Z,{value:"stencil",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'img-example',\n  styleUrl: 'img-example.css'\n})\nexport class ImgExample {\n  private items = [{\n    'text': 'Item 1',\n    'src': '/path/to/external/file.png'\n  }, {\n    'text': 'Item 2',\n    'src': '/path/to/external/file.png'\n  }, {\n    'text': 'Item 3',\n    'src': '/path/to/external/file.png'\n  }];\n\n  render() {\n    return [\n      <ion-list>\n        {this.items.map(item =>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-img src={item.src}></ion-img>\n            </ion-thumbnail>\n            <ion-label>{item.text}</ion-label>\n          </ion-item>\n        )}\n      </ion-list>\n    ];\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-list>\n    <ion-item v-for=\"item in items\" :key=\"item.src\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img :src=\"item.src\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>{{item.text}}</ion-label>\n    </ion-item>\n  </ion-list>\n</template>\n\n<script>\nimport { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail },\n  setup() {\n    const items = [{\n      'text': 'Item 1',\n      'src': '/path/to/external/file.png'\n    }, {\n      'text': 'Item 2',\n      'src': '/path/to/external/file.png'\n    }, {\n      'text': 'Item 3',\n      'src': '/path/to/external/file.png'\n    }];\n    return { items }\n  }\n});\n<\/script>\n")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"alt"},"alt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"This attribute defines the alternative text describing the image.",(0,r.kt)("br",null),"Users will see this text displayed if the image URL is wrong,",(0,r.kt)("br",null),"the image is not in one of the supported formats, or if the image is not yet downloaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"src"},"src"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The image URL. This attribute is mandatory for the ",(0,r.kt)("inlineCode",{parentName:"td"},"<img>")," element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"src"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionError")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the img fails to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionImgDidLoad")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the image has finished loading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionImgWillLoad")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the img src has been set")))),(0,r.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"The inner ",(0,r.kt)("inlineCode",{parentName:"td"},"img")," element.")))))}u.isMDXComponent=!0}}]);