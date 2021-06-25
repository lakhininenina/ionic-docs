(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[56618],{77673:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=(r(41395),r(58215),{title:"ion-route-redirect"}),l={unversionedId:"api/route-redirect",id:"api/route-redirect",isDocsHomePage:!1,title:"ion-route-redirect",description:"A route redirect can only be used with an ion-router as a direct child of it.",source:"@site/docs/api/route-redirect.md",sourceDirName:"api",slug:"/api/route-redirect",permalink:"/docs/api/route-redirect",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/route-redirect.md",version:"current",frontMatter:{title:"ion-route-redirect"},sidebar:"api",previous:{title:"ion-route",permalink:"/docs/api/route"},next:{title:"ion-searchbar",permalink:"/docs/api/searchbar"}},d=[{value:"Multiple Route Redirects",id:"multiple-route-redirects",children:[]},{value:"Usage",id:"usage",children:[{value:"Route Redirects as Guards",id:"route-redirects-as-guards",children:[]}]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]}]},{value:"Events",id:"events",children:[]}],u={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A route redirect can only be used with an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router")," as a direct child of it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use ",(0,i.kt)("a",{parentName:"p",href:"../router-outlet"},(0,i.kt)("inlineCode",{parentName:"a"},"ion-router-outlet"))," and the Angular router.")),(0,i.kt)("p",null,"The route redirect has two configurable properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to"))),(0,i.kt)("p",null,'It redirects "from" a URL "to" another URL. When the defined ',(0,i.kt)("inlineCode",{parentName:"p"},"ion-route-redirect")," rule matches, the router will redirect from the path specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," property to the path in the ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," property. In order for a redirect to occur the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," path needs to be an exact match to the navigated URL."),(0,i.kt)("h2",{id:"multiple-route-redirects"},"Multiple Route Redirects"),(0,i.kt)("p",null,"An arbitrary number of redirect routes can be defined inside an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router"),", but only one can match."),(0,i.kt)("p",null,"A route redirect will never call another redirect after its own redirect, since this could lead to infinite loops."),(0,i.kt)("p",null,"Take the following two redirects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-router>\n  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>\n  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>\n</ion-router>\n')),(0,i.kt)("p",null,"If the user navigates to ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin")," the router will redirect to ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," and stop there. It will never evaluate more than one redirect."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Redirects when the user navigates to `/admin` but\nwill NOT redirect if the user navigates to `/admin/posts` --\x3e\n<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>\n\n\x3c!-- By adding the wilcard character (*), the redirect will match\nany subpath of admin --\x3e\n<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>\n')),(0,i.kt)("h3",{id:"route-redirects-as-guards"},"Route Redirects as Guards"),(0,i.kt)("p",null,"Redirection routes can work as guards to prevent users from navigating to certain areas of an application based on a given condition, such as if the user is authenticated or not."),(0,i.kt)("p",null,"A route redirect can be added and removed dynamically to redirect (or guard) some routes from being accessed. In the following example, all urls ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," will be redirected to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," url if ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const isLoggedIn = false;\n\nconst router = document.querySelector('ion-router');\nconst routeRedirect = document.createElement('ion-route-redirect');\nrouteRedirect.setAttribute('from', '*');\nrouteRedirect.setAttribute('to', '/login');\n\nif (!isLoggedIn) {\n  router.appendChild(routeRedirect);\n}\n")),(0,i.kt)("p",null,"Alternatively, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," can be modified based on a condition. In the following example, the route redirect will check if the user is logged in and redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," url if not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-route-redirect id="tutorialRedirect" from="*"></ion-route-redirect>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const isLoggedIn = false;\nconst routeRedirect = document.querySelector('#tutorialRedirect');\n\nrouteRedirect.setAttribute('to', isLoggedIn ? undefined : '/login');\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"from"},"from"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},'A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL.',(0,i.kt)("br",null),"It needs to be an exact match of the navigated URL in order to apply.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The path specified in this value is always an absolute path, even if the initial ",(0,i.kt)("inlineCode",{parentName:"td"},"/")," slash",(0,i.kt)("br",null),"is not specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"to"},"to"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},'A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL.',(0,i.kt)("br",null),"When the defined ",(0,i.kt)("inlineCode",{parentName:"td"},"ion-route-redirect")," rule matches, the router will redirect to the path",(0,i.kt)("br",null),"specified in this property.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The value of this property is always an absolute path inside the scope of routes defined in",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ion-router")," it can't be used with another router or to perform a redirection to a different domain.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note that this is a virtual redirect, it will not cause a real browser refresh, again, it's",(0,i.kt)("br",null),"a redirect inside the context of ion-router.",(0,i.kt)("br",null),(0,i.kt)("br",null),"When this property is not specified or his value is ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," the whole redirect route is noop,",(0,i.kt)("br",null),'even if the "from" value matches.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"to"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ionRouteRedirectChanged")),(0,i.kt)("td",{parentName:"tr",align:null},"Internal event that fires when any value of this rule is added/removed from the DOM,")))),(0,i.kt)("p",null,"or any of his public properties changes."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ion-router")," captures this event in order to update his internal registry of router rules. |"))}p.isMDXComponent=!0}}]);