/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(e,t,r){"use strict";r(125);var n=r(126);t.a=Object(n.a)("flex")},277:function(e,t,r){"use strict";r(125);var n=r(126);t.a=Object(n.a)("layout")},287:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(19),r(20),r(4),r(49),r(22)),c=r(36),f=r(31),l=r(25),d=r(13),y=r(24);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function O(e,t){j(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(r){j(e.prototype,t.prototype,r)})),Object.getOwnPropertyNames(t).forEach((function(r){j(e,t,r)}))}function j(e,t,r){(r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)}))}var _={__proto__:[]}instanceof Array;function R(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})}))};var data=new t;t.prototype._init=r;var n={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(n[e]=data[e])})),n}var x=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach((function(e){if("constructor"!==e)if(x.indexOf(e)>-1)t[e]=r[e];else{var n=Object.getOwnPropertyDescriptor(r,e);void 0!==n.value?"function"==typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){return h({},e,n.value)}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return R(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(e){return e(t)})),delete e.__decorators__);var c=Object.getPrototypeOf(e.prototype),f=c instanceof n.a?c.constructor:n.a,l=f.extend(t);return M(l,e,f),w()&&O(l,e),l}var P={prototype:!0,arguments:!0,callee:!0,caller:!0};function M(e,t,r){Object.getOwnPropertyNames(t).forEach((function(n){if(!P[n]){var o=Object.getOwnPropertyDescriptor(e,n);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(t,n);if(!_){if("cid"===n)return;var d=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,f=v(c),null!=c&&("object"===f||"function"===f)&&d&&d.value===l.value)return}0,Object.defineProperty(e,n,l)}}}))}function S(e){return"function"==typeof e?k(e):function(t){return k(t,e)}}S.registerHooks=function(e){x.push.apply(x,m(e))};var E=S;"undefined"!=typeof Reflect&&Reflect.getMetadata;function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var A=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},F=function(e){Object(f.a)(r,e);var t=N(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).randnum=0,e.showFarsi=!1,e.randnumFarsi="ANSWER!",e}return Object(c.a)(r,[{key:"mounted",value:function(){this.NewQuestion()}},{key:"clickShowAnswer",value:function(){return this.showFarsi=!0,!0}},{key:"NewQuestion",value:function(){return this.showFarsi=!1,this.randnum=Math.floor(Math.pow(10,8*Math.random())),this.randnumFarsi=this.farsiString(this.randnum,0),!0}},{key:"farsiString",value:function(e,t){if(0===t&&0===e)return"صفر";var r=Math.floor(e/1e3),n=this.handredString(e-1e3*r)+this.mstr(t),o=r>0?this.farsiString(r,t+1):"";return o+(o&&n?" و ":"")+n}},{key:"handredString",value:function(e){var t=Math.floor(e/100),r=e-100*t,n=this.hstr(t),o=this.bstr(r);return n+(n&&o?" و ":"")+o}},{key:"bstr",value:function(e){if(e<20)return this.cstr(e);var t=Math.floor(e/10),r=e-10*t,n=this.dstr(t),o=this.cstr(r);return n+(n&&o?" و ":"")+o}},{key:"mstr",value:function(e){switch(e){case 0:return"";case 1:return" هزار ";case 2:return" میایون "}return""}},{key:"hstr",value:function(e){switch(e){case 0:return"";case 1:return"صد";case 2:return"دویست";case 3:return"سیصد";case 4:return"چهارصد";case 5:return"پانصد";case 6:return"ششصد";case 7:return"هفتصد";case 8:return"هشتصد";case 9:return"نهصد"}return""}},{key:"dstr",value:function(e){switch(e){case 0:case 1:return"";case 2:return"بیست";case 3:return"سی";case 4:return"چهل";case 5:return"پنجاه";case 6:return"شصت";case 7:return"هفتاد";case 8:return"هشتاد";case 9:return"نود"}return""}},{key:"cstr",value:function(e){switch(e){case 0:return"";case 1:return"یک";case 2:return"دو";case 3:return"سه";case 4:return"چهار";case 5:return"پنج";case 6:return"شش";case 7:return"هفت";case 8:return"هشت";case 9:return"نه";case 10:return"ده";case 11:return"یازده";case 12:return"دوازده";case 13:return"شیزده";case 14:return"چهارده";case 15:return"پانزده";case 16:return"شانزده";case 17:return"هفده";case 18:return"هجده";case 19:return"نوزده"}return""}}]),r}(n.a),D=F=A([E({})],F),C=r(62),Q=r(84),V=r.n(Q),$=r(164),K=r(268),J=r(276),T=r(277),component=Object(C.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{on:{click:e.clickShowAnswer}},[e._v("show Answer")]),e._v(" "),r("v-btn",{on:{click:e.NewQuestion}},[e._v("new Question")])],1),e._v(" "),r("v-flex",{attrs:{xs12:"","display-3":""}},[e._v(e._s(e.randnum))]),e._v(" "),r("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.showFarsi,expression:"showFarsi"}],attrs:{xs12:"","display-2":""}},[e._v(e._s(e.randnumFarsi))])],1)],1)}),[],!1,null,null,null),B=component.exports;V()(component,{VBtn:$.a,VContainer:K.a,VFlex:J.a,VLayout:T.a});var H=n.a.extend({components:{FarsiNumber:B}}),I=Object(C.a)(H,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("FarsiNumber")],1)}),[],!1,null,null,null);t.default=I.exports}}]);