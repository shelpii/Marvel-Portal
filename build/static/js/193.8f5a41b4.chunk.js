"use strict";(self.webpackChunkmarvel_portal=self.webpackChunkmarvel_portal||[]).push([[193],{609:(t,e,c)=>{c.d(e,{Z:()=>s});const a=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var n=c(184);const s=()=>(0,n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a})},86:(t,e,c)=>{c.r(e),c.d(e,{default:()=>h});const a=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",n=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var s=c(184);const i=()=>(0,s.jsxs)("div",{className:"app__banner",children:[(0,s.jsx)("img",{src:a,alt:"Avengers"}),(0,s.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,s.jsx)("br",{}),"Stay tuned!"]}),(0,s.jsx)("img",{src:n,alt:"Avengers logo"})]});var o=c(791),r=c(87),l=c(557),u=c(609),d=c(684);const m=()=>{const[t,e]=(0,o.useState)([]),[c,a]=(0,o.useState)(!1),[n,i]=(0,o.useState)(0),[m,h]=(0,o.useState)(!1),{loading:p,error:g,getAllComics:b}=(0,l.Z)();(0,o.useEffect)((()=>{v(n,!0)}),[]);const v=(t,e)=>{a(!e),b(t).then(x)},x=t=>{let c=!1;t.length<8&&(c=!0),e((e=>[...e,...t])),a(!1),i((t=>t+8)),h(c)};const j=function(t){const e=t.map(((t,e)=>(0,s.jsx)("li",{className:"comics__item",children:(0,s.jsxs)(r.rU,{to:"/comics/".concat(t.id),children:[(0,s.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),(0,s.jsx)("div",{className:"comics__item-name",children:t.title}),(0,s.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)));return(0,s.jsx)("ul",{className:"comics__grid",children:e})}(t),_=g?(0,s.jsx)(u.Z,{}):null,f=p&&!c?(0,s.jsx)(d.Z,{}):null;return(0,s.jsxs)("div",{className:"comics__list",children:[_,f,j,(0,s.jsx)("button",{disabled:c,style:{display:m?"none":"block"},className:"button button__main button__long",onClick:()=>v(n),children:(0,s.jsx)("div",{className:"inner",children:"load more"})})]})},h=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),(0,s.jsx)(m,{})]})},557:(t,e,c)=>{c.d(e,{Z:()=>n});var a=c(791);const n=()=>{const{loading:t,request:e,error:c,clearError:n}=(()=>{const[t,e]=(0,a.useState)(!1),[c,n]=(0,a.useState)(null);return{loading:t,request:(0,a.useCallback)((async function(t){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e(!0);try{const n=await fetch(t,{method:c,body:a,headers:s});if(!n.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));const i=await n.json();return e(!1),i}catch(i){throw e(!1),n(i.message),i}}),[]),error:c,clearError:(0,a.useCallback)((()=>n(null)),[])}})(),s="https://gateway.marvel.com:443/v1/public/",i="apikey=1b99ce4d7a44ec18dc406f6e31570b14",o=t=>({id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,220),"..."):"This character haven't description",thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}),r=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:t,error:c,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return(await e("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i))).data.results.map(o)},getCharacter:async t=>{const c=await e("".concat(s,"characters/").concat(t,"?&").concat(i));return o(c.data.results[0])},clearError:n,getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(s,"comics?limit=8&offset=").concat(t,"&").concat(i))).data.results.map(r)},getComic:async t=>{const c=await e("".concat(s,"comics/").concat(t,"?").concat(i));return r(c.data.results[0])}}}}}]);
//# sourceMappingURL=193.8f5a41b4.chunk.js.map