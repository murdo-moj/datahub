"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1638],{92026:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(6490),l=a(92711);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.A,{permalink:a,title:n.createElement(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.A,{permalink:o,title:n.createElement(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},92711:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053),l=a(2775);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(l.A,{className:(0,r.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},34854:(e,t,a)=>{a.d(t,{e:()=>i,i:()=>o});var n=a(96540),r=a(22651);const l=n.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const r=function({content:e,isBlogPostPage:t}){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return n.createElement(l.Provider,{value:r},e)}function i(){const e=(0,n.useContext)(l);if(null===e)throw new r.dV("BlogPostProvider");return e}},91939:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(96540),r=a(20053),l=a(31243),o=a(64475),i=a(76514),c=a(92026),s=a(31998),m=a(34854),d=a(2775);const u={featureCol:"featureCol_dj9X",card_date:"card_date_QJ_B",card_feature:"card_feature_wPJS",card:"card_jJEV",featureHeader:"featureHeader_Lc9K",featureBody:"featureBody_hs3V",card_image:"card_image_rTA3"};function g(){const{metadata:e}=(0,m.e)(),{permalink:t,title:a,description:l,formattedDate:o,frontMatter:i}=e;return n.createElement("div",{className:(0,r.A)("col col--4",u.featureCol)},n.createElement(d.A,{to:t,className:(0,r.A)("card",u.card)},(null==i?void 0:i.image)?n.createElement("div",{className:u.card_image},n.createElement("img",{src:null==i?void 0:i.image,alt:a})):n.createElement("div",{className:(0,r.A)("card__header",u.featureHeader)},n.createElement("h2",null,a)),n.createElement("div",{className:(0,r.A)("card__body",u.featureBody)},n.createElement("div",null,l)),n.createElement("div",{className:(0,r.A)(u.card_date)},"Published on ",o)))}var v=a(15161);const E={filterBar:"filterBar_r5TB"};function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.A)(),{blogDescription:r,blogTitle:i,permalink:c}=t,m="/"===c?a:i;return n.createElement(n.Fragment,null,n.createElement(o.be,{title:m,description:r}),n.createElement(s.A,{tag:"blog_posts_list"}))}function _(e){const{metadata:t,items:a}=e,[r,l]=(0,n.useState)([]),o=(null==r?void 0:r.length)?(a||[]).filter((e=>r.some((t=>{var a,n,r;return null==e||null===(r=e.content)||void 0===r||null===(n=r.frontMatter)||void 0===n||null===(a=n.audience)||void 0===a?void 0:a.some((e=>e===t))})))):a;return n.createElement(v.A,null,n.createElement("header",{className:"hero"},n.createElement("div",{className:"container"},n.createElement("div",{className:"hero__content"},n.createElement("div",null,n.createElement("h1",{className:"hero__title"},"DataHub Learn"),n.createElement("p",{className:"hero__subtitle"},"Learn about the hot topics in the data ecosystem and how DataHub can help you with your data journey."))),n.createElement("div",{className:E.filterBar},n.createElement("strong",null,"For: "),["Data Governance Leads","Data Engineers","Data Architects","Data Platform Leads","Data Analysts"].map((e=>n.createElement("button",{className:`button button--secondary ${r.includes(e)&&"button--active"}`,onClick:()=>(e=>{r.includes(e)?l(r.filter((t=>t!==e))):l([...new Set([...r,e])])})(e)},e)))))),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},(o||[]).map((({content:e})=>n.createElement(m.i,{key:e.metadata.permalink,content:e},n.createElement(g,null))))),n.createElement(c.A,{metadata:t})))}function f(e){return n.createElement(o.e3,{className:(0,r.A)(i.G.wrapper.blogPages,i.G.page.blogListPage)},n.createElement(p,e),n.createElement(_,e))}}}]);