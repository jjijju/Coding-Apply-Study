(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{54:function(e){e.exports=JSON.parse('[{"id":1,"title":"Kodak M38 35mm Film Camera with Flash (Yellow)","content":"Key Features 35mm","price":"$ 35.00","image":"https://static.bhphoto.com/images/images345x345/1625143971_1626069.jpg"},{"id":2,"title":"Ilford Sprite 35-II Film Camera (Black & Silver)","content":"35mm Reusable Film Camera","price":"$ 34.95","image":"https://static.bhphoto.com/images/images345x345/1611056124_1612508.jpg"},{"id":3,"title":"Ilford Sprite 35-II Film Camera (Black)","content":"35mm Reusable Film Camera","price":"$ 34.95","image":"https://static.bhphoto.com/images/images345x345/1611055214_1612507.jpg"},{"id":4,"title":"Ilford SPRITE 35-II Reusable Camera (Black and Teal)","content":"35mm Reusable Film Camera","price":"$ 34.95","image":"https://static.bhphoto.com/images/images345x345/1624891182_1648146.jpg"},{"id":5,"title":"Ilford SPRITE 35-II Reusable Camera (Silver and Teal)","content":"35mm Reusable Film Camera","price":"$ 34.95","image":"https://static.bhphoto.com/images/images345x345/1624891182_1648147.jpg"},{"id":6,"title":"Ilford SPRITE 35-II Reusable Camera (Black and Red)","content":"35mm Reusable Film Camera","price":"$ 34.95","image":"https://static.bhphoto.com/images/images345x345/1624891182_1648142.jpg"}]')},67:function(e,t,c){},68:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(17),s=c.n(i),r=(c(67),c(18)),o=(c(68),c(7)),l=c(54),j=c(104),d=c(101),b=c(105),m=c(103),h=c(21),u=c(2);var O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a.Brand,{href:"#home",children:"React Shop"}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(b.a,{className:"mr-auto",children:[Object(u.jsx)(b.a.Link,{as:h.b,to:"/",children:"Home"}),Object(u.jsx)(b.a.Link,{as:h.b,to:"/detail",children:"Detail"}),Object(u.jsxs)(m.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(m.a.Item,{href:"#action/3.1",children:"Action"}),Object(u.jsx)(m.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(m.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(m.a.Divider,{}),Object(u.jsx)(m.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})})},p=c(43),x=c(102),g=c(57);var f=function(e){var t=e.camera;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("img",{src:e.image,alt:e.title,width:"100%"}),Object(u.jsx)("h4",{children:e.title}),Object(u.jsxs)("p",{children:[e.content," & ",e.price]})]},t)}))})},v=c(58),I=c.n(v);var k,S,C=function(e){var t=e.product,c=Object(a.useState)(t),n=Object(r.a)(c,2),i=n[0],s=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(x.a,{className:"background",children:[Object(u.jsx)("h1",{children:"20% Season OFF"}),Object(u.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(u.jsx)("p",{children:Object(u.jsx)(g.a,{variant:"primary",children:"Learn more"})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(f,{camera:i})}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){I.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(p.a)(i),Object(p.a)(e.data)))})).catch((function(){console.log("\u274c")}))},children:"\ub354\ubcf4\uae30"})]})]})},F=c(41),N=c(42),R=(c(95),N.a.div(k||(k=Object(F.a)(["\n    padding: 20px;\n"])))),T=N.a.h4(S||(S=Object(F.a)(["\n    font-size: 25px;\n    color: ",";\n"])),(function(e){return e.color}));function w(e){var t=e.stock;return Object(u.jsxs)("p",{children:["\uc7ac\uace0 : ",t[0]]})}var B=function(e){var t=e.product,c=e.stock,n=e.setStock,i=Object(a.useState)(!0),s=Object(r.a)(i,2),l=s[0],j=s[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),m=b[0],h=b[1];console.log("on"),Object(a.useEffect)((function(){var e=setTimeout((function(){j(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var O=Object(o.f)(),p=Object(o.g)().id,x=t.find((function(e){return e.id===parseInt(p)}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(R,{children:Object(u.jsx)(T,{className:"red",children:"Detail"})}),m,Object(u.jsx)("input",{onChange:function(e){h(e.target.value)}}),l?Object(u.jsx)("div",{className:"my-alert my-alert-red",children:Object(u.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:x.image,alt:x.title,width:"100%"})}),Object(u.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(u.jsx)("h4",{className:"pt-5",children:x.title}),Object(u.jsx)("p",{children:x.content}),Object(u.jsx)("p",{children:x.price}),Object(u.jsx)(w,{stock:c}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){n([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){O.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})};var y=function(){var e=Object(a.useState)(l),t=Object(r.a)(e,2),c=t[0],n=(t[1],Object(a.useState)([10,11,12])),i=Object(r.a)(n,2),s=i[0],j=i[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(C,{product:c})}}),Object(u.jsx)(o.a,{path:"/detail/:id",render:function(){return Object(u.jsx)(B,{product:c,stock:s,setStock:j})}})]})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(y,{})})}),document.getElementById("root")),$()}},[[96,1,2]]]);
//# sourceMappingURL=main.05df71fa.chunk.js.map