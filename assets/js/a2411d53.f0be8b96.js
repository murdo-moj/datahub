"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12680,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885,73552,51171,28790,6409,4980],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,n),hidden:t},e)}},53720:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(96540),a=n(20053),l=n(65697),o=n(56347),i=n(9226),s=n(34387),c=n(28609);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,o.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,i.aZ)(a),s=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[a,n]);return[l,s]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=y({queryString:n,groupId:a}),[g,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=s?s:g;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var b=n(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,r=s.indexOf(t),a=i[r].value;a!==n&&(c(t),o(a))},g=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[s.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>r.createElement("li",w(N({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:g,onClick:u},l),{className:(0,a.A)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function j({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,a.A)("tabs-container",h.tabList)},r.createElement(O,N({},e,t)),r.createElement(j,N({},e,t)))}function P(e){const t=(0,b.A)();return r.createElement(_,N({key:String(t)},e))}},49215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>d});n(96540);var r=n(15680),a=n(53720),l=n(5400);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={sidebar_position:36,title:"MLflow",slug:"/generated/ingestion/sources/mlflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mlflow.md"},u="MLflow",g={unversionedId:"docs/generated/ingestion/sources/mlflow",id:"docs/generated/ingestion/sources/mlflow",title:"MLflow",description:"Testing",source:"@site/genDocs/docs/generated/ingestion/sources/mlflow.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mlflow",permalink:"/docs/generated/ingestion/sources/mlflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mlflow.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"MLflow",slug:"/generated/ingestion/sources/mlflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mlflow.md"},sidebar:"overviewSidebar",previous:{title:"Microsoft SQL Server",permalink:"/docs/generated/ingestion/sources/mssql"},next:{title:"Mode",permalink:"/docs/generated/ingestion/sources/mode"}},p={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Concept Mapping",id:"concept-mapping",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:d},y="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mlflow"},"MLflow"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,r.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Capability"),(0,r.yg)("th",{parentName:"tr",align:null},"Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Descriptions"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Extract descriptions for MLflow Registered Models and Model Versions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Extract Tags"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Extract tags for MLflow Registered Model Stages")))),(0,r.yg)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,r.yg)("p",null,"This ingestion source maps the following MLflow Concepts to DataHub Concepts:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Source Concept"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DataHub Concept"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://mlflow.org/docs/latest/model-registry.html#concepts"},(0,r.yg)("inlineCode",{parentName:"a"},"Registered Model"))),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/mlmodelgroup/"},(0,r.yg)("inlineCode",{parentName:"a"},"MlModelGroup"))),(0,r.yg)("td",{parentName:"tr",align:null},"The name of a Model Group is the same as a Registered Model's name (e.g. my_mlflow_model)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://mlflow.org/docs/latest/model-registry.html#concepts"},(0,r.yg)("inlineCode",{parentName:"a"},"Model Version"))),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/mlmodel/"},(0,r.yg)("inlineCode",{parentName:"a"},"MlModel"))),(0,r.yg)("td",{parentName:"tr",align:null},"The name of a Model is ",(0,r.yg)("inlineCode",{parentName:"td"},"{registered_model_name}{model_name_separator}{model_version}")," (e.g. my_mlflow_model_1 for Registered Model named my_mlflow_model and Version 1, my_mlflow_model_2, etc.)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://mlflow.org/docs/latest/model-registry.html#concepts"},(0,r.yg)("inlineCode",{parentName:"a"},"Model Stage"))),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/tag/"},(0,r.yg)("inlineCode",{parentName:"a"},"Tag"))),(0,r.yg)("td",{parentName:"tr",align:null},"The mapping between Model Stages and generated Tags is the following:",(0,r.yg)("br",null),"- Production: mlflow_production",(0,r.yg)("br",null),"- Staging: mlflow_staging",(0,r.yg)("br",null),"- Archived: mlflow_archived",(0,r.yg)("br",null),"- None: mlflow_none")))),(0,r.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mlflow]'\n")),(0,r.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: mlflow\n  config:\n    # Coordinates\n    tracking_uri: tracking_uri\n\nsink:\n  # sink configs\n\n")),(0,r.yg)("h3",{id:"config-details"},"Config Details"),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.yg)("p",null,"Note that a ",(0,r.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.yg)("div",{className:"config-table"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"model_name_separator"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"A string which separates model name from its version (e.g. model_1 or model-1) ",(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},"_")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"registry_uri"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Registry server URI. If not set, an MLflow default registry_uri is used (value of tracking_uri or ",(0,r.yg)("inlineCode",{parentName:"td"},"MLFLOW_REGISTRY_URI")," environment variable)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"tracking_uri"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tracking server URI. If not set, an MLflow default tracking_uri is used (local ",(0,r.yg)("inlineCode",{parentName:"td"},"mlruns/")," directory or ",(0,r.yg)("inlineCode",{parentName:"td"},"MLFLOW_TRACKING_URI")," environment variable)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"env"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},"PROD")))))))),(0,r.yg)(l.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MLflowConfig",\n  "description": "Any source that produces dataset urns in a single environment should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "tracking_uri": {\n      "title": "Tracking Uri",\n      "description": "Tracking server URI. If not set, an MLflow default tracking_uri is used (local `mlruns/` directory or `MLFLOW_TRACKING_URI` environment variable)",\n      "type": "string"\n    },\n    "registry_uri": {\n      "title": "Registry Uri",\n      "description": "Registry server URI. If not set, an MLflow default registry_uri is used (value of tracking_uri or `MLFLOW_REGISTRY_URI` environment variable)",\n      "type": "string"\n    },\n    "model_name_separator": {\n      "title": "Model Name Separator",\n      "description": "A string which separates model name from its version (e.g. model_1 or model-1)",\n      "default": "_",\n      "type": "string"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,r.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Class Name: ",(0,r.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mlflow.MLflowSource")),(0,r.yg)("li",{parentName:"ul"},"Browse on ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mlflow.py"},"GitHub"))),(0,r.yg)("h2",null,"Questions"),(0,r.yg)("p",null,"If you've got any questions on configuring ingestion for MLflow, feel free to ping us on ",(0,r.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);