(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[66256],{18183:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return b},default:function(){return u}});var a=e(22122),r=e(19756),l=(e(67294),e(3905)),o=e(41395),i=e(58215),d={title:"ion-tab-button"},p={unversionedId:"api/tab-button",id:"api/tab-button",isDocsHomePage:!1,title:"ion-tab-button",description:"A tab button is a UI component that is placed inside of a tab bar. The tab button can specify the layout of the icon and label and connect to a tab view.",source:"@site/docs/api/tab-button.md",sourceDirName:"api",slug:"/api/tab-button",permalink:"/docs/api/tab-button",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/tab-button.md",version:"current",frontMatter:{title:"ion-tab-button"},sidebar:"api",previous:{title:"ion-tab-bar",permalink:"/docs/api/tab-bar"},next:{title:"ion-toast",permalink:"/docs/api/toast"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"disabled",id:"disabled",children:[]},{value:"download",id:"download",children:[]},{value:"href",id:"href",children:[]},{value:"layout",id:"layout",children:[]},{value:"mode",id:"mode",children:[]},{value:"rel",id:"rel",children:[]},{value:"selected",id:"selected",children:[]},{value:"tab",id:"tab",children:[]},{value:"target",id:"target",children:[]}]},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[]},{value:"CSS Custom Properties",id:"css-custom-properties",children:[]}],m={toc:b};function u(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A tab button is a UI component that is placed inside of a ",(0,l.kt)("a",{parentName:"p",href:"../tab-bar"},"tab bar"),". The tab button can specify the layout of the icon and label and connect to a ",(0,l.kt)("a",{parentName:"p",href:"../tab"},"tab view"),"."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"../tabs"},"tabs documentation")," for more details on configuring tabs."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="speakers">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="map">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="about">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab views --\x3e\n  <ion-tab tab="schedule">\n    <ion-router-outlet name="schedule"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="speakers">\n    <ion-router-outlet name="speakers"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="map">\n    <ion-router-outlet name="map"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="about">\n    <ion-router-outlet name="about"></ion-router-outlet>\n  </ion-tab>\n\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="map" href="/app/tabs/(map:map)">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="about" href="/app/tabs/(about:about)">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from \'@ionic/react\';\nimport { calendar, personCircle, map, informationCircle } from \'ionicons/icons\';\n\nexport const TabButtonExample: React.FC = () => (\n  <IonContent>\n    <IonTabs>\n      {/*-- Tab bar --*/}\n      <IonTabBar slot="bottom">\n        <IonTabButton tab="schedule">\n          <IonIcon icon={calendar} />\n          <IonLabel>Schedule</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="speakers">\n          <IonIcon icon={personCircle} />\n          <IonLabel>Speakers</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="map">\n          <IonIcon icon={map} />\n          <IonLabel>Map</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="about">\n          <IonIcon icon={informationCircle} />\n          <IonLabel>About</IonLabel>\n        </IonTabButton>\n      </IonTabBar>\n    </IonTabs>\n  </IonContent>\n);\n'))),(0,l.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'tab-button-example\',\n  styleUrl: \'tab-button-example.css\'\n})\nexport class TabButtonExample {\n  render() {\n    return [\n      <ion-tabs>\n        {/* Tab views */}\n        <ion-tab tab="schedule">\n          <ion-router-outlet name="schedule"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="speakers">\n          <ion-router-outlet name="speakers"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="map">\n          <ion-router-outlet name="map"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="about">\n          <ion-router-outlet name="about"></ion-router-outlet>\n        </ion-tab>\n\n        {/* Tab bar */}\n        <ion-tab-bar slot="bottom">\n          <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">\n            <ion-icon name="calendar"></ion-icon>\n            <ion-label>Schedule</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">\n            <ion-icon name="person-circle"></ion-icon>\n            <ion-label>Speakers</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="map" href="/app/tabs/(map:map)">\n            <ion-icon name="map"></ion-icon>\n            <ion-label>Map</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="about" href="/app/tabs/(about:about)">\n            <ion-icon name="information-circle"></ion-icon>\n            <ion-label>About</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n    ];\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-tabs>\n    \x3c!-- Tab bar --\x3e\n    <ion-tab-bar slot="bottom">\n      <ion-tab-button tab="schedule" href="/tabs/schedule">\n        <ion-icon :icon="calendar"></ion-icon>\n        <ion-label>Schedule</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="speakers" href="/tabs/speakers">\n        <ion-icon :icon="person-circle"></ion-icon>\n        <ion-label>Speakers</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="map" href="/tabs/map">\n        <ion-icon :icon="map"></ion-icon>\n        <ion-label>Map</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="about" href="/tabs/about">\n        <ion-icon :icon="informationCircle"></ion-icon>\n        <ion-label>About</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</template>\n\n<script>\nimport { \n  IonIcon, \n  IonLabel, \n  IonTabBar, \n  IonTabButton, \n  IonTabs\n} from \'@ionic/vue\';\nimport { calendar, informationCircle, map, personCircle } from \'ionicons/icons\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: {\n    IonIcon, \n    IonLabel, \n    IonTabBar, \n    IonTabButton, \n    IonTabs\n  },\n  setup() {\n    return { calendar, informationCircle, map, personCircle }\n  }\n});\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the tab button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"download"},"download"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"This attribute instructs browsers to download a URL instead of navigating to",(0,l.kt)("br",null),"it, so the user will be prompted to save it as a local file. If the attribute",(0,l.kt)("br",null),"has a value, it is used as the pre-filled file name in the Save prompt",(0,l.kt)("br",null),"(the user can still change the file name if they want).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"href"},"href"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to.",(0,l.kt)("br",null),"If this property is set, an anchor tag will be rendered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"href"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"layout"},"layout"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the layout of the text and icon in the tab bar.",(0,l.kt)("br",null),"It defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"'icon-top'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"layout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"icon-bottom" \\| "icon-end" \\| "icon-hide" \\| "icon-start" \\| "icon-top" \\| "label-hide" \\| undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"rel"},"rel"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object.",(0,l.kt)("br",null),"The value is a space-separated list of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"selected"},"selected"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The selected tab component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selected"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"tab"},"tab"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A tab id must be provided for each ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-tab"),". It's used internally to reference",(0,l.kt)("br",null),"the selected tab or by the router to switch between them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tab"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"target"},"target"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL.",(0,l.kt)("br",null),"Only applies when an ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is provided.",(0,l.kt)("br",null),"Special keywords: ",(0,l.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:null},"The native HTML anchor element that wraps all child elements.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the tab button when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focused-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity of the tab button background when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the tab button when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the selected tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ripple-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the button ripple effect")))))}u.isMDXComponent=!0}}]);