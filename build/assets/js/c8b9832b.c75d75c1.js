(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[92982],{3740:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return r},default:function(){return p}});var o=e(22122),i=e(19756),l=(e(67294),e(3905)),a={title:"config get",sidebar_label:"config get"},c={unversionedId:"cli/commands/config-get",id:"cli/commands/config-get",isDocsHomePage:!1,title:"ionic config get",description:"Print config values",source:"@site/docs/cli/commands/config-get.md",sourceDirName:"cli/commands",slug:"/cli/commands/config-get",permalink:"/docs/cli/commands/config-get",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/commands/config-get.md",version:"current",sidebar_label:"config get",frontMatter:{title:"config get",sidebar_label:"config get"},sidebar:"cli",previous:{title:"ionic completion",permalink:"/docs/cli/commands/completion"},next:{title:"ionic config set",permalink:"/docs/cli/commands/config-set"}},r=[{value:"Examples",id:"examples",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Options",id:"options",children:[]},{value:"Advanced Options",id:"advanced-options",children:[]}],s={toc:r};function p(t){var n=t.components,e=(0,i.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,o.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Print config values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config get [options]\n")),(0,l.kt)("p",null,"This command reads and prints configuration values from the project's ",(0,l.kt)("strong",{parentName:"p"},"./ionic.config.json")," file. It can also operate on the global CLI configuration (",(0,l.kt)("strong",{parentName:"p"},"~/.ionic/config.json"),") using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,l.kt)("p",null,"For nested properties, separate nest levels with dots. For example, the property name ",(0,l.kt)("inlineCode",{parentName:"p"},"integrations.cordova")," will look in the ",(0,l.kt)("strong",{parentName:"p"},"integrations")," object for the ",(0,l.kt)("strong",{parentName:"p"},"cordova")," property."),(0,l.kt)("p",null,"Without a ",(0,l.kt)("inlineCode",{parentName:"p"},"property")," argument, this command prints out the entire config."),(0,l.kt)("p",null,"For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--root")," option."),(0,l.kt)("p",null,"If you are using this command programmatically, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--json")," option."),(0,l.kt)("p",null,"This command will sanitize config output for known sensitive fields (disabled when using ",(0,l.kt)("inlineCode",{parentName:"p"},"--json"),")."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config get \n$ ionic config get id\n$ ionic config get --global user.email\n$ ionic config get -g npmClient\n")),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,"property")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"The property name you wish to get"))))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-global",id:"option-global"},"--global"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Use global CLI config"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Aliases"),(0,l.kt)("td",null,(0,l.kt)("code",null,"-g"))))),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-json",id:"option-json"},"--json"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Output config values in JSON"))))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-root",id:"option-root"},"--root"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Operate on root of ",(0,l.kt)("strong",null,"./ionic.config.json"))))))))}p.isMDXComponent=!0}}]);