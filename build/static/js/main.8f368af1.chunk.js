(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(9),a(1)),u=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)([]),i=Object(c.a)(u,2),m=i[0],s=i[1],d=Object(n.useState)([]),p=Object(c.a)(d,2),E=p[0],h=p[1],f=function(e){console.log(e);for(var t=[],a=0;a<m.length;a++){var n=m[a];console.log(n),(n.Contaminant.toUpperCase().indexOf(e.toUpperCase())>-1||n.Model.toUpperCase().indexOf(e.toUpperCase())>-1||n.Category.toUpperCase().indexOf(e.toUpperCase())>-1)&&t.push(n)}console.log(t),h(t)};return Object(n.useEffect)((function(){fetch("./data/Test-Results.csv").then((function(e){e.body.getReader().read().then((function(e){for(var t=e.value,a=(new TextDecoder).decode(t).split("\n"),n=[],l=function(e){var t=a[e].split(","),l={Contaminant:t[0],Challenge:t[1],Filtered:t[2],Removal:t[3],Model:t[4],Category:function(){var e=t[5];return t[6]&&(e+=t[6]+t[7]),e}()};n.push(l)},r=1;r<a.length;r++)l(r);s(n),h(n)}))}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{id:"search"},l.a.createElement("label",null,"Search:"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){e.preventDefault(),o(e.target.value),f(e.target.value)}})),l.a.createElement("div",{id:"resultsTable"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Contaminant"),l.a.createElement("td",null,"Challenge Water"),l.a.createElement("td",null,"Filtered Water"),l.a.createElement("td",null,"Removal Rate"),l.a.createElement("td",null,"Filter"),l.a.createElement("td",null,"Category"))),l.a.createElement("tbody",null,E.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.Contaminant),l.a.createElement("td",null,e.Challenge),l.a.createElement("td",null,e.Filtered),l.a.createElement("td",null,e.Removal),l.a.createElement("td",null,e.Model),l.a.createElement("td",null,e.Category))}))))))};a(10);var i=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Contaminant Search")),l.a.createElement("main",null,l.a.createElement(u,null)),l.a.createElement("footer",null,l.a.createElement("h6",null,"markheard.io software solution")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8f368af1.chunk.js.map