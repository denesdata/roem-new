import{w as u,a as h}from"./paths.69cfad20.js";const g="1679399463957",E="sveltekit:snapshot",m="sveltekit:scroll",w="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function A(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function R(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function S(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const l=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!l||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:l}}function y(e){let t=null,n=null,l=null,s=null,r=null,a=null,o=e;for(;o&&o!==document.documentElement;)l===null&&(l=i(o,"preload-code")),s===null&&(s=i(o,"preload-data")),t===null&&(t=i(o,"keepfocus")),n===null&&(n=i(o,"noscroll")),r===null&&(r=i(o,"reload")),a===null&&(a=i(o,"replacestate")),o=_(o);return{preload_code:d[l??"off"],preload_data:d[s??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function p(e){const t=u(e);let n=!0;function l(){n=!0,t.update(a=>a)}function s(a){n=!1,t.set(a)}function r(a){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&a(o=c)})}return{notify:l,set:s,subscribe:r}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function l(){clearTimeout(n);const s=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const a=(await s.json()).version!==g;return a&&(e(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:l}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function T(e){e.client}const x={url:p({}),page:p({}),navigating:u(null),updated:b()};export{w as I,f as P,m as S,E as a,S as b,y as c,R as d,T as e,I as f,A as g,v as i,x as s};
