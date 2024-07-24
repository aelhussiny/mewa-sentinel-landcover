"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[1673],{69079:function(e,t,n){n.d(t,{BN:function(){return u},Yc:function(){return h},em:function(){return i},mx:function(){return r}});var a=n(51366);const i="arial-unicode-ms",o="woff2",l=new Map,s=new Set;class c{constructor(e,t){this.fontFace=e,this.promise=t}}async function r(e){const t=h(e),n=l.get(t);if(n)return n.promise;const i=new FontFace(e.family,`url('${a.default.fontsUrl}/woff2/${t}.${o}') format('${o}')`,{style:e.style,weight:e.weight}),r=document.fonts;if(r.has(i)&&"loading"===i.status)return i.loaded;const u=i.load().then((()=>(r.add(i),i)));return l.set(t,new c(i,u)),s.add(i),u}function u(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function h(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return u(e.family)+(t.length>0?t:"-regular")}},71673:function(e,t,n){n.d(t,{previewSymbol2D:function(){return S}});var a=n(30936),i=n(39043),o=n(70375),l=n(69079),s=n(95550),c=n(89298),r=n(83773),u=n(5840),h=n(63659);const m="picture-fill",d="picture-marker",f="simple-fill",p="simple-line",y="simple-marker",w="text",g="Aa",b=r.b_.size,v=r.b_.maxSize,x=r.b_.maxOutlineSize,M=r.b_.lineWidth,k=225,L=document.createElement("canvas");function z(e,t){const n=L.getContext("2d"),a=[];t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" ");const{width:i,actualBoundingBoxLeft:o,actualBoundingBoxRight:l,actualBoundingBoxAscent:s,actualBoundingBoxDescent:c}=n.measureText(e);return{width:Math.ceil(Math.max(i,o+l)),height:Math.ceil(s+c),x:Math.floor(o),y:Math.floor((s-c)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.F2)(t.height):null}}function F(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:n,size:a,renderOptions:i}=function(e,t){const n="number"==typeof t?.size?t?.size:null,a=null!=n?(0,s.F2)(n):null,i=null!=t?.maxSize?(0,s.F2)(t.maxSize):null,o=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,l=(0,c._M)(e);let u=(0,c.mx)(e);"dark"!==B(e,245)||t?.ignoreWhiteSymbols||(u={width:.75,...u,color:"#bdc3c7"});const h={shape:null,fill:l,stroke:u,offset:[0,0]};u?.width&&(u.width=Math.min(u.width,x));const k=u?.width||0;let L=null!=t?.size&&(null==t?.scale||t?.scale),F=0,S=0,_=!1;switch(e.type){case y:{const n=e.style,{width:l,height:c}=C(t),r=l===c&&null!=l?l:null!=a?a:Math.min((0,s.F2)(e.size),i||v);switch(F=r,S=r,n){case"circle":h.shape={type:"circle",cx:0,cy:0,r:.5*r},L||(F+=k,S+=k);break;case"cross":h.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[F,.5*S]},{command:"M",values:[.5*F,0]},{command:"L",values:[.5*F,S]}]};break;case"diamond":h.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*F,0]},{command:"L",values:[F,.5*S]},{command:"L",values:[.5*F,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k);break;case"square":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k),o&&(_=!0);break;case"triangle":h.shape={type:"path",path:[{command:"M",values:[.5*F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k),o&&(_=!0);break;case"x":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,S]},{command:"M",values:[F,0]},{command:"L",values:[0,S]}]},o&&(_=!0);break;case"path":h.shape={type:"path",path:e.path||""},L||(F+=k,S+=k),o&&(_=!0),L=!0}break}case p:{const{width:e,height:n}=C(t),i=(0,c.iI)(u).reduce(((e,t)=>e+t),0),o=i&&Math.ceil(M/i),l=n??a??k,s=e??(i*o||M);u&&(u.width=l),F=s,S=l,L=!0,h.shape={type:"path",path:[{command:"M",values:[l/2,S/2]},{command:"L",values:[F-l/2,S/2]}]};break}case m:case f:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:n,height:i}=C(t);F=!e&&n!==i||null==n?null!=a?a:b:n,S=!e&&n!==i||null==i?F:i,L||(F+=k,S+=k),L=!0,h.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.JZ.fill[0];break}case d:{const n=Math.min((0,s.F2)(e.width),i||v),l=Math.min((0,s.F2)(e.height),i||v),{width:c,height:r}=C(t),u=c===r&&null!=c?c:null!=a?a:Math.max(n,l),m=n/l;F=m<=1?Math.ceil(u*m):u,S=m<=1?u:Math.ceil(u/m),h.shape={type:"image",x:-Math.round(F/2),y:-Math.round(S/2),width:F,height:S,src:e.url||""},o&&(_=!0);break}case w:{const n=e,o=t?.overrideText||n.text||g,l=n.font,{width:c,height:r}=C(t),u=null!=r?r:null!=a?a:Math.min((0,s.F2)(l.size),i||v),{width:m,height:d}=z(o,{weight:l.weight,size:u,family:l.family}),f=/[\uE600-\uE6FF]/.test(o);F=c??(f?u:m),S=f?u:d;let p=.5*(f?u:d);f&&(p+=5),h.shape={type:"text",text:o,x:n.xoffset||0,y:n.yoffset||p,align:"middle",alignBaseline:n.verticalAlignment,decoration:l&&l.decoration,rotated:n.rotated,kerning:n.kerning},h.font=l&&{size:u,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:h,size:[F,S],renderOptions:{node:t?.node,scale:L,opacity:t?.opacity,rotation:o,useRotationSize:_,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!n.shape)throw new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const n=t.fill,a=e.color;if("pattern"===n?.type&&a&&e.type!==m){const e=await(0,c.Od)(n.src,a.toCss(!0));n.src=e,t.fill=n}}(e,n),await async function(e,t,n,a){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,l.mx)(e.font)}catch{}const{width:i,height:o}=C(a);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:l,height:s,x:c,y:r}=z(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});n[0]=i??l,n[1]=o??s,t.shape.x=c,t.shape.y=r;const u=null!=a?.rotation?a.rotation:"angle"in e?e.angle:null;if(u){const e=u*(Math.PI/180),t=Math.abs(Math.sin(e)),a=Math.abs(Math.cos(e));n[1]=n[0]*t+n[1]*a}}}(e,n,a,t);const k=[[n]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*a[0];k.unshift([{...n,offset:[-e,0],fill:(0,r.dc)(n.fill,-.3)}]),k.push([{...n,offset:[e,0],fill:(0,r.dc)(n.fill,.3)}]),a[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,n,a,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=n.map((()=>[]));const o=(0,s.F2)(e.haloSize);a[0]+=o,a[1]+=o,n.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:a[0]+2*h.c9,height:a[1]+2*h.c9},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(a[0]+=2*h.c9,a[1]+=2*h.c9,n.unshift([{shape:{type:"rect",x:0,y:0,width:a[0],height:a[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.F2)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,n,k,a,i),(0,u.wh)(k,a,i)}function B(e,t=k){const n=(0,c._M)(e),o=(0,c.mx)(e),l=!n||"type"in n?null:new a.Z(n),s=o?.color?new a.Z(o?.color):null,r=l?F((0,i.EX)(l),t):null,u=s?F((0,i.EX)(s),t):null;return u?r?r===u?r:t>=k?"light":"dark":u:r}}}]);