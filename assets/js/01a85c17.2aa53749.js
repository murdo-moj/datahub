"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8209],{33154:(e,t,a)=>{a.d(t,{A:()=>E});var r=a(96540),l=a(20053),n=a(15161),s=a(9868),i=a(2775),c=a(6490);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function o({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.A)(m.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.A)(m.sidebarItemList,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m.sidebarItem},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(93911);function b({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return r.createElement(u.GX,{component:b,props:e})}function g({sidebar:e}){const t=(0,s.l)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(d,{sidebar:e}):r.createElement(o,{sidebar:e}):null}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function E(e){const{sidebar:t,toc:a,children:s}=e,i=p(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return r.createElement(n.A,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(g,{sidebar:t}),r.createElement("main",{className:(0,l.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},71321:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(96540),l=a(20053),n=a(6490);const s=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(64475),c=a(76514),m=a(33154),o=a(6568);const u={tag:"tag_Nnez"};function b({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:u.tag},r.createElement(o.A,e))))),r.createElement("hr",null))}function d({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{var a,r;const l=function(e){return e[0].toUpperCase()}(e.label);var n;null!==(n=(a=t)[r=l])&&void 0!==n||(a[r]=[]),t[l].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(b,{key:e.letter,letterEntry:e}))))}var g=a(31998);function p({tags:e,sidebar:t}){const a=s();return r.createElement(i.e3,{className:(0,l.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage)},r.createElement(i.be,{title:a}),r.createElement(g.A,{tag:"blog_tags_list"}),r.createElement(m.A,{sidebar:t},r.createElement("h1",null,a),r.createElement(d,{tags:e})))}},6568:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(96540),l=a(20053),n=a(2775);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i({permalink:e,label:t,count:a}){return r.createElement(n.A,{href:e,className:(0,l.A)(s.tag,a?s.tagWithCount:s.tagRegular)},t,a&&r.createElement("span",null,a))}}}]);