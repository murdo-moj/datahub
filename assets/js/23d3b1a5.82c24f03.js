"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81536,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885,73552,51171,28790,6409,4980],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,b=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,n),hidden:t},e)}},53720:(e,t,n)=>{n.d(t,{A:()=>D});var a=n(96540),r=n(20053),o=n(65697),l=n(56347),i=n(9226),s=n(34387),u=n(28609);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,l.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,i.aZ)(r),s=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[o,s]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=g(e),[l,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=y({queryString:n,groupId:r}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=s?s:d;return b({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,o]),tabValues:o}}var m=n(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function N({className:e,block:t,selectedValue:n,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==n&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;var n;t=null!==(n=s[a])&&void 0!==n?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;var a;t=null!==(a=s[n])&&void 0!==a?a:s[s.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>a.createElement("li",w(O({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},o),{className:(0,r.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function j({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=f(e);return a.createElement("div",{className:(0,r.A)("tabs-container",h.tabList)},a.createElement(N,O({},e,t)),a.createElement(j,O({},e,t)))}function D(e){const t=(0,m.A)();return a.createElement(P,O({key:String(t)},e))}},26625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});n(96540);var a=n(15680),r=n(53720),o=n(5400);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={sidebar_position:11,title:"DataHubGc",slug:"/generated/ingestion/sources/datahubgc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md"},c="DataHubGc",d={unversionedId:"docs/generated/ingestion/sources/datahubgc",id:"docs/generated/ingestion/sources/datahubgc",title:"DataHubGc",description:"Testing",source:"@site/genDocs/docs/generated/ingestion/sources/datahubgc.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/datahubgc",permalink:"/docs/generated/ingestion/sources/datahubgc",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"DataHubGc",slug:"/generated/ingestion/sources/datahubgc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md"},sidebar:"overviewSidebar",previous:{title:"DataHub",permalink:"/docs/generated/ingestion/sources/datahub"},next:{title:"dbt",permalink:"/docs/generated/ingestion/sources/dbt"}},p={},g=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],b={toc:g},y="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"datahubgc"},"DataHubGc"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,a.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,a.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub-gc")," source works out of the box with ",(0,a.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,a.yg)("h3",{id:"config-details"},"Config Details"),(0,a.yg)(r.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("div",{className:"config-table"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("div",{className:"path-line"},(0,a.yg)("span",{className:"path-main"},"cleanup_expired_tokens"))," ",(0,a.yg)("div",{className:"type-name-line"},(0,a.yg)("span",{className:"type-name"},"boolean"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Whether to clean up expired tokens or not ",(0,a.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.yg)("span",{className:"default-value"},"True")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("div",{className:"path-line"},(0,a.yg)("span",{className:"path-main"},"truncate_index_older_than_days"))," ",(0,a.yg)("div",{className:"type-name-line"},(0,a.yg)("span",{className:"type-name"},"integer"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Indices older than this number of days will be truncated ",(0,a.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.yg)("span",{className:"default-value"},"30")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("div",{className:"path-line"},(0,a.yg)("span",{className:"path-main"},"truncate_indices"))," ",(0,a.yg)("div",{className:"type-name-line"},(0,a.yg)("span",{className:"type-name"},"boolean"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Whether to truncate elasticsearch indices or not which can be safely truncated ",(0,a.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.yg)("span",{className:"default-value"},"True")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("div",{className:"path-line"},(0,a.yg)("span",{className:"path-main"},"truncation_sleep_between_seconds"))," ",(0,a.yg)("div",{className:"type-name-line"},(0,a.yg)("span",{className:"type-name"},"integer"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Sleep between truncation monitoring. ",(0,a.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.yg)("span",{className:"default-value"},"30")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("div",{className:"path-line"},(0,a.yg)("span",{className:"path-main"},"truncation_watch_until"))," ",(0,a.yg)("div",{className:"type-name-line"},(0,a.yg)("span",{className:"type-name"},"integer"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Wait for truncation of indices until this number of documents are left ",(0,a.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.yg)("span",{className:"default-value"},"10000")))))))),(0,a.yg)(o.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DataHubGcSourceConfig",\n  "type": "object",\n  "properties": {\n    "cleanup_expired_tokens": {\n      "title": "Cleanup Expired Tokens",\n      "description": "Whether to clean up expired tokens or not",\n      "default": true,\n      "type": "boolean"\n    },\n    "truncate_indices": {\n      "title": "Truncate Indices",\n      "description": "Whether to truncate elasticsearch indices or not which can be safely truncated",\n      "default": true,\n      "type": "boolean"\n    },\n    "truncate_index_older_than_days": {\n      "title": "Truncate Index Older Than Days",\n      "description": "Indices older than this number of days will be truncated",\n      "default": 30,\n      "type": "integer"\n    },\n    "truncation_watch_until": {\n      "title": "Truncation Watch Until",\n      "description": "Wait for truncation of indices until this number of documents are left",\n      "default": 10000,\n      "type": "integer"\n    },\n    "truncation_sleep_between_seconds": {\n      "title": "Truncation Sleep Between Seconds",\n      "description": "Sleep between truncation monitoring.",\n      "default": 30,\n      "type": "integer"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,a.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Class Name: ",(0,a.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.gc.datahub_gc.DataHubGcSource")),(0,a.yg)("li",{parentName:"ul"},"Browse on ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/gc/datahub_gc.py"},"GitHub"))),(0,a.yg)("h2",null,"Questions"),(0,a.yg)("p",null,"If you've got any questions on configuring ingestion for DataHubGc, feel free to ping us on ",(0,a.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);