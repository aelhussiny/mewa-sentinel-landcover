"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[126],{12065:function(t,e,n){n.d(e,{$:function(){return rt},$g:function(){return ot},EI:function(){return Y},GH:function(){return $},IN:function(){return Z},Iv:function(){return R},J6:function(){return j},Jd:function(){return P},Nh:function(){return K},RZ:function(){return X},Uy:function(){return S},XA:function(){return U},Yn:function(){return V},cn:function(){return Q},dd:function(){return A},di:function(){return O},eG:function(){return z},fQ:function(){return G},hY:function(){return st},h_:function(){return H},ks:function(){return B},lM:function(){return W},lz:function(){return ut},zj:function(){return tt}});var r=n(70375),o=n(13802),s=n(61681),i=n(37116),u=n(24568),l=n(53736),a=n(59958),c=n(61619),h=n(15540);function f(t,e){return t?e?4:3:e?3:2}const d=()=>o.Z.getLogger("esri.layers.graphics.featureConversionUtils"),m={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},y=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s},p=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+2]},g=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+3]},_=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+2],t[n+3]=e[r+3]};function b(t,e,n,r){if(t){if(n)return e&&r?_:p;if(e&&r)return g}else if(e&&r)return p;return y}function P({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function Z({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function w({scale:t,translate:e},n,r){return n*t[r]+e[r]}function G(t,e,n){return t?e?n?N(t):T(t):n?C(t):M(t):null}function M(t){const e=t.coords;return{x:e[0],y:e[1]}}function I(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function T(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function v(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function C(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function F(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function N(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function x(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function k(t,e){return t&&e?x:t?v:e?F:I}function A(t,e,n=k(null!=e.z,null!=e.m)){return n(t,e)}function R(t,e,n){if(null==t)return null;const r=f(e,n),o=[];for(let e=0;e<t.coords.length;e+=r){const n=[];for(let o=0;o<r;o++)n.push(t.coords[e+o]);o.push(n)}return e?n?{points:o,hasZ:e,hasM:n}:{points:o,hasZ:e}:n?{points:o,hasM:n}:{points:o}}function L(t,e,n=f(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const r=t.coords;let o=0;for(const t of e.points)for(let e=0;e<n;e++)r[o++]=t[e];return t}function j(t,e,n){if(!t)return null;const r=f(e,n),{coords:o,lengths:s}=t,i=[];let u=0;for(const t of s){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(o[u++]);e.push(t)}i.push(e)}return e?n?{paths:i,hasZ:e,hasM:n}:{paths:i,hasZ:e}:n?{paths:i,hasM:n}:{paths:i}}function E(t,e,n=f(e.hasZ,e.hasM)){const{lengths:r,coords:o}=t;let s=0;for(const t of e.paths){for(const e of t)for(let t=0;t<n;t++)o[s++]=e[t];r.push(t.length)}return t}function z(t,e,n){if(!t)return null;const r=f(e,n),{coords:o,lengths:s}=t,i=[];let u=0;for(const t of s){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(o[u++]);e.push(t)}i.push(e)}return e?n?{rings:i,hasZ:e,hasM:n}:{rings:i,hasZ:e}:n?{rings:i,hasM:n}:{rings:i}}function S(t,e,n=e.hasZ,r=e.hasM){return B(t,e.rings,n,r)}function B(t,e,n,r){const o=f(n,r),{lengths:s,coords:i}=t;let u=0;lt(t);for(const t of e){for(const e of t)for(let t=0;t<o;t++)i[u++]=e[t];s.push(t.length)}return t}const q=[],D=[];function U(t,e,n,r,o){q[0]=t;const[s]=V(D,q,e,n,r,o);return at(q),at(D),s}function V(t,e,n,o,s,i){if(at(t),!n){for(const n of e){const e=i?n.attributes[i]:void 0;t.push(new a.u_(null,n.attributes,null,e))}return t}switch(n){case"esriGeometryPoint":return function(t,e,n,r,o){const s=k(n,r);for(const{geometry:n,attributes:r}of e){const e=null!=n?s(new h.Z,n):null;t.push(new a.u_(e,r,null,o?r[o]:void 0))}return t}(t,e,o,s,i);case"esriGeometryMultipoint":return function(t,e,n,r,o){const s=f(n,r);for(const{geometry:n,attributes:r}of e){const e=null!=n?L(new h.Z,n,s):null;t.push(new a.u_(e,r,null,o?r[o]:void 0))}return t}(t,e,o,s,i);case"esriGeometryPolyline":return function(t,e,n,r,o){const s=f(n,r);for(const{geometry:n,attributes:r,centroid:i}of e){const e=null!=n?E(new h.Z,n,s):null,u=null!=i?A(new h.Z,i):null;t.push(new a.u_(e,r,u,o?r[o]:void 0))}return t}(t,e,o,s,i);case"esriGeometryPolygon":return function(t,e,n,r,o){for(const{geometry:s,centroid:i,attributes:u}of e){const e=null!=s?S(new h.Z,s,n,r):null,l=o?u[o]:void 0;null!=i?t.push(new a.u_(e,u,I(new h.Z,i),l)):t.push(new a.u_(e,u,null,l))}return t}(t,e,o,s,i);default:d().error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`)),at(t)}return t}function Y(t,e,n,r){D[0]=t,J(q,D,e,n,r);const o=q[0];return at(q),at(D),o}function $(t,e,n){if(null==t)return null;const o=new h.Z;return"hasZ"in t&&null==e&&(e=t.hasZ),"hasM"in t&&null==n&&(n=t.hasM),(0,l.wp)(t)?k(null!=e?e:null!=t.z,null!=n?n:null!=t.m)(o,t):(0,l.oU)(t)?S(o,t,e,n):(0,l.l9)(t)?E(o,t,f(e,n)):(0,l.aW)(t)?L(o,t,f(e,n)):void d().error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`))}function O(t,e,n,o){const s=t&&("coords"in t?t:t.geometry);if(null==s)return null;switch(e){case"esriGeometryPoint":{let t=M;return n&&o?t=N:n?t=T:o&&(t=C),t(s)}case"esriGeometryMultipoint":return R(s,n,o);case"esriGeometryPolyline":return j(s,n,o);case"esriGeometryPolygon":return z(s,n,o);default:return d().error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`)),null}}function J(t,e,n,o,s){if(at(t),null==n)return function(t,e){for(const n of e)t.push({attributes:n.attributes});return t}(t,e);switch(n){case"esriGeometryPoint":return function(t,e,n,r){let o=M;n&&r?o=N:n?o=T:r&&(o=C);for(const n of e){const{geometry:e,attributes:r}=n,s=null!=e?o(e):null;t.push({attributes:r,geometry:s})}return t}(t,e,o,s);case"esriGeometryMultipoint":return function(t,e,n,r){for(const{geometry:o,attributes:s}of e)t.push({attributes:s,geometry:null!=o?R(o,n,r):null});return t}(t,e,o,s);case"esriGeometryPolyline":return function(t,e,n,r){for(const{geometry:o,attributes:s}of e)t.push({attributes:s,geometry:null!=o?j(o,n,r):null});return t}(t,e,o,s);case"esriGeometryPolygon":return function(t,e,n,r){for(const{geometry:o,attributes:s,centroid:i}of e){const e=null!=o?z(o,n,r):null;if(null!=i){const n=M(i);t.push({attributes:s,centroid:n,geometry:e})}else t.push({attributes:s,geometry:e})}return t}(t,e,o,s);default:d().error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}return t}function Q(t){const{objectIdFieldName:e,spatialReference:n,transform:r,fields:o,hasM:s,hasZ:i,features:u,geometryType:l,exceededTransferLimit:a,uniqueIdField:c,queryGeometry:h,queryGeometryType:f}=t,d={features:J([],u,l,i,s),fields:o,geometryType:l,objectIdFieldName:e,spatialReference:n,uniqueIdField:c,queryGeometry:O(h,f,!1,!1)};return r&&(d.transform=r),a&&(d.exceededTransferLimit=a),s&&(d.hasM=s),i&&(d.hasZ=i),d}function H(t,e){const n=new c.Z,{hasM:o,hasZ:s,features:i,objectIdFieldName:u,spatialReference:l,geometryType:a,exceededTransferLimit:h,transform:f,fields:m}=t;return m&&(n.fields=m),n.geometryType=a??null,n.objectIdFieldName=u??e??null,n.spatialReference=l??null,n.objectIdFieldName?(i&&V(n.features,i,a,s,o,n.objectIdFieldName),h&&(n.exceededTransferLimit=h),o&&(n.hasM=o),s&&(n.hasZ=s),f&&(n.transform=f),n):(d().error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function W(t){const{transform:e,features:n,hasM:r,hasZ:o}=t;if(!e)return t;for(const t of n)null!=t.geometry&&ot(t.geometry,t.geometry,r,o,e),null!=t.centroid&&ot(t.centroid,t.centroid,r,o,e);return t.transform=null,t}function X(t,e){const{geometryType:n,features:r,hasM:o,hasZ:s}=e;if(!t)return e;for(let e=0;e<r.length;e++){const i=r[e],u=i.weakClone();u.geometry=new h.Z,K(u.geometry,i.geometry,o,s,n,t),i.centroid&&(u.centroid=new h.Z,K(u.centroid,i.centroid,o,s,"esriGeometryPoint",t)),r[e]=u}return e.transform=t,e}function K(t,e,n,r,o,s,i=n,u=r){if(lt(t),!e?.coords.length)return null;const l=m[o],{coords:a,lengths:c}=e,h=f(n,r),d=f(n&&i,r&&u),y=b(n,r,i,u);if(!c.length)return y(t.coords,a,0,0,P(s,a[0]),Z(s,a[1])),lt(t,h,0),t;let p,g,_,w,G=0,M=0,I=M;for(const e of c){if(e<l)continue;let n=0;M=I,_=p=P(s,a[G]),w=g=Z(s,a[G+1]),y(t.coords,a,M,G,_,w),n++,G+=h,M+=d;for(let r=1;r<e;r++,G+=h)_=P(s,a[G]),w=Z(s,a[G+1]),_===p&&w===g||(y(t.coords,a,M,G,_-p,w-g),M+=d,n++,p=_,g=w);n>=l&&(t.lengths.push(n),I=M)}return at(t.coords,I),t.coords.length?t:null}function tt(t,e,n,r,o,s,i=n,u=r){if(lt(t),!e?.coords.length)return null;const l=m[o],{coords:a,lengths:c}=e,h=f(n,r),d=f(n&&i,r&&u),y=b(n,r,i,u);if(!c.length)return y(t.coords,a,0,0,a[0],a[1]),lt(t,h,0),t;let p=0;const g=s*s;for(const e of c){if(e<l){p+=e*h;continue}const n=t.coords.length/d,r=p,o=p+(e-1)*h;y(t.coords,a,t.coords.length,r,a[r],a[r+1]),nt(t.coords,a,h,g,y,r,o),y(t.coords,a,t.coords.length,o,a[o],a[o+1]);const s=t.coords.length/d-n;s>=l?t.lengths.push(s):at(t.coords,n*d),p+=e*h}return t.coords.length?t:null}function et(t,e,n,r){const o=t[e],s=t[e+1],i=t[n],u=t[n+1],l=t[r],a=t[r+1];let c=i,h=u,f=l-c,d=a-h;if(0!==f||0!==d){const t=((o-c)*f+(s-h)*d)/(f*f+d*d);t>1?(c=l,h=a):t>0&&(c+=f*t,h+=d*t)}return f=o-c,d=s-h,f*f+d*d}function nt(t,e,n,r,o,s,i){let u,l=r,a=0;for(let t=s+n;t<i;t+=n)u=et(e,t,s,i),u>l&&(a=t,l=u);l>r&&(a-s>n&&nt(t,e,n,r,o,s,a),o(t,e,t.length,a,e[a],e[a+1]),i-a>n&&nt(t,e,n,r,o,a,i))}function rt(t,e,n,r){if(!e?.coords?.length)return null;const o=f(n,r);let s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=o){const n=t[e],r=t[e+1];s=Math.min(s,n),a=Math.max(a,n),l=Math.min(l,r),c=Math.max(c,r)}}return(0,i.is)(t)?(0,i.bZ)(t,s,l,a,c):(0,u.al)(s,l,a,c,t),t}function ot(t,e,n,r,o){const{coords:i,lengths:u}=e,l=f(n,r);if(!i.length)return t!==e&&lt(t),t;(0,s.O3)(o);const{originPosition:a,scale:c,translate:h}=o,d=ct;d.originPosition=a;const m=d.scale;m[0]=c[0]??1,m[1]=-(c[1]??1),m[2]=c[2]??1,m[3]=c[3]??1;const y=d.translate;if(y[0]=h[0]??0,y[1]=h[1]??0,y[2]=h[2]??0,y[3]=h[3]??0,!u.length){for(let e=0;e<l;++e)t.coords[e]=w(d,i[e],e);return t!==e&&lt(t,l,0),t}let p=0;for(let e=0;e<u.length;e++){const n=u[e];t.lengths[e]=n;for(let e=0;e<l;++e)t.coords[p+e]=w(d,i[p+e],e);let r=t.coords[p],o=t.coords[p+1];p+=l;for(let e=1;e<n;e++,p+=l){r+=i[p]*m[0],o+=i[p+1]*m[1],t.coords[p]=r,t.coords[p+1]=o;for(let e=2;e<l;++e)t.coords[p+e]=w(d,i[p+e],e)}}return t!==e&&lt(t,i.length,u.length),t}function st(t,e,n,r,o,s){if(lt(t),t.lengths.push(...e.lengths),n===o&&r===s)for(let n=0;n<e.coords.length;n++)t.coords.push(e.coords[n]);else{const i=f(n,r),u=b(n,r,o,s),l=e.coords;for(let e=0;e<l.length;e+=i)u(t.coords,l,t.coords.length,e,l[e],l[e+1])}return t}function it(t,e,n,r){let o=0,s=t[r*e],i=t[r*(e+1)];for(let u=1;u<n;u++){const n=s+t[r*(e+u)],l=i+t[r*(e+u)+1],a=(n-s)*(l+i);s=n,i=l,o+=a}return.5*o}function ut(t,e){const{coords:n,lengths:r}=t;let o=0,s=0;for(let t=0;t<r.length;t++){const i=r[t];s+=it(n,o,i,e),o+=i}return Math.abs(s)}function lt(t,e=0,n=0){at(t.lengths,n),at(t.coords,e)}function at(t,e=0){t.length!==e&&(t.length=e)}const ct={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},80126:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(27755),o=n(7958),s=n(14685),i=n(95247),u=(n(4745),n(39994),n(86098),n(37116),n(24568),n(7505),n(59659),n(12512));n(19431),n(35925);class l{constructor(t,e,n){this.uid=t,this.geometry=e,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}class a{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function c(t,e,n,r){if(e?.size&&null!=n&&t)for(const o in t){if(!e.has(o))continue;const s=t[o];"string"==typeof s&&s.length>n&&(r(o),t[o]="")}}var h=n(12065);function f(t,e){return e}function d(t,e,n,r){switch(n){case 0:return g(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?g(t,e+r,1):function({translate:t,scale:e},n,r){return t[r]-n*e[r]}(t,e+r,1)}}function m(t,e,n,r){return 2===n?g(t,e,2):d(t,e,n,r)}function y(t,e,n,r){return 2===n?g(t,e,3):d(t,e,n,r)}function p(t,e,n,r){return 3===n?g(t,e,3):m(t,e,n,r)}function g({translate:t,scale:e},n,r){return t[r]+n*e[r]}class _{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=f,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new a}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,i.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const n of t.features)e(n.geometry)}createSpatialReference(){return new s.Z}addField(t,e){t.fields.push(u.Z.fromJSON(e));const n=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){const n=this._options.maxStringAttributeLength,r=this._options.maxStringAttributeFields;c(e.attributes,r,n,(n=>{const r=e.attributes[t.objectIdFieldName];null!=r&&this._missingAttributes.push({objectId:r,attribute:n})})),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:n,queryGeometryType:r}=e,o=(0,h.$g)(n.clone(),n,!1,!1,this._transform),s=(0,h.di)(o,r,!1,!1);let i=null;switch(r){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}s.type=i,t.queryGeometryType=r,t.queryGeometry=s}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,n)=>this.addCoordinatePoint(t,e,n),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,n)=>this._addCoordinatePolygon(t,e,n),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,n)=>this._addCoordinatePolyline(t,e,n),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,n)=>this._addCoordinateMultipoint(t,e,n),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Bg)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new l((0,o.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,n){const r=this._transform?this._applyTransform(this._transform,e,n,0):e;if(null!=r)switch(n){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,e){let n=0;return e<=1&&(n=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,n):t}_addCoordinatePolyline(t,e,n){this._dehydratedAddPointsCoordinate(t.paths,e,n)}_addCoordinatePolygon(t,e,n){this._dehydratedAddPointsCoordinate(t.rings,e,n)}_addCoordinateMultipoint(t,e,n){0===n&&t.points.push([]);const r=this._transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,n){0===n&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,n),o=t[t.length-1],s=this._coordinateBuffer;if(s){if(0===n){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(s.buffer,t,this._vertexDimension))}s[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:e,hasM:n}=t;return e&&n?p:e?m:n?y:d}}var b=n(75844);class P{_parseFeatureQuery(t){const e=new _(t.options),n=(0,b.C)(t.buffer,e),r={...n,spatialReference:n.spatialReference?.toJSON(),fields:n.fields?n.fields.map((t=>t.toJSON())):void 0,missingAttributes:e.missingAttributes};return Promise.resolve(r)}}function Z(){return new P}}}]);