(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="modulepreload",f=function(s){return"/"+s},d={},g=function(r,n,o){if(!n||n.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=f(t),t in d)return;d[t]=!0;const i=t.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(!!o)for(let l=e.length-1;l>=0;l--){const a=e[l];if(a.href===t&&(!i||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${u}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":m,i||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),i)return new Promise((l,a)=>{c.addEventListener("load",l),c.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},h=()=>{const s=document.getElementById("footer-primary"),r=document.querySelector(".js-scroll-top"),n=o=>{o[0].isIntersecting?(r.classList.add("opacity-100","right-5","md:right-16"),r.classList.remove("opacity-0","-right-5","md:-right-16")):(r.classList.remove("opacity-100","right-5","md:-right-16"),r.classList.add("opacity-0","-right-5","md:right-16"))};r&&new IntersectionObserver(n).observe(s)},p=()=>{const s=o=>{o.forEach(e=>{const t=e.target.dataset.animateType;e.isIntersecting?(t?e.target.classList.add(t):e.target.classList.add("motion-safe:animate-fadein"),e.target.classList.remove("opacity-0")):(t?e.target.classList.remove(t):e.target.classList.remove("motion-safe:animate-fadein"),e.target.classList.add("opacity-0"))})},r=new IntersectionObserver(s);document.querySelectorAll(".js-show-on-scroll").forEach(o=>r.observe(o))};var y=document.getElementsByTagName("html")[0];y.classList.add("js");h();p();document.querySelector(".js-carousel-block")&&g(()=>import("./carousel-65e262ac.js"),[]).then(s=>s.default());if(document.querySelector(".grid-visual")&&document.querySelector(".breakpoint")){const s=document.querySelector(".breakpoint"),r=document.querySelector(".grid-visual");s.addEventListener("click",function(){r.classList.toggle("hidden")})}