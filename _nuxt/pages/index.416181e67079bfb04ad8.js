webpackJsonp([1],{"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("I+tT"),i=r("3CE2"),a=!1;var o=function(t){a||r("juul")},u=r("VU/8")(n.a,i.a,!1,o,null,null);u.options.__file="pages/index.vue",e.default=u.exports},"3CE2":function(t,e,r){"use strict";var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"logo-wrap"},[e("div",{staticClass:"wrap1"},[e("div",{staticClass:"u"},[e("div",{staticClass:"rect1"}),e("div",{staticClass:"rect2"}),e("div",{staticClass:"circle"})]),e("div",{staticClass:"n"},[e("div",{staticClass:"rect1"}),e("div",{staticClass:"rect2"}),e("div",{staticClass:"circle"})]),e("div",{staticClass:"i"},[e("div",{staticClass:"circle"}),e("div",{staticClass:"rect"})])]),e("div",{staticClass:"wrap2"},[e("div",{staticClass:"p"},[e("div",{staticClass:"rect"}),e("div",{staticClass:"circle"})]),e("div",{staticClass:"o"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"t"},[e("div",{staticClass:"rect1"}),e("div",{staticClass:"rect2"})]),e("div",{staticClass:"a"},[e("div",{staticClass:"rect"}),e("div",{staticClass:"circle"})])])])])}]};e.a=i},A5qe:function(t,e,r){(function(r){var n,i,a,o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==r&&null!=r?r:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),(t={next:t})[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var r=0,n={next:function(){if(r<t.length){var i=r++;return{value:e(i,t[i]),done:!1}}return n.next=function(){return{done:!0,value:void 0}},n.next()}};return n[Symbol.iterator]=function(){return n},n},o.polyfill=function(t,e,r,n){if(e){for(r=o.global,t=t.split("."),n=0;n<t.length-1;n++){var i=t[n];i in r||(r[i]={}),r=r[i]}(e=e(n=r[t=t[t.length-1]]))!=n&&null!=e&&o.defineProperty(r,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t||function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;!function(r,o){i=[],void 0===(a="function"==typeof(n=o)?n.apply(e,i):n)||(t.exports=a)}(0,function(){function t(t){if(!j.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var r=t.length,n=2<=arguments.length?arguments[1]:void 0,i=[],a=0;a<r;a++)if(a in t){var o=t[a];e.call(n,o,a,t)&&i.push(o)}return i}function r(t){return t.reduce(function(t,e){return t.concat(j.arr(e)?r(e):e)},[])}function n(e){return j.arr(e)?e:(j.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function i(t,e){return t.some(function(t){return t===e})}function a(t){var e,r={};for(e in t)r[e]=t[e];return r}function o(t,e){var r,n=a(t);for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function s(t,e){var r,n=a(t);for(r in e)n[r]=j.und(t[r])?e[r]:t[r];return n}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function l(t,e){return j.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function p(t,e){return j.dom(t)&&i(P,e)?"transform":j.dom(t)&&(t.getAttribute(e)||j.svg(t)&&t[e])?"attribute":j.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function d(t,r){switch(p(t,r)){case"transform":return function(t,r){var n=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(r);if(n=-1<r.indexOf("scale")?1:0+n,!(t=t.style.transform))return n;for(var i=[],a=[],o=[],u=/(\w+)\((.+?)\)/g;i=u.exec(t);)a.push(i[1]),o.push(i[2]);return(t=e(o,function(t,e){return a[e]===r})).length?t[0]:n}(t,r);case"css":return f(t,r);case"attribute":return t.getAttribute(r)}return t[r]||0}function g(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function h(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function v(t){t=t.points;for(var e,r=0,n=0;n<t.numberOfItems;n++){var i=t.getItem(n);0<n&&(r+=h(e,i)),e=i}return r}function b(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return h({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return v(t);case"polygon":var e=t.points;return v(t)+h(e.getItem(e.numberOfItems-1),e.getItem(0))}}function m(t,e){function r(r){return r=void 0===r?0:r,t.el.getPointAtLength(1<=e+r?e+r:0)}var n=r(),i=r(-1),a=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}}function y(t,e){var r,n=/-?\d*\.?\d+/g;if(r=j.pth(t)?t.totalLength:t,j.col(r))if(j.rgb(r)){var i=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);r=i?"rgba("+i[1]+",1)":r}else r=j.hex(r)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+(t=parseInt(e[1],16))+","+parseInt(e[2],16)+","+(e=parseInt(e[3],16))+",1)"}(r):j.hsl(r)?function(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,i=parseInt(r[3])/100;if(r=r[4]||1,0==n)i=n=t=i;else{var a=.5>i?i*(1+n):i+n-i*n,o=2*i-a;i=e(o,a,t+1/3),n=e(o,a,t),t=e(o,a,t-1/3)}return"rgba("+255*i+","+255*n+","+255*t+","+r+")"}(r):void 0;else i=(i=c(r))?r.substr(0,r.length-i.length):r,r=e&&!/\s/g.test(r)?i+e:i;return{original:r+="",numbers:r.match(n)?r.match(n).map(Number):[0],strings:j.str(t)||e?r.split(n):[]}}function x(t){return e(t=t?r(j.arr(t)?t.map(n):n(t)):[],function(t,e,r){return r.indexOf(t)===e})}function w(t,e){var r=a(e);if(j.arr(t)){var i=t.length;2!==i||j.obj(t[0])?j.fnc(e.duration)||(r.duration=e.duration/i):t={value:t}}return n(t).map(function(t,r){return r=r?0:e.delay,t=j.obj(t)&&!j.pth(t)?t:{value:t},j.und(t.delay)&&(t.delay=r),t}).map(function(t){return s(t,r)})}function C(t,e){var r;return t.tweens.map(function(n){var i=(n=function(t,e){var r,n={};for(r in t){var i=l(t[r],e);j.arr(i)&&1===(i=i.map(function(t){return l(t,e)})).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e)).value,a=d(e.target,t.name),o=r?r.to.original:a,u=(o=j.arr(i)?i[0]:o,g(j.arr(i)?i[1]:i,o));a=c(u)||c(o)||c(a);return n.from=y(o,a),n.to=y(u,a),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=function(t){return j.arr(t)?_.apply(this,t):E[t]}(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,n.isPath=j.pth(i),n.isColor=j.col(n.from.original),n.isColor&&(n.round=1),r=n})}function k(t,e,r,n){var i="delay"===t;return e.length?(i?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):i?n.delay:r.offset+n.delay+n.duration}function A(t){var n,i=o(S,t),a=o(O,t),u=function(t){var e=x(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}(t.targets),c=[],l=s(i,a);for(n in t)l.hasOwnProperty(n)||"targets"===n||c.push({name:n,offset:l.offset,tweens:w(t[n],a)});return t=function(t,n){return e(r(t.map(function(t){return n.map(function(e){var r=p(t.target,e.name);if(r){var n=C(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(t){return!j.und(t)})}(u,c),s(i,{children:[],animatables:u,animations:t,duration:k("duration",t,i,a),delay:k("delay",t,i,a)})}function I(t){function r(){return window.Promise&&new Promise(function(t){return p=t})}function n(t){return g.reversed?g.duration-t:t}function i(t){for(var r=0,n={},i=g.animations,a=i.length;r<a;){var o=i[r],u=o.animatable,s=(c=o.tweens)[d=c.length-1];d&&(s=e(c,function(e){return t<e.end})[0]||s);for(var c=Math.min(Math.max(t-s.start-s.delay,0),s.duration)/s.duration,l=isNaN(c)?1:s.easing(c,s.elasticity),p=(c=s.to.strings,s.round),d=[],h=void 0,v=(h=s.to.numbers.length,0);v<h;v++){var b=void 0,y=(b=s.to.numbers[v],s.from.numbers[v]);b=s.isPath?m(s.value,l*b):y+l*(b-y);p&&(s.isColor&&2<v||(b=Math.round(b*p)/p)),d.push(b)}if(s=c.length)for(h=c[0],l=0;l<s;l++)p=c[l+1],v=d[l],isNaN(v)||(h=p?h+(v+p):h+(v+" "));else h=d[0];F[o.type](u.target,o.property,h,n,u.id),o.currentValue=h,r++}if(r=Object.keys(n).length)for(i=0;i<r;i++)M||(M=f(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[i].target.style[M]=n[i].join(" ");g.currentTime=t,g.progress=t/g.duration*100}function a(t){g[t]&&g[t](g)}function o(){g.remaining&&!0!==g.remaining&&g.remaining--}function u(t){var e=g.duration,u=g.offset,f=u+g.delay,h=g.currentTime,v=g.reversed,b=n(t);if(g.children.length){var m=g.children,y=m.length;if(b>=g.currentTime)for(var x=0;x<y;x++)m[x].seek(b);else for(;y--;)m[y].seek(b)}(b>=f||!e)&&(g.began||(g.began=!0,a("begin")),a("run")),b>u&&b<e?i(b):(b<=u&&0!==h&&(i(0),v&&o()),(b>=e&&h!==e||!e)&&(i(e),v||o())),a("update"),t>=e&&(g.remaining?(c=s,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,a("complete"),"Promise"in window&&(p(),d=r()))),l=0)}t=void 0===t?{}:t;var s,c,l=0,p=null,d=r(),g=A(t);return g.reset=function(){var t=g.direction,e=g.loop;for(g.currentTime=0,g.progress=0,g.paused=!0,g.began=!1,g.completed=!1,g.reversed="reverse"===t,g.remaining="alternate"===t&&1===e?2:e,i(0),t=g.children.length;t--;)g.children[t].reset()},g.tick=function(t){s=t,c||(c=s),u((l+s-c)*I.speed)},g.seek=function(t){u(n(t))},g.pause=function(){var t=T.indexOf(g);-1<t&&T.splice(t,1),g.paused=!0},g.play=function(){g.paused&&(g.paused=!1,c=0,l=n(g.currentTime),T.push(g),L||V())},g.reverse=function(){g.reversed=!g.reversed,c=0,l=n(g.currentTime)},g.restart=function(){g.pause(),g.reset(),g.play()},g.finished=d,g.reset(),g.autoplay&&g.play(),g}var M,S={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},O={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},P="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),j={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return j.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||j.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return j.hex(t)||j.rgb(t)||j.hsl(t)}},_=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,i){if(0<=e&&1>=e&&0<=n&&1>=n){var a=new Float32Array(11);if(e!==r||n!==i)for(var o=0;11>o;++o)a[o]=t(.1*o,e,n);return function(o){if(e===r&&n===i)return o;if(0===o)return 0;if(1===o)return 1;for(var u=0,s=1;10!==s&&a[s]<=o;++s)u+=.1;s=u+(o-a[--s])/(a[s+1]-a[s])*.1;var c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&0!==(c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e);++u){var l=t(s,e,n)-o;s=s-l/c}o=s}else if(0===c)o=s;else{s=u,u=u+.1;var f=0;do{0<(c=t(l=s+(u-s)/2,e,n)-o)?u=l:s=l}while(1e-7<Math.abs(c)&&10>++f);o=l}return t(o,r,i)}}}}(),E=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},i={linear:_(.25,.25,.75,.75)},a={};for(e in n)a.type=e,n[a.type].forEach(function(t){return function(e,n){i["ease"+t.type+r[n]]=j.fnc(e)?e:_.apply(u,e)}}(a)),a={type:a.type};return i}(),F={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,i){n[i]||(n[i]=[]),n[i].push(e+"("+r+")")}},T=[],L=0,V=function(){function t(){L=requestAnimationFrame(e)}function e(e){var r=T.length;if(r){for(var n=0;n<r;)T[n]&&T[n].tick(e),n++;t()}else cancelAnimationFrame(L),L=0}return t}();return I.version="2.2.0",I.speed=1,I.running=T,I.remove=function(t){t=x(t);for(var e=T.length;e--;)for(var r=T[e],n=r.animations,a=n.length;a--;)i(t,n[a].animatable.target)&&(n.splice(a,1),n.length||r.pause())},I.getValue=d,I.path=function(e,r){var n=j.str(e)?t(e)[0]:e,i=r||100;return function(t){return{el:n,property:t,totalLength:b(n)*(i/100)}}},I.setDashoffset=function(t){var e=b(t);return t.setAttribute("stroke-dasharray",e),e},I.bezier=_,I.easings=E,I.timeline=function(t){var e=I(t);return e.pause(),e.duration=0,e.add=function(r){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),n(r).forEach(function(r){var n=s(r,o(O,t||{}));n.targets=n.targets||t.targets,r=e.duration;var i=n.offset;n.autoplay=!1,n.direction=e.direction,n.offset=j.und(i)?r:g(i,r),e.began=!0,e.completed=!0,e.seek(n.offset),(n=I(n)).began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},I.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},I})}).call(e,r("DuR2"))},"I+tT":function(t,e,r){"use strict";var n=r("A5qe");r.n(n);e.a={components:{}}},jV1V:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".logo-wrap{width:250px;margin:auto;padding-top:40vh}@media screen and (max-width:480px){.logo-wrap{-webkit-transform:scale(.8);transform:scale(.8)}}.wrap1,.wrap2{position:relative}.wrap2{top:90px}.u{position:absolute;top:0;left:0}.u .rect1{width:50px}.u .rect1,.u .rect2{position:absolute;height:45px;background:#bbb}.u .rect2{left:25px;top:calc(100% + 25px);width:25px}.u .circle{position:absolute;top:20px;width:50px;height:50px;background:gray;border-radius:100%}.n{left:70px}.n,.n .circle{position:absolute;top:0}.n .circle{width:50px;height:50px;background:gray;border-radius:100%}.n .rect1{top:25px;width:50px;height:45px}.n .rect1,.n .rect2{position:absolute;background:#bbb}.n .rect2{width:25px;height:25px}.i{position:absolute;left:140px}.i .circle{top:0;height:20px;background:gray;border-radius:100%}.i .circle,.i .rect{position:absolute;width:20px}.i .rect{top:25px;height:45px;background:#bbb}.p{left:0}.p,.p .circle{position:absolute;top:0}.p .circle{width:50px;height:50px;background:gray;border-radius:100%}.p .rect{top:25px;width:25px;height:45px;background:#bbb}.o,.p .rect{position:absolute}.o{left:70px}.o .circle{top:0;width:50px;height:50px;background:gray;border-radius:100%}.o .circle,.t{position:absolute}.t{left:140px}.t .rect1{position:absolute;width:20px;height:50px;background:#bbb}.t .rect2{top:15px;width:40px;height:15px;background:gray}.a,.t .rect2{position:absolute}.a{left:200px}.a .circle{position:absolute;top:0;width:50px;height:50px;background:gray;border-radius:100%}.a .rect{position:absolute;top:25px;left:25px;width:25px;height:25px;background:#bbb}",""])},juul:function(t,e,r){var n=r("jV1V");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("f8a42400",n,!1,{sourceMap:!1})}});