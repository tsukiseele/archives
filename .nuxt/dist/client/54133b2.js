(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{320:function(e,t,n){},343:function(e,t,n){"use strict";n(320)},366:function(e,t,n){"use strict";n.r(t);n(34),n(26),n(33),n(62),n(22),n(63);var r=n(2),c=n(30),o=(n(9),n(27),n(32),n(136),n(25),n(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={scrollToTop:!0,data:function(){return{header:{title:"WATORA"},arch:null,error:null,isLoading:!1,itemActive:null,isAosOnce:!0,asideStyles:{},asideClasses:{},asidePos:null}},watch:{itemActive:function(e,t){e&&this.$store.commit("live2dText","要阅读『".concat(e," 』吗?"))}},computed:d(d({},Object(o.b)(["page","scroll","archives","labels"])),{},{isMobile:function(){return this.$store.getters.isMobile},res:function(){return{icon:"".concat(this.$static,"/icon/icon.png"),placeholder:this.$src.images.placeholder}}}),methods:{onChange:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$router.push({params:{page:e}});case 1:case"end":return n.stop()}}),n)})))()},bannerHeight:function(){var e=document.getElementById("banner");return e?e.offsetHeight:NaN}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.params,t.next=3,Promise.all([n.dispatch("archives",{page:Number(r.page||1),count:10}),n.dispatch("labels")]);case 3:case"end":return t.stop()}}),t)})))()}},f=(n(343),n(42)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("TheBanner",{ref:"banner",attrs:{title:e.header.title,subtitle:e.header.subtitle,isFull:e.header.isFull,isHide:e.header.isHide,isHideSubtitle:e.header.isHideSubtitle,cover:e.$src.images.backgrounds[7]}}),n("main",{attrs:{id:"main"}},[n("div",{staticClass:"aside-wrap"},[n("TheInfoCard",{class:e.asideClasses,style:e.asideStyles,attrs:{icon:e.res.icon}}),n("div",{staticClass:"sticky"},[n("SLabelClouds",{staticClass:"card",attrs:{labels:e.labels}}),n("TheArchives",{attrs:{archives:e.arch}})],1)],1),n("div",{staticClass:"post"},[e.error?n("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._l(e.archives,(function(t,r){return n("div",{key:r,staticClass:"post-item-wrap"},[n("SPostItem",{attrs:{title:t.title,cover:t.cover.url,date:t.createAt,labels:t.labels,description:t.description,to:"/archives/"+(t.id||""),placeholder:e.res.placeholder}})],1)})),n("SPagination",{attrs:{current:e.page,size:10,loading:e.isLoading},on:{change:e.onChange}})],2)])],1)}),[],!1,null,"375c09b9",null);t.default=component.exports;installComponents(component,{TheBanner:function(){return n.e(12).then(n.bind(null,380)).then((function(e){return e.default||e}))},TheInfoCard:function(){return n.e(14).then(n.bind(null,374)).then((function(e){return e.default||e}))},SLabelClouds:function(){return n.e(5).then(n.bind(null,378)).then((function(e){return e.default||e}))},TheArchives:function(){return n.e(10).then(n.bind(null,373)).then((function(e){return e.default||e}))},SPostItem:function(){return n.e(8).then(n.bind(null,381)).then((function(e){return e.default||e}))},SPagination:function(){return n.e(7).then(n.bind(null,379)).then((function(e){return e.default||e}))}})}}]);