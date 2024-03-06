"use strict";(self.webpackChunkFinal=self.webpackChunkFinal||[]).push([[592],{2311:(h,c,e)=>{e.d(c,{c:()=>i});var a=e(6814),t=e(4769);let i=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:14,vars:0,consts:[[1,"py-5"],[1,"container"],[1,"row","g-2","text-md-start","text-center","border-bottom","pb-3"],[1,"col-md-10"],["type","email","placeholder","Email ....",1,"form-control"],[1,"col-md-2"],[1,"main-btn","flex-shrink-0"],[1,"text-center","mt-3","h6"]],template:function(o,_){1&o&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h4"),t._uU(3,"Get The FreshCart App"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"We Will Send You a Link,open it on Your Phone"),t.qZA(),t.TgZ(6,"div",2)(7,"div",3),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"div",5)(10,"button",6),t._uU(11,"Share App Link"),t.qZA()()(),t.TgZ(12,"h5",7),t._uU(13,"\xa9 2024 Mohamed Yasser , All Rights Reserved"),t.qZA()()())},dependencies:[a.ez],styles:["[_nghost-%COMP%]{margin-top:auto}footer[_ngcontent-%COMP%]{background-color:#016a70;color:#fff}"]})}return n})()},9493:(h,c,e)=>{e.d(c,{R:()=>n});var a=e(6814),t=e(8672),i=e(4769);let n=(()=>{class l{constructor(o){this._NgxSpinnerService=o}ngOnInit(){this._NgxSpinnerService.show(),setTimeout(()=>{this._NgxSpinnerService.hide()},1e3)}static#t=this.\u0275fac=function(_){return new(_||l)(i.Y36(t.t2))};static#e=this.\u0275cmp=i.Xpm({type:l,selectors:[["app-loader"]],standalone:!0,features:[i.jDz],decls:1,vars:1,consts:[["bdColor","rgba(248,243,243,0.8)","size","medium","color","#0aad0a","type","ball-fussion",3,"fullScreen"]],template:function(_,f){1&_&&i._UZ(0,"ngx-spinner",0),2&_&&i.Q6J("fullScreen",!0)},dependencies:[a.ez,t.ef,t.Ro]})}return l})()},6628:(h,c,e)=>{e.d(c,{e:()=>f});class a extends Error{}a.prototype.name="InvalidTokenError";var l=e(5619),r=e(4769),o=e(9862),_=e(1120);let f=(()=>{class d{constructor(s,u){this._HttpClient=s,this._Router=u,this.userData=new l.X(null),this.decodeToken()}decodeToken(){const s=localStorage.getItem("token");if(s)try{const u=function n(d,p){if("string"!=typeof d)throw new a("Invalid token specified: must be a string");p||(p={});const s=!0===p.header?0:1,u=d.split(".")[s];if("string"!=typeof u)throw new a(`Invalid token specified: missing part #${s+1}`);let m;try{m=function i(d){let p=d.replace(/-/g,"+").replace(/_/g,"/");switch(p.length%4){case 0:break;case 2:p+="==";break;case 3:p+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(d){return decodeURIComponent(atob(d).replace(/(.)/g,(p,s)=>{let u=s.charCodeAt(0).toString(16).toUpperCase();return u.length<2&&(u="0"+u),"%"+u}))}(p)}catch{return atob(p)}}(u)}catch(g){throw new a(`Invalid token specified: invalid base64 for part #${s+1} (${g.message})`)}try{return JSON.parse(m)}catch(g){throw new a(`Invalid token specified: invalid json for part #${s+1} (${g.message})`)}}(s);this.userData.next(u)}catch(u){u.message.includes("Invalid token")&&(localStorage.removeItem("token"),this._Router.navigate(["/login"]))}}signup(s){return this._HttpClient.post("auth/signup",s)}signin(s){return this._HttpClient.post("auth/signin",s)}forgetPassword(s){return this._HttpClient.post("auth/forgotPasswords",s)}resetCode(s){return this._HttpClient.post("auth/verifyResetCode",s)}newPassword(s){return this._HttpClient.put("auth/resetPassword",s)}updatePassword(s){return this._HttpClient.put("users/changeMyPassword",s)}static#t=this.\u0275fac=function(u){return new(u||d)(r.LFG(o.eN),r.LFG(_.F0))};static#e=this.\u0275prov=r.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},1956:(h,c,e)=>{e.d(c,{G:()=>i});var a=e(9862),t=e(4769);let i=(()=>{class n{constructor(r){this._HttpClient=r}getAllBrands(r=1){return this._HttpClient.get(`brands/?limit=16&page=${r}`)}getSpecificBrand(r){return this._HttpClient.get(`brands/${r}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(a.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},2389:(h,c,e)=>{e.d(c,{H:()=>i});var a=e(4769),t=e(9862);let i=(()=>{class n{constructor(r){this._HttpClient=r}getCategories(){return this._HttpClient.get("categories")}getSpecificCategory(r){return this._HttpClient.get(`categories/${r}`)}getSpecificSubCategory(r){return this._HttpClient.get(`categories/${r}/subcategories`)}static#t=this.\u0275fac=function(o){return new(o||n)(a.LFG(t.eN))};static#e=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},1377:(h,c,e)=>{e.d(c,{N:()=>i});var a=e(4769),t=e(9862);let i=(()=>{class n{constructor(r){this._HttpClient=r,this.payURL="https://momoyasser0.github.io/Fresh-Cart"}checkOut(r,o){return this._HttpClient.post(`orders/checkout-session/${r}?url=${this.payURL}`,{shippingAddress:o})}getUserOrders(r){return this._HttpClient.get(`orders/user/${r}`)}static#t=this.\u0275fac=function(o){return new(o||n)(a.LFG(t.eN))};static#e=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},916:(h,c,e)=>{e.d(c,{M:()=>n});var a=e(5619),t=e(4769),i=e(9862);let n=(()=>{class l{constructor(o){this._HttpClient=o,this.FavNumber=new a.X(0)}addToWishList(o){return this._HttpClient.post("wishlist",{productId:o})}getWishList(){return this._HttpClient.get("wishlist")}removeItem(o){return this._HttpClient.delete(`wishlist/${o}`)}static#t=this.\u0275fac=function(_){return new(_||l)(t.LFG(i.eN))};static#e=this.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},255:(h,c,e)=>{e.d(c,{r:()=>t});var a=e(4769);let t=(()=>{class i{transform(l,r,o){return l.split(" ").slice(r,o).join(" ")}static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275pipe=a.Yjl({name:"cuttext",type:i,pure:!0,standalone:!0})}return i})()}}]);