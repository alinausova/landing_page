(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),r=n.n(i),s=n(10),a=n.n(s),o=(n(16),n(17),n(7)),l=n(2),j=(n(18),{tension:1200,friction:40}),u={mass:10,tension:200,friction:40},d=function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0) translate3d(-50%,-50%,0)")};function b(){var t=Object(l.d)(3,(function(){return{xy:[0,0],config:function(t){return 0===t?j:u}}})),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(c.jsxs)("div",{className:"blob-background",children:[Object(c.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:Object(c.jsxs)("filter",{id:"goo",colorInterpolationFilters:"sRGB",filterRes:1200,children:[Object(c.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),Object(c.jsx)("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 9 -7"})]})}),Object(c.jsx)("div",{className:"hooks-main safari_only",onMouseMove:function(t){return i({xy:[t.clientX,t.clientY]})},children:n.map((function(t,e){return Object(c.jsx)(l.b.div,{style:{transform:t.xy.interpolate(d)}},e)}))})]})}var f=n(6),x=n(9);n(19);function h(t){var e=t.open,n=t.children,i=Object(x.a)(t,["open","children"]),s=r.a.Children.toArray(n),a=Object(l.d)(s.length,{config:{mass:5,tension:2e3,friction:200},opacity:e?1:0,x:e?0:20,height:e?80:0,from:{opacity:0,x:20,height:0}});return Object(c.jsx)("div",Object(f.a)(Object(f.a)({className:"trails-main"},i),{},{children:Object(c.jsx)("div",{children:a.map((function(t,e){var n=t.x,i=t.height,r=Object(x.a)(t,["x","height"]);return Object(c.jsx)(l.a.div,{className:"trails-text",style:Object(f.a)(Object(f.a)({},r),{},{transform:n.interpolate((function(t){return"translate3d(0,".concat(t,"px,0)")}))}),children:Object(c.jsx)(l.a.div,{style:{height:i},children:s[e]})},s[e])}))})}))}n(20);var O=function(t,e){return[-(e-window.innerHeight/2)/20,(t-window.innerWidth/2)/20,1.1]},p=function(t,e,n){return"perspective(600px) rotateX(".concat(t,"deg) rotateY(").concat(e,"deg) scale(").concat(n,")")};function v(){var t=Object(l.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(c.jsx)(l.b.div,{class:"card",onMouseMove:function(t){var e=t.clientX,n=t.clientY;return i({xys:O(e,n)})},onMouseLeave:function(){return i({xys:[0,0,1]})},style:{transform:n.xys.interpolate(p)}})}var g=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"first-box",children:[Object(c.jsx)(b,{}),Object(c.jsxs)(h,{open:!0,children:[Object(c.jsx)("span",{children:" A mobile and web developer "}),Object(c.jsx)("span",{children:" passionate about creating beautiful"}),Object(c.jsx)("span",{children:" user friendly applications"})]})]}),Object(c.jsxs)("div",{className:"card-box",children:[Object(c.jsx)(v,{}),Object(c.jsx)(v,{}),Object(c.jsx)(v,{})]})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.8359be5e.chunk.js.map