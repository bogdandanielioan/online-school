(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),s=t(32),i=t.n(s),c=t(25),l=t(13),u=t(77),m=t(78),d=(t(99),Object(m.a)(r||(r=Object(u.a)(["\n\n\n/* resert */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}nav ol,nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:700;}em{font-style:italic;}\n\n\n\n\n/* global.css */\n* {\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 1.25em;\n}\nbody {\n    font-family: 'Work Sans', sans-serif;\n}\nh2 {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-bottom: 1rem;\n}\np {\n    font-weight: 300;\n    margin-bottom: 1.5rem;\n    line-height: 1.5;\n    hyphens: auto;\n}\na {\n    color: #939;\n    text-decoration: none;\n}\n.wrap {\n    max-width: 1250px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nheader {\n    background: #57496e;\n    color: #fff;\n    padding: 1rem 0;\n    margin-bottom: 2rem;\n}\n.header--flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.header--logo a {\n    font-size: 1.25rem;\n    color: #fff;\n}\nheader li {\n    font-size: .8rem;\n}\nheader nav a {\n    color: #dbd;\n}\nheader nav a:hover {\n    color: #fff;\n}\n\n.header--signedin li {\n    text-align: right;\n    line-height: 1.25;\n}\n.header--signedout li {\n    display: inline-block;\n    margin-left: .5rem;\n}\n.course--module {\n    background: #7c689b;\n    border-radius: .5rem;\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n    display: block;\n}\n.course--label {\n    color: #fff;\n    font-size: .9rem;\n    font-weight: 400;\n    margin-bottom: .25rem;\n}\n.course--title {\n    color: #fff;\n    font-weight: 700;\n    font-size: 1.25rem;\n}\n.course--add--module {\n    background: #ddd9e4;\n    color: #57496e;\n    font-weight: 300;\n    font-size: 1.25rem;\n}\n.course--add--title .add {\n    width: 20px;\n    height: auto;\n    margin-right: 5px;\n    fill: #57496e;\n}\n.course--detail--title {\n    padding-bottom: .25rem;\n    border-bottom: 1px solid #888;\n    margin: 3rem 0 .5rem;\n    font-size: .9rem;\n    color: #555;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.course--name {\n    font-size: 2rem;\n    margin-bottom: .5rem;\n    font-weight: 700;\n    color: #47395e;\n}\n.course--detail--list {\n    font-weight: 300;\n    margin: 0 0 1.5rem 1rem;\n    line-height: 1.5;\n}\n.actions--bar {\n    background: #e9e5f0;\n    padding: 1rem 0;\n    margin: -2rem 0 2rem;\n}\n.validation--errors {\n    background: #e9e5f0;\n    padding: 1rem;\n    border-radius: .5rem;\n    margin-bottom: 2.5rem;\n}\n.validation--errors h3 {\n    color: #800;\n    font-size: 1.25rem;\n    margin-bottom: .5rem;\n}\n.validation--errors ul {\n    font-weight: 300;\n    margin-left: 1rem;\n    line-height: 1.25;\n}\n.validation--errors li {\n    margin-bottom: .5rem;\n}\n.validation--errors li:last-child {\n    margin-bottom: 0;\n}\n\n.form--centered {\n    max-width: 510px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nform {\n    margin-bottom: 2.5rem;\n}\nlabel {\n    display: block;\n    font-weight: 300;\n    margin-bottom: .25rem;\n}\ninput, textarea {\n    display: block;\n    width: 100%;\n    color: #332a40;\n    border-radius: .5rem;\n    border: 1px solid #8c789b;\n    padding: .5rem;\n    margin-bottom: 1rem;\n    font-family: 'Work Sans', sans-serif;\n    font-size: .8rem;\n}\ntextarea {\n    min-height: 300px;\n}\n.button {\n    background: #7c689b;\n    color: #fff;\n    font-size: 1rem;\n    padding: .75rem 1.5rem;\n    border: 0;\n    margin: 0 0 .5rem 0;\n    display: block;\n    width: 210px;\n    text-align: center;\n    border-radius: .5rem;\n    font-weight: bold;\n    transition: background 0.2s;\n}\n.button:last-child {\n    margin-bottom: 0;\n}\n.button:not(.button-secondary):hover {\n    background: #63537d;\n    cursor: pointer;\n}\n.button-secondary {\n    color: #7c689b;\n    background: none;\n    box-shadow: 0 0 0 2px #7c689b inset;\n    transition: box-shadow 0.2s, color 0.2s;\n}\n.button-secondary:hover {\n    color: #63537d;\n    box-shadow: 0 0 0 2px #63537d inset;\n    cursor: pointer;\n}\ninput:focus, button:focus, .button:focus, textarea:focus {\n    border: none;\n    border-radius: 0;\n    outline: 2px solid #332a40;\n}\n\n.footer{\n\n   \n    width: 75px;\n\n  \n    \n}\n\nfooter{\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top:40vh;\n}\n\n\n@media screen and (min-width: 600px) {\n    .header--signedin li {\n        display: inline-block;\n        margin-left: .5rem;\n        line-height: 1;\n    }\n    .main--grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        column-gap: 1.5rem;\n        grid-auto-rows: 1fr;\n    }\n   \n}\n@media screen and (min-width: 800px) {\n    .main--grid {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    .main--flex {\n        display: flex;\n    }\n    .main--flex div:first-child {\n        flex-basis: 62%;\n    }\n    .main--flex div:last-child {\n        margin-left: 8%;\n        flex-basis: 30%;\n    }\n    .course--detail--title {\n        margin: 1.5rem 0 .5rem;\n    }\n    .button {\n        margin: 0 .5rem 0 0;\n        display: inline-block;\n    }\n}\n\n\n\n\n\n\n\n"])))),f=t(33),p=(t(103),function(){var e=Object(a.useState)({}),n=Object(f.a)(e,2),t=n[0];n[1];return o.a.createElement("header",null,o.a.createElement("div",{className:"wrap header--flex"},o.a.createElement("h1",{className:"header--logo"},o.a.createElement(c.b,{to:"/"},"Courses")),o.a.createElement("nav",null,t?o.a.createElement("ul",{className:"header--signedout"},o.a.createElement("li",null,"Welcome, ",t.firstName+" "+t.lastName," !"),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/sign-out"},"Sign Out"))):o.a.createElement("ul",{className:"header--signedout"},o.a.createElement("li",null,o.a.createElement(c.b,{to:"/sign-in"},"Sign In")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/sign-up"},"Sign Up"))))))}),b=t(12),h=t.n(b),g=t(22),v=function(e){var n=e.course;return o.a.createElement(c.b,{to:"/course-details/".concat(n.id),className:"course--module course--link"},o.a.createElement("h2",{className:"course--label"},"Course"),o.a.createElement("h3",{className:"course--title"},n.title))},E=t(38),x=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)(Object(g.a)(h.a.mark(function e(){var n,t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new E.a,e.prev=1,e.next=4,n.getCourses();case 4:t=e.sent,r(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),[]),o.a.createElement("main",null,o.a.createElement("div",{className:"wrap main--grid"},t.map(function(e){return o.a.createElement(v,{key:e.id,course:e})}),o.a.createElement(c.b,{className:"course--module course--add--module",to:"/create-course"},o.a.createElement("span",{className:"course--add--title"},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},o.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))},w=t(126),k=t(90),y=function(e){e.id;var n=Object(a.useState)({}),t=Object(f.a)(n,2),r=t[0],s=t[1],i=Object(l.g)().courseId;return Object(a.useEffect)(Object(g.a)(h.a.mark(function e(){var n,t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new E.a,e.prev=1,e.next=4,n.fetchCourse(i);case 4:t=e.sent,s(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),[]),o.a.createElement("main",null,o.a.createElement("div",{className:"actions--bar"},o.a.createElement("div",{className:"wrap"},o.a.createElement(c.b,{className:"button",to:"/course-update/".concat(i)},"Update Course"))),o.a.createElement("div",{className:"wrap"},o.a.createElement("h2",null,"Course Detail"),o.a.createElement("form",null,o.a.createElement("div",{className:"main--flex"},o.a.createElement("div",null,o.a.createElement("h3",{className:"course--detail--title"},"Course"),o.a.createElement("h4",{className:"course--name"},r.title),o.a.createElement("p",null,"By Bogdan Daniel"),o.a.createElement(w.a,{children:r.description})),o.a.createElement("div",null,o.a.createElement("h3",{className:"course--detail--title"},"Estimated Time"),o.a.createElement("p",null,r.estimatedTime),o.a.createElement("h3",{className:"course--detail--title"},"Materials Needed"),o.a.createElement("ul",{className:"course--detail--list"},o.a.createElement(w.a,{children:r.materialsNeeded,remarkPlugins:[k.a]})))))))},j=t(11),O=t(20),N=t(127),T=function(e,n,t,r){r=r||"topRight",N.a[e]({message:n,description:t,placement:r})},C=function(e,n,t){return T("error",e,n,t)},S=function(){var e=Object(l.g)().courseId,n=Object(a.useState)({}),t=Object(f.a)(n,2),r=t[0],s=t[1],i=Object(l.f)(),c=Object(a.useState)([]),u=Object(f.a)(c,2),m=u[0],d=u[1];Object(a.useEffect)(Object(g.a)(h.a.mark(function n(){var t,r;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=new E.a,n.next=4,t.fetchCourse(e);case 4:(r=n.sent)&&s(r),n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}},n,null,[[0,8]])})),[]),Object(a.useEffect)(function(){p()},[r]);var p=function(){d([]),""==r.title&&d(function(e){return[].concat(Object(j.a)(e),["title is required"])}),""==r.materialsNeeded&&d(function(e){return[].concat(Object(j.a)(e),["materialsNeeded is required"])}),""==r.estimatedTime&&d(function(e){return[].concat(Object(j.a)(e),["estimatedTime is required"])})},b=function(){var n=Object(g.a)(h.a.mark(function n(t){var a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),p(),!(m.length>0)){n.next=6;break}m.forEach(function(e){return C("error",e)}),n.next=18;break;case 6:return n.prev=6,a=new E.a,n.next=10,a.updateCourse(r,e);case 10:0==n.sent.length?(T("success","succes","course updated ",void 0),i.push("/course-details/".concat(e))):C("error","couldn't updated course"),n.next=18;break;case 14:throw n.prev=14,n.t0=n.catch(6),C("error","couldn't updated course"),new Error(n.t0);case 18:case"end":return n.stop()}},n,null,[[6,14]])}));return function(e){return n.apply(this,arguments)}}();return o.a.createElement("main",null,o.a.createElement("div",{className:"wrap"},o.a.createElement("h2",null,"Update Course"),o.a.createElement("form",{onChange:function(e){e.preventDefault(),p();var n=e.target;n.classList.contains("title")?s(function(e){return Object(O.a)(Object(O.a)({},e),{},{title:n.value})}):n.classList.contains("description")?s(function(e){return Object(O.a)(Object(O.a)({},e),{},{description:n.value})}):n.classList.contains("estimatedTime")?s(function(e){return Object(O.a)(Object(O.a)({},e),{},{estimatedTime:n.value})}):n.classList.contains("materialsNeeded")&&s(function(e){return Object(O.a)(Object(O.a)({},e),{},{materialsNeeded:n.value})})},onSubmit:b},o.a.createElement("div",{className:"main--flex"},o.a.createElement("div",null,o.a.createElement("label",null,"Course Title"),o.a.createElement("input",{className:"title",id:"courseTitle",name:"courseTitle",type:"text",defaultValue:r.title}),o.a.createElement("p",null,"By Joe Smith"),o.a.createElement("label",null,"Course Description"),o.a.createElement("textarea",{className:"description",id:"courseDescription",name:"courseDescription",defaultValue:r.description})),o.a.createElement("div",null,o.a.createElement("label",null,"Estimated Time"),o.a.createElement("input",{className:"estimatedTime",id:"estimatedTime",name:"estimatedTime",type:"text",defaultValue:r.estimatedTime}),o.a.createElement("label",null,"Materials Needed"),o.a.createElement("textarea",{className:"materialsNeeded",id:"materialsNeeded",name:"materialsNeeded",defaultValue:r.materialsNeeded}))),o.a.createElement("button",{className:"button",type:"submit"},"Update Course"),o.a.createElement("button",{className:"button button-secondary"},"Cancel"))))},z=function(){return o.a.createElement(c.a,null,o.a.createElement(p,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/"}," ",o.a.createElement(x,null)),o.a.createElement(l.a,{path:"/course-details/:courseId"},o.a.createElement(y,null)),o.a.createElement(l.a,{path:"/course-update/:courseId"},o.a.createElement(S,null))),o.a.createElement(d,null))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root"))},38:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return l});var r=t(12),a=t.n(r),o=t(22),s=t(29),i=t(30),c=t(83),l=function(){function n(){Object(s.a)(this,n)}return Object(i.a)(n,[{key:"api",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s="/api/v1"+n,i={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==r&&(i.body=JSON.stringify(r)),a){var l=e.from("".concat(o.username,":").concat(o.password)).toString("base64");i.headers.Authorization="Basic ".concat(l)}return Object(c.a)(s,i)}},{key:"getCourses",value:function(){var e=Object(o.a)(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","GET");case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then(function(e){return e}));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(o.a)(a.a.mark(function e(n,t,r){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",n,!0,{username:t,password:r});case 2:if(201!=(o=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!=o.status){e.next=11;break}return e.abrupt("return",o.json().then(function(e){return e.errors}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n,t,r){return e.apply(this,arguments)}}()},{key:"fetchCourse",value:function(){var e=Object(o.a)(a.a.mark(function e(n){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(n),"GET");case 2:if(200!=(t=e.sent).status){e.next=10;break}return e.next=6,t.json().then(function(e){return e});case 6:return r=e.sent,e.abrupt("return",r);case 10:if(400!=t.status){e.next=14;break}return e.abrupt("return",null);case 14:throw new Error;case 15:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(o.a)(a.a.mark(function e(n,t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"PUT",n);case 2:if(200!==(r=e.sent).status){e.next=8;break}return console.log("ceva"),e.abrupt("return",[]);case 8:if(404!=r.status){e.next=12;break}return e.abrupt("return",r.json().then(function(e){return e.message}));case 12:throw new Error;case 13:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(o.a)(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/books/".concat(n),"DELETE");case 2:if(200!==(t=e.sent).status){e.next=8;break}return console.log("ceva"),e.abrupt("return",[]);case 8:if(404!=t.status){e.next=12;break}return e.abrupt("return",t.json().then(function(e){return e.message}));case 12:throw new Error;case 13:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(o.a)(a.a.mark(function e(n,t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signin","GET",null,!0,{username:n,password:t});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json().then(function(e){return e}));case 7:if(401!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(o.a)(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signup","POST",n);case 2:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==t.status){e.next=11;break}return e.abrupt("return",t.json().then(function(e){return e.errors}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}]),n}()}).call(this,t(109).Buffer)},94:function(e,n,t){e.exports=t(115)}},[[94,1,2]]]);
//# sourceMappingURL=main.ad784128.chunk.js.map