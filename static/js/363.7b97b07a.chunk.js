"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[363],{87238:function(e,t,r){r.d(t,{s:function(){return i}});var n=r(1413),o=r(82388),a=(r(70174),"http://103.146.62.138:9092"),i={get:function(e,t,r){var i=r&&r.token||localStorage.getItem("token"),c=(0,n.Z)({headers:{Authorization:"Bearer ".concat(i)},params:t},r);return o.Z.get(a+e,c)},post:function(e,t,r){var i=r&&r.token||localStorage.getItem("token");console.log("line 9",a);var c=(0,n.Z)({headers:{Authorization:"Bearer ".concat(i)}},r);return o.Z.post(a+e,t,c)}}},74363:function(e,t,r){r.r(t);var n=r(74165),o=r(15861),a=r(70885),i=r(72791),c=r(57689),s=r(30456),u=r(87238),f=(r(32163),r(59434)),p=r(80184);t.default=function(e){var t=e.children,r=(0,c.TH)(),d=(c.s0,(0,f.v9)((function(e){return e.token}))),l=(0,f.I0)(),h=(0,i.useState)({nomorWa:"",namaSekolah:"",saldo:"",statusLogin:""}),g=(0,a.Z)(h,2);g[0],g[1];if(!d)return(0,p.jsx)(c.Fg,{to:"/login",replace:!0,state:{from:r}});var w=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,r,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.Z)(d),e.next=3,u.s.post("/wa/get-user-wa",{id:t.id});case 3:return r=e.sent,e.next=6,u.s.post("/wa/login-ss");case 6:o=e.sent,a=window.sessionStorage.setItem("tokenSS",o.data.data),l({type:"set",whatsAppInfo:r.data.data,tokenSS:a});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){w()}),[]),t}},30456:function(e,t,r){function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(r=a%4?64*r+o:o,a++%4)?c+=String.fromCharCode(255&r>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function a(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return o(t)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new i("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(a(e.split(".")[r]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},70174:function(e){e.exports=JSON.parse('{"host":"http://103.146.62.138:9092"}')}}]);
//# sourceMappingURL=363.7b97b07a.chunk.js.map