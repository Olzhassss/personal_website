import{S as at,i as rt,s as ot,a as it,e as j,c as st,b as F,g as Z,t as T,d as Q,f as D,h as C,j as lt,o as Ie,k as ct,l as ft,m as ut,n as ke,p as M,q as dt,r as pt,u as ht,v as G,w as H,x as ie,y as J,z as K,A as de}from"./chunks/index-fbeea69b.js";import{S as tt,I as z,g as Me,f as ze,a as Ee,b as pe,s as Y,i as We,c as he,P as Ye,d as mt}from"./chunks/singletons-73ffa7a8.js";import{s as _t,a as gt}from"./chunks/shared-23917130.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of vt){let r=n[o];Object.defineProperty(n,o,{get(){return e(),r},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(a){return a.replace(/\/$/,"")+$t}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Ne(a)),me(a,e));const re=new Map;function Lt(a,e){const n=Ne(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:r,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return me(a,e)}function It(a,e,n){if(re.size>0){const o=Ne(a,n),r=re.get(o);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);re.delete(o)}}return me(e,n)}function Ne(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${St(e.body)}"]`),o}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(o=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,P,$,q]=g;return e.push({name:$,matcher:q,optional:!!y,rest:!!P,chained:P?p===1&&t[0]==="":!1}),P?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Ut(a,e,n){const o={},r=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const c=e[t];let u=r[t];if(c.chained&&c.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](u)){if(c.optional&&c.chained){let p=r.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)r[p]=r[p-1],p-=1;continue}return}o[c.name]=u}}if(!d)return o}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,o){const r=new Set(e);return Object.entries(n).map(([c,[u,p,g]])=>{const{pattern:y,params:P}=Ot(c),$={id:c,exec:q=>{const O=y.exec(q);if(O)return Ut(O,P,o)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,...p||[]].map(t),leaf:d(u)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function d(c){const u=c<0;return u&&(c=~c),[u,a[c]]}function t(c){return c===void 0?c:[r.has(c),a[c]]}}function Tt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=j()},l(t){e&&ie(e.$$.fragment,t),n=j()},m(t,c){e&&J(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&2&&(u.form=t[1]),r!==(r=t[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&K(e,t)}}}function Dt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=j()},l(t){e&&ie(e.$$.fragment,t),n=j()},m(t,c){e&&J(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&1051&&(u.$$scope={dirty:c,ctx:t}),r!==(r=t[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&K(e,t)}}}function Vt(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=j()},l(t){e&&ie(e.$$.fragment,t),n=j()},m(t,c){e&&J(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&2&&(u.form=t[1]),r!==(r=t[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&K(e,t)}}}function Ct(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=j()},l(t){e&&ie(e.$$.fragment,t),n=j()},m(t,c){e&&J(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&1043&&(u.$$scope={dirty:c,ctx:t}),r!==(r=t[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&K(e,t)}}}function qt(a){let e,n,o;var r=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=j()},l(t){e&&ie(e.$$.fragment,t),n=j()},m(t,c){e&&J(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&16&&(u.data=t[4]),c&2&&(u.form=t[1]),r!==(r=t[0][2])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&K(e,t)}}}function Bt(a){let e,n,o,r;const d=[Ct,Vt],t=[];function c(u,p){return u[0][2]?0:1}return e=c(a),n=t[e]=d[e](a),{c(){n.c(),o=j()},l(u){n.l(u),o=j()},m(u,p){t[e].m(u,p),F(u,o,p),r=!0},p(u,p){let g=e;e=c(u),e===g?t[e].p(u,p):(Z(),T(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),D(n,1),n.m(o.parentNode,o))},i(u){r||(D(n),r=!0)},o(u){T(n),r=!1},d(u){t[e].d(u),u&&C(o)}}}function Xe(a){let e,n=a[6]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ut(e);n&&n.l(r),r.forEach(C),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),M(e,"position","absolute"),M(e,"left","0"),M(e,"top","0"),M(e,"clip","rect(0 0 0 0)"),M(e,"clip-path","inset(50%)"),M(e,"overflow","hidden"),M(e,"white-space","nowrap"),M(e,"width","1px"),M(e,"height","1px")},m(o,r){F(o,e,r),n&&n.m(e,null)},p(o,r){o[6]?n?n.p(o,r):(n=Ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ht(e,n[7])},d(n){n&&C(e)}}}function Ft(a){let e,n,o,r,d;const t=[Dt,Tt],c=[];function u(g,y){return g[0][1]?0:1}e=u(a),n=c[e]=t[e](a);let p=a[5]&&Xe(a);return{c(){n.c(),o=it(),p&&p.c(),r=j()},l(g){n.l(g),o=st(g),p&&p.l(g),r=j()},m(g,y){c[e].m(g,y),F(g,o,y),p&&p.m(g,y),F(g,r,y),d=!0},p(g,[y]){let P=e;e=u(g),e===P?c[e].p(g,y):(Z(),T(c[P],1,1,()=>{c[P]=null}),Q(),n=c[e],n?n.p(g,y):(n=c[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Xe(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){d||(D(n),d=!0)},o(g){T(n),d=!1},d(g){c[e].d(g),g&&C(o),p&&p.d(g),g&&C(r)}}}function Gt(a,e,n){let{stores:o}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:c=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(o.page.notify);let g=!1,y=!1,P=null;return Ie(()=>{const $=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),$}),a.$$set=$=>{"stores"in $&&n(8,o=$.stores),"page"in $&&n(9,r=$.page),"components"in $&&n(0,d=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,c=$.data_0),"data_1"in $&&n(3,u=$.data_1),"data_2"in $&&n(4,p=$.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(r)},[d,t,c,u,p,g,y,P,o,r]}class Ht extends at{constructor(e){super(),rt(this,e,Gt,Ft,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Jt="modulepreload",Kt=function(a,e){return new URL(a,e).href},Qe={},X=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Kt(d,o),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Jt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Mt={},_e=[()=>X(()=>import("./chunks/0-b54c4157.js"),["./chunks\\0-b54c4157.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-246d59a3.js","./chunks\\index-fbeea69b.js","./assets\\_layout-94c2fd1c.css"],import.meta.url),()=>X(()=>import("./chunks/1-73139a37.js"),["./chunks\\1-73139a37.js","./components\\error.svelte-67711c90.js","./chunks\\index-fbeea69b.js","./chunks\\singletons-73ffa7a8.js","./chunks\\shared-23917130.js"],import.meta.url),()=>X(()=>import("./chunks/2-a46c5157.js"),["./chunks\\2-a46c5157.js","./chunks\\_layout-d4681cae.js","./components\\pages\\(home)\\_layout.svelte-501d6947.js","./chunks\\index-fbeea69b.js"],import.meta.url),()=>X(()=>import("./chunks/3-dd60033f.js"),["./chunks\\3-dd60033f.js","./components\\pages\\about\\_layout.svelte-f6958f41.js","./chunks\\index-fbeea69b.js","./chunks\\shared-23917130.js"],import.meta.url),()=>X(()=>import("./chunks/4-21ecd936.js"),["./chunks\\4-21ecd936.js","./chunks\\_page-e131e3a6.js","./components\\pages\\(home)\\_page.svelte-999e1e9f.js","./chunks\\index-fbeea69b.js","./chunks\\shared-23917130.js"],import.meta.url),()=>X(()=>import("./chunks/5-4b34e3f5.js"),["./chunks\\5-4b34e3f5.js","./chunks\\_page-cda0bd87.js","./components\\pages\\about\\_page.svelte-c0f4e0bb.js","./chunks\\index-fbeea69b.js"],import.meta.url),()=>X(()=>import("./chunks/6-ddbdf7a9.js"),["./chunks\\6-ddbdf7a9.js","./components\\pages\\blog\\_page.svelte-c9c16a1f.js","./chunks\\index-fbeea69b.js"],import.meta.url)],zt=[],Wt={"/(home)":[4,[2]],"/about":[5,[3]],"/blog":[6]},Yt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function Xt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,r])=>[o,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function an(a){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function o(r,d=!1){if(r===Zt)return;if(r===xt)return NaN;if(r===en)return 1/0;if(r===tn)return-1/0;if(r===nn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[r]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const c=new Array(t.length);n[r]=c;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Qt&&(c[u]=o(p))}}else{const c={};n[r]=c;for(const u in t){const p=t[u];c[u]=o(p)}}return n[r]}return o(0)}const Re=jt(_e,zt,Wt,Mt),Oe=_e[0],Pe=_e[1];Oe();Pe();let oe={};try{oe=JSON.parse(sessionStorage[tt])}catch{}function Se(a){oe[a]=he()}function rn({target:a,base:e}){var He;const n=document.documentElement,o=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,u=!1,p=!0,g=!1,y=!1,P=!1,$=!1,q,O=(He=history.state)==null?void 0:He[z];O||(O=Date.now(),history.replaceState({...history.state,[z]:O},"",location.href));const ge=oe[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let W,Ue,se;async function je(){se=se||Promise.resolve(),await se,se=null;const i=new URL(location.href),s=fe(i,!0);r=null,await De(s,i,[])}async function we(i,{noScroll:s=!1,replaceState:f=!1,keepFocus:l=!1,state:m={},invalidateAll:h=!1},_,b){return typeof i=="string"&&(i=new URL(i,Me(document))),ue({url:i,scroll:s?he():null,keepfocus:l,redirect_chain:_,details:{state:m,replaceState:f},nav_token:b,accepted:()=>{h&&($=!0)},blocked:()=>{},type:"goto"})}async function Te(i){const s=fe(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return r={id:s.id,promise:qe(s).then(f=>(f.type==="loaded"&&f.state.error&&(r=null),f))},r.promise}async function le(...i){const f=Re.filter(l=>i.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(f)}async function De(i,s,f,l,m={},h){var b,v;Ue=m;let _=i&&await qe(i);if(_||(_=await Ge(s,{id:null},await ae(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Ue!==m)return!1;if(_.type==="redirect")if(f.length>10||f.includes(s.pathname))_=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(_.location,s).href,{},[...f,s.pathname],m),!1;else((v=(b=_.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await Y.updated.check()&&await ne(s);if(o.length=0,$=!1,g=!0,l&&l.details){const{details:w}=l,E=w.replaceState?0:1;w.state[z]=O+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(r=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),q.$set(_.props)):Ve(_),l){const{scroll:w,keepfocus:E}=l;if(E||Le(),await de(),p){const S=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,_.props.page&&(W=_.props.page),h&&h(),g=!1}function Ve(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),W=i.props.page,q=new Ht({target:a,props:{...i.props,stores:Y},hydrate:!0});const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(m=>m(f)),u=!0}async function te({url:i,params:s,branch:f,status:l,error:m,route:h,form:_}){const b=f.filter(Boolean);let v="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);i.pathname=wt(i.pathname,v),i.search=i.search;const w={type:"loaded",state:{url:i,params:s,branch:f,error:m,route:h},props:{components:b.map(L=>L.node.component)}};_!==void 0&&(w.props.form=_);let E={},S=!W;for(let L=0;L<b.length;L+=1){const k=b[L];E={...E,...k.data},(S||!t.branch.some(U=>U===k))&&(w.props[`data_${L}`]=E,S=S||Object.keys(k.data??{}).length>0)}return S||(S=Object.keys(W.data).length!==Object.keys(E).length),(!t.url||i.href!==t.url.href||t.error!==m||_!==void 0&&_!==W.form||S)&&(w.props.page={error:m,params:s,route:{id:(h==null?void 0:h.id)??null},status:l,url:new URL(i),form:_??null,data:S?E:W.data}),w}async function ye({loader:i,parent:s,url:f,params:l,route:m,server_data_node:h}){var w,E,S;let _=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await i();if((w=v.universal)!=null&&w.load){let B=function(...k){for(const U of k){const{href:V}=new URL(U,f);b.dependencies.add(V)}};const L={route:{get id(){return b.route=!0,m.id}},params:new Proxy(l,{get:(k,U)=>(b.params.add(U),k[U])}),data:(h==null?void 0:h.data)??null,url:kt(f,()=>{b.url=!0}),async fetch(k,U){let V;k instanceof Request?(V=k.url,U={body:k.method==="GET"||k.method==="HEAD"?void 0:await k.blob(),cache:k.cache,credentials:k.credentials,headers:k.headers,integrity:k.integrity,keepalive:k.keepalive,method:k.method,mode:k.mode,redirect:k.redirect,referrer:k.referrer,referrerPolicy:k.referrerPolicy,signal:k.signal,...U}):V=k;const R=new URL(V,f).href;return B(R),u?It(V,R,U):Lt(V,U)},setHeaders:()=>{},depends:B,parent(){return b.parent=!0,s()}};_=await v.universal.load.call(null,L)??null,_=_?await Xt(_):null}return{node:v,loader:i,server:h,universal:(E=v.universal)!=null&&E.load?{type:"data",data:_,uses:b}:null,data:_??(h==null?void 0:h.data)??null,slash:((S=v.universal)==null?void 0:S.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(i,s,f,l,m){if($)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&f)return!0;for(const h of l.params)if(m[h]!==t.params[h])return!0;for(const h of l.dependencies)if(o.some(_=>_(new URL(h))))return!0;return!1}function be(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:f,params:l,route:m}){if((r==null?void 0:r.id)===i)return r.promise;const{errors:h,layouts:_,leaf:b}=m,v=[..._,b];h.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const E=t.url?i!==t.url.pathname+t.url.search:!1,S=t.route?m.id!==t.route.id:!1,B=v.reduce((R,A,N)=>{var ee;const I=t.branch[N],x=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ce(R.some(Boolean),S,E,(ee=I.server)==null?void 0:ee.uses,l));return R.push(x),R},[]);if(B.some(Boolean)){try{w=await et(f,B)}catch(R){return ce({status:500,error:await ae(R,{url:f,params:l,route:{id:m.id}}),url:f,route:m})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let k=!1;const U=v.map(async(R,A)=>{var ee;if(!R)return;const N=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&R[1]===(N==null?void 0:N.loader)&&!Ce(k,S,E,(ee=N.universal)==null?void 0:ee.uses,l))return N;if(k=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:R[1],url:f,params:l,route:m,parent:async()=>{var Ke;const Je={};for(let ve=0;ve<A;ve+=1)Object.assign(Je,(Ke=await U[ve])==null?void 0:Ke.data);return Je},server_data_node:be(I===void 0&&R[0]?{type:"skip"}:I??null,N==null?void 0:N.server)})});for(const R of U)R.catch(()=>{});const V=[];for(let R=0;R<v.length;R+=1)if(v[R])try{V.push(await U[R])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let N=500,I;if(L!=null&&L.includes(A))N=A.status??N,I=A.error;else if(A instanceof Ae)N=A.status,I=A.body;else{if(await Y.updated.check())return await ne(f);I=await ae(A,{params:l,url:f,route:{id:m.id}})}const x=await Be(R,V,h);return x?await te({url:f,params:l,branch:V.slice(0,x.idx).concat(x.node),status:N,error:I,route:m}):await Ge(f,{id:m.id},I,N)}else V.push(void 0);return await te({url:f,params:l,branch:V,status:200,error:null,route:m,form:s?void 0:null})}async function Be(i,s,f){for(;i--;)if(f[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await f[i](),loader:f[i],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:i,error:s,url:f,route:l}){const m={},h=await Oe();let _=null;if(h.has_server_load)try{const w=await et(f,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||c)&&await ne(f)}const b=await ye({loader:Oe,url:f,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:be(_)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await te({url:f,params:m,branch:[b,v],status:i,error:s,route:null})}function fe(i,s){if(We(i,e))return;const f=yt(i.pathname.slice(e.length)||"/");for(const l of Re){const m=l.exec(f);if(m)return{id:i.pathname+i.search,invalidating:s,route:l,params:bt(m),url:i}}}function Fe({url:i,type:s,intent:f,delta:l}){var b,v;let m=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((v=f==null?void 0:f.route)==null?void 0:v.id)??null},url:i},willUnload:!f,type:s};l!==void 0&&(h.delta=l);const _={...h,cancel:()=>{m=!0}};return y||d.before_navigate.forEach(w=>w(_)),m?null:h}async function ue({url:i,scroll:s,keepfocus:f,redirect_chain:l,details:m,type:h,delta:_,nav_token:b,accepted:v,blocked:w}){const E=fe(i,!1),S=Fe({url:i,type:h,delta:_,intent:E});if(!S){w();return}Se(O),v(),y=!0,u&&Y.navigating.set(S),await De(E,i,l,{scroll:s,keepfocus:f,details:m},b,()=>{y=!1,d.after_navigate.forEach(B=>B(S)),Y.navigating.set(null)})}async function Ge(i,s,f,l){return i.origin===location.origin&&i.pathname===location.pathname&&!c?await ce({status:l,error:f,url:i,route:s}):await ne(i)}function ne(i){return location.href=i.href,new Promise(()=>{})}function nt(){let i;n.addEventListener("mousemove",h=>{const _=h.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const f=new IntersectionObserver(h=>{for(const _ of h)_.isIntersecting&&(le(new URL(_.target.href).pathname),f.unobserve(_.target))},{threshold:0});function l(h,_){const b=ze(h,n);if(!b)return;const{url:v,external:w}=Ee(b,e);if(w)return;const E=pe(b);E.reload||(_<=E.preload_data?Te(v):_<=E.preload_code&&le(v.pathname))}function m(){f.disconnect();for(const h of n.querySelectorAll("a")){const{url:_,external:b}=Ee(h,e);if(b)continue;const v=pe(h);v.reload||(v.preload_code===Ye.viewport&&f.observe(h),v.preload_code===Ye.eager&&le(_.pathname))}}d.after_navigate.push(m),m()}return{after_navigate:i=>{Ie(()=>(d.after_navigate.push(i),()=>{const s=d.after_navigate.indexOf(i);d.after_navigate.splice(s,1)}))},before_navigate:i=>{Ie(()=>(d.before_navigate.push(i),()=>{const s=d.before_navigate.indexOf(i);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(i,s={})=>we(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(f=>f.href===s)}return je()},invalidateAll:()=>($=!0,je()),preload_data:async i=>{const s=new URL(i,Me(document));await Te(s)},preload_code:le,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const m=await Be(t.branch.length,f,l.errors);if(m){const h=await te({url:s,params:t.params,branch:f.slice(0,m.idx).concat(m.node),status:i.status??500,error:i.error,route:l});t=h.state,q.$set(h.props),de().then(Le)}}else if(i.type==="redirect")we(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...W,form:i.data,status:i.status}};q.$set(s),i.type==="success"&&de().then(Le)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let f=!1;if(!y){const m={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};d.before_navigate.forEach(h=>h(m))}f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[tt]=JSON.stringify(oe)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const f=ze(s.composedPath()[0],n);if(!f)return;const{url:l,external:m,has:h}=Ee(f,e),_=pe(f);if(!l||!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(m||_.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[v,w]=l.href.split("#");if(w!==void 0&&v===location.href.split("#")[0]){P=!0,Se(O),t.url=l,Y.page.set({...W,url:l}),Y.page.notify();return}ue({url:l,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const h=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(We(h,e))return;const _=s.target,{noscroll:b,reload:v}=pe(_);if(v)return;s.preventDefault(),s.stopPropagation();const w=new FormData(_),E=l==null?void 0:l.getAttribute("name");E&&w.append(E,(l==null?void 0:l.getAttribute("value"))??""),h.search=new URLSearchParams(w).toString(),ue({url:h,scroll:b?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var f;if((f=s.state)!=null&&f[z]){if(s.state[z]===O)return;const l=s.state[z]-O;ue({url:new URL(location.href),scroll:oe[s.state[z]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[z]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[z]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Y.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:f,params:l,route:m,data:h,form:_})=>{c=!0;const b=new URL(location.href);({params:l={},route:m={id:null}}=fe(b,!1)||{});let v;try{const w=f.map(async(E,S)=>{const B=h[S];return ye({loader:_e[E],url:b,params:l,route:m,parent:async()=>{const L={};for(let k=0;k<S;k+=1)Object.assign(L,(await w[k]).data);return L},server_data_node:be(B)})});v=await te({url:b,params:l,branch:await Promise.all(w),status:i,error:s,form:_,route:Re.find(({id:E})=>E===m.id)??null})}catch(w){if(w instanceof xe){await ne(new URL(w.location,location.href));return}v=await ce({status:w instanceof Ae?w.status:500,error:await ae(w,{url:b,params:l,route:m}),url:b,route:m})}Ve(v)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),r=await o.json();if(!o.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ae(a,e){return a instanceof Ae?a.body:Yt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function un({env:a,hydrate:e,paths:n,target:o,version:r}){_t(n),gt(r);const d=rn({target:o,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{un as start};
