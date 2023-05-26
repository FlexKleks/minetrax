import{A as y}from"./AppLayout.932d4aff.js";import{N as f}from"./NewsBox.1f667bde.js";import{S as h}from"./ServerStatusBox.2abff892.js";import{_ as g,c as b,w as i,l,o as n,b as r,a as t,t as s,d as a,e as p,f as c,H as v,s as k,q as N}from"./app.cdeb0fbf.js";import"./CopyToClipboard.4358cfcf.js";const S={components:{ServerStatusBox:h,NewsBox:f,AppLayout:y},props:{news:Object,newslist:Array}},B={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},T={class:"flex justify-end mb-8"},D={class:"flex"},A={class:"flex flex-col md:flex-row md:space-x-4"},H={class:"-my-2 md:w-9/12 overflow-x-auto md:-mx-6 lg:-mx-8"},V={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},C={class:"shadow max-w-none bg-white px-3 py-2 md:px-10 md:py-5 overflow-hidden border-b border-gray-200 rounded md:rounded-lg dark:bg-cool-gray-800 dark:border-none"},L={key:0,class:"bg-light-blue-400 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},j={key:1,class:"bg-orange-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},M={key:2,class:"bg-green-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},q={key:3,class:"bg-gray-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},z={class:"font-bold text-4xl text-gray-900 dark:text-gray-200 mb-5"},E=["src"],I={class:"flex w-full md:w-auto mb-5"},O=["src"],P=["title"],F={class:"text-gray-500 dark:text-gray-400 text-sm"},G=["innerHTML"],J={class:"md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"};function K(o,Q,e,R,U,W){const m=l("app-head"),d=l("inertia-link"),_=l("server-status-box"),u=l("news-box"),w=l("app-layout"),x=N("tippy");return n(),b(w,null,{default:i(()=>[r(m,{title:o.__(":title - News",{title:e.news.title})},null,8,["title"]),t("div",B,[t("div",T,[t("div",D,[r(d,{href:o.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:i(()=>[t("span",null,s(o.__("Homepage")),1)]),_:1},8,["href"])])]),t("div",A,[t("div",H,[t("div",V,[t("div",C,[e.news.type.value===0?(n(),a("span",L,s(e.news.type.key),1)):e.news.type.value===1?(n(),a("span",j,s(e.news.type.key),1)):e.news.type.value===2?(n(),a("span",M,s(e.news.type.key),1)):(n(),a("span",q,s(e.news.type.key),1)),t("h1",z,s(e.news.title),1),e.news.photo_url?(n(),a("img",{key:4,class:"float-right w-full md:w-1/2 ml-10 mb-5 md:mb-0",src:e.news.photo_url,alt:"News Image"},null,8,E)):p("",!0),t("div",I,[t("img",{src:e.news.creator.profile_photo_url,alt:"Profile",class:"h-12 w-12 mr-3 rounded-full"},null,8,O),t("div",null,[r(d,{as:"p",href:o.route("user.public.get",e.news.creator.username),class:"cursor-pointer hover:underline font-bold text-gray-700 dark:text-gray-300",style:v([e.news.creator.roles[0].color?{color:e.news.creator.roles[0].color}:null])},{default:i(()=>[c(s(e.news.creator.name),1)]),_:1},8,["href","style"]),k((n(),a("p",{title:o.formatTimeAgoToNow(e.news.created_at),class:"text-gray-500 dark:text-gray-400 text-sm focus:outline-none"},[c(s(o.formatToDayDateString(e.news.published_at)),1)],8,P)),[[x]]),t("p",F,s(e.news.time_to_read)+" "+s(o.__("read")),1)])]),t("div",{class:"prose dark:prose-dark max-w-none",innerHTML:e.news.body_html},null,8,G)])])]),t("div",J,[r(_),r(u,{newslist:e.newslist},null,8,["newslist"])])])])]),_:1})}const te=g(S,[["render",K]]);export{te as default};