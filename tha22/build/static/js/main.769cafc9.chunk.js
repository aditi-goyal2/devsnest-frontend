(this.webpackJsonptha22=this.webpackJsonptha22||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(6),r=n(3),o=n(1),u=n(9),i=n.n(u),m=n(0),l=function(e){return Object(m.jsx)("div",{className:"templates",children:e.tempelates.map((function(t,n){return Object(m.jsx)("div",{className:"template",onClick:function(){return e.setMeme(t)},style:{backgroundImage:"url(".concat(t.url,")")}},t.id)}))})},p=n(5),d=n(10),j=function(e){var t=Object(o.useState)({id:e.meme.id,username:"DeepakChaturvedi",password:"MemeGenerate",values:[]}),n=Object(r.a)(t,2),a=n[0],u=n[1],i=Object(o.useState)(""),l=Object(r.a)(i,2),j=l[0],b=l[1];function h(){return(h=Object(s.a)(c.a.mark((function t(n){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,console.log(s);try{e.setMeme(Object(p.a)(Object(p.a)({},e.meme),{},{url:s.data.url})),b(s.error_message)}catch(c){console.log(s.error_message),b(s.error_message)}case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"memeContainer",children:[Object(m.jsx)("img",{src:e.meme.url,alt:"",className:"meme"}),Object(m.jsx)("div",{className:"input-fields",children:Object(d.a)(Array(e.meme.box_count)).map((function(e,t){return Object(m.jsx)("input",{className:"inputs",placeholder:"Meme Caption ".concat(t+1),onChange:function(e){var n=a.values;n[t]={text:e.target.value},u(Object(p.a)(Object(p.a)({},a),{},{values:n}))}},t)}))}),Object(m.jsxs)("div",{className:"btns",children:[Object(m.jsx)("button",{className:"choose-template buttons",onClick:function(){return e.setMeme(null)},children:"Choose Templates"}),Object(m.jsx)("button",{className:"generate-meme buttons",onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(a.id,"&username=").concat(a.username,"&password=").concat(a.password);a.values.map((function(t,n){e+="&boxes[".concat(n,"][text]=").concat(t.text)})),function(e){h.apply(this,arguments)}(e)},children:"Generate Meme"}),Object(m.jsx)("button",{className:"buttons",onClick:function(){return function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(){var e=(window.URL||window.webkitURL).createObjectURL(this.response),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},n.send()}(e.meme.url,"myMeme")},children:"Download Meme"})]}),Object(m.jsx)("div",{className:"msg",children:j})]})},b=(n(17),function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],u=Object(o.useState)(null),i=Object(r.a)(u,2),p=i[0],d=i[1];function b(){return(b=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.imgflip.com/get_memes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.data.memes),a(n.data.memes);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Meme Generator App"}),null===p?Object(m.jsx)(l,{tempelates:n,setMeme:d}):Object(m.jsx)(j,{meme:p,setMeme:d})]})});i.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.769cafc9.chunk.js.map