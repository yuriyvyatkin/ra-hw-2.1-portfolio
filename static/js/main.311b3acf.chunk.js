(this["webpackJsonpra-hw-2.1-portfolio"]=this["webpackJsonpra-hw-2.1-portfolio"]||[]).push([[0],{10:function(e,s,t){},13:function(e,s,t){"use strict";t.r(s);var c=t(1),r=t.n(c),n=t(3),a=t.n(n),i=(t(9),t(10),t(4)),o=[{img:"mon.jpg",category:"Business Cards"},{img:"200.jpg",category:"Websites"},{img:"emi_haze.jpg",category:"Websites"},{img:"codystretch.jpg",category:"Websites"},{img:"Triangle_003.jpg",category:"Business Cards"},{img:"place200x290.png",category:"Websites"},{img:"200.jpg",category:"Websites"},{img:"transmission.jpg",category:"Business Cards"},{img:"place200x290_1.png",category:"Websites"},{img:"place200x290_2.png",category:"Flayers"},{img:"the_ninetys_brand.jpg",category:"Websites"},{img:"dia.jpg",category:"Business Cards"},{img:"Triangle_350x197.jpg",category:"Websites"},{img:"emi_haze.jpg",category:"Websites"},{img:"transmission.jpg",category:"Business Cards"},{img:"Triangle_350x197_1.jpg",category:"Websites"},{img:"place200x290_3.png",category:"Flayers"}],l=t(0),g=t(12);function j(e){var s=e.filters,t=e.selected,c=e.onSelectFilter;return Object(l.jsx)("nav",{className:"nav",children:Object(l.jsx)("ul",{className:"nav-menu",children:s.map((function(e,s){var r=g({"nav-link":!0,active:e===t});return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#0",className:r,onClick:function(){return c(e)},children:e})},"".concat(s).concat(e))}))})})}function m(e){var s=e.src;return Object(l.jsx)("div",{className:"project",children:Object(l.jsx)("img",{src:s,alt:"#0"})})}function u(e){var s=e.projects,t=[],c=[],r=[];return s.forEach((function(e,s){s%3===0?t.push(e):s%3===1?c.push(e):s%3===2&&r.push(e)})),Object(l.jsxs)("div",{className:"gallery",children:[Object(l.jsx)("div",{className:"column",children:t.map((function(e,s){return Object(l.jsx)(m,{src:"/ra-hw-2.1-portfolio"+"/assets/images/".concat(e.img)},s)}))}),Object(l.jsx)("div",{className:"column",children:c.map((function(e,s){return Object(l.jsx)(m,{src:"/ra-hw-2.1-portfolio"+"/assets/images/".concat(e.img)},s)}))}),Object(l.jsx)("div",{className:"column",children:r.map((function(e,s){return Object(l.jsx)(m,{src:"/ra-hw-2.1-portfolio"+"/assets/images/".concat(e.img)},s)}))})]})}function p(){var e=Object(c.useState)("All"),s=Object(i.a)(e,2),t=s[0],r=s[1],n=o;return"All"!==t&&(n=o.filter((function(e){return e.category===t}))),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(j,{filters:["All","Websites","Flayers","Business Cards"],selected:t,onSelectFilter:function(e){return r(e)}})})}),Object(l.jsx)("div",{className:"body",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(u,{projects:n})})})]})}var d=function(){return Object(l.jsx)(p,{})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(s){var t=s.getCLS,c=s.getFID,r=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),r(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,s,t){}},[[13,1,2]]]);
//# sourceMappingURL=main.311b3acf.chunk.js.map