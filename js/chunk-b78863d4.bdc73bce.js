(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b78863d4"],{"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var i,s,a=String(o(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):i:t?a.slice(c,c+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0a06":function(t,e,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),s=n("5270"),a=n("4a7b");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method=t.method?t.method.toLowerCase():"get";var e=[s,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}})),t.exports=c},"0bf9":function(t,e,n){"use strict";var r=n("b413"),o=n.n(r);o.a},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"15a4":function(t,e,n){"use strict";var r=n("343a"),o=n.n(r);o.a},1834:function(t,e,n){"use strict";var r=n("1cca"),o=n.n(r);o.a},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i(t){var e=o.a.create({baseURL:"http://106.54.54.237:8000/api/v1",timeout:5e3});return e(t)}},"1cca":function(t,e,n){},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),o=n("32e9"),i=n("79e5"),s=n("be13"),a=n("2b4c"),c=n("520a"),u=a("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=a(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!f||"split"===t&&!l){var v=/./[d],m=n(s,d,""[t],(function(t,e,n,r,o){return e.exec===c?p&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=m[0],A=m[1];r(String.prototype,t,g),o(RegExp.prototype,d,2==e?function(t,e){return A.call(t,this,e)}:function(t){return A.call(t,this)})}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function a(){var t;return"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e)?t=n("b50d"):"undefined"!==typeof XMLHttpRequest&&(t=n("b50d")),t}var c={adapter:a(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(i)})),t.exports=c}).call(this,n("f28c"))},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"343a":function(t,e,n){},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3b2b":function(t,e,n){var r=n("7726"),o=n("5dbc"),i=n("86cc").f,s=n("9093").f,a=n("aae3"),c=n("0bfb"),u=r.RegExp,f=u,l=u.prototype,d=/a/g,p=/a/g,h=new u(d)!==d;if(n("9e1e")&&(!h||n("79e5")((function(){return p[n("2b4c")("match")]=!1,u(d)!=d||u(p)==p||"/a/i"!=u(d,"i")})))){u=function(t,e){var n=this instanceof u,r=a(t),i=void 0===e;return!n&&r&&t.constructor===u&&i?t:o(h?new f(r&&!i?t.source:t,e):f((r=t instanceof u)?t.source:t,r&&i?c.call(t):e),n?this:l,u)};for(var v=function(t){t in u||i(u,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},m=s(f),g=0;m.length>g;)v(m[g++]);l.constructor=u,u.prototype=l,n("2aba")(r,"RegExp",u)}n("7a56")("RegExp")},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={};return r.forEach(["url","method","params","data"],(function(t){"undefined"!==typeof e[t]&&(n[t]=e[t])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):"undefined"!==typeof e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):"undefined"!==typeof t[o]&&(n[o]=t[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){"undefined"!==typeof e[r]?n[r]=e[r]:"undefined"!==typeof t[r]&&(n[r]=t[r])})),n}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,s=o,a="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],f=c||u;f&&(s=function(t){var e,n,s,f,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),c&&(e=l[a]),s=o.call(l,t),c&&s&&(l[a]=l.global?s.index+s[0].length:e),u&&s&&s.length>1&&i.call(s[0],n,(function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(s[f]=void 0)})),s}),t.exports=s},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444"),a=n("d925"),c=n("e683");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"53cc":function(t,e,n){},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6d71":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t){return n("goods-list-item",{key:t.value,attrs:{"goods-item":t}})})),1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],attrs:{alt:""},on:{load:t.itemImageLoad}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"cfav"},[t._v(t._s(t.goodsItem.cfav))])])])},s=[],a={name:"GoodsListItem",components:{},props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{itemImageLoad:function(){this.$bus.$emit("itemImageLoad")},itemClick:function(){this.$router.push("/detail/"+this.goodsItem.iid)}}},c=a,u=(n("1834"),n("2877")),f=Object(u["a"])(c,i,s,!1,null,"67cb0ca3",null),l=f.exports,d={name:"GoodsList",components:{GoodsListItem:l},props:{goods:{type:Array,default:function(){return[]}}}},p=d,h=(n("f166"),Object(u["a"])(p,r,o,!1,null,"1b5c4f9e",null));e["a"]=h.exports},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},"95fe":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("3b2b"),n("a481");function r(t,e){var n=null;return function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n&&clearInterval(n),n=setTimeout((function(){t.apply(r,i)}),e)}}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var o=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:i(o))}return e}function i(t){return("00"+t).substr(t.length)}},a481:function(t,e,n){"use strict";var r=n("cb7c"),o=n("4bf8"),i=n("9def"),s=n("4588"),a=n("0390"),c=n("5f1b"),u=Math.max,f=Math.min,l=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,v){return[function(r,o){var i=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=v(n,t,this,e);if(o.done)return o.value;var l=r(t),d=String(this),p="function"===typeof e;p||(e=String(e));var g=l.global;if(g){var A=l.unicode;l.lastIndex=0}var b=[];while(1){var y=c(l,d);if(null===y)break;if(b.push(y),!g)break;var x=String(y[0]);""===x&&(l.lastIndex=a(d,i(l.lastIndex),A))}for(var w="",E=0,T=0;T<b.length;T++){y=b[T];for(var C=String(y[0]),R=u(f(s(y.index),d.length),0),S=[],D=1;D<y.length;D++)S.push(h(y[D]));var P=y.groups;if(p){var j=[C].concat(S,R,d);void 0!==P&&j.push(P);var I=String(e.apply(void 0,j))}else I=m(C,d,R,S,P,e);R>=E&&(w+=d.slice(E,R)+I,E=R+C.length)}return w+d.slice(E)}];function m(t,e,r,i,s,a){var c=r+t.length,u=i.length,f=p;return void 0!==s&&(s=o(s),f=d),n.call(a,f,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":a=s[o.slice(1,-1)];break;default:var f=+o;if(0===f)return n;if(f>u){var d=l(f/10);return 0===d?n:d<=u?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):n}a=i[f-1]}return void 0===a?"":a}))}}))},aae3:function(t,e,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b14c:function(t,e,n){"use strict";var r=n("c3d7"),o=n.n(r);o.a},b413:function(t,e,n){},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("c345"),a=n("3934"),c=n("2d83");t.exports=function(t){return new Promise((function(e,u){var f=t.data,l=t.headers;r.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",h=t.auth.password||"";l.Authorization="Basic "+btoa(p+":"+h)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,u,i),d=null}},d.onabort=function(){d&&(u(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n("7aac"),m=(t.withCredentials||a(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;m&&(l[t.xsrfHeaderName]=m)}if("setRequestHeader"in d&&r.forEach(l,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)})),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(g){if("json"!==t.responseType)throw g}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),u(t),d=null)})),void 0===f&&(f=null),d.send(f)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},c3d7:function(t,e,n){},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=n("c7ce"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function a(t){return"[object ArrayBuffer]"===i.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function l(t){return"number"===typeof t}function d(t){return"undefined"===typeof t}function p(t){return null!==t&&"object"===typeof t}function h(t){return"[object Date]"===i.call(t)}function v(t){return"[object File]"===i.call(t)}function m(t){return"[object Blob]"===i.call(t)}function g(t){return"[object Function]"===i.call(t)}function A(t){return p(t)&&g(t.pipe)}function b(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function E(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]=e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function T(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=T(t[n],e):t[n]="object"===typeof e?T({},e):e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function C(t,e,n){return w(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}t.exports={isArray:s,isArrayBuffer:a,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:l,isObject:p,isUndefined:d,isDate:h,isFile:v,isBlob:m,isFunction:g,isStream:A,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:w,merge:E,deepMerge:T,extend:C,trim:y}},c7ce:function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("4a7b"),a=n("2444");function c(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=c(a);u.Axios=i,u.create=function(t){return c(s(u.defaults,t))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(t){return Promise.all(t)},u.spread=n("0df6"),t.exports=u,t.exports.default=u},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dc2c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,r){return n("div",{key:r,staticClass:"indi-item",class:{active:r===t.currentIndex-1}})}))):t._e()],2)],2)},o=[],i=(n("c5f6"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,a=(n("15a4"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,"69349c3b",null),u=c.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},l=[],d={name:"Slide"},p=d,h=(n("b14c"),Object(a["a"])(p,f,l,!1,null,"4935a4a7",null)),v=h.exports;n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return v}))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},eecb:function(t,e,n){"use strict";var r=n("95fe"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-top"},[r("img",{attrs:{src:n("684a")}})])}],s={name:"BackTop",components:{}},a=s,c=(n("0bf9"),n("2877")),u=Object(c["a"])(a,o,i,!1,null,"f4c17a94",null),f=u.exports;n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var l={mounted:function(){var t=Object(r["a"])(this.$refs.scroll.refresh,100);this.itemListener=function(){t()},this.$bus.$on("itemImageLoad",this.itemListener)}},d={components:{BackTop:f},data:function(){return{isShowBackTop:!1}},methods:{backClick:function(){this.$refs.scroll.scrollTo(0,0,300)},listenShopBack:function(t){this.isShowBackTop=-t.y>1e3}}}},f166:function(t,e,n){"use strict";var r=n("53cc"),o=n.n(r);o.a},f28c:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function c(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}})();var u,f=[],l=!1,d=-1;function p(){l&&u&&(l=!1,u.length?f=u.concat(f):d=-1,f.length&&h())}function h(){if(!l){var t=a(p);l=!0;var e=f.length;while(e){u=f,f=[];while(++d<e)u&&u[d].run();d=-1,e=f.length}u=null,l=!1,c(t)}}function v(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new v(t,e)),1!==f.length||l||a(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);
//# sourceMappingURL=chunk-b78863d4.bdc73bce.js.map