"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[7981],{87981:function(t,e,n){n.r(e),n.d(e,{l:function(){return s}});var r=n(58340);var i,o,a,u={exports:{}};i=u,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(t={}){var e,n,r=t;r.ready=new Promise(((t,r)=>{e=t,n=r}));var i=Object.assign({},r),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var f,s="";(a||u)&&(u?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),o&&(s=o),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(f=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var c,l,p=r.print||void 0,h=r.printErr||void 0;Object.assign(r,i),i=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(c=r.wasmBinary),"object"!=typeof WebAssembly&&P("no native wasm support detected");var m,y,d=!1;function v(){var t=l.buffer;r.HEAP8=new Int8Array(t),r.HEAP16=new Int16Array(t),r.HEAPU8=m=new Uint8Array(t),r.HEAPU16=new Uint16Array(t),r.HEAP32=new Int32Array(t),r.HEAPU32=y=new Uint32Array(t),r.HEAPF32=new Float32Array(t),r.HEAPF64=new Float64Array(t)}var g=[],b=[],w=[];function A(t){g.unshift(t)}function E(t){w.unshift(t)}var R=0,_=null;function P(t){r.onAbort?.(t),h(t="Aborted("+t+")"),d=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}var S,H=t=>t.startsWith("data:application/octet-stream;base64,");function x(t){if(t==S&&c)return new Uint8Array(c);if(f)return f(t);throw"both async and sync fetching of the wasm failed"}function I(t,e,n){return function(t){return c||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>x(t))):fetch(t,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((()=>x(t)))}(t).then((t=>WebAssembly.instantiate(t,e))).then((t=>t)).then(n,(t=>{h(`failed to asynchronously prepare wasm: ${t}`),P(t)}))}H(S="libtess.wasm")||(S=function(t){return r.locateFile?r.locateFile(t,s):s+t}(S));var T=t=>{for(;t.length>0;)t.shift()(r)};r.noExitRuntime;var j,C=t=>{var e=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(e),v(),1}catch(t){}},O=[null,[],[]],W="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,F=(t,e)=>{var n=O[t];0===e||10===e?((1===t?p:h)(((t,e,n)=>{for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.buffer&&W)return W.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var f=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o})(n,0)),n.length=0):n.push(e)},M=[],k=t=>{var e=M[t];return e||(t>=M.length&&(M.length=t+1),M[t]=e=j.get(t)),e},U={e:()=>{throw 1/0},g:(t,e,n)=>m.copyWithin(t,e,e+n),f:t=>{var e=m.length,n=2147483648;if((t>>>=0)>n)return!1;for(var r=(t,e)=>t+(e-t%e)%e,i=1;i<=4;i*=2){var o=e*(1+.2/i);o=Math.min(o,t+100663296);var a=Math.min(n,r(Math.max(t,o),65536));if(C(a))return!0}return!1},c:(t,e,n,r)=>{for(var i=0,o=0;o<n;o++){var a=y[e>>2],u=y[e+4>>2];e+=8;for(var f=0;f<u;f++)F(t,m[a+f]);i+=u}return y[r>>2]=i,0},b:function(t,e){var n=L();try{return k(t)(e)}catch(t){if(z(n),t!==t+0)throw t;q(1,0)}},h:function(t,e,n,r){var i=L();try{return k(t)(e,n,r)}catch(t){if(z(i),t!==t+0)throw t;q(1,0)}},d:function(t,e){var n=L();try{k(t)(e)}catch(t){if(z(n),t!==t+0)throw t;q(1,0)}},a:function(t,e,n){var r=L();try{k(t)(e,n)}catch(t){if(z(r),t!==t+0)throw t;q(1,0)}}},B=function(){var t={a:U};function e(t,e){return B=t.exports,l=B.i,v(),j=B.m,function(t){b.unshift(t)}(B.j),function(t){if(R--,r.monitorRunDependencies?.(R),0==R&&_){var e=_;_=null,e()}}(),B}if(R++,r.monitorRunDependencies?.(R),r.instantiateWasm)try{return r.instantiateWasm(t,e)}catch(t){h(`Module.instantiateWasm callback failed with error: ${t}`),n(t)}return function(t,e,n,r){return t||"function"!=typeof WebAssembly.instantiateStreaming||H(e)||"function"!=typeof fetch?I(e,n,r):fetch(e,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,n).then(r,(function(t){return h(`wasm streaming compile failed: ${t}`),h("falling back to ArrayBuffer instantiation"),I(e,n,r)}))))}(c,S,t,(function(t){e(t.instance)})).catch(n),{}}();r._malloc=t=>(r._malloc=B.k)(t),r._free=t=>(r._free=B.l)(t),r._triangulate=(t,e,n,i,o,a)=>(r._triangulate=B.n)(t,e,n,i,o,a);var D,q=(t,e)=>(q=B.o)(t,e),L=()=>(L=B.p)(),z=t=>(z=B.q)(t);function N(){function t(){D||(D=!0,r.calledRun=!0,d||(T(b),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)E(r.postRun.shift());T(w)}()))}R>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)A(r.preRun.shift());T(g)}(),R>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(_=function t(){D||N(),D||(_=t)},r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();N();let $=null,Y=null,G=null,X=null;let J=0;return r.triangulate=(t,e,n)=>{$||($=r._triangulate);let i=r.HEAPF32;const o=r.HEAP32.BYTES_PER_ELEMENT,a=i.BYTES_PER_ELEMENT;n>J&&(J=n,G&&(r._free(G),G=0),Y&&(r._free(Y),Y=0)),G||(G=r._malloc(n*a)),X||(X=r._malloc(4e3*o));const u=2*n;Y||(Y=r._malloc(u*a)),i=r.HEAPF32,i.set(t,G/a),r.HEAP32.set(e,X/o);const f=u/2,s=$(G,X,Math.min(e.length,4e3),2,Y,f),c=2*s;i=r.HEAPF32;const l=i.slice(Y/a,Y/a+c),p={};return p.buffer=l,p.vertexCount=s,p},t.ready},i.exports=a;var f=u.exports;const s=function(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,r.g)(f)},[f])}}]);