"use strict";(self.webpackChunkFinal=self.webpackChunkFinal||[]).push([[71],{8071:(E,p,i)=>{i.r(p),i.d(p,{UpdatepassComponent:()=>C});var u=i(6814),o=i(95),e=i(4769),m=i(6628),c=i(1120),f=i(2425);function g(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"Password is required "),e.qZA())}function w(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"Password pattern is not correct"),e.qZA())}function P(s,n){if(1&s&&(e.TgZ(0,"div",14),e.YNc(1,g,3,0,"p",15),e.YNc(2,w,3,0,"p",15),e.qZA()),2&s){const r=e.oxw();let a,t;e.xp6(1),e.Q6J("ngIf",null==(a=r.updatePassForm.get("currentPassword"))?null:a.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=r.updatePassForm.get("currentPassword"))?null:t.getError("pattern"))}}function h(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"password is required "),e.qZA())}function Z(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"Password must be at least Minimum eight characters"),e._UZ(3,"br"),e._uU(4,"\u2022 at least One uppercase letter. "),e._UZ(5,"br"),e._uU(6,"\u2022 One lowercase letter. "),e._UZ(7,"br"),e._uU(8,"\u2022 One number and one special character."),e.qZA())}function U(s,n){if(1&s&&(e.TgZ(0,"div",14),e.YNc(1,h,3,0,"p",15),e.YNc(2,Z,9,0,"p",15),e.qZA()),2&s){const r=e.oxw();let a,t;e.xp6(1),e.Q6J("ngIf",null==(a=r.updatePassForm.get("password"))?null:a.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=r.updatePassForm.get("password"))?null:t.getError("pattern"))}}function v(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"repassword is required "),e.qZA())}function T(s,n){1&s&&(e.TgZ(0,"p",16),e._UZ(1,"i",17),e._uU(2,"Password is not matched"),e.qZA())}function A(s,n){if(1&s&&(e.TgZ(0,"div",14),e.YNc(1,v,3,0,"p",15),e.YNc(2,T,3,0,"p",15),e.qZA()),2&s){const r=e.oxw();let a,t;e.xp6(1),e.Q6J("ngIf",null==(a=r.updatePassForm.get("rePassword"))?null:a.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=r.updatePassForm.get("rePassword"))?null:t.getError("misMatach"))}}function x(s,n){1&s&&e._UZ(0,"i",18)}let C=(()=>{class s{constructor(r,a,t,d){this._AuthService=r,this._Router=a,this._FormBuilder=t,this._ToastrService=d,this.showPass=!1,this.isLoading=!1,this.userData={},this.updatePassForm=this._FormBuilder.group({currentPassword:["",[o.kI.required,o.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],password:["",[o.kI.required,o.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],rePassword:["",[o.kI.required,o.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]},{validators:[this.confirmPassword]})}handleForm(){this.isLoading=!0,this.updatePassForm.valid?(this.userData=this.updatePassForm.value,this._AuthService.updatePassword(this.userData).subscribe({next:r=>{"success"==r.message&&(this.isLoading=!1,localStorage.setItem("token",r.token),this._ToastrService.success("Your Password Has been updated"),this._Router.navigate(["/home"]))},error:r=>{"fail"==r.error.message&&(this.isLoading=!1,this._ToastrService.error(r.error.errors.msg))}})):this.updatePassForm.markAllAsTouched()}confirmPassword(r){const a=r.get("password"),t=r.get("rePassword");""==t?.value?t?.setErrors({required:!0}):a?.value!=t?.value&&t?.setErrors({misMatach:!0})}static#e=this.\u0275fac=function(a){return new(a||s)(e.Y36(m.e),e.Y36(c.F0),e.Y36(o.qu),e.Y36(f._W))};static#s=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-updatepass"]],standalone:!0,features:[e.jDz],decls:23,vars:6,consts:[[1,"register","my-5","mx-auto","shadow","bg-main-light","rounded-3","overflow-hidden","w-50"],[1,"form-title","mb-3"],[1,"w-75","mx-auto","p-3",3,"formGroup","ngSubmit"],[1,"form-item","mb-2"],["for","currentpw"],["type","password","id","currentpw","formControlName","currentPassword","placeholder","Your Password ...",1,"form-control"],["class","a-alert",4,"ngIf"],["for","newpassword"],["type","password","id","newpassword","formControlName","password","placeholder","Enter New Password ...",1,"form-control"],["for","repassword"],["type","password","id","repassword","formControlName","rePassword","placeholder","Confirm Password ...",1,"form-control"],[1,"d-flex","justify-content-between"],["type","submit",1,"main-btn","ms-auto","d-block",3,"disabled"],["class","fa-solid fa-spinner fa-spin",4,"ngIf"],[1,"a-alert"],["class","text-danger mb-0",4,"ngIf"],[1,"text-danger","mb-0"],[1,"fa-regular","fa-circle-xmark","me-1"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(a,t){if(1&a&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Update User Password"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Current Password: "),e.qZA(),e._UZ(7,"input",5),e.YNc(8,P,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"New Password: "),e.qZA(),e._UZ(12,"input",8),e.YNc(13,U,3,2,"div",6),e.qZA(),e.TgZ(14,"div",3)(15,"label",9),e._uU(16,"Repassword: "),e.qZA(),e._UZ(17,"input",10),e.YNc(18,A,3,2,"div",6),e.qZA(),e.TgZ(19,"div",11)(20,"button",12),e._uU(21,"Change Password "),e.YNc(22,x,1,0,"i",13),e.qZA()()()()),2&a){let d,l,_;e.xp6(3),e.Q6J("formGroup",t.updatePassForm),e.xp6(5),e.Q6J("ngIf",null==(d=t.updatePassForm.get("currentPassword"))?null:d.touched),e.xp6(5),e.Q6J("ngIf",null==(l=t.updatePassForm.get("password"))?null:l.touched),e.xp6(5),e.Q6J("ngIf",null==(_=t.updatePassForm.get("rePassword"))?null:_.touched),e.xp6(2),e.Q6J("disabled",t.updatePassForm.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoading)}},dependencies:[u.ez,u.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["@media screen and (max-width: 767px){section[_ngcontent-%COMP%]{width:90%!important}}"]})}return s})()}}]);