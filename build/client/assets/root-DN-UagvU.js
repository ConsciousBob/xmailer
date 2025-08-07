import{e as f,f as d,g,h as x,r as i,_ as y,j as e,O as w,M as S,i as j,S as k}from"./components-B71KIw6b.js";/**
 * @remix-run/react v2.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:c}=f(),o=d(),m=g();x({getKey:t,storageKey:a});let p=i.useMemo(()=>{if(!t)return null;let s=t(o,m);return s!==o.key?s:null},[]);if(c)return null;let u=((s,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}const E=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function I({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("title",{children:"xMailer - Professional Email Marketing Platform"}),e.jsx("meta",{name:"description",content:"xMailer - The ultimate email marketing platform for businesses. Create campaigns, manage recipients, and track performance with ease."}),e.jsx(S,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[t,e.jsx(M,{}),e.jsx(k,{})]})]})}function L(){return e.jsx(w,{})}export{I as Layout,L as default,E as links};
