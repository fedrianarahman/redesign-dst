"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[512],{86512:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(72791),r=t(78983),s=t(74165),i=t(15861),o=t(4942),l=t(1413),c=t(70885),d=t(87238),u=t(73451),h=t(63027),x=t(89743),m=t(16157),j=t(30456),f=t(59434),p=t(80184),g=function(e){var n=(0,j.Z)((0,f.v9)((function(e){return e.token}))),t=(0,a.useState)({form:(0,l.Z)((0,l.Z)({},e.dataApi),{},{uid_sekolah:n.id})}),r=(0,c.Z)(t,2),o=r[0],g=r[1],Z=function(e){e.preventDefault();var n=e.target.name,t=e.target.value,a=(0,l.Z)({},o.form);a[n]=t,g({form:a})},b=function(){var n=(0,i.Z)((0,s.Z)().mark((function n(t){var a,r,i;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),e.onHide(),!o.form.id){n.next=12;break}return(a=(0,l.Z)({},o.form)).sendStatusDate&&null!=a.sendStatusDate||(a.sendStatusDate=0),n.next=7,d.s.post("/wa/outbox-save",a);case 7:r=n.sent,console.log("line 34",r.data),"success"==r.data.status&&(alert("data berhasil diubah"),e.onLoadData()),n.next=18;break;case 12:return n.next=14,d.s.post("/wa/outbox-save",o.form);case 14:i=n.sent,console.log("line 38",i.data),alert("data berhasil ditambahkan"),e.onLoadData();case 18:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)(u.Z,{show:e.show,onHide:e.onHide,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,p.jsx)(u.Z.Header,{closeButton:!0,children:(0,p.jsx)(u.Z.Title,{children:e.modalTitle})}),(0,p.jsx)(u.Z.Body,{children:(0,p.jsx)(h.Z,{children:(0,p.jsx)(x.Z,{children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(h.Z.Group,{className:"col col-md-12",children:[(0,p.jsx)(h.Z.Label,{children:"Nomor Tujuan"}),(0,p.jsx)(h.Z.Control,{type:"text",name:"nomorTujuan",required:!0,onChange:Z,defaultValue:o.form.nomorTujuan,placeholder:"nomor tujuan"})]}),(0,p.jsxs)(h.Z.Group,{className:"col col-md-12",children:[(0,p.jsx)(h.Z.Label,{children:"Pesan"}),(0,p.jsx)(h.Z.Control,{as:"textarea",placeholder:"Leave a comment here",style:{height:"100px",fontSize:"12px"},required:!0,name:"message",onChange:Z,defaultValue:o.form.message})]})]})})})}),(0,p.jsxs)(u.Z.Footer,{children:[(0,p.jsx)(m.Z,{variant:"secondary",onClick:e.onHide,children:"Close"}),(0,p.jsx)(m.Z,{variant:"warning",type:"submit",onClick:b,children:e.textBtn})]})]})},Z=function(){return(0,p.jsx)("div",{style:{position:"absolute",zIndex:1,marginTop:"140px",marginLeft:"450px",display:"block"},children:(0,p.jsx)("div",{className:"spinner-container",children:(0,p.jsx)("div",{className:"loading-spinner"})})})},b=function(){var e=new Date;e.getDate();var n=a.useState({jenis:"1",tanggal1:e||"",tanggal2:e||"",datas:[],satuData:{},show:!1,modalTitle:"",modalButton:""}),t=(0,c.Z)(n,2),u=t[0],h=t[1],x=(0,a.useState)(!1),m=(0,c.Z)(x,2),j=m[0],f=m[1],b=function(e){var n=e.target.name,t=e.target.value;h((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},n,t))}))},v=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),h((function(e){return(0,l.Z)((0,l.Z)({},e),{},{datas:[]})})),f((function(e){return!0})),e.next=5,w();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,t,a,r,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.jenis,t=u.tanggal1,a=u.tanggal2,r={limit:25,sort:"id desc"},e.next=4,d.s.post("/wa/get-outbox",{jenis:n,tanggal1:t,tanggal2:a},{params:r});case 4:i=e.sent,f((function(e){return!1})),h((function(e){return(0,l.Z)((0,l.Z)({},e),{},{datas:i.data.data.datas,show:!1,satuData:i.data.data.datas[0]})}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[u.show?(0,p.jsx)(g,{show:u.show,onHide:function(){return h((0,l.Z)((0,l.Z)({},u),{},{show:!1}))},modalTitle:u.modalTitle,textBtn:u.modalButton,onLoadData:w,dataApi:u.satuData}):"",(0,p.jsxs)(r.xH,{style:{border:"1px solid #FD841F"},children:[(0,p.jsx)(r.bn,{style:{background:"#FD841F",color:"#fff",fontWeight:"bold"},children:(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,p.jsx)("h5",{children:"Outbox"}),(0,p.jsx)(r.u5,{size:"sm",type:"submit",onClick:function(){h((function(e){return(0,l.Z)((0,l.Z)({},e),{},{show:!0,modalTitle:"Tambah Data",modalButton:"Save",satuData:{}})}))},children:"Add Data"})]})}),(0,p.jsxs)(r.sl,{children:[(0,p.jsx)(r.lx,{onSubmit:v,children:(0,p.jsxs)(r.rb,{children:[(0,p.jsxs)(r.b7,{md:3,children:[(0,p.jsx)(r.L8,{children:"Jenis"}),(0,p.jsxs)(r.LX,{name:"jenis",onChange:b,children:[(0,p.jsx)("option",{value:"1",children:"Terkirim"}),(0,p.jsx)("option",{value:"0",children:"Antrian"})]})]}),function(){if("1"==u.jenis)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.b7,{md:3,children:[(0,p.jsx)(r.L8,{children:"Tanggal 1"}),(0,p.jsx)(r.jO,{type:"date",name:"tanggal1",defaultValue:e.toLocaleDateString("en-CA"),onChange:b})]}),(0,p.jsxs)(r.b7,{md:3,children:[(0,p.jsx)(r.L8,{children:"Tanggal 2"}),(0,p.jsx)(r.jO,{type:"date",name:"tanggal2",defaultValue:e.toLocaleDateString("en-CA"),onChange:b})]})]})}(),(0,p.jsx)(r.b7,{md:3,children:(0,p.jsx)(r.u5,{size:"sm",style:{marginTop:"35px",background:"#379237",color:"#FFF",fontWeight:"bold",border:"none"},type:"submit",children:"Cari"})})]})}),j?(0,p.jsx)(Z,{}):(0,p.jsxs)(r.Sx,{small:!0,className:"mt-4 table-responsive table-bordered",children:[(0,p.jsx)(r.V,{children:(0,p.jsxs)(r.T6,{children:[(0,p.jsx)(r.is,{scope:"col",children:"Nomor"}),(0,p.jsx)(r.is,{scope:"col",children:"Tanggal dibuat"}),(0,p.jsx)(r.is,{scope:"col",children:"Nomor Tujuan"}),(0,p.jsx)(r.is,{scope:"col",children:"Pesan"}),(0,p.jsx)(r.is,{scope:"col",children:"Harga"}),(0,p.jsx)(r.is,{scope:"col",children:"Aksi"})]})}),(0,p.jsx)(r.NR,{children:u.datas.map((function(e,n){var t=e.createdAt.substr(0,10),a=e.createdAt.substr(11,8);return(0,p.jsxs)(r.T6,{children:[(0,p.jsx)(r.NN,{children:n+1}),(0,p.jsx)(r.NN,{children:"".concat(t," ").concat(a)}),(0,p.jsx)(r.NN,{children:e.nomorTujuan}),(0,p.jsx)(r.NN,{children:e.message}),(0,p.jsx)(r.NN,{children:e.harga}),(0,p.jsx)(r.NN,{children:(0,p.jsx)(r.u5,{size:"sm",onClick:function(){return function(e){h((function(n){return(0,l.Z)((0,l.Z)({},n),{},{show:!0,modalTitle:"Edit Data",modalButton:"Update",satuData:e})}))}(e)},children:"Edit"})})]},e.id)}))})]})]})]})]})},v=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.rb,{children:(0,p.jsx)(r.b7,{md:12,style:{marginTop:"30px"},children:(0,p.jsx)(b,{})})})})}}}]);
//# sourceMappingURL=512.3b211a2b.chunk.js.map