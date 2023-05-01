"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>O,default:()=>C,frontMatter:()=>E,metadata:()=>B,toc:()=>I});var r=n(7462),a=n(7294),l=n(3905),i=n(6010),o=n(2466),u=n(6550),s=n(1980),p=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:n,groupId:r}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??p;return k({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==l&&(c(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}const w={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(w.tabItem,r),hidden:n},t)}const E={sidebar_position:2},O="\ud83d\udd8c\ufe0f Design Guide",B={unversionedId:"design_guide",id:"design_guide",title:"\ud83d\udd8c\ufe0f Design Guide",description:"Ein Design Guide f\xfcr Wiki, MilSim und Blog Beitr\xe4ge.",source:"@site/docs/design_guide.md",sourceDirName:".",slug:"/design_guide",permalink:"/docs/design_guide",draft:!1,editUrl:"https://github.com/Nikolai-Ahlhelm/blackstar-gaming/tree/main/docs/design_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"milsimSidebar",previous:{title:"\ud83c\udf0d Wiki Startseite",permalink:"/docs/intro"},next:{title:"\ud83d\udd2c SCP: Secret Laboratory",permalink:"/docs/scp_sl"}},S={},I=[{value:"\xdcberschriften erstellen",id:"\xfcberschriften-erstellen",level:2},{value:"Horizontale Linien",id:"horizontale-linien",level:2},{value:"Einen Link erstellen",id:"einen-link-erstellen",level:2},{value:"W\xf6rter hervorheben",id:"w\xf6rter-hervorheben",level:2},{value:"Aufz\xe4hlungen erstellen",id:"aufz\xe4hlungen-erstellen",level:2},{value:"Infok\xe4sten erstellen",id:"infok\xe4sten-erstellen",level:2}],Z={toc:I},z="wrapper";function C(e){let{components:t,...n}=e;return(0,l.kt)(z,(0,r.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ufe0f-design-guide"},"\ud83d\udd8c\ufe0f Design Guide"),(0,l.kt)("p",null,"Ein Design Guide f\xfcr Wiki, MilSim und Blog Beitr\xe4ge."),(0,l.kt)("admonition",{title:"Wichtig",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Beachte Leerzeichen!",(0,l.kt)("br",{parentName:"p"}),"\n","Und achte auch darauf die Richtigen Zeichen zu benutzen.",(0,l.kt)("br",{parentName:"p"}),"\n","Bsp: ` \xb4 '")),(0,l.kt)("h2",{id:"\xfcberschriften-erstellen"},"\xdcberschriften erstellen"),(0,l.kt)("blockquote",null,(0,l.kt)("h1",{parentName:"blockquote",id:"\xfcberschrift1"},"\xdcberschrift1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \xdcberschrift1  \n")),(0,l.kt)("blockquote",null,(0,l.kt)("h2",{parentName:"blockquote",id:"\xfcberschrift2"},"\xdcberschrift2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## \xdcberschrift2 \n")),(0,l.kt)("blockquote",null,(0,l.kt)("h3",{parentName:"blockquote",id:"\xfcberschrift3"},"\xdcberschrift3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"### \xdcberschrift3 \n")),(0,l.kt)("admonition",{title:"Achtung!  ",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Zwischen \xdcberschrift und Text bitte immer eine Zeile Abstand lassen. Mehrere Abs\xe4tze werden dabei nicht erkannt!",(0,l.kt)("br",{parentName:"p"}),"\n","Auch zwischen ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," und dem ",(0,l.kt)("inlineCode",{parentName:"p"},"Titelnamen")," muss ein Leerzeichen sein!")),(0,l.kt)("h2",{id:"horizontale-linien"},"Horizontale Linien"),(0,l.kt)("p",null,"F\xfcr die Abgrenzung von bestimmten Bereichen.  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel:")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"---\n")),(0,l.kt)("h2",{id:"einen-link-erstellen"},"Einen Link erstellen"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.wir-machen-druck.de/product-icon/lehrerstempel-automatik-mit-motiv-das-hast-du-super-gemacht/thumbnail/lehrerstempel-automatik-mit-motiv-das-hast-du-super-gemacht_5aca7f96e7e3c796c3463f2c5ad01f8249.png"},"Beispiel"),"  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Anzeigename](https://link.zum.logo/logo.png)\n")),(0,l.kt)("h2",{id:"w\xf6rter-hervorheben"},"W\xf6rter hervorheben"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Fettgedruckte W\xf6rter"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"**Fettgedruckte W\xf6rter**\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"kursive W\xf6rter"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*kursive W\xf6rter*  \n")),(0,l.kt)("hr",null),(0,l.kt)("u",null,"unterstrichene W\xf6rter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<u>unterstrichene W\xf6rter</u>   \n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"aufz\xe4hlungen-erstellen"},"Aufz\xe4hlungen erstellen"),(0,l.kt)("p",null,"Es gibt verschiedene Weisen der Aufz\xe4hlung:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Text"),(0,l.kt)("li",{parentName:"ul"},"Beispiel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Text\n- Beispiel \n")),(0,l.kt)("hr",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Text  "),(0,l.kt)("li",{parentName:"ol"},"Beispiel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. Text  \n2. Beispiel\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"infok\xe4sten-erstellen"},"Infok\xe4sten erstellen"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Beispiel Text.",(0,l.kt)("br",{parentName:"p"}),"\n","N\xe4chste Zeile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::info \nBeispiel Text.  \nN\xe4chste Zeile.\n:::\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"Tipp",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Beispiel Text.",(0,l.kt)("br",{parentName:"p"}),"\n","N\xe4chste Zeile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::tip Tipp\nBeispiel Text.  \nN\xe4chste Zeile.\n:::\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"Achtung",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Beispiel Text.",(0,l.kt)("br",{parentName:"p"}),"\n","N\xe4chste Zeile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::caution Achtung\nBeispiel Text.  \nN\xe4chste Zeile.\n:::\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Beispiel Text.",(0,l.kt)("br",{parentName:"p"}),"\n","N\xe4chste Zeile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::danger\nBeispiel Text.  \nN\xe4chste Zeile.\n:::\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Beispiel Text.",(0,l.kt)("br",{parentName:"p"}),"\n","N\xe4chste Zeile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::note \nBeispiel Text.  \nN\xe4chste Zeile.\n:::\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"\xc4nderungsw\xfcnsche",type:"info"},(0,l.kt)("p",{parentName:"admonition"},'Wenn du als \xdcberschrift z.B. "note" nicht m\xf6chtest, sondern etwas anderes, musst du hinter das ',(0,l.kt)("inlineCode",{parentName:"p"},"note")," oder alle Anderen Hinweisboxen deinen eigenen Titel schreiben mit einem Leerzeichen getrennt. Beispiele findest du auch oben.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)(T,{mdxType:"Tabs"},(0,l.kt)(x,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(x,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(x,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}C.isMDXComponent=!0}}]);