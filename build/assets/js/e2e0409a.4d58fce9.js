(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[70217],{1715:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d},default:function(){return I}});var i=t(22122),o=t(19756),l=(t(67294),t(3905)),a=t(41395),m=t(58215),r={title:"ion-list",demoUrl:"/docs/demos/api/list/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/list/index.html"},s={unversionedId:"api/list",id:"api/list",isDocsHomePage:!1,title:"ion-list",description:"Lists are made up of multiple rows of items which can contain text, buttons, toggles,",source:"@site/docs/api/list.md",sourceDirName:"api",slug:"/api/list",permalink:"/docs/api/list",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/list.md",version:"current",frontMatter:{title:"ion-list",demoUrl:"/docs/demos/api/list/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/list/index.html"},sidebar:"api",previous:{title:"ion-note",permalink:"/docs/api/note"},next:{title:"ion-list-header",permalink:"/docs/api/list-header"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"inset",id:"inset",children:[]},{value:"lines",id:"lines",children:[]},{value:"mode",id:"mode",children:[]}]},{value:"Methods",id:"methods",children:[{value:"closeSlidingItems",id:"closeslidingitems",children:[]}]}],p={toc:d};function I(n){var e=n.components,t=(0,o.Z)(n,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Lists are made up of multiple rows of items which can contain text, buttons, toggles,\nicons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text."),(0,l.kt)("p",null,"Lists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(a.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,l.kt)(m.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- List of Text Items --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Pok\xe9mon Yellow</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Mega Man X</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>The Legend of Zelda</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Pac-Man</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Super Mario World</ion-label>\n  </ion-item>\n</ion-list>\n\n\x3c!-- List of Input Items --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Input</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Toggle</ion-label>\n    <ion-toggle slot="end"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Radio</ion-label>\n    <ion-radio slot="end"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Checkbox</ion-label>\n    <ion-checkbox slot="start"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n\x3c!-- List of Sliding Items --\x3e\n<ion-list>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side="end">\n      <ion-item-option (click)="unread(item)">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side="end">\n      <ion-item-option (click)="unread(item)">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n'))),(0,l.kt)(m.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- List of Text Items --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Pok\xe9mon Yellow</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Mega Man X</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>The Legend of Zelda</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Pac-Man</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Super Mario World</ion-label>\n  </ion-item>\n</ion-list>\n\n\x3c!-- List of Input Items --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Input</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Toggle</ion-label>\n    <ion-toggle slot="end"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Radio</ion-label>\n    <ion-radio slot="end"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Checkbox</ion-label>\n    <ion-checkbox slot="start"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n\x3c!-- List of Sliding Items --\x3e\n<ion-list>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side="end">\n      <ion-item-option onClick="unread(item)">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side="end">\n      <ion-item-option onClick="unread(item)">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n'))),(0,l.kt)(m.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from \'@ionic/react\';\n\nexport const ListExample: React.FC = () => (\n  <IonContent>\n    {/*-- List of Text Items --*/}\n    <IonList>\n      <IonItem>\n        <IonLabel>Pok\xe9mon Yellow</IonLabel>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Mega Man X</IonLabel>\n      </IonItem>\n      <IonItem>\n        <IonLabel>The Legend of Zelda</IonLabel>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Pac-Man</IonLabel>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Super Mario World</IonLabel>\n      </IonItem>\n    </IonList>\n\n    {/*-- List of Input Items --*/}\n    <IonList>\n      <IonItem>\n        <IonLabel>Input</IonLabel>\n        <IonInput></IonInput>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Toggle</IonLabel>\n        <IonToggle slot="end"></IonToggle>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Radio</IonLabel>\n        <IonRadio slot="end"></IonRadio>\n      </IonItem>\n      <IonItem>\n        <IonLabel>Checkbox</IonLabel>\n        <IonCheckbox slot="start" />\n      </IonItem>\n    </IonList>\n\n    {/*-- List of Sliding Items --*/}\n    <IonList>\n      <IonItemSliding>\n        <IonItem>\n          <IonLabel>Item</IonLabel>\n        </IonItem>\n        <IonItemOptions side="end">\n          <IonItemOption onClick={() => {}}>Unread</IonItemOption>\n        </IonItemOptions>\n      </IonItemSliding>\n\n      <IonItemSliding>\n        <IonItem>\n          <IonLabel>Item</IonLabel>\n        </IonItem>\n        <IonItemOptions side="end">\n          <IonItemOption onClick={() => {}}>Unread</IonItemOption>\n        </IonItemOptions>\n      </IonItemSliding>\n    </IonList>\n  </IonContent>\n);\n'))),(0,l.kt)(m.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'list-example\',\n  styleUrl: \'list-example.css\'\n})\nexport class ListExample {\n  unread(ev: Event) {\n    console.log(\'Item is unread\', ev);\n  }\n\n  render() {\n    return [\n      // List of Text Items\n      <ion-list>\n        <ion-item>\n          <ion-label>Pok\xe9mon Yellow</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Mega Man X</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>The Legend of Zelda</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pac-Man</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Super Mario World</ion-label>\n        </ion-item>\n      </ion-list>,\n\n      // List of Input Items\n      <ion-list>\n        <ion-item>\n          <ion-label>Input</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Toggle</ion-label>\n          <ion-toggle slot="end"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Radio</ion-label>\n          <ion-radio slot="end"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Checkbox</ion-label>\n          <ion-checkbox slot="start"></ion-checkbox>\n        </ion-item>\n      </ion-list>,\n\n      // List of Sliding Items\n      <ion-list>\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>Item</ion-label>\n          </ion-item>\n          <ion-item-options side="end">\n            <ion-item-option onClick={(ev) => this.unread(ev)}>Unread</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>Item</ion-label>\n          </ion-item>\n          <ion-item-options side="end">\n            <ion-item-option onClick={(ev) => this.unread(ev)}>Unread</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    ];\n  }\n}\n'))),(0,l.kt)(m.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- List of Text Items --\x3e\n  <ion-list>\n    <ion-item>\n      <ion-label>Pok\xe9mon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n\n  \x3c!-- List of Input Items --\x3e\n  <ion-list>\n    <ion-item>\n      <ion-label>Input</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Toggle</ion-label>\n      <ion-toggle slot="end"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Radio</ion-label>\n      <ion-radio slot="end"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Checkbox</ion-label>\n      <ion-checkbox slot="start"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  \x3c!-- List of Sliding Items --\x3e\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item-options side="end">\n        <ion-item-option @click="unread(item)">Unread</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item-options side="end">\n        <ion-item-option @click="unread(item)">Unread</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</template>\n\n<script>\nimport { \n  IonCheckbox, \n  IonInput, \n  IonItem, \n  IonItemOption, \n  IonItemOptions, \n  IonItemSliding, \n  IonList, \n  IonLabel, \n  IonRadio, \n  IonToggle \n} from \'@ionic/vue\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: { \n    IonCheckbox, \n    IonInput, \n    IonItem, \n    IonItemOption, \n    IonItemOptions, \n    IonItemSliding, \n    IonList, \n    IonLabel, \n    IonRadio, \n    IonToggle \n  }\n});\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"inset"},"inset"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the list will have margin around it and rounded corners.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inset"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"lines"},"lines"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"How the bottom border should be displayed on all items.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lines"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"full" \\| "inset" \\| "none" \\| undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"closeslidingitems"},"closeSlidingItems"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-item-sliding")," are used inside the list, this method closes",(0,l.kt)("br",null),"any open sliding item.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if an actual ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-item-sliding")," is closed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"closeSlidingItems() => Promise<boolean>"))))))}I.isMDXComponent=!0}}]);