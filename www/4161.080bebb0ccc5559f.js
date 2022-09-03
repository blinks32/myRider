"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4161],{4161:(w,p,r)=>{r.r(p),r.d(p,{PhoneDetailPageModule:()=>Y});var u=r(6895),a=r(4719),t=r(3906),h=r(2905),m=r(5861),v=r(3096),y=r(2340),n=r(6353),_=r(7556),f=r(7323),M=r(5083),O=r(5596);function x(o,l){if(1&o&&(n.TgZ(0,"ion-select-option"),n._uU(1),n.qZA()),2&o){const e=l.$implicit;n.xp6(1),n.AsE(" ",e.dialCode," ",e.name," ")}}function Z(o,l){1&o&&(n.TgZ(0,"ion-text",19),n._uU(1," * Please enter the Mobile Number "),n.qZA())}function b(o,l){1&o&&(n.TgZ(0,"ion-text",19),n._uU(1," * Please enter a valid Mobile Number "),n.qZA())}function T(o,l){if(1&o&&(n.TgZ(0,"ion-text"),n.YNc(1,Z,2,0,"ion-text",18),n.YNc(2,b,2,0,"ion-text",18),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.form.get("phone").hasError("required")),n.xp6(1),n.Q6J("ngIf",e.form.get("phone").hasError("minlength")&&!e.form.get("phone").hasError("required"))}}function D(o,l){1&o&&(n.TgZ(0,"ion-label"),n._uU(1,"Continue"),n.qZA())}function I(o,l){1&o&&n._UZ(0,"ion-icon",20)}function J(o,l){1&o&&n._UZ(0,"ion-progress-bar",21)}const N=[{path:"",component:(()=>{class o{constructor(e,i,g,s,P,d,c,C,U){this.modalCtrl=e,this.auth=i,this.authy=g,this.router=s,this.nav=P,this.authY=d,this.avatar=c,this.overlay=C,this.route=U,this.CountryCode="+1",this.CountryJson=y.N.CountryJson,this.flag="https://cdn.kcak11.com/CountryFlags/countries/ng.svg"}ngOnInit(){this.route.queryParams.subscribe(e=>{this.details=e.details}),this.form=new a.cw({phone:new a.NI(null,{validators:[a.kI.required,a.kI.minLength(10),a.kI.maxLength(10)]})})}countryCodeChange(e){console.log(e.detail.value.toString()),this.CountryCode=e.detail.value.toString()}signIn(){var e=this;return(0,m.Z)(function*(){if(!e.approve2)try{if(!e.form.valid)return void e.form.markAllAsTouched();console.log(e.form.value),e.approve2=!0,console.log(e.details),yield e.auth.signInWithPhoneNumber(e.CountryCode+e.form.value.phone),e.approve2=!1;const s=e.modalCtrl.create({component:v._,componentProps:{phone:e.form.value.phone,countryCode:e.CountryCode},swipeToClose:!0});(yield s).present(),(yield s).onWillDismiss(),e.authy.onAuthStateChanged(function(){var d=(0,m.Z)(function*(c){c&&(yield e.avatar.createUser(e.details.user.displayName,e.details.user.email,e.details.user.photoURL||"",e.CountryCode+e.form.value.phone,c.uid),yield e.avatar.createCard("Cash",0,"cash","None"),e.router.navigateByUrl("home")),e.overlay.hideLoader()});return function(c){return d.apply(this,arguments)}}())}catch(i){console.log(i),e.overlay.showAlert("Error",JSON.stringify(i)),e.approve2=!1}})()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(t.IN),n.Y36(_.e),n.Y36(f.gx),n.Y36(h.F0),n.Y36(t.SH),n.Y36(f.gx),n.Y36(M.o),n.Y36(O.F),n.Y36(h.gz))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-phone-detail"]],decls:23,vars:9,consts:[[1,"ion-no-border",3,"translucent"],["lines","none"],[1,"ion-padding-top"],["color","primary",1,"ion-text-center"],[1,"ion-margin-horizontal"],[3,"formGroup"],["id","sign-in-button"],[1,"ion-margin-vertical"],[1,"ion-margin"],["interface","action-sheet",3,"ionChange"],[4,"ngFor","ngForOf"],["formControlName","phone","placeholder","Enter Mobile Number","type","tel","clearInput","","minlength","10","maxlength","10"],[4,"ngIf"],["shape","round","size","large","type","submit","color","secondary","expand","block",3,"disabled","click"],["color","light","slot","end","name","arrow-forward",4,"ngIf"],["color","light","type","indeterminate",4,"ngIf"],[1,"ion-no-border"],["lines","none",1,"ion-no-padding"],["class","error","color","danger",4,"ngIf"],["color","danger",1,"error"],["color","light","slot","end","name","arrow-forward"],["color","light","type","indeterminate"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-list",1)(2,"ion-list-header",2)(3,"ion-label",3)(4,"h1"),n._uU(5,"Enter Phone Number"),n.qZA()()(),n.TgZ(6,"ion-item-group",4)(7,"form",5),n._UZ(8,"div",6),n.TgZ(9,"div",7)(10,"ion-item",8)(11,"ion-label"),n._uU(12),n.qZA(),n.TgZ(13,"ion-select",9),n.NdJ("ionChange",function(s){return i.countryCodeChange(s)}),n.YNc(14,x,2,2,"ion-select-option",10),n.qZA(),n._UZ(15,"ion-input",11),n.qZA(),n.YNc(16,T,3,2,"ion-text",12),n.qZA(),n.TgZ(17,"ion-button",13),n.NdJ("click",function(){return i.signIn()}),n.YNc(18,D,2,0,"ion-label",12),n.YNc(19,I,1,0,"ion-icon",14),n.YNc(20,J,1,0,"ion-progress-bar",15),n.qZA()()()()(),n.TgZ(21,"ion-content",16),n._UZ(22,"ion-list",17),n.qZA()),2&e&&(n.Q6J("translucent",!0),n.xp6(7),n.Q6J("formGroup",i.form),n.xp6(5),n.Oqu(i.CountryCode),n.xp6(2),n.Q6J("ngForOf",i.CountryJson),n.xp6(2),n.Q6J("ngIf",!i.form.get("phone").valid&&i.form.get("phone").touched),n.xp6(1),n.Q6J("disabled",!i.form.get("phone").valid),n.xp6(1),n.Q6J("ngIf",!i.approve2),n.xp6(1),n.Q6J("ngIf",!i.approve2),n.xp6(1),n.Q6J("ngIf",i.approve2))},dependencies:[u.sg,u.O5,a._Y,a.JJ,a.JL,a.wO,a.nD,t.YG,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Ub,t.Q$,t.q_,t.yh,t.X7,t.t9,t.n0,t.yW,t.QI,t.j9,a.sg,a.u],styles:["@keyframes slide-left{0%{transform:translate(0)}to{transform:translate(-100px)}}@keyframes slide-right{0%{transform:translate(0)}to{transform:translate(100px)}}.slide-left[_ngcontent-%COMP%]{animation:slide-left .5s cubic-bezier(.25,.46,.45,.94) both}.slide-right[_ngcontent-%COMP%]{animation:slide-right .5s cubic-bezier(.25,.46,.45,.94) both}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:transparent;display:block}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{margin-right:2.5vh}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:.75em!important}ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{height:44px}ion-img[_ngcontent-%COMP%]{margin:auto;width:auto}ion-slides[_ngcontent-%COMP%]{height:440px}.pm-awesome-divider[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:20px}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[h.Bz.forChild(N),h.Bz]}),o})(),Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,a.u5,t.Pc,a.UX,A]}),o})()}}]);