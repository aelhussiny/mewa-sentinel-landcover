/*! For license information please see 880.55e604c3fe36955cc0f9.js.LICENSE.txt */
"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[880],{44925:function(e,t,o){o.d(t,{A:function(){return v},S:function(){return p},d:function(){return x}});var n=o(77210),c=o(14974),s=o(16265),i=o(19417),a=o(53801),l=o(86663),r=o(79145),u=o(19516),d=o(44586),h=o(92708),g=o(18888);const p={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m="ellipsis",f="container",v=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=(0,r.d)(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.el.focus()}connectedCallback(){(0,i.c)(this),(0,a.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,i.d)(this),(0,a.d)(this),(0,c.d)(this)}async componentWillLoad(){(0,s.s)(this),await(0,a.s)(this)}componentDidLoad(){(0,s.a)(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:o,layout:c,messages:s,overlayPositioning:i,hasMenuActions:a}=this;return(0,n.h)("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!a,label:s.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:i,placement:"horizontal"===c?"bottom-start":"leading-start",scale:o},(0,n.h)("calcite-action",{icon:m,scale:o,slot:l.S.trigger,text:s.more,textEnabled:e}),(0,n.h)("slot",{name:p.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),(0,n.h)("slot",{name:p.menuTooltip,slot:l.S.tooltip}))}render(){return(0,n.h)("div",{"aria-label":this.label,class:f,role:"group"},(0,n.h)("slot",null),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function x(){if("undefined"==typeof customElements)return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,v);break;case"calcite-action":customElements.get(e)||(0,u.d)();break;case"calcite-action-menu":customElements.get(e)||(0,l.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)();break;case"calcite-popover":customElements.get(e)||(0,g.d)()}}))}x()},30880:function(e,t,o){o.r(t),o.d(t,{CalciteActionGroup:function(){return c},defineCustomElement:function(){return s}});var n=o(44925);const c=n.A,s=n.d},14974:function(e,t,o){o.d(t,{c:function(){return l},d:function(){return r}});var n=o(77210),c=o(85545);const s=new Set;let i;const a={childList:!0};function l(e){i||(i=(0,c.c)("mutation",u)),i.observe(e.el,a)}function r(e){s.delete(e.el),u(i.takeRecords()),i.disconnect();for(const[e]of s.entries())i.observe(e,a)}function u(e){e.forEach((({target:e})=>{(0,n.xE)(e)}))}}}]);