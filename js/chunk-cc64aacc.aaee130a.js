(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc64aacc"],{"25c5":function(t,e,a){"use strict";var n=a("5962"),r=a.n(n);r.a},"3ff8":function(t,e,a){},5962:function(t,e,a){},"6a1d":function(t,e,a){"use strict";var n=a("3ff8"),r=a.n(n);r.a},"6c05":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"m-2"},[a("div",{staticClass:"mt-2"},[a("blog-list",{attrs:{items:t.blogs},on:{selected:t.navigate},scopedSlots:t._u([{key:"items",fn:function(e){return[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":e.item.image,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(" "+t._s(e.item.title)+" ")]),a("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.gosomewhere(e.item)}}},[t._v("Go somewhere")])],1)]}}])})],1)])])},r=[],i=a("d4ec"),c=a("bee2"),s=a("262e"),l=a("2caf"),o=a("9ab4"),u=a("60a3"),b=a("7697"),v=a("9904"),f=a("6f5d"),d=(a("b0c0"),a("f1c1")),m=[{title:"L'insostenibile leggerezza dell'essere",image:"/images/insostenibile.png",path:d["b"].path,name:d["b"].name},{title:"Anna Karerina",image:"/images/annak.png",path:d["a"].path,name:d["a"].name}],p=function(t){Object(s["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.blogs=m,t}return Object(c["a"])(a,[{key:"gosomewhere",value:function(t){this.navigate(t)}},{key:"navigate",value:function(t){this.$router.push({path:t.path})}}]),a}(u["c"]);p=Object(o["a"])([Object(u["a"])({components:{Header:b["a"],BookHeader:v["a"],BlogList:f["a"]}})],p);var g=p,h=g,j=a("2877"),O=Object(j["a"])(h,n,r,!1,null,null,null);e["default"]=O.exports},"6f5d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border bg-white"},[t._t("header"),t._l(t.items,(function(e,n){return a("div",{key:n,staticClass:"border-b"},[a("div",{staticClass:"p-2 hover:bg-blue-100 active:bg-blue-200",on:{click:function(a){return t.selected(e)}}},[t._t("items",null,{item:e,index:n})],2)])}))],2)},r=[],i=a("d4ec"),c=a("bee2"),s=a("262e"),l=a("2caf"),o=a("9ab4"),u=a("60a3"),b=function(t){Object(s["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"selected",value:function(t){this.$emit("selected",t)}}]),a}(u["c"]);Object(o["a"])([Object(u["b"])()],b.prototype,"items",void 0),b=Object(o["a"])([u["a"]],b);var v=b,f=v,d=a("2877"),m=Object(d["a"])(f,n,r,!1,null,null,null);e["a"]=m.exports},7697:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},r=[],i=a("d4ec"),c=a("262e"),s=a("2caf"),l=a("9ab4"),o=a("2b0e"),u=a("60a3"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",[a("router-link",{staticClass:"router-link-main",attrs:{to:"/"}},[t._v("Mold Society")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{staticClass:"router-link",attrs:{to:"/cook"}},[t._v("Cooking")])],1),a("b-nav-item",[a("router-link",{staticClass:"router-link",attrs:{to:"/review"}},[t._v("Recensioni")])],1),a("b-nav-item",[a("router-link",{staticClass:"router-link",attrs:{to:"/nature"}},[t._v("Nature")])],1),a("b-nav-item",[a("router-link",{staticClass:"router-link",attrs:{to:"/mold"}},[t._v("Mold")])],1)],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RO")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("IT")])],1)],1)],1)],1)],1)},v=[],f=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(o["default"]);f=Object(l["a"])([u["a"]],f);var d=f,m=d,p=(a("6a1d"),a("2877")),g=Object(p["a"])(m,b,v,!1,null,null,null),h=g.exports,j=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(o["default"]);j=Object(l["a"])([Object(u["a"])({components:{NavBar:o["default"].extend(h)}})],j);var O=j,k=O,_=Object(p["a"])(k,n,r,!1,null,null,null);e["a"]=_.exports},9904:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{staticClass:"flex justify-center aling-center"},[t._v("Book")])],1)],1)},r=[],i=a("d4ec"),c=a("262e"),s=a("2caf"),l=a("9ab4"),o=a("2b0e"),u=a("60a3"),b=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(o["default"]);b=Object(l["a"])([u["a"]],b);var v=b,f=v,d=(a("25c5"),a("2877")),m=Object(d["a"])(f,n,r,!1,null,null,null);e["a"]=m.exports},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=chunk-cc64aacc.aaee130a.js.map