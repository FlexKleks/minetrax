import{A as k}from"./AppLayout.5d858a44.js";import{_ as v}from"./SecondaryButton.e9aef2c3.js";import{_ as w}from"./InputError.ec61c2b6.js";import{L as x}from"./LoadingButton.64cf8154.js";import{X as V}from"./XInput.0385b751.js";import{X as P}from"./XTextarea.62fce205.js";import{_ as S,p as l,o as N,c as R,w as m,b as n,a as e,t as a,f as p,l as _,x as C,z as j,J as A}from"./app.304209a1.js";const L={components:{XTextarea:P,AppLayout:k,JetInputError:w,LoadingButton:x,JetSecondaryButton:v,XInput:V},data(){return{form:this.$inertia.form({name:"",shortname:"",description:"",total_score_needed:"",total_play_one_minute_needed:"",photo:null}),photoPreview:null}},methods:{addRank(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.rank.store"),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=s=>{this.photoPreview=s.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},T={class:"max-w-6xl px-10 py-12 mx-auto"},U={class:"flex justify-between mb-8"},B={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},I={class:"mt-10 sm:mt-0"},D={class:"md:grid md:grid-cols-3 md:gap-6"},E={class:"md:col-span-1"},X={class:"px-4 sm:px-0"},z={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},J={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},M=e("br",null,null,-1),F={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},K={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},O={class:"mt-5 md:mt-0 md:col-span-2"},W={class:"overflow-hidden shadow sm:rounded-md"},q={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},H={class:"col-span-6 sm:col-span-4"},Q={class:"col-span-6 sm:col-span-2"},Y={class:"col-span-6 sm:col-span-3"},Z={class:"col-span-6 sm:col-span-3"},$={class:"col-span-6 sm:col-span-2"},ee={for:"rank_img",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},oe={class:"mt-2"},te={class:"col-span-6 sm:col-span-4"},se={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function re(o,s,ne,ae,t,i){const c=l("app-head"),u=l("inertia-link"),d=l("x-input"),h=l("jet-secondary-button"),f=l("jet-input-error"),g=l("x-textarea"),y=l("loading-button"),b=l("app-layout");return N(),R(b,null,{default:m(()=>[n(c,{title:o.__("Add Player Rank")},null,8,["title"]),e("div",T,[e("div",U,[e("h1",B,a(o.__("Add Player Rank")),1),n(u,{href:o.route("admin.rank.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:m(()=>[e("span",null,a(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",I,[e("div",D,[e("div",E,[e("div",X,[e("h3",z,a(o.__("Overview")),1),e("p",J,[p(a(o.__("Ranks are assigned to players when a given criteria is matched, eg: play time, score etc.")),1),M,p(a(o.__("Play Time Need should be provided in Ticks. 20 Ticks = 1 seconds. So if you want to add criteria to give rank if player played at-least 1 minute then you write 1200")),1)]),e("p",F,a(o.__("Each rank is sorted according to its weight. More the score and time is more the weight.")),1),e("p",K,a(o.__("If you instead want to sync player rank from server to web, you can do that too from Settings -> Player Settings. Currently Luckperms is supported. Make sure to have same Short Name for rank name what you have chosen in Luckperms. While rank sync is enabled the criteria like score and time will be ignored but while adding ranks it is recommended to enter something in them so web know which rank has more weight.")),1)])]),e("div",O,[e("form",{onSubmit:s[6]||(s[6]=_((...r)=>i.addRank&&i.addRank(...r),["prevent"]))},[e("div",W,[e("div",q,[e("div",G,[e("div",H,[n(d,{id:"name",modelValue:t.form.name,"onUpdate:modelValue":s[0]||(s[0]=r=>t.form.name=r),label:o.__("Rank Name"),help:o.__("Eg: Knight"),error:t.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",Q,[n(d,{id:"shortname",modelValue:t.form.shortname,"onUpdate:modelValue":s[1]||(s[1]=r=>t.form.shortname=r),label:o.__("Short Name"),help:o.__("Eg: knight"),error:t.form.errors.shortname,type:"text",name:"shortname"},null,8,["modelValue","label","help","error"])]),e("div",Y,[n(d,{id:"total_score_needed",modelValue:t.form.total_score_needed,"onUpdate:modelValue":s[2]||(s[2]=r=>t.form.total_score_needed=r),label:o.__("Score Needed"),error:t.form.errors.total_score_needed,type:"number",name:"total_score_needed"},null,8,["modelValue","label","error"])]),e("div",Z,[n(d,{id:"total_play_one_minute_needed",modelValue:t.form.total_play_one_minute_needed,"onUpdate:modelValue":s[3]||(s[3]=r=>t.form.total_play_one_minute_needed=r),label:o.__("Play Time Needed"),error:t.form.errors.total_play_one_minute_needed,type:"number",name:"total_play_one_minute_needed"},null,8,["modelValue","label","error"])]),e("div",$,[e("input",{id:"rank_img",ref:"photo",type:"file",class:"hidden",onChange:s[4]||(s[4]=(...r)=>i.updatePhotoPreview&&i.updatePhotoPreview(...r))},null,544),e("label",ee,a(o.__("Rank Image")),1),C(e("div",oe,[e("span",{class:"block w-20 h-20 rounded-full",style:A("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+t.photoPreview+"');")},null,4)],512),[[j,t.photoPreview]]),n(h,{class:"mt-2 mr-2",type:"button",onClick:_(i.selectNewPhoto,["prevent"])},{default:m(()=>[p(a(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),n(f,{message:t.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",te,[n(g,{id:"description",modelValue:t.form.description,"onUpdate:modelValue":s[5]||(s[5]=r=>t.form.description=r),rows:10,label:o.__("Description"),error:t.form.errors.description,name:"description"},null,8,["modelValue","label","error"])])])]),e("div",se,[n(y,{loading:t.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[p(a(o.__("Add Rank")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ue=S(L,[["render",re]]);export{ue as default};