"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[659],{87238:function(e,n,a){a.d(n,{s:function(){return r}});var t=a(1413),o=a(82388),i=a(70174),r={get:function(e,n,a){var r=a&&a.token||localStorage.getItem("token"),s=(0,t.Z)({headers:{Authorization:"Bearer ".concat(r)},params:n},a);return o.Z.get(i.host+e,s)},post:function(e,n,a){var r=a&&a.token||localStorage.getItem("token"),s=(0,t.Z)({headers:{Authorization:"Bearer ".concat(r)}},a);return o.Z.post(i.host+e,n,s)}}},48452:function(e,n,a){var t=a(72791),o=(a(54164),a(78983)),i=(a(64277),a(57689)),r=a(80184);n.Z=function(e){var n=e.visible,a=e.cbClose,s=e.url,l=(0,i.s0)(),c=((0,t.useRef)(),function(){l("topUpSaldo")||l("/topUpSaldo")});return(0,t.useEffect)((function(){var e=window.addEventListener?"addEventListener":"attachEvent";(0,window[e])("attachEvent"===e?"onmessage":"message",(function(e){console.log("line 29",e.data),"close"===e.data.action&&a(),"finish"===e.data.action&&(c(),a()),"batalkan"===e.data.action&&(c(),a())}))})),(0,r.jsx)(o.Tk,{visible:n,size:"lg",onClose:a,children:(0,r.jsx)(o.sD,{children:(0,r.jsx)("iframe",{src:s,style:{width:"100%",height:"800px"}})})})}},70127:function(e,n,a){a.r(n),a.d(n,{default:function(){return X}});var t=a(72791),o=a(57689),i=a(78983),r=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:t.lazy((function(){return a.e(759).then(a.bind(a,86759))}))},{path:"/wablaste",name:"WaBlaste",element:t.lazy((function(){return a.e(222).then(a.bind(a,2222))}))},{path:"/topUpSaldo",name:"topUpSaldo",element:t.lazy((function(){return a.e(82).then(a.bind(a,7082))}))}],s=a(80184),l=function(){return(0,s.jsx)(i.KB,{lg:!0,children:(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)(i.LQ,{color:"primary"}),children:(0,s.jsxs)(o.Z5,{children:[r.map((function(e,n){return e.element&&(0,s.jsx)(o.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,s.jsx)(e.element,{})},n)})),(0,s.jsx)(o.AW,{path:"/",element:(0,s.jsx)(o.Fg,{to:"dashboard",replace:!0})})]})})})},c=t.memo(l),d=a(1413),h=a(74165),u=a(15861),m=a(70885),p=a(11087),x=a(59434),f=a(24846),g=a(31389),Z=a(66289),j=a(19428),v=a(79663),b=a(62412),w=a(65487),k=a(24379),y=(a.p,a(44345)),V=(a(4942),a(73451)),S=a(63027),A=a(89743),C=a(16157),N=a(30456),L=a(52373),H=function(e){var n=(0,t.useState)({nominal:""}),a=(0,m.Z)(n,2),o=a[0],i=a[1],r=(0,x.v9)((function(e){return e.whatsAppInfo})),l=(0,N.Z)((0,x.v9)((function(e){return e.token})));return(0,s.jsxs)(V.Z,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show,onHide:e.onHide,children:[(0,s.jsx)(V.Z.Header,{closeButton:!0,children:e.modalTitle}),(0,s.jsx)(V.Z.Body,{children:(0,s.jsx)(S.Z,{children:(0,s.jsx)(A.Z,{children:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(S.Z.Group,{className:"col col-md-12",children:[(0,s.jsx)(S.Z.Label,{children:"Nominal"}),(0,s.jsx)(L.Z,{style:{textAlign:"right"},id:"input-example",name:"nominal",className:"form-control",placeholder:"",defaultValue:o.nominal,decimalsLimit:2,onValueChange:function(e){return i((0,d.Z)((0,d.Z)({},o),{},{nominal:e}))}})]})})})})}),(0,s.jsxs)(V.Z.Footer,{children:[(0,s.jsx)(C.Z,{variant:"warning",type:"submit",onClick:e.onHide,children:"close"}),(0,s.jsx)(C.Z,{onClick:function(n){if(n.preventDefault(),!o.nominal)return alert("silahkan masukan nilai"),!1;if(o.nominal<=25e3)return alert("miinimal top up Rp.25.0000"),!1;var a="https://siswa.smartsystem.co.id/#/paymentv2?"+["key=abahKadabra","nominal=".concat(o.nominal),"keterangan=TopUp Saldo","nomor=".concat(r.whatsappNumber),"uid_sekolah=".concat(25),"clientID=".concat(l.id)].join("&");console.log("line 96",a),e.handleSubmit(a)},style:{marginTop:"5px",background:"#379237",border:"none"},children:"Top up"})]})]})},T=function(){(0,o.s0)();var e=t.useContext(y.V).onLogout,n=((0,x.v9)((function(e){return e.whatsAppInfo})),(0,t.useState)({show:!1})),a=(0,m.Z)(n,2),r=a[0],l=a[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.w5,{variant:"nav-item",children:[(0,s.jsx)(i.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,s.jsx)(f.Z,{icon:b.E,className:"me-2"})}),(0,s.jsxs)(i.$H,{className:"pt-0",placement:"bottom-end",children:[(0,s.jsx)(i.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,s.jsxs)(i.$f,{href:"#",onClick:function(){l((0,d.Z)((0,d.Z)({},r),{},{show:!0}))},children:[(0,s.jsx)(f.Z,{icon:b.E,className:"me-2"}),"Profile"]}),(0,s.jsxs)(i.$f,{href:"#",children:[(0,s.jsx)(f.Z,{icon:w.M,className:"me-2"}),"Settings"]}),(0,s.jsx)(i.lK,{}),(0,s.jsxs)(i.$f,{href:"#",onClick:e,children:[(0,s.jsx)(f.Z,{icon:k.h,className:"me-2"}),"Log out"]})]})]})})},M=["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],z=a(48452),U=a(87238),_=function(e){return(0,s.jsxs)(V.Z,{show:e.show,onHide:e.onHide,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,s.jsx)(V.Z.Header,{closeButton:!0,children:(0,s.jsx)(V.Z.Title,{children:"Scan QR"})}),(0,s.jsx)(V.Z.Body,{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e.qrCode}})})]})},F=function(){var e,n=(0,x.I0)(),a=(0,x.v9)((function(e){return e.sidebarShow})),r=(0,x.v9)((function(e){return e.whatsAppInfo})),l=(0,N.Z)((0,x.v9)((function(e){return e.token}))),c=(0,o.s0)(),b=(0,t.useState)({show:!1,modalTitle:"Top Up Saldo",textBtn:"cek",nominal:"300000",nomorWa:r.whatsappNumber,uid_Sekolah:25,data:{}}),w=(0,m.Z)(b,2),k=w[0],y=w[1],V=(0,t.useState)({show:!1,dataQrCode:""}),S=(0,m.Z)(V,2),A=S[0],C=S[1],L=(0,t.useState)(""),F=(0,m.Z)(L,2),I=F[0],B=(F[1],(0,t.useState)({visible:!1})),D=(0,m.Z)(B,2),Q=D[0],q=D[1],R=function(){var e=(0,u.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,u.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/wa/get-invoices",e.next=3,U.s.get("/wa/get-invoices");case 3:null!==e.sent.data?c("topUpSaldo")||c("/topUpSaldo"):y((0,d.Z)((0,d.Z)({},k),{},{show:!0}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){y((0,d.Z)((0,d.Z)({},k),{},{show:!1}))};return(0,t.useEffect)((function(){(0,u.Z)((0,h.Z)().mark((function e(){var n;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.s.post("/wa/get-state-server",{id:l.id});case 2:n=e.sent,C((0,d.Z)((0,d.Z)({},A),{},{dataQrCode:n.data.data}));case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,s.jsxs)(s.Fragment,{children:[k.show?(0,s.jsx)(H,{show:k.show,onHide:W,modalTitle:k.modalTitle,textBtn:k.modalButton,handleSubmit:function(e){q((0,d.Z)((0,d.Z)({},Q),{},{visible:!0,url:e})),W()},noWhatsApp:r.whatsappNumber,data:k.data}):"",Q.visible?(0,s.jsx)(z.Z,{visible:Q.visible,cbClose:function(){q((0,d.Z)((0,d.Z)({},Q),{},{visible:!1}))},url:Q.url}):"",A.show?(0,s.jsx)(_,{show:A.show,onHide:function(){C((function(e){return(0,d.Z)((0,d.Z)({},e),{},{show:!1})}))},qrCode:I}):"",(0,s.jsxs)(i.PO,{position:"sticky",className:"mb-4",children:[(0,s.jsxs)(i.KB,{fluid:!0,children:[(0,s.jsx)(i.X4,{className:"ps-1",onClick:function(){return n({type:"set",sidebarShow:!a})},children:(0,s.jsx)(f.Z,{icon:g.N,size:"lg"})}),(0,s.jsx)(i.qy,{className:"mx-auto d-md-none",to:"/",children:(0,s.jsx)(f.Z,{icon:M,height:48,alt:"Logo"})}),(0,s.jsx)(i.g3,{className:"d-none d-md-flex me-auto",children:(0,s.jsx)(i.U6,{children:(0,s.jsx)(i.AQ,{to:"/dashboard",component:p.OL,children:r.nama})})}),(0,s.jsxs)(i.g3,{children:[(0,s.jsx)(i.U6,{children:(0,s.jsxs)(i.AQ,{href:"#",children:["Saldo :",(0,s.jsxs)("span",{style:{fontSize:"16px",marginLeft:"5px"},children:["Rp. ",(e=r.saldoTopup,new Intl.NumberFormat("id-ID",{currency:"IDR"}).format(e))]}),(0,s.jsx)(i.If,{CTooltip:!0,content:"on Login",placement:"right",children:(0,s.jsx)(f.Z,{icon:Z.z,style:{marginLeft:"7px",color:"black"}})})]})}),(0,s.jsx)(i.U6,{children:(0,s.jsxs)(i.u5,{size:"sm",style:{marginTop:"5px",background:"#379237",border:"none"},onClick:R,children:["Top Up saldo ",(0,s.jsx)(f.Z,{icon:j.A,style:{marginLeft:"7px",color:"white"}})]})}),(0,s.jsx)(i.U6,{children:(0,s.jsxs)(i.AQ,{href:"#",children:["Status :","onLogin"==A.dataQrCode&&(0,s.jsx)(i.If,{CTooltip:!0,content:"on Login",placement:"right",children:(0,s.jsx)(f.Z,{icon:v.d,style:{marginLeft:"12px",background:"green",padding:"3px",color:"white",borderRadius:"50%",marginTop:"2px"},size:"lg"})}),"error"==A.dataQrCode&&(0,s.jsx)(i.If,{CTooltip:!0,content:"on Login",placement:"right",children:(0,s.jsx)(f.Z,{icon:v.d,style:{marginLeft:"12px",background:"red",padding:"3px",color:"white",borderRadius:"50%",marginTop:"2px"},size:"lg"})}),"onLogin"!=A.dataQrCode&&(0,s.jsx)(i.If,{content:"Scan qr",placement:"right",children:(0,s.jsx)(i.u5,{size:"sm",style:{marginLeft:"3px",color:"white",background:"#F6F54D",border:"none",marginTop:"-3px"},onClick:function(){C((function(e){return(0,d.Z)((0,d.Z)({},e),{},{show:!0})}))},children:" scan qr"})})]})})]}),(0,s.jsx)(i.g3,{className:"ms-3",children:(0,s.jsx)(T,{})})]}),(0,s.jsx)(i.rc,{})]})]})},I=a(45987),B=["component","name","badge","icon"],D=["component","name","icon","to"],Q=function(e){var n=e.items,a=(0,o.TH)(),r=function(e,n,a){return(0,s.jsxs)(s.Fragment,{children:[n&&n,e&&e,a&&(0,s.jsx)(i.C_,{color:a.color,className:"ms-auto",children:a.text})]})},l=function(e,n){var a=e.component,o=e.name,i=e.badge,s=e.icon,l=(0,I.Z)(e,B),c=a;return(0,t.createElement)(c,(0,d.Z)((0,d.Z)({},l.to&&!l.items&&{component:p.OL}),{},{key:n},l),r(o,s,i))},c=function e(n,t){var o,i=n.component,c=n.name,h=n.icon,u=n.to,m=(0,I.Z)(n,D),p=i;return(0,s.jsx)(p,(0,d.Z)((0,d.Z)({idx:String(t),toggler:r(c,h),visible:a.pathname.startsWith(u)},m),{},{children:null===(o=n.items)||void 0===o?void 0:o.map((function(n,a){return n.items?e(n,a):l(n,a)}))}),t)};return(0,s.jsx)(t.Fragment,{children:n&&n.map((function(e,n){return e.items?c(e,n):l(e,n)}))})},q=a(34358),R=(a(82454),a(4768)),E=a(14799),W=a(57770),K=[{component:i.U6,name:"Dashboard",to:"/dashboard",icon:(0,s.jsx)(f.Z,{icon:E.H,customClassName:"nav-icon"}),badge:{color:"info"}},{component:i.U6,name:"Wa Blaster",to:"/wablaste",icon:(0,s.jsx)(f.Z,{icon:W.o,customClassName:"nav-icon"}),badge:{color:"info"}}],O=function(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.sidebarUnfoldable})),a=(0,x.v9)((function(e){return e.sidebarShow}));return(0,s.jsxs)(i.z3,{position:"fixed",unfoldable:n,visible:a,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},style:{background:"#FD841F"},children:[(0,s.jsxs)(i.Dl,{className:"d-none d-md-flex",style:{background:"#FD841F"},to:"/",children:[(0,s.jsx)(R.uYX,{style:{marginRight:"180px",background:"green",padding:"3px",color:"white",borderRadius:"50%"},size:30}),(0,s.jsx)("span",{style:{fontWeight:"bold",marginLeft:"-40px",marginTop:"10px",fontSize:"20px",position:"absolute"},children:"Wa Vicible"})]}),(0,s.jsx)(i.Xk,{children:(0,s.jsx)(q.Z,{children:(0,s.jsx)(Q,{items:K})})}),(0,s.jsx)(i.iv,{style:{background:"#FD841F"},className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!n})}})]})},$=t.memo(O),X=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)($,{}),(0,s.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,s.jsx)(F,{}),(0,s.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,s.jsx)(c,{})})]})]})}},70174:function(e){e.exports=JSON.parse('{"host":"https://wa.vcible.com/api/dev"}')}}]);
//# sourceMappingURL=659.ed5c6d4e.chunk.js.map