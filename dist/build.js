!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("sumFunction",[],e):"object"==typeof exports?exports.sumFunction=e():t.sumFunction=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var i=l++;r=d||(d=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),m.ssrId&&t.setAttribute(g,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(9),f={},p=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,l=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,m=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=f,c.render=function(t,e){return f.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:c}}},function(t,e,n){"use strict";e.a={name:"nh-button",props:{type:{type:String,default:"default",required:!1}},methods:{btnClick:function(t){this.$emit("click",t)}}}},function(t,e,n){"use strict";e.a={name:"nh-input",model:{event:"input",prop:"inputData"},props:{inputData:{type:[String,Number],default:""}},data:function(){return{}},methods:{handleInput:function(t){this.$emit("input",t)},handleChange:function(t){this.$emit("change",t)}}}},function(t,e,n){"use strict";function r(t){t.install=function(e){return e.component(t.name,t)}}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"all",function(){return s});var o=n(6),i=n(11);n.d(e,"nhButton",function(){return o.a}),n.d(e,"nhInput",function(){return i.a}),r(o.a),r(i.a);var a=[o.a,i.a],s={install:function(t){a.forEach(function(e){t.component(e.name,e)})}},u={};Object.assign(u,s,installedComponents)},function(t,e,n){"use strict";function r(t){n(7)}var o=n(3),i=n(10),a=n(2),s=r,u=a(o.a,i.a,!1,s,"data-v-5fef235a",null);e.a=u.exports},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("54ef0329",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:t+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nh-button"},[n("el-button",{attrs:{type:t.type},on:{click:t.btnClick}},[t._t("default",function(){return[t._v("暂无名字")]})],2)],1)},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";function r(t){n(12)}var o=n(4),i=n(14),a=n(2),s=r,u=a(o.a,i.a,!1,s,"data-v-f76bd5f4",null);e.a=u.exports},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("67c41292",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nh-button"},[n("el-input",{attrs:{value:t.inputData,placeholder:"请输入内容"},on:{input:t.handleInput,change:t.handleChange}})],1)},o=[],i={render:r,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=build.js.map