(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/rahul/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"09ef":function(t,e,a){"use strict";var n=a("2768"),s=a.n(n);s.a},1:function(t,e){},2:function(t,e){},2768:function(t,e,a){},3:function(t,e){},"3dfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",{staticClass:"no-padding",attrs:{fluid:""}},[a("b-row",{staticClass:"no-margin"},[a("b-col",{staticClass:"no-padding"},[a("Header")],1)],1)],1),a("Home")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-header"}},[n("b-navbar",{staticClass:"pt-0 border-bottom border-secondary mb-2",attrs:{type:"light",variant:"light",sticky:""}},[n("b-navbar-brand",{attrs:{href:"#",stlye:"padding-top: 0rem; padding-bottom: 0rem; height: 2.2rem;"}},[n("img",{staticClass:"d-inline-block align-top",staticStyle:{height:"2.2rem"},attrs:{src:a("cf05"),alt:"BV"}}),n("span",{staticStyle:{"vertical-align":"-webkit-baseline-middle","margin-start":"1rem"}},[t._v("Sales & Market Price Benchmarking ")])])],1)],1)},r=[],o={name:"MainHeader"},c=o,l=(a("536d"),a("2877")),d=Object(l["a"])(c,i,r,!1,null,"d9e6dcfc",null),u=d.exports,f=a("57da"),h={name:"App",components:{Header:u,Home:f["a"]}},m=h,p=(a("034f"),Object(l["a"])(m,n,s,!1,null,null,null));e["a"]=p.exports},4:function(t,e){},"41cb":function(t,e,a){"use strict";var n=a("2b0e"),s=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Home")],1)},r=[],o=a("57da"),c={name:"home",components:{Home:o["a"]}},l=c,d=a("2877"),u=Object(d["a"])(l,i,r,!1,null,null,null),f=u.exports;n["default"].use(s["a"]);e["a"]=new s["a"]({mode:"history",routes:[{path:"/",name:"home",component:f,meta:{title:"Sales & Market Price Benchmarking"}}]})},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return a(e)}function i(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="4678"},5:function(t,e){},"536d":function(t,e,a){"use strict";var n=a("9c50"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),n=a("3dfd"),s=a("41cb"),i=a("5f5b"),r=a("bc3a"),o=a.n(r),c=a("a7fe"),l=a.n(c),d=a("1157"),u=a.n(d),f=a("4971"),h=a.n(f),m=(a("24df"),a("f9e3"),a("2dd8"),a("1f54"),a("f824"),a("ecee")),p=a("c074"),b=a("ad3d");t.Jquery=u.a,t.$=u.a,e["default"].config.productionTip=!1,e["default"].use(i["a"]),e["default"].use(l.a,o.a),e["default"].component("VueSlider",h.a),e["default"].component("font-awesome-icon",b["a"]),m["c"].add(p["f"],p["d"],p["a"],p["e"],p["b"],p["g"],p["c"]),new e["default"]({router:s["a"],render:function(t){return t(n["a"])}}).$mount("#app")}.call(this,a("c8ba"))},"57da":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"home",attrs:{id:"home"}},[a("b-container",{staticClass:"main-home-container no-padding",attrs:{fluid:"",id:"main-home-container"}},[a("b-row",{staticClass:"no-margin"},[a("b-col",{staticClass:"no-padding"},[a("b-row",{staticClass:"no-margin"},[a("b-col",{staticClass:"no-padding mr-2",attrs:{cols:"7"}},[a("b-navbar",{staticClass:"shadow-sm bg-white rounded",attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",t._l(t.materials_list,function(e,n){return a("b-nav-item",{key:",list-"+n,attrs:{active:t.checknavactive(e)},on:{click:function(a){return t.select_material(e)}}},[t._v(t._s(e.api))])}),1)],1)],1),a("b-row",[a("b-col",{staticClass:"max-height"},[t.chartLoading?a("div",{staticClass:"chart-loader"},[a("b-row",{staticClass:"no-chart-div"},[a("Spinner")],1)],1):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.chartLoading,expression:"!chartLoading"}]},[a("b-row",{staticClass:"no-scroll shadow m-1 bg-white rounded",on:{load:function(e){t.chartLoading}}},[a("b-col",[a("b-row",[a("b-col",[a("div",{staticClass:"myChartDiv"},[a("chart",{attrs:{"chart-data":t.datacollection,height:t.getChartHeight(),width:650,minPanDate:1e3*t.SliderValues[0],maxPanDate:1e3*t.SliderValues[1],zoomMonths:2}})],1)])],1),a("b-row",{staticClass:"no-margin",staticStyle:{margin:"5px !important"},attrs:{"border-variant":"dark"}},[a("b-col",{staticClass:"no-padding",staticStyle:{padding:"5px !important"},attrs:{cols:"2"}},[a("b-row",[a("b-col",{attrs:{cols:"10"}},[a("b-badge",{staticClass:"badge",attrs:{variant:"light"}},[t._v("Currency: Yuan")])],1)],1)],1),a("b-col",{staticClass:"no-padding",staticStyle:{padding:"10px !important"},attrs:{cols:"10"}},[a("vue-slider",{attrs:{tooltip:"always",min:t.sliderminRange,max:t.slidermaxRange,"enable-cross":!1,interval:1},on:{change:function(e){return t.populateData("values")}},scopedSlots:t._u([{key:"tooltip",fn:function(e){var n=e.value,s=e.focus;return[a("div",{class:["custom-tooltip",{focus:s}]},[t._v(t._s(new Date(1e3*n).toISOString().split("T")[0]))])]}}]),model:{value:t.SliderValues,callback:function(e){t.SliderValues=e},expression:"SliderValues"}})],1)],1)],1)],1),t.maindata.length>0?a("b-row",{staticClass:"no-scroll shadow m-1 bg-white rounded"},[a("b-col",{staticClass:"table-scroll",staticStyle:{"margin-top":"10px"}},[a("table",{staticClass:"table"},[a("tr",[a("th",{staticClass:"font-weight-bold",staticStyle:{width:"100px"}},[t._v("Date")]),t._l(t.maindata,function(e,n){return a("th",{key:",cost_Rebaritem-"+n},[a("span",[t._v(t._s(t.formatDate(e.Time)))])])})],2),a("tr",[a("th",{staticClass:"font-weight-bold"},[t._v("Market Price")]),t._l(t.maindata,function(e,n){return a("th",{key:",cost_Rebaritem-"+n},[a("span",[t._v(t._s(e.Price))])])})],2),a("tr",[a("th",{staticStyle:{"font-weight":"bold"}},[t._v("Production Cost")]),t._l(t.maindata,function(e,n){return a("th",{key:",cost_Rebaritem-"+n},[a("span",[t._v(t._s(e.Cost))])])})],2),a("tr",[a("th",{staticClass:"profit"},[t._v("Profit / Loss")]),t._l(t.maindata,function(e,n){return a("th",{key:",cost_Rebaritem-"+n},[a("span",{staticClass:"profit"},[t._v(t._s(e.Profit))])])})],2)])])],1):t._e()],1)])],1)],1),a("b-col",{staticClass:"no-padding mb-3 mr-3 news-div"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-left"},[a("div",{staticClass:"text-center"},[a("b-navbar",{staticClass:"news-header",attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",[t._v(t._s(t.selected_material.list))]),a("b-navbar-toggle",{attrs:{target:"nav-collapse1"}}),a("b-collapse",{attrs:{id:"nav-collapse1","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-button",{staticStyle:{width:"60px",color:"white",background:"rgba(255, 255, 255, 0.5)","padding-left":"5px","padding-right":"5px"},attrs:{variant:"primary"},on:{click:function(e){return t.toggleNews()}}},[t._v("NEWS")]),a("b-nav-item-dropdown",{attrs:{variant:"outline-primary",id:"dropdown-1",size:"sm",text:"Sort By Score",right:""}},[a("b-dropdown-item",{staticClass:"item",on:{click:function(e){return t.sort("asce")}}},[t._v("Low to High")]),a("b-dropdown-item",{staticClass:"item",on:{click:function(e){return t.sort("desc")}}},[t._v("High to Low")])],1),a("b-nav-item-dropdown",{attrs:{variant:"outline-primary",id:"dropdown-1",size:"sm",text:"Sort by Date",right:""}},[a("b-dropdown-item",{staticClass:"item",on:{click:function(e){return t.sortDate()}}},[t._v("Oldest")]),a("b-dropdown-item",{staticClass:"item",on:{click:function(e){return t.sortdateDesc()}}},[t._v("Newest")])],1)],1)],1)],1)],1)])])],1),a("b-row",[a("b-col",{staticStyle:{height:"calc(100vh - 160px)","overflow-y":"scroll"}},[t.hasNews?a("div",[t.news1?a("div",t._l(t.news,function(e,n){return a("div",{key:n,staticClass:"m-1 bg-white rounded padding text-left news-css"},[a("p",{staticClass:"margin-div"},[a("b-link",{attrs:{target:"_blank",href:e.link}},[t._v("\n                        "+t._s(e.Headline)+"\n                        ")]),a("br"),a("b-container",{staticClass:"bv-example-row",staticStyle:{"font-size":"12px"}},[a("b-row",[a("b-col",{attrs:{cols:"3"}},[t._v("Score : "+t._s(e.score))]),a("b-col",{attrs:{cols:"6"}},[t._v("Date : "+t._s(t.formatDate(e.date)))])],1)],1)],1)])}),0):a("div",[a("p",{staticClass:"margin-div"}),a("p",[t._v("yet to be displayed...")]),a("p")])]):t.newsLoading?a("div",{staticClass:"no-news-div"},[a("Spinner")],1):a("div",{staticClass:"no-news-div"},[a("h4",[t._v("No news to show...")])])])],1)],1)],1)],1)],1)],1),a("b-modal",{attrs:{size:"lg",title:"Graphs of Zone",lazy:""},model:{value:t.modalcommon,callback:function(e){t.modalcommon=e},expression:"modalcommon"}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{pills:"",card:""}},[a("b-tab",{attrs:{title:"Chart",active:""}},[a("div",{staticClass:"myChartDiv"})]),a("b-tab",{attrs:{title:"Raw Data"}},[a("b-container",[a("b-row",{staticClass:"space-row"},[a("b-col",{staticClass:"table-scroll"},[a("table",{staticClass:"table"},[a("thead",{staticStyle:{position:"fixed"}},[a("tr",[a("th",[t._v("Date")]),a("th",[t._v("APAC")]),a("th",[t._v("NAZ")]),a("th",[t._v("South Africa")]),a("th",[t._v("Europe")])])]),t._l(t.prices,function(e,n){return a("tr",{key:",list-"+n},[a("td",[t._v(t._s(e.Time))]),a("td",[t._v(t._s(e.Price))]),a("td",[t._v(t._s(e.Random))]),a("td",[t._v(t._s(e.Random1))]),a("td",[t._v(t._s(e.Random2))])])})],2)])],1)],1)],1)],1)],1)],1),a("web-chat")],1)},s=[],i=(a("6762"),a("2fdb"),a("55dd"),a("28a5"),a("ac6a"),a("4971")),r=a.n(i),o=(a("24df"),a("1fca")),c=(a("f634"),o["b"].reactiveProp),l={extends:o["a"],mixins:[c],props:["chartData","height","width","minPanDate","maxPanDate","zoomMonths"],data:function(){return{options:{height:this.height,width:this.width,scales:{yAxes:[{ticks:{},gridLines:{display:!1}}],xAxes:[{gridLines:{drawOnChartArea:!0},type:"time",time:{min:"2019-03-01",unit:"month",unitStepSize:1,displayFormats:{day:"MMM DD"}}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1,plugins:{zoom:{pan:{enabled:!0,mode:"x",rangeMin:{x:new Date("2017-12-31")},rangeMax:{x:new Date("2019-05-05")}},zoom:{enabled:!0,drag:!1,mode:"x",speed:.3,rangeMin:{x:new Date("2017-12-31")},rangeMax:{x:new Date("2019-05-05")}}}}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},d=a("2b0e"),u={GetNews:function(t){return new Promise(function(e,a){d["default"].axios({method:"POST",url:"https://eymarketintelapi.eu-gb.mybluemix.net/news",headers:{"Content-Type":"application/json"},data:{query:t}}).then(function(t){e(t)}).catch(function(t){a(t)})})},GetPrices:function(t){return new Promise(function(e,a){d["default"].axios({method:"POST",url:"https://eymarketintelapi.eu-gb.mybluemix.net/pricesbymaterial",headers:{"Content-Type":"application/json"},data:{query:t}}).then(function(t){e(t)}).catch(function(t){a(t)})})}},f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-dual-ring"})},h=[],m={name:"Spinner"},p=m,b=(a("f22a"),a("2877")),g=Object(b["a"])(p,f,h,!1,null,null,null),v=g.exports,w=a("71ff"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container-div"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],attrs:{id:"top-action-bar"}},[a("font-awesome-icon",{style:{color:"white",marginRight:"20px"},attrs:{icon:"exchange-alt"},on:{click:t.toggleSide}}),a("font-awesome-icon",{style:{color:"white",marginBottom:"8px"},attrs:{icon:"window-minimize"},on:{click:t.toggleChatbox}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],attrs:{id:"botframework-chat"}}),t.open?t._e():a("div",{staticClass:"toggle-btn"},[a("b-button",{staticStyle:{width:"50px",height:"50px","box-shadow":"3px 3px 5px #888","background-color":"#39C",border:"0",padding:"15px"},attrs:{pill:""},on:{click:t.toggleChatbox}},[a("font-awesome-icon",{attrs:{icon:"comment-alt",size:"lg"}})],1)],1)])},C=[],j=a("84ff"),y=a("1157"),k={name:"web-chat",components:{},props:[],data:function(){return{token:null,open:!1,styleSet:Object(j["createStyleSet"])({backgroundColor:"white",border:"5px"})}},computed:{},mounted:function(){Object(j["renderWebChat"])({directLine:Object(j["createDirectLine"])({token:"sQIlsKbmC6s.-ZQp0APfKVVOmdQfKjwzvMH6pScLLhuBEWj2Y37K0hA"}),styleOptions:{hideUploadButton:!0,backgroundColor:"#FFF"}},document.getElementById("botframework-chat"))},methods:{FetchToken:function(){return new Promise(function(t,e){d["default"].axios({method:"POST",url:"https://webchat-mockbot.azurewebsites.net/directline/token",headers:{"Content-Type":"application/json"}}).then(function(e){t(e)}).catch(function(t){e(t)})})},toggleChatbox:function(){"flex"===y("#botframework-chat").css("display")?(y("#botframework-chat").css("display","none"),y("#container-div").css("left",""),y("#container-div").css("right","30px")):y("#botframework-chat").css("display","flex"),this.open=!this.open},toggleSide:function(){"30px"===y("#container-div").css("right")?(y("#container-div").css("right","0"),y("#container-div").css("left","30px")):(y("#container-div").css("left",""),y("#container-div").css("right","30px"))},activityMiddleware:function(){return function(t){return function(e){return function(a){if("user"===e.activity.from.role){var n=document.createElement("DIV");return n.style.cssText="border-right-color:red;border-right-style:solid;border-right-width:5;margin-right:8;",n.innerHTML=t(e)(a),n}var s=document.createElement("DIV");return s.style.cssText="border-left-color:red;border-left-style:solid;border-left-width:5;margin-left:8;",s.innerHTML=t(e)(a),s}}}}}},D=k,x=(a("09ef"),Object(b["a"])(D,A,C,!1,null,null,null)),S=x.exports,E={name:"Home",components:{Chart:l,VueSlider:r.a,Spinner:v,WebChat:S},data:function(){return{myChart:null,dateSlider:[],SliderValues:[new Date(""+(new Date).getFullYear()-1+".01.01").getTime()/1e3,new Date((new Date).getFullYear()+"."+(new Date).getMonth()+"."+(new Date).getDate()).getTime()/1e3],sliderminRange:new Date(""+(new Date).getFullYear()-1+".01.01").getTime()/1e3,slidermaxRange:new Date((new Date).getFullYear()+"."+(new Date).getMonth()+"."+(new Date).getDate()).getTime()/1e3,selected:"D",modalcommon:!1,datacollection:null,dataSlider:null,news:[],hasNews:!1,news1:!0,newsLoading:!0,chartLoading:!1,maindata:[],test2:[],prices:[],materials_list:w.Materials,showchart:!1,selected_material:""}},mounted:function(){var t=this;this.$nextTick(function(){t.showchart=!1,t.select_material(t.materials_list[0])})},filters:{randomVal:function(){return Math.floor(1e3*Math.random(2)+3500,2)}},methods:{checknavactive:function(t){return this.selected_material.api===t.api},getSliderValues:function(){var t=this,e=[];return u.GetPrices(this.materials_list[0].param).then(function(a){return t.SliderValues[0]=a.data[0].Time,t.SliderValues[1]=a.data[a.data.length-1].Time,e[0]=a.data[0].Time,e[1]=a.data[a.data.length-1].Time,e})},select_material:function(t){this.selected_material=t,this.getapidata(t)},getapidata:function(t){var e=this;this.hasNews=!1,this.newsLoading=this.chartLoading=!0,u.GetNews(t.list).then(function(t){e.newsLoading=!1,e.populateNewsData(t)}),u.GetPrices(t.param).then(function(t){console.log(t),e.chartLoading=!1,t.data[0].Material===e.selected_material.param&&e.populatePriceData(t)})},populateNewsData:function(t){var e=this;this.news=[],this.hasNews=t.data.length>0,this.hasNews?t.data.forEach(function(t){t.Score&&""!=t.Headline&&e.news.push({Headline:t.Headline,score:t.Score,link:t.URL,date:t.Date,status:t.Status})}):this.hasNews=!1},populatePriceData:function(t){var e=this;this.prices=[],t.data.forEach(function(t){e.prices.push({Time:t.Time,Price:parseInt(t.Price),naz_price:e.randomVal(),south_africa_price:e.randomVal(),europe_price:e.randomVal()+400,Cost:t.Cost,Profit:parseInt(t.Price)-t.Cost})}),this.chartLoading=!1,this.populateData(this.prices)},randomVal:function(t){return Math.floor(3500*Math.random(2)+1500,2)},populateData:function(t){var e=this,a=(new Date).getMonth()+1+"",n=0,s=this.prices;if("first"==t){s=[];for(var i=0;i<this.prices.length;i++){var r=this.prices[i],o=new Date(r.Time).getDay();n=1==o||0==i?r.Price:(n+r.Price)/2,0==o&&(s.push({Price:n,Time:new Date(r.Time).toDateString().slice(3,15),naz_price:this.randomVal(),south_africa_price:this.randomVal(),europe_price:this.randomVal(),Cost:r.Cost,Profit:r.Profit}),n=0)}}else if("second"==t){s=[];for(var c=0;c<this.prices.length;c++){var l=this.prices[c],d=parseInt(l.Time.slice(9,10)),u=parseInt(l.Time.slice(5,7));parseInt(l.Time.slice(0,4));u==a?n=1==d?l.Price:(n+l.Price)/2:(s.push({Price:n,Time:new Date(l.Time).toDateString().slice(3,15),naz_price:this.randomVal(),south_africa_price:this.randomVal(),europe_price:this.randomVal(),Cost:l.Cost,Profit:l.Profit}),a=u,n=0,c--)}}else if("values"==t)s=[],this.prices.forEach(function(t,a){t.Time>new Date(1e3*e.SliderValues[0]).toISOString().split("T")[0]&&t.Time<new Date(1e3*e.SliderValues[1]).toISOString().split("T")[0]&&s.push({Time:new Date(t.Time).toDateString().slice(3,15),Price:t.Price,naz_price:e.randomVal(),south_africa_price:e.randomVal(),europe_price:e.randomVal(),Cost:t.Cost,Profit:t.Profit})});else{s=[];for(var f=0;f<this.prices.length;f++){var h=this.prices[f];s.push({Time:new Date(h.Time).toDateString().slice(3,15),Price:h.Price,naz_price:this.randomVal(),south_africa_price:this.randomVal(),europe_price:this.randomVal(),Cost:h.Cost,Profit:h.Profit})}}this.maindata=s,this.makeChartData()},makeChartData:function(){var t=[],e=[],a=[],n=[],s=[];this.maindata.forEach(function(i,r){t.push(i.Time),e.push(i.Price),n.push(i.naz_price),a.push(i.south_africa_price),s.push(i.europe_price)});var i=2,r=1;this.datacollection={labels:t,responsive:!0,maintainAspectRatio:!1,datasets:[{label:"APAC",backgroundColor:"rgba(248, 79, 79, 1)",data:e,fill:!1,borderColor:"rgba(248, 79, 79, 1)",borderWidth:r,pointRadius:i},{label:"NAZ",backgroundColor:"#e9d743",data:n,borderColor:"#e9d743",fill:!1,borderWidth:r,pointRadius:i},{label:"South-Africa",backgroundColor:"#8eddf0",data:a,fill:!1,borderColor:"#8eddf0",borderWidth:r,pointRadius:i},{label:"Europe",backgroundColor:"#9Abb92",data:s,fill:!1,borderColor:"#9Abb92",tooltips:!0,borderWidth:r,pointRadius:i}]},this.showchart=!0},onChartReady:function(){this.showChart=!1},toggleNews:function(){this.news1=!this.news1},sort:function(t){"asce"===t?this.news.sort(function(t,e){var a=t.score.slice(0,t.score.length-1),n=e.score.slice(0,e.score.length-1);return parseInt(a)>parseInt(n)?1:-1}):"desc"===t&&this.news.sort(function(t,e){var a=t.score.slice(0,t.score.length-1),n=e.score.slice(0,e.score.length-1);return parseInt(a)<parseInt(n)?1:-1})},sortDate:function(){this.news;this.news.sort(function(t,e){return new Date(t.date).getTime()>new Date(e.date).getTime()?1:-1})},sortdateDesc:function(){this.news;this.news.sort(function(t,e){return new Date(e.date).getTime()>new Date(t.date).getTime()?1:-1})},getChartHeight:function(){console.log($(window).height());var t=$(window).height();return t>900?540:t>800?420:t>700?320:260},formatDate:function(t){t=t.trim();var e=t.split(" "),a=e[0].substring(0,3),n=e[1].includes(",")?e[1]:e[1].substring(0,2)+",",s=e[2].substring(2),i=a+" "+n+" "+s;return i}}},V=E,B=(a("d9c1"),Object(b["a"])(V,n,s,!1,null,"062e7f49",null));e["a"]=B.exports},"5c33":function(t,e,a){},6:function(t,e){},"64a9":function(t,e,a){},7:function(t,e){},"71ff":function(t){t.exports={Materials:[{list:"Common Carbon Round",api:"CCR Steel",param:"common carbon round steel Φ20(Yuan/tonne)"},{list:"Rebar",api:"Rebar",param:"Rebar HRB400 20MM(Yuan/tonne)"},{list:"Carbon Structural",api:"CS",param:"Carbon structural steel 50mm(Yuan/tonne)"},{list:"Wire Rod",api:"W Rod",param:"Wire rod Φ8mm HPB300 high speed wire rodHPB300(Yuan/tonne)"},{list:"Round Bearing",api:"RBS",param:"Round bearing steel 50mm(连铸)(Yuan/tonne)"},{list:"Cold Heading",api:"CHS",param:"Cold heading steel 22A（18A）(Yuan/tonne)"},{list:"Color Coated",api:"C-CS",param:"Color-coated steel 0.476mm(Yuan/tonne)"},{list:"Galvanized",api:"GS",param:"Galvanized steel 0.5mm(Yuan/tonne)"},{list:"HRC hot-rolled coil",api:"HRC",param:"HRC 3.0(Yuan/tonne)"}]}},8:function(t,e){},9:function(t,e){},"9c50":function(t,e,a){},cb88:function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,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"},d9c1:function(t,e,a){"use strict";var n=a("cb88"),s=a.n(n);s.a},f22a:function(t,e,a){"use strict";var n=a("5c33"),s=a.n(n);s.a},f824:function(t,e,a){}});
//# sourceMappingURL=app.43e0ff3f.js.map