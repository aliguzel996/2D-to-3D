(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Ld={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function kS(){if(Sv)return $l;Sv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return $l.Fragment=t,$l.jsx=n,$l.jsxs=n,$l}var Mv;function XS(){return Mv||(Mv=1,Ld.exports=kS()),Ld.exports}var q=XS(),Pd={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function jS(){if(Ev)return Ae;Ev=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function _(V,pt,Lt){this.props=V,this.context=pt,this.refs=b,this.updater=Lt||M}_.prototype.isReactComponent={},_.prototype.setState=function(V,pt){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,pt,"setState")},_.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function I(){}I.prototype=_.prototype;function T(V,pt,Lt){this.props=V,this.context=pt,this.refs=b,this.updater=Lt||M}var P=T.prototype=new I;P.constructor=T,E(P,_.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function B(){}var H={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function N(V,pt,Lt){var Z=Lt.ref;return{$$typeof:s,type:V,key:pt,ref:Z!==void 0?Z:null,props:Lt}}function D(V,pt){return N(V.type,pt,V.props)}function K(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function nt(V){var pt={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Lt){return pt[Lt]})}var ut=/\/+/g;function mt(V,pt){return typeof V=="object"&&V!==null&&V.key!=null?nt(""+V.key):pt.toString(36)}function xt(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(B,B):(V.status="pending",V.then(function(pt){V.status==="pending"&&(V.status="fulfilled",V.value=pt)},function(pt){V.status==="pending"&&(V.status="rejected",V.reason=pt)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function k(V,pt,Lt,Z,X){var w=typeof V;(w==="undefined"||w==="boolean")&&(V=null);var C=!1;if(V===null)C=!0;else switch(w){case"bigint":case"string":case"number":C=!0;break;case"object":switch(V.$$typeof){case s:case t:C=!0;break;case x:return C=V._init,k(C(V._payload),pt,Lt,Z,X)}}if(C)return X=X(V),C=Z===""?"."+mt(V,0):Z,G(X)?(Lt="",C!=null&&(Lt=C.replace(ut,"$&/")+"/"),k(X,pt,Lt,"",function(at){return at})):X!=null&&(K(X)&&(X=D(X,Lt+(X.key==null||V&&V.key===X.key?"":(""+X.key).replace(ut,"$&/")+"/")+C)),pt.push(X)),1;C=0;var st=Z===""?".":Z+":";if(G(V))for(var gt=0;gt<V.length;gt++)Z=V[gt],w=st+mt(Z,gt),C+=k(Z,pt,Lt,w,X);else if(gt=y(V),typeof gt=="function")for(V=gt.call(V),gt=0;!(Z=V.next()).done;)Z=Z.value,w=st+mt(Z,gt++),C+=k(Z,pt,Lt,w,X);else if(w==="object"){if(typeof V.then=="function")return k(xt(V),pt,Lt,Z,X);throw pt=String(V),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return C}function Q(V,pt,Lt){if(V==null)return V;var Z=[],X=0;return k(V,Z,"","",function(w){return pt.call(Lt,w,X++)}),Z}function j(V){if(V._status===-1){var pt=V._result;pt=pt(),pt.then(function(Lt){(V._status===0||V._status===-1)&&(V._status=1,V._result=Lt)},function(Lt){(V._status===0||V._status===-1)&&(V._status=2,V._result=Lt)}),V._status===-1&&(V._status=0,V._result=pt)}if(V._status===1)return V._result.default;throw V._result}var Tt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},At={map:Q,forEach:function(V,pt,Lt){Q(V,function(){pt.apply(this,arguments)},Lt)},count:function(V){var pt=0;return Q(V,function(){pt++}),pt},toArray:function(V){return Q(V,function(pt){return pt})||[]},only:function(V){if(!K(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return Ae.Activity=g,Ae.Children=At,Ae.Component=_,Ae.Fragment=n,Ae.Profiler=o,Ae.PureComponent=T,Ae.StrictMode=a,Ae.Suspense=p,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(V){return H.H.useMemoCache(V)}},Ae.cache=function(V){return function(){return V.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(V,pt,Lt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var Z=E({},V.props),X=V.key;if(pt!=null)for(w in pt.key!==void 0&&(X=""+pt.key),pt)!$.call(pt,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&pt.ref===void 0||(Z[w]=pt[w]);var w=arguments.length-2;if(w===1)Z.children=Lt;else if(1<w){for(var C=Array(w),st=0;st<w;st++)C[st]=arguments[st+2];Z.children=C}return N(V.type,X,Z)},Ae.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},Ae.createElement=function(V,pt,Lt){var Z,X={},w=null;if(pt!=null)for(Z in pt.key!==void 0&&(w=""+pt.key),pt)$.call(pt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(X[Z]=pt[Z]);var C=arguments.length-2;if(C===1)X.children=Lt;else if(1<C){for(var st=Array(C),gt=0;gt<C;gt++)st[gt]=arguments[gt+2];X.children=st}if(V&&V.defaultProps)for(Z in C=V.defaultProps,C)X[Z]===void 0&&(X[Z]=C[Z]);return N(V,w,X)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:f,render:V}},Ae.isValidElement=K,Ae.lazy=function(V){return{$$typeof:x,_payload:{_status:-1,_result:V},_init:j}},Ae.memo=function(V,pt){return{$$typeof:d,type:V,compare:pt===void 0?null:pt}},Ae.startTransition=function(V){var pt=H.T,Lt={};H.T=Lt;try{var Z=V(),X=H.S;X!==null&&X(Lt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(B,Tt)}catch(w){Tt(w)}finally{pt!==null&&Lt.types!==null&&(pt.types=Lt.types),H.T=pt}},Ae.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Ae.use=function(V){return H.H.use(V)},Ae.useActionState=function(V,pt,Lt){return H.H.useActionState(V,pt,Lt)},Ae.useCallback=function(V,pt){return H.H.useCallback(V,pt)},Ae.useContext=function(V){return H.H.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V,pt){return H.H.useDeferredValue(V,pt)},Ae.useEffect=function(V,pt){return H.H.useEffect(V,pt)},Ae.useEffectEvent=function(V){return H.H.useEffectEvent(V)},Ae.useId=function(){return H.H.useId()},Ae.useImperativeHandle=function(V,pt,Lt){return H.H.useImperativeHandle(V,pt,Lt)},Ae.useInsertionEffect=function(V,pt){return H.H.useInsertionEffect(V,pt)},Ae.useLayoutEffect=function(V,pt){return H.H.useLayoutEffect(V,pt)},Ae.useMemo=function(V,pt){return H.H.useMemo(V,pt)},Ae.useOptimistic=function(V,pt){return H.H.useOptimistic(V,pt)},Ae.useReducer=function(V,pt,Lt){return H.H.useReducer(V,pt,Lt)},Ae.useRef=function(V){return H.H.useRef(V)},Ae.useState=function(V){return H.H.useState(V)},Ae.useSyncExternalStore=function(V,pt,Lt){return H.H.useSyncExternalStore(V,pt,Lt)},Ae.useTransition=function(){return H.H.useTransition()},Ae.version="19.2.5",Ae}var Tv;function wm(){return Tv||(Tv=1,Pd.exports=jS()),Pd.exports}var Ot=wm(),Od={exports:{}},tc={},zd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function WS(){return Av||(Av=1,(function(s){function t(k,Q){var j=k.length;k.push(Q);t:for(;0<j;){var Tt=j-1>>>1,At=k[Tt];if(0<o(At,Q))k[Tt]=Q,k[j]=At,j=Tt;else break t}}function n(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var Q=k[0],j=k.pop();if(j!==Q){k[0]=j;t:for(var Tt=0,At=k.length,V=At>>>1;Tt<V;){var pt=2*(Tt+1)-1,Lt=k[pt],Z=pt+1,X=k[Z];if(0>o(Lt,j))Z<At&&0>o(X,Lt)?(k[Tt]=X,k[Z]=j,Tt=Z):(k[Tt]=Lt,k[pt]=j,Tt=pt);else if(Z<At&&0>o(X,j))k[Tt]=X,k[Z]=j,Tt=Z;else break t}}return Q}function o(k,Q){var j=k.sortIndex-Q.sortIndex;return j!==0?j:k.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],d=[],x=1,g=null,v=3,y=!1,M=!1,E=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function P(k){for(var Q=n(d);Q!==null;){if(Q.callback===null)a(d);else if(Q.startTime<=k)a(d),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=n(d)}}function G(k){if(E=!1,P(k),!M)if(n(p)!==null)M=!0,B||(B=!0,nt());else{var Q=n(d);Q!==null&&xt(G,Q.startTime-k)}}var B=!1,H=-1,$=5,N=-1;function D(){return b?!0:!(s.unstable_now()-N<$)}function K(){if(b=!1,B){var k=s.unstable_now();N=k;var Q=!0;try{t:{M=!1,E&&(E=!1,I(H),H=-1),y=!0;var j=v;try{e:{for(P(k),g=n(p);g!==null&&!(g.expirationTime>k&&D());){var Tt=g.callback;if(typeof Tt=="function"){g.callback=null,v=g.priorityLevel;var At=Tt(g.expirationTime<=k);if(k=s.unstable_now(),typeof At=="function"){g.callback=At,P(k),Q=!0;break e}g===n(p)&&a(p),P(k)}else a(p);g=n(p)}if(g!==null)Q=!0;else{var V=n(d);V!==null&&xt(G,V.startTime-k),Q=!1}}break t}finally{g=null,v=j,y=!1}Q=void 0}}finally{Q?nt():B=!1}}}var nt;if(typeof T=="function")nt=function(){T(K)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,mt=ut.port2;ut.port1.onmessage=K,nt=function(){mt.postMessage(null)}}else nt=function(){_(K,0)};function xt(k,Q){H=_(function(){k(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(k){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var j=v;v=Q;try{return k()}finally{v=j}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(k,Q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=v;v=k;try{return Q()}finally{v=j}},s.unstable_scheduleCallback=function(k,Q,j){var Tt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Tt+j:Tt):j=Tt,k){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=j+At,k={id:x++,callback:Q,priorityLevel:k,startTime:j,expirationTime:At,sortIndex:-1},j>Tt?(k.sortIndex=j,t(d,k),n(p)===null&&k===n(d)&&(E?(I(H),H=-1):E=!0,xt(G,j-Tt))):(k.sortIndex=At,t(p,k),M||y||(M=!0,B||(B=!0,nt()))),k},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(k){var Q=v;return function(){var j=v;v=Q;try{return k.apply(this,arguments)}finally{v=j}}}})(Bd)),Bd}var wv;function qS(){return wv||(wv=1,zd.exports=WS()),zd.exports}var Id={exports:{}},ri={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function YS(){if(Cv)return ri;Cv=1;var s=wm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:x}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ri.createPortal=function(p,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,x)},ri.flushSync=function(p){var d=u.T,x=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=x,a.d.f()}},ri.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},ri.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},ri.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var x=d.as,g=f(x,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):x==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ri.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},ri.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,g=f(x,d.crossOrigin);a.d.L(p,x,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ri.preloadModule=function(p,d){if(typeof p=="string")if(d){var x=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},ri.requestFormReset=function(p){a.d.r(p)},ri.unstable_batchedUpdates=function(p,d){return p(d)},ri.useFormState=function(p,d,x){return u.H.useFormState(p,d,x)},ri.useFormStatus=function(){return u.H.useHostTransitionStatus()},ri.version="19.2.5",ri}var Rv;function ZS(){if(Rv)return Id.exports;Rv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Id.exports=YS(),Id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function KS(){if(Dv)return tc;Dv=1;var s=qS(),t=wm(),n=ZS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var S=!1,L=h.child;L;){if(L===r){S=!0,r=h,l=m;break}if(L===l){S=!0,l=h,r=m;break}L=L.sibling}if(!S){for(L=m.child;L;){if(L===r){S=!0,r=m,l=h;break}if(L===l){S=!0,l=m,r=h;break}L=L.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function x(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=x(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),T=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case T:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case P:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:mt(e.type)||"Memo";case $:i=e._payload,e=e._init;try{return mt(e(i))}catch{}}return null}var xt=Array.isArray,k=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Tt=[],At=-1;function V(e){return{current:e}}function pt(e){0>At||(e.current=Tt[At],Tt[At]=null,At--)}function Lt(e,i){At++,Tt[At]=e.current,e.current=i}var Z=V(null),X=V(null),w=V(null),C=V(null);function st(e,i){switch(Lt(w,i),Lt(X,e),Lt(Z,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?jx(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=jx(i),e=Wx(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(Z),Lt(Z,e)}function gt(){pt(Z),pt(X),pt(w)}function at(e){e.memoizedState!==null&&Lt(C,e);var i=Z.current,r=Wx(i,e.type);i!==r&&(Lt(X,e),Lt(Z,r))}function Pt(e){X.current===e&&(pt(Z),pt(X)),C.current===e&&(pt(C),Zl._currentValue=j)}var Vt,Dt;function et(e){if(Vt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Vt=i&&i[1]||"",Dt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+e+Dt}var R=!1;function ft(e,i){if(!e||R)return"";R=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ht=function(){throw Error()};if(Object.defineProperty(Ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ht,[])}catch(Ct){var bt=Ct}Reflect.construct(e,[],Ht)}else{try{Ht.call()}catch(Ct){bt=Ct}e.call(Ht.prototype)}}else{try{throw Error()}catch(Ct){bt=Ct}(Ht=e())&&typeof Ht.catch=="function"&&Ht.catch(function(){})}}catch(Ct){if(Ct&&bt&&typeof Ct.stack=="string")return[Ct.stack,bt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],L=m[1];if(S&&L){var J=S.split(`
`),yt=L.split(`
`);for(h=l=0;l<J.length&&!J[l].includes("DetermineComponentFrameRoot");)l++;for(;h<yt.length&&!yt[h].includes("DetermineComponentFrameRoot");)h++;if(l===J.length||h===yt.length)for(l=J.length-1,h=yt.length-1;1<=l&&0<=h&&J[l]!==yt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(J[l]!==yt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||J[l]!==yt[h]){var Nt=`
`+J[l].replace(" at new "," at ");return e.displayName&&Nt.includes("<anonymous>")&&(Nt=Nt.replace("<anonymous>",e.displayName)),Nt}while(1<=l&&0<=h);break}}}finally{R=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?et(r):""}function ct(e,i){switch(e.tag){case 26:case 27:case 5:return et(e.type);case 16:return et("Lazy");case 13:return e.child!==i&&i!==null?et("Suspense Fallback"):et("Suspense");case 19:return et("SuspenseList");case 0:case 15:return ft(e.type,!1);case 11:return ft(e.type.render,!1);case 1:return ft(e.type,!0);case 31:return et("Activity");default:return""}}function W(e){try{var i="",r=null;do i+=ct(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var z=Object.prototype.hasOwnProperty,wt=s.unstable_scheduleCallback,zt=s.unstable_cancelCallback,Qt=s.unstable_shouldYield,F=s.unstable_requestPaint,A=s.unstable_now,ot=s.unstable_getCurrentPriorityLevel,Rt=s.unstable_ImmediatePriority,Ut=s.unstable_UserBlockingPriority,Et=s.unstable_NormalPriority,ae=s.unstable_LowPriority,Zt=s.unstable_IdlePriority,ie=s.log,re=s.unstable_setDisableYieldValue,It=null,Xt=null;function oe(e){if(typeof ie=="function"&&re(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(It,e)}catch{}}var le=Math.clz32?Math.clz32:tt,Kt=Math.log,_e=Math.LN2;function tt(e){return e>>>=0,e===0?32:31-(Kt(e)/_e|0)|0}var Jt=256,qt=262144,Yt=4194304;function kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ft(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var L=l&134217727;return L!==0?(l=L&~m,l!==0?h=kt(l):(S&=L,S!==0?h=kt(S):r||(r=L&~e,r!==0&&(h=kt(r))))):(L=l&~m,L!==0?h=kt(L):S!==0?h=kt(S):r||(r=l&~e,r!==0&&(h=kt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function ee(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function de(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Yt;return Yt<<=1,(Yt&62914560)===0&&(Yt=4194304),e}function Ve(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function xn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hi(e,i,r,l,h,m){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var L=e.entanglements,J=e.expirationTimes,yt=e.hiddenUpdates;for(r=S&~r;0<r;){var Nt=31-le(r),Ht=1<<Nt;L[Nt]=0,J[Nt]=-1;var bt=yt[Nt];if(bt!==null)for(yt[Nt]=null,Nt=0;Nt<bt.length;Nt++){var Ct=bt[Nt];Ct!==null&&(Ct.lane&=-536870913)}r&=~Ht}l!==0&&ar(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~i))}function ar(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-le(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function sr(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-le(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Ci(e,i){var r=i&-i;return r=(r&42)!==0?1:Ri(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ri(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function un(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rr(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:mv(e.type))}function za(e,i){var r=Q.p;try{return Q.p=e,i()}finally{Q.p=r}}var di=Math.random().toString(36).slice(2),tn="__reactFiber$"+di,Rn="__reactProps$"+di,Di="__reactContainer$"+di,ms="__reactEvents$"+di,Wr="__reactListeners$"+di,cl="__reactHandles$"+di,Ba="__reactResources$"+di,qi="__reactMarker$"+di;function or(e){delete e[tn],delete e[Rn],delete e[ms],delete e[Wr],delete e[cl]}function ye(e){var i=e[tn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Di]||r[tn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=$x(e);e!==null;){if(r=e[tn])return r;e=$x(e)}return i}e=r,r=e.parentNode}return null}function O(e){if(e=e[tn]||e[Di]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function rt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function St(e){var i=e[Ba];return i||(i=e[Ba]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(e){e[qi]=!0}var ht=new Set,Gt={};function te(e,i){se(e,i),se(e+"Capture",i)}function se(e,i){for(Gt[e]=i,e=0;e<i.length;e++)ht.add(i[e])}var jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),he={},ge={};function pe(e){return z.call(ge,e)?!0:z.call(he,e)?!1:jt.test(e)?ge[e]=!0:(he[e]=!0,!1)}function Te(e,i,r){if(pe(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ie(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Oe(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ce(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(S){r=""+S,m.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ke(e){if(!e._valueTracker){var i=je(e)?"checked":"value";e._valueTracker=ce(e,i,""+e[i])}}function De(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=je(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ua=/[\n"\\]/g;function en(e){return e.replace(ua,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Yi(e,i,r,l,h,m,S,L){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ne(i)):e.value!==""+Ne(i)&&(e.value=""+Ne(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?On(e,S,Ne(i)):r!=null?On(e,S,Ne(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+Ne(L):e.removeAttribute("name")}function nn(e,i,r,l,h,m,S,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ke(e);return}r=r!=null?""+Ne(r):"",i=i!=null?""+Ne(i):r,L||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=L?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ke(e)}function On(e,i,r){i==="number"&&fn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Dn(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Ne(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function zn(e,i,r){if(i!=null&&(i=""+Ne(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Ne(r):""}function kn(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(xt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Ne(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ke(e)}function Ui(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lr(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||vi.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Pc(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&lr(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&lr(e,m,i[m])}function ul(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(e){return cr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _i(){}var fl=null;function qr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,fa=null;function Oc(e){var i=O(e);if(i&&(e=i.stateNode)){var r=e[Rn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Yi(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+en(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Rn]||null;if(!h)throw Error(a(90));Yi(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&De(l)}break t;case"textarea":zn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Dn(e,!!r.multiple,i,!1)}}}var hl=!1;function zc(e,i,r){if(hl)return e(i,r);hl=!0;try{var l=e(i);return l}finally{if(hl=!1,(Ia!==null||fa!==null)&&(yu(),Ia&&(i=Ia,e=fa,fa=Ia=null,Oc(i),e)))for(i=0;i<e.length;i++)Oc(e[i])}}function ur(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Rn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=!1;if(Zi)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){dl=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{dl=!1}var Sa=null,pl=null,Yr=null;function Bc(){if(Yr)return Yr;var e,i=pl,r=i.length,l,h="value"in Sa?Sa.value:Sa.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===h[m-l];l++);return Yr=h.slice(e,1<l?1-l:void 0)}function Zr(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function hn(){return!1}function yn(e){function i(r,l,h,m,S){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(r=e[L],this[L]=r?r(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?fr:hn,this.isPropagationStopped=hn,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),i}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=yn(Fa),hr=g({},Fa,{view:0,detail:0}),U=yn(hr),dt,Wt,$t,Me=g({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(dt=e.screenX-$t.screenX,Wt=e.screenY-$t.screenY):Wt=dt=0,$t=e),dt)},movementY:function(e){return"movementY"in e?e.movementY:Wt}}),Fe=yn(Me),En=g({},Me,{dataTransfer:0}),Ge=yn(En),Ue=g({},hr,{relatedTarget:0}),gn=yn(Ue),dn=g({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Bn=yn(dn),Un=g({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vs=yn(Un),_s=g({},Fa,{data:0}),Ki=yn(_s),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ha={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ni={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Li(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ni[e])?!!i[e]:!1}function Va(){return Li}var If=g({},hr,{key:function(e){if(e.key){var i=ha[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ha[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ml=yn(If),Ic=g({},Me,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=yn(Ic),ib=g({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),ab=yn(ib),sb=g({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rb=yn(sb),ob=g({},Me,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lb=yn(ob),cb=g({},Fa,{newState:0,oldState:0}),ub=yn(cb),fb=[9,13,27,32],Ff=Zi&&"CompositionEvent"in window,gl=null;Zi&&"documentMode"in document&&(gl=document.documentMode);var hb=Zi&&"TextEvent"in window&&!gl,Qm=Zi&&(!Ff||gl&&8<gl&&11>=gl),Jm=" ",$m=!1;function t0(e,i){switch(e){case"keyup":return fb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function db(e,i){switch(e){case"compositionend":return e0(i);case"keypress":return i.which!==32?null:($m=!0,Jm);case"textInput":return e=i.data,e===Jm&&$m?null:e;default:return null}}function pb(e,i){if(Qr)return e==="compositionend"||!Ff&&t0(e,i)?(e=Bc(),Yr=pl=Sa=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qm&&i.locale!=="ko"?null:i.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!mb[e.type]:i==="textarea"}function i0(e,i,r,l){Ia?fa?fa.push(l):fa=[l]:Ia=l,i=wu(i,"onChange"),0<i.length&&(r=new Kr("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var xl=null,vl=null;function gb(e){Fx(e,0)}function Fc(e){var i=rt(e);if(De(i))return e}function a0(e,i){if(e==="change")return i}var s0=!1;if(Zi){var Hf;if(Zi){var Vf="oninput"in document;if(!Vf){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),Vf=typeof r0.oninput=="function"}Hf=Vf}else Hf=!1;s0=Hf&&(!document.documentMode||9<document.documentMode)}function o0(){xl&&(xl.detachEvent("onpropertychange",l0),vl=xl=null)}function l0(e){if(e.propertyName==="value"&&Fc(vl)){var i=[];i0(i,vl,e,qr(e)),zc(gb,i)}}function xb(e,i,r){e==="focusin"?(o0(),xl=i,vl=r,xl.attachEvent("onpropertychange",l0)):e==="focusout"&&o0()}function vb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fc(vl)}function _b(e,i){if(e==="click")return Fc(i)}function yb(e,i){if(e==="input"||e==="change")return Fc(i)}function bb(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Pi=typeof Object.is=="function"?Object.is:bb;function _l(e,i){if(Pi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!z.call(i,h)||!Pi(e[h],i[h]))return!1}return!0}function c0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u0(e,i){var r=c0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=c0(r)}}function f0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?f0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function h0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=fn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=fn(e.document)}return i}function Gf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Sb=Zi&&"documentMode"in document&&11>=document.documentMode,Jr=null,kf=null,yl=null,Xf=!1;function d0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Jr==null||Jr!==fn(l)||(l=Jr,"selectionStart"in l&&Gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yl&&_l(yl,l)||(yl=l,l=wu(kf,"onSelect"),0<l.length&&(i=new Kr("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Jr)))}function dr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var $r={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},jf={},p0={};Zi&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function pr(e){if(jf[e])return jf[e];if(!$r[e])return e;var i=$r[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in p0)return jf[e]=i[r];return e}var m0=pr("animationend"),g0=pr("animationiteration"),x0=pr("animationstart"),Mb=pr("transitionrun"),Eb=pr("transitionstart"),Tb=pr("transitioncancel"),v0=pr("transitionend"),_0=new Map,Wf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wf.push("scrollEnd");function da(e,i){_0.set(e,i),te(i,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qi=[],to=0,qf=0;function Vc(){for(var e=to,i=qf=to=0;i<e;){var r=Qi[i];Qi[i++]=null;var l=Qi[i];Qi[i++]=null;var h=Qi[i];Qi[i++]=null;var m=Qi[i];if(Qi[i++]=null,l!==null&&h!==null){var S=l.pending;S===null?h.next=h:(h.next=S.next,S.next=h),l.pending=h}m!==0&&y0(r,h,m)}}function Gc(e,i,r,l){Qi[to++]=e,Qi[to++]=i,Qi[to++]=r,Qi[to++]=l,qf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yf(e,i,r,l){return Gc(e,i,r,l),kc(e)}function mr(e,i){return Gc(e,null,null,i),kc(e)}function y0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-le(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function kc(e){if(50<Gl)throw Gl=0,id=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var eo={};function Ab(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(e,i,r,l){return new Ab(e,i,r,l)}function Zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,i){var r=e.alternate;return r===null?(r=Oi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function b0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Xc(e,i,r,l,h,m){var S=0;if(l=e,typeof e=="function")Zf(e)&&(S=1);else if(typeof e=="string")S=US(e,r,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Oi(31,r,i,h),e.elementType=N,e.lanes=m,e;case E:return gr(r.children,h,m,i);case b:S=8,h|=24;break;case _:return e=Oi(12,r,i,h|2),e.elementType=_,e.lanes=m,e;case G:return e=Oi(13,r,i,h),e.elementType=G,e.lanes=m,e;case B:return e=Oi(19,r,i,h),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:S=10;break t;case I:S=9;break t;case P:S=11;break t;case H:S=14;break t;case $:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Oi(S,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function gr(e,i,r,l){return e=Oi(7,e,l,i),e.lanes=r,e}function Kf(e,i,r){return e=Oi(6,e,null,i),e.lanes=r,e}function S0(e){var i=Oi(18,null,null,0);return i.stateNode=e,i}function Qf(e,i,r){return i=Oi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var M0=new WeakMap;function Ji(e,i){if(typeof e=="object"&&e!==null){var r=M0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:W(i)},M0.set(e,i),i)}return{value:e,source:i,stack:W(i)}}var no=[],io=0,jc=null,bl=0,$i=[],ta=0,ys=null,Ma=1,Ea="";function ka(e,i){no[io++]=bl,no[io++]=jc,jc=e,bl=i}function E0(e,i,r){$i[ta++]=Ma,$i[ta++]=Ea,$i[ta++]=ys,ys=e;var l=Ma;e=Ea;var h=32-le(l)-1;l&=~(1<<h),r+=1;var m=32-le(i)+h;if(30<m){var S=h-h%5;m=(l&(1<<S)-1).toString(32),l>>=S,h-=S,Ma=1<<32-le(i)+h|r<<h|l,Ea=m+e}else Ma=1<<m|r<<h|l,Ea=e}function Jf(e){e.return!==null&&(ka(e,1),E0(e,1,0))}function $f(e){for(;e===jc;)jc=no[--io],no[io]=null,bl=no[--io],no[io]=null;for(;e===ys;)ys=$i[--ta],$i[ta]=null,Ea=$i[--ta],$i[ta]=null,Ma=$i[--ta],$i[ta]=null}function T0(e,i){$i[ta++]=Ma,$i[ta++]=Ea,$i[ta++]=ys,Ma=i.id,Ea=i.overflow,ys=e}var Qn=null,vn=null,He=!1,bs=null,ea=!1,th=Error(a(519));function Ss(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(Ji(i,e)),th}function A0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[tn]=e,i[Rn]=l,r){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(r=0;r<Xl.length;r++)Pe(Xl[r],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Pe("invalid",i),nn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Pe("invalid",i);break;case"textarea":Pe("invalid",i),kn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||kx(i.textContent,r)?(l.popover!=null&&(Pe("beforetoggle",i),Pe("toggle",i)),l.onScroll!=null&&Pe("scroll",i),l.onScrollEnd!=null&&Pe("scrollend",i),l.onClick!=null&&(i.onclick=_i),i=!0):i=!1,i||Ss(e,!0)}function w0(e){for(Qn=e.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:Qn=Qn.return}}function ao(e){if(e!==Qn)return!1;if(!He)return w0(e),He=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||vd(e.type,e.memoizedProps)),r=!r),r&&vn&&Ss(e),w0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));vn=Jx(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));vn=Jx(e)}else i===27?(i=vn,zs(e.type)?(e=Md,Md=null,vn=e):vn=i):vn=Qn?ia(e.stateNode.nextSibling):null;return!0}function xr(){vn=Qn=null,He=!1}function eh(){var e=bs;return e!==null&&(Mi===null?Mi=e:Mi.push.apply(Mi,e),bs=null),e}function Sl(e){bs===null?bs=[e]:bs.push(e)}var nh=V(null),vr=null,Xa=null;function Ms(e,i,r){Lt(nh,i._currentValue),i._currentValue=r}function ja(e){e._currentValue=nh.current,pt(nh)}function ih(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function ah(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var S=h.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=h;for(var J=0;J<i.length;J++)if(L.context===i[J]){m.lanes|=r,L=m.alternate,L!==null&&(L.lanes|=r),ih(m.return,r,e),l||(S=null);break t}m=L.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(a(341));S.lanes|=r,m=S.alternate,m!==null&&(m.lanes|=r),ih(S,r,e),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===e){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function so(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var L=h.type;Pi(h.pendingProps.value,S.value)||(e!==null?e.push(L):e=[L])}}else if(h===C.current){if(S=h.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}h=h.return}e!==null&&ah(i,e,r,l),i.flags|=262144}function Wc(e){for(e=e.firstContext;e!==null;){if(!Pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _r(e){vr=e,Xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Jn(e){return C0(vr,e)}function qc(e,i){return vr===null&&_r(e),C0(e,i)}function C0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Xa===null){if(e===null)throw Error(a(308));Xa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Xa=Xa.next=i;return r}var wb=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Cb=s.unstable_scheduleCallback,Rb=s.unstable_NormalPriority,In={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new wb,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Cb(Rb,function(){e.controller.abort()})}var El=null,rh=0,ro=0,oo=null;function Db(e,i){if(El===null){var r=El=[];rh=0,ro=cd(),oo={status:"pending",value:void 0,then:function(l){r.push(l)}}}return rh++,i.then(R0,R0),i}function R0(){if(--rh===0&&El!==null){oo!==null&&(oo.status="fulfilled");var e=El;El=null,ro=0,oo=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Ub(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var D0=k.S;k.S=function(e,i){dx=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Db(e,i),D0!==null&&D0(e,i)};var yr=V(null);function oh(){var e=yr.current;return e!==null?e:pn.pooledCache}function Yc(e,i){i===null?Lt(yr,yr.current):Lt(yr,i.pool)}function U0(){var e=oh();return e===null?null:{parent:In._currentValue,pool:e}}var lo=Error(a(460)),lh=Error(a(474)),Zc=Error(a(542)),Kc={then:function(){}};function N0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function L0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(_i,_i),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,O0(e),e;default:if(typeof i.status=="string")i.then(_i,_i);else{if(e=pn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,O0(e),e}throw Sr=i,lo}}function br(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Sr=r,lo):r}}var Sr=null;function P0(){if(Sr===null)throw Error(a(459));var e=Sr;return Sr=null,e}function O0(e){if(e===lo||e===Zc)throw Error(a(483))}var co=null,Tl=0;function Qc(e){var i=Tl;return Tl+=1,co===null&&(co=[]),L0(co,e,i)}function Al(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Jc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function z0(e){function i(lt,it){if(e){var _t=lt.deletions;_t===null?(lt.deletions=[it],lt.flags|=16):_t.push(it)}}function r(lt,it){if(!e)return null;for(;it!==null;)i(lt,it),it=it.sibling;return null}function l(lt){for(var it=new Map;lt!==null;)lt.key!==null?it.set(lt.key,lt):it.set(lt.index,lt),lt=lt.sibling;return it}function h(lt,it){return lt=Ga(lt,it),lt.index=0,lt.sibling=null,lt}function m(lt,it,_t){return lt.index=_t,e?(_t=lt.alternate,_t!==null?(_t=_t.index,_t<it?(lt.flags|=67108866,it):_t):(lt.flags|=67108866,it)):(lt.flags|=1048576,it)}function S(lt){return e&&lt.alternate===null&&(lt.flags|=67108866),lt}function L(lt,it,_t,Bt){return it===null||it.tag!==6?(it=Kf(_t,lt.mode,Bt),it.return=lt,it):(it=h(it,_t),it.return=lt,it)}function J(lt,it,_t,Bt){var me=_t.type;return me===E?Nt(lt,it,_t.props.children,Bt,_t.key):it!==null&&(it.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===$&&br(me)===it.type)?(it=h(it,_t.props),Al(it,_t),it.return=lt,it):(it=Xc(_t.type,_t.key,_t.props,null,lt.mode,Bt),Al(it,_t),it.return=lt,it)}function yt(lt,it,_t,Bt){return it===null||it.tag!==4||it.stateNode.containerInfo!==_t.containerInfo||it.stateNode.implementation!==_t.implementation?(it=Qf(_t,lt.mode,Bt),it.return=lt,it):(it=h(it,_t.children||[]),it.return=lt,it)}function Nt(lt,it,_t,Bt,me){return it===null||it.tag!==7?(it=gr(_t,lt.mode,Bt,me),it.return=lt,it):(it=h(it,_t),it.return=lt,it)}function Ht(lt,it,_t){if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return it=Kf(""+it,lt.mode,_t),it.return=lt,it;if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return _t=Xc(it.type,it.key,it.props,null,lt.mode,_t),Al(_t,it),_t.return=lt,_t;case M:return it=Qf(it,lt.mode,_t),it.return=lt,it;case $:return it=br(it),Ht(lt,it,_t)}if(xt(it)||nt(it))return it=gr(it,lt.mode,_t,null),it.return=lt,it;if(typeof it.then=="function")return Ht(lt,Qc(it),_t);if(it.$$typeof===T)return Ht(lt,qc(lt,it),_t);Jc(lt,it)}return null}function bt(lt,it,_t,Bt){var me=it!==null?it.key:null;if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return me!==null?null:L(lt,it,""+_t,Bt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return _t.key===me?J(lt,it,_t,Bt):null;case M:return _t.key===me?yt(lt,it,_t,Bt):null;case $:return _t=br(_t),bt(lt,it,_t,Bt)}if(xt(_t)||nt(_t))return me!==null?null:Nt(lt,it,_t,Bt,null);if(typeof _t.then=="function")return bt(lt,it,Qc(_t),Bt);if(_t.$$typeof===T)return bt(lt,it,qc(lt,_t),Bt);Jc(lt,_t)}return null}function Ct(lt,it,_t,Bt,me){if(typeof Bt=="string"&&Bt!==""||typeof Bt=="number"||typeof Bt=="bigint")return lt=lt.get(_t)||null,L(it,lt,""+Bt,me);if(typeof Bt=="object"&&Bt!==null){switch(Bt.$$typeof){case y:return lt=lt.get(Bt.key===null?_t:Bt.key)||null,J(it,lt,Bt,me);case M:return lt=lt.get(Bt.key===null?_t:Bt.key)||null,yt(it,lt,Bt,me);case $:return Bt=br(Bt),Ct(lt,it,_t,Bt,me)}if(xt(Bt)||nt(Bt))return lt=lt.get(_t)||null,Nt(it,lt,Bt,me,null);if(typeof Bt.then=="function")return Ct(lt,it,_t,Qc(Bt),me);if(Bt.$$typeof===T)return Ct(lt,it,_t,qc(it,Bt),me);Jc(it,Bt)}return null}function ue(lt,it,_t,Bt){for(var me=null,We=null,fe=it,Ce=it=0,Be=null;fe!==null&&Ce<_t.length;Ce++){fe.index>Ce?(Be=fe,fe=null):Be=fe.sibling;var qe=bt(lt,fe,_t[Ce],Bt);if(qe===null){fe===null&&(fe=Be);break}e&&fe&&qe.alternate===null&&i(lt,fe),it=m(qe,it,Ce),We===null?me=qe:We.sibling=qe,We=qe,fe=Be}if(Ce===_t.length)return r(lt,fe),He&&ka(lt,Ce),me;if(fe===null){for(;Ce<_t.length;Ce++)fe=Ht(lt,_t[Ce],Bt),fe!==null&&(it=m(fe,it,Ce),We===null?me=fe:We.sibling=fe,We=fe);return He&&ka(lt,Ce),me}for(fe=l(fe);Ce<_t.length;Ce++)Be=Ct(fe,lt,Ce,_t[Ce],Bt),Be!==null&&(e&&Be.alternate!==null&&fe.delete(Be.key===null?Ce:Be.key),it=m(Be,it,Ce),We===null?me=Be:We.sibling=Be,We=Be);return e&&fe.forEach(function(Vs){return i(lt,Vs)}),He&&ka(lt,Ce),me}function ve(lt,it,_t,Bt){if(_t==null)throw Error(a(151));for(var me=null,We=null,fe=it,Ce=it=0,Be=null,qe=_t.next();fe!==null&&!qe.done;Ce++,qe=_t.next()){fe.index>Ce?(Be=fe,fe=null):Be=fe.sibling;var Vs=bt(lt,fe,qe.value,Bt);if(Vs===null){fe===null&&(fe=Be);break}e&&fe&&Vs.alternate===null&&i(lt,fe),it=m(Vs,it,Ce),We===null?me=Vs:We.sibling=Vs,We=Vs,fe=Be}if(qe.done)return r(lt,fe),He&&ka(lt,Ce),me;if(fe===null){for(;!qe.done;Ce++,qe=_t.next())qe=Ht(lt,qe.value,Bt),qe!==null&&(it=m(qe,it,Ce),We===null?me=qe:We.sibling=qe,We=qe);return He&&ka(lt,Ce),me}for(fe=l(fe);!qe.done;Ce++,qe=_t.next())qe=Ct(fe,lt,Ce,qe.value,Bt),qe!==null&&(e&&qe.alternate!==null&&fe.delete(qe.key===null?Ce:qe.key),it=m(qe,it,Ce),We===null?me=qe:We.sibling=qe,We=qe);return e&&fe.forEach(function(GS){return i(lt,GS)}),He&&ka(lt,Ce),me}function rn(lt,it,_t,Bt){if(typeof _t=="object"&&_t!==null&&_t.type===E&&_t.key===null&&(_t=_t.props.children),typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:t:{for(var me=_t.key;it!==null;){if(it.key===me){if(me=_t.type,me===E){if(it.tag===7){r(lt,it.sibling),Bt=h(it,_t.props.children),Bt.return=lt,lt=Bt;break t}}else if(it.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===$&&br(me)===it.type){r(lt,it.sibling),Bt=h(it,_t.props),Al(Bt,_t),Bt.return=lt,lt=Bt;break t}r(lt,it);break}else i(lt,it);it=it.sibling}_t.type===E?(Bt=gr(_t.props.children,lt.mode,Bt,_t.key),Bt.return=lt,lt=Bt):(Bt=Xc(_t.type,_t.key,_t.props,null,lt.mode,Bt),Al(Bt,_t),Bt.return=lt,lt=Bt)}return S(lt);case M:t:{for(me=_t.key;it!==null;){if(it.key===me)if(it.tag===4&&it.stateNode.containerInfo===_t.containerInfo&&it.stateNode.implementation===_t.implementation){r(lt,it.sibling),Bt=h(it,_t.children||[]),Bt.return=lt,lt=Bt;break t}else{r(lt,it);break}else i(lt,it);it=it.sibling}Bt=Qf(_t,lt.mode,Bt),Bt.return=lt,lt=Bt}return S(lt);case $:return _t=br(_t),rn(lt,it,_t,Bt)}if(xt(_t))return ue(lt,it,_t,Bt);if(nt(_t)){if(me=nt(_t),typeof me!="function")throw Error(a(150));return _t=me.call(_t),ve(lt,it,_t,Bt)}if(typeof _t.then=="function")return rn(lt,it,Qc(_t),Bt);if(_t.$$typeof===T)return rn(lt,it,qc(lt,_t),Bt);Jc(lt,_t)}return typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint"?(_t=""+_t,it!==null&&it.tag===6?(r(lt,it.sibling),Bt=h(it,_t),Bt.return=lt,lt=Bt):(r(lt,it),Bt=Kf(_t,lt.mode,Bt),Bt.return=lt,lt=Bt),S(lt)):r(lt,it)}return function(lt,it,_t,Bt){try{Tl=0;var me=rn(lt,it,_t,Bt);return co=null,me}catch(fe){if(fe===lo||fe===Zc)throw fe;var We=Oi(29,fe,null,lt.mode);return We.lanes=Bt,We.return=lt,We}finally{}}}var Mr=z0(!0),B0=z0(!1),Es=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ts(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function As(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=kc(e),y0(e,null,r),i}return Gc(e,l,i,r),kc(e)}function wl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,sr(e,r)}}function fh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=S:m=m.next=S,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var hh=!1;function Cl(){if(hh){var e=oo;if(e!==null)throw e}}function Rl(e,i,r,l){hh=!1;var h=e.updateQueue;Es=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var J=L,yt=J.next;J.next=null,S===null?m=yt:S.next=yt,S=J;var Nt=e.alternate;Nt!==null&&(Nt=Nt.updateQueue,L=Nt.lastBaseUpdate,L!==S&&(L===null?Nt.firstBaseUpdate=yt:L.next=yt,Nt.lastBaseUpdate=J))}if(m!==null){var Ht=h.baseState;S=0,Nt=yt=J=null,L=m;do{var bt=L.lane&-536870913,Ct=bt!==L.lane;if(Ct?(ze&bt)===bt:(l&bt)===bt){bt!==0&&bt===ro&&(hh=!0),Nt!==null&&(Nt=Nt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var ue=e,ve=L;bt=i;var rn=r;switch(ve.tag){case 1:if(ue=ve.payload,typeof ue=="function"){Ht=ue.call(rn,Ht,bt);break t}Ht=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ve.payload,bt=typeof ue=="function"?ue.call(rn,Ht,bt):ue,bt==null)break t;Ht=g({},Ht,bt);break t;case 2:Es=!0}}bt=L.callback,bt!==null&&(e.flags|=64,Ct&&(e.flags|=8192),Ct=h.callbacks,Ct===null?h.callbacks=[bt]:Ct.push(bt))}else Ct={lane:bt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Nt===null?(yt=Nt=Ct,J=Ht):Nt=Nt.next=Ct,S|=bt;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;Ct=L,L=Ct.next,Ct.next=null,h.lastBaseUpdate=Ct,h.shared.pending=null}}while(!0);Nt===null&&(J=Ht),h.baseState=J,h.firstBaseUpdate=yt,h.lastBaseUpdate=Nt,m===null&&(h.shared.lanes=0),Us|=S,e.lanes=S,e.memoizedState=Ht}}function I0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function F0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)I0(r[e],i)}var uo=V(null),$c=V(0);function H0(e,i){e=ts,Lt($c,e),Lt(uo,i),ts=e|i.baseLanes}function dh(){Lt($c,ts),Lt(uo,uo.current)}function ph(){ts=$c.current,pt(uo),pt($c)}var zi=V(null),na=null;function ws(e){var i=e.alternate;Lt(Nn,Nn.current&1),Lt(zi,e),na===null&&(i===null||uo.current!==null||i.memoizedState!==null)&&(na=e)}function mh(e){Lt(Nn,Nn.current),Lt(zi,e),na===null&&(na=e)}function V0(e){e.tag===22?(Lt(Nn,Nn.current),Lt(zi,e),na===null&&(na=e)):Cs()}function Cs(){Lt(Nn,Nn.current),Lt(zi,zi.current)}function Bi(e){pt(zi),na===e&&(na=null),pt(Nn)}var Nn=V(0);function tu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||bd(r)||Sd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wa=0,we=null,an=null,Fn=null,eu=!1,fo=!1,Er=!1,nu=0,Dl=0,ho=null,Nb=0;function Tn(){throw Error(a(321))}function gh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Pi(e[r],i[r]))return!1;return!0}function xh(e,i,r,l,h,m){return Wa=m,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,k.H=e===null||e.memoizedState===null?Eg:Nh,Er=!1,m=r(l,h),Er=!1,fo&&(m=k0(i,r,l,h)),G0(e),m}function G0(e){k.H=Ll;var i=an!==null&&an.next!==null;if(Wa=0,Fn=an=we=null,eu=!1,Dl=0,ho=null,i)throw Error(a(300));e===null||Hn||(e=e.dependencies,e!==null&&Wc(e)&&(Hn=!0))}function k0(e,i,r,l){we=e;var h=0;do{if(fo&&(ho=null),Dl=0,fo=!1,25<=h)throw Error(a(301));if(h+=1,Fn=an=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}k.H=Tg,m=i(r,l)}while(fo);return m}function Lb(){var e=k.H,i=e.useState()[0];return i=typeof i.then=="function"?Ul(i):i,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(we.flags|=1024),i}function vh(){var e=nu!==0;return nu=0,e}function _h(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function yh(e){if(eu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}eu=!1}Wa=0,Fn=an=we=null,fo=!1,Dl=nu=0,ho=null}function pi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?we.memoizedState=Fn=e:Fn=Fn.next=e,Fn}function Ln(){if(an===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var i=Fn===null?we.memoizedState:Fn.next;if(i!==null)Fn=i,an=e;else{if(e===null)throw we.alternate===null?Error(a(467)):Error(a(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Fn===null?we.memoizedState=Fn=e:Fn=Fn.next=e}return Fn}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var i=Dl;return Dl+=1,ho===null&&(ho=[]),e=L0(ho,e,i),i=we,(Fn===null?i.memoizedState:Fn.next)===null&&(i=i.alternate,k.H=i===null||i.memoizedState===null?Eg:Nh),e}function au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===T)return Jn(e)}throw Error(a(438,String(e)))}function bh(e){var i=null,r=we.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=iu(),we.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=D;return i.index++,r}function qa(e,i){return typeof i=="function"?i(e):i}function su(e){var i=Ln();return Sh(i,an,e)}function Sh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var L=S=null,J=null,yt=i,Nt=!1;do{var Ht=yt.lane&-536870913;if(Ht!==yt.lane?(ze&Ht)===Ht:(Wa&Ht)===Ht){var bt=yt.revertLane;if(bt===0)J!==null&&(J=J.next={lane:0,revertLane:0,gesture:null,action:yt.action,hasEagerState:yt.hasEagerState,eagerState:yt.eagerState,next:null}),Ht===ro&&(Nt=!0);else if((Wa&bt)===bt){yt=yt.next,bt===ro&&(Nt=!0);continue}else Ht={lane:0,revertLane:yt.revertLane,gesture:null,action:yt.action,hasEagerState:yt.hasEagerState,eagerState:yt.eagerState,next:null},J===null?(L=J=Ht,S=m):J=J.next=Ht,we.lanes|=bt,Us|=bt;Ht=yt.action,Er&&r(m,Ht),m=yt.hasEagerState?yt.eagerState:r(m,Ht)}else bt={lane:Ht,revertLane:yt.revertLane,gesture:yt.gesture,action:yt.action,hasEagerState:yt.hasEagerState,eagerState:yt.eagerState,next:null},J===null?(L=J=bt,S=m):J=J.next=bt,we.lanes|=Ht,Us|=Ht;yt=yt.next}while(yt!==null&&yt!==i);if(J===null?S=m:J.next=L,!Pi(m,e.memoizedState)&&(Hn=!0,Nt&&(r=oo,r!==null)))throw r;e.memoizedState=m,e.baseState=S,e.baseQueue=J,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mh(e){var i=Ln(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var S=h=h.next;do m=e(m,S.action),S=S.next;while(S!==h);Pi(m,i.memoizedState)||(Hn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function X0(e,i,r){var l=we,h=Ln(),m=He;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!Pi((an||h).memoizedState,r);if(S&&(h.memoizedState=r,Hn=!0),h=h.queue,Ah(q0.bind(null,l,h,e),[e]),h.getSnapshot!==i||S||Fn!==null&&Fn.memoizedState.tag&1){if(l.flags|=2048,po(9,{destroy:void 0},W0.bind(null,l,h,r,i),null),pn===null)throw Error(a(349));m||(Wa&127)!==0||j0(l,i,r)}return r}function j0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=we.updateQueue,i===null?(i=iu(),we.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function W0(e,i,r,l){i.value=r,i.getSnapshot=l,Y0(i)&&Z0(e)}function q0(e,i,r){return r(function(){Y0(i)&&Z0(e)})}function Y0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Pi(e,r)}catch{return!0}}function Z0(e){var i=mr(e,2);i!==null&&Ei(i,e,2)}function Eh(e){var i=pi();if(typeof e=="function"){var r=e;if(e=r(),Er){oe(!0);try{r()}finally{oe(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},i}function K0(e,i,r,l){return e.baseState=r,Sh(e,an,typeof l=="function"?l:qa)}function Pb(e,i,r,l,h){if(lu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};k.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Q0(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Q0(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=k.T,S={};k.T=S;try{var L=r(h,l),J=k.S;J!==null&&J(S,L),J0(e,i,L)}catch(yt){Th(e,i,yt)}finally{m!==null&&S.types!==null&&(m.types=S.types),k.T=m}}else try{m=r(h,l),J0(e,i,m)}catch(yt){Th(e,i,yt)}}function J0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){$0(e,i,l)},function(l){return Th(e,i,l)}):$0(e,i,r)}function $0(e,i,r){i.status="fulfilled",i.value=r,tg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Q0(e,r)))}function Th(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,tg(i),i=i.next;while(i!==l)}e.action=null}function tg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function eg(e,i){return i}function ng(e,i){if(He){var r=pn.formState;if(r!==null){t:{var l=we;if(He){if(vn){e:{for(var h=vn,m=ea;h.nodeType!==8;){if(!m){h=null;break e}if(h=ia(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){vn=ia(h.nextSibling),l=h.data==="F!";break t}}Ss(l)}l=!1}l&&(i=r[0])}}return r=pi(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:i},r.queue=l,r=bg.bind(null,we,l),l.dispatch=r,l=Eh(!1),m=Uh.bind(null,we,!1,l.queue),l=pi(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=Pb.bind(null,we,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function ig(e){var i=Ln();return ag(i,an,e)}function ag(e,i,r){if(i=Sh(e,i,eg)[0],e=su(qa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ul(i)}catch(S){throw S===lo?Zc:S}else l=i;i=Ln();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(we.flags|=2048,po(9,{destroy:void 0},Ob.bind(null,h,r),null)),[l,m,e]}function Ob(e,i){e.action=i}function sg(e){var i=Ln(),r=an;if(r!==null)return ag(i,r,e);Ln(),i=i.memoizedState,r=Ln();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function po(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=iu(),we.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function rg(){return Ln().memoizedState}function ru(e,i,r,l){var h=pi();we.flags|=e,h.memoizedState=po(1|i,{destroy:void 0},r,l===void 0?null:l)}function ou(e,i,r,l){var h=Ln();l=l===void 0?null:l;var m=h.memoizedState.inst;an!==null&&l!==null&&gh(l,an.memoizedState.deps)?h.memoizedState=po(i,m,r,l):(we.flags|=e,h.memoizedState=po(1|i,m,r,l))}function og(e,i){ru(8390656,8,e,i)}function Ah(e,i){ou(2048,8,e,i)}function zb(e){we.flags|=4;var i=we.updateQueue;if(i===null)i=iu(),we.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function lg(e){var i=Ln().memoizedState;return zb({ref:i,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function cg(e,i){return ou(4,2,e,i)}function ug(e,i){return ou(4,4,e,i)}function fg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function hg(e,i,r){r=r!=null?r.concat([e]):null,ou(4,4,fg.bind(null,i,e),r)}function wh(){}function dg(e,i){var r=Ln();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&gh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function pg(e,i){var r=Ln();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&gh(i,l[1]))return l[0];if(l=e(),Er){oe(!0);try{e()}finally{oe(!1)}}return r.memoizedState=[l,i],l}function Ch(e,i,r){return r===void 0||(Wa&1073741824)!==0&&(ze&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=mx(),we.lanes|=e,Us|=e,r)}function mg(e,i,r,l){return Pi(r,i)?r:uo.current!==null?(e=Ch(e,r,l),Pi(e,i)||(Hn=!0),e):(Wa&42)===0||(Wa&1073741824)!==0&&(ze&261930)===0?(Hn=!0,e.memoizedState=r):(e=mx(),we.lanes|=e,Us|=e,i)}function gg(e,i,r,l,h){var m=Q.p;Q.p=m!==0&&8>m?m:8;var S=k.T,L={};k.T=L,Uh(e,!1,i,r);try{var J=h(),yt=k.S;if(yt!==null&&yt(L,J),J!==null&&typeof J=="object"&&typeof J.then=="function"){var Nt=Ub(J,l);Nl(e,i,Nt,Hi(e))}else Nl(e,i,l,Hi(e))}catch(Ht){Nl(e,i,{then:function(){},status:"rejected",reason:Ht},Hi())}finally{Q.p=m,S!==null&&L.types!==null&&(S.types=L.types),k.T=S}}function Bb(){}function Rh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=xg(e).queue;gg(e,h,i,j,r===null?Bb:function(){return vg(e),r(l)})}function xg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:j},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function vg(e){var i=xg(e);i.next===null&&(i=e.alternate.memoizedState),Nl(e,i.next.queue,{},Hi())}function Dh(){return Jn(Zl)}function _g(){return Ln().memoizedState}function yg(){return Ln().memoizedState}function Ib(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Hi();e=Ts(r);var l=As(i,e,r);l!==null&&(Ei(l,i,r),wl(l,i,r)),i={cache:sh()},e.payload=i;return}i=i.return}}function Fb(e,i,r){var l=Hi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},lu(e)?Sg(i,r):(r=Yf(e,i,r,l),r!==null&&(Ei(r,e,l),Mg(r,i,l)))}function bg(e,i,r){var l=Hi();Nl(e,i,r,l)}function Nl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(lu(e))Sg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,L=m(S,r);if(h.hasEagerState=!0,h.eagerState=L,Pi(L,S))return Gc(e,i,h,0),pn===null&&Vc(),!1}catch{}finally{}if(r=Yf(e,i,h,l),r!==null)return Ei(r,e,l),Mg(r,i,l),!0}return!1}function Uh(e,i,r,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},lu(e)){if(i)throw Error(a(479))}else i=Yf(e,r,l,2),i!==null&&Ei(i,e,2)}function lu(e){var i=e.alternate;return e===we||i!==null&&i===we}function Sg(e,i){fo=eu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Mg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,sr(e,r)}}var Ll={readContext:Jn,use:au,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useLayoutEffect:Tn,useInsertionEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useSyncExternalStore:Tn,useId:Tn,useHostTransitionStatus:Tn,useFormState:Tn,useActionState:Tn,useOptimistic:Tn,useMemoCache:Tn,useCacheRefresh:Tn};Ll.useEffectEvent=Tn;var Eg={readContext:Jn,use:au,useCallback:function(e,i){return pi().memoizedState=[e,i===void 0?null:i],e},useContext:Jn,useEffect:og,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,ru(4194308,4,fg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return ru(4194308,4,e,i)},useInsertionEffect:function(e,i){ru(4,2,e,i)},useMemo:function(e,i){var r=pi();i=i===void 0?null:i;var l=e();if(Er){oe(!0);try{e()}finally{oe(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=pi();if(r!==void 0){var h=r(i);if(Er){oe(!0);try{r(i)}finally{oe(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Fb.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var i=pi();return e={current:e},i.memoizedState=e},useState:function(e){e=Eh(e);var i=e.queue,r=bg.bind(null,we,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(e,i){var r=pi();return Ch(r,e,i)},useTransition:function(){var e=Eh(!1);return e=gg.bind(null,we,e.queue,!0,!1),pi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=we,h=pi();if(He){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),pn===null)throw Error(a(349));(ze&127)!==0||j0(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,og(q0.bind(null,l,m,e),[e]),l.flags|=2048,po(9,{destroy:void 0},W0.bind(null,l,m,r,i),null),r},useId:function(){var e=pi(),i=pn.identifierPrefix;if(He){var r=Ea,l=Ma;r=(l&~(1<<32-le(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=nu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Nb++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Dh,useFormState:ng,useActionState:ng,useOptimistic:function(e){var i=pi();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Uh.bind(null,we,!0,r),r.dispatch=i,[e,i]},useMemoCache:bh,useCacheRefresh:function(){return pi().memoizedState=Ib.bind(null,we)},useEffectEvent:function(e){var i=pi(),r={impl:e};return i.memoizedState=r,function(){if((Ze&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Nh={readContext:Jn,use:au,useCallback:dg,useContext:Jn,useEffect:Ah,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:su,useRef:rg,useState:function(){return su(qa)},useDebugValue:wh,useDeferredValue:function(e,i){var r=Ln();return mg(r,an.memoizedState,e,i)},useTransition:function(){var e=su(qa)[0],i=Ln().memoizedState;return[typeof e=="boolean"?e:Ul(e),i]},useSyncExternalStore:X0,useId:_g,useHostTransitionStatus:Dh,useFormState:ig,useActionState:ig,useOptimistic:function(e,i){var r=Ln();return K0(r,an,e,i)},useMemoCache:bh,useCacheRefresh:yg};Nh.useEffectEvent=lg;var Tg={readContext:Jn,use:au,useCallback:dg,useContext:Jn,useEffect:Ah,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:Mh,useRef:rg,useState:function(){return Mh(qa)},useDebugValue:wh,useDeferredValue:function(e,i){var r=Ln();return an===null?Ch(r,e,i):mg(r,an.memoizedState,e,i)},useTransition:function(){var e=Mh(qa)[0],i=Ln().memoizedState;return[typeof e=="boolean"?e:Ul(e),i]},useSyncExternalStore:X0,useId:_g,useHostTransitionStatus:Dh,useFormState:sg,useActionState:sg,useOptimistic:function(e,i){var r=Ln();return an!==null?K0(r,an,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:bh,useCacheRefresh:yg};Tg.useEffectEvent=lg;function Lh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ph={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Hi(),h=Ts(l);h.payload=i,r!=null&&(h.callback=r),i=As(e,h,l),i!==null&&(Ei(i,e,l),wl(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Hi(),h=Ts(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=As(e,h,l),i!==null&&(Ei(i,e,l),wl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Hi(),l=Ts(r);l.tag=2,i!=null&&(l.callback=i),i=As(e,l,r),i!==null&&(Ei(i,e,r),wl(i,e,r))}};function Ag(e,i,r,l,h,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!_l(r,l)||!_l(h,m):!0}function wg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ph.enqueueReplaceState(i,i.state,null)}function Tr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Cg(e){Hc(e)}function Rg(e){console.error(e)}function Dg(e){Hc(e)}function cu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ug(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Oh(e,i,r){return r=Ts(r),r.tag=3,r.payload={element:null},r.callback=function(){cu(e,i)},r}function Ng(e){return e=Ts(e),e.tag=3,e}function Lg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Ug(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Ug(i,r,l),typeof h!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var L=l.stack;this.componentDidCatch(l.value,{componentStack:L!==null?L:""})})}function Hb(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&so(i,r,h,!0),r=zi.current,r!==null){switch(r.tag){case 31:case 13:return na===null?bu():r.alternate===null&&An===0&&(An=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Kc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),rd(e,l,h)),!1;case 22:return r.flags|=65536,l===Kc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),rd(e,l,h)),!1}throw Error(a(435,r.tag))}return rd(e,l,h),bu(),!1}if(He)return i=zi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==th&&(e=Error(a(422),{cause:l}),Sl(Ji(e,r)))):(l!==th&&(i=Error(a(423),{cause:l}),Sl(Ji(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ji(l,r),h=Oh(e.stateNode,l,h),fh(e,h),An!==4&&(An=2)),!1;var m=Error(a(520),{cause:l});if(m=Ji(m,r),Vl===null?Vl=[m]:Vl.push(m),An!==4&&(An=2),i===null)return!0;l=Ji(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Oh(r.stateNode,l,e),fh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ns===null||!Ns.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Ng(h),Lg(h,e,r,l),fh(r,h),!1}r=r.return}while(r!==null);return!1}var zh=Error(a(461)),Hn=!1;function $n(e,i,r,l){i.child=e===null?B0(i,null,r,l):Mr(i,e.child,r,l)}function Pg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var S={};for(var L in l)L!=="ref"&&(S[L]=l[L])}else S=l;return _r(i),l=xh(e,i,r,S,m,h),L=vh(),e!==null&&!Hn?(_h(e,i,h),Ya(e,i,h)):(He&&L&&Jf(i),i.flags|=1,$n(e,i,l,h),i.child)}function Og(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,zg(e,i,m,l,h)):(e=Xc(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Xh(e,h)){var S=m.memoizedProps;if(r=r.compare,r=r!==null?r:_l,r(S,l)&&e.ref===i.ref)return Ya(e,i,h)}return i.flags|=1,e=Ga(m,l),e.ref=i.ref,e.return=i,i.child=e}function zg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(_l(m,l)&&e.ref===i.ref)if(Hn=!1,i.pendingProps=l=m,Xh(e,h))(e.flags&131072)!==0&&(Hn=!0);else return i.lanes=e.lanes,Ya(e,i,h)}return Bh(e,i,r,l,h)}function Bg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Ig(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yc(i,m!==null?m.cachePool:null),m!==null?H0(i,m):dh(),V0(i);else return l=i.lanes=536870912,Ig(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Yc(i,m.cachePool),H0(i,m),Cs(),i.memoizedState=null):(e!==null&&Yc(i,null),dh(),Cs());return $n(e,i,h,r),i.child}function Pl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Ig(e,i,r,l,h){var m=oh();return m=m===null?null:{parent:In._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Yc(i,null),dh(),V0(i),e!==null&&so(e,i,l,!0),i.childLanes=h,null}function uu(e,i){return i=hu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Fg(e,i,r){return Mr(i,e.child,null,r),e=uu(i,i.pendingProps),e.flags|=2,Bi(i),i.memoizedState=null,e}function Vb(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(He){if(l.mode==="hidden")return e=uu(i,l),i.lanes=536870912,Pl(null,e);if(mh(i),(e=vn)?(e=Qx(e,ea),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ys!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},r=S0(e),r.return=i,i.child=r,Qn=i,vn=null)):e=null,e===null)throw Ss(i);return i.lanes=536870912,null}return uu(i,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(mh(i),h)if(i.flags&256)i.flags&=-257,i=Fg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Hn||so(e,i,r,!1),h=(r&e.childLanes)!==0,Hn||h){if(l=pn,l!==null&&(S=Ci(l,r),S!==0&&S!==m.retryLane))throw m.retryLane=S,mr(e,S),Ei(l,e,S),zh;bu(),i=Fg(e,i,r)}else e=m.treeContext,vn=ia(S.nextSibling),Qn=i,He=!0,bs=null,ea=!1,e!==null&&T0(i,e),i=uu(i,l),i.flags|=4096;return i}return e=Ga(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function fu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Bh(e,i,r,l,h){return _r(i),r=xh(e,i,r,l,void 0,h),l=vh(),e!==null&&!Hn?(_h(e,i,h),Ya(e,i,h)):(He&&l&&Jf(i),i.flags|=1,$n(e,i,r,h),i.child)}function Hg(e,i,r,l,h,m){return _r(i),i.updateQueue=null,r=k0(i,l,r,h),G0(e),l=vh(),e!==null&&!Hn?(_h(e,i,m),Ya(e,i,m)):(He&&l&&Jf(i),i.flags|=1,$n(e,i,r,m),i.child)}function Vg(e,i,r,l,h){if(_r(i),i.stateNode===null){var m=eo,S=r.contextType;typeof S=="object"&&S!==null&&(m=Jn(S)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ch(i),S=r.contextType,m.context=typeof S=="object"&&S!==null?Jn(S):eo,m.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Lh(i,r,S,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Ph.enqueueReplaceState(m,m.state,null),Rl(i,l,m,h),Cl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,J=Tr(r,L);m.props=J;var yt=m.context,Nt=r.contextType;S=eo,typeof Nt=="object"&&Nt!==null&&(S=Jn(Nt));var Ht=r.getDerivedStateFromProps;Nt=typeof Ht=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,Nt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||yt!==S)&&wg(i,m,l,S),Es=!1;var bt=i.memoizedState;m.state=bt,Rl(i,l,m,h),Cl(),yt=i.memoizedState,L||bt!==yt||Es?(typeof Ht=="function"&&(Lh(i,r,Ht,l),yt=i.memoizedState),(J=Es||Ag(i,r,J,l,bt,yt,S))?(Nt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=yt),m.props=l,m.state=yt,m.context=S,l=J):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,uh(e,i),S=i.memoizedProps,Nt=Tr(r,S),m.props=Nt,Ht=i.pendingProps,bt=m.context,yt=r.contextType,J=eo,typeof yt=="object"&&yt!==null&&(J=Jn(yt)),L=r.getDerivedStateFromProps,(yt=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Ht||bt!==J)&&wg(i,m,l,J),Es=!1,bt=i.memoizedState,m.state=bt,Rl(i,l,m,h),Cl();var Ct=i.memoizedState;S!==Ht||bt!==Ct||Es||e!==null&&e.dependencies!==null&&Wc(e.dependencies)?(typeof L=="function"&&(Lh(i,r,L,l),Ct=i.memoizedState),(Nt=Es||Ag(i,r,Nt,l,bt,Ct,J)||e!==null&&e.dependencies!==null&&Wc(e.dependencies))?(yt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Ct,J),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Ct,J)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&bt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&bt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ct),m.props=l,m.state=Ct,m.context=J,l=Nt):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&bt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&bt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,fu(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Mr(i,e.child,null,h),i.child=Mr(i,null,r,h)):$n(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Ya(e,i,h),e}function Gg(e,i,r,l){return xr(),i.flags|=256,$n(e,i,r,l),i.child}var Ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fh(e){return{baseLanes:e,cachePool:U0()}}function Hh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Fi),e}function kg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),S&&(h=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(He){if(h?ws(i):Cs(),(e=vn)?(e=Qx(e,ea),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ys!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},r=S0(e),r.return=i,i.child=r,Qn=i,vn=null)):e=null,e===null)throw Ss(i);return Sd(e)?i.lanes=32:i.lanes=536870912,null}var L=l.children;return l=l.fallback,h?(Cs(),h=i.mode,L=hu({mode:"hidden",children:L},h),l=gr(l,h,r,null),L.return=i,l.return=i,L.sibling=l,i.child=L,l=i.child,l.memoizedState=Fh(r),l.childLanes=Hh(e,S,r),i.memoizedState=Ih,Pl(null,l)):(ws(i),Vh(i,L))}var J=e.memoizedState;if(J!==null&&(L=J.dehydrated,L!==null)){if(m)i.flags&256?(ws(i),i.flags&=-257,i=Gh(e,i,r)):i.memoizedState!==null?(Cs(),i.child=e.child,i.flags|=128,i=null):(Cs(),L=l.fallback,h=i.mode,l=hu({mode:"visible",children:l.children},h),L=gr(L,h,r,null),L.flags|=2,l.return=i,L.return=i,l.sibling=L,i.child=l,Mr(i,e.child,null,r),l=i.child,l.memoizedState=Fh(r),l.childLanes=Hh(e,S,r),i.memoizedState=Ih,i=Pl(null,l));else if(ws(i),Sd(L)){if(S=L.nextSibling&&L.nextSibling.dataset,S)var yt=S.dgst;S=yt,l=Error(a(419)),l.stack="",l.digest=S,Sl({value:l,source:null,stack:null}),i=Gh(e,i,r)}else if(Hn||so(e,i,r,!1),S=(r&e.childLanes)!==0,Hn||S){if(S=pn,S!==null&&(l=Ci(S,r),l!==0&&l!==J.retryLane))throw J.retryLane=l,mr(e,l),Ei(S,e,l),zh;bd(L)||bu(),i=Gh(e,i,r)}else bd(L)?(i.flags|=192,i.child=e.child,i=null):(e=J.treeContext,vn=ia(L.nextSibling),Qn=i,He=!0,bs=null,ea=!1,e!==null&&T0(i,e),i=Vh(i,l.children),i.flags|=4096);return i}return h?(Cs(),L=l.fallback,h=i.mode,J=e.child,yt=J.sibling,l=Ga(J,{mode:"hidden",children:l.children}),l.subtreeFlags=J.subtreeFlags&65011712,yt!==null?L=Ga(yt,L):(L=gr(L,h,r,null),L.flags|=2),L.return=i,l.return=i,l.sibling=L,i.child=l,Pl(null,l),l=i.child,L=e.child.memoizedState,L===null?L=Fh(r):(h=L.cachePool,h!==null?(J=In._currentValue,h=h.parent!==J?{parent:J,pool:J}:h):h=U0(),L={baseLanes:L.baseLanes|r,cachePool:h}),l.memoizedState=L,l.childLanes=Hh(e,S,r),i.memoizedState=Ih,Pl(e.child,l)):(ws(i),r=e.child,e=r.sibling,r=Ga(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function Vh(e,i){return i=hu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function hu(e,i){return e=Oi(22,e,null,i),e.lanes=0,e}function Gh(e,i,r){return Mr(i,e.child,null,r),e=Vh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Xg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ih(e.return,i,r)}function kh(e,i,r,l,h,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=h,S.treeForkCount=m)}function jg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var S=Nn.current,L=(S&2)!==0;if(L?(S=S&1|2,i.flags|=128):S&=1,Lt(Nn,S),$n(e,i,l,r),l=He?bl:0,!L&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,r,i);else if(e.tag===19)Xg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&tu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),kh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&tu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}kh(i,!0,r,null,m,l);break;case"together":kh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ya(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Us|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(so(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ga(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ga(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Xh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Wc(e)))}function Gb(e,i,r){switch(i.tag){case 3:st(i,i.stateNode.containerInfo),Ms(i,In,e.memoizedState.cache),xr();break;case 27:case 5:at(i);break;case 4:st(i,i.stateNode.containerInfo);break;case 10:Ms(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ws(i),i.flags|=128,null):(r&i.child.childLanes)!==0?kg(e,i,r):(ws(i),e=Ya(e,i,r),e!==null?e.sibling:null);ws(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(so(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return jg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(Nn,Nn.current),l)break;return null;case 22:return i.lanes=0,Bg(e,i,r,i.pendingProps);case 24:Ms(i,In,e.memoizedState.cache)}return Ya(e,i,r)}function Wg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Hn=!0;else{if(!Xh(e,r)&&(i.flags&128)===0)return Hn=!1,Gb(e,i,r);Hn=(e.flags&131072)!==0}else Hn=!1,He&&(i.flags&1048576)!==0&&E0(i,bl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=br(i.elementType),i.type=e,typeof e=="function")Zf(e)?(l=Tr(e,l),i.tag=1,i=Vg(null,i,e,l,r)):(i.tag=0,i=Bh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===P){i.tag=11,i=Pg(null,i,e,l,r);break t}else if(h===H){i.tag=14,i=Og(null,i,e,l,r);break t}}throw i=mt(e)||e,Error(a(306,i,""))}}return i;case 0:return Bh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Tr(l,i.pendingProps),Vg(e,i,l,h,r);case 3:t:{if(st(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,uh(e,i),Rl(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Ms(i,In,l),l!==m.cache&&ah(i,[In],r,!0),Cl(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Gg(e,i,l,r);break t}else if(l!==h){h=Ji(Error(a(424)),i),Sl(h),i=Gg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(vn=ia(e.firstChild),Qn=i,He=!0,bs=null,ea=!0,r=B0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(xr(),l===h){i=Ya(e,i,r);break t}$n(e,i,l,r)}i=i.child}return i;case 26:return fu(e,i),e===null?(r=iv(i.type,null,i.pendingProps,null))?i.memoizedState=r:He||(r=i.type,e=i.pendingProps,l=Cu(w.current).createElement(r),l[tn]=i,l[Rn]=e,ti(l,r,e),vt(l),i.stateNode=l):i.memoizedState=iv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return at(i),e===null&&He&&(l=i.stateNode=tv(i.type,i.pendingProps,w.current),Qn=i,ea=!0,h=vn,zs(i.type)?(Md=h,vn=ia(l.firstChild)):vn=h),$n(e,i,i.pendingProps.children,r),fu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&He&&((h=l=vn)&&(l=vS(l,i.type,i.pendingProps,ea),l!==null?(i.stateNode=l,Qn=i,vn=ia(l.firstChild),ea=!1,h=!0):h=!1),h||Ss(i)),at(i),h=i.type,m=i.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,vd(h,m)?l=null:S!==null&&vd(h,S)&&(i.flags|=32),i.memoizedState!==null&&(h=xh(e,i,Lb,null,null,r),Zl._currentValue=h),fu(e,i),$n(e,i,l,r),i.child;case 6:return e===null&&He&&((e=r=vn)&&(r=_S(r,i.pendingProps,ea),r!==null?(i.stateNode=r,Qn=i,vn=null,e=!0):e=!1),e||Ss(i)),null;case 13:return kg(e,i,r);case 4:return st(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Mr(i,null,l,r):$n(e,i,l,r),i.child;case 11:return Pg(e,i,i.type,i.pendingProps,r);case 7:return $n(e,i,i.pendingProps,r),i.child;case 8:return $n(e,i,i.pendingProps.children,r),i.child;case 12:return $n(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ms(i,i.type,l.value),$n(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,_r(i),h=Jn(h),l=l(h),i.flags|=1,$n(e,i,l,r),i.child;case 14:return Og(e,i,i.type,i.pendingProps,r);case 15:return zg(e,i,i.type,i.pendingProps,r);case 19:return jg(e,i,r);case 31:return Vb(e,i,r);case 22:return Bg(e,i,r,i.pendingProps);case 24:return _r(i),l=Jn(In),e===null?(h=oh(),h===null&&(h=pn,m=sh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},ch(i),Ms(i,In,h)):((e.lanes&r)!==0&&(uh(e,i),Rl(i,null,null,r),Cl()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ms(i,In,l)):(l=m.cache,Ms(i,In,l),l!==h.cache&&ah(i,[In],r,!0))),$n(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Za(e){e.flags|=4}function jh(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(_x())e.flags|=8192;else throw Sr=Kc,lh}else e.flags&=-16777217}function qg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lv(i))if(_x())e.flags|=8192;else throw Sr=Kc,lh}function du(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Xe():536870912,e.lanes|=i,vo|=i)}function Ol(e,i){if(!He)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _n(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function kb(e,i,r){var l=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return _n(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ja(In),gt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(i)?Za(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eh())),_n(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Za(i),m!==null?(_n(i),qg(i,m)):(_n(i),jh(i,h,null,l,r))):m?m!==e.memoizedState?(Za(i),_n(i),qg(i,m)):(_n(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Za(i),_n(i),jh(i,h,e,l,r)),null;case 27:if(Pt(i),r=w.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Za(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return _n(i),null}e=Z.current,ao(i)?A0(i):(e=tv(h,l,r),i.stateNode=e,Za(i))}return _n(i),null;case 5:if(Pt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Za(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return _n(i),null}if(m=Z.current,ao(i))A0(i);else{var S=Cu(w.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(h,{is:l.is}):S.createElement(h)}}m[tn]=i,m[Rn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;t:switch(ti(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Za(i)}}return _n(i),jh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Za(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=w.current,ao(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Qn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[tn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||kx(e.nodeValue,r)),e||Ss(i,!0)}else e=Cu(e).createTextNode(l),e[tn]=i,i.stateNode=e}return _n(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=ao(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[tn]=i}else xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),e=!1}else r=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Bi(i),i):(Bi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return _n(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ao(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[tn]=i}else xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),h=!1}else h=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Bi(i),i):(Bi(i),null)}return Bi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),du(i,i.updateQueue),_n(i),null);case 4:return gt(),e===null&&dd(i.stateNode.containerInfo),_n(i),null;case 10:return ja(i.type),_n(i),null;case 19:if(pt(Nn),l=i.memoizedState,l===null)return _n(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Ol(l,!1);else{if(An!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=tu(e),m!==null){for(i.flags|=128,Ol(l,!1),e=m.updateQueue,i.updateQueue=e,du(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)b0(r,e),r=r.sibling;return Lt(Nn,Nn.current&1|2),He&&ka(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>vu&&(i.flags|=128,h=!0,Ol(l,!1),i.lanes=4194304)}else{if(!h)if(e=tu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,du(i,e),Ol(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!He)return _n(i),null}else 2*A()-l.renderingStartTime>vu&&r!==536870912&&(i.flags|=128,h=!0,Ol(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,r=Nn.current,Lt(Nn,h?r&1|2:r&1),He&&ka(i,l.treeForkCount),e):(_n(i),null);case 22:case 23:return Bi(i),ph(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),r=i.updateQueue,r!==null&&du(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&pt(yr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ja(In),_n(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Xb(e,i){switch($f(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ja(In),gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Pt(i),null;case 31:if(i.memoizedState!==null){if(Bi(i),i.alternate===null)throw Error(a(340));xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Bi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return pt(Nn),null;case 4:return gt(),null;case 10:return ja(i.type),null;case 22:case 23:return Bi(i),ph(),e!==null&&pt(yr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ja(In),null;case 25:return null;default:return null}}function Yg(e,i){switch($f(i),i.tag){case 3:ja(In),gt();break;case 26:case 27:case 5:Pt(i);break;case 4:gt();break;case 31:i.memoizedState!==null&&Bi(i);break;case 13:Bi(i);break;case 19:pt(Nn);break;case 10:ja(i.type);break;case 22:case 23:Bi(i),ph(),e!==null&&pt(yr);break;case 24:ja(In)}}function zl(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,S=r.inst;l=m(),S.destroy=l}r=r.next}while(r!==h)}}catch(L){Je(i,i.return,L)}}function Rs(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var S=l.inst,L=S.destroy;if(L!==void 0){S.destroy=void 0,h=i;var J=r,yt=L;try{yt()}catch(Nt){Je(h,J,Nt)}}}l=l.next}while(l!==m)}}catch(Nt){Je(i,i.return,Nt)}}function Zg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{F0(i,r)}catch(l){Je(e,e.return,l)}}}function Kg(e,i,r){r.props=Tr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Je(e,i,l)}}function Bl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Je(e,i,h)}}function Ta(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Je(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Je(e,i,h)}else r.current=null}function Qg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Je(e,e.return,h)}}function Wh(e,i,r){try{var l=e.stateNode;hS(l,e.type,r,i),l[Rn]=i}catch(h){Je(e,e.return,h)}}function Jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zs(e.type)||e.tag===4}function qh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=_i));else if(l!==4&&(l===27&&zs(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Yh(e,i,r),e=e.sibling;e!==null;)Yh(e,i,r),e=e.sibling}function pu(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&zs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(pu(e,i,r),e=e.sibling;e!==null;)pu(e,i,r),e=e.sibling}function $g(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ti(i,l,r),i[tn]=e,i[Rn]=r}catch(m){Je(e,e.return,m)}}var Ka=!1,Vn=!1,Zh=!1,tx=typeof WeakSet=="function"?WeakSet:Set,Yn=null;function jb(e,i){if(e=e.containerInfo,gd=Ou,e=h0(e),Gf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var S=0,L=-1,J=-1,yt=0,Nt=0,Ht=e,bt=null;e:for(;;){for(var Ct;Ht!==r||h!==0&&Ht.nodeType!==3||(L=S+h),Ht!==m||l!==0&&Ht.nodeType!==3||(J=S+l),Ht.nodeType===3&&(S+=Ht.nodeValue.length),(Ct=Ht.firstChild)!==null;)bt=Ht,Ht=Ct;for(;;){if(Ht===e)break e;if(bt===r&&++yt===h&&(L=S),bt===m&&++Nt===l&&(J=S),(Ct=Ht.nextSibling)!==null)break;Ht=bt,bt=Ht.parentNode}Ht=Ct}r=L===-1||J===-1?null:{start:L,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for(xd={focusedElem:e,selectionRange:r},Ou=!1,Yn=i;Yn!==null;)if(i=Yn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Yn=e;else for(;Yn!==null;){switch(i=Yn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var ue=Tr(r.type,h);e=l.getSnapshotBeforeUpdate(ue,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ve){Je(r,r.return,ve)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)yd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Yn=e;break}Yn=i.return}}function ex(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ja(e,r),l&4&&zl(5,r);break;case 1:if(Ja(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Je(r,r.return,S)}else{var h=Tr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Je(r,r.return,S)}}l&64&&Zg(r),l&512&&Bl(r,r.return);break;case 3:if(Ja(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{F0(e,i)}catch(S){Je(r,r.return,S)}}break;case 27:i===null&&l&4&&$g(r);case 26:case 5:Ja(e,r),i===null&&l&4&&Qg(r),l&512&&Bl(r,r.return);break;case 12:Ja(e,r);break;case 31:Ja(e,r),l&4&&ax(e,r);break;case 13:Ja(e,r),l&4&&sx(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=tS.bind(null,r),yS(e,r))));break;case 22:if(l=r.memoizedState!==null||Ka,!l){i=i!==null&&i.memoizedState!==null||Vn,h=Ka;var m=Vn;Ka=l,(Vn=i)&&!m?$a(e,r,(r.subtreeFlags&8772)!==0):Ja(e,r),Ka=h,Vn=m}break;case 30:break;default:Ja(e,r)}}function nx(e){var i=e.alternate;i!==null&&(e.alternate=null,nx(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&or(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bn=null,yi=!1;function Qa(e,i,r){for(r=r.child;r!==null;)ix(e,i,r),r=r.sibling}function ix(e,i,r){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(It,r)}catch{}switch(r.tag){case 26:Vn||Ta(r,i),Qa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Vn||Ta(r,i);var l=bn,h=yi;zs(r.type)&&(bn=r.stateNode,yi=!1),Qa(e,i,r),Wl(r.stateNode),bn=l,yi=h;break;case 5:Vn||Ta(r,i);case 6:if(l=bn,h=yi,bn=null,Qa(e,i,r),bn=l,yi=h,bn!==null)if(yi)try{(bn.nodeType===9?bn.body:bn.nodeName==="HTML"?bn.ownerDocument.body:bn).removeChild(r.stateNode)}catch(m){Je(r,i,m)}else try{bn.removeChild(r.stateNode)}catch(m){Je(r,i,m)}break;case 18:bn!==null&&(yi?(e=bn,Zx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ao(e)):Zx(bn,r.stateNode));break;case 4:l=bn,h=yi,bn=r.stateNode.containerInfo,yi=!0,Qa(e,i,r),bn=l,yi=h;break;case 0:case 11:case 14:case 15:Rs(2,r,i),Vn||Rs(4,r,i),Qa(e,i,r);break;case 1:Vn||(Ta(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Kg(r,i,l)),Qa(e,i,r);break;case 21:Qa(e,i,r);break;case 22:Vn=(l=Vn)||r.memoizedState!==null,Qa(e,i,r),Vn=l;break;default:Qa(e,i,r)}}function ax(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ao(e)}catch(r){Je(i,i.return,r)}}}function sx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(r){Je(i,i.return,r)}}function Wb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new tx),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new tx),i;default:throw Error(a(435,e.tag))}}function mu(e,i){var r=Wb(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=eS.bind(null,e,l);l.then(h,h)}})}function bi(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,S=i,L=S;t:for(;L!==null;){switch(L.tag){case 27:if(zs(L.type)){bn=L.stateNode,yi=!1;break t}break;case 5:bn=L.stateNode,yi=!1;break t;case 3:case 4:bn=L.stateNode.containerInfo,yi=!0;break t}L=L.return}if(bn===null)throw Error(a(160));ix(m,S,h),bn=null,yi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)rx(i,e),i=i.sibling}var pa=null;function rx(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bi(i,e),Si(e),l&4&&(Rs(3,e,e.return),zl(3,e),Rs(5,e,e.return));break;case 1:bi(i,e),Si(e),l&512&&(Vn||r===null||Ta(r,r.return)),l&64&&Ka&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=pa;if(bi(i,e),Si(e),l&512&&(Vn||r===null||Ta(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[qi]||m[tn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),ti(m,l,r),m[tn]=e,vt(m),l=m;break t;case"link":var S=rv("link","href",h).get(l+(r.href||""));if(S){for(var L=0;L<S.length;L++)if(m=S[L],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(L,1);break e}}m=h.createElement(l),ti(m,l,r),h.head.appendChild(m);break;case"meta":if(S=rv("meta","content",h).get(l+(r.content||""))){for(L=0;L<S.length;L++)if(m=S[L],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(L,1);break e}}m=h.createElement(l),ti(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[tn]=e,vt(m),l=m}e.stateNode=l}else ov(h,e.type,e.stateNode);else e.stateNode=sv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?ov(h,e.type,e.stateNode):sv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wh(e,e.memoizedProps,r.memoizedProps)}break;case 27:bi(i,e),Si(e),l&512&&(Vn||r===null||Ta(r,r.return)),r!==null&&l&4&&Wh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(bi(i,e),Si(e),l&512&&(Vn||r===null||Ta(r,r.return)),e.flags&32){h=e.stateNode;try{Ui(h,"")}catch(ue){Je(e,e.return,ue)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Wh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Zh=!0);break;case 6:if(bi(i,e),Si(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(ue){Je(e,e.return,ue)}}break;case 3:if(Uu=null,h=pa,pa=Ru(i.containerInfo),bi(i,e),pa=h,Si(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ao(i.containerInfo)}catch(ue){Je(e,e.return,ue)}Zh&&(Zh=!1,ox(e));break;case 4:l=pa,pa=Ru(e.stateNode.containerInfo),bi(i,e),Si(e),pa=l;break;case 12:bi(i,e),Si(e);break;case 31:bi(i,e),Si(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mu(e,l)));break;case 13:bi(i,e),Si(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mu(e,l)));break;case 22:h=e.memoizedState!==null;var J=r!==null&&r.memoizedState!==null,yt=Ka,Nt=Vn;if(Ka=yt||h,Vn=Nt||J,bi(i,e),Vn=Nt,Ka=yt,Si(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||J||Ka||Vn||Ar(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){J=r=i;try{if(m=J.stateNode,h)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{L=J.stateNode;var Ht=J.memoizedProps.style,bt=Ht!=null&&Ht.hasOwnProperty("display")?Ht.display:null;L.style.display=bt==null||typeof bt=="boolean"?"":(""+bt).trim()}}catch(ue){Je(J,J.return,ue)}}}else if(i.tag===6){if(r===null){J=i;try{J.stateNode.nodeValue=h?"":J.memoizedProps}catch(ue){Je(J,J.return,ue)}}}else if(i.tag===18){if(r===null){J=i;try{var Ct=J.stateNode;h?Kx(Ct,!0):Kx(J.stateNode,!1)}catch(ue){Je(J,J.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,mu(e,r))));break;case 19:bi(i,e),Si(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mu(e,l)));break;case 30:break;case 21:break;default:bi(i,e),Si(e)}}function Si(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Jg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=qh(e);pu(e,m,h);break;case 5:var S=r.stateNode;r.flags&32&&(Ui(S,""),r.flags&=-33);var L=qh(e);pu(e,L,S);break;case 3:case 4:var J=r.stateNode.containerInfo,yt=qh(e);Yh(e,yt,J);break;default:throw Error(a(161))}}catch(Nt){Je(e,e.return,Nt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ox(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ox(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ja(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ex(e,i.alternate,i),i=i.sibling}function Ar(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Rs(4,i,i.return),Ar(i);break;case 1:Ta(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Kg(i,i.return,r),Ar(i);break;case 27:Wl(i.stateNode);case 26:case 5:Ta(i,i.return),Ar(i);break;case 22:i.memoizedState===null&&Ar(i);break;case 30:Ar(i);break;default:Ar(i)}e=e.sibling}}function $a(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:$a(h,m,r),zl(4,m);break;case 1:if($a(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(yt){Je(l,l.return,yt)}if(l=m,h=l.updateQueue,h!==null){var L=l.stateNode;try{var J=h.shared.hiddenCallbacks;if(J!==null)for(h.shared.hiddenCallbacks=null,h=0;h<J.length;h++)I0(J[h],L)}catch(yt){Je(l,l.return,yt)}}r&&S&64&&Zg(m),Bl(m,m.return);break;case 27:$g(m);case 26:case 5:$a(h,m,r),r&&l===null&&S&4&&Qg(m),Bl(m,m.return);break;case 12:$a(h,m,r);break;case 31:$a(h,m,r),r&&S&4&&ax(h,m);break;case 13:$a(h,m,r),r&&S&4&&sx(h,m);break;case 22:m.memoizedState===null&&$a(h,m,r),Bl(m,m.return);break;case 30:break;default:$a(h,m,r)}i=i.sibling}}function Kh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ml(r))}function Qh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ml(e))}function ma(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lx(e,i,r,l),i=i.sibling}function lx(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ma(e,i,r,l),h&2048&&zl(9,i);break;case 1:ma(e,i,r,l);break;case 3:ma(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ml(e)));break;case 12:if(h&2048){ma(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,S=m.id,L=m.onPostCommit;typeof L=="function"&&L(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(J){Je(i,i.return,J)}}else ma(e,i,r,l);break;case 31:ma(e,i,r,l);break;case 13:ma(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?ma(e,i,r,l):Il(e,i):m._visibility&2?ma(e,i,r,l):(m._visibility|=2,mo(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Kh(S,i);break;case 24:ma(e,i,r,l),h&2048&&Qh(i.alternate,i);break;default:ma(e,i,r,l)}}function mo(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,S=i,L=r,J=l,yt=S.flags;switch(S.tag){case 0:case 11:case 15:mo(m,S,L,J,h),zl(8,S);break;case 23:break;case 22:var Nt=S.stateNode;S.memoizedState!==null?Nt._visibility&2?mo(m,S,L,J,h):Il(m,S):(Nt._visibility|=2,mo(m,S,L,J,h)),h&&yt&2048&&Kh(S.alternate,S);break;case 24:mo(m,S,L,J,h),h&&yt&2048&&Qh(S.alternate,S);break;default:mo(m,S,L,J,h)}i=i.sibling}}function Il(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:Il(r,l),h&2048&&Kh(l.alternate,l);break;case 24:Il(r,l),h&2048&&Qh(l.alternate,l);break;default:Il(r,l)}i=i.sibling}}var Fl=8192;function go(e,i,r){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)cx(e,i,r),e=e.sibling}function cx(e,i,r){switch(e.tag){case 26:go(e,i,r),e.flags&Fl&&e.memoizedState!==null&&NS(r,pa,e.memoizedState,e.memoizedProps);break;case 5:go(e,i,r);break;case 3:case 4:var l=pa;pa=Ru(e.stateNode.containerInfo),go(e,i,r),pa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Fl,Fl=16777216,go(e,i,r),Fl=l):go(e,i,r));break;default:go(e,i,r)}}function ux(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Hl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Yn=l,hx(l,e)}ux(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fx(e),e=e.sibling}function fx(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Rs(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,gu(e)):Hl(e);break;default:Hl(e)}}function gu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Yn=l,hx(l,e)}ux(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Rs(8,i,i.return),gu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,gu(i));break;default:gu(i)}e=e.sibling}}function hx(e,i){for(;Yn!==null;){var r=Yn;switch(r.tag){case 0:case 11:case 15:Rs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ml(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Yn=l;else t:for(r=e;Yn!==null;){l=Yn;var h=l.sibling,m=l.return;if(nx(l),l===r){Yn=null;break t}if(h!==null){h.return=m,Yn=h;break t}Yn=m}}}var qb={getCacheForType:function(e){var i=Jn(In),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Jn(In).controller.signal}},Yb=typeof WeakMap=="function"?WeakMap:Map,Ze=0,pn=null,Le=null,ze=0,Qe=0,Ii=null,Ds=!1,xo=!1,Jh=!1,ts=0,An=0,Us=0,wr=0,$h=0,Fi=0,vo=0,Vl=null,Mi=null,td=!1,xu=0,dx=0,vu=1/0,_u=null,Ns=null,Xn=0,Ls=null,_o=null,es=0,ed=0,nd=null,px=null,Gl=0,id=null;function Hi(){return(Ze&2)!==0&&ze!==0?ze&-ze:k.T!==null?cd():rr()}function mx(){if(Fi===0)if((ze&536870912)===0||He){var e=qt;qt<<=1,(qt&3932160)===0&&(qt=262144),Fi=e}else Fi=536870912;return e=zi.current,e!==null&&(e.flags|=32),Fi}function Ei(e,i,r){(e===pn&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(yo(e,0),Ps(e,ze,Fi,!1)),xn(e,r),((Ze&2)===0||e!==pn)&&(e===pn&&((Ze&2)===0&&(wr|=r),An===4&&Ps(e,ze,Fi,!1)),Aa(e))}function gx(e,i,r){if((Ze&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||ee(e,i),h=l?Qb(e,i):sd(e,i,!0),m=l;do{if(h===0){xo&&!l&&Ps(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!Zb(r)){h=sd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var L=e;h=Vl;var J=L.current.memoizedState.isDehydrated;if(J&&(yo(L,S).flags|=256),S=sd(L,S,!1),S!==2){if(Jh&&!J){L.errorRecoveryDisabledLanes|=m,wr|=m,h=4;break t}m=Mi,Mi=h,m!==null&&(Mi===null?Mi=m:Mi.push.apply(Mi,m))}h=S}if(m=!1,h!==2)continue}}if(h===1){yo(e,0),Ps(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ps(l,i,Fi,!Ds);break t;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=xu+300-A(),10<h)){if(Ps(l,i,Fi,!Ds),Ft(l,0,!0)!==0)break t;es=i,l.timeoutHandle=qx(xx.bind(null,l,r,Mi,_u,td,i,Fi,wr,vo,Ds,m,"Throttled",-0,0),h);break t}xx(l,r,Mi,_u,td,i,Fi,wr,vo,Ds,m,null,-0,0)}}break}while(!0);Aa(e)}function xx(e,i,r,l,h,m,S,L,J,yt,Nt,Ht,bt,Ct){if(e.timeoutHandle=-1,Ht=i.subtreeFlags,Ht&8192||(Ht&16785408)===16785408){Ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_i},cx(i,m,Ht);var ue=(m&62914560)===m?xu-A():(m&4194048)===m?dx-A():0;if(ue=LS(Ht,ue),ue!==null){es=m,e.cancelPendingCommit=ue(Tx.bind(null,e,i,m,r,l,h,S,L,J,Nt,Ht,null,bt,Ct)),Ps(e,m,S,!yt);return}}Tx(e,i,m,r,l,h,S,L,J)}function Zb(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!Pi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ps(e,i,r,l){i&=~$h,i&=~wr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-le(h),S=1<<m;l[m]=-1,h&=~S}r!==0&&ar(e,r,i)}function yu(){return(Ze&6)===0?(kl(0),!1):!0}function ad(){if(Le!==null){if(Qe===0)var e=Le.return;else e=Le,Xa=vr=null,yh(e),co=null,Tl=0,e=Le;for(;e!==null;)Yg(e.alternate,e),e=e.return;Le=null}}function yo(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,mS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),es=0,ad(),pn=e,Le=r=Ga(e.current,null),ze=i,Qe=0,Ii=null,Ds=!1,xo=ee(e,i),Jh=!1,vo=Fi=$h=wr=Us=An=0,Mi=Vl=null,td=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-le(l),m=1<<h;i|=e[h],l&=~m}return ts=i,Vc(),r}function vx(e,i){we=null,k.H=Ll,i===lo||i===Zc?(i=P0(),Qe=3):i===lh?(i=P0(),Qe=4):Qe=i===zh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ii=i,Le===null&&(An=1,cu(e,Ji(i,e.current)))}function _x(){var e=zi.current;return e===null?!0:(ze&4194048)===ze?na===null:(ze&62914560)===ze||(ze&536870912)!==0?e===na:!1}function yx(){var e=k.H;return k.H=Ll,e===null?Ll:e}function bx(){var e=k.A;return k.A=qb,e}function bu(){An=4,Ds||(ze&4194048)!==ze&&zi.current!==null||(xo=!0),(Us&134217727)===0&&(wr&134217727)===0||pn===null||Ps(pn,ze,Fi,!1)}function sd(e,i,r){var l=Ze;Ze|=2;var h=yx(),m=bx();(pn!==e||ze!==i)&&(_u=null,yo(e,i)),i=!1;var S=An;t:do try{if(Qe!==0&&Le!==null){var L=Le,J=Ii;switch(Qe){case 8:ad(),S=6;break t;case 3:case 2:case 9:case 6:zi.current===null&&(i=!0);var yt=Qe;if(Qe=0,Ii=null,bo(e,L,J,yt),r&&xo){S=0;break t}break;default:yt=Qe,Qe=0,Ii=null,bo(e,L,J,yt)}}Kb(),S=An;break}catch(Nt){vx(e,Nt)}while(!0);return i&&e.shellSuspendCounter++,Xa=vr=null,Ze=l,k.H=h,k.A=m,Le===null&&(pn=null,ze=0,Vc()),S}function Kb(){for(;Le!==null;)Sx(Le)}function Qb(e,i){var r=Ze;Ze|=2;var l=yx(),h=bx();pn!==e||ze!==i?(_u=null,vu=A()+500,yo(e,i)):xo=ee(e,i);t:do try{if(Qe!==0&&Le!==null){i=Le;var m=Ii;e:switch(Qe){case 1:Qe=0,Ii=null,bo(e,i,m,1);break;case 2:case 9:if(N0(m)){Qe=0,Ii=null,Mx(i);break}i=function(){Qe!==2&&Qe!==9||pn!==e||(Qe=7),Aa(e)},m.then(i,i);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:N0(m)?(Qe=0,Ii=null,Mx(i)):(Qe=0,Ii=null,bo(e,i,m,7));break;case 5:var S=null;switch(Le.tag){case 26:S=Le.memoizedState;case 5:case 27:var L=Le;if(S?lv(S):L.stateNode.complete){Qe=0,Ii=null;var J=L.sibling;if(J!==null)Le=J;else{var yt=L.return;yt!==null?(Le=yt,Su(yt)):Le=null}break e}}Qe=0,Ii=null,bo(e,i,m,5);break;case 6:Qe=0,Ii=null,bo(e,i,m,6);break;case 8:ad(),An=6;break t;default:throw Error(a(462))}}Jb();break}catch(Nt){vx(e,Nt)}while(!0);return Xa=vr=null,k.H=l,k.A=h,Ze=r,Le!==null?0:(pn=null,ze=0,Vc(),An)}function Jb(){for(;Le!==null&&!Qt();)Sx(Le)}function Sx(e){var i=Wg(e.alternate,e,ts);e.memoizedProps=e.pendingProps,i===null?Su(e):Le=i}function Mx(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Hg(r,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=Hg(r,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:yh(i);default:Yg(r,i),i=Le=b0(i,ts),i=Wg(r,i,ts)}e.memoizedProps=e.pendingProps,i===null?Su(e):Le=i}function bo(e,i,r,l){Xa=vr=null,yh(i),co=null,Tl=0;var h=i.return;try{if(Hb(e,h,i,r,ze)){An=1,cu(e,Ji(r,e.current)),Le=null;return}}catch(m){if(h!==null)throw Le=h,m;An=1,cu(e,Ji(r,e.current)),Le=null;return}i.flags&32768?(He||l===1?e=!0:xo||(ze&536870912)!==0?e=!1:(Ds=e=!0,(l===2||l===9||l===3||l===6)&&(l=zi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ex(i,e)):Su(i)}function Su(e){var i=e;do{if((i.flags&32768)!==0){Ex(i,Ds);return}e=i.return;var r=kb(i.alternate,i,ts);if(r!==null){Le=r;return}if(i=i.sibling,i!==null){Le=i;return}Le=i=e}while(i!==null);An===0&&(An=5)}function Ex(e,i){do{var r=Xb(e.alternate,e);if(r!==null){r.flags&=32767,Le=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Le=e;return}Le=e=r}while(e!==null);An=6,Le=null}function Tx(e,i,r,l,h,m,S,L,J){e.cancelPendingCommit=null;do Mu();while(Xn!==0);if((Ze&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=qf,hi(e,r,m,S,L,J),e===pn&&(Le=pn=null,ze=0),_o=i,Ls=e,es=r,ed=m,nd=h,px=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nS(Et,function(){return Dx(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,h=Q.p,Q.p=2,S=Ze,Ze|=4;try{jb(e,i,r)}finally{Ze=S,Q.p=h,k.T=l}}Xn=1,Ax(),wx(),Cx()}}function Ax(){if(Xn===1){Xn=0;var e=Ls,i=_o,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=k.T,k.T=null;var l=Q.p;Q.p=2;var h=Ze;Ze|=4;try{rx(i,e);var m=xd,S=h0(e.containerInfo),L=m.focusedElem,J=m.selectionRange;if(S!==L&&L&&L.ownerDocument&&f0(L.ownerDocument.documentElement,L)){if(J!==null&&Gf(L)){var yt=J.start,Nt=J.end;if(Nt===void 0&&(Nt=yt),"selectionStart"in L)L.selectionStart=yt,L.selectionEnd=Math.min(Nt,L.value.length);else{var Ht=L.ownerDocument||document,bt=Ht&&Ht.defaultView||window;if(bt.getSelection){var Ct=bt.getSelection(),ue=L.textContent.length,ve=Math.min(J.start,ue),rn=J.end===void 0?ve:Math.min(J.end,ue);!Ct.extend&&ve>rn&&(S=rn,rn=ve,ve=S);var lt=u0(L,ve),it=u0(L,rn);if(lt&&it&&(Ct.rangeCount!==1||Ct.anchorNode!==lt.node||Ct.anchorOffset!==lt.offset||Ct.focusNode!==it.node||Ct.focusOffset!==it.offset)){var _t=Ht.createRange();_t.setStart(lt.node,lt.offset),Ct.removeAllRanges(),ve>rn?(Ct.addRange(_t),Ct.extend(it.node,it.offset)):(_t.setEnd(it.node,it.offset),Ct.addRange(_t))}}}}for(Ht=[],Ct=L;Ct=Ct.parentNode;)Ct.nodeType===1&&Ht.push({element:Ct,left:Ct.scrollLeft,top:Ct.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Ht.length;L++){var Bt=Ht[L];Bt.element.scrollLeft=Bt.left,Bt.element.scrollTop=Bt.top}}Ou=!!gd,xd=gd=null}finally{Ze=h,Q.p=l,k.T=r}}e.current=i,Xn=2}}function wx(){if(Xn===2){Xn=0;var e=Ls,i=_o,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=k.T,k.T=null;var l=Q.p;Q.p=2;var h=Ze;Ze|=4;try{ex(e,i.alternate,i)}finally{Ze=h,Q.p=l,k.T=r}}Xn=3}}function Cx(){if(Xn===4||Xn===3){Xn=0,F();var e=Ls,i=_o,r=es,l=px;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Xn=5:(Xn=0,_o=Ls=null,Rx(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ns=null),un(r),i=i.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(It,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=k.T,h=Q.p,Q.p=2,k.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var L=l[S];m(L.value,{componentStack:L.stack})}}finally{k.T=i,Q.p=h}}(es&3)!==0&&Mu(),Aa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===id?Gl++:(Gl=0,id=e):Gl=0,kl(0)}}function Rx(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ml(i)))}function Mu(){return Ax(),wx(),Cx(),Dx()}function Dx(){if(Xn!==5)return!1;var e=Ls,i=ed;ed=0;var r=un(es),l=k.T,h=Q.p;try{Q.p=32>r?32:r,k.T=null,r=nd,nd=null;var m=Ls,S=es;if(Xn=0,_o=Ls=null,es=0,(Ze&6)!==0)throw Error(a(331));var L=Ze;if(Ze|=4,fx(m.current),lx(m,m.current,S,r),Ze=L,kl(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(It,m)}catch{}return!0}finally{Q.p=h,k.T=l,Rx(e,i)}}function Ux(e,i,r){i=Ji(r,i),i=Oh(e.stateNode,i,2),e=As(e,i,2),e!==null&&(xn(e,2),Aa(e))}function Je(e,i,r){if(e.tag===3)Ux(e,e,r);else for(;i!==null;){if(i.tag===3){Ux(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ns===null||!Ns.has(l))){e=Ji(r,e),r=Ng(2),l=As(i,r,2),l!==null&&(Lg(r,l,i,e),xn(l,2),Aa(l));break}}i=i.return}}function rd(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Yb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(Jh=!0,h.add(r),e=$b.bind(null,e,i,r),i.then(e,e))}function $b(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,pn===e&&(ze&r)===r&&(An===4||An===3&&(ze&62914560)===ze&&300>A()-xu?(Ze&2)===0&&yo(e,0):$h|=r,vo===ze&&(vo=0)),Aa(e)}function Nx(e,i){i===0&&(i=Xe()),e=mr(e,i),e!==null&&(xn(e,i),Aa(e))}function tS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Nx(e,r)}function eS(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Nx(e,r)}function nS(e,i){return wt(e,i)}var Eu=null,So=null,od=!1,Tu=!1,ld=!1,Os=0;function Aa(e){e!==So&&e.next===null&&(So===null?Eu=So=e:So=So.next=e),Tu=!0,od||(od=!0,aS())}function kl(e,i){if(!ld&&Tu){ld=!0;do for(var r=!1,l=Eu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var S=l.suspendedLanes,L=l.pingedLanes;m=(1<<31-le(42|e)+1)-1,m&=h&~(S&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,zx(l,m))}else m=ze,m=Ft(l,l===pn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||ee(l,m)||(r=!0,zx(l,m));l=l.next}while(r);ld=!1}}function iS(){Lx()}function Lx(){Tu=od=!1;var e=0;Os!==0&&pS()&&(e=Os);for(var i=A(),r=null,l=Eu;l!==null;){var h=l.next,m=Px(l,i);m===0?(l.next=null,r===null?Eu=h:r.next=h,h===null&&(So=r)):(r=l,(e!==0||(m&3)!==0)&&(Tu=!0)),l=h}Xn!==0&&Xn!==5||kl(e),Os!==0&&(Os=0)}function Px(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-le(m),L=1<<S,J=h[S];J===-1?((L&r)===0||(L&l)!==0)&&(h[S]=de(L,i)):J<=i&&(e.expiredLanes|=L),m&=~L}if(i=pn,r=ze,r=Ft(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zt(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ee(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&zt(l),un(r)){case 2:case 8:r=Ut;break;case 32:r=Et;break;case 268435456:r=Zt;break;default:r=Et}return l=Ox.bind(null,e),r=wt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&zt(l),e.callbackPriority=2,e.callbackNode=null,2}function Ox(e,i){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Mu()&&e.callbackNode!==r)return null;var l=ze;return l=Ft(e,e===pn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(gx(e,l,i),Px(e,A()),e.callbackNode!=null&&e.callbackNode===r?Ox.bind(null,e):null)}function zx(e,i){if(Mu())return null;gx(e,i,!0)}function aS(){gS(function(){(Ze&6)!==0?wt(Rt,iS):Lx()})}function cd(){if(Os===0){var e=ro;e===0&&(e=Jt,Jt<<=1,(Jt&261888)===0&&(Jt=256)),Os=e}return Os}function Bx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gs(""+e)}function Ix(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function sS(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=Bx((h[Rn]||null).action),S=l.submitter;S&&(i=(i=S[Rn]||null)?Bx(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var L=new Kr("action","action",null,l,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var J=S?Ix(h,S):new FormData(h);Rh(r,{pending:!0,data:J,method:h.method,action:m},null,J)}}else typeof m=="function"&&(L.preventDefault(),J=S?Ix(h,S):new FormData(h),Rh(r,{pending:!0,data:J,method:h.method,action:m},m,J))},currentTarget:h}]})}}for(var ud=0;ud<Wf.length;ud++){var fd=Wf[ud],rS=fd.toLowerCase(),oS=fd[0].toUpperCase()+fd.slice(1);da(rS,"on"+oS)}da(m0,"onAnimationEnd"),da(g0,"onAnimationIteration"),da(x0,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(Mb,"onTransitionRun"),da(Eb,"onTransitionStart"),da(Tb,"onTransitionCancel"),da(v0,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function Fx(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var L=l[S],J=L.instance,yt=L.currentTarget;if(L=L.listener,J!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=yt;try{m(h)}catch(Nt){Hc(Nt)}h.currentTarget=null,m=J}else for(S=0;S<l.length;S++){if(L=l[S],J=L.instance,yt=L.currentTarget,L=L.listener,J!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=yt;try{m(h)}catch(Nt){Hc(Nt)}h.currentTarget=null,m=J}}}}function Pe(e,i){var r=i[ms];r===void 0&&(r=i[ms]=new Set);var l=e+"__bubble";r.has(l)||(Hx(i,e,2,!1),r.add(l))}function hd(e,i,r){var l=0;i&&(l|=4),Hx(r,e,l,i)}var Au="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[Au]){e[Au]=!0,ht.forEach(function(r){r!=="selectionchange"&&(lS.has(r)||hd(r,!1,e),hd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Au]||(i[Au]=!0,hd("selectionchange",!1,i))}}function Hx(e,i,r,l){switch(mv(i)){case 2:var h=zS;break;case 8:h=BS;break;default:h=Cd}r=h.bind(null,i,r,e),h=void 0,!dl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function pd(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var L=l.stateNode.containerInfo;if(L===h)break;if(S===4)for(S=l.return;S!==null;){var J=S.tag;if((J===3||J===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;L!==null;){if(S=ye(L),S===null)return;if(J=S.tag,J===5||J===6||J===26||J===27){l=m=S;continue t}L=L.parentNode}}l=l.return}zc(function(){var yt=m,Nt=qr(r),Ht=[];t:{var bt=_0.get(e);if(bt!==void 0){var Ct=Kr,ue=e;switch(e){case"keypress":if(Zr(r)===0)break t;case"keydown":case"keyup":Ct=ml;break;case"focusin":ue="focus",Ct=gn;break;case"focusout":ue="blur",Ct=gn;break;case"beforeblur":case"afterblur":Ct=gn;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ct=Fe;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ct=Ge;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ct=ab;break;case m0:case g0:case x0:Ct=Bn;break;case v0:Ct=rb;break;case"scroll":case"scrollend":Ct=U;break;case"wheel":Ct=lb;break;case"copy":case"cut":case"paste":Ct=vs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ct=Km;break;case"toggle":case"beforetoggle":Ct=ub}var ve=(i&4)!==0,rn=!ve&&(e==="scroll"||e==="scrollend"),lt=ve?bt!==null?bt+"Capture":null:bt;ve=[];for(var it=yt,_t;it!==null;){var Bt=it;if(_t=Bt.stateNode,Bt=Bt.tag,Bt!==5&&Bt!==26&&Bt!==27||_t===null||lt===null||(Bt=ur(it,lt),Bt!=null&&ve.push(jl(it,Bt,_t))),rn)break;it=it.return}0<ve.length&&(bt=new Ct(bt,ue,null,r,Nt),Ht.push({event:bt,listeners:ve}))}}if((i&7)===0){t:{if(bt=e==="mouseover"||e==="pointerover",Ct=e==="mouseout"||e==="pointerout",bt&&r!==fl&&(ue=r.relatedTarget||r.fromElement)&&(ye(ue)||ue[Di]))break t;if((Ct||bt)&&(bt=Nt.window===Nt?Nt:(bt=Nt.ownerDocument)?bt.defaultView||bt.parentWindow:window,Ct?(ue=r.relatedTarget||r.toElement,Ct=yt,ue=ue?ye(ue):null,ue!==null&&(rn=c(ue),ve=ue.tag,ue!==rn||ve!==5&&ve!==27&&ve!==6)&&(ue=null)):(Ct=null,ue=yt),Ct!==ue)){if(ve=Fe,Bt="onMouseLeave",lt="onMouseEnter",it="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Km,Bt="onPointerLeave",lt="onPointerEnter",it="pointer"),rn=Ct==null?bt:rt(Ct),_t=ue==null?bt:rt(ue),bt=new ve(Bt,it+"leave",Ct,r,Nt),bt.target=rn,bt.relatedTarget=_t,Bt=null,ye(Nt)===yt&&(ve=new ve(lt,it+"enter",ue,r,Nt),ve.target=_t,ve.relatedTarget=rn,Bt=ve),rn=Bt,Ct&&ue)e:{for(ve=cS,lt=Ct,it=ue,_t=0,Bt=lt;Bt;Bt=ve(Bt))_t++;Bt=0;for(var me=it;me;me=ve(me))Bt++;for(;0<_t-Bt;)lt=ve(lt),_t--;for(;0<Bt-_t;)it=ve(it),Bt--;for(;_t--;){if(lt===it||it!==null&&lt===it.alternate){ve=lt;break e}lt=ve(lt),it=ve(it)}ve=null}else ve=null;Ct!==null&&Vx(Ht,bt,Ct,ve,!1),ue!==null&&rn!==null&&Vx(Ht,rn,ue,ve,!0)}}t:{if(bt=yt?rt(yt):window,Ct=bt.nodeName&&bt.nodeName.toLowerCase(),Ct==="select"||Ct==="input"&&bt.type==="file")var We=a0;else if(n0(bt))if(s0)We=yb;else{We=vb;var fe=xb}else Ct=bt.nodeName,!Ct||Ct.toLowerCase()!=="input"||bt.type!=="checkbox"&&bt.type!=="radio"?yt&&ul(yt.elementType)&&(We=a0):We=_b;if(We&&(We=We(e,yt))){i0(Ht,We,r,Nt);break t}fe&&fe(e,bt,yt),e==="focusout"&&yt&&bt.type==="number"&&yt.memoizedProps.value!=null&&On(bt,"number",bt.value)}switch(fe=yt?rt(yt):window,e){case"focusin":(n0(fe)||fe.contentEditable==="true")&&(Jr=fe,kf=yt,yl=null);break;case"focusout":yl=kf=Jr=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,d0(Ht,r,Nt);break;case"selectionchange":if(Sb)break;case"keydown":case"keyup":d0(Ht,r,Nt)}var Ce;if(Ff)t:{switch(e){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else Qr?t0(e,r)&&(Be="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Be="onCompositionStart");Be&&(Qm&&r.locale!=="ko"&&(Qr||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Qr&&(Ce=Bc()):(Sa=Nt,pl="value"in Sa?Sa.value:Sa.textContent,Qr=!0)),fe=wu(yt,Be),0<fe.length&&(Be=new Ki(Be,e,null,r,Nt),Ht.push({event:Be,listeners:fe}),Ce?Be.data=Ce:(Ce=e0(r),Ce!==null&&(Be.data=Ce)))),(Ce=hb?db(e,r):pb(e,r))&&(Be=wu(yt,"onBeforeInput"),0<Be.length&&(fe=new Ki("onBeforeInput","beforeinput",null,r,Nt),Ht.push({event:fe,listeners:Be}),fe.data=Ce)),sS(Ht,e,yt,r,Nt)}Fx(Ht,i)})}function jl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function wu(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=ur(e,r),h!=null&&l.unshift(jl(e,h,m)),h=ur(e,i),h!=null&&l.push(jl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function cS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vx(e,i,r,l,h){for(var m=i._reactName,S=[];r!==null&&r!==l;){var L=r,J=L.alternate,yt=L.stateNode;if(L=L.tag,J!==null&&J===l)break;L!==5&&L!==26&&L!==27||yt===null||(J=yt,h?(yt=ur(r,m),yt!=null&&S.unshift(jl(r,yt,J))):h||(yt=ur(r,m),yt!=null&&S.push(jl(r,yt,J)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Gx(e){return(typeof e=="string"?e:""+e).replace(uS,`
`).replace(fS,"")}function kx(e,i){return i=Gx(i),Gx(e)===i}function sn(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ui(e,""+l);break;case"className":Ie(e,"class",l);break;case"tabIndex":Ie(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(e,r,l);break;case"style":Pc(e,l,m);break;case"data":if(i!=="object"){Ie(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gs(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&sn(e,i,"name",h.name,h,null),sn(e,i,"formEncType",h.formEncType,h,null),sn(e,i,"formMethod",h.formMethod,h,null),sn(e,i,"formTarget",h.formTarget,h,null)):(sn(e,i,"encType",h.encType,h,null),sn(e,i,"method",h.method,h,null),sn(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gs(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=_i);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=gs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Te(e,"popover",l);break;case"xlinkActuate":Oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Bf.get(r)||r,Te(e,r,l))}}function md(e,i,r,l,h,m){switch(r){case"style":Pc(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&Ui(e,""+l);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Rn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Te(e,r,l)}}}function ti(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var S=r[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,m,S,r,null)}}h&&sn(e,i,"srcSet",r.srcSet,r,null),l&&sn(e,i,"src",r.src,r,null);return;case"input":Pe("invalid",e);var L=m=S=h=null,J=null,yt=null;for(l in r)if(r.hasOwnProperty(l)){var Nt=r[l];if(Nt!=null)switch(l){case"name":h=Nt;break;case"type":S=Nt;break;case"checked":J=Nt;break;case"defaultChecked":yt=Nt;break;case"value":m=Nt;break;case"defaultValue":L=Nt;break;case"children":case"dangerouslySetInnerHTML":if(Nt!=null)throw Error(a(137,i));break;default:sn(e,i,l,Nt,r,null)}}nn(e,m,L,J,yt,S,h,!1);return;case"select":Pe("invalid",e),l=S=m=null;for(h in r)if(r.hasOwnProperty(h)&&(L=r[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":S=L;break;case"multiple":l=L;default:sn(e,i,h,L,r,null)}i=m,r=S,e.multiple=!!l,i!=null?Dn(e,!!l,i,!1):r!=null&&Dn(e,!!l,r,!0);return;case"textarea":Pe("invalid",e),m=h=l=null;for(S in r)if(r.hasOwnProperty(S)&&(L=r[S],L!=null))switch(S){case"value":l=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:sn(e,i,S,L,r,null)}kn(e,l,h,m);return;case"option":for(J in r)if(r.hasOwnProperty(J)&&(l=r[J],l!=null))switch(J){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:sn(e,i,J,l,r,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(l=0;l<Xl.length;l++)Pe(Xl[l],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(yt in r)if(r.hasOwnProperty(yt)&&(l=r[yt],l!=null))switch(yt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,yt,l,r,null)}return;default:if(ul(i)){for(Nt in r)r.hasOwnProperty(Nt)&&(l=r[Nt],l!==void 0&&md(e,i,Nt,l,r,void 0));return}}for(L in r)r.hasOwnProperty(L)&&(l=r[L],l!=null&&sn(e,i,L,l,r,null))}function hS(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,S=null,L=null,J=null,yt=null,Nt=null;for(Ct in r){var Ht=r[Ct];if(r.hasOwnProperty(Ct)&&Ht!=null)switch(Ct){case"checked":break;case"value":break;case"defaultValue":J=Ht;default:l.hasOwnProperty(Ct)||sn(e,i,Ct,null,l,Ht)}}for(var bt in l){var Ct=l[bt];if(Ht=r[bt],l.hasOwnProperty(bt)&&(Ct!=null||Ht!=null))switch(bt){case"type":m=Ct;break;case"name":h=Ct;break;case"checked":yt=Ct;break;case"defaultChecked":Nt=Ct;break;case"value":S=Ct;break;case"defaultValue":L=Ct;break;case"children":case"dangerouslySetInnerHTML":if(Ct!=null)throw Error(a(137,i));break;default:Ct!==Ht&&sn(e,i,bt,Ct,l,Ht)}}Yi(e,S,L,J,yt,Nt,m,h);return;case"select":Ct=S=L=bt=null;for(m in r)if(J=r[m],r.hasOwnProperty(m)&&J!=null)switch(m){case"value":break;case"multiple":Ct=J;default:l.hasOwnProperty(m)||sn(e,i,m,null,l,J)}for(h in l)if(m=l[h],J=r[h],l.hasOwnProperty(h)&&(m!=null||J!=null))switch(h){case"value":bt=m;break;case"defaultValue":L=m;break;case"multiple":S=m;default:m!==J&&sn(e,i,h,m,l,J)}i=L,r=S,l=Ct,bt!=null?Dn(e,!!r,bt,!1):!!l!=!!r&&(i!=null?Dn(e,!!r,i,!0):Dn(e,!!r,r?[]:"",!1));return;case"textarea":Ct=bt=null;for(L in r)if(h=r[L],r.hasOwnProperty(L)&&h!=null&&!l.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:sn(e,i,L,null,l,h)}for(S in l)if(h=l[S],m=r[S],l.hasOwnProperty(S)&&(h!=null||m!=null))switch(S){case"value":bt=h;break;case"defaultValue":Ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&sn(e,i,S,h,l,m)}zn(e,bt,Ct);return;case"option":for(var ue in r)if(bt=r[ue],r.hasOwnProperty(ue)&&bt!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:sn(e,i,ue,null,l,bt)}for(J in l)if(bt=l[J],Ct=r[J],l.hasOwnProperty(J)&&bt!==Ct&&(bt!=null||Ct!=null))switch(J){case"selected":e.selected=bt&&typeof bt!="function"&&typeof bt!="symbol";break;default:sn(e,i,J,bt,l,Ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in r)bt=r[ve],r.hasOwnProperty(ve)&&bt!=null&&!l.hasOwnProperty(ve)&&sn(e,i,ve,null,l,bt);for(yt in l)if(bt=l[yt],Ct=r[yt],l.hasOwnProperty(yt)&&bt!==Ct&&(bt!=null||Ct!=null))switch(yt){case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(a(137,i));break;default:sn(e,i,yt,bt,l,Ct)}return;default:if(ul(i)){for(var rn in r)bt=r[rn],r.hasOwnProperty(rn)&&bt!==void 0&&!l.hasOwnProperty(rn)&&md(e,i,rn,void 0,l,bt);for(Nt in l)bt=l[Nt],Ct=r[Nt],!l.hasOwnProperty(Nt)||bt===Ct||bt===void 0&&Ct===void 0||md(e,i,Nt,bt,l,Ct);return}}for(var lt in r)bt=r[lt],r.hasOwnProperty(lt)&&bt!=null&&!l.hasOwnProperty(lt)&&sn(e,i,lt,null,l,bt);for(Ht in l)bt=l[Ht],Ct=r[Ht],!l.hasOwnProperty(Ht)||bt===Ct||bt==null&&Ct==null||sn(e,i,Ht,bt,l,Ct)}function Xx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,S=h.initiatorType,L=h.duration;if(m&&L&&Xx(S)){for(S=0,L=h.responseEnd,l+=1;l<r.length;l++){var J=r[l],yt=J.startTime;if(yt>L)break;var Nt=J.transferSize,Ht=J.initiatorType;Nt&&Xx(Ht)&&(J=J.responseEnd,S+=Nt*(J<L?1:(L-yt)/(J-yt)))}if(--l,i+=8*(m+S)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,xd=null;function Cu(e){return e.nodeType===9?e:e.ownerDocument}function jx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wx(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function vd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _d=null;function pS(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var qx=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Yx=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yx<"u"?function(e){return Yx.resolve(null).then(e).catch(xS)}:qx;function xS(e){setTimeout(function(){throw e})}function zs(e){return e==="head"}function Zx(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),Ao(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Wl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Wl(r);for(var m=r.firstChild;m;){var S=m.nextSibling,L=m.nodeName;m[qi]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}}else r==="body"&&Wl(e.ownerDocument.body);r=h}while(r);Ao(i)}function Kx(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function yd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),or(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function vS(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[qi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ia(e.nextSibling),e===null)break}return null}function _S(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=ia(e.nextSibling),e===null))return null;return e}function Qx(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ia(e.nextSibling),e===null))return null;return e}function bd(e){return e.data==="$?"||e.data==="$~"}function Sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ia(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Md=null;function Jx(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return ia(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function $x(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function tv(e,i,r){switch(i=Cu(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Wl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);or(e)}var aa=new Map,ev=new Set;function Ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ns=Q.d;Q.d={f:bS,r:SS,D:MS,C:ES,L:TS,m:AS,X:CS,S:wS,M:RS};function bS(){var e=ns.f(),i=yu();return e||i}function SS(e){var i=O(e);i!==null&&i.tag===5&&i.type==="form"?vg(i):ns.r(e)}var Mo=typeof document>"u"?null:document;function nv(e,i,r){var l=Mo;if(l&&typeof i=="string"&&i){var h=en(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),ev.has(h)||(ev.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ti(i,"link",e),vt(i),l.head.appendChild(i)))}}function MS(e){ns.D(e),nv("dns-prefetch",e,null)}function ES(e,i){ns.C(e,i),nv("preconnect",e,i)}function TS(e,i,r){ns.L(e,i,r);var l=Mo;if(l&&e&&i){var h='link[rel="preload"][as="'+en(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+en(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+en(r.imageSizes)+'"]')):h+='[href="'+en(e)+'"]';var m=h;switch(i){case"style":m=Eo(e);break;case"script":m=To(e)}aa.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),aa.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ql(m))||i==="script"&&l.querySelector(Yl(m))||(i=l.createElement("link"),ti(i,"link",e),vt(i),l.head.appendChild(i)))}}function AS(e,i){ns.m(e,i);var r=Mo;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+en(l)+'"][href="'+en(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=To(e)}if(!aa.has(m)&&(e=g({rel:"modulepreload",href:e},i),aa.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Yl(m)))return}l=r.createElement("link"),ti(l,"link",e),vt(l),r.head.appendChild(l)}}}function wS(e,i,r){ns.S(e,i,r);var l=Mo;if(l&&e){var h=St(l).hoistableStyles,m=Eo(e);i=i||"default";var S=h.get(m);if(!S){var L={loading:0,preload:null};if(S=l.querySelector(ql(m)))L.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=aa.get(m))&&Ed(e,r);var J=S=l.createElement("link");vt(J),ti(J,"link",e),J._p=new Promise(function(yt,Nt){J.onload=yt,J.onerror=Nt}),J.addEventListener("load",function(){L.loading|=1}),J.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Du(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:L},h.set(m,S)}}}function CS(e,i){ns.X(e,i);var r=Mo;if(r&&e){var l=St(r).hoistableScripts,h=To(e),m=l.get(h);m||(m=r.querySelector(Yl(h)),m||(e=g({src:e,async:!0},i),(i=aa.get(h))&&Td(e,i),m=r.createElement("script"),vt(m),ti(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function RS(e,i){ns.M(e,i);var r=Mo;if(r&&e){var l=St(r).hoistableScripts,h=To(e),m=l.get(h);m||(m=r.querySelector(Yl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=aa.get(h))&&Td(e,i),m=r.createElement("script"),vt(m),ti(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function iv(e,i,r,l){var h=(h=w.current)?Ru(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Eo(r.href),r=St(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Eo(r.href);var m=St(h).hoistableStyles,S=m.get(e);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=h.querySelector(ql(e)))&&!m._p&&(S.instance=m,S.state.loading=5),aa.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},aa.set(e,r),m||DS(h,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=To(r),r=St(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Eo(e){return'href="'+en(e)+'"'}function ql(e){return'link[rel="stylesheet"]['+e+"]"}function av(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function DS(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ti(i,"link",r),vt(i),e.head.appendChild(i))}function To(e){return'[src="'+en(e)+'"]'}function Yl(e){return"script[async]"+e}function sv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+en(r.href)+'"]');if(l)return i.instance=l,vt(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),vt(l),ti(l,"style",h),Du(l,r.precedence,e),i.instance=l;case"stylesheet":h=Eo(r.href);var m=e.querySelector(ql(h));if(m)return i.state.loading|=4,i.instance=m,vt(m),m;l=av(r),(h=aa.get(h))&&Ed(l,h),m=(e.ownerDocument||e).createElement("link"),vt(m);var S=m;return S._p=new Promise(function(L,J){S.onload=L,S.onerror=J}),ti(m,"link",l),i.state.loading|=4,Du(m,r.precedence,e),i.instance=m;case"script":return m=To(r.src),(h=e.querySelector(Yl(m)))?(i.instance=h,vt(h),h):(l=r,(h=aa.get(m))&&(l=g({},r),Td(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),vt(h),ti(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Du(l,r.precedence,e));return i.instance}function Du(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,S=0;S<l.length;S++){var L=l[S];if(L.dataset.precedence===i)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Uu=null;function rv(e,i,r){if(Uu===null){var l=new Map,h=Uu=new Map;h.set(r,l)}else h=Uu,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[qi]||m[tn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=e+S;var L=l.get(S);L?L.push(m):l.set(S,[m])}}return l}function ov(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function US(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function lv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Eo(l.href),m=i.querySelector(ql(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Nu.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,vt(m);return}m=i.ownerDocument||i,l=av(l),(h=aa.get(h))&&Ed(l,h),m=m.createElement("link"),vt(m);var S=m;S._p=new Promise(function(L,J){S.onload=L,S.onerror=J}),ti(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Nu.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ad=0;function LS(e,i){return e.stylesheets&&e.count===0&&Pu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Pu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Ad===0&&(Ad=62500*dS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ad?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Lu=null;function Pu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Lu=new Map,i.forEach(PS,e),Lu=null,Nu.call(e))}function PS(e,i){if(!(i.state.loading&4)){var r=Lu.get(e);if(r)var l=r.get(null);else{r=new Map,Lu.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var S=h[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}h=i.instance,S=h.getAttribute("data-precedence"),m=r.get(S)||l,m===l&&r.set(null,h),r.set(S,h),this.count++,l=Nu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Zl={$$typeof:T,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function OS(e,i,r,l,h,m,S,L,J){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=J,this.incompleteTransitions=new Map}function cv(e,i,r,l,h,m,S,L,J,yt,Nt,Ht){return e=new OS(e,i,r,S,J,yt,Nt,Ht,L),i=1,m===!0&&(i|=24),m=Oi(3,null,null,i),e.current=m,m.stateNode=e,i=sh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},ch(m),e}function uv(e){return e?(e=eo,e):eo}function fv(e,i,r,l,h,m){h=uv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ts(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=As(e,l,i),r!==null&&(Ei(r,e,i),wl(r,e,i))}function hv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function wd(e,i){hv(e,i),(e=e.alternate)&&hv(e,i)}function dv(e){if(e.tag===13||e.tag===31){var i=mr(e,67108864);i!==null&&Ei(i,e,67108864),wd(e,67108864)}}function pv(e){if(e.tag===13||e.tag===31){var i=Hi();i=Ri(i);var r=mr(e,i);r!==null&&Ei(r,e,i),wd(e,i)}}var Ou=!0;function zS(e,i,r,l){var h=k.T;k.T=null;var m=Q.p;try{Q.p=2,Cd(e,i,r,l)}finally{Q.p=m,k.T=h}}function BS(e,i,r,l){var h=k.T;k.T=null;var m=Q.p;try{Q.p=8,Cd(e,i,r,l)}finally{Q.p=m,k.T=h}}function Cd(e,i,r,l){if(Ou){var h=Rd(l);if(h===null)pd(e,i,l,zu,r),gv(e,l);else if(FS(h,e,i,r,l))l.stopPropagation();else if(gv(e,l),i&4&&-1<IS.indexOf(e)){for(;h!==null;){var m=O(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=kt(m.pendingLanes);if(S!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;S;){var J=1<<31-le(S);L.entanglements[1]|=J,S&=~J}Aa(m),(Ze&6)===0&&(vu=A()+500,kl(0))}}break;case 31:case 13:L=mr(m,2),L!==null&&Ei(L,m,2),yu(),wd(m,2)}if(m=Rd(l),m===null&&pd(e,i,l,zu,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else pd(e,i,l,null,r)}}function Rd(e){return e=qr(e),Dd(e)}var zu=null;function Dd(e){if(zu=null,e=ye(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return zu=e,null}function mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case Rt:return 2;case Ut:return 8;case Et:case ae:return 32;case Zt:return 268435456;default:return 32}default:return 32}}var Ud=!1,Bs=null,Is=null,Fs=null,Kl=new Map,Ql=new Map,Hs=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gv(e,i){switch(e){case"focusin":case"focusout":Bs=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":Fs=null;break;case"pointerover":case"pointerout":Kl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(i.pointerId)}}function Jl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=O(i),i!==null&&dv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function FS(e,i,r,l,h){switch(i){case"focusin":return Bs=Jl(Bs,e,i,r,l,h),!0;case"dragenter":return Is=Jl(Is,e,i,r,l,h),!0;case"mouseover":return Fs=Jl(Fs,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Kl.set(m,Jl(Kl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Ql.set(m,Jl(Ql.get(m)||null,e,i,r,l,h)),!0}return!1}function xv(e){var i=ye(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,za(e.priority,function(){pv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,za(e.priority,function(){pv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Rd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);fl=l,r.target.dispatchEvent(l),fl=null}else return i=O(r),i!==null&&dv(i),e.blockedOn=r,!1;i.shift()}return!0}function vv(e,i,r){Bu(e)&&r.delete(i)}function HS(){Ud=!1,Bs!==null&&Bu(Bs)&&(Bs=null),Is!==null&&Bu(Is)&&(Is=null),Fs!==null&&Bu(Fs)&&(Fs=null),Kl.forEach(vv),Ql.forEach(vv)}function Iu(e,i){e.blockedOn===i&&(e.blockedOn=null,Ud||(Ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,HS)))}var Fu=null;function _v(e){Fu!==e&&(Fu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Fu===e&&(Fu=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Dd(l||r)===null)continue;break}var m=O(r);m!==null&&(e.splice(i,3),i-=3,Rh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function Ao(e){function i(J){return Iu(J,e)}Bs!==null&&Iu(Bs,e),Is!==null&&Iu(Is,e),Fs!==null&&Iu(Fs,e),Kl.forEach(i),Ql.forEach(i);for(var r=0;r<Hs.length;r++){var l=Hs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hs.length&&(r=Hs[0],r.blockedOn===null);)xv(r),r.blockedOn===null&&Hs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],S=h[Rn]||null;if(typeof m=="function")S||_v(r);else if(S){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,S=m[Rn]||null)L=S.formAction;else if(Dd(h)!==null)continue}else L=S.action;typeof L=="function"?r[l+1]=L:(r.splice(l,3),l-=3),_v(r)}}}function yv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return h=S})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Nd(e){this._internalRoot=e}Hu.prototype.render=Nd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Hi();fv(r,l,e,i,null,null)},Hu.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;fv(e.current,2,null,e,null,null),yu(),i[Di]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var i=rr();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Hs.length&&i!==0&&i<Hs[r].priority;r++);Hs.splice(r,0,e),r===0&&xv(e)}};var bv=t.version;if(bv!=="19.2.5")throw Error(a(527,bv,"19.2.5"));Q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{It=Vu.inject(VS),Xt=Vu}catch{}}return tc.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",h=Cg,m=Rg,S=Dg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=cv(e,1,!1,null,null,r,l,null,h,m,S,yv),e[Di]=i.current,dd(e),new Nd(i)},tc.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,h="",m=Cg,S=Rg,L=Dg,J=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(L=r.onRecoverableError),r.formState!==void 0&&(J=r.formState)),i=cv(e,1,!0,i,r??null,l,h,J,m,S,L,yv),i.context=uv(null),r=i.current,l=Hi(),l=Ri(l),h=Ts(l),h.callback=null,As(r,h,l),r=l,i.current.lanes=r,xn(i,r),Aa(i),e[Di]=i.current,dd(e),new Hu(i)},tc.version="19.2.5",tc}var Uv;function QS(){if(Uv)return Od.exports;Uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Od.exports=KS(),Od.exports}var JS=QS();const $S="modulepreload",tM=function(s,t){return new URL(s,t).href},Nv={},Cm=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let d=function(x){return Promise.all(x.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const u=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");o=d(n.map(x=>{if(x=tM(x,a),x in Nv)return;Nv[x]=!0;const g=x.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(a)for(let M=u.length-1;M>=0;M--){const E=u[M];if(E.href===x&&(!g||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${x}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":$S,g||(y.as="script"),y.crossOrigin="",y.href=x,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((M,E)=>{y.addEventListener("load",M),y.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${x}`)))})}))}function c(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&c(f.reason);return t().catch(c)})},eM=""+new URL("consola-DaLUYZpc.ttf",import.meta.url).href,nM=""+new URL("arial-DbAuqWep.ttf",import.meta.url).href,iM=""+new URL("comic-VC-8Dkdn.ttf",import.meta.url).href,aM=""+new URL("georgia-0VJ1LdWi.ttf",import.meta.url).href,sM=""+new URL("impact-C5IAp9Ei.ttf",import.meta.url).href;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="181",hs={ROTATE:0,DOLLY:1,PAN:2},qo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rM=0,Lv=1,oM=2,hy=1,lM=2,us=3,nr=0,ui=1,ra=2,ca=0,Yo=1,Rf=2,Pv=3,Ov=4,cM=5,Or=100,uM=101,fM=102,hM=103,dM=104,pM=200,mM=201,gM=202,xM=203,Np=204,Lp=205,vM=206,_M=207,yM=208,bM=209,SM=210,MM=211,EM=212,TM=213,AM=214,Pp=0,Op=1,zp=2,Jo=3,Bp=4,Ip=5,Fp=6,Hp=7,Dm=0,wM=1,CM=2,er=0,RM=1,DM=2,UM=3,NM=4,LM=5,PM=6,OM=7,dy=300,$o=301,tl=302,Vp=303,Gp=304,Pf=306,ps=1e3,Xi=1001,kp=1002,ji=1003,zM=1004,Gu=1005,la=1006,Fd=1007,Br=1008,Pa=1009,py=1010,my=1011,Sc=1012,Um=1013,Hr=1014,Ua=1015,ci=1016,Nm=1017,Lm=1018,Mc=1020,gy=35902,xy=35899,vy=1021,_y=1022,ya=1023,Ec=1026,Tc=1027,Pm=1028,Om=1029,zm=1030,Bm=1031,Im=1033,Ef=33776,Tf=33777,Af=33778,wf=33779,Xp=35840,jp=35841,Wp=35842,qp=35843,Yp=36196,Zp=37492,Kp=37496,Qp=37808,Jp=37809,$p=37810,tm=37811,em=37812,nm=37813,im=37814,am=37815,sm=37816,rm=37817,om=37818,lm=37819,cm=37820,um=37821,fm=36492,hm=36494,dm=36495,pm=36283,mm=36284,gm=36285,xm=36286,BM=3200,yy=3201,Fm=0,IM=1,Ks="",xi="srgb",el="srgb-linear",Df="linear",on="srgb",wo=7680,zv=519,FM=512,HM=513,VM=514,by=515,GM=516,kM=517,XM=518,jM=519,vm=35044,Bv="300 es",Na=2e3,Uf=2001;function Sy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function WM(){const s=Ac("canvas");return s.style.display="block",s}const Iv={};function Nf(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ee(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Cn(...s){const t="THREE."+s.shift();console.error(t,...s)}function wc(...s){const t=s.join(" ");t in Iv||(Iv[t]=!0,Ee(...s))}function qM(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Xr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fv=1234567;const Zo=Math.PI/180,Cc=180/Math.PI;function La(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(oi[s&255]+oi[s>>8&255]+oi[s>>16&255]+oi[s>>24&255]+"-"+oi[t&255]+oi[t>>8&255]+"-"+oi[t>>16&15|64]+oi[t>>24&255]+"-"+oi[n&63|128]+oi[n>>8&255]+"-"+oi[n>>16&255]+oi[n>>24&255]+oi[a&255]+oi[a>>8&255]+oi[a>>16&255]+oi[a>>24&255]).toLowerCase()}function Se(s,t,n){return Math.max(t,Math.min(n,s))}function Hm(s,t){return(s%t+t)%t}function YM(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function ZM(s,t,n){return s!==t?(n-s)/(t-s):0}function pc(s,t,n){return(1-n)*s+n*t}function KM(s,t,n,a){return pc(s,t,1-Math.exp(-n*a))}function QM(s,t=1){return t-Math.abs(Hm(s,t*2)-t)}function JM(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function $M(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function t1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function e1(s,t){return s+Math.random()*(t-s)}function n1(s){return s*(.5-Math.random())}function i1(s){s!==void 0&&(Fv=s);let t=Fv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a1(s){return s*Zo}function s1(s){return s*Cc}function r1(s){return(s&s-1)===0&&s!==0}function o1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function l1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function c1(s,t,n,a,o){const c=Math.cos,u=Math.sin,f=c(n/2),p=u(n/2),d=c((t+a)/2),x=u((t+a)/2),g=c((t-a)/2),v=u((t-a)/2),y=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":s.set(f*x,p*g,p*v,f*d);break;case"YZY":s.set(p*v,f*x,p*g,f*d);break;case"ZXZ":s.set(p*g,p*v,f*x,f*d);break;case"XZX":s.set(f*x,p*M,p*y,f*d);break;case"YXY":s.set(p*y,f*x,p*M,f*d);break;case"ZYZ":s.set(p*M,p*y,f*x,f*d);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function _a(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const My={DEG2RAD:Zo,RAD2DEG:Cc,generateUUID:La,clamp:Se,euclideanModulo:Hm,mapLinear:YM,inverseLerp:ZM,lerp:pc,damp:KM,pingpong:QM,smoothstep:JM,smootherstep:$M,randInt:t1,randFloat:e1,randFloatSpread:n1,seededRandom:i1,degToRad:a1,radToDeg:s1,isPowerOfTwo:r1,ceilPowerOfTwo:o1,floorPowerOfTwo:l1,setQuaternionFromProperEuler:c1,normalize:$e,denormalize:_a};class Mt{constructor(t=0,n=0){Mt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let p=a[o+0],d=a[o+1],x=a[o+2],g=a[o+3],v=c[u+0],y=c[u+1],M=c[u+2],E=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=x,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=E;return}if(g!==E||p!==v||d!==y||x!==M){let b=p*v+d*y+x*M+g*E;b<0&&(v=-v,y=-y,M=-M,E=-E,b=-b);let _=1-f;if(b<.9995){const I=Math.acos(b),T=Math.sin(I);_=Math.sin(_*I)/T,f=Math.sin(f*I)/T,p=p*_+v*f,d=d*_+y*f,x=x*_+M*f,g=g*_+E*f}else{p=p*_+v*f,d=d*_+y*f,x=x*_+M*f,g=g*_+E*f;const I=1/Math.sqrt(p*p+d*d+x*x+g*g);p*=I,d*=I,x*=I,g*=I}}t[n]=p,t[n+1]=d,t[n+2]=x,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],x=a[o+3],g=c[u],v=c[u+1],y=c[u+2],M=c[u+3];return t[n]=f*M+x*g+p*y-d*v,t[n+1]=p*M+x*v+d*g-f*y,t[n+2]=d*M+x*y+f*v-p*g,t[n+3]=x*M-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),x=f(o/2),g=f(c/2),v=p(a/2),y=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=v*x*g+d*y*M,this._y=d*y*g-v*x*M,this._z=d*x*M+v*y*g,this._w=d*x*g-v*y*M;break;case"YXZ":this._x=v*x*g+d*y*M,this._y=d*y*g-v*x*M,this._z=d*x*M-v*y*g,this._w=d*x*g+v*y*M;break;case"ZXY":this._x=v*x*g-d*y*M,this._y=d*y*g+v*x*M,this._z=d*x*M+v*y*g,this._w=d*x*g-v*y*M;break;case"ZYX":this._x=v*x*g-d*y*M,this._y=d*y*g+v*x*M,this._z=d*x*M-v*y*g,this._w=d*x*g+v*y*M;break;case"YZX":this._x=v*x*g+d*y*M,this._y=d*y*g+v*x*M,this._z=d*x*M-v*y*g,this._w=d*x*g-v*y*M;break;case"XZY":this._x=v*x*g-d*y*M,this._y=d*y*g-v*x*M,this._z=d*x*M+v*y*g,this._w=d*x*g+v*y*M;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],x=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(x-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,x=n._w;return this._x=a*x+u*f+o*d-c*p,this._y=o*x+u*p+c*f-a*d,this._z=c*x+u*d+a*p-o*f,this._w=u*x-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),x=Math.sin(d);p=Math.sin(p*d)/x,n=Math.sin(n*d)/x,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,n=0,a=0){Y.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Hv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Hv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),x=2*(f*n-c*o),g=2*(c*a-u*n);return this.x=n+p*d+u*g-f*x,this.y=a+p*x+f*d-c*g,this.z=o+p*g+c*x-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new Y,Hv=new Vr;class be{constructor(t,n,a,o,c,u,f,p,d){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d)}set(t,n,a,o,c,u,f,p,d){const x=this.elements;return x[0]=t,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=p,x[6]=a,x[7]=u,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],x=a[4],g=a[7],v=a[2],y=a[5],M=a[8],E=o[0],b=o[3],_=o[6],I=o[1],T=o[4],P=o[7],G=o[2],B=o[5],H=o[8];return c[0]=u*E+f*I+p*G,c[3]=u*b+f*T+p*B,c[6]=u*_+f*P+p*H,c[1]=d*E+x*I+g*G,c[4]=d*b+x*T+g*B,c[7]=d*_+x*P+g*H,c[2]=v*E+y*I+M*G,c[5]=v*b+y*T+M*B,c[8]=v*_+y*P+M*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],x=t[8];return n*u*x-n*f*d-a*c*x+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],x=t[8],g=x*u-f*d,v=f*p-x*c,y=d*c-u*p,M=n*g+a*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=g*E,t[1]=(o*d-x*a)*E,t[2]=(f*a-o*u)*E,t[3]=v*E,t[4]=(x*n-o*p)*E,t[5]=(o*c-f*n)*E,t[6]=y*E,t[7]=(a*p-d*n)*E,t[8]=(u*n-a*c)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Vd.makeScale(t,n)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new be,Vv=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gv=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u1(){const s={enabled:!0,workingColorSpace:el,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===on&&(o.r=ds(o.r),o.g=ds(o.g),o.b=ds(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===on&&(o.r=Ko(o.r),o.g=Ko(o.g),o.b=Ko(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ks?Df:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[el]:{primaries:t,whitePoint:a,transfer:Df,toXYZ:Vv,fromXYZ:Gv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:a,transfer:on,toXYZ:Vv,fromXYZ:Gv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Ye=u1();function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ko(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Co;class f1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Co===void 0&&(Co=Ac("canvas")),Co.width=t.width,Co.height=t.height;const o=Co.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Co}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ac("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ds(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ds(n[a]/255)*255):n[a]=ds(n[a]);return{data:n,width:t.width,height:t.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let h1=0;class Vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=La(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Gd(o[u].image)):c.push(Gd(o[u]))}else c=Gd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let d1=0;const kd=new Y;class ai extends Xr{constructor(t=ai.DEFAULT_IMAGE,n=ai.DEFAULT_MAPPING,a=Xi,o=Xi,c=la,u=Br,f=ya,p=Pa,d=ai.DEFAULT_ANISOTROPY,x=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=La(),this.name="",this.source=new Vm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){Ee(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ee(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ps:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case kp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ps:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case kp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=dy;ai.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,n=0,a=0,o=1){ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],x=p[4],g=p[8],v=p[1],y=p[5],M=p[9],E=p[2],b=p[6],_=p[10];if(Math.abs(x-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-b)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+b)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(d+1)/2,P=(y+1)/2,G=(_+1)/2,B=(x+v)/4,H=(g+E)/4,$=(M+b)/4;return T>P&&T>G?T<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(T),o=B/a,c=H/a):P>G?P<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),a=B/o,c=$/o):G<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),a=H/c,o=$/c),this.set(a,o,c,n),this}let I=Math.sqrt((b-M)*(b-M)+(g-E)*(g-E)+(v-x)*(v-x));return Math.abs(I)<.001&&(I=1),this.x=(b-M)/I,this.y=(g-E)/I,this.z=(v-x)/I,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p1 extends Xr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:la,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ke(0,0,t,n),this.scissorTest=!1,this.viewport=new ke(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new ai(o);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:la,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Vm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends p1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Ey extends ai{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=ji,this.minFilter=ji,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m1 extends ai{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=ji,this.minFilter=ji,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ga.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ga.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ga.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ga):ga.fromBufferAttribute(c,u),ga.applyMatrix4(t.matrixWorld),this.expandByPoint(ga);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ku.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ku.copy(a.boundingBox)),ku.applyMatrix4(t.matrixWorld),this.union(ku)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ga),ga.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ec),Xu.subVectors(this.max,ec),Ro.subVectors(t.a,ec),Do.subVectors(t.b,ec),Uo.subVectors(t.c,ec),Gs.subVectors(Do,Ro),ks.subVectors(Uo,Do),Cr.subVectors(Ro,Uo);let n=[0,-Gs.z,Gs.y,0,-ks.z,ks.y,0,-Cr.z,Cr.y,Gs.z,0,-Gs.x,ks.z,0,-ks.x,Cr.z,0,-Cr.x,-Gs.y,Gs.x,0,-ks.y,ks.x,0,-Cr.y,Cr.x,0];return!Xd(n,Ro,Do,Uo,Xu)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,Ro,Do,Uo,Xu))?!1:(ju.crossVectors(Gs,ks),n=[ju.x,ju.y,ju.z],Xd(n,Ro,Do,Uo,Xu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ga).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ga).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const is=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ga=new Y,ku=new Wi,Ro=new Y,Do=new Y,Uo=new Y,Gs=new Y,ks=new Y,Cr=new Y,ec=new Y,Xu=new Y,ju=new Y,Rr=new Y;function Xd(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Rr.fromArray(s,c);const f=o.x*Math.abs(Rr.x)+o.y*Math.abs(Rr.y)+o.z*Math.abs(Rr.z),p=t.dot(Rr),d=n.dot(Rr),x=a.dot(Rr);if(Math.max(-Math.max(p,d,x),Math.min(p,d,x))>f)return!1}return!0}const g1=new Wi,nc=new Y,jd=new Y;class ir{constructor(t=new Y,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):g1.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nc.subVectors(t,this.center);const n=nc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(nc,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nc.copy(t.center).add(jd)),this.expandByPoint(nc.copy(t.center).sub(jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const as=new Y,Wd=new Y,Wu=new Y,Xs=new Y,qd=new Y,qu=new Y,Yd=new Y;class Ty{constructor(t=new Y,n=new Y(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,as)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=as.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(as.copy(this.origin).addScaledVector(this.direction,n),as.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Wd.copy(t).add(n).multiplyScalar(.5),Wu.copy(n).sub(t).normalize(),Xs.copy(this.origin).sub(Wd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Wu),f=Xs.dot(this.direction),p=-Xs.dot(Wu),d=Xs.lengthSq(),x=Math.abs(1-u*u);let g,v,y,M;if(x>0)if(g=u*p-f,v=u*f-p,M=c*x,g>=0)if(v>=-M)if(v<=M){const E=1/x;g*=E,v*=E,y=g*(g+u*v+2*f)+v*(u*g+v+2*p)+d}else v=c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;else v=-c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-M?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+d):v<=M?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+d);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Wd).addScaledVector(Wu,v),y}intersectSphere(t,n){as.subVectors(t.center,this.origin);const a=as.dot(this.direction),o=as.dot(as)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,p;const d=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),x>=0?(c=(t.min.y-v.y)*x,u=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,u=(t.min.y-v.y)*x),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,as)!==null}intersectTriangle(t,n,a,o,c){qd.subVectors(n,t),qu.subVectors(a,t),Yd.crossVectors(qd,qu);let u=this.direction.dot(Yd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xs.subVectors(this.origin,t);const p=f*this.direction.dot(qu.crossVectors(Xs,qu));if(p<0)return null;const d=f*this.direction.dot(qd.cross(Xs));if(d<0||p+d>u)return null;const x=-f*Xs.dot(Yd);return x<0?null:this.at(x/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,n,a,o,c,u,f,p,d,x,g,v,y,M,E,b){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d,x,g,v,y,M,E,b)}set(t,n,a,o,c,u,f,p,d,x,g,v,y,M,E,b){const _=this.elements;return _[0]=t,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=u,_[9]=f,_[13]=p,_[2]=d,_[6]=x,_[10]=g,_[14]=v,_[3]=y,_[7]=M,_[11]=E,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/No.setFromMatrixColumn(t,0).length(),c=1/No.setFromMatrixColumn(t,1).length(),u=1/No.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=u*x,y=u*g,M=f*x,E=f*g;n[0]=p*x,n[4]=-p*g,n[8]=d,n[1]=y+M*d,n[5]=v-E*d,n[9]=-f*p,n[2]=E-v*d,n[6]=M+y*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*x,y=p*g,M=d*x,E=d*g;n[0]=v+E*f,n[4]=M*f-y,n[8]=u*d,n[1]=u*g,n[5]=u*x,n[9]=-f,n[2]=y*f-M,n[6]=E+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*x,y=p*g,M=d*x,E=d*g;n[0]=v-E*f,n[4]=-u*g,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*x,n[9]=E-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*x,y=u*g,M=f*x,E=f*g;n[0]=p*x,n[4]=M*d-y,n[8]=v*d+E,n[1]=p*g,n[5]=E*d+v,n[9]=y*d-M,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,M=f*p,E=f*d;n[0]=p*x,n[4]=E-v*g,n[8]=M*g+y,n[1]=g,n[5]=u*x,n[9]=-f*x,n[2]=-d*x,n[6]=y*g+M,n[10]=v-E*g}else if(t.order==="XZY"){const v=u*p,y=u*d,M=f*p,E=f*d;n[0]=p*x,n[4]=-g,n[8]=d*x,n[1]=v*g+E,n[5]=u*x,n[9]=y*g-M,n[2]=M*g-y,n[6]=f*x,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x1,t,v1)}lookAt(t,n,a){const o=this.elements;return Vi.subVectors(t,n),Vi.lengthSq()===0&&(Vi.z=1),Vi.normalize(),js.crossVectors(a,Vi),js.lengthSq()===0&&(Math.abs(a.z)===1?Vi.x+=1e-4:Vi.z+=1e-4,Vi.normalize(),js.crossVectors(a,Vi)),js.normalize(),Yu.crossVectors(Vi,js),o[0]=js.x,o[4]=Yu.x,o[8]=Vi.x,o[1]=js.y,o[5]=Yu.y,o[9]=Vi.y,o[2]=js.z,o[6]=Yu.z,o[10]=Vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],x=a[1],g=a[5],v=a[9],y=a[13],M=a[2],E=a[6],b=a[10],_=a[14],I=a[3],T=a[7],P=a[11],G=a[15],B=o[0],H=o[4],$=o[8],N=o[12],D=o[1],K=o[5],nt=o[9],ut=o[13],mt=o[2],xt=o[6],k=o[10],Q=o[14],j=o[3],Tt=o[7],At=o[11],V=o[15];return c[0]=u*B+f*D+p*mt+d*j,c[4]=u*H+f*K+p*xt+d*Tt,c[8]=u*$+f*nt+p*k+d*At,c[12]=u*N+f*ut+p*Q+d*V,c[1]=x*B+g*D+v*mt+y*j,c[5]=x*H+g*K+v*xt+y*Tt,c[9]=x*$+g*nt+v*k+y*At,c[13]=x*N+g*ut+v*Q+y*V,c[2]=M*B+E*D+b*mt+_*j,c[6]=M*H+E*K+b*xt+_*Tt,c[10]=M*$+E*nt+b*k+_*At,c[14]=M*N+E*ut+b*Q+_*V,c[3]=I*B+T*D+P*mt+G*j,c[7]=I*H+T*K+P*xt+G*Tt,c[11]=I*$+T*nt+P*k+G*At,c[15]=I*N+T*ut+P*Q+G*V,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],x=t[2],g=t[6],v=t[10],y=t[14],M=t[3],E=t[7],b=t[11],_=t[15];return M*(+c*p*g-o*d*g-c*f*v+a*d*v+o*f*y-a*p*y)+E*(+n*p*y-n*d*v+c*u*v-o*u*y+o*d*x-c*p*x)+b*(+n*d*g-n*f*y-c*u*g+a*u*y+c*f*x-a*d*x)+_*(-o*f*x-n*p*g+n*f*v+o*u*g-a*u*v+a*p*x)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],x=t[8],g=t[9],v=t[10],y=t[11],M=t[12],E=t[13],b=t[14],_=t[15],I=g*b*d-E*v*d+E*p*y-f*b*y-g*p*_+f*v*_,T=M*v*d-x*b*d-M*p*y+u*b*y+x*p*_-u*v*_,P=x*E*d-M*g*d+M*f*y-u*E*y-x*f*_+u*g*_,G=M*g*p-x*E*p-M*f*v+u*E*v+x*f*b-u*g*b,B=n*I+a*T+o*P+c*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return t[0]=I*H,t[1]=(E*v*c-g*b*c-E*o*y+a*b*y+g*o*_-a*v*_)*H,t[2]=(f*b*c-E*p*c+E*o*d-a*b*d-f*o*_+a*p*_)*H,t[3]=(g*p*c-f*v*c-g*o*d+a*v*d+f*o*y-a*p*y)*H,t[4]=T*H,t[5]=(x*b*c-M*v*c+M*o*y-n*b*y-x*o*_+n*v*_)*H,t[6]=(M*p*c-u*b*c-M*o*d+n*b*d+u*o*_-n*p*_)*H,t[7]=(u*v*c-x*p*c+x*o*d-n*v*d-u*o*y+n*p*y)*H,t[8]=P*H,t[9]=(M*g*c-x*E*c-M*a*y+n*E*y+x*a*_-n*g*_)*H,t[10]=(u*E*c-M*f*c+M*a*d-n*E*d-u*a*_+n*f*_)*H,t[11]=(x*f*c-u*g*c-x*a*d+n*g*d+u*a*y-n*f*y)*H,t[12]=G*H,t[13]=(x*E*o-M*g*o+M*a*v-n*E*v-x*a*b+n*g*b)*H,t[14]=(M*f*o-u*E*o-M*a*p+n*E*p+u*a*b-n*f*b)*H,t[15]=(u*g*o-x*f*o+x*a*p-n*g*p-u*a*v+n*f*v)*H,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,x=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,x*f+a,x*p-o*u,0,d*p-o*f,x*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,x=u+u,g=f+f,v=c*d,y=c*x,M=c*g,E=u*x,b=u*g,_=f*g,I=p*d,T=p*x,P=p*g,G=a.x,B=a.y,H=a.z;return o[0]=(1-(E+_))*G,o[1]=(y+P)*G,o[2]=(M-T)*G,o[3]=0,o[4]=(y-P)*B,o[5]=(1-(v+_))*B,o[6]=(b+I)*B,o[7]=0,o[8]=(M+T)*H,o[9]=(b-I)*H,o[10]=(1-(v+E))*H,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=No.set(o[0],o[1],o[2]).length();const u=No.set(o[4],o[5],o[6]).length(),f=No.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],xa.copy(this);const d=1/c,x=1/u,g=1/f;return xa.elements[0]*=d,xa.elements[1]*=d,xa.elements[2]*=d,xa.elements[4]*=x,xa.elements[5]*=x,xa.elements[6]*=x,xa.elements[8]*=g,xa.elements[9]*=g,xa.elements[10]*=g,n.setFromRotationMatrix(xa),a.x=c,a.y=u,a.z=f,this}makePerspective(t,n,a,o,c,u,f=Na,p=!1){const d=this.elements,x=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),y=(a+o)/(a-o);let M,E;if(p)M=c/(u-c),E=u*c/(u-c);else if(f===Na)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Uf)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=x,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=Na,p=!1){const d=this.elements,x=2/(n-t),g=2/(a-o),v=-(n+t)/(n-t),y=-(a+o)/(a-o);let M,E;if(p)M=1/(u-c),E=u/(u-c);else if(f===Na)M=-2/(u-c),E=-(u+c)/(u-c);else if(f===Uf)M=-1/(u-c),E=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=x,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const No=new Y,xa=new cn,x1=new Y(0,0,0),v1=new Y(1,1,1),js=new Y,Yu=new Y,Vi=new Y,kv=new cn,Xv=new Vr;class ba{constructor(t=0,n=0,a=0,o=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],x=o[9],g=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return kv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Ay{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _1=0;const jv=new Y,Lo=new Vr,ss=new cn,Zu=new Y,ic=new Y,y1=new Y,b1=new Vr,Wv=new Y(1,0,0),qv=new Y(0,1,0),Yv=new Y(0,0,1),Zv={type:"added"},S1={type:"removed"},Po={type:"childadded",child:null},Zd={type:"childremoved",child:null};class si extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const t=new Y,n=new ba,a=new Vr,o=new Y(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new cn},normalMatrix:{value:new be}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ay,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lo.setFromAxisAngle(t,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(t,n){return Lo.setFromAxisAngle(t,n),this.quaternion.premultiply(Lo),this}rotateX(t){return this.rotateOnAxis(Wv,t)}rotateY(t){return this.rotateOnAxis(qv,t)}rotateZ(t){return this.rotateOnAxis(Yv,t)}translateOnAxis(t,n){return jv.copy(t).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Wv,t)}translateY(t){return this.translateOnAxis(qv,t)}translateZ(t){return this.translateOnAxis(Yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Zu.copy(t):Zu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(ic,Zu,this.up):ss.lookAt(Zu,ic,this.up),this.quaternion.setFromRotationMatrix(ss),o&&(ss.extractRotation(o.matrixWorld),Lo.setFromRotationMatrix(ss),this.quaternion.premultiply(Lo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Cn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zv),Po.child=t,this.dispatchEvent(Po),Po.child=null):Cn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(S1),Zd.child=t,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zv),Po.child=t,this.dispatchEvent(Po),Po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,t,y1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,b1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,x=p.length;d<x;d++){const g=p[d];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),x=u(t.images),g=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),x.length>0&&(a.images=x),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(f){const p=[];for(const d in f){const x=f[d];delete x.metadata,p.push(x)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}si.DEFAULT_UP=new Y(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const va=new Y,rs=new Y,Kd=new Y,os=new Y,Oo=new Y,zo=new Y,Kv=new Y,Qd=new Y,Jd=new Y,$d=new Y,tp=new ke,ep=new ke,np=new ke;class oa{constructor(t=new Y,n=new Y,a=new Y){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),va.subVectors(t,n),o.cross(va);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){va.subVectors(o,n),rs.subVectors(a,n),Kd.subVectors(t,n);const u=va.dot(va),f=va.dot(rs),p=va.dot(Kd),d=rs.dot(rs),x=rs.dot(Kd),g=u*d-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(d*p-f*x)*v,M=(u*x-f*p)*v;return c.set(1-y-M,M,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,n,a,o,c,u,f,p){return this.getBarycoord(t,n,a,o,os)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,os.x),p.addScaledVector(u,os.y),p.addScaledVector(f,os.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return tp.setScalar(0),ep.setScalar(0),np.setScalar(0),tp.fromBufferAttribute(t,n),ep.fromBufferAttribute(t,a),np.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(tp,c.x),u.addScaledVector(ep,c.y),u.addScaledVector(np,c.z),u}static isFrontFacing(t,n,a,o){return va.subVectors(a,n),rs.subVectors(t,n),va.cross(rs).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return va.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),va.cross(rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return oa.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return oa.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return oa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;Oo.subVectors(o,a),zo.subVectors(c,a),Qd.subVectors(t,a);const p=Oo.dot(Qd),d=zo.dot(Qd);if(p<=0&&d<=0)return n.copy(a);Jd.subVectors(t,o);const x=Oo.dot(Jd),g=zo.dot(Jd);if(x>=0&&g<=x)return n.copy(o);const v=p*g-x*d;if(v<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(a).addScaledVector(Oo,u);$d.subVectors(t,c);const y=Oo.dot($d),M=zo.dot($d);if(M>=0&&y<=M)return n.copy(c);const E=y*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(zo,f);const b=x*M-y*g;if(b<=0&&g-x>=0&&y-M>=0)return Kv.subVectors(c,o),f=(g-x)/(g-x+(y-M)),n.copy(o).addScaledVector(Kv,f);const _=1/(b+E+v);return u=E*_,f=v*_,n.copy(a).addScaledVector(Oo,u).addScaledVector(zo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function ip(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class xe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ye.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ye.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ye.workingColorSpace){if(t=Hm(t,1),n=Se(n,0,1),a=Se(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=ip(u,c,t+1/3),this.g=ip(u,c,t),this.b=ip(u,c,t-1/3)}return Ye.colorSpaceToWorking(this,o),this}setStyle(t,n=xi){function a(c){c!==void 0&&parseFloat(c)<1&&Ee("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ee("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xi){const a=wy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):Ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=Ko(t.r),this.g=Ko(t.g),this.b=Ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ye.workingToColorSpace(li.copy(this),t),Math.round(Se(li.r*255,0,255))*65536+Math.round(Se(li.g*255,0,255))*256+Math.round(Se(li.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ye.workingColorSpace){Ye.workingToColorSpace(li.copy(this),n);const a=li.r,o=li.g,c=li.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const x=(f+u)/2;if(f===u)p=0,d=0;else{const g=u-f;switch(d=x<=.5?g/(u+f):g/(2-u-f),u){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=x,t}getRGB(t,n=Ye.workingColorSpace){return Ye.workingToColorSpace(li.copy(this),n),t.r=li.r,t.g=li.g,t.b=li.b,t}getStyle(t=xi){Ye.workingToColorSpace(li.copy(this),t);const n=li.r,a=li.g,o=li.b;return t!==xi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Ws),this.setHSL(Ws.h+t,Ws.s+n,Ws.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ws),t.getHSL(Ku);const a=pc(Ws.h,Ku.h,n),o=pc(Ws.s,Ku.s,n),c=pc(Ws.l,Ku.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const li=new xe;xe.NAMES=wy;let M1=0;class sl extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=La(),this.name="",this.type="Material",this.blending=Yo,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Np,this.blendDst=Lp,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){Ee(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ee(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(a.blending=this.blending),this.side!==nr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Np&&(a.blendSrc=this.blendSrc),this.blendDst!==Lp&&(a.blendDst=this.blendDst),this.blendEquation!==Or&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jr extends sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gn=new Y,Qu=new Mt;let E1=0;class wi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=vm,this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Qu.fromBufferAttribute(this,n),Qu.applyMatrix3(t),this.setXY(n,Qu.x,Qu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.applyMatrix3(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.applyMatrix4(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.applyNormalMatrix(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.transformDirection(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=_a(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=$e(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array),o=$e(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array),o=$e(o,this.array),c=$e(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vm&&(t.usage=this.usage),t}}class Cy extends wi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ry extends wi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Sn extends wi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let T1=0;const sa=new cn,ap=new si,Bo=new Y,Gi=new Wi,ac=new Wi,Zn=new Y;class fi extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sy(t)?Ry:Cy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new be().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sa.makeRotationFromQuaternion(t),this.applyMatrix4(sa),this}rotateX(t){return sa.makeRotationX(t),this.applyMatrix4(sa),this}rotateY(t){return sa.makeRotationY(t),this.applyMatrix4(sa),this}rotateZ(t){return sa.makeRotationZ(t),this.applyMatrix4(sa),this}translate(t,n,a){return sa.makeTranslation(t,n,a),this.applyMatrix4(sa),this}scale(t,n,a){return sa.makeScale(t,n,a),this.applyMatrix4(sa),this}lookAt(t){return ap.lookAt(t),ap.updateMatrix(),this.applyMatrix4(ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Sn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const a=this.boundingSphere.center;if(Gi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ac.setFromBufferAttribute(f),this.morphTargetsRelative?(Zn.addVectors(Gi.min,ac.min),Gi.expandByPoint(Zn),Zn.addVectors(Gi.max,ac.max),Gi.expandByPoint(Zn)):(Gi.expandByPoint(ac.min),Gi.expandByPoint(ac.max))}Gi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Zn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Zn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,x=f.count;d<x;d++)Zn.fromBufferAttribute(f,d),p&&(Bo.fromBufferAttribute(t,d),Zn.add(Bo)),o=Math.max(o,a.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let $=0;$<a.count;$++)f[$]=new Y,p[$]=new Y;const d=new Y,x=new Y,g=new Y,v=new Mt,y=new Mt,M=new Mt,E=new Y,b=new Y;function _($,N,D){d.fromBufferAttribute(a,$),x.fromBufferAttribute(a,N),g.fromBufferAttribute(a,D),v.fromBufferAttribute(c,$),y.fromBufferAttribute(c,N),M.fromBufferAttribute(c,D),x.sub(d),g.sub(d),y.sub(v),M.sub(v);const K=1/(y.x*M.y-M.x*y.y);isFinite(K)&&(E.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(K),b.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(K),f[$].add(E),f[N].add(E),f[D].add(E),p[$].add(b),p[N].add(b),p[D].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let $=0,N=I.length;$<N;++$){const D=I[$],K=D.start,nt=D.count;for(let ut=K,mt=K+nt;ut<mt;ut+=3)_(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const T=new Y,P=new Y,G=new Y,B=new Y;function H($){G.fromBufferAttribute(o,$),B.copy(G);const N=f[$];T.copy(N),T.sub(G.multiplyScalar(G.dot(N))).normalize(),P.crossVectors(B,N);const K=P.dot(p[$])<0?-1:1;u.setXYZW($,T.x,T.y,T.z,K)}for(let $=0,N=I.length;$<N;++$){const D=I[$],K=D.start,nt=D.count;for(let ut=K,mt=K+nt;ut<mt;ut+=3)H(t.getX(ut+0)),H(t.getX(ut+1)),H(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new Y,c=new Y,u=new Y,f=new Y,p=new Y,d=new Y,x=new Y,g=new Y;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),E=t.getX(v+1),b=t.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,b),f.add(x),p.add(x),d.add(x),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(b,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),a.setXYZ(v+0,x.x,x.y,x.z),a.setXYZ(v+1,x.x,x.y,x.z),a.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Zn.fromBufferAttribute(t,n),Zn.normalize(),t.setXYZ(n,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function t(f,p){const d=f.array,x=f.itemSize,g=f.normalized,v=new d.constructor(p.length*x);let y=0,M=0;for(let E=0,b=p.length;E<b;E++){f.isInterleavedBufferAttribute?y=p[E]*f.data.stride+f.offset:y=p[E]*x;for(let _=0;_<x;_++)v[M++]=d[y++]}return new wi(v,x,g)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let x=0,g=d.length;x<g;x++){const v=d[x],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],x=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];x.push(y.toJSON(t.data))}x.length>0&&(o[p]=x,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const x=o[d];this.setAttribute(d,x.clone(n))}const c=t.morphAttributes;for(const d in c){const x=[],g=c[d];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(n));this.morphAttributes[d]=x}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,x=u.length;d<x;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qv=new cn,Dr=new Ty,Ju=new ir,Jv=new Y,$u=new Y,tf=new Y,ef=new Y,sp=new Y,nf=new Y,$v=new Y,af=new Y;class wn extends si{constructor(t=new fi,n=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){nf.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const x=f[p],g=c[p];x!==0&&(sp.fromBufferAttribute(g,t),u?nf.addScaledVector(sp,x):nf.addScaledVector(sp.sub(n),x))}n.add(nf)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ju.copy(a.boundingSphere),Ju.applyMatrix4(c),Dr.copy(t.ray).recast(t.near),!(Ju.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ju,Jv)===null||Dr.origin.distanceToSquared(Jv)>(t.far-t.near)**2))&&(Qv.copy(c).invert(),Dr.copy(t.ray).applyMatrix4(Qv),!(a.boundingBox!==null&&Dr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Dr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const b=v[M],_=u[b.materialIndex],I=Math.max(b.start,y.start),T=Math.min(f.count,Math.min(b.start+b.count,y.start+y.count));for(let P=I,G=T;P<G;P+=3){const B=f.getX(P),H=f.getX(P+1),$=f.getX(P+2);o=sf(this,_,t,a,d,x,g,B,H,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let b=M,_=E;b<_;b+=3){const I=f.getX(b),T=f.getX(b+1),P=f.getX(b+2);o=sf(this,u,t,a,d,x,g,I,T,P),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const b=v[M],_=u[b.materialIndex],I=Math.max(b.start,y.start),T=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let P=I,G=T;P<G;P+=3){const B=P,H=P+1,$=P+2;o=sf(this,_,t,a,d,x,g,B,H,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(p.count,y.start+y.count);for(let b=M,_=E;b<_;b+=3){const I=b,T=b+1,P=b+2;o=sf(this,u,t,a,d,x,g,I,T,P),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function A1(s,t,n,a,o,c,u,f){let p;if(t.side===ui?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===nr,f),p===null)return null;af.copy(f),af.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(af);return d<n.near||d>n.far?null:{distance:d,point:af.clone(),object:s}}function sf(s,t,n,a,o,c,u,f,p,d){s.getVertexPosition(f,$u),s.getVertexPosition(p,tf),s.getVertexPosition(d,ef);const x=A1(s,t,n,a,$u,tf,ef,$v);if(x){const g=new Y;oa.getBarycoord($v,$u,tf,ef,g),o&&(x.uv=oa.getInterpolatedAttribute(o,f,p,d,g,new Mt)),c&&(x.uv1=oa.getInterpolatedAttribute(c,f,p,d,g,new Mt)),u&&(x.normal=oa.getInterpolatedAttribute(u,f,p,d,g,new Y),x.normal.dot(a.direction)>0&&x.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new Y,materialIndex:0};oa.getNormal($u,tf,ef,v.normal),x.face=v,x.barycoord=g}return x}class rl extends fi{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],x=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Sn(d,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(g,2));function M(E,b,_,I,T,P,G,B,H,$,N){const D=P/H,K=G/$,nt=P/2,ut=G/2,mt=B/2,xt=H+1,k=$+1;let Q=0,j=0;const Tt=new Y;for(let At=0;At<k;At++){const V=At*K-ut;for(let pt=0;pt<xt;pt++){const Lt=pt*D-nt;Tt[E]=Lt*I,Tt[b]=V*T,Tt[_]=mt,d.push(Tt.x,Tt.y,Tt.z),Tt[E]=0,Tt[b]=0,Tt[_]=B>0?1:-1,x.push(Tt.x,Tt.y,Tt.z),g.push(pt/H),g.push(1-At/$),Q+=1}}for(let At=0;At<$;At++)for(let V=0;V<H;V++){const pt=v+V+xt*At,Lt=v+V+xt*(At+1),Z=v+(V+1)+xt*(At+1),X=v+(V+1)+xt*At;p.push(pt,Lt,X),p.push(Lt,Z,X),j+=6}f.addGroup(y,j,N),y+=j,v+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nl(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function gi(s){const t={};for(let n=0;n<s.length;n++){const a=nl(s[n]);for(const o in a)t[o]=a[o]}return t}function w1(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function Dy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}const Gr={clone:nl,merge:gi};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nl(t.uniforms),this.uniformsGroups=w1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Uy extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qs=new Y,t_=new Mt,e_=new Mt;class ki extends Uy{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-t/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qs.x,qs.y).multiplyScalar(-t/qs.z)}getViewSize(t,n){return this.getViewBounds(t,t_,e_),n.subVectors(e_,t_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Zo*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Io=-90,Fo=1;class D1 extends si{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ki(Io,Fo,t,n);o.layers=this.layers,this.add(o);const c=new ki(Io,Fo,t,n);c.layers=this.layers,this.add(c);const u=new ki(Io,Fo,t,n);u.layers=this.layers,this.add(u);const f=new ki(Io,Fo,t,n);f.layers=this.layers,this.add(f);const p=new ki(Io,Fo,t,n);p.layers=this.layers,this.add(p);const d=new ki(Io,Fo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===Na)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Uf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,o),t.render(n,x),t.setRenderTarget(g,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Ny extends ai{constructor(t=[],n=$o,a,o,c,u,f,p,d,x){super(t,n,a,o,c,u,f,p,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U1 extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Ny(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new rl(5,5,5),c=new Pn({name:"CubemapFromEquirect",uniforms:nl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ui,blending:ca});c.uniforms.tEquirect.value=n;const u=new wn(o,c),f=n.minFilter;return n.minFilter===Br&&(n.minFilter=la),new D1(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class fc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const E of t.hand.values()){const b=n.getJointPose(E,a),_=this._getHandJoint(d,E);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const x=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new fc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Ly extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class L1{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=vm,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mi=new Y;class Qs{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)mi.fromBufferAttribute(this,n),mi.applyMatrix4(t),this.setXYZ(n,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)mi.fromBufferAttribute(this,n),mi.applyNormalMatrix(t),this.setXYZ(n,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)mi.fromBufferAttribute(this,n),mi.transformDirection(t),this.setXYZ(n,mi.x,mi.y,mi.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=_a(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=$e(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=_a(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=_a(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=_a(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=_a(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array),o=$e(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=$e(n,this.array),a=$e(a,this.array),o=$e(o,this.array),c=$e(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Nf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new wi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Py extends ai{constructor(t=null,n=1,a=1,o,c,u,f,p,d=ji,x=ji,g,v){super(null,u,f,p,d,x,o,c,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n_ extends wi{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ho=new cn,i_=new cn,rf=[],a_=new Wi,P1=new cn,sc=new wn,rc=new ir;class O1 extends wn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new n_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,P1)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ho),a_.copy(t.boundingBox).applyMatrix4(Ho),this.boundingBox.union(a_)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ho),rc.copy(t.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(rc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(sc.geometry=this.geometry,sc.material=this.material,sc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(a),t.ray.intersectsSphere(rc)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Ho),i_.multiplyMatrices(a,Ho),sc.matrixWorld=i_,sc.raycast(t,rf);for(let u=0,f=rf.length;u<f;u++){const p=rf[u];p.instanceId=c,p.object=this,n.push(p)}rf.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new n_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Py(new Float32Array(o*this.count),o,this.count,Pm,Ua));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,p=o*t;c[p]=f,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const op=new Y,z1=new Y,B1=new be;class Zs{constructor(t=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=op.subVectors(a,n).cross(z1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(op),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||B1.getNormalMatrix(t),o=this.coplanarPoint(op).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ir,I1=new Mt(.5,.5),of=new Y;class Gm{constructor(t=new Zs,n=new Zs,a=new Zs,o=new Zs,c=new Zs,u=new Zs){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Na,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],x=c[4],g=c[5],v=c[6],y=c[7],M=c[8],E=c[9],b=c[10],_=c[11],I=c[12],T=c[13],P=c[14],G=c[15];if(o[0].setComponents(d-u,y-x,_-M,G-I).normalize(),o[1].setComponents(d+u,y+x,_+M,G+I).normalize(),o[2].setComponents(d+f,y+g,_+E,G+T).normalize(),o[3].setComponents(d-f,y-g,_-E,G-T).normalize(),a)o[4].setComponents(p,v,b,P).normalize(),o[5].setComponents(d-p,y-v,_-b,G-P).normalize();else if(o[4].setComponents(d-p,y-v,_-b,G-P).normalize(),n===Na)o[5].setComponents(d+p,y+v,_+b,G+P).normalize();else if(n===Uf)o[5].setComponents(p,v,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);const n=I1.distanceTo(t.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(of.x=o.normal.x>0?t.max.x:t.min.x,of.y=o.normal.y>0?t.max.y:t.min.y,of.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(of)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends ai{constructor(t,n,a,o,c,u,f,p,d){super(t,n,a,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oy extends ai{constructor(t,n,a=Hr,o,c,u,f=ji,p=ji,d,x=Ec,g=1){if(x!==Ec&&x!==Tc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,o,c,u,f,p,x,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zy extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const lf=new Y,cf=new Y,cp=new Y,uf=new oa;class F1 extends fi{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const o=Math.pow(10,4),c=Math.cos(Zo*n),u=t.getIndex(),f=t.getAttribute("position"),p=u?u.count:f.count,d=[0,0,0],x=["a","b","c"],g=new Array(3),v={},y=[];for(let M=0;M<p;M+=3){u?(d[0]=u.getX(M),d[1]=u.getX(M+1),d[2]=u.getX(M+2)):(d[0]=M,d[1]=M+1,d[2]=M+2);const{a:E,b,c:_}=uf;if(E.fromBufferAttribute(f,d[0]),b.fromBufferAttribute(f,d[1]),_.fromBufferAttribute(f,d[2]),uf.getNormal(cp),g[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,g[1]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,g[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let I=0;I<3;I++){const T=(I+1)%3,P=g[I],G=g[T],B=uf[x[I]],H=uf[x[T]],$=`${P}_${G}`,N=`${G}_${P}`;N in v&&v[N]?(cp.dot(v[N].normal)<=c&&(y.push(B.x,B.y,B.z),y.push(H.x,H.y,H.z)),v[N]=null):$ in v||(v[$]={index0:d[I],index1:d[T],normal:cp.clone()})}}for(const M in v)if(v[M]){const{index0:E,index1:b}=v[M];lf.fromBufferAttribute(f,E),cf.fromBufferAttribute(f,b),y.push(lf.x,lf.y,lf.z),y.push(cf.x,cf.y,cf.z)}this.setAttribute("position",new Sn(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Oa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let f=0,p=c-1,d;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),d=a[o]-u,d<0)f=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const x=a[o],v=a[o+1]-x,y=(u-x)/v;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),f=this.getPoint(c),p=n||(u.isVector2?new Mt:new Y);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new Y,o=[],c=[],u=[],f=new Y,p=new cn;for(let y=0;y<=t;y++){const M=y/t;o[y]=this.getTangentAt(M,new Y)}c[0]=new Y,u[0]=new Y;let d=Number.MAX_VALUE;const x=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);x<=d&&(d=x,a.set(1,0,0)),g<=d&&(d=g,a.set(0,1,0)),v<=d&&a.set(0,0,1),f.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],f),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Se(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(f,M))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(Se(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(f.crossVectors(c[0],c[t]))>0&&(y=-y);for(let M=1;M<=t;M++)c[M].applyMatrix4(p.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class km extends Oa{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(t,n=new Mt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const f=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const x=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=p-this.aX,y=d-this.aY;p=v*x-y*g+this.aX,d=v*g+y*x+this.aY}return a.set(p,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class H1 extends km{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Xm(){let s=0,t=0,n=0,a=0;function o(c,u,f,p){s=c,t=f,n=-3*c+3*u-2*f-p,a=2*c-2*u+f+p}return{initCatmullRom:function(c,u,f,p,d){o(u,f,d*(f-c),d*(p-u))},initNonuniformCatmullRom:function(c,u,f,p,d,x,g){let v=(u-c)/d-(f-c)/(d+x)+(f-u)/x,y=(f-u)/x-(p-u)/(x+g)+(p-f)/g;v*=x,y*=x,o(u,f,v,y)},calc:function(c){const u=c*c,f=u*c;return s+t*c+n*u+a*f}}}const ff=new Y,up=new Xm,fp=new Xm,hp=new Xm;class V1 extends Oa{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new Y){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/c)+1)*c:p===0&&f===c-1&&(f=c-2,p=1);let d,x;this.closed||f>0?d=o[(f-1)%c]:(ff.subVectors(o[0],o[1]).add(o[0]),d=ff);const g=o[f%c],v=o[(f+1)%c];if(this.closed||f+2<c?x=o[(f+2)%c]:(ff.subVectors(o[c-1],o[c-2]).add(o[c-1]),x=ff),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(g),y),E=Math.pow(g.distanceToSquared(v),y),b=Math.pow(v.distanceToSquared(x),y);E<1e-4&&(E=1),M<1e-4&&(M=E),b<1e-4&&(b=E),up.initNonuniformCatmullRom(d.x,g.x,v.x,x.x,M,E,b),fp.initNonuniformCatmullRom(d.y,g.y,v.y,x.y,M,E,b),hp.initNonuniformCatmullRom(d.z,g.z,v.z,x.z,M,E,b)}else this.curveType==="catmullrom"&&(up.initCatmullRom(d.x,g.x,v.x,x.x,this.tension),fp.initCatmullRom(d.y,g.y,v.y,x.y,this.tension),hp.initCatmullRom(d.z,g.z,v.z,x.z,this.tension));return a.set(up.calc(p),fp.calc(p),hp.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Y().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function s_(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,f=s*s,p=s*f;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*f+c*s+n}function G1(s,t){const n=1-s;return n*n*t}function k1(s,t){return 2*(1-s)*s*t}function X1(s,t){return s*s*t}function mc(s,t,n,a){return G1(s,t)+k1(s,n)+X1(s,a)}function j1(s,t){const n=1-s;return n*n*n*t}function W1(s,t){const n=1-s;return 3*n*n*s*t}function q1(s,t){return 3*(1-s)*s*s*t}function Y1(s,t){return s*s*s*t}function gc(s,t,n,a,o){return j1(s,t)+W1(s,n)+q1(s,a)+Y1(s,o)}class By extends Oa{constructor(t=new Mt,n=new Mt,a=new Mt,o=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Mt){const a=n,o=this.v0,c=this.v1,u=this.v2,f=this.v3;return a.set(gc(t,o.x,c.x,u.x,f.x),gc(t,o.y,c.y,u.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z1 extends Oa{constructor(t=new Y,n=new Y,a=new Y,o=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Y){const a=n,o=this.v0,c=this.v1,u=this.v2,f=this.v3;return a.set(gc(t,o.x,c.x,u.x,f.x),gc(t,o.y,c.y,u.y,f.y),gc(t,o.z,c.z,u.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iy extends Oa{constructor(t=new Mt,n=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Mt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Mt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K1 extends Oa{constructor(t=new Y,n=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Y){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Y){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fy extends Oa{constructor(t=new Mt,n=new Mt,a=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Mt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(mc(t,o.x,c.x,u.x),mc(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q1 extends Oa{constructor(t=new Y,n=new Y,a=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Y){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(mc(t,o.x,c.x,u.x),mc(t,o.y,c.y,u.y),mc(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hy extends Oa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Mt){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),f=c-u,p=o[u===0?u:u-1],d=o[u],x=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return a.set(s_(f,p.x,d.x,x.x,g.x),s_(f,p.y,d.y,x.y,g.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Mt().fromArray(o))}return this}}var _m=Object.freeze({__proto__:null,ArcCurve:H1,CatmullRomCurve3:V1,CubicBezierCurve:By,CubicBezierCurve3:Z1,EllipseCurve:km,LineCurve:Iy,LineCurve3:K1,QuadraticBezierCurve:Fy,QuadraticBezierCurve3:Q1,SplineCurve:Hy});class J1 extends Oa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _m[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,f=this.curves[c],p=f.getLength(),d=p===0?0:1-u/p;return f.getPointAt(d,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],f=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,p=u.getPoints(f);for(let d=0;d<p.length;d++){const x=p[d];a&&a.equals(x)||(n.push(x),a=x)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new _m[o.type]().fromJSON(o))}return this}}class Qo extends J1{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Iy(this.currentPoint.clone(),new Mt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new Fy(this.currentPoint.clone(),new Mt(t,n),new Mt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const f=new By(this.currentPoint.clone(),new Mt(t,n),new Mt(a,o),new Mt(c,u));return this.curves.push(f),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Hy(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+f,n+p,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,f,p){const d=this.currentPoint.x,x=this.currentPoint.y;return this.absellipse(t+d,n+x,a,o,c,u,f,p),this}absellipse(t,n,a,o,c,u,f,p){const d=new km(t,n,a,o,c,u,f,p);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const x=d.getPoint(1);return this.currentPoint.copy(x),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xc extends Qo{constructor(t){super(t),this.uuid=La(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Qo().fromJSON(o))}return this}}function $1(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let c=Vy(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let f,p,d;if(a&&(c=aE(s,t,c,n)),s.length>80*n){f=s[0],p=s[1];let x=f,g=p;for(let v=n;v<o;v+=n){const y=s[v],M=s[v+1];y<f&&(f=y),M<p&&(p=M),y>x&&(x=y),M>g&&(g=M)}d=Math.max(x-f,g-p),d=d!==0?32767/d:0}return Rc(c,u,n,f,p,d,0),u}function Vy(s,t,n,a,o){let c;if(o===mE(s,t,n,a)>0)for(let u=t;u<n;u+=a)c=r_(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=t;u-=a)c=r_(u/a|0,s[u],s[u+1],c);return c&&il(c,c.next)&&(Uc(c),c=c.next),c}function kr(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(il(n,n.next)||Mn(n.prev,n,n.next)===0)){if(Uc(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Rc(s,t,n,a,o,c,u){if(!s)return;!u&&c&&cE(s,a,o,c);let f=s;for(;s.prev!==s.next;){const p=s.prev,d=s.next;if(c?eE(s,a,o,c):tE(s)){t.push(p.i,s.i,d.i),Uc(s),s=d.next,f=d.next;continue}if(s=d,s===f){u?u===1?(s=nE(kr(s),t),Rc(s,t,n,a,o,c,2)):u===2&&iE(s,t,n,a,o,c):Rc(kr(s),t,n,a,o,c,1);break}}}function tE(s){const t=s.prev,n=s,a=s.next;if(Mn(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,f=t.y,p=n.y,d=a.y,x=Math.min(o,c,u),g=Math.min(f,p,d),v=Math.max(o,c,u),y=Math.max(f,p,d);let M=a.next;for(;M!==t;){if(M.x>=x&&M.x<=v&&M.y>=g&&M.y<=y&&hc(o,f,c,p,u,d,M.x,M.y)&&Mn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function eE(s,t,n,a){const o=s.prev,c=s,u=s.next;if(Mn(o,c,u)>=0)return!1;const f=o.x,p=c.x,d=u.x,x=o.y,g=c.y,v=u.y,y=Math.min(f,p,d),M=Math.min(x,g,v),E=Math.max(f,p,d),b=Math.max(x,g,v),_=ym(y,M,t,n,a),I=ym(E,b,t,n,a);let T=s.prevZ,P=s.nextZ;for(;T&&T.z>=_&&P&&P.z<=I;){if(T.x>=y&&T.x<=E&&T.y>=M&&T.y<=b&&T!==o&&T!==u&&hc(f,x,p,g,d,v,T.x,T.y)&&Mn(T.prev,T,T.next)>=0||(T=T.prevZ,P.x>=y&&P.x<=E&&P.y>=M&&P.y<=b&&P!==o&&P!==u&&hc(f,x,p,g,d,v,P.x,P.y)&&Mn(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;T&&T.z>=_;){if(T.x>=y&&T.x<=E&&T.y>=M&&T.y<=b&&T!==o&&T!==u&&hc(f,x,p,g,d,v,T.x,T.y)&&Mn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;P&&P.z<=I;){if(P.x>=y&&P.x<=E&&P.y>=M&&P.y<=b&&P!==o&&P!==u&&hc(f,x,p,g,d,v,P.x,P.y)&&Mn(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function nE(s,t){let n=s;do{const a=n.prev,o=n.next.next;!il(a,o)&&ky(a,n,n.next,o)&&Dc(a,o)&&Dc(o,a)&&(t.push(a.i,n.i,o.i),Uc(n),Uc(n.next),n=s=o),n=n.next}while(n!==s);return kr(n)}function iE(s,t,n,a,o,c){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&hE(u,f)){let p=Xy(u,f);u=kr(u,u.next),p=kr(p,p.next),Rc(u,t,n,a,o,c,0),Rc(p,t,n,a,o,c,0);return}f=f.next}u=u.next}while(u!==s)}function aE(s,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const f=t[c]*a,p=c<u-1?t[c+1]*a:s.length,d=Vy(s,f,p,a,!1);d===d.next&&(d.steiner=!0),o.push(fE(d))}o.sort(sE);for(let c=0;c<o.length;c++)n=rE(o[c],n);return n}function sE(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function rE(s,t){const n=oE(s,t);if(!n)return t;const a=Xy(n,s);return kr(a,a.next),kr(n,n.next)}function oE(s,t){let n=t;const a=s.x,o=s.y;let c=-1/0,u;if(il(s,n))return n;do{if(il(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=a&&g>c&&(c=g,u=n.x<n.next.x?n:n.next,g===a))return u}n=n.next}while(n!==t);if(!u)return null;const f=u,p=u.x,d=u.y;let x=1/0;n=u;do{if(a>=n.x&&n.x>=p&&a!==n.x&&Gy(o<d?a:c,o,p,d,o<d?c:a,o,n.x,n.y)){const g=Math.abs(o-n.y)/(a-n.x);Dc(n,s)&&(g<x||g===x&&(n.x>u.x||n.x===u.x&&lE(u,n)))&&(u=n,x=g)}n=n.next}while(n!==f);return u}function lE(s,t){return Mn(s.prev,s,t.prev)<0&&Mn(t.next,s,s.next)<0}function cE(s,t,n,a){let o=s;do o.z===0&&(o.z=ym(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,uE(o)}function uE(s){let t,n=1;do{let a=s,o;s=null;let c=null;for(t=0;a;){t++;let u=a,f=0;for(let d=0;d<n&&(f++,u=u.nextZ,!!u);d++);let p=n;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,f--):(o=u,u=u.nextZ,p--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return s}function ym(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fE(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function Gy(s,t,n,a,o,c,u,f){return(o-u)*(t-f)>=(s-u)*(c-f)&&(s-u)*(a-f)>=(n-u)*(t-f)&&(n-u)*(c-f)>=(o-u)*(a-f)}function hc(s,t,n,a,o,c,u,f){return!(s===u&&t===f)&&Gy(s,t,n,a,o,c,u,f)}function hE(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!dE(s,t)&&(Dc(s,t)&&Dc(t,s)&&pE(s,t)&&(Mn(s.prev,s,t.prev)||Mn(s,t.prev,t))||il(s,t)&&Mn(s.prev,s,s.next)>0&&Mn(t.prev,t,t.next)>0)}function Mn(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function il(s,t){return s.x===t.x&&s.y===t.y}function ky(s,t,n,a){const o=df(Mn(s,t,n)),c=df(Mn(s,t,a)),u=df(Mn(n,a,s)),f=df(Mn(n,a,t));return!!(o!==c&&u!==f||o===0&&hf(s,n,t)||c===0&&hf(s,a,t)||u===0&&hf(n,s,a)||f===0&&hf(n,t,a))}function hf(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function df(s){return s>0?1:s<0?-1:0}function dE(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&ky(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function Dc(s,t){return Mn(s.prev,s,s.next)<0?Mn(s,t,s.next)>=0&&Mn(s,s.prev,t)>=0:Mn(s,t,s.prev)<0||Mn(s,s.next,t)<0}function pE(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,c=(s.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function Xy(s,t){const n=bm(s.i,s.x,s.y),a=bm(t.i,t.x,t.y),o=s.next,c=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function r_(s,t,n,a){const o=bm(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Uc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bm(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mE(s,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class gE{static triangulate(t,n,a=2){return $1(t,n,a)}}class Js{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Js.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];o_(t),l_(a,t);let u=t.length;n.forEach(o_);for(let p=0;p<n.length;p++)o.push(u),u+=n[p].length,l_(a,n[p]);const f=gE.triangulate(a,o);for(let p=0;p<f.length;p+=3)c.push(f.slice(p,p+3));return c}}function o_(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function l_(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class jm extends fi{constructor(t=new xc([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let f=0,p=t.length;f<p;f++){const d=t[f];u(d)}this.setAttribute("position",new Sn(o,3)),this.setAttribute("uv",new Sn(c,2)),this.computeVertexNormals();function u(f){const p=[],d=n.curveSegments!==void 0?n.curveSegments:12,x=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,M=n.bevelSize!==void 0?n.bevelSize:y-.1,E=n.bevelOffset!==void 0?n.bevelOffset:0,b=n.bevelSegments!==void 0?n.bevelSegments:3;const _=n.extrudePath,I=n.UVGenerator!==void 0?n.UVGenerator:xE;let T,P=!1,G,B,H,$;_&&(T=_.getSpacedPoints(x),P=!0,v=!1,G=_.computeFrenetFrames(x,!1),B=new Y,H=new Y,$=new Y),v||(b=0,y=0,M=0,E=0);const N=f.extractPoints(d);let D=N.shape;const K=N.holes;if(!Js.isClockWise(D)){D=D.reverse();for(let et=0,R=K.length;et<R;et++){const ft=K[et];Js.isClockWise(ft)&&(K[et]=ft.reverse())}}function ut(et){const ft=10000000000000001e-36;let ct=et[0];for(let W=1;W<=et.length;W++){const z=W%et.length,wt=et[z],zt=wt.x-ct.x,Qt=wt.y-ct.y,F=zt*zt+Qt*Qt,A=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(ct.x),Math.abs(ct.y)),ot=ft*A*A;if(F<=ot){et.splice(z,1),W--;continue}ct=wt}}ut(D),K.forEach(ut);const mt=K.length,xt=D;for(let et=0;et<mt;et++){const R=K[et];D=D.concat(R)}function k(et,R,ft){return R||Cn("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(R,ft)}const Q=D.length;function j(et,R,ft){let ct,W,z;const wt=et.x-R.x,zt=et.y-R.y,Qt=ft.x-et.x,F=ft.y-et.y,A=wt*wt+zt*zt,ot=wt*F-zt*Qt;if(Math.abs(ot)>Number.EPSILON){const Rt=Math.sqrt(A),Ut=Math.sqrt(Qt*Qt+F*F),Et=R.x-zt/Rt,ae=R.y+wt/Rt,Zt=ft.x-F/Ut,ie=ft.y+Qt/Ut,re=((Zt-Et)*F-(ie-ae)*Qt)/(wt*F-zt*Qt);ct=Et+wt*re-et.x,W=ae+zt*re-et.y;const It=ct*ct+W*W;if(It<=2)return new Mt(ct,W);z=Math.sqrt(It/2)}else{let Rt=!1;wt>Number.EPSILON?Qt>Number.EPSILON&&(Rt=!0):wt<-Number.EPSILON?Qt<-Number.EPSILON&&(Rt=!0):Math.sign(zt)===Math.sign(F)&&(Rt=!0),Rt?(ct=-zt,W=wt,z=Math.sqrt(A)):(ct=wt,W=zt,z=Math.sqrt(A/2))}return new Mt(ct/z,W/z)}const Tt=[];for(let et=0,R=xt.length,ft=R-1,ct=et+1;et<R;et++,ft++,ct++)ft===R&&(ft=0),ct===R&&(ct=0),Tt[et]=j(xt[et],xt[ft],xt[ct]);const At=[];let V,pt=Tt.concat();for(let et=0,R=mt;et<R;et++){const ft=K[et];V=[];for(let ct=0,W=ft.length,z=W-1,wt=ct+1;ct<W;ct++,z++,wt++)z===W&&(z=0),wt===W&&(wt=0),V[ct]=j(ft[ct],ft[z],ft[wt]);At.push(V),pt=pt.concat(V)}let Lt;if(b===0)Lt=Js.triangulateShape(xt,K);else{const et=[],R=[];for(let ft=0;ft<b;ft++){const ct=ft/b,W=y*Math.cos(ct*Math.PI/2),z=M*Math.sin(ct*Math.PI/2)+E;for(let wt=0,zt=xt.length;wt<zt;wt++){const Qt=k(xt[wt],Tt[wt],z);gt(Qt.x,Qt.y,-W),ct===0&&et.push(Qt)}for(let wt=0,zt=mt;wt<zt;wt++){const Qt=K[wt];V=At[wt];const F=[];for(let A=0,ot=Qt.length;A<ot;A++){const Rt=k(Qt[A],V[A],z);gt(Rt.x,Rt.y,-W),ct===0&&F.push(Rt)}ct===0&&R.push(F)}}Lt=Js.triangulateShape(et,R)}const Z=Lt.length,X=M+E;for(let et=0;et<Q;et++){const R=v?k(D[et],pt[et],X):D[et];P?(H.copy(G.normals[0]).multiplyScalar(R.x),B.copy(G.binormals[0]).multiplyScalar(R.y),$.copy(T[0]).add(H).add(B),gt($.x,$.y,$.z)):gt(R.x,R.y,0)}for(let et=1;et<=x;et++)for(let R=0;R<Q;R++){const ft=v?k(D[R],pt[R],X):D[R];P?(H.copy(G.normals[et]).multiplyScalar(ft.x),B.copy(G.binormals[et]).multiplyScalar(ft.y),$.copy(T[et]).add(H).add(B),gt($.x,$.y,$.z)):gt(ft.x,ft.y,g/x*et)}for(let et=b-1;et>=0;et--){const R=et/b,ft=y*Math.cos(R*Math.PI/2),ct=M*Math.sin(R*Math.PI/2)+E;for(let W=0,z=xt.length;W<z;W++){const wt=k(xt[W],Tt[W],ct);gt(wt.x,wt.y,g+ft)}for(let W=0,z=K.length;W<z;W++){const wt=K[W];V=At[W];for(let zt=0,Qt=wt.length;zt<Qt;zt++){const F=k(wt[zt],V[zt],ct);P?gt(F.x,F.y+T[x-1].y,T[x-1].x+ft):gt(F.x,F.y,g+ft)}}}w(),C();function w(){const et=o.length/3;if(v){let R=0,ft=Q*R;for(let ct=0;ct<Z;ct++){const W=Lt[ct];at(W[2]+ft,W[1]+ft,W[0]+ft)}R=x+b*2,ft=Q*R;for(let ct=0;ct<Z;ct++){const W=Lt[ct];at(W[0]+ft,W[1]+ft,W[2]+ft)}}else{for(let R=0;R<Z;R++){const ft=Lt[R];at(ft[2],ft[1],ft[0])}for(let R=0;R<Z;R++){const ft=Lt[R];at(ft[0]+Q*x,ft[1]+Q*x,ft[2]+Q*x)}}a.addGroup(et,o.length/3-et,0)}function C(){const et=o.length/3;let R=0;st(xt,R),R+=xt.length;for(let ft=0,ct=K.length;ft<ct;ft++){const W=K[ft];st(W,R),R+=W.length}a.addGroup(et,o.length/3-et,1)}function st(et,R){let ft=et.length;for(;--ft>=0;){const ct=ft;let W=ft-1;W<0&&(W=et.length-1);for(let z=0,wt=x+b*2;z<wt;z++){const zt=Q*z,Qt=Q*(z+1),F=R+ct+zt,A=R+W+zt,ot=R+W+Qt,Rt=R+ct+Qt;Pt(F,A,ot,Rt)}}}function gt(et,R,ft){p.push(et),p.push(R),p.push(ft)}function at(et,R,ft){Vt(et),Vt(R),Vt(ft);const ct=o.length/3,W=I.generateTopUV(a,o,ct-3,ct-2,ct-1);Dt(W[0]),Dt(W[1]),Dt(W[2])}function Pt(et,R,ft,ct){Vt(et),Vt(R),Vt(ct),Vt(R),Vt(ft),Vt(ct);const W=o.length/3,z=I.generateSideWallUV(a,o,W-6,W-3,W-2,W-1);Dt(z[0]),Dt(z[1]),Dt(z[3]),Dt(z[1]),Dt(z[2]),Dt(z[3])}function Vt(et){o.push(p[et*3+0]),o.push(p[et*3+1]),o.push(p[et*3+2])}function Dt(et){c.push(et.x),c.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return vE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const f=n[t.shapes[c]];a.push(f)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new _m[o.type]().fromJSON(o)),new jm(a,t.options)}}const xE={generateTopUV:function(s,t,n,a,o){const c=t[n*3],u=t[n*3+1],f=t[a*3],p=t[a*3+1],d=t[o*3],x=t[o*3+1];return[new Mt(c,u),new Mt(f,p),new Mt(d,x)]},generateSideWallUV:function(s,t,n,a,o,c){const u=t[n*3],f=t[n*3+1],p=t[n*3+2],d=t[a*3],x=t[a*3+1],g=t[a*3+2],v=t[o*3],y=t[o*3+1],M=t[o*3+2],E=t[c*3],b=t[c*3+1],_=t[c*3+2];return Math.abs(f-x)<Math.abs(u-d)?[new Mt(u,1-p),new Mt(d,1-g),new Mt(v,1-M),new Mt(E,1-_)]:[new Mt(f,1-p),new Mt(x,1-g),new Mt(y,1-M),new Mt(b,1-_)]}};function vE(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Nc extends fi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,x=p+1,g=t/f,v=n/p,y=[],M=[],E=[],b=[];for(let _=0;_<x;_++){const I=_*v-u;for(let T=0;T<d;T++){const P=T*g-c;M.push(P,-I,0),E.push(0,0,1),b.push(T/f),b.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<f;I++){const T=I+d*_,P=I+d*(_+1),G=I+1+d*(_+1),B=I+1+d*_;y.push(T,P,B),y.push(P,G,B)}this.setIndex(y),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(E,3)),this.setAttribute("uv",new Sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class _E extends fi{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,o=new Y,c=new Y;if(t.index!==null){const u=t.attributes.position,f=t.index;let p=t.groups;p.length===0&&(p=[{start:0,count:f.count,materialIndex:0}]);for(let d=0,x=p.length;d<x;++d){const g=p[d],v=g.start,y=g.count;for(let M=v,E=v+y;M<E;M+=3)for(let b=0;b<3;b++){const _=f.getX(M+b),I=f.getX(M+(b+1)%3);o.fromBufferAttribute(u,_),c.fromBufferAttribute(u,I),c_(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}}else{const u=t.attributes.position;for(let f=0,p=u.count/3;f<p;f++)for(let d=0;d<3;d++){const x=3*f+d,g=3*f+(d+1)%3;o.fromBufferAttribute(u,x),c.fromBufferAttribute(u,g),c_(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new Sn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function c_(s,t,n){const a=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}class Lf extends sl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yE extends Lf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bE extends sl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jy extends sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SE extends sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ME{constructor(t,n,a){const o=this;let c=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(x){f++,c===!1&&o.onStart!==void 0&&o.onStart(x,u,f),c=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,f),u===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,g){return d.push(x,g),this},this.removeHandler=function(x){const g=d.indexOf(x);return g!==-1&&d.splice(g,2),this},this.getHandler=function(x){for(let g=0,v=d.length;g<v;g+=2){const y=d[g],M=d[g+1];if(y.global&&(y.lastIndex=0),y.test(x))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const EE=new ME;class Lc{constructor(t){this.manager=t!==void 0?t:EE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls={};class TE extends Error{constructor(t,n){super(t),this.response=n}}class AE extends Lc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=vc.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0),c;if(ls[t]!==void 0){ls[t].push({onLoad:n,onProgress:a,onError:o});return}ls[t]=[],ls[t].push({onLoad:n,onProgress:a,onError:o});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const x=ls[t],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,M=y!==0;let E=0;const b=new ReadableStream({start(_){I();function I(){g.read().then(({done:T,value:P})=>{if(T)_.close();else{E+=P.byteLength;const G=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let B=0,H=x.length;B<H;B++){const $=x[B];$.onProgress&&$.onProgress(G)}_.enqueue(P),I()}},T=>{_.error(T)})}}});return new Response(b)}else throw new TE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(x=>new DOMParser().parseFromString(x,f));case"json":return d.json();default:if(f==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{vc.add(`file:${t}`,d);const x=ls[t];delete ls[t];for(let g=0,v=x.length;g<v;g++){const y=x[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const x=ls[t];if(x===void 0)throw this.manager.itemError(t),d;delete ls[t];for(let g=0,v=x.length;g<v;g++){const y=x[g];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vo=new WeakMap;class wE extends Lc{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=vc.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let g=Vo.get(u);g===void 0&&(g=[],Vo.set(u,g)),g.push({onLoad:n,onError:o})}return u}const f=Ac("img");function p(){x(),n&&n(this);const g=Vo.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onLoad&&y.onLoad(this)}Vo.delete(this),c.manager.itemEnd(t)}function d(g){x(),o&&o(g),vc.remove(`image:${t}`);const v=Vo.get(this)||[];for(let y=0;y<v.length;y++){const M=v[y];M.onError&&M.onError(g)}Vo.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),vc.add(`image:${t}`,f),c.manager.itemStart(t),f.src=t,f}}class CE extends Lc{constructor(t){super(t)}load(t,n,a,o){const c=new ai,u=new wE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Wm extends si{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const dp=new cn,u_=new Y,f_=new Y;class Wy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Pa,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gm,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;u_.setFromMatrixPosition(t.matrixWorld),n.position.copy(u_),f_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(f_),n.updateMatrixWorld(),dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const h_=new cn,oc=new Y,pp=new Y;class RE extends Wy{constructor(){super(new ki(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),oc.setFromMatrixPosition(t.matrixWorld),a.position.copy(oc),pp.copy(a.position),pp.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(pp),a.updateMatrixWorld(),o.makeTranslation(-oc.x,-oc.y,-oc.z),h_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h_,a.coordinateSystem,a.reversedDepth)}}class DE extends Wm{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new RE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qm extends Uy{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UE extends Wy{constructor(){super(new qm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d_ extends Wm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new UE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class NE extends Wm{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class LE extends fi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class PE extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class OE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class Sm extends L1{constructor(t,n,a=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class p_{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Se(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const m_=new Mt;class zE{constructor(t=new Mt(1/0,1/0),n=new Mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=m_.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,m_).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const g_=new Y,pf=new Y,Go=new Y,ko=new Y,mp=new Y,BE=new Y,IE=new Y;class FE{constructor(t=new Y,n=new Y){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){g_.subVectors(t,this.start),pf.subVectors(this.end,this.start);const a=pf.dot(pf);let c=pf.dot(g_)/a;return n&&(c=Se(c,0,1)),c}closestPointToPoint(t,n,a){const o=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(o).add(this.start)}distanceSqToLine3(t,n=BE,a=IE){const o=10000000000000001e-32;let c,u;const f=this.start,p=t.start,d=this.end,x=t.end;Go.subVectors(d,f),ko.subVectors(x,p),mp.subVectors(f,p);const g=Go.dot(Go),v=ko.dot(ko),y=ko.dot(mp);if(g<=o&&v<=o)return n.copy(f),a.copy(p),n.sub(a),n.dot(n);if(g<=o)c=0,u=y/v,u=Se(u,0,1);else{const M=Go.dot(mp);if(v<=o)u=0,c=Se(-M/g,0,1);else{const E=Go.dot(ko),b=g*v-E*E;b!==0?c=Se((E*y-M*v)/b,0,1):c=0,u=(E*c+y)/v,u<0?(u=0,c=Se(-M/g,0,1)):u>1&&(u=1,c=Se((E-M)/g,0,1))}}return n.copy(f).add(Go.multiplyScalar(c)),a.copy(p).add(ko.multiplyScalar(u)),n.sub(a),n.dot(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Nr{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new Qo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,a,o){return this.currentPath.quadraticCurveTo(t,n,a,o),this}bezierCurveTo(t,n,a,o,c,u){return this.currentPath.bezierCurveTo(t,n,a,o,c,u),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(_){const I=[];for(let T=0,P=_.length;T<P;T++){const G=_[T],B=new xc;B.curves=G.curves,I.push(B)}return I}function a(_,I){const T=I.length;let P=!1;for(let G=T-1,B=0;B<T;G=B++){let H=I[G],$=I[B],N=$.x-H.x,D=$.y-H.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(H=I[B],N=-N,$=I[G],D=-D),_.y<H.y||_.y>$.y)continue;if(_.y===H.y){if(_.x===H.x)return!0}else{const K=D*(_.x-H.x)-N*(_.y-H.y);if(K===0)return!0;if(K<0)continue;P=!P}}else{if(_.y!==H.y)continue;if($.x<=_.x&&_.x<=H.x||H.x<=_.x&&_.x<=$.x)return!0}}return P}const o=Js.isClockWise,c=this.subPaths;if(c.length===0)return[];let u,f,p;const d=[];if(c.length===1)return f=c[0],p=new xc,p.curves=f.curves,d.push(p),d;let x=!o(c[0].getPoints());x=t?!x:x;const g=[],v=[];let y=[],M=0,E;v[M]=void 0,y[M]=[];for(let _=0,I=c.length;_<I;_++)f=c[_],E=f.getPoints(),u=o(E),u=t?!u:u,u?(!x&&v[M]&&M++,v[M]={s:new xc,p:E},v[M].s.curves=f.curves,x&&M++,y[M]=[]):y[M].push({h:f,p:E[0]});if(!v[0])return n(c);if(v.length>1){let _=!1,I=0;for(let T=0,P=v.length;T<P;T++)g[T]=[];for(let T=0,P=v.length;T<P;T++){const G=y[T];for(let B=0;B<G.length;B++){const H=G[B];let $=!0;for(let N=0;N<v.length;N++)a(H.p,v[N].p)&&(T!==N&&I++,$?($=!1,g[N].push(H)):_=!0);$&&g[T].push(H)}}I>0&&_===!1&&(y=g)}let b;for(let _=0,I=v.length;_<I;_++){p=v[_].s,d.push(p),b=y[_];for(let T=0,P=b.length;T<P;T++)p.holes.push(b[T].h)}return d}}class HE extends Xr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function x_(s,t,n,a){const o=VE(a);switch(n){case vy:return s*t;case Pm:return s*t/o.components*o.byteLength;case Om:return s*t/o.components*o.byteLength;case zm:return s*t*2/o.components*o.byteLength;case Bm:return s*t*2/o.components*o.byteLength;case _y:return s*t*3/o.components*o.byteLength;case ya:return s*t*4/o.components*o.byteLength;case Im:return s*t*4/o.components*o.byteLength;case Ef:case Tf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Af:case wf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jp:case qp:return Math.max(s,16)*Math.max(t,8)/4;case Xp:case Wp:return Math.max(s,8)*Math.max(t,8)/2;case Yp:case Zp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $p:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tm:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case em:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case nm:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case im:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case am:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case om:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lm:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case um:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fm:case hm:case dm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pm:case mm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gm:case xm:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VE(s){switch(s){case Pa:case py:return{byteLength:1,components:1};case Sc:case my:case ci:return{byteLength:2,components:1};case Nm:case Lm:return{byteLength:2,components:4};case Hr:case Um:case Ua:return{byteLength:4,components:1};case gy:case xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qy(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function GE(s){const t=new WeakMap;function n(f,p){const d=f.array,x=f.usage,g=d.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,d,x),f.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const x=p.array,g=p.updateRanges;if(s.bindBuffer(d,f),g.length===0)s.bufferSubData(d,0,x);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];s.bufferSubData(d,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(s.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=t.get(f);(!x||x.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:kE,alphahash_pars_fragment:XE,alphamap_fragment:jE,alphamap_pars_fragment:WE,alphatest_fragment:qE,alphatest_pars_fragment:YE,aomap_fragment:ZE,aomap_pars_fragment:KE,batching_pars_vertex:QE,batching_vertex:JE,begin_vertex:$E,beginnormal_vertex:tT,bsdfs:eT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:aT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:rT,clipping_planes_vertex:oT,color_fragment:lT,color_pars_fragment:cT,color_pars_vertex:uT,color_vertex:fT,common:hT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:xT,emissivemap_pars_fragment:vT,colorspace_fragment:_T,colorspace_pars_fragment:yT,envmap_fragment:bT,envmap_common_pars_fragment:ST,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:OT,envmap_vertex:TT,fog_vertex:AT,fog_pars_vertex:wT,fog_fragment:CT,fog_pars_fragment:RT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:UT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:LT,lights_pars_begin:PT,lights_toon_fragment:zT,lights_toon_pars_fragment:BT,lights_phong_fragment:IT,lights_phong_pars_fragment:FT,lights_physical_fragment:HT,lights_physical_pars_fragment:VT,lights_fragment_begin:GT,lights_fragment_maps:kT,lights_fragment_end:XT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:qT,logdepthbuf_vertex:YT,map_fragment:ZT,map_pars_fragment:KT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:t3,morphinstance_vertex:e3,morphcolor_vertex:n3,morphnormal_vertex:i3,morphtarget_pars_vertex:a3,morphtarget_vertex:s3,normal_fragment_begin:r3,normal_fragment_maps:o3,normal_pars_fragment:l3,normal_pars_vertex:c3,normal_vertex:u3,normalmap_pars_fragment:f3,clearcoat_normal_fragment_begin:h3,clearcoat_normal_fragment_maps:d3,clearcoat_pars_fragment:p3,iridescence_pars_fragment:m3,opaque_fragment:g3,packing:x3,premultiplied_alpha_fragment:v3,project_vertex:_3,dithering_fragment:y3,dithering_pars_fragment:b3,roughnessmap_fragment:S3,roughnessmap_pars_fragment:M3,shadowmap_pars_fragment:E3,shadowmap_pars_vertex:T3,shadowmap_vertex:A3,shadowmask_pars_fragment:w3,skinbase_vertex:C3,skinning_pars_vertex:R3,skinning_vertex:D3,skinnormal_vertex:U3,specularmap_fragment:N3,specularmap_pars_fragment:L3,tonemapping_fragment:P3,tonemapping_pars_fragment:O3,transmission_fragment:z3,transmission_pars_fragment:B3,uv_pars_fragment:I3,uv_pars_vertex:F3,uv_vertex:H3,worldpos_vertex:V3,background_vert:G3,background_frag:k3,backgroundCube_vert:X3,backgroundCube_frag:j3,cube_vert:W3,cube_frag:q3,depth_vert:Y3,depth_frag:Z3,distanceRGBA_vert:K3,distanceRGBA_frag:Q3,equirect_vert:J3,equirect_frag:$3,linedashed_vert:t2,linedashed_frag:e2,meshbasic_vert:n2,meshbasic_frag:i2,meshlambert_vert:a2,meshlambert_frag:s2,meshmatcap_vert:r2,meshmatcap_frag:o2,meshnormal_vert:l2,meshnormal_frag:c2,meshphong_vert:u2,meshphong_frag:f2,meshphysical_vert:h2,meshphysical_frag:d2,meshtoon_vert:p2,meshtoon_frag:m2,points_vert:g2,points_frag:x2,shadow_vert:v2,shadow_frag:_2,sprite_vert:y2,sprite_frag:b2},ne={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ai={basic:{uniforms:gi([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:gi([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new xe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:gi([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:gi([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:gi([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new xe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:gi([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:gi([ne.points,ne.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:gi([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:gi([ne.common,ne.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:gi([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:gi([ne.sprite,ne.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:gi([ne.common,ne.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:gi([ne.lights,ne.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ai.physical={uniforms:gi([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const mf={r:0,b:0,g:0},Lr=new ba,S2=new cn;function M2(s,t,n,a,o,c,u){const f=new xe(0);let p=c===!0?0:1,d,x,g=null,v=0,y=null;function M(T){let P=T.isScene===!0?T.background:null;return P&&P.isTexture&&(P=(T.backgroundBlurriness>0?n:t).get(P)),P}function E(T){let P=!1;const G=M(T);G===null?_(f,p):G&&G.isColor&&(_(G,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(T,P){const G=M(P);G&&(G.isCubeTexture||G.mapping===Pf)?(x===void 0&&(x=new wn(new rl(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:nl(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,H,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Lr.copy(P.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(S2.makeRotationFromEuler(Lr)),x.material.toneMapped=Ye.getTransfer(G.colorSpace)!==on,(g!==G||v!==G.version||y!==s.toneMapping)&&(x.material.needsUpdate=!0,g=G,v=G.version,y=s.toneMapping),x.layers.enableAll(),T.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(d===void 0&&(d=new wn(new Nc(2,2),new Pn({name:"BackgroundMaterial",uniforms:nl(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=G,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Ye.getTransfer(G.colorSpace)!==on,G.matrixAutoUpdate===!0&&G.updateMatrix(),d.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||v!==G.version||y!==s.toneMapping)&&(d.material.needsUpdate=!0,g=G,v=G.version,y=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function _(T,P){T.getRGB(mf,Dy(s)),a.buffers.color.setClear(mf.r,mf.g,mf.b,P,u)}function I(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,P=1){f.set(T),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(T){p=T,_(f,p)},render:E,addToRenderList:b,dispose:I}}function E2(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(D,K,nt,ut,mt){let xt=!1;const k=g(ut,nt,K);c!==k&&(c=k,d(c.object)),xt=y(D,ut,nt,mt),xt&&M(D,ut,nt,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(xt||u)&&(u=!1,P(D,K,nt,ut),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function p(){return s.createVertexArray()}function d(D){return s.bindVertexArray(D)}function x(D){return s.deleteVertexArray(D)}function g(D,K,nt){const ut=nt.wireframe===!0;let mt=a[D.id];mt===void 0&&(mt={},a[D.id]=mt);let xt=mt[K.id];xt===void 0&&(xt={},mt[K.id]=xt);let k=xt[ut];return k===void 0&&(k=v(p()),xt[ut]=k),k}function v(D){const K=[],nt=[],ut=[];for(let mt=0;mt<n;mt++)K[mt]=0,nt[mt]=0,ut[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:nt,attributeDivisors:ut,object:D,attributes:{},index:null}}function y(D,K,nt,ut){const mt=c.attributes,xt=K.attributes;let k=0;const Q=nt.getAttributes();for(const j in Q)if(Q[j].location>=0){const At=mt[j];let V=xt[j];if(V===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),At===void 0||At.attribute!==V||V&&At.data!==V.data)return!0;k++}return c.attributesNum!==k||c.index!==ut}function M(D,K,nt,ut){const mt={},xt=K.attributes;let k=0;const Q=nt.getAttributes();for(const j in Q)if(Q[j].location>=0){let At=xt[j];At===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(At=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(At=D.instanceColor));const V={};V.attribute=At,At&&At.data&&(V.data=At.data),mt[j]=V,k++}c.attributes=mt,c.attributesNum=k,c.index=ut}function E(){const D=c.newAttributes;for(let K=0,nt=D.length;K<nt;K++)D[K]=0}function b(D){_(D,0)}function _(D,K){const nt=c.newAttributes,ut=c.enabledAttributes,mt=c.attributeDivisors;nt[D]=1,ut[D]===0&&(s.enableVertexAttribArray(D),ut[D]=1),mt[D]!==K&&(s.vertexAttribDivisor(D,K),mt[D]=K)}function I(){const D=c.newAttributes,K=c.enabledAttributes;for(let nt=0,ut=K.length;nt<ut;nt++)K[nt]!==D[nt]&&(s.disableVertexAttribArray(nt),K[nt]=0)}function T(D,K,nt,ut,mt,xt,k){k===!0?s.vertexAttribIPointer(D,K,nt,mt,xt):s.vertexAttribPointer(D,K,nt,ut,mt,xt)}function P(D,K,nt,ut){E();const mt=ut.attributes,xt=nt.getAttributes(),k=K.defaultAttributeValues;for(const Q in xt){const j=xt[Q];if(j.location>=0){let Tt=mt[Q];if(Tt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor)),Tt!==void 0){const At=Tt.normalized,V=Tt.itemSize,pt=t.get(Tt);if(pt===void 0)continue;const Lt=pt.buffer,Z=pt.type,X=pt.bytesPerElement,w=Z===s.INT||Z===s.UNSIGNED_INT||Tt.gpuType===Um;if(Tt.isInterleavedBufferAttribute){const C=Tt.data,st=C.stride,gt=Tt.offset;if(C.isInstancedInterleavedBuffer){for(let at=0;at<j.locationSize;at++)_(j.location+at,C.meshPerAttribute);D.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let at=0;at<j.locationSize;at++)b(j.location+at);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let at=0;at<j.locationSize;at++)T(j.location+at,V/j.locationSize,Z,At,st*X,(gt+V/j.locationSize*at)*X,w)}else{if(Tt.isInstancedBufferAttribute){for(let C=0;C<j.locationSize;C++)_(j.location+C,Tt.meshPerAttribute);D.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let C=0;C<j.locationSize;C++)b(j.location+C);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let C=0;C<j.locationSize;C++)T(j.location+C,V/j.locationSize,Z,At,V*X,V/j.locationSize*C*X,w)}}else if(k!==void 0){const At=k[Q];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(j.location,At);break;case 3:s.vertexAttrib3fv(j.location,At);break;case 4:s.vertexAttrib4fv(j.location,At);break;default:s.vertexAttrib1fv(j.location,At)}}}}I()}function G(){$();for(const D in a){const K=a[D];for(const nt in K){const ut=K[nt];for(const mt in ut)x(ut[mt].object),delete ut[mt];delete K[nt]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const K=a[D.id];for(const nt in K){const ut=K[nt];for(const mt in ut)x(ut[mt].object),delete ut[mt];delete K[nt]}delete a[D.id]}function H(D){for(const K in a){const nt=a[K];if(nt[D.id]===void 0)continue;const ut=nt[D.id];for(const mt in ut)x(ut[mt].object),delete ut[mt];delete nt[D.id]}}function $(){N(),u=!0,c!==o&&(c=o,d(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:$,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:b,disableUnusedAttributes:I}}function T2(s,t,n){let a;function o(d){a=d}function c(d,x){s.drawArrays(a,d,x),n.update(x,a,1)}function u(d,x,g){g!==0&&(s.drawArraysInstanced(a,d,x,g),n.update(x,a,g))}function f(d,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];n.update(y,a,1)}function p(d,x,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],x[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,x,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E]*v[E];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function A2(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==ya&&a.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(H){const $=H===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Pa&&a.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ua&&!$)}function p(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const x=p(d);x!==d&&(Ee("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:I,maxVaryings:T,maxFragmentUniforms:P,vertexTextures:G,maxSamples:B}}function w2(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Zs,f=new be,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||o;return o=v,a=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,E=g.clipIntersection,b=g.clipShadows,_=s.get(g);if(!o||M===null||M.length===0||c&&!b)c?x(null):d();else{const I=c?0:a,T=I*4;let P=_.clippingState||null;p.value=P,P=x(M,v,T,y);for(let G=0;G!==T;++G)P[G]=n[G];_.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function x(g,v,y,M){const E=g!==null?g.length:0;let b=null;if(E!==0){if(b=p.value,M!==!0||b===null){const _=y+E*4,I=v.matrixWorldInverse;f.getNormalMatrix(I),(b===null||b.length<_)&&(b=new Float32Array(_));for(let T=0,P=y;T!==E;++T,P+=4)u.copy(g[T]).applyMatrix4(I,f),u.normal.toArray(b,P),b[P+3]=u.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,b}}function C2(s){let t=new WeakMap;function n(u,f){return f===Vp?u.mapping=$o:f===Gp&&(u.mapping=tl),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Vp||f===Gp)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new U1(p.height);return d.fromEquirectangularTexture(s,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const $s=4,v_=[.125,.215,.35,.446,.526,.582],zr=20,R2=256,lc=new qm,__=new xe;let gp=null,xp=0,vp=0,_p=!1;const D2=new Y;class Mm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=D2}=c;gp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gp,xp,vp),this._renderer.xr.enabled=_p,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===$o||t.mapping===tl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:la,minFilter:la,generateMipmaps:!1,type:ci,format:ya,colorSpace:el,depthBuffer:!1},o=y_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U2(c)),this._blurMaterial=L2(c,t,n)}return o}_compileMaterial(t){const n=new wn(new fi,t);this._renderer.compile(n,lc)}_sceneToCubeUV(t,n,a,o,c){const p=new ki(90,1,n,a),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(__),g.toneMapping=er,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new rl,new jr({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,b=E.material;let _=!1;const I=t.background;I?I.isColor&&(b.color.copy(I),t.background=null,_=!0):(b.color.copy(__),_=!0);for(let T=0;T<6;T++){const P=T%3;P===0?(p.up.set(0,d[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[T],c.y,c.z)):P===1?(p.up.set(0,0,d[T]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[T],c.z)):(p.up.set(0,d[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[T]));const G=this._cubeSize;Xo(o,P*G,T>2?G:0,G,G),g.setRenderTarget(o),_&&g.render(E,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=I}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===$o||t.mapping===tl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;Xo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,lc)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const I=3*Math.max(this._cubeSize,16),T=4*this._cubeSize;this._ggxMaterial=N2(this._lodMax,I,T)}const u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-x*x),v=.05+d*.95,y=g*v,{_lodMax:M}=this,E=this._sizeLods[a],b=3*E*(a>M-$s?a-M+$s:0),_=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,Xo(c,b,_,3*E,2*E),o.setRenderTarget(c),o.render(f,lc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-a,Xo(t,b,_,3*E,2*E),o.setRenderTarget(t),o.render(f,lc)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Cn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*zr-1),E=c/M,b=isFinite(c)?1+Math.floor(x*E):zr;b>zr&&Ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${zr}`);const _=[];let I=0;for(let H=0;H<zr;++H){const $=H/E,N=Math.exp(-$*$/2);_.push(N),H===0?I+=N:H<b&&(I+=2*N)}for(let H=0;H<_.length;H++)_[H]=_[H]/I;v.envMap.value=t.texture,v.samples.value=b,v.weights.value=_,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:T}=this;v.dTheta.value=M,v.mipInt.value=T-a;const P=this._sizeLods[o],G=3*P*(o>T-$s?o-T+$s:0),B=4*(this._cubeSize-P);Xo(n,G,B,3*P,2*P),p.setRenderTarget(n),p.render(g,lc)}}function U2(s){const t=[],n=[],a=[];let o=s;const c=s-$s+1+v_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>s-$s?p=v_[u-s+$s-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),x=-d,g=1+d,v=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,E=3,b=2,_=1,I=new Float32Array(E*M*y),T=new Float32Array(b*M*y),P=new Float32Array(_*M*y);for(let B=0;B<y;B++){const H=B%3*2/3-1,$=B>2?0:-1,N=[H,$,0,H+2/3,$,0,H+2/3,$+1,0,H,$,0,H+2/3,$+1,0,H,$+1,0];I.set(N,E*M*B),T.set(v,b*M*B);const D=[B,B,B,B,B,B];P.set(D,_*M*B)}const G=new fi;G.setAttribute("position",new wi(I,E)),G.setAttribute("uv",new wi(T,b)),G.setAttribute("faceIndex",new wi(P,_)),a.push(new wn(G,null)),o>$s&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function y_(s,t,n){const a=new Kn(s,t,n);return a.texture.mapping=Pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Xo(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function N2(s,t,n){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Of(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function L2(s,t,n){const a=new Float32Array(zr),o=new Y(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function b_(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function S_(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P2(s){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Vp||p===Gp,x=p===$o||p===tl;if(d||x){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Mm(s)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||x&&y&&o(y)?(n===null&&(n=new Mm(s)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f){let p=0;const d=6;for(let x=0;x<d;x++)f[x]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function O2(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&wc("WebGLRenderer: "+a+" extension not supported."),o}}}function z2(s,t,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const I=y.array;E=y.version;for(let T=0,P=I.length;T<P;T+=3){const G=I[T+0],B=I[T+1],H=I[T+2];v.push(G,B,B,H,H,G)}}else if(M!==void 0){const I=M.array;E=M.version;for(let T=0,P=I.length/3-1;T<P;T+=3){const G=T+0,B=T+1,H=T+2;v.push(G,B,B,H,H,G)}}else return;const b=new(Sy(v)?Ry:Cy)(v,1);b.version=E;const _=c.get(g);_&&t.remove(_),c.set(g,b)}function x(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return c.get(g)}return{get:f,update:p,getWireframeAttribute:x}}function B2(s,t,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,y){s.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,M){M!==0&&(s.drawElementsInstanced(a,y,c,v*u,M),n.update(y,a,M))}function x(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,M);let b=0;for(let _=0;_<M;_++)b+=y[_];n.update(b,a,1)}function g(v,y,M,E){if(M===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<v.length;_++)d(v[_]/u,y[_],E[_]);else{b.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,E,0,M);let _=0;for(let I=0;I<M;I++)_+=y[I]*E[I];n.update(_,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function I2(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:Cn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function F2(s,t,n){const a=new WeakMap,o=new ke;function c(u,f,p){const d=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let N=function(){H.dispose(),a.delete(f),f.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const y=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let T=0;y===!0&&(T=1),M===!0&&(T=2),E===!0&&(T=3);let P=f.attributes.position.count*T,G=1;P>t.maxTextureSize&&(G=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const B=new Float32Array(P*G*4*g),H=new Ey(B,P,G,g);H.type=Ua,H.needsUpdate=!0;const $=T*4;for(let D=0;D<g;D++){const K=b[D],nt=_[D],ut=I[D],mt=P*G*4*D;for(let xt=0;xt<K.count;xt++){const k=xt*$;y===!0&&(o.fromBufferAttribute(K,xt),B[mt+k+0]=o.x,B[mt+k+1]=o.y,B[mt+k+2]=o.z,B[mt+k+3]=0),M===!0&&(o.fromBufferAttribute(nt,xt),B[mt+k+4]=o.x,B[mt+k+5]=o.y,B[mt+k+6]=o.z,B[mt+k+7]=0),E===!0&&(o.fromBufferAttribute(ut,xt),B[mt+k+8]=o.x,B[mt+k+9]=o.y,B[mt+k+10]=o.z,B[mt+k+11]=ut.itemSize===4?o.w:1)}}v={count:g,texture:H,size:new Mt(P,G)},a.set(f,v),f.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let y=0;for(let E=0;E<d.length;E++)y+=d[E];const M=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(s,"morphTargetBaseInfluence",M),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function H2(s,t,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,x=p.geometry,g=t.get(p,x);if(o.get(g)!==d&&(t.update(g),o.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const Yy=new ai,M_=new Oy(1,1),Zy=new Ey,Ky=new m1,Qy=new Ny,E_=[],T_=[],A_=new Float32Array(16),w_=new Float32Array(9),C_=new Float32Array(4);function ol(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=E_[o];if(c===void 0&&(c=new Float32Array(o),E_[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,s[u].toArray(c,f)}return c}function Wn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function qn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function zf(s,t){let n=T_[t];n===void 0&&(n=new Int32Array(t),T_[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function V2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function G2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wn(n,t))return;s.uniform2fv(this.addr,t),qn(n,t)}}function k2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wn(n,t))return;s.uniform3fv(this.addr,t),qn(n,t)}}function X2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wn(n,t))return;s.uniform4fv(this.addr,t),qn(n,t)}}function j2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Wn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),qn(n,t)}else{if(Wn(n,a))return;C_.set(a),s.uniformMatrix2fv(this.addr,!1,C_),qn(n,a)}}function W2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Wn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),qn(n,t)}else{if(Wn(n,a))return;w_.set(a),s.uniformMatrix3fv(this.addr,!1,w_),qn(n,a)}}function q2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Wn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),qn(n,t)}else{if(Wn(n,a))return;A_.set(a),s.uniformMatrix4fv(this.addr,!1,A_),qn(n,a)}}function Y2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function Z2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wn(n,t))return;s.uniform2iv(this.addr,t),qn(n,t)}}function K2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wn(n,t))return;s.uniform3iv(this.addr,t),qn(n,t)}}function Q2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wn(n,t))return;s.uniform4iv(this.addr,t),qn(n,t)}}function J2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function $2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wn(n,t))return;s.uniform2uiv(this.addr,t),qn(n,t)}}function tA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wn(n,t))return;s.uniform3uiv(this.addr,t),qn(n,t)}}function eA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wn(n,t))return;s.uniform4uiv(this.addr,t),qn(n,t)}}function nA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(M_.compareFunction=by,c=M_):c=Yy,n.setTexture2D(t||c,o)}function iA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Ky,o)}function aA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Qy,o)}function sA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Zy,o)}function rA(s){switch(s){case 5126:return V2;case 35664:return G2;case 35665:return k2;case 35666:return X2;case 35674:return j2;case 35675:return W2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return Z2;case 35668:case 35672:return K2;case 35669:case 35673:return Q2;case 5125:return J2;case 36294:return $2;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}function oA(s,t){s.uniform1fv(this.addr,t)}function lA(s,t){const n=ol(t,this.size,2);s.uniform2fv(this.addr,n)}function cA(s,t){const n=ol(t,this.size,3);s.uniform3fv(this.addr,n)}function uA(s,t){const n=ol(t,this.size,4);s.uniform4fv(this.addr,n)}function fA(s,t){const n=ol(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function hA(s,t){const n=ol(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dA(s,t){const n=ol(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function pA(s,t){s.uniform1iv(this.addr,t)}function mA(s,t){s.uniform2iv(this.addr,t)}function gA(s,t){s.uniform3iv(this.addr,t)}function xA(s,t){s.uniform4iv(this.addr,t)}function vA(s,t){s.uniform1uiv(this.addr,t)}function _A(s,t){s.uniform2uiv(this.addr,t)}function yA(s,t){s.uniform3uiv(this.addr,t)}function bA(s,t){s.uniform4uiv(this.addr,t)}function SA(s,t,n){const a=this.cache,o=t.length,c=zf(n,o);Wn(a,c)||(s.uniform1iv(this.addr,c),qn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Yy,c[u])}function MA(s,t,n){const a=this.cache,o=t.length,c=zf(n,o);Wn(a,c)||(s.uniform1iv(this.addr,c),qn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Ky,c[u])}function EA(s,t,n){const a=this.cache,o=t.length,c=zf(n,o);Wn(a,c)||(s.uniform1iv(this.addr,c),qn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Qy,c[u])}function TA(s,t,n){const a=this.cache,o=t.length,c=zf(n,o);Wn(a,c)||(s.uniform1iv(this.addr,c),qn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Zy,c[u])}function AA(s){switch(s){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return xA;case 5125:return vA;case 36294:return _A;case 36295:return yA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}class wA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=rA(n.type)}}class CA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AA(n.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function R_(s,t){s.seq.push(t),s.map[t.id]=t}function DA(s,t,n){const a=s.name,o=a.length;for(yp.lastIndex=0;;){const c=yp.exec(a),u=yp.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){R_(n,d===void 0?new wA(f,s,t):new CA(f,s,t));break}else{let g=n.map[f];g===void 0&&(g=new RA(f),R_(n,g)),n=g}}}class Cf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);DA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function D_(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const UA=37297;let NA=0;function LA(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const U_=new be;function PA(s){Ye._getMatrix(U_,Ye.workingColorSpace,s);const t=`mat3( ${U_.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Df:return[t,"LinearTransferOETF"];case on:return[t,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function N_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+LA(s.getShaderSource(t),f)}else return c}function OA(s,t){const n=PA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zA(s,t){let n;switch(t){case RM:n="Linear";break;case DM:n="Reinhard";break;case UM:n="Cineon";break;case NM:n="ACESFilmic";break;case PM:n="AgX";break;case OM:n="Neutral";break;case LM:n="Custom";break;default:Ee("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gf=new Y;function BA(){Ye.getLuminanceCoefficients(gf);const s=gf.x.toFixed(4),t=gf.y.toFixed(4),n=gf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dc).join(`
`)}function FA(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function HA(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:f}}return n}function dc(s){return s!==""}function L_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(s){return s.replace(VA,kA)}const GA=new Map;function kA(s,t){let n=Re[t];if(n===void 0){const a=GA.get(t);if(a!==void 0)n=Re[a],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Em(n)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(s){return s.replace(XA,jA)}function jA(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function z_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hy?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===us&&(t="SHADOWMAP_TYPE_VSM"),t}function qA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $o:case tl:t="ENVMAP_TYPE_CUBE";break;case Pf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tl:t="ENVMAP_MODE_REFRACTION";break}return t}function ZA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dm:t="ENVMAP_BLENDING_MULTIPLY";break;case wM:t="ENVMAP_BLENDING_MIX";break;case CM:t="ENVMAP_BLENDING_ADD";break}return t}function KA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function QA(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=WA(n),d=qA(n),x=YA(n),g=ZA(n),v=KA(n),y=IA(n),M=FA(c),E=o.createProgram();let b,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(dc).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(dc).join(`
`),_.length>0&&(_+=`
`)):(b=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dc).join(`
`),_=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Re.tonemapping_pars_fragment:"",n.toneMapping!==er?zA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),BA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(dc).join(`
`)),u=Em(u),u=L_(u,n),u=P_(u,n),f=Em(f),f=L_(f,n),f=P_(f,n),u=O_(u),f=O_(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",n.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=I+b+u,P=I+_+f,G=D_(o,o.VERTEX_SHADER,T),B=D_(o,o.FRAGMENT_SHADER,P);o.attachShader(E,G),o.attachShader(E,B),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function H(K){if(s.debug.checkShaderErrors){const nt=o.getProgramInfoLog(E)||"",ut=o.getShaderInfoLog(G)||"",mt=o.getShaderInfoLog(B)||"",xt=nt.trim(),k=ut.trim(),Q=mt.trim();let j=!0,Tt=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,G,B);else{const At=N_(o,G,"vertex"),V=N_(o,B,"fragment");Cn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+xt+`
`+At+`
`+V)}else xt!==""?Ee("WebGLProgram: Program Info Log:",xt):(k===""||Q==="")&&(Tt=!1);Tt&&(K.diagnostics={runnable:j,programLog:xt,vertexShader:{log:k,prefix:b},fragmentShader:{log:Q,prefix:_}})}o.deleteShader(G),o.deleteShader(B),$=new Cf(o,E),N=HA(o,E)}let $;this.getUniforms=function(){return $===void 0&&H(this),$};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(E,UA)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=G,this.fragmentShader=B,this}let JA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new tw(t),n.set(t,a)),a}}class tw{constructor(t){this.id=JA++,this.code=t,this.usedTimes=0}}function ew(s,t,n,a,o,c,u){const f=new Ay,p=new $A,d=new Set,x=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return d.add(N),N===0?"uv":`uv${N}`}function b(N,D,K,nt,ut){const mt=nt.fog,xt=ut.geometry,k=N.isMeshStandardMaterial?nt.environment:null,Q=(N.isMeshStandardMaterial?n:t).get(N.envMap||k),j=Q&&Q.mapping===Pf?Q.image.height:null,Tt=M[N.type];N.precision!==null&&(y=o.getMaxPrecision(N.precision),y!==N.precision&&Ee("WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const At=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,V=At!==void 0?At.length:0;let pt=0;xt.morphAttributes.position!==void 0&&(pt=1),xt.morphAttributes.normal!==void 0&&(pt=2),xt.morphAttributes.color!==void 0&&(pt=3);let Lt,Z,X,w;if(Tt){const Ve=Ai[Tt];Lt=Ve.vertexShader,Z=Ve.fragmentShader}else Lt=N.vertexShader,Z=N.fragmentShader,p.update(N),X=p.getVertexShaderID(N),w=p.getFragmentShaderID(N);const C=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),gt=ut.isInstancedMesh===!0,at=ut.isBatchedMesh===!0,Pt=!!N.map,Vt=!!N.matcap,Dt=!!Q,et=!!N.aoMap,R=!!N.lightMap,ft=!!N.bumpMap,ct=!!N.normalMap,W=!!N.displacementMap,z=!!N.emissiveMap,wt=!!N.metalnessMap,zt=!!N.roughnessMap,Qt=N.anisotropy>0,F=N.clearcoat>0,A=N.dispersion>0,ot=N.iridescence>0,Rt=N.sheen>0,Ut=N.transmission>0,Et=Qt&&!!N.anisotropyMap,ae=F&&!!N.clearcoatMap,Zt=F&&!!N.clearcoatNormalMap,ie=F&&!!N.clearcoatRoughnessMap,re=ot&&!!N.iridescenceMap,It=ot&&!!N.iridescenceThicknessMap,Xt=Rt&&!!N.sheenColorMap,oe=Rt&&!!N.sheenRoughnessMap,le=!!N.specularMap,Kt=!!N.specularColorMap,_e=!!N.specularIntensityMap,tt=Ut&&!!N.transmissionMap,Jt=Ut&&!!N.thicknessMap,qt=!!N.gradientMap,Yt=!!N.alphaMap,kt=N.alphaTest>0,Ft=!!N.alphaHash,ee=!!N.extensions;let de=er;N.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=s.toneMapping);const Xe={shaderID:Tt,shaderType:N.type,shaderName:N.name,vertexShader:Lt,fragmentShader:Z,defines:N.defines,customVertexShaderID:X,customFragmentShaderID:w,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:at,batchingColor:at&&ut._colorsTexture!==null,instancing:gt,instancingColor:gt&&ut.instanceColor!==null,instancingMorph:gt&&ut.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:C===null?s.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:el,alphaToCoverage:!!N.alphaToCoverage,map:Pt,matcap:Vt,envMap:Dt,envMapMode:Dt&&Q.mapping,envMapCubeUVHeight:j,aoMap:et,lightMap:R,bumpMap:ft,normalMap:ct,displacementMap:v&&W,emissiveMap:z,normalMapObjectSpace:ct&&N.normalMapType===IM,normalMapTangentSpace:ct&&N.normalMapType===Fm,metalnessMap:wt,roughnessMap:zt,anisotropy:Qt,anisotropyMap:Et,clearcoat:F,clearcoatMap:ae,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ie,dispersion:A,iridescence:ot,iridescenceMap:re,iridescenceThicknessMap:It,sheen:Rt,sheenColorMap:Xt,sheenRoughnessMap:oe,specularMap:le,specularColorMap:Kt,specularIntensityMap:_e,transmission:Ut,transmissionMap:tt,thicknessMap:Jt,gradientMap:qt,opaque:N.transparent===!1&&N.blending===Yo&&N.alphaToCoverage===!1,alphaMap:Yt,alphaTest:kt,alphaHash:Ft,combine:N.combine,mapUv:Pt&&E(N.map.channel),aoMapUv:et&&E(N.aoMap.channel),lightMapUv:R&&E(N.lightMap.channel),bumpMapUv:ft&&E(N.bumpMap.channel),normalMapUv:ct&&E(N.normalMap.channel),displacementMapUv:W&&E(N.displacementMap.channel),emissiveMapUv:z&&E(N.emissiveMap.channel),metalnessMapUv:wt&&E(N.metalnessMap.channel),roughnessMapUv:zt&&E(N.roughnessMap.channel),anisotropyMapUv:Et&&E(N.anisotropyMap.channel),clearcoatMapUv:ae&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:It&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:oe&&E(N.sheenRoughnessMap.channel),specularMapUv:le&&E(N.specularMap.channel),specularColorMapUv:Kt&&E(N.specularColorMap.channel),specularIntensityMapUv:_e&&E(N.specularIntensityMap.channel),transmissionMapUv:tt&&E(N.transmissionMap.channel),thicknessMapUv:Jt&&E(N.thicknessMap.channel),alphaMapUv:Yt&&E(N.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(ct||Qt),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!xt.attributes.uv&&(Pt||Yt),fog:!!mt,useFog:N.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:st,skinning:ut.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:pt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:Pt&&N.map.isVideoTexture===!0&&Ye.getTransfer(N.map.colorSpace)===on,decodeVideoTextureEmissive:z&&N.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(N.emissiveMap.colorSpace)===on,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ra,flipSided:N.side===ui,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ee&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&N.extensions.multiDraw===!0||at)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Xe.vertexUv1s=d.has(1),Xe.vertexUv2s=d.has(2),Xe.vertexUv3s=d.has(3),d.clear(),Xe}function _(N){const D=[];if(N.shaderID?D.push(N.shaderID):(D.push(N.customVertexShaderID),D.push(N.customFragmentShaderID)),N.defines!==void 0)for(const K in N.defines)D.push(K),D.push(N.defines[K]);return N.isRawShaderMaterial===!1&&(I(D,N),T(D,N),D.push(s.outputColorSpace)),D.push(N.customProgramCacheKey),D.join()}function I(N,D){N.push(D.precision),N.push(D.outputColorSpace),N.push(D.envMapMode),N.push(D.envMapCubeUVHeight),N.push(D.mapUv),N.push(D.alphaMapUv),N.push(D.lightMapUv),N.push(D.aoMapUv),N.push(D.bumpMapUv),N.push(D.normalMapUv),N.push(D.displacementMapUv),N.push(D.emissiveMapUv),N.push(D.metalnessMapUv),N.push(D.roughnessMapUv),N.push(D.anisotropyMapUv),N.push(D.clearcoatMapUv),N.push(D.clearcoatNormalMapUv),N.push(D.clearcoatRoughnessMapUv),N.push(D.iridescenceMapUv),N.push(D.iridescenceThicknessMapUv),N.push(D.sheenColorMapUv),N.push(D.sheenRoughnessMapUv),N.push(D.specularMapUv),N.push(D.specularColorMapUv),N.push(D.specularIntensityMapUv),N.push(D.transmissionMapUv),N.push(D.thicknessMapUv),N.push(D.combine),N.push(D.fogExp2),N.push(D.sizeAttenuation),N.push(D.morphTargetsCount),N.push(D.morphAttributeCount),N.push(D.numDirLights),N.push(D.numPointLights),N.push(D.numSpotLights),N.push(D.numSpotLightMaps),N.push(D.numHemiLights),N.push(D.numRectAreaLights),N.push(D.numDirLightShadows),N.push(D.numPointLightShadows),N.push(D.numSpotLightShadows),N.push(D.numSpotLightShadowsWithMaps),N.push(D.numLightProbes),N.push(D.shadowMapType),N.push(D.toneMapping),N.push(D.numClippingPlanes),N.push(D.numClipIntersection),N.push(D.depthPacking)}function T(N,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),D.gradientMap&&f.enable(22),N.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),N.push(f.mask)}function P(N){const D=M[N.type];let K;if(D){const nt=Ai[D];K=Gr.clone(nt.uniforms)}else K=N.uniforms;return K}function G(N,D){let K;for(let nt=0,ut=x.length;nt<ut;nt++){const mt=x[nt];if(mt.cacheKey===D){K=mt,++K.usedTimes;break}}return K===void 0&&(K=new QA(s,D,N,c),x.push(K)),K}function B(N){if(--N.usedTimes===0){const D=x.indexOf(N);x[D]=x[x.length-1],x.pop(),N.destroy()}}function H(N){p.remove(N)}function $(){p.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:P,acquireProgram:G,releaseProgram:B,releaseShaderCache:H,programs:x,dispose:$}}function nw(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function iw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function B_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function I_(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g,v,y,M,E,b){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:b},s[t]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=y,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=b),t++,_}function f(g,v,y,M,E,b){const _=u(g,v,y,M,E,b);y.transmission>0?a.push(_):y.transparent===!0?o.push(_):n.push(_)}function p(g,v,y,M,E,b){const _=u(g,v,y,M,E,b);y.transmission>0?a.unshift(_):y.transparent===!0?o.unshift(_):n.unshift(_)}function d(g,v){n.length>1&&n.sort(g||iw),a.length>1&&a.sort(v||B_),o.length>1&&o.sort(v||B_)}function x(){for(let g=t,v=s.length;g<v;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:f,unshift:p,finish:x,sort:d}}function aw(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new I_,s.set(a,[u])):o>=c.length?(u=new I_,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function sw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Y,color:new xe};break;case"SpotLight":n={position:new Y,direction:new Y,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":n={color:new xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=n,n}}}function rw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let ow=0;function lw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cw(s){const t=new sw,n=rw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Y);const o=new Y,c=new cn,u=new cn;function f(d){let x=0,g=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let y=0,M=0,E=0,b=0,_=0,I=0,T=0,P=0,G=0,B=0,H=0;d.sort(lw);for(let N=0,D=d.length;N<D;N++){const K=d[N],nt=K.color,ut=K.intensity,mt=K.distance,xt=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)x+=nt.r*ut,g+=nt.g*ut,v+=nt.b*ut;else if(K.isLightProbe){for(let k=0;k<9;k++)a.probe[k].addScaledVector(K.sh.coefficients[k],ut);H++}else if(K.isDirectionalLight){const k=t.get(K);if(k.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const Q=K.shadow,j=n.get(K);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,a.directionalShadow[y]=j,a.directionalShadowMap[y]=xt,a.directionalShadowMatrix[y]=K.shadow.matrix,I++}a.directional[y]=k,y++}else if(K.isSpotLight){const k=t.get(K);k.position.setFromMatrixPosition(K.matrixWorld),k.color.copy(nt).multiplyScalar(ut),k.distance=mt,k.coneCos=Math.cos(K.angle),k.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),k.decay=K.decay,a.spot[E]=k;const Q=K.shadow;if(K.map&&(a.spotLightMap[G]=K.map,G++,Q.updateMatrices(K),K.castShadow&&B++),a.spotLightMatrix[E]=Q.matrix,K.castShadow){const j=n.get(K);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,a.spotShadow[E]=j,a.spotShadowMap[E]=xt,P++}E++}else if(K.isRectAreaLight){const k=t.get(K);k.color.copy(nt).multiplyScalar(ut),k.halfWidth.set(K.width*.5,0,0),k.halfHeight.set(0,K.height*.5,0),a.rectArea[b]=k,b++}else if(K.isPointLight){const k=t.get(K);if(k.color.copy(K.color).multiplyScalar(K.intensity),k.distance=K.distance,k.decay=K.decay,K.castShadow){const Q=K.shadow,j=n.get(K);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,a.pointShadow[M]=j,a.pointShadowMap[M]=xt,a.pointShadowMatrix[M]=K.shadow.matrix,T++}a.point[M]=k,M++}else if(K.isHemisphereLight){const k=t.get(K);k.skyColor.copy(K.color).multiplyScalar(ut),k.groundColor.copy(K.groundColor).multiplyScalar(ut),a.hemi[_]=k,_++}}b>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2)),a.ambient[0]=x,a.ambient[1]=g,a.ambient[2]=v;const $=a.hash;($.directionalLength!==y||$.pointLength!==M||$.spotLength!==E||$.rectAreaLength!==b||$.hemiLength!==_||$.numDirectionalShadows!==I||$.numPointShadows!==T||$.numSpotShadows!==P||$.numSpotMaps!==G||$.numLightProbes!==H)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=b,a.point.length=M,a.hemi.length=_,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=T,a.pointShadowMap.length=T,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=T,a.spotLightMatrix.length=P+G-B,a.spotLightMap.length=G,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=H,$.directionalLength=y,$.pointLength=M,$.spotLength=E,$.rectAreaLength=b,$.hemiLength=_,$.numDirectionalShadows=I,$.numPointShadows=T,$.numSpotShadows=P,$.numSpotMaps=G,$.numLightProbes=H,a.version=ow++)}function p(d,x){let g=0,v=0,y=0,M=0,E=0;const b=x.matrixWorldInverse;for(let _=0,I=d.length;_<I;_++){const T=d[_];if(T.isDirectionalLight){const P=a.directional[g];P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(b),g++}else if(T.isSpotLight){const P=a.spot[y];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(b),P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(b),y++}else if(T.isRectAreaLight){const P=a.rectArea[M];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(b),u.identity(),c.copy(T.matrixWorld),c.premultiply(b),u.extractRotation(c),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(T.isPointLight){const P=a.point[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(b),v++}else if(T.isHemisphereLight){const P=a.hemi[E];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(b),E++}}}return{setup:f,setupView:p,state:a}}function F_(s){const t=new cw(s),n=[],a=[];function o(x){d.camera=x,n.length=0,a.length=0}function c(x){n.push(x)}function u(x){a.push(x)}function f(){t.setup(n)}function p(x){t.setupView(n,x)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function uw(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new F_(s),t.set(o,[f])):c>=u.length?(f=new F_(s),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dw(s,t,n){let a=new Gm;const o=new Mt,c=new Mt,u=new ke,f=new jy({depthPacking:yy}),p=new SE,d={},x=n.maxTextureSize,g={[nr]:ui,[ui]:nr,[ra]:ra},v=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:fw,fragmentShader:hw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new fi;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wn(M,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hy;let _=this.type;this.render=function(B,H,$){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||B.length===0)return;const N=s.getRenderTarget(),D=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(ca),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=_!==us&&this.type===us,mt=_===us&&this.type!==us;for(let xt=0,k=B.length;xt<k;xt++){const Q=B[xt],j=Q.shadow;if(j===void 0){Ee("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Tt=j.getFrameExtents();if(o.multiply(Tt),c.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/Tt.x),o.x=c.x*Tt.x,j.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/Tt.y),o.y=c.y*Tt.y,j.mapSize.y=c.y)),j.map===null||ut===!0||mt===!0){const V=this.type!==us?{minFilter:ji,magFilter:ji}:{};j.map!==null&&j.map.dispose(),j.map=new Kn(o.x,o.y,V),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const At=j.getViewportCount();for(let V=0;V<At;V++){const pt=j.getViewport(V);u.set(c.x*pt.x,c.y*pt.y,c.x*pt.z,c.y*pt.w),nt.viewport(u),j.updateMatrices(Q,V),a=j.getFrustum(),P(H,$,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===us&&I(j,$),j.needsUpdate=!1}_=this.type,b.needsUpdate=!1,s.setRenderTarget(N,D,K)};function I(B,H){const $=t.update(E);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Kn(o.x,o.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(H,null,$,v,E,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(H,null,$,y,E,null)}function T(B,H,$,N){let D=null;const K=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(K!==void 0)D=K;else if(D=$.isPointLight===!0?p:f,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const nt=D.uuid,ut=H.uuid;let mt=d[nt];mt===void 0&&(mt={},d[nt]=mt);let xt=mt[ut];xt===void 0&&(xt=D.clone(),mt[ut]=xt,H.addEventListener("dispose",G)),D=xt}if(D.visible=H.visible,D.wireframe=H.wireframe,N===us?D.side=H.shadowSide!==null?H.shadowSide:H.side:D.side=H.shadowSide!==null?H.shadowSide:g[H.side],D.alphaMap=H.alphaMap,D.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,D.map=H.map,D.clipShadows=H.clipShadows,D.clippingPlanes=H.clippingPlanes,D.clipIntersection=H.clipIntersection,D.displacementMap=H.displacementMap,D.displacementScale=H.displacementScale,D.displacementBias=H.displacementBias,D.wireframeLinewidth=H.wireframeLinewidth,D.linewidth=H.linewidth,$.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=s.properties.get(D);nt.light=$}return D}function P(B,H,$,N,D){if(B.visible===!1)return;if(B.layers.test(H.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===us)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const ut=t.update(B),mt=B.material;if(Array.isArray(mt)){const xt=ut.groups;for(let k=0,Q=xt.length;k<Q;k++){const j=xt[k],Tt=mt[j.materialIndex];if(Tt&&Tt.visible){const At=T(B,Tt,N,D);B.onBeforeShadow(s,B,H,$,ut,At,j),s.renderBufferDirect($,null,ut,At,B,j),B.onAfterShadow(s,B,H,$,ut,At,j)}}}else if(mt.visible){const xt=T(B,mt,N,D);B.onBeforeShadow(s,B,H,$,ut,xt,null),s.renderBufferDirect($,null,ut,xt,B,null),B.onAfterShadow(s,B,H,$,ut,xt,null)}}const nt=B.children;for(let ut=0,mt=nt.length;ut<mt;ut++)P(nt[ut],H,$,N,D)}function G(B){B.target.removeEventListener("dispose",G);for(const $ in d){const N=d[$],D=B.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}}const pw={[Pp]:Op,[zp]:Fp,[Bp]:Hp,[Jo]:Ip,[Op]:Pp,[Fp]:zp,[Hp]:Bp,[Ip]:Jo};function mw(s,t){function n(){let tt=!1;const Jt=new ke;let qt=null;const Yt=new ke(0,0,0,0);return{setMask:function(kt){qt!==kt&&!tt&&(s.colorMask(kt,kt,kt,kt),qt=kt)},setLocked:function(kt){tt=kt},setClear:function(kt,Ft,ee,de,Xe){Xe===!0&&(kt*=de,Ft*=de,ee*=de),Jt.set(kt,Ft,ee,de),Yt.equals(Jt)===!1&&(s.clearColor(kt,Ft,ee,de),Yt.copy(Jt))},reset:function(){tt=!1,qt=null,Yt.set(-1,0,0,0)}}}function a(){let tt=!1,Jt=!1,qt=null,Yt=null,kt=null;return{setReversed:function(Ft){if(Jt!==Ft){const ee=t.get("EXT_clip_control");Ft?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Jt=Ft;const de=kt;kt=null,this.setClear(de)}},getReversed:function(){return Jt},setTest:function(Ft){Ft?C(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(Ft){qt!==Ft&&!tt&&(s.depthMask(Ft),qt=Ft)},setFunc:function(Ft){if(Jt&&(Ft=pw[Ft]),Yt!==Ft){switch(Ft){case Pp:s.depthFunc(s.NEVER);break;case Op:s.depthFunc(s.ALWAYS);break;case zp:s.depthFunc(s.LESS);break;case Jo:s.depthFunc(s.LEQUAL);break;case Bp:s.depthFunc(s.EQUAL);break;case Ip:s.depthFunc(s.GEQUAL);break;case Fp:s.depthFunc(s.GREATER);break;case Hp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Yt=Ft}},setLocked:function(Ft){tt=Ft},setClear:function(Ft){kt!==Ft&&(Jt&&(Ft=1-Ft),s.clearDepth(Ft),kt=Ft)},reset:function(){tt=!1,qt=null,Yt=null,kt=null,Jt=!1}}}function o(){let tt=!1,Jt=null,qt=null,Yt=null,kt=null,Ft=null,ee=null,de=null,Xe=null;return{setTest:function(Ve){tt||(Ve?C(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Ve){Jt!==Ve&&!tt&&(s.stencilMask(Ve),Jt=Ve)},setFunc:function(Ve,xn,hi){(qt!==Ve||Yt!==xn||kt!==hi)&&(s.stencilFunc(Ve,xn,hi),qt=Ve,Yt=xn,kt=hi)},setOp:function(Ve,xn,hi){(Ft!==Ve||ee!==xn||de!==hi)&&(s.stencilOp(Ve,xn,hi),Ft=Ve,ee=xn,de=hi)},setLocked:function(Ve){tt=Ve},setClear:function(Ve){Xe!==Ve&&(s.clearStencil(Ve),Xe=Ve)},reset:function(){tt=!1,Jt=null,qt=null,Yt=null,kt=null,Ft=null,ee=null,de=null,Xe=null}}}const c=new n,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let x={},g={},v=new WeakMap,y=[],M=null,E=!1,b=null,_=null,I=null,T=null,P=null,G=null,B=null,H=new xe(0,0,0),$=0,N=!1,D=null,K=null,nt=null,ut=null,mt=null;const xt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=Q>=2);let Tt=null,At={};const V=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),Lt=new ke().fromArray(V),Z=new ke().fromArray(pt);function X(tt,Jt,qt,Yt){const kt=new Uint8Array(4),Ft=s.createTexture();s.bindTexture(tt,Ft),s.texParameteri(tt,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(tt,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<qt;ee++)tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?s.texImage3D(Jt,0,s.RGBA,1,1,Yt,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Jt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return Ft}const w={};w[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),w[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),w[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),C(s.DEPTH_TEST),u.setFunc(Jo),ft(!1),ct(Lv),C(s.CULL_FACE),et(ca);function C(tt){x[tt]!==!0&&(s.enable(tt),x[tt]=!0)}function st(tt){x[tt]!==!1&&(s.disable(tt),x[tt]=!1)}function gt(tt,Jt){return g[tt]!==Jt?(s.bindFramebuffer(tt,Jt),g[tt]=Jt,tt===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Jt),tt===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Jt),!0):!1}function at(tt,Jt){let qt=y,Yt=!1;if(tt){qt=v.get(Jt),qt===void 0&&(qt=[],v.set(Jt,qt));const kt=tt.textures;if(qt.length!==kt.length||qt[0]!==s.COLOR_ATTACHMENT0){for(let Ft=0,ee=kt.length;Ft<ee;Ft++)qt[Ft]=s.COLOR_ATTACHMENT0+Ft;qt.length=kt.length,Yt=!0}}else qt[0]!==s.BACK&&(qt[0]=s.BACK,Yt=!0);Yt&&s.drawBuffers(qt)}function Pt(tt){return M!==tt?(s.useProgram(tt),M=tt,!0):!1}const Vt={[Or]:s.FUNC_ADD,[uM]:s.FUNC_SUBTRACT,[fM]:s.FUNC_REVERSE_SUBTRACT};Vt[hM]=s.MIN,Vt[dM]=s.MAX;const Dt={[pM]:s.ZERO,[mM]:s.ONE,[gM]:s.SRC_COLOR,[Np]:s.SRC_ALPHA,[SM]:s.SRC_ALPHA_SATURATE,[yM]:s.DST_COLOR,[vM]:s.DST_ALPHA,[xM]:s.ONE_MINUS_SRC_COLOR,[Lp]:s.ONE_MINUS_SRC_ALPHA,[bM]:s.ONE_MINUS_DST_COLOR,[_M]:s.ONE_MINUS_DST_ALPHA,[MM]:s.CONSTANT_COLOR,[EM]:s.ONE_MINUS_CONSTANT_COLOR,[TM]:s.CONSTANT_ALPHA,[AM]:s.ONE_MINUS_CONSTANT_ALPHA};function et(tt,Jt,qt,Yt,kt,Ft,ee,de,Xe,Ve){if(tt===ca){E===!0&&(st(s.BLEND),E=!1);return}if(E===!1&&(C(s.BLEND),E=!0),tt!==cM){if(tt!==b||Ve!==N){if((_!==Or||P!==Or)&&(s.blendEquation(s.FUNC_ADD),_=Or,P=Or),Ve)switch(tt){case Yo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rf:s.blendFunc(s.ONE,s.ONE);break;case Pv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ov:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Cn("WebGLState: Invalid blending: ",tt);break}else switch(tt){case Yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Pv:Cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ov:Cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Cn("WebGLState: Invalid blending: ",tt);break}I=null,T=null,G=null,B=null,H.set(0,0,0),$=0,b=tt,N=Ve}return}kt=kt||Jt,Ft=Ft||qt,ee=ee||Yt,(Jt!==_||kt!==P)&&(s.blendEquationSeparate(Vt[Jt],Vt[kt]),_=Jt,P=kt),(qt!==I||Yt!==T||Ft!==G||ee!==B)&&(s.blendFuncSeparate(Dt[qt],Dt[Yt],Dt[Ft],Dt[ee]),I=qt,T=Yt,G=Ft,B=ee),(de.equals(H)===!1||Xe!==$)&&(s.blendColor(de.r,de.g,de.b,Xe),H.copy(de),$=Xe),b=tt,N=!1}function R(tt,Jt){tt.side===ra?st(s.CULL_FACE):C(s.CULL_FACE);let qt=tt.side===ui;Jt&&(qt=!qt),ft(qt),tt.blending===Yo&&tt.transparent===!1?et(ca):et(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),u.setFunc(tt.depthFunc),u.setTest(tt.depthTest),u.setMask(tt.depthWrite),c.setMask(tt.colorWrite);const Yt=tt.stencilWrite;f.setTest(Yt),Yt&&(f.setMask(tt.stencilWriteMask),f.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),f.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),z(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?C(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(tt){D!==tt&&(tt?s.frontFace(s.CW):s.frontFace(s.CCW),D=tt)}function ct(tt){tt!==rM?(C(s.CULL_FACE),tt!==K&&(tt===Lv?s.cullFace(s.BACK):tt===oM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),K=tt}function W(tt){tt!==nt&&(k&&s.lineWidth(tt),nt=tt)}function z(tt,Jt,qt){tt?(C(s.POLYGON_OFFSET_FILL),(ut!==Jt||mt!==qt)&&(s.polygonOffset(Jt,qt),ut=Jt,mt=qt)):st(s.POLYGON_OFFSET_FILL)}function wt(tt){tt?C(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function zt(tt){tt===void 0&&(tt=s.TEXTURE0+xt-1),Tt!==tt&&(s.activeTexture(tt),Tt=tt)}function Qt(tt,Jt,qt){qt===void 0&&(Tt===null?qt=s.TEXTURE0+xt-1:qt=Tt);let Yt=At[qt];Yt===void 0&&(Yt={type:void 0,texture:void 0},At[qt]=Yt),(Yt.type!==tt||Yt.texture!==Jt)&&(Tt!==qt&&(s.activeTexture(qt),Tt=qt),s.bindTexture(tt,Jt||w[tt]),Yt.type=tt,Yt.texture=Jt)}function F(){const tt=At[Tt];tt!==void 0&&tt.type!==void 0&&(s.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function Rt(){try{s.texSubImage2D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function Ut(){try{s.texSubImage3D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function Et(){try{s.compressedTexSubImage2D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function ae(){try{s.compressedTexSubImage3D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function Zt(){try{s.texStorage2D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function ie(){try{s.texStorage3D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function re(){try{s.texImage2D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function It(){try{s.texImage3D(...arguments)}catch(tt){tt("WebGLState:",tt)}}function Xt(tt){Lt.equals(tt)===!1&&(s.scissor(tt.x,tt.y,tt.z,tt.w),Lt.copy(tt))}function oe(tt){Z.equals(tt)===!1&&(s.viewport(tt.x,tt.y,tt.z,tt.w),Z.copy(tt))}function le(tt,Jt){let qt=d.get(Jt);qt===void 0&&(qt=new WeakMap,d.set(Jt,qt));let Yt=qt.get(tt);Yt===void 0&&(Yt=s.getUniformBlockIndex(Jt,tt.name),qt.set(tt,Yt))}function Kt(tt,Jt){const Yt=d.get(Jt).get(tt);p.get(Jt)!==Yt&&(s.uniformBlockBinding(Jt,Yt,tt.__bindingPointIndex),p.set(Jt,Yt))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},Tt=null,At={},g={},v=new WeakMap,y=[],M=null,E=!1,b=null,_=null,I=null,T=null,P=null,G=null,B=null,H=new xe(0,0,0),$=0,N=!1,D=null,K=null,nt=null,ut=null,mt=null,Lt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:C,disable:st,bindFramebuffer:gt,drawBuffers:at,useProgram:Pt,setBlending:et,setMaterial:R,setFlipSided:ft,setCullFace:ct,setLineWidth:W,setPolygonOffset:z,setScissorTest:wt,activeTexture:zt,bindTexture:Qt,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:ot,texImage2D:re,texImage3D:It,updateUBOMapping:le,uniformBlockBinding:Kt,texStorage2D:Zt,texStorage3D:ie,texSubImage2D:Rt,texSubImage3D:Ut,compressedTexSubImage2D:Et,compressedTexSubImage3D:ae,scissor:Xt,viewport:oe,reset:_e}}function gw(s,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Mt,x=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return y?new OffscreenCanvas(F,A):Ac("canvas")}function E(F,A,ot){let Rt=1;const Ut=Qt(F);if((Ut.width>ot||Ut.height>ot)&&(Rt=ot/Math.max(Ut.width,Ut.height)),Rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Et=Math.floor(Rt*Ut.width),ae=Math.floor(Rt*Ut.height);g===void 0&&(g=M(Et,ae));const Zt=A?M(Et,ae):g;return Zt.width=Et,Zt.height=ae,Zt.getContext("2d").drawImage(F,0,0,Et,ae),Ee("WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+Et+"x"+ae+")."),Zt}else return"data"in F&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),F;return F}function b(F){return F.generateMipmaps}function _(F){s.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(F,A,ot,Rt,Ut=!1){if(F!==null){if(s[F]!==void 0)return s[F];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Et=A;if(A===s.RED&&(ot===s.FLOAT&&(Et=s.R32F),ot===s.HALF_FLOAT&&(Et=s.R16F),ot===s.UNSIGNED_BYTE&&(Et=s.R8)),A===s.RED_INTEGER&&(ot===s.UNSIGNED_BYTE&&(Et=s.R8UI),ot===s.UNSIGNED_SHORT&&(Et=s.R16UI),ot===s.UNSIGNED_INT&&(Et=s.R32UI),ot===s.BYTE&&(Et=s.R8I),ot===s.SHORT&&(Et=s.R16I),ot===s.INT&&(Et=s.R32I)),A===s.RG&&(ot===s.FLOAT&&(Et=s.RG32F),ot===s.HALF_FLOAT&&(Et=s.RG16F),ot===s.UNSIGNED_BYTE&&(Et=s.RG8)),A===s.RG_INTEGER&&(ot===s.UNSIGNED_BYTE&&(Et=s.RG8UI),ot===s.UNSIGNED_SHORT&&(Et=s.RG16UI),ot===s.UNSIGNED_INT&&(Et=s.RG32UI),ot===s.BYTE&&(Et=s.RG8I),ot===s.SHORT&&(Et=s.RG16I),ot===s.INT&&(Et=s.RG32I)),A===s.RGB_INTEGER&&(ot===s.UNSIGNED_BYTE&&(Et=s.RGB8UI),ot===s.UNSIGNED_SHORT&&(Et=s.RGB16UI),ot===s.UNSIGNED_INT&&(Et=s.RGB32UI),ot===s.BYTE&&(Et=s.RGB8I),ot===s.SHORT&&(Et=s.RGB16I),ot===s.INT&&(Et=s.RGB32I)),A===s.RGBA_INTEGER&&(ot===s.UNSIGNED_BYTE&&(Et=s.RGBA8UI),ot===s.UNSIGNED_SHORT&&(Et=s.RGBA16UI),ot===s.UNSIGNED_INT&&(Et=s.RGBA32UI),ot===s.BYTE&&(Et=s.RGBA8I),ot===s.SHORT&&(Et=s.RGBA16I),ot===s.INT&&(Et=s.RGBA32I)),A===s.RGB&&(ot===s.UNSIGNED_INT_5_9_9_9_REV&&(Et=s.RGB9_E5),ot===s.UNSIGNED_INT_10F_11F_11F_REV&&(Et=s.R11F_G11F_B10F)),A===s.RGBA){const ae=Ut?Df:Ye.getTransfer(Rt);ot===s.FLOAT&&(Et=s.RGBA32F),ot===s.HALF_FLOAT&&(Et=s.RGBA16F),ot===s.UNSIGNED_BYTE&&(Et=ae===on?s.SRGB8_ALPHA8:s.RGBA8),ot===s.UNSIGNED_SHORT_4_4_4_4&&(Et=s.RGBA4),ot===s.UNSIGNED_SHORT_5_5_5_1&&(Et=s.RGB5_A1)}return(Et===s.R16F||Et===s.R32F||Et===s.RG16F||Et===s.RG32F||Et===s.RGBA16F||Et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Et}function P(F,A){let ot;return F?A===null||A===Hr||A===Mc?ot=s.DEPTH24_STENCIL8:A===Ua?ot=s.DEPTH32F_STENCIL8:A===Sc&&(ot=s.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hr||A===Mc?ot=s.DEPTH_COMPONENT24:A===Ua?ot=s.DEPTH_COMPONENT32F:A===Sc&&(ot=s.DEPTH_COMPONENT16),ot}function G(F,A){return b(F)===!0||F.isFramebufferTexture&&F.minFilter!==ji&&F.minFilter!==la?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function B(F){const A=F.target;A.removeEventListener("dispose",B),$(A),A.isVideoTexture&&x.delete(A)}function H(F){const A=F.target;A.removeEventListener("dispose",H),D(A)}function $(F){const A=a.get(F);if(A.__webglInit===void 0)return;const ot=F.source,Rt=v.get(ot);if(Rt){const Ut=Rt[A.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(F),Object.keys(Rt).length===0&&v.delete(ot)}a.remove(F)}function N(F){const A=a.get(F);s.deleteTexture(A.__webglTexture);const ot=F.source,Rt=v.get(ot);delete Rt[A.__cacheKey],u.memory.textures--}function D(F){const A=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(A.__webglFramebuffer[Rt]))for(let Ut=0;Ut<A.__webglFramebuffer[Rt].length;Ut++)s.deleteFramebuffer(A.__webglFramebuffer[Rt][Ut]);else s.deleteFramebuffer(A.__webglFramebuffer[Rt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let Rt=0;Rt<A.__webglFramebuffer.length;Rt++)s.deleteFramebuffer(A.__webglFramebuffer[Rt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Rt=0;Rt<A.__webglColorRenderbuffer.length;Rt++)A.__webglColorRenderbuffer[Rt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Rt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ot=F.textures;for(let Rt=0,Ut=ot.length;Rt<Ut;Rt++){const Et=a.get(ot[Rt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),u.memory.textures--),a.remove(ot[Rt])}a.remove(F)}let K=0;function nt(){K=0}function ut(){const F=K;return F>=o.maxTextures&&Ee("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),K+=1,F}function mt(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function xt(F,A){const ot=a.get(F);if(F.isVideoTexture&&wt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ot.__version!==F.version){const Rt=F.image;if(Rt===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{w(ot,F,A);return}}else F.isExternalTexture&&(ot.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ot.__webglTexture,s.TEXTURE0+A)}function k(F,A){const ot=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ot.__version!==F.version){w(ot,F,A);return}else F.isExternalTexture&&(ot.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,ot.__webglTexture,s.TEXTURE0+A)}function Q(F,A){const ot=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ot.__version!==F.version){w(ot,F,A);return}n.bindTexture(s.TEXTURE_3D,ot.__webglTexture,s.TEXTURE0+A)}function j(F,A){const ot=a.get(F);if(F.version>0&&ot.__version!==F.version){C(ot,F,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture,s.TEXTURE0+A)}const Tt={[ps]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[kp]:s.MIRRORED_REPEAT},At={[ji]:s.NEAREST,[zM]:s.NEAREST_MIPMAP_NEAREST,[Gu]:s.NEAREST_MIPMAP_LINEAR,[la]:s.LINEAR,[Fd]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},V={[FM]:s.NEVER,[jM]:s.ALWAYS,[HM]:s.LESS,[by]:s.LEQUAL,[VM]:s.EQUAL,[XM]:s.GEQUAL,[GM]:s.GREATER,[kM]:s.NOTEQUAL};function pt(F,A){if(A.type===Ua&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===la||A.magFilter===Fd||A.magFilter===Gu||A.magFilter===Br||A.minFilter===la||A.minFilter===Fd||A.minFilter===Gu||A.minFilter===Br)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,Tt[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,Tt[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,Tt[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,At[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ji||A.minFilter!==Gu&&A.minFilter!==Br||A.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Lt(F,A){let ot=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",B));const Rt=A.source;let Ut=v.get(Rt);Ut===void 0&&(Ut={},v.set(Rt,Ut));const Et=mt(A);if(Et!==F.__cacheKey){Ut[Et]===void 0&&(Ut[Et]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ot=!0),Ut[Et].usedTimes++;const ae=Ut[F.__cacheKey];ae!==void 0&&(Ut[F.__cacheKey].usedTimes--,ae.usedTimes===0&&N(A)),F.__cacheKey=Et,F.__webglTexture=Ut[Et].texture}return ot}function Z(F,A,ot){return Math.floor(Math.floor(F/ot)/A)}function X(F,A,ot,Rt){const Et=F.updateRanges;if(Et.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ot,Rt,A.data);else{Et.sort((It,Xt)=>It.start-Xt.start);let ae=0;for(let It=1;It<Et.length;It++){const Xt=Et[ae],oe=Et[It],le=Xt.start+Xt.count,Kt=Z(oe.start,A.width,4),_e=Z(Xt.start,A.width,4);oe.start<=le+1&&Kt===_e&&Z(oe.start+oe.count-1,A.width,4)===Kt?Xt.count=Math.max(Xt.count,oe.start+oe.count-Xt.start):(++ae,Et[ae]=oe)}Et.length=ae+1;const Zt=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),re=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let It=0,Xt=Et.length;It<Xt;It++){const oe=Et[It],le=Math.floor(oe.start/4),Kt=Math.ceil(oe.count/4),_e=le%A.width,tt=Math.floor(le/A.width),Jt=Kt,qt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt),n.texSubImage2D(s.TEXTURE_2D,0,_e,tt,Jt,qt,ot,Rt,A.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Zt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function w(F,A,ot){let Rt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Rt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Rt=s.TEXTURE_3D);const Ut=Lt(F,A),Et=A.source;n.bindTexture(Rt,F.__webglTexture,s.TEXTURE0+ot);const ae=a.get(Et);if(Et.version!==ae.__version||Ut===!0){n.activeTexture(s.TEXTURE0+ot);const Zt=Ye.getPrimaries(Ye.workingColorSpace),ie=A.colorSpace===Ks?null:Ye.getPrimaries(A.colorSpace),re=A.colorSpace===Ks||Zt===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let It=E(A.image,!1,o.maxTextureSize);It=zt(A,It);const Xt=c.convert(A.format,A.colorSpace),oe=c.convert(A.type);let le=T(A.internalFormat,Xt,oe,A.colorSpace,A.isVideoTexture);pt(Rt,A);let Kt;const _e=A.mipmaps,tt=A.isVideoTexture!==!0,Jt=ae.__version===void 0||Ut===!0,qt=Et.dataReady,Yt=G(A,It);if(A.isDepthTexture)le=P(A.format===Tc,A.type),Jt&&(tt?n.texStorage2D(s.TEXTURE_2D,1,le,It.width,It.height):n.texImage2D(s.TEXTURE_2D,0,le,It.width,It.height,0,Xt,oe,null));else if(A.isDataTexture)if(_e.length>0){tt&&Jt&&n.texStorage2D(s.TEXTURE_2D,Yt,le,_e[0].width,_e[0].height);for(let kt=0,Ft=_e.length;kt<Ft;kt++)Kt=_e[kt],tt?qt&&n.texSubImage2D(s.TEXTURE_2D,kt,0,0,Kt.width,Kt.height,Xt,oe,Kt.data):n.texImage2D(s.TEXTURE_2D,kt,le,Kt.width,Kt.height,0,Xt,oe,Kt.data);A.generateMipmaps=!1}else tt?(Jt&&n.texStorage2D(s.TEXTURE_2D,Yt,le,It.width,It.height),qt&&X(A,It,Xt,oe)):n.texImage2D(s.TEXTURE_2D,0,le,It.width,It.height,0,Xt,oe,It.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Jt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,le,_e[0].width,_e[0].height,It.depth);for(let kt=0,Ft=_e.length;kt<Ft;kt++)if(Kt=_e[kt],A.format!==ya)if(Xt!==null)if(tt){if(qt)if(A.layerUpdates.size>0){const ee=x_(Kt.width,Kt.height,A.format,A.type);for(const de of A.layerUpdates){const Xe=Kt.data.subarray(de*ee/Kt.data.BYTES_PER_ELEMENT,(de+1)*ee/Kt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,kt,0,0,de,Kt.width,Kt.height,1,Xt,Xe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,kt,0,0,0,Kt.width,Kt.height,It.depth,Xt,Kt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,kt,le,Kt.width,Kt.height,It.depth,0,Kt.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?qt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,kt,0,0,0,Kt.width,Kt.height,It.depth,Xt,oe,Kt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,kt,le,Kt.width,Kt.height,It.depth,0,Xt,oe,Kt.data)}else{tt&&Jt&&n.texStorage2D(s.TEXTURE_2D,Yt,le,_e[0].width,_e[0].height);for(let kt=0,Ft=_e.length;kt<Ft;kt++)Kt=_e[kt],A.format!==ya?Xt!==null?tt?qt&&n.compressedTexSubImage2D(s.TEXTURE_2D,kt,0,0,Kt.width,Kt.height,Xt,Kt.data):n.compressedTexImage2D(s.TEXTURE_2D,kt,le,Kt.width,Kt.height,0,Kt.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?qt&&n.texSubImage2D(s.TEXTURE_2D,kt,0,0,Kt.width,Kt.height,Xt,oe,Kt.data):n.texImage2D(s.TEXTURE_2D,kt,le,Kt.width,Kt.height,0,Xt,oe,Kt.data)}else if(A.isDataArrayTexture)if(tt){if(Jt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,le,It.width,It.height,It.depth),qt)if(A.layerUpdates.size>0){const kt=x_(It.width,It.height,A.format,A.type);for(const Ft of A.layerUpdates){const ee=It.data.subarray(Ft*kt/It.data.BYTES_PER_ELEMENT,(Ft+1)*kt/It.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ft,It.width,It.height,1,Xt,oe,ee)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,It.width,It.height,It.depth,Xt,oe,It.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,le,It.width,It.height,It.depth,0,Xt,oe,It.data);else if(A.isData3DTexture)tt?(Jt&&n.texStorage3D(s.TEXTURE_3D,Yt,le,It.width,It.height,It.depth),qt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,It.width,It.height,It.depth,Xt,oe,It.data)):n.texImage3D(s.TEXTURE_3D,0,le,It.width,It.height,It.depth,0,Xt,oe,It.data);else if(A.isFramebufferTexture){if(Jt)if(tt)n.texStorage2D(s.TEXTURE_2D,Yt,le,It.width,It.height);else{let kt=It.width,Ft=It.height;for(let ee=0;ee<Yt;ee++)n.texImage2D(s.TEXTURE_2D,ee,le,kt,Ft,0,Xt,oe,null),kt>>=1,Ft>>=1}}else if(_e.length>0){if(tt&&Jt){const kt=Qt(_e[0]);n.texStorage2D(s.TEXTURE_2D,Yt,le,kt.width,kt.height)}for(let kt=0,Ft=_e.length;kt<Ft;kt++)Kt=_e[kt],tt?qt&&n.texSubImage2D(s.TEXTURE_2D,kt,0,0,Xt,oe,Kt):n.texImage2D(s.TEXTURE_2D,kt,le,Xt,oe,Kt);A.generateMipmaps=!1}else if(tt){if(Jt){const kt=Qt(It);n.texStorage2D(s.TEXTURE_2D,Yt,le,kt.width,kt.height)}qt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,oe,It)}else n.texImage2D(s.TEXTURE_2D,0,le,Xt,oe,It);b(A)&&_(Rt),ae.__version=Et.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function C(F,A,ot){if(A.image.length!==6)return;const Rt=Lt(F,A),Ut=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ot);const Et=a.get(Ut);if(Ut.version!==Et.__version||Rt===!0){n.activeTexture(s.TEXTURE0+ot);const ae=Ye.getPrimaries(Ye.workingColorSpace),Zt=A.colorSpace===Ks?null:Ye.getPrimaries(A.colorSpace),ie=A.colorSpace===Ks||ae===Zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const re=A.isCompressedTexture||A.image[0].isCompressedTexture,It=A.image[0]&&A.image[0].isDataTexture,Xt=[];for(let Ft=0;Ft<6;Ft++)!re&&!It?Xt[Ft]=E(A.image[Ft],!0,o.maxCubemapSize):Xt[Ft]=It?A.image[Ft].image:A.image[Ft],Xt[Ft]=zt(A,Xt[Ft]);const oe=Xt[0],le=c.convert(A.format,A.colorSpace),Kt=c.convert(A.type),_e=T(A.internalFormat,le,Kt,A.colorSpace),tt=A.isVideoTexture!==!0,Jt=Et.__version===void 0||Rt===!0,qt=Ut.dataReady;let Yt=G(A,oe);pt(s.TEXTURE_CUBE_MAP,A);let kt;if(re){tt&&Jt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Yt,_e,oe.width,oe.height);for(let Ft=0;Ft<6;Ft++){kt=Xt[Ft].mipmaps;for(let ee=0;ee<kt.length;ee++){const de=kt[ee];A.format!==ya?le!==null?tt?qt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee,0,0,de.width,de.height,le,de.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee,_e,de.width,de.height,0,de.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?qt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee,0,0,de.width,de.height,le,Kt,de.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee,_e,de.width,de.height,0,le,Kt,de.data)}}}else{if(kt=A.mipmaps,tt&&Jt){kt.length>0&&Yt++;const Ft=Qt(Xt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Yt,_e,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(It){tt?qt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,Xt[Ft].width,Xt[Ft].height,le,Kt,Xt[Ft].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,_e,Xt[Ft].width,Xt[Ft].height,0,le,Kt,Xt[Ft].data);for(let ee=0;ee<kt.length;ee++){const Xe=kt[ee].image[Ft].image;tt?qt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee+1,0,0,Xe.width,Xe.height,le,Kt,Xe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee+1,_e,Xe.width,Xe.height,0,le,Kt,Xe.data)}}else{tt?qt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,le,Kt,Xt[Ft]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,_e,le,Kt,Xt[Ft]);for(let ee=0;ee<kt.length;ee++){const de=kt[ee];tt?qt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee+1,0,0,le,Kt,de.image[Ft]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ee+1,_e,le,Kt,de.image[Ft])}}}b(A)&&_(s.TEXTURE_CUBE_MAP),Et.__version=Ut.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function st(F,A,ot,Rt,Ut,Et){const ae=c.convert(ot.format,ot.colorSpace),Zt=c.convert(ot.type),ie=T(ot.internalFormat,ae,Zt,ot.colorSpace),re=a.get(A),It=a.get(ot);if(It.__renderTarget=A,!re.__hasExternalTextures){const Xt=Math.max(1,A.width>>Et),oe=Math.max(1,A.height>>Et);Ut===s.TEXTURE_3D||Ut===s.TEXTURE_2D_ARRAY?n.texImage3D(Ut,Et,ie,Xt,oe,A.depth,0,ae,Zt,null):n.texImage2D(Ut,Et,ie,Xt,oe,0,ae,Zt,null)}n.bindFramebuffer(s.FRAMEBUFFER,F),z(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Rt,Ut,It.__webglTexture,0,W(A)):(Ut===s.TEXTURE_2D||Ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Rt,Ut,It.__webglTexture,Et),n.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(F,A,ot){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const Rt=A.depthTexture,Ut=Rt&&Rt.isDepthTexture?Rt.type:null,Et=P(A.stencilBuffer,Ut),ae=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=W(A);z(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,Et,A.width,A.height):ot?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Et,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Et,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,F)}else{const Rt=A.textures;for(let Ut=0;Ut<Rt.length;Ut++){const Et=Rt[Ut],ae=c.convert(Et.format,Et.colorSpace),Zt=c.convert(Et.type),ie=T(Et.internalFormat,ae,Zt,Et.colorSpace),re=W(A);ot&&z(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,ie,A.width,A.height):z(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,ie,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Rt=a.get(A.depthTexture);Rt.__renderTarget=A,(!Rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),xt(A.depthTexture,0);const Ut=Rt.__webglTexture,Et=W(A);if(A.depthTexture.format===Ec)z(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ut,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ut,0);else if(A.depthTexture.format===Tc)z(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ut,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function Pt(F){const A=a.get(F),ot=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const Rt=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Rt){const Ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Rt.removeEventListener("dispose",Ut)};Rt.addEventListener("dispose",Ut),A.__depthDisposeCallback=Ut}A.__boundDepthTexture=Rt}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const Rt=F.texture.mipmaps;Rt&&Rt.length>0?at(A.__webglFramebuffer[0],F):at(A.__webglFramebuffer,F)}else if(ot){A.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Rt]),A.__webglDepthbuffer[Rt]===void 0)A.__webglDepthbuffer[Rt]=s.createRenderbuffer(),gt(A.__webglDepthbuffer[Rt],F,!1);else{const Ut=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer[Rt];s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,Et)}}else{const Rt=F.texture.mipmaps;if(Rt&&Rt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),gt(A.__webglDepthbuffer,F,!1);else{const Ut=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,Et)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(F,A,ot){const Rt=a.get(F);A!==void 0&&st(Rt.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ot!==void 0&&Pt(F)}function Dt(F){const A=F.texture,ot=a.get(F),Rt=a.get(A);F.addEventListener("dispose",H);const Ut=F.textures,Et=F.isWebGLCubeRenderTarget===!0,ae=Ut.length>1;if(ae||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture()),Rt.__version=A.version,u.memory.textures++),Et){ot.__webglFramebuffer=[];for(let Zt=0;Zt<6;Zt++)if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer[Zt]=[];for(let ie=0;ie<A.mipmaps.length;ie++)ot.__webglFramebuffer[Zt][ie]=s.createFramebuffer()}else ot.__webglFramebuffer[Zt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Zt=0;Zt<A.mipmaps.length;Zt++)ot.__webglFramebuffer[Zt]=s.createFramebuffer()}else ot.__webglFramebuffer=s.createFramebuffer();if(ae)for(let Zt=0,ie=Ut.length;Zt<ie;Zt++){const re=a.get(Ut[Zt]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&z(F)===!1){ot.__webglMultisampledFramebuffer=s.createFramebuffer(),ot.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Zt=0;Zt<Ut.length;Zt++){const ie=Ut[Zt];ot.__webglColorRenderbuffer[Zt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ot.__webglColorRenderbuffer[Zt]);const re=c.convert(ie.format,ie.colorSpace),It=c.convert(ie.type),Xt=T(ie.internalFormat,re,It,ie.colorSpace,F.isXRRenderTarget===!0),oe=W(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Xt,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,ot.__webglColorRenderbuffer[Zt])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ot.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(ot.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Et){n.bindTexture(s.TEXTURE_CUBE_MAP,Rt.__webglTexture),pt(s.TEXTURE_CUBE_MAP,A);for(let Zt=0;Zt<6;Zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ie=0;ie<A.mipmaps.length;ie++)st(ot.__webglFramebuffer[Zt][ie],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ie);else st(ot.__webglFramebuffer[Zt],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0);b(A)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let Zt=0,ie=Ut.length;Zt<ie;Zt++){const re=Ut[Zt],It=a.get(re);let Xt=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Xt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Xt,It.__webglTexture),pt(Xt,re),st(ot.__webglFramebuffer,F,re,s.COLOR_ATTACHMENT0+Zt,Xt,0),b(re)&&_(Xt)}n.unbindTexture()}else{let Zt=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Zt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Zt,Rt.__webglTexture),pt(Zt,A),A.mipmaps&&A.mipmaps.length>0)for(let ie=0;ie<A.mipmaps.length;ie++)st(ot.__webglFramebuffer[ie],F,A,s.COLOR_ATTACHMENT0,Zt,ie);else st(ot.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,Zt,0);b(A)&&_(Zt),n.unbindTexture()}F.depthBuffer&&Pt(F)}function et(F){const A=F.textures;for(let ot=0,Rt=A.length;ot<Rt;ot++){const Ut=A[ot];if(b(Ut)){const Et=I(F),ae=a.get(Ut).__webglTexture;n.bindTexture(Et,ae),_(Et),n.unbindTexture()}}}const R=[],ft=[];function ct(F){if(F.samples>0){if(z(F)===!1){const A=F.textures,ot=F.width,Rt=F.height;let Ut=s.COLOR_BUFFER_BIT;const Et=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=a.get(F),Zt=A.length>1;if(Zt)for(let re=0;re<A.length;re++)n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ie=F.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<A.length;re++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Ut|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Ut|=s.STENCIL_BUFFER_BIT)),Zt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const It=a.get(A[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,ot,Rt,0,0,ot,Rt,Ut,s.NEAREST),p===!0&&(R.length=0,ft.length=0,R.push(s.COLOR_ATTACHMENT0+re),F.depthBuffer&&F.resolveDepthBuffer===!1&&(R.push(Et),ft.push(Et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Zt)for(let re=0;re<A.length;re++){n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const It=a.get(A[re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,It,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function W(F){return Math.min(o.maxSamples,F.samples)}function z(F){const A=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(F){const A=u.render.frame;x.get(F)!==A&&(x.set(F,A),F.update())}function zt(F,A){const ot=F.colorSpace,Rt=F.format,Ut=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ot!==el&&ot!==Ks&&(Ye.getTransfer(ot)===on?(Rt!==ya||Ut!==Pa)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Cn("WebGLTextures: Unsupported texture color space:",ot)),A}function Qt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=xt,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=z}function xw(s,t){function n(a,o=Ks){let c;const u=Ye.getTransfer(o);if(a===Pa)return s.UNSIGNED_BYTE;if(a===Nm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Lm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===gy)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===xy)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===py)return s.BYTE;if(a===my)return s.SHORT;if(a===Sc)return s.UNSIGNED_SHORT;if(a===Um)return s.INT;if(a===Hr)return s.UNSIGNED_INT;if(a===Ua)return s.FLOAT;if(a===ci)return s.HALF_FLOAT;if(a===vy)return s.ALPHA;if(a===_y)return s.RGB;if(a===ya)return s.RGBA;if(a===Ec)return s.DEPTH_COMPONENT;if(a===Tc)return s.DEPTH_STENCIL;if(a===Pm)return s.RED;if(a===Om)return s.RED_INTEGER;if(a===zm)return s.RG;if(a===Bm)return s.RG_INTEGER;if(a===Im)return s.RGBA_INTEGER;if(a===Ef||a===Tf||a===Af||a===wf)if(u===on)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ef)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ef)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Af)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Xp||a===jp||a===Wp||a===qp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Xp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===jp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yp||a===Zp||a===Kp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Yp||a===Zp)return u===on?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Kp)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am||a===sm||a===rm||a===om||a===lm||a===cm||a===um)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Qp)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Jp)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===$p)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===tm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===em)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===nm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===im)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===am)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===om)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===lm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===cm)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===um)return u===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===fm||a===hm||a===dm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===fm)return u===on?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===hm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===pm||a===mm||a===gm||a===xm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===pm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===mm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===gm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mc?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new zy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Pn({vertexShader:vw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new Nc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bw extends Xr{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,x=null,g=null,v=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",b=new yw,_={},I=n.getContextAttributes();let T=null,P=null;const G=[],B=[],H=new Mt;let $=null;const N=new ki;N.viewport=new ke;const D=new ki;D.viewport=new ke;const K=[N,D],nt=new PE;let ut=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let C=G[w];return C===void 0&&(C=new rp,G[w]=C),C.getTargetRaySpace()},this.getControllerGrip=function(w){let C=G[w];return C===void 0&&(C=new rp,G[w]=C),C.getGripSpace()},this.getHand=function(w){let C=G[w];return C===void 0&&(C=new rp,G[w]=C),C.getHandSpace()};function xt(w){const C=B.indexOf(w.inputSource);if(C===-1)return;const st=G[C];st!==void 0&&(st.update(w.inputSource,w.frame,d||u),st.dispatchEvent({type:w.type,data:w.inputSource}))}function k(){o.removeEventListener("select",xt),o.removeEventListener("selectstart",xt),o.removeEventListener("selectend",xt),o.removeEventListener("squeeze",xt),o.removeEventListener("squeezestart",xt),o.removeEventListener("squeezeend",xt),o.removeEventListener("end",k),o.removeEventListener("inputsourceschange",Q);for(let w=0;w<G.length;w++){const C=B[w];C!==null&&(B[w]=null,G[w].disconnect(C))}ut=null,mt=null,b.reset();for(const w in _)delete _[w];t.setRenderTarget(T),y=null,v=null,g=null,o=null,P=null,X.stop(),a.isPresenting=!1,t.setPixelRatio($),t.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){c=w,a.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){f=w,a.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(w){d=w},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(w){if(o=w,o!==null){if(T=t.getRenderTarget(),o.addEventListener("select",xt),o.addEventListener("selectstart",xt),o.addEventListener("selectend",xt),o.addEventListener("squeeze",xt),o.addEventListener("squeezestart",xt),o.addEventListener("squeezeend",xt),o.addEventListener("end",k),o.addEventListener("inputsourceschange",Q),I.xrCompatible!==!0&&await n.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(H),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,gt=null,at=null;I.depth&&(at=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=I.stencil?Tc:Ec,gt=I.stencil?Mc:Hr);const Pt={colorFormat:n.RGBA8,depthFormat:at,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Pt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new Kn(v.textureWidth,v.textureHeight,{format:ya,type:Pa,depthTexture:new Oy(v.textureWidth,v.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const st={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,st),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Kn(y.framebufferWidth,y.framebufferHeight,{format:ya,type:Pa,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),X.setContext(o),X.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Q(w){for(let C=0;C<w.removed.length;C++){const st=w.removed[C],gt=B.indexOf(st);gt>=0&&(B[gt]=null,G[gt].disconnect(st))}for(let C=0;C<w.added.length;C++){const st=w.added[C];let gt=B.indexOf(st);if(gt===-1){for(let Pt=0;Pt<G.length;Pt++)if(Pt>=B.length){B.push(st),gt=Pt;break}else if(B[Pt]===null){B[Pt]=st,gt=Pt;break}if(gt===-1)break}const at=G[gt];at&&at.connect(st)}}const j=new Y,Tt=new Y;function At(w,C,st){j.setFromMatrixPosition(C.matrixWorld),Tt.setFromMatrixPosition(st.matrixWorld);const gt=j.distanceTo(Tt),at=C.projectionMatrix.elements,Pt=st.projectionMatrix.elements,Vt=at[14]/(at[10]-1),Dt=at[14]/(at[10]+1),et=(at[9]+1)/at[5],R=(at[9]-1)/at[5],ft=(at[8]-1)/at[0],ct=(Pt[8]+1)/Pt[0],W=Vt*ft,z=Vt*ct,wt=gt/(-ft+ct),zt=wt*-ft;if(C.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(zt),w.translateZ(wt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),at[10]===-1)w.projectionMatrix.copy(C.projectionMatrix),w.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const Qt=Vt+wt,F=Dt+wt,A=W-zt,ot=z+(gt-zt),Rt=et*Dt/F*Qt,Ut=R*Dt/F*Qt;w.projectionMatrix.makePerspective(A,ot,Rt,Ut,Qt,F),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function V(w,C){C===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(C.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(o===null)return;let C=w.near,st=w.far;b.texture!==null&&(b.depthNear>0&&(C=b.depthNear),b.depthFar>0&&(st=b.depthFar)),nt.near=D.near=N.near=C,nt.far=D.far=N.far=st,(ut!==nt.near||mt!==nt.far)&&(o.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,mt=nt.far),nt.layers.mask=w.layers.mask|6,N.layers.mask=nt.layers.mask&3,D.layers.mask=nt.layers.mask&5;const gt=w.parent,at=nt.cameras;V(nt,gt);for(let Pt=0;Pt<at.length;Pt++)V(at[Pt],gt);at.length===2?At(nt,N,D):nt.projectionMatrix.copy(N.projectionMatrix),pt(w,nt,gt)};function pt(w,C,st){st===null?w.matrix.copy(C.matrixWorld):(w.matrix.copy(st.matrixWorld),w.matrix.invert(),w.matrix.multiply(C.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(C.projectionMatrix),w.projectionMatrixInverse.copy(C.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Cc*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(w){p=w,v!==null&&(v.fixedFoveation=w),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=w)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(nt)},this.getCameraTexture=function(w){return _[w]};let Lt=null;function Z(w,C){if(x=C.getViewerPose(d||u),M=C,x!==null){const st=x.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let gt=!1;st.length!==nt.cameras.length&&(nt.cameras.length=0,gt=!0);for(let Dt=0;Dt<st.length;Dt++){const et=st[Dt];let R=null;if(y!==null)R=y.getViewport(et);else{const ct=g.getViewSubImage(v,et);R=ct.viewport,Dt===0&&(t.setRenderTargetTextures(P,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(P))}let ft=K[Dt];ft===void 0&&(ft=new ki,ft.layers.enable(Dt),ft.viewport=new ke,K[Dt]=ft),ft.matrix.fromArray(et.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(et.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(R.x,R.y,R.width,R.height),Dt===0&&(nt.matrix.copy(ft.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),gt===!0&&nt.cameras.push(ft)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const Dt=g.getDepthInformation(st[0]);Dt&&Dt.isValid&&Dt.texture&&b.init(Dt,o.renderState)}if(at&&at.includes("camera-access")&&E){t.state.unbindTexture(),g=a.getBinding();for(let Dt=0;Dt<st.length;Dt++){const et=st[Dt].camera;if(et){let R=_[et];R||(R=new zy,_[et]=R);const ft=g.getCameraImage(et);R.sourceTexture=ft}}}}for(let st=0;st<G.length;st++){const gt=B[st],at=G[st];gt!==null&&at!==void 0&&at.update(gt,C,d||u)}Lt&&Lt(w,C),C.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:C}),M=null}const X=new qy;X.setAnimationLoop(Z),this.setAnimationLoop=function(w){Lt=w},this.dispose=function(){}}}const Pr=new ba,Sw=new cn;function Mw(s,t){function n(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function a(b,_){_.color.getRGB(b.fogColor.value,Dy(s)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function o(b,_,I,T,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),g(b,_)):_.isMeshPhongMaterial?(c(b,_),x(b,_)):_.isMeshStandardMaterial?(c(b,_),v(b,_),_.isMeshPhysicalMaterial&&y(b,_,P)):_.isMeshMatcapMaterial?(c(b,_),M(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),E(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(u(b,_),_.isLineDashedMaterial&&f(b,_)):_.isPointsMaterial?p(b,_,I,T):_.isSpriteMaterial?d(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,n(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,n(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,n(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===ui&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,n(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===ui&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,n(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,n(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const I=t.get(_),T=I.envMap,P=I.envMapRotation;T&&(b.envMap.value=T,Pr.copy(P),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),b.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(Pr)),b.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,b.aoMapTransform))}function u(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,n(_.map,b.mapTransform))}function f(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function p(b,_,I,T){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*I,b.scale.value=T*.5,_.map&&(b.map.value=_.map,n(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,n(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,n(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,n(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function x(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function g(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function v(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function y(b,_,I){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ui&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,_){_.matcap&&(b.matcap.value=_.matcap)}function E(b,_){const I=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Ew(s,t,n,a){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,T){const P=T.program;a.uniformBlockBinding(I,P)}function d(I,T){let P=o[I.id];P===void 0&&(M(I),P=x(I),o[I.id]=P,I.addEventListener("dispose",b));const G=T.program;a.updateUBOMapping(I,G);const B=t.render.frame;c[I.id]!==B&&(v(I),c[I.id]=B)}function x(I){const T=g();I.__bindingPointIndex=T;const P=s.createBuffer(),G=I.__size,B=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,P),P}function g(){for(let I=0;I<f;I++)if(u.indexOf(I)===-1)return u.push(I),I;return Cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const T=o[I.id],P=I.uniforms,G=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let B=0,H=P.length;B<H;B++){const $=Array.isArray(P[B])?P[B]:[P[B]];for(let N=0,D=$.length;N<D;N++){const K=$[N];if(y(K,B,N,G)===!0){const nt=K.__offset,ut=Array.isArray(K.value)?K.value:[K.value];let mt=0;for(let xt=0;xt<ut.length;xt++){const k=ut[xt],Q=E(k);typeof k=="number"||typeof k=="boolean"?(K.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,nt+mt,K.__data)):k.isMatrix3?(K.__data[0]=k.elements[0],K.__data[1]=k.elements[1],K.__data[2]=k.elements[2],K.__data[3]=0,K.__data[4]=k.elements[3],K.__data[5]=k.elements[4],K.__data[6]=k.elements[5],K.__data[7]=0,K.__data[8]=k.elements[6],K.__data[9]=k.elements[7],K.__data[10]=k.elements[8],K.__data[11]=0):(k.toArray(K.__data,mt),mt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,K.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,T,P,G){const B=I.value,H=T+"_"+P;if(G[H]===void 0)return typeof B=="number"||typeof B=="boolean"?G[H]=B:G[H]=B.clone(),!0;{const $=G[H];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return G[H]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function M(I){const T=I.uniforms;let P=0;const G=16;for(let H=0,$=T.length;H<$;H++){const N=Array.isArray(T[H])?T[H]:[T[H]];for(let D=0,K=N.length;D<K;D++){const nt=N[D],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let mt=0,xt=ut.length;mt<xt;mt++){const k=ut[mt],Q=E(k),j=P%G,Tt=j%Q.boundary,At=j+Tt;P+=Tt,At!==0&&G-At<Q.storage&&(P+=G-At),nt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=P,P+=Q.storage}}}const B=P%G;return B>0&&(P+=G-B),I.__size=P,I.__cache={},this}function E(I){const T={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(T.boundary=4,T.storage=4):I.isVector2?(T.boundary=8,T.storage=8):I.isVector3||I.isColor?(T.boundary=16,T.storage=12):I.isVector4?(T.boundary=16,T.storage=16):I.isMatrix3?(T.boundary=48,T.storage=48):I.isMatrix4?(T.boundary=64,T.storage=64):I.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",I),T}function b(I){const T=I.target;T.removeEventListener("dispose",b);const P=u.indexOf(T.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[T.id]),delete o[T.id],delete c[T.id]}function _(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},c={}}return{bind:p,update:d,dispose:_}}const Tw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let cs=null;function Aw(){return cs===null&&(cs=new Py(Tw,32,32,zm,ci),cs.minFilter=la,cs.magFilter=la,cs.wrapS=Xi,cs.wrapT=Xi,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}class ww{constructor(t={}){const{canvas:n=WM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([Im,Bm,Om]),E=new Set([Pa,Hr,Sc,Mc,Nm,Lm]),b=new Uint32Array(4),_=new Int32Array(4);let I=null,T=null;const P=[],G=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let H=!1;this._outputColorSpace=xi;let $=0,N=0,D=null,K=-1,nt=null;const ut=new ke,mt=new ke;let xt=null;const k=new xe(0);let Q=0,j=n.width,Tt=n.height,At=1,V=null,pt=null;const Lt=new ke(0,0,j,Tt),Z=new ke(0,0,j,Tt);let X=!1;const w=new Gm;let C=!1,st=!1;const gt=new cn,at=new Y,Pt=new ke,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function et(){return D===null?At:1}let R=a;function ft(O,rt){return n.getContext(O,rt)}try{const O={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rm}`),n.addEventListener("webglcontextlost",kt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",ee,!1),R===null){const rt="webgl2";if(R=ft(rt,O),R===null)throw ft(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw O("WebGLRenderer: "+O.message),O}let ct,W,z,wt,zt,Qt,F,A,ot,Rt,Ut,Et,ae,Zt,ie,re,It,Xt,oe,le,Kt,_e,tt,Jt;function qt(){ct=new O2(R),ct.init(),_e=new xw(R,ct),W=new A2(R,ct,t,_e),z=new mw(R,ct),W.reversedDepthBuffer&&v&&z.buffers.depth.setReversed(!0),wt=new I2(R),zt=new nw,Qt=new gw(R,ct,z,zt,W,_e,wt),F=new C2(B),A=new P2(B),ot=new GE(R),tt=new E2(R,ot),Rt=new z2(R,ot,wt,tt),Ut=new H2(R,Rt,ot,wt),oe=new F2(R,W,Qt),re=new w2(zt),Et=new ew(B,F,A,ct,W,tt,re),ae=new Mw(B,zt),Zt=new aw,ie=new uw(ct),Xt=new M2(B,F,A,z,Ut,y,p),It=new dw(B,Ut,W),Jt=new Ew(R,wt,W,z),le=new T2(R,ct,wt),Kt=new B2(R,ct,wt),wt.programs=Et.programs,B.capabilities=W,B.extensions=ct,B.properties=zt,B.renderLists=Zt,B.shadowMap=It,B.state=z,B.info=wt}qt();const Yt=new bw(B,R);this.xr=Yt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const O=ct.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=ct.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(O){O!==void 0&&(At=O,this.setSize(j,Tt,!1))},this.getSize=function(O){return O.set(j,Tt)},this.setSize=function(O,rt,St=!0){if(Yt.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}j=O,Tt=rt,n.width=Math.floor(O*At),n.height=Math.floor(rt*At),St===!0&&(n.style.width=O+"px",n.style.height=rt+"px"),this.setViewport(0,0,O,rt)},this.getDrawingBufferSize=function(O){return O.set(j*At,Tt*At).floor()},this.setDrawingBufferSize=function(O,rt,St){j=O,Tt=rt,At=St,n.width=Math.floor(O*St),n.height=Math.floor(rt*St),this.setViewport(0,0,O,rt)},this.getCurrentViewport=function(O){return O.copy(ut)},this.getViewport=function(O){return O.copy(Lt)},this.setViewport=function(O,rt,St,vt){O.isVector4?Lt.set(O.x,O.y,O.z,O.w):Lt.set(O,rt,St,vt),z.viewport(ut.copy(Lt).multiplyScalar(At).round())},this.getScissor=function(O){return O.copy(Z)},this.setScissor=function(O,rt,St,vt){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,rt,St,vt),z.scissor(mt.copy(Z).multiplyScalar(At).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(O){z.setScissorTest(X=O)},this.setOpaqueSort=function(O){V=O},this.setTransparentSort=function(O){pt=O},this.getClearColor=function(O){return O.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(O=!0,rt=!0,St=!0){let vt=0;if(O){let ht=!1;if(D!==null){const Gt=D.texture.format;ht=M.has(Gt)}if(ht){const Gt=D.texture.type,te=E.has(Gt),se=Xt.getClearColor(),jt=Xt.getClearAlpha(),he=se.r,ge=se.g,pe=se.b;te?(b[0]=he,b[1]=ge,b[2]=pe,b[3]=jt,R.clearBufferuiv(R.COLOR,0,b)):(_[0]=he,_[1]=ge,_[2]=pe,_[3]=jt,R.clearBufferiv(R.COLOR,0,_))}else vt|=R.COLOR_BUFFER_BIT}rt&&(vt|=R.DEPTH_BUFFER_BIT),St&&(vt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",kt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),Xt.dispose(),Zt.dispose(),ie.dispose(),zt.dispose(),F.dispose(),A.dispose(),Ut.dispose(),tt.dispose(),Jt.dispose(),Et.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",sr),Yt.removeEventListener("sessionend",Ci),Ri.stop()};function kt(O){O.preventDefault(),Nf("WebGLRenderer: Context Lost."),H=!0}function Ft(){Nf("WebGLRenderer: Context Restored."),H=!1;const O=wt.autoReset,rt=It.enabled,St=It.autoUpdate,vt=It.needsUpdate,ht=It.type;qt(),wt.autoReset=O,It.enabled=rt,It.autoUpdate=St,It.needsUpdate=vt,It.type=ht}function ee(O){Cn("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function de(O){const rt=O.target;rt.removeEventListener("dispose",de),Xe(rt)}function Xe(O){Ve(O),zt.remove(O)}function Ve(O){const rt=zt.get(O).programs;rt!==void 0&&(rt.forEach(function(St){Et.releaseProgram(St)}),O.isShaderMaterial&&Et.releaseShaderCache(O))}this.renderBufferDirect=function(O,rt,St,vt,ht,Gt){rt===null&&(rt=Vt);const te=ht.isMesh&&ht.matrixWorld.determinant()<0,se=Wr(O,rt,St,vt,ht);z.setMaterial(vt,te);let jt=St.index,he=1;if(vt.wireframe===!0){if(jt=Rt.getWireframeAttribute(St),jt===void 0)return;he=2}const ge=St.drawRange,pe=St.attributes.position;let Te=ge.start*he,Ie=(ge.start+ge.count)*he;Gt!==null&&(Te=Math.max(Te,Gt.start*he),Ie=Math.min(Ie,(Gt.start+Gt.count)*he)),jt!==null?(Te=Math.max(Te,0),Ie=Math.min(Ie,jt.count)):pe!=null&&(Te=Math.max(Te,0),Ie=Math.min(Ie,pe.count));const Oe=Ie-Te;if(Oe<0||Oe===1/0)return;tt.setup(ht,vt,se,St,jt);let Ne,je=le;if(jt!==null&&(Ne=ot.get(jt),je=Kt,je.setIndex(Ne)),ht.isMesh)vt.wireframe===!0?(z.setLineWidth(vt.wireframeLinewidth*et()),je.setMode(R.LINES)):je.setMode(R.TRIANGLES);else if(ht.isLine){let ce=vt.linewidth;ce===void 0&&(ce=1),z.setLineWidth(ce*et()),ht.isLineSegments?je.setMode(R.LINES):ht.isLineLoop?je.setMode(R.LINE_LOOP):je.setMode(R.LINE_STRIP)}else ht.isPoints?je.setMode(R.POINTS):ht.isSprite&&je.setMode(R.TRIANGLES);if(ht.isBatchedMesh)if(ht._multiDrawInstances!==null)wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount,ht._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))je.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{const ce=ht._multiDrawStarts,Ke=ht._multiDrawCounts,De=ht._multiDrawCount,fn=jt?ot.get(jt).bytesPerElement:1,ua=zt.get(vt).currentProgram.getUniforms();for(let en=0;en<De;en++)ua.setValue(R,"_gl_DrawID",en),je.render(ce[en]/fn,Ke[en])}else if(ht.isInstancedMesh)je.renderInstances(Te,Oe,ht.count);else if(St.isInstancedBufferGeometry){const ce=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,Ke=Math.min(St.instanceCount,ce);je.renderInstances(Te,Oe,Ke)}else je.render(Te,Oe)};function xn(O,rt,St){O.transparent===!0&&O.side===ra&&O.forceSinglePass===!1?(O.side=ui,O.needsUpdate=!0,Rn(O,rt,St),O.side=nr,O.needsUpdate=!0,Rn(O,rt,St),O.side=ra):Rn(O,rt,St)}this.compile=function(O,rt,St=null){St===null&&(St=O),T=ie.get(St),T.init(rt),G.push(T),St.traverseVisible(function(ht){ht.isLight&&ht.layers.test(rt.layers)&&(T.pushLight(ht),ht.castShadow&&T.pushShadow(ht))}),O!==St&&O.traverseVisible(function(ht){ht.isLight&&ht.layers.test(rt.layers)&&(T.pushLight(ht),ht.castShadow&&T.pushShadow(ht))}),T.setupLights();const vt=new Set;return O.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;const Gt=ht.material;if(Gt)if(Array.isArray(Gt))for(let te=0;te<Gt.length;te++){const se=Gt[te];xn(se,St,ht),vt.add(se)}else xn(Gt,St,ht),vt.add(Gt)}),T=G.pop(),vt},this.compileAsync=function(O,rt,St=null){const vt=this.compile(O,rt,St);return new Promise(ht=>{function Gt(){if(vt.forEach(function(te){zt.get(te).currentProgram.isReady()&&vt.delete(te)}),vt.size===0){ht(O);return}setTimeout(Gt,10)}ct.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let hi=null;function ar(O){hi&&hi(O)}function sr(){Ri.stop()}function Ci(){Ri.start()}const Ri=new qy;Ri.setAnimationLoop(ar),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(O){hi=O,Yt.setAnimationLoop(O),O===null?Ri.stop():Ri.start()},Yt.addEventListener("sessionstart",sr),Yt.addEventListener("sessionend",Ci),this.render=function(O,rt){if(rt!==void 0&&rt.isCamera!==!0){Cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(rt),rt=Yt.getCamera()),O.isScene===!0&&O.onBeforeRender(B,O,rt,D),T=ie.get(O,G.length),T.init(rt),G.push(T),gt.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),w.setFromProjectionMatrix(gt,Na,rt.reversedDepth),st=this.localClippingEnabled,C=re.init(this.clippingPlanes,st),I=Zt.get(O,P.length),I.init(),P.push(I),Yt.enabled===!0&&Yt.isPresenting===!0){const Gt=B.xr.getDepthSensingMesh();Gt!==null&&un(Gt,rt,-1/0,B.sortObjects)}un(O,rt,0,B.sortObjects),I.finish(),B.sortObjects===!0&&I.sort(V,pt),Dt=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,Dt&&Xt.addToRenderList(I,O),this.info.render.frame++,C===!0&&re.beginShadows();const St=T.state.shadowsArray;It.render(St,O,rt),C===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const vt=I.opaque,ht=I.transmissive;if(T.setupLights(),rt.isArrayCamera){const Gt=rt.cameras;if(ht.length>0)for(let te=0,se=Gt.length;te<se;te++){const jt=Gt[te];za(vt,ht,O,jt)}Dt&&Xt.render(O);for(let te=0,se=Gt.length;te<se;te++){const jt=Gt[te];rr(I,O,jt,jt.viewport)}}else ht.length>0&&za(vt,ht,O,rt),Dt&&Xt.render(O),rr(I,O,rt);D!==null&&N===0&&(Qt.updateMultisampleRenderTarget(D),Qt.updateRenderTargetMipmap(D)),O.isScene===!0&&O.onAfterRender(B,O,rt),tt.resetDefaultState(),K=-1,nt=null,G.pop(),G.length>0?(T=G[G.length-1],C===!0&&re.setGlobalState(B.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?I=P[P.length-1]:I=null};function un(O,rt,St,vt){if(O.visible===!1)return;if(O.layers.test(rt.layers)){if(O.isGroup)St=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(rt);else if(O.isLight)T.pushLight(O),O.castShadow&&T.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||w.intersectsSprite(O)){vt&&Pt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(gt);const te=Ut.update(O),se=O.material;se.visible&&I.push(O,te,se,St,Pt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||w.intersectsObject(O))){const te=Ut.update(O),se=O.material;if(vt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Pt.copy(O.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Pt.copy(te.boundingSphere.center)),Pt.applyMatrix4(O.matrixWorld).applyMatrix4(gt)),Array.isArray(se)){const jt=te.groups;for(let he=0,ge=jt.length;he<ge;he++){const pe=jt[he],Te=se[pe.materialIndex];Te&&Te.visible&&I.push(O,te,Te,St,Pt.z,pe)}}else se.visible&&I.push(O,te,se,St,Pt.z,null)}}const Gt=O.children;for(let te=0,se=Gt.length;te<se;te++)un(Gt[te],rt,St,vt)}function rr(O,rt,St,vt){const{opaque:ht,transmissive:Gt,transparent:te}=O;T.setupLightsView(St),C===!0&&re.setGlobalState(B.clippingPlanes,St),vt&&z.viewport(ut.copy(vt)),ht.length>0&&di(ht,rt,St),Gt.length>0&&di(Gt,rt,St),te.length>0&&di(te,rt,St),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function za(O,rt,St,vt){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[vt.id]===void 0&&(T.state.transmissionRenderTarget[vt.id]=new Kn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ci:Pa,minFilter:Br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Gt=T.state.transmissionRenderTarget[vt.id],te=vt.viewport||ut;Gt.setSize(te.z*B.transmissionResolutionScale,te.w*B.transmissionResolutionScale);const se=B.getRenderTarget(),jt=B.getActiveCubeFace(),he=B.getActiveMipmapLevel();B.setRenderTarget(Gt),B.getClearColor(k),Q=B.getClearAlpha(),Q<1&&B.setClearColor(16777215,.5),B.clear(),Dt&&Xt.render(St);const ge=B.toneMapping;B.toneMapping=er;const pe=vt.viewport;if(vt.viewport!==void 0&&(vt.viewport=void 0),T.setupLightsView(vt),C===!0&&re.setGlobalState(B.clippingPlanes,vt),di(O,St,vt),Qt.updateMultisampleRenderTarget(Gt),Qt.updateRenderTargetMipmap(Gt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ie=0,Oe=rt.length;Ie<Oe;Ie++){const Ne=rt[Ie],{object:je,geometry:ce,material:Ke,group:De}=Ne;if(Ke.side===ra&&je.layers.test(vt.layers)){const fn=Ke.side;Ke.side=ui,Ke.needsUpdate=!0,tn(je,St,vt,ce,Ke,De),Ke.side=fn,Ke.needsUpdate=!0,Te=!0}}Te===!0&&(Qt.updateMultisampleRenderTarget(Gt),Qt.updateRenderTargetMipmap(Gt))}B.setRenderTarget(se,jt,he),B.setClearColor(k,Q),pe!==void 0&&(vt.viewport=pe),B.toneMapping=ge}function di(O,rt,St){const vt=rt.isScene===!0?rt.overrideMaterial:null;for(let ht=0,Gt=O.length;ht<Gt;ht++){const te=O[ht],{object:se,geometry:jt,group:he}=te;let ge=te.material;ge.allowOverride===!0&&vt!==null&&(ge=vt),se.layers.test(St.layers)&&tn(se,rt,St,jt,ge,he)}}function tn(O,rt,St,vt,ht,Gt){O.onBeforeRender(B,rt,St,vt,ht,Gt),O.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ht.onBeforeRender(B,rt,St,vt,O,Gt),ht.transparent===!0&&ht.side===ra&&ht.forceSinglePass===!1?(ht.side=ui,ht.needsUpdate=!0,B.renderBufferDirect(St,rt,vt,ht,O,Gt),ht.side=nr,ht.needsUpdate=!0,B.renderBufferDirect(St,rt,vt,ht,O,Gt),ht.side=ra):B.renderBufferDirect(St,rt,vt,ht,O,Gt),O.onAfterRender(B,rt,St,vt,ht,Gt)}function Rn(O,rt,St){rt.isScene!==!0&&(rt=Vt);const vt=zt.get(O),ht=T.state.lights,Gt=T.state.shadowsArray,te=ht.state.version,se=Et.getParameters(O,ht.state,Gt,rt,St),jt=Et.getProgramCacheKey(se);let he=vt.programs;vt.environment=O.isMeshStandardMaterial?rt.environment:null,vt.fog=rt.fog,vt.envMap=(O.isMeshStandardMaterial?A:F).get(O.envMap||vt.environment),vt.envMapRotation=vt.environment!==null&&O.envMap===null?rt.environmentRotation:O.envMapRotation,he===void 0&&(O.addEventListener("dispose",de),he=new Map,vt.programs=he);let ge=he.get(jt);if(ge!==void 0){if(vt.currentProgram===ge&&vt.lightsStateVersion===te)return ms(O,se),ge}else se.uniforms=Et.getUniforms(O),O.onBeforeCompile(se,B),ge=Et.acquireProgram(se,jt),he.set(jt,ge),vt.uniforms=se.uniforms;const pe=vt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(pe.clippingPlanes=re.uniform),ms(O,se),vt.needsLights=Ba(O),vt.lightsStateVersion=te,vt.needsLights&&(pe.ambientLightColor.value=ht.state.ambient,pe.lightProbe.value=ht.state.probe,pe.directionalLights.value=ht.state.directional,pe.directionalLightShadows.value=ht.state.directionalShadow,pe.spotLights.value=ht.state.spot,pe.spotLightShadows.value=ht.state.spotShadow,pe.rectAreaLights.value=ht.state.rectArea,pe.ltc_1.value=ht.state.rectAreaLTC1,pe.ltc_2.value=ht.state.rectAreaLTC2,pe.pointLights.value=ht.state.point,pe.pointLightShadows.value=ht.state.pointShadow,pe.hemisphereLights.value=ht.state.hemi,pe.directionalShadowMap.value=ht.state.directionalShadowMap,pe.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,pe.spotShadowMap.value=ht.state.spotShadowMap,pe.spotLightMatrix.value=ht.state.spotLightMatrix,pe.spotLightMap.value=ht.state.spotLightMap,pe.pointShadowMap.value=ht.state.pointShadowMap,pe.pointShadowMatrix.value=ht.state.pointShadowMatrix),vt.currentProgram=ge,vt.uniformsList=null,ge}function Di(O){if(O.uniformsList===null){const rt=O.currentProgram.getUniforms();O.uniformsList=Cf.seqWithValue(rt.seq,O.uniforms)}return O.uniformsList}function ms(O,rt){const St=zt.get(O);St.outputColorSpace=rt.outputColorSpace,St.batching=rt.batching,St.batchingColor=rt.batchingColor,St.instancing=rt.instancing,St.instancingColor=rt.instancingColor,St.instancingMorph=rt.instancingMorph,St.skinning=rt.skinning,St.morphTargets=rt.morphTargets,St.morphNormals=rt.morphNormals,St.morphColors=rt.morphColors,St.morphTargetsCount=rt.morphTargetsCount,St.numClippingPlanes=rt.numClippingPlanes,St.numIntersection=rt.numClipIntersection,St.vertexAlphas=rt.vertexAlphas,St.vertexTangents=rt.vertexTangents,St.toneMapping=rt.toneMapping}function Wr(O,rt,St,vt,ht){rt.isScene!==!0&&(rt=Vt),Qt.resetTextureUnits();const Gt=rt.fog,te=vt.isMeshStandardMaterial?rt.environment:null,se=D===null?B.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:el,jt=(vt.isMeshStandardMaterial?A:F).get(vt.envMap||te),he=vt.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ge=!!St.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),pe=!!St.morphAttributes.position,Te=!!St.morphAttributes.normal,Ie=!!St.morphAttributes.color;let Oe=er;vt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Oe=B.toneMapping);const Ne=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,je=Ne!==void 0?Ne.length:0,ce=zt.get(vt),Ke=T.state.lights;if(C===!0&&(st===!0||O!==nt)){const zn=O===nt&&vt.id===K;re.setState(vt,O,zn)}let De=!1;vt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Ke.state.version||ce.outputColorSpace!==se||ht.isBatchedMesh&&ce.batching===!1||!ht.isBatchedMesh&&ce.batching===!0||ht.isBatchedMesh&&ce.batchingColor===!0&&ht.colorTexture===null||ht.isBatchedMesh&&ce.batchingColor===!1&&ht.colorTexture!==null||ht.isInstancedMesh&&ce.instancing===!1||!ht.isInstancedMesh&&ce.instancing===!0||ht.isSkinnedMesh&&ce.skinning===!1||!ht.isSkinnedMesh&&ce.skinning===!0||ht.isInstancedMesh&&ce.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&ce.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&ce.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&ce.instancingMorph===!1&&ht.morphTexture!==null||ce.envMap!==jt||vt.fog===!0&&ce.fog!==Gt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==re.numPlanes||ce.numIntersection!==re.numIntersection)||ce.vertexAlphas!==he||ce.vertexTangents!==ge||ce.morphTargets!==pe||ce.morphNormals!==Te||ce.morphColors!==Ie||ce.toneMapping!==Oe||ce.morphTargetsCount!==je)&&(De=!0):(De=!0,ce.__version=vt.version);let fn=ce.currentProgram;De===!0&&(fn=Rn(vt,rt,ht));let ua=!1,en=!1,Yi=!1;const nn=fn.getUniforms(),On=ce.uniforms;if(z.useProgram(fn.program)&&(ua=!0,en=!0,Yi=!0),vt.id!==K&&(K=vt.id,en=!0),ua||nt!==O){z.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),nn.setValue(R,"projectionMatrix",O.projectionMatrix),nn.setValue(R,"viewMatrix",O.matrixWorldInverse);const kn=nn.map.cameraPosition;kn!==void 0&&kn.setValue(R,at.setFromMatrixPosition(O.matrixWorld)),W.logarithmicDepthBuffer&&nn.setValue(R,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&nn.setValue(R,"isOrthographic",O.isOrthographicCamera===!0),nt!==O&&(nt=O,en=!0,Yi=!0)}if(ht.isSkinnedMesh){nn.setOptional(R,ht,"bindMatrix"),nn.setOptional(R,ht,"bindMatrixInverse");const zn=ht.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),nn.setValue(R,"boneTexture",zn.boneTexture,Qt))}ht.isBatchedMesh&&(nn.setOptional(R,ht,"batchingTexture"),nn.setValue(R,"batchingTexture",ht._matricesTexture,Qt),nn.setOptional(R,ht,"batchingIdTexture"),nn.setValue(R,"batchingIdTexture",ht._indirectTexture,Qt),nn.setOptional(R,ht,"batchingColorTexture"),ht._colorsTexture!==null&&nn.setValue(R,"batchingColorTexture",ht._colorsTexture,Qt));const Dn=St.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&oe.update(ht,St,fn),(en||ce.receiveShadow!==ht.receiveShadow)&&(ce.receiveShadow=ht.receiveShadow,nn.setValue(R,"receiveShadow",ht.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(On.envMap.value=jt,On.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),vt.isMeshStandardMaterial&&vt.envMap===null&&rt.environment!==null&&(On.envMapIntensity.value=rt.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=Aw()),en&&(nn.setValue(R,"toneMappingExposure",B.toneMappingExposure),ce.needsLights&&cl(On,Yi),Gt&&vt.fog===!0&&ae.refreshFogUniforms(On,Gt),ae.refreshMaterialUniforms(On,vt,At,Tt,T.state.transmissionRenderTarget[O.id]),Cf.upload(R,Di(ce),On,Qt)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(Cf.upload(R,Di(ce),On,Qt),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&nn.setValue(R,"center",ht.center),nn.setValue(R,"modelViewMatrix",ht.modelViewMatrix),nn.setValue(R,"normalMatrix",ht.normalMatrix),nn.setValue(R,"modelMatrix",ht.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){const zn=vt.uniformsGroups;for(let kn=0,Ui=zn.length;kn<Ui;kn++){const vi=zn[kn];Jt.update(vi,fn),Jt.bind(vi,fn)}}return fn}function cl(O,rt){O.ambientLightColor.needsUpdate=rt,O.lightProbe.needsUpdate=rt,O.directionalLights.needsUpdate=rt,O.directionalLightShadows.needsUpdate=rt,O.pointLights.needsUpdate=rt,O.pointLightShadows.needsUpdate=rt,O.spotLights.needsUpdate=rt,O.spotLightShadows.needsUpdate=rt,O.rectAreaLights.needsUpdate=rt,O.hemisphereLights.needsUpdate=rt}function Ba(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(O,rt,St){const vt=zt.get(O);vt.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,vt.__autoAllocateDepthBuffer===!1&&(vt.__useRenderToTexture=!1),zt.get(O.texture).__webglTexture=rt,zt.get(O.depthTexture).__webglTexture=vt.__autoAllocateDepthBuffer?void 0:St,vt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,rt){const St=zt.get(O);St.__webglFramebuffer=rt,St.__useDefaultFramebuffer=rt===void 0};const qi=R.createFramebuffer();this.setRenderTarget=function(O,rt=0,St=0){D=O,$=rt,N=St;let vt=!0,ht=null,Gt=!1,te=!1;if(O){const jt=zt.get(O);if(jt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(R.FRAMEBUFFER,null),vt=!1;else if(jt.__webglFramebuffer===void 0)Qt.setupRenderTarget(O);else if(jt.__hasExternalTextures)Qt.rebindTextures(O,zt.get(O.texture).__webglTexture,zt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const pe=O.depthTexture;if(jt.__boundDepthTexture!==pe){if(pe!==null&&zt.has(pe)&&(O.width!==pe.image.width||O.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(O)}}const he=O.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(te=!0);const ge=zt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(ge[rt])?ht=ge[rt][St]:ht=ge[rt],Gt=!0):O.samples>0&&Qt.useMultisampledRTT(O)===!1?ht=zt.get(O).__webglMultisampledFramebuffer:Array.isArray(ge)?ht=ge[St]:ht=ge,ut.copy(O.viewport),mt.copy(O.scissor),xt=O.scissorTest}else ut.copy(Lt).multiplyScalar(At).floor(),mt.copy(Z).multiplyScalar(At).floor(),xt=X;if(St!==0&&(ht=qi),z.bindFramebuffer(R.FRAMEBUFFER,ht)&&vt&&z.drawBuffers(O,ht),z.viewport(ut),z.scissor(mt),z.setScissorTest(xt),Gt){const jt=zt.get(O.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+rt,jt.__webglTexture,St)}else if(te){const jt=rt;for(let he=0;he<O.textures.length;he++){const ge=zt.get(O.textures[he]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+he,ge.__webglTexture,St,jt)}}else if(O!==null&&St!==0){const jt=zt.get(O.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,jt.__webglTexture,St)}K=-1},this.readRenderTargetPixels=function(O,rt,St,vt,ht,Gt,te,se=0){if(!(O&&O.isWebGLRenderTarget)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=zt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&te!==void 0&&(jt=jt[te]),jt){z.bindFramebuffer(R.FRAMEBUFFER,jt);try{const he=O.textures[se],ge=he.format,pe=he.type;if(!W.textureFormatReadable(ge)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(pe)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=O.width-vt&&St>=0&&St<=O.height-ht&&(O.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+se),R.readPixels(rt,St,vt,ht,_e.convert(ge),_e.convert(pe),Gt))}finally{const he=D!==null?zt.get(D).__webglFramebuffer:null;z.bindFramebuffer(R.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(O,rt,St,vt,ht,Gt,te,se=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=zt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&te!==void 0&&(jt=jt[te]),jt)if(rt>=0&&rt<=O.width-vt&&St>=0&&St<=O.height-ht){z.bindFramebuffer(R.FRAMEBUFFER,jt);const he=O.textures[se],ge=he.format,pe=he.type;if(!W.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.bufferData(R.PIXEL_PACK_BUFFER,Gt.byteLength,R.STREAM_READ),O.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+se),R.readPixels(rt,St,vt,ht,_e.convert(ge),_e.convert(pe),0);const Ie=D!==null?zt.get(D).__webglFramebuffer:null;z.bindFramebuffer(R.FRAMEBUFFER,Ie);const Oe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await qM(R,Oe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Gt),R.deleteBuffer(Te),R.deleteSync(Oe),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,rt=null,St=0){const vt=Math.pow(2,-St),ht=Math.floor(O.image.width*vt),Gt=Math.floor(O.image.height*vt),te=rt!==null?rt.x:0,se=rt!==null?rt.y:0;Qt.setTexture2D(O,0),R.copyTexSubImage2D(R.TEXTURE_2D,St,0,0,te,se,ht,Gt),z.unbindTexture()};const or=R.createFramebuffer(),ye=R.createFramebuffer();this.copyTextureToTexture=function(O,rt,St=null,vt=null,ht=0,Gt=null){Gt===null&&(ht!==0?(wc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Gt=ht,ht=0):Gt=0);let te,se,jt,he,ge,pe,Te,Ie,Oe;const Ne=O.isCompressedTexture?O.mipmaps[Gt]:O.image;if(St!==null)te=St.max.x-St.min.x,se=St.max.y-St.min.y,jt=St.isBox3?St.max.z-St.min.z:1,he=St.min.x,ge=St.min.y,pe=St.isBox3?St.min.z:0;else{const Dn=Math.pow(2,-ht);te=Math.floor(Ne.width*Dn),se=Math.floor(Ne.height*Dn),O.isDataArrayTexture?jt=Ne.depth:O.isData3DTexture?jt=Math.floor(Ne.depth*Dn):jt=1,he=0,ge=0,pe=0}vt!==null?(Te=vt.x,Ie=vt.y,Oe=vt.z):(Te=0,Ie=0,Oe=0);const je=_e.convert(rt.format),ce=_e.convert(rt.type);let Ke;rt.isData3DTexture?(Qt.setTexture3D(rt,0),Ke=R.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Qt.setTexture2DArray(rt,0),Ke=R.TEXTURE_2D_ARRAY):(Qt.setTexture2D(rt,0),Ke=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,rt.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,rt.unpackAlignment);const De=R.getParameter(R.UNPACK_ROW_LENGTH),fn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ua=R.getParameter(R.UNPACK_SKIP_PIXELS),en=R.getParameter(R.UNPACK_SKIP_ROWS),Yi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ne.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ne.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,he),R.pixelStorei(R.UNPACK_SKIP_ROWS,ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pe);const nn=O.isDataArrayTexture||O.isData3DTexture,On=rt.isDataArrayTexture||rt.isData3DTexture;if(O.isDepthTexture){const Dn=zt.get(O),zn=zt.get(rt),kn=zt.get(Dn.__renderTarget),Ui=zt.get(zn.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,kn.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let vi=0;vi<jt;vi++)nn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.get(O).__webglTexture,ht,pe+vi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.get(rt).__webglTexture,Gt,Oe+vi)),R.blitFramebuffer(he,ge,te,se,Te,Ie,te,se,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ht!==0||O.isRenderTargetTexture||zt.has(O)){const Dn=zt.get(O),zn=zt.get(rt);z.bindFramebuffer(R.READ_FRAMEBUFFER,or),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ye);for(let kn=0;kn<jt;kn++)nn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dn.__webglTexture,ht,pe+kn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dn.__webglTexture,ht),On?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zn.__webglTexture,Gt,Oe+kn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zn.__webglTexture,Gt),ht!==0?R.blitFramebuffer(he,ge,te,se,Te,Ie,te,se,R.COLOR_BUFFER_BIT,R.NEAREST):On?R.copyTexSubImage3D(Ke,Gt,Te,Ie,Oe+kn,he,ge,te,se):R.copyTexSubImage2D(Ke,Gt,Te,Ie,he,ge,te,se);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else On?O.isDataTexture||O.isData3DTexture?R.texSubImage3D(Ke,Gt,Te,Ie,Oe,te,se,jt,je,ce,Ne.data):rt.isCompressedArrayTexture?R.compressedTexSubImage3D(Ke,Gt,Te,Ie,Oe,te,se,jt,je,Ne.data):R.texSubImage3D(Ke,Gt,Te,Ie,Oe,te,se,jt,je,ce,Ne):O.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Gt,Te,Ie,te,se,je,ce,Ne.data):O.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Gt,Te,Ie,Ne.width,Ne.height,je,Ne.data):R.texSubImage2D(R.TEXTURE_2D,Gt,Te,Ie,te,se,je,ce,Ne);R.pixelStorei(R.UNPACK_ROW_LENGTH,De),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ua),R.pixelStorei(R.UNPACK_SKIP_ROWS,en),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Yi),Gt===0&&rt.generateMipmaps&&R.generateMipmap(Ke),z.unbindTexture()},this.initRenderTarget=function(O){zt.get(O).__webglFramebuffer===void 0&&Qt.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?Qt.setTextureCube(O,0):O.isData3DTexture?Qt.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Qt.setTexture2DArray(O,0):Qt.setTexture2D(O,0),z.unbindTexture()},this.resetState=function(){$=0,N=0,D=null,z.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function Cw(s,t=!1){const n=s[0].index!==null,a=new Set(Object.keys(s[0].attributes)),o=new Set(Object.keys(s[0].morphAttributes)),c={},u={},f=s[0].morphTargetsRelative,p=new fi;let d=0;for(let x=0;x<s.length;++x){const g=s[x];let v=0;if(n!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const y in g.attributes){if(!a.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+'. All geometries must have compatible attributes; make sure "'+y+'" attribute exists among all geometries, or in none of them.'),null;c[y]===void 0&&(c[y]=[]),c[y].push(g.attributes[y]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". Make sure all geometries have the same number of attributes."),null;if(f!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const y in g.morphAttributes){if(!o.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+".  .morphAttributes must be consistent throughout all geometries."),null;u[y]===void 0&&(u[y]=[]),u[y].push(g.morphAttributes[y])}if(t){let y;if(n)y=g.index.count;else if(g.attributes.position!==void 0)y=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". The geometry must have either an index or a position attribute"),null;p.addGroup(d,y,x),d+=y}}if(n){let x=0;const g=[];for(let v=0;v<s.length;++v){const y=s[v].index;for(let M=0;M<y.count;++M)g.push(y.getX(M)+x);x+=s[v].attributes.position.count}p.setIndex(g)}for(const x in c){const g=H_(c[x]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+x+" attribute."),null;p.setAttribute(x,g)}for(const x in u){const g=u[x][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[x]=[];for(let v=0;v<g;++v){const y=[];for(let E=0;E<u[x].length;++E)y.push(u[x][E][v]);const M=H_(y);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+x+" morphAttribute."),null;p.morphAttributes[x].push(M)}}return p}function H_(s){let t,n,a,o=-1,c=0;for(let d=0;d<s.length;++d){const x=s[d];if(t===void 0&&(t=x.array.constructor),t!==x.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=x.itemSize),n!==x.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=x.normalized),a!==x.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=x.gpuType),o!==x.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=x.count*n}const u=new t(c),f=new wi(u,n,a);let p=0;for(let d=0;d<s.length;++d){const x=s[d];if(x.isInterleavedBufferAttribute){const g=p/n;for(let v=0,y=x.count;v<y;v++)for(let M=0;M<n;M++){const E=x.getComponent(v,M);f.setComponent(v+g,M,E)}}else u.set(x.array,p);p+=x.count*n}return o!==void 0&&(f.gpuType=o),f}function Rw(s,t=Math.PI/3){const n=Math.cos(t),a=(1+1e-10)*100,o=[new Y,new Y,new Y],c=new Y,u=new Y,f=new Y,p=new Y;function d(E){const b=~~(E.x*a),_=~~(E.y*a),I=~~(E.z*a);return`${b},${_},${I}`}const x=s.index?s.toNonIndexed():s,g=x.attributes.position,v={};for(let E=0,b=g.count/3;E<b;E++){const _=3*E,I=o[0].fromBufferAttribute(g,_+0),T=o[1].fromBufferAttribute(g,_+1),P=o[2].fromBufferAttribute(g,_+2);c.subVectors(P,T),u.subVectors(I,T);const G=new Y().crossVectors(c,u).normalize();for(let B=0;B<3;B++){const H=o[B],$=d(H);$ in v||(v[$]=[]),v[$].push(G)}}const y=new Float32Array(g.count*3),M=new wi(y,3,!1);for(let E=0,b=g.count/3;E<b;E++){const _=3*E,I=o[0].fromBufferAttribute(g,_+0),T=o[1].fromBufferAttribute(g,_+1),P=o[2].fromBufferAttribute(g,_+2);c.subVectors(P,T),u.subVectors(I,T),f.crossVectors(c,u).normalize();for(let G=0;G<3;G++){const B=o[G],H=d(B),$=v[H];p.set(0,0,0);for(let N=0,D=$.length;N<D;N++){const K=$[N];f.dot(K)>n&&p.add(K)}p.normalize(),M.setXYZ(_+G,p.x,p.y,p.z)}}return x.setAttribute("normal",M),x}const Dw=xi;class fs extends Lc{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,n,a,o){const c=this,u=new AE(c.manager);u.setPath(c.path),u.setRequestHeader(c.requestHeader),u.setWithCredentials(c.withCredentials),u.load(t,function(f){try{n(c.parse(f))}catch(p){o?o(p):console.error(p),c.manager.itemError(t)}},a,o)}parse(t){const n=this;function a(Z,X){if(Z.nodeType!==1)return;const w=P(Z);let C=!1,st=null;switch(Z.nodeName){case"svg":X=M(Z,X);break;case"style":c(Z);break;case"g":X=M(Z,X);break;case"path":X=M(Z,X),Z.hasAttribute("d")&&(st=o(Z));break;case"rect":X=M(Z,X),st=p(Z);break;case"polygon":X=M(Z,X),st=d(Z);break;case"polyline":X=M(Z,X),st=x(Z);break;case"circle":X=M(Z,X),st=g(Z);break;case"ellipse":X=M(Z,X),st=v(Z);break;case"line":X=M(Z,X),st=y(Z);break;case"defs":C=!0;break;case"use":X=M(Z,X);const Pt=(Z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Vt=Z.viewportElement.getElementById(Pt);Vt?a(Vt,X):console.warn("SVGLoader: 'use node' references non-existent node id: "+Pt);break}st&&(X.fill!==void 0&&X.fill!=="none"&&st.color.setStyle(X.fill,Dw),B(st,V),nt.push(st),st.userData={node:Z,style:X});const gt=Z.childNodes;for(let at=0;at<gt.length;at++){const Pt=gt[at];C&&Pt.nodeName!=="style"&&Pt.nodeName!=="defs"||a(Pt,X)}w&&(mt.pop(),mt.length>0?V.copy(mt[mt.length-1]):V.identity())}function o(Z){const X=new Nr,w=new Mt,C=new Mt,st=new Mt;let gt=!0,at=!1;const Pt=Z.getAttribute("d");if(Pt===""||Pt==="none")return null;const Vt=Pt.match(/[a-df-z][^a-df-z]*/ig);for(let Dt=0,et=Vt.length;Dt<et;Dt++){const R=Vt[Dt],ft=R.charAt(0),ct=R.slice(1).trim();gt===!0&&(at=!0,gt=!1);let W;switch(ft){case"M":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2)w.x=W[z+0],w.y=W[z+1],C.x=w.x,C.y=w.y,z===0?X.moveTo(w.x,w.y):X.lineTo(w.x,w.y),z===0&&st.copy(w);break;case"H":W=b(ct);for(let z=0,wt=W.length;z<wt;z++)w.x=W[z],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"V":W=b(ct);for(let z=0,wt=W.length;z<wt;z++)w.y=W[z],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"L":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2)w.x=W[z+0],w.y=W[z+1],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"C":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=6)X.bezierCurveTo(W[z+0],W[z+1],W[z+2],W[z+3],W[z+4],W[z+5]),C.x=W[z+2],C.y=W[z+3],w.x=W[z+4],w.y=W[z+5],z===0&&at===!0&&st.copy(w);break;case"S":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=4)X.bezierCurveTo(E(w.x,C.x),E(w.y,C.y),W[z+0],W[z+1],W[z+2],W[z+3]),C.x=W[z+0],C.y=W[z+1],w.x=W[z+2],w.y=W[z+3],z===0&&at===!0&&st.copy(w);break;case"Q":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=4)X.quadraticCurveTo(W[z+0],W[z+1],W[z+2],W[z+3]),C.x=W[z+0],C.y=W[z+1],w.x=W[z+2],w.y=W[z+3],z===0&&at===!0&&st.copy(w);break;case"T":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2){const zt=E(w.x,C.x),Qt=E(w.y,C.y);X.quadraticCurveTo(zt,Qt,W[z+0],W[z+1]),C.x=zt,C.y=Qt,w.x=W[z+0],w.y=W[z+1],z===0&&at===!0&&st.copy(w)}break;case"A":W=b(ct,[3,4],7);for(let z=0,wt=W.length;z<wt;z+=7){if(W[z+5]==w.x&&W[z+6]==w.y)continue;const zt=w.clone();w.x=W[z+5],w.y=W[z+6],C.x=w.x,C.y=w.y,u(X,W[z],W[z+1],W[z+2],W[z+3],W[z+4],zt,w),z===0&&at===!0&&st.copy(w)}break;case"m":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2)w.x+=W[z+0],w.y+=W[z+1],C.x=w.x,C.y=w.y,z===0?X.moveTo(w.x,w.y):X.lineTo(w.x,w.y),z===0&&st.copy(w);break;case"h":W=b(ct);for(let z=0,wt=W.length;z<wt;z++)w.x+=W[z],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"v":W=b(ct);for(let z=0,wt=W.length;z<wt;z++)w.y+=W[z],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"l":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2)w.x+=W[z+0],w.y+=W[z+1],C.x=w.x,C.y=w.y,X.lineTo(w.x,w.y),z===0&&at===!0&&st.copy(w);break;case"c":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=6)X.bezierCurveTo(w.x+W[z+0],w.y+W[z+1],w.x+W[z+2],w.y+W[z+3],w.x+W[z+4],w.y+W[z+5]),C.x=w.x+W[z+2],C.y=w.y+W[z+3],w.x+=W[z+4],w.y+=W[z+5],z===0&&at===!0&&st.copy(w);break;case"s":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=4)X.bezierCurveTo(E(w.x,C.x),E(w.y,C.y),w.x+W[z+0],w.y+W[z+1],w.x+W[z+2],w.y+W[z+3]),C.x=w.x+W[z+0],C.y=w.y+W[z+1],w.x+=W[z+2],w.y+=W[z+3],z===0&&at===!0&&st.copy(w);break;case"q":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=4)X.quadraticCurveTo(w.x+W[z+0],w.y+W[z+1],w.x+W[z+2],w.y+W[z+3]),C.x=w.x+W[z+0],C.y=w.y+W[z+1],w.x+=W[z+2],w.y+=W[z+3],z===0&&at===!0&&st.copy(w);break;case"t":W=b(ct);for(let z=0,wt=W.length;z<wt;z+=2){const zt=E(w.x,C.x),Qt=E(w.y,C.y);X.quadraticCurveTo(zt,Qt,w.x+W[z+0],w.y+W[z+1]),C.x=zt,C.y=Qt,w.x=w.x+W[z+0],w.y=w.y+W[z+1],z===0&&at===!0&&st.copy(w)}break;case"a":W=b(ct,[3,4],7);for(let z=0,wt=W.length;z<wt;z+=7){if(W[z+5]==0&&W[z+6]==0)continue;const zt=w.clone();w.x+=W[z+5],w.y+=W[z+6],C.x=w.x,C.y=w.y,u(X,W[z],W[z+1],W[z+2],W[z+3],W[z+4],zt,w),z===0&&at===!0&&st.copy(w)}break;case"Z":case"z":X.currentPath.autoClose=!0,X.currentPath.curves.length>0&&(w.copy(st),X.currentPath.currentPoint.copy(w),gt=!0);break;default:console.warn(R)}at=!1}return X}function c(Z){if(!(!Z.sheet||!Z.sheet.cssRules||!Z.sheet.cssRules.length))for(let X=0;X<Z.sheet.cssRules.length;X++){const w=Z.sheet.cssRules[X];if(w.type!==1)continue;const C=w.selectorText.split(/,/gm).filter(Boolean).map(st=>st.trim());for(let st=0;st<C.length;st++){const gt=Object.fromEntries(Object.entries(w.style).filter(([,at])=>at!==""));ut[C[st]]=Object.assign(ut[C[st]]||{},gt)}}}function u(Z,X,w,C,st,gt,at,Pt){if(X==0||w==0){Z.lineTo(Pt.x,Pt.y);return}C=C*Math.PI/180,X=Math.abs(X),w=Math.abs(w);const Vt=(at.x-Pt.x)/2,Dt=(at.y-Pt.y)/2,et=Math.cos(C)*Vt+Math.sin(C)*Dt,R=-Math.sin(C)*Vt+Math.cos(C)*Dt;let ft=X*X,ct=w*w;const W=et*et,z=R*R,wt=W/ft+z/ct;if(wt>1){const Zt=Math.sqrt(wt);X=Zt*X,w=Zt*w,ft=X*X,ct=w*w}const zt=ft*z+ct*W,Qt=(ft*ct-zt)/zt;let F=Math.sqrt(Math.max(0,Qt));st===gt&&(F=-F);const A=F*X*R/w,ot=-F*w*et/X,Rt=Math.cos(C)*A-Math.sin(C)*ot+(at.x+Pt.x)/2,Ut=Math.sin(C)*A+Math.cos(C)*ot+(at.y+Pt.y)/2,Et=f(1,0,(et-A)/X,(R-ot)/w),ae=f((et-A)/X,(R-ot)/w,(-et-A)/X,(-R-ot)/w)%(Math.PI*2);Z.currentPath.absellipse(Rt,Ut,X,w,Et,Et+ae,gt===0,C)}function f(Z,X,w,C){const st=Z*w+X*C,gt=Math.sqrt(Z*Z+X*X)*Math.sqrt(w*w+C*C);let at=Math.acos(Math.max(-1,Math.min(1,st/gt)));return Z*C-X*w<0&&(at=-at),at}function p(Z){const X=T(Z.getAttribute("x")||0),w=T(Z.getAttribute("y")||0),C=T(Z.getAttribute("rx")||Z.getAttribute("ry")||0),st=T(Z.getAttribute("ry")||Z.getAttribute("rx")||0),gt=T(Z.getAttribute("width")),at=T(Z.getAttribute("height")),Pt=1-.551915024494,Vt=new Nr;return Vt.moveTo(X+C,w),Vt.lineTo(X+gt-C,w),(C!==0||st!==0)&&Vt.bezierCurveTo(X+gt-C*Pt,w,X+gt,w+st*Pt,X+gt,w+st),Vt.lineTo(X+gt,w+at-st),(C!==0||st!==0)&&Vt.bezierCurveTo(X+gt,w+at-st*Pt,X+gt-C*Pt,w+at,X+gt-C,w+at),Vt.lineTo(X+C,w+at),(C!==0||st!==0)&&Vt.bezierCurveTo(X+C*Pt,w+at,X,w+at-st*Pt,X,w+at-st),Vt.lineTo(X,w+st),(C!==0||st!==0)&&Vt.bezierCurveTo(X,w+st*Pt,X+C*Pt,w,X+C,w),Vt}function d(Z){function X(gt,at,Pt){const Vt=T(at),Dt=T(Pt);st===0?C.moveTo(Vt,Dt):C.lineTo(Vt,Dt),st++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new Nr;let st=0;return Z.getAttribute("points").replace(w,X),C.currentPath.autoClose=!0,C}function x(Z){function X(gt,at,Pt){const Vt=T(at),Dt=T(Pt);st===0?C.moveTo(Vt,Dt):C.lineTo(Vt,Dt),st++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new Nr;let st=0;return Z.getAttribute("points").replace(w,X),C.currentPath.autoClose=!1,C}function g(Z){const X=T(Z.getAttribute("cx")||0),w=T(Z.getAttribute("cy")||0),C=T(Z.getAttribute("r")||0),st=new Qo;st.absarc(X,w,C,0,Math.PI*2);const gt=new Nr;return gt.subPaths.push(st),gt}function v(Z){const X=T(Z.getAttribute("cx")||0),w=T(Z.getAttribute("cy")||0),C=T(Z.getAttribute("rx")||0),st=T(Z.getAttribute("ry")||0),gt=new Qo;gt.absellipse(X,w,C,st,0,Math.PI*2);const at=new Nr;return at.subPaths.push(gt),at}function y(Z){const X=T(Z.getAttribute("x1")||0),w=T(Z.getAttribute("y1")||0),C=T(Z.getAttribute("x2")||0),st=T(Z.getAttribute("y2")||0),gt=new Nr;return gt.moveTo(X,w),gt.lineTo(C,st),gt.currentPath.autoClose=!1,gt}function M(Z,X){X=Object.assign({},X);let w={};if(Z.hasAttribute("class")){const at=Z.getAttribute("class").split(/\s/).filter(Boolean).map(Pt=>Pt.trim());for(let Pt=0;Pt<at.length;Pt++)w=Object.assign(w,ut["."+at[Pt]])}Z.hasAttribute("id")&&(w=Object.assign(w,ut["#"+Z.getAttribute("id")]));function C(at,Pt,Vt){Vt===void 0&&(Vt=function(et){return et.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),et}),Z.hasAttribute(at)&&(X[Pt]=Vt(Z.getAttribute(at))),w[at]&&(X[Pt]=Vt(w[at])),Z.style&&Z.style[at]!==""&&(X[Pt]=Vt(Z.style[at]))}function st(at){return Math.max(0,Math.min(1,T(at)))}function gt(at){return Math.max(0,T(at))}return C("fill","fill"),C("fill-opacity","fillOpacity",st),C("fill-rule","fillRule"),C("opacity","opacity",st),C("stroke","stroke"),C("stroke-opacity","strokeOpacity",st),C("stroke-width","strokeWidth",gt),C("stroke-linejoin","strokeLineJoin"),C("stroke-linecap","strokeLineCap"),C("stroke-miterlimit","strokeMiterLimit",gt),C("visibility","visibility"),X}function E(Z,X){return Z-(X-Z)}function b(Z,X,w){if(typeof Z!="string")throw new TypeError("Invalid input: "+typeof Z);const C={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},st=0,gt=1,at=2,Pt=3;let Vt=st,Dt=!0,et="",R="";const ft=[];function ct(zt,Qt,F){const A=new SyntaxError('Unexpected character "'+zt+'" at index '+Qt+".");throw A.partial=F,A}function W(){et!==""&&(R===""?ft.push(Number(et)):ft.push(Number(et)*Math.pow(10,Number(R)))),et="",R=""}let z;const wt=Z.length;for(let zt=0;zt<wt;zt++){if(z=Z[zt],Array.isArray(X)&&X.includes(ft.length%w)&&C.FLAGS.test(z)){Vt=gt,et=z,W();continue}if(Vt===st){if(C.WHITESPACE.test(z))continue;if(C.DIGIT.test(z)||C.SIGN.test(z)){Vt=gt,et=z;continue}if(C.POINT.test(z)){Vt=at,et=z;continue}C.COMMA.test(z)&&(Dt&&ct(z,zt,ft),Dt=!0)}if(Vt===gt){if(C.DIGIT.test(z)){et+=z;continue}if(C.POINT.test(z)){et+=z,Vt=at;continue}if(C.EXP.test(z)){Vt=Pt;continue}C.SIGN.test(z)&&et.length===1&&C.SIGN.test(et[0])&&ct(z,zt,ft)}if(Vt===at){if(C.DIGIT.test(z)){et+=z;continue}if(C.EXP.test(z)){Vt=Pt;continue}C.POINT.test(z)&&et[et.length-1]==="."&&ct(z,zt,ft)}if(Vt===Pt){if(C.DIGIT.test(z)){R+=z;continue}if(C.SIGN.test(z)){if(R===""){R+=z;continue}R.length===1&&C.SIGN.test(R)&&ct(z,zt,ft)}}C.WHITESPACE.test(z)?(W(),Vt=st,Dt=!1):C.COMMA.test(z)?(W(),Vt=st,Dt=!0):C.SIGN.test(z)?(W(),Vt=gt,et=z):C.POINT.test(z)?(W(),Vt=at,et=z):ct(z,zt,ft)}return W(),ft}const _=["mm","cm","in","pt","pc","px"],I={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function T(Z){let X="px";if(typeof Z=="string"||Z instanceof String)for(let C=0,st=_.length;C<st;C++){const gt=_[C];if(Z.endsWith(gt)){X=gt,Z=Z.substring(0,Z.length-gt.length);break}}let w;return X==="px"&&n.defaultUnit!=="px"?w=I.in[n.defaultUnit]/n.defaultDPI:(w=I[X][n.defaultUnit],w<0&&(w=I[X].in*n.defaultDPI)),w*parseFloat(Z)}function P(Z){if(!(Z.hasAttribute("transform")||Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))))return null;const X=G(Z);return mt.length>0&&X.premultiply(mt[mt.length-1]),V.copy(X),mt.push(X),X}function G(Z){const X=new be,w=xt;if(Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))){const C=T(Z.getAttribute("x")||0),st=T(Z.getAttribute("y")||0);X.translate(C,st)}if(Z.hasAttribute("transform")){const C=Z.getAttribute("transform").split(")");for(let st=C.length-1;st>=0;st--){const gt=C[st].trim();if(gt==="")continue;const at=gt.indexOf("("),Pt=gt.length;if(at>0&&at<Pt){const Vt=gt.slice(0,at),Dt=b(gt.slice(at+1));switch(w.identity(),Vt){case"translate":if(Dt.length>=1){const et=Dt[0];let R=0;Dt.length>=2&&(R=Dt[1]),w.translate(et,R)}break;case"rotate":if(Dt.length>=1){let et=0,R=0,ft=0;et=Dt[0]*Math.PI/180,Dt.length>=3&&(R=Dt[1],ft=Dt[2]),k.makeTranslation(-R,-ft),Q.makeRotation(et),j.multiplyMatrices(Q,k),k.makeTranslation(R,ft),w.multiplyMatrices(k,j)}break;case"scale":if(Dt.length>=1){const et=Dt[0];let R=et;Dt.length>=2&&(R=Dt[1]),w.scale(et,R)}break;case"skewX":Dt.length===1&&w.set(1,Math.tan(Dt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Dt.length===1&&w.set(1,0,0,Math.tan(Dt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Dt.length===6&&w.set(Dt[0],Dt[2],Dt[4],Dt[1],Dt[3],Dt[5],0,0,1);break}}X.premultiply(w)}}return X}function B(Z,X){function w(at){At.set(at.x,at.y,1).applyMatrix3(X),at.set(At.x,At.y)}function C(at){const Pt=at.xRadius,Vt=at.yRadius,Dt=Math.cos(at.aRotation),et=Math.sin(at.aRotation),R=new Y(Pt*Dt,Pt*et,0),ft=new Y(-Vt*et,Vt*Dt,0),ct=R.applyMatrix3(X),W=ft.applyMatrix3(X),z=xt.set(ct.x,W.x,0,ct.y,W.y,0,0,0,1),wt=k.copy(z).invert(),F=Q.copy(wt).transpose().multiply(wt).elements,A=K(F[0],F[1],F[4]),ot=Math.sqrt(A.rt1),Rt=Math.sqrt(A.rt2);if(at.xRadius=1/ot,at.yRadius=1/Rt,at.aRotation=Math.atan2(A.sn,A.cs),!((at.aEndAngle-at.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Et=k.set(ot,0,0,0,Rt,0,0,0,1),ae=Q.set(A.cs,A.sn,0,-A.sn,A.cs,0,0,0,1),Zt=Et.multiply(ae).multiply(z),ie=re=>{const{x:It,y:Xt}=new Y(Math.cos(re),Math.sin(re),0).applyMatrix3(Zt);return Math.atan2(Xt,It)};at.aStartAngle=ie(at.aStartAngle),at.aEndAngle=ie(at.aEndAngle),H(X)&&(at.aClockwise=!at.aClockwise)}}function st(at){const Pt=N(X),Vt=D(X);at.xRadius*=Pt,at.yRadius*=Vt;const Dt=Pt>Number.EPSILON?Math.atan2(X.elements[1],X.elements[0]):Math.atan2(-X.elements[3],X.elements[4]);at.aRotation+=Dt,H(X)&&(at.aStartAngle*=-1,at.aEndAngle*=-1,at.aClockwise=!at.aClockwise)}const gt=Z.subPaths;for(let at=0,Pt=gt.length;at<Pt;at++){const Dt=gt[at].curves;for(let et=0;et<Dt.length;et++){const R=Dt[et];R.isLineCurve?(w(R.v1),w(R.v2)):R.isCubicBezierCurve?(w(R.v0),w(R.v1),w(R.v2),w(R.v3)):R.isQuadraticBezierCurve?(w(R.v0),w(R.v1),w(R.v2)):R.isEllipseCurve&&(Tt.set(R.aX,R.aY),w(Tt),R.aX=Tt.x,R.aY=Tt.y,$(X)?C(R):st(R))}}}function H(Z){const X=Z.elements;return X[0]*X[4]-X[1]*X[3]<0}function $(Z){const X=Z.elements,w=X[0]*X[3]+X[1]*X[4];if(w===0)return!1;const C=N(Z),st=D(Z);return Math.abs(w/(C*st))>Number.EPSILON}function N(Z){const X=Z.elements;return Math.sqrt(X[0]*X[0]+X[1]*X[1])}function D(Z){const X=Z.elements;return Math.sqrt(X[3]*X[3]+X[4]*X[4])}function K(Z,X,w){let C,st,gt,at,Pt;const Vt=Z+w,Dt=Z-w,et=Math.sqrt(Dt*Dt+4*X*X);return Vt>0?(C=.5*(Vt+et),Pt=1/C,st=Z*Pt*w-X*Pt*X):Vt<0?st=.5*(Vt-et):(C=.5*et,st=-.5*et),Dt>0?gt=Dt+et:gt=Dt-et,Math.abs(gt)>2*Math.abs(X)?(Pt=-2*X/gt,at=1/Math.sqrt(1+Pt*Pt),gt=Pt*at):Math.abs(X)===0?(gt=1,at=0):(Pt=-.5*gt/X,gt=1/Math.sqrt(1+Pt*Pt),at=Pt*gt),Dt>0&&(Pt=gt,gt=-at,at=Pt),{rt1:C,rt2:st,cs:gt,sn:at}}const nt=[],ut={},mt=[],xt=new be,k=new be,Q=new be,j=new be,Tt=new Mt,At=new Y,V=new be,pt=new DOMParser().parseFromString(t,"image/svg+xml");return a(pt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:nt,xml:pt.documentElement}}static createShapes(t){const a={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},o={loc:a.ORIGIN,t:0};function c(E,b,_,I){const T=E.x,P=b.x,G=_.x,B=I.x,H=E.y,$=b.y,N=_.y,D=I.y,K=(B-G)*(H-N)-(D-N)*(T-G),nt=(P-T)*(H-N)-($-H)*(T-G),ut=(D-N)*(P-T)-(B-G)*($-H),mt=K/ut,xt=nt/ut;if(ut===0&&K!==0||mt<=0||mt>=1||xt<0||xt>1)return null;if(K===0&&ut===0){for(let k=0;k<2;k++)if(u(k===0?_:I,E,b),o.loc==a.ORIGIN){const Q=k===0?_:I;return{x:Q.x,y:Q.y,t:o.t}}else if(o.loc==a.BETWEEN){const Q=+(T+o.t*(P-T)).toPrecision(10),j=+(H+o.t*($-H)).toPrecision(10);return{x:Q,y:j,t:o.t}}return null}else{for(let j=0;j<2;j++)if(u(j===0?_:I,E,b),o.loc==a.ORIGIN){const Tt=j===0?_:I;return{x:Tt.x,y:Tt.y,t:o.t}}const k=+(T+mt*(P-T)).toPrecision(10),Q=+(H+mt*($-H)).toPrecision(10);return{x:k,y:Q,t:mt}}}function u(E,b,_){const I=_.x-b.x,T=_.y-b.y,P=E.x-b.x,G=E.y-b.y,B=I*G-P*T;if(E.x===b.x&&E.y===b.y){o.loc=a.ORIGIN,o.t=0;return}if(E.x===_.x&&E.y===_.y){o.loc=a.DESTINATION,o.t=1;return}if(B<-Number.EPSILON){o.loc=a.LEFT;return}if(B>Number.EPSILON){o.loc=a.RIGHT;return}if(I*P<0||T*G<0){o.loc=a.BEHIND;return}if(Math.sqrt(I*I+T*T)<Math.sqrt(P*P+G*G)){o.loc=a.BEYOND;return}let H;I!==0?H=P/I:H=G/T,o.loc=a.BETWEEN,o.t=H}function f(E,b){const _=[],I=[];for(let T=1;T<E.length;T++){const P=E[T-1],G=E[T];for(let B=1;B<b.length;B++){const H=b[B-1],$=b[B],N=c(P,G,H,$);N!==null&&_.find(D=>D.t<=N.t+Number.EPSILON&&D.t>=N.t-Number.EPSILON)===void 0&&(_.push(N),I.push(new Mt(N.x,N.y)))}}return I}function p(E,b,_){const I=new Mt;b.getCenter(I);const T=[];return _.forEach(P=>{P.boundingBox.containsPoint(I)&&f(E,P.points).forEach(B=>{T.push({identifier:P.identifier,isCW:P.isCW,point:B})})}),T.sort((P,G)=>P.point.x-G.point.x),T}function d(E,b,_,I,T){(T==null||T==="")&&(T="nonzero");const P=new Mt;E.boundingBox.getCenter(P);const G=[new Mt(_,P.y),new Mt(I,P.y)],B=p(G,E.boundingBox,b);B.sort((nt,ut)=>nt.point.x-ut.point.x);const H=[],$=[];B.forEach(nt=>{nt.identifier===E.identifier?H.push(nt):$.push(nt)});const N=H[0].point.x,D=[];let K=0;for(;K<$.length&&$[K].point.x<N;)D.length>0&&D[D.length-1]===$[K].identifier?D.pop():D.push($[K].identifier),K++;if(D.push(E.identifier),T==="evenodd"){const nt=D.length%2===0,ut=D[D.length-2];return{identifier:E.identifier,isHole:nt,for:ut}}else if(T==="nonzero"){let nt=!0,ut=null,mt=null;for(let xt=0;xt<D.length;xt++){const k=D[xt];nt?(mt=b[k].isCW,nt=!1,ut=k):mt!==b[k].isCW&&(mt=b[k].isCW,nt=!0)}return{identifier:E.identifier,isHole:nt,for:ut}}else console.warn('fill-rule: "'+T+'" is currently not implemented.')}let x=999999999,g=-999999999,v=t.subPaths.map(E=>{const b=E.getPoints();let _=-999999999,I=999999999,T=-999999999,P=999999999;for(let G=0;G<b.length;G++){const B=b[G];B.y>_&&(_=B.y),B.y<I&&(I=B.y),B.x>T&&(T=B.x),B.x<P&&(P=B.x)}return g<=T&&(g=T+1),x>=P&&(x=P-1),{curves:E.curves,points:b,isCW:Js.isClockWise(b),identifier:-1,boundingBox:new zE(new Mt(P,I),new Mt(T,_))}});v=v.filter(E=>E.points.length>1);for(let E=0;E<v.length;E++)v[E].identifier=E;const y=v.map(E=>d(E,v,x,g,t.userData?t.userData.style.fillRule:void 0)),M=[];return v.forEach(E=>{if(!y[E.identifier].isHole){const _=new xc;_.curves=E.curves,y.filter(T=>T.isHole&&T.for===E.identifier).forEach(T=>{const P=v[T.identifier],G=new Qo;G.curves=P.curves,_.holes.push(G)}),M.push(_)}}),M}static getStrokeStyle(t,n,a,o,c){return t=t!==void 0?t:1,n=n!==void 0?n:"#000",a=a!==void 0?a:"miter",o=o!==void 0?o:"butt",c=c!==void 0?c:4,{strokeColor:n,strokeWidth:t,strokeLineJoin:a,strokeLineCap:o,strokeMiterLimit:c}}static pointsToStroke(t,n,a,o){const c=[],u=[],f=[];if(fs.pointsToStrokeWithBuffers(t,n,a,o,c,u,f)===0)return null;const p=new fi;return p.setAttribute("position",new Sn(c,3)),p.setAttribute("normal",new Sn(u,3)),p.setAttribute("uv",new Sn(f,2)),p}static pointsToStrokeWithBuffers(t,n,a,o,c,u,f,p){const d=new Mt,x=new Mt,g=new Mt,v=new Mt,y=new Mt,M=new Mt,E=new Mt,b=new Mt,_=new Mt,I=new Mt,T=new Mt,P=new Mt,G=new Mt,B=new Mt,H=new Mt,$=new Mt,N=new Mt;a=a!==void 0?a:12,o=o!==void 0?o:.001,p=p!==void 0?p:0,t=Dt(t);const D=t.length;if(D<2)return 0;const K=t[0].equals(t[D-1]);let nt,ut=t[0],mt;const xt=n.strokeWidth/2,k=1/(D-1);let Q=0,j,Tt,At,V,pt=!1,Lt=0,Z=p*3,X=p*2;w(t[0],t[1],d).multiplyScalar(xt),b.copy(t[0]).sub(d),_.copy(t[0]).add(d),I.copy(b),T.copy(_);for(let et=1;et<D;et++){nt=t[et],et===D-1?K?mt=t[1]:mt=void 0:mt=t[et+1];const R=d;if(w(ut,nt,R),g.copy(R).multiplyScalar(xt),P.copy(nt).sub(g),G.copy(nt).add(g),j=Q+k,Tt=!1,mt!==void 0){w(nt,mt,x),g.copy(x).multiplyScalar(xt),B.copy(nt).sub(g),H.copy(nt).add(g),At=!0,g.subVectors(mt,ut),R.dot(g)<0&&(At=!1),et===1&&(pt=At),g.subVectors(mt,nt),g.normalize();const ft=Math.abs(R.dot(g));if(ft>Number.EPSILON){const ct=xt/ft;g.multiplyScalar(-ct),v.subVectors(nt,ut),y.copy(v).setLength(ct).add(g),$.copy(y).negate();const W=y.length(),z=v.length();v.divideScalar(z),M.subVectors(mt,nt);const wt=M.length();switch(M.divideScalar(wt),v.dot($)<z&&M.dot($)<wt&&(Tt=!0),N.copy(y).add(nt),$.add(nt),V=!1,Tt?At?(H.copy($),G.copy($)):(B.copy($),P.copy($)):gt(),n.strokeLineJoin){case"bevel":at(At,Tt,j);break;case"round":Pt(At,Tt),At?st(nt,P,B,j,0):st(nt,H,G,j,1);break;case"miter":case"miter-clip":default:const zt=xt*n.strokeMiterLimit/W;if(zt<1)if(n.strokeLineJoin!=="miter-clip"){at(At,Tt,j);break}else Pt(At,Tt),At?(M.subVectors(N,P).multiplyScalar(zt).add(P),E.subVectors(N,B).multiplyScalar(zt).add(B),C(P,j,0),C(M,j,0),C(nt,j,.5),C(nt,j,.5),C(M,j,0),C(E,j,0),C(nt,j,.5),C(E,j,0),C(B,j,0)):(M.subVectors(N,G).multiplyScalar(zt).add(G),E.subVectors(N,H).multiplyScalar(zt).add(H),C(G,j,1),C(M,j,1),C(nt,j,.5),C(nt,j,.5),C(M,j,1),C(E,j,1),C(nt,j,.5),C(E,j,1),C(H,j,1));else Tt?(At?(C(_,Q,1),C(b,Q,0),C(N,j,0),C(_,Q,1),C(N,j,0),C($,j,1)):(C(_,Q,1),C(b,Q,0),C(N,j,1),C(b,Q,0),C($,j,0),C(N,j,1)),At?B.copy(N):H.copy(N)):At?(C(P,j,0),C(N,j,0),C(nt,j,.5),C(nt,j,.5),C(N,j,0),C(B,j,0)):(C(G,j,1),C(N,j,1),C(nt,j,.5),C(nt,j,.5),C(N,j,1),C(H,j,1)),V=!0;break}}else gt()}else gt();!K&&et===D-1&&Vt(t[0],I,T,At,!0,Q),Q=j,ut=nt,b.copy(B),_.copy(H)}if(!K)Vt(nt,P,G,At,!1,j);else if(Tt&&c){let et=N,R=$;pt!==At&&(et=$,R=N),At?(V||pt)&&(R.toArray(c,0),R.toArray(c,9),V&&et.toArray(c,3)):(V||!pt)&&(R.toArray(c,3),R.toArray(c,9),V&&et.toArray(c,0))}return Lt;function w(et,R,ft){return ft.subVectors(R,et),ft.set(-ft.y,ft.x).normalize()}function C(et,R,ft){c&&(c[Z]=et.x,c[Z+1]=et.y,c[Z+2]=0,u&&(u[Z]=0,u[Z+1]=0,u[Z+2]=1),Z+=3,f&&(f[X]=R,f[X+1]=ft,X+=2)),Lt+=3}function st(et,R,ft,ct,W){d.copy(R).sub(et).normalize(),x.copy(ft).sub(et).normalize();let z=Math.PI;const wt=d.dot(x);Math.abs(wt)<1&&(z=Math.abs(Math.acos(wt))),z/=a,g.copy(R);for(let zt=0,Qt=a-1;zt<Qt;zt++)v.copy(g).rotateAround(et,z),C(g,ct,W),C(v,ct,W),C(et,ct,.5),g.copy(v);C(v,ct,W),C(ft,ct,W),C(et,ct,.5)}function gt(){C(_,Q,1),C(b,Q,0),C(P,j,0),C(_,Q,1),C(P,j,0),C(G,j,1)}function at(et,R,ft){R?et?(C(_,Q,1),C(b,Q,0),C(P,j,0),C(_,Q,1),C(P,j,0),C($,j,1),C(P,ft,0),C(B,ft,0),C($,ft,.5)):(C(_,Q,1),C(b,Q,0),C(G,j,1),C(b,Q,0),C($,j,0),C(G,j,1),C(G,ft,1),C($,ft,0),C(H,ft,1)):et?(C(P,ft,0),C(B,ft,0),C(nt,ft,.5)):(C(G,ft,1),C(H,ft,0),C(nt,ft,.5))}function Pt(et,R){R&&(et?(C(_,Q,1),C(b,Q,0),C(P,j,0),C(_,Q,1),C(P,j,0),C($,j,1),C(P,Q,0),C(nt,j,.5),C($,j,1),C(nt,j,.5),C(B,Q,0),C($,j,1)):(C(_,Q,1),C(b,Q,0),C(G,j,1),C(b,Q,0),C($,j,0),C(G,j,1),C(G,Q,1),C($,j,0),C(nt,j,.5),C(nt,j,.5),C($,j,0),C(H,Q,1)))}function Vt(et,R,ft,ct,W,z){switch(n.strokeLineCap){case"round":W?st(et,ft,R,z,.5):st(et,R,ft,z,.5);break;case"square":if(W)d.subVectors(R,et),x.set(d.y,-d.x),g.addVectors(d,x).add(et),v.subVectors(x,d).add(et),ct?(g.toArray(c,3),v.toArray(c,0),v.toArray(c,9)):(g.toArray(c,3),f[7]===1?v.toArray(c,9):g.toArray(c,9),v.toArray(c,0));else{d.subVectors(ft,et),x.set(d.y,-d.x),g.addVectors(d,x).add(et),v.subVectors(x,d).add(et);const wt=c.length;ct?(g.toArray(c,wt-3),v.toArray(c,wt-6),v.toArray(c,wt-12)):(v.toArray(c,wt-6),g.toArray(c,wt-3),v.toArray(c,wt-12))}break}}function Dt(et){let R=!1;for(let ct=1,W=et.length-1;ct<W;ct++)if(et[ct].distanceTo(et[ct+1])<o){R=!0;break}if(!R)return et;const ft=[];ft.push(et[0]);for(let ct=1,W=et.length-1;ct<W;ct++)et[ct].distanceTo(et[ct+1])>=o&&ft.push(et[ct]);return ft.push(et[et.length-1]),ft}}}class Uw{constructor(t=.1,n=6){this.maxEdgeLength=t,this.maxIterations=n}modify(t){t.index!==null&&(t=t.toNonIndexed());const n=this.maxIterations,a=this.maxEdgeLength*this.maxEdgeLength,o=new Y,c=new Y,u=new Y,f=new Y,p=[o,c,u,f],d=new Y,x=new Y,g=new Y,v=new Y,y=[d,x,g,v],M=new xe,E=new xe,b=new xe,_=new xe,I=[M,E,b,_],T=new Mt,P=new Mt,G=new Mt,B=new Mt,H=[T,P,G,B],$=new Mt,N=new Mt,D=new Mt,K=new Mt,nt=[$,N,D,K],ut=t.attributes,mt=ut.normal!==void 0,xt=ut.color!==void 0,k=ut.uv!==void 0,Q=ut.uv1!==void 0;let j=ut.position.array,Tt=mt?ut.normal.array:null,At=xt?ut.color.array:null,V=k?ut.uv.array:null,pt=Q?ut.uv1.array:null,Lt=j,Z=Tt,X=At,w=V,C=pt,st=0,gt=!0;function at(Vt,Dt,et){const R=p[Vt],ft=p[Dt],ct=p[et];if(Lt.push(R.x,R.y,R.z),Lt.push(ft.x,ft.y,ft.z),Lt.push(ct.x,ct.y,ct.z),mt){const W=y[Vt],z=y[Dt],wt=y[et];Z.push(W.x,W.y,W.z),Z.push(z.x,z.y,z.z),Z.push(wt.x,wt.y,wt.z)}if(xt){const W=I[Vt],z=I[Dt],wt=I[et];X.push(W.r,W.g,W.b),X.push(z.r,z.g,z.b),X.push(wt.r,wt.g,wt.b)}if(k){const W=H[Vt],z=H[Dt],wt=H[et];w.push(W.x,W.y),w.push(z.x,z.y),w.push(wt.x,wt.y)}if(Q){const W=nt[Vt],z=nt[Dt],wt=nt[et];C.push(W.x,W.y),C.push(z.x,z.y),C.push(wt.x,wt.y)}}for(;gt&&st<n;){st++,gt=!1,j=Lt,Lt=[],mt&&(Tt=Z,Z=[]),xt&&(At=X,X=[]),k&&(V=w,w=[]),Q&&(pt=C,C=[]);for(let Vt=0,Dt=0,et=j.length;Vt<et;Vt+=9,Dt+=6){o.fromArray(j,Vt+0),c.fromArray(j,Vt+3),u.fromArray(j,Vt+6),mt&&(d.fromArray(Tt,Vt+0),x.fromArray(Tt,Vt+3),g.fromArray(Tt,Vt+6)),xt&&(M.fromArray(At,Vt+0),E.fromArray(At,Vt+3),b.fromArray(At,Vt+6)),k&&(T.fromArray(V,Dt+0),P.fromArray(V,Dt+2),G.fromArray(V,Dt+4)),Q&&($.fromArray(pt,Dt+0),N.fromArray(pt,Dt+2),D.fromArray(pt,Dt+4));const R=o.distanceToSquared(c),ft=c.distanceToSquared(u),ct=o.distanceToSquared(u);R>a||ft>a||ct>a?(gt=!0,R>=ft&&R>=ct?(f.lerpVectors(o,c,.5),mt&&v.lerpVectors(d,x,.5),xt&&_.lerpColors(M,E,.5),k&&B.lerpVectors(T,P,.5),Q&&K.lerpVectors($,N,.5),at(0,3,2),at(3,1,2)):ft>=R&&ft>=ct?(f.lerpVectors(c,u,.5),mt&&v.lerpVectors(x,g,.5),xt&&_.lerpColors(E,b,.5),k&&B.lerpVectors(P,G,.5),Q&&K.lerpVectors(N,D,.5),at(0,1,3),at(3,2,0)):(f.lerpVectors(o,u,.5),mt&&v.lerpVectors(d,g,.5),xt&&_.lerpColors(M,b,.5),k&&B.lerpVectors(T,G,.5),Q&&K.lerpVectors($,D,.5),at(0,1,3),at(3,1,2))):at(0,1,2)}}const Pt=new fi;return Pt.setAttribute("position",new Sn(Lt,3)),mt&&Pt.setAttribute("normal",new Sn(Z,3)),xt&&Pt.setAttribute("color",new Sn(X,3)),k&&Pt.setAttribute("uv",new Sn(w,2)),Q&&Pt.setAttribute("uv1",new Sn(C,2)),Pt}}const Nw=48,Jy=130,Lw=s=>s.replace(/[^a-z0-9]+/gi,"-"),V_=s=>{if(typeof s!="string")return null;const t=s.trim().toLowerCase();return!t||t==="none"||t==="transparent"||t==="currentcolor"||t.startsWith("url(")?null:t},Pw=s=>{const t=V_(s.userData?.style?.fill)??V_(s.userData?.style?.stroke);if(t)return t;const n=s.color?.getHexString?.();return n?`#${n}`:"#111111"},$y=s=>{let t=0;for(let n=0;n<s.length;n+=1){const a=s[n],o=s[(n+1)%s.length];t+=a.x*o.y-o.x*a.y}return t/2},Ow=s=>{const t=$y(s);if(Math.abs(t)<1e-5)return s[0]?.clone()??new Mt;let n=0,a=0;for(let c=0;c<s.length;c+=1){const u=s[c],f=s[(c+1)%s.length],p=u.x*f.y-f.x*u.y;n+=(u.x+f.x)*p,a+=(u.y+f.y)*p}const o=6*t;return new Mt(n/o,a/o)},zw=(s,t,n)=>{const a=(s.y-t.y)*(n.x-t.x)-(s.x-t.x)*(n.y-t.y);if(Math.abs(a)>1e-4)return!1;const o=(s.x-t.x)*(n.x-t.x)+(s.y-t.y)*(n.y-t.y);if(o<0)return!1;const c=(n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y);return o<=c},Bw=(s,t)=>{let n=!1;for(let a=0,o=t.length-1;a<t.length;o=a++){const c=t[a],u=t[o];if(zw(s,u,c))return!0;c.y>s.y!=u.y>s.y&&s.x<(u.x-c.x)*(s.y-c.y)/(u.y-c.y)+c.x&&(n=!n)}return n},G_=s=>{const t=s.map(n=>{const a=n.extractPoints(Nw).shape;return a.length<3?null:{area:Math.abs($y(a)),centroid:Ow(a),outline:a,shape:n}}).filter(n=>!!n);return t.filter((n,a)=>!t.some((o,c)=>a===c||o.area<=n.area+1e-4?!1:Bw(n.centroid,o.outline))).map(({shape:n})=>{const a=n.clone();return a.holes=[],a})},Iw=(s,t,n,a)=>{const o=s.map(v=>{const y=new jm(v,{bevelEnabled:t.bevel.enabled,bevelSegments:t.bevel.segments,bevelSize:t.bevel.size,bevelThickness:t.bevel.thickness,curveSegments:"curveSegments"in t?t.curveSegments:20,depth:Math.abs(n??t.depth),steps:"detail"in t?t.detail:1});return(n??t.depth)<0&&y.translate(0,0,n??t.depth),y.computeVertexNormals(),y}).filter(Boolean),c=o.length===1?o[0]:Cw(o,!1)??o[0];(a?.flipY??!0)&&c.scale(1,-1,1);const u="scaleX"in t?t.scaleX:1,f="scaleY"in t?t.scaleY:1;if(c.scale(u,f,1),"rotationQuarterTurns"in t){const v=(t.rotationQuarterTurns%4+4)%4;v!==0&&c.rotateZ(-v*(Math.PI/2))}const p=Math.max(0,Math.floor(t.tessellationIterations??0)),d="creaseAngle"in t?t.creaseAngle:180,x=Math.max(0,Math.min(180,d)),g=v=>{if(v.computeVertexNormals(),x>=150)return v.computeBoundingBox(),v.computeBoundingSphere(),v;const y=Rw(v,x*Math.PI/180);return y!==v&&v.dispose(),y.computeVertexNormals(),y.computeBoundingBox(),y.computeBoundingSphere(),y};if(p>0){c.computeBoundingBox();const v=c.boundingBox?.getSize(new Y)??new Y(1,1,1),y=Math.max(v.x,v.y,v.z,1),M=Math.max(.45,y/(10+p*6)),b=new Uw(M,p).modify(c);return c.dispose(),g(b)}return g(c)},Fw=(s,t,n=Jy,a=0,o="left",r=1.18)=>{const c=t.replace(/\r\n?/g,`
`).replace(/[\u2028\u2029]/g,`
`).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,``),u=n*r,m=f=>f.filter(p=>{const d=new Wi().setFromPoints(p.getPoints(48).map(x=>new Y(x.x,x.y,0))),v=d.getSize(new Y);return Number.isFinite(v.x*v.y)&&v.x*v.y>24&&v.x>5&&v.y>5});return c.split(`
`).flatMap((f,p)=>{if(!f.trim())return[];const d=s.getAdvanceWidth?.(f,n,{kerning:!0,letterSpacing:a})??s.forEachGlyph(f,0,0,n,{kerning:!0,letterSpacing:a},()=>{}),x=o==="center"?-d/2:o==="right"?-d:0,g=p*u,v=[];if(s.getPath){const M=s.getPath(f,x,g,n,{kerning:!0,letterSpacing:a}).toPathData({decimalPlaces:3,flipY:!1,optimize:!1});if(!M.trim())return[];const E=`<svg xmlns="http://www.w3.org/2000/svg"><path d="${M}" /></svg>`;return m(new fs().parse(E).paths.flatMap(_=>fs.createShapes(_)))}return s.forEachGlyph(f,x,g,n,{kerning:!0,letterSpacing:a},(y,M,E,b)=>{const I=y.getPath(M,E,b).toPathData({decimalPlaces:3,flipY:!1,optimize:!1});if(!I.trim())return;const T=`<svg xmlns="http://www.w3.org/2000/svg"><path d="${I}" /></svg>`,P=new fs().parse(T);v.push(...m(P.paths.flatMap(G=>fs.createShapes(G))))}),v})},Hw=s=>{if(!s)return null;const t=s.trim().toLowerCase();if(/^#[0-9a-f]{3}$/i.test(t))return t.slice(1).split("").map(a=>parseInt(`${a}${a}`,16));if(/^#[0-9a-f]{6}$/i.test(t))return[parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)];const n=t.match(/^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)(?:\s*[,/]\s*[0-9.]+\s*)?\)$/i);return n?n.slice(1,4).map(a=>Math.min(Math.max(Number(a),0),255)):null},Vw=s=>{const t=Hw(s);if(!t)return 1;const[n,a,o]=t;return .18+(.2126*n+.7152*a+.0722*o)/255*.82},Gw=(s,t)=>{if(s.kind==="text"){if(!t)throw new Error("text font is loading");if(!s.text.trim())throw new Error("enter some text first");return[{color:null,key:"base",label:s.label,selectable:!1,shapes:Fw(t,s.text,Jy,s.letterSpacing,s.alignment??"left",s.lineSpacing??1.18)}]}const n=new fs().parse(s.svg),a=s.splitByColor?n.paths.reduce((c,u)=>{const f=Pw(u),p=G_(fs.createShapes(u));if(p.length===0)return c;const d=c.get(f)??[];return d.push(...p),c.set(f,d),c},new Map):new Map([["base",G_(n.paths.flatMap(c=>fs.createShapes(c)))]]),o=Array.from(a.entries()).map(([c,u],f)=>({color:s.splitByColor?c:null,key:s.splitByColor?`base-${Lw(c)}`:"base",label:s.splitByColor?`color ${f+1}`:s.label,selectable:!!s.splitByColor,shapes:u})).filter(c=>c.shapes.length>0);if(o.length===0)throw new Error("no extrudable filled shapes were found in the svg");return o},kw=s=>{const t=new Wi,n=new Wi;s.forEach((o,c)=>{if(o.geometry.computeBoundingBox(),!!o.geometry.boundingBox){if(c===0){t.copy(o.geometry.boundingBox);return}t.union(n.copy(o.geometry.boundingBox))}});const a=t.getCenter(new Y);s.forEach(o=>{o.geometry.translate(-a.x,-a.y,-a.z),o.geometry.computeVertexNormals(),o.geometry.computeBoundingBox(),o.geometry.computeBoundingSphere()})},Xw=s=>{const t=s.getIndex();if(t)return Math.floor(t.count/3);const n=s.getAttribute("position");return n?Math.floor(n.count/3):0},jw=s=>s.getAttribute("position")?.count??0,Ww=(s,t,n,a,o,c=!1)=>{const u=Gw(s,t);if(u.flatMap(d=>d.shapes).length===0)throw new Error("Herhangi bir shape uretilmedi.");const p=u.map(d=>{const x=d.selectable?o?.[d.key]??n.depth:n.depth,g=c&&s.kind==="svg"&&d.color?x*Vw(d.color):x;return{color:d.color,geometry:Iw(d.shapes,n,g,{flipY:!0}),id:"base",key:d.key,label:d.label,selectable:d.selectable}});return kw(p),{label:s.label,parts:p,stats:{partCount:p.length,triangleCount:p.reduce((d,x)=>d+Xw(x.geometry),0),vertexCount:p.reduce((d,x)=>d+jw(x.geometry),0)}}},Ir={gold:{attenuationColor:"#f7d87f",attenuationDistance:4.5,baseColor:"#d6b24a",bumpStrength:.22,coatingColor:"#fff4ca",defaults:{reflection:.92,refraction:.04,bump:.18,coating:.22},label:"gold",metalness:.96,roughness:.24,textureFactory:()=>xf(280,(s,t,n)=>{s.fillStyle="#d4af37",s.fillRect(0,0,t,t);for(let a=0;a<420;a+=1){const o=n()*t,c=1+n()*3;s.fillStyle=`rgba(255, 244, 201, ${.05+n()*.12})`,s.fillRect(o,0,c,t)}for(let a=0;a<120;a+=1){const o=n()*t;s.fillStyle=`rgba(126, 83, 6, ${.03+n()*.06})`,s.fillRect(0,o,t,1+n()*1.5)}})},obsidian:{attenuationColor:"#0c0b12",attenuationDistance:2.8,baseColor:"#111016",bumpStrength:.12,coatingColor:"#a694ff",defaults:{reflection:.86,refraction:.1,bump:.12,coating:.88},label:"obsidian",metalness:.18,roughness:.1,textureFactory:()=>xf(280,(s,t,n)=>{s.fillStyle="#0b0a0f",s.fillRect(0,0,t,t);for(let a=0;a<36;a+=1){const o=n()*t,c=n()*t,u=o+(n()-.5)*180,f=c+(n()-.5)*180;s.strokeStyle=`rgba(118, 103, 168, ${.07+n()*.11})`,s.lineWidth=1+n()*2,s.beginPath(),s.moveTo(o,c),s.quadraticCurveTo(o+(n()-.5)*120,c+(n()-.5)*120,u,f),s.stroke()}})},ice:{attenuationColor:"#d7f6ff",attenuationDistance:.95,baseColor:"#a8eeff",bumpStrength:.3,coatingColor:"#ffffff",defaults:{reflection:.72,refraction:.88,bump:.24,coating:.42},label:"ice",metalness:.02,roughness:.08,textureFactory:()=>xf(320,(s,t,n)=>{const a=s.createLinearGradient(0,0,t,t);a.addColorStop(0,"#d9fbff"),a.addColorStop(.48,"#8cdfff"),a.addColorStop(1,"#5fb8df"),s.fillStyle=a,s.fillRect(0,0,t,t);for(let o=0;o<48;o+=1)s.strokeStyle=`rgba(255, 255, 255, ${.08+n()*.14})`,s.lineWidth=1+n()*2.6,s.beginPath(),s.moveTo(n()*t,n()*t),s.lineTo(n()*t,n()*t),s.stroke()})},concrete:{attenuationColor:"#c0c0bc",attenuationDistance:5.8,baseColor:"#b9b8b4",bumpStrength:.42,coatingColor:"#f0f0f0",defaults:{reflection:.22,refraction:.02,bump:.34,coating:.06},label:"concrete",metalness:.04,roughness:.92,textureFactory:()=>xf(300,(s,t,n)=>{s.fillStyle="#bebdb8",s.fillRect(0,0,t,t);for(let a=0;a<2200;a+=1){const o=128+Math.floor(n()*82);s.fillStyle=`rgb(${o}, ${o}, ${o-8})`,s.beginPath(),s.arc(n()*t,n()*t,1+n()*2.4,0,Math.PI*2),s.fill()}})}},k_=new Map,X_=new Map,qw=new CE,Ys=(s,t,n)=>Math.min(Math.max(s,t),n),Yw=s=>{let t=s%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)},bp=(s,t)=>{s.wrapS=ps,s.wrapT=ps,s.repeat.set(1.8,1.8),s.colorSpace=t,s.needsUpdate=!0},Sp=(s,t,n)=>{const a=document.createElement("canvas");a.width=s,a.height=s;const o=a.getContext("2d");if(!o)throw new Error("Preset texture canvas olusturulamadi.");return n(o,s,Yw(t)),a},xf=(s,t)=>{const n=new lp(Sp(s,11,t)),a=new lp(Sp(s,17,(c,u,f)=>{c.fillStyle="#8c8c8c",c.fillRect(0,0,u,u);for(let p=0;p<u*16;p+=1){const d=Math.floor(70+f()*130);c.fillStyle=`rgb(${d}, ${d}, ${d})`,c.fillRect(f()*u,f()*u,2+f()*4,2+f()*4)}})),o=new lp(Sp(s,29,(c,u,f)=>{c.fillStyle="#808080",c.fillRect(0,0,u,u);for(let p=0;p<u*22;p+=1){const d=Math.floor(50+f()*180);c.fillStyle=`rgb(${d}, ${d}, ${d})`,c.beginPath(),c.arc(f()*u,f()*u,1+f()*4,0,Math.PI*2),c.fill()}}));return bp(n,xi),bp(a,""),bp(o,""),a.wrapS=Xi,a.wrapT=Xi,o.wrapS=Xi,o.wrapT=Xi,{bump:o,color:n,roughness:a}},Zw=s=>{const t=k_.get(s);if(t)return t;const n=Ir[s].textureFactory();return k_.set(s,n),n},cc=(s,t)=>{if(!s)return;const n=1/Math.max(t.uvScaleX,1e-6),a=1/Math.max(t.uvScaleY,1e-6);s.wrapS=ps,s.wrapT=ps,s.center.set(.5,.5),s.repeat.set(n,a),s.offset.set(t.uvOffsetX,t.uvOffsetY),s.rotation=t.uvRotation*Math.PI/180,s.needsUpdate=!0},j_=(s,t="")=>{if(!s)return null;const n=`${t}:${s}`,a=X_.get(n);if(a)return a;const o=qw.load(s);return o.wrapS=ps,o.wrapT=ps,o.colorSpace=t,o.needsUpdate=!0,X_.set(n,o),o},Kw=s=>{const t=s.getAttribute("position"),n=s.getAttribute("uv");if(!t||n&&n.count===t.count)return s;const a=s.index||n?s.toNonIndexed()??s.clone():s;a.computeBoundingBox(),a.computeVertexNormals();const o=a.getAttribute("position"),c=a.getAttribute("normal"),u=a.boundingBox;if(!o||!c||!u)return a;const f=u.min,p=u.getSize(new Y),d=new Y(p.x||1,p.y||1,p.z||1),x=new Float32Array(o.count*2);for(let g=0;g<o.count;g+=1){const v=o.getX(g),y=o.getY(g),M=o.getZ(g),E=Math.abs(c.getX(g)),b=Math.abs(c.getY(g)),_=Math.abs(c.getZ(g));let I=0,T=0;_>=E&&_>=b?(I=(v-f.x)/d.x,T=(y-f.y)/d.y):b>=E&&b>=_?(I=(v-f.x)/d.x,T=(M-f.z)/d.z):(I=(M-f.z)/d.z,T=(y-f.y)/d.y),x[g*2]=I,x[g*2+1]=T}return a.setAttribute("uv",new Sn(x,2)),a},Qw=Object.keys(Ir),Jw=s=>Ir[s].label,W_=s=>({bumpImage:null,preset:s,diffuseColor:Ir[s].baseColor,coatingColor:Ir[s].coatingColor,...Ir[s].defaults,refractionImage:null,uvOffsetX:0,uvOffsetY:0,uvRotation:0,uvScaleX:1,uvScaleY:1,uvTileLock:!0}),_c=s=>({...s}),Mp=(s,t)=>{const n=Ir[s.preset],a=Zw(s.preset),o=j_(s.bumpImage),c=j_(s.refractionImage),u=Ys(s.reflection,0,1),f=Ys(s.bump,0,1),p=Ys(s.coating,0,1),d=Ys(s.refraction,0,1),x=new xe(t??s.diffuseColor);cc(a.color,s),cc(a.roughness,s),cc(a.bump,s),cc(o,s),cc(c,s);const g=new yE({color:x,map:s.preset==="concrete"?null:a.color,metalness:Ys(n.metalness*.35+u*.34,0,1),roughness:Ys(n.roughness*.82+(1-u)*.18,.04,1),roughnessMap:s.preset==="concrete"?null:a.roughness,side:ra});return g.bumpMap=o??(s.preset==="concrete"?null:a.bump),g.bumpScale=s.preset==="concrete"?0:f*(n.bumpStrength*.38+p*.04),g.transparent=!1,g.opacity=1,g.depthWrite=!0,g.polygonOffset=!0,g.polygonOffsetFactor=1,g.polygonOffsetUnits=1,g.emissive.copy(x.clone().multiplyScalar(.06)),g.emissiveIntensity=.26+u*.08,g.clearcoat=p,g.clearcoatRoughness=Ys(.08+(1-u)*.42,.02,1),g.transmission=d*.92,g.thickness=d*1.4,g.ior=1+d*1.25,g.attenuationColor=new xe(s.coatingColor),g.attenuationDistance=2+(1-d)*6,g.specularIntensity=Ys(.18+p*.82,0,1),g.specularColor=new xe(s.coatingColor),g.transmissionMap=c,g.needsUpdate=!0,g},q_={type:"change"},Ym={type:"start"},tb={type:"end"},vf=new Ty,Y_=new Zs,$w=Math.cos(70*My.DEG2RAD),jn=new Y,Ti=2*Math.PI,ln={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ep=1e-6;class tC extends HE{constructor(t,n=null){super(t,n),this.state=ln.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:qo.ROTATE,TWO:qo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Vr,this._lastTargetPosition=new Y,this._quat=new Vr().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new p_,this._sphericalDelta=new p_,this._scale=1,this._panOffset=new Y,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new Y,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nC.bind(this),this._onPointerDown=eC.bind(this),this._onPointerUp=iC.bind(this),this._onContextMenu=uC.bind(this),this._onMouseWheel=rC.bind(this),this._onKeyDown=oC.bind(this),this._onTouchStart=lC.bind(this),this._onTouchMove=cC.bind(this),this._onMouseDown=aC.bind(this),this._onMouseMove=sC.bind(this),this._interceptControlDown=fC.bind(this),this._interceptControlUp=hC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(q_),this.update(),this.state=ln.NONE}update(t=null){const n=this.object.position;jn.copy(n).sub(this.target),jn.applyQuaternion(this._quat),this._spherical.setFromVector3(jn),this.autoRotate&&this.state===ln.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Ti:a>Math.PI&&(a-=Ti),o<-Math.PI?o+=Ti:o>Math.PI&&(o-=Ti),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(jn.setFromSpherical(this._spherical),jn.applyQuaternion(this._quatInverse),n.copy(this.target).add(jn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=jn.length();u=this._clampDistance(f*this._scale);const p=f-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const f=new Y(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(f),this.object.updateMatrixWorld(),u=jn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(vf.origin.copy(this.object.position),vf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vf.direction))<$w?this.object.lookAt(this.target):(Y_.setFromNormalAndCoplanarPoint(this.object.up,this.target),vf.intersectPlane(Y_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ep||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ep||this._lastTargetPosition.distanceToSquared(this.target)>Ep?(this.dispatchEvent(q_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ti/60*this.autoRotateSpeed*t:Ti/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){jn.setFromMatrixColumn(n,0),jn.multiplyScalar(-t),this._panOffset.add(jn)}_panUp(t,n){this.screenSpacePanning===!0?jn.setFromMatrixColumn(n,1):(jn.setFromMatrixColumn(n,0),jn.crossVectors(this.object.up,jn)),jn.multiplyScalar(t),this._panOffset.add(jn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;jn.copy(o).sub(this.target);let c=jn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,f=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,f=(t.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Mt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function eC(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function nC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iC(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tb),this.state=ln.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function aC(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ln.DOLLY;break;case hs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ln.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ln.ROTATE}break;case hs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ln.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ln.PAN}break;default:this.state=ln.NONE}this.state!==ln.NONE&&this.dispatchEvent(Ym)}function sC(s){switch(this.state){case ln.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ln.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rC(s){this.enabled===!1||this.enableZoom===!1||this.state!==ln.NONE||(s.preventDefault(),this.dispatchEvent(Ym),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(tb))}function oC(s){this.enabled!==!1&&this._handleKeyDown(s)}function lC(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ln.TOUCH_ROTATE;break;case qo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ln.TOUCH_PAN;break;default:this.state=ln.NONE}break;case 2:switch(this.touches.TWO){case qo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ln.TOUCH_DOLLY_PAN;break;case qo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ln.TOUCH_DOLLY_ROTATE;break;default:this.state=ln.NONE}break;default:this.state=ln.NONE}this.state!==ln.NONE&&this.dispatchEvent(Ym)}function cC(s){switch(this._trackPointer(s),this.state){case ln.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ln.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ln.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ln.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ln.NONE}}function uC(s){this.enabled!==!1&&s.preventDefault()}function fC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ll{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dC=new qm(-1,1,1,-1,0,1);class pC extends fi{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const mC=new pC;class Zm{constructor(t){this._mesh=new wn(mC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class eb extends ll{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Pn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gr.clone(t.uniforms),this.material=new Pn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Z_ extends ll{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(f),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class gC extends ll{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class K_{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Mt);this._width=a.width,this._height=a.height,n=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eb(yc),this.copyPass.material.blending=ca,this.clock=new OE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Z_!==void 0&&(u instanceof Z_?a=!0:u instanceof gC&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tr extends ll{constructor(t,n,a,o){super(),this.renderScene=n,this.renderCamera=a,this.selectedObjects=o!==void 0?o:[],this.visibleEdgeColor=new xe(1,1,1),this.hiddenEdgeColor=new xe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256);const c=Math.round(this.resolution.x/this.downSampleRatio),u=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Kn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new jy,this.depthMaterial.side=ra,this.depthMaterial.depthPacking=yy,this.depthMaterial.blending=ca,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=ra,this.prepareMaskMaterial.fragmentShader=x(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Kn(this.resolution.x,this.resolution.y,{type:ci}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Kn(c,u,{type:ci}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Kn(c,u,{type:ci}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Kn(Math.round(c/2),Math.round(u/2),{type:ci}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Kn(c,u,{type:ci}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Kn(Math.round(c/2),Math.round(u/2),{type:ci}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const f=4,p=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(f),this.separableBlurMaterial1.uniforms.texSize.value.set(c,u),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(p),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(c/2),Math.round(u/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=p,this.overlayMaterial=this._getOverlayMaterial();const d=yc;this.copyUniforms=Gr.clone(d.uniforms),this.materialCopy=new Pn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ca,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this._fsQuad=new Zm(null),this.tempPulseColor1=new xe,this.tempPulseColor2=new xe,this.textureMatrix=new cn;function x(g,v){const y=v.isPerspectiveCamera?"perspective":"orthographic";return g.replace(/DEPTH_TO_VIEW_Z/g,y+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(t,n){this.renderTargetMaskBuffer.setSize(t,n),this.renderTargetDepthBuffer.setSize(t,n);let a=Math.round(t/this.downSampleRatio),o=Math.round(n/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(a,o),this.renderTargetBlurBuffer1.setSize(a,o),this.renderTargetEdgeBuffer1.setSize(a,o),this.separableBlurMaterial1.uniforms.texSize.value.set(a,o),a=Math.round(a/2),o=Math.round(o/2),this.renderTargetBlurBuffer2.setSize(a,o),this.renderTargetEdgeBuffer2.setSize(a,o),this.separableBlurMaterial2.uniforms.texSize.value.set(a,o)}render(t,n,a,o,c){if(this.selectedObjects.length>0){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,c&&t.state.buffers.stencil.setTest(!1),t.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const f=this.renderScene.background,p=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,t.setRenderTarget(this.renderTargetDepthBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,t.setRenderTarget(this.renderTargetMaskBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=f,this.renderScene.overrideMaterial=p,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,t.setRenderTarget(this.renderTargetMaskDownSampleBuffer),t.clear(),this._fsQuad.render(t),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const d=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(d),this.tempPulseColor2.multiplyScalar(d)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=tr.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,t.setRenderTarget(this.renderTargetBlurBuffer1),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=tr.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=tr.BlurDirectionX,t.setRenderTarget(this.renderTargetBlurBuffer2),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=tr.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer2),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,c&&t.state.buffers.stencil.setTest(!0),t.setRenderTarget(a),this._fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=u}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=a.texture,t.setRenderTarget(null),this._fsQuad.render(t))}_updateSelectionCache(){const t=this._selectionCache;function n(a){a.isMesh&&t.add(a)}t.clear();for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(n)}_changeVisibilityOfSelectedObjects(t){const n=this._visibilityCache;for(const a of this._selectionCache)t===!0?a.visible=n.get(a):(n.set(a,a.visible),a.visible=t)}_changeVisibilityOfNonSelectedObjects(t){const n=this._visibilityCache,a=this._selectionCache;function o(c){if(c.isPoints||c.isLine||c.isLine2)t===!0?c.visible=n.get(c):(n.set(c,c.visible),c.visible=t);else if((c.isMesh||c.isSprite)&&!a.has(c)){const u=c.visible;(t===!1||n.get(c)===!0)&&(c.visible=t),n.set(c,u)}}this.renderScene.traverse(o)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Pn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Mt(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new Pn({uniforms:{maskTexture:{value:null},texSize:{value:new Mt(.5,.5)},visibleEdgeColor:{value:new Y(1,1,1)},hiddenEdgeColor:{value:new Y(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(t){return new Pn({defines:{MAX_RADIUS:t},uniforms:{colorTexture:{value:null},texSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new Pn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Rf,depthTest:!1,depthWrite:!1,transparent:!0})}}tr.BlurDirectionX=new Mt(1,0);tr.BlurDirectionY=new Mt(0,1);class Q_ extends ll{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const xC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class al extends ll{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(c,u,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const g=new Kn(c,u,{type:ci});g.texture.name="UnrealBloomPass.h"+x,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new Kn(c,u,{type:ci});v.texture.name="UnrealBloomPass.v"+x,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const f=xC;this.highPassUniforms=Gr.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new Mt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gr.clone(yc.uniforms),this.blendMaterial=new Pn({uniforms:this.copyUniforms,vertexShader:yc.vertexShader,fragmentShader:yc.fragmentShader,blending:Rf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new jr,this._fsQuad=new Zm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Mt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=al.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=al.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Pn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(t){return new Pn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}al.BlurDirectionX=new Mt(1,0);al.BlurDirectionY=new Mt(0,1);class vC extends Ly{constructor(){super();const t=new rl;t.deleteAttribute("uv");const n=new Lf({side:ui}),a=new Lf,o=new DE(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new wn(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new O1(t,a,6),f=new si;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),u.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),u.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),u.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),u.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),u.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),u.setMatrixAt(5,f.matrix),this.add(u);const p=new wn(t,jo(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const d=new wn(t,jo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const x=new wn(t,jo(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const g=new wn(t,jo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const v=new wn(t,jo(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const y=new wn(t,jo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function jo(s){return new bE({color:0,emissive:16777215,emissiveIntensity:s})}ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Mt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ai.line={uniforms:Gr.merge([ne.common,ne.fog,ne.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Wo extends Pn{constructor(t){super({type:"LineMaterial",uniforms:Gr.clone(Ai.line.uniforms),vertexShader:Ai.line.vertexShader,fragmentShader:Ai.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const J_=new Wi,_f=new Y;class nb extends LE{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new Sn(t,3)),this.setAttribute("uv",new Sn(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,a=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),a.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new Sm(n,6,1);return this.setAttribute("instanceStart",new Qs(a,3,0)),this.setAttribute("instanceEnd",new Qs(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new Sm(n,6,1);return this.setAttribute("instanceColorStart",new Qs(a,3,0)),this.setAttribute("instanceColorEnd",new Qs(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new _E(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),J_.setFromBufferAttribute(n),this.boundingBox.union(J_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)_f.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(_f)),_f.fromBufferAttribute(n,c),o=Math.max(o,a.distanceToSquared(_f));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Tp=new ke,$_=new Y,ty=new Y,ei=new ke,ni=new ke,wa=new ke,Ap=new Y,wp=new cn,ii=new FE,ey=new Y,yf=new Wi,bf=new ir,Ca=new ke;let Da,Fr;function ny(s,t,n){return Ca.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Ca.multiplyScalar(1/Ca.w),Ca.x=Fr/n.width,Ca.y=Fr/n.height,Ca.applyMatrix4(s.projectionMatrixInverse),Ca.multiplyScalar(1/Ca.w),Math.abs(Math.max(Ca.x,Ca.y))}function _C(s,t){const n=s.matrixWorld,a=s.geometry,o=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let f=0,p=u;f<p;f++){ii.start.fromBufferAttribute(o,f),ii.end.fromBufferAttribute(c,f),ii.applyMatrix4(n);const d=new Y,x=new Y;Da.distanceSqToSegment(ii.start,ii.end,x,d),x.distanceTo(d)<Fr*.5&&t.push({point:x,pointOnLine:d,distance:Da.origin.distanceTo(x),object:s,face:null,faceIndex:f,uv:null,uv1:null})}}function yC(s,t,n){const a=t.projectionMatrix,c=s.material.resolution,u=s.matrixWorld,f=s.geometry,p=f.attributes.instanceStart,d=f.attributes.instanceEnd,x=Math.min(f.instanceCount,p.count),g=-t.near;Da.at(1,wa),wa.w=1,wa.applyMatrix4(t.matrixWorldInverse),wa.applyMatrix4(a),wa.multiplyScalar(1/wa.w),wa.x*=c.x/2,wa.y*=c.y/2,wa.z=0,Ap.copy(wa),wp.multiplyMatrices(t.matrixWorldInverse,u);for(let v=0,y=x;v<y;v++){if(ei.fromBufferAttribute(p,v),ni.fromBufferAttribute(d,v),ei.w=1,ni.w=1,ei.applyMatrix4(wp),ni.applyMatrix4(wp),ei.z>g&&ni.z>g)continue;if(ei.z>g){const T=ei.z-ni.z,P=(ei.z-g)/T;ei.lerp(ni,P)}else if(ni.z>g){const T=ni.z-ei.z,P=(ni.z-g)/T;ni.lerp(ei,P)}ei.applyMatrix4(a),ni.applyMatrix4(a),ei.multiplyScalar(1/ei.w),ni.multiplyScalar(1/ni.w),ei.x*=c.x/2,ei.y*=c.y/2,ni.x*=c.x/2,ni.y*=c.y/2,ii.start.copy(ei),ii.start.z=0,ii.end.copy(ni),ii.end.z=0;const E=ii.closestPointToPointParameter(Ap,!0);ii.at(E,ey);const b=My.lerp(ei.z,ni.z,E),_=b>=-1&&b<=1,I=Ap.distanceTo(ey)<Fr*.5;if(_&&I){ii.start.fromBufferAttribute(p,v),ii.end.fromBufferAttribute(d,v),ii.start.applyMatrix4(u),ii.end.applyMatrix4(u);const T=new Y,P=new Y;Da.distanceSqToSegment(ii.start,ii.end,P,T),n.push({point:P,pointOnLine:T,distance:Da.origin.distanceTo(P),object:s,face:null,faceIndex:v,uv:null,uv1:null})}}}class bC extends wn{constructor(t=new nb,n=new Wo({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,o=new Float32Array(2*n.count);for(let u=0,f=0,p=n.count;u<p;u++,f+=2)$_.fromBufferAttribute(n,u),ty.fromBufferAttribute(a,u),o[f]=f===0?0:o[f-1],o[f+1]=o[f]+$_.distanceTo(ty);const c=new Sm(o,2,1);return t.setAttribute("instanceDistanceStart",new Qs(c,1,0)),t.setAttribute("instanceDistanceEnd",new Qs(c,1,1)),this}raycast(t,n){const a=this.material.worldUnits,o=t.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Da=t.ray;const u=this.matrixWorld,f=this.geometry,p=this.material;Fr=p.linewidth+c,f.boundingSphere===null&&f.computeBoundingSphere(),bf.copy(f.boundingSphere).applyMatrix4(u);let d;if(a)d=Fr*.5;else{const g=Math.max(o.near,bf.distanceToPoint(Da.origin));d=ny(o,g,p.resolution)}if(bf.radius+=d,Da.intersectsSphere(bf)===!1)return;f.boundingBox===null&&f.computeBoundingBox(),yf.copy(f.boundingBox).applyMatrix4(u);let x;if(a)x=Fr*.5;else{const g=Math.max(o.near,yf.distanceToPoint(Da.origin));x=ny(o,g,p.resolution)}yf.expandByScalar(x),Da.intersectsBox(yf)!==!1&&(a?_C(this,n):yC(this,o,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(Tp),this.material.uniforms.resolution.value.set(Tp.z,Tp.w))}}const Cp=Math.PI/180,SC=new Y(0,.16,2.6),uc=1,MC={uniforms:{baseTexture:{value:null},bloomAmount:{value:0},bloomTexture:{value:null}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;
    uniform float bloomAmount;
    varying vec2 vUv;

    void main() {
      vec4 base = texture2D(baseTexture, vUv);
      vec3 bloom = texture2D(bloomTexture, vUv).rgb * bloomAmount;
      vec3 color = base.rgb + bloom * clamp(base.a, 0.0, 1.0);
      gl_FragColor = vec4(color, base.a);
    }
  `},EC=s=>new jr({color:s,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:ui,toneMapped:!1,transparent:!1}),TC=()=>new jr({colorWrite:!1,depthWrite:!0,toneMapped:!1}),AC=(s,t)=>{s instanceof jr&&(s.color.set(t),s.needsUpdate=!0)},bc=s=>{!s||typeof s!="object"||"dispose"in s&&typeof s.dispose=="function"&&s.dispose()},iy=s=>{s.traverse(t=>{const n=t;if(n.geometry?.dispose?.(),Array.isArray(n.material)){n.material.forEach(a=>bc(a));return}bc(n.material)})};class wC{animationFrameId=0;ambientLight;bloomComposer;camera;composer;container;controls;bloomRenderPass;bloomPass;bloomCompositePass;outlinePass;renderPass;directionalLight;fillLight;floor;framedCenter=new Y;homeDistance=7;lightSettings={distance:8.5,fill:.5,intensity:2.5,lift:38,turn:32,type:"studio"};materialTint={base:"#f6c968",contour:"#fd6a3a"};bloomSettings={enabled:!1,strength:.8};modelRoot=new fc;lastTickTime=performance.now();pmremGenerator;renderer;resizeObserver;runtimeParts=[];selectedPartKey=null;scene=new Ly;lastVisibilityRecoveryTime=0;outlineSettings={enabled:!1,width:0};renderMode="material";surface=_c({bump:.18,bumpImage:null,coating:.22,coatingColor:"#fff4ca",diffuseColor:"#d6b24a",preset:"gold",reflection:.92,refraction:.04,refractionImage:null,uvOffsetX:0,uvOffsetY:0,uvRotation:0,uvScaleX:1,uvScaleY:1,uvTileLock:!0});rotationSettings={direction:1,enabled:!1,speed:.18};createControls(){const t=new tC(this.camera,this.renderer.domElement);return t.enableDamping=!0,t.dampingFactor=.08,t.enablePan=!0,t.enableZoom=!0,t.zoomSpeed=1.1,t.panSpeed=.9,t.rotateSpeed=.85,t.screenSpacePanning=!0,t.mouseButtons.LEFT=hs.ROTATE,t.mouseButtons.MIDDLE=hs.DOLLY,t.mouseButtons.RIGHT=hs.PAN,t.minDistance=.04,t.maxDistance=1/0,t.target.set(0,0,0),t.autoRotate=!1,t}constructor(t,n){this.container=t,this.camera=new ki(38,1,.1,200),this.camera.position.copy(SC.clone().multiplyScalar(this.homeDistance)),this.renderer=new ww({alpha:!0,antialias:n?.antialias??!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(t.clientWidth,t.clientHeight,!1),this.renderer.setClearAlpha(0),this.renderer.shadowMap.enabled=!1,this.renderer.outputColorSpace=xi,this.container.append(this.renderer.domElement),this.controls=this.createControls(),this.bloomComposer=new K_(this.renderer),this.bloomComposer.renderToScreen=!1,this.bloomRenderPass=new Q_(this.scene,this.camera),this.bloomRenderPass.clearAlpha=0,this.bloomComposer.addPass(this.bloomRenderPass),this.bloomPass=new al(new Mt(1,1),.6,.18,.88),this.bloomPass.enabled=!1,this.bloomComposer.addPass(this.bloomPass),this.composer=new K_(this.renderer),this.renderPass=new Q_(this.scene,this.camera),this.renderPass.clearAlpha=0,this.composer.addPass(this.renderPass),this.outlinePass=new tr(new Mt(Math.max(t.clientWidth,320),Math.max(t.clientHeight,320)),this.scene,this.camera),this.outlinePass.enabled=!1,this.outlinePass.edgeStrength=6,this.outlinePass.edgeGlow=0,this.outlinePass.edgeThickness=1,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#111111"),this.outlinePass.hiddenEdgeColor.set("#111111"),this.composer.addPass(this.outlinePass),this.bloomCompositePass=new eb(MC,"baseTexture"),this.bloomCompositePass.uniforms.bloomTexture.value=this.bloomComposer.renderTarget2.texture,this.bloomCompositePass.uniforms.bloomAmount.value=0,this.composer.addPass(this.bloomCompositePass),this.pmremGenerator=new Mm(this.renderer);const a=new vC;this.scene.environment=this.pmremGenerator.fromScene(a,.04).texture,this.ambientLight=new NE("#ffffff",1.1),this.ambientLight.layers.enable(uc),this.directionalLight=new d_("#fff3dd",2.5),this.directionalLight.castShadow=!1,this.directionalLight.layers.enable(uc),this.fillLight=new d_("#d4e9ff",1.1),this.fillLight.layers.enable(uc),this.floor=new wn(new Nc(80,80)),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!1,this.floor.visible=!1,this.scene.add(this.ambientLight,this.directionalLight,this.fillLight,this.floor,this.modelRoot),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.updateLights(this.lightSettings),this.applyBloom(),this.applyBackground(),this.applyRotation(),this.resize(),this.tick()}dispose(){cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect(),iy(this.modelRoot),this.floor.geometry.dispose(),bc(this.floor.material),this.pmremGenerator.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}setModel(t,n){const a=!!n?.preserveView,o=this.modelRoot.rotation.clone();this.clearModel(),t&&(t.parts.forEach(c=>{const u=Kw(c.geometry.clone());u.computeVertexNormals();const f=Mp(this.surface,c.id==="base"?c.color??this.materialTint.base:this.materialTint.contour),p=new wn(u,f);p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1,p.userData.extruderPart=c.id,p.layers.enable(uc);const x=new F1(u,32).getAttribute("position"),g=new nb;g.setPositions(Array.from(x.array));const v=new Wo({color:this.materialTint.contour,depthTest:!0,depthWrite:!1,transparent:!0,linewidth:1.6,opacity:0,toneMapped:!1});v.resolution.set(Math.max(this.container.clientWidth,320),Math.max(this.container.clientHeight,320));const y=new bC(g,v);y.frustumCulled=!1,y.renderOrder=12,y.userData.extruderEdgeOverlay=!0,y.visible=!1,p.add(y);const M=new wn(u.clone(),EC(this.materialTint.contour));M.visible=!1,M.frustumCulled=!1,M.renderOrder=1,p.add(M),this.modelRoot.add(p),u.computeBoundingBox(),u.computeBoundingSphere(),this.runtimeParts.push({color:c.color,edgeLines:y,kind:c.id,key:c.key,outlineShell:M,selectable:c.selectable,mesh:p})}),a?this.modelRoot.rotation.copy(o):this.modelRoot.rotation.set(0,0,0),this.applySelectionHighlight(),this.syncOutlinePass(),this.applyOutlineSettings(),this.applyRenderMode(),a||this.frameModel())}setSurface(t,n){this.surface=_c(t),this.materialTint={...n},this.runtimeParts.forEach(a=>{bc(a.mesh.material),a.mesh.material=Mp(this.surface,a.kind==="base"?a.color??this.materialTint.base:this.materialTint.contour);const o=a.edgeLines.material;o instanceof Wo&&(o.color.set(this.materialTint.contour),o.needsUpdate=!0),AC(a.outlineShell.material,this.materialTint.contour)}),this.syncOutlinePass(),this.applySelectionHighlight(),this.applyRenderMode()}setLightSettings(t){this.lightSettings=t,this.updateLights(t)}setBloomSettings(t){this.bloomSettings=t,this.applyBloom()}setBackgroundSettings(t){}setRotationSettings(t){this.rotationSettings=t,this.applyRotation()}setOutlineSettings(t){this.outlineSettings=t,this.applyOutlineSettings()}setRenderMode(t){this.renderMode=t,this.applyRenderMode()}setSelectedPart(t){this.selectedPartKey=t,this.applySelectionHighlight()}captureCanvas(){return this.renderer.domElement}captureAlphaMaskCanvas(){const t=this.renderer.domElement.width,n=this.renderer.domElement.height,a=document.createElement("canvas");a.width=t,a.height=n;const o=a.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=new jr({color:"#ffffff"}),u=this.scene.overrideMaterial??null,f=this.runtimeParts.map(d=>d.edgeLines.visible);this.runtimeParts.forEach(d=>{d.edgeLines.visible=!1,d.outlineShell.visible=!1}),this.scene.overrideMaterial=c,this.renderer.render(this.scene,this.camera),o.clearRect(0,0,t,n),o.drawImage(this.renderer.domElement,0,0,t,n);const p=o.getImageData(0,0,t,n);for(let d=0;d<p.data.length;d+=4){const x=p.data[d+3];p.data[d]=255,p.data[d+1]=255,p.data[d+2]=255,p.data[d+3]=x>0?255:0}return o.putImageData(p,0,0),this.scene.overrideMaterial=u,c.dispose(),this.runtimeParts.forEach((d,x)=>{d.edgeLines.visible=f[x]}),this.applyOutlineSettings(),this.applyRenderMode(),this.renderFrame(),a}focusModel(){this.frameModel()}getViewState(){return{cameraPosition:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},target:{x:this.controls.target.x,y:this.controls.target.y,z:this.controls.target.z}}}applyViewState(t){this.camera.position.set(t.cameraPosition.x,t.cameraPosition.y,t.cameraPosition.z),this.controls.target.set(t.target.x,t.target.y,t.target.z),this.controls.update(),this.renderFrame()}clearModel(){iy(this.modelRoot),this.runtimeParts.forEach(t=>this.modelRoot.remove(t.mesh)),this.runtimeParts=[],this.syncOutlinePass(),this.modelRoot.rotation.set(0,0,0)}syncOutlinePass(){this.outlinePass.selectedObjects=this.runtimeParts.map(t=>t.mesh),this.outlinePass.visibleEdgeColor.set(this.materialTint.contour),this.outlinePass.hiddenEdgeColor.set(this.materialTint.contour),this.outlinePass.edgeStrength=1,this.outlinePass.edgeGlow=0,this.outlinePass.edgeThickness=1,this.outlinePass.pulsePeriod=0}rebuildPartMaterials(){this.runtimeParts.forEach(t=>{bc(t.mesh.material),t.mesh.material=this.renderMode==="outline"?TC():Mp(this.surface,t.kind==="base"?t.color??this.materialTint.base:this.materialTint.contour)}),this.applySelectionHighlight()}applySelectionHighlight(){this.runtimeParts.forEach(t=>{const n=t.mesh.material;if(n instanceof Lf){const o=!!this.selectedPartKey&&t.selectable&&t.key===this.selectedPartKey;n.emissiveIntensity=o?.54:.26,n.needsUpdate=!0}const a=t.edgeLines.material;if(a instanceof Wo){const o=!!this.selectedPartKey&&t.selectable&&t.key===this.selectedPartKey,u=(this.outlineSettings.enabled||this.renderMode==="outline")&&this.outlineSettings.width>.001?1:0,f=Math.max(1.8,this.outlineSettings.width*(this.renderMode==="outline"?.16:.1));a.linewidth=o?f+1.25:f,a.opacity=o?Math.max(u,1):u,a.needsUpdate=!0}})}applyOutlineSettings(){const t=Math.max(0,this.outlineSettings.width),n=(this.outlineSettings.enabled||this.renderMode==="outline")&&t>.001;this.syncOutlinePass(),this.outlinePass.enabled=!1,this.outlinePass.edgeStrength=0,this.outlinePass.edgeGlow=0,this.outlinePass.edgeThickness=0,this.outlinePass.pulsePeriod=0,this.runtimeParts.forEach(a=>{a.outlineShell.visible=!1;const o=a.edgeLines.material;o instanceof Wo&&(o.color.set(this.materialTint.contour),o.opacity=n?1:0,o.linewidth=Math.max(2,t*.18),o.needsUpdate=!0),a.edgeLines.visible=n})}applyRenderMode(){this.rebuildPartMaterials(),this.applyOutlineSettings(),this.applySelectionHighlight()}frameModel(){if(this.modelRoot.children.length===0)return;const t=new Wi().setFromObject(this.modelRoot),n=t.getCenter(new Y),a=Math.max(t.getBoundingSphere(new ir).radius,1),o=this.camera.fov*Cp,c=2*Math.atan(Math.tan(o/2)*this.camera.aspect),u=a/Math.tan(o/2),f=a/Math.tan(c/2),p=Math.max(u,f)*1.28;this.homeDistance=p,this.framedCenter.copy(n),this.camera.near=Math.max(p/100,.01),this.camera.far=Math.max(p*40,200),this.camera.updateProjectionMatrix(),this.camera.position.set(n.x,n.y+a*.08,n.z+p),this.controls.dispose(),this.controls=this.createControls(),this.controls.target.copy(n),this.controls.update(),this.floor.position.set(0,t.min.y-.42,0),this.updateLights(this.lightSettings)}modelIsOutOfView(){if(this.modelRoot.children.length===0)return!1;const t=this.framedCenter.clone().sub(this.camera.position),n=new Y;this.camera.getWorldDirection(n);const a=t.normalize().dot(n);if(!Number.isFinite(a)||a<.2)return!0;const o=this.framedCenter.clone().project(this.camera);return!Number.isFinite(o.x)||!Number.isFinite(o.y)||!Number.isFinite(o.z)||this.camera.position.distanceTo(this.framedCenter)>this.homeDistance*10?!0:Math.abs(o.x)>1.8||Math.abs(o.y)>1.8||o.z<-1.2||o.z>1.4}updateLights(t){const n=t.turn*Cp,a=t.lift*Cp,o=this.homeDistance*t.distance*.12,c=Math.cos(n)*Math.cos(a)*o,u=Math.sin(a)*o,f=Math.sin(n)*Math.cos(a)*o;this.directionalLight.position.set(c,Math.max(.8,u),f),this.directionalLight.intensity=t.type==="sun"?t.intensity*2.4:t.intensity*1.85,this.directionalLight.color.set(t.type==="sun"?"#fff2c1":"#fff6eb"),this.fillLight.position.set(-c*.6,Math.max(.6,o*.22),-f*.6),this.fillLight.intensity=t.type==="sun"?t.fill*1.25:.35+t.fill*1.9,this.fillLight.color.set(t.type==="sun"?"#d7ecff":"#dce9ff"),this.ambientLight.intensity=t.type==="sun"?.28+t.fill*.22:.46+t.fill*.42;const p=Math.max(o*2.2,10);this.directionalLight.shadow.camera.left=-p,this.directionalLight.shadow.camera.right=p,this.directionalLight.shadow.camera.top=p,this.directionalLight.shadow.camera.bottom=-p,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=p*3,this.directionalLight.shadow.camera.updateProjectionMatrix()}applyBackground(){this.scene.background=null}applyBloom(){this.bloomPass.enabled=this.bloomSettings.enabled,this.bloomPass.strength=this.bloomSettings.enabled?this.bloomSettings.strength*1.8:0,this.bloomPass.radius=this.bloomSettings.enabled?.28:0,this.bloomPass.threshold=.18,this.bloomCompositePass.uniforms.bloomAmount.value=this.bloomSettings.enabled?1:0}applyRotation(){this.controls.autoRotate=!1}resize(){const t=Math.max(this.container.clientWidth,320),n=Math.max(this.container.clientHeight,320);this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(t,n,!1),this.bloomComposer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.bloomComposer.setSize(t,n),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.composer.setSize(t,n),this.outlinePass.setSize(t,n),this.runtimeParts.forEach(a=>{const o=a.edgeLines.material;o instanceof Wo&&(o.resolution.set(t,n),o.needsUpdate=!0)})}renderFrame(){if(this.bloomSettings.enabled||this.outlinePass.enabled){if(this.bloomSettings.enabled){const t=this.camera.layers.mask;this.camera.layers.set(uc),this.bloomComposer.render(),this.camera.layers.mask=t}this.composer.render();return}this.renderer.render(this.scene,this.camera)}tick=()=>{const t=performance.now(),n=Math.min((t-this.lastTickTime)/1e3,.05);this.lastTickTime=t,this.rotationSettings.enabled&&this.modelRoot.children.length>0&&(this.modelRoot.rotation.y+=n*this.rotationSettings.speed*this.rotationSettings.direction),this.controls.update(),this.modelRoot.children.length>0&&t-this.lastVisibilityRecoveryTime>220&&this.modelIsOutOfView()&&(this.lastVisibilityRecoveryTime=t,this.frameModel()),this.renderFrame(),this.animationFrameId=window.requestAnimationFrame(this.tick)}}const CC={distance:8.5,fill:.5,intensity:2.5,lift:38,turn:32,type:"studio"},RC={enabled:!1,strength:.8},DC={bevel:{enabled:!0,segments:5,size:0,thickness:10},curveSegments:18,creaseAngle:132,depth:44,detail:3,rotationQuarterTurns:0,scaleX:1,scaleY:1,tessellationIterations:0},UC={bevel:{enabled:!1,segments:5,size:8,thickness:8},depth:54,enabled:!1,width:24},Rp={direction:1,enabled:!1,speed:.18},NC=0,LC=30,ay=[{key:"consolas",label:"Consolas",url:eM},{key:"arial",label:"Arial",url:nM},{key:"georgia",label:"Georgia",url:aM},{key:"impact",label:"Impact",url:sM},{key:"comic-sans",label:"Comic Sans",url:iM}],PC=[{key:"viewport",label:"viewport"},{key:"1:1",label:"1:1"},{key:"16:9",label:"16:9"},{key:"9:16",label:"9:16"},{key:"4:3",label:"4:3"}];let OC=0;const Tm=(s,t)=>({color:s,id:`stop-${OC++}`,offset:t}),Ra=(s,t,n)=>Math.min(Math.max(s,t),n),Sf=(s,t)=>{if(s==="transparent")return"rgba(255, 255, 255, 0.18)";const n=t.replace("#",""),a=n.length===3?n.split("").map(p=>`${p}${p}`).join(""):n.padEnd(6,"0").slice(0,6),o=Number.parseInt(a.slice(0,2),16),c=Number.parseInt(a.slice(2,4),16),u=Number.parseInt(a.slice(4,6),16),f=(.2126*o+.7152*c+.0722*u)/255;return f<.2?"rgba(255, 255, 255, 0.34)":f>.8?"rgba(0, 0, 0, 0.22)":f<.42?"rgba(255, 255, 255, 0.28)":"rgba(0, 0, 0, 0.16)"},Am=(s,t,n)=>{const a=(s%360+360)%360,o=Ra(t,0,100)/100,c=Ra(n,0,100)/100,u=(1-Math.abs(2*c-1))*o,f=u*(1-Math.abs(a/60%2-1)),p=c-u/2;let d=0,x=0,g=0;a<60?(d=u,x=f):a<120?(d=f,x=u):a<180?(x=u,g=f):a<240?(x=f,g=u):a<300?(d=f,g=u):(d=u,g=f);const v=y=>Math.round((y+p)*255).toString(16).padStart(2,"0");return`#${v(d)}${v(x)}${v(g)}`},zC=()=>{const s=Math.random()*360,t=18+Math.random()*42,n=78+Math.random()*14,a=64+Math.random()*18,o=56+Math.random()*10,c=42+Math.random()*12;return{end:Am(s+t,a,c),start:Am(s,n,o)}},sy=(s=2)=>{const t=zC(),n=s<=2?[t.start,t.end]:[t.start,...Array.from({length:s-2},(a,o)=>{const c=(o+1)/(s-1),f=Math.random()*24-12;return Am(220*c+f,68+Math.random()*16,46+Math.random()*14)}),t.end];return n.map((a,o)=>Tm(a,n.length===1?50:o/(n.length-1)*100))},BC={capture:{dock:"bottom-right",x:0,y:0},gradient:{dock:"top-right",x:0,y:0},scene:{dock:"top-left",x:0,y:0},turntable:{dock:"bottom-center",x:0,y:0}},IC={capture:"bottom-right",gradient:"top-right",scene:"top-left",turntable:"bottom-center"},FC={"1:1":"1 / 1","16:9":"16 / 9","4:3":"4 / 3","9:16":"9 / 16"},ry=(s,t,n,a)=>{const o=Math.max(s,t),c=a>0?Math.round(a):o;if(n==="viewport"){if(a<=0)return{height:t,width:s};const d=c/o;return{height:Math.max(1,Math.round(t*d)),width:Math.max(1,Math.round(s*d))}}const u={"1:1":[1,1],"16:9":[16,9],"4:3":[4,3],"9:16":[9,16]},[f,p]=u[n];return f>=p?{height:Math.max(1,Math.round(c*p/f)),width:c}:{height:c,width:Math.max(1,Math.round(c*f/p))}},oy=(s,t,n)=>new Promise(a=>{s.toBlob(o=>a(o),t,n)}),ly=async s=>new Uint8Array(await s.arrayBuffer()),HC=s=>new Promise((t,n)=>{const a=new FileReader;a.onload=()=>{if(typeof a.result=="string"){t(a.result);return}n(new Error("Image file could not be read."))},a.onerror=()=>n(a.error??new Error("Image file could not be read.")),a.readAsDataURL(s)}),VC=async()=>Cm(()=>import("./gifenc.esm-sOOlYEo8.js"),[],import.meta.url),cy=async()=>(await Cm(()=>import("./opentype-mzzzXzJM.js"),[],import.meta.url)).parse,Dp=async()=>Cm(()=>import("./modelExport-tIHrFqqk.js"),[],import.meta.url),uy=(s,t)=>{const n=s.trim();return n?n.length>32?`${n.slice(0,32)}...`:n:t},Up=s=>{if(!s)return null;const t=s.trim().toLowerCase();return!t||t==="none"||t==="transparent"||t==="currentcolor"||t.startsWith("url(")?null:t},GC=s=>{if(!s.trim())return[];const n=new DOMParser().parseFromString(s,"image/svg+xml");if(n.querySelector("parsererror"))return[];const o=new Set;return n.querySelectorAll("*").forEach(u=>{const f=Up(u.getAttribute("fill")),p=Up(u.getAttribute("stroke")),d=u.getAttribute("style")??"";f&&o.add(f),p&&o.add(p),d.split(";").map(x=>x.trim()).filter(Boolean).forEach(x=>{const[g,v]=x.split(":"),y=g?.trim().toLowerCase(),M=Up(v?.trim()??null);(y==="fill"||y==="stroke")&&M&&o.add(M)})}),Array.from(o)},kC=(s,t)=>!s||!t||s.kind!==t.kind?!1:s.kind==="text"&&t.kind==="text"?(s.alignment??"left")===(t.alignment??"left")&&s.text===t.text&&s.letterSpacing===t.letterSpacing&&(s.lineSpacing??1.18)===(t.lineSpacing??1.18)&&(s.fontLabel??"")===(t.fontLabel??""):s.kind==="svg"&&t.kind==="svg"?s.svg===t.svg&&!!s.splitByColor==!!t.splitByColor:!1,mn=({decimals:s=2,disabled:t=!1,label:n,max:a,min:o,onChange:c,step:u,value:f})=>q.jsxs("label",{className:"slider-field",children:[q.jsxs("div",{className:"slider-topline",children:[q.jsx("span",{className:"slider-label",children:n}),q.jsx("input",{className:"value-input",disabled:t,max:a,min:o,onChange:p=>c(Number(p.target.value)),step:u,type:"number",value:Number(f.toFixed(s))})]}),q.jsx("input",{className:"slider",disabled:t,max:a,min:o,onChange:p=>c(Number(p.target.value)),step:u,type:"range",value:f})]}),fy=({disabled:s=!1,label:t,maxExponent:n,minExponent:a,onChange:o,value:c})=>{const u=Math.max(c,1e-6),f=Ra(Math.log10(u),a,n);return q.jsxs("label",{className:"slider-field",children:[q.jsxs("div",{className:"slider-topline",children:[q.jsx("span",{className:"slider-label",children:t}),q.jsx("input",{className:"value-input",disabled:s,onChange:p=>o(Math.max(Number(p.target.value),1e-6)),step:.01,type:"number",value:Number(u.toFixed(3))})]}),q.jsx("input",{className:"slider",disabled:s,max:n,min:a,onChange:p=>o(10**Number(p.target.value)),step:.001,type:"range",value:f})]})},Mf=({children:s,collapsed:t=!1,onCollapseToggle:n,onDockReset:a,onDragStart:o,panelRef:c,title:u})=>q.jsxs("section",{className:"floating-shell floating-free",ref:c,children:[q.jsxs("div",{className:"floating-header",onPointerDown:o,children:[q.jsx("span",{className:"floating-title",children:u}),q.jsxs("div",{className:"floating-actions",children:[n?q.jsx("button",{className:"chip floating-dock-chip",onPointerDown:f=>f.stopPropagation(),onClick:n,type:"button",children:t?"+":"-"}):null,q.jsx("button",{className:"chip floating-dock-chip",onPointerDown:f=>f.stopPropagation(),onClick:a,type:"button",children:"[]"})]})]}),t?null:q.jsx("div",{className:"floating-body",children:s})]});function XC(){const s=Ot.useRef(null),t=Ot.useRef(null),n=Ot.useRef(null),a=Ot.useRef(null),o=Ot.useRef(null),c=Ot.useRef(null),u=Ot.useRef(null),f=Ot.useRef(null),p=Ot.useRef(null),d=Ot.useRef(null),x=Ot.useRef(!1),g=Ot.useRef(!1),v=Ot.useRef(null),y=Ot.useRef({}),M=Ot.useRef(null),[E,b]=Ot.useState(null),[_,I]=Ot.useState("loading"),[T,P]=Ot.useState("consolas"),[G,B]=Ot.useState("Consolas"),[H,$]=Ot.useState('"Space Mono", monospace'),[N,D]=Ot.useState("text"),[K,nt]=Ot.useState(""),[ut,mt]=Ot.useState("left"),[xt,k]=Ot.useState(NC),[ls,sl]=Ot.useState(1.18),[Q,j]=Ot.useState({label:"",palette:[],splitByColor:!1,svg:""}),[Tt,At]=Ot.useState({colors:[],open:!1}),[V,pt]=Ot.useState(null),[Lt,Z]=Ot.useState({}),[X,w]=Ot.useState(null),[C,st]=Ot.useState(!1),[gt,at]=Ot.useState(DC),[Pt,Vt]=Ot.useState(!0),[Dt,et]=Ot.useState(UC),[R,ft]=Ot.useState("material"),[ct,W]=Ot.useState(()=>W_("concrete")),[z,wt]=Ot.useState("#111111"),[zt,Qt]=Ot.useState("#111111"),[F,A]=Ot.useState(CC),[ot,Rt]=Ot.useState(RC),[Ut,Et]=Ot.useState("solid"),[ae,Zt]=Ot.useState("#ffffff"),[ie,re]=Ot.useState(()=>sy(2)),[It,Xt]=Ot.useState(135),[oe,le]=Ot.useState({x:18,y:18}),[Kt,_e]=Ot.useState(!1),[tt,Jt]=Ot.useState(null),[qt,Yt]=Ot.useState(BC),[kt,Ft]=Ot.useState({capture:!1,gradient:!1,scene:!1,turntable:!1}),[ee,de]=Ot.useState(Rp),[Xe,Ve]=Ot.useState(30),[xn,hi]=Ot.useState(LC),[ar,sr]=Ot.useState(!0),[Ci,Ri]=Ot.useState(!0),[un,rr]=Ot.useState("beauty"),[za,di]=Ot.useState(!0),[tn,Rn]=Ot.useState("viewport"),[Di,ms]=Ot.useState(0),[Wr,cl]=Ot.useState(1024),[Ba,qi]=Ot.useState("idle"),[or,ye]=Ot.useState("ready"),O=Ot.useRef(!0),rt=Ot.useRef(null),St=()=>{p.current&&(document.fonts.delete(p.current),p.current=null)},vt=()=>{d.current&&(URL.revokeObjectURL(d.current),d.current=null)},ht=async(U,dt,Wt)=>{const Me=await new FontFace(dt,`url("${U}")`).load();document.fonts.add(Me),St(),p.current=Me,Wt?.customSource?(vt(),d.current=U):vt(),$(`"${dt}", "Space Mono", monospace`)},Gt=Ot.useMemo(()=>{if(N==="text"){const U=K;return U.trim()?{alignment:ut,fontLabel:G,kind:"text",label:uy(U,"text"),letterSpacing:xt,lineSpacing:ls,text:U}:null}return Q.svg.trim()?{kind:"svg",label:uy(Q.label,"svg"),splitByColor:Q.splitByColor,svg:Q.svg}:null},[G,N,Q.label,Q.splitByColor,Q.svg,ut,xt,ls,K]),te=Ot.useMemo(()=>({fontFamily:H,letterSpacing:`${xt}em`,lineHeight:ls,textAlign:ut}),[H,ut,xt,ls]),se=Ot.useMemo(()=>!!Gt&&!kC(Gt,V),[V,Gt]);Ot.useEffect(()=>{let U=!1;const dt=async($t,Me)=>{try{I("loading");const En=await(await fetch($t)).arrayBuffer(),Ue=(await cy())(En);if(await ht($t,`Extruder Preview ${Me}`),U)return;b(Ue),B(Me),I("font ready")}catch(Fe){if(U)return;I(Fe instanceof Error?Fe.message:"font failed to load")}};if(T==="custom")return E||$('"Space Mono", monospace'),I(E?"font ready":"upload custom font"),()=>{U=!0};const Wt=ay.find($t=>$t.key===T);return Wt&&dt(Wt.url,Wt.label),()=>{U=!0}},[T]),Ot.useEffect(()=>{T==="custom"&&!E&&$('"Space Mono", monospace')},[E,T]),Ot.useEffect(()=>()=>{St(),vt()},[]),Ot.useEffect(()=>{if(!t.current)return;const U=new wC(t.current,{antialias:Ci});return n.current=U,U.setSurface(ct,{base:z,contour:zt}),U.setLightSettings(F),U.setBloomSettings(ot),U.setBackgroundSettings(pe),U.setRotationSettings(ee),U.setRenderMode(R),U.setOutlineSettings(Te),U.setModel(jt.model,{preserveView:!!a.current}),U.setSelectedPart(X),a.current&&U.applyViewState(a.current),()=>{a.current=U.getViewState(),U.dispose(),n.current=null}},[Ci]);const jt=Ot.useMemo(()=>{if(!V)return{error:null,model:null};try{return{error:null,model:Ww(V,E,gt,Dt,Lt,C)}}catch(U){return{error:U instanceof Error?U.message:"model could not be generated",model:null}}},[V,Dt,C,gt,E,Lt]);Ot.useEffect(()=>{const U=!O.current;if(n.current?.setModel(jt.model,{preserveView:U}),O.current=!1,jt.error){Ot.startTransition(()=>ye(jt.error));return}if(jt.model){Ot.startTransition(()=>ye(`${jt.model.label} 3d ready`));return}if(se){Ot.startTransition(()=>ye("2d preview ready, press extrude"));return}Ot.startTransition(()=>ye("type text or paste svg"))},[jt.error,jt.model,se]),Ot.useEffect(()=>{const U=`${T}::${G}::${xt}::${ls}`;if(rt.current===null){rt.current=U;return}rt.current!==U&&(rt.current=U,!(N!=="text"||V?.kind!=="text")&&(O.current=!0,pt(null),w(null),de(dt=>({...dt,enabled:!1})),Ot.startTransition(()=>ye(Gt?"2d preview ready":"type text or paste svg"))))},[V,G,T,Gt,N,xt,ls]);const he=Ot.useMemo(()=>(jt.model?.parts??[]).filter(U=>U.selectable&&U.id==="base"),[jt.model?.parts]),ge=Ot.useMemo(()=>he.find(U=>U.key===X)??null,[he,X]);Ot.useEffect(()=>{n.current?.setSurface(ct,{base:z,contour:zt})},[z,zt,ct]),Ot.useEffect(()=>{n.current?.setLightSettings(F)},[F]),Ot.useEffect(()=>{n.current?.setBloomSettings(ot)},[ot]),Ot.useEffect(()=>{if(!tt&&ie[0]){Jt(ie[0].id);return}tt&&!ie.some(U=>U.id===tt)&&Jt(ie[0]?.id??null)},[ie,tt]);const pe=Ot.useMemo(()=>({angle:It,gridEnabled:Kt,gradientStops:ie,origin:oe,mode:Ut,solid:ae}),[Kt,Ut,It,oe,ie,ae]);Ot.useEffect(()=>{n.current?.setBackgroundSettings(pe)},[pe]),Ot.useEffect(()=>{n.current?.setRotationSettings(ee)},[ee]),Ot.useEffect(()=>{n.current?.setRenderMode(R)},[R]);const Te=Ot.useMemo(()=>({enabled:Dt.enabled,width:Dt.width}),[Dt.enabled,Dt.width]);Ot.useEffect(()=>{n.current?.setOutlineSettings(Te)},[Te]),Ot.useEffect(()=>{if(he.length===0){X!==null&&w(null);return}he.some(dt=>dt.key===X)||w(he[0].key)},[he,X]),Ot.useEffect(()=>{n.current?.setSelectedPart(X)},[X]);const Ie=async U=>{const dt=URL.createObjectURL(U);try{I("loading");const Wt=await U.arrayBuffer(),Me=(await cy())(Wt);await ht(dt,`Extruder Custom ${U.name.replace(/\.(ttf|otf)$/i,"")}`,{customSource:!0}),b(Me),P("custom"),B(U.name.replace(/\.(ttf|otf)$/i,"")),I("font ready"),ye(`custom font loaded: ${U.name}`)}catch(Wt){URL.revokeObjectURL(dt),I(Wt instanceof Error?Wt.message:"font failed to load")}},Oe=Ot.useMemo(()=>[...ie].sort((U,dt)=>U.offset-dt.offset).map(U=>`${U.color} ${Math.round(U.offset)}%`).join(", "),[ie]),Ne=Ot.useMemo(()=>{const dt=`radial-gradient(${Ut==="solid"?Sf(Ut,ae):Sf(Ut,"#ffffff")} 0.9px, transparent 1px)`;if(Ut==="gradient"){const Wt=ie[0]?.color??"#ff9d2f",$t=[`radial-gradient(circle at ${oe.x}% ${oe.y}%, ${Wt}, transparent 44%)`,`linear-gradient(${It}deg, ${Oe})`];return{backgroundColor:"#ffffff",backgroundImage:Kt?[dt,...$t].join(", "):$t.join(", "),backgroundPosition:Kt?"0 0, 0 0, 0 0":"0 0, 0 0",backgroundSize:Kt?"7px 7px, auto, auto":"auto, auto"}}return Ut==="transparent"?{backgroundColor:"#10141b",backgroundImage:[...Kt?[dt]:[],"linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%)","linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%)","linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%)","linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)"].join(", "),backgroundPosition:Kt?"0 0, 0 0, 0 12px, 12px -12px, -12px 0":"0 0, 0 12px, 12px -12px, -12px 0",backgroundSize:Kt?"7px 7px, 24px 24px, 24px 24px, 24px 24px, 24px 24px":"24px 24px"}:{backgroundColor:ae,backgroundImage:Kt?dt:"none",backgroundPosition:"0 0",backgroundSize:Kt?"7px 7px":"auto"}},[Kt,Ut,It,oe.x,oe.y,ie,Oe,ae]),je=Ot.useMemo(()=>{if(tn!=="viewport")return{aspectRatio:FC[tn]}},[tn]),ce=(U,dt)=>{W(Wt=>{const $t=_c(Wt);return $t[U]=dt,$t})},Ke=(U,dt)=>{W(Wt=>{const $t=_c(Wt);return $t[U]=dt,$t.uvTileLock&&($t[U==="uvScaleX"?"uvScaleY":"uvScaleX"]=dt),$t})},De=(U,dt)=>{ee.enabled&&de(Wt=>({...Wt,enabled:!1})),at(Wt=>{const $t={...Wt,[U]:dt};return Pt&&($t[U==="scaleX"?"scaleY":"scaleX"]=dt),$t})},fn=U=>{ee.enabled&&de(dt=>({...dt,enabled:!1})),at(U)},ua=U=>{ee.enabled&&de(dt=>({...dt,enabled:!1})),et(U)},en=U=>{const dt=W_(U);W(dt),wt(dt.diffuseColor)},Yi=async(U,dt)=>{const Wt=await HC(dt);W($t=>({..._c($t),[U]:Wt}))},nn=()=>{re(U=>{const dt=U.find($t=>$t.id===tt)??U[Math.floor(U.length/2)]??Tm("#ffffff",50);return[...U,Tm(dt.color,Ra(dt.offset+10,0,100))].sort(($t,Me)=>$t.offset-Me.offset)})},On=()=>{re(sy(Math.max(2,ie.length)))},Dn=(U,dt)=>{re(Wt=>[...Wt].map($t=>$t.id===U?{...$t,offset:Ra(dt,0,100)}:$t).sort(($t,Me)=>$t.offset-Me.offset))},zn=U=>{tt&&re(dt=>dt.map(Wt=>Wt.id===tt?{...Wt,color:U}:Wt))},kn=()=>{tt&&re(U=>U.length<=2?U:U.filter(dt=>dt.id!==tt))},Ui=Ot.useMemo(()=>ie.find(U=>U.id===tt)??null,[ie,tt]),vi=U=>dt=>{y.current[U]=dt},lr=Ot.useEffectEvent((U,dt)=>{const Wt=s.current,$t=y.current[U];if(!Wt||!$t)return;const Me=Wt.getBoundingClientRect(),Fe=$t.getBoundingClientRect();M.current={kind:"panel",key:U,offsetX:dt.clientX-Fe.left,offsetY:dt.clientY-Fe.top},Yt(En=>({...En,[U]:{dock:"free",x:Fe.left-Me.left,y:Fe.top-Me.top}})),dt.preventDefault()}),Pc=Ot.useEffectEvent((U,dt)=>{M.current={kind:"gradient-stop",stopId:U},Jt(U),dt.preventDefault(),dt.stopPropagation()}),ul=Ot.useEffectEvent(U=>{M.current={kind:"gradient-origin"},U.preventDefault(),U.stopPropagation()}),Bf=(U,dt)=>{Yt(Wt=>({...Wt,[U]:{...Wt[U],dock:dt}}))},cr=U=>{Bf(U,IC[U])},gs=U=>{Ft(dt=>({...dt,[U]:!dt[U]}))},_i=U=>U.dock==="free"?{left:`${U.x}px`,top:`${U.y}px`}:U.dock==="top-left"?{left:"16px",top:"16px"}:U.dock==="top-right"?{right:"16px",top:"16px"}:U.dock==="bottom-right"?{bottom:"16px",right:"16px"}:{bottom:"16px",left:"50%",transform:"translateX(-50%)"};Ot.useEffect(()=>{const U=Wt=>{const $t=M.current;if(!$t)return;if($t.kind==="panel"){const Ue=s.current,gn=y.current[$t.key];if(!Ue||!gn)return;const dn=Ue.getBoundingClientRect(),Bn=gn.getBoundingClientRect(),Un=Ra(Wt.clientX-dn.left-$t.offsetX,0,Math.max(0,dn.width-Bn.width)),vs=Ra(Wt.clientY-dn.top-$t.offsetY,0,Math.max(0,dn.height-Bn.height));Yt(_s=>({..._s,[$t.key]:{dock:"free",x:Un,y:vs}}));return}if($t.kind==="gradient-stop"){const Ue=v.current;if(!Ue)return;const gn=Ue.getBoundingClientRect(),dn=(Wt.clientX-gn.left)/gn.width*100;Dn($t.stopId,dn);return}const Me=s.current;if(!Me)return;const Fe=Me.getBoundingClientRect(),En=(Wt.clientX-Fe.left)/Fe.width*100,Ge=(Wt.clientY-Fe.top)/Fe.height*100;le({x:Ra(En,0,100),y:Ra(Ge,0,100)})},dt=()=>{M.current=null};return window.addEventListener("pointermove",U),window.addEventListener("pointerup",dt),()=>{window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",dt)}},[]);const fl=(U,dt,Wt)=>{if(U.clearRect(0,0,dt,Wt),Ut!=="transparent"){if(Ut==="solid")U.fillStyle=ae,U.fillRect(0,0,dt,Wt);else{const $t=It*Math.PI/180,Me=dt/2,Fe=Wt/2,En=Math.sqrt(dt*dt+Wt*Wt)/2,Ge=Math.cos($t),Ue=Math.sin($t),gn=U.createLinearGradient(Me-Ge*En,Fe-Ue*En,Me+Ge*En,Fe+Ue*En);[...ie].sort((Bn,Un)=>Bn.offset-Un.offset).forEach(Bn=>{gn.addColorStop(Ra(Bn.offset/100,0,1),Bn.color)}),U.fillStyle=gn,U.fillRect(0,0,dt,Wt);const dn=U.createRadialGradient(oe.x/100*dt,oe.y/100*Wt,0,oe.x/100*dt,oe.y/100*Wt,Math.max(dt,Wt)*.55);dn.addColorStop(0,ie[0]?.color??"#ffffff"),dn.addColorStop(1,"rgba(255,255,255,0)"),U.globalAlpha=.35,U.fillStyle=dn,U.fillRect(0,0,dt,Wt),U.globalAlpha=1}if(Kt){U.fillStyle=Ut==="solid"?Sf(Ut,ae):Sf(Ut,"#ffffff");for(let $t=0;$t<dt;$t+=7)for(let Me=0;Me<Wt;Me+=7)U.beginPath(),U.arc($t,Me,.9,0,Math.PI*2),U.fill()}}},qr=(U,dt,Wt,$t,Me,Fe)=>{U.clearRect(0,0,Me,Fe),U.imageSmoothingEnabled=$t,U.imageSmoothingQuality=$t?"high":"low",Wt&&fl(U,Me,Fe);const En=Math.min(Me/dt.width,Fe/dt.height),Ge=dt.width*En,Ue=dt.height*En,gn=(Me-Ge)/2,dn=(Fe-Ue)/2;U.drawImage(dt,gn,dn,Ge,Ue)},Ia=(U,dt,Wt,$t,Me,Fe)=>{U.clearRect(0,0,Me,Fe),U.imageSmoothingEnabled=$t,U.imageSmoothingQuality=$t?"high":"low",Wt&&(U.fillStyle="#000000",U.fillRect(0,0,Me,Fe));const En=Math.min(Me/dt.width,Fe/dt.height),Ge=dt.width*En,Ue=dt.height*En,gn=(Me-Ge)/2,dn=(Fe-Ue)/2;U.drawImage(dt,gn,dn,Ge,Ue)},fa=Ot.useEffectEvent((U,dt)=>{const Wt=URL.createObjectURL(U),$t=document.createElement("a");$t.href=Wt,$t.download=dt,document.body.append($t),$t.click(),$t.remove(),window.setTimeout(()=>URL.revokeObjectURL(Wt),0)}),Oc=Ot.useEffectEvent(()=>{Ba==="recording"&&(g.current=!0,x.current=!0,Ot.startTransition(()=>ye("capture durduruluyor")))}),hl=Ot.useEffectEvent(async()=>{if(!jt.model){ye("once extrude et");return}Ot.startTransition(()=>ye("preparing obj bake export"));try{const{exportBakedObjZip:U}=await Dp(),dt=await U({baseColor:z,contourColor:zt,light:F,model:jt.model,surface:ct,textureSize:Wr});fa(new Blob([dt.zipBytes],{type:"application/zip"}),dt.fileName),Ot.startTransition(()=>ye("obj bake export ready"))}catch(U){ye(U instanceof Error?U.message:"obj export basarisiz")}}),zc=Ot.useEffectEvent(async()=>{if(!jt.model){ye("once extrude et");return}if(Ba==="recording")return;const U=n.current?.captureCanvas();if(!U){ye("capture baslatilamadi");return}const dt=ry(U.width,U.height,tn,Di),Wt=document.createElement("canvas");Wt.width=dt.width,Wt.height=dt.height;const $t=Wt.getContext("2d",{willReadFrequently:!0});if(!$t){ye("capture baslatilamadi");return}const Me=async(Ge,Ue)=>{if(Ge.length===0)return;if(Ge.length===1||!za){Ge.forEach(Un=>fa(Un.blob,Un.fileName)),Ot.startTransition(()=>ye(Ue));return}const{createStoredZip:gn}=await Dp(),dn=gn(await Promise.all(Ge.map(async Un=>({bytes:await ly(Un.blob),fileName:`${Un.folder}/${Un.fileName}`})))),Bn=new Date().toISOString().replace(/[:.]/g,"-");fa(new Blob([dn],{type:"application/zip"}),`2d-to-3d-capture-pack-${Bn}.zip`),Ot.startTransition(()=>ye(`${Ue} zip ready`))},Fe=Ge=>{if(Ge==="beauty")return qr($t,U,yn,Ci,Wt.width,Wt.height),!0;const Ue=n.current?.captureAlphaMaskCanvas();return Ue?(Ia($t,Ue,yn||xn>1,Ci,Wt.width,Wt.height),!0):!1},En=async Ge=>{await new Promise(Ue=>{window.setTimeout(()=>{window.requestAnimationFrame(()=>Ue())},Ge)})};try{if(xn<=1){const ha=new Date().toISOString().replace(/[:.]/g,"-"),Ha=[],Ni=un==="both"?["beauty","alpha"]:[un];for(const Li of Ni){if(!Fe(Li)){ye("still export could not start");return}const If=Li==="alpha",ml=yn,Ic=await oy(Wt,ml?"image/jpeg":"image/png",ml?.94:void 0);if(!Ic){ye("still export could not start");return}Ha.push({blob:Ic,fileName:`2d-to-3d-${Li}-${ha}.${ml?"jpg":"png"}`,folder:Li==="alpha"?"alpha-mask":"beauty"})}await Me(Ha,un==="both"?"beauty + alpha still ready":un==="alpha"?"alpha mask ready":yn?"jpg capture ready":"png capture ready");return}const{GIFEncoder:Ge,applyPalette:Ue,quantize:gn}=await VC(),dn=Math.max(20,Math.round(1e3/Math.max(1,Xe))),Bn=un!=="alpha"?Ge():null,Un=un!=="beauty"?Ge():null;x.current=!1,g.current=!1,qi("recording"),Ot.startTransition(()=>ye("gif capture kayitta"));let vs=0;for(let ha=0;ha<xn&&!x.current;ha+=1){if(Bn){Fe("beauty");const Ha=$t.getImageData(0,0,Wt.width,Wt.height),Ni=gn(Ha.data,256),Li=Ue(Ha.data,Ni);Bn.writeFrame(Li,Wt.width,Wt.height,{delay:dn,palette:Ni,repeat:0})}if(Un){if(!Fe("alpha")){ye("alpha mask capture could not start");return}const Ni=$t.getImageData(0,0,Wt.width,Wt.height),Li=gn(Ni.data,256),Va=Ue(Ni.data,Li);Un.writeFrame(Va,Wt.width,Wt.height,{delay:dn,palette:Li,repeat:0})}vs+=1,ha<xn-1&&await En(dn)}if(vs===0){Ot.startTransition(()=>ye("capture iptal edildi"));return}if(g.current&&!window.confirm("Save the captured part so far?")){Ot.startTransition(()=>ye("capture iptal edildi"));return}const _s=new Date().toISOString().replace(/[:.]/g,"-"),Ki=[];Bn&&(Bn.finish(),Ki.push({blob:new Blob([Uint8Array.from(Bn.bytesView())],{type:"image/gif"}),fileName:`2d-to-3d-beauty-${_s}.gif`,folder:"beauty"})),Un&&(Un.finish(),Ki.push({blob:new Blob([Uint8Array.from(Un.bytesView())],{type:"image/gif"}),fileName:`2d-to-3d-alpha-mask-${_s}.gif`,folder:"alpha-mask"})),await Me(Ki,un==="both"?"beauty + alpha gif ready":un==="alpha"?"alpha gif ready":"gif capture ready")}finally{x.current=!1,g.current=!1,qi("idle")}}),ur=Ot.useEffectEvent(async()=>{if(!jt.model){ye("once extrude et");return}if(Ba==="recording")return;const U=n.current?.captureCanvas();if(!U){ye("frame zip baslatilamadi");return}const dt=ry(U.width,U.height,tn,Di),Wt=document.createElement("canvas");Wt.width=dt.width,Wt.height=dt.height;const $t=Wt.getContext("2d",{willReadFrequently:!0});if(!$t){ye("frame zip baslatilamadi");return}const Me=async Ge=>{await new Promise(Ue=>{window.setTimeout(()=>{window.requestAnimationFrame(()=>Ue())},Ge)})},Fe=Ge=>{if(Ge==="beauty")return qr($t,U,yn,Ci,Wt.width,Wt.height),!0;const Ue=n.current?.captureAlphaMaskCanvas();return Ue?(Ia($t,Ue,yn||xn>1,Ci,Wt.width,Wt.height),!0):!1},En=(Ge,Ue,gn)=>{const dn=`${Ge}-${String(Ue).padStart(4,"0")}.${gn}`;return un==="both"&&za?`${Ge==="alpha"?"alpha-mask":"beauty"}/${dn}`:dn};try{const Ge=Math.max(20,Math.round(1e3/Math.max(1,Xe))),Ue=un==="both"?["beauty","alpha"]:[un],gn=[],dn=new Date().toISOString().replace(/[:.]/g,"-");x.current=!1,g.current=!1,qi("recording"),Ot.startTransition(()=>ye("frame zip kayitta"));let Bn=0;const Un=Math.max(1,xn);for(let Ki=0;Ki<Un&&!x.current;Ki+=1){for(const ha of Ue){if(!Fe(ha)){ye("frame zip baslatilamadi");return}const Ni=yn,Li=Ni?"jpg":"png",Va=await oy(Wt,Ni?"image/jpeg":"image/png",Ni?.94:void 0);if(!Va){ye("frame zip baslatilamadi");return}gn.push({bytes:await ly(Va),fileName:En(ha,Ki+1,Li)})}Bn+=1,Ki<Un-1&&await Me(Ge)}if(Bn===0){Ot.startTransition(()=>ye("frame zip iptal edildi"));return}if(g.current&&!window.confirm("Save the captured frames so far as a zip?")){Ot.startTransition(()=>ye("frame zip iptal edildi"));return}const{createStoredZip:vs}=await Dp(),_s=vs(gn);fa(new Blob([_s],{type:"application/zip"}),`2d-to-3d-frames-${dn}.zip`),Ot.startTransition(()=>ye(un==="both"?"beauty + alpha frame zip ready":un==="alpha"?"alpha frame zip ready":"frame zip ready"))}finally{x.current=!1,g.current=!1,qi("idle")}}),Zi=Ot.useEffectEvent((U,dt,Wt)=>{const $t=GC(U),Me=!!Wt?.promptForColors&&$t.length>1;if(j(()=>({label:dt,palette:$t,splitByColor:!1,svg:U})),Z({}),w(null),Me){At({colors:$t,open:!0}),ye("svg colors detected");return}At({colors:[],open:!1})}),dl=async U=>{const dt=await U.text();Zi(dt,U.name,{promptForColors:!0}),D("svg")},xs=Ot.useEffectEvent(U=>{j(dt=>({...dt,splitByColor:U})),U||(Z({}),w(null)),At({colors:[],open:!1}),ye(U?"color split mode active":"single silhouette mode active")}),Sa=Ot.useEffectEvent(()=>{if(!Gt){ye("enter text or svg first");return}if(Gt.kind==="text"&&!E){ye("font is loading");return}O.current=!0,pt(Gt.kind==="text"?{...Gt}:{...Gt}),(Gt.kind!=="svg"||!Gt.splitByColor)&&w(null),de(U=>({...U,enabled:!1,speed:U.speed>0?U.speed:Rp.speed})),Ot.startTransition(()=>ye(`${Gt.label} is being extruded`))}),pl=Ot.useEffectEvent(()=>{O.current=!0,pt(null),w(null),de(U=>({...U,enabled:!1})),ye(Gt?"2d preview ready":"type text or paste svg")}),Yr=()=>{de(U=>({...U,direction:U.direction===-1?-1:1,enabled:!0,speed:U.speed>0?U.speed:Rp.speed}))},Bc=()=>{de(U=>({...U,enabled:!1}))},Zr=()=>{ee.enabled&&de(U=>({...U,enabled:!1})),fn(U=>({...U,rotationQuarterTurns:(U.rotationQuarterTurns+1)%4}))},fr=U=>{de(dt=>({...dt,direction:U}))},hn=Ba==="recording",yn=ar&&Ut!=="transparent",Fa=U=>{X&&(ee.enabled&&de(dt=>({...dt,enabled:!1})),Z(dt=>({...dt,[X]:U})))},Kr=U=>U?Lt[U.key]??gt.depth:gt.depth,hr=Ot.useMemo(()=>!Gt||Gt.kind!=="svg"?null:{__html:Gt.svg},[Gt]);return q.jsxs(q.Fragment,{children:[q.jsxs("main",{className:"app-shell",children:[q.jsxs("aside",{className:"sidebar",children:[q.jsxs("section",{className:"panel",children:[q.jsxs("div",{className:"brand-row",children:[q.jsx("div",{className:"brand",children:"2D to 3D"}),q.jsx("div",{className:"status-text",children:or})]}),q.jsxs("div",{className:"stat-grid stat-grid-top",children:[q.jsxs("div",{className:"stat-card",children:[q.jsx("div",{className:"stat-key",children:"source"}),q.jsx("div",{className:"stat-value",children:N})]}),q.jsxs("div",{className:"stat-card",children:[q.jsx("div",{className:"stat-key",children:"parts"}),q.jsx("div",{className:"stat-value",children:jt.model?.stats.partCount??0})]}),q.jsxs("div",{className:"stat-card",children:[q.jsx("div",{className:"stat-key",children:"triangles"}),q.jsx("div",{className:"stat-value",children:jt.model?.stats.triangleCount??0})]}),q.jsxs("div",{className:"stat-card stat-card-controls stat-card-wide",children:[q.jsx("div",{className:"stat-key",children:"font"}),q.jsxs("select",{className:"select-input",onChange:U=>{const dt=U.target.value;P(dt),dt==="custom"&&(b(null),B("Custom"),I("upload custom font"))},value:T,children:[ay.map(U=>q.jsx("option",{value:U.key,children:U.label},U.key)),q.jsx("option",{value:"custom",children:"Custom"})]}),q.jsxs("div",{className:"upload-row",children:[q.jsx("div",{className:"helper",children:T==="custom"?`${G} - ${_}`:`${G} - ${_}`}),q.jsx("button",{className:"chip",onClick:()=>c.current?.click(),type:"button",children:"upload"})]}),q.jsx("input",{accept:".ttf,.otf",className:"hidden-input",onChange:U=>{const dt=U.target.files?.[0];dt&&Ie(dt),U.currentTarget.value=""},ref:c,type:"file"}),q.jsx(mn,{label:"letter spacing",max:.4,min:-.1,onChange:k,step:.01,value:xt}),q.jsx(mn,{label:"line spacing",max:2.5,min:.5,onChange:sl,step:.01,value:ls})]})]})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"Source"}),q.jsxs("div",{className:"source-tabs",children:[q.jsx("button",{className:`tab-button ${N==="text"?"tab-active":""}`,onClick:()=>D("text"),type:"button",children:"text"}),q.jsx("button",{className:`tab-button ${N==="svg"?"tab-active":""}`,onClick:()=>D("svg"),type:"button",children:"vector svg"})]}),N==="text"?q.jsx("div",{className:"text-editor-shell",children:q.jsxs(q.Fragment,{children:[q.jsxs("div",{className:"text-align-toolbar",children:[q.jsx("button",{className:`text-align-button ${ut==="left"?"tab-active":""}`,onClick:()=>mt("left"),title:"align left",type:"button",children:q.jsx("span",{className:"align-icon align-left"})}),q.jsx("button",{className:`text-align-button ${ut==="center"?"tab-active":""}`,onClick:()=>mt("center"),title:"align center",type:"button",children:q.jsx("span",{className:"align-icon align-center"})}),q.jsx("button",{className:`text-align-button ${ut==="right"?"tab-active":""}`,onClick:()=>mt("right"),title:"align right",type:"button",children:q.jsx("span",{className:"align-icon align-right"})})]}),q.jsx("textarea",{className:"text-input text-input-editor",onChange:U=>nt(U.target.value.replace(/\r\n?/g,"\n").replace(/[\u2028\u2029]/g,"\n").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,"")),placeholder:"type text here",style:te,value:K})]})}):q.jsxs(q.Fragment,{children:[q.jsxs("div",{className:"upload-row",children:[q.jsx("div",{className:"helper",children:Q.label||"no svg selected"}),q.jsx("button",{className:"action-button",onClick:()=>o.current?.click(),type:"button",children:"upload"})]}),q.jsx("input",{accept:".svg",className:"hidden-input",onChange:U=>{const dt=U.target.files?.[0];dt&&dl(dt),U.currentTarget.value=""},ref:o,type:"file"}),q.jsx("textarea",{className:"text-input",onChange:U=>j(dt=>({...dt,label:dt.label==="no svg"||dt.label.endsWith(".svg")?"inline svg":dt.label,svg:U.target.value})),onBlur:U=>Zi(U.target.value,Q.label==="no svg"?"inline svg":Q.label,{promptForColors:!0}),placeholder:"paste <svg ...> code here",value:Q.svg}),Q.palette.length>1?q.jsxs("div",{className:"helper",children:[Q.palette.length," colors found. Mode: ",Q.splitByColor?"split parts":"single silhouette"]}):null]}),q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"action-button action-button-strong",disabled:!Gt||N==="text"&&!E,onClick:()=>Sa(),type:"button",children:V?"re-extrude":"extrude to 3d"}),q.jsx("button",{className:"action-button",disabled:!V,onClick:()=>pl(),type:"button",children:"2d preview"})]}),se?q.jsx("div",{className:"helper",children:"press re-extrude to update the model"}):null]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"Extrude"}),q.jsx("div",{className:"button-row",children:q.jsx("button",{className:"chip",disabled:!jt.model,onClick:Zr,type:"button",children:"rot 90"})}),q.jsx("div",{className:"helper",children:"rotate shape clockwise"}),ge?q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"panel-title",children:"Active SVG Piece"}),q.jsx("div",{className:"button-row",children:he.map(U=>q.jsx("button",{className:`chip ${X===U.key?"chip-active":""}`,onClick:()=>w(U.key),type:"button",children:U.color??U.label},U.key))}),q.jsx(mn,{label:"active piece depth",max:2e3,min:-2e3,onChange:Fa,step:1,value:Kr(ge)})]}):null,N==="svg"&&Q.splitByColor?q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"depth displace"}),q.jsx("input",{checked:C,onChange:U=>st(U.target.checked),type:"checkbox"})]}):null,q.jsxs("div",{className:"field-grid",children:[q.jsx(mn,{label:"depth",max:2e3,min:-2e3,onChange:U=>fn(dt=>({...dt,depth:U})),step:1,value:gt.depth}),q.jsx(mn,{label:"detail",max:8,min:1,onChange:U=>fn(dt=>({...dt,detail:U})),step:1,value:gt.detail}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"scale lock"}),q.jsx("input",{checked:Pt,onChange:U=>Vt(U.target.checked),type:"checkbox"})]}),q.jsx(mn,{label:"scale x",max:10,min:.05,onChange:U=>De("scaleX",U),step:.01,value:gt.scaleX}),q.jsx(mn,{label:"scale y",max:10,min:.05,onChange:U=>De("scaleY",U),step:.01,value:gt.scaleY}),q.jsx(mn,{label:"curve",max:36,min:6,onChange:U=>fn(dt=>({...dt,curveSegments:U})),step:1,value:gt.curveSegments}),q.jsx(mn,{label:"poly iterations",max:5,min:0,onChange:U=>fn(dt=>({...dt,tessellationIterations:U})),step:1,value:gt.tessellationIterations})]})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"Base Bevel"}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"base bevel / emboss"}),q.jsx("input",{checked:gt.bevel.enabled,onChange:U=>fn(dt=>({...dt,bevel:{...dt.bevel,enabled:U.target.checked}})),type:"checkbox"})]}),q.jsx(mn,{label:"bevel size",max:30,min:0,onChange:U=>fn(dt=>({...dt,bevel:{...dt.bevel,size:U}})),step:1,value:gt.bevel.size}),q.jsx(mn,{label:"bevel depth",max:30,min:0,onChange:U=>fn(dt=>({...dt,bevel:{...dt.bevel,thickness:U}})),step:1,value:gt.bevel.thickness})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"Toon Outline"}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"outline enabled"}),q.jsx("input",{checked:Dt.enabled,onChange:U=>ua(dt=>({...dt,enabled:U.target.checked})),type:"checkbox"})]}),q.jsx(mn,{label:"outline thickness",max:64,min:0,onChange:U=>ua(dt=>({...dt,width:U})),step:1,value:Dt.width}),q.jsx("div",{className:"helper",children:"Uses a cel-style 2d silhouette outline instead of a 3d contour extrusion."})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"Material"}),q.jsxs("div",{className:"background-grid",children:[q.jsx("button",{className:`chip ${R==="material"?"chip-active":""}`,onClick:()=>ft("material"),type:"button",children:"material render"}),q.jsx("button",{className:`chip ${R==="outline"?"chip-active":""}`,onClick:()=>ft("outline"),type:"button",children:"outline render"})]}),q.jsx("div",{className:"preset-grid",children:Qw.map(U=>q.jsx("button",{className:`chip ${ct.preset===U?"chip-active":""}`,onClick:()=>en(U),type:"button",children:Jw(U)},U))}),q.jsxs("div",{className:"color-grid",children:[q.jsxs("label",{className:"color-row",children:[q.jsx("span",{className:"field-label",children:"base tint"}),q.jsx("input",{className:"color-input",onChange:U=>wt(U.target.value),type:"color",value:z})]}),q.jsxs("label",{className:"color-row",children:[q.jsx("span",{className:"field-label",children:"contour tint"}),q.jsx("input",{className:"color-input",onChange:U=>Qt(U.target.value),type:"color",value:zt})]})]}),q.jsx(mn,{label:"reflection",max:1,min:0,onChange:U=>ce("reflection",U),step:.01,value:ct.reflection}),q.jsx(mn,{label:"refraction",max:1,min:0,onChange:U=>ce("refraction",U),step:.01,value:ct.refraction}),q.jsxs("div",{className:"upload-row",children:[q.jsx("div",{className:"helper",children:ct.refractionImage?"refraction map loaded":"no refraction map"}),q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"action-button",onClick:()=>f.current?.click(),type:"button",children:"upload"}),q.jsx("button",{className:"action-button",onClick:()=>ce("refractionImage",null),type:"button",children:"clear"})]})]}),q.jsx("input",{accept:"image/*",className:"hidden-input",onChange:U=>{const dt=U.target.files?.[0];dt&&Yi("refractionImage",dt),U.currentTarget.value=""},ref:f,type:"file"}),q.jsx(mn,{label:"bump",max:1,min:0,onChange:U=>ce("bump",U),step:.01,value:ct.bump}),q.jsxs("div",{className:"upload-row",children:[q.jsx("div",{className:"helper",children:ct.bumpImage?"bump map loaded":"no bump map"}),q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"action-button",onClick:()=>u.current?.click(),type:"button",children:"upload"}),q.jsx("button",{className:"action-button",onClick:()=>ce("bumpImage",null),type:"button",children:"clear"})]})]}),q.jsx("input",{accept:"image/*",className:"hidden-input",onChange:U=>{const dt=U.target.files?.[0];dt&&Yi("bumpImage",dt),U.currentTarget.value=""},ref:u,type:"file"}),q.jsx(mn,{label:"coating",max:1,min:0,onChange:U=>ce("coating",U),step:.01,value:ct.coating}),q.jsxs("label",{className:"color-row",children:[q.jsx("span",{className:"field-label",children:"coating tint"}),q.jsx("input",{className:"color-input",onChange:U=>ce("coatingColor",U.target.value),type:"color",value:ct.coatingColor})]})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"UV"}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"uv lock"}),q.jsx("input",{checked:ct.uvTileLock,onChange:U=>ce("uvTileLock",U.target.checked),type:"checkbox"})]}),q.jsx(fy,{label:"scale x",maxExponent:6,minExponent:-2,onChange:U=>Ke("uvScaleX",U),value:ct.uvScaleX}),q.jsx(fy,{label:"scale y",maxExponent:6,minExponent:-2,onChange:U=>Ke("uvScaleY",U),value:ct.uvScaleY}),q.jsx(mn,{label:"offset x",max:2,min:-2,onChange:U=>ce("uvOffsetX",U),step:.01,value:ct.uvOffsetX}),q.jsx(mn,{label:"offset y",max:2,min:-2,onChange:U=>ce("uvOffsetY",U),step:.01,value:ct.uvOffsetY}),q.jsx(mn,{decimals:0,label:"rotation",max:180,min:-180,onChange:U=>ce("uvRotation",U),step:1,value:ct.uvRotation})]}),q.jsxs("section",{className:"panel",children:[q.jsx("div",{className:"panel-title",children:"3D Export"}),q.jsxs("div",{className:"background-grid",children:[q.jsx("button",{className:"chip chip-active",type:"button",children:"obj"}),q.jsx("button",{className:"chip",onClick:()=>ye("fbx export is not active yet"),type:"button",children:"fbx"})]}),q.jsx(mn,{decimals:0,label:"bake texture",max:2048,min:512,onChange:cl,step:256,value:Wr}),q.jsx("button",{className:"action-button action-button-strong",disabled:!jt.model,onClick:()=>hl(),type:"button",children:"download obj bake zip"}),q.jsx("div",{className:"helper",children:"Downloads a zip with baked `obj + mtl + png`."})]})]}),q.jsxs("section",{className:"viewport-panel",ref:s,children:[q.jsxs("div",{className:`viewport-stage ${tn==="viewport"?"viewport-stage-fill":"viewport-stage-framed"}`,style:je,children:[q.jsx("div",{className:"viewport-background",style:Ne}),q.jsx("div",{className:"viewport-canvas",ref:t}),jt.model?null:q.jsx("div",{className:"viewport-outline-shell",children:Gt?Gt.kind==="text"?q.jsx("div",{className:"viewport-outline-text",style:te,children:Gt.text}):q.jsx("div",{className:"viewport-outline-svg",dangerouslySetInnerHTML:hr??void 0}):q.jsx("div",{className:"viewport-outline-placeholder",children:"type text or paste svg"})}),Ut==="gradient"?q.jsx("div",{className:"gradient-origin-handle",onPointerDown:ul,style:{left:`${oe.x}%`,top:`${oe.y}%`}}):null]}),q.jsx("div",{className:"viewport-panel-slot viewport-turntable-slot",style:_i(qt.turntable),children:q.jsx(Mf,{collapsed:kt.turntable,onDockReset:()=>cr("turntable"),onDragStart:U=>lr("turntable",U),panelRef:vi("turntable"),title:"turntable",children:q.jsx("fieldset",{className:"panel-lock-group",disabled:hn,children:q.jsxs("div",{className:"viewport-turntable-bar",children:[q.jsx("button",{className:`chip ${ee.enabled?"chip-active":""}`,disabled:!jt.model||hn,onClick:Yr,type:"button",children:"play"}),q.jsx("button",{className:"chip",disabled:!jt.model||hn,onClick:Bc,type:"button",children:"stop"}),q.jsx("button",{className:`chip ${ee.direction===-1?"chip-active":""}`,disabled:!jt.model||hn,onClick:()=>fr(-1),type:"button",children:"left"}),q.jsx("button",{className:`chip ${ee.direction===1?"chip-active":""}`,disabled:!jt.model||hn,onClick:()=>fr(1),type:"button",children:"right"}),q.jsxs("div",{className:"viewport-turntable-speed",children:[q.jsx("span",{className:"field-label",children:"speed"}),q.jsx("input",{className:"slider",disabled:!jt.model||hn,max:6,min:0,onChange:U=>de(dt=>({...dt,speed:Number(U.target.value)})),step:.01,type:"range",value:ee.speed})]})]})})})}),q.jsx("div",{className:"viewport-panel-slot",style:_i(qt.scene),children:q.jsx(Mf,{collapsed:kt.scene,onCollapseToggle:()=>gs("scene"),onDockReset:()=>cr("scene"),onDragStart:U=>lr("scene",U),panelRef:vi("scene"),title:"scene",children:q.jsxs("fieldset",{className:"panel-lock-group",disabled:hn,children:[q.jsx("div",{className:"button-row",children:["studio","sun"].map(U=>q.jsx("button",{className:`chip ${F.type===U?"chip-active":""}`,onClick:()=>A(dt=>({...dt,type:U})),type:"button",children:U},U))}),q.jsx(mn,{disabled:hn,label:"light intensity",max:14,min:.1,onChange:U=>A(dt=>({...dt,intensity:U})),step:.01,value:F.intensity}),q.jsx(mn,{disabled:hn,label:"light turn",max:360,min:0,onChange:U=>A(dt=>({...dt,turn:U})),step:1,value:F.turn}),q.jsx(mn,{disabled:hn,label:"light lift",max:85,min:-25,onChange:U=>A(dt=>({...dt,lift:U})),step:1,value:F.lift}),q.jsx(mn,{disabled:hn,label:"fill",max:3,min:0,onChange:U=>A(dt=>({...dt,fill:U})),step:.01,value:F.fill}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"bloom enabled"}),q.jsx("input",{checked:ot.enabled,onChange:U=>Rt(dt=>({...dt,enabled:U.target.checked})),type:"checkbox"})]}),q.jsx(mn,{disabled:hn||!ot.enabled,label:"bloom",max:3,min:0,onChange:U=>Rt(dt=>({...dt,strength:U})),step:.01,value:ot.strength}),q.jsxs("div",{className:"background-grid",children:[["solid","gradient","transparent"].map(U=>q.jsx("button",{className:`chip ${Ut===U?"chip-active":""}`,onClick:()=>{Et(U),U==="gradient"&&cr("gradient")},type:"button",children:U},U)),q.jsx("button",{className:`chip ${Kt?"chip-active":""}`,onClick:()=>_e(U=>!U),type:"button",children:Kt?"grid on":"grid off"})]}),Ut==="solid"?q.jsxs("label",{className:"color-row",children:[q.jsx("span",{className:"field-label",children:"solid bg"}),q.jsx("input",{className:"color-input",onChange:U=>Zt(U.target.value),type:"color",value:ae})]}):null]})})}),Ut==="gradient"?q.jsx("div",{className:"viewport-panel-slot viewport-gradient-slot",style:_i(qt.gradient),children:q.jsx(Mf,{collapsed:kt.gradient,onCollapseToggle:()=>gs("gradient"),onDockReset:()=>cr("gradient"),onDragStart:U=>lr("gradient",U),panelRef:vi("gradient"),title:"gradient",children:q.jsxs("fieldset",{className:"panel-lock-group",disabled:hn,children:[q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"chip",onClick:nn,type:"button",children:"add color"}),q.jsx("button",{className:"chip",onClick:kn,type:"button",children:"remove color"}),q.jsx("button",{className:"chip",onClick:On,type:"button",children:"randomize"})]}),q.jsx(mn,{decimals:0,disabled:hn,label:"angle",max:360,min:0,onChange:Xt,step:1,value:It}),q.jsx("div",{className:"gradient-editor",children:q.jsxs("div",{className:"gradient-editor-bar",ref:v,children:[q.jsx("div",{className:"gradient-editor-fill",style:{backgroundImage:`linear-gradient(90deg, ${Oe})`}}),ie.map(U=>q.jsx("button",{className:`gradient-stop-handle ${tt===U.id?"gradient-stop-active":""}`,disabled:hn,onClick:()=>Jt(U.id),onPointerDown:dt=>Pc(U.id,dt),style:{background:U.color,left:`${U.offset}%`},type:"button"},U.id))]})}),Ui?q.jsx("div",{className:"button-row",children:q.jsxs("label",{className:"color-row gradient-color-row",children:[q.jsx("span",{className:"field-label",children:"active color"}),q.jsx("input",{className:"color-input",onChange:U=>zn(U.target.value),type:"color",value:Ui.color})]})}):null]})})}):null,q.jsx("div",{className:"viewport-panel-slot",style:_i(qt.capture),children:q.jsxs(Mf,{collapsed:kt.capture,onCollapseToggle:()=>gs("capture"),onDockReset:()=>cr("capture"),onDragStart:U=>lr("capture",U),panelRef:vi("capture"),title:"capture",children:[q.jsxs("fieldset",{className:"panel-lock-group",disabled:hn,children:[q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"arkaplani dahil et?"}),q.jsx("input",{checked:ar,onChange:U=>sr(U.target.checked),type:"checkbox"})]}),q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"antialias"}),q.jsx("input",{checked:Ci,onChange:U=>Ri(U.target.checked),type:"checkbox"})]}),q.jsx("div",{className:"background-grid",children:[["beauty","beauty"],["alpha","alpha mask"],["both","both"]].map(([U,dt])=>q.jsx("button",{className:`chip ${un===U?"chip-active":""}`,disabled:hn,onClick:()=>rr(U),type:"button",children:dt},U))}),un==="both"?q.jsxs("label",{className:"checkbox-row",children:[q.jsx("span",{children:"separate folders in zip"}),q.jsx("input",{checked:za,onChange:U=>di(U.target.checked),type:"checkbox"})]}):null,q.jsx("div",{className:"background-grid",children:PC.map(U=>q.jsx("button",{className:`chip ${tn===U.key?"chip-active":""}`,disabled:hn,onClick:()=>Rn(U.key),type:"button",children:U.label},U.key))}),q.jsx(mn,{decimals:0,disabled:hn,label:"frame count",max:120,min:1,onChange:hi,step:1,value:xn}),q.jsx(mn,{decimals:0,disabled:hn,label:"capture fps",max:60,min:12,onChange:Ve,step:1,value:Xe}),q.jsx("label",{className:"slider-field",children:q.jsxs("div",{className:"slider-topline",children:[q.jsx("span",{className:"slider-label",children:"long edge px"}),q.jsx("input",{className:"value-input",disabled:hn,min:0,onChange:U=>ms(Number(U.target.value)),step:1,type:"number",value:Di})]})})]}),q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"action-button",disabled:hn,onClick:()=>zc(),type:"button",children:"start capture"}),q.jsx("button",{className:"action-button",disabled:!hn,onClick:()=>Oc(),type:"button",children:"stop"}),q.jsx("button",{className:"action-button",disabled:hn,onClick:()=>ur(),type:"button",children:"export frames to zip"})]}),q.jsx("div",{className:"helper",children:xn<=1?un==="both"?"Still export includes beauty and alpha together. Bloom is not included in alpha mask.":un==="alpha"?"Still export outputs alpha mask only. Bloom is not included in alpha mask.":yn?"Still export outputs beauty as jpg.":"Still export outputs beauty as png.":un==="both"?"Exports gif plus alpha. Bloom is not included in alpha mask.":un==="alpha"?"Alpha gif is saved in black and white. Bloom is not included in alpha mask.":""})]})})]})]}),Tt.open?q.jsx("div",{className:"dialog-backdrop",children:q.jsxs("section",{className:"dialog-card",children:[q.jsx("div",{className:"panel-title",children:"SVG Colors"}),q.jsx("div",{className:"viewport-note",children:"This SVG contains multiple colors. Do you want to keep color groups as separate parts?"}),q.jsx("div",{className:"dialog-swatches",children:Tt.colors.map(U=>q.jsxs("div",{className:"dialog-swatch-row",children:[q.jsx("span",{className:"dialog-swatch",style:{background:U}}),q.jsx("span",{children:U})]},U))}),q.jsxs("div",{className:"button-row",children:[q.jsx("button",{className:"action-button action-button-strong",onClick:()=>xs(!0),type:"button",children:"split by color"}),q.jsx("button",{className:"action-button",onClick:()=>xs(!1),type:"button",children:"keep single silhouette"})]})]})}):null]})}JS.createRoot(document.getElementById("root")).render(q.jsx(Ot.StrictMode,{children:q.jsx(XC,{})}));export{xe as C,fc as G,be as M,xi as S,Y as V,Mt as a,Ye as b,Lf as c,wn as d};
