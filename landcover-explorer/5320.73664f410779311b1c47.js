"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[5320],{35320:function(s,e,r){r.r(e),r.d(e,{deleteForwardEdits:function(){return o}});var t=r(66341),i=r(70375),n=r(84238);async function o(s,e,r,o){if(!e)throw new i.Z("post:missing-guid","guid for version is missing");const a=(0,n.en)(s),u=r.toJSON(),c=(0,n.lA)(a.query,{query:(0,n.cv)({...u,f:"json"}),...o,method:"post"});e.startsWith("{")&&(e=e.slice(1,-1));const p=`${a.path}/versions/${e}/deleteForwardEdits`,{data:d}=await(0,t.Z)(p,c);return d.success}}}]);