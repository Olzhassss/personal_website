import{S as v,i as k,s as q,k as m,a as E,l as u,m as b,c as G,h as f,I as o,n as r,b as I,G as h,B as _,q as S,r as w,u as B}from"./index-75ca5e0b.js";import{c as d}from"./shared-23917130.js";function g(n){let s,e;return{c(){s=m("p"),e=S(n[3]),this.h()},l(l){s=u(l,"P",{class:!0});var c=b(s);e=w(c,n[3]),c.forEach(f),this.h()},h(){r(s,"class","text-center text-base")},m(l,c){I(l,s,c),h(s,e)},p(l,c){c&8&&B(e,l[3])},d(l){l&&f(s)}}}function C(n){let s,e,l,c,t=n[3]&&g(n);return{c(){s=m("div"),e=m("img"),c=E(),t&&t.c(),this.h()},l(i){s=u(i,"DIV",{class:!0});var a=b(s);e=u(a,"IMG",{src:!0,alt:!0,class:!0}),c=G(a),t&&t.l(a),a.forEach(f),this.h()},h(){o(e.src,l=d+"/images/"+n[0])||r(e,"src",l),r(e,"alt",n[2]),r(e,"class","border h-full"),r(s,"class",n[1])},m(i,a){I(i,s,a),h(s,e),h(s,c),t&&t.m(s,null)},p(i,[a]){a&1&&!o(e.src,l=d+"/images/"+i[0])&&r(e,"src",l),a&4&&r(e,"alt",i[2]),i[3]?t?t.p(i,a):(t=g(i),t.c(),t.m(s,null)):t&&(t.d(1),t=null),a&2&&r(s,"class",i[1])},i:_,o:_,d(i){i&&f(s),t&&t.d()}}}function D(n,s,e){let{src:l=""}=s,{classes:c="ml-4 max-w-[30%] float-right"}=s,{alt:t=""}=s,{caption:i=""}=s;return n.$$set=a=>{"src"in a&&e(0,l=a.src),"classes"in a&&e(1,c=a.classes),"alt"in a&&e(2,t=a.alt),"caption"in a&&e(3,i=a.caption)},[l,c,t,i]}class V extends v{constructor(s){super(),k(this,s,D,C,q,{src:0,classes:1,alt:2,caption:3})}}export{V as I};
