(this["webpackJsonptech-transition"]=this["webpackJsonptech-transition"]||[]).push([[0],{62:function(n,t,e){},77:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(0),a=e.n(c),i=e(24),o=e.n(i),s=(e(62),e(98)),d=e(23),u=e(7),b=e(8),j=e(100),l=e(9);function f(){var n=Object(l.a)(["\n    background: url('/img/background-img.png') center top / cover no-repeat;\n    min-height: 100vh;\n"]);return f=function(){return n},n}var h=Object(b.b)("div")(f()),m=e(35);function p(){var n=Object(l.a)(["\n  width: 80%;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 2em;\n  margin: auto;\n"]);return p=function(){return n},n}var O=Object(b.b)(m.a)(p()),g=function(){return Object(r.jsx)(O,{variant:"h1",children:"Power up your transITion"})};function x(){var n=Object(l.a)(["\n  text-align: center;\n  margin: auto;\n  width: 80%;\n  margin-top: 2em;\n\n  *:not(:last-child) {\n    margin-bottom: 1em;\n  }\n  "," {\n    width: 90%;\n    margin-top: 1.5em;\n\n    *:not(:last-child) {\n        margin-bottom: .8em;\n      }\n  }\n"]);return x=function(){return n},n}var v=Object(b.b)("div")(x(),(function(n){return n.theme.breakpoints.down("sm")})),w=function(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(m.a,{children:"So you want to work in IT? Or you just curious about opportunities in the TECH world?"}),Object(r.jsx)(m.a,{children:"You're in the right place!"}),Object(r.jsx)(m.a,{children:"Explore the options below and decide which path works best for you."})]})};function k(){var n=Object(l.a)(["\n    max-width: 960px;\n    width: 80%;\n    display: grid;\n    margin: 2em auto 0;\n    padding-bottom: 2em;\n    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));\n    grid-gap: 2em;\n    justify-items: center;\n\n    "," {\n      width: 90%;\n      margin-top: 1.5em;\n    }\n"]);return k=function(){return n},n}var y=Object(b.b)("div")(k(),(function(n){return n.theme.breakpoints.down("sm")})),I=e(102),C=e(96),S=e(101);function T(){var n=Object(l.a)(["\n  margin-right: 1em;\n  background-color: ",";\n  padding: .75em;\n"]);return T=function(){return n},n}function F(){var n=Object(l.a)(["\n  width: 100%;\n"]);return F=function(){return n},n}function A(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return A=function(){return n},n}var P,z,U=Object(b.b)(I.a)(A()),q=Object(b.b)(C.a)(F()),B=Object(b.b)(S.a)(T(),(function(n){var t=n.background;return n.theme.palette.professions[t].main})),E=function(n){var t=n.title,e=n.description,c=n.avatarSrc,a=n.avatarBackground,i=n.clickHandler,o=n.route;return Object(r.jsxs)(U,{onClick:function(){return i(o)},children:[Object(r.jsx)(q,{title:t,subheader:e}),Object(r.jsx)(B,{src:c,background:a})]})},W=e.p+"static/media/backend.e5dd589a.svg",D=e.p+"static/media/devops.526c43b9.svg",H=e.p+"static/media/frontend.0cba3fe3.svg",J=e.p+"static/media/project_manager.1f0575de.svg",L=e.p+"static/media/qa.76467f02.svg",M=[{id:"learn",name:"learn",text:"What do I learn"},{id:"jobs",name:"jobs",text:"Jobs"},{id:"resources",name:"resources",text:"Useful Resources"}],Q=[{id:"frontend",title:"Frontend",description:"A frontend engineer works on those parts of web apps you actually see",color:"frontend",icon:H,route:"frontend",categories:M},{id:"backend",title:"Backend",description:"A backend engineer handles communication between user and database, processes and saves data",color:"backend",icon:W,route:"backend",categories:M},{id:"uxui",title:"UX/UI",description:"A UX/UI designs app to make them good-looking and user-friendly",color:"uxui",icon:e.p+"static/media/ux_ui.1e1dd114.svg",route:"uxui",categories:M},{id:"qa",title:"QA",description:"A QA tests software to detect any bugs and errors",color:"qa",icon:L,route:"qa",categories:M},{id:"devops",title:"DevOps",description:"A DevOps creates and maintains infrastructure that software runs on",color:"devops",icon:D,route:"devops",categories:M},{id:"projectmanager",title:"Project Manager",description:"Project managers plan, monitor, control and organize projects",color:"projectmanager",icon:J,route:"projectmanager",categories:M}],X=function(){var n=Object(u.g)(),t=function(t){n.push("/details/".concat(t))};return Object(r.jsxs)(h,{children:[Object(r.jsx)(g,{}),Object(r.jsx)(w,{}),Object(r.jsx)(y,{children:Q.map((function(n){var e=n.title,c=n.description,a=n.color,i=n.icon,o=n.id,s=n.route;return Object(r.jsx)(E,{title:e,description:c,avatarSrc:i,avatarBackground:a,clickHandler:t,route:s},o)}))})]})},_=e(22),N=e(51),R=e(50),Y=e.n(R)()({}),G=Object(N.a)({typography:{fontFamily:"Segoe UI, sans-serif",h1:(P={fontSize:40},Object(_.a)(P,Y.down("sm"),{fontSize:30}),Object(_.a)(P,Y.down("xs"),{fontSize:24}),P),body1:(z={},Object(_.a)(z,Y.down("sm"),{fontSize:14}),Object(_.a)(z,Y.down("xs"),{fontSize:13}),z)},palette:{primary:{main:"#725ec0"},text:{primary:"#222222",disabled:"#22222233"},professions:{frontend:{main:"#bee5e4"},backend:{main:"#ff85be"},uxui:{main:"#7ec2ff"},qa:{main:"#fdf580"},devops:{main:"#d99cff"},projectmanager:{main:"#aafa87"}}}}),K=e(52),V=e(99),Z=function(n){var t=n.getTabContent,e=n.syncTabWithPath,a=Object(u.h)().categoryId;return Object(c.useEffect)((function(){e(a)}),[a,e]),Object(r.jsx)("div",{role:"tabpanel",children:t(a)})},$=e(40),nn=e(53),tn=e(97);function en(){var n=Object(l.a)(["\n  text-transform: none;\n  opacity: 1;\n\n  &.active {\n    font-weight: bold;\n  }\n"]);return en=function(){return n},n}var rn=Object(b.b)(tn.a)(en()),cn=function(n){var t=n.text,e=n.chosenTab,c=n.index,a=n.handleClick,i=Object(nn.a)(n,["text","chosenTab","index","handleClick"]);return Object(r.jsx)(rn,Object($.a)(Object($.a)({},i),{},{label:t,className:e===c?"active":"",onClick:function(){return a(c)}}))},an=function(n){var t=n.content;return Object(r.jsx)("div",{children:t})},on=function(n){var t=n.content;return Object(r.jsx)("div",{children:t})},sn=function(n){var t=n.content;return Object(r.jsx)("div",{children:t})};function dn(){var n=Object(l.a)(["\n  width: 100%;\n"]);return dn=function(){return n},n}function un(){var n=Object(l.a)(["\n  border-bottom: 1px solid\n    ",";\n  color: inherit;\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return un=function(){return n},n}var bn=Object(b.b)(V.a)(un(),(function(n){return n.theme.palette.text.disabled})),jn=Object(b.b)(I.a)(dn()),ln="What to learn",fn="jobs",hn="resources",mn=function(n){switch(n){case"jobs":return Object(r.jsx)(an,{content:fn});case"learn":return Object(r.jsx)(on,{content:ln});case"resources":return Object(r.jsx)(sn,{content:hn});default:throw new Error("Wrong category name!")}},pn=function(n){var t=n.categories,e=Object(c.useState)(0),a=Object(K.a)(e,2),i=a[0],o=a[1],s=Object(u.i)(),d=s.path,b=s.url,j=Object(u.g)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(jn,{children:Object(r.jsx)(bn,{indicatorColor:"primary",value:i,children:t.map((function(n,t){return Object(r.jsx)(cn,{text:n.text,chosenTab:i,index:t,handleClick:function(t){return function(n,t){o(t),j.push("".concat(b,"/").concat(n.name))}(n,t)}},n.name)}))})}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.a,{exact:!0,from:"/details/:professionId",to:"".concat(b,"/learn")}),Object(r.jsx)(u.b,{exact:!0,path:"".concat(d,"/:categoryId"),children:Object(r.jsx)(Z,{getTabContent:mn,syncTabWithPath:function(n){var e=t.findIndex((function(t){return t.id===n}));o(-1===e?0:e)}})})]})]})};function On(){var n=Object(l.a)(["\n    max-width: 960px;\n    width: 80%;\n    margin: 2em auto 0;\n    padding-bottom: 2em;\n\n    "," {\n      width: 90%;\n      margin-top: 1.5em;\n    }\n"]);return On=function(){return n},n}var gn=Object(b.b)("div")(On(),(function(n){return n.theme.breakpoints.down("sm")})),xn=function(){var n=Object(u.h)().professionId,t=Q.find((function(t){return t.id===n}));return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsxs)(h,{children:[Object(r.jsx)("div",{children:t.title}),Object(r.jsx)(gn,{children:Object(r.jsx)(pn,{categories:t.categories,profession:t})})]})})},vn=function(){return Object(r.jsx)(j.b,{injectFirst:!0,children:Object(r.jsx)(s.a,{theme:G,children:Object(r.jsx)(b.a,{theme:G,children:Object(r.jsx)(d.a,{basename:"".concat("/tech-transition"),children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",children:Object(r.jsx)(X,{})}),Object(r.jsx)(u.a,{exact:!0,path:"/details",to:"/details/".concat(Q[0].route)}),Object(r.jsx)(u.b,{path:"/details/:professionId",component:xn})]})})})})})},wn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,103)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(vn,{})}),document.getElementById("root")),wn()}},[[77,1,2]]]);
//# sourceMappingURL=main.c44c0cb8.chunk.js.map