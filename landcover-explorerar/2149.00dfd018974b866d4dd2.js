/*! For license information please see 2149.00dfd018974b866d4dd2.js.LICENSE.txt */
"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[2149],{90326:function(t,e,n){function i(t){return"l"===t?"m":"s"}async function r(t){await(function(t){return"function"==typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}n.d(e,{c:function(){return r},g:function(){return i}})},44586:function(t,e,n){n.d(e,{I:function(){return h},d:function(){return m}});var i=n(77210),r=n(79145),s=n(85545);const o="flip-rtl",a={},c={},u={s:16,m:24,l:32};async function l({icon:t,scale:e}){const n=u[e],r=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const e=/[a-z]/i;t=n.map(((t,n)=>t.replace(e,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(t),s="F"===r.charAt(r.length-1),o=`${s?r.substring(0,r.length-1):r}${n}${s?"F":""}`;if(a[o])return a[o];c[o]||(c[o]=fetch((0,i.K3)(`./assets/icon/${o}.json`)).then((t=>t.json())).catch((()=>"")));const l=await c[o];return a[o]=l,l}const h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:n,scale:s,textLabel:a}=this,c=(0,r.a)(t),l=u[s],h=!!a,m=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,r.t)(!h),"aria-label":h?a:null,role:h?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[o]:"rtl"===c&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((t=>"string"==typeof t?(0,i.h)("path",{d:t}):(0,i.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!i.Z5.isBrowser||!t||!n)return;const r=await l({icon:t,scale:e});t===this.icon&&(this.pathData=r)}waitUntilVisible(t){this.intersectionObserver=(0,s.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function m(){if("undefined"==typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}m()},25694:function(t,e,n){function i(t){return"Enter"===t||" "===t}n.d(e,{i:function(){return i},n:function(){return r}});const r=["0","1","2","3","4","5","6","7","8","9"]},16265:function(t,e,n){n.d(e,{a:function(){return a},c:function(){return c},s:function(){return o}});var i=n(77210);const r=new WeakMap,s=new WeakMap;function o(t){s.set(t,new Promise((e=>r.set(t,e))))}function a(t){r.get(t)()}async function c(t){if(await function(t){return s.get(t)}(t),i.Z5.isBrowser)return(0,i.xE)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},19417:function(t,e,n){n.d(e,{B:function(){return c},a:function(){return v},c:function(){return D},d:function(){return F},g:function(){return x},i:function(){return u},n:function(){return k},p:function(){return l},s:function(){return d}});var i=n(79145),r=n(25694),s=n(85545);const o=new RegExp("\\.(0+)?$"),a=new RegExp("0+$");class c{constructor(t){if(t instanceof c)return t;const[e,n]=function(t){const e=t.split(/[eE]/);if(1===e.length)return t;const n=+t;if(Number.isSafeInteger(n))return`${n}`;const i="-"===t.charAt(0),r=+e[1],s=e[0].split("."),a=(i?s[0].substring(1):s[0])||"",c=s[1]||"",u=(t,e)=>{const n=Math.abs(e)-t.length,i=n>0?`${"0".repeat(n)}${t}`:t;return`${i.slice(0,e)}.${i.slice(e)}`},l=(t,e)=>{const n=e>t.length?`${t}${"0".repeat(e-t.length)}`:t;return`${n.slice(0,e)}.${n.slice(e)}`},m=r>0?`${a}${l(c,r)}`:`${u(a,r)}${c}`;return`${i?"-":""}${"."===m.charAt(0)?"0":""}${m.replace(o,"").replace(h,"")}`}(t).split(".").concat("");this.value=BigInt(e+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(c.DECIMALS+1,"0");return{integers:t.slice(0,-c.DECIMALS),decimals:t.slice(-c.DECIMALS).replace(a,"")}}toString(){const{integers:t,decimals:e}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${e.length?"."+e:""}`}formatToParts(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),i=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),n.length&&(i.push({type:"decimal",value:t.decimal}),n.split("").forEach((t=>i.push({type:"fraction",value:t})))),i}format(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals();return`${`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(e))}`}${n.length?`${t.decimal}${n.split("").map((e=>t.numberFormatter.format(Number(e)))).join("")}`:""}`}add(t){return c.fromBigInt(this.value+new c(t).value)}subtract(t){return c.fromBigInt(this.value-new c(t).value)}multiply(t){return c._divRound(this.value*new c(t).value,c.SHIFT)}divide(t){return c._divRound(this.value*c.SHIFT,new c(t).value)}}function u(t){return!(!t||isNaN(Number(t)))}function l(t){return t&&(e=t,r.n.some((t=>e.includes(t))))?b(t,(t=>{let e=!1;const n=t.split("").filter(((t,n)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/\-/g)||0!==n)||r.n.includes(t))).join("");return u(n)?new c(n).toString():""})):"";var e}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(t,e)=>c.fromBigInt(t/e+(c.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0))),c.fromBigInt=t=>Object.assign(Object.create(c.prototype),{value:t,isNegative:t<BigInt(0)});const h=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,g=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,f=/0*$/,d=t=>b(t,(t=>{const e=t.replace(g,"").replace(m,"").replace(h,"$1");return u(e)?p.test(e)?e:function(t){const e=t.split(".")[1],n=new c(t).toString(),[i,r]=n.split(".");return e&&r!==e?`${i}.${e}`:n}(e):t}));function b(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((t,n)=>e(1===n?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function v(t,e,n){const i=e.split(".")[1];if(i){const r=i.match(f)[0];if(r&&n.delocalize(t).length!==e.length&&-1===i.indexOf("e")){const e=n.decimal;return(t=t.includes(e)?t:`${t}${e}`).padEnd(t.length+r.length,n.localize("0"))}}return t}const w="en",$=["ar","bg","bs","ca","cs","da","de","el",w,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",w,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],y=["arab","arabext","latn"],I=t=>y.includes(t),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,O="arab"!==E&&I(E)?E:"latn";function x(t,e="cldr"){const n="cldr"===e?_:$;return t?n.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===e&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,n)=>`${e}-${n.toUpperCase()}`)),n.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":n.includes(t)?t:w):w}const S=new Set;function D(t){!function(t){t.effectiveLocale=function(t){return t.el.lang||(0,i.c)(t.el,"[lang]")?.lang||document.documentElement.lang||w}(t)}(t),0===S.size&&z?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),S.add(t)}function F(t){S.delete(t),0===S.size&&z.disconnect()}const z=(0,s.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;S.forEach((t=>{if(!(0,i.b)(e,t.el))return;const n=(0,i.c)(t.el,"[lang]");if(!n)return void(t.effectiveLocale=w);const r=n.lang;t.effectiveLocale=n.hasAttribute("lang")&&""===r?w:r}))}))}));const k=new class{constructor(){this.delocalize=t=>this._numberFormatOptions?b(t,(t=>t.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?b(t,(t=>u(t.trim())?new c(t.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){var e;if(t.locale=x(t?.locale),t.numberingSystem=(e=t?.numberingSystem,I(e)?e:O),!this._numberFormatOptions&&t.locale===w&&t.numberingSystem===O&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((t,e)=>[t,e]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=i.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?" ":this._actualGroup,this._decimal=i.find((t=>"decimal"===t.type)).value,this._minusSign=i.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>n.get(t)}}},85545:function(t,e,n){n.d(e,{c:function(){return r}});var i=n(77210);function r(t,e,n){if(!i.Z5.isBrowser)return;const r=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new r(e,n)}},53801:function(t,e,n){n.d(e,{c:function(){return h},d:function(){return m},s:function(){return c},u:function(){return l}});var i=n(77210),r=n(19417);const s={};function o(){throw new Error("could not fetch component message bundle")}function a(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function c(t){t.defaultMessages=await u(t,t.effectiveLocale),a(t)}async function u(t,e){if(!i.Z5.isBrowser)return{};const{el:n}=t,a=n.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const n=`${e}_${t}`;return s[n]||(s[n]=fetch((0,i.K3)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||o(),t.json()))).catch((()=>o()))),s[n]}((0,r.g)(e,"t9n"),a)}async function l(t,e){t.defaultMessages=await u(t,e),a(t)}function h(t){t.onMessagesChange=g}function m(t){t.onMessagesChange=void 0}function g(){a(this)}}}]);