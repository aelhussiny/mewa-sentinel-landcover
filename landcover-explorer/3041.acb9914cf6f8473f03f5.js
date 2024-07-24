"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[3041,5917],{73041:function(n,e,t){t.r(e),t.d(e,{registerFunctions:function(){return R}});var r=t(88256),a=t(58780),i=t(19249),o=t(7182),u=t(4080),c=t(94837),s=t(86727),l=t(5306),f=t(24653),d=t(17321),w=t(91772),h=t(20031),y=t(15917),m=t(74304),p=t(67666),g=t(89542),I=t(90819),Z=t(53736),H=t(93968),v=t(66341);async function A(n,e,t){const a=r.id?.findCredential(n.restUrl);if(!a)return null;if("loaded"===n.loadStatus&&""===e&&n.user?.sourceJSON&&!1===t)return n.user.sourceJSON;const i={responseType:"json",query:{f:"json"}};if(t&&(i.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,v.Z)(n.restUrl+"/community/self",i);if(e.data){const n=e.data;if(n?.username)return n}return null}const o=await(0,v.Z)(n.restUrl+"/community/users/"+e,i);if(o.data){const n=o.data;return n.error?null:n}return null}function V(n){return 0===r.i8.indexOf("4.")?g.Z.fromExtent(n):new g.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function P(n,e,t){if((0,c.H)(n,2,2,e,t),n[0]instanceof h.Z&&n[1]instanceof h.Z);else if(n[0]instanceof h.Z&&null===n[1]);else if(n[1]instanceof h.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new o.aV(e,o.rH.InvalidParameter,t)}async function L(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=(0,l._R)(n.spatialReference)/(0,d.c9)(n.spatialReference));let r=0;if("polyline"===n.type)for(const e of n.paths)for(let n=1;n<e.length;n++)r+=(0,l.AW)(e[n],e[n-1],t);else if("polygon"===n.type)for(const e of n.rings){for(let n=1;n<e.length;n++)r+=(0,l.AW)(e[n],e[n-1],t);(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1]||void 0!==e[0][2]&&e[0][2]!==e[e.length-1][2])&&(r+=(0,l.AW)(e[0],e[e.length-1],t))}else"extent"===n.type&&(r+=2*(0,l.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),r+=2*(0,l.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),r*=2,r+=4*Math.abs((0,c.K)(n.zmax,0)*t-(0,c.K)(n.zmin,0)*t));const a=new I.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,y.planarLength)(a,e)}function R(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null===a[0]||null===a[1]||(0,y.disjoint)(a[0],a[1]))))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.intersects)(a[0],a[1]))))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.touches)(a[0],a[1]))))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.crosses)(a[0],a[1]))))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.within)(a[0],a[1]))))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.contains)(a[0],a[1]))))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.overlaps)(a[0],a[1]))))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>((0,c.H)(a,2,2,e,t),a[0]===a[1]||(a[0]instanceof h.Z&&a[1]instanceof h.Z?(0,y.equals)(a[0],a[1]):((0,c.k)(a[0])&&(0,c.k)(a[1])||!!((0,c.n)(a[0])&&(0,c.n)(a[1])||(0,c.m)(a[0])&&(0,c.m)(a[1])))&&a[0].equals(a[1])))))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,3,3,e,t),a[0]instanceof h.Z&&a[1]instanceof h.Z)return(0,y.relate)(a[0],a[1],(0,c.j)(a[2]));if(a[0]instanceof h.Z&&null===a[1])return!1;if(a[1]instanceof h.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new o.aV(e,o.rH.InvalidParameter,t)}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null===a[0]||null===a[1]?null:(0,y.intersect)(a[0],a[1]))))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{const i=[];if(0===(a=(0,c.I)(a)).length)throw new o.aV(e,o.rH.WrongNumberOfParameters,t);if(1===a.length)if((0,c.o)(a[0])){const n=(0,c.I)(a[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(n[r])}}else{if(!(0,c.q)(a[0])){if(a[0]instanceof h.Z)return(0,c.x)((0,u.r1)(a[0]),e.spatialReference);if(null===a[0])return null;throw new o.aV(e,o.rH.InvalidParameter,t)}{const n=(0,c.I)(a[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(n[r])}}}else for(let n=0;n<a.length;n++)if(null!==a[n]){if(!(a[n]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(a[n])}return 0===i.length?null:(0,y.union)(i)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null!==a[0]&&null===a[1]?(0,u.r1)(a[0]):null===a[0]?null:(0,y.difference)(a[0],a[1]))))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,c.I)(a),e,t),null===a[0]&&null===a[1]?null:null===a[0]?(0,u.r1)(a[1]):null===a[1]?(0,u.r1)(a[0]):(0,y.symmetricDifference)(a[0],a[1]))))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),!(a[1]instanceof w.Z)&&null!==a[1])throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return null===a[1]?null:(0,y.clip)(a[0],a[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),!(a[1]instanceof I.Z)&&null!==a[1])throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0])return[];if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return null===a[1]?[(0,u.r1)(a[0])]:(0,y.cut)(a[0],a[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,c.H)(a,1,2,e,t),null===(a=(0,c.I)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumArea((0,u.EI)((0,c.K)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.J)(a[0],e.spatialReference);return null===n?0:(0,y.planarArea)(n,(0,u.EI)((0,c.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.planarArea)(a[0],(0,u.EI)((0,c.K)(a[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,c.H)(a,1,2,e,t),null===(a=(0,c.I)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumArea((0,u.EI)((0,c.K)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.J)(a[0],e.spatialReference);return null===n?0:(0,y.geodesicArea)(n,(0,u.EI)((0,c.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.geodesicArea)(a[0],(0,u.EI)((0,c.K)(a[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,c.H)(a,1,2,e,t),null===(a=(0,c.I)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumLength((0,u.Lz)((0,c.K)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.L)(a[0],e.spatialReference);return null===n?0:(0,y.planarLength)(n,(0,u.Lz)((0,c.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.planarLength)(a[0],(0,u.Lz)((0,c.K)(a[1],-1)))}))},n.functions.length3d=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if((0,c.H)(a,1,2,e,t),null===(a=(0,c.I)(a))[0])return 0;if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.L)(a[0],e.spatialReference);return null===n?0:!0===n.hasZ?L(n,(0,u.Lz)((0,c.K)(a[1],-1))):(0,y.planarLength)(n,(0,u.Lz)((0,c.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return!0===a[0].hasZ?L(a[0],(0,u.Lz)((0,c.K)(a[1],-1))):(0,y.planarLength)(a[0],(0,u.Lz)((0,c.K)(a[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,c.H)(a,1,2,e,t),null===(a=(0,c.I)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumLength((0,u.Lz)((0,c.K)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.L)(a[0],e.spatialReference);return null===n?0:(0,y.geodesicLength)(n,(0,u.Lz)((0,c.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.geodesicLength)(a[0],(0,u.Lz)((0,c.K)(a[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,c.I)(a),(0,c.H)(a,2,3,e,t);let i=a[0];((0,c.o)(a[0])||(0,c.q)(a[0]))&&(i=(0,c.M)(a[0],e.spatialReference));let s=a[1];if(((0,c.o)(a[1])||(0,c.q)(a[1]))&&(s=(0,c.M)(a[1],e.spatialReference)),!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(s instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.distance)(i,s,(0,u.Lz)((0,c.K)(a[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,c.I)(a),(0,c.H)(a,2,3,e,t);const i=a[0],s=a[1];if(!(i instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(s instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const l=new I.Z({paths:[],spatialReference:i.spatialReference});return l.addPath([i,s]),(0,y.geodesicLength)(l,(0,u.Lz)((0,c.K)(a[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);if(i<=0)throw new o.aV(e,o.rH.InvalidParameter,t);return a[0]instanceof g.Z||a[0]instanceof I.Z?(0,y.densify)(a[0],i,(0,u.Lz)((0,c.K)(a[2],-1))):a[0]instanceof w.Z?(0,y.densify)(V(a[0]),i,(0,u.Lz)((0,c.K)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);if(i<=0)throw new o.aV(e,o.rH.InvalidParameter,t);return a[0]instanceof g.Z||a[0]instanceof I.Z?(0,y.geodesicDensify)(a[0],i,(0,u.Lz)((0,c.K)(a[2],-1))):a[0]instanceof w.Z?(0,y.geodesicDensify)(V(a[0]),i,(0,u.Lz)((0,c.K)(a[2],-1))):a[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,4,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.generalize)(a[0],i,(0,c.h)((0,c.K)(a[2],!0)),(0,u.Lz)((0,c.K)(a[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return 0===i?(0,u.r1)(a[0]):(0,y.buffer)(a[0],i,(0,u.Lz)((0,c.K)(a[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return 0===i?(0,u.r1)(a[0]):(0,y.geodesicBuffer)(a[0],i,(0,u.Lz)((0,c.K)(a[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,6,e,t),null===a[0])return null;if(!(a[0]instanceof g.Z||a[0]instanceof I.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,c.g)((0,c.K)(a[4],10));if(isNaN(s))throw new o.aV(e,o.rH.InvalidParameter,t);const l=(0,c.g)((0,c.K)(a[5],0));if(isNaN(l))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.offset)(a[0],i,(0,u.Lz)((0,c.K)(a[2],-1)),(0,c.j)((0,c.K)(a[3],"round")).toLowerCase(),s,l)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,c.I)(a),(0,c.H)(a,2,3,e,t);let i=a[0];if(null===i)return null;if(!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i instanceof w.Z&&(i=g.Z.fromExtent(i));const u=(0,c.g)(a[1]);if(isNaN(u))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,c.K)(a[2],null);if(null===s)return(0,y.rotate)(i,u);if(s instanceof p.Z)return(0,y.rotate)(i,u,s);throw new o.aV(e,o.rH.InvalidParameter,t)}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,1,1,e,t),null===a[0])return null;let i=a[0];if(((0,c.o)(a[0])||(0,c.q)(a[0]))&&(i=(0,c.M)(a[0],e.spatialReference)),null===i)return null;if(!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return i instanceof p.Z?(0,c.x)((0,u.r1)(a[0]),e.spatialReference):i instanceof g.Z?i.centroid:i instanceof I.Z?(0,l.s9)(i):i instanceof m.Z?(0,l.Ay)(i):i instanceof w.Z?i.center:null}))},n.functions.measuretocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),null===a[0])return null;let u=a[0];if(((0,c.o)(a[0])||(0,c.q)(a[0]))&&(u=(0,c.L)(a[0],e.spatialReference)),null===u)return null;if(!(u instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(u instanceof I.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,c.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,f.Tv)(u,a[1]);return s?i.Z.convertObjectToArcadeDictionary(s,(0,c.N)(e),!1,!0):null}))},n.functions.pointtocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),null===a[0])return null;let u=a[0];if(((0,c.o)(a[0])||(0,c.q)(a[0]))&&(u=(0,c.L)(a[0],e.spatialReference)),null===u)return null;if(!(u instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(u instanceof I.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const s=a[1];if(null===s)return null;if(!(s instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,c.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const l=(0,f.zq)(u,s);return l?i.Z.convertObjectToArcadeDictionary(l,(0,c.N)(e),!1,!0):null}))},n.functions.distancetocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),null===a[0])return null;let u=a[0];if(((0,c.o)(a[0])||(0,c.q)(a[0]))&&(u=(0,c.L)(a[0],e.spatialReference)),null===u)return null;if(!(u instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(u instanceof I.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,c.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,f.qt)(u,a[1]);return s?i.Z.convertObjectToArcadeDictionary(s,(0,c.N)(e),!1,!0):null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{a=(0,c.I)(a),(0,c.H)(a,1,1,e,t);const i=[];if(null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(a[0]instanceof p.Z)return[(0,c.x)((0,u.r1)(a[0]),e.spatialReference)];if(a[0]instanceof w.Z)return[(0,c.x)((0,u.r1)(a[0]),e.spatialReference)];const s=await(0,y.simplify)(a[0]);if(s instanceof g.Z){const n=[],e=[];for(let t=0;t<s.rings.length;t++)if(s.isClockwise(s.rings[t])){const e=(0,Z.im)({rings:[s.rings[t]],hasZ:!0===s.hasZ,hazM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(e)}else e.push({ring:s.rings[t],pt:s.getPoint(t,0)});for(let t=0;t<e.length;t++)for(let r=0;r<n.length;r++)if(n[r].contains(e[t].pt)){n[r].addRing(e[t].ring);break}return n}if(s instanceof I.Z){const n=[];for(let e=0;e<s.paths.length;e++){const t=(0,Z.im)({paths:[s.paths[e]],hasZ:!0===s.hasZ,hazM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(t)}return n}if(a[0]instanceof m.Z){const n=(0,c.x)((0,u.r1)(a[0]),e.spatialReference);for(let e=0;e<n.points.length;e++)i.push(n.getPoint(e));return i}return null}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,1,1,e,t),null===a[0])return!0;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.isSimple)(a[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.simplify)(a[0])}))},n.functions.convexhull=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.convexHull)(a[0])}))},n.functions.getuser=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,u)=>{(0,c.H)(u,0,2,e,t);let l=(0,c.K)(u[1],""),f=!0===l;if(l=!0===l||!1===l?"":(0,c.j)(l),0===u.length||u[0]instanceof a.Z){let n=null;n=e.services?.portal?e.services.portal:H.Z.getDefault(),u.length>0&&(n=(0,s._)(u[0],n));const t=await A(n,l,f);if(t){const n=JSON.parse(JSON.stringify(t));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.Z.convertObjectToArcadeDictionary(n,(0,c.N)(e))}return null}let d=null;if((0,c.u)(u[0])&&(d=u[0]),d){if(f=!1,l)return null;await d.load();const n=await d.getOwningSystemUrl();if(!n){if(!l){const n=await d.getIdentityUser();return n?i.Z.convertObjectToArcadeDictionary({username:n},(0,c.N)(e)):null}return null}let t=null;t=e.services?.portal?e.services.portal:H.Z.getDefault(),t=(0,s._)(new a.Z(n),t);const r=await A(t,l,f);if(r){const n=JSON.parse(JSON.stringify(r));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.Z.convertObjectToArcadeDictionary(n,(0,c.N)(e))}return null}throw new o.aV(e,o.rH.InvalidParameter,t)}))}),n.functions.nearestcoordinate=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),!(a[0]instanceof h.Z||null===a[0]))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(a[1]instanceof p.Z||null===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0]||null===a[1])return null;const u=await(0,y.nearestCoordinate)(a[0],a[1]);return null===u?null:i.Z.convertObjectToArcadeDictionary({coordinate:u.coordinate,distance:u.distance,sideOfLine:0===u.distance?"straddle":u.isRightSide?"right":"left"},(0,c.N)(e),!1,!0)}))},n.functions.nearestvertex=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if(a=(0,c.I)(a),(0,c.H)(a,2,2,e,t),!(a[0]instanceof h.Z||null===a[0]))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(a[1]instanceof p.Z||null===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0]||null===a[1])return null;const u=await(0,y.nearestVertex)(a[0],a[1]);return null===u?null:i.Z.convertObjectToArcadeDictionary({coordinate:u.coordinate,distance:u.distance,sideOfLine:0===u.distance?"straddle":u.isRightSide?"right":"left"},(0,c.N)(e),!1,!0)}))}}},86727:function(n,e,t){t.d(e,{_:function(){return a}});var r=t(93968);function a(n,e){return null===n?e:new r.Z({url:n.field("url")})}},15917:function(n,e,t){t.r(e),t.d(e,{buffer:function(){return z},changeDefaultSpatialReferenceTolerance:function(){return X},clearDefaultSpatialReferenceTolerance:function(){return Y},clip:function(){return h},contains:function(){return m},convexHull:function(){return x},crosses:function(){return p},cut:function(){return y},densify:function(){return M},difference:function(){return N},disjoint:function(){return A},distance:function(){return g},equals:function(){return I},extendedSpatialReferenceInfo:function(){return w},flipHorizontal:function(){return E},flipVertical:function(){return k},generalize:function(){return C},geodesicArea:function(){return B},geodesicBuffer:function(){return O},geodesicDensify:function(){return W},geodesicLength:function(){return G},intersect:function(){return S},intersectLinesToPoints:function(){return Q},intersects:function(){return Z},isSimple:function(){return L},nearestCoordinate:function(){return D},nearestVertex:function(){return q},nearestVertices:function(){return J},offset:function(){return K},overlaps:function(){return V},planarArea:function(){return _},planarLength:function(){return U},relate:function(){return P},rotate:function(){return T},simplify:function(){return R},symmetricDifference:function(){return F},touches:function(){return H},union:function(){return b},within:function(){return v}});t(91957);var r=t(62517),a=t(67666),i=t(53736);function o(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function u(n){return n?Array.isArray(n)?n.map(u):n.toJSON?n.toJSON():n:n}function c(n){return Array.isArray(n)?n.map((n=>(0,i.im)(n))):(0,i.im)(n)}let s;async function l(){return s||(s=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),s}async function f(n,e){return(await l()).invoke("executeGEOperation",{operation:n,parameters:u(e)})}async function d(n,e){const t=await l();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:u(e)}))}function w(n){return f("extendedSpatialReferenceInfo",[n])}async function h(n,e){return c(await f("clip",[o(n),n,e]))}async function y(n,e){return c(await f("cut",[o(n),n,e]))}function m(n,e){return f("contains",[o(n),n,e])}function p(n,e){return f("crosses",[o(n),n,e])}function g(n,e,t){return f("distance",[o(n),n,e,t])}function I(n,e){return f("equals",[o(n),n,e])}function Z(n,e){return f("intersects",[o(n),n,e])}function H(n,e){return f("touches",[o(n),n,e])}function v(n,e){return f("within",[o(n),n,e])}function A(n,e){return f("disjoint",[o(n),n,e])}function V(n,e){return f("overlaps",[o(n),n,e])}function P(n,e,t){return f("relate",[o(n),n,e,t])}function L(n){return f("isSimple",[o(n),n])}async function R(n){return c(await f("simplify",[o(n),n]))}async function x(n,e=!1){return c(await f("convexHull",[o(n),n,e]))}async function N(n,e){return c(await f("difference",[o(n),n,e]))}async function F(n,e){return c(await f("symmetricDifference",[o(n),n,e]))}async function S(n,e){return c(await f("intersect",[o(n),n,e]))}async function b(n,e=null){const t=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,e);return c(await f("union",[o(t),t]))}async function K(n,e,t,r,a,i){return c(await f("offset",[o(n),n,e,t,r,a,i]))}async function z(n,e,t,r=!1){const a=[o(n),n,e,t,r];return c(await f("buffer",a))}async function O(n,e,t,r,a,i){const u=[o(n),n,e,t,r,a,i];return c(await f("geodesicBuffer",u))}async function D(n,e,t=!0){const r=await f("nearestCoordinate",[o(n),n,e,t]);return{...r,coordinate:a.Z.fromJSON(r.coordinate)}}async function q(n,e){const t=await f("nearestVertex",[o(n),n,e]);return{...t,coordinate:a.Z.fromJSON(t.coordinate)}}async function J(n,e,t,r){return(await f("nearestVertices",[o(n),n,e,t,r])).map((n=>({...n,coordinate:a.Z.fromJSON(n.coordinate)})))}function j(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function T(n,e,t){if(null==n)throw new $;const r=n.spatialReference;if(null==(t=t??j(n)))throw new $;const a=n.constructor.fromJSON(await f("rotate",[r,n,e,t]));return a.spatialReference=r,a}async function E(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??j(n)))throw new $;const r=n.constructor.fromJSON(await f("flipHorizontal",[t,n,e]));return r.spatialReference=t,r}async function k(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??j(n)))throw new $;const r=n.constructor.fromJSON(await f("flipVertical",[t,n,e]));return r.spatialReference=t,r}async function C(n,e,t,r){return c(await f("generalize",[o(n),n,e,t,r]))}async function M(n,e,t){return c(await f("densify",[o(n),n,e,t]))}async function W(n,e,t,r=0){return c(await f("geodesicDensify",[o(n),n,e,t,r]))}function _(n,e){return f("planarArea",[o(n),n,e])}function U(n,e){return f("planarLength",[o(n),n,e])}function B(n,e,t){return f("geodesicArea",[o(n),n,e,t])}function G(n,e,t){return f("geodesicLength",[o(n),n,e,t])}async function Q(n,e){return c(await f("intersectLinesToPoints",[o(n),n,e]))}async function X(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function Y(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class $ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);