(this.webpackJsonptescik=this.webpackJsonptescik||[]).push([[0],{23:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(16),o=s.n(i),r=(s(23),s(4)),l=s(2);function j(e){var t;for(;100!==e.length;)t=Math.floor(100*Math.random()+1),-1==e.indexOf(t)&&e.push(t)}var u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"load-ani1"}),Object(c.jsx)("div",{className:"load-ani2"}),Object(c.jsx)("div",{className:"load-ani3"})]})},b=["","https://images.unsplash.com/photo-1584536682683-b79a8744eaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1595507287504-83625092ff6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1592818800435-341fd2817aef?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80","https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80","https://images.unsplash.com/photo-1508474722893-c3ccb8918d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80","https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80","https://images.unsplash.com/photo-1502898295-455afaf0f015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"];var h=function(e){var t=e.userId,s=Object(a.useState)([]),n=Object(r.a)(s,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users?id=".concat(t)).then((function(e){return e.json()})).then((function(e){return o(e)}))})),Object(c.jsxs)("div",{className:"user",children:[i.map((function(e){return Object(c.jsxs)("p",{className:"user-name",children:["Created by: ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"user-name-span",children:e.name})]})})),Object(c.jsx)("img",{src:b[t],className:"user-img"})]})};var d=function(e){var t=e.userId,s=e.id,a=e.title;return Object(c.jsxs)("div",{className:"single-post",children:[Object(c.jsx)(h,{userId:t}),Object(c.jsx)("p",{className:"single-post-title",children:a}),Object(c.jsx)(l.b,{to:"posts/".concat(s),className:"link",children:"See more"}),Object(c.jsx)("hr",{})]})};var m=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)([]),o=Object(r.a)(i,2),b=o[0],h=(o[1],Object(a.useState)(!1)),m=Object(r.a)(h,2),p=m[0],f=m[1],O=[],x=[];return j(x),Object(a.useEffect)((function(){for(var e=0;e<=100;e++)fetch("https://jsonplaceholder.typicode.com/posts/".concat(x[e])).then((function(e){return e.json()})).then((function(e){O.push(e),100===O.length&&(n(O),f(!0))}))}),[]),Object(c.jsxs)("div",{className:"posts-main",children:[!p&&Object(c.jsx)(u,{}),p&&Object(c.jsx)(l.b,{to:"/",className:"link-to-main",children:Object(c.jsx)("i",{class:"fas fa-arrow-left fa-2x"})}),p&&s.map((function(e){return Object(c.jsx)(d,{user:b.id,userId:e.userId,id:e.id,title:e.title,body:e.body},e.id)}))]})},p=s(3);var f=function(){var e=Object(p.f)().id,t=Object(a.useState)({}),s=Object(r.a)(t,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(e){return e.json()})).then((function(e){return i(e)}))})),Object(c.jsxs)("div",{className:"single-post-wrapper",children:[Object(c.jsx)(h,{userId:n.userId}),Object(c.jsx)("p",{className:"single-post-title",children:n.title}),Object(c.jsx)("p",{className:"single-post-body",children:n.body}),Object(c.jsx)(l.b,{to:"/posts",className:"link",children:"Go back"})]})};var O=function(){return Object(c.jsxs)("div",{className:"main-header",children:[Object(c.jsx)(l.b,{to:"/posts",className:"main-link",children:"Posts"}),Object(c.jsx)(l.b,{to:"/search-users",className:"main-link",children:"Search users"}),Object(c.jsx)(l.b,{to:"/albums",className:"main-link",children:"Albums"})]})};s(29);var x=function(e){var t=e.name,s=e.email,a=e.address,n=e.id;return Object(c.jsxs)("div",{className:"user-info",children:[Object(c.jsxs)("p",{children:["Username: ",Object(c.jsx)("span",{className:"user-info-span",children:t})]}),Object(c.jsxs)("p",{children:["Email: ",Object(c.jsx)("span",{className:"user-info-span",children:s})]}),Object(c.jsxs)("p",{children:["City: ",Object(c.jsx)("span",{className:"user-info-span",children:a.city})]}),Object(c.jsxs)("p",{children:["Zipcode: ",Object(c.jsx)("span",{className:"user-info-span",children:a.zipcode})]}),Object(c.jsx)("img",{src:b[n],className:" user-info-img"}),Object(c.jsx)(l.b,{to:"/",className:"link link-user-info",children:"Go back"})]})};function v(e,t,s){fetch("https://jsonplaceholder.typicode.com/users/?username=".concat(e)).then((function(e){return e.json()})).then((function(e){return t(e)})),s(!0)}var N=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)([]),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(a.useState)(!1),d=Object(r.a)(h,2),m=d[0],p=d[1];return Object(c.jsxs)("div",{className:"search-user-wrapper",children:[!m&&Object(c.jsx)(l.b,{to:"/",className:"link",children:"Go back"}),Object(c.jsxs)("div",{className:"search-user-bar",children:[Object(c.jsx)("input",{type:"text",placeholder:"Serch for a user",className:"search-input",value:s,onKeyDown:function(e){"Enter"===e.key&&(p(!0),v(e.target.value,b))},onChange:function(e){return n(e.target.value)}}),Object(c.jsx)("button",{className:"search-button",onClick:function(){p(!0),v(s,b,p)},children:Object(c.jsx)("i",{class:"fas fa-search"})})]}),m&&Object(c.jsx)(u,{}),!m&&j.map((function(e){return Object(c.jsx)(x,{id:e.id,address:e.address,name:e.name,email:e.email,phone:e.phone},e.id)}))]})};var g=function(e){var t=e.title,s=e.url;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"single-photo-title",children:["Photo title: ",Object(c.jsx)("span",{className:"single-photo-span",children:t})]}),Object(c.jsx)("img",{src:s,className:"single-photo-img"})]})};var y=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)({}),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(a.useState)(!1),d=Object(r.a)(h,2),m=d[0],f=d[1],O=Object(p.f)().id;return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(O)).then((function(e){return e.json()})).then((function(e){n(e),f(!0)})),fetch("https://jsonplaceholder.typicode.com/albums/".concat(O)).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[O]),Object(c.jsxs)("div",{className:"photos-wrapper",children:[!m&&Object(c.jsx)(u,{}),m&&Object(c.jsx)(l.b,{to:"/albums",className:"link-to-main",children:Object(c.jsx)("i",{class:"fas fa-arrow-left fa-2x"})}),m&&Object(c.jsxs)("h1",{className:"photos-album-title",children:["Album title: ",j.title]}),m&&s.map((function(e){return Object(c.jsx)(g,{title:e.title,url:e.url},e.id)}))]})};var w=function(e){var t=e.title,s=e.userId,a=e.id;return Object(c.jsxs)("div",{className:"album-title",children:[Object(c.jsx)("h2",{className:"album-header",children:t}),Object(c.jsx)(h,{userId:s}),Object(c.jsx)(l.b,{to:"/albums/".concat(a),className:"link",children:"See Photos"}),Object(c.jsx)("hr",{})]})};var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(!1),o=Object(r.a)(i,2),b=o[0],h=o[1],d=[],m=[];return j(m),Object(a.useEffect)((function(){for(var e=0;e<=100;e++)fetch("https://jsonplaceholder.typicode.com/albums/".concat(m[e])).then((function(e){return e.json()})).then((function(e){d.push(e),100===d.length&&(n(d),h(!0))}))}),[]),Object(c.jsxs)("div",{className:"albums-wrapper",children:[!b&&Object(c.jsx)(u,{}),b&&Object(c.jsx)(l.b,{to:"/",className:"link-to-main",children:Object(c.jsx)("i",{class:"fas fa-arrow-left fa-2x"})}),b&&Object(c.jsx)("h1",{className:"albums-header",children:"Albums"}),b&&s.map((function(e){return Object(c.jsx)(w,{userId:e.userId,id:e.id,title:e.title},e.id)}))]})};var S=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/posts/:id",component:f}),Object(c.jsx)(p.a,{exact:!0,path:"/albums/:id",component:y}),Object(c.jsx)(p.a,{exact:!0,path:"/albums",component:k}),Object(c.jsx)(p.a,{exact:!0,path:"/posts",component:m}),Object(c.jsx)(p.a,{exact:!0,path:"/search-users",component:N}),Object(c.jsx)(p.a,{exact:!0,path:"/testowa",component:O}),Object(c.jsx)(p.a,{exact:!0,path:"/",component:O})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.3233821d.chunk.js.map