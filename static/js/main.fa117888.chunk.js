(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(9),n(1)),l=(n(10),n(11),n(12),function(e){var t=e.monster;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null,t.name),o.a.createElement("p",null,t.email))}),i=function(e){var t=e.monsters;return o.a.createElement("div",{className:"card-list"},t.map((function(e){return o.a.createElement(l,{key:e.id,monster:e})})))},u=(n(13),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})});var m=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(n),l=Object(s.a)(c,2),m=l[0],h=l[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),p=f[0],v=f[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e),h(e)}))}),[]),Object(a.useEffect)((function(){var e=p?n.filter((function(e){return e.name.toLowerCase().includes(p.toLocaleLowerCase())})):n;h(e)}),[p]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monster Rolodex"),o.a.createElement(u,{placeholder:"search monster",handleChange:function(e){v(e.target.value)}}),o.a.createElement(i,{monsters:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.fa117888.chunk.js.map