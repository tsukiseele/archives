(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{303:function(t,e,n){},326:function(t,e,n){"use strict";n(303)},365:function(t,e,n){"use strict";n.r(e);n(31),n(30),n(60),n(20),n(61);var r=n(2),c=n(27),o=(n(22),n(23),n(41),n(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{markdown:{toolbars:{fullscreen:!1}},comments:{}}},computed:h(h({},Object(o.b)(["archive"])),{},{header:function(){return{title:this.archive?this.archive.title:"无题",subtitle:this.archive?this.archive.description:"无题",isHideSubtitle:!0,isHide:!0}}}),methods:{},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.params,c=parseInt(r.id),e.next=4,n.dispatch("archive",{id:c});case 4:case"end":return e.stop()}}),e)})))()}},d=(n(326),n(39)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[t.archive?n("TheBanner",{attrs:{title:t.archive.title,cover:t.archive.cover.url,subtitle:t.header.subtitle,disableTyping:!1}}):t._e(),n("main",{attrs:{id:"main"}},[n("div",{staticClass:"archive"},[n("div",{staticClass:"markdown"},[n("client-only",[n("SMarkdown",{attrs:{content:t.archive.content}})],1)],1),n("SComment",{attrs:{title:this.$route.path}})],1)])],1)}),[],!1,null,"7b36390b",null);e.default=component.exports;installComponents(component,{TheBanner:function(){return n.e(12).then(n.bind(null,380)).then((function(t){return t.default||t}))},SMarkdown:function(){return Promise.all([n.e(26),n.e(6)]).then(n.bind(null,378)).then((function(t){return t.default||t}))},SComment:function(){return n.e(3).then(n.bind(null,370)).then((function(t){return t.default||t}))}})}}]);