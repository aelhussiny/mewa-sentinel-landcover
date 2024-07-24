"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[8015],{50516:function(e,t,a){a.d(t,{D:function(){return n}});var r=a(71760);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:a})=>{(0,r.l)(e)&&a&&e.originOf(t)!==a&&e.updateOrigin(t,a)}))}},71760:function(e,t,a){function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}a.d(t,{l:function(){return r}})},8015:function(e,t,a){a.d(t,{save:function(){return T},saveAs:function(){return O}});var r=a(7753),n=(a(70375),a(50516),a(21011)),i=a(20692),o=a(8308),s=a(54957),u=a(92557),l=a(31370);const c="Feature Service",y="feature-layer-utils",d=`${y}-save`,f=`${y}-save-as`;function p(e){return{isValid:(0,s.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function w(e){return m([e])}async function h(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):b(t,e)}async function b(e,t){if(e.reverse(),!t)return m(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||={},function(e){e.layers||=[],e.tables||=[]}(a);const{layer:{url:r,customParameters:n,apiKey:i}}=t[0];return await async function(e,t,a){const{url:r,customParameters:n,apiKey:i}=t,{serviceJSON:s,layersJSON:l}=await(0,o.V)(r,{customParameters:n,apiKey:i}),c=S(e.layers,s.layers,a),y=S(e.tables,s.tables,a);e.layers=c.itemResources,e.tables=y.itemResources;const d=[...c.added,...y.added],f=l?[...l.layers,...l.tables]:[];await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((({type:e})=>{const a=function(e){let t;switch(e){case"Feature Layer":case"Table":t="FeatureLayer";break;case"Oriented Imagery Layer":t="OrientedImageryLayer";break;case"Catalog Layer":t="CatalogLayer"}return t}(e),r=u.T[a];t.push(r())}));const a=await Promise.all(t),r=new Map;return e.forEach((({type:e},t)=>{r.set(e,a[t])})),r}(t),i=t.map((({id:e,type:t})=>new(n.get(t))({url:a,layerId:e,sourceJSON:r.find((({id:t})=>t===e))})));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const i={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(i.layerType=t.operationalLayerType),P(t,i,e)}))}(e,d,r,f)}(a,{url:r??"",customParameters:n,apiKey:i},t.map((e=>e.layer.layerId))),a}(t,e);for(const t of e)P(t.layer,t.layerJSON,a);return function(e,t){const a=[],r=[];for(const{layer:e}of t){const{isTable:t,layerId:n}=e;t?r.push(n):a.push(n)}L(e.layers,a),L(e.tables,r)}(a,e),a}function L(e,t){if(e.length<2)return;const a=[];for(const{id:t}of e)a.push(t);(0,r.fS)(a.sort(v),t.slice().sort(v))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function v(e,t){return e<t?-1:e>t?1:0}function S(e,t,a){const n=(0,r.e5)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const i=n.added;return i.forEach((({id:t})=>{e.push({id:t})})),{itemResources:e,added:i.filter((({id:e})=>!a.includes(e)))}}function P(e,t,a){e.isTable?g(a.tables,t):g(a.layers,t)}function g(e,t){const a=e.findIndex((({id:e})=>e===t.id));-1===a?e.push(t):e[a]=t}async function I(e,t){const{url:a,layerId:r,title:n,fullExtent:o,isTable:s}=e,u=(0,i.Qc)(a);t.url="FeatureServer"===u?.serverType?a:`${a}/${r}`,t.title||=n,t.extent=null,s||null==o||(t.extent=await(0,l.$o)(o)),(0,l.ck)(t,l.hz.METADATA),(0,l.ck)(t,l.hz.MULTI_LAYER),(0,l.qj)(t,l.hz.SINGLE_LAYER),s&&(0,l.qj)(t,l.hz.TABLE)}async function T(e,t){return(0,n.a1)({layer:e,itemType:c,validateLayer:p,createItemData:(e,t)=>h(t,[e]),errorNamePrefix:d},t)}async function O(e,t,a){return(0,n.po)({layer:e,itemType:c,validateLayer:p,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:t,setItemProperties:I},a)}},21011:function(e,t,a){a.d(t,{DC:function(){return y},Nw:function(){return b},UY:function(){return L},V3:function(){return h},Ym:function(){return m},a1:function(){return S},jX:function(){return v},po:function(){return P},uT:function(){return w},xG:function(){return f}});var r=a(70375),n=a(50516),i=a(93968),o=a(53110),s=a(84513),u=a(31370),l=a(76990),c=a(60629);function y(e,t,a){const n=a(e);if(!n.isValid)throw new r.Z(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}async function d(e){const{layer:t,errorNamePrefix:a,validateLayer:r}=e;await t.load(),y(t,a,r)}function f(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function p(e){const{item:t,errorNamePrefix:a,layer:n,validateItem:i}=e;if((0,l.w)(t),function(e){const{item:t,itemType:a,additionalItemType:n,errorNamePrefix:i,layer:o}=e,s=[a];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new r.Z(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),i){const e=i(t);if(!e.isValid)throw new r.Z(`${a}:invalid-parameters`,e.errorMessage,{layer:n})}}function m(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.Z(`${a}:portal-item-not-set`,f(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.Z(`${a}:portal-item-not-loaded`,f(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:n})}function w(e){const{newItem:t,itemType:a}=e;let r=o.default.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??=a,r.portal??=i.Z.getDefault(),p({...e,item:r}),r}function h(e){return(0,s.Y)(e,"portal-item")}async function b(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,c.z)(t,{errorName:"layer-write:unsupported"},a),r}function L(e){(0,u.qj)(e,u.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function v(e,t,a){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:t,folder:a?.folder}))}async function S(e,t){const{layer:a,createItemData:r,createJSONContext:i,saveResources:o,supplementalUnsupportedErrors:s}=e;await d(e),m(e);const u=a.portalItem,l=i?i(u):h(u),c=await b(a,l,{...t,supplementalUnsupportedErrors:s}),y=await r({layer:a,layerJSON:c},u);return L(u),await u.update({data:y}),(0,n.D)(l),await(o?.(u,l)),u}async function P(e,t){const{layer:a,createItemData:r,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:u}=e;await d(e);const l=w(e),c=i?i(l):h(l),y=await b(a,c,{...t,supplementalUnsupportedErrors:u}),f=await r({layer:a,layerJSON:y},l);return await o(a,l),L(l),await v(l,f,t),a.portalItem=l,(0,n.D)(c),await(s?.(l,c)),l}},8308:function(e,t,a){a.d(t,{V:function(){return n}});var r=a(40371);async function n(e,t){const{loadContext:a,...n}=t||{},i=a?await a.fetchServiceMetadata(e,n):await(0,r.T)(e,n);c(i),s(i);const o={serviceJSON:i};if((i.currentVersion??0)<10.5)return o;const u=`${e}/layers`,l=a?await a.fetchServiceMetadata(u,n):await(0,r.T)(u,n);return c(l),s(l),o.layersJSON={layers:l.layers,tables:l.tables},o}function i(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function o(e){return"Table"===e.type}function s(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(o)}function u(e){e.type||="Feature Layer"}function l(e){e.type||="Table"}function c(e){e.layers?.forEach(u),e.tables?.forEach(l)}},92557:function(e,t,a){a.d(t,{T:function(){return r}});const r={BingMapsLayer:async()=>(await a.e(1968).then(a.bind(a,31968))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(6428),a.e(2411),a.e(8902),a.e(9871)]).then(a.bind(a,59871))).default,CatalogLayer:async()=>(await Promise.all([a.e(4269),a.e(7676),a.e(7503)]).then(a.bind(a,47503))).default,CSVLayer:async()=>(await a.e(9849).then(a.bind(a,89849))).default,DimensionLayer:async()=>(await a.e(442).then(a.bind(a,10442))).default,ElevationLayer:async()=>(await a.e(8858).then(a.bind(a,68858))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(a,12926))).default,GeoJSONLayer:async()=>(await a.e(1655).then(a.bind(a,81655))).default,GeoRSSLayer:async()=>(await a.e(4417).then(a.bind(a,84417))).default,GroupLayer:async()=>(await a.e(3840).then(a.bind(a,13840))).default,ImageryLayer:async()=>(await Promise.resolve().then(a.bind(a,73011))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(9094),a.e(6040)]).then(a.bind(a,36040))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(8902),a.e(6479)]).then(a.bind(a,96479))).default,KMLLayer:async()=>(await a.e(693).then(a.bind(a,80693))).default,LineOfSightLayer:async()=>(await a.e(6498).then(a.bind(a,16498))).default,LinkChartLayer:async()=>(await Promise.all([a.e(4868),a.e(3709),a.e(736),a.e(1350),a.e(9612)]).then(a.bind(a,69195))).default,MapImageLayer:async()=>(await Promise.all([a.e(4269),a.e(7153),a.e(9420)]).then(a.bind(a,69420))).default,MapNotesLayer:async()=>(await a.e(8414).then(a.bind(a,78414))).default,MediaLayer:async()=>(await Promise.resolve().then(a.bind(a,16678))).default,OGCFeatureLayer:async()=>(await a.e(3963).then(a.bind(a,53963))).default,OpenStreetMapLayer:async()=>(await a.e(3206).then(a.bind(a,33206))).default,OrientedImageryLayer:async()=>(await a.e(9855).then(a.bind(a,29855))).default,PointCloudLayer:async()=>(await a.e(3108).then(a.bind(a,73108))).default,RouteLayer:async()=>(await Promise.all([a.e(3970),a.e(2886)]).then(a.bind(a,92886))).default,SceneLayer:async()=>(await Promise.all([a.e(6428),a.e(3190),a.e(2411),a.e(8902),a.e(7518),a.e(5553)]).then(a.bind(a,5553))).default,StreamLayer:async()=>(await a.e(5609).then(a.bind(a,75609))).default,SubtypeGroupLayer:async()=>(await a.e(4765).then(a.bind(a,14765))).default,TileLayer:async()=>(await Promise.all([a.e(4269),a.e(7153),a.e(5369)]).then(a.bind(a,75369))).default,IntegratedMesh3DTilesLayer:async()=>(await a.e(7102).then(a.bind(a,97102))).default,UnknownLayer:async()=>(await a.e(81).then(a.bind(a,40081))).default,UnsupportedLayer:async()=>(await a.e(4864).then(a.bind(a,74864))).default,VectorTileLayer:async()=>(await Promise.all([a.e(3043),a.e(7253)]).then(a.bind(a,16358))).default,VoxelLayer:async()=>(await a.e(5519).then(a.bind(a,85519))).default,WFSLayer:async()=>(await a.e(4420).then(a.bind(a,84420))).default,WMSLayer:async()=>(await a.e(1936).then(a.bind(a,61936))).default,WMTSLayer:async()=>(await a.e(9862).then(a.bind(a,69862))).default,WebTileLayer:async()=>(await a.e(9859).then(a.bind(a,89859))).default}},40371:function(e,t,a){a.d(t,{T:function(){return n}});var r=a(66341);async function n(e,t){const{data:a}=await(0,r.Z)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return a}},76990:function(e,t,a){a.d(t,{w:function(){return o}});var r=a(51366),n=a(70375),i=a(99522);function o(e){if(r.default.apiKey&&(0,i.r)(e.portal.url))throw new n.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},60629:function(e,t,a){a.d(t,{P:function(){return n},z:function(){return o}});var r=a(70375);async function n(e){const t=[];for(const a of e.allLayers)if("beforeSave"in a&&"function"==typeof a.beforeSave){const e=a.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,a){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:a})=>new r.Z(e,t,a)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.Z("url:unsupported",`Relative url '${e}' is not supported`))))),a){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:r}=a;e&&(n=n.filter((({name:e})=>!(i.has(e)||t.includes(e))))),r&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new r.Z(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);