(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(11),r=c.n(a),l=(c(17),c(18),c(3)),o=c(2),d=(c(10),{tension:1200,friction:40}),j={mass:10,tension:200,friction:40},b=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) translate3d(-50%,-50%,0)")};function x(){var e=Object(o.d)(3,(function(){return{xy:[.75*window.innerWidth,.35*window.innerHeight],config:function(e){return 0===e?d:j}}})),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{className:"blob-background",children:[Object(n.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:Object(n.jsxs)("filter",{id:"goo",colorInterpolationFilters:"sRGB",filterRes:1200,children:[Object(n.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),Object(n.jsx)("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 9 -7"})]})}),Object(n.jsx)("div",{className:"hooks-main safari_only",onMouseMove:function(e){return s({xy:[e.clientX,e.clientY]})},children:c.map((function(e,t){return Object(n.jsx)(o.b.div,{style:{transform:e.xy.interpolate(b)}},t)}))})]})}var p=c(7),h=c(9);c(19);function O(e){var t=e.open,c=e.lineHeight,s=e.children,a=Object(h.a)(e,["open","lineHeight","children"]),r=i.a.Children.toArray(s),l=Object(o.d)(r.length,{config:{mass:5,tension:1e3,friction:200},opacity:t?1:0,x:t?0:20,height:t?c:0,from:{opacity:0,x:20,height:0}});return Object(n.jsx)("div",Object(p.a)(Object(p.a)({className:"trails-main"},a),{},{children:Object(n.jsx)("div",{children:l.map((function(e,t){var c=e.x,s=e.height,i=Object(h.a)(e,["x","height"]);return Object(n.jsx)(o.a.div,{className:"trails-text",style:Object(p.a)(Object(p.a)({},i),{},{transform:c.interpolate((function(e){return"translate3d(0,".concat(e,"px,0)")}))}),children:Object(n.jsx)(o.a.div,{style:{height:s},children:r[t]})},r[t])}))})}))}c(20);var m=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},u=function(e,t,c){return" scale(".concat(c,")")};function g(e){var t=e.children,c=i.a.Children.toArray(t),s=Object(o.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(l.a)(s,2),r=a[0],d=a[1];return Object(n.jsx)(o.b.div,{class:"card",onMouseMove:function(e){var t=e.clientX,c=e.clientY;return d({xys:m(t,c)})},onMouseLeave:function(){return d({xys:[0,0,1]})},style:{transform:r.xys.interpolate(u)},children:c[0]})}c(21);var f=function(e,t){return[e-window.innerWidth/1.7,t-window.innerHeight/2]},v=function(e,t){return"translate3d(".concat(e/10+10,"px,").concat(t/10,"px,0)")},N=function(e,t){return"translate3d(".concat(e/7-50,"px,").concat(t/7+10,"px,0)")},y=function(e,t){return"translate3d(".concat(e/6-80,"px,").concat(t/6-90,"px,0)")},w=function(e,t){return"translate3d(".concat(e/3.5,"px,").concat(t/3.5,"px,0)")};function k(){var e=Object(o.c)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!1),r=Object(l.a)(a,2),d=r[0],j=r[1],b=Object(o.c)({from:{x:0},x:d?1:0,config:{duration:1e3}}).x;return Object(n.jsxs)("div",{class:"container",onMouseMove:function(e){var t=e.clientX,c=e.clientY;return i({xy:f(t,c)})},children:[Object(n.jsx)(o.b.div,{class:"card1",style:{transform:c.xy.interpolate(v)}}),Object(n.jsx)(o.b.div,{class:"card2",style:{transform:c.xy.interpolate(N)}}),Object(n.jsx)(o.b.div,{class:"card3",style:{transform:c.xy.interpolate(y)}}),Object(n.jsx)(o.b.div,{class:"card4",style:{transform:c.xy.interpolate(w)},onClick:function(){return j(!d)}}),Object(n.jsx)(o.b.div,{class:"card5",style:{transform:c.xy.interpolate(w),opacity:b.interpolate({range:[0,1],output:[0,1]})},onClick:function(){return j(!d)}})]})}var M=c.p+"static/media/siemens-logo.184245ee.png",I=c.p+"static/media/allianz-logo.6b180e7b.png",A=c.p+"static/media/bmw-logo.c4469b9f.png",L=c.p+"static/media/eos-logo.e57362c5.svg",C=c.p+"static/media/tscnet-logo.fe310647.png",H=c.p+"static/media/vodafone-logo.6f6b6010.png",F=c.p+"static/media/roche-logo.37f4c59f.png",S={tension:1200,friction:40},R={mass:10,tension:200,friction:40},W=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) translate3d(-50%,-50%,0)")};function X(){var e=Object(o.d)(3,(function(){return{xy:[window.innerWidth,0],config:function(e){return 0===e?S:R}}})),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{className:"blob-background",children:[Object(n.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:Object(n.jsx)("filter",{id:"goo",colorInterpolationFilters:"sRGB",filterRes:1200})}),Object(n.jsx)("div",{className:"hooks-main blur",onMouseMove:function(e){return s({xy:[e.clientX,e.clientY+-400]})},children:c.map((function(e,t){return Object(n.jsx)(o.b.div,{style:{transform:e.xy.interpolate(W)}},t)}))})]})}var B=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("span",{children:"\u25cf Alina Usova"}),Object(n.jsx)("span",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/alina-usova-21868a165/",children:"LinkedIn"})})]}),Object(n.jsxs)("div",{className:"first-box",children:[Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"title-main",children:[Object(n.jsx)(O,{open:!0,lineHeight:120,children:Object(n.jsx)("span",{className:"big-title-text",children:" Hello there! "})}),Object(n.jsxs)(O,{open:!0,lineHeight:80,className:"wide-title",children:[Object(n.jsx)("span",{children:" I am a mobile and web developer "}),Object(n.jsx)("span",{children:" passionate about creating beautiful"}),Object(n.jsx)("span",{children:" user friendly applications"})]}),Object(n.jsxs)(O,{open:!0,lineHeight:70,className:"middle-title",children:[Object(n.jsx)("span",{children:" I am a mobile and web "}),Object(n.jsx)("span",{children:" developer passionate"}),Object(n.jsx)("span",{children:" about creating beautiful"}),Object(n.jsx)("span",{children:" user friendly"}),Object(n.jsx)("span",{children:" applications"})]}),Object(n.jsxs)(O,{open:!0,lineHeight:55,className:"narrow-title",children:[Object(n.jsx)("span",{children:" I am a mobile and "}),Object(n.jsx)("span",{children:" web developer"}),Object(n.jsx)("span",{children:" passionate about"}),Object(n.jsx)("span",{children:" creating beautiful "}),Object(n.jsx)("span",{children:" user friendly"}),Object(n.jsx)("span",{children:" applications"})]}),Object(n.jsxs)("div",{className:"subtitle",children:[Object(n.jsxs)("span",{className:"subtitle-text",children:["Currently working at ",Object(n.jsx)("a",{href:"https://motius.de/",children:"Motius"})," as a Frontend developer ",Object(n.jsx)("br",{})]}),Object(n.jsx)("span",{className:"subtitle-text",children:" and studying MSc. Informatics at Technical University of Munich"}),Object(n.jsxs)("span",{className:"subtitle-text",children:[" ",Object(n.jsx)("br",{})," \u25cf \u25cf \u25cf "]})]})]})]}),Object(n.jsxs)("div",{className:"second-box",children:[Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsxs)("div",{className:"intro-text-box",children:[Object(n.jsx)("div",{className:"intro-title",children:"About me"}),Object(n.jsx)("div",{className:"intro-text",children:"As a computer science student with a major in software engineering and a frontend developer, I have worked on many projects, building applications with various languages and frameworks for different platforms. I am always up for a challenge and like to explore new tools and technologies. I am also interested in user experience design and creating beautiful interfaces for innovative products."}),Object(n.jsxs)("div",{className:"right-align",children:[Object(n.jsx)("div",{className:"intro-title",children:"My interests and experience"}),Object(n.jsxs)("div",{className:"intro-tags",children:[Object(n.jsx)("span",{className:"intro-text-card",children:" prototyping "}),Object(n.jsx)("span",{className:"intro-text-card",children:" web-development "}),Object(n.jsx)("span",{className:"intro-text-card",children:" Progressive web Apps "}),Object(n.jsx)("span",{className:"intro-text-card",children:" iOS apps "}),Object(n.jsx)("span",{className:"intro-text-card",children:" Cross-platform apps "}),Object(n.jsx)("span",{className:"intro-text-card",children:" android apps "}),Object(n.jsx)("span",{className:"intro-text-card",children:" UI/UX design"}),Object(n.jsx)("span",{className:"intro-text-card",children:" Design thinking "}),Object(n.jsx)("span",{className:"intro-text-card",children:" ARKit "}),Object(n.jsx)("span",{className:"intro-text-card",children:" Agile "}),Object(n.jsx)("span",{className:"intro-text-card",children:" Scrum"})]})]})]}),Object(n.jsx)(k,{})]}),Object(n.jsx)("div",{className:"divider"}),Object(n.jsx)("div",{className:"intro-title padding-top padding-bottom",children:"Experienced with following tools"}),Object(n.jsxs)("div",{className:"card-box",children:[Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"react-logo"}),Object(n.jsx)("span",{children:" React.js "})]})}),Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"vue-logo"}),Object(n.jsx)("span",{children:" Vue.js "})]})}),Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"pwa-logo"}),Object(n.jsx)("span",{children:" Progressive Web Apps "})]})})]}),Object(n.jsxs)("div",{className:"card-box",children:[Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"swift-logo"}),Object(n.jsx)("span",{children:" Swift "})]})}),Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"kotlin-logo"}),Object(n.jsx)("span",{children:" Kotlin "})]})})]}),Object(n.jsxs)("div",{className:"card-box padding-bottom",children:[Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"illustrator-logo"}),Object(n.jsxs)("span",{children:[" Adobe ",Object(n.jsx)("br",{})," Illustrator "]})]})}),Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"figma-logo"}),Object(n.jsx)("span",{children:" Figma "})]})}),Object(n.jsx)(g,{children:Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("div",{className:"xd-logo"}),Object(n.jsx)("span",{children:" Adobe XD "})]})})]})]}),Object(n.jsxs)("div",{className:"third-box",id:"another_blob_box",children:[Object(n.jsx)("div",{className:"background-circle-1"}),Object(n.jsx)("div",{className:"background-circle-2"}),Object(n.jsx)("div",{className:"background-circle-3"}),Object(n.jsx)(X,{}),Object(n.jsx)("div",{className:"divider-purple"}),Object(n.jsx)("div",{className:"divider-purple-small"}),Object(n.jsx)("div",{className:"third-box-title padding-top",children:"Worked on applications with following clients"}),Object(n.jsxs)("div",{className:"companies-box",children:[Object(n.jsx)("img",{className:"company-logo-card",src:M,alt:"Logo",width:"160px"}),Object(n.jsx)("img",{className:"company-logo-card",src:I,alt:"Logo",width:"160px"}),Object(n.jsx)("img",{className:"company-logo-card",src:H,alt:"Logo",width:"160px"}),Object(n.jsx)("img",{className:"company-logo-card",src:A,alt:"Logo",width:"80px"}),Object(n.jsx)("img",{className:"company-logo-card",src:C,alt:"Logo",width:"160px"}),Object(n.jsx)("img",{className:"company-logo-card",src:L,alt:"Logo",width:"130px"}),Object(n.jsx)("img",{className:"company-logo-card",src:F,alt:"Logo",width:"100px"})]}),Object(n.jsx)("div",{className:"divider-dark"})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),D()}],[[22,1,2]]]);
//# sourceMappingURL=main.c34e4bd5.chunk.js.map