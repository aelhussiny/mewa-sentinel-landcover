/*! For license information please see 5048.893fe04d03a08ef6d2fc.js.LICENSE.txt */
"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[5048],{25048:function(t,e,a){a.r(e),a.d(e,{CalciteButton:function(){return O},defineCustomElement:function(){return S}});var n=a(77210),o=a(89055),r=a(64426),i=a(81629),c=a(16265),l=a(19417),s=a(85545),d=a(90326),h=a(53801),u=a(79145),p=a(44586),b=a(92708);const v="calcite-button--loader",g="content",f="content--slotted",m="icon",k="icon--start",x="icon--end",w="loading-in",y="loading-out",z="icon-start-empty",_="icon-end-empty",C="button-padding",E="button-padding--shrunk",L=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=(0,s.c)("mutation",(()=>this.updateHasContent())),this.resizeObserver=(0,s.c)("resize",(()=>this.setTooltipText())),this.handleClick=()=>{const{type:t}=this;this.href||("submit"===t?(0,o.s)(this):"reset"===t&&(0,o.r)(this))},this.setTooltipText=()=>{const{contentEl:t}=this;t&&(this.tooltipText=t.offsetWidth<t.scrollWidth&&this.el.innerText||null)},this.setChildEl=t=>{this.childEl=t,t&&this.resizeObserver?.observe(t)},this.alignment="center",this.appearance="solid",this.label=void 0,this.kind="brand",this.disabled=!1,this.form=void 0,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.name=void 0,this.rel=void 0,this.round=!1,this.scale="m",this.splitChild=!1,this.target=void 0,this.type="button",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.hasContent=!1,this.hasLoader=!1,this.effectiveLocale="",this.defaultMessages=void 0,this.tooltipText=void 0}handleGlobalAttributesChanged(){(0,n.xE)(this)}loadingChanged(t,e){t&&!e&&(this.hasLoader=!0),!t&&e&&window.setTimeout((()=>{this.hasLoader=!1}),300)}onMessagesChange(){}async connectedCallback(){(0,r.c)(this),(0,l.c)(this),(0,h.c)(this),this.hasLoader=this.loading,this.setupTextContentObserver(),(0,i.c)(this),this.formEl=(0,o.f)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),(0,r.d)(this),(0,i.d)(this),(0,l.d)(this),(0,h.d)(this),this.resizeObserver?.disconnect(),this.formEl=null}async componentWillLoad(){(0,c.s)(this),n.Z5.isBrowser&&(this.updateHasContent(),await(0,h.s)(this))}componentDidLoad(){(0,c.a)(this),this.setTooltipText()}componentDidRender(){(0,r.u)(this)}render(){const t=this.href?"a":"button",e=t,a=this.hasLoader?(0,n.h)("div",{class:v},(0,n.h)("calcite-loader",{class:this.loading?w:y,inline:!0,label:this.messages.loading,scale:"l"===this.scale?"m":"s"})):null,o=!this.iconStart&&!this.iconEnd,c=(0,n.h)("calcite-icon",{class:{[m]:!0,[k]:!0},flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:(0,d.g)(this.scale)}),l=(0,n.h)("calcite-icon",{class:{[m]:!0,[x]:!0},flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:(0,d.g)(this.scale)}),s=(0,n.h)("span",{class:g,ref:t=>this.contentEl=t},(0,n.h)("slot",null));return(0,n.h)(r.I,{disabled:this.disabled},(0,n.h)(e,{"aria-disabled":"a"===t?(0,u.t)(this.disabled||this.loading):null,"aria-expanded":this.el.getAttribute("aria-expanded"),"aria-label":this.loading?this.messages.loading:(0,i.g)(this),"aria-live":"polite",class:{[C]:o,[E]:!o,[f]:this.hasContent,[z]:!this.iconStart,[_]:!this.iconEnd},disabled:"button"===t?this.disabled||this.loading:null,href:"a"===t&&this.href,name:"button"===t&&this.name,onClick:this.handleClick,rel:"a"===t&&this.rel,tabIndex:this.disabled?-1:null,target:"a"===t&&this.target,title:this.tooltipText,type:"button"===t&&this.type,ref:this.setChildEl},a,this.iconStart?c:null,this.hasContent?s:null,this.iconEnd?l:null))}async setFocus(){await(0,c.c)(this),this.childEl?.focus()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}updateHasContent(){const t=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=1===this.el.childNodes.length&&"#text"===this.el.childNodes[0]?.nodeName?this.el.textContent?.trim().length>0:t}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}onLabelClick(){this.handleClick(),this.setFocus()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{"aria-expanded":["handleGlobalAttributesChanged"],loading:["loadingChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host button,:host a{--calcite-button-content-margin-internal:0.5rem;--calcite-button-padding-x-internal:7px;--calcite-button-padding-y-internal:3px;padding-block:var(--calcite-button-padding-y-internal);padding-inline:var(--calcite-button-padding-x-internal);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}:host button span,:host a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content{margin-inline:var(--calcite-button-content-margin-internal)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin-internal:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin-internal:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin-internal)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px;transition:inline-size var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{animation-name:loader-in;animation-duration:var(--calcite-internal-animation-timing-slow)}.calcite-button--loader calcite-loader.loading-out{animation-name:loader-out;animation-duration:var(--calcite-internal-animation-timing-slow)}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin-internal)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{border-width:1px;border-style:solid;border-color:transparent}:host([kind=brand]) button,:host([kind=brand]) a{background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) button:focus,:host([kind=brand]) a:hover,:host([kind=brand]) a:focus{background-color:var(--calcite-color-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{background-color:var(--calcite-color-brand-press)}:host([kind=brand]) button calcite-loader,:host([kind=brand]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=danger]) button,:host([kind=danger]) a{background-color:var(--calcite-color-status-danger);color:var(--calcite-color-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) button:focus,:host([kind=danger]) a:hover,:host([kind=danger]) a:focus{background-color:var(--calcite-color-status-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{background-color:var(--calcite-color-status-danger-press)}:host([kind=danger]) button calcite-loader,:host([kind=danger]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=neutral]) button,:host([kind=neutral]) a{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) button:focus,:host([kind=neutral]) a:hover,:host([kind=neutral]) a:focus{background-color:var(--calcite-color-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{background-color:var(--calcite-color-foreground-1)}:host([kind=neutral]) button calcite-loader,:host([kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) button:focus,:host([kind=inverse]) a:hover,:host([kind=inverse]) a:focus{background-color:var(--calcite-color-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{background-color:var(--calcite-color-inverse-press)}:host([kind=inverse]) button calcite-loader,:host([kind=inverse]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button calcite-loader,:host([appearance=outline-fill][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline-fill][kind=inverse]) button calcite-loader,:host([appearance=outline-fill][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:transparent;color:var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:transparent;color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button calcite-loader,:host([appearance=outline][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline][kind=inverse]) button calcite-loader,:host([appearance=outline][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{color:var(--calcite-color-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{color:var(--calcite-color-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{color:var(--calcite-color-status-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{color:var(--calcite-color-status-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-color-text-3);border-block-start-color:var(--calcite-color-border-input);border-block-end-color:var(--calcite-color-border-input);border-block-style:solid}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y-internal:0}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button,:host([appearance=transparent][kind=inverse]) a,:host([appearance=transparent][kind=inverse]) calcite-loader{color:var(--calcite-color-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-button-padding-y-internal:3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x-internal:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-padding-y-internal:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x-internal:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-button-padding-x-internal:1rem;--calcite-button-padding-y-internal:11px}:host([scale=l]) .button-padding--shrunk{--calcite-button-padding-y-internal:9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y-internal:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:2.75rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-button",{alignment:[513],appearance:[513],label:[1],kind:[513],disabled:[516],form:[513],href:[513],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],loading:[516],name:[513],rel:[513],round:[516],scale:[513],splitChild:[520,"split-child"],target:[513],type:[513],width:[513],messages:[1040],messageOverrides:[1040],hasContent:[32],hasLoader:[32],effectiveLocale:[32],defaultMessages:[32],tooltipText:[32],setFocus:[64]},void 0,{"aria-expanded":["handleGlobalAttributesChanged"],loading:["loadingChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function T(){if("undefined"==typeof customElements)return;["calcite-button","calcite-icon","calcite-loader"].forEach((t=>{switch(t){case"calcite-button":customElements.get(t)||customElements.define(t,L);break;case"calcite-icon":customElements.get(t)||(0,p.d)();break;case"calcite-loader":customElements.get(t)||(0,b.d)()}}))}T();const O=L,S=T},92708:function(t,e,a){a.d(e,{L:function(){return r},d:function(){return i}});var n=a(77210),o=a(96472);const r=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:t,inline:e,label:a,scale:r,text:i,type:c,value:l}=this,s=t.id||(0,o.g)(),d=e?this.getInlineSize(r):this.getSize(r),h=.45*d,u=`0 0 ${d} ${d}`,p="determinate"===c,b=2*h*Math.PI,v=l/100*b,g=b-v,f=Math.floor(l),m={"aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":100,complete:100===f},k={r:h,cx:d/2,cy:d/2},x={"stroke-dasharray":`${v} ${g}`};return(0,n.h)(n.AA,{"aria-label":a,id:s,role:"progressbar",...p?m:{}},(0,n.h)("div",{class:"loader__svgs"},(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:u},(0,n.h)("circle",{...k})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:u},(0,n.h)("circle",{...k})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:u,...p?{style:x}:{}},(0,n.h)("circle",{...k}))),i&&(0,n.h)("div",{class:"loader__text"},i),p&&(0,n.h)("div",{class:"loader__percentage"},l))}getSize(t){return{s:32,m:56,l:80}[t]}getInlineSize(t){return{s:12,m:16,l:20}[t]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function i(){if("undefined"==typeof customElements)return;["calcite-loader"].forEach((t=>{if("calcite-loader"===t)customElements.get(t)||customElements.define(t,r)}))}i()}}]);