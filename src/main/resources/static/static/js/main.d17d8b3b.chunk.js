(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,n,t){"use strict";t.r(n);var a,r=t(0),s=t.n(r),c=t(34),o=t.n(c),i=t(15),l=t(14),u=t(78),m=t(79),d=(t(100),Object(m.a)(a||(a=Object(u.a)(["\n\n\n/* resert */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}nav ol,nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:700;}em{font-style:italic;}\n\n\n\n\n/* global.css */\n* {\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 1.25em;\n}\nbody {\n    font-family: 'Work Sans', sans-serif;\n}\nh2 {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-bottom: 1rem;\n}\np {\n    font-weight: 300;\n    margin-bottom: 1.5rem;\n    line-height: 1.5;\n    hyphens: auto;\n}\na {\n    color: #939;\n    text-decoration: none;\n}\n.wrap {\n    max-width: 1250px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nheader {\n    background: #57496e;\n    color: #fff;\n    padding: 1rem 0;\n    margin-bottom: 2rem;\n}\n.header--flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.header--logo a {\n    font-size: 1.25rem;\n    color: #fff;\n}\nheader li {\n    font-size: .8rem;\n}\nheader nav a {\n    color: #dbd;\n}\nheader nav a:hover {\n    color: #fff;\n}\n\n.header--signedin li {\n    text-align: right;\n    line-height: 1.25;\n}\n.header--signedout li {\n    display: inline-block;\n    margin-left: .5rem;\n}\n.course--module {\n    background: #7c689b;\n    border-radius: .5rem;\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n    display: block;\n}\n.course--label {\n    color: #fff;\n    font-size: .9rem;\n    font-weight: 400;\n    margin-bottom: .25rem;\n}\n.course--title {\n    color: #fff;\n    font-weight: 700;\n    font-size: 1.25rem;\n}\n.course--add--module {\n    background: #ddd9e4;\n    color: #57496e;\n    font-weight: 300;\n    font-size: 1.25rem;\n}\n.course--add--title .add {\n    width: 20px;\n    height: auto;\n    margin-right: 5px;\n    fill: #57496e;\n}\n.course--detail--title {\n    padding-bottom: .25rem;\n    border-bottom: 1px solid #888;\n    margin: 3rem 0 .5rem;\n    font-size: .9rem;\n    color: #555;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.course--name {\n    font-size: 2rem;\n    margin-bottom: .5rem;\n    font-weight: 700;\n    color: #47395e;\n}\n.course--detail--list {\n    font-weight: 300;\n    margin: 0 0 1.5rem 1rem;\n    line-height: 1.5;\n}\n.actions--bar {\n    background: #e9e5f0;\n    padding: 1rem 0;\n    margin: -2rem 0 2rem;\n}\n.validation--errors {\n    background: #e9e5f0;\n    padding: 1rem;\n    border-radius: .5rem;\n    margin-bottom: 2.5rem;\n}\n.validation--errors h3 {\n    color: #800;\n    font-size: 1.25rem;\n    margin-bottom: .5rem;\n}\n.validation--errors ul {\n    font-weight: 300;\n    margin-left: 1rem;\n    line-height: 1.25;\n}\n.validation--errors li {\n    margin-bottom: .5rem;\n}\n.validation--errors li:last-child {\n    margin-bottom: 0;\n}\n\n.form--centered {\n    max-width: 510px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nform {\n    margin-bottom: 2.5rem;\n}\nlabel {\n    display: block;\n    font-weight: 300;\n    margin-bottom: .25rem;\n}\ninput, textarea {\n    display: block;\n    width: 100%;\n    color: #332a40;\n    border-radius: .5rem;\n    border: 1px solid #8c789b;\n    padding: .5rem;\n    margin-bottom: 1rem;\n    font-family: 'Work Sans', sans-serif;\n    font-size: .8rem;\n}\ntextarea {\n    min-height: 300px;\n}\n.button {\n    background: #7c689b;\n    color: #fff;\n    font-size: 1rem;\n    padding: .75rem 1.5rem;\n    border: 0;\n    margin: 0 0 .5rem 0;\n    display: block;\n    width: 210px;\n    text-align: center;\n    border-radius: .5rem;\n    font-weight: bold;\n    transition: background 0.2s;\n}\n.button:last-child {\n    margin-bottom: 0;\n}\n.button:not(.button-secondary):hover {\n    background: #63537d;\n    cursor: pointer;\n}\n.button-secondary {\n    color: #7c689b;\n    background: none;\n    box-shadow: 0 0 0 2px #7c689b inset;\n    transition: box-shadow 0.2s, color 0.2s;\n}\n.button-secondary:hover {\n    color: #63537d;\n    box-shadow: 0 0 0 2px #63537d inset;\n    cursor: pointer;\n}\ninput:focus, button:focus, .button:focus, textarea:focus {\n    border: none;\n    border-radius: 0;\n    outline: 2px solid #332a40;\n}\n\n.footer{\n\n   \n    width: 75px;\n\n  \n    \n}\n\nfooter{\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top:40vh;\n}\n\n\n@media screen and (min-width: 600px) {\n    .header--signedin li {\n        display: inline-block;\n        margin-left: .5rem;\n        line-height: 1;\n    }\n    .main--grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        column-gap: 1.5rem;\n        grid-auto-rows: 1fr;\n    }\n   \n}\n@media screen and (min-width: 800px) {\n    .main--grid {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    .main--flex {\n        display: flex;\n    }\n    .main--flex div:first-child {\n        flex-basis: 62%;\n    }\n    .main--flex div:last-child {\n        margin-left: 8%;\n        flex-basis: 30%;\n    }\n    .course--detail--title {\n        margin: 1.5rem 0 .5rem;\n    }\n    .button {\n        margin: 0 .5rem 0 0;\n        display: inline-block;\n    }\n}\n\n\n\n\n\n\n\n"])))),f=t(13),b=t(36),p=t.n(b),h=Object(r.createContext)(),g=function(e){var n=e.children,t=Object(r.useState)(void 0),a=Object(f.a)(t,2),c=a[0],o=a[1];return Object(r.useEffect)(function(){p.a.get("authenticatedUser")&&o(JSON.parse(p.a.get("authenticatedUser")))},[]),s.a.createElement(h.Provider,{value:[c,o]},n)},v=function(){var e=Object(r.useContext)(h),n=Object(f.a)(e,2),t=n[0];n[1];return Object(r.useEffect)(function(){t&&(p.a.set("authenticatedUser",JSON.stringify(t)),console.log("aici"))}),s.a.createElement("header",null,s.a.createElement("div",{className:"wrap header--flex"},s.a.createElement("h1",{className:"header--logo"},s.a.createElement(i.b,{to:"/"},"Courses")),s.a.createElement("nav",null,t?s.a.createElement("ul",{className:"header--signedout"},s.a.createElement("li",null,"Welcome, ",t.firstName+" "+t.lastName," !"),s.a.createElement("li",null,s.a.createElement(i.b,{to:"/sign-out"},"Sign Out"))):s.a.createElement("ul",{className:"header--signedout"},s.a.createElement("li",null,s.a.createElement(i.b,{to:"/sign-in"},"Sign In")),s.a.createElement("li",null,s.a.createElement(i.b,{to:"/sign-up"},"Sign Up"))))))},E=t(11),w=t.n(E),x=t(17),j=function(e){var n=e.course;return s.a.createElement(i.b,{to:"/course-details/".concat(n.id),className:"course--module course--link"},s.a.createElement("h2",{className:"course--label"},"Course"),s.a.createElement("h3",{className:"course--title"},n.title))},k=t(33),O=function(){var e=Object(r.useState)([]),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)(Object(x.a)(w.a.mark(function e(){var n,t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.a,e.prev=1,e.next=4,n.getCourses();case 4:t=e.sent,a(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),[]),s.a.createElement("main",null,s.a.createElement("div",{className:"wrap main--grid"},t.map(function(e){return s.a.createElement(j,{key:e.id,course:e})}),s.a.createElement(i.b,{className:"course--module course--add--module",to:"/create-course"},s.a.createElement("span",{className:"course--add--title"},s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},s.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))},y=t(126),N=t(91),S=function(e){e.id;var n=Object(r.useState)({}),t=Object(f.a)(n,2),a=t[0],c=t[1],o=Object(l.h)().courseId;return Object(r.useEffect)(Object(x.a)(w.a.mark(function e(){var n,t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.a,e.prev=1,e.next=4,n.fetchCourse(o);case 4:t=e.sent,c(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),[]),s.a.createElement("main",null,s.a.createElement("div",{className:"actions--bar"},s.a.createElement("div",{className:"wrap"},s.a.createElement(i.b,{className:"button",to:"/course-update/".concat(o)},"Update Course"))),s.a.createElement("div",{className:"wrap"},s.a.createElement("h2",null,"Course Detail"),s.a.createElement("form",null,s.a.createElement("div",{className:"main--flex"},s.a.createElement("div",null,s.a.createElement("h3",{className:"course--detail--title"},"Course"),s.a.createElement("h4",{className:"course--name"},a.title),s.a.createElement("p",null,"By Bogdan Daniel"),s.a.createElement(y.a,{children:a.description})),s.a.createElement("div",null,s.a.createElement("h3",{className:"course--detail--title"},"Estimated Time"),s.a.createElement("p",null,a.estimatedTime),s.a.createElement("h3",{className:"course--detail--title"},"Materials Needed"),s.a.createElement("ul",{className:"course--detail--list"},s.a.createElement(y.a,{children:a.materialsNeeded,remarkPlugins:[N.a]})))))))},C=t(8),z=(t(23),t(127)),U=function(e,n,t,a){a=a||"topRight",z.a[e]({message:n,description:t,placement:a})},q=function(e,n,t){return U("success",e,n,t)},A=function(e,n,t){return U("error",e,n,t)},T=function(){var e=Object(r.useState)(""),n=Object(f.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(f.a)(c,2),u=o[0],m=o[1],d=Object(r.useState)(!1),b=Object(f.a)(d,2),p=(b[0],b[1],Object(r.useContext)(h)),g=Object(f.a)(p,2),v=(g[0],g[1]),E=Object(r.useState)(!1),j=Object(f.a)(E,2),O=(j[0],j[1]),y=Object(l.g)(),N=function(){var e=Object(x.a)(w.a.mark(function e(){var n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.a,e.prev=1,e.next=4,n.getUser(t,u);case 4:a=e.sent,v({firstName:a.firstName,lastName:a.lastName}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),O(!0),new Error(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(){return e.apply(this,arguments)}}();return s.a.createElement("main",null,s.a.createElement("div",{class:"form--centered"},s.a.createElement("h2",null,"Sign In"),s.a.createElement("form",{onChange:function(e){e.preventDefault();var n=e.target;"email"==n.type?a(n.value):"password"==n.type&&m(n.value)},onSubmit:function(e){e.preventDefault(),N().then(function(e){q("Login succesfull!","Hello ".concat(t,"!")),y.push("/")}).catch(function(){A("Login failed","Username or password incorrect")})}},s.a.createElement("label",null,"Email Address"),s.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"email"}),s.a.createElement("label",null,"Password"),s.a.createElement("input",{id:"password",name:"password",type:"password"}),s.a.createElement("button",{className:"button",type:"submit"},"Sign In"),s.a.createElement("button",{className:"button",onClick:function(){y.push("/")}},"Cancel")),s.a.createElement("p",null,"Don't have a user account? Click here to ",s.a.createElement(i.b,{to:"/sign-up"},"Sign Up"),"!")))},D=function(){var e=Object(r.useContext)(h),n=Object(f.a)(e,2),t=(n[0],n[1]);return Object(r.useEffect)(function(){t(null),p.a.remove("authenticatedUser")},[]),s.a.createElement(l.a,{to:"/"})},L=function(e){var n=e.children,t=Object(r.useContext)(h),a=Object(f.a)(t,2),c=a[0];a[1];return s.a.createElement(l.b,{path:"/course-details/:courseId"},c?s.a.createElement(s.a.Fragment,null,n):s.a.createElement(l.a,{to:"/sign-in"}))};var I=function(){var e=Object(r.useState)(""),n=Object(f.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(f.a)(c,2),u=o[0],m=o[1],d=Object(r.useState)(""),b=Object(f.a)(d,2),p=b[0],g=b[1],v=Object(r.useState)(""),E=Object(f.a)(v,2),j=E[0],O=E[1],y=Object(r.useState)([]),N=Object(f.a)(y,2),S=N[0],z=N[1],U=Object(r.useContext)(h),T=Object(f.a)(U,2),D=(T[0],T[1]),L=Object(l.g)(),I=function(){z([]),""==t&&(console.log("aici============="),z(function(e){return[].concat(Object(C.a)(e),["firstName is required"])})),""==u&&z(function(e){return[].concat(Object(C.a)(e),["lastname is required"])}),""==p&&z(function(e){return[].concat(Object(C.a)(e),["invalid email "])}),""==j&&z(function(e){return[].concat(Object(C.a)(e),["password  is required "])}),0==function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(e)}(j)&&z(function(e){return[].concat(Object(C.a)(e),["Must contain a lowercase, uppercase letter and a number"])})};Object(r.useEffect)(function(){I()},[t,u,p,j]);var P=function(){var e=Object(x.a)(w.a.mark(function e(n){var a,r,s;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),I(),console.log(S.length),!(S.length>0)){e.next=7;break}S.forEach(function(e){return A("error",e)}),e.next=20;break;case 7:return e.prev=7,a=new k.a,r={firstName:t,lastName:u,emailAddress:p,password:j},e.next=12,a.createUser(r);case 12:0==(s=e.sent).length?(D(r),q("Succes","Hello ".concat(t)),L.push("/")):A("error",s),e.next=20;break;case 16:throw e.prev=16,e.t0=e.catch(7),A("error","couldn't register"),new Error(e.t0);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(n){return e.apply(this,arguments)}}();return s.a.createElement("main",null,s.a.createElement("div",{className:"form--centered"},s.a.createElement("h2",null,"Sign Up"),s.a.createElement("form",{onChange:function(e){e.preventDefault(),I();var n=e.target;n.classList.contains("firstName")?a(n.value):n.classList.contains("lastName")?m(n.value):n.classList.contains("emailAddress")?g(n.value):n.classList.contains("password")&&O(n.value)},onSubmit:P},s.a.createElement("label",null,"First Name"),s.a.createElement("input",{id:"firstName",name:"firstName",className:"firstName",type:"text"}),s.a.createElement("label",null,"Last Name"),s.a.createElement("input",{id:"lastName",name:"lastName",type:"text",className:"lastName"}),s.a.createElement("label",null,"Email Address"),s.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"email",className:"emailAddress"}),s.a.createElement("label",null,"Password"),s.a.createElement("input",{id:"password",name:"password",type:"password",className:"password"}),s.a.createElement("button",{className:"button",type:"submit"},"Sign Up"),s.a.createElement("button",{className:"button button-secondary"},"Cancel")),s.a.createElement("p",null,"Already have a user account? Click here to ",s.a.createElement(i.b,{to:"/sign-in",href:"sign-in.html"},"sign in"),"!")))},P=function(){return s.a.createElement(i.a,null,s.a.createElement(g,null,s.a.createElement(v,null),s.a.createElement(l.d,null,s.a.createElement(l.b,{exact:!0,path:"/"}," ",s.a.createElement(O,null)),s.a.createElement(L,{path:"/course-details/:courseId"},s.a.createElement(S,null)),s.a.createElement(l.b,{path:"/sign-in/"},s.a.createElement(T,null)),s.a.createElement(l.b,{path:"/sign-up"},s.a.createElement(I,null)),s.a.createElement(l.b,{path:"/sign-out"},s.a.createElement(D,null)))),s.a.createElement(d,null))};o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(P,null)),document.getElementById("root"))},33:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return l});var a=t(11),r=t.n(a),s=t(17),c=t(30),o=t(31),i=t(84),l=function(){function n(){Object(c.a)(this,n)}return Object(o.a)(n,[{key:"api",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c="/api/v1"+n,o={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(o.body=JSON.stringify(a)),r){var l=e.from("".concat(s.username,":").concat(s.password)).toString("base64");o.headers.Authorization="Basic ".concat(l)}return Object(i.a)(c,o)}},{key:"getCourses",value:function(){var e=Object(s.a)(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","GET");case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then(function(e){return e}));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(s.a)(r.a.mark(function e(n,t,a){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",n,!0,{username:t,password:a});case 2:if(201!=(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!=s.status){e.next=11;break}return e.abrupt("return",s.json().then(function(e){return e.errors}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()},{key:"fetchCourse",value:function(){var e=Object(s.a)(r.a.mark(function e(n){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(n),"GET");case 2:if(200!=(t=e.sent).status){e.next=10;break}return e.next=6,t.json().then(function(e){return e});case 6:return a=e.sent,e.abrupt("return",a);case 10:if(400!=t.status){e.next=14;break}return e.abrupt("return",null);case 14:throw new Error;case 15:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(s.a)(r.a.mark(function e(n,t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"PUT",n);case 2:if(200!==(a=e.sent).status){e.next=8;break}return console.log("ceva"),e.abrupt("return",[]);case 8:if(404!=a.status){e.next=12;break}return e.abrupt("return",a.json().then(function(e){return e.message}));case 12:throw new Error;case 13:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(s.a)(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/books/".concat(n),"DELETE");case 2:if(200!==(t=e.sent).status){e.next=8;break}return console.log("ceva"),e.abrupt("return",[]);case 8:if(404!=t.status){e.next=12;break}return e.abrupt("return",t.json().then(function(e){return e.message}));case 12:throw new Error;case 13:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(s.a)(r.a.mark(function e(n,t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signin","GET",null,!0,{username:n,password:t});case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",a.json().then(function(e){return e}));case 7:if(401!==a.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(s.a)(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signup","POST",n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!=t.status){e.next=11;break}return e.abrupt("return",t.json().then(function(e){return e.message}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}]),n}()}).call(this,t(109).Buffer)},95:function(e,n,t){e.exports=t(115)}},[[95,1,2]]]);
//# sourceMappingURL=main.d17d8b3b.chunk.js.map