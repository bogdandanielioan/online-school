(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(34),i=n.n(s),o=n(15),l=n(14),u=n(78),m=n(79),d=(n(100),Object(m.a)(a||(a=Object(u.a)(["\n\n\n/* resert */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}nav ol,nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:700;}em{font-style:italic;}\n\n\n\n\n/* global.css */\n* {\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 1.25em;\n}\nbody {\n    font-family: 'Work Sans', sans-serif;\n}\nh2 {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-bottom: 1rem;\n}\np {\n    font-weight: 300;\n    margin-bottom: 1.5rem;\n    line-height: 1.5;\n    hyphens: auto;\n}\na {\n    color: #939;\n    text-decoration: none;\n}\n.wrap {\n    max-width: 1250px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nheader {\n    background: #57496e;\n    color: #fff;\n    padding: 1rem 0;\n    margin-bottom: 2rem;\n}\n.header--flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.header--logo a {\n    font-size: 1.25rem;\n    color: #fff;\n}\nheader li {\n    font-size: .8rem;\n}\nheader nav a {\n    color: #dbd;\n}\nheader nav a:hover {\n    color: #fff;\n}\n\n.header--signedin li {\n    text-align: right;\n    line-height: 1.25;\n}\n.header--signedout li {\n    display: inline-block;\n    margin-left: .5rem;\n}\n.course--module {\n    background: #7c689b;\n    border-radius: .5rem;\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n    display: block;\n}\n.course--label {\n    color: #fff;\n    font-size: .9rem;\n    font-weight: 400;\n    margin-bottom: .25rem;\n}\n.course--title {\n    color: #fff;\n    font-weight: 700;\n    font-size: 1.25rem;\n}\n.course--add--module {\n    background: #ddd9e4;\n    color: #57496e;\n    font-weight: 300;\n    font-size: 1.25rem;\n}\n.course--add--title .add {\n    width: 20px;\n    height: auto;\n    margin-right: 5px;\n    fill: #57496e;\n}\n.course--detail--title {\n    padding-bottom: .25rem;\n    border-bottom: 1px solid #888;\n    margin: 3rem 0 .5rem;\n    font-size: .9rem;\n    color: #555;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.course--name {\n    font-size: 2rem;\n    margin-bottom: .5rem;\n    font-weight: 700;\n    color: #47395e;\n}\n.course--detail--list {\n    font-weight: 300;\n    margin: 0 0 1.5rem 1rem;\n    line-height: 1.5;\n}\n.actions--bar {\n    background: #e9e5f0;\n    padding: 1rem 0;\n    margin: -2rem 0 2rem;\n}\n.validation--errors {\n    background: #e9e5f0;\n    padding: 1rem;\n    border-radius: .5rem;\n    margin-bottom: 2.5rem;\n}\n.validation--errors h3 {\n    color: #800;\n    font-size: 1.25rem;\n    margin-bottom: .5rem;\n}\n.validation--errors ul {\n    font-weight: 300;\n    margin-left: 1rem;\n    line-height: 1.25;\n}\n.validation--errors li {\n    margin-bottom: .5rem;\n}\n.validation--errors li:last-child {\n    margin-bottom: 0;\n}\n\n.form--centered {\n    max-width: 510px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\nform {\n    margin-bottom: 2.5rem;\n}\nlabel {\n    display: block;\n    font-weight: 300;\n    margin-bottom: .25rem;\n}\ninput, textarea {\n    display: block;\n    width: 100%;\n    color: #332a40;\n    border-radius: .5rem;\n    border: 1px solid #8c789b;\n    padding: .5rem;\n    margin-bottom: 1rem;\n    font-family: 'Work Sans', sans-serif;\n    font-size: .8rem;\n}\ntextarea {\n    min-height: 300px;\n}\n.button {\n    background: #7c689b;\n    color: #fff;\n    font-size: 1rem;\n    padding: .75rem 1.5rem;\n    border: 0;\n    margin: 0 0 .5rem 0;\n    display: block;\n    width: 210px;\n    text-align: center;\n    border-radius: .5rem;\n    font-weight: bold;\n    transition: background 0.2s;\n}\n.button:last-child {\n    margin-bottom: 0;\n}\n.button:not(.button-secondary):hover {\n    background: #63537d;\n    cursor: pointer;\n}\n.button-secondary {\n    color: #7c689b;\n    background: none;\n    box-shadow: 0 0 0 2px #7c689b inset;\n    transition: box-shadow 0.2s, color 0.2s;\n}\n.button-secondary:hover {\n    color: #63537d;\n    box-shadow: 0 0 0 2px #63537d inset;\n    cursor: pointer;\n}\ninput:focus, button:focus, .button:focus, textarea:focus {\n    border: none;\n    border-radius: 0;\n    outline: 2px solid #332a40;\n}\n\n.footer{\n\n   \n    width: 75px;\n\n  \n    \n}\n\nfooter{\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top:40vh;\n}\n\n\n@media screen and (min-width: 600px) {\n    .header--signedin li {\n        display: inline-block;\n        margin-left: .5rem;\n        line-height: 1;\n    }\n    .main--grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        column-gap: 1.5rem;\n        grid-auto-rows: 1fr;\n    }\n   \n}\n@media screen and (min-width: 800px) {\n    .main--grid {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    .main--flex {\n        display: flex;\n    }\n    .main--flex div:first-child {\n        flex-basis: 62%;\n    }\n    .main--flex div:last-child {\n        margin-left: 8%;\n        flex-basis: 30%;\n    }\n    .course--detail--title {\n        margin: 1.5rem 0 .5rem;\n    }\n    .button {\n        margin: 0 .5rem 0 0;\n        display: inline-block;\n    }\n}\n\n\n\n\n\n\n\n"])))),f=n(9),b=n(36),p=n.n(b),h=Object(r.createContext)(),v=function(e){var t=e.children,n=Object(r.useState)(void 0),a=Object(f.a)(n,2),s=a[0],i=a[1];return Object(r.useEffect)(function(){p.a.get("authenticatedUser")&&i(JSON.parse(p.a.get("authenticatedUser")))},[]),c.a.createElement(h.Provider,{value:[s,i]},t)},E=function(){var e=Object(r.useContext)(h),t=Object(f.a)(e,2),n=t[0];t[1];return Object(r.useEffect)(function(){n&&p.a.set("authenticatedUser",JSON.stringify(n))}),c.a.createElement("header",null,c.a.createElement("div",{className:"wrap header--flex"},c.a.createElement("h1",{className:"header--logo"},c.a.createElement(o.b,{to:"/"},"Courses")),c.a.createElement("nav",null,n?c.a.createElement("ul",{className:"header--signedout"},c.a.createElement("li",null,"Welcome, ",n.firstName+" "+n.lastName," !"),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/sign-out"},"Sign Out"))):c.a.createElement("ul",{className:"header--signedout"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/sign-in"},"Sign In")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/sign-up"},"Sign Up"))))))},g=n(10),w=n.n(g),x=n(16),j=function(e){var t=e.course;return c.a.createElement(o.b,{to:"/course-details/".concat(t.id),className:"course--module course--link"},c.a.createElement("h2",{className:"course--label"},"Course"),c.a.createElement("h3",{className:"course--title"},t.title))},O=n(24),N=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)(function(){(function(){var e=Object(x.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a,e.prev=1,e.next=4,t.getCourses();case 4:n=e.sent,a(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(){return e.apply(this,arguments)}})()()},[]),c.a.createElement("main",null,c.a.createElement("div",{className:"wrap main--grid"},n.map(function(e){return c.a.createElement(j,{key:e.id,course:e})}),c.a.createElement(o.b,{className:"course--module course--add--module",to:"/create-course"},c.a.createElement("span",{className:"course--add--title"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},c.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))},k=n(126),y=n(91),C=n(127),S=function(e,t,n,a){a=a||"topRight",C.a[e]({message:t,description:n,placement:a})},T=function(e,t,n){return S("success",e,t,n)},q=function(e,t,n){return S("error",e,t,n)},D=function(){var e=Object(r.useState)({}),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(r.useContext)(h),i=Object(f.a)(s,2),u=i[0],m=(i[1],Object(l.h)().courseId),d=Object(l.g)();Object(r.useEffect)(Object(x.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a,e.prev=1,e.next=4,t.fetchCourse(m);case 4:n=e.sent,a(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),[]);var b=function(){var e=Object(x.a)(w.a.mark(function e(t){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new O.a,e.prev=2,e.next=5,a.deleteCourse(m,u.emailAddress,u.pass);case 5:0==(r=e.sent).length?(T("Succes","the course  ".concat(n.title," was deleted")),d.push("/")):q("error",r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),q("error","Can't erase course");case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("main",null,c.a.createElement("div",{className:"actions--bar"},c.a.createElement("div",{className:"wrap"},c.a.createElement(o.b,{className:"button",to:"/course-update/".concat(m)},"Update Course"),c.a.createElement("a",{className:"button",onClick:b},"Delete Course"),c.a.createElement(o.b,{className:"button button-secondary",to:"/"},"Return to List"))),c.a.createElement("div",{className:"wrap"},c.a.createElement("h2",null,"Course Detail"),c.a.createElement("form",null,c.a.createElement("div",{className:"main--flex"},c.a.createElement("div",null,c.a.createElement("h3",{className:"course--detail--title"},"Course"),c.a.createElement("h4",{className:"course--name"},n.title),c.a.createElement("p",null,"By "+u.firstName+"  "+u.lastName),c.a.createElement(k.a,{children:n.description})),c.a.createElement("div",null,c.a.createElement("h3",{className:"course--detail--title"},"Estimated Time"),c.a.createElement("p",null,n.estimatedTime),c.a.createElement("h3",{className:"course--detail--title"},"Materials Needed"),c.a.createElement("ul",{className:"course--detail--list"},c.a.createElement(k.a,{children:n.materialsNeeded,remarkPlugins:[y.a]})))))))},L=n(6),z=n(18),A=function(){var e=Object(l.h)().courseId,t=Object(r.useState)({}),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(l.g)(),o=Object(r.useState)([]),u=Object(f.a)(o,2),m=u[0],d=u[1];Object(r.useEffect)(Object(x.a)(w.a.mark(function t(){var n,a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=new O.a,t.next=4,n.fetchCourse(e);case 4:(a=t.sent)&&s(a),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])})),[]),Object(r.useEffect)(function(){b()},[a]);var b=function(){d([]),""==a.title&&d(function(e){return[].concat(Object(L.a)(e),["title is required"])}),""==a.materialsNeeded&&d(function(e){return[].concat(Object(L.a)(e),["materialsNeeded is required"])}),""==a.estimatedTime&&d(function(e){return[].concat(Object(L.a)(e),["estimatedTime is required"])})},p=function(){var t=Object(x.a)(w.a.mark(function t(n){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),b(),!(m.length>0)){t.next=6;break}m.forEach(function(e){return q("error",e)}),t.next=18;break;case 6:return t.prev=6,r=new O.a,t.next=10,r.updateCourse(a,e);case 10:0==t.sent.length?(T("succes","course updated "),i.push("/course-details/".concat(e))):q("error","couldn't updated course"),t.next=18;break;case 14:throw t.prev=14,t.t0=t.catch(6),q("error","couldn't updated course"),new Error(t.t0);case 18:case"end":return t.stop()}},t,null,[[6,14]])}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("main",null,c.a.createElement("div",{className:"wrap"},c.a.createElement("h2",null,"Update Course"),c.a.createElement("form",{onChange:function(e){e.preventDefault(),b();var t=e.target;t.classList.contains("title")?s(function(e){return Object(z.a)(Object(z.a)({},e),{},{title:t.value})}):t.classList.contains("description")?s(function(e){return Object(z.a)(Object(z.a)({},e),{},{description:t.value})}):t.classList.contains("estimatedTime")?s(function(e){return Object(z.a)(Object(z.a)({},e),{},{estimatedTime:t.value})}):t.classList.contains("materialsNeeded")&&s(function(e){return Object(z.a)(Object(z.a)({},e),{},{materialsNeeded:t.value})})},onSubmit:p},c.a.createElement("div",{className:"main--flex"},c.a.createElement("div",null,c.a.createElement("label",null,"Course Title"),c.a.createElement("input",{className:"title",id:"courseTitle",name:"courseTitle",type:"text",defaultValue:a.title}),c.a.createElement("p",null,"By Joe Smith"),c.a.createElement("label",null,"Course Description"),c.a.createElement("textarea",{className:"description",id:"courseDescription",name:"courseDescription",defaultValue:a.description})),c.a.createElement("div",null,c.a.createElement("label",null,"Estimated Time"),c.a.createElement("input",{className:"estimatedTime",id:"estimatedTime",name:"estimatedTime",type:"text",defaultValue:a.estimatedTime}),c.a.createElement("label",null,"Materials Needed"),c.a.createElement("textarea",{className:"materialsNeeded",id:"materialsNeeded",name:"materialsNeeded",defaultValue:a.materialsNeeded}))),c.a.createElement("button",{className:"button",type:"submit"},"Update Course"),c.a.createElement("button",{className:"button button-secondary"},"Cancel"))))},U=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(f.a)(s,2),u=i[0],m=i[1],d=Object(r.useState)([]),b=Object(f.a)(d,2),p=b[0],v=b[1],E=Object(r.useContext)(h),g=Object(f.a)(E,2),j=(g[0],g[1]),N=Object(l.g)(),k=function(){v([]),""==n&&v(function(e){return[].concat(Object(L.a)(e),["invalid email "])}),""==u&&v(function(e){return[].concat(Object(L.a)(e),["password  is required "])})};Object(r.useEffect)(function(){k()},[n,u]);var y=function(){var e=Object(x.a)(w.a.mark(function e(t){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k(),!(p.length>0)){e.next=6;break}p.forEach(function(e){return q("error",e)}),e.next=18;break;case 6:return e.prev=6,a=new O.a,e.next=10,a.getUser(n,u);case 10:(r=e.sent)?(j(Object(z.a)(Object(z.a)({},r),{},{pass:u})),T("Succes","Hello ".concat(r.firstName,"!!")),N.push("/")):q("You have entered an invalid username or password",r),e.next=18;break;case 14:throw e.prev=14,e.t0=e.catch(6),q("error","couldn't register"),new Error(e.t0);case 18:case"end":return e.stop()}},e,null,[[6,14]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("main",null,c.a.createElement("div",{class:"form--centered"},c.a.createElement("h2",null,"Sign In"),c.a.createElement("form",{onChange:function(e){e.preventDefault(),k();var t=e.target;t.classList.contains("emailAddress")?a(t.value):t.classList.contains("password")&&m(t.value)},onSubmit:y},c.a.createElement("label",null,"Email Address"),c.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"email",className:"emailAddress"}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{id:"password",name:"password",type:"password",className:"password"}),c.a.createElement("button",{className:"button",type:"submit"},"Sign In"),c.a.createElement("button",{className:"button",onClick:function(){N.push("/")}},"Cancel")),c.a.createElement("p",null,"Don't have a user account? Click here to ",c.a.createElement(o.b,{to:"/sign-up"},"Sign Up"),"!")))},I=function(){var e=Object(r.useContext)(h),t=Object(f.a)(e,2),n=(t[0],t[1]);return Object(r.useEffect)(function(){n(null),p.a.remove("authenticatedUser")},[]),c.a.createElement(l.a,{to:"/"})},P=function(e){var t=e.children,n=Object(r.useContext)(h),a=Object(f.a)(n,2),s=a[0];a[1];return c.a.createElement(l.b,{path:"/course-details/:courseId"},s?c.a.createElement(c.a.Fragment,null,t):c.a.createElement(l.a,{to:"/sign-in"}))};var B=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(f.a)(s,2),u=i[0],m=i[1],d=Object(r.useState)(""),b=Object(f.a)(d,2),p=b[0],v=b[1],E=Object(r.useState)(""),g=Object(f.a)(E,2),j=g[0],N=g[1],k=Object(r.useState)([]),y=Object(f.a)(k,2),C=y[0],S=y[1],D=Object(r.useContext)(h),z=Object(f.a)(D,2),A=(z[0],z[1]),U=Object(l.g)(),I=function(){S([]),""==n&&S(function(e){return[].concat(Object(L.a)(e),["firstName is required"])}),""==u&&S(function(e){return[].concat(Object(L.a)(e),["lastname is required"])}),""==p&&S(function(e){return[].concat(Object(L.a)(e),["invalid email "])}),""==j&&S(function(e){return[].concat(Object(L.a)(e),["password  is required "])}),0==function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(e)}(j)&&S(function(e){return[].concat(Object(L.a)(e),["Must contain a lowercase, uppercase letter and a number"])})};Object(r.useEffect)(function(){I()},[n,u,p,j]);var P=function(){var e=Object(x.a)(w.a.mark(function e(t){var a,r,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(),!(C.length>0)){e.next=6;break}C.forEach(function(e){return q("error",e)}),e.next=19;break;case 6:return e.prev=6,a=new O.a,r={firstName:n,lastName:u,emailAddress:p,password:j},e.next=11,a.createUser(r);case 11:0==(c=e.sent).length?(A(r),T("Succes","Hello ".concat(n)),U.push("/")):q("error",c),e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(6),q("error","couldn't register"),new Error(e.t0);case 19:case"end":return e.stop()}},e,null,[[6,15]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("main",null,c.a.createElement("div",{className:"form--centered"},c.a.createElement("h2",null,"Sign Up"),c.a.createElement("form",{onChange:function(e){e.preventDefault(),I();var t=e.target;t.classList.contains("firstName")?a(t.value):t.classList.contains("lastName")?m(t.value):t.classList.contains("emailAddress")?v(t.value):t.classList.contains("password")&&N(t.value)},onSubmit:P},c.a.createElement("label",null,"First Name"),c.a.createElement("input",{id:"firstName",name:"firstName",className:"firstName",type:"text"}),c.a.createElement("label",null,"Last Name"),c.a.createElement("input",{id:"lastName",name:"lastName",type:"text",className:"lastName"}),c.a.createElement("label",null,"Email Address"),c.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"email",className:"emailAddress"}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{id:"password",name:"password",type:"password",className:"password"}),c.a.createElement("button",{className:"button",type:"submit"},"Sign Up"),c.a.createElement("button",{className:"button button-secondary"},c.a.createElement(o.b,{to:"/",href:"sign-in.html"},"Cancel"))),c.a.createElement("p",null,"Already have a user account? Click here to ",c.a.createElement(o.b,{to:"/sign-in",href:"sign-in.html"},"sign in"),"!")))},J=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(f.a)(s,2),o=i[0],u=i[1],m=Object(r.useState)(""),d=Object(f.a)(m,2),b=d[0],p=d[1],v=Object(r.useState)(""),E=Object(f.a)(v,2),g=E[0],j=E[1],N=Object(r.useState)([]),k=Object(f.a)(N,2),y=k[0],C=k[1],S=Object(r.useContext)(h),D=Object(f.a)(S,2),z=D[0],A=(D[1],Object(l.g)());Object(r.useEffect)(function(){I()},[n,o,b,g]);var U=function(){var e=Object(x.a)(w.a.mark(function e(t){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(),!(y.length>0)){e.next=6;break}y.forEach(function(e){return q("error",e)}),e.next=19;break;case 6:return e.prev=6,a=new O.a,r={title:n,description:o,estimatedTime:b,materialsNeeded:g,userId:z.id},e.next=11,a.createCourse(r,z.emailAddress,z.password);case 11:e.sent?(T("succes","course create "),A.push("/")):q("error","couldn't create course"),e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(6),q("error","couldn't create course"),new Error(e.t0);case 19:case"end":return e.stop()}},e,null,[[6,15]])}));return function(t){return e.apply(this,arguments)}}(),I=function(){C([]),""==n&&C(function(e){return[].concat(Object(L.a)(e),["title is required"])}),""==g&&C(function(e){return[].concat(Object(L.a)(e),["materialsNeeded is required"])}),""==b&&C(function(e){return[].concat(Object(L.a)(e),["estimatedTime is required"])}),""==o&&C(function(e){return[].concat(Object(L.a)(e),["description is required"])}),o.length<12&&C(function(e){return[].concat(Object(L.a)(e),["description should have more than 12 characters"])})};return c.a.createElement("main",null,c.a.createElement("div",{className:"wrap"},c.a.createElement("h2",null,"Create Course"),c.a.createElement("form",{onChange:function(e){e.preventDefault(),I();var t=e.target;t.classList.contains("title")?a(t.value):t.classList.contains("description")?u(t.value):t.classList.contains("estimatedTime")?p(t.value):t.classList.contains("materialsNeeded")&&j(t.value)},onSubmit:U},c.a.createElement("div",{className:"main--flex"},c.a.createElement("div",null,c.a.createElement("label",null,"Course Title"),c.a.createElement("input",{id:"courseTitle",name:"courseTitle",type:"text",className:"title"}),c.a.createElement("label",null,"Course Description"),c.a.createElement("textarea",{id:"courseDescription",name:"courseDescription",className:"description"})),c.a.createElement("div",null,c.a.createElement("label",null,"Estimated Time"),c.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"estimatedTime"}),c.a.createElement("label",null,"Materials Needed"),c.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"materialsNeeded"}))),c.a.createElement("button",{className:"button",type:"submit"},"Create Course"),c.a.createElement("button",{className:"button button-secondary"},"Cancel"))))},M=function(e){var t=e.children,n=Object(r.useContext)(h),a=Object(f.a)(n,2),s=a[0];a[1];return c.a.createElement(l.b,{path:"/create-course"},s?c.a.createElement(c.a.Fragment,null,t):c.a.createElement(l.a,{to:"/sign-in"}))},G=function(){return c.a.createElement(o.a,null,c.a.createElement(v,null,c.a.createElement(E,null),c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"}," ",c.a.createElement(N,null)),c.a.createElement(M,{exact:!0,path:"/create-course"},c.a.createElement(J,null)),c.a.createElement(P,{path:"/course-details/:courseId"},c.a.createElement(D,null)),c.a.createElement(l.b,{path:"/course-update/:courseId"},c.a.createElement(A,null)),c.a.createElement(l.b,{path:"/sign-in/"},c.a.createElement(U,null)),c.a.createElement(l.b,{path:"/sign-up"},c.a.createElement(B,null)),c.a.createElement(l.b,{path:"/sign-out"},c.a.createElement(I,null)))),c.a.createElement(d,null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(G,null)),document.getElementById("root"))},24:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return l});var a=n(10),r=n.n(a),c=n(16),s=n(31),i=n(32),o=n(84),l=function(){function t(){Object(s.a)(this,t)}return Object(i.a)(t,[{key:"api",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s="/api/v1"+t,i={method:n,headers:{"Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"}};if(null!==a&&(i.body=JSON.stringify(a)),r){var l=e.from("".concat(c.username,":").concat(c.password)).toString("base64");i.headers.Authorization="Basic ".concat(l)}return Object(o.a)(s,i)}},{key:"getCourses",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","GET");case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.json().then(function(e){return e}));case 7:if(401!==t.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n,a){var c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/create-course","POST",t,!0,{username:n,password:a});case 2:if(200!=(c=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!=c.status){e.next=11;break}return e.abrupt("return",c.json().then(function(e){return e.errors}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"fetchCourse",value:function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"GET");case 2:if(200!=(n=e.sent).status){e.next=10;break}return e.next=6,n.json().then(function(e){return e});case 6:return a=e.sent,e.abrupt("return",a);case 10:if(400!=n.status){e.next=14;break}return e.abrupt("return",null);case 14:throw new Error;case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(n),"PUT",t);case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(404!=a.status){e.next=11;break}return e.abrupt("return",a.json().then(function(e){return e.message}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n,a){var c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api("/users/delete-course/".concat(t),"DELETE",null,!0,{username:n,password:a});case 3:if(200!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",[]);case 8:if(!(c.status>=400)){e.next=10;break}return e.abrupt("return",c.json().then(function(e){return e.message}));case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signin","GET",null,!0,{username:t,password:n});case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",a.json().then(function(e){return e}));case 7:if(401!==a.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users/signup","POST",t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!=n.status){e.next=11;break}return e.abrupt("return",n.json().then(function(e){return e.message}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}()}).call(this,n(109).Buffer)},95:function(e,t,n){e.exports=n(115)}},[[95,1,2]]]);
//# sourceMappingURL=main.2498aa4c.chunk.js.map