import{s as v,e as m,i as b,d as r,P as g,Q as d,W as y,f as T,g as B,h as S,a5 as h,R as C,S as N,T as q}from"./scheduler.d96b1147.js";import{S as E,i as P,a as c,t as p}from"./index.041c6ff6.js";import{g as Q}from"./spread.8a54911c.js";function f(a){let s,n,o;const l=a[4].default,e=g(l,a,a[3],null);let u=[{type:a[0]},{class:n=d(a[1])+" svelte-199g95d"},{href:a[2]}],i={};for(let t=0;t<u.length;t+=1)i=y(i,u[t]);return{c(){s=T(a[2]?"a":"button"),e&&e.c(),this.h()},l(t){s=B(t,((a[2]?"a":"button")||"null").toUpperCase(),{type:!0,class:!0,href:!0});var _=S(s);e&&e.l(_),_.forEach(r),this.h()},h(){h(a[2]?"a":"button")(s,i)},m(t,_){b(t,s,_),e&&e.m(s,null),o=!0},p(t,_){e&&e.p&&(!o||_&8)&&C(e,l,t,t[3],o?q(l,t[3],_,null):N(t[3]),null),h(t[2]?"a":"button")(s,i=Q(u,[(!o||_&1)&&{type:t[0]},(!o||_&2&&n!==(n=d(t[1])+" svelte-199g95d"))&&{class:n},(!o||_&4)&&{href:t[2]}]))},i(t){o||(c(e,t),o=!0)},o(t){p(e,t),o=!1},d(t){t&&r(s),e&&e.d(t)}}}function R(a){let s=a[2]?"a":"button",n,o,l=(a[2]?"a":"button")&&f(a);return{c(){l&&l.c(),n=m()},l(e){l&&l.l(e),n=m()},m(e,u){l&&l.m(e,u),b(e,n,u),o=!0},p(e,[u]){e[2],s?v(s,e[2]?"a":"button")?(l.d(1),l=f(e),s=e[2]?"a":"button",l.c(),l.m(n.parentNode,n)):l.p(e,u):(l=f(e),s=e[2]?"a":"button",l.c(),l.m(n.parentNode,n))},i(e){o||(c(l,e),o=!0)},o(e){p(l,e),o=!1},d(e){e&&r(n),l&&l.d(e)}}}function U(a,s,n){let{$$slots:o={},$$scope:l}=s,{buttonType:e="button"}=s,{class:u=""}=s,{href:i=void 0}=s;return a.$$set=t=>{"buttonType"in t&&n(0,e=t.buttonType),"class"in t&&n(1,u=t.class),"href"in t&&n(2,i=t.href),"$$scope"in t&&n(3,l=t.$$scope)},[e,u,i,l,o]}class w extends E{constructor(s){super(),P(this,s,U,R,v,{buttonType:0,class:1,href:2})}}export{w as B};
