(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{337:function(t,e,l){},361:function(t,e,l){"use strict";l(337)},381:function(t,e,l){"use strict";l.r(e);var n={props:{to:{type:String,default:null},title:{type:String,default:null},cover:{type:String,default:null},date:{type:String,default:null},labels:{type:Array,default:function(){return[]}},type:{type:String,default:null},category:{type:Object,default:null},placeholder:{type:String,default:null},description:{type:String,default:null}}},r=(l(361),l(42)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-item",on:{click:function(e){return t.$router.push(t.to)}}},[l("div",{staticClass:"item-cover-box"},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover||t.placeholder,expression:"cover || placeholder"}],staticClass:"item-cover"})]),l("div",{staticClass:"item-info"},[l("div",{staticClass:"item-title"},[t._v(t._s(t.title))]),l("span",{staticClass:"item-preview"},[t._v(t._s(t.description))]),l("ul",{staticClass:"item-labels"},[l("li",{staticClass:"item-label"},[l("SChip",{attrs:{text:t._f("formatTimeAgo")(t.date),icon:"event_note"}})],1),t._l(t.labels,(function(label,i){return l("li",{key:i,staticClass:"item-label"},[l("SChip",{attrs:{text:label.name,icon:"sell"}})],1)}))],2)]),l("div",{staticClass:"item-category"},[l("i",{staticClass:"category-icon material-icons"},[t._v("bookmark")]),l("span",{staticClass:"category-text"},[t._v(t._s(t.category||"未分类"))])])])}),[],!1,null,"0123d3ae",null);e.default=component.exports;installComponents(component,{SChip:function(){return l.e(2).then(l.bind(null,376)).then((function(t){return t.default||t}))}})}}]);