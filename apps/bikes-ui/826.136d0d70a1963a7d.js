"use strict";(self.webpackChunkbikes_ui=self.webpackChunkbikes_ui||[]).push([[826],{7826:(v,_,o)=>{o.r(_),o.d(_,{BikeComponent:()=>s});var l=o(6895),r=o(433),m=o(7827),p=o(8792),e=o(8256),u=o(4975);function k(n,t){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",17),e.NdJ("click",function(){e.CHM(i);const c=e.oxw();return e.KtG(c.editBike())}),e._uU(2,"Edit"),e.qZA(),e.TgZ(3,"button",18),e.NdJ("click",function(){e.CHM(i);const c=e.oxw();return e.KtG(c.deleteBike())}),e._uU(4,"Delete"),e.qZA(),e.BQk()}}function g(n,t){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",17),e.NdJ("click",function(){e.CHM(i);const c=e.oxw();return e.KtG(c.saveBike())}),e._uU(2,"Save"),e.qZA(),e.TgZ(3,"button",18),e.NdJ("click",function(){e.CHM(i);const c=e.oxw();return e.KtG(c.cancelEditBike())}),e._uU(4,"Cancel"),e.qZA(),e.BQk()}}function d(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.AsE(" ",e.lcZ(2,2,i.key),": ",i.value," ")}}function b(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.AsE(" ",e.lcZ(2,2,i.key),": ",i.value," ")}}class s{constructor(t,i,a){this.router=t,this.bikeService=i,this.apiService=a}saveBike(){this.bikeService.updateBikeInfo(),this.apiService.saveBike(this.bikeService.bike).subscribe(t=>{this.bikeService.setBike(t),this.router.navigate([""])})}editBike(){this.bikeService.bikeForm.enable()}cancelEditBike(){this.bikeService.resetBikeForm(),this.bikeService.bikeForm.disable()}deleteBike(){this.apiService.deleteBike(this.bikeService.bikeId()).subscribe(t=>{this.router.navigate([""])})}}s.\u0275fac=function(t){return new(t||s)(e.Y36(u.F0),e.Y36(p.B),e.Y36(m.s))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ss-bike"]],standalone:!0,features:[e.jDz],decls:29,vars:13,consts:[["type","submit",1,"lg:grid","lg:grid-cols-7","lg:grid-rows-1","lg:gap-x-8","lg:gap-y-10","xl:gap-x-16",3,"formGroup","ngSubmit"],[1,"mx-auto","mt-14","max-w-2xl","sm:mt-16","lg:col-span-3","lg:row-span-2","lg:row-end-2","lg:mt-0","lg:max-w-none"],[1,"mt-4"],[1,"text-2xl","font-bold","tracking-tight","text-gray-900","sm:text-3xl"],["id","information-heading",1,"sr-only"],["type","email","id","price","formControlName","price","placeholder","Price",1,"ss-input","text-base"],["type","text","id","description","formControlName","description","placeholder","Description",1,"ss-input","mt-4","w-full"],[1,"mt-10","grid","grid-cols-1","gap-x-6","gap-y-4","sm:grid-cols-2"],[4,"ngIf"],[1,"mt-10","border-t","border-gray-200","pt-10"],[1,"text-sm","font-medium","text-gray-900"],[1,"prose","prose-sm","mt-4","text-gray-500"],["role","list"],[4,"ngFor","ngForOf"],[1,"col-span-4","row-end-1"],[1,"aspect-w-4","aspect-h-3","overflow-hidden","rounded-lg"],["alt","",1,"object-cover","object-center","relative",3,"src"],["type","button",1,"primary-btn",3,"click"],["type","button",1,"secondary-btn",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.saveBike()}),e.TgZ(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4),e.qZA(),e.TgZ(5,"h2",4),e._uU(6,"Product price"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e._UZ(8,"textarea",6),e.TgZ(9,"div",7),e.YNc(10,k,5,0,"ng-container",8),e.YNc(11,g,5,0,"ng-container",8),e.qZA(),e.TgZ(12,"div",9)(13,"h3",10),e._uU(14,"Physical Measures and Capacities"),e.qZA(),e.TgZ(15,"div",11)(16,"ul",12),e.YNc(17,d,3,4,"li",13),e.ALo(18,"keyvalue"),e.qZA()()(),e.TgZ(19,"div",9)(20,"h3",10),e._uU(21,"Engine and Transmission"),e.qZA(),e.TgZ(22,"div",11)(23,"ul",12),e.YNc(24,b,3,4,"li",13),e.ALo(25,"keyvalue"),e.qZA()()()(),e.TgZ(26,"div",14)(27,"div",15),e._UZ(28,"img",16),e.qZA()()()),2&t&&(e.Q6J("formGroup",i.bikeService.bikeForm),e.xp6(4),e.lnq(" ",i.bikeService.bike.articleCompleteInfo.yearName," ",i.bikeService.bike.articleCompleteInfo.makeName," ",i.bikeService.bike.articleCompleteInfo.modelName," "),e.xp6(6),e.Q6J("ngIf",i.bikeService.bikeForm.disabled),e.xp6(1),e.Q6J("ngIf",i.bikeService.bikeForm.enabled),e.xp6(6),e.Q6J("ngForOf",e.lcZ(18,9,i.bikeService.bike.physicalMeasuresAndCapacities)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(25,11,i.bikeService.bike.engineAndTransmission)),e.xp6(4),e.s9C("src",i.bikeService.bike.articleCompleteInfo.image||i.bikeService.defaultImg,e.LSH))},dependencies:[l.ez,l.sg,l.O5,l.rS,l.Nd,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],encapsulation:2})}}]);