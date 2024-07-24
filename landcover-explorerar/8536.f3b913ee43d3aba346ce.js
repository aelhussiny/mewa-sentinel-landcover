"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[8536],{66318:function(e,t,n){function r(e){return null!=u(e)||null!=i(e)}function s(e){return l.test(e)}function o(e){return u(e)??i(e)}function i(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!a.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,s=+n.month-1,o=+n.day,i=+(n.hours??"0"),u=+(n.minutes??"0"),a=+(n.seconds??"0");if(i>23)return null;if(u>59)return null;if(a>59)return null;const c=n.ms??"0",d=c?+c.padEnd(3,"0").substring(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(r,s,o,i,u,a,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,s,o,i,u,a,d)}return Number.isNaN(f)?null:f}n.d(t,{mu:function(){return s},of:function(){return r},sG:function(){return o}});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const a=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},69400:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7753),s=n(70375),o=n(31355),i=n(13802),u=n(37116),l=n(24568),a=n(12065),c=n(117),d=n(28098),f=n(12102);const h=(0,u.Ue)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new c.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.Z,this.featureAdapter=f.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,r,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:r,ymax:s,spatialReference:(0,d.S2)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(r.pC)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,u.JR)(h,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void i.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let r;if(this._markedIds.add(t),n?(e.displayId=n.displayId,r=this._boundsStore.get(t),this._boundsStore.delete(t)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);r=(0,a.$)(null!=r?r:(0,l.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(t,r),this._featuresById.set(t,e)}_upsert(e){const t=e?.objectId;if(null==t)return i.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;this._markedIds.add(t);const{geometry:r,attributes:o}=e;for(const e in o)n.attributes[e]=o[e];return r&&(n.geometry=r,this._boundsStore.set(t,(0,a.$)((0,l.Ue)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},12065:function(e,t,n){n.d(t,{$:function(){return re},$g:function(){return se},EI:function(){return Q},GH:function(){return L},IN:function(){return F},Iv:function(){return N},J6:function(){return P},Jd:function(){return _},Nh:function(){return K},RZ:function(){return X},Uy:function(){return A},XA:function(){return U},Yn:function(){return z},cn:function(){return J},dd:function(){return G},di:function(){return Y},eG:function(){return O},fQ:function(){return T},hY:function(){return oe},h_:function(){return V},ks:function(){return k},lM:function(){return W},lz:function(){return ue},zj:function(){return ee}});var r=n(70375),s=n(13802),o=n(61681),i=n(37116),u=n(24568),l=n(53736),a=n(59958),c=n(61619),d=n(15540);function f(e,t){return e?t?4:3:t?3:2}const h=()=>s.Z.getLogger("esri.layers.graphics.featureConversionUtils"),p={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},y=(e,t,n,r,s,o)=>{e[n]=s,e[n+1]=o},m=(e,t,n,r,s,o)=>{e[n]=s,e[n+1]=o,e[n+2]=t[r+2]},g=(e,t,n,r,s,o)=>{e[n]=s,e[n+1]=o,e[n+2]=t[r+3]},I=(e,t,n,r,s,o)=>{e[n]=s,e[n+1]=o,e[n+2]=t[r+2],e[n+3]=t[r+3]};function b(e,t,n,r){if(e){if(n)return t&&r?I:m;if(t&&r)return g}else if(t&&r)return m;return y}function _({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function F({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function w({scale:e,translate:t},n,r){return n*e[r]+t[r]}function T(e,t,n){return e?t?n?j(e):E(e):n?x(e):Z(e):null}function Z(e){const t=e.coords;return{x:t[0],y:t[1]}}function v(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function E(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function M(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function x(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function j(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function R(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function q(e,t){return e&&t?R:e?M:t?S:v}function G(e,t,n=q(null!=t.z,null!=t.m)){return n(e,t)}function N(e,t,n){if(null==e)return null;const r=f(t,n),s=[];for(let t=0;t<e.coords.length;t+=r){const n=[];for(let s=0;s<r;s++)n.push(e.coords[t+s]);s.push(n)}return t?n?{points:s,hasZ:t,hasM:n}:{points:s,hasZ:t}:n?{points:s,hasM:n}:{points:s}}function C(e,t,n=f(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let s=0;for(const e of t.points)for(let t=0;t<n;t++)r[s++]=e[t];return e}function P(e,t,n){if(!e)return null;const r=f(t,n),{coords:s,lengths:o}=e,i=[];let u=0;for(const e of o){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(s[u++]);t.push(e)}i.push(t)}return t?n?{paths:i,hasZ:t,hasM:n}:{paths:i,hasZ:t}:n?{paths:i,hasM:n}:{paths:i}}function B(e,t,n=f(t.hasZ,t.hasM)){const{lengths:r,coords:s}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)s[o++]=t[e];r.push(e.length)}return e}function O(e,t,n){if(!e)return null;const r=f(t,n),{coords:s,lengths:o}=e,i=[];let u=0;for(const e of o){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(s[u++]);t.push(e)}i.push(t)}return t?n?{rings:i,hasZ:t,hasM:n}:{rings:i,hasZ:t}:n?{rings:i,hasM:n}:{rings:i}}function A(e,t,n=t.hasZ,r=t.hasM){return k(e,t.rings,n,r)}function k(e,t,n,r){const s=f(n,r),{lengths:o,coords:i}=e;let u=0;le(e);for(const e of t){for(const t of e)for(let e=0;e<s;e++)i[u++]=t[e];o.push(e.length)}return e}const D=[],$=[];function U(e,t,n,r,s){D[0]=e;const[o]=z($,D,t,n,r,s);return ae(D),ae($),o}function z(e,t,n,s,o,i){if(ae(e),!n){for(const n of t){const t=i?n.attributes[i]:void 0;e.push(new a.u_(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,r,s){const o=q(n,r);for(const{geometry:n,attributes:r}of t){const t=null!=n?o(new d.Z,n):null;e.push(new a.u_(t,r,null,s?r[s]:void 0))}return e}(e,t,s,o,i);case"esriGeometryMultipoint":return function(e,t,n,r,s){const o=f(n,r);for(const{geometry:n,attributes:r}of t){const t=null!=n?C(new d.Z,n,o):null;e.push(new a.u_(t,r,null,s?r[s]:void 0))}return e}(e,t,s,o,i);case"esriGeometryPolyline":return function(e,t,n,r,s){const o=f(n,r);for(const{geometry:n,attributes:r,centroid:i}of t){const t=null!=n?B(new d.Z,n,o):null,u=null!=i?G(new d.Z,i):null;e.push(new a.u_(t,r,u,s?r[s]:void 0))}return e}(e,t,s,o,i);case"esriGeometryPolygon":return function(e,t,n,r,s){for(const{geometry:o,centroid:i,attributes:u}of t){const t=null!=o?A(new d.Z,o,n,r):null,l=s?u[s]:void 0;null!=i?e.push(new a.u_(t,u,v(new d.Z,i),l)):e.push(new a.u_(t,u,null,l))}return e}(e,t,s,o,i);default:h().error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`)),ae(e)}return e}function Q(e,t,n,r){$[0]=e,H(D,$,t,n,r);const s=D[0];return ae(D),ae($),s}function L(e,t,n){if(null==e)return null;const s=new d.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,l.wp)(e)?q(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(s,e):(0,l.oU)(e)?A(s,e,t,n):(0,l.l9)(e)?B(s,e,f(t,n)):(0,l.aW)(e)?C(s,e,f(t,n)):void h().error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`))}function Y(e,t,n,s){const o=e&&("coords"in e?e:e.geometry);if(null==o)return null;switch(t){case"esriGeometryPoint":{let e=Z;return n&&s?e=j:n?e=E:s&&(e=x),e(o)}case"esriGeometryMultipoint":return N(o,n,s);case"esriGeometryPolyline":return P(o,n,s);case"esriGeometryPolygon":return O(o,n,s);default:return h().error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`)),null}}function H(e,t,n,s,o){if(ae(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,r){let s=Z;n&&r?s=j:n?s=E:r&&(s=x);for(const n of t){const{geometry:t,attributes:r}=n,o=null!=t?s(t):null;e.push({attributes:r,geometry:o})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,n,r){for(const{geometry:s,attributes:o}of t)e.push({attributes:o,geometry:null!=s?N(s,n,r):null});return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,n,r){for(const{geometry:s,attributes:o}of t)e.push({attributes:o,geometry:null!=s?P(s,n,r):null});return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,n,r){for(const{geometry:s,attributes:o,centroid:i}of t){const t=null!=s?O(s,n,r):null;if(null!=i){const n=Z(i);e.push({attributes:o,centroid:n,geometry:t})}else e.push({attributes:o,geometry:t})}return e}(e,t,s,o);default:h().error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}return e}function J(e){const{objectIdFieldName:t,spatialReference:n,transform:r,fields:s,hasM:o,hasZ:i,features:u,geometryType:l,exceededTransferLimit:a,uniqueIdField:c,queryGeometry:d,queryGeometryType:f}=e,h={features:H([],u,l,i,o),fields:s,geometryType:l,objectIdFieldName:t,spatialReference:n,uniqueIdField:c,queryGeometry:Y(d,f,!1,!1)};return r&&(h.transform=r),a&&(h.exceededTransferLimit=a),o&&(h.hasM=o),i&&(h.hasZ=i),h}function V(e,t){const n=new c.Z,{hasM:s,hasZ:o,features:i,objectIdFieldName:u,spatialReference:l,geometryType:a,exceededTransferLimit:d,transform:f,fields:p}=e;return p&&(n.fields=p),n.geometryType=a??null,n.objectIdFieldName=u??t??null,n.spatialReference=l??null,n.objectIdFieldName?(i&&z(n.features,i,a,o,s,n.objectIdFieldName),d&&(n.exceededTransferLimit=d),s&&(n.hasM=s),o&&(n.hasZ=o),f&&(n.transform=f),n):(h().error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function W(e){const{transform:t,features:n,hasM:r,hasZ:s}=e;if(!t)return e;for(const e of n)null!=e.geometry&&se(e.geometry,e.geometry,r,s,t),null!=e.centroid&&se(e.centroid,e.centroid,r,s,t);return e.transform=null,e}function X(e,t){const{geometryType:n,features:r,hasM:s,hasZ:o}=t;if(!e)return t;for(let t=0;t<r.length;t++){const i=r[t],u=i.weakClone();u.geometry=new d.Z,K(u.geometry,i.geometry,s,o,n,e),i.centroid&&(u.centroid=new d.Z,K(u.centroid,i.centroid,s,o,"esriGeometryPoint",e)),r[t]=u}return t.transform=e,t}function K(e,t,n,r,s,o,i=n,u=r){if(le(e),!t?.coords.length)return null;const l=p[s],{coords:a,lengths:c}=t,d=f(n,r),h=f(n&&i,r&&u),y=b(n,r,i,u);if(!c.length)return y(e.coords,a,0,0,_(o,a[0]),F(o,a[1])),le(e,d,0),e;let m,g,I,w,T=0,Z=0,v=Z;for(const t of c){if(t<l)continue;let n=0;Z=v,I=m=_(o,a[T]),w=g=F(o,a[T+1]),y(e.coords,a,Z,T,I,w),n++,T+=d,Z+=h;for(let r=1;r<t;r++,T+=d)I=_(o,a[T]),w=F(o,a[T+1]),I===m&&w===g||(y(e.coords,a,Z,T,I-m,w-g),Z+=h,n++,m=I,g=w);n>=l&&(e.lengths.push(n),v=Z)}return ae(e.coords,v),e.coords.length?e:null}function ee(e,t,n,r,s,o,i=n,u=r){if(le(e),!t?.coords.length)return null;const l=p[s],{coords:a,lengths:c}=t,d=f(n,r),h=f(n&&i,r&&u),y=b(n,r,i,u);if(!c.length)return y(e.coords,a,0,0,a[0],a[1]),le(e,d,0),e;let m=0;const g=o*o;for(const t of c){if(t<l){m+=t*d;continue}const n=e.coords.length/h,r=m,s=m+(t-1)*d;y(e.coords,a,e.coords.length,r,a[r],a[r+1]),ne(e.coords,a,d,g,y,r,s),y(e.coords,a,e.coords.length,s,a[s],a[s+1]);const o=e.coords.length/h-n;o>=l?e.lengths.push(o):ae(e.coords,n*h),m+=t*d}return e.coords.length?e:null}function te(e,t,n,r){const s=e[t],o=e[t+1],i=e[n],u=e[n+1],l=e[r],a=e[r+1];let c=i,d=u,f=l-c,h=a-d;if(0!==f||0!==h){const e=((s-c)*f+(o-d)*h)/(f*f+h*h);e>1?(c=l,d=a):e>0&&(c+=f*e,d+=h*e)}return f=s-c,h=o-d,f*f+h*h}function ne(e,t,n,r,s,o,i){let u,l=r,a=0;for(let e=o+n;e<i;e+=n)u=te(t,e,o,i),u>l&&(a=e,l=u);l>r&&(a-o>n&&ne(e,t,n,r,s,o,a),s(e,t,e.length,a,t[a],t[a+1]),i-a>n&&ne(e,t,n,r,s,a,i))}function re(e,t,n,r){if(!t?.coords?.length)return null;const s=f(n,r);let o=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=s){const n=e[t],r=e[t+1];o=Math.min(o,n),a=Math.max(a,n),l=Math.min(l,r),c=Math.max(c,r)}}return(0,i.is)(e)?(0,i.bZ)(e,o,l,a,c):(0,u.al)(o,l,a,c,e),e}function se(e,t,n,r,s){const{coords:i,lengths:u}=t,l=f(n,r);if(!i.length)return e!==t&&le(e),e;(0,o.O3)(s);const{originPosition:a,scale:c,translate:d}=s,h=ce;h.originPosition=a;const p=h.scale;p[0]=c[0]??1,p[1]=-(c[1]??1),p[2]=c[2]??1,p[3]=c[3]??1;const y=h.translate;if(y[0]=d[0]??0,y[1]=d[1]??0,y[2]=d[2]??0,y[3]=d[3]??0,!u.length){for(let t=0;t<l;++t)e.coords[t]=w(h,i[t],t);return e!==t&&le(e,l,0),e}let m=0;for(let t=0;t<u.length;t++){const n=u[t];e.lengths[t]=n;for(let t=0;t<l;++t)e.coords[m+t]=w(h,i[m+t],t);let r=e.coords[m],s=e.coords[m+1];m+=l;for(let t=1;t<n;t++,m+=l){r+=i[m]*p[0],s+=i[m+1]*p[1],e.coords[m]=r,e.coords[m+1]=s;for(let t=2;t<l;++t)e.coords[m+t]=w(h,i[m+t],t)}}return e!==t&&le(e,i.length,u.length),e}function oe(e,t,n,r,s,o){if(le(e),e.lengths.push(...t.lengths),n===s&&r===o)for(let n=0;n<t.coords.length;n++)e.coords.push(t.coords[n]);else{const i=f(n,r),u=b(n,r,s,o),l=t.coords;for(let t=0;t<l.length;t+=i)u(e.coords,l,e.coords.length,t,l[t],l[t+1])}return e}function ie(e,t,n,r){let s=0,o=e[r*t],i=e[r*(t+1)];for(let u=1;u<n;u++){const n=o+e[r*(t+u)],l=i+e[r*(t+u)+1],a=(n-o)*(l+i);o=n,i=l,s+=a}return.5*s}function ue(e,t){const{coords:n,lengths:r}=e;let s=0,o=0;for(let e=0;e<r.length;e++){const i=r[e];o+=ie(n,s,i,t),s+=i}return Math.abs(o)}function le(e,t=0,n=0){ae(e.lengths,n),ae(e.coords,t)}function ae(e,t=0){e.length!==t&&(e.length=t)}const ce={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},93711:function(e,t,n){n.d(t,{S:function(){return s},X:function(){return r}});const r=1;function s(e,t){let n=0;for(const r of t){const t=r.attributes?.[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},98536:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(70375),s=n(53736),o=n(35925),i=n(12065),u=n(93711),l=n(69400),a=n(66069),c=n(66608),d=n(40400),f=n(24366),h=n(28790),p=n(86349),y=n(14845),m=n(72559);const g=o.YU,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o.YU},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return(0,s.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,s.wp)(e)?null!=e.m:!!e.hasM}class w{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,s=this._inferLayerProperties(n,e.fields),o=e.fields||[],i=null!=e.hasM?e.hasM:!!s.hasM,f=null!=e.hasZ?e.hasZ:!!s.hasZ,_=!e.spatialReference&&!s.spatialReference,F=_?g:e.spatialReference||s.spatialReference,w=_?I:null,T=e.geometryType||s.geometryType,Z=!T;let v=e.objectIdField||s.objectIdField,E=e.timeInfo;const M=new h.Z(o);if(!Z&&(_&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!T))throw new r.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new r.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&v!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),v=s.objectIdField),v&&!s.objectIdField){const e=M.get(v);e?(v=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of o){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new r.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===v&&(e.type="esriFieldTypeOID"),!p.v.jsonValues.includes(e.type))throw new r.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});null==e.length&&(e.length=(0,y.ZR)(e))}const x={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,y.os)(e);void 0!==t&&(x[e.name]=t)}if(E){if(E.startTimeField){const e=M.get(E.startTimeField);e?(E.startTimeField=e.name,e.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){const e=M.get(E.endTimeField);e?(E.endTimeField=e.name,e.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){const e=M.get(E.trackIdField);e?E.trackIdField=e.name:(E.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:E}}),E=null)}const S=M.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??m.pt}:null;this._createDefaultAttributes=(0,d.Dm)(x,v);const j={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,d.bU)(T),templates:(0,d.Hq)(x),extent:w,geometryType:T,objectIdField:v,fields:o,hasZ:f,hasM:i,timeInfo:E,dateFieldsTimeReference:S},assignedObjectIds:{}};if(this._queryEngine=new c.q({fieldsIndex:h.Z.fromLayerJSON({fields:o,timeInfo:E,dateFieldsTimeReference:S}),geometryType:T,hasM:i,hasZ:f,objectIdField:v,spatialReference:F,featureStore:new l.Z({geometryType:T,hasM:i,hasZ:f}),timeInfo:E,cacheSpatialQueries:!0}),!n?.length)return this._nextObjectId=u.X,j;const R=(0,u.S)(v,n);return this._nextObjectId=R+1,await(0,a._W)(n,F),this._loadInitialFeatures(j,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,f.b)(t,n),(0,a._W)(e.adds,t),(0,a._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,r,o=null,i=null,u=null;for(const t of e){const e=t.geometry;if(null!=e&&(o||(o=(0,s.Ji)(e)),i||(i=e.spatialReference),null==n&&(n=_(e)),null==r&&(r=F(e)),o&&i&&null!=n&&null!=r))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,r=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||r}))&&(u=e.name)}return{geometryType:o,spatialReference:i,objectIdField:u,hasM:r,hasZ:n}}async _loadInitialFeatures(e,t){const{geometryType:n,hasM:r,hasZ:o,objectIdField:u,spatialReference:l,featureStore:c,fieldsIndex:d}=this._queryEngine,h=[];for(const r of t){if(null!=r.uid&&(e.assignedObjectIds[r.uid]=-1),r.geometry&&n!==(0,s.Ji)(r.geometry)){e.featureErrors.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=(0,f.O0)(d,t,r.attributes,!0);o?e.featureErrors.push(o):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,null!=r.uid&&(e.assignedObjectIds[r.uid]=r.attributes[u]),null!=r.geometry&&(r.geometry=(0,a.iV)(r.geometry,r.geometry.spatialReference,l)),h.push(r))}c.addMany((0,i.Yn)([],h,n,o,r,u));const{fullExtent:p,timeExtent:y}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=p,y){const{start:t,end:n}=y;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:t,updates:n,deletes:r}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(s,t),n?.length&&this._applyUpdateEdits(s,n),r?.length){for(const e of r)s.deleteResults.push((0,f.d1)(e));this._queryEngine.featureStore.removeManyById(r)}const{fullExtent:o,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:i,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:r,hasM:o,hasZ:u,objectIdField:l,spatialReference:c,featureStore:d,fieldsIndex:h}=this._queryEngine,p=[];for(const o of t){if(o.geometry&&r!==(0,s.Ji)(o.geometry)){n.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,f.O0)(h,t,o.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){const e=o.geometry.spatialReference??c;o.geometry=(0,a.iV)((0,f.og)(o.geometry,e),e,c)}p.push(o),n.push((0,f.d1)(o.attributes[l]))}}d.addMany((0,i.Yn)([],p,r,u,o,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:r,hasZ:o,objectIdField:u,spatialReference:l,featureStore:c,fieldsIndex:d}=this._queryEngine;for(const h of t){const{attributes:t,geometry:p}=h,y=t?.[u];if(null==y){e.push((0,f.av)(`Identifier field ${u} missing`));continue}if(!c.has(y)){e.push((0,f.av)(`Feature with object id ${y} missing`));continue}const m=(0,i.EI)(c.getFeature(y),n,o,r);if(null!=p){if(n!==(0,s.Ji)(p)){e.push((0,f.av)("Incorrect geometry type."));continue}const t=p.spatialReference??l;m.geometry=(0,a.iV)((0,f.og)(p,t),t,l)}if(t){const n=(0,f.O0)(d,m.attributes,t);if(n){e.push(n);continue}}c.add((0,i.XA)(m,n,o,r,u)),e.push((0,f.d1)(y))}}_assignObjectId(e,t,n=!1){const r=this._queryEngine.objectIdField;n&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++}}},40400:function(e,t,n){n.d(t,{Dm:function(){return c},Hq:function(){return d},MS:function(){return f},bU:function(){return u}});var r=n(39994),s=n(67134),o=n(10287),i=n(86094);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let a=1;function c(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${a++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new r}catch(n){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},24366:function(e,t,n){n.d(t,{O0:function(){return f},av:function(){return l},b:function(){return m},d1:function(){return c},og:function(){return y}});var r=n(66318),s=n(35925),o=n(14845);class i{constructor(){this.code=null,this.description=null}}class u{constructor(e){this.error=new i,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new u(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const d=new Set;function f(e,t,n,r=!1){d.clear();for(const s in n){const i=e.get(s);if(!i)continue;const u=h(i,n[s]);if(d.add(i.name),i&&(r||i.editable)){const e=(0,o.Qc)(i,u);if(e)return l((0,o.vP)(e,i,u));t[i.name]=u}}for(const t of e?.requiredFields??[])if(!d.has(t.name))return l(`missing required field "${t.name}"`);return null}function h(e,t){let n=t;return(0,o.H7)(e)&&"string"==typeof t?n=parseFloat(t):(0,o.qN)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,o.y2)(e)&&"string"==typeof t&&(n=(0,r.sG)(t)),(0,o.Pz)(n)}let p;function y(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function m(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==p&&(p=await Promise.all([n.e(9067),n.e(3296)]).then(n.bind(n,8923))),p}()}}}]);