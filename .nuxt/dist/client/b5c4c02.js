(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{321:function(t,e,n){},360:function(t,e,n){"use strict";n(321)},381:function(t,e,n){"use strict";n.r(e);var o=n(2),l=(n(22),n(72),n(40),{props:{title:{type:String,default:null},subtitle:{type:String,default:null},cover:{type:String,default:null},isHideSubtitle:{type:Boolean,default:!1},isFull:{type:Boolean,default:!1},isHide:{type:Boolean,default:!1},disableTyping:{type:Boolean,default:!1}},data:function(){return{input:{template:[],show:"",index:0,state:!0,vague:!0}}},methods:{scrollToContent:function(){var t=this;this.$nextTick((function(){var e=document.getElementById("container");t.$store.commit("scroll",{pos:e.offsetTop,change:e.offsetTop}),e.scrollIntoView()}))},typing:function(){if(!this.disableTyping){var t=0;this.input.vague&&(this.input.vague=!1);var e=this.input.template[this.input.index];this.input.state?(this.input.show=e.substring(0,this.input.show.length+1),t=180):(this.input.show=e.substring(0,this.input.show.length-1),t=50),0!=this.input.show.length&&this.input.show.length!=e.length||(this.input.state=!this.input.state),0==this.input.show.length&&(this.input.index=++this.input.index<this.input.template.length?this.input.index:0,this.input.vague=!0,t=666),this.input.show.length==e.length&&(this.input.vague=!0,t=2e3),setTimeout(this.typing,t)}},getHitokoto:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://v1.hitokoto.cn/");case 2:(n=e.sent)&&(t.input.template=["".concat(n.hitokoto),"出自 ".concat(n.from)].concat(t.input.template)),t.typing();case 5:case"end":return e.stop()}}),e)})))()}},computed:{scroll:function(){return this.$store.state.scroll}},watch:{scroll:function(){}},mounted:function(){this.hideSubtitle||(this.subtitle?(this.input.template="string"==typeof this.subtitle?[this.subtitle]:this.subtitle,this.typing()):this.getHitokoto())}}),r=(n(360),n(39)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"banner",class:{full:t.isFull,hide:t.isHide},style:{"--bg":t.cover?"url("+t.cover+")":null},attrs:{id:"banner"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHide,expression:"!isHide"}],staticClass:"banner--card"},[n("div",{staticClass:"banner--title",on:{click:function(e){return t.scrollToContent()}}},[n("span",[t._v(t._s(t.title))])]),t.isHideSubtitle?t._e():n("div",{staticClass:"banner--subtitle"},[n("span",[t._v(t._s(t.input.show))]),n("span",{staticClass:"subtitle--cursor",class:{"subtitle--cursor-vague":t.input.vague}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHide&&t.isFull,expression:"!isHide && isFull"}],staticClass:"btn-scroll"},[n("i",{staticClass:"fa fa-chevron-down fa-lg",on:{click:function(e){return t.scrollToContent()}}})])])}),[],!1,null,"7502ed7a",null);e.default=component.exports}}]);