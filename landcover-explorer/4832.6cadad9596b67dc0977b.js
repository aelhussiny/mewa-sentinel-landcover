"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[4832],{91917:function(t,e,n){n.d(e,{a:function(){return O},b:function(){return b},c:function(){return g},f:function(){return E},g:function(){return M},j:function(){return F},n:function(){return B}});n(39994);var r=n(13802),i=n(19431),o=n(32114),s=n(86717),c=n(81095),u=n(56999),a=n(52721),h=n(40201),d=n(19546),l=n(97537),f=n(5700),_=n(68817);const m=g();function g(){return(0,a.Ue)()}const T=u.e,p=u.e;function O(t,e){return(0,u.c)(e,t)}function b(t){return t[3]}function M(t){return t}function E(t,e,n,r){return(0,a.al)(t,e,n,r)}function N(t,e,n){if(null==e)return!1;if(!A(t,e,R))return!1;let{t0:r,t1:i}=R;if((r<0||i<r&&i>0)&&(r=i),r<0)return!1;if(n){const{origin:t,direction:i}=e;n[0]=t[0]+i[0]*r,n[1]=t[1]+i[1]*r,n[2]=t[2]+i[2]*r}return!0}const R={t0:0,t1:0};function A(t,e,n){const{origin:r,direction:i}=e,o=S;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),u=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const S=(0,c.Ue)();function F(t,e){return N(t,e,null)}function x(t,e,n){const r=_.WM.get(),i=_.MP.get();(0,s.b)(r,e.origin,e.direction);const c=b(t);(0,s.b)(n,r,e.origin),(0,s.h)(n,n,1/(0,s.l)(n)*c);const u=I(t,e.origin),a=(0,f.EU)(e.origin,n);return(0,o.Us)(i,a+u,r),(0,s.e)(n,n,i),n}function j(t,e,n){const r=(0,s.f)(_.WM.get(),e,t),i=(0,s.h)(_.WM.get(),r,t[3]/(0,s.l)(r));return(0,s.g)(n,i,t)}function I(t,e){const n=(0,s.f)(_.WM.get(),e,t),r=(0,s.l)(n),o=b(t),c=o+Math.abs(o-r);return(0,i.ZF)(o/c)}const P=(0,c.Ue)();function U(t,e,n,r){const o=(0,s.f)(P,e,t);switch(n){case d.R.X:{const t=(0,i.jE)(o,P)[2];return(0,s.s)(r,-Math.sin(t),Math.cos(t),0)}case d.R.Y:{const t=(0,i.jE)(o,P),e=t[1],n=t[2],c=Math.sin(e);return(0,s.s)(r,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case d.R.Z:return(0,s.n)(r,o);default:return}}function v(t,e){const n=(0,s.f)(w,e,t);return(0,s.l)(n)-t[3]}function B(t,e){const n=(0,s.a)(t,e),r=b(t);return n<=r*r}const w=(0,c.Ue)(),y=g();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:v,angleToSilhouette:I,axisAt:U,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return N(t,e,n)?n:((0,l.JI)(e,t,n),j(t,n,n))},closestPointOnSilhouette:x,containsPoint:B,copy:O,create:g,distanceToSilhouette:function(t,e){const n=(0,s.f)(_.WM.get(),e,t),r=(0,s.p)(n),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:p,exactEquals:T,fromCenterAndRadius:function(t,e){return(0,a.al)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:E,getCenter:M,getRadius:b,intersectLine:function(t,e,n){const r=(0,l.zk)(e,n);if(!A(t,r,R))return[];const{origin:i,direction:o}=r,{t0:u,t1:a}=R,d=e=>{const n=(0,c.Ue)();return(0,s.r)(n,i,o,e),j(t,n,n)};return Math.abs(u-a)<(0,h.bn)()?[d(u)]:[d(u),d(a)]},intersectRay:N,intersectRayClosestSilhouette:function(t,e,n){if(N(t,e,n))return n;const r=x(t,e,_.WM.get());return(0,s.g)(n,e.origin,(0,s.h)(_.WM.get(),e.direction,(0,s.q)(e.origin,r)/(0,s.l)(e.direction))),n},intersectsRay:F,projectPoint:j,setAltitudeAt:function(t,e,n,r){const i=v(t,e),o=U(t,e,d.R.Z,w),c=(0,s.h)(w,o,n-i);return(0,s.g)(r,e,c)},setExtent:function(t,e,n){return r.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&O(t,n),n},tmpSphere:y,union:function(t,e,n=(0,a.Ue)()){const r=(0,s.q)(t,e),i=t[3],o=e[3];return r+o<i?((0,u.c)(n,t),n):r+i<o?((0,u.c)(n,e),n):((0,s.m)(n,t,e,(r+o-i)/(2*r)),n[3]=(r+i+o)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},19480:function(t,e,n){n.d(e,{x:function(){return i}});var r=n(66581);class i{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},3308:function(t,e,n){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{Ue:function(){return r},Wd:function(){return o},d9:function(){return i}});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,r,i,o,s,c,u,a,h,d,l,f,_,m){return[t,e,n,r,i,o,s,c,u,a,h,d,l,f,_,m]}},Symbol.toStringTag,{value:"Module"}))},96303:function(t,e,n){function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{Ue:function(){return r},Wd:function(){return o},d9:function(){return i}});const o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,r){return[t,e,n,r]}},Symbol.toStringTag,{value:"Module"}))},56215:function(t,e,n){n.d(e,{Jk:function(){return d},Ue:function(){return u},al:function(){return a},nF:function(){return l},zk:function(){return h}});var r=n(19431),i=n(19480),o=n(86717),s=n(81095),c=n(68817);function u(t){return t?{origin:(0,s.d9)(t.origin),vector:(0,s.d9)(t.vector)}:{origin:(0,s.Ue)(),vector:(0,s.Ue)()}}function a(t,e,n=u()){return(0,o.c)(n.origin,t),(0,o.c)(n.vector,e),n}function h(t,e,n=u()){return(0,o.c)(n.origin,t),(0,o.f)(n.vector,e,t),n}function d(t,e){const n=(0,o.f)(c.WM.get(),e,t.origin),i=(0,o.k)(t.vector,n),s=(0,o.k)(t.vector,t.vector),u=(0,r.uZ)(i/s,0,1),a=(0,o.f)(c.WM.get(),(0,o.h)(c.WM.get(),t.vector,u),n);return(0,o.k)(a,a)}function l(t,e,n){return function(t,e,n,i,s){const{vector:u,origin:a}=t,h=(0,o.f)(c.WM.get(),e,a),d=(0,o.k)(u,h)/(0,o.p)(u);return(0,o.h)(s,u,(0,r.uZ)(d,n,i)),(0,o.g)(s,s,t.origin)}(t,e,0,1,n)}(0,s.Ue)(),(0,s.Ue)(),new i.x((()=>u()))},39050:function(t,e,n){n.d(e,{oq:function(){return p},Er:function(){return O},JG:function(){return c},Ue:function(){return s},zu:function(){return d},zk:function(){return h},st:function(){return u},jH:function(){return b}});n(19431);var r=n(86717),i=n(81095),o=n(56999);n(5700),n(68817);(0,i.Ue)(),(0,i.Ue)(),(0,i.Ue)(),(0,i.Ue)(),(0,i.Ue)();function s(t=M){return[t[0],t[1],t[2],t[3]]}o.a,o.e;function c(t,e){return a(e[0],e[1],e[2],e[3],t)}function u(t){return t}function a(t,e,n,r,i=s()){return i[0]=t,i[1]=e,i[2]=n,i[3]=r,i}function h(t,e,n,r=s()){const i=n[0]-e[0],o=n[1]-e[1],c=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],h=t[2]-e[2],d=o*h-c*a,l=c*u-i*h,f=i*a-o*u,_=d*d+l*l+f*f,m=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;return r[0]=d*m,r[1]=l*m,r[2]=f*m,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function d(t,e,n,i=0,o=Math.floor(n*(1/3)),s=Math.floor(n*(2/3))){if(n<3)return!1;e(f,i);let c=o,u=!1;for(;c<n-1&&!u;)e(_,c),c++,u=!(0,r.j)(f,_);if(!u)return!1;for(c=Math.max(c,s),u=!1;c<n&&!u;)e(m,c),c++,(0,r.f)(g,f,_),(0,r.n)(g,g),(0,r.f)(T,_,m),(0,r.n)(T,T),u=!(0,r.j)(f,m)&&!(0,r.j)(_,m)&&Math.abs((0,r.k)(g,T))<l;return u?(h(f,_,m,t),!0):(0!==i||1!==o||2!==s)&&d(t,e,n,0,1,2)}const l=.99619469809,f=(0,i.Ue)(),_=(0,i.Ue)(),m=(0,i.Ue)(),g=(0,i.Ue)(),T=(0,i.Ue)();function p(t,e){const n=(0,r.k)(t,e.ray.direction),i=-b(t,e.ray.origin);if(i<0&&n>=0)return!1;if(n>-1e-6&&n<1e-6)return i>0;if((i<0||n<0)&&!(i<0&&n<0))return!0;const o=i/n;return n>0?o<e.c1&&(e.c1=o):o>e.c0&&(e.c0=o),e.c0<=e.c1}function O(t,e){const n=(0,r.k)(t,e.ray.direction),i=-b(t,e.ray.origin);if(n>-1e-6&&n<1e-6)return i>0;const o=i/n;return n>0?o<e.c1&&(e.c1=o):o>e.c0&&(e.c0=o),e.c0<=e.c1}function b(t,e){return(0,r.k)(t,e)+t[3]}const M=[0,0,1,0];var E,N;(N=E||(E={}))[N.NONE=0]="NONE",N[N.CLAMP=1]="CLAMP",N[N.INFINITE_MIN=4]="INFINITE_MIN",N[N.INFINITE_MAX=8]="INFINITE_MAX";E.INFINITE_MIN,E.INFINITE_MAX,E.INFINITE_MAX},97537:function(t,e,n){n.d(e,{JG:function(){return a},JI:function(){return l},Ue:function(){return s},al:function(){return d},re:function(){return u},zk:function(){return h}});n(7753);var r=n(19480),i=n(86717),o=n(81095);n(68817);function s(t){return t?c((0,o.d9)(t.origin),(0,o.d9)(t.direction)):c((0,o.Ue)(),(0,o.Ue)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=f.get();return n.origin=t,n.direction=e,n}function a(t,e=s()){return d(t.origin,t.direction,e)}function h(t,e,n=s()){return(0,i.c)(n.origin,t),(0,i.f)(n.direction,e,t),n}function d(t,e,n=s()){return(0,i.c)(n.origin,t),(0,i.c)(n.direction,e),n}function l(t,e,n){const r=(0,i.k)(t.direction,(0,i.f)(n,e,t.origin));return(0,i.g)(n,t.origin,(0,i.h)(n,t.direction,r)),n}const f=new r.x((()=>s()))},5700:function(t,e,n){n.d(e,{EU:function(){return c},SR:function(){return s}});var r=n(19431),i=n(86717),o=n(81095);function s(t,e){return(0,i.k)(t,e)/(0,i.l)(t)}function c(t,e){const n=(0,i.k)(t,e)/((0,i.l)(t)*(0,i.l)(e));return-(0,r.ZF)(n)}(0,o.Ue)(),(0,o.Ue)()},68817:function(t,e,n){n.d(e,{MP:function(){return f},vD:function(){return _},WM:function(){return d},o6:function(){return l}});var r=n(66581),i=n(3965),o=n(3308),s=n(96303),c=n(84164),u=n(81095),a=n(52721);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.Ue)}static createVec3f64(){return new h(u.Ue)}static createVec4f64(){return new h(a.Ue)}static createMat3f64(){return new h(i.Ue)}static createMat4f64(){return new h(o.Ue)}static createQuatf64(){return new h(s.Ue)}get test(){return{length:this._items.length}}}h.createVec2f64();const d=h.createVec3f64(),l=h.createVec4f64(),f=(h.createMat3f64(),h.createMat4f64()),_=h.createQuatf64()},64832:function(t,e,n){n.r(e),n.d(e,{default:function(){return Q}});var r=n(36663),i=n(78668),o=(n(13802),n(39994),n(4157),n(70375),n(40266)),s=n(86717),c=n(81095),u=n(56215),a=n(91917),h=n(34596),d=n(17135),l=n(19480),f=(n(32114),n(56999),n(52721)),_=n(97537);function m(t){return t?{ray:(0,_.Ue)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,_.Ue)(),c0:0,c1:Number.MAX_VALUE}}new l.x((()=>m()));var g,T;n(39050),n(68817);function p(t,e){for(let n=0;n<O;n++){const r=t[n];if(r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]>=e[3])return!1}return!0}!function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(g||(g={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(T||(T={}));T.FAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_LEFT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_BOTTOM_RIGHT,T.NEAR_TOP_RIGHT,T.NEAR_TOP_LEFT,T.FAR_BOTTOM_RIGHT,T.FAR_BOTTOM_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_RIGHT,T.NEAR_BOTTOM_RIGHT,T.FAR_BOTTOM_RIGHT,T.FAR_TOP_RIGHT,T.NEAR_TOP_RIGHT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_TOP_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_LEFT,T.NEAR_TOP_LEFT,T.NEAR_TOP_RIGHT,T.FAR_TOP_RIGHT;const O=6;(0,f.al)(-1,-1,-1,1),(0,f.al)(1,-1,-1,1),(0,f.al)(1,1,-1,1),(0,f.al)(-1,1,-1,1),(0,f.al)(-1,-1,1,1),(0,f.al)(1,-1,1,1),(0,f.al)(1,1,1,1),(0,f.al)(-1,1,1,1),new l.x(m),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)();var b,M,E=n(15095);class N{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new R,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),R.clearPool(),w[0]=null,k.prune(),W.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=R.acquire();for(let r=0;r<e;r++){const e=t[r];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}R.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=R.acquire();for(const r of t){const t=e??(0,a.a)(this.objectToBoundingSphere(r),D);P(t[3])?(n.init(this._root),this._remove(r,t,n)):this._degenerateObjects.delete(r)}R.release(n),this._shrink()}update(t,e){if(!P(e[3])&&this._isDegenerate(t))return;const n=function(t){return w[0]=t,w}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const r=(0,_.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(r,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(r,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(r,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,r){const i=(0,_.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(i,t,r))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,r)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,r)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,r=(()=>!0),i=1/0){let o=1/0,c=1/0,u=null;const h=j(t,e),d=s=>{if(--i,!r(s))return;const h=this.objectToBoundingSphere(s);if(!p(n,h))return;const d=I(t,e,(0,a.g)(h)),l=d-h[3],f=d+h[3];l<o&&(o=l,c=f,u=s)};return this._forEachNodeDepthOrdered(this._root,(r=>{if(i<=0||!p(n,r.bounds))return!1;if((0,s.h)(z,h,r.halfSize),(0,s.g)(z,z,(0,a.g)(r.bounds)),I(t,e,z)>c)return!1;const o=r.node;return o.terminals.forAll((t=>d(t))),null!==o.residents&&o.residents.forAll((t=>d(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,r,i,o,c){let u=-1/0,h=1/0;const d={setRange:t=>{n===N.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),h=Math.min(h,t.far)):(u=Math.max(u,-t.far),h=Math.min(h,-t.near))}};d.setRange(r);const l=I(e,n,t),f=j(e,n),_=j(e,-n),m=t=>{if(!c(t))return;const r=this.objectToBoundingSphere(t),s=(0,a.g)(r),f=I(e,n,s)-l,_=f-r[3],m=f+r[3];_>h||m<u||!p(o,r)||i(t,d)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!p(o,t.bounds))return!1;if((0,s.h)(z,f,t.halfSize),(0,s.g)(z,z,(0,a.g)(t.bounds)),I(e,n,z)-l>h)return!1;if((0,s.h)(z,_,t.halfSize),(0,s.g)(z,z,(0,a.g)(t.bounds)),I(e,n,z)-l<u)return!1;const r=t.node;return r.terminals.forAll((t=>m(t))),null!==r.residents&&r.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,a.b)(e),r=(0,a.g)(e),i=e=>{const i=this.objectToBoundingSphere(e),o=(0,a.b)(i),c=n+o;return!((0,s.a)((0,a.g)(i),r)-c*c<=0)||t(e)};let o=!0;const c=t=>{o&&(o=i(t))};this._forEachNode(this._root,(t=>{const e=(0,a.b)(t.bounds),i=n+e;if((0,s.a)((0,a.g)(t.bounds),r)-i*i>0)return!1;const u=t.node;return u.terminals.forAll(c),o&&null!==u.residents&&u.residents.forAll(c),o})),o&&this.forEachDegenerateObject(c)}_intersectsNode(t,e){return F((0,a.g)(e.bounds),2*-e.halfSize,L),F((0,a.g)(e.bounds),2*e.halfSize,C),(0,E.yK)(t.origin,t.direction,L,C)}_intersectsNodeWithOffset(t,e,n){return F((0,a.g)(e.bounds),2*-e.halfSize,L),F((0,a.g)(e.bounds),2*e.halfSize,C),n.applyToMinMax(L,C),(0,E.yK)(t.origin,t.direction,L,C)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,a.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const r=this.objectToBoundingSphere(e);return!(r[3]>0)||(0,a.j)(n.applyToBoundingSphere(r),t)}_forEachNode(t,e){let n=R.acquire().init(t);const r=[n];for(;0!==r.length;){if(n=r.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&r.push(R.acquire().init(n).advance(t));R.release(n)}}_forEachNodeDepthOrdered(t,e,n,r=N.DepthOrder.FRONT_TO_BACK){let i=R.acquire().init(t);const o=[i];for(function(t,e,n){if(!W.length)for(let t=0;t<8;++t)W.push({index:0,distance:0});for(let n=0;n<8;++n){const r=U[n];W.data[n].index=n,W.data[n].distance=I(t,e,r)}W.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=W.data[t].index}(n,r,Z);0!==o.length;){if(i=o.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=Z[t];i.node.children[e]&&o.push(R.acquire().init(i).advance(e))}R.release(i)}}_remove(t,e,n){k.clear();const r=n.advanceTo(e,((t,e)=>{k.push(t.node),k.push(e)}))?n.node.terminals:n.node.residents;if(r.removeUnordered(t),0===r.length)for(let t=k.length-2;t>=0;t-=2){const e=k.data[t],n=k.data[t+1];if(!this._purge(e,n))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new d.Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const r=R.acquire().init(t);this._add(e.at(n),r),R.release(r)}}_grow(t,e){if(0!==e&&(x(t,e,(t=>this.objectToBoundingSphere(t)),H),P(H[3])&&!this._fitsInsideTree(H)))if(this._nodeIsEmpty(this._root.node))(0,a.a)(H,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(H);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(H,t):this._growRootAsSubNode(t),R.release(t)}}_rebuildTree(t,e){(0,s.c)((0,a.g)(G),(0,a.g)(e.bounds)),G[3]=e.halfSize,x([t,G],2,(t=>t),V);const n=R.acquire().init(this._root);this._root.initFrom(null,V,V[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),R.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let r=-1/0;const i=this._root.bounds,o=this._root.halfSize;for(let t=0;t<3;t++){const s=i[t]-o-(n[t]-e),c=n[t]+e-(i[t]+o),u=Math.max(0,Math.ceil(s/(2*o))),a=Math.max(0,Math.ceil(c/(2*o)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);r=Math.max(r,h),q[t].min=u,q[t].max=a}for(let t=0;t<3;t++){let e=q[t].min,n=q[t].max;const s=(r-(e+n))/2;e+=Math.ceil(s),n+=Math.floor(s);const c=i[t]-o-e*o*2;y[t]=c+(n+e)*o}const s=r*o;return y[3]=s*B,R.acquire().initFrom(null,y,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,s.c)((0,a.g)(H),(0,a.g)(this._root.bounds)),H[3]=this._root.halfSize,this._root.init(t),t.advanceTo(H,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,r=0;for(;r<e.length&&null==t;)n=r++,t=e[n];for(;r<e.length;)if(e[r++])return-1;return n}_isDegenerate(t){return!P(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,r=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:r}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),r=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:r}}static fromJSON(t){const e=new N((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class R{constructor(){this.bounds=(0,a.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,r=this.depth){return this.node=null!=t?t:R.createEmptyNode(),e&&(0,a.a)(e,this.bounds),this.halfSize=n,this.depth=r,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*B}advance(t){let e=this.node.children[t];e||(e=R.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=U[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const r=this._childIndex(t);e&&e(this,r),this.advance(r)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new d.Z({shrink:!0}),residents:new d.Z({shrink:!0})}}static acquire(){return R._pool.acquire()}static release(t){R._pool.release(t)}static clearPool(){R._pool.prune()}}function A(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function S(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function F(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function x(t,e,n,r){if(1===e){const e=n(t[0]);(0,a.a)(e,r)}else{L[0]=1/0,L[1]=1/0,L[2]=1/0,C[0]=-1/0,C[1]=-1/0,C[2]=-1/0;for(let r=0;r<e;r++){const e=n(t[r]);P(e[3])&&(A(L,e),S(C,e))}(0,s.m)((0,a.g)(r),L,C,.5),r[3]=Math.max(C[0]-L[0],C[1]-L[1],C[2]-L[2])/2}}function j(t,e){let n,r=1/0;for(let i=0;i<8;++i){const o=I(t,e,v[i]);o<r&&(r=o,n=v[i])}return n}function I(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function P(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}R._pool=new h.Z(R),b=N||(N={}),(M=b.DepthOrder||(b.DepthOrder={}))[M.FRONT_TO_BACK=1]="FRONT_TO_BACK",M[M.BACK_TO_FRONT=-1]="BACK_TO_FRONT";const U=[(0,c.al)(-1,-1,-1),(0,c.al)(1,-1,-1),(0,c.al)(-1,1,-1),(0,c.al)(1,1,-1),(0,c.al)(-1,-1,1),(0,c.al)(1,-1,1),(0,c.al)(-1,1,1),(0,c.al)(1,1,1)],v=[(0,c.al)(-1,-1,-1),(0,c.al)(-1,-1,1),(0,c.al)(-1,1,-1),(0,c.al)(-1,1,1),(0,c.al)(1,-1,-1),(0,c.al)(1,-1,1),(0,c.al)(1,1,-1),(0,c.al)(1,1,1)],B=Math.sqrt(3),w=[null];const y=(0,a.c)(),z=(0,c.Ue)(),L=(0,c.Ue)(),C=(0,c.Ue)(),k=new d.Z,D=(0,a.c)(),H=(0,a.c)(),G=(0,a.c)(),V=(0,a.c)(),q=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],W=new d.Z,Z=[0,0,0,0,0,0,0,0],J=N;var K=n(62229);function X(t,e,n){const r=(0,a.c)(),i=(0,a.g)(r);return(0,s.r)(i,i,t,.5),(0,s.r)(i,i,e,.5),r[3]=(0,s.q)(i,t),(0,s.g)(i,i,n),r}let Y=class{constructor(){this._idToComponent=new Map,this._components=new J((t=>t.bounds)),this._edges=new J((t=>t.bounds)),this._tmpLineSegment=(0,u.Ue)(),this._tmpP1=(0,c.Ue)(),this._tmpP2=(0,c.Ue)(),this._tmpP3=(0,c.Ue)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,i.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:r}=t;n.push({id:e,uid:r})}return!0}),t.bounds),!n.length)return;const r={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",r,e??{});for(const t of i.components)this._setFetchEdgeLocations(t)}async add(t){const e=new $(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=K.n_.createView(t.locations),r=new Array(n.count),i=(0,c.Ue)(),o=(0,c.Ue)();for(let s=0;s<n.count;s++){n.position0.getVec(s,i),n.position1.getVec(s,o);const c=X(i,o,t.origin),u=new tt(e,s,c);r[s]=u}this._edges.add(r);const{objectIds:s,origin:u}=t;e.info={locations:n,objectIds:s,origin:u}}_addCandidates(t,e,n){const{info:r}=e.component,{origin:i,objectIds:o}=r,c=r.locations,u=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(u,u,i),(0,s.g)(a,a,i);const h=o[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,u,a,n),this._addVertexCandidate(t,h,u,n),this._addVertexCandidate(t,h,a,n)}_addEdgeCandidate(t,e,n,r,i){if(!t.returnEdge)return;const o=(0,a.g)(t.bounds),h=(0,u.zk)(n,r,this._tmpLineSegment),d=(0,u.nF)(h,o,this._tmpP3);(0,a.n)(t.bounds,d)&&i.push({type:"edge",objectId:e,target:(0,c.d9)(d),distance:(0,s.q)(o,d),start:(0,c.d9)(n),end:(0,c.d9)(r)})}_addVertexCandidate(t,e,n,r){if(!t.returnVertex||!(0,a.n)(t.bounds,n))return;const i=(0,a.g)(t.bounds);r.push({type:"vertex",objectId:e,target:(0,c.d9)(n),distance:(0,s.q)(i,n)})}};Y=(0,r._)([(0,o.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Y);const Q=Y;class ${constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++$.uid}}$.uid=0;class tt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);