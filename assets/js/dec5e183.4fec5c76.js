"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,s(s({ref:t},u),{},{components:r})):a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="Create a Document",i={unversionedId:"docusaurus-docs/tutorial-basics/create-a-document",id:"docusaurus-docs/tutorial-basics/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/docusaurus-docs/tutorial-basics/create-a-document.md",sourceDirName:"docusaurus-docs/tutorial-basics",slug:"/docusaurus-docs/tutorial-basics/create-a-document",permalink:"/blackstar-gaming/docs/docusaurus-docs/tutorial-basics/create-a-document",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-docs/tutorial-basics/create-a-document.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wikiSidebar",previous:{title:"Create a Page",permalink:"/blackstar-gaming/docs/docusaurus-docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/blackstar-gaming/docs/docusaurus-docs/tutorial-basics/create-a-blog-post"}},c={},l=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-document"},"Create a Document"),(0,n.kt)("p",null,"Documents are ",(0,n.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"sidebar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"versioning"))),(0,n.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,n.kt)("p",null,"Create a Markdown file at ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.kt)("p",null,"A new document is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/hello"},"http://localhost:3000/docs/hello"),"."),(0,n.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,n.kt)("p",null,"Docusaurus automatically ",(0,n.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,n.kt)("p",null,"Add metadata to customize the sidebar label and position:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n")))}p.isMDXComponent=!0}}]);