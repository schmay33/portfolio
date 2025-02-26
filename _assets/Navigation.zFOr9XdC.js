import{j as e,m as f}from"./proxy.0QhNIjzc.js";import{r as o}from"./index.DK-fsZOb.js";import{s as y,a as n}from"./index.95d291e9.B0Hsoo1d.js";const j=()=>{const[r,a]=o.useState("system"),[i,m]=o.useState(!1);o.useEffect(()=>{m(!0);const s=localStorage.getItem("theme");s&&["light","dark","system"].includes(s)&&a(s)},[]),o.useEffect(()=>{if(!i)return;const s=l=>{const t=document.documentElement;l==="dark"?t.classList.add("dark"):t.classList.remove("dark")};if(r==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches;s(l?"dark":"light");const t=window.matchMedia("(prefers-color-scheme: dark)"),d=h=>{s(h.matches?"dark":"light")};return t.addEventListener("change",d),()=>t.removeEventListener("change",d)}else s(r);localStorage.setItem("theme",r)},[r,i]);const c=()=>{a(s=>s==="system"?"dark":s==="dark"?"light":"system")};return i?e.jsxs(f.button,{className:y.themeToggle,onClick:c,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Toggle theme",title:`Current theme: ${r}. Click to change.`,children:[r==="light"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),r==="dark"&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),r==="system"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),e.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})]}):null},v=()=>{const[r,a]=o.useState("home"),[i,m]=o.useState(!1),[c,s]=o.useState(!1),l=[{name:"Home",href:"#home"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"},{name:"Contact",href:"#contact"}];return o.useEffect(()=>{const t=()=>{m(window.scrollY>20);const h=l.map(x=>x.href.substring(1)).find(x=>{const u=document.getElementById(x);if(!u)return!1;const g=u.getBoundingClientRect();return g.top<=100&&g.bottom>=100});h&&a(h)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[l]),e.jsx("header",{className:`${n.header} ${i?n.scrolled:""}`,children:e.jsxs("div",{className:n.container,children:[e.jsx("a",{href:"#home",className:n.logo,children:"NS"}),e.jsx("button",{className:n.mobileMenuButton,onClick:()=>s(!c),"aria-label":"Toggle menu",children:e.jsx("span",{className:n.hamburger})}),e.jsxs("nav",{className:`${n.nav} ${c?n.mobileOpen:""}`,children:[l.map(t=>e.jsx("a",{href:t.href,className:`${n.navLink} ${r===t.href.substring(1)?n.active:""}`,onClick:()=>s(!1),children:t.name},t.name)),e.jsx("div",{className:n.themeToggleWrapper,children:e.jsx(j,{})})]})]})})};export{v as default};
