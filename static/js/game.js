(window.webpackJsonp=window.webpackJsonp||[]).push([["game"],{"0a49":function(e,t,a){var i=a("9b43"),r=a("626a"),s=a("4bf8"),n=a("9def"),o=a("cd1c");e.exports=function(e,t){var a=1==e,c=2==e,l=3==e,m=4==e,d=6==e,u=5==e||d,g=t||o;return function(t,o,h){for(var p,f,v=s(t),b=r(v),y=i(o,h,3),w=n(b.length),G=0,C=a?g(t,w):c?g(t,0):void 0;G<w;G++)if((u||G in b)&&(f=y(p=b[G],G,v),e))if(a)C[G]=f;else if(f)switch(e){case 3:return!0;case 5:return p;case 6:return G;case 2:C.push(p)}else if(m)return!1;return d?-1:l||m?m:C}}},1169:function(e,t,a){var i=a("2d95");e.exports=Array.isArray||function(e){return"Array"==i(e)}},2283:function(e,t,a){},"29e5":function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d");var i=a("bd86"),r=(a("c5f6"),a("96cf"),a("3b8d")),s=a("bc3a"),n=a.n(s),o=a("5f72"),c=a("4360"),l=a("5f87"),m=n.a.create({baseURL:"https://t-game.tg18.fyi",timeout:5e3});m.interceptors.request.use(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Lang=window.localStorage.Language,Object(l.b)()&&(t.headers.Authorization="Bearer ".concat(Object(l.b)())),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),m.interceptors.response.use(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e4<Number(t.data.error_code)&&Number(t.data.error_code)<10011?(window.localStorage.setItem("JWT_TOKEN_Overdue","登录时间逾期 请重新登录"),window.localStorage.removeItem("JWT_TOKEN"),window.localStorage.removeItem("verifyPhone"),window.localStorage.removeItem("verifyEmail"),window.location.reload()):t.data.error_code&&Object(o.Message)({message:t.data.error_message,type:"error",duration:1500,center:!0}),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return 504===e.response.status||e.response.status,Object(o.Message)({message:e.message,type:"error",duration:15e3,center:!0}),Promise.reject(e)}));var d=m,u=a("2f62");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var h={name:"GamePage",data:function(){return{PlayUrl:"",loading:!0}},components:{},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(u.c)("Member",["UserId"])),methods:{gameLogin:function(e){var t,a=this,i=this;(t=e,d({url:"/Game/Login/",method:"post",data:t})).then((function(e){0===e.data.status?a.$message({message:e.data.error_message,type:"warning",onClose:function(){i.$router.go(-1)}}):1===e.data.status&&(c.a.dispatch("Member/UserWalletInfo",{UserId:a.UserId}),setTimeout((function(){i.PlayUrl=e.data.data.PlayUrl,i.loading=!1}),300))})).catch((function(e){}))},gameLoginFree:function(e){var t,a=this,i=this;(t=e,d({url:"/Game_Page/Login/",method:"post",data:t})).then((function(e){0===e.data.status?a.$message({message:e.data.error_message,type:"warning",onClose:function(){i.$router.go(-1)}}):1===e.data.status&&(c.a.dispatch("Member/UserWalletInfo",{UserId:a.UserId}),setTimeout((function(){i.PlayUrl=e.data.data.PlayUrl,i.loading=!1}),300))})).catch((function(e){}))}},created:function(){},mounted:function(){if(this.$route.query){var e={};e.GameId=this.$route.query.GameId,e.UserId=this.UserId,e.GamePlay=this.$route.query.GamePlay,e.GroupId=this.$route.query.GroupId,e.GroupName=this.$route.query.GroupName,0===e.GamePlay||"0"===e.GamePlay?this.gameLoginFree(e):(0===parseInt(this.UserId)&&this.$router.push("/"),this.gameLogin(e))}}},p=(a("b5c6"),a("2877")),f=Object(p.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"GamesPages d-flex flex-column justify-content-center align-items-center",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(255,255,255,0.2)"}},[t("iframe",{attrs:{src:this.PlayUrl}})])}),[],!1,null,null,null);t.default=f.exports},4249:function(e,t,a){},"65bb":function(e,t,a){},"65eb":function(e,t,a){"use strict";a.r(t),a("8e6e"),a("456d"),a("6762"),a("2fdb"),a("ac6a"),a("a481"),a("c5f6"),a("28a5");var i=a("bd86"),r=a("a4d8"),s=a("2f62");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var o={data:function(){return{activeIndex:"",activeName:this.$route.params.gameTabType,filterActive:window.localStorage.CompanyName,ServiceItemsCont:this.$t("ServiceItems.ServiceItemsCont"),GameName:"",SearchActive:!1,EditDialogType:"",EditDialogSwith:!1,EditialogWidth:"",dialogCloseModal:!1}},components:{prompt:r.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.c)("Member",["UserId","MemberLogined"]),{},Object(s.c)("Web_Page",["window","currentGroupId","currentGameType","currentGameTypeName","getIndexGame","gameMenu"]),{getUrlPath:function(){return this.$route.path.split("/")[1]},getUrlPathChild:function(){return this.$route.path.split("/")[2]}}),watch:{$route:function(e,t){this.getIndexTabfilter(),this.activeName=this.$route.params.gameTabType,this.filterActive=window.localStorage.CompanyName,"gameSearch"!==this.getUrlPath&&(void 0!==this.getUrlPathChild&&""!==this.getUrlPathChild&&void 0!==this.$route.query.GroupId&&""!==this.$route.query.GroupId&&void 0!==this.$route.query.GameType&&""!==this.$route.query.GameType||this.$router.push("/index"))}},methods:{chickDialogWidth:function(){Number(this.window.width)<992?this.EditialogWidth="90%":this.EditialogWidth="375px"},EditHandleClose:function(){done()},closeEditDialog:function(){this.EditDialogSwith=!1},editSubmit:function(){this.EditDialogSwith=!1,this.$store.dispatch("Web_Page/LRDialogSwith","login")},editCancel:function(){this.EditDialogSwith=!1},filterTitle:function(e){var t="";return"JOKERslot"===(t=e?e.replace(/\s+/g,""):window.localStorage.CompanyName)?t="JOKER".concat(this.$t("Slot")):"JOKERfishing"===t?t="JOKER".concat(this.$t("Fishing")):"JOKERboard"===t?t="JOKER".concat(this.$t("Board")):"JOKERarcade"===t?t="JOKER".concat(this.$t("Arcade")):"WMslot"===t?t="WM".concat(this.$t("Slot")):"WMboard"===t?t="WM".concat(this.$t("Board")):"BTi"===t?t="BTi".concat(this.$t("Sports")):"SBO"===t?t="SBO".concat(this.$t("Sports")):"SA"===t?t="".concat(this.$t("LiveCasino")):"Sexybaccarat"===t&&(t="".concat(this.$t("LiveCasino"))),t},filterType:function(e){var t=e.CompanyName.replace(/\s+/g,"");this.filterActive=e.CompanyName,window.localStorage.setItem("GroupId",e.GroupId),window.localStorage.setItem("GameType",e.GameType),window.localStorage.setItem("gameTabType",e.GroupName),window.localStorage.setItem("CompanyName",e.CompanyName),this.$store.commit("Web_Page/setCurrentGameTypeName",e.CompanyName),"BTi"===t||"SA"===t||"Sexybaccarat"===t?this.played(1,e):this.$router.push("/game/".concat(e.CompanyName,"?GroupId=").concat(e.GroupId,"&GameType=").concat(e.GameType))},getIndexTabfilter:function(){"7"===window.localStorage.GameMenu?this.activeIndex="101":"5"===window.localStorage.GameMenu?this.activeIndex="102":this.activeIndex="103"},getIndexGamefilter:function(e){var t=[],a=[],i=[];if(i=window.localStorage.GameMenu?window.localStorage.GameMenu.split(","):this.gameMenu.split(","),0<e.length)return e.forEach((function(e){t=e.Game})),t.forEach((function(e){i.includes(e.GameType)&&a.push(e)})),a},tabGameType:function(){this.GameName="",this.activeName=window.localStorage.CompanyName,this.$router.push("/game/".concat(window.localStorage.CompanyName,"?GroupId=").concat(window.localStorage.GroupId,"&GameType=").concat(window.localStorage.GameType))},tabType:function(e){this.GameName="",this.activeName=e,this.$router.push("/game/".concat(e,"?GroupId=").concat(window.localStorage.GroupId,"&GameType=").concat(window.localStorage.GameType))},chickSearchInput:function(){this.SearchActive=!1},searchSubmit:function(){this.SearchActive=!0,this.$router.push("/gameSearch")},searchClear:function(){this.GameName=""},init:function(){window.localStorage.setItem("GroupId",this.$route.query.GroupId),window.localStorage.setItem("GameType",this.$route.query.GameType),"recommend"!==this.getUrlPathChild&&"recently"!==this.getUrlPathChild&&"collection"!==this.getUrlPathChild&&window.localStorage.setItem("CompanyName",this.$route.params.gameTabType)},played:function(e,t){this.MemberLogined?this.playGame(1,t):(this.GameName=t.GameName,this.EditDialogSwith=!0,this.EditDialogType="LoginMsg")},playGame:function(e,t){var a=this,i={};i.GameId=t.Sn,i.UserId=this.UserId,i.GamePlay=e,i.GroupId=t.GroupId,2===t.Status||"2"===t.Status||2===t.GroupStatus||"2"===t.GroupStatus?this.$message({message:"游戏维护中",type:"error"}):this.$store.dispatch("verification/JwtExpireCheck").then((function(i){1===i.status?a.$router.push("/gamePage?GameId=".concat(t.GroupLobbyId,"&GamePlay=").concat(e,"&GroupId=").concat(t.GroupId,"&GroupName=").concat(t.GroupName,"&Id=").concat(a.UserId,"&Tk=").concat(window.localStorage.JWT_TOKEN)):newPage.close()}))}},created:function(){this.$store.dispatch("Web_Page/GetIndexGame",{GameType:"1,2,3,4,5,6,7",ShowPage:1})},mounted:function(){this.chickDialogWidth(),this.getIndexTabfilter(),"gameSearch"!==this.getUrlPath&&(void 0!==this.getUrlPathChild&&""!==this.getUrlPathChild&&void 0!==this.$route.query.GroupId&&""!==this.$route.query.GroupId&&void 0!==this.$route.query.GameType&&""!==this.$route.query.GameType||this.$router.push("/index")),this.activeName=this.getUrlPathChild,this.init()}},c=(a("acb9"),a("2877")),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Content d-flex flex-column"},[a("div",{staticClass:"Game d-flex flex-column"},[a("div",{staticClass:"GameFilter d-flex flex-row justify-content-center align-items-center",class:"102"==e.activeIndex?"GameFilterHeightB":"GameFilterHeightS"},[a("div",{staticClass:"GameFilterBgInfo d-flex flex-row w-100 justify-content-end",class:"102"==e.activeIndex?"align-items-end pb-5 mb-5":"align-items-center"},[a("div",{staticClass:"GameFilterForm d-flex flex-column justify-content-center align-items-end"},[a("div",{staticClass:"GameFilterCont"},[a("div",{staticClass:"GameFilterTit"},[e._v(e._s(e.filterTitle(e.filterActive)))]),"SA"==e.filterActive||"Sexy baccarat"==e.filterActive?a("div",{staticClass:"GameFilterName"},[e._v("live casino")]):a("div",{staticClass:"GameFilterName"},[e._v(e._s(e.filterActive))]),"101"==e.activeIndex?a("div",{staticClass:"GameFilterInfo"},[e._v(e._s(e.ServiceItemsCont[0].Info))]):"102"==e.activeIndex?a("div",{staticClass:"GameFilterInfo"},[e._v(e._s(e.ServiceItemsCont[2].Info))]):a("div",{staticClass:"GameFilterInfo"},[e._v(e._s(e.ServiceItemsCont[3].Info))])]),a("div",{staticClass:"GameFilterBtnForm"},e._l(e.getIndexGamefilter(e.getIndexGame),(function(t,i){return a("el-button",{staticClass:"GameFilterBtn",class:e.filterActive===t.CompanyName&&"BTi"!==e.filterActive&&"SA"!==e.filterActive&&"Sexy baccarat"!==e.filterActive?"GameFilterBtnActive":"",on:{click:function(a){e.filterType(t)}}},[a("img",{attrs:{src:"/static/img/Game/"+t.CompanyName+".png"}})])})))]),a("div",{staticClass:"GameFilterBg d-flex justify-content-center",class:"SBO"==e.filterActive?"GameFilterBgSBO":"BTi"==e.filterActive?"GameFilterBgBTI":"SA"==e.filterActive?"GameFilterBgSA":"Sexy baccarat"==e.filterActive?"GameFilterBgAE":"JOKER slot"==e.filterActive?"GameFilterBgJOKERslot":"JOKER fishing"==e.filterActive?"GameFilterBgJOKERfishing":"JOKER board"==e.filterActive?"GameFilterBgJOKERboard":"JOKER arcade"==e.filterActive?"GameFilterBgJOKERarcade":"WM slot"==e.filterActive?"GameFilterBgWMslot":"WM board"==e.filterActive?"GameFilterBgWMboard":""})])]),"102"!=e.activeIndex?a("div",{staticClass:"GameCont Page d-flex flex-column"},[a("div",{staticClass:"GameTab row no-gutters d-flex flex-row justify-content-between align-items-start"},[a("div",{staticClass:"GameTabForm"},[a("el-button",{staticClass:"GameTabBtn col-3",class:"recommend"!==e.activeName&&"recently"!==e.activeName&&"collection"!==e.activeName&&"gameSearch"!==e.getUrlPath?"GameTabActive":"",on:{click:function(t){e.tabGameType()}}},[e._v(e._s(e.$t("Game.Popular")))]),a("el-button",{staticClass:"GameTabBtn col-3",class:"recommend"===e.activeName?"GameTabActive":"",on:{click:function(t){e.tabType("recommend")}}},[e._v(e._s(e.$t("Game.recommend")))]),a("el-button",{staticClass:"GameTabBtn col-3",class:"recently"===e.activeName?"GameTabActive":"",on:{click:function(t){e.tabType("recently")}}},[e._v(e._s(e.$t("Game.recently")))]),a("el-button",{staticClass:"GameTabBtn col-3",class:"collection"===e.activeName?"GameTabActive":"",on:{click:function(t){e.tabType("collection")}}},[e._v(e._s(e.$t("Game.collection")))])],1),a("div",{staticClass:"GameTabSearch"},[a("el-form",{staticClass:"GameTabSearchForm",nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.searchSubmit()}}},[a("el-form-item",{attrs:{label:"",prop:"GameName"}},[a("el-input",{staticClass:"SearchInput",attrs:{type:"text",autocomplete:"off",placeholder:e.$t("Game.SearchPlaceholder")},on:{input:function(t){e.chickSearchInput()}},model:{value:e.GameName,callback:function(t){e.GameName=t},expression:"GameName"}},[a("el-button",{staticClass:"SearchBtn",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){e.searchSubmit()}},slot:"append"})],1),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text"}})],1)],1)],1)]),a("router-view",{attrs:{GameName:e.GameName,SearchActive:e.SearchActive},on:{searchClear:e.searchClear}})],1):e._e()]),a("el-dialog",{staticClass:"HTDialog",attrs:{visible:e.EditDialogSwith,width:e.EditialogWidth,"close-on-click-modal":e.dialogCloseModal,"show-close":!1,"append-to-body":!0,"before-close":e.EditHandleClose,"custom-class":"HTDialog",center:"",top:"35vh"},on:{"update:visible":function(t){e.EditDialogSwith=t}}},[a("el-button",{staticClass:"HTDialogClose",attrs:{type:"text"},on:{click:e.closeEditDialog}}),a("prompt",{attrs:{DialogType:e.EditDialogType},on:{editSubmit:e.editSubmit,editCancel:e.editCancel}})],1)],1)}),[],!1,null,"8c5e4766",null);t.default=l.exports},6800:function(e,t,a){"use strict";var i=a("4249");a.n(i).a},"72bc":function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d"),a("4917"),a("c5f6"),a("28a5");var i=a("bd86"),r=a("dc28"),s=a("0558"),n=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}Vue.use(VueAwesomeSwiper);var c={props:["GameData"],data:function(){return{isMobile:!1,swiperOption:{notNextTick:!0,slidesPerView:1,spaceBetween:0,loop:!0,watchSlidesVisibility:!0,pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0,lazyLoading:!0,lazy:{loadPrevNext:!0}},count:13,loading:!1}},components:{gamesCard:r.a,noData:s.a,LocalSwiper:VueAwesomeSwiper.swiper,LocalSlide:VueAwesomeSwiper.swiperSlide},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(n.c)("Member",["UserId","UserName","MemberLogined"]),{},Object(n.c)("Web_Page",["window","brandBannerList","currentGroupId","currentGameType","currentGameTypeName","gameList","gameFilterResult","gamesRecently","gamesCollection"]),{getUrlPath:function(){return this.$route.path.split("/")[1]},getUrlPathChild:function(){return this.$route.path.split("/")[2]},swiper:function(){return this.$refs.mySwiper.swiper},getGamePopularGameList:function(){var e=this;return!!this.gameList&&this.gameList.filter((function(t,a,i){return 2!==Number(t.GameMode)&&!e.isMobile||!!e.isMobile}))},getGameFilterResult:function(){var e=this;return!!this.gameFilterResult&&this.gameFilterResult.filter((function(t,a,i){return 2!==Number(t.GameMode)&&!e.isMobile||!!e.isMobile}))},getGamesRecently:function(){var e=this;return!!this.gamesRecently&&this.gamesRecently.filter((function(t,a,i){return 2!==Number(t.GameMode)&&!e.isMobile||!!e.isMobile}))},getGamesCollection:function(){var e=this;return!!this.gamesCollection&&this.gamesCollection.filter((function(t,a,i){return 2!==Number(t.GameMode)&&!e.isMobile||!!e.isMobile}))},noMore:function(){return"recommend"===this.getUrlPathChild&&this.getGamePopularGameList?this.count>=this.getGamePopularGameList.length+5:"recently"===this.getUrlPathChild?this.count>=this.gamesRecently.length+5:"collection"===this.getUrlPathChild?this.count>=this.gamesCollection.length+5:this.count>=this.getGameFilterResult.length+5},disabled:function(){return this.loading||this.noMore}}),watch:{$route:function(e,t){this.$store.state.Web_Page.gameFilterResult=[],this.$store.state.Web_Page.gameList=[],this.$store.state.Web_Page.gamesRecently=[],this.$store.state.Web_Page.gamesCollection=[],this.$store.state.Web_Page.brandBannerList=[],this.init()},gameFilterResult:function(e){return e},gamesRecently:function(e){return e},gamesCollection:function(e){return e}},methods:{checkIsMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},load:function(){var e=this;this.loading=!0,setTimeout((function(){e.count+=10,e.loading=!1}),1e3)},openUrl:function(e,t){window.open(e)},init:function(e,t,a){if("recommend"===this.getUrlPathChild)void 0!==e&&""!==e||(this.UserId,window.localStorage.GroupId,window.localStorage.GameType);else if("recently"===this.getUrlPathChild){if(this.MemberLogined){var i="";i=void 0===e||""===e?{UserName:this.UserName,GameGroup:window.localStorage.GroupId,GameType:window.localStorage.GameType,Type:2}:{UserName:this.UserName,GameGroup:e,GameType:window.localStorage.GameType,Type:2},this.$store.dispatch("Web_Page/API_GamesRecentlyList",i)}}else if("collection"===this.getUrlPathChild){if(this.MemberLogined){var r="";r=void 0===e||""===e?{UserName:this.UserName,GameGroup:window.localStorage.GroupId,GameType:window.localStorage.GameType,Type:1}:{UserName:this.UserName,GameGroup:e,GameType:window.localStorage.GameType,Type:1},this.$store.dispatch("Web_Page/QueryGameRecord",r)}}else this.MemberLogined?void 0!==e&&""!==e||(this.UserId,window.localStorage.GroupId,window.localStorage.GameType):void 0!==e&&""!==e||(window.localStorage.GroupId,window.localStorage.GameType);var s={};"recommend"===this.getUrlPathChild||"recently"===this.getUrlPathChild||this.getUrlPathChild,s.GroupName="".concat(window.localStorage.gameTabType,"_").concat(window.localStorage.GameType,"_sm"),s.BannerType=1,this.$store.dispatch("Web_Page/API_BrandBannerList",s)}},created:function(){this.checkIsMobile()&&(this.isMobile=!0)},mounted:function(){this.MemberLogined?this.init(this.$route.query.GroupId,this.$route.query.GameType,this.UserId):this.init()},beforeDestroy:function(){"game"!=this.getUrlPath&&"gameSearch"!=this.getUrlPath&&"gamePage"!=this.getUrlPath&&(window.localStorage.removeItem("GroupId"),window.localStorage.removeItem("GameType"),window.localStorage.removeItem("gameTabType"),window.localStorage.removeItem("CompanyName"),window.localStorage.removeItem("GameMenu")),VueAwesomeSwiper={}},destroyed:function(){this.$store.state.Web_Page.gameFilterResult=[],this.$store.state.Web_Page.gameList=[]}},l=(a("d01b"),a("2877")),m=Object(l.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GameList d-flex flex-column justify-content-center align-items-center"},["recommend"==e.getUrlPathChild&&e.getGamePopularGameList?a("div",{staticClass:"GameListForm"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"GameListCont d-flex flex-wrap justify-content-start",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-disabled":"disabled"}},[1<e.brandBannerList.length?a("div",{ref:"Banners",staticClass:"GameBanner"},[a("swiper",{ref:"mySwiper",staticClass:"Bannerswiper",attrs:{options:e.swiperOption}},[e._l(e.brandBannerList,(function(e,t,i){return a("swiper-slide",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})]),a("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-black"})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):a("div",{staticClass:"GameBanner"},[a("div",{staticClass:"Bannerswiper"},e._l(e.brandBannerList,(function(e,t,i){return a("div",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})])])})))]),e._l(e.getGamePopularGameList.slice(0,e.count),(function(t,i){return a("li",[a("gamesCard",{attrs:{gameData:t,gameIndex:i,Popular:t.Popular,gamePath:e.getUrlPath}})],1)}))],2),e.loading?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("Loading More Games...")]):e._e(),e.noMore?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("No More Games")]):e._e()]):"recently"==e.getUrlPathChild&&0<e.gamesRecently.length?a("div",{staticClass:"GameListForm"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"GameListCont d-flex flex-wrap justify-content-start",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-disabled":"disabled"}},[1<e.brandBannerList.length?a("div",{ref:"Banners",staticClass:"GameBanner"},[a("swiper",{ref:"mySwiper",staticClass:"Bannerswiper",attrs:{options:e.swiperOption}},[e._l(e.brandBannerList,(function(e,t,i){return a("swiper-slide",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})]),a("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-black"})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):a("div",{staticClass:"GameBanner"},[a("div",{staticClass:"Bannerswiper"},e._l(e.brandBannerList,(function(e,t,i){return a("div",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})])])})))]),e._l(e.getGamesRecently.slice(0,e.count),(function(t,i){return a("li",[a("gamesCard",{attrs:{gameData:t,gameIndex:i,Popular:t.Popular,gamePath:e.getUrlPath}})],1)}))],2),e.loading?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("Loading More Games...")]):e._e(),e.noMore?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("No More Games")]):e._e()]):"collection"==e.getUrlPathChild&&0<e.gamesCollection.length?a("div",{staticClass:"GameListForm"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"GameListCont d-flex flex-wrap justify-content-start",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-disabled":"disabled"}},[1<e.brandBannerList.length?a("div",{ref:"Banners",staticClass:"GameBanner"},[a("swiper",{ref:"mySwiper",staticClass:"Bannerswiper",attrs:{options:e.swiperOption}},[e._l(e.brandBannerList,(function(e,t,i){return a("swiper-slide",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})]),a("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-black"})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):a("div",{staticClass:"GameBanner"},[a("div",{staticClass:"Bannerswiper"},e._l(e.brandBannerList,(function(e,t,i){return a("div",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})])])})))]),e._l(e.getGamesCollection.slice(0,e.count),(function(t,i){return a("li",[a("gamesCard",{attrs:{gameData:t,gameIndex:i,Popular:t.Popular,gamePath:e.getUrlPath}})],1)}))],2),e.loading?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("Loading More Games...")]):e._e(),e.noMore?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("No More Games")]):e._e()]):0<e.getGameFilterResult.length?a("div",{staticClass:"GameListForm d-flex flex-column"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"GameListCont d-flex flex-wrap justify-content-start",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-disabled":"disabled"}},[1<e.brandBannerList.length?a("div",{ref:"Banners",staticClass:"GameBanner"},[a("swiper",{ref:"mySwiper",staticClass:"Bannerswiper",attrs:{options:e.swiperOption}},[e._l(e.brandBannerList,(function(e,t,i){return a("swiper-slide",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})]),a("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-black"})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):a("div",{staticClass:"GameBanner"},[a("div",{staticClass:"Bannerswiper"},e._l(e.brandBannerList,(function(e,t,i){return a("div",{key:t},[a("a",{staticClass:"d-flex flex-column align-items-center"},[a("img",{staticClass:"Banner",attrs:{src:e.Images}})])])})))]),e._l(e.getGameFilterResult.slice(0,e.count),(function(t,i){return a("li",[a("gamesCard",{attrs:{gameData:t,gameIndex:i,Popular:t.Popular,gamePath:e.getUrlPath}})],1)}))],2),e.loading?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("Loading More Games...")]):e._e(),e.noMore?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("No More Games")]):e._e()]):a("noData",{attrs:{NoDataPath:e.getUrlPath}})],1)}),[],!1,null,"ceaddfba",null);t.default=m.exports},7514:function(e,t,a){"use strict";var i=a("5ca1"),r=a("0a49")(5),s="find",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),i(i.P+i.F*n,"Array",{find:function(e){return r(this,e,1<arguments.length?arguments[1]:void 0)}}),a("9c6c")(s)},acb9:function(e,t,a){"use strict";var i=a("65bb");a.n(i).a},b5c6:function(e,t,a){"use strict";var i=a("2283");a.n(i).a},cd1c:function(e,t,a){var i=a("e853");e.exports=function(e,t){return new(i(e))(t)}},d01b:function(e,t,a){"use strict";var i=a("d5e4");a.n(i).a},d5e4:function(e,t,a){},dc28:function(e,t,a){"use strict";a("8e6e"),a("ac6a"),a("456d"),a("7514"),a("c5f6"),a("28a5");var i=a("bd86"),r=a("a4d8"),s=a("c125"),n=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var c={props:["gameData","gameIndex","Popular","gamePath"],data:function(){return{replaceImg:"/static/img/LeadingGame/ReplaceImg.png",coverShow:!1,EditDialogType:"",EditDialogSwith:!1,EditialogWidth:"",dialogCloseModal:!1}},components:{prompt:r.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(n.c)("Member",["UserId","UserName","MemberLogined"]),{},Object(n.c)("Web_Page",["window","gamesCollection"]),{getUrlPath:function(){return this.$route.path.split("/")[1]},getUrlPathChild:function(){return this.$route.path.split("/")[2]}}),watch:{},methods:{chickDialogWidth:function(){Number(this.window.width)<992?this.EditialogWidth="90%":this.EditialogWidth="375px"},EditHandleClose:function(){done()},closeEditDialog:function(){this.EditDialogSwith=!1},editSubmit:function(){this.EditDialogSwith=!1,this.$store.dispatch("Web_Page/LRDialogSwith","login")},editCancel:function(){this.EditDialogSwith=!1},mouseover:function(){this.coverShow=!this.coverShow},collectGame:function(){var e=this;if(this.MemberLogined)if(0===this.gameData.Collection||"0"===this.gameData.Collection){this.$store.state.Web_Page.gamesCollection=[];var t={UserId:this.UserId,GameId:this.gameData.Sn,Type:1,GameGroup:this.gameData.GroupId};Object(s.n)(t,{method:"Add"}).then((function(t){1===t.data.status&&(e.gameData.Collection=1,e.gameData.Popular=Number(e.gameData.Popular)+1,e.reNewCollect())})).catch((function(e){}))}else{this.$store.state.Web_Page.gamesCollection=[];var a={UserId:this.UserId,Sn:this.gameData.Collection,Type:1};Object(s.n)(a,{method:"Delete"}).then((function(t){var a=t.data,i="";e.$store.state.Web_Page.gamesCollection.find((function(t,a,r){return i=a,t.Sn===e.gameData.Sn})),e.$store.state.Web_Page.gamesCollection.splice(i,1),1===a.status&&(e.gameData.Collection=0,e.gameData.Popular=Number(e.gameData.Popular)-1,e.reNewCollect())})).catch((function(e){}))}else this.EditDialogSwith=!0,this.EditDialogType="LoginMsg"},reNewCollect:function(){var e={UserName:this.UserName,GameGroup:this.gameData.GroupId,GameType:1,Type:1};this.$store.dispatch("Web_Page/QueryGameRecord",e)},played:function(e){""!==this.getUrlPath&&(this.MemberLogined?this.playGame(e):(this.EditDialogSwith=!0,this.EditDialogType="LoginMsg"))},playGame:function(e){var t=this,a={};a.GameId=this.gameData.Sn,a.UserId=this.UserId,a.GamePlay=e,a.GroupId=this.gameData.GroupId,2===this.gameData.Status||"2"===this.gameData.Status||2===this.gameData.GroupStatus||"2"===this.gameData.GroupStatus?this.$message({message:"游戏维护中",type:"error"}):this.$store.dispatch("verification/JwtExpireCheck").then((function(a){1===a.status?(t.$router.push("/gamePage?GameId=".concat(t.gameData.Sn,"&GamePlay=").concat(e,"&GroupId=").concat(t.gameData.GroupId,"&GroupName=").concat(t.gameData.GroupName)),t.addGameRecord()):newPage.close()}))},addGameRecord:function(){var e={UserId:this.UserId,GameId:this.gameData.Sn,Type:2};Object(s.n)(e,{method:"Add"}).then((function(e){})).catch((function(e){}))}},mounted:function(){var e=this;if(this.chickDialogWidth(),void 0!==this.gameData.Images){var t=this,a=new Image;a.src=this.gameData.Images,a.onload=function(){t.replaceImg=e.gameData.Images}}}},l=(a("eee4"),a("2877")),m=Object(l.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gamesCard d-flex flex-column"},["game"==e.gamePath||"gameSearch"==e.gamePath?a("div",{staticClass:"gamesCardForm d-flex flex-column"},[a("div",{staticClass:"gamesCardImg d-flex justify-content-center align-items-center",on:{click:function(t){e.played(1)},mouseenter:function(t){e.mouseover()},mouseleave:function(t){e.mouseover()}}},[e.coverShow?a("div",{staticClass:"gamesCardCover d-flex flex-column align-items-center"},[a("div",{staticClass:"gamesCardCoverBtn ButtonR"},[e._v(e._s(e.$t("Game.PlayNow")))])]):e._e(),a("img",{attrs:{src:e.replaceImg}})]),a("div",{staticClass:"gamesCardInfo d-flex flex-row align-items-center"},[a("div",{staticClass:"gamesCardCapt"},[a("div",{staticClass:"gamesCardTil"},[e._v(e._s(e.gameData.CompanyName))]),a("div",{staticClass:"gamesCardContName"},[e._v(e._s(e.gameData.GameName))])]),a("div",{staticClass:"gamesPopular",class:0!=e.gameData.Collection?"gamesPopularFill":"",on:{click:function(t){e.collectGame()}}})])]):a("div",{staticClass:"gamesCardLeading d-flex flex-column"},[a("div",{staticClass:"gamesCardLeadingImg"},[a("img",{attrs:{src:e.replaceImg}}),a("div",{staticClass:"gamesCardLeadingCont"},[a("div",{staticClass:"gamesCardName"},[e._v(e._s(e.gameData.GameName))]),a("div",{staticClass:"gamesCardType"},[e._v(e._s(e.gameData.GameType))])])]),e.gameData.Description&&"game"!=e.gamePath?a("div",{staticClass:"gamesCardLeadingInfo gamesCardNoticePaddingTop"},[e._v(e._s(e.gameData.Description))]):e._e()]),a("el-dialog",{staticClass:"HTDialog",attrs:{visible:e.EditDialogSwith,width:e.EditialogWidth,"close-on-click-modal":e.dialogCloseModal,"show-close":!1,"append-to-body":!0,"before-close":e.EditHandleClose,"custom-class":"HTDialog",center:"",top:"35vh"},on:{"update:visible":function(t){e.EditDialogSwith=t}}},[a("el-button",{staticClass:"HTDialogClose",attrs:{type:"text"},on:{click:e.closeEditDialog}}),a("prompt",{attrs:{DialogType:e.EditDialogType},on:{editSubmit:e.editSubmit,editCancel:e.editCancel}})],1)],1)}),[],!1,null,"e0b56268",null);t.a=m.exports},e853:function(e,t,a){var i=a("d3f4"),r=a("1169"),s=a("2b4c")("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),i(t)&&null===(t=t[s])&&(t=void 0)),void 0===t?Array:t}},ea21:function(e,t,a){},eee4:function(e,t,a){"use strict";var i=a("ea21");a.n(i).a},f081:function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d"),a("c5f6"),a("28a5");var i=a("bd86"),r=a("dc28"),s=a("0558"),n=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var c={props:["GameName","SearchActive"],data:function(){return{getSearchList:[],count:10,loading:!1}},components:{gamesCard:r.a,noData:s.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(n.c)("Member",["UserId","UserName","MemberLogined"]),{},Object(n.c)("Web_Page",["window","language","gameSearchList"]),{getUrlPath:function(){return this.$route.path.split("/")[1]},getUrlPathChild:function(){return this.$route.path.split("/")[2]},noMore:function(){return this.count>=this.getSearchList.length+5},disabled:function(){return this.loading||this.noMore}}),watch:{$route:function(e,t){},gameSearchList:function(e){this.getSearchList=e},SearchActive:function(e){!0===e&&this.searchSubmit()}},methods:{chickDialogWidth:function(e){return Number(this.window.width)<992?"90%":"45%"},load:function(){var e=this;this.loading=!0,setTimeout((function(){e.count+=10,e.loading=!1}),1e3)},searchSubmit:function(){this.getSearchList=[];var e={};""!==this.GameName&&(e.GameName=this.GameName,this.MemberLogined&&(e.UserId=this.UserId,e.UserName=this.UserName))},searchCancel:function(){this.getSearchList=[],this.$router.go(-1),this.$emit("searchClear")}},mounted:function(){this.searchSubmit()}},l=(a("6800"),a("2877")),m=Object(l.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GameSearch d-flex flex-column justify-content-center align-items-center"},[a("div",{staticClass:"GameSearchCont"},[a("div",{staticClass:"GameSearchTil d-flex flex-row justify-content-between align-items-center"},["th"==e.language?a("div",{staticClass:"GameSearchCancel",on:{click:function(t){e.searchCancel()}}},[e._v(e._s(e.$t("Game.Result"))+e._s(e.$t("Game.Search")))]):a("div",{staticClass:"GameSearchCancel",on:{click:function(t){e.searchCancel()}}},[e._v(e._s(e.$t("Game.Search"))+e._s(e.$t("Game.Result")))]),"th"==e.language?a("div",{staticClass:"GameSearchResult d-flex align-items-center"},[a("span",[e._v(e._s(e.$t("Game.Result")))]),a("span",[e._v(e._s(e.$t("Game.Search")))]),a("div",{staticClass:"GameSearchItem d-inline-block"},[e._v(e._s(e.GameName))])]):a("div",{staticClass:"GameSearchResult d-flex align-items-center"},[a("span",[e._v(e._s(e.$t("Game.Search")))]),a("div",{staticClass:"GameSearchItem d-inline-block"},[e._v('"'+e._s(e.GameName)+'"')]),a("span",[e._v(e._s(e.$t("Game.Result")))])])])]),a("div",{staticClass:"GameSearchForm"},[e.getSearchList&&0<e.getSearchList.length?a("div",{staticClass:"GameSearchList d-flex flex-column"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"GameSearchListForm d-flex flex-wrap justify-content-start",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-disabled":"disabled"}},e._l(e.getSearchList.slice(0,e.count),(function(t,i){return a("li",[a("gamesCard",{attrs:{gameData:t,gameIndex:i,Popular:t.Popular,gamePath:e.getUrlPath}})],1)}))),e.loading?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("Loading More Games...")]):e._e(),e.noMore?a("div",{staticClass:"Notice pt-3 text-center"},[e._v("No More Games")]):e._e()]):a("noData",{attrs:{NoDataPath:e.getUrlPath}})],1)])}),[],!1,null,"5e6c9d35",null);t.default=m.exports}}]);
//# sourceMappingURL=game.js.map