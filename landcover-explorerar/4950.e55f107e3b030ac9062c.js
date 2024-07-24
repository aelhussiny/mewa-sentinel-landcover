/*! For license information please see 4950.e55f107e3b030ac9062c.js.LICENSE.txt */
"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[4950],{74950:function(t,e,n){n.r(e),n.d(e,{CalciteListItemGroup:function(){return d},defineCustomElement:function(){return u}});var i=n(77210),o=n(64426),r=n(22562);const c="container",a="heading",l=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=(0,i.yM)(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0,this.visualLevel=null}connectedCallback(){const{el:t}=this;this.visualLevel=(0,r.b)(t,!0),(0,o.c)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this)}render(){const{disabled:t,heading:e,visualLevel:n}=this;return(0,i.h)(i.AA,null,(0,i.h)(o.I,{disabled:t},(0,i.h)("tr",{class:c,style:{"--calcite-list-item-spacing-indent-multiplier":`${n}`}},(0,i.h)("td",{class:a,colSpan:r.M},e)),(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513],visualLevel:[32]}]);function s(){if("undefined"==typeof customElements)return;["calcite-list-item-group"].forEach((t=>{if("calcite-list-item-group"===t)customElements.get(t)||customElements.define(t,l)}))}s();const d=l,u=s},64426:function(t,e,n){n.d(e,{I:function(){return w},c:function(){return g},d:function(){return v},u:function(){return u}});var i=n(77210);const o=/firefox/i.test(function(){if(!i.Z5.isBrowser)return"";const t=navigator.userAgentData;return t?.brands?t.brands.map((({brand:t,version:e})=>`${t}/${e}`)).join(" "):navigator.userAgent}()),r=o?new WeakMap:null;function c(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function a(t){const e=t.target;if(o&&!r.get(e))return;const{disabled:n}=e;n&&t.preventDefault()}const l=["mousedown","mouseup","click"];function s(t){const e=t.target;o&&!r.get(e)||e.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}const d={capture:!0};function u(t){if(t.disabled)return t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void f(t);m(t),t.el.removeAttribute("aria-disabled")}function f(t){if(t.el.click=c,o){const e=function(t){return t.el.parentElement||t.el}(t),n=r.get(t.el);return n!==e&&(p(n),r.set(t.el,e)),void h(r.get(t.el))}h(t.el)}function h(t){t&&(t.addEventListener("pointerdown",a,d),l.forEach((e=>t.addEventListener(e,s,d))))}function m(t){if(delete t.el.click,o)return p(r.get(t.el)),void r.delete(t.el);p(t.el)}function p(t){t&&(t.removeEventListener("pointerdown",a,d),l.forEach((e=>t.removeEventListener(e,s,d))))}function g(t){t.disabled&&o&&f(t)}function v(t){o&&m(t)}const b={container:"interaction-container"};function w({disabled:t},e){return(0,i.h)("div",{class:b.container,inert:t},...e)}},22562:function(t,e,n){n.d(e,{C:function(){return o},I:function(){return a},M:function(){return c},S:function(){return r},a:function(){return l},b:function(){return p},c:function(){return f},g:function(){return h},u:function(){return m}});var i=n(77210);const o={container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container"},r={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},c=0,a={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},l="data-test-active",s="calcite-list",d="calcite-list-item-group",u="calcite-list-item";function f(t){return Array.from(t.assignedElements({flatten:!0}).filter((t=>t.matches(s))))}function h(t){const e=t.assignedElements({flatten:!0}),n=e.filter((t=>t?.matches(d))).map((t=>Array.from(t.querySelectorAll(u)))).reduce(((t,e)=>[...t,...e]),[]),i=e.filter((t=>t?.matches(u)));return[...e.filter((t=>t?.matches(s))).map((t=>Array.from(t.querySelectorAll(u)))).reduce(((t,e)=>[...t,...e]),[]),...n,...i]}function m(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function p(t,e=!1){if(!i.Z5.isBrowser)return 0;const n=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}}}]);