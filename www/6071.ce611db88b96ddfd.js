"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6071],{76:(v,u,i)=>{i.d(u,{GW:()=>g,dk:()=>n,oK:()=>s});var s=(()=>{return(a=s||(s={})).Prompt="PROMPT",a.Camera="CAMERA",a.Photos="PHOTOS",s;var a})(),g=(()=>{return(a=g||(g={})).Rear="REAR",a.Front="FRONT",g;var a})(),n=(()=>{return(a=n||(n={})).Uri="uri",a.Base64="base64",a.DataUrl="dataUrl",n;var a})()},6071:(v,u,i)=>{i.r(u),i.d(u,{ProfilePageModule:()=>O});var s=i(6895),g=i(4719),n=i(3906),a=i(2905),f=i(5861),P=i(7423),p=i(76);const h=(0,P.fo)("Camera",{web:()=>i.e(3954).then(i.bind(i,3954)).then(t=>new t.CameraWeb)});var e=i(6353),y=i(5083),Z=i(7556);function C(t,l){if(1&t&&e._UZ(0,"img",15),2&t){const o=e.oxw();e.Q6J("src",o.avatarService.profile.Rider_imgUrl,e.LSH)}}function M(t,l){1&t&&(e.TgZ(0,"div",16)(1,"p"),e._uU(2,"Select avatar"),e.qZA()())}const T=[{path:"",component:(()=>{class t{constructor(o,r,c,d,m,U){this.avatarService=o,this.authService=r,this.router=c,this.loadingController=d,this.alertController=m,this.nav=U,this.profile=null}logout(){var o=this;return(0,f.Z)(function*(){yield o.authService.logout(),o.router.navigateByUrl("/",{replaceUrl:!0})})()}goBack(){this.nav.pop()}ngOnInit(){}changeImage(){var o=this;return(0,f.Z)(function*(){const r=yield h.getPhoto({quality:90,allowEditing:!1,resultType:p.dk.Base64,source:p.oK.Camera});if(r){const c=yield o.loadingController.create();yield c.present();const d=yield o.avatarService.uploadImage(r,o.avatarService.profile.uid);c.dismiss(),d||(yield(yield o.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y.o),e.Y36(Z.e),e.Y36(a.F0),e.Y36(n.HT),e.Y36(n.Br),e.Y36(n.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:31,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","log-out"],[1,"ion-padding"],[1,"preview"],[3,"src",4,"ngIf","ngIfElse"],["placeholder_avatar",""],[1,"ion-margin"],["name","call","color","primary","slot","start"],["name","person","color","primary","slot","start"],["name","mail","color","primary","slot","start"],["color","primary",1,"ion-text-center","ion-padding-top"],[3,"src"],[1,"fallback"]],template:function(o,r){if(1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e._UZ(4,"ion-back-button"),e.qZA()(),e.TgZ(5,"ion-buttons",3)(6,"ion-button",4),e.NdJ("click",function(){return r.logout()}),e._UZ(7,"ion-icon",5),e.qZA()(),e.TgZ(8,"ion-title"),e._uU(9," My Profile "),e.qZA()()(),e.TgZ(10,"ion-content",6)(11,"div",7)(12,"ion-avatar",4),e.NdJ("click",function(){return r.changeImage()}),e.YNc(13,C,1,1,"img",8),e.YNc(14,M,3,0,"ng-template",null,9,e.W1O),e.qZA()(),e.TgZ(16,"ion-item",10),e._UZ(17,"ion-icon",11),e.TgZ(18,"ion-label"),e._uU(19),e.qZA()(),e.TgZ(20,"ion-item",10),e._UZ(21,"ion-icon",12),e.TgZ(22,"ion-label"),e._uU(23),e.qZA()(),e.TgZ(24,"ion-item",10),e._UZ(25,"ion-icon",13),e.TgZ(26,"ion-label"),e._uU(27),e.qZA()(),e.TgZ(28,"ion-label",14)(29,"p"),e._uU(30,"Ride reciepts will be sent to your email."),e.qZA()()()),2&o){const c=e.MAs(15);e.xp6(13),e.Q6J("ngIf",null==r.avatarService.profile?null:r.avatarService.profile.Rider_imgUrl)("ngIfElse",c),e.xp6(6),e.hij(" ",r.avatarService.profile.Rider_phone," "),e.xp6(4),e.hij(" ",r.avatarService.profile.Rider_name," "),e.xp6(4),e.hij(" ",r.avatarService.profile.Rider_email," ")}},dependencies:[s.O5,n.BJ,n.oU,n.YG,n.Sm,n.W2,n.Gu,n.gu,n.Ie,n.Q$,n.sr,n.wd,n.cs],styles:["ion-avatar[_ngcontent-%COMP%]{width:128px;height:128px;animation-name:slide-top;animation-duration:.5s}.preview[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:center}.fallback[_ngcontent-%COMP%]{width:128px;height:128px;border-radius:50%;background:#bfbfbf;display:flex;justify-content:center;align-items:center;font-weight:500}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}@keyframes slide-top{0%{transform:translateY(100%)}to{transform:translateY(0)}}.slide-top[_ngcontent-%COMP%]{animation:slide-top .5s cubic-bezier(.25,.46,.45,.94) both}ion-item[_ngcontent-%COMP%]{animation-name:slide-top;animation-duration:.5s}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(T),a.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,g.u5,n.Pc,b]}),t})()}}]);