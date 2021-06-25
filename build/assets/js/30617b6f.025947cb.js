(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[60005],{39525:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var i=t(22122),a=t(19756),l=(t(67294),t(3905)),o=t(41395),r=t(58215),d={title:"ion-item-divider"},m={unversionedId:"api/item-divider",id:"api/item-divider",isDocsHomePage:!1,title:"ion-item-divider",description:"Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of items.",source:"@site/docs/api/item-divider.md",sourceDirName:"api",slug:"/api/item-divider",permalink:"/docs/api/item-divider",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/item-divider.md",version:"current",frontMatter:{title:"ion-item-divider"},sidebar:"api",previous:{title:"ion-item",permalink:"/docs/api/item"},next:{title:"ion-item-group",permalink:"/docs/api/item-group"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[]},{value:"mode",id:"mode",children:[]},{value:"sticky",id:"sticky",children:[]}]},{value:"CSS Custom Properties",id:"css-custom-properties",children:[]},{value:"Slots",id:"slots",children:[]}],b={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of items."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item-divider>\n  <ion-label>\n    Basic Item Divider\n  </ion-label>\n</ion-item-divider>\n\n<ion-item-divider color="secondary">\n  <ion-label>\n    Secondary Item Divider\n  </ion-label>\n</ion-item-divider>\n\n\x3c!-- Item Dividers in a List --\x3e\n<ion-list>\n  <ion-item-divider>\n    <ion-label>\n      Section A\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item><ion-label>A1</ion-label></ion-item>\n  <ion-item><ion-label>A2</ion-label></ion-item>\n  <ion-item><ion-label>A3</ion-label></ion-item>\n  <ion-item><ion-label>A4</ion-label></ion-item>\n  <ion-item><ion-label>A5</ion-label></ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      Section B\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item><ion-label>B1</ion-label></ion-item>\n  <ion-item><ion-label>B2</ion-label></ion-item>\n  <ion-item><ion-label>B3</ion-label></ion-item>\n  <ion-item><ion-label>B4</ion-label></ion-item>\n  <ion-item><ion-label>B5</ion-label></ion-item>\n</ion-list>\n'))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item-divider>\n  <ion-label>\n    Basic Item Divider\n  </ion-label>\n</ion-item-divider>\n\n<ion-item-divider color="secondary">\n  <ion-label>\n    Secondary Item Divider\n  </ion-label>\n</ion-item-divider>\n\n\x3c!-- Item Dividers in a List --\x3e\n<ion-list>\n  <ion-item-divider>\n    <ion-label>\n      Section A\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item><ion-label>A1</ion-label></ion-item>\n  <ion-item><ion-label>A2</ion-label></ion-item>\n  <ion-item><ion-label>A3</ion-label></ion-item>\n  <ion-item><ion-label>A4</ion-label></ion-item>\n  <ion-item><ion-label>A5</ion-label></ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      Section B\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item><ion-label>B1</ion-label></ion-item>\n  <ion-item><ion-label>B2</ion-label></ion-item>\n  <ion-item><ion-label>B3</ion-label></ion-item>\n  <ion-item><ion-label>B4</ion-label></ion-item>\n  <ion-item><ion-label>B5</ion-label></ion-item>\n</ion-list>\n'))),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonItemDivider, IonLabel, IonList, IonItem, IonContent } from '@ionic/react';\n\nexport const ItemDividerExample: React.FC = () => (\n  <IonContent>\n    <IonItemDivider>\n      <IonLabel>\n        Basic Item Divider\n      </IonLabel>\n    </IonItemDivider>\n\n    <IonItemDivider color=\"secondary\">\n      <IonLabel>\n        Secondary Item Divider\n      </IonLabel>\n    </IonItemDivider>\n\n    {/*-- Item Dividers in a List --*/}\n    <IonList>\n      <IonItemDivider>\n        <IonLabel>\n          Section A\n        </IonLabel>\n      </IonItemDivider>\n\n      <IonItem><IonLabel>A1</IonLabel></IonItem>\n      <IonItem><IonLabel>A2</IonLabel></IonItem>\n      <IonItem><IonLabel>A3</IonLabel></IonItem>\n      <IonItem><IonLabel>A4</IonLabel></IonItem>\n      <IonItem><IonLabel>A5</IonLabel></IonItem>\n\n      <IonItemDivider>\n        <IonLabel>\n          Section B\n        </IonLabel>\n      </IonItemDivider>\n\n      <IonItem><IonLabel>B1</IonLabel></IonItem>\n      <IonItem><IonLabel>B2</IonLabel></IonItem>\n      <IonItem><IonLabel>B3</IonLabel></IonItem>\n      <IonItem><IonLabel>B4</IonLabel></IonItem>\n      <IonItem><IonLabel>B5</IonLabel></IonItem>\n    </IonList>\n  </IonContent>\n);\n"))),(0,l.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'item-divider-example',\n  styleUrl: 'item-divider-example.css'\n})\nexport class ItemDividerExample {\n  render() {\n    return [\n      <ion-item-divider>\n        <ion-label>\n          Basic Item Divider\n        </ion-label>\n      </ion-item-divider>,\n\n      <ion-item-divider color=\"secondary\">\n        <ion-label>\n          Secondary Item Divider\n        </ion-label>\n      </ion-item-divider>,\n\n      //  Item Dividers in a List\n      <ion-list>\n        <ion-item-divider>\n          <ion-label>\n            Section A\n          </ion-label>\n        </ion-item-divider>\n\n        <ion-item><ion-label>A1</ion-label></ion-item>\n        <ion-item><ion-label>A2</ion-label></ion-item>\n        <ion-item><ion-label>A3</ion-label></ion-item>\n        <ion-item><ion-label>A4</ion-label></ion-item>\n        <ion-item><ion-label>A5</ion-label></ion-item>\n\n        <ion-item-divider>\n          <ion-label>\n            Section B\n          </ion-label>\n        </ion-item-divider>\n\n        <ion-item><ion-label>B1</ion-label></ion-item>\n        <ion-item><ion-label>B2</ion-label></ion-item>\n        <ion-item><ion-label>B3</ion-label></ion-item>\n        <ion-item><ion-label>B4</ion-label></ion-item>\n        <ion-item><ion-label>B5</ion-label></ion-item>\n      </ion-list>\n    ];\n  }\n}\n"))),(0,l.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-item-divider>\n    <ion-label>\n      Basic Item Divider\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item-divider color=\"secondary\">\n    <ion-label>\n      Secondary Item Divider\n    </ion-label>\n  </ion-item-divider>\n\n  \x3c!-- Item Dividers in a List --\x3e\n  <ion-list>\n    <ion-item-divider>\n      <ion-label>\n        Section A\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-item><ion-label>A1</ion-label></ion-item>\n    <ion-item><ion-label>A2</ion-label></ion-item>\n    <ion-item><ion-label>A3</ion-label></ion-item>\n    <ion-item><ion-label>A4</ion-label></ion-item>\n    <ion-item><ion-label>A5</ion-label></ion-item>\n\n    <ion-item-divider>\n      <ion-label>\n        Section B\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-item><ion-label>B1</ion-label></ion-item>\n    <ion-item><ion-label>B2</ion-label></ion-item>\n    <ion-item><ion-label>B3</ion-label></ion-item>\n    <ion-item><ion-label>B4</ion-label></ion-item>\n    <ion-item><ion-label>B5</ion-label></ion-item>\n  </ion-list>\n</template>\n\n<script>\nimport { IonItem, IonItemDivider, IonLabel } from '@ionic/vue';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  components: { IonItem, IonItemDivider, IonLabel }\n});\n<\/script>\n")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"sticky"},"sticky"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"When it's set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the item-divider will stay visible when it reaches the top",(0,l.kt)("br",null),"of the viewport until the next ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-item-divider")," replaces it.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This feature relies in ",(0,l.kt)("inlineCode",{parentName:"td"},"position:sticky"),":",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://caniuse.com/#feat=css-sticky"},"https://caniuse.com/#feat=css-sticky"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sticky"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--inner-padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom inner padding of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--inner-padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"End inner padding of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--inner-padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Start inner padding of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--inner-padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top inner padding of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item divider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding of the item divider")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed between the named slots if provided without a slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the right of the divider text in LTR, and to the left in RTL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the left of the divider text in LTR, and to the right in RTL.")))))}s.isMDXComponent=!0}}]);