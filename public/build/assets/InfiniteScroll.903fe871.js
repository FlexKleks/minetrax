<<<<<<<< HEAD:public/build/assets/InfiniteScroll.46e7dd6b.js
import{J as r}from"./AppLayout.932d4aff.js";import{_ as i,o as l,d as a,m as t,e as d,F as c,a as m,t as u}from"./app.cdeb0fbf.js";const f={props:{loadMore:Function,loadingText:{type:String,default:"Loading more..."},threshold:{type:Number,default:200}},data(){return{loading:!1,eventListener:null}},mounted(){window.addEventListener("scroll",this.eventListener=r.debounce(e=>{document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<this.threshold&&!this.loading&&(this.loading=!0,this.loadMore().finally(()=>this.loading=!1))},100))},unmounted(){window.removeEventListener("scroll",this.eventListener)}},g={class:"p-5 text-center text-gray-600 dark:text-gray-300 text-sm"};function p(e,o,n,h,s,_){return l(),a(c,null,[t(e.$slots,"default"),s.loading?t(e.$slots,"loading",{key:0},()=>[m("div",g,u(n.loadingText),1)]):d("",!0)],64)}const y=i(f,[["render",p]]);export{y as I};
========
import{J as r}from"./AppLayout.5d858a44.js";import{_ as i,o as l,d as a,q as t,e as d,F as c,a as m,t as u}from"./app.304209a1.js";const f={props:{loadMore:Function,loadingText:{type:String,default:"Loading more..."},threshold:{type:Number,default:200}},data(){return{loading:!1,eventListener:null}},mounted(){window.addEventListener("scroll",this.eventListener=r.debounce(e=>{document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<this.threshold&&!this.loading&&(this.loading=!0,this.loadMore().finally(()=>this.loading=!1))},100))},unmounted(){window.removeEventListener("scroll",this.eventListener)}},g={class:"p-5 text-center text-gray-600 dark:text-gray-300 text-sm"};function p(e,o,n,h,s,_){return l(),a(c,null,[t(e.$slots,"default"),s.loading?t(e.$slots,"loading",{key:0},()=>[m("div",g,u(n.loadingText),1)]):d("",!0)],64)}const y=i(f,[["render",p]]);export{y as I};
>>>>>>>> 0479a6239f83b1225ce1df2c9d4f132ae4a71e33:public/build/assets/InfiniteScroll.903fe871.js