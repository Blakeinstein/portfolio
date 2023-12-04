import{H as U}from"./control.f5b05b5f.js";import{s as z,f as u,a as m,g as d,N as f,c as b,i,n as P,d as e,_ as D,h as G,a0 as J,j as R,k as W}from"./scheduler.d96b1147.js";import{S as E,i as A}from"./index.041c6ff6.js";function _t(B,a){return new U(B,a)}new TextEncoder;function $(B){let a,T="Inspiration",y,l,I=`I saw <a href="https://boop.okat.best/" rel="nofollow">Boop</a> by Ivan Mathy at <a href="https://www.producthunt.com/products/boop" rel="nofollow">Product Hunt back in 2020</a>. I loved the idea of a simple scratchpad
that could be used to run quick macros on text. I had been using online tools so much and I felt boop was exactly what I needed.
Having a handy tool to quickly base64 encode/decode, url encode/decode, json pretty print, etc. was a great idea.
I also wanted to build a project in Rust and this seemed like a good fit.`,g,n,j='A gist for an example script that I wrote to convert text to owo speak is available <a href="https://gist.github.com/Blakeinstein/27102d389f71d43fda7718ef67ebca17" rel="nofollow">here</a>.',x,r,F="Implementation",k,p,L=`The initial implementation used a Custom WebView using a custom fork of <a href="https://github.com/Boscop" rel="nofollow">Boscop</a>’s 2019 implementation
of <a href="https://github.com/Boscop/web-view" rel="nofollow">web-view</a> bindings for Rust (It has since been refactored to a much more cleaner state and
contains the features I implemented), which resolved a few issues with frameless windows like resizing and moving the window.`,_,h,C=`I intended the app to be inter-compatible with the original Boop app, which used scripts written in JS. This inspired me to use
a webview so that I could invoke JS scripts on the text. Initial implementation was using CodeMirror as the editor.`,c,s,H=`I later picked the project back up in 2021 and refactored the code to use <a href="https://tauri.studio/" rel="nofollow">Tauri</a> instead, and replaced
CodeMirror with AceEditor for a huge performance boost. I also added a few more features like customizing the stylesheet via
themes, and introduced the concept the editor being able to retain the pasted information.`,t,o,M="Fun Facts",w,S,q="<li>I learnt how to write Context Free Grammers to implement the syntax highlighting for the editor.</li> <li>I learnt WinRT the native windows runtime to implement the inital version.</li> <li>I learnt how to dynamically import JS script files that export variables.</li>";return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.innerHTML=I,g=m(),n=u("p"),n.innerHTML=j,x=m(),r=u("h2"),r.textContent=F,k=m(),p=u("p"),p.innerHTML=L,_=m(),h=u("p"),h.textContent=C,c=m(),s=u("p"),s.innerHTML=H,t=m(),o=u("h2"),o.textContent=M,w=m(),S=u("ul"),S.innerHTML=q},l(v){a=d(v,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-wdx45u"&&(a.textContent=T),y=b(v),l=d(v,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-ktlkcx"&&(l.innerHTML=I),g=b(v),n=d(v,"P",{["data-svelte-h"]:!0}),f(n)!=="svelte-10h34lk"&&(n.innerHTML=j),x=b(v),r=d(v,"H2",{["data-svelte-h"]:!0}),f(r)!=="svelte-1y7y6hs"&&(r.textContent=F),k=b(v),p=d(v,"P",{["data-svelte-h"]:!0}),f(p)!=="svelte-1mgp73h"&&(p.innerHTML=L),_=b(v),h=d(v,"P",{["data-svelte-h"]:!0}),f(h)!=="svelte-1j1qu85"&&(h.textContent=C),c=b(v),s=d(v,"P",{["data-svelte-h"]:!0}),f(s)!=="svelte-147pncy"&&(s.innerHTML=H),t=b(v),o=d(v,"H2",{["data-svelte-h"]:!0}),f(o)!=="svelte-1anz3rk"&&(o.textContent=M),w=b(v),S=d(v,"UL",{["data-svelte-h"]:!0}),f(S)!=="svelte-1e6d88r"&&(S.innerHTML=q)},m(v,O){i(v,a,O),i(v,y,O),i(v,l,O),i(v,g,O),i(v,n,O),i(v,x,O),i(v,r,O),i(v,k,O),i(v,p,O),i(v,_,O),i(v,h,O),i(v,c,O),i(v,s,O),i(v,t,O),i(v,o,O),i(v,w,O),i(v,S,O)},p:P,i:P,o:P,d(v){v&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h),e(c),e(s),e(t),e(o),e(w),e(S))}}}const K={name:"Bloop",year:2020,description:"A cross-platform simple hackable scratchpad built with Rust and Tauri.",thumbnail:"/mockups/bloop.avif",techs:["svelte","typescript","tauri","sass"],col:2,row:3,links:[{icon:"entypo-social:github",href:"https://github.com/Blakeinstein/Bloop",type:"Github"}],images:[{link:"/gallery/bloop/demo.avif",desc:"Bloop on windows."},{link:"/gallery/bloop/demo-mac.avif",desc:"Bloop on macos."},{link:"/gallery/bloop/owoifier.avif",desc:"An example Bloop Script."}]};class N extends E{constructor(a){super(),A(this,a,null,$,z,{})}}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:N,metadata:K},Symbol.toStringTag,{value:"Module"}));function V(B){let a,T="Inspiration",y,l,I=`The final project of SER502 during my Masters at ASU was to build our own programming language.
I had recently found out about <a href="https://bhailang.js.org/" rel="nofollow">BhaiLang</a>, a toy programming language
and decided to build a similar language.`,g,n,j="Implementation",x,r,F=`The language was implemented using Antlr4 and Python. The language consists of a begin and end block,
variables are declared in a similar style as JavaScript but are strongly typed like python. It consists
of only two types, <code>float</code> and <code>string</code>. It supports both traditional style of loops <code>for</code> and <code>while</code>, and
the <code>for</code> loop also supports the <code>in</code> keyword to iterate over a range of numbers. It supports printing multiple strings
and variables with a single keyword. An example code in BroLang looks like this:`,k,p,L,_=`<code class="language-brolang">dawg
  say <span class="token string">"Hello World"</span>;
 
  my g a <span class="token operator">=</span> <span class="token number">3</span>;
  my g b <span class="token operator">=</span> <span class="token number">0</span>;

  let him <span class="token function">cook</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    say b;

    <span class="token function">yolo</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> a<span class="token punctuation">)</span> pls <span class="token punctuation">&#123;</span>
      say <span class="token string">"b is equal to a"</span>;
    <span class="token punctuation">&#125;</span> sus <span class="token punctuation">&#123;</span>
      say <span class="token string">"b is not equal to a"</span>;
    <span class="token punctuation">&#125;</span>

    b <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">1</span>;
  <span class="token punctuation">&#125;</span>

gg</code>`,h,C,c="Fun Facts",s,H,t='<li>I single handedly built the language and the interpreter for it.</li> <li>The language was built in a span of 2 weeks.</li> <li>The lexer for the language was heavily inspired by the <a href="https://github.com/antlr/grammars-v4/blob/master/c/C.g4" rel="nofollow">C example</a> for Antlr4.</li>';return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.innerHTML=I,g=m(),n=u("h2"),n.textContent=j,x=m(),r=u("p"),r.innerHTML=F,k=m(),p=u("pre"),L=new D(!1),h=m(),C=u("h2"),C.textContent=c,s=m(),H=u("ul"),H.innerHTML=t,this.h()},l(o){a=d(o,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-wdx45u"&&(a.textContent=T),y=b(o),l=d(o,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-1l78bqo"&&(l.innerHTML=I),g=b(o),n=d(o,"H2",{["data-svelte-h"]:!0}),f(n)!=="svelte-1y7y6hs"&&(n.textContent=j),x=b(o),r=d(o,"P",{["data-svelte-h"]:!0}),f(r)!=="svelte-176aww7"&&(r.innerHTML=F),k=b(o),p=d(o,"PRE",{class:!0});var M=G(p);L=J(M,!1),M.forEach(e),h=b(o),C=d(o,"H2",{["data-svelte-h"]:!0}),f(C)!=="svelte-1anz3rk"&&(C.textContent=c),s=b(o),H=d(o,"UL",{["data-svelte-h"]:!0}),f(H)!=="svelte-1i8whd7"&&(H.innerHTML=t),this.h()},h(){L.a=null,R(p,"class","language-brolang")},m(o,M){i(o,a,M),i(o,y,M),i(o,l,M),i(o,g,M),i(o,n,M),i(o,x,M),i(o,r,M),i(o,k,M),i(o,p,M),L.m(_,p),i(o,h,M),i(o,C,M),i(o,s,M),i(o,H,M)},p:P,i:P,o:P,d(o){o&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(h),e(C),e(s),e(H))}}}const Z={name:"BroLang",year:2023,description:"A toy programming language built as a part of a submission for SER 502 (Programming Paradigms) at ASU.",thumbnail:"/mockups/bro-lang.avif",techs:["python","antlr4"],col:4,row:3,links:[{icon:"entypo-social:github",href:"https://github.com/Blakeinstein/BroLang",type:"Github"}],images:[{link:"/gallery/broLang/Declaration.avif",desc:"Declaration"},{link:"/gallery/broLang/Expression.avif",desc:"Expression"},{link:"/gallery/broLang/Loops.avif",desc:"Traditional Loops"},{link:"/gallery/broLang/ForLoops.avif",desc:"For Loops"},{link:"/gallery/broLang/Basic.avif",desc:"Basic"}]};class Y extends E{constructor(a){super(),A(this,a,null,V,z,{})}}const X=Object.freeze(Object.defineProperty({__proto__:null,default:Y,metadata:Z},Symbol.toStringTag,{value:"Module"}));function tt(B){let a,T="Background and Reasoning",y,l,I=`Chemical PFD was the project I pursued during my fellowship at IIT Bombay, under their FOSSEE initiative.
The project was to build a simple chemical process flow diagram tool to enable Chemical Engineering labs primarly at IIT
Bombay to construct PFDs for their experiments. The future scope of the tool included the ability to simulate the PFDs
and determine various chemical process metrics.`,g,n,j="Implementation",x,r,F=`The project initially started with a pre-lim requirement to build a <a href="https://github.com/Blakeinstein/Circle-Network" rel="nofollow">simple tool to draw a network of circles</a>
to demonstrate proficiency in PyQT.
Like the pre-lim project, Chemical PFD was built using PyQt5 and Python. It also uses <a href="https://build-system.fman.io/" rel="nofollow">FMan’s Build System (FBS)</a> to enable
faster iterations with a more robust build process. I worked in a team of 2 in a Pair Programming process, with me focusing on the GUI elements and my teammate
focusing on the diagram engine. The project was built in a span of 2 months.`,k,p,L="About FOSSEE",_,h,C=`<a href="https://fossee.in" rel="nofollow">FOSSEE</a> (Free/Libre and Open Source Software for Education) project promotes the use of FLOSS tools to improve the quality of education in our country. We aim to reduce dependency on proprietary software in educational institutions. We encourage the use of FLOSS tools through various activities to ensure commercial software is replaced by equivalent FLOSS tools. We also develop new FLOSS tools and upgrade existing tools to meet requirements in academia and research.
The FOSSEE project is part of the National Mission on Education through Information and Communication Technology (ICT), Ministry of Education (MoE), Government of India.`,c,s,H="Fun Facts",t,o,M="<li>Was coined the best software on the FOSSEE 2020 presentation panel.</li> <li>The questions I wrote on StackOverflow while learning PyQt5 and FBS are my biggest contributors to my StackOverflow score.</li> <li>This was my first professional experience, and it was paid 🎉.</li>";return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.textContent=I,g=m(),n=u("h2"),n.textContent=j,x=m(),r=u("p"),r.innerHTML=F,k=m(),p=u("h2"),p.textContent=L,_=m(),h=u("p"),h.innerHTML=C,c=m(),s=u("h2"),s.textContent=H,t=m(),o=u("ul"),o.innerHTML=M},l(w){a=d(w,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-gzznsv"&&(a.textContent=T),y=b(w),l=d(w,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-pky0s0"&&(l.textContent=I),g=b(w),n=d(w,"H2",{["data-svelte-h"]:!0}),f(n)!=="svelte-1y7y6hs"&&(n.textContent=j),x=b(w),r=d(w,"P",{["data-svelte-h"]:!0}),f(r)!=="svelte-1exi7x8"&&(r.innerHTML=F),k=b(w),p=d(w,"H2",{["data-svelte-h"]:!0}),f(p)!=="svelte-a7lr1u"&&(p.textContent=L),_=b(w),h=d(w,"P",{["data-svelte-h"]:!0}),f(h)!=="svelte-odycjk"&&(h.innerHTML=C),c=b(w),s=d(w,"H2",{["data-svelte-h"]:!0}),f(s)!=="svelte-1anz3rk"&&(s.textContent=H),t=b(w),o=d(w,"UL",{["data-svelte-h"]:!0}),f(o)!=="svelte-19mur4c"&&(o.innerHTML=M)},m(w,S){i(w,a,S),i(w,y,S),i(w,l,S),i(w,g,S),i(w,n,S),i(w,x,S),i(w,r,S),i(w,k,S),i(w,p,S),i(w,_,S),i(w,h,S),i(w,c,S),i(w,s,S),i(w,t,S),i(w,o,S)},p:P,i:P,o:P,d(w){w&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h),e(c),e(s),e(t),e(o))}}}const et={name:"Chemical-PFD",year:2020,description:"Part of my fellowship at Indian Institute of Technology, Bombay. A simple chemical process flow diagram builder built with PyQt5.",thumbnail:"/mockups/chemical-pfd.avif",techs:["python","pyqt5"],col:3,row:1,links:[{icon:"entypo-social:github",href:"https://github.com/FOSSEE/Chemical-PFD",type:"Github"},{icon:"ri:file-pdf-2-line",href:"https://static.fossee.in/fossee/fellowship2020/Fellowship-Reports/Python/Python-Chemical/Python-Chemical-RishikeshAnand-FSF-2020.pdf",type:"Report"}],layout:!1,images:[{link:"/gallery/chemical-pfd/pfd-windows.avif",desc:"Checmical PFD on windows."},{link:"/gallery/chemical-pfd/pfd-mac.avif",desc:"Checmical PFD on mac."},{link:"/gallery/chemical-pfd/fossee.avif",desc:"FOSSEE Group at IIT Bombay."}]};class it extends E{constructor(a){super(),A(this,a,null,tt,z,{})}}const ot=Object.freeze(Object.defineProperty({__proto__:null,default:it,metadata:et},Symbol.toStringTag,{value:"Module"}));function at(B){let a,T="Inspiration",y,l,I=`While working on <a href="/projects/bloop">Bloop</a>, I found out about <a href="https://github.com/krisk/fuse" rel="nofollow">FuseJS</a> and
subsequently <a href="https://github.com/krisk/fuse-swift" rel="nofollow">fuse-swift</a> both built by <a href="https://github.com/krisk" rel="nofollow">krisk</a>.
I realized that there was no such library for the rust ecosystem and decided to build a similar one; feeling that
it could suplement the use case for Rust in building desktop/native applications.`,g,n,j="Implementation",x,r,F=`Fuse-Rust is built using the <a href="https://en.wikipedia.org/wiki/Bitap_algorithm" rel="nofollow">bitap</a> algorithm for calculating text
similarity. It also contains an opt-in multi-threaded implementation using <a href="https://github.com/crossbeam-rs/crossbeam" rel="nofollow">crossbeam</a>.`,k,p,L=`Additionally I included an actual <a href="https://github.com/Blakeinstein/fuse-rust/tree/master/examples/search-bar" rel="nofollow">GUI example</a> using
<a href="https://github.com/iced-rs/iced" rel="nofollow">iced-rs</a>.`,_,h,C="Fun Facts",c,s,H="<li>I learnt about multibyte characters for the first time here.</li> <li>I learnt about the concept of graphemes in swift programming language.</li> <li>I learnt about the bitap algorithm and how it can be used to calculate text similarity.</li>";return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.innerHTML=I,g=m(),n=u("h2"),n.textContent=j,x=m(),r=u("p"),r.innerHTML=F,k=m(),p=u("p"),p.innerHTML=L,_=m(),h=u("h2"),h.textContent=C,c=m(),s=u("ul"),s.innerHTML=H},l(t){a=d(t,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-wdx45u"&&(a.textContent=T),y=b(t),l=d(t,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-1b3k6rr"&&(l.innerHTML=I),g=b(t),n=d(t,"H2",{["data-svelte-h"]:!0}),f(n)!=="svelte-1y7y6hs"&&(n.textContent=j),x=b(t),r=d(t,"P",{["data-svelte-h"]:!0}),f(r)!=="svelte-r6l5c1"&&(r.innerHTML=F),k=b(t),p=d(t,"P",{["data-svelte-h"]:!0}),f(p)!=="svelte-h9xsfq"&&(p.innerHTML=L),_=b(t),h=d(t,"H2",{["data-svelte-h"]:!0}),f(h)!=="svelte-1anz3rk"&&(h.textContent=C),c=b(t),s=d(t,"UL",{["data-svelte-h"]:!0}),f(s)!=="svelte-17yphbl"&&(s.innerHTML=H)},m(t,o){i(t,a,o),i(t,y,o),i(t,l,o),i(t,g,o),i(t,n,o),i(t,x,o),i(t,r,o),i(t,k,o),i(t,p,o),i(t,_,o),i(t,h,o),i(t,c,o),i(t,s,o)},p:P,i:P,o:P,d(t){t&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h),e(c),e(s))}}}const lt={name:"Fuse-Rust",year:2021,description:"A fuzzy search library for the rust ecosystem, ideal for building friendly search bars.",thumbnail:"/mockups/fuse-rust.avif",techs:["rust"],col:4,row:1,links:[{icon:"entypo-social:github",href:"https://github.com/Blakeinstein/fuse-rust",type:"Github"},{icon:"vscode-icons:file-type-cargo",href:"https://crates.io/crates/fuse-rust",type:"Crates.io"},{icon:"fluent-mdl2:documentation",href:"https://docs.rs/fuse-rust/0.3.2/fuse_rust/",type:"Docs"}]};class nt extends E{constructor(a){super(),A(this,a,null,at,z,{})}}const st=Object.freeze(Object.defineProperty({__proto__:null,default:nt,metadata:lt},Symbol.toStringTag,{value:"Module"}));function rt(B){let a,T="Inspiration and Design",y,l,I=`Learning from the mistakes I made in my <a href="/projects/old-portfolio">old-portfolio</a>, I started working on a new one.
I had the opportunity to talk to alot of students in the UX department at Arizona State University and I also wanted
to resolve the deep rooted navigational challenges. Even worse fireship had made a video on <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU" rel="nofollow">how to render a moon using ThreeJS</a>.
Which meant that my portfolio design was not unique anymore.`,g,n,j=`Starfield came out around the time I was working on the portfolio and as such the site went through a complete overhaul.
I dropped the idea of including a 3d scene, and instead switched focus to working on the one you see.
Heck I even made Rain postprocess filter for ThreeJS based on shaders written by <a href="https://tympanus.net/codrops/2015/11/04/rain-water-effect-experiments/" rel="nofollow">Lucas Bebber in their article on CoDrops</a>.
I wish I can find a use case for it some other time.`,x,r,F="Implementation",k,p,L=`I dropped Astro, even though its great I really wanted to implement simple page navigations. I switched to SvelteKit, although
in hindsight since I picked up the <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API" rel="nofollow">new transitions api for page transitions</a>,
I doubt the switch gave me actual benefits apart from some small cases of site interactivity. Maybe I might migrate to Astro again in the future.
Learning Svelte and SvelteKit was a breeze, and I really enjoyed working with it (Thanks <a href="https://joyofcode.xyz/" rel="nofollow">JoyOfCode</a>!). I also used TailwindCSS
for styling, moving away from much of the custom styles on my old website.`,_,h,C="Fun Facts",c,s,H='<li>Most of the images on the site were made when the work on the page was finished (even after I wrote this line, fingers crossed).</li> <li>I used placeholder images from <a href="https://http.dog" rel="nofollow">http.dog</a> for the thumbnails, particularly the <a href="https://http.dog/204.avif" rel="nofollow">204 image</a>.</li> <li>The backdrop went through several iterations, and at one time featured a noise texture similar to the one used in <a href="https://arc.net/" rel="nofollow">Arc.net</a>.</li>';return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.innerHTML=I,g=m(),n=u("p"),n.innerHTML=j,x=m(),r=u("h2"),r.textContent=F,k=m(),p=u("p"),p.innerHTML=L,_=m(),h=u("h2"),h.textContent=C,c=m(),s=u("ul"),s.innerHTML=H},l(t){a=d(t,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-1vlasiz"&&(a.textContent=T),y=b(t),l=d(t,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-7cqijb"&&(l.innerHTML=I),g=b(t),n=d(t,"P",{["data-svelte-h"]:!0}),f(n)!=="svelte-yufbn2"&&(n.innerHTML=j),x=b(t),r=d(t,"H2",{["data-svelte-h"]:!0}),f(r)!=="svelte-1y7y6hs"&&(r.textContent=F),k=b(t),p=d(t,"P",{["data-svelte-h"]:!0}),f(p)!=="svelte-hnpqz2"&&(p.innerHTML=L),_=b(t),h=d(t,"H2",{["data-svelte-h"]:!0}),f(h)!=="svelte-1anz3rk"&&(h.textContent=C),c=b(t),s=d(t,"UL",{["data-svelte-h"]:!0}),f(s)!=="svelte-1o1h4sf"&&(s.innerHTML=H)},m(t,o){i(t,a,o),i(t,y,o),i(t,l,o),i(t,g,o),i(t,n,o),i(t,x,o),i(t,r,o),i(t,k,o),i(t,p,o),i(t,_,o),i(t,h,o),i(t,c,o),i(t,s,o)},p:P,i:P,o:P,d(t){t&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h),e(c),e(s))}}}const pt={name:"New portfolio",year:2023,description:"You are here! Built with SvelteKit, TailwindCSS, and TypeScript.",longDescription:"You are here! Built with SvelteKit, TailwindCSS, and TypeScript.",thumbnail:"https://http.dog/204.avif",techs:["sveltekit","typescript","tailwindcss"],col:1,row:2,links:[{icon:"entypo-social:github",href:"https://github.com/Blakeinstein/portfolio",type:"Github"},{icon:"mdi:web",href:"https://blaine.is-a.dev",type:"Webpage"}]};class ct extends E{constructor(a){super(),A(this,a,null,rt,z,{})}}const ht=Object.freeze(Object.defineProperty({__proto__:null,default:ct,metadata:pt},Symbol.toStringTag,{value:"Module"}));function ut(B){let a,T="Design Ideas",y,l,I=`The design of the website was inspired by the album art for the track ”<a href="https://www.last.fm/music/Krosia/_/Light+Mind" rel="nofollow">Light Mind</a>”
by <a href="https://www.last.fm/music/Krosia" rel="nofollow">Krosia</a>. I deeply adore the vastness of outer space, and spacewave has been my
goto genre to achieve that state of mind. I found Krosia from his song <a href="https://www.last.fm/music/Krosia/Sunlight" rel="nofollow">Sunlight</a>,
but the album art for Light Mind was what lived in my head rent free.`,g,n,j='<picture><img src="https://i1.sndcdn.com/artworks-000453095226-okvlkl-t500x500.jpg" width="400" alt="Light Mind album art"/></picture>',x,r,F="Implementation",k,p,L=`I originally built the website with just Typescript, ThreeJS and html, with <a href="https://github.com/krasimir/navigo" rel="nofollow">Navigo</a> used for routing and lit element for constructing page contents.
I later migrated to <a href="https://astro.build/" rel="nofollow">Astro</a> for the sake of SEO and performance. I additionally used <a href="https://swup.js.org/" rel="nofollow">SwupJS</a> to implement seamless page transitions due to the fact that I had
a 3d scene used for the background. I am extremely proud of the micro-interactions I implemented, like the <a href="https://old.blaine.vip/socials/" rel="nofollow">gooey effect on the social links</a>, and the
contact form error messages. I also used blobity to implement the blob like cursor on desktop views. The website is hosted on Github Pages,
and the source code is available on Github.`,_,h,C="Fun Facts",c,s,H='<li>It took me ages to settle on a design for the website. But once I found the album art for Light Mind, I knew I had to use it.</li> <li>The overall website was built in a single day.</li> <li>I never bothered to update the content of the website, the info was outdated the day I made it publically available.</li> <li>I was able to obtain a free <a href="https://www.is-a.dev/" rel="nofollow"><code>is-a.dev</code></a> domain under my name, which I used for the website.</li>';return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.innerHTML=I,g=m(),n=u("a"),n.innerHTML=j,x=m(),r=u("h2"),r.textContent=F,k=m(),p=u("p"),p.innerHTML=L,_=m(),h=u("h2"),h.textContent=C,c=m(),s=u("ul"),s.innerHTML=H,this.h()},l(t){a=d(t,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-xxwtas"&&(a.textContent=T),y=b(t),l=d(t,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-1jmglh4"&&(l.innerHTML=I),g=b(t),n=d(t,"A",{href:!0,style:!0,["data-svelte-h"]:!0}),f(n)!=="svelte-1ygvoe0"&&(n.innerHTML=j),x=b(t),r=d(t,"H2",{["data-svelte-h"]:!0}),f(r)!=="svelte-1y7y6hs"&&(r.textContent=F),k=b(t),p=d(t,"P",{["data-svelte-h"]:!0}),f(p)!=="svelte-1k0q4ni"&&(p.innerHTML=L),_=b(t),h=d(t,"H2",{["data-svelte-h"]:!0}),f(h)!=="svelte-1anz3rk"&&(h.textContent=C),c=b(t),s=d(t,"UL",{["data-svelte-h"]:!0}),f(s)!=="svelte-18i5xmd"&&(s.innerHTML=H),this.h()},h(){R(n,"href","https://www.last.fm/music/Krosia/_/Light+Mind"),W(n,"float","right")},m(t,o){i(t,a,o),i(t,y,o),i(t,l,o),i(t,g,o),i(t,n,o),i(t,x,o),i(t,r,o),i(t,k,o),i(t,p,o),i(t,_,o),i(t,h,o),i(t,c,o),i(t,s,o)},p:P,i:P,o:P,d(t){t&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h),e(c),e(s))}}}const dt={name:"Old Portfolio",year:2019,description:"Originally built in Vanilla + LitElement, this was my first portfolio website. It was later rebuilt with Astro",thumbnail:"/gallery/oldPortfolio/Home.avif",techs:["typescript","lit-element","html","astro","sass","three"],col:1,row:1,links:[{icon:"entypo-social:github",href:"https://github.com/Blakeinstein/old-portfolio/",type:"Github"},{icon:"mdi:web",href:"https://old.blaine.vip",type:"Webpage"}],images:[{link:"/gallery/oldPortfolio/Home.avif",desc:"Home page"},{link:"/gallery/oldPortfolio/About.avif",desc:"About page"},{link:"/gallery/oldPortfolio/Social.avif",desc:"Socials page"},{link:"/gallery/oldPortfolio/Contact.avif",desc:"Contact page"},{link:"/gallery/oldPortfolio/Projects.avif",desc:"Projects page"}]};class ft extends E{constructor(a){super(),A(this,a,null,ut,z,{})}}const mt=Object.freeze(Object.defineProperty({__proto__:null,default:ft,metadata:dt},Symbol.toStringTag,{value:"Module"}));function bt(B){let a,T="Inspiration",y,l,I=`I came to the US for my Master’s degree and quickly realized that the fluctuating conversion rates / remittance cost for INR to
USD is a big problem for students like me. I wanted to build a simple tool that would help me track the conversion rates across multiple
proivders and have it maintain a history to help me make better decisions.`,g,n,j="Implementation",x,r,F=`A simple remittance tracker built with the frontend built with NextJS and <a href="https://daisyui.com/" rel="nofollow">DaisyUI</a> with the data spider built
using Python and Scrapy. The frontend caches requests for 1 hour to avoid having to hit my server too often.
The data spider is hosted on <a href="https://www.zyte.com/" rel="nofollow">Zyte</a> (formerly ScrapingHub) and runs every hour to update the data.`,k,p,L="Fun Facts",_,h,C='<li>I never came up with a LOGO for the project, I just ended up using the first svg result with RT.</li> <li>I tried a bunch of charting library but ended up using <a href="https://www.chartjs.org/" rel="nofollow">Chart.js</a>.</li> <li>I used <a href="https://moment.github.io/luxon/#/" rel="nofollow">luxon</a> for parsing timestamps.</li>';return{c(){a=u("h2"),a.textContent=T,y=m(),l=u("p"),l.textContent=I,g=m(),n=u("h2"),n.textContent=j,x=m(),r=u("p"),r.innerHTML=F,k=m(),p=u("h2"),p.textContent=L,_=m(),h=u("ul"),h.innerHTML=C},l(c){a=d(c,"H2",{["data-svelte-h"]:!0}),f(a)!=="svelte-wdx45u"&&(a.textContent=T),y=b(c),l=d(c,"P",{["data-svelte-h"]:!0}),f(l)!=="svelte-l7es8z"&&(l.textContent=I),g=b(c),n=d(c,"H2",{["data-svelte-h"]:!0}),f(n)!=="svelte-1y7y6hs"&&(n.textContent=j),x=b(c),r=d(c,"P",{["data-svelte-h"]:!0}),f(r)!=="svelte-1xnpjch"&&(r.innerHTML=F),k=b(c),p=d(c,"H2",{["data-svelte-h"]:!0}),f(p)!=="svelte-1anz3rk"&&(p.textContent=L),_=b(c),h=d(c,"UL",{["data-svelte-h"]:!0}),f(h)!=="svelte-1x3tiwt"&&(h.innerHTML=C)},m(c,s){i(c,a,s),i(c,y,s),i(c,l,s),i(c,g,s),i(c,n,s),i(c,x,s),i(c,r,s),i(c,k,s),i(c,p,s),i(c,_,s),i(c,h,s)},p:P,i:P,o:P,d(c){c&&(e(a),e(y),e(l),e(g),e(n),e(x),e(r),e(k),e(p),e(_),e(h))}}}const wt={name:"Remit-Tracker",year:2022,description:"A simple remittance tracker built with the frontend built with NextJS and DaisyUI and the data spider built with Python and Scrapy.",thumbnail:"/mockups/remit-tracker.avif",techs:["nextjs","tailwindcss","python","zyte"],col:3,row:2,links:[{icon:"entypo-social:github",href:"https://remit.blaine.vip/",type:"Github"},{icon:"mdi:web",href:"https://remit.blaine.vip",type:"Webpage"}],images:[{link:"/gallery/remit-tracker/zyte.avif",desc:"Zyte Dashboard"},{link:"/gallery/remit-tracker/zyte-usage.avif",desc:"Zyte Usage"}]};class yt extends E{constructor(a){super(),A(this,a,null,bt,z,{})}}const vt=Object.freeze(Object.defineProperty({__proto__:null,default:yt,metadata:wt},Symbol.toStringTag,{value:"Module"})),Ct={svelte:{name:"Svelte",icon:"simple-icons:svelte",color:"#ff3e00"},sveltekit:{name:"SvelteKit",icon:"simple-icons:svelte",color:"#ff3e00"},typescript:{name:"TypeScript",icon:"simple-icons:typescript",color:"#007acc"},python:{name:"Python",icon:"simple-icons:python",color:"#3776ab"},rust:{name:"Rust",icon:"simple-icons:rust",color:"#000000"},nextjs:{name:"NextJS",icon:"teenyicons:nextjs-outline",color:"#000000"},tauri:{name:"Tauri",icon:"simple-icons:tauri",color:"#000000"},pyqt5:{name:"PyQt5",icon:"simple-icons:qt",color:"#41cd52"},scrapy:{name:"Scrapy",icon:"simple-icons:scrapy",color:"#000000"},"lit-element":{name:"LitElement",icon:"simple-icons:lit",color:"#000000"},html:{name:"HTML",icon:"simple-icons:html5",color:"#e34f26"},tailwindcss:{name:"TailwindCSS",icon:"simple-icons:tailwindcss",color:"#06b6d4"},antlr4:{name:"ANTLR4",icon:"file-icons:antlr",color:"#e44a32"},sass:{name:"Sass",icon:"simple-icons:sass",color:"#cc6699"},astro:{name:"Astro",icon:"simple-icons:astro",color:"#000000"},three:{name:"ThreeJS",icon:"logos:threejs",color:"#000000"},zyte:{name:"Zyte",icon:"simple-icons:zyte",color:"#b02cce"}},Tt=async()=>{var T;const B=[],a=Object.assign({"/src/lib/data/projects/bloop.svx":Q,"/src/lib/data/projects/bro-lang.svx":X,"/src/lib/data/projects/chemical-pfd.svx":ot,"/src/lib/data/projects/fuse-rust.svx":st,"/src/lib/data/projects/new-portfolio.svx":ht,"/src/lib/data/projects/old-portfolio.svx":mt,"/src/lib/data/projects/remit-tracker.svx":vt});for(const y in a){const l=a[y],I=(T=y.split("/").at(-1))==null?void 0:T.replace(".svx","");if(l&&typeof l=="object"&&"metadata"in l&&I){const n={...l.metadata,slug:I};B.push(n)}}return B};export{Ct as T,Q as _,X as a,ot as b,st as c,ht as d,_t as e,mt as f,Tt as g,vt as h};