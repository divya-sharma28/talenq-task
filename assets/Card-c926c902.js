import{r as i,M as m,j as s,c as r}from"./index-89a16e10.js";const h=()=>{const[n,l]=i.useState(6),[c,t]=i.useState(12),o=()=>{l(n==6?9:6)},a=()=>{t(c==12?16:12)},{dayMode:d}=i.useContext(m);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"sec s1",children:s.jsx("div",{className:"cardContainer animate__animated animate__bounce",children:r.slice(0,3).map(e=>s.jsxs("div",{className:"card",style:{cursor:e.cursor&&"pointer"},children:[s.jsxs("span",{className:"cardId",children:["ID: ",e.id]}),s.jsx("h3",{children:e.card_title}),e.link&&s.jsx("a",{href:e.redirect,children:e.link_name}),e.data&&s.jsx("span",{children:e.data_value}),e.note&&s.jsxs("p",{className:"notes",children:["*",e.note,"*"]}),e.button&&s.jsx("button",{className:"button",onClick:()=>window.location.replace(e.redirect),children:e.button_name})]},e.id))})}),s.jsxs("div",{className:"sec s2",style:{backgroundColor:d&&"unset"},children:[s.jsx("div",{className:"cardContainer animate__animated animate__bounce",children:r.slice(3,n).map(e=>s.jsxs("div",{className:"card ",style:{cursor:e.cursor&&"pointer"},children:[s.jsxs("span",{className:"cardId",children:["ID: ",e.id]}),s.jsx("h3",{children:e.card_title}),e.link&&s.jsx("a",{href:e.redirect,children:e.link_name}),e.data&&s.jsx("span",{children:e.data_value.length>30?e.data_value.slice(0,100)+"...":e.data_value}),e.note&&s.jsxs("p",{className:"notes",children:["*",e.note,"*"]}),e.button&&s.jsx("button",{className:"button",onClick:()=>window.location.replace(e.redirect),children:e.button_name})]}))}),s.jsx("button",{className:"secButton",onClick:o,children:n==9?"See Less":"See More"})]}),s.jsxs("div",{className:"sec s3",children:[s.jsx("div",{className:"cardContainer animate__animated animate__bounce",children:r.slice(9,c).map(e=>s.jsxs("div",{className:"card",style:{cursor:e.cursor&&"pointer"},children:[s.jsxs("span",{className:"cardId",children:["ID: ",e.id]}),s.jsx("h3",{children:e.card_title}),e.data_type=="image"&&s.jsx("img",{src:e.data_value}),e.link&&s.jsx("a",{href:e.redirect,children:e.link_name}),e.data&&!e.data_type=="image"&&s.jsx("span",{children:e.data_value}),e.note&&s.jsxs("p",{className:"notes",children:["*",e.note,"*"]}),e.button&&s.jsx("button",{className:"button",onClick:()=>window.location.replace(e.redirect),children:e.button_name})]}))}),s.jsx("button",{className:"secButton",onClick:a,children:c==16?"See Less":"See More"})]})]})};export{h as default};
