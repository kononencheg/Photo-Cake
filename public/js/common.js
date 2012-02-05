/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*
 * jQuery UI Datepicker 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */(function($,undefined){function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);!c.length||c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);!$.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])&&!!d.length&&(d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover"))})}function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend($.ui,{datepicker:{version:"1.8.17"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){extendRemove(this._defaults,a||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){$.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._showDatepicker(a[0]);return!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f);return this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if(!$.datepicker._isDisabledDatepicker(a)&&$.datepicker._lastInput!=a){var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){e|=$(this).css("position")=="fixed";return!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0);return b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=$.data(a,PROP_NAME))&&this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=this,f=function(){$.datepicker._tidyDialog(b),e._curInst=null};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,f):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,f),c||f(),this._datepickerShowing=!1;var g=this._get(b,"onClose");g&&g.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!!$.datepicker._curInst){var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);this._isDisabledDatepicker(d[0])||(this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if(!$(d).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(e[0])){var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(0),b.setDate(1);return Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;c&&s++;return c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;r+=f[0].length;return parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase()){f=c[0],r+=d.length;return!1}});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;for(;;){var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;c&&m++;return c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;c&&e++;return c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;b.setDate(b.getDate()+a);return b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0));return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1;return K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this
._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>";return l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;e=d&&e>d?d:e;return e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth()));return this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));return this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)})},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.17",window["DP_jQuery_"+dpuuid]=$})(jQuery);/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compilers the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject = function() {
	
	var UNDEF = "undefined",
		OBJECT = "object",
		SHOCKWAVE_FLASH = "Shockwave Flash",
		SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
		FLASH_MIME_TYPE = "application/x-shockwave-flash",
		EXPRESS_INSTALL_ID = "SWFObjectExprInst",
		ON_READY_STATE_CHANGE = "onreadystatechange",
		
		win = window,
		doc = document,
		nav = navigator,
		
		plugin = false,
		domLoadFnArr = [main],
		regObjArr = [],
		objIdArr = [],
		listenersArr = [],
		storedAltContent,
		storedAltContentId,
		storedCallbackFn,
		storedCallbackObj,
		isDomLoaded = false,
		isExpressInstallActive = false,
		dynamicStylesheet,
		dynamicStylesheetMedia,
		autoHideShow = true,
	
	/* Centralized function for browser feature detection
		- User agent string detection is only used when no good alternative is possible
		- Is executed directly for optimal performance
	*/	
	ua = function() {
		var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
			u = nav.userAgent.toLowerCase(),
			p = nav.platform.toLowerCase(),
			windows = p ? /win/.test(p) : /win/.test(u),
			mac = p ? /mac/.test(p) : /mac/.test(u),
			webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
			ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
			playerVersion = [0,0,0],
			d = null;
		if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
			d = nav.plugins[SHOCKWAVE_FLASH].description;
			if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
				plugin = true;
				ie = false; // cascaded feature detection for Internet Explorer
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
				playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
			}
		}
		else if (typeof win.ActiveXObject != UNDEF) {
			try {
				var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) { // a will return null when ActiveX is disabled
					d = a.GetVariable("$version");
					if (d) {
						ie = true; // cascaded feature detection for Internet Explorer
						d = d.split(" ")[1].split(",");
						playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
			}
			catch(e) {}
		}
		return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
	}(),
	
	/* Cross-browser onDomLoad
		- Will fire an event as soon as the DOM of a web page is loaded
		- Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
		- Regular onload serves as fallback
	*/ 
	onDomLoad = function() {
		if (!ua.w3) { return; }
		if ((typeof doc.readyState != UNDEF && doc.readyState == "complete") || (typeof doc.readyState == UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically 
			callDomLoadFunctions();
		}
		if (!isDomLoaded) {
			if (typeof doc.addEventListener != UNDEF) {
				doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
			}		
			if (ua.ie && ua.win) {
				doc.attachEvent(ON_READY_STATE_CHANGE, function() {
					if (doc.readyState == "complete") {
						doc.detachEvent(ON_READY_STATE_CHANGE, arguments.callee);
						callDomLoadFunctions();
					}
				});
				if (win == top) { // if not inside an iframe
					(function(){
						if (isDomLoaded) { return; }
						try {
							doc.documentElement.doScroll("left");
						}
						catch(e) {
							setTimeout(arguments.callee, 0);
							return;
						}
						callDomLoadFunctions();
					})();
				}
			}
			if (ua.wk) {
				(function(){
					if (isDomLoaded) { return; }
					if (!/loaded|complete/.test(doc.readyState)) {
						setTimeout(arguments.callee, 0);
						return;
					}
					callDomLoadFunctions();
				})();
			}
			addLoadEvent(callDomLoadFunctions);
		}
	}();
	
	function callDomLoadFunctions() {
		if (isDomLoaded) { return; }
		try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
			var t = doc.getElementsByTagName("body")[0].appendChild(createElement("span"));
			t.parentNode.removeChild(t);
		}
		catch (e) { return; }
		isDomLoaded = true;
		var dl = domLoadFnArr.length;
		for (var i = 0; i < dl; i++) {
			domLoadFnArr[i]();
		}
	}
	
	function addDomLoadEvent(fn) {
		if (isDomLoaded) {
			fn();
		}
		else { 
			domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
		}
	}
	
	/* Cross-browser onload
		- Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
		- Will fire an event as soon as a web page including all of its assets are loaded 
	 */
	function addLoadEvent(fn) {
		if (typeof win.addEventListener != UNDEF) {
			win.addEventListener("load", fn, false);
		}
		else if (typeof doc.addEventListener != UNDEF) {
			doc.addEventListener("load", fn, false);
		}
		else if (typeof win.attachEvent != UNDEF) {
			addListener(win, "onload", fn);
		}
		else if (typeof win.onload == "function") {
			var fnOld = win.onload;
			win.onload = function() {
				fnOld();
				fn();
			};
		}
		else {
			win.onload = fn;
		}
	}
	
	/* Main function
		- Will preferably execute onDomLoad, otherwise onload (as a fallback)
	*/
	function main() { 
		if (plugin) {
			testPlayerVersion();
		}
		else {
			matchVersions();
		}
	}
	
	/* Detect the Flash Player version for non-Internet Explorer browsers
		- Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
		  a. Both release and build numbers can be detected
		  b. Avoid wrong descriptions by corrupt installers provided by Adobe
		  c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
		- Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
	*/
	function testPlayerVersion() {
		var b = doc.getElementsByTagName("body")[0];
		var o = createElement(OBJECT);
		o.setAttribute("type", FLASH_MIME_TYPE);
		var t = b.appendChild(o);
		if (t) {
			var counter = 0;
			(function(){
				if (typeof t.GetVariable != UNDEF) {
					var d = t.GetVariable("$version");
					if (d) {
						d = d.split(" ")[1].split(",");
						ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
				else if (counter < 10) {
					counter++;
					setTimeout(arguments.callee, 10);
					return;
				}
				b.removeChild(o);
				t = null;
				matchVersions();
			})();
		}
		else {
			matchVersions();
		}
	}
	
	/* Perform Flash Player and SWF version matching; static publishing only
	*/
	function matchVersions() {
		var rl = regObjArr.length;
		if (rl > 0) {
			for (var i = 0; i < rl; i++) { // for each registered object element
				var id = regObjArr[i].id;
				var cb = regObjArr[i].callbackFn;
				var cbObj = {success:false, id:id};
				if (ua.pv[0] > 0) {
					var obj = getElementById(id);
					if (obj) {
						if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
							setVisibility(id, true);
							if (cb) {
								cbObj.success = true;
								cbObj.ref = getObjectById(id);
								cb(cbObj);
							}
						}
						else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
							var att = {};
							att.data = regObjArr[i].expressInstall;
							att.width = obj.getAttribute("width") || "0";
							att.height = obj.getAttribute("height") || "0";
							if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
							if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
							// parse HTML object param element's name-value pairs
							var par = {};
							var p = obj.getElementsByTagName("param");
							var pl = p.length;
							for (var j = 0; j < pl; j++) {
								if (p[j].getAttribute("name").toLowerCase() != "movie") {
									par[p[j].getAttribute("name")] = p[j].getAttribute("value");
								}
							}
							showExpressInstall(att, par, id, cb);
						}
						else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display alternative content instead of SWF
							displayAltContent(obj);
							if (cb) { cb(cbObj); }
						}
					}
				}
				else {	// if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or alternative content)
					setVisibility(id, true);
					if (cb) {
						var o = getObjectById(id); // test whether there is an HTML object element or not
						if (o && typeof o.SetVariable != UNDEF) { 
							cbObj.success = true;
							cbObj.ref = o;
						}
						cb(cbObj);
					}
				}
			}
		}
	}
	
	function getObjectById(objectIdStr) {
		var r = null;
		var o = getElementById(objectIdStr);
		if (o && o.nodeName == "OBJECT") {
			if (typeof o.SetVariable != UNDEF) {
				r = o;
			}
			else {
				var n = o.getElementsByTagName(OBJECT)[0];
				if (n) {
					r = n;
				}
			}
		}
		return r;
	}
	
	/* Requirements for Adobe Express Install
		- only one instance can be active at a time
		- fp 6.0.65 or higher
		- Win/Mac OS only
		- no Webkit engines older than version 312
	*/
	function canExpressInstall() {
		return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
	}
	
	/* Show the Adobe Express Install dialog
		- Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
	*/
	function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
		isExpressInstallActive = true;
		storedCallbackFn = callbackFn || null;
		storedCallbackObj = {success:false, id:replaceElemIdStr};
		var obj = getElementById(replaceElemIdStr);
		if (obj) {
			if (obj.nodeName == "OBJECT") { // static publishing
				storedAltContent = abstractAltContent(obj);
				storedAltContentId = null;
			}
			else { // dynamic publishing
				storedAltContent = obj;
				storedAltContentId = replaceElemIdStr;
			}
			att.id = EXPRESS_INSTALL_ID;
			if (typeof att.width == UNDEF || (!/%$/.test(att.width) && parseInt(att.width, 10) < 310)) { att.width = "310"; }
			if (typeof att.height == UNDEF || (!/%$/.test(att.height) && parseInt(att.height, 10) < 137)) { att.height = "137"; }
			doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
			var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
				fv = "MMredirectURL=" + win.location.toString().replace(/&/g,"%26") + "&MMplayerType=" + pt + "&MMdoctitle=" + doc.title;
			if (typeof par.flashvars != UNDEF) {
				par.flashvars += "&" + fv;
			}
			else {
				par.flashvars = fv;
			}
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			if (ua.ie && ua.win && obj.readyState != 4) {
				var newObj = createElement("div");
				replaceElemIdStr += "SWFObjectNew";
				newObj.setAttribute("id", replaceElemIdStr);
				obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						obj.parentNode.removeChild(obj);
					}
					else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			createSWF(att, par, replaceElemIdStr);
		}
	}
	
	/* Functions to abstract and display alternative content
	*/
	function displayAltContent(obj) {
		if (ua.ie && ua.win && obj.readyState != 4) {
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			var el = createElement("div");
			obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the alternative content
			el.parentNode.replaceChild(abstractAltContent(obj), el);
			obj.style.display = "none";
			(function(){
				if (obj.readyState == 4) {
					obj.parentNode.removeChild(obj);
				}
				else {
					setTimeout(arguments.callee, 10);
				}
			})();
		}
		else {
			obj.parentNode.replaceChild(abstractAltContent(obj), obj);
		}
	} 

	function abstractAltContent(obj) {
		var ac = createElement("div");
		if (ua.win && ua.ie) {
			ac.innerHTML = obj.innerHTML;
		}
		else {
			var nestedObj = obj.getElementsByTagName(OBJECT)[0];
			if (nestedObj) {
				var c = nestedObj.childNodes;
				if (c) {
					var cl = c.length;
					for (var i = 0; i < cl; i++) {
						if (!(c[i].nodeType == 1 && c[i].nodeName == "PARAM") && !(c[i].nodeType == 8)) {
							ac.appendChild(c[i].cloneNode(true));
						}
					}
				}
			}
		}
		return ac;
	}
	
	/* Cross-browser dynamic SWF creation
	*/
	function createSWF(attObj, parObj, id) {
		var r, el = getElementById(id);
		if (ua.wk && ua.wk < 312) { return r; }
		if (el) {
			if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
				attObj.id = id;
			}
			if (ua.ie && ua.win) { // Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
				var att = "";
				for (var i in attObj) {
					if (attObj[i] != Object.prototype[i]) { // filter out prototype additions from other potential libraries
						if (i.toLowerCase() == "data") {
							parObj.movie = attObj[i];
						}
						else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							att += ' class="' + attObj[i] + '"';
						}
						else if (i.toLowerCase() != "classid") {
							att += ' ' + i + '="' + attObj[i] + '"';
						}
					}
				}
				var par = "";
				for (var j in parObj) {
					if (parObj[j] != Object.prototype[j]) { // filter out prototype additions from other potential libraries
						par += '<param name="' + j + '" value="' + parObj[j] + '" />';
					}
				}
				el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
				objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
				r = getElementById(attObj.id);	
			}
			else { // well-behaving browsers
				var o = createElement(OBJECT);
				o.setAttribute("type", FLASH_MIME_TYPE);
				for (var m in attObj) {
					if (attObj[m] != Object.prototype[m]) { // filter out prototype additions from other potential libraries
						if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							o.setAttribute("class", attObj[m]);
						}
						else if (m.toLowerCase() != "classid") { // filter out IE specific attribute
							o.setAttribute(m, attObj[m]);
						}
					}
				}
				for (var n in parObj) {
					if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // filter out prototype additions from other potential libraries and IE specific param element
						createObjParam(o, n, parObj[n]);
					}
				}
				el.parentNode.replaceChild(o, el);
				r = o;
			}
		}
		return r;
	}
	
	function createObjParam(el, pName, pValue) {
		var p = createElement("param");
		p.setAttribute("name", pName);	
		p.setAttribute("value", pValue);
		el.appendChild(p);
	}
	
	/* Cross-browser SWF removal
		- Especially needed to safely and completely remove a SWF in Internet Explorer
	*/
	function removeSWF(id) {
		var obj = getElementById(id);
		if (obj && obj.nodeName == "OBJECT") {
			if (ua.ie && ua.win) {
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						removeObjectInIE(id);
					}
					else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			else {
				obj.parentNode.removeChild(obj);
			}
		}
	}
	
	function removeObjectInIE(id) {
		var obj = getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}
	}
	
	/* Functions to optimize JavaScript compression
	*/
	function getElementById(id) {
		var el = null;
		try {
			el = doc.getElementById(id);
		}
		catch (e) {}
		return el;
	}
	
	function createElement(el) {
		return doc.createElement(el);
	}
	
	/* Updated attachEvent function for Internet Explorer
		- Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
	*/	
	function addListener(target, eventType, fn) {
		target.attachEvent(eventType, fn);
		listenersArr[listenersArr.length] = [target, eventType, fn];
	}
	
	/* Flash Player and SWF content version matching
	*/
	function hasPlayerVersion(rv) {
		var pv = ua.pv, v = rv.split(".");
		v[0] = parseInt(v[0], 10);
		v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
		v[2] = parseInt(v[2], 10) || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	}
	
	/* Cross-browser dynamic CSS creation
		- Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
	*/	
	function createCSS(sel, decl, media, newStyle) {
		if (ua.ie && ua.mac) { return; }
		var h = doc.getElementsByTagName("head")[0];
		if (!h) { return; } // to also support badly authored HTML pages that lack a head element
		var m = (media && typeof media == "string") ? media : "screen";
		if (newStyle) {
			dynamicStylesheet = null;
			dynamicStylesheetMedia = null;
		}
		if (!dynamicStylesheet || dynamicStylesheetMedia != m) { 
			// create dynamic stylesheet + get a global reference to it
			var s = createElement("style");
			s.setAttribute("type", "text/css");
			s.setAttribute("media", m);
			dynamicStylesheet = h.appendChild(s);
			if (ua.ie && ua.win && typeof doc.styleSheets != UNDEF && doc.styleSheets.length > 0) {
				dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
			}
			dynamicStylesheetMedia = m;
		}
		// add style rule
		if (ua.ie && ua.win) {
			if (dynamicStylesheet && typeof dynamicStylesheet.addRule == OBJECT) {
				dynamicStylesheet.addRule(sel, decl);
			}
		}
		else {
			if (dynamicStylesheet && typeof doc.createTextNode != UNDEF) {
				dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
			}
		}
	}
	
	function setVisibility(id, isVisible) {
		if (!autoHideShow) { return; }
		var v = isVisible ? "visible" : "hidden";
		if (isDomLoaded && getElementById(id)) {
			getElementById(id).style.visibility = v;
		}
		else {
			createCSS("#" + id, "visibility:" + v);
		}
	}

	/* Filter to avoid XSS attacks
	*/
	function urlEncodeIfNecessary(s) {
		var regex = /[\\\"<>\.;]/;
		var hasBadChars = regex.exec(s) != null;
		return hasBadChars && typeof encodeURIComponent != UNDEF ? encodeURIComponent(s) : s;
	}
	
	/* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
	*/
	var cleanup = function() {
		if (ua.ie && ua.win) {
			window.attachEvent("onunload", function() {
				// remove listeners to avoid memory leaks
				var ll = listenersArr.length;
				for (var i = 0; i < ll; i++) {
					listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
				}
				// cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
				var il = objIdArr.length;
				for (var j = 0; j < il; j++) {
					removeSWF(objIdArr[j]);
				}
				// cleanup library's main closures to avoid memory leaks
				for (var k in ua) {
					ua[k] = null;
				}
				ua = null;
				for (var l in swfobject) {
					swfobject[l] = null;
				}
				swfobject = null;
			});
		}
	}();
	
	return {
		/* Public api
			- Reference: http://code.google.com/p/swfobject/wiki/documentation
		*/ 
		registerObject: function(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
			if (ua.w3 && objectIdStr && swfVersionStr) {
				var regObj = {};
				regObj.id = objectIdStr;
				regObj.swfVersion = swfVersionStr;
				regObj.expressInstall = xiSwfUrlStr;
				regObj.callbackFn = callbackFn;
				regObjArr[regObjArr.length] = regObj;
				setVisibility(objectIdStr, false);
			}
			else if (callbackFn) {
				callbackFn({success:false, id:objectIdStr});
			}
		},
		
		getObjectById: function(objectIdStr) {
			if (ua.w3) {
				return getObjectById(objectIdStr);
			}
		},
		
		embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {
			var callbackObj = {success:false, id:replaceElemIdStr};
			if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
				setVisibility(replaceElemIdStr, false);
				addDomLoadEvent(function() {
					widthStr += ""; // auto-convert to string
					heightStr += "";
					var att = {};
					if (attObj && typeof attObj === OBJECT) {
						for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
							att[i] = attObj[i];
						}
					}
					att.data = swfUrlStr;
					att.width = widthStr;
					att.height = heightStr;
					var par = {}; 
					if (parObj && typeof parObj === OBJECT) {
						for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
							par[j] = parObj[j];
						}
					}
					if (flashvarsObj && typeof flashvarsObj === OBJECT) {
						for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
							if (typeof par.flashvars != UNDEF) {
								par.flashvars += "&" + k + "=" + flashvarsObj[k];
							}
							else {
								par.flashvars = k + "=" + flashvarsObj[k];
							}
						}
					}
					if (hasPlayerVersion(swfVersionStr)) { // create SWF
						var obj = createSWF(att, par, replaceElemIdStr);
						if (att.id == replaceElemIdStr) {
							setVisibility(replaceElemIdStr, true);
						}
						callbackObj.success = true;
						callbackObj.ref = obj;
					}
					else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
						att.data = xiSwfUrlStr;
						showExpressInstall(att, par, replaceElemIdStr, callbackFn);
						return;
					}
					else { // show alternative content
						setVisibility(replaceElemIdStr, true);
					}
					if (callbackFn) { callbackFn(callbackObj); }
				});
			}
			else if (callbackFn) { callbackFn(callbackObj);	}
		},
		
		switchOffAutoHideShow: function() {
			autoHideShow = false;
		},
		
		ua: ua,
		
		getFlashPlayerVersion: function() {
			return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
		},
		
		hasFlashPlayerVersion: hasPlayerVersion,
		
		createSWF: function(attObj, parObj, replaceElemIdStr) {
			if (ua.w3) {
				return createSWF(attObj, parObj, replaceElemIdStr);
			}
			else {
				return undefined;
			}
		},
		
		showExpressInstall: function(att, par, replaceElemIdStr, callbackFn) {
			if (ua.w3 && canExpressInstall()) {
				showExpressInstall(att, par, replaceElemIdStr, callbackFn);
			}
		},
		
		removeSWF: function(objElemIdStr) {
			if (ua.w3) {
				removeSWF(objElemIdStr);
			}
		},
		
		createCSS: function(selStr, declStr, mediaStr, newStyleBoolean) {
			if (ua.w3) {
				createCSS(selStr, declStr, mediaStr, newStyleBoolean);
			}
		},
		
		addDomLoadEvent: addDomLoadEvent,
		
		addLoadEvent: addLoadEvent,
		
		getQueryParamValue: function(param) {
			var q = doc.location.search || doc.location.hash;
			if (q) {
				if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
				if (param == null) {
					return urlEncodeIfNecessary(q);
				}
				var pairs = q.split("&");
				for (var i = 0; i < pairs.length; i++) {
					if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
						return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
					}
				}
			}
			return "";
		},
		
		// For internal usage only
		expressInstallCallback: function() {
			if (isExpressInstallActive) {
				var obj = getElementById(EXPRESS_INSTALL_ID);
				if (obj && storedAltContent) {
					obj.parentNode.replaceChild(storedAltContent, obj);
					if (storedAltContentId) {
						setVisibility(storedAltContentId, true);
						if (ua.ie && ua.win) { storedAltContent.style.display = "block"; }
					}
					if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
				}
				isExpressInstallActive = false;
			} 
		}
	};
}();
/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */


/**
 * @namespace Глобальная область имен.
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @const
 * @type string
 */
tuna.VERSION = '3.2.70';

/**
 * Является ли текущий браузер IE.
 *
 * @const
 * @type boolean
 */
tuna.IS_IE = !!eval("'\v' == 'v'");

/**
 * @namespace
 */
tuna.dom = {};

/**
 * @namespace
 */
tuna.events = {};

/**
 * @namespace
 */
tuna.model = {};

/**
 * @namespace
 */
tuna.net = {};

/**
 * @namespace
 */
tuna.rest = {};

/**
 * @namespace
 */
tuna.tmpl = {};

/**
 * @namespace
 */
tuna.tmpl.compilers = {};

/**
 * @namespace
 */
tuna.tmpl.data = {};

/**
 * @namespace
 */
tuna.tmpl.markup = {};

/**
 * @namespace
 */
tuna.tmpl.settings = {};

/**
 * @namespace
 */
tuna.tmpl.units = {};

/**
 * @namespace
 */
tuna.ui = {};

/**
 * @namespace
 */
tuna.ui.containers = {};

/**
 * @namespace
 */
tuna.ui.forms = {};

/**
 * @namespace
 */
tuna.ui.popups = {};

/**
 * @namespace
 */
tuna.ui.modules = {};

/**
 * @namespace
 */
tuna.ui.selection = {};

/**
 * @namespace
 */
tuna.ui.selection.items = {};

/**
 * @namespace
 */
tuna.ui.selection.rule = {};

/**
 * @namespace
 */
tuna.ui.selection.view = {};

/**
 * @namespace
 */
tuna.utils = {};

/**
 * @namespace
 */
tuna.view = {};


/**
 * Convert array-like object to array.
 *
 * @param {Object} list Array-like object.
 * @return {Array} Converted array.
 */
tuna.utils.toArray = function(list) {
    return Array.prototype.slice.call(list);
};

/**
 * Объявление реализации интерфейса.
 *
 * Добавление либо замена (уже существующих) методов прототипа класса
 * 'интерфейса', неоходимое для оповещения о не реализованных методах.
 *
 * При объявлении интерфейса в каждом объявленном методе следует
 * генерировать ошибку типа <code>InterfaceMethodError</code>.
 *
 * Данную функцию следует вызывать перез вызовом функции
 * <code>tuna.utils.extend</code>.
 *
 * @param {!Object} Class Класс который должен реализовать интерфейс.
 * @param {!Object} Interface Класс "интерфейс" для реализации.
 * @nosideeffects
 */
tuna.utils.implement = function(Class, Interface) {
    for (var method in Interface.prototype) {
        if (typeof Interface.prototype[method] === 'function') {
            Class.prototype[method] = Interface.prototype[method];
        }
    }
};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на
 * него, сохраняя конструктор.
 *
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
tuna.utils.extend = function(Class, Parent) {
    /**
     * @constructor
     */
    var Link = function() {};
    Link.prototype = Parent.prototype;

    Class.prototype = new Link();
    Class.prototype.constructor = Class;
};

/**
 * Функция выполнения строки JavaScript кода в глобальной области имен.
 *
 * Не следует использовать нигде в логике приложенния.
 *
 * @param {!string} code Строка кода.
 * @return {*} Результат выполнения.
 * @deprecated
 */
tuna.utils.eval = function(code) {
    return (window.execScript !== undefined) ?
            window.execScript(code) : window.eval(code);
};

/**
 * Привязывание определенного контекста к функции или методу.
 *
 * @param {!Function} func
 * @param {Object} context
 */
tuna.utils.bind = function(func, context) {
    if (func.bind !== undefined) {
        return func.bind(context);
    } else {
        var args = Array.prototype.slice.call(arguments, 2);

        return function() {
            return func.apply
                (context, args.concat(tuna.utils.toArray(arguments)));
        };
    }
};

/**
 * Отложенное выполнение метода. Д
 *
 * @param {!Function} callback
 */
tuna.utils.nextTick = function(callback) {
    setTimeout(callback, 0);
};

/**
 * Клонирование объекта.
 *
 * @param {*} object
 * @param {Array=} clones
 */
tuna.utils.clone = function(object, clones) {
    if (object instanceof Array) {
        return tuna.utils.cloneArray(object);
    } else if (object instanceof Date) {
        return tuna.utils.cloneDate(object);
    } else if (object instanceof Object) {
        if (clones === undefined) {
            clones = [object];
        } else {
            clones.push(object);
        }

        var result = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (tuna.utils.indexOf(object[key], clones) === -1) {
                    result[key] = tuna.utils.clone(object[key]);
                } else {
                    throw new TypeError('Cloning circular structure');
                }
            }
        }

        return result;
    }

    return object;
};

/**
 * Клонирование даты.
 *
 * @param {Date} date
 */
tuna.utils.cloneDate = function(date) {
    return new Date(date.getTime());
};

/**
 * Клонирование массива.
 *
 * @param {Array} array
 */
tuna.utils.cloneArray = function(array) {
    return array.slice(0);
};

/**
 * Поиск индекса объекта в массиве.
 *
 * @param {*} element
 * @param {Array} array
 */
tuna.utils.indexOf = function(element, array) {
    if (array.indexOf !== undefined) {
        return array.indexOf(element);
    } else {
        var i = 0,
            l = array.length;

        while (i < l) {
            if (array[i] === element) {
                return i;
            }

            i++;
        }
    }

    return -1;
};
/**
 * @constructor
 */
var Config = function() {

    /**
     * @private
     * @type {Object.<string, string>}
     */
    this.__data = null;
};

/**
 * @param {!Object.<string, string>} data
 */
Config.prototype.init = function(data) {
    this.__data = data;
};

/**
 *
 * @param {!string} key
 * @return {?string}
 */
Config.prototype.get = function(key) {
    if (this.__data[key] !== undefined) {
        return this.__data[key];
    }

    return null;
};

tuna.utils.сonfig = new Config();


/**
 * @interface
 */
var IEventDispatcher = function() {};

/**
 * @param {!tuna.events.BasicEvent|!string} event
 * @param {*=} data
 * @return {boolean}
 */
IEventDispatcher.prototype.dispatch = function(event, data) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.addEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.removeEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 * @return {boolean}
 */
IEventDispatcher.prototype.hasEventListener = function(type, listener) {};

/**
 * @interface
 * @extends {IEventDispatcher}
 */
tuna.events.IEventDispatcher = IEventDispatcher;
/**
 * @constructor
 * @implements tuna.events.IEventDispatcher
 * @param {tuna.events.IEventDispatcher=} parent
 */
var EventDispatcher = function(parent) {

    /**
     * @protected
     * @type {tuna.events.IEventDispatcher}
     */
    this._propagationParent = parent || null;

    /**
     * @protected
     * @type {Object.<string, Array.<function(tuna.events.BasicEvent, *)>>}
     */
    this._listeners = {};
};

tuna.utils.implement(EventDispatcher, tuna.events.IEventDispatcher);

/**
 * @override
 */
EventDispatcher.prototype.dispatch = function(event, data) {
    if (!(event instanceof tuna.events.BasicEvent)) {
        event = new tuna.events.BasicEvent(event);
    }

    var type = event.getType();

    if (this._listeners[type] !== undefined) {
        if (event.getTarget() === null) {
            event.setTarget(this);
        }

        var i = 0,
            l = this._listeners[type].length;

        while (i < l) {
            this._listeners[type][i].call(this, event, data);

            if (event.isImmediatePropagationStopped()) {
                break;
            }

            i++;
        }

        if (this._propagationParent !== null &&
            event.isBubbling() && !event.isPropagationStopped()) {

            this._propagationParent.dispatch(event);
        }
    }

    return !event.isDefaultPrevented();
};

/**
 * @override
 */
EventDispatcher.prototype.addEventListener = function(type, listener) {
    if (this._listeners[type] === undefined) {
        this._listeners[type] = [listener];
    } else if (!this.hasEventListener(type, listener)) {
        this._listeners[type].push(listener);
    }
};

/**
 * @override
 */
EventDispatcher.prototype.removeEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        var listenerIndex
            = tuna.utils.indexOf(listener, this._listeners[type]);

        if (listenerIndex !== -1) {
            this._listeners[type].splice(listenerIndex, 1);
        }
    }
};

/**
 * @override
 */
EventDispatcher.prototype.hasEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        return tuna.utils.indexOf(listener, this._listeners[type]) !== -1;
    }

    return false;
};

/**
 * @constructor
 * @extends {EventDispatcher}
 */
tuna.events.EventDispatcher = EventDispatcher;
/**
 * @constructor
 * @param {!string} type
 * @param {boolean=} isBubbling
 */
var BasicEvent = function(type, isBubbling) {

    /**
     * @protected
     * @type tuna.events.IEventDispatcher
     */
    this._target = null;

    /**
     * @protected
     * @type string
     */
    this._type = type;

    /**
     * @protected
     * @type boolean
     */
    this._isBubbling = !!isBubbling;

    /**
     * @protected
     * @type boolean
     */
    this._isCanceled = false;

    /**
     * @protected
     * @type boolean
     */
    this._isStopped = false;

    /**
     * @protected
     * @type boolean
     */
    this._isImmediateStopped = false;
};

/**
 * @param {tuna.events.IEventDispatcher} target
 */
BasicEvent.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * @return tuna.events.IEventDispatcher
 */
BasicEvent.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return string
 */
BasicEvent.prototype.getType = function() {
    return this._type;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isBubbling = function() {
    return this._isBubbling;
};

/**
 *
 */
BasicEvent.prototype.preventDefault = function() {
    this._isCanceled = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isDefaultPrevented = function() {
    return this._isCanceled;
};

/**
 *
 */
BasicEvent.prototype.stopImmediatePropagation = function() {
    this._isImmediateStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isImmediatePropagationStopped = function() {
     return this._isImmediateStopped;
};

/**
 *
 */
BasicEvent.prototype.stopPropagation = function() {
    this._isStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isPropagationStopped = function() {
    return this._isImmediateStopped || this._isStopped;
};

/**
 * @constructor
 * @extends {BasicEvent}
 */
tuna.events.BasicEvent = BasicEvent;(function() {

    var IRequest = function() {};

    tuna.utils.extend(IRequest, tuna.events.IEventDispatcher);

    IRequest.prototype.send = function(url) {};
    IRequest.prototype.abort = function() {};

    tuna.net.IRequest = IRequest;

})();
(function() {

    var Request = function(url) {
        tuna.events.EventDispatcher.call(this);

        /**
         * Адрес запроса.
         *
         * @type String
         */
        this.__url = url;

        /**
         * Флаг о синхронности запроса
         *
         * @type Boolean
         */
        this.isSync = false;

        /**
         * Метод запроса.
         *
         * По-умолчанию GET.
         *
         * @type Boolean
         */
        this.method = 'GET';

        /**
         * Заголовки запроса
         *
         * @type Array.<{ name: '', value: '' }>
         */
        this.headers = [];

        /**
         * Данные запроса
         *
         * TODO: Implement setData method!
         *
         * @type Object
         */
        this.__data = null;

        /**
         * Строка результата запроса
         *
         * @type String
         */
        this.__response = {};

        this.__request = null;
    };

    tuna.utils.implement(Request, tuna.net.IRequest);
    tuna.utils.extend(Request, tuna.events.EventDispatcher);

    Request.prototype.setData = function(data) {
        this.__data = data;
    };

    Request.prototype.setURL = function(url) {
        this.__url = url;
    };

    /**
     * Обработка состояния запроса.
     *
     * @private
     */
    Request.prototype.__requestStateHandler = function(request) {
        if (request.readyState === 4) {
            this.__response = request.responseText;

            this.dispatch('complete', this.__response);

            request.abort();
        }
    };

    /**
     * Функци отправки запроса.
     */
    Request.prototype.send = function() {
        var requestURL = this.__url;

        if (this.__request !== null) {
            this.__request.abort();
        }

        //Инициализируем запрос.
        var request = !tuna.IS_IE ?
                        new XMLHttpRequest() :
                        new ActiveXObject('Microsoft.XMLHTTP');

        if (!this.isSync) {
            var self = this;

            request.onreadystatechange = function() {
                self.__requestStateHandler(request);
            }
        }

        var dataString = Request.encode(this.__data);

        if (this.method === 'GET' && dataString !== '') {
            requestURL += (requestURL.indexOf('?') === -1 ? '?' : '&') + dataString;
        }

        request.open(this.method, encodeURI(requestURL), !this.isSync);

        var i = this.headers.length - 1;
        while (i >= 0) {
            request.setRequestHeader(this.headers[i].name, this.headers[i].value);

            i--;
        }

        var sendData = null;
        if (this.method === 'POST') {
            request.setRequestHeader
                ('Content-Type', 'application/x-www-form-urlencoded');

            sendData = dataString;
        }

        request.send(sendData);

        if (this.isSync) {
            this.__response = request.responseText;

            this.dispatch('complete', this.__response);
        }

        this.__request = request;
    };

    /**
     * Прерывание запроса.
     */
    Request.prototype.abort = function() {
        if (this.__request !== null) {
            this.__request.abort();
        }
    };

    /**
     * Возвращение результата в виде строки.
     *
     * @return {String} Строка результата.
     */
    Request.prototype.getResponse = function() {
        return this.__response;
    };

    /**
     * Кодирование объекта в x-www-form-urlencoded форму.
     *
     * @param {Object} object Объект кодирования.
     * @return {String} Перекодированный в строку объект.
     */
    Request.encode = function(object) {
        return Request.__splitData(object).join('&');
    };

    /**
     * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
     *
     * @param {Object} object Объект кодирования.
     * @param {Object} path Путь к элементарной единице данных.
     * @return {Array} Массив элементарных данных составляющих объект
     * @private
     */
    Request.__splitData = function(object, path) {
        var result = [];

        if (path === undefined) {
            path = [];
        }

        if (object !== undefined &&
            object !== null &&
            object.constructor !== Function) {

            if (object.constructor === Object) {
                for (var key in object) {
                    var newPath = path.length === 0 ? [key] : (path.join(',') + ',' + key).split(',');
                    result = result.concat(Request.__splitData(object[key], newPath));
                }
            } else {
                result = [path.shift() + (path.length > 0 ? '[' + path.join('][') + ']=' : '=') + encodeURIComponent(object)];
            }
        }

        return result;
    };

    tuna.net.Request = Request;

})();
(function() {

    tuna.rest.call = function(name, args, callback) {
        if (typeof args === 'function') {
            callback = args;
            args = null;
        }

        var method = tuna.rest.factory.createMethod(name);

        if (callback !== undefined) {
            method.addEventListener('result', function(event, result) {
                callback(result);
                method.removeEventListener('result', arguments.callee)
            });
        }

        method.call(args);
    };

})();
(function() {

    var IMethod = function() {};
    
    IMethod.prototype.call = function(args) {};
    IMethod.prototype.clone = function() {};

    tuna.rest.IMethod = IMethod;

})();
(function() {

    var Method = function(name) {
        tuna.events.EventDispatcher.call(this);

        this._name = name || null;
    };

    tuna.utils.implement(Method, tuna.rest.IMethod);
    tuna.utils.extend(Method, tuna.events.EventDispatcher);

    Method.prototype.call = function(args) {};

    Method.prototype.clone = function() {
        return new this.constructor(this._name);
    };

    tuna.rest.Method = Method;

})();
(function() {

    var IFactory = function() {};
    IFactory.prototype.createMethod = function(name) {};

    tuna.rest.IFactory = IFactory;

})();
(function() {

    var Factory = function() {
        this.__methods = {};
        this.__factory = null;
    };

    tuna.utils.implement(Factory, tuna.rest.IFactory);

    Factory.prototype.setDefaultFactory = function(factory) {
        this.__factory = factory;
    };

    Factory.prototype.createMethod = function(name) {
        if (this.__methods[name] !== undefined) {
            return this.__methods[name].clone();
        } else if (this.__factory !== null) {
            return this.__factory.createMethod(name);
        }

        return null;
    };

    Factory.prototype.addMethod = function(name, method) {
        this.__methods[name] = method;
    };

    tuna.rest.factory = new Factory();

})();
/**
 * TUNA FRAMEWORK
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

tuna.dom.__addCustomIEListener = function(element, type, handler) {
    if (element.__customListener == undefined) {
        element.__customListener = function(event) {
            if (event.__type !== undefined) {
                var type = event.__type;
                delete event.__type;

                var handlers = element['__' + type];
                for (var i in handlers) {
                    handlers[i].call(element, event);
                }
            }
        };

        element.attachEvent('onhelp', element.__customListener);
    }

    if (element['__' + type] === undefined) {
        element['__' + type] = [];
    }

    element['__' + type].push(handler);
};

tuna.dom.__removeCustomIEListener = function(element, type, handler) {
    var handlers = element['__' + type];
    if (handlers !== undefined) {
        var i = handlers.length - 1;
        while (i >= 0) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }

            i--;
        }
    }
};

tuna.dom.__dispatchCustomIEEvent = function(element, event, type) {
    event.__type = type;
    return element.fireEvent('onhelp', event);
};

tuna.dom.__selectorEngine = null;

/**
 * @param {*} engine
 */
tuna.dom.setSelectorEngine = function(engine) {
    tuna.dom.__selectorEngine = engine;
};

/**
 * @param {string} selector
 * @param {Node} context
 * @return {Array.<Node>}
 */
tuna.dom.select = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine(selector, context);
    }

    return null;
};

/**
 * @param {string} selector
 * @param {Array.<Node>} elements
 * @return {Array.<Node>}
 */
tuna.dom.filter = function(selector, elements) {
    if (tuna.dom.__selectorEngine !== null &&
        tuna.dom.__selectorEngine.filter !== undefined) {
        return tuna.dom.__selectorEngine.filter(selector, elements);
    }

    return null;
};

/**
 *
 * @param {string} selector
 * @param {Node} context
 * @return {Node}
 */
tuna.dom.selectOne = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        var result = tuna.dom.__selectorEngine(selector, context);
        if (result.length > 0) {
            return result[0];
        }
    }

    return null;
};

/**
 *
 * @param {string} html
 * @param {HTMLDocument} doc
 * @return {DocumentFragment}
 */
tuna.dom.createFragment = function(html, doc) {
    var fragment = doc.createDocumentFragment();

    var tempContainer = doc.createElement('div');
    tempContainer.innerHTML = html;

    var children = tempContainer.childNodes;
    var i = 0,
        l = children.length;

    while (i < l) {
        fragment.appendChild(children.item(0));

        i++;
    }

    return fragment;
};

/**
 * TODO: Make remove child listener
 * @param {Node} element
 * @param {string} childSelector
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addChildEventListener = function(element, childSelector, type, handler) {
    tuna.dom.addEventListener(element, type, function(event) {
        var eventTarget = event.target || event.srcElement;

        var target = tuna.dom.__selectorEngine.matches(childSelector, [eventTarget])[0];

        if (target === undefined) {
            target = tuna.dom.getParentMatches(eventTarget, childSelector, element);
        }

        if (target !== null) {
            handler.call(target, event);
        }
    });
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addEventListener = function(element, type, handler) {
    if (element.addEventListener !== undefined) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__addCustomIEListener(element, type, handler);
        } else {
            element.attachEvent(eventName, handler);
        }
    }
};

/**
 * TODO: Make remove listener
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addOneEventListener = function(element, type, handler) {
    var listener = function(event) {
        handler.call(element, event);
        tuna.dom.removeEventListener(element, type, listener);
    };

    tuna.dom.addEventListener(element, type, listener);
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.removeEventListener = function(element, type, handler) {
    if (element.removeEventListener !== undefined) {
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__removeCustomIEListener(element, type, handler);
        } else {
            element.detachEvent("on" + type, handler);
        }

    }
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {string=} data
 */
tuna.dom.dispatchEvent = function(element, type, data) {
    var result = false;
    var doc = element.ownerDocument;

    var event = null;
    if (doc.createEventObject !== undefined){
        event = doc.createEventObject();
        data && (event.data = data);

        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__dispatchCustomIEEvent(element, event, type);
        } else {
            result = element.fireEvent(eventName, event);
        }
    } else {
        event = document.createEvent('UIEvents');
        event.initUIEvent(type, true, true, window, 1);
        data && (event.data = data);

        result = !element.dispatchEvent(event);
    }

    return result;
};

/**
 * @param {Event} event
 */
tuna.dom.preventDefault = function(event) {
    if (event.preventDefault !== undefined) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};

/**
 * @param {Event} event
 */
tuna.dom.stopPropagation = function(event) {
    if (event.stopPropagation !== undefined) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};

/**
 * @param {Node} element
 * @param {Node} parent
 * @return {number}
 */
tuna.dom.getChildIndex = function(element, parent) {
    var result = -1;

    var child;
    if (element.parentNode === parent) {
        result = 0;
        child = parent.firstChild;

        while (child !== undefined && child !== element) {
            result++;

            child = child.nextSibling;
        }
    }

    return result;
};

/**
 * @param {Node} parent
 * @param {number} index
 * @return {Node}
 */
tuna.dom.getChildAt = function(parent, index) {
    return parent.childNodes[index] || null;
};

/**
 * @param {Node} element
 * @param {string} selector
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentMatches = function(element, selector, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           tuna.dom.__selectorEngine.matches(selector, [parent]).length === 0) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentWithClass = function(element, className, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           !tuna.dom.hasClass(parent, className)) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @return {boolean}
 */
tuna.dom.hasClass = function(element, className) {
    if (element.classList !== undefined) {
        return element.classList.contains(className);
    } else {
        return element.className.match
            (new RegExp('(\\s|^)' + className + '(\\s|$)')) !== null;
    }
};

/**
 * @param {Node} element
 * @param {string} className
 */
tuna.dom.addClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.add(className);
    } else if (!tuna.dom.hasClass(element, className)) {
        element.className += " " + className;
    }

};

/**
 * @param {Node} element
 * @param {string} className
 */
tuna.dom.removeClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.remove(className);
    } else if (tuna.dom.hasClass(element, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
};

/**
 * @param {Node} element
 * @param {string} className
 * @param {boolean} isExist
 */
tuna.dom.setClassExist = function(element, className, isExist) {
    if (!isExist && tuna.dom.hasClass(element, className)) {
        tuna.dom.removeClass(element, className)
    } else if (isExist && !tuna.dom.hasClass(element, className)) {
        tuna.dom.addClass(element, className)
    }
};

/**
 * @param {Node} element
 * @param {string=} prefix
 * @return {Object.<string, string>}
 */
tuna.dom.getAttributesData = function(element, prefix) {
    if (prefix === undefined) {
        prefix = 'data-';
    }

    var result = {};

    var attrs = element.attributes;
    var i = 0,
        l = attrs.length;

    while (i < l) {
        if (attrs[i].name.indexOf(prefix) === 0) {
            result[attrs[i].name.substr(prefix.length)] = attrs[i].value;
        }

        i++;
    }

    return result;
};/**
 * @constructor
 * @param {*} value
 * @param {tuna.tmpl.data.DataNode=} parent
 * @param {string=} key
 */
var DataNode = function(value, parent, key) {
    /**
     * @private
     * @type *
     */
    this.__value = value;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__parent = parent || null;

    /**
     * @private
     * @type string
     */
    this.__key = key || null;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__keyNode = null;

    /**
     * @private
     * @type Object.<string, tuna.tmpl.data.DataNode>
     */
    this.__children = {};
};

/**
 * @const
 * @type tuna.tmpl.data.DataNode
 */
DataNode.NULL_NODE = new DataNode(null);

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getParent = function() {
    return this.__parent;
};

/**
 * @return  {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getKey = function() {
    if (this.__keyNode === null) {
        this.__keyNode = new tuna.tmpl.data.DataNode(this.__key);
    }
    return this.__keyNode;
};

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getRoot = function() {
    return this.__parent !== null ? this.__parent.getRoot() : this;
};

/**
 * @return  {*}
 */
DataNode.prototype.getValue = function() {
    return this.__value;
};

/**
 * @param {string} key
 */
DataNode.prototype.growChild = function(key) {
    var result = null;

    if (this.__children[key] !== undefined) {
        result = this.__children[key];
    } else if (this.__value !== null) {
        var keyValue = this.__value[key];

        if (keyValue !== undefined) {
            this.__children[key]
                = new tuna.tmpl.data.DataNode(keyValue, this, key);

            result = this.__children[key];
        } else {
            this.__children[key] = tuna.tmpl.data.DataNode.NULL_NODE;
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {DataNode}
 */
tuna.tmpl.data.DataNode = DataNode;/**
 * @constructor
 */
var PathEvaluator = function() {

    /**
     * @private
     * @type Array.<string>
     */
    this.__parsedPath = null;
};

/**
 */
PathEvaluator.prototype.setPath = function(path) {
    this.__parsedPath = path.split('/');
};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.evaluate = function(dataNode) {
    return this.__applyNextToken(this.__parsedPath, dataNode, 0);
};

/**
 *
 * @param {Array.<string>} path
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @param {number} index
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyNextToken = function(path, dataNode, index) {
    var token = path[index];
    if (dataNode !== null && token !== undefined) {
        return this.__applyNextToken
            (path, this.__applyToken(token, dataNode), ++index);
    }

    return dataNode;
};

/**
 *
 * @param {string} token
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyToken = function(token, dataNode) {

    switch (token) {
        case '': return dataNode.getRoot();
        case '.': return dataNode;
        case '..': return dataNode.getParent();

        case '$key': return dataNode.getKey();
    }

    return dataNode.growChild(token);
};

/**
 * @constructor
 * @extends {PathEvaluator}
 */
tuna.tmpl.data.PathEvaluator = PathEvaluator;
/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var SpotSettings = function() {
    
    /**
     * @private
     * @type {string}
     */
    this.__class = '';

    /**
     * @private
     * @type {string}
     */
    this.__path = '';
};

/**
 * @param {string} className
 */
SpotSettings.prototype.setTargetClass = function(className) {
    this.__class = className;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getTargetClass = function() {
    return this.__class;
};

/**
 * @param {string} path
 */
SpotSettings.prototype.setDataPath = function(path) {
    this.__path = path;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getDataPath = function() {
    return this.__path;
};

/**
 * @constructor
 * @extends {SpotSettings}
 */
tuna.tmpl.settings.SpotSettings = SpotSettings;/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var AttributeSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__attributeName = '';

    /**
     * @private
     * @type boolean
     */
    this.__hasEvent = false;
};

tuna.utils.extend(AttributeSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {boolean} hasEvent
 */
AttributeSettings.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @return {boolean}
 */
AttributeSettings.prototype.hasEvent = function() {
    return this.__hasEvent;
};

/**
 * @param {string} attributeName
 */
AttributeSettings.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
};

/**
 * @return {string}
 */
AttributeSettings.prototype.getAttributeName = function() {
    return this.__attributeName;
};

/**
 * @constructor
 * @extends {AttributeSettings}
 */
tuna.tmpl.settings.AttributeSettings = AttributeSettings;/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ConditionSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__actionType = '';

    /**
     * @private
     * @type string
     */
    this.__actionData = '';

    /**
     * @private
     * @type string
     */
    this.__operatorType = '';

    /**
     * @private
     * @type string
     */
    this.__operatorData = '';
};

tuna.utils.extend(ConditionSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setOperator = function(type, data) {
    this.__operatorType = type;
    this.__operatorData = data;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getOperatorType = function() {
    return this.__operatorType;
};

/**
 * @return {string} 
 */
ConditionSettings.prototype.getOperatorData = function() {
    return this.__operatorData;
};

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setAction = function(type, data) {
    this.__actionType = type;
    this.__actionData = data;
};

/**
 * @return {string} 
 */
ConditionSettings.prototype.getActionType = function() {
    return this.__actionType;
};

/**
 * @return {string} 
 */
ConditionSettings.prototype.getActionData = function() {
    return this.__actionData;
};

/**
 * @constructor
 * @extends {ConditionSettings}
 */
tuna.tmpl.settings.ConditionSettings = ConditionSettings;
/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ListSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__keyPath = '';

    /**
     * @private
     * @type string
     */
    this.__itemRendererID = '';

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;
};

tuna.utils.extend(ListSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} path
 */
ListSettings.prototype.setItemKeyDataPath = function(path) {
    this.__keyPath = path;
};

/**
 * @return {string}
 */
ListSettings.prototype.getItemKeyDataPath = function() {
    return this.__keyPath;
};

/**
 * @param {string} id
 */
ListSettings.prototype.setItemRendererID = function(id) {
    this.__itemRendererID = id;
};


/**
 * @return {string}
 */
ListSettings.prototype.getItemRendererID = function() {
    return this.__itemRendererID;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListSettings.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
ListSettings.prototype.getItemSettings = function() {
    return this.__itemSettings;
};

/**
 * @constructor
 * @extends {ListSettings}
 */
tuna.tmpl.settings.ListSettings = ListSettings;



/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var TemplateSettings = function() {

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.SpotSettings>
     */
    this.__spots = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ListSettings>
     */
    this.__lists = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.AttributeSettings>
     */
    this.__attributes = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ConditionSettings>
     */
    this.__conditions = [];
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} condition
 */
TemplateSettings.prototype.addCondition = function(condition) {
    this.__conditions.push(condition);
};

/**
 * @return {Array.<tuna.tmpl.settings.ConditionSettings>}
 */
TemplateSettings.prototype.getConditions = function() {
    return this.__conditions;
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} attr
 */
TemplateSettings.prototype.addAttribute = function(attr) {
    this.__attributes.push(attr);
};

/**
 * @return {Array.<tuna.tmpl.settings.AttributeSettings>}
 */
TemplateSettings.prototype.getAttributes = function() {
    return this.__attributes;
};

/**
 * @param {tuna.tmpl.settings.ListSettings} list
 */
TemplateSettings.prototype.addList = function(list) {
    this.__lists.push(list);
};

/**
 * @return {Array.<tuna.tmpl.settings.ListSettings>}
 */
TemplateSettings.prototype.getLists = function() {
    return this.__lists;
};

/**
 * @param {tuna.tmpl.settings.SpotSettings} spot
 */
TemplateSettings.prototype.addSpot = function(spot) {
    this.__spots.push(spot);
};

/**
 * @return {Array.<tuna.tmpl.settings.SpotSettings>}
 */
TemplateSettings.prototype.getSpots = function() {
    return this.__spots;
};

/**
 * @constructor
 * @extends {TemplateSettings}
 */
tuna.tmpl.settings.TemplateSettings = TemplateSettings;
/**
 * @interface
 */
var IMarkupExtractor = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
IMarkupExtractor.prototype.extract = function(element, settings) {};

/**
 * @interface
 * @extends {IMarkupExtractor}
 */
tuna.tmpl.markup.IMarkupExtractor = IMarkupExtractor;/**
 * @constructor
 * @implements {tuna.tmpl.markup.IMarkupExtractor}
 */
var SpotExtractor = function() {

    /**
     * @protected
     * @type {string}
     */
    this._tagName = 'spot';

    /**
     * @protected
     * @type {string}
     */
    this._ns = 'tuna:';
};

tuna.utils.implement(SpotExtractor, tuna.tmpl.markup.IMarkupExtractor);

/**
 * @override
 */
SpotExtractor.prototype.extract = function(element, settings) {
    var tagName = tuna.IS_IE ? this._tagName : (this._ns + this._tagName);
    var elements = element.getElementsByTagName(tagName);

    var i = 0,
        l = elements.length;

    var item = null;
    while (i < l) {
        item = this._createItem();

        this._parseElement(elements.item(i), item);
        this._saveItem(item, settings);

        i++;
    }
};

/**
 * @protected
 * @return tuna.tmpl.settings.IItemSettings
 */
SpotExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.SpotSettings();
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
SpotExtractor.prototype._parseElement = function(element, item) {
    item.setTargetClass(element.getAttribute(this._ns + 'target'));
    item.setDataPath(element.getAttribute(this._ns + 'path'));
};

/**
 * @protected
 * @param {tuna.tmpl.settings.SpotSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotExtractor.prototype._saveItem = function(item, settings) {
    settings.addSpot(item);
};

/**
 * @constructor
 * @extends {SpotExtractor}
 */
tuna.tmpl.markup.SpotExtractor = SpotExtractor;/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 * @param {tuna.tmpl.markup.MarkupTemplateBuilder} templateBuilder
 */
var ListExtractor = function(templateBuilder) {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'list';

    /**
     * @private
     * @type tuna.tmpl.markup.MarkupTemplateBuilder
     */
    this.__templateBuilder = templateBuilder
};

tuna.utils.extend(ListExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ListExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ListSettings();
};

/**
 * @override
 */
ListExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    item.setItemRendererID(element.getAttribute(this._ns + 'item-renderer-id'));
    item.setItemKeyDataPath(element.getAttribute(this._ns + 'key-path'));

    var templateID = element.getAttribute(this._ns + 'item-template-id');
    item.setItemSettings(this.__templateBuilder.buildSettings(templateID));
};

/**
 * @param {tuna.tmpl.settings.ListSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListExtractor.prototype._saveItem = function(item, settings) {
    settings.addList(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.ListExtractor = ListExtractor;/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var AttributeExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    this._tagName = 'attr';
};

tuna.utils.extend(AttributeExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
AttributeExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.AttributeSettings();
};

/**
 * @override
 */
AttributeExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype.
        _parseElement.call(this, element, item);

    item.setAttributeName(element.getAttribute(this._ns + 'name'));
    item.setEvent(element.getAttribute(this._ns + 'event') !== null);
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
AttributeExtractor.prototype._saveItem = function(item, settings) {
    settings.addAttribute(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.AttributeExtractor = AttributeExtractor;/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var ConditionExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'if';

    /**
     * @private
     * @type Array.<string>
     */
    this.__operatorAttrs = ['isset', 'eq', 'ne'];

    /**
     * @private
     * @type Array.<string>
     */
    this.__actionAttrs = ['class'];
};

tuna.utils.extend(ConditionExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ConditionExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ConditionSettings();
};

/**
 * @override
 */
ConditionExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    this.__extractOperator(element, item);
    this.__extractAction(element, item);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractAction = function(element, item) {
    var i = 0,
        l = this.__actionAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__actionAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.setAction(attr, value);
            break;
        }

        i++;
    }
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractOperator = function(element, item) {
    var i = 0,
        l = this.__operatorAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__operatorAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.setOperator(attr, value);
            break;
        }

        i++;
    }
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ConditionExtractor.prototype._saveItem = function(item, settings) {
    settings.addCondition(item);
};

/**
 * @constructor
 * @extends {ConditionExtractor}
 */
tuna.tmpl.markup.ConditionExtractor = ConditionExtractor;/**
 * TODO: Template origin in iframe (set current and origin document).
 * @constructor
 * @param {HTMLDocument} doc
 */
var MarkupTemplateBuilder = function(doc) {
    this.__doc = doc;

    this.__templatesTable = {};

    this.__extractors = [];

    this.__registerExtractors();
};

/**
 * @private
 */
MarkupTemplateBuilder.prototype.__registerExtractors = function() {
    this.__extractors.push(new tuna.tmpl.markup.SpotExtractor());
    this.__extractors.push(new tuna.tmpl.markup.AttributeExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ConditionExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ListExtractor(this));
};

/**
 * @param {string} templateID
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
MarkupTemplateBuilder.prototype.buildSettings = function(templateID) {
    var template = null;

    if (this.__templatesTable[templateID] !== undefined) {
        template = this.__templatesTable[templateID];
    } else {
        var templateElement = this.__doc.getElementById(templateID);
        if (templateElement !== null) {
            this.__templatesTable[templateID] =
                template = new tuna.tmpl.settings.TemplateSettings();

            var i = 0,
                l = this.__extractors.length;

            while (i < l) {
                this.__extractors[i].extract(templateElement, template);
                i++;
            }
        }
    }

    return template;
};

/**
 * @constructor
 * @extends {MarkupTemplateBuilder}
 */
tuna.tmpl.markup.MarkupTemplateBuilder = MarkupTemplateBuilder;

/**
 * @interface
 */
var IListItemRouter = function() {};

/**
 * @param {Node} element
 */
IListItemRouter.prototype.append = function(element) {};

/**
 * @interface
 * @extends {IListItemRouter}
 */
tuna.tmpl.units.IListItemRouter = IListItemRouter;/**
 * @constructor
 * @implements {tuna.tmpl.units.IListItemRouter}
 * @param {Node} container
 */
var ListContainerRouter = function(container) {

    /**
     * @protected
     * @type Node
     */
    this._container = container;
};

tuna.utils.implement(ListContainerRouter, tuna.tmpl.units.IListItemRouter);

/**
 * @override
 */
ListContainerRouter.prototype.append = function(node) {
    this._container.appendChild(node);
};

/**
 * @constructor
 * @extends {ListContainerRouter}
 */
tuna.tmpl.units.ListContainerRouter = ListContainerRouter;/**
 * @constructor
 * @param {tuna.tmpl.units.Template} root
 */
var CompiledUnit = function(root) {
    this.__rootTemplate = root;
};

/**
 * @return {tuna.tmpl.units.Template}
 */
CompiledUnit.prototype.getRootTemplate = function() {
    return this.__rootTemplate;
};

/**
 *
 */
CompiledUnit.prototype.destroy = function() {};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 */
CompiledUnit.prototype.applyData = function(dataNode) {}

/**
 * @constructor
 * @extends {CompiledUnit}
 */
tuna.tmpl.units.CompiledUnit = CompiledUnit;
/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var Spot = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @protected
     * @type Array.<Node>
     */
    this._nodes = [];
};

tuna.utils.extend(Spot, tuna.tmpl.units.CompiledUnit);

/**
 * @param {string} path
 */
Spot.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {Array.<Node>} elements
 */
Spot.prototype.addTargets = function(elements) {
    this._nodes = this._nodes.concat(elements);
};

/**
 * @override
 */
Spot.prototype.applyData = function(dataNode) {
    var valueNode = this.__pathEvaluator.evaluate(dataNode);
    if (valueNode !== null) {
        this._applyValue(valueNode.getValue());
    }
};

/**
 * @protected
 * @param {*} value
 */
Spot.prototype._applyValue = function(value) {
    if (value === null) {
        value = '';
    }

    var html = value.toString();

    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i].innerHTML !== html) {
            this._nodes[i].innerHTML = html;
        }

        i--;
    }
};

/**
 * @constructor
 * @extends {Spot}
 */
tuna.tmpl.units.Spot = Spot;
/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
var Attribute = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {string}
     */
    this.__attributeName = '';

    /**
     * @private
     * @type {string}
     */
    this.__eventName = '';

    /**
     * @private
     * @type {boolean}
     */
    this.__hasEvent = false;
};

tuna.utils.extend(Attribute, tuna.tmpl.units.Spot);

/**
 * @param {string} attributeName
 */
Attribute.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
    this.__eventName = attributeName + '-change';
};

/**
 * @param {boolean} hasEvent
 */
Attribute.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @override
 */
Attribute.prototype._applyValue = function(value) {
    if (value !== null) {
        this.__setAttribute(value);
    } else {
        this.__removeAttribute();
    }

    if (this.__hasEvent) {
        var self = this;
        setTimeout(function() {
            self.__dispatchAttribute(value);
        }, 0);
    }
};

/**
 * @private
 * @param {*} value
 */
Attribute.prototype.__setAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].setAttribute(this.__attributeName, value + '');
        i--;
    }
};

/**
 * @private
 */
Attribute.prototype.__removeAttribute = function() {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].removeAttribute(this.__attributeName);
        i--;
    }
};

/**
 * @private
 * @param {*} value
 */
Attribute.prototype.__dispatchAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        tuna.dom.dispatchEvent(this._nodes[i], this.__eventName, '' + value);

        i--;
    }
};

/**
 * @constructor
 * @extends {Attribute}
 */
tuna.tmpl.units.Attribute = Attribute;/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
var Condition = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type __ConditionAction
     */
    this.__action = null;

    /**
     * @private
     * @type __ConditionOperator
     */
    this.__operator = null;
};

tuna.utils.extend(Condition, tuna.tmpl.units.Spot);

/**
 * @param {__ConditionAction} action
 */
Condition.prototype.setAction = function(action) {
    this.__action = action;
};

/**
 * @param {__ConditionOperator} operator
 */
Condition.prototype.setOperator = function(operator) {
    this.__operator = operator;
};

/**
 * @override
 */
Condition.prototype._applyValue = function(value) {
    var testResult = this.__operator.test(value);

    var i = this._nodes.length - 1;
    while (i >= 0) {
        this.__action.apply(this._nodes[i], testResult, value);
        i--;
    }
};

/**
 * @constructor
 * @extends {Condition}
 */
tuna.tmpl.units.Condition = Condition;/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var List = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.compilers.TemplateCompiler
     */
    this.__templateCompiler = null;

    /**
     * @private
     * @type Node
     */
    this.__itemRenderer = null;

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;

    /**
     * @private
     * @type Object.<*, tuna.tmpl.units.Template>
     */
    this.__itemsTable = {};

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.units.IListItemRouter
     */
    this.__listNodeRouter = null;
};

tuna.utils.extend(List, tuna.tmpl.units.CompiledUnit);

/**
 * @param {tuna.tmpl.units.IListItemRouter} router
 */
List.prototype.setListNodeRouter = function(router) {
    this.__listNodeRouter = router;
};

/**
 * @param {string} path
 */
List.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {string} path
 */
List.prototype.setKeyPath = function(path) {
    this.__keyPathEvaluator.setPath(path);
};

/**
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
List.prototype.setCompiler = function(compiler) {
    this.__templateCompiler = compiler;
};

/**
 * @param {Node} element
 */
List.prototype.setItemRenderer = function(element) {
    this.__itemRenderer = element.cloneNode(true);
    this.__itemRenderer.removeAttribute('id');
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
List.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @param {tuna.tmpl.units.Template} compiledItem
 * @param {*} key
 */
List.prototype.addItem = function(compiledItem, key) {
    this.__itemsTable[key] = compiledItem;
};

/**
 * @override
 */
List.prototype.applyData = function(dataNode) {
    var sampleNode = this.__pathEvaluator.evaluate(dataNode);
    if (sampleNode !== null) {
        var sample = sampleNode.getValue();
        var oldItemsTable = this.__itemsTable;

        this.__itemsTable = {};
        for (var index in sample) {
            this.__updateItem(sampleNode.growChild(index), oldItemsTable);
        }

        this.__destroyItems(oldItemsTable);
    } else {
        this.__destroyItems(this.__itemsTable);
    }
};

/**
 * @override
 */
List.prototype.destroy = function() {
    this.__destroyItems(this.__itemsTable);
};

/**
 * @private
 * @param {tuna.tmpl.data.DataNode} itemNode
 * @param {Object.<*, tuna.tmpl.units.Template>} oldItemsTable
 */
List.prototype.__updateItem = function(itemNode, oldItemsTable) {
    var keyNode = this.__keyPathEvaluator.evaluate(itemNode);
    if (keyNode !== null) {
        var key = keyNode.getValue();

        if (oldItemsTable[key] === undefined) {
            this.addItem(this.__makeNewItem(), key);
        } else {
            this.__itemsTable[key] = oldItemsTable[key];
            delete oldItemsTable[key];
        }

        this.__itemsTable[key].applyData(itemNode);
    }
};

/**
 * @private
 * @param {Object.<*, tuna.tmpl.units.Template>} itemsTable
 */
List.prototype.__destroyItems = function(itemsTable) {
    for (var key in itemsTable) {
        itemsTable[key].destroy();
        delete itemsTable[key];
    }
};

/**
 * @return {tuna.tmpl.units.Template}
 */
List.prototype.__makeNewItem = function() {
    var itemElement = this.__itemRenderer.cloneNode(true);

    var rootTemplate = this.getRootTemplate();
    var template = this.__templateCompiler.compileTemplate
        (this.__itemSettings, itemElement, rootTemplate);

    this.__listNodeRouter.append(itemElement);

    rootTemplate.registerChildCreation(itemElement);

    return template;
};

/**
 * @constructor
 * @extends {List}
 */
tuna.tmpl.units.List = List;
/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var Template = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root || this);

    /**
     * @private
     * @type Array.<tuna.tmpl.units.CompiledUnit>
     */
    this.__items = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__createdChildren = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__removedChildren = [];

    /**
     * @private
     * @type Node
     */
    this.__target = null;
};

tuna.utils.extend(Template, tuna.tmpl.units.CompiledUnit);

/**
 * @param {Node} element
 */
Template.prototype.setTarget = function(element) {
    this.__target = element;
};

/**
 * @param {Array.<tuna.tmpl.units.CompiledUnit>|tuna.tmpl.units.CompiledUnit} items
 */
Template.prototype.addItems = function(items) {
    this.__items = this.__items.concat(items);
};

/**
 * @param {Node} child
 */
Template.prototype.registerChildCreation = function(child) {
    this.__createdChildren.push(child);
};

/**
 * @return {Array.<Node>}
 */
Template.prototype.fetchCreatedChildren = function() {
    return this.__createdChildren.splice(0, this.__createdChildren.length);
};

/**
 * @param {Node} child
 */
Template.prototype.registerChildRemoval = function(child) {
    this.__removedChildren.push(child);
};

/**
 * @return {Array.<Node>}
 */
Template.prototype.fetchRemovedChildren = function() {
    return this.__removedChildren.splice(0, this.__removedChildren.length);
};

/**
 * @override
 */
Template.prototype.applyData = function(dataNode) {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].applyData(dataNode);

        i--;
    }
};

/**
 * @override
 */
Template.prototype.destroy = function() {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].destroy();

        i--;
    }

    this.__target.parentNode.removeChild(this.__target);

    this.getRootTemplate().registerChildRemoval(this.__target);
};

/**
 * @constructor
 * @extends {Template}
 */
tuna.tmpl.units.Template = Template;
/**
 * @interface
 */
var IItemCompiler = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
IItemCompiler.prototype.compile = function(element, settings, template) {};

/**
 * @interface
 * @extends {IItemCompiler}
 */
tuna.tmpl.compilers.IItemCompiler = IItemCompiler;
/**
 * @constructor
 * @param {HTMLDocument} doc
 */
var TemplateCompiler = function(doc) {

    /**
     * @private
     * @type HTMLDocument
     */
    this.__doc = doc;

    /**
     * @private
     * @type Array.<tuna.tmpl.compilers.IItemCompiler>
     */
    this.__itemCompilers = [];

    this.__registerItemCompilers();
};

/**
 * @private
 */
TemplateCompiler.prototype.__registerItemCompilers = function() {
    this.__itemCompilers.push(new tuna.tmpl.compilers.SpotCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.AttributeCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.ConditionCompiler());
    this.__itemCompilers.push
        (new tuna.tmpl.compilers.ListCompiler(this.__doc, this));
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {Node} element
 * @return {tuna.tmpl.ITransformer}
 */
TemplateCompiler.prototype.makeTransformer = function(settings, element) {
    var transformer = new tuna.tmpl.TemplateTransformer();
    transformer.setTargetElement(element);
    transformer.setCoreTemplate(this.compileTemplate(settings, element, null));

    return transformer;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {Node} element
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.Template}
 */
TemplateCompiler.prototype.compileTemplate = function(settings, element, root) {
    var template = new tuna.tmpl.units.Template(root);
    template.setTarget(element);

    var i = 0,
        l = this.__itemCompilers.length;

    while (i < l) {
        this.__itemCompilers[i].compile(element, settings, template);
        i++;
    }

    return template;
};

/**
 * @constructor
 * @extends {TemplateCompiler}
 */
tuna.tmpl.compilers.TemplateCompiler = TemplateCompiler;
/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 */
var SpotCompiler = function() {};

tuna.utils.implement(SpotCompiler, tuna.tmpl.compilers.IItemCompiler);

/**
 * @override
 */
SpotCompiler.prototype.compile = function(element, settings, template) {
    var root = template.getRootTemplate();
    var item = null;

    var itemsSettings = this._getItemsSettings(settings);
    var i = itemsSettings.length - 1;
    while (i >= 0) {
        item = this._createItem(root);

        this._compileItem(element, itemsSettings[i], item);

        template.addItems(item);

        i--;
    }

};

/**
 * @protected
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getSpots();
};

/**
 * @protected
 * @param {tuna.tmpl.units.Template} rootTemplate
 * @return {tuna.tmpl.units.CompiledUnit}
 */
SpotCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Spot(rootTemplate);
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.CompiledUnit} item
 */
SpotCompiler.prototype._compileItem = function(element, settings, item) {
    item.setPath(settings.getDataPath());

    var className = settings.getTargetClass();
    if (tuna.dom.hasClass(element, className)) { // Например если шаблоном является элемент списка
        item.addTargets(element);
    } else {
        item.addTargets(tuna.dom.select('.' + className, element));
    }
};

/**
 * @constructor
 * @extends {SpotCompiler}
 */
tuna.tmpl.compilers.SpotCompiler = SpotCompiler;/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var AttributeCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
AttributeCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getAttributes();
};

/**
 * @override
 */
AttributeCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Attribute(rootTemplate);
};

/**
 * @override
 */
AttributeCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    item.setAttributeName(settings.getAttributeName());
    item.setEvent(settings.hasEvent());
};

/**
 * @constructor
 * @extends {AttributeCompiler}
 */
tuna.tmpl.compilers.AttributeCompiler = AttributeCompiler;
/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var ConditionCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
ConditionCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getConditions();
};

/**
 * @override
 */
ConditionCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Condition(rootTemplate);
};

/**
 * @override
 */
ConditionCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    var action = this.__createAction
        (settings.getActionType(), settings.getActionData());

    item.setAction(action);

    var operator = this.__createOperator
        (settings.getOperatorType(), settings.getOperatorData());

    item.setOperator(operator);
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionAction}
 */
ConditionCompiler.prototype.__createAction = function(type, data) {
    switch (type) {
        case 'class': return new __ClassAction(data);
    }

    return null;
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionOperator}
 */
ConditionCompiler.prototype.__createOperator = function(type, data) {
    switch (type) {
        case 'isset': return new __IsSetOperator();
        case 'eq': return new __EqualsOperator(data);
        case 'ne': return new __NotEqualsOperator(data);
    }

    return null;
};

tuna.tmpl.compilers.ConditionCompiler = ConditionCompiler;

///////////////////////////////////////////////////////////////////////////
//
//  Operators
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionOperator = function(data) {
    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 * @param {*} value
 * @return {boolean}
 */
__ConditionOperator.prototype.test = function(value) {};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 */
var __IsSetOperator = function() {
    __ConditionOperator.call(this);
};

tuna.utils.extend(__IsSetOperator, __ConditionOperator);

/**
 * @override
 */
__IsSetOperator.prototype.test = function(value) {
    return value !== undefined;
};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __EqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__EqualsOperator, __ConditionOperator);

/**
 * @override
 */
__EqualsOperator.prototype.test = function(value) {
    return value === this._data || (value + '') === this._data;
};


/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __NotEqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__NotEqualsOperator, __ConditionOperator);

/**
 * @override
 */
__NotEqualsOperator.prototype.test = function(value) {
    return !(value == this._data || String(value) == this._data);
};

///////////////////////////////////////////////////////////////////////////
//
//  Actions
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionAction = function(data) {

    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 *
 * @param {Node} element
 * @param {boolean} testResult
 * @param {*} value
 */
__ConditionAction.prototype.apply = function(element, testResult, value) {};


/**
 * @private
 * @constructor
 * @extends {__ConditionAction}
 * @param {string=} data
 */
var __ClassAction = function(data) {
    __ConditionAction.call(this, data);

    /**
     * @private
     * @type *
     */
    this.__lastName = null;
};

tuna.utils.extend(__ClassAction, __ConditionAction);

/**
 * @override
 */
__ClassAction.prototype.apply = function(element, testResult, value) {
    var className = this._data;

    if (className !== '') {
        if (testResult) {
            tuna.dom.addClass(element, className);
        } else {
            tuna.dom.removeClass(element, className);
        }

    } else if (this.__lastName !== value && testResult) {
        if (this.__lastName !== null) {
            tuna.dom.removeClass(element, this.__lastName + '');
        }

        tuna.dom.addClass(element, value + '');

        this.__lastName = value;
    }

};
/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 * @param {HTMLDocument} doc
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
var ListCompiler = function(doc, compiler) {
    this.__doc = doc;
    this.__templateCompiler = compiler;
};

tuna.utils.implement(ListCompiler, tuna.tmpl.compilers.IItemCompiler);

/**
 * @override
 */
ListCompiler.prototype.compile = function(element, settings, template) {
    var itemsSettings = settings.getLists();
    var i = itemsSettings.length - 1;
    while (i >= 0) {

        this.__compileLists(element, itemsSettings[i], template);

        i--;
    }
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
ListCompiler.prototype.__compileLists = function(element, settings, template) {
    var root = template.getRootTemplate();
    var lists = [];

    var className = settings.getTargetClass();
    if (tuna.dom.hasClass(element, className)) {
        lists.push(this.__createList(element, settings, root));
    } else {
        var elements = tuna.dom.select('.' + className, element);

        var i = elements.length - 1;
        while (i >= 0) {

            if (tuna.dom.getParentWithClass(elements[i], className, element) === null) {
                lists.push(this.__createList(elements[i], settings, root));
            }

            i--;
        }
    }

    template.addItems(lists);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.List}
 */
ListCompiler.prototype.__createList = function(element, settings, root) {
    var list = new tuna.tmpl.units.List(root);

    list.setCompiler(this.__templateCompiler);
    list.setItemRenderer(this.__doc.getElementById(settings.getItemRendererID()));
    list.setItemSettings(settings.getItemSettings());
    list.setKeyPath(settings.getItemKeyDataPath());
    list.setPath(settings.getDataPath());

    list.setListNodeRouter(new tuna.tmpl.units.ListContainerRouter(element));

    return list;
};

/**
 * @constructor
 * @extends {ListCompiler}
 */
tuna.tmpl.compilers.ListCompiler = ListCompiler;
/**
 * @interface
 */
var ITransformHandler = function() {};

/**
 * @param {Node} target
 */
ITransformHandler.prototype.handleTransformStart = function(target) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} createdElements
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleDestroy
    = function(target, removedElements) {};

/**
 * @interface
 * @extends {ITransformHandler}
 */
tuna.tmpl.ITransformHandler = ITransformHandler;
/**
 * @interface
 */
var ITransformer = function() {};

/**
 * @param {Object} data
 */
ITransformer.prototype.applyTransform = function(data) {};

/**
 * @param {tuna.tmpl.ITransformHandler} handler
 */
ITransformer.prototype.setTransformHandler = function(handler) {};

/**
 *
 */
ITransformer.prototype.destroy = function() {};

/**
 * @interface
 * @extends {ITransformer}
 */
tuna.tmpl.ITransformer = ITransformer;
/**
 * @constructor
 * @implements {tuna.tmpl.ITransformer}
 */
var TemplateTransformer = function() {

    /**
     * @private
     * @type {tuna.tmpl.units.Template}
     */
    this.__coreTemplate = null;

    /**
     * @private
     * @type {Node}
     */
    this.__target = null;

    /**
     * @private
     * @type {tuna.tmpl.ITransformHandler}
     */
    this.__transformHandler = null;
};

tuna.utils.implement(TemplateTransformer, tuna.tmpl.ITransformer);

/**
 * @param {Object} data Data to transform.
 */
TemplateTransformer.prototype.applyTransform = function(data) {
    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformStart(this.__target);
    }

    this.__coreTemplate.applyData(new tuna.tmpl.data.DataNode(data));

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformComplete(
            this.__target,
            this.__coreTemplate.fetchCreatedChildren(),
            this.__coreTemplate.fetchRemovedChildren()
        );
    }
};

/**
 * @param {tuna.tmpl.units.Template} template
 */
TemplateTransformer.prototype.setCoreTemplate = function(template) {
    this.__coreTemplate = template;
};

/**
 * @param {Node} element
 */
TemplateTransformer.prototype.setTargetElement = function(element) {
    this.__target = element;
};

/**
 * @param {tuna.tmpl.ITransformHandler} handler
 */
TemplateTransformer.prototype.setTransformHandler = function(handler) {
    this.__transformHandler = handler;
};

/**
 *
 */
TemplateTransformer.prototype.destroy = function() {
    this.__coreTemplate.destroy();

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleDestroy(
            this.__target,
            this.__coreTemplate.fetchRemovedChildren()
        );
    }

    this.__coreTemplate = null;
    this.__target = null;
    this.__transformHandler = null;
};

/**
 * @constructor
 * @extends {TemplateTransformer}
 */
tuna.tmpl.TemplateTransformer = TemplateTransformer;
/**
 * @constructor
 * @param {string} selector
 */
var Module = function(selector) {

    /**
     * @protected
     * @type {string}
     */
    this._selector = selector;
};

/**
 * @return {string}
 */
Module.prototype.getSelector = function() {
    return this._selector;
};

/**
 * @param {Node} context
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Module.prototype.init = function(context, container, options) {
    var instances = [];

    var targets = this._findTargets(context);

    var i = 0,
        l = targets.length;

    var instance = null;
    while (i < l) {
        if (this.__isInContext(targets[i], context)) {
            instance = this.initInstance(targets[i], container, options);
            instance.init && instance.init();

            instances.push(instance);
        }

        i++;
    }

    return instances;
};

/**
 * @protected
 * @param {Node} context
 */
Module.prototype._findTargets = function(context) {
    var targets = tuna.dom.select(this._selector, context);
    targets = targets.concat(tuna.dom.filter(this._selector, [context]));

    return targets;
};

/**
 * @private
 * @param {Node} target
 * @param {Node} context
 */
Module.prototype.__isInContext = function(target, context) {
    var result = true;

    var isolators = tuna.ui.modules.getIsolators();

    var i = 0,
        l = isolators.length;
    while (i < l) {
        result = result && tuna.dom.getParentWithClass
                            (target, isolators[i], context) === null;

        if (!result) {
            break;
        }

        i++;
    }


    return result;
};

/**
 * @param {Array.<tuna.ui.ModuleInstance>} instances
 */
Module.prototype.destroy = function(instances) {
    var i = 0,
        l = instances.length;

    while (i < l) {
        this.destroyInstance(instances[i]);

        i++;
    }

};

/**
 * @param {!Node} target
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {tuna.ui.ModuleInstance}
 */
Module.prototype.initInstance = function(target, container, options) {};

/**
 * @param {tuna.ui.ModuleInstance} instance
 */
Module.prototype.destroyInstance = function(instance) {};

/**
 * @constructor
 * @extends {Module}
 */
tuna.ui.Module = Module;

/**
 * @constructor
 * @extends {tuna.events.EventDispatcher}
 * @param {!Node} target
 */
var ModuleInstance = function(target) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type Node
     */
    this._target = target;

    /**
     * @private
     * @type Object.<string, ?string>
     */
    this.__defaultOptions = {};
};

tuna.utils.extend(ModuleInstance, tuna.events.EventDispatcher);

/**
 * @return {Node}
 */
ModuleInstance.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return {string}
 */
ModuleInstance.prototype.getName = function() {
    return this._target.getAttribute('data-name');
};

/**
 * @protected
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype._setDefaultOption = function(name, option) {
    this.__defaultOptions[name] = option;
};

/**
 * @public
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype.setOption = function(name, option) {
    if (option) {
        this._target.setAttribute('data-' + name, option);
    } else {
        this._target.removeAttribute('data-' + name);
    }
};

/**
 * @private
 * @param {string} name
 * @return {?string}
 */
ModuleInstance.prototype.getOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};

/**
 *
 */
ModuleInstance.prototype.init = function() {};

/**
 * @constructor
 * @extends {ModuleInstance}
 */
tuna.ui.ModuleInstance = ModuleInstance;/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Container = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type Object.<string, Array>
     */
    this.__moduleArgs = {};

    /**
     * @type Object.<string, Array.<tuna.ui.ModuleInstance>>
     */
    this.__moduleInstances = {};
};

tuna.utils.extend(Container, tuna.ui.ModuleInstance);

/**
 * @param {Node} element
 */
Container.prototype.render = function(element) {
    if (element !== undefined) {
        this.clear();
        this._target.appendChild(element);
    }
};

/**
 *
 */
Container.prototype.clear = function() {
    this._target.innerHTML = '';
};

/**
 * @param {string} type
 * @param {...} var_args
 */
Container.prototype.requireModule = function(type, var_args) {
    var args = tuna.utils.toArray(arguments);
    args.shift();

    if (this.__moduleArgs[type] === undefined) {
        this.__moduleArgs[type] = [null];
    }

    if (args.length > 0) {
        this.__moduleArgs[type].push(args);
    } else {
        this.__moduleArgs[type][0] = [];
    }
};

/**
 *
 * @param {Node=} target
 */
Container.prototype.initModules = function(target) {
    target = target || this._target;

    var module = null;
    var instances = null;
    for (var type in this.__moduleArgs) {
        module = tuna.ui.modules.getModule(type);

        if (module !== null) {
            if (this.__moduleInstances[type] === undefined) {
                this.__moduleInstances[type] = [];
            }

            instances
                = this.__initModule(module, target, this.__moduleArgs[type]);

            this.__moduleInstances[type]
                = this.__moduleInstances[type].concat(instances);

        } else {
            alert('Unknown module "' + type + '"');
        }
    }
};

/**
 * @param {string} type
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.getModuleInstances = function(type) {
    if (this.__moduleInstances[type] !== undefined) {
        return this.__moduleInstances[type];
    }

    return null;
};

/**
 * @param {string} type
 * @return {tuna.ui.ModuleInstance}
 */
Container.prototype.getOneModuleInstance = function(type) {
    if (this.__moduleInstances[type] !== undefined &&
        this.__moduleInstances[type][0] !== undefined) {
        return this.__moduleInstances[type][0];
    }

    return null;
};

Container.prototype.getModuleInstanceByName = function(type, name) {
    if (this.__moduleInstances[type] !== undefined) {
        var instances = this.__moduleInstances[type];

        var i = 0,
            l = instances.length;

        while (i < l) {
            if (instances[i].getName() === name) {
                return instances[i];
            }

            i++;
        }
    }

    return null;
};

/**
 *
 */
Container.prototype.destroyModules = function() {
    for (var name in this.__moduleInstances) {
        tuna.ui.modules.getModule(name)
                       .destroy(this.__moduleInstances[name]);

        this.__moduleInstances[name].length = 0;
    }
};

/**
 * @param {tuna.ui.Module} module
 * @param {Node} target
 * @param {Array} moduleArgs
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.__initModule = function(module, target, moduleArgs) {
    var result = [];

    var commonArgs = [target, this];

    var i = moduleArgs.length - 1;
    while (i >= 0) {
        if (moduleArgs[i] !== null) {
            result = result.concat(
                module.init.apply(module, commonArgs.concat(moduleArgs[i]))
            );
        }

        i--;
    }

    return result;
};

/**
 * @constructor
 * @extends {Container}
 */
tuna.ui.containers.Container = Container;
/**
 * @constructor
 * @extends {tuna.ui.containers.Container}
 * @param {!Node} target
 */
var TransformContainer = function(target) {
    tuna.ui.containers.Container.call(this, target);

    /**
     * @private
     * @type tuna.view.ViewController
     */
    this.__controller = null;

    /**
     * @private
     * @type tuna.tmpl.ITransformer
     */
    this.__transformer = null;

    this._setDefaultOption('template-id', null);
    this._setDefaultOption('init-event', null);
};

tuna.utils.extend(TransformContainer, tuna.ui.containers.Container);

/**
 * @param {tuna.tmpl.ITransformer} transformer
 */
TransformContainer.prototype.setTransformer = function(transformer) {
    this.__transformer = transformer;
};

/**
 * @override
 */
TransformContainer.prototype.render = function(element) {
    tuna.ui.containers.Container.prototype.render.call(this, element);

    if (this.__controller !== null) {
        this.__controller.init();
    }
};

/**
 * @override
 */
TransformContainer.prototype.clear = function() {
    tuna.ui.containers.Container.prototype.clear.call(this);

    if (this.__controller !== null) {
        this.__controller.destroy();
    }
};

/**
 * @override
 */
TransformContainer.prototype.init = function() {
    var initEvent = this.getOption('init-event');
    if (initEvent !== null) {
        var self = this;
        tuna.dom.addOneEventListener(this._target, initEvent, function(event) {
            self.__initContainer();
        });
    } else {
        this.__initContainer();
    }
};

/**
 * @private
 */
TransformContainer.prototype.__initContainer = function() {
    this.__controller = tuna.view.getController(this._target);

    if (this.__controller !== null) {
        if (this.__transformer !== null) {
            this.__transformer.setTransformHandler(this.__controller);
        }

        this.__controller.setContainer(this);
        this.__controller.bootstrap();
    }
};

/**
 * @param {Object} data
 */
TransformContainer.prototype.applyData = function(data) {
    if (this.__transformer !== null) {
        this.__transformer.applyTransform(data);
    }
};

tuna.ui.containers.TransformContainer = TransformContainer;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Form = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type Node
     */
    this.__formMessage = null;

    /**
     * @private
     * @type Object.<string, tuna.ui.forms.FormInput>
     */
    this.__inputTable = {};

    this.__callbackName = Form.CALLBACK_PREFIX + (Math.random() + '').substr(2);
};

tuna.utils.extend(Form, tuna.ui.ModuleInstance);

/**
 * @const
 * @type string
 */
Form.CALLBACK_PREFIX = 'form_callback';

/**
 * @override
 */
Form.prototype.init = function() {
    this.__formMessage = tuna.dom.selectOne('.j-form-message', this._target);

    var self = this;
    tuna.dom.addEventListener(this._target, 'submit', function(event) {
        self.__prepareToSubmit(event);
    });

    var callbackInput = document.createElement('input');
    callbackInput.type = 'hidden';
    callbackInput.name = '__callback';
    callbackInput.value = this.__callbackName;

    this._target.appendChild(callbackInput);
};

/**
 * 
 */
Form.prototype.submit = function() {
    this.__prepareToSubmit();
    this._target.submit();
};

/**
 * @param {Event} event
 */
Form.prototype.__prepareToSubmit = function(event) {
    if (this.dispatch('submit')) {
        this.__clearMessage();
        this.__clearInputs();
        
        this.__registerCallback();
    } else {
        tuna.dom.preventDefault(event);
    }
};

/**
 * @private
 */
Form.prototype.__registerCallback = function() {
    var self = this;

    window[this.__callbackName] = function(response) {
        self.__handleResponse(response);
        
        delete window[self.__callbackName];
    };
};

/**
 * @private
 * @param {Object} data
 */
Form.prototype.__handleResponse = function(data) {
    var response = data['response'];
    var errors = data['errors'];

    if (response !== undefined) {
        this.dispatch('result', response);
    } else if (errors !== undefined) {
        this.__showErrors(errors);
        this.dispatch('error', errors);
    }
};

/**
 * @private
 * @param {Array.<Object>} errors
 */
Form.prototype.__showErrors = function(errors) {
    var i = 0,
        l = errors.length;

    var error = null;
    while (i < l) {
        error = errors[i];
        if (error.param !== undefined) {
            this.__showInputError(error.param, error.message);
        } else {
            this.__showErrorMessage(error.message);
        }

        i++;
    }
};

/**
 * @private
 * @param {string} name
 * @return {tuna.ui.forms.FormInput}
 */
Form.prototype.__getFormInput = function(name) {
    var result = null;

    if (this.__inputTable[name] === undefined) {
        var inputWrapper
            = tuna.dom.selectOne('.j-' + name + '-input', this._target);

        if (inputWrapper !== null) {
            var input = new tuna.ui.forms.FormInput(inputWrapper);
            input.init();

            this.__inputTable[name] = input;
        }
    }

    if (this.__inputTable[name] !== undefined) {
        result = this.__inputTable[name];
    }

    return result;
};

/**
 * @private
 */
Form.prototype.__clearMessage = function() {
    if (this.__formMessage !== null) {
        tuna.dom.removeClass(this.__formMessage, 'error');
        tuna.dom.addClass(this.__formMessage, 'hide');
        this.__formMessage.innerHTML = '';
    }
};

/**
 * @private
 * @param {string} message
 */
Form.prototype.__showErrorMessage = function(message) {
    this.__formMessage.innerHTML += message + '<br />';

    tuna.dom.addClass(this.__formMessage, 'error');
    tuna.dom.removeClass(this.__formMessage, 'hide');
};

/**
 * @private
 * @param {string} name
 * @param {string} message
 */
Form.prototype.__showInputError = function(name, message) {
    var formInput = this.__getFormInput(name);
    if (formInput !== null) {
        formInput.showErrorMessage(message);
    } else {
        this.__showErrorMessage(message);
    }
};

/**
 * @private
 */
Form.prototype.__clearInputs = function() {
    for (var name in this.__inputTable) {
        this.__inputTable[name].cleanup();
    }
};

/**
 * @constructor
 * @extends {Form}
 */
tuna.ui.forms.Form = Form;/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var FormInput = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {Node}
     */
    this.__message = null;

    /**
     * @private
     * @type {string}
     */
    this.__defaultMessage = '';
};

tuna.utils.extend(FormInput, tuna.ui.ModuleInstance);

/**
 * @override
 */
FormInput.prototype.init = function() {
    this.__message = tuna.dom.selectOne('.j-message', this._target);

    if (this.__message !== null) {
        this.__defaultMessage = this.__message.innerHTML;
    }
};

/**
 * @param {string} message
 */
FormInput.prototype.showErrorMessage = function(message) {
    tuna.dom.addClass(this._target, 'error');

    if (this.__message !== null) {
        this.__message.innerHTML = message;
    }
};

/**
 *
 */
FormInput.prototype.cleanup = function() {
    tuna.dom.removeClass(this._target, 'error');
    if (this.__message !== null) {
        this.__message.innerHTML = this.__defaultMessage;
    }
};

/**
 * @constructor
 * @extends {FormInput}
 */
tuna.ui.forms.FormInput = FormInput;/**
 * @private
 * @type {Object.<string, tuna.ui.popups.Popup>}
 */
tuna.ui.popups.__idTable = {};

/**
 * @param {!Node} target
 * @return {tuna.ui.popups.Popup}
 */
tuna.ui.popups.create = function(target) {
    var popup = null;

    if (target.id !== null) {
        if (tuna.ui.popups.__idTable[target.id] === undefined) {
            popup = new tuna.ui.popups.Popup(target);
            popup.init();

            tuna.ui.popups.__idTable[target.id] = popup;
        }

        return tuna.ui.popups.__idTable[target.id];
    } else {
        popup = new tuna.ui.popups.Popup(target);
        popup.init();

        return popup;
    }

};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__alert = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__alertMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerAlert = function(target) {
    tuna.ui.popups.__alert = tuna.ui.popups.create(target);
    tuna.ui.popups.__alert.init();
    tuna.ui.popups.__alertMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 */
tuna.ui.popups.alert = function(message) {
    tuna.ui.popups.__alertMessage.innerHTML = message;
    tuna.ui.popups.__alert.open();
};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__confirm = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__confirmMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerConfirm = function(target) {
    tuna.ui.popups.__confirm  = tuna.ui.popups.create(target);
    tuna.ui.popups.__confirm.init();
    tuna.ui.popups.__confirmMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 * @param {function(boolean)} callback
 */
tuna.ui.popups.confirm = function(message, callback) {
    tuna.ui.popups.__confirmMessage.innerHTML = message;

    var okHandler = function(event) {
        callback && callback(true);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    var cancelHandler = function(event) {
        callback && callback(false);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    tuna.ui.popups.__confirm.addEventListener('popup-apply', okHandler);
    tuna.ui.popups.__confirm.addEventListener('popup-close', cancelHandler);

    tuna.ui.popups.__confirm.open();
};


/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Popup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type boolean
     */
    this.__isInit = false;
};

tuna.utils.extend(Popup, tuna.ui.ModuleInstance);

/**
 * @override
 */
Popup.prototype.init = function() {
    if (!this.__isInit) {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-close', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.close();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-apply', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.apply();
            }
        );
    }
};

/**
 * @return {boolean}
 */
Popup.prototype.isOpen = function() {
    return tuna.dom.hasClass(this._target, 'show');
};

/**
 *
 */
Popup.prototype.open = function() {
    if (this.dispatch('popup-open')) {
        this.__show();
    }
};

/**
 *
 */
Popup.prototype.close = function() {
    if (this.dispatch('popup-close')) {
        this.__hide();
    }
};

/**
 *
 */
Popup.prototype.apply = function() {
    if (this.dispatch('popup-apply', this.__collectData())) {
        this.__hide();
    }
};

/**
 * @private
 */
Popup.prototype.__hide = function() {
    tuna.dom.removeClass(this._target, 'show');
};

/**
 * @private
 */
Popup.prototype.__show = function() {
    tuna.dom.addClass(this._target, 'show');
};

/**
 * @private
 * @return {Object.<string, string>}
 */
Popup.prototype.__collectData = function() {
    var result = {};

    var form = tuna.dom.selectOne('form.j-popup-form', this._target);
    var array = $(form).serializeArray();

    var i = 0,
        l = array.length;

    var name = null;
    while (i < l) {
        name = array[i].name;

        if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
                result[name] = [result[name]];
            }
            result[name].push(array[i].value);
        } else {
            result[name] = array[i].value;
        }

        i++
    }

    return result;
};

/**
 * @constructor
 * @extends {Popup}
 */
tuna.ui.popups.Popup = Popup;/**
 * @interface
 */
var IItemsCollection = function() {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.addItem = function(item) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.getItemIndex = function(item) {};

/**
* @param {string|number} index
* @return {Node}
*/
IItemsCollection.prototype.getItemAt = function(index) {};

/**
* @param {function((string|number), Node)} callback
*/
IItemsCollection.prototype.mapItems = function(callback) {};

/**
 *
 */
IItemsCollection.prototype.clear = function() {};


/**
 * @interface
 * @extends {IItemsCollection}
 */
tuna.ui.selection.items.IItemsCollection = IItemsCollection;/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 */
var ElementsCollection = function() {

    /**
     * @private
     * @type Array.<Node>
     */
    this.__items = [];
};

tuna.utils.implement
    (ElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
ElementsCollection.prototype.addItem = function(item) {
    return this.__items.push(item) - 1;
};

/**
 * @override
 */
ElementsCollection.prototype.getItemIndex = function(item) {
    return tuna.utils.indexOf(item, this.__items);
};

/**
 * @override
 */
ElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
ElementsCollection.prototype.clear = function() {
    this.__items.length = 0;
};

/**
 * @override
 */
ElementsCollection.prototype.mapItems = function(callback) {
    var i = 0,
        l = this.__items.length;

    while (i < l) {
        callback(i, this.__items[i]);

        i++;
    }
};

/**
 * @constructor
 * @extends {ElementsCollection}
 */
tuna.ui.selection.items.ElementsCollection = ElementsCollection;/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 * @param {string} indexAttribute
 */
var NamedElementsCollection = function(indexAttribute) {
    /**
     * @private
     * @type string
     */
    this.__indexAttribute = indexAttribute;

    /**
     * @private
     * @type Object.<(string|number), Node>
     */
    this.__items = {};
};

tuna.utils.implement
    (NamedElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
NamedElementsCollection.prototype.addItem = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null) {
        this.__items[index] = item;
    }

    return index;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemIndex = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null && this.__items[index] !== undefined) {
        return index;
    }

    return null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.clear = function() {
    this.__items = {};
};

/**
 * @override
 */
NamedElementsCollection.prototype.mapItems = function(callback) {
    for (var index in this.__items) {
        if (this.__items.hasOwnProperty(index)) {
            callback(index, this.__items[index]);
        }
    }
};

/**
 * @constructor
 * @extends {NamedElementsCollection}
 */
tuna.ui.selection.items.NamedElementsCollection = NamedElementsCollection;/**
 * @interface
 */
var ISelectionRule = function() {};

/**
 * @return Array.<string|number>
 */
ISelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 */
ISelectionRule.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionRule.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionRule.prototype.clearSelection = function() {};

/**
 * @interface
 * @extends {ISelectionRule}
 */
tuna.ui.selection.rule.ISelectionRule = ISelectionRule;/**
 * @constructor
 * @implements {tuna.ui.selection.rule.ISelectionRule}
 */
var AbstractSelectionRule = function() {
    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;

    /**
     * @protected
     * @type tuna.ui.selection.view.ISelectionView
     */
    this._selectionView = null;

    /**
     * @protected
     * @type tuna.events.EventDispatcher
     */
    this._eventDispatcher = null;
};

tuna.utils.implement(AbstractSelectionRule, tuna.ui.selection.rule.ISelectionRule);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionRule.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.view.ISelectionView} view
 */
AbstractSelectionRule.prototype.setSelectionView = function(view) {
    this._selectionView = view;
};

/**
 * @param {tuna.events.EventDispatcher} dispatcher
 */
AbstractSelectionRule.prototype.setEventDispatcher = function(dispatcher) {
    this._eventDispatcher = dispatcher;
};

/**
 * @override
 */
AbstractSelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @override
 */
AbstractSelectionRule.prototype.selectIndex = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.isSelected = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.clearSelection = function() {};


/**
 * @constructor
 * @extends {AbstractSelectionRule}
 */
tuna.ui.selection.rule.AbstractSelectionRule = AbstractSelectionRule;/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var SingleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(number|string)
     */
    this.__currentIndex = null;
};

tuna.utils.extend(SingleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @override
 */
SingleSelectionRule.prototype.getSelectedIndexes = function() {
    if (this.__currentIndex !== null) {
        return [this.__currentIndex];
    }

    return [];
};

/**
 * @override
 */
SingleSelectionRule.prototype.selectIndex = function(index) {
    if (this._selectionGroup.isIndexEnabled(index) &&
        this.__currentIndex !== index &&
        this.__dispatchSelect(index)) {

        var oldIndex = this.__currentIndex;

        if (this.__currentIndex !== null) {
            this._selectionView.destroySelectionAt(this.__currentIndex);
        }

        this._selectionView.applySelectionAt(index);

        this.__currentIndex = index;

        if (oldIndex !== null) {
            this._eventDispatcher.dispatch('deselected', oldIndex)
        }

        this._eventDispatcher.dispatch('selected', index)
    }
};

/**
 * @private
 * @param {string|number} newIndex
 */
SingleSelectionRule.prototype.__dispatchSelect = function(newIndex) {
    var oldIndex = this.__currentIndex;

    return (oldIndex === null ||
            this._eventDispatcher.dispatch('deselect', oldIndex)) &&
            this._eventDispatcher.dispatch('select', newIndex)
};

/**
 * @override
 */
SingleSelectionRule.prototype.isSelected = function(index) {
    return index === this.__currentIndex;
};

/**
 * @override
 */
SingleSelectionRule.prototype.clearSelection = function() {
    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};

/**
 * @constructor
 * @extends {SingleSelectionRule}
 */
tuna.ui.selection.rule.SingleSelectionRule = SingleSelectionRule;/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var MultipleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__selectedIndexes = [];
};

tuna.utils.extend
    (MultipleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @override
 */
MultipleSelectionRule.prototype.getSelectedIndexes = function() {
    return tuna.utils.cloneArray(this.__selectedIndexes);
};

/**
 * @override
 */
MultipleSelectionRule.prototype.selectIndex = function(index) {
    if (this._selectionGroup.isIndexEnabled(index)) {
        var indexPosition = tuna.utils.indexOf(index, this.__selectedIndexes);
        if (indexPosition === -1) {
            if (this._eventDispatcher.dispatch('select', index)) {

                this._selectionView.applySelectionAt(index);
                this.__selectedIndexes.push(index);
            }
        } else {
            if (this._eventDispatcher.dispatch('deselect', index)) {

                this._selectionView.destroySelectionAt(index);
                this.__selectedIndexes.splice(indexPosition, 1);
            }
        }
    }
};

/**
 * @override
 */
MultipleSelectionRule.prototype.isSelected = function(index) {
    return tuna.utils.indexOf(index, this.__selectedIndexes) !== -1;
};

/**
 * @override
 */
MultipleSelectionRule.prototype.clearSelection = function() {
    while (this.__selectedIndexes.length > 0) {
        this._selectionView.destroySelectionAt
            (this.__selectedIndexes.shift());
    }
};

/**
 * @constructor
 * @extends {MultipleSelectionRule}
 */
tuna.ui.selection.rule.MultipleSelectionRule = MultipleSelectionRule;
/**
 * @interface
 */
var ISelectionView = function() {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.disableItemAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.enableItemAt = function(index) {};

/**
 *
 */
ISelectionView.prototype.update = function() {};

/**
 * @interface
 * @extends {ISelectionView}
 */
tuna.ui.selection.view.ISelectionView = ISelectionView;/**
 * @constructor
 * @implements {tuna.ui.selection.view.ISelectionView}
 */
var AbstractSelectionView = function() {
    /**
     * @protected
     * @type tuna.ui.selection.items.IItemsCollection
     */
    this._itemsCollection = null;

    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;
};

tuna.utils.implement
    (AbstractSelectionView, tuna.ui.selection.view.ISelectionView);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionView.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
AbstractSelectionView.prototype.setItemsCollection = function(collection) {
    this._itemsCollection = collection;
};

/**
 * @override
 */
AbstractSelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.disableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.enableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.update = function() {};

/**
 * @constructor
 * @extends {AbstractSelectionView}
 */
tuna.ui.selection.view.AbstractSelectionView = AbstractSelectionView;(function() {

    var ClassSelectionView = function(target) {
        tuna.ui.selection.view.AbstractSelectionView.call(this);

        this._target = target;

        this._itemSelector = null;

        this._selectionClass = null;
        this._disabledClass = 'disabled';
    };

    tuna.utils.extend(ClassSelectionView, tuna.ui.selection.view.AbstractSelectionView);

    ClassSelectionView.prototype.setItemSelector = function(selector) {
        this._itemSelector = selector;
    };

    ClassSelectionView.prototype.setSelectionClass = function(className) {
        this._selectionClass = className;
    };

    ClassSelectionView.prototype.setDisabledClass = function(className) {
        this._disabledClass = className;
    };


    ClassSelectionView.prototype.applySelectionAt = function(index) {
        tuna.dom.addClass
            (this._itemsCollection.getItemAt(index), this._selectionClass);
    };

    ClassSelectionView.prototype.destroySelectionAt = function(index) {
        var item = this._itemsCollection.getItemAt(index);
        if (item !== null) {
            tuna.dom.removeClass(item, this._selectionClass);
        }
    };


    ClassSelectionView.prototype.disableItemAt = function(index) {
        tuna.dom.addClass
            (this._itemsCollection.getItemAt(index), this._disabledClass);
    };

    ClassSelectionView.prototype.enableItemAt = function(index) {
        tuna.dom.removeClass
            (this._itemsCollection.getItemAt(index), this._disabledClass);
    };


    ClassSelectionView.prototype.update = function() {
        this._selectionGroup.clearSelection();
        this._itemsCollection.clear();

        var possibleItems = tuna.dom.select(this._itemSelector, this._target);

        var i = 0,
            l = possibleItems.length;

        var index = null;
        var item = null;
        while (i < l) {
            item = possibleItems[i];
            if (tuna.dom.getParentMatches
                (item, this._itemSelector, this._target) === null) {

                index = this._itemsCollection.addItem(item);
                if (index !== null &&
                    tuna.dom.hasClass(item, this._selectionClass)) {
                    this._selectionGroup.selectIndex(index);
                }
            }

            i++;
        }
    };


    tuna.ui.selection.view.ClassSelectionView = ClassSelectionView;
})();/**
 * @interface
 */
var ISelectionGroup = function() {};

/**
 * @return {Array.<string|number>}
 */
ISelectionGroup.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 */
ISelectionGroup.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionGroup.prototype.clearSelection = function() {};

/**
 *
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
ISelectionGroup.prototype.setIndexEnabled = function(index, isEnabled) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isIndexEnabled = function(index) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
ISelectionGroup.prototype.getItemIndex = function(item) {};

/**
 * @param {string|number} index
 * @return {Node}
 */
ISelectionGroup.prototype.getItemAt = function(index) {};

/**
 * @param {function((string|number), Node)} callback
 */
ISelectionGroup.prototype.mapItems = function(callback) {};

/**
 *
 */
ISelectionGroup.prototype.updateView = function() {};

/**
 * @interface
 * @extends {ISelectionGroup}
 */
tuna.ui.selection.ISelectionGroup = ISelectionGroup;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @implements {tuna.ui.selection.ISelectionGroup}
 * @param {!Node} target
 */
var AbstractSelectionGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    this._itemsCollection = null;

    this._selectionView = null;
    this._selectionRule = null;

    this._disabledIndexes = [];
};

tuna.utils.implement(AbstractSelectionGroup, tuna.ui.selection.ISelectionGroup);
tuna.utils.extend(AbstractSelectionGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
AbstractSelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {

    var indexPosition = tuna.utils.indexOf(index, this._disabledIndexes);
    if (isEnabled) {
        if (indexPosition !== -1) {
            this._selectionView.enableItemAt(index);
            this._disabledIndexes.splice(indexPosition, 1);
        }
    } else if (indexPosition === -1) {
        this._selectionView.disableItemAt([index]);
        this._disabledIndexes.push(index);
    }
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isIndexEnabled = function(index) {
    return tuna.utils.indexOf(index, this._disabledIndexes) === -1;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.updateView = function() {
    this._selectionView.update();
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemIndex = function(item) {
    return this._itemsCollection.getItemIndex(item);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemAt = function(index) {
    return this._itemsCollection.getItemAt(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.mapItems = function(callback) {
    this._itemsCollection.mapItems(callback);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getSelectedIndexes = function() {
    return this._selectionRule.getSelectedIndexes();
};

/**
 * @return {string|number}
 */
AbstractSelectionGroup.prototype.getLastSelectedIndex = function() {
    var indexes = this._selectionRule.getSelectedIndexes();
    if (indexes.length > 0) {
        return indexes.pop();
    }

    return -1;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.selectIndex = function(index) {
    this._selectionRule.selectIndex(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isSelected = function(index) {
    return this._selectionRule.isSelected(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.clearSelection = function() {
    this._selectionRule.clearSelection();
};

/**
 * @constructor
 * @extends {AbstractSelectionGroup}
 */
tuna.ui.selection.AbstractSelectionGroup = AbstractSelectionGroup;/**
 * @constructor
 * @extends {tuna.ui.selection.AbstractSelectionGroup}
 * @param {!Node} target
 * @param {string} indexAttribute
 */
var SelectionGroup = function(target, indexAttribute) {
    tuna.ui.selection.AbstractSelectionGroup.call(this, target);

    this._setDefaultOption('item-selector', '.j-selection-item');
    this._setDefaultOption('index-attribute', indexAttribute);
    this._setDefaultOption('is-multiple', null);
    this._setDefaultOption('selection-class', 'active');
    this._setDefaultOption('selection-event', 'click');
};

tuna.utils.extend(SelectionGroup, tuna.ui.selection.AbstractSelectionGroup);

/**
 * @override
 */
SelectionGroup.prototype.init = function() {
    var indexAttribute = this.getOption('index-attribute');

    this._itemsCollection = indexAttribute === null ?
            new tuna.ui.selection.items.ElementsCollection():
            new tuna.ui.selection.items.NamedElementsCollection(indexAttribute);

    this._selectionView
        = new tuna.ui.selection.view.ClassSelectionView(this._target);

    this._selectionRule = this.getOption('is-multiple') ?
            new tuna.ui.selection.rule.MultipleSelectionRule() :
            new tuna.ui.selection.rule.SingleSelectionRule();

    this._selectionView.setSelectionClass(this.getOption('selection-class'));
    this._selectionView.setItemSelector(this.getOption('item-selector'));
    this._selectionView.setSelectionGroup(this);
    this._selectionView.setItemsCollection(this._itemsCollection);

    this._selectionRule.setSelectionGroup(this);
    this._selectionRule.setEventDispatcher(this);
    this._selectionRule.setSelectionView(this._selectionView);

    this._selectionView.update();
};

/**
 * @constructor
 * @extends {SelectionGroup}
 */
tuna.ui.selection.SelectionGroup = SelectionGroup;/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Navigation = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, 'id');

    /**
     * @private
     * @type Object.<string, string>
     */
    this.__openData = null;

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__history = [];

    this.setOption('is-multiple', null);
    this._setDefaultOption('item-selector', '.j-navigation-page');
};

tuna.utils.extend(Navigation, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Navigation.prototype.init = function() {
    var self = this;

    this.addEventListener('deselected', function(event, index) {
        self.dispatch('close');
    });

    this.addEventListener('selected', function(event, index) {
        self.dispatch('open', self.__openData);
    });

    tuna.ui.selection.SelectionGroup.prototype.init.call(this);
};

/**
 * @param {string|number} index
 * @param {Object.<string, string>=} data
 */
Navigation.prototype.navigate = function(index, data) {
    var currentIndex = this.getLastSelectedIndex();
    if (currentIndex !== null) {
        this.__history.push(currentIndex);
    }

    this.__openData = data || null;
    this.selectIndex(index);
    this.__openData = null;
};

/**
 *
 */
Navigation.prototype.back = function() {
    this.selectIndex(this.__history.pop());
};

/**
 * @constructor
 * @extends {Navigation}
 */
tuna.ui.selection.Navigation = Navigation;/**
 * @private
 * @type Object.<string, tuna.ui.Module>
 */
tuna.ui.modules.__typeTable = {};

/**
 * @private
 * @type Array.<string>
 */
tuna.ui.modules.__isolators = [];

/**
 * @param {string} type
 * @param {tuna.ui.Module} module
 */
tuna.ui.modules.register = function(type, module) {
    tuna.ui.modules.__typeTable[type] = module;
};

/**
 * @param {string} type
 * @return {tuna.ui.Module}
 */
tuna.ui.modules.getModule = function(type) {
    if (tuna.ui.modules.__typeTable[type] !== undefined) {
        return tuna.ui.modules.__typeTable[type];
    }

    return null;
};

/**
 * @param {string} className
 */
tuna.ui.modules.addIsolator = function(className) {
    tuna.ui.modules.__isolators.push(className);
};

/**
 * @return Array.<string>
 */
tuna.ui.modules.getIsolators = function() {
    return tuna.ui.modules.__isolators;
};
/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var TransformContainerModule = function() {
    tuna.ui.Module.call(this, '.j-transform-container');

    /**
     * @private
     * @type tuna.tmpl.markup.MarkupTemplateBuilder
     */
    this.__templateBuilder
        = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

    /**
     * @private
     * @type tuna.tmpl.compilers.TemplateCompiler
     */
    this.__templateCompiler 
        = new tuna.tmpl.compilers.TemplateCompiler(document);

    /**
     * @private
     * @type Object.<string, tuna.tmpl.settings.TemplateSettings>
     */
    this.__templatesTable = {};
};

tuna.utils.extend(TransformContainerModule, tuna.ui.Module);

/**
 * @override
 */
TransformContainerModule.prototype._findTargets = function(context) {
    return tuna.dom.select(this._selector, context);
};

/**
 * @private
 * @param {string} id
 */
TransformContainerModule.prototype.__getTemplate = function(id) {
    if (this.__templatesTable[id] === undefined) {
        this.__templatesTable[id]
            = this.__templateBuilder.buildSettings(id);
    }

    return this.__templatesTable[id];
};

TransformContainerModule.prototype.initInstance = function(target, parent) {

    var container = new tuna.ui.containers.TransformContainer(target);
    var templateID = container.getOption('template-id');

    var template = this.__getTemplate(templateID);
    if (template !== null) {
        var transformer
            = this.__templateCompiler.makeTransformer(template, target);

        container.setTransformer(transformer);
    }


    return container;
};

tuna.ui.modules.register('transform-container', new TransformContainerModule());
tuna.ui.modules.addIsolator('j-transform-container');

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var NavigationModule = function() {
    tuna.ui.Module.call(this, '.j-navigation');
};

tuna.utils.extend(NavigationModule, tuna.ui.Module);

/**
 * @override
 */
NavigationModule.prototype.initInstance = function(target) {
    var navigation = new tuna.ui.selection.Navigation(target);

    navigation.addEventListener('selected', function(event, index) {
        tuna.dom.dispatchEvent(navigation.getItemAt(index), 'ui-navigate');
    });

    tuna.dom.addChildEventListener(
        target, '.j-navigation-link', 'click', function(event) {
            var index = this.getAttribute('data-href');
            if (index !== null) {
                navigation.navigate
                    (index, tuna.dom.getAttributesData(this));
            }
        }
    );

    tuna.dom.addChildEventListener(
        target, '.j-navigation-back', 'click', function(event) {
            navigation.back();
        }
    );

    return navigation;
};

tuna.ui.modules.register('navigation', new NavigationModule());
/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SelectionGroupModule = function() {
    tuna.ui.Module.call(this, '.j-selection-group');
};

tuna.utils.extend(SelectionGroupModule, tuna.ui.Module);

/**
 * @override
 */
SelectionGroupModule.prototype.initInstance = function(target) {

    var selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);

    var selectionEvent = selectionGroup.getOption('selection-event');
    var itemSelector = selectionGroup.getOption('item-selector');

    tuna.dom.addChildEventListener(
        target, itemSelector, selectionEvent, function() {
            var index = selectionGroup.getItemIndex(this);
            if (index !== null) {
                selectionGroup.selectIndex(index);
            }
        }
    );

    return selectionGroup;
};



tuna.ui.modules.register('selection-group', new SelectionGroupModule());
/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var FormModule = function() {
    tuna.ui.Module.call(this, 'form.j-form');
};

tuna.utils.extend(FormModule, tuna.ui.Module);

/**
 * @override
 */
FormModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.Form(target);
};

tuna.ui.modules.register('form', new FormModule());
/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupModule = function() {
    tuna.ui.Module.call(this, '.j-popup');
};

tuna.utils.extend(PopupModule, tuna.ui.Module);

/**
 * @verride
 * @param target
 */
PopupModule.prototype.initInstance = function(target) {
    var popupElement =
        tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

    var popup = tuna.ui.popups.create(popupElement);
    tuna.dom.addEventListener(target, 'click', function(event) {
        popup.open();
    });

    return popup;
};

tuna.ui.modules.register('popup', new PopupModule());
(function() {

    var Record = function() {};

    Record.prototype.clone = function() {
        var clone = new this.constructor();
        for (var param in this) {
            if (this.hasOwnProperty(param)) {
                clone[param] = this[param];
            }
        }

        return clone;
    };

    tuna.model.Record = Record;

})();
/**
 * @private
 * @type Object.<string, tuna.view.ViewController>
 */
tuna.view.__idTable = {};

/**
 * @private
 * @type tuna.view.ViewController
 */
tuna.view.__mainController = null;

/**
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.setMainController = function(controller) {
    tuna.view.__mainController = controller;
};

/**
 * @param {!string} targetId
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.registerController = function(targetId, controller) {
    tuna.view.__idTable[targetId] = controller;
};

/**
 * @param {Node} target
 * @return {tuna.view.ViewController}
 */
tuna.view.getController = function(target) {
    if (target === document.body) {
        return tuna.view.__mainController;
    } else if (target !== null &&
               tuna.view.__idTable[target.id] !== undefined) {
        return tuna.view.__idTable[target.id];
    }

    return null;
};
(function() {

    var IViewState = function() {};

    IViewState.prototype.requireModules = function(container) {};
    
    IViewState.prototype.initActions = function(modules) {};

    tuna.view.IViewState = IViewState;

})();/**
 * @constructor
 * @implements {tuna.tmpl.ITransformHandler}
 */
var ViewController = function() {

    /**
     * @protected
     * @type tuna.ui.containers.Container
     */
    this._container = null;
};

tuna.utils.implement(ViewController, tuna.tmpl.ITransformHandler);

/**
 * @param {tuna.ui.containers.Container} container
 */
ViewController.prototype.setContainer = function(container) {
    this._container = container;
};

/**
 *
 */
ViewController.prototype.bootstrap = function() {
    this.init();
};

/**
 *
 */
ViewController.prototype.terminate = function() {
    this.destroy();
};

/**
 * @protected
 */
ViewController.prototype.init = function() {
    this._requireModules();
    this._container.initModules();
    this._initActions();
};

/**
 * @protected
 */
ViewController.prototype._requireModules = function() {};

/**
 * @protected
 */
ViewController.prototype._initActions = function() {};

/**
 * @protected
 */
ViewController.prototype.destroy = function() {
    this._destroyActions();
    this._container.destroyModules();
};

/**
 * @protected
 */
ViewController.prototype._destroyActions = function() {};

/**
 * @override
 */
ViewController.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {

    var i = 0,
        l = createdElements.length;

    while (i < l) {
        this._container.initModules(createdElements[i]);
        i++;
    }
};

/**
 * @override
 */
ViewController.prototype.handleTransformStart = function(target) {};

/**
 * @override
 */
ViewController.prototype.handleDestroy = function(target, removedElements) {};


/**
 * @constructor
 * @extends {ViewController}
 */
tuna.view.ViewController = ViewController;

(function() {

    var StateViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this.__currentState = null;
    };

    tuna.utils.extend(StateViewController, tuna.view.ViewController);

    StateViewController.prototype._setCurrentState = function(state) {
        this.__currentState = state;
    };

    StateViewController.prototype._requireModules = function() {
        this.__currentState.requireModules(this._container);
    };

    StateViewController.prototype._initActions = function(modules) {
        this.__currentState.initActions(modules);
    };

    tuna.view.StateViewController = StateViewController;
})();/**
 * @constructor
 * @extends {tuna.view.ViewController}
 */
var NavigationViewController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @protected
     * @type (tuna.ui.selection.Navigation|tuna.ui.ModuleInstance)
     */
    this._pageNavigation = null;

    /**
     * @protected
     * @type (tuna.view.PageViewController|tuna.view.ViewController)
     */
    this._currentController = null;

    /**
     * @protected
     * @type Node
     */
    this._currentPage = null;
};

tuna.utils.extend(NavigationViewController, tuna.view.ViewController);

/**
 * @override
 */
NavigationViewController.prototype._requireModules = function() {
    this._container.requireModule('transform-container');
    this._container.requireModule('navigation');
};

/**
 * @override
 */
NavigationViewController.prototype._initActions = function() {
    this._pageNavigation = this._container.getOneModuleInstance('navigation');

    if (this._pageNavigation !== null) {
        var self = this;

        this._pageNavigation.addEventListener('select',
            /**
             * @param {tuna.events.BasicEvent} event
             * @param {*} index
             */
            function(event, index) {
                if (!self._canClose(index)) {
                    event.preventDefault();
                }
            }
        );

        this._pageNavigation.addEventListener('close',
            /**
             * @param {tuna.events.BasicEvent} event
             */
            function(event) {
                if (self._currentController !== null) {
                    self._currentController.close();
                }
            }
        );

        this._pageNavigation.addEventListener('open',
            /**
             * @param {tuna.events.BasicEvent} event
             * @param {*} data
             */
            function(event, data) {
                self._setCurrentPage
                    (self._pageNavigation.getLastSelectedIndex(), data);
            }
        );

        this._pageNavigation.mapItems(function(index, page) {
            var pageController = tuna.view.getController(page);
            if (pageController !== null) {
                pageController.setNavigation(self._pageNavigation);
            }
        });

        this._setCurrentPage(this._pageNavigation.getLastSelectedIndex());
    }

};

/**
 * @protected
 * @param {string} index
 * @return {boolean}
 */
NavigationViewController.prototype._canClose = function(index) {
    if (this._currentController !== null) {
        return this._currentController.canClose(index);
    }

    return true;
};

/**
 * @param {string} index
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._setCurrentPage = function(index, args) {
    var newPage = this._pageNavigation.getItemAt(index);
    var oldPage = this._currentPage;

    if (this._currentPage !== null) {
        this._handlePageClose(this._currentPage, newPage);
    }

    this._currentPage = newPage;

    this._currentController = tuna.view.getController(this._currentPage);
    if (this._currentController !== null) {
        this._currentController.open(args || null);
    }

    this._handlePageOpen(this._currentPage, oldPage);
};

/**
 * @protected
 * @param {Node} currentPage
 * @param {Node} newPage
 */
NavigationViewController.prototype._handlePageClose
    = function(currentPage, newPage) {};

/**
 * @protected
 * @param {Node} currentPage
 * @param {Node} oldPage
 */
NavigationViewController.prototype._handlePageOpen
    = function(currentPage, oldPage) {};

/**
 * @constructor
 * @extends {NavigationViewController}
 */
tuna.view.NavigationViewController = NavigationViewController;
/**
 * @constructor
 * @extends {tuna.view.ViewController}
 */
var PageViewController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @protected
     * @type tuna.ui.selection.Navigation
     */
    this._navigation = null;
};

tuna.utils.extend(PageViewController, tuna.view.ViewController);

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
PageViewController.prototype.setNavigation = function(navigation) {
    this._navigation = navigation;
};

/**
 * @param {string} index
 */
PageViewController.prototype.canClose = function(index) {
    return true;
};

/**
 *
 */
PageViewController.prototype.close = function() {};

/**
 * @param {Object.<string, string>} args
 */
PageViewController.prototype.open = function(args) {};

/**
 * @constructor
 * @extends {PageViewController}
 */
tuna.view.PageViewController = PageViewController;/**
 * @namespace
 */
var model = {};

/**
 * @namespace
 */
model.records = {};

/**
 * @namespace
 */
var rest = {};

/**
 * @namespace
 */
rest.social = {};

/**
 * @namespace
 */
rest.social.vk = {};

/**
 * @namespace
 */
rest.social.vk.friends = {};

/**
 * @namespace
 */
rest.social.vk.users = {};

/**
 * @namespace
 */
rest.social.vk.wall = {};

/**
 * @namespace
 */
rest.social.ok = {};

/**
 * @namespace
 */
rest.social.ok.users = {};

/**
 * @namespace
 */
var ui = {};


/**
 * Точка входа в приложение
 *
 * @param {!Object} args
 */
function main(args) {
    tuna.utils.сonfig.init(args);

    tuna.dom.setSelectorEngine(jQuery.find);

    tuna.ui.popups.registerAlert(tuna.dom.selectOne('#alert_popup'));
    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));

    var container = new tuna.ui.containers.TransformContainer(document.body);
    container.init();
}(function() {

    var Filtration = function(input, transformer) {
        tuna.events.EventDispatcher.call(this, null);
        
        this._input = input;
        this._transformer = transformer;

        this.__inputLastValue = null;

        this._data = null;
        this._currentData = null;

        this._filterCallback = function(item) {
            return item.name;
        };
    };

    tuna.utils.extend(Filtration, tuna.events.EventDispatcher);

    Filtration.prototype.setFilterCallback = function(callback) {
        this._filterCallback = callback;
    };

    Filtration.prototype.init = function() {
        var self = this;

        var lastValue = null;
        tuna.dom.addEventListener(this._input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                self._handleKeyup(event);

                lastValue = this.value;
            }
        });
    };

    Filtration.prototype._handleKeyup = function(event) {
        this.filter(this._input.value);
    };

    Filtration.prototype.setData = function(data) {
        this._currentData = this._data = data;
        this.update();
    };

    Filtration.prototype.filter = function(term) {
        this._currentData = this._filterData(term);
        this.update();
    };

    Filtration.prototype.update = function() {
        this._transformer.applyTransform(this._currentData);
    };

    Filtration.prototype.clear = function() {
        this.filter(this._input.value = '');
    };

    Filtration.prototype._filterData = function(term) {
        var result = [];

        if (!term || term.length === 0) {
            result = this._data;
        } else {
            var needle = term.toUpperCase();

            var i = 0,
                l = this._data.length;

            var item = null;
            while (i < l) {
                item = this._data[i];

                if (this._filterCallback(item).toUpperCase()
                                              .indexOf(needle) !== -1) {
                    result.push(item);
                }

                i++;
            }
        }

        return result;
    };

    ui.Filtration = Filtration;
})();(function() {

    var DataImage = function(target) {
        tuna.events.EventDispatcher.call(this);
        
        this.__targetImage = target;
    };

    tuna.utils.extend(DataImage, tuna.events.EventDispatcher);

    DataImage.prototype.getTarget = function() {
        return this.__targetImage;
    };

    DataImage.prototype.setData = function(data, type) {
        if (type === undefined) {
            type = 'image/jpeg';
        }

        if (!tuna.utils.IS_IE) {
            this.__targetImage.src = 'data:' + type + ';base64,' + data;
            this.dispatch('loaded', this.__targetImage);
        } else {
            var self = this;
            var form = document.createElement('form');
            form.method = 'POST';
            form.target = 'support_frame';
            form.action = '/api/?method=utils.base64Echo&type=' + type;

            var dataInput = document.createElement('input');
            dataInput.type = 'hidden';
            dataInput.name = 'data';
            dataInput.value = data;

            form.appendChild(dataInput);
            
            document.body.appendChild(form);

            var frame = tuna.dom.selectOne('#support_frame');
            tuna.dom.addOneEventListener(frame, 'load', function() {
                var image = tuna.dom.selectOne
                    ('img', frame.contentWindow.document.body);

                if (image !== null) {
                    self.__replaceTarget(image);
                } else {
                    self.dispatch('error');
                }

                document.body.removeChild(form);
            });

            form.submit();
        }
    };

    DataImage.prototype.__replaceTarget = function(image) {
        var parent = this.__targetImage.parentNode;
        if (parent !== null) {
            parent.replaceChild(image, this.__targetImage);

            if (this.__targetImage.id !== null) {
                image.id = this.__targetImage.id;
            }

            this.__targetImage = image;

            this.dispatch('loaded', this.__targetImage);
        } else {
            this.dispatch('error');
        }
    };

    var idTable = {};

    DataImage.create = function(target) {
        if (target.id !== null) {
            if (idTable[target.id] === undefined) {
                idTable[target.id] = new DataImage(target);
            }

            return idTable[target.id];
        }

        return new DataImage(target);
    };

    ui.DataImage = DataImage;
})();(function() {

    var Autocomplete = function(input, transformer, selectionGroup) {
        ui.Filtration.call(this, input, transformer);
        
        this.__selectionGroup = selectionGroup;
        this.__selectedData = null;
    };

    tuna.utils.extend(Autocomplete, ui.Filtration);

    Autocomplete.prototype.getSelectedData = function() {
        return this.__selectedData;
    };

    Autocomplete.prototype.selectValue = function(value) {
        var filteredData = this._filterData(value);
        if (filteredData.length === 1) {
            this.__selectedData = filteredData[0];
            this._input.value = value;

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.selectIndex = function(index) {
        if (this._currentData.length > 0) {
            this.__selectedData = this._currentData[index];
            this._input.value = this._filterCallback(this.__selectedData);

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.clearSelection = function() {
        if (this.__selectedData !== null) {
            this.__selectedData = null;

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.update = function() {
        ui.Filtration.prototype.update.call(this);
        this.__selectionGroup.updateView();
    };

    Autocomplete.prototype._handleKeyup = function(event) {
        ui.Filtration.prototype._handleKeyup.call(this, event);
        this.clearSelection();
    };

    ui.Autocomplete = Autocomplete;
})();(function() {
    var Filtration = function() {
        tuna.ui.Module.call(this, '.j-filtration');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compilers.TemplateCompiler(document);
    };

    tuna.utils.extend(Filtration, tuna.ui.Module);

    Filtration.prototype.initInstance = function(target) {
        var transformer = this._initTransformer(target);
        var input = tuna.dom.selectOne('.j-filtration-input', target);

        var filtration
            = new ui.Filtration(input, transformer);

        filtration.init();

        return filtration;
    };

    Filtration.prototype._initTransformer = function(target) {
        var templateId  = target.getAttribute('data-template-id');
        var settings = this.__templateBuilder.buildSettings(templateId);

        return this.__templateCompiler.makeTransformer(settings, target);
    };

    tuna.ui.modules.register('filtration', new Filtration());

})();(function() {
    var Autocomplete = function() {
        tuna.ui.Module.call(this, '.j-autocomplete');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compilers.TemplateCompiler(document);
    };

    tuna.utils.extend(Autocomplete, tuna.ui.Module);

    Autocomplete.prototype.initInstance = function(target) {
        var transformer = this._initTransformer(target);
        var selectionGroup = this._initSelectionGroup(target);

        var input = tuna.dom.selectOne('.j-autocomplete-input', target);
        var body = tuna.dom.selectOne('.j-autocomplete-body', target);

        var autocomplete
            = new ui.Autocomplete(input, transformer, selectionGroup);

        var isOpen = false;
        tuna.dom.addEventListener(input, 'focus', function(event) {
            if (!isOpen) {
                tuna.dom.addOneEventListener(
                    document.body, 'click', function() {
                        var data = autocomplete.getSelectedData();
                        if (data === null) {
                            autocomplete.clear();
                        }

                        tuna.dom.addClass(body, 'hide');
                        isOpen = false;
                    }
                );

                tuna.dom.removeClass(body, 'hide');

                isOpen = true;
            }
        });

        tuna.dom.addEventListener(input, 'click', function(event) {
            tuna.dom.stopPropagation(event);
        });

        tuna.dom.addChildEventListener(
            target, '.j-autocomplete-item', 'click', function(event) {
                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    autocomplete.selectIndex(index);
                } else {
                    tuna.dom.stopPropagation(event);
                }
            }
        );

        return autocomplete;
    };

    Autocomplete.prototype._initTransformer = function(target) {
        var templateId  = target.getAttribute('data-template-id');
        var settings = this.__templateBuilder.buildSettings(templateId);

        return this.__templateCompiler.makeTransformer(settings, target);
    };

    Autocomplete.prototype._initSelectionGroup = function(target) {
        var selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);
        selectionGroup.setOption('item-selector', '.j-autocomplete-item');
        selectionGroup.init();

        return selectionGroup;

    };

    tuna.ui.modules.register('autocomplete', new Autocomplete());

})();(function() {

    var SWF = function() {
        tuna.ui.Module.call(this, '.j-swf');
    };

    tuna.utils.extend(SWF, tuna.ui.Module);

    SWF.ID_PREFIX = "movie_";

    SWF.prototype.initInstance = function(target, container, options) {
        var flashvars = null;
        var params = null;
        var width = null;
        var height = null;

        if (target.id === null) {
            target.id = SWF.ID_PREFIX + String(Math.random()).substr(2);
        }

        if (options !== undefined) {
            flashvars = options.flashvars || null;
            params = options.params || null;

            width = options.width === undefined ? '100%' : options.width;
            height = options.height === undefined ? '100%' : options.height;
        }


        swfobject.embedSWF(
            target.getAttribute('data-movie-url'),
            target.id, width, height, '10.0.0', null,
            flashvars, params
        );

        return target.id;
    };

    tuna.ui.modules.register('swf', new SWF());
})();
(function() {
    var ImagePopup = function() {
        tuna.ui.Module.call(this, 'img.j-image-popup');
    };

    tuna.utils.extend(ImagePopup, tuna.ui.Module);

    ImagePopup.prototype.initInstance = function(target) {
        var popupElement = tuna.dom.selectOne('#image_popup');
        var popup = tuna.ui.popups.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            var altText = tuna.dom.selectOne('.j-alt-text', popupElement);
            var image = tuna.dom.selectOne('.j-popup-image', popupElement);

            altText.innerText = target.getAttribute('alt');
            image.src = target.getAttribute('data-image-src');

            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register('image-popup', new ImagePopup());
    
})();(function() {
    var CakeImagePopup = function() {
        tuna.ui.Module.call(this, '.j-cake-image-popup');

        this.__handleMouseMove = tuna.utils.bind(this.__handleMouseMove, this);
        this.__lastIndex = -1;
    };

    tuna.utils.extend(CakeImagePopup, tuna.ui.Module);

    CakeImagePopup.prototype.initInstance = function(target) {
        var self = this;

        var cakeIndex = target.getAttribute('data-cake-index');

        var popupTarget = tuna.dom.selectOne('#cake_image_popup');
        var popup = tuna.ui.popups.create(popupTarget);

        var photoImage = tuna.dom.selectOne('img.j-cake-image-photo', popupTarget);
        var beforeImage = tuna.dom.selectOne('img.j-cake-image-before', popupTarget);
        var afterImage = tuna.dom.selectOne('img.j-cake-image-after', popupTarget);

        function syncWidth() {
            $('.image-container', popupTarget).width($(photoImage).width() +
                                                     $(beforeImage).width() +
                                                     $(afterImage).width() + 15);
        }

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            if (self.__lastIndex !== cakeIndex) {
                photoImage.onload =
                    beforeImage.onload =
                        afterImage.onload = syncWidth;

                photoImage.src = '/img/title/photo_' + cakeIndex + '.jpg';
                beforeImage.src = '/img/title/before_' + cakeIndex + '.jpg';
                afterImage.src = '/img/title/after_' + cakeIndex + '.jpg';

                syncWidth();

                self.__lastIndex = cakeIndex;
            }

            popup.open();
        });

        if (this.__handleMouseMove !== null) {
            $('.modal-body', popupTarget).mousemove(this.__handleMouseMove);
            this.__handleMouseMove = null;
        }

        return popup;
    };

    CakeImagePopup.prototype.__handleMouseMove = function(event) {
        var $target = $(event.currentTarget);
        var center = $target.offset().left + $target.width() / 2;

        if (center > event.pageX) {
            $target.stop().animate({ 'scrollLeft': '-=50' }, 'fast');
        } else {
            $target.stop().animate({ 'scrollLeft': '+=50' }, 'fast');
        }

    };

    tuna.ui.modules.register('cake-image-popup', new CakeImagePopup());
    
})();(function() {

    var Slider = function() {
        tuna.ui.Module.call(this, '.j-horizontal-slider, .j-vertical-slider');
    };

    tuna.utils.extend(Slider, tuna.ui.Module);

    Slider.prototype.initInstance = function(target) {
        var $this = $(target);

        $this.slider({
            'value': $this.attr('data-value'),
            'max': $this.attr('data-count') - 1,
            'orientation' : $this.hasClass('j-vertical-slider') ? 'vertical' : 'horizontal',
            'slide': function(event, ui) {
                tuna.dom.dispatchEvent($this[0], 'ui-value-change', ui.value);
            }
        });

        $this.bind('data-value-change', function(event) {
            $this.slider('option', 'max', $this.attr('data-count') - 1);
            $this.slider('value', $this.attr('data-value'));
        });

        $this.bind('data-count-change', function(event) {
            $this.slider('option', 'max', $this.attr('data-count') - 1);
            $this.slider('value', $this.attr('data-value'));
        });

        return $this;
    };

    tuna.ui.modules.register('slider', new Slider());

})();(function() {

    var Datepicker = function() {
        tuna.ui.Module.call(this, 'input.j-datepicker');
    };

    tuna.utils.extend(Datepicker, tuna.ui.Module);

    Datepicker.prototype.initInstance = function(target) {
        var minTime = (new Date().getTime() + 3*24*60*60*1000);

        $(target).keydown(function(event){ event.preventDefault(); })
                 .datepicker({
                     'minDate': new Date(minTime)
                 });

        return target;
    };

    tuna.ui.modules.register('datepicker', new Datepicker());
    
})();(function() {

    var DataImage = function() {
        tuna.ui.Module.call(this, 'img.j-data-image');
    };

    tuna.utils.extend(DataImage, tuna.ui.Module);

    DataImage.prototype.initInstance = function(target, container, options) {
        return ui.DataImage.create(target);
    };

    tuna.ui.modules.register('data-image', new DataImage());
})();
(function() {

    var DataImageCopy = function() {
        tuna.ui.Module.call
            (this, 'img.j-data-image-copy');
    };

    tuna.utils.extend(DataImageCopy, tuna.ui.Module);

    DataImageCopy.prototype.initInstance = function(target) {
        var imageSelector = target.getAttribute('data-image-selector');
        if (imageSelector !== null) {
            var currentImage = target;

            var targetDataImage = ui.DataImage.create
                                    (tuna.dom.selectOne(imageSelector));

            var replaceImage = function() {
                var image = targetDataImage.getTarget();
                var parent = currentImage.parentNode;
                if (parent !== null) {
                    var newImage = image.cloneNode(false);
                    newImage.id = currentImage.id;
                    newImage.className = currentImage.className;

                    parent.replaceChild(newImage, currentImage);

                    currentImage = newImage;
                }
            };

            targetDataImage.addEventListener('loaded', replaceImage);
            replaceImage();

            return currentImage;
        }

        return null;
    };

    tuna.ui.modules.register('data-image-copy', new DataImageCopy());
})();
(function() {
    var FriendsPopup = function() {
        tuna.ui.Module.call(this, '.j-friends-popup');
    };

    tuna.utils.extend(FriendsPopup, tuna.ui.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        var popupModule = tuna.ui.modules.getModule('popup');
        var filtrationModule = tuna.ui.modules.getModule('filtration');

        var popup = popupModule.initInstance(target);
        var popupContainer = popup.getTarget();

        var friendsFiltration = filtrationModule.initInstance(popupContainer);

        tuna.rest.call('social.friends.get', function(result) {
            friendsFiltration.setData(result);
        });

        var self = this;

        tuna.dom.addChildEventListener(
            popupContainer, '.j-send-button', 'click', function() {
                self.postImage(this.getAttribute('data-user-id'));
            }
        );

        return this;
    };

    FriendsPopup.prototype.postImage = function(userId) {
        var currentCake = model.cakes.getCurrentCake();

        tuna.rest.call('social.wall.post', {
            'image': currentCake.imageBase64,
            'user_id': userId
        }, function() {
            ui.Popup.alert('Торт успешно опубликован!');
        });
    };

    tuna.ui.modules.register('friends-popup', new FriendsPopup());

})();(function() {

    var CommonMethod = function(name) {
        tuna.rest.Method.call(this, name);

        this.__request = new tuna.net.Request();
        this.__request.method = 'POST';
        this.__request.setURL('/api/?method=' + name);

        var self = this;

        this.__request.addEventListener('complete', function(event, data) {
            self._handleResponse(data);
        });
    };

    tuna.utils.extend(CommonMethod, tuna.rest.Method);

    CommonMethod.prototype.call = function(args) {
        this.__request.setData(args);
        this.__request.send();
    };

    CommonMethod.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) {
            this.dispatch('error', data);
        }

        if (result !== null) {
            if (result.response !== undefined) {
                this.dispatch('result', result.response);
            } else {
                this.dispatch('error', result.errors);
            }
        }

    };

    rest.CommonMethod = CommonMethod;

})();
(function() {

    var MethodFactory = function() {};

    tuna.utils.implement(MethodFactory, tuna.rest.IFactory);

    MethodFactory.prototype.createMethod = function(name) {
        return new rest.CommonMethod(name);
    };

    tuna.rest.factory.setDefaultFactory(new MethodFactory());

})();(function() {

    var Cakes = function() {
        this.__currentCake = null;
    };

    Cakes.prototype.createCake = function(markupJSON, imageBase64,
                                          photoBase64) {

        var markup = JSON.parse(markupJSON);

        var cake = new model.records.Cake();
        cake.markupJson = markupJSON;
        cake.imageBase64 = imageBase64;
        cake.photoBase64 = photoBase64;

        cake.content = markup.content;

        cake.weight = markup.dimensions.mass;
        cake.personsCount = markup.dimensions.persons_count;

        return cake;
    };

    Cakes.prototype.createCampaingCake = function(weight, imageUrl) {
        var cake = new model.records.Cake();
        cake.weight = weight;
        cake.imageUrl = imageUrl;

        return cake;
    };

    Cakes.prototype.setCurrentCake = function(cake) {
        this.__currentCake = cake;
    };

    Cakes.prototype.getCurrentCake = function() {
        return this.__currentCake;
    };

    model.cakes = new Cakes();

})();
(function() {

    var Orders = function() {
        this.__order = null;
    };

    Orders.prototype.getOrder = function() {
        return this.__order;
    };

    Orders.prototype.updateCampaignOrder = function(campaign, cake, price) {
        if (this.__order === null) {
            this.__initOrder();
        }

        this.__order.campaign = campaign;

        this.__order.cake = cake.clone();

        this.__order.payment = new model.records.Payment();
        this.__order.payment.totalPrice = price;
    };

    Orders.prototype.updateOrder = function() {
        if (this.__order === null) {
            this.__initOrder();
        }

        this.__order.cake = model.cakes.getCurrentCake().clone();
        this.__updateOrderPrice();
    };

    Orders.prototype.__initOrder = function() {
        this.__order = new model.records.Order();

        var user = model.users.getCurrentUser();
        if (user !== null) {
            this.__order.user = user.clone();
        }
    };

    Orders.prototype.setOrderRecipe = function(recipe) {
        this.__order.recipe = recipe;
        this.__updateOrderPrice();
    };

    Orders.prototype.setOrderBakery = function(bakery) {
        this.__order.bakery = bakery;
        this.__updateOrderPrice();
    };

    Orders.prototype.getOrderRecipe = function() {
        return this.__order.recipe;
    };

    Orders.prototype.getOrderBakery = function() {
        return this.__order.bakery;
    };

    Orders.prototype.__updateOrderPrice = function() {
        if (this.__order.payment === null) {
            this.__order.payment = new model.records.Payment();
        }

        var payment = this.__order.payment;

        payment.decoPrice = this.__getDecorationPrice(this.__order.cake);

        if (this.__order.recipe !== null) {
            payment.recipePrice = this.__getRecipePrice
                (this.__order.cake, this.__order.recipe);
        }

        if (this.__order.bakery !== null) {
            payment.deliveryPrice = this.__order.bakery.deliveryPrice;
        }

        payment.totalPrice
            = payment.decoPrice + payment.recipePrice + payment.deliveryPrice;
    };

    Orders.prototype.__getRecipePrice = function(cake, recipe) {
        return recipe.price * cake.weight;
    };

    Orders.prototype.__getDecorationPrice = function(cake) {
        var price = 0;

        if (cake.content.deco !== undefined) {
            var deco = cake.content.deco;

            var i = 0,
                l = deco.length;

            while (i < l) {
                price += this.__getDecorationItemPrice(deco[i].name);
                i++;
            }
        }

        return price;
    };

    Orders.prototype.__getDecorationItemPrice = function(name) {
        switch (name) {
            case 'cherry': case 'grape': case 'kiwi': case 'raspberry':
            case 'strawberry': case 'orange': case 'peach': case 'lemon':
            case 'blueberry': case 'currant':
                return 10;

            case 'pig1': case 'car1': case 'hare1': case 'hedgehog1':
            case 'moose1': case 'owl1': case 'pin1': case 'sheep1':
            case 'raven1': case 'bear1': case 'car2': case 'car3': case 'mat1':
            case 'ia': case 'ladybug': case 'pig': case 'rabbit': case 'tiger':
            case 'winnie': case 'winnie1': case 'bootes':
                return 250;

            case 'doll1': case 'doll2':
                return 350;

            case 'flower1': case 'flower2':
                return 300;

            case 'flower3': case 'flower4': case 'flower5': case 'flower6':
            case 'physalis':
                return 200;

            default:
                return 0;
        }
    };

    model.orders = new Orders();
})();
(function() {

    var Recipes = function() {
        this.__list = [];
    };

    Recipes.prototype.clearRecipes = function() {
        this.__list.length = 0;
    };

    Recipes.prototype.addRecipe = function(recipe) {
        this.__list.push(recipe);
    };

    Recipes.prototype.getRecipeAt = function(index) {
        return this.__list[index];
    };

    Recipes.prototype.getList = function() {
        return this.__list;
    };

    model.recipes = new Recipes();

})();
(function() {

    var Bakeries = function() {
        this.__list = []
    };

    Bakeries.prototype.addBakery = function(bakery) {
        this.__list.push(bakery);
    };

    Bakeries.prototype.getBakeryAt = function(index) {
        return this.__list[index];
    };

    Bakeries.prototype.getList = function() {
        return this.__list;
    };

    model.bakeries = new Bakeries();

})();
(function() {

    var Users = function() {
        this.__currentUser = null;
    };

    Users.prototype.setCurrentUser = function(user) {
        this.__currentUser = user;
    };

    Users.prototype.getCurrentUser = function() {
        return this.__currentUser;
    };

    model.users = new Users();

})();
(function() {

    var Bakery = function() {
        this.id = '';
        this.city = '';
        this.deliveryPrice = 0;
    };

    tuna.utils.extend(Bakery, tuna.model.Record);

    model.records.Bakery = Bakery;

})();(function() {

    var Cake = function() {
        this.imageUrl = '';

        this.markupJson = '';
        this.imageBase64 = '';
        this.photoBase64 = '';

        this.content = null;

        this.weight = 0;
        this.personsCount = 0;
    };

    tuna.utils.extend(Cake, tuna.model.Record);

    model.records.Cake = Cake;

})();(function() {

    var Order = function() {
        this.user = null;
        this.cake = null;

        this.bakery = null;
        this.recipe = null;

        this.payment = null;

        this.campaign = '';
    };

    tuna.utils.extend(Order, tuna.model.Record);

    model.records.Order = Order;

})();(function() {

    var Payment = function() {
        this.decoPrice = 0;
        this.recipePrice = 0;
        this.deliveryPrice = 0;

        this.totalPrice = 0;
    };

    tuna.utils.extend(Payment, tuna.model.Record);

    model.records.Payment = Payment;

})();(function() {

    var Recipe = function() {
        this.id = '';
        this.name = '';
        this.desc = '';

        this.price = 0;

        this.imageUrl = '';
    };

    tuna.utils.extend(Recipe, tuna.model.Record);

    model.records.Recipe = Recipe;

})();(function() {

    var User = function() {
        this.id = '';
        this.name = '';
        this.city = '';
        this.userpicUrl = '';
        this.network = ''
    };

    tuna.utils.extend(User, tuna.model.Record);

    model.records.User = User;

})();(function() {

    var MainController = function() {
        tuna.view.NavigationViewController.call(this, null);
    };

    tuna.utils.extend(MainController, tuna.view.NavigationViewController);

    MainController.prototype._initActions = function() {
        tuna.view.NavigationViewController.prototype._initActions.call(this);

        tuna.rest.call('social.users.getCurrent', function(user) {
            model.users.setCurrentUser(user);
        });
    };

    tuna.view.setMainController(new MainController());

})();
(function() {

    var TitleController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(TitleController, tuna.view.PageViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('cake-image-popup');
    };

    tuna.view.registerController('title_step', new TitleController());

})();
(function() {

    var DesignerController = function() {
        tuna.view.PageViewController.call(this);

        this.__movieID = null;
        this.__movie = null;
    };

    tuna.utils.extend(DesignerController, tuna.view.PageViewController);

    var DECO_DATA = '{"weightsList":[1,1.5,2,2.5,3,3.5,4,4.5,5],\
                      "ratiosList":[0.6,0.55,0.5,0.45,0.4,0.38,0.32,0.3,0.25],\
                      "personsList":[6,10,15,20,25,30,35,40,45],\
                      "decoSelectors":[{"deco":[\
                            {"url":"/img/deco/cherry.png","autorotate":true,"name":"cherry","description":"Вишня"},\
                            {"url":"/img/deco/grape.png","autorotate":true,"name":"grape","description":"Виноград"},\
                            {"url":"/img/deco/kiwi.png","autorotate":true,"name":"kiwi","description":"Киви"},\
                            {"url":"/img/deco/raspberry.png","autorotate":true,"name":"raspberry","description":"Малина"},\
                            {"url":"/img/deco/strawberry.png","autorotate":true,"name":"strawberry","description":"Клубника"},\
                            {"url":"/img/deco/orange.png","autorotate":true,"name":"orange","description":"Апельсин"},\
                            {"url":"/img/deco/blueberry.png","autorotate":true,"name":"blueberry","description":"Черника"},\
                            {"url":"/img/deco/currant.png","autorotate":true,"name":"currant","description":"Смородина"},\
                            {"url":"/img/deco/peach.png","autorotate":true,"name":"peach","description":"Персик"},\
                            {"url":"/img/deco/lemon.png","autorotate":true,"name":"lemon","description":"Лимон"}]},\
                                        {"deco":[\
                            {"url":"/img/deco/pig1.png","autorotate":false,"name":"pig1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/car1.png","autorotate":false,"name":"car1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/hare1.png","autorotate":false,"name":"hare1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/hedgehog1.png","autorotate":false,"name":"hedgehog1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/moose1.png","autorotate":false,"name":"moose1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/owl1.png","autorotate":false,"name":"owl1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/pin1.png","autorotate":false,"name":"pin1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/sheep1.png","autorotate":false,"name":"sheep1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/raven1.png","autorotate":false,"name":"raven1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/bear1.png","autorotate":false,"name":"bear1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/car2.png","autorotate":false,"name":"car2","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/car3.png","autorotate":false,"name":"car3","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/mat1.png","autorotate":false,"name":"mat1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/ladybug.png","autorotate":false,"name":"ladybug","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/tiger.png","autorotate":false,"name":"tiger","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/winnie.png","autorotate":false,"name":"winnie","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/winnie1.png","autorotate":false,"name":"winnie1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/rabbit.png","autorotate":false,"name":"rabbit","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/ia.png","autorotate":false,"name":"ia","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/doll1.png","autorotate":false,"name":"doll1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/doll2.png","autorotate":false,"name":"doll2","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/bootes.png","autorotate":false,"name":"bootes","description":"Сахарная фигурка"}]},\
                                        {"deco":[\
                            {"url":"/img/deco/flower1.png","autorotate":false,"name":"flower1","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/flower2.png","autorotate":false,"name":"flower2","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/flower3.png","autorotate":false,"name":"flower3","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/flower4.png","autorotate":false,"name":"flower4","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/flower5.png","autorotate":false,"name":"flower5","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/physalis.png","autorotate":false,"name":"flower5","description":"Сахарная фигурка"},\
                            {"url":"/img/deco/flower6.png","autorotate":false,"name":"flower6","description":"Сахарная фигурка"}]}\
                        ]}';

    DesignerController.prototype._requireModules = function() {
       this._container.requireModule('data-image');
       this._container.requireModule('swf', {
           'width': 650,
           'height': 630,
           'params': {
               'wmode': 'opaque',
               'allowfullscreen': false,
               'allowscriptaccess': 'always',
               'menu': false
           }
        });
    };

    DesignerController.prototype._initActions = function() {
        this.__movieID = this._container.getOneModuleInstance('swf');
    };

    DesignerController.prototype.onFlashReady = function() {
        this.__movie = swfobject.getObjectById(this.__movieID);
        this.__movie.initialize(DECO_DATA, 'round', 1);
    };

    DesignerController.prototype.confirmShapeChange = function(shape) {
        var self = this;

        tuna.ui.popups.confirm(
            'При изменении формы торта, все оформление будет утеряно!',
            function(result) {
                if (result) {
                    self.__movie.changeShape(shape);
                }
            }
        );
    };

    DesignerController.prototype.canClose = function() {
        return this.__movie !== null;
    };

    DesignerController.prototype.close = function() {
        var data = this.__movie.getCakeData();

        var cake = model.cakes.createCake
            (data.shift(), data.shift(), data.shift());

        var cakeDataImage = this._container.getOneModuleInstance('data-image');
        cakeDataImage.setData(cake.imageBase64);

        model.cakes.setCurrentCake(cake);
    };

    var controller = new DesignerController();

    window.onFlashReady = tuna.utils.bind(controller.onFlashReady, controller);
    window.confirmShapeChange = tuna.utils.bind(controller.confirmShapeChange, controller);
    window.openMessageBox = function(message) { tuna.ui.popups.alert(message); };

    tuna.view.registerController('designer_step', controller);
})();
(function() {

    var ShareController = function() {
        tuna.view.PageViewController.call(this);

        this.__wallPostMethod = null;
        this.__imageData = null;
    };

    tuna.utils.extend(ShareController, tuna.view.PageViewController);

    ShareController.prototype.open = function() {
        var currentCake = model.cakes.getCurrentCake();
        this.__imageData = currentCake.imageBase64;

        var downloadDataInput = tuna.dom.selectOne('#download_data_input');
        downloadDataInput.value = this.__imageData;
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('friends-popup');
    };

    ShareController.prototype._initActions = function() {
        var friendsPopup = this._container.getOneModuleInstance('friends-popup');

        tuna.dom.addEventListener(
            tuna.dom.selectOne('#wall_post_link'), 'click', function(event) {
                tuna.dom.preventDefault(event);
                friendsPopup.postImage();
            }
        );
    };

    tuna.view.registerController('share_step', new ShareController());
})();(function() {

    var RecipeController = function() {
        tuna.view.PageViewController.call(this);

        this.__popupRecipe = null;
        this.__popupIndex = -1;

        this.__cityPopup = null;
        this.__cityAutocomplete = null;
    };

    tuna.utils.extend(RecipeController, tuna.view.PageViewController);

    RecipeController.prototype.canClose = function(index) {
        var order = model.orders.getOrder();
        if (index === 'order_step' && order.recipe === null) {
            ui.Popup.alert('Для продолжения необходимо выбрать рецепт!');
            return false;
        }

        return true;
    };

    RecipeController.prototype.open = function() {
        model.orders.updateOrder();

        this.__cityPopup.open();

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('autocomplete');
        this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        model.orders.updateOrder();

        this.__initCityPopup();

        this.__loadBakeries();

        this.__initRecipeSelection();

        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initCityPopup = function() {
        var self = this;

        this.__cityAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__cityAutocomplete.setFilterCallback(function(bakery) {
            return bakery.city;
        });

        var okButton = tuna.dom.selectOne('#city_ok_button');
        this.__cityAutocomplete.addEventListener('change', function() {
            if (null === self.__cityAutocomplete.getSelectedData()) {
                tuna.dom.addClass(okButton, 'disabled');
            } else {
                tuna.dom.removeClass(okButton, 'disabled');
            }
        });

        this.__cityPopup
            = tuna.ui.popups.create(tuna.dom.selectOne('#city_selection_popup'));

        var bakery = null;

        this.__cityPopup.addEventListener('popup-open', function(event) {
            bakery = model.orders.getOrderBakery();
        });

        this.__cityPopup.addEventListener('popup-apply', function(event) {
            var selectedBakery = self.__cityAutocomplete.getSelectedData();
            if (selectedBakery === null) {
                event.preventDefault();
            } else {
                if (bakery !== selectedBakery) {
                    model.orders.setOrderBakery(selectedBakery);

                    self.__loadRecipes();
                    self.__updateView();
                }
            }
        });

    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        var descriptionPopup = tuna.ui.popups.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        var self = this;
        descriptionPopup.addEventListener('popup-apply', function() {
            self.__selectRecipeAt(self.__popupIndex);
        });
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;
        var target = this._container.getTarget();

        tuna.dom.addChildEventListener(
            target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');

                self.__popupRecipe = model.recipes.getRecipeAt(index);
                self.__popupIndex = index;

                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            target, 'input.j-recipe-radio', 'click',
            function(event) {
                var recipe = model.recipes.getRecipeAt(this.value);
                model.orders.setOrderRecipe(recipe);

                self.__updateView();
            }
        );
    };

    RecipeController.prototype.__updateView = function() {
        this._container.applyData({
            'order': model.orders.getOrder(),
            'recipes': model.recipes.getList(),
            'popup_recipe': this.__popupRecipe
        });
    };

    RecipeController.prototype.__selectRecipeAt = function(index) {
        var input = tuna.dom.selectOne
            ('input[value=' + index + '].j-recipe-radio');

        input.checked = true;

        tuna.dom.dispatchEvent(input, 'click');
    };

    RecipeController.prototype.__loadRecipes = function() {
        var self = this;
        var bakery = model.orders.getOrderBakery();

        tuna.rest.call('recipes.getList', { 'bakery_id': bakery.id },
            function(result) {
                model.recipes.clearRecipes();

                var i = 0,
                    l = result.length;

                var value = null;
                var recipe = null;
                while (i < l) {
                    value = result[i];

                    recipe = new model.records.Recipe();
                    recipe.id = value.id;
                    recipe.name = value.name;
                    recipe.desc = value.desc;
                    recipe.price = value.price;
                    recipe.imageUrl = value.image_url;

                    model.recipes.addRecipe(recipe);

                    i++;
                }


                self.__updateView();
                self.__selectRecipeAt(0);
            }
        );
    };

    RecipeController.prototype.__loadBakeries = function() {
        var self = this;
        tuna.rest.call('bakeries.getList', function(result) {
            var i = 0,
                l = result.length;

            var value = null;
            var bakery = null;
            while (i < l) {
                value = result[i];

                bakery = new model.records.Bakery();
                bakery.id = value.id;
                bakery.city = value.city.name;
                bakery.deliveryPrice = value.delivery_price;

                model.bakeries.addBakery(bakery);

                i++;
            }

            debugger;

            self.__cityAutocomplete.setData(model.bakeries.getList());

            var user = model.users.getCurrentUser();
            if (user !== null) {
                self.__cityAutocomplete.selectValue(user.city);
            }
        });
    };

    tuna.view.registerController('recipe_step', new RecipeController());

})();(function() {

    var OrderController = function() {
        tuna.view.PageViewController.call(this);

        this.__form = null;
        this.__cakeImage = null;
    };

    tuna.utils.extend(OrderController, tuna.view.PageViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('datepicker');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        var self = this;
        var isConfirmed = false;

        this.__form = this._container.getOneModuleInstance('form');
        this.__form.addEventListener('result', function(event, result) {
            self._navigation.navigate('result_step', result.cake);

            isConfirmed = false;
        });

        this.__form.addEventListener('error', function() {
            isConfirmed = false;
        });

        this.__form.addEventListener('submit', function(event) {
            if (!isConfirmed) {
                event.preventDefault();

                tuna.ui.popups.confirm(
                    'Вы уверены что правильно заполнили все поля?',
                    function(result) {
                        isConfirmed = result;
                        if (isConfirmed) {
                            self.__form.submit();
                        }
                    }
                );
            }
        });

        this.__cakeImage
            = this._container.getOneModuleInstance('data-image-copy');
    };

    OrderController.prototype.open = function(args) {
        if (args.image !== undefined) {
            this.__cakeImage.src = args.image;

            var cake = model.cakes.createCampaingCake(args.weight, args.image);
            model.orders.updateCampaignOrder(args.campaign, cake, args.price);
        }

        this._container.applyData(model.orders.getOrder());
    };

    tuna.view.registerController('order_step', new OrderController());
})();
(function() {

    var ResultController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(ResultController, tuna.view.PageViewController);

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    ResultController.prototype.open = function(args) {
        var image = this._container.getOneModuleInstance('data-image-copy');
        image.src = args.image_url;
    };

    tuna.view.registerController('result_step', new ResultController());
})();
