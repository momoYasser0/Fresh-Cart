"use strict";(self.webpackChunkFinal=self.webpackChunkFinal||[]).push([[411],{411:(B,g,r)=>{r.r(g),r.d(g,{BrandsComponent:()=>C});var o=r(6814),l=r(95),_=r(1120),c=r(6472),t=r(4769),u=r(1956);const m=function(n){return["/brands",n]};function p(n,i){if(1&n&&(t.TgZ(0,"div",6)(1,"div",7),t._UZ(2,"img",8),t.TgZ(3,"h3",9),t._uU(4),t.qZA()()()),2&n){const a=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,m,a._id)),t.xp6(1),t.Q6J("src",a.image,t.LSH)("alt",a.name)("title",a.name),t.xp6(2),t.Oqu(a.name)}}const h=function(n,i,a){return{id:"Brands",itemsPerPage:n,currentPage:i,totalItems:a}};function P(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,p,5,7,"div",3),t.ALo(3,"paginate"),t.qZA(),t.TgZ(4,"div",4)(5,"pagination-controls",5),t.NdJ("pageChange",function(s){t.CHM(a);const d=t.oxw();return t.KtG(d.pageChanged(s))})("pageBoundsCorrection",function(s){t.CHM(a);const d=t.oxw();return t.KtG(d.pageChanged(s))}),t.qZA()()()}if(2&n){const a=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,5,a.brandsData,t.kEZ(8,h,a.pageLimit,a.currentPage,a.totalBrands))),t.xp6(3),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let C=(()=>{class n{constructor(a){this._BrandsService=a,this.brandsData=[],this.numsOfPages=0,this.currentPage=1,this.pageLimit=0,this.totalBrands=0}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:a=>{this.brandsData=a.data,this.totalBrands=a.results,this.numsOfPages=a.metadata.numberOfPages,this.currentPage=a.metadata.currentPage,this.pageLimit=a.metadata.limit},error:a=>{console.log(a)}})}pageChanged(a){console.log(a),this._BrandsService.getAllBrands(a).subscribe({next:e=>{console.log(e),this.brandsData=e.data,this.totalBrands=e.results,this.numsOfPages=e.metadata.numberOfPages,this.currentPage=e.metadata.currentPage,this.pageLimit=e.metadata.limit}})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(u.G))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","my-3",4,"ngIf"],[1,"my-3"],[1,"row","g-3","mb-3"],["class","col-lg-3 col-md-4 col-sm-6 ",4,"ngFor","ngForOf"],[1,"text-center","position-sticky"],["id","Brands","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-lg-3","col-md-4","col-sm-6"],["role","button",1,"card",3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"text-main","text-center"]],template:function(e,s){1&e&&t.YNc(0,P,6,12,"section",0),2&e&&t.Q6J("ngIf",s.brandsData)},dependencies:[o.ez,o.sg,o.O5,l.UX,c.JX,c._s,c.LS,_.rH]})}return n})()}}]);