"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[895],{70895:function(t,e,n){n.r(e),n.d(e,{executeForTopIds:function(){return i}});var r=n(84238),o=n(46960),u=n(12621);async function i(t,e,n){const i=(0,r.en)(t);return(await(0,o.w7)(i,u.Z.from(e),{...n})).data.objectIds}},46960:function(t,e,n){n.d(e,{IJ:function(){return a},m5:function(){return f},vB:function(){return m},w7:function(){return p}});var r=n(66341),o=n(3466),u=n(53736),i=n(29927),s=n(35925),l=n(27707),y=n(13097);const c="Layer does not support extent calculation.";function d(t,e){const n=t.geometry,r=t.toJSON(),o=r;if(null!=n&&(o.geometry=JSON.stringify(n),o.geometryType=(0,u.Ji)(n),o.inSR=(0,s.B9)(n.spatialReference)),r.topFilter?.groupByFields&&(o.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(o.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","):delete o.outFields,r.outSR?o.outSR=(0,s.B9)(r.outSR):n&&r.returnGeometry&&(o.outSR=o.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return o}async function a(t,e,n,r){const o=await F(t,e,"json",r);return(0,y.p)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:F(t,e,"json",n,{returnIdsOnly:!0})}async function f(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(c);if(e.hasOwnProperty("count"))throw new Error(c);return t}))}function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,n,u={},s={}){const y="string"==typeof t?(0,o.mN)(t):t,c=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,i.aX)(c,null,u).then((t=>{const i=t?.[0];null!=i&&((e=e.clone()).geometry=i);const c=(0,l.A)({...y.query,f:n,...s,...d(e,s)});return(0,r.Z)((0,o.v_)(y.path,"queryTopFeatures"),{...u,query:{...c,...u.query}})}))}}}]);