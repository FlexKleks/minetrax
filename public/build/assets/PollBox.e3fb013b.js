import{_ as f,o,d as n,a as i,F as h,h as y,n as u,l as _,t as r,e as d,J as v,p,b,a8 as x}from"./app.304209a1.js";const k={name:"Poll",props:{question:{type:String,required:!1},answers:{type:Array,required:!1},showResults:{type:Boolean,default:!1},showTotalVotes:{type:Boolean,default:!0},finalResults:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},submitButtonText:{type:String,default:"Submit"},customId:{type:Number,default:0},isComingSoon:{type:Boolean,default:!1},started_at:{type:String,default:null},closed_at:{type:String,default:null}},data(){return{visibleResults:JSON.parse(this.showResults)}},computed:{totalVotes(){let e=0;return this.answers.filter(l=>{!isNaN(l.votes)&&l.votes>0&&(e+=parseInt(l.votes))}),e},totalVotesFormatted(){return this.totalVotes.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},mostVotes(){let e=0;return this.answers.filter(l=>{!isNaN(l.votes)&&l.votes>0&&l.votes>=e&&(e=l.votes)}),e},calcAnswers(){return this.totalVotes===0?this.answers.map(e=>(e.percent="0%",e)):this.answers.filter(e=>(!isNaN(e.votes)&&e.votes>0?e.percent=Math.round(parseInt(e.votes)/this.totalVotes*100)+"%":e.percent="0%",e))},totalSelections(){return this.calcAnswers.filter(e=>e.selected).length}},methods:{handleMultiple(){let e=[];this.calcAnswers.filter(t=>{t.selected&&(t.votes++,e.push({value:t.value,votes:t.votes}))}),this.visibleResults=!0;let l={arSelected:e,totalVotes:this.totalVotes};this.customId&&(l.customId=this.customId),this.$emit("addvote",l)},handleVote(e){if(this.isComingSoon)return;if(this.multiple){e.selected===void 0&&console.log("Please add 'selected: false' on the answer object"),e.selected=!e.selected;return}this.$page.props.auth.user&&(e.votes++,e.selected=!0,this.visibleResults=!0);let l={value:e.value,votes:e.votes,totalVotes:this.totalVotes};this.customId&&(l.customId=this.customId),this.$emit("addvote",l)}}},w={class:"vue-poll"},V=["innerHTML"],S={class:"ans-cnt"},C=["onClick"],T=["innerHTML"],R=["textContent"],B=["innerHTML"],L=["textContent"],M=["innerHTML"],N={key:0,class:"text-gray-400 text-xs italic"},P={class:"flex justify-between items-baseline"},A=["textContent"],I={key:1,class:"text-gray-400 text-xs italic"},H=["textContent"];function j(e,l,t,g,c,a){return o(),n("div",w,[i("h3",{class:"qst dark:text-gray-300",innerHTML:t.question},null,8,V),i("div",S,[(o(!0),n(h,null,y(a.calcAnswers,(s,m)=>(o(),n("div",{key:m,class:u({ans:!0,[s.custom_class]:s.custom_class})},[t.finalResults?(o(),n(h,{key:1},[i("div",{class:u({"ans-voted final dark:text-gray-200":!0,selected:s.selected})},[s.percent?(o(),n("span",{key:0,class:"percent",textContent:r(s.percent)},null,8,L)):d("",!0),i("span",{class:"txt",innerHTML:s.text},null,8,M)],2),i("span",{class:u({"bg bg-cool-gray-200 dark:bg-cool-gray-700":!0,"bg-light-blue-300 dark:bg-light-blue-500":a.mostVotes==s.votes}),style:v({width:s.percent})},null,6)],64)):(o(),n(h,{key:0},[c.visibleResults?(o(),n("div",{key:1,class:u({"ans-voted dark:text-gray-200":!0,selected:s.selected})},[s.percent?(o(),n("span",{key:0,class:"percent",textContent:r(s.percent)},null,8,R)):d("",!0),i("span",{class:"txt",innerHTML:s.text},null,8,B)],2)):(o(),n("div",{key:0,class:u(["hover:bg-light-blue-100 dark:hover:bg-cool-gray-900",{"ans-no-vote noselect":!0,active:s.selected}]),onClick:_(K=>a.handleVote(s),["prevent"])},[i("span",{class:"txt",innerHTML:s.text},null,8,T)],10,C)),i("span",{class:"bg bg-cool-gray-200 dark:bg-cool-gray-700",style:v({width:c.visibleResults?s.percent:"0%"})},null,4)],64))],2))),128))]),t.isComingSoon?(o(),n("div",N,r(e.__("Poll starting"))+"\xA0"+r(e.formatTimeAgoToNow(t.started_at)),1)):d("",!0),i("div",P,[t.showTotalVotes&&(c.visibleResults||t.finalResults)?(o(),n("div",{key:0,class:"votes",textContent:r(a.totalVotesFormatted+" votes")},null,8,A)):d("",!0),!t.isComingSoon&&t.closed_at&&!t.finalResults?(o(),n("div",I,r(e.__("Poll closing"))+"\xA0"+r(e.formatTimeAgoToNow(t.closed_at)),1)):d("",!0)]),!t.finalResults&&!c.visibleResults&&t.multiple&&a.totalSelections>0?(o(),n("a",{key:1,href:"#",class:"submit",onClick:l[0]||(l[0]=_((...s)=>a.handleMultiple&&a.handleMultiple(...s),["prevent"])),textContent:r(t.submitButtonText)},null,8,H)):d("",!0)])}const q=f(k,[["render",j]]),F={components:{Poll:q},props:{poll:Object,isListing:{type:Boolean,default:!1}},data(){return{options:this.poll}},methods:{addVote(e){this.poll.isComingSoon||this.$inertia.post(route("poll.vote",[this.poll.id,e.value]),null,{preserveState:!0,preserveScroll:!0})}}},z={key:0},J={class:"p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow"},O={key:0,class:"font-extrabold text-gray-800 dark:text-gray-200"},D={key:1,class:"font-extrabold text-gray-800 dark:text-gray-200"},E={class:"mt-3 text-gray-500 dark:text-gray-300"};function G(e,l,t,g,c,a){const s=p("poll");return t.poll?(o(),n("div",z,[i("div",J,[t.isListing?d("",!0):(o(),n("h3",O,r(e.__("Latest Poll")),1)),t.isListing?(o(),n("h3",D,r(e.__("Poll"))+" "+r(t.poll.id),1)):d("",!0),i("div",E,[b(s,x(c.options,{onAddvote:a.addVote}),null,16,["onAddvote"])])])])):d("",!0)}const U=f(F,[["render",G]]);export{U as P};