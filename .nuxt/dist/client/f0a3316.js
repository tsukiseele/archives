(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{298:function(e,t,n){},299:function(e,t,n){"use strict";n(298)},313:function(e,t,n){},314:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var o={props:{hidden:{type:Boolean,default:!1},btns:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},iconType:{type:String,default:null}},data:function(){return{isHidden:!1}},methods:{onHidden:function(){this.isHidden=!this.isHidden,this.$emit(this.options.on)}},computed:{hideIcon:function(){return this.options&&this.options.icon?this.isHidden?this.options.icon.show:this.options.icon.hidden:this.isHidden?"Show":"Hide"}},mounted:function(){this.isHidden=this.hidden}},c=(n(299),n(39)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"live-tools"}},[e._l(e.btns,(function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isHidden,expression:"!isHidden"}],key:i,staticClass:"tool-btn",attrs:{id:t.on,icon:"",small:""},on:{click:function(n){return e.$emit(t.on)}}},[n("i",{staticClass:"material-icons"},[e._v(e._s(t.icon))])])})),n("div",{staticClass:"tool-btn",attrs:{id:e.isHidden?e.options.on:"",small:""},on:{click:e.onHidden}},[e.options&&e.options.icon?n("i",{staticClass:"material-icons"},[e._v(e._s(e.btn.icon))]):n("i",{staticClass:"material-icons"},[e._v(e._s(e.hideIcon))])])],2)}),[],!1,null,"0cb2539f",null);t.default=component.exports},336:function(e){e.exports=JSON.parse('{"mouseover":[{"selector":[".live2d"],"message":["不要乱摸啊，kora!","想要吃瓜吗？","飞机场有什么好摸的。。。","hen...hentai！"]},{"selector":["#home"],"message":["想看我的主页么?"]},{"selector":["#change"],"message":["喜欢换装play?"]},{"selector":["#save"],"message":["保持微笑就好。。。"]},{"selector":["#about"],"message":["主人想知道关于我的信息吗?"]},{"selector":["#hide"],"message":["有给主人带来快乐吗，那么不打扰了。。。"]}],"click":[{"selector":[".live2d"],"message":["想要看我的胖次吗?","是…是不小心碰到了吧","萝莉控是什么呀","你看到我的小熊了吗?","再摸的话我可要报警了！⌇●﹏●⌇","110吗，这里有个变态一直在摸我(ó﹏ò｡)","我要生气哟(ー`´ー)"]}]}')},337:function(e,t,n){"use strict";n(313)},338:function(e,t,n){"use strict";n(314)},375:function(e,t,n){"use strict";n.r(t);var o=n(2),c=(n(22),n(72),n(336)),d={components:{Live2dTools:n(322).default},data:function(){return{models:[{src:"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api@1.0.0/model/HyperdimensionNeptunia/nepgearswim/index.json"},{src:"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api@1.0.0/model/HyperdimensionNeptunia/nepswim/index.json"}],modelIndex:0,customDialogue:c,width:200,height:200,tools:{btns:[{icon:"home",on:"home"},{icon:"change_circle",on:"change"},{icon:"photo_camera",on:"save"},{icon:"info",on:"about"}],options:{icon:{hidden:"visibility_off",show:"visibility"},on:"hide"}},isLive2d:!0,isDialogue:!0,message:""}},computed:{modelPath:function(){return this.models[this.modelIndex].src}},watch:{message:function(e,t){this.$refs.dialogue.showMessage(e,1e4)}},mounted:function(){var e=this;setInterval(Object(o.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isDialogue){t.next=6;break}return t.next=3,e.$axios.get("https://v1.hitokoto.cn/?encode=json");case 3:n=t.sent,data=n.data,e.$refs.dialogue&&e.showMessage(data.hitokoto);case 6:case"end":return t.stop()}}),t)}))),3e4)},methods:{home:function(){this.$router.push("/")},change:function(){this.modelIndex=this.modelIndex+1<this.models.length?this.modelIndex+1:0},save:function(){this.$refs.l2dMange.save("live2d-".concat(Date.now(),".png"))},about:function(){window.open("https://github.com/LingHanChuJian/live2d-vue","_blank")},hide:function(){this.isLive2d=this.isDialogue=!this.isLive2d},showMessage:function(e){this.message=e}}},l=(n(337),n(338),n(39)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("div",{staticClass:"live2d"},[n("div",{staticClass:"live2d-panel"},[n("dialogue",{directives:[{name:"show",rawName:"v-show",value:e.isDialogue,expression:"isDialogue"}],ref:"dialogue",staticClass:"dialogue-live2d",attrs:{customDialogue:e.customDialogue}}),e.isLive2d?n("live2d",{ref:"l2dMange",attrs:{height:e.height,width:e.width,modelPath:e.modelPath}}):e._e()],1),n("div",{staticClass:"tools-panel",class:{show:!e.isLive2d}},[n("live2d-tools",{attrs:{hidden:!e.isLive2d,btns:e.tools.btns,options:e.tools.options},on:{home:function(t){return e.home()},change:function(t){return e.change()},save:function(t){return e.save()},about:function(t){return e.about()},hide:function(t){return e.hide()}}})],1)])])}),[],!1,null,"6418b843",null);t.default=component.exports}}]);