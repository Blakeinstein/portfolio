import{s as c,l as m,i as d,f as _,m as g,o as v,p as T,e as N,c as j,b as q,q as h,u as z,r as B,v as C}from"./scheduler.Pd8dchTd.js";import{S,i as E,t as y,a as p}from"./index.ZpyY4ssA.js";import{g as U}from"./spread.rEx3vLA9.js";import{c as b}from"./Title.4By_krnI.js";function f(i){let s,a,u;const l=i[5].default,e=g(l,i,i[4],null);let o=[{type:i[0]},{class:a=v(b({inverted:i[2]},i[1]))+" svelte-heyyjz"},{href:i[3]}],r={};for(let t=0;t<o.length;t+=1)r=T(r,o[t]);return{c(){s=N(i[3]?"a":"button"),e&&e.c(),this.h()},l(t){s=j(t,((i[3]?"a":"button")||"null").toUpperCase(),{type:!0,class:!0,href:!0});var n=q(s);e&&e.l(n),n.forEach(_),this.h()},h(){h(i[3]?"a":"button")(s,r)},m(t,n){d(t,s,n),e&&e.m(s,null),u=!0},p(t,n){e&&e.p&&(!u||n&16)&&z(e,l,t,t[4],u?C(l,t[4],n,null):B(t[4]),null),h(t[3]?"a":"button")(s,r=U(o,[(!u||n&1)&&{type:t[0]},(!u||n&6&&a!==(a=v(b({inverted:t[2]},t[1]))+" svelte-heyyjz"))&&{class:a},(!u||n&8)&&{href:t[3]}]))},i(t){u||(y(e,t),u=!0)},o(t){p(e,t),u=!1},d(t){t&&_(s),e&&e.d(t)}}}function k(i){let s=i[3]?"a":"button",a,u,l=(i[3]?"a":"button")&&f(i);return{c(){l&&l.c(),a=m()},l(e){l&&l.l(e),a=m()},m(e,o){l&&l.m(e,o),d(e,a,o),u=!0},p(e,[o]){e[3],s?c(s,e[3]?"a":"button")?(l.d(1),l=f(e),s=e[3]?"a":"button",l.c(),l.m(a.parentNode,a)):l.p(e,o):(l=f(e),s=e[3]?"a":"button",l.c(),l.m(a.parentNode,a))},i(e){u||(y(l,e),u=!0)},o(e){p(l,e),u=!1},d(e){e&&_(a),l&&l.d(e)}}}function w(i,s,a){let{$$slots:u={},$$scope:l}=s,{buttonType:e="button"}=s,{class:o=""}=s,{invert:r=!1}=s,{href:t=void 0}=s;return i.$$set=n=>{"buttonType"in n&&a(0,e=n.buttonType),"class"in n&&a(1,o=n.class),"invert"in n&&a(2,r=n.invert),"href"in n&&a(3,t=n.href),"$$scope"in n&&a(4,l=n.$$scope)},[e,o,r,t,l,u]}class H extends S{constructor(s){super(),E(this,s,w,k,c,{buttonType:0,class:1,invert:2,href:3})}}export{H as B};