import{s as _,m as h,e as d,c as p,b as y,f,I as c,o as u,i as v,u as w,r as S,v as z}from"./scheduler.Pd8dchTd.js";import{S as A,i as b,t as j,a as E}from"./index.ZpyY4ssA.js";import{g as N}from"./_commonjsHelpers.5-cIlDoe.js";var m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var n={}.hasOwnProperty;function r(){for(var t="",s=0;s<arguments.length;s++){var e=arguments[s];e&&(t=l(t,o(e)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var s="";for(var e in t)n.call(t,e)&&t[e]&&(s=l(s,e));return s}function l(t,s){return s?t?t+" "+s:t+s:t}a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(m);var O=m.exports;const g=N(O);function T(a){let n,r,o;const l=a[4].default,t=h(l,a,a[3],null);return{c(){n=d("h1"),t&&t.c(),this.h()},l(s){n=p(s,"H1",{class:!0});var e=y(n);t&&t.l(e),e.forEach(f),this.h()},h(){c(n,"class",r=u(a[0])+" svelte-yry5z4")},m(s,e){v(s,n,e),t&&t.m(n,null),o=!0},p(s,[e]){t&&t.p&&(!o||e&8)&&w(t,l,s,s[3],o?z(l,s[3],e,null):S(s[3]),null),(!o||e&1&&r!==(r=u(s[0])+" svelte-yry5z4"))&&c(n,"class",r)},i(s){o||(j(t,s),o=!0)},o(s){E(t,s),o=!1},d(s){s&&f(n),t&&t.d(s)}}}function q(a,n,r){let{$$slots:o={},$$scope:l}=n,{class:t=""}=n,{size:s="md"}=n,{noArrow:e=!1}=n;return a.$$set=i=>{"class"in i&&r(0,t=i.class),"size"in i&&r(1,s=i.size),"noArrow"in i&&r(2,e=i.noArrow),"$$scope"in i&&r(3,l=i.$$scope)},a.$$.update=()=>{a.$$.dirty&7&&r(0,t=g("header",s,t,{arrow:!e}))},[t,s,e,l,o]}class F extends A{constructor(n){super(),b(this,n,q,T,_,{class:0,size:1,noArrow:2})}}export{F as T,g as c};
