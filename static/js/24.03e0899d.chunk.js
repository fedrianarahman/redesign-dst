"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[24],{87238:function(e,t,r){r.d(t,{s:function(){return a}});var n=r(1413),s=r(82388),o=r(70174),a={get:function(e,t,r){var a=r&&r.token||localStorage.getItem("token"),i=(0,n.Z)({headers:{Authorization:"Bearer ".concat(a)},params:t},r);return s.Z.get(o.host+e,i)},post:function(e,t,r){var a=r&&r.token||localStorage.getItem("token"),i=(0,n.Z)({headers:{Authorization:"Bearer ".concat(a)}},r);return s.Z.post(o.host+e,t,i)}}},23024:function(e,t,r){r.r(t);var n=r(74165),s=r(15861),o=r(4942),a=r(1413),i=r(70885),c=r(72791),u=r(11087),l=r(78983),p=r(24846),d=r(79663),m=r(63232),h=r(87238),x=r(57689),f=r(59434),b=r(80184),j=r(21830);t.default=function(){var e=(0,f.I0)(),t=(0,x.s0)(),r=(0,x.TH)(),g=(0,c.useState)({style:"none",textBtn:"Request OTP",phoneNumber:"",otpNumber:""}),y=(0,i.Z)(g,2),N=y[0],v=y[1],Z=function(e){var t=e.target.name,r=e.target.value;v((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,o.Z)({},t,r))}))},w=function(){var o=(0,s.Z)((0,n.Z)().mark((function s(o){var i,c,u,l,p,d,m;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=N.phoneNumber,c=N.otpNumber,"/wa/login-by-otp",n.next=5,h.s.post("/wa/login-by-otp",{phoneNumber:i,otp:c});case 5:u=n.sent,l=u.data.data,window.localStorage.setItem("token",l),"error"==u.data.status?(j.fire({title:"Error!",text:"".concat(u.data.message),icon:"error",confirmButtonText:"Cool"}),o.target.reset(),v((function(e){return(0,a.Z)((0,a.Z)({},e),{},{style:"none",otpNumber:null,textBtn:"Request OTP"})}))):(j.fire("".concat(u.data.status),"You clicked the button!","success"),m=(null===(p=r.state)||void 0===p||null===(d=p.from)||void 0===d?void 0:d.pathname)||"/dashboard",e({type:"set",token:l}),t(m));case 9:case"end":return n.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}(),k=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=N.phoneNumber.trim(),"/wa/request-otp",e.next=4,h.s.post("/wa/request-otp",{phoneNumber:r});case 4:"error"==(s=e.sent).data.status?(v((function(e){return(0,a.Z)((0,a.Z)({},e),{},{phoneNumber:""})})),j.fire({title:"Error!",text:s.data.message,icon:"error",confirmButtonText:"Cool"}),t.target.reset()):v((function(e){return(0,a.Z)((0,a.Z)({},e),{},{style:"",textBtn:"Log in"})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N.otpNumber?w(t):k(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,b.jsx)(l.KB,{children:(0,b.jsx)(l.rb,{className:"justify-content-center",children:(0,b.jsx)(l.b7,{md:8,children:(0,b.jsxs)(l.dL,{children:[(0,b.jsx)(l.xH,{className:"p-4",children:(0,b.jsx)(l.sl,{children:(0,b.jsxs)(l.lx,{validated:N.validated,onSubmit:_,children:[(0,b.jsx)("h1",{children:"Login"}),(0,b.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,b.jsxs)(l.YR,{className:"mb-3",children:[(0,b.jsx)(l.wV,{children:(0,b.jsx)(p.Z,{icon:d.d})}),(0,b.jsx)(l.jO,{placeholder:"phoneNumber",name:"phoneNumber",type:"text",autoComplete:"phoneNumber",onChange:Z,onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},required:!0})]}),(0,b.jsxs)(l.YR,{className:"mb-4 ",style:{display:N.style},children:[(0,b.jsx)(l.wV,{children:(0,b.jsx)(p.Z,{icon:m.U})}),(0,b.jsx)(l.jO,{type:"text",placeholder:"otpNumber",autoComplete:"otpNumber",onChange:Z,name:"otpNumber",maxLength:4,onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()}})]}),(0,b.jsx)(l.rb,{children:(0,b.jsx)(l.b7,{xs:6,children:(0,b.jsx)(l.u5,{color:"primary",type:"submit",disabled:!1,className:"px-4",children:N.textBtn})})})]})})}),(0,b.jsx)(l.xH,{className:"text-white bg-primary py-5",style:{width:"44%"},children:(0,b.jsx)(l.sl,{className:"text-center",children:(0,b.jsxs)("div",{style:{display:"none"},children:[(0,b.jsx)("h2",{children:"Sign up"}),(0,b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,b.jsx)(u.rU,{to:"/register",children:(0,b.jsx)(l.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})})}},70174:function(e){e.exports=JSON.parse('{"host":"http://103.146.62.138:9092"}')}}]);
//# sourceMappingURL=24.03e0899d.chunk.js.map