import{u as j,I as B,E as X,f as Z,A as ee}from"./AppLayout.48200e20.js";import{N as te}from"./NewsBox.216c3b6c.js";import{S as se}from"./ShoutBox.a5e8c9ce.js";import{_ as oe,D as re}from"./DidYouKnowBox.c97e4c89.js";import{_ as k,o as n,d as a,a as t,t as r,b as g,w as p,H as T,s as x,f as m,e as c,l as d,q as C,F as w,g as S,n as P,c as v,ab as I,W as ne,x as $,j as M,v as ie,k as ae,U as le,r as ce}from"./app.5bc07c9e.js";import{S as de,P as ue}from"./SocialChannelBox.e3b50e9d.js";import{_ as N}from"./AlertCard.5db54c20.js";import{_ as _e}from"./DialogModal.cfe500cd.js";import{_ as he}from"./SecondaryButton.ed480618.js";import{L as ge}from"./LoadingButton.737d0baa.js";import{u as E}from"./useAuthorizable.baba4420.js";import{S as ye}from"./ServerStatusBox.e4ebe835.js";import{P as me}from"./PollBox.3c94ce89.js";import{_ as pe}from"./CopyToClipboard.4358cfcf.js";import{L as fe}from"./LoadingSpinner.9601a18a.js";import"./InfiniteScroll.1e6ec19d.js";import"./InputError.b785a18a.js";import"./Post.3c574f09.js";import"./UserDisplayname.aef523f2.js";import"./XMarkIcon.7c1db738.js";import"./Modal.36bebce5.js";const be={props:{user:Object,enabled:Boolean},setup(){const{formatTimeAgoToNow:e,formatToDayDateString:i}=j();return{formatTimeAgoToNow:e,formatToDayDateString:i}}},xe={key:0},ve={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},ke={class:"font-extrabold text-gray-800 dark:text-gray-200"},we=["src"],Se={class:"flex flex-col"},Le={class:"break-all"},Ce={class:"text-gray-500 dark:text-gray-400"},Pe=["title"];function Ae(e,i,o,_,s,u){const b=d("inertia-link"),y=C("tippy");return o.enabled&&o.user?(n(),a("div",xe,[t("div",ve,[t("h3",ke,r(e.__("Newest User")),1),g(b,{as:"div",href:e.route("user.public.get",o.user.username),class:"cursor-pointer flex space-x-2 border dark:border-gray-700 rounded-tl-md rounded-tr-xl rounded-b-3xl p-2 items-center hover:border-light-blue-400 dark:hover:border-light-blue-400"},{default:p(()=>[t("img",{class:"w-14 h-14 rounded-full",src:o.user.profile_photo_url,alt:"Avatar"},null,8,we),t("div",Se,[t("div",Le,[t("span",{class:"text-gray-800 dark:text-gray-300 font-semibold",style:T([o.user.roles[0].color?{color:o.user.roles[0].color}:null])},r(o.user.name),5),t("span",Ce,"@"+r(o.user.username),1)]),x((n(),a("span",{class:"text-sm text-gray-700 dark:text-gray-500 focus:outline-none",title:_.formatToDayDateString(o.user.created_at)},[m(r(e.__("Joined"))+"\xA0"+r(_.formatTimeAgoToNow(o.user.created_at)),1)],8,Pe)),[[y]])])]),_:1},8,["href"])])])):c("",!0)}const Ie=k(be,[["render",Ae]]),$e={props:{votingsites:Array,enabled:Boolean}},Te={key:0},je={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},Me={class:"font-extrabold text-gray-800 dark:text-gray-200"},Be={class:"rounded text-sm text-gray-600 dark:text-gray-400 text-center p-1"},De={class:"flex flex-col space-y-2"},Ne=["content"],Ee=["href"];function Qe(e,i,o,_,s,u){const b=C("tippy");return o.enabled&&o.votingsites&&o.votingsites.length>0?(n(),a("div",Te,[t("div",je,[t("h3",Me,r(e.__("Vote for Server")),1),t("p",Be,r(e.__("Vote on these sites and win rewards!")),1),t("div",De,[(n(!0),a(w,null,S(o.votingsites,(y,f)=>(n(),a("div",{key:f,class:"rounded flex justify-between items-center p-2 bg-gray-100 dark:bg-cool-gray-900"},[x((n(),a("div",{content:y.url,class:"text-gray-500 dark:text-gray-300 text-sm font-bold focus:outline-none"},[m(r(y.name),1)],8,Ne)),[[b]]),t("div",null,[t("a",{target:"_blank",class:"rounded tracking-wider text-sm px-2 py-1 text-gray-500 dark:text-gray-300 bg-white dark:bg-cool-gray-800 shadow hover:shadow-md",href:y.url},r(e.__("Vote")),9,Ee)])]))),128))])])])):c("",!0)}const Ve=k($e,[["render",Qe]]),Ue={props:["htmlData"]},He={key:0},Oe={class:"bg-white dark:bg-cool-gray-800 rounded px-4 py-3 shadow"},ze=["innerHTML"];function Fe(e,i,o,_,s,u){return o.htmlData?(n(),a("div",He,[t("div",Oe,[t("div",{class:"prose dark:prose-dark max-w-none text-center",innerHTML:o.htmlData},null,8,ze)])])):c("",!0)}const qe=k(Ue,[["render",Fe]]),We={components:{Icon:B},props:{newslist:Array},setup(){const{formatTimeAgoToNow:e,formatToDayDateString:i}=j();return{formatTimeAgoToNow:e,formatToDayDateString:i}}},Ye={key:0,class:"space-y-4"},Je={class:"p-3 sm:px-5"},Ke={class:"text-xl"},Ge={class:"mb-1"},Re=["content"],Xe={class:"text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"},Ze=["innerHTML"],et=["src"];function tt(e,i,o,_,s,u){const b=d("icon"),y=d("inertia-link"),f=C("tippy");return o.newslist&&o.newslist.length>0?(n(),a("div",Ye,[(n(!0),a(w,null,S(o.newslist,l=>(n(),a("div",{key:l.id,class:"bg-white dark:bg-cool-gray-800 rounded shadow flex justify-between"},[t("div",Je,[t("div",Ke,[t("p",Ge,[x(g(b,{title:e.__("Pinned News"),class:"inline text-gray-400 focus:outline-none",name:"paper-clip"},null,8,["title"]),[[f]]),t("span",{class:P(["font-semibold uppercase text-sm tracking-wider",{"text-light-blue-400":l.type.value===0,"text-orange-500":l.type.value===1,"text-green-500":l.type.value===2}])},"\xA0"+r(l.type.key)+"\xA0",3),x((n(),a("span",{content:_.formatToDayDateString(l.published_at),class:"focus:outline-none text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"},[m(r(_.formatTimeAgoToNow(l.published_at)),1)],8,Re)),[[f]]),t("span",Xe," - "+r(l.time_to_read)+" read",1)]),g(y,{href:e.route("news.show",l.slug),class:"hover:text-light-blue-400 dark:text-gray-200 dark:hover:text-light-blue-400 duration-200"},{default:p(()=>[m(r(l.title),1)]),_:2},1032,["href"])]),t("div",{class:"mt-3 text-gray-500 dark:text-gray-400",innerHTML:l.body_md},null,8,Ze)]),l.photo_url?(n(),a("img",{key:0,class:"h-auto w-2/5 object-cover object-center",src:l.photo_url,alt:"News Image"},null,8,et)):c("",!0)]))),128))])):c("",!0)}const st=k(We,[["render",tt]]),ot={components:{AlertCard:N},data(){return{response:{},loading:!0}},created(){axios.get(route("version.check")).then(e=>{this.response=e.data}).finally(()=>{this.loading=!1})}},rt={key:0,ref:"box"},nt={class:"text-gray-700 dark:text-gray-200"},it={class:"text-red-500"},at={class:"text-green-500"},lt=t("br",null,null,-1),ct={class:"text-light-blue-500 hover:underline",target:"_blank",href:"https://minetrax.github.io/docs/upgrade"},dt={class:"text-xs text-gray-500 italic mt-2"};function ut(e,i,o,_,s,u){const b=d("AlertCard");return!s.loading&&s.response&&s.response.is_uptodate===!1?(n(),a("div",rt,[g(b,{"text-color":"text-red-800 dark:text-red-500","border-color":"border-red-500"},{body:p(()=>[t("div",nt,[m(r(e.__("Your current MineTrax version is"))+"\xA0",1),t("span",it,r(s.response.my_version),1),m("\xA0"+r(e.__("while the latest version is"))+"\xA0",1),t("span",at,r(s.response.latest_version),1),m(". "+r(e.__("Please upgrade to enjoy latest features."))+" ",1),lt,t("a",ct,r(e.__("Click here to know more.")),1),t("p",dt,r(e.__("Note: This box is only visible to Staff Member")),1)])]),default:p(()=>[m(r(e.__("Your MineTrax Version is Outdated!"))+" ",1)]),_:1})],512)):c("",!0)}const _t=k(ot,[["render",ut]]),ht={components:{ErrorMessage:X},props:{server:Object},data(){return{serverInfo:Object,playersList:Object,loading:!0,error:null,sizeClass:"w-5 h-5",interval:null}},computed:{enabled(){return this.$page.props.generalSettings.enable_mcserver_onlineplayersbox?!!(this.server||this.$page.props.defaultQueryServer):!1}},created(){!this.enabled||(this.getServerQuery(),this.interval=setInterval(()=>this.getServerQuery(),1e4))},unmounted(){clearInterval(this.interval)},methods:{getServerQuery(){let e=this.server;e||(e=this.$page.props.defaultQueryServer),axios.get(route("server.query.get",e.id)).then(i=>{this.serverInfo=i.data.server_info,this.playersList=i.data.players_list;for(let o in this.playersList)this.playersList[o]||(this.playersList[o]="00000000-0000-0000-0000-000000000000");this.error=null,Object.keys(this.playersList).length<=5&&(this.sizeClass="w-8 h-8")}).catch(i=>{this.error=i.response.data.message||i.message,this.serverInfo=null,this.playersList=null}).finally(()=>{this.loading=!1})}}},gt={key:0},yt={class:"p-3 sm:px-5 bg-white dark:bg-gray-800 rounded shadow"},mt={class:"font-extrabold text-gray-800 dark:text-gray-200"},pt={key:0,class:"float-right text-green-500 font-semibold"},ft={key:0,class:"flex p-4 justify-center"},bt=t("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-light-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),xt=[bt],vt={key:2,class:"mt-3 text-gray-500 flex flex-wrap justify-center"},kt=["title","src","alt"],wt={key:3,class:"italic p-1 rounded text-center text-gray-400"};function St(e,i,o,_,s,u){const b=d("error-message"),y=C("tippy");return u.enabled?(n(),a("div",gt,[t("div",yt,[t("h3",mt,[m(r(e.__("Online Players"))+" ",1),!s.loading&&!s.error?(n(),a("span",pt,r(s.serverInfo.Players)+" / "+r(s.serverInfo.MaxPlayers),1)):c("",!0)]),s.loading?(n(),a("div",ft,xt)):c("",!0),s.error?(n(),v(b,{key:1},{default:p(()=>[m(r(s.error),1)]),_:1})):c("",!0),!s.loading&&!s.error?(n(),a("div",vt,[(n(!0),a(w,null,S(s.playersList,(f,l)=>(n(),a("div",{key:f,class:P(["flex-shrink-0 mr-1 mb-1",s.sizeClass])},[x(t("img",{title:l,src:e.route("player.avatar.get",{uuid:f,username:l,size:50}),alt:l,class:P(["focus:outline-none",s.sizeClass])},null,10,kt),[[y]])],2))),128))])):c("",!0),!s.error&&(!s.playersList||s.playersList.length<=0)?(n(),a("div",wt,r(e.__("No players online.")),1)):c("",!0)])])):c("",!0)}const Lt=k(ht,[["render",St]]),Ct={components:{Icon:B,JetDialogModal:_e,JetSecondaryButton:he,LoadingButton:ge},props:{defaultServerId:Number,serverList:Array},setup(){const{can:e}=E(),{formatToDayDateString:i}=j();return{can:e,formatToDayDateString:i}},data(){return{serverId:this.defaultServerId,chatLogs:[],message:"",loading:!0,error:null,sending:!1,playersList:[],playersListLoading:!0,shouldDisplayPlayerList:!0,playerListQueryInterval:null,showAdminPlayerActionModel:!1,actionModelCurrentPlayer:null,adminPlayerActionLoading:!1,adminPlayerActionError:null,format:Z,isWebQuerySuccess:!1,chatListQueryInterval:null}},computed:{enabled(){return this.$page.props.generalSettings.enable_ingamechat?!!this.defaultServerId:!1}},watch:{serverId:function(e,i){I?Echo.leaveChannel("chatlogs."+i):clearInterval(this.chatListQueryInterval),this.serverId=e,this.getChatListForServer(e),clearInterval(this.playerListQueryInterval),this.getPlayerListForServer(e),this.playerListQueryInterval=setInterval(()=>this.getPlayerListForServer(e),1e4)}},created(){!this.enabled||(this.getChatListForServer(this.serverId),this.getPlayerListForServer(this.serverId),this.playerListQueryInterval=setInterval(()=>this.getPlayerListForServer(this.serverId),1e4))},unmounted(){I?Echo.leave("chatlogs."+this.serverId):clearInterval(this.chatListQueryInterval),clearInterval(this.playerListQueryInterval)},methods:{postSendMessage(){this.sending=!0,this.error=null,axios.post(route("chatlog.send",this.serverId),{message:this.message}).then(()=>{}).catch(e=>{e.response.status===422?this.error=Object.values(e.response.data.errors)[0][0]:e.response.status===403?this.error=e.response.data.message:this.error=e.response.statusText}).finally(()=>{this.message="",this.sending=!1,this.$nextTick(()=>{this.$refs.inputbox.focus(),this.pollServerForNewChat(this.serverId)})})},getChatListForServer(e){this.loading=!0,this.chatLogs=[],axios.get(route("chatlog.index",e)).then(i=>{this.chatLogs=i.data.reverse()}).finally(()=>{this.loading=!1,this.$nextTick(()=>{let i=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,i)})}),I?Echo.channel("chatlogs."+e).listen("ServerChatlogCreated",i=>{this.chatLogs.push(i.data),this.$nextTick(()=>{let o=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,o)})}):this.chatListQueryInterval=setInterval(()=>this.pollServerForNewChat(this.serverId),6e3)},pollServerForNewChat(e){if(I)return;let i=this.chatLogs.length>0?this.chatLogs[this.chatLogs.length-1].id:0;axios.get(route("chatlog.index",{server:e,after:i})).then(o=>{const _=o.data.reverse();_.length>0&&(this.chatLogs=this.chatLogs.concat(_),this.$nextTick(()=>{let s=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,s)}))})},getPlayerListForServer(e){axios.get(route("server.webquery.get",e)).then(i=>{this.playersList=i.data,this.isWebQuerySuccess=!0}).catch(()=>{this.shouldDisplayPlayerList=!1,this.isWebQuerySuccess=!1}).finally(()=>{this.playersListLoading=!1})},openAdminPlayerActionModel(e){this.showAdminPlayerActionModel=!0,this.actionModelCurrentPlayer=e},closeAdminPlayerActionModel(){this.showAdminPlayerActionModel=!1,this.actionModelCurrentPlayer=null},sendCommandToServer(e){this.adminPlayerActionLoading=!0;let i=null,o={type:null,params:null,context:null};switch(e){case"kill":o.type="kill",o.params=this.actionModelCurrentPlayer.username,o.context="player";break;case"mute":if(i=prompt(this.__("Give any reason if muting? Note: ALWAYS LEAVE IT BLANK IF UN-MUTING")),i===null)break;o.type="mute",i?o.params=this.actionModelCurrentPlayer.username+" "+i:o.params=this.actionModelCurrentPlayer.username,o.context="player";break;case"kick":if(i=prompt(this.__("Any reason for kicking this player?")),i===null)break;o.type="kick",o.params=this.actionModelCurrentPlayer.username+" "+i,o.context="player";break;case"ban":if(i=prompt(this.__("Any reason for banning this player?")),i===null)break;o.type="ban",o.params=this.actionModelCurrentPlayer.username+" "+i,o.context="player";break}if(o.type===null){this.adminPlayerActionLoading=!1;return}axios.post(route("admin.server.command",this.serverId),o).then(()=>{this.closeAdminPlayerActionModel()}).catch(_=>{this.adminPlayerActionError=_.message}).finally(()=>{this.adminPlayerActionLoading=!1})}}},Pt={key:0},At={class:"p-3 bg-white rounded shadow sm:px-5 dark:bg-cool-gray-800"},It={class:"flex justify-between"},$t={class:"font-extrabold text-gray-800 dark:text-gray-200"},Tt=["value"],jt={class:"flex flex-col"},Mt={key:0,class:"space-y-2"},Bt=ae('<div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div><div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div><div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div>',3),Dt=[Bt],Nt={id:"chat-container",class:"relative flex flex-col-reverse justify-between p-1 mt-1 text-white bg-gray-200 rounded md:flex-row dark:bg-cool-gray-900"},Et={id:"chatbox",class:"flex flex-col overflow-auto text-sm max-h-96 hide-scrollbar invert dark:invert-0"},Qt=["title","innerHTML"],Vt={key:0,class:"flex items-center justify-center w-full h-full text-sm italic text-gray-500"},Ut={id:"player-list",class:"sticky flex justify-end overflow-auto text-sm bg-white bg-opacity-100 rounded dark:bg-cool-gray-800 max-h-96 min-w-max hide-scrollbar"},Ht={class:"flex flex-col w-full space-y-1"},Ot={class:"relative flex items-center justify-center p-2 bg-gray-100 dark:bg-opacity-25 dark:bg-cool-gray-600"},zt={class:"ml-4 mr-5 font-bold text-gray-700 dark:text-gray-200"},Ft={class:"flex space-x-1 truncate"},qt=["src"],Wt={id:"right",class:"flex items-center justify-center space-x-1"},Yt=["title","src","alt"],Jt=["onClick"],Kt={key:1,class:"mt-1"},Gt=["disabled","placeholder"],Rt={key:1,class:"text-xs text-red-400"},Xt={key:2,class:"flex justify-end mt-2 text-xs text-gray-500 dark:text-gray-400"},Zt={key:2,class:"mt-2 text-sm text-center text-gray-600 dark:text-gray-400"},es={key:0,class:"flex flex-col items-center font-bold"},ts={class:"text-gray-800 underline"},ss=["src"],os={class:"text-light-blue-600"},rs={class:"text-xs text-gray-600"},ns={class:"flex justify-center space-x-2"},is={key:0,class:"flex justify-center p-1 mt-2 text-sm text-red-500 bg-red-100 border border-red-500"};function as(e,i,o,_,s,u){const b=d("inertia-link"),y=d("icon"),f=d("loading-button"),l=d("jet-secondary-button"),L=d("jet-dialog-modal"),A=C("tippy");return u.enabled?(n(),a("div",Pt,[t("div",At,[t("div",It,[t("h3",$t,r(e.__("Server In-Game Chat")),1),o.serverList&&o.serverList.length>1?x((n(),a("select",{key:0,id:"serverSelector","onUpdate:modelValue":i[0]||(i[0]=h=>s.serverId=h),"aria-label":"serverSelector",name:"serverSelector",class:"text-xs border-gray-300 rounded-md shadow-sm focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"},[(n(!0),a(w,null,S(o.serverList,h=>(n(),a("option",{key:h.id,value:h.id},r(h.name),9,Tt))),128))],512)),[[ne,s.serverId]]):c("",!0)]),t("div",jt,[s.loading?(n(),a("div",Mt,Dt)):c("",!0),x(t("div",Nt,[x(t("button",{class:"absolute top-0 right-0 mt-1 mr-2 font-semibold text-green-400 z-10",type:"button",onClick:i[1]||(i[1]=h=>s.shouldDisplayPlayerList=!s.shouldDisplayPlayerList)}," [+] ",512),[[$,!s.shouldDisplayPlayerList]]),t("div",Et,[(n(!0),a(w,null,S(s.chatLogs,h=>x((n(),a("p",{key:h.id,title:_.formatToDayDateString(h.created_at),class:"focus:outline-none",innerHTML:h.data},null,8,Qt)),[[A]])),128)),!s.chatLogs||s.chatLogs.length<=0?(n(),a("div",Vt,r(e.__("No chat recorded yet!")),1)):c("",!0)]),x(t("div",Ut,[t("div",Ht,[t("div",Ot,[t("h3",zt,r(e.__("Players"))+"\xA0("+r(s.playersList.length)+") ",1),t("button",{class:"absolute right-0 mr-2 font-semibold text-red-500 dark:text-red-400 z-10",type:"button",onClick:i[2]||(i[2]=h=>s.shouldDisplayPlayerList=!s.shouldDisplayPlayerList)}," [-] ")]),(n(!0),a(w,null,S(s.playersList,h=>(n(),a("div",{key:h.id,class:"flex justify-between mx-1"},[t("div",Ft,[t("img",{class:"h-5",src:e.route("player.avatar.get",{uuid:h.id,username:h.username,size:50}),alt:"Player Avatar"},null,8,qt),h.is_in_db?(n(),v(b,{key:0,href:e.route("player.show",h.id)},{default:p(()=>[t("span",{class:P(["mr-1 font-semibold truncate text-gray-800 dark:text-white",{"text-orange-500 dark:text-yellow-300":h.is_op}])},r(h.username),3)]),_:2},1032,["href"])):(n(),a("span",{key:1,class:P(["mr-1 truncate text-gray-800 dark:text-white",{"text-orange-500 dark:text-yellow-300":h.is_op}])},r(h.username),3))]),t("div",Wt,[x(t("img",{class:"h-5",title:h.country.name,src:h.country.photo_path,alt:h.country.name},null,8,Yt),[[A]]),e.$page.props.auth.user&&e.$page.props.auth.user.is_staff?(n(),a("a",{key:0,class:"text-gray-400 cursor-pointer hover:text-gray-200",href:"#",onClick:M(D=>u.openAdminPlayerActionModel(h),["prevent"])},[g(y,{name:"cog",class:"w-4 h-4"})],8,Jt)):c("",!0)])]))),128))])],512),[[$,!s.playersListLoading&&s.shouldDisplayPlayerList]])],512),[[$,!s.loading]]),e.$page.props.auth.user?(n(),a("div",Kt,[t("form",{onSubmit:i[4]||(i[4]=M((...h)=>u.postSendMessage&&u.postSendMessage(...h),["prevent"]))},[s.loading?c("",!0):x((n(),a("input",{key:0,ref:"inputbox","onUpdate:modelValue":i[3]||(i[3]=h=>s.message=h),disabled:s.sending||!s.isWebQuerySuccess,"aria-label":"Shout",class:"block w-full mt-1 bg-gray-100 border-none rounded-md focus:ring-gray-300 dark:focus:ring-gray-700 sm:text-sm disabled:opacity-50 dark:bg-cool-gray-900 dark:text-gray-200 focus:bg-white",type:"text",placeholder:s.isWebQuerySuccess?e.__("Say something.."):e.__("Server webquery is offline")},null,8,Gt)),[[ie,s.message]]),s.error?(n(),a("span",Rt,r(s.error),1)):c("",!0),!s.loading&&_.can("send server_custom_commands")?(n(),a("span",Xt,r(e.__("Start with / to send a console command")),1)):c("",!0)],32)])):(n(),a("div",Zt,[g(b,{class:"font-semibold text-light-blue-500",href:e.route("login")},{default:p(()=>[m(r(e.__("Login")),1)]),_:1},8,["href"]),e.$page.props.hasRegistrationFeature?(n(),a(w,{key:0},[m(r(" "+e.__("or"))+" ",1),g(b,{class:"font-semibold text-light-blue-500",href:e.route("register")},{default:p(()=>[m(r(e.__("Register")),1)]),_:1},8,["href"])],64)):c("",!0),m(" "+r(e.__("to chat with In-Game Players")),1)]))])]),g(L,{show:s.showAdminPlayerActionModel,onClose:u.closeAdminPlayerActionModel},{title:p(()=>[s.actionModelCurrentPlayer?(n(),a("div",es,[t("span",ts,r(e.__("Manage Player")),1),t("img",{class:"h-24 rounded",src:e.route("player.avatar.get",{uuid:s.actionModelCurrentPlayer.id,username:s.actionModelCurrentPlayer.username}),alt:"Player Avatar"},null,8,ss),t("span",os,r(s.actionModelCurrentPlayer.username),1),t("span",rs,r(s.actionModelCurrentPlayer.id),1)])):c("",!0)]),content:p(()=>[t("div",ns,[_.can("kill players")?(n(),v(f,{key:0,loading:s.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50",type:"button",onClick:i[5]||(i[5]=h=>u.sendCommandToServer("kill"))},{default:p(()=>[m(r(e.__("Kill")),1)]),_:1},8,["loading"])):c("",!0),_.can("mute players")?(n(),v(f,{key:1,loading:s.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200 disabled:opacity-50",type:"button",onClick:i[6]||(i[6]=h=>u.sendCommandToServer("mute"))},{default:p(()=>[m(r(e.__("Mute"))+" / "+r(e.__("UnMute")),1)]),_:1},8,["loading"])):c("",!0),_.can("kick players")?(n(),v(f,{key:2,loading:s.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50",type:"button",onClick:i[7]||(i[7]=h=>u.sendCommandToServer("kick"))},{default:p(()=>[m(r(e.__("Kick")),1)]),_:1},8,["loading"])):c("",!0),_.can("ban players")?(n(),v(f,{key:3,loading:s.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50",type:"button",onClick:i[8]||(i[8]=h=>u.sendCommandToServer("ban"))},{default:p(()=>[m(r(e.__("Ban")),1)]),_:1},8,["loading"])):c("",!0)]),s.adminPlayerActionError?(n(),a("div",is,r(s.adminPlayerActionError),1)):c("",!0)]),footer:p(()=>[g(l,{onClick:u.closeAdminPlayerActionModel},{default:p(()=>[m(r(e.__("Cancel")),1)]),_:1},8,["onClick"])]),_:1},8,["show","onClose"])])):c("",!0)}const ls=k(Ct,[["render",as]]),cs={computed:{enabled(){return this.$page.props.generalSettings.enable_donation_box&&this.$page.props.generalSettings.donation_box_url},donationText(){return le.exports.sample([this.__("Help us run our servers!"),this.__("Your help mean everything to us!"),this.__("If you are capable, we would appreciate your contribution")])}}},ds={key:0},us={class:"p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow"},_s={class:"font-extrabold text-gray-800 dark:text-gray-200"},hs={class:"rounded text-sm text-gray-600 dark:text-gray-300 text-center p-1"},gs={class:"mt-3 text-light-blue-400 flex justify-center"},ys=["href"];function ms(e,i,o,_,s,u){return u.enabled?(n(),a("div",ds,[t("div",us,[t("h3",_s,r(e.__("Donate")),1),t("p",hs,r(u.donationText),1),t("div",gs,[t("a",{target:"_blank",class:"hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 border px-2 py-1 border-light-blue-400 font-semibold rounded",href:e.$page.props.generalSettings.donation_box_url},r(e.__("Donate Now")),9,ys)])])])):c("",!0)}const ps=k(cs,[["render",ms]]),fs={props:{users:Array,enabled:Boolean},computed:{guestCount(){let e=0;return this.users.forEach(i=>{i.user||e++}),e},onlineMembers(){return this.users.filter(e=>e.user)}}},bs={key:0},xs={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},vs={class:"font-extrabold text-gray-800 dark:text-gray-200"},ks={key:0,class:"flex justify-center flex-wrap"},ws=["src","alt"],Ss={key:1,class:"text-gray-500 dark:text-gray-400 italic font-light flex justify-center"},Ls={class:"flex justify-center text-xs text-gray-700 dark:text-gray-300 font-semibold"};function Cs(e,i,o,_,s,u){const b=d("inertia-link");return o.enabled&&o.users?(n(),a("div",bs,[t("div",xs,[t("h3",vs,r(e.__("Online Users")),1),o.users&&o.users.length>0?(n(),a("div",ks,[(n(!0),a(w,null,S(u.onlineMembers,y=>(n(),v(b,{key:y.id,as:"div",href:e.route("user.public.get",y.user.username),class:"cursor-pointer flex mr-2 items-center text-light-blue-500 hover:underline",style:T([y.user.roles[0].color?{color:y.user.roles[0].color}:null])},{default:p(()=>[t("img",{class:"h-5 w-5 rounded-full mr-0.5",src:y.user.profile_photo_url,alt:y.user.username},null,8,ws),t("span",null,"@"+r(y.user.username),1)]),_:2},1032,["href","style"]))),128))])):(n(),a("div",Ss,r(e.__("No member online.")),1)),t("div",Ls,r(e.__("Total"))+": "+r(u.guestCount+u.onlineMembers.length)+" ("+r(e.__("members"))+": "+r(u.onlineMembers.length)+", "+r(e.__("guests"))+": "+r(u.guestCount)+") ",1)])])):c("",!0)}const Ps=k(fs,[["render",Cs]]),As={components:{Icon:B},props:{title:String,players:Array,enabled:Boolean},setup(){const{formatTimeAgoToNow:e,formatToDayDateString:i}=j();return{formatTimeAgoToNow:e,formatToDayDateString:i}}},Is={key:0},$s={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},Ts={class:"font-extrabold text-gray-800 dark:text-gray-200"},js={class:"flex flex-col space-y-2"},Ms={class:""},Bs={class:"bg-gray-100 dark:bg-cool-gray-900 dark:bg-opacity-50 text-gray-700 dark:text-gray-300"},Ds={scope:"col",class:"p-1 text-left text-xs font-bold text-center uppercase tracking-wider"},Ns={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Es={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Qs={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Vs={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"},Us={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"},Hs={class:"bg-white dark:bg-cool-gray-800"},Os={class:"p-1 text-sm text-light-blue-400 font-extrabold"},zs={key:0,class:"border-2 rounded text-sm px-1 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},Fs={class:"p-1"},qs={class:"flex items-center"},Ws=["content"],Ys=["src","alt"],Js={class:"p-1"},Ks={key:0,class:"flex items-center"},Gs=["content"],Rs=["src"],Xs={class:"p-1"},Zs={class:"flex items-center"},eo={class:"flex-shrink-0 h-6 w-6"},to=["src"],so={class:"ml-4"},oo={key:0,class:"text-gray-700 dark:text-gray-300 font-bold text-sm truncate"},ro={key:1,class:"text-red-500 dark:text-red-400 italic"},no={class:"p-1 text-sm text-gray-700 hidden sm:table-cell"},io={key:0},ao={key:1,class:"text-gray-700 dark:text-gray-500 italic"},lo={class:"p-1 text-xs text-gray-700 dark:text-gray-300 hidden sm:table-cell"},co=["content"];function uo(e,i,o,_,s,u){const b=d("inertia-link"),y=d("icon"),f=C("tippy");return o.enabled&&o.players&&o.players.length>0?(n(),a("div",Is,[t("div",$s,[t("h3",Ts,r(o.title),1),t("div",js,[t("table",Ms,[t("thead",Bs,[t("tr",null,[t("th",Ds,r(e.__("#")),1),t("th",Ns,r(e.__("Flag")),1),t("th",Es,r(e.__("Rank")),1),t("th",Qs,r(e.__("Name")),1),t("th",Vs,r(e.__("Rating")),1),t("th",Us,r(e.__("Last Seen")),1)])]),t("tbody",Hs,[(n(!0),a(w,null,S(o.players,(l,L)=>(n(),a("tr",{key:L,class:P({"bg-gray-50 dark:bg-cool-gray-600 dark:bg-opacity-10":L%2===1})},[t("td",Os,[l.position?(n(),a("span",zs,r(l.position),1)):c("",!0)]),t("td",Fs,[t("div",qs,[x((n(),a("div",{class:"flex-shrink-0 h-6 w-6 focus:outline-none",content:l.country.name},[t("img",{class:"h-6 w-6",src:l.country.photo_path,alt:l.country.name},null,8,Ys)],8,Ws)),[[f]])])]),t("td",Js,[l.rank?(n(),a("div",Ks,[x((n(),a("div",{class:"flex-shrink-0 h-6 w-6 focus:outline-none",content:l.rank.name},[t("img",{class:"h-6 w-6",src:l.rank.photo_url,alt:""},null,8,Rs)],8,Gs)),[[f]])])):c("",!0)]),t("td",Xs,[t("div",Zs,[t("div",eo,[t("img",{class:"h-6 w-6",src:l.avatar_url,alt:""},null,8,to)]),t("div",so,[x((n(),v(b,{as:"div",href:e.route("player.show",l.uuid),class:"text-sm text-gray-900 focus:outline-none cursor-pointer hover:underline",content:l.uuid},{default:p(()=>[l.username?(n(),a("span",oo,r(l.username),1)):(n(),a("span",ro,r(e.__("Unknown")),1))]),_:2},1032,["href","content"])),[[f]])])])]),t("td",no,[l.rating!=null?(n(),a("span",io,[x(g(y,{class:"w-6 h-6 focus:outline-none",name:`rating-${l.rating}`,content:l.rating},null,8,["name","content"]),[[f]])])):(n(),a("span",ao,r(e.__("none")),1))]),t("td",lo,[x((n(),a("span",{class:"focus:outline-none",content:_.formatToDayDateString(l.last_seen_at)},[m(r(l.last_seen_at?_.formatTimeAgoToNow(l.last_seen_at):"unknown"),1)],8,co)),[[f]])])],2))),128))])])])])])):c("",!0)}const _o=k(As,[["render",uo]]),ho={class:"text-gray-700 text-sm dark:text-gray-200"},go={__name:"VerifyYourEmailBox",setup(e){const i=ce(null),o=()=>{i.value=!0};return(_,s)=>{const u=d("InertiaLink");return n(),v(N,{"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{body:p(()=>[t("div",ho,[t("p",null,r(_.__("Email verification is required to perform any action on the site. Please check your email inbox or ")),1),g(u,{href:_.route("verification.send"),method:"post",as:"button",class:"underline text-light-blue-500 hover:text-light-blue-700",onClick:M(o,["prevent"])},{default:p(()=>[m(r(_.__("Click here to re-send the verification email")),1)]),_:1},8,["href","onClick"]),x(t("div",{class:"mt-2 font-medium text-sm text-green-600"},r(_.__("A new verification link has been sent to your email address.")),513),[[$,i.value]])])]),default:p(()=>[m(r(_.__("Your email address is not verified."))+" ",1)]),_:1})}}},yo={components:{LoadingSpinner:fe,CopyToClipboard:pe},props:{settings:Object,server:Object},data(){return{serverInfo:Object,loading:!0,error:null,interval:null}},computed:{bgImageUrl(){return window.colorMode==="dark"?this.settings.home_hero_bg_image_path_dark:this.settings.home_hero_bg_image_path_light},isBgImageVideo(){return this.bgImageUrl.includes(".webm")},joinBoxEnabled(){return this.settings.show_join_box_in_home_hero?!!(this.server||this.$page.props.defaultQueryServer):!1}},created(){this.joinBoxEnabled&&(this.getServerPing(),this.interval=setInterval(()=>this.getServerPing(),1e4))},unmounted(){this.joinBoxEnabled&&clearInterval(this.interval)},methods:{getServerPing(){let e=this.server;e||(e=this.$page.props.defaultQueryServer),axios.get(route("server.ping.get",e.id)).then(i=>{this.serverInfo=i.data,this.error=null}).catch(i=>{this.error=i.response.data.message||i.message,this.serverInfo=null}).finally(()=>{this.loading=!1})}}},mo=["src"],po=["title","onClick"],fo={key:0},bo={key:0,class:"text-gray-100 text-xl font-bold"},xo={class:"text-light-blue-500 dark:text-light-blue-400 font-extrabold"},vo={key:1,class:"text-gray-100 text-xl font-bold"},ko={key:1},wo={class:"text-red-400 font-bold"};function So(e,i,o,_,s,u){const b=d("loading-spinner"),y=d("copy-to-clipboard"),f=C("tippy");return o.settings.enable_home_hero_section?(n(),a("div",{key:0,class:"flex justify-center items-center",style:T(`
                background: url('${u.isBgImageVideo?"":u.bgImageUrl}');
                background-size: ${o.settings.home_hero_bg_size_css};
                background-repeat: ${o.settings.home_hero_bg_repeat_css};
                background-position: ${o.settings.home_hero_bg_position_css};
                background-attachment: ${o.settings.home_hero_bg_attachment_css};
                height: ${o.settings.home_hero_bg_height_css};
              `)},[u.isBgImageVideo?(n(),a("video",{key:0,id:"home_hero_bg_image_light_video",class:"-z-10 absolute w-full",autoplay:"",loop:"",muted:"",style:T(`
                object-fit: ${o.settings.home_hero_bg_size_css};
                object-position: ${o.settings.home_hero_bg_position_css};
                height: ${o.settings.home_hero_bg_height_css};
      `)},[t("source",{src:u.bgImageUrl,type:"video/webm"},null,8,mo)],4)):c("",!0),u.joinBoxEnabled?(n(),v(y,{key:1},{default:p(l=>[x((n(),a("button",{type:"button",title:e.__("Click to Copy"),class:"bg-gray-800 bg-opacity-75 items-center px-5 py-3 rounded mx-3",onClick:L=>l.copy(o.server?o.server.hostname:e.$page.props.defaultQueryServer.hostname)},[g(b,{loading:s.loading},null,8,["loading"]),!s.loading&&!s.error?(n(),a("div",fo,[l.status!=="copied"?(n(),a("span",bo,[m(r(e.__("Join"))+" ",1),t("span",xo,r(s.serverInfo.players.online),1),m(" "+r(e.__("players on"))+" "+r(o.server?o.server.hostname:e.$page.props.defaultQueryServer.hostname),1)])):(n(),a("span",vo,r(e.__("Copied!")),1))])):c("",!0),s.error?(n(),a("div",ko,[t("span",wo,r(s.error),1)])):c("",!0)],8,po)),[[f]])]),_:1})):c("",!0)],4)):c("",!0)}const Lo=k(yo,[["render",So]]),Co={components:{HeroSection:Lo,VerifyYourEmailBox:go,TopPlayersListBox:_o,OnlineUsersBox:Ps,DonationBox:ps,PollBox:me,ServerStatusBox:ye,IngameChatBox:ls,OnlinePlayersBox:Lt,DidYouKnowBox:oe,VersionCheck:_t,SocialChannelBox:de,PostListBox:ue,WelcomeBox:qe,NewsBox:te,AppLayout:ee,ShoutBox:se,DiscordServerBox:re,NewestUserBox:Ie,VotingSitesBox:Ve,LatestPinnedNews:st},props:{pinnedNewsList:Array,newslist:Array,newestUser:Object,latestPoll:Object,onlineUsers:Array,welcomeBoxContentHtml:{type:[String,null]},chatDefaultServerId:Number,chatServerList:Array,top10Players:Array,themeSettings:Object},setup(){const{canWild:e,isStaff:i}=E();return{canWild:e,isStaff:i}},data(){return{generalSettings:this.$page.props.generalSettings}}},Po={class:"grid grid-cols-none gap-4 px-2 py-4 mx-auto md:grid-cols-4 md:gap-6 md:py-12 md:px-10 md:px-6 lg:px-16 max-w-screen-2xl"},Ao={class:"order-1 col-span-1 space-y-4 md:order-none"},Io={class:"order-3 col-span-1 space-y-4 md:col-span-2 md:order-none"},$o={class:"order-2 col-span-1 space-y-4 md:order-none"};function To(e,i,o,_,s,u){const b=d("app-head"),y=d("hero-section"),f=d("online-players-box"),l=d("voting-sites-box"),L=d("poll-box"),A=d("did-you-know-box"),h=d("discord-server-box"),D=d("donation-box"),Q=d("VerifyYourEmailBox"),V=d("version-check"),U=d("welcome-box"),H=d("ingame-chat-box"),O=d("top-players-list-box"),z=d("latest-pinned-news"),F=d("post-list-box"),q=d("server-status-box"),W=d("shout-box"),Y=d("news-box"),J=d("online-users-box"),K=d("newest-user-box"),G=d("social-channel-box"),R=d("app-layout");return n(),v(R,null,{default:p(()=>[g(b),o.themeSettings.enable_home_hero_section?(n(),v(y,{key:0,settings:o.themeSettings},null,8,["settings"])):c("",!0),t("div",Po,[t("div",Ao,[s.generalSettings.enable_mcserver_onlineplayersbox?(n(),v(f,{key:0})):c("",!0),g(l,{votingsites:s.generalSettings.voteforserverbox_content,enabled:s.generalSettings.enable_voteforserverbox},null,8,["votingsites","enabled"]),g(L,{poll:o.latestPoll},null,8,["poll"]),g(A,{enabled:s.generalSettings.enable_didyouknowbox},null,8,["enabled"]),g(h,{enabled:s.generalSettings.enable_discordbox,server:s.generalSettings.discord_server_id},null,8,["enabled","server"]),g(D)]),t("div",Io,[e.$page.props.jetstream.hasEmailVerification&&e.$page.props.auth.user&&e.$page.props.auth.user.email_verified_at===null?(n(),v(Q,{key:0})):c("",!0),e.$page.props.auth.user&&_.isStaff(e.$page.props.auth.user)?(n(),v(V,{key:1})):c("",!0),s.generalSettings.enable_welcomebox?(n(),v(U,{key:2,"html-data":o.welcomeBoxContentHtml},null,8,["html-data"])):c("",!0),g(H,{"default-server-id":o.chatDefaultServerId,"server-list":o.chatServerList},null,8,["default-server-id","server-list"]),g(O,{enabled:!0,players:o.top10Players,title:e.__("Top 10 Players")},null,8,["players","title"]),g(z,{newslist:o.pinnedNewsList},null,8,["newslist"]),s.generalSettings.enable_status_feed?(n(),v(F,{key:3})):c("",!0)]),t("div",$o,[g(q),g(W),g(Y,{newslist:o.newslist},null,8,["newslist"]),g(J,{users:o.onlineUsers,enabled:s.generalSettings.enable_onlineuserbox},null,8,["users","enabled"]),g(K,{user:o.newestUser,enabled:s.generalSettings.enable_newuserbox},null,8,["user","enabled"]),g(G,{enabled:s.generalSettings.enable_socialbox,"show-title":!0,twitter:s.generalSettings.twitter_url,twitch:s.generalSettings.twitch_url,youtube:s.generalSettings.youtube_url,facebook:s.generalSettings.facebook_url,linkedin:s.generalSettings.linkedin_url,tiktok:s.generalSettings.tiktok_url},null,8,["enabled","twitter","twitch","youtube","facebook","linkedin","tiktok"])])])]),_:1})}const Zo=k(Co,[["render",To]]);export{Zo as default};