!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=()=>'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">\n            100tifi.co\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';var a=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';var i=()=>location.hash.slice(1).toLocateLowerCase().split("/")[1]||"/";var o=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const c={"/":()=>'\n    <div class="Characters">\n      <article class="Character-item">\n        <a href="#/1/">\n          <img src="image" alt="name">\n          <h2>Name</h2>\n        </a>\n      </article>\n    </div>\n  ',"/:id":()=>'\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="image" alt="name">\n        <h2>Name</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes:</h3>\n        <h3>Status:</h3>\n        <h3>Species:</h3>\n        <h3>Gender:</h3>\n        <h3>Origin:</h3>\n        <h3>Last Location:</h3>\n      </article>\n    </div>\n  ',"/contact":"Contact"};var s=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await r();let t=i(),s=await o(t),l=c[s]?c[s]:a;e.innerHTML=await l()};window.addEventListener("load",s),window.addEventListener("hashchange",s)}]);