import{_ as t,a4 as e,f as n,s as i,a5 as a,a6 as o,t as r,e as l,m as p,x as s,a7 as u,h,a as c,a8 as f,Z as g,a9 as d,A as v,aa as m,q as y,ab as x,C as _,ac as C,ad as w,ae as O,af as M,i as T,ag as I,ah as b,ai as A,N as P,aj as U,j as z}from"./core.js";import{i as G,c as E,s as N,a as $,u as j,b as k,d as D,e as K}from"./customGraphicKeyframeAnimation.js";function S(t,e){var i;return n(e,(function(e){null!=t[e]&&"auto"!==t[e]&&(i=!0)})),i}var V=["transition","enterFrom","leaveTo"],Z=V.concat(["enterAnimation","updateAnimation","leaveAnimation"]);function q(t,e,n){if(n&&(!t[n]&&e[n]&&(t[n]={}),t=t[n],e=e[n]),t&&e)for(var i=n?V:Z,a=0;a<i.length;a++){var o=i[a];null==t[o]&&null!=e[o]&&(t[o]=e[o])}}var B=function(r){function h(){var t=null!==r&&r.apply(this,arguments)||this;return t.type=h.type,t.preventAutoZ=!0,t}return t(h,r),h.prototype.mergeOption=function(t,e){var n=this.option.elements;this.option.elements=null,r.prototype.mergeOption.call(this,t,e),this.option.elements=n},h.prototype.optionUpdated=function(t,r){var h=this.option,c=(r?h:t).elements,f=h.elements=r?[]:h.elements,g=[];this._flatten(c,g,null);var d=e(f,g,"normalMerge"),v=this._elOptionsToUpdate=[];n(d,(function(t,e){var n=t.newOption;i(a(n)||t.existing,"Empty graphic option definition"),n&&(v.push(n),function(t,e){var n=t.existing;if(e.id=t.keyInfo.id,!e.type&&n&&(e.type=n.type),null==e.parentId){var i=e.parentOption;i?e.parentId=i.id:n&&(e.parentId=n.parentId)}e.parentOption=null}(t,n),function(t,e,n){var a=l({},n),o=t[e],r=n.$action||"merge";if("merge"===r)if(o){var h=n.type;i(!h||o.type===h,'Please set $action: "replace" to change `type`'),p(o,a,!0),s(o,a,{ignoreSize:!0}),u(n,o),q(n,o),q(n,o,"shape"),q(n,o,"style"),q(n,o,"extra"),n.clipPath=o.clipPath}else t[e]=a;else"replace"===r?t[e]=a:"remove"===r&&o&&(t[e]=null)}(f,e,n),function(t,e){if(t&&(t.hv=e.hv=[S(e,["left","right"]),S(e,["top","bottom"])],"group"===t.type)){var n=t,i=e;null==n.width&&(n.width=i.width=0),null==n.height&&(n.height=i.height=0)}}(f[e],n))}),this),h.elements=o(f,(function(t){return t&&delete t.$action,null!=t}))},h.prototype._flatten=function(t,e,i){n(t,(function(t){if(t){i&&(t.parentOption=i),e.push(t);var n=t.children;n&&n.length&&this._flatten(n,e,t),delete t.children}}),this)},h.prototype.useElOptionsToUpdate=function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t},h.type="graphic",h.defaultOption={elements:[]},h}(r),F={path:null,compoundPath:null,group:P,image:U,text:g},H=h(),W=function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.type,t}return t(a,e),a.prototype.init=function(){this._elMap=c()},a.prototype.render=function(t,e,n){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t),this._relocate(t,n)},a.prototype._updateElements=function(t){var e=t.useElOptionsToUpdate();if(e){var a=this._elMap,o=this.group,r=t.get("z"),p=t.get("zlevel");n(e,(function(e){var s=f(e.id,null),u=null!=s?a.get(s):null,h=f(e.parentId,null),c=null!=h?a.get(h):o,v=e.type,m=e.style;"text"===v&&m&&e.hv&&e.hv[1]&&(m.textVerticalAlign=m.textBaseline=m.verticalAlign=m.align=null);var y=e.textContent,x=e.textConfig;if(m&&G(m,v,!!x,!!y)){var _=E(m,v,!0);!x&&_.textConfig&&(x=e.textConfig=_.textConfig),!y&&_.textContent&&(y=_.textContent)}var C=function(t){return t=l({},t),n(["id","parentId","$action","hv","bounding","textContent","clipPath"].concat(b),(function(e){delete t[e]})),t}(e);u&&i(c===u.parent,"Changing parent is not supported.");var w=e.$action||"merge",O="merge"===w,M="replace"===w;if(O){var T=u;(S=!u)?T=L(s,c,e.type,a):(T&&(H(T).isNew=!1),N(T)),T&&($(T,C,t,{isInit:S}),R(T,e,r,p))}else if(M){Q(u,e,a,t);var I=L(s,c,e.type,a);I&&($(I,C,t,{isInit:!0}),R(I,e,r,p))}else"remove"===w&&(j(u,e),Q(u,e,a,t));var P=a.get(s);if(P&&y)if(O){var U=P.getTextContent();U?U.attr(y):P.setTextContent(new g(y))}else M&&P.setTextContent(new g(y));if(P){var z=e.clipPath;if(z){var D=z.type,K=void 0,S=!1;if(O){var V=P.getClipPath();K=(S=!V||H(V).type!==D)?J(D):V}else M&&(S=!0,K=J(D));P.setClipPath(K),$(K,z,t,{isInit:S}),k(K,z.keyframeAnimation,t)}var Z=H(P);P.setTextConfig(x),Z.option=e,function(t,e,n){var i=A(t).eventData;t.silent||t.ignore||i||(i=A(t).eventData={componentType:"graphic",componentIndex:e.componentIndex,name:t.name});i&&(i.info=n.info)}(P,t,e),d({el:P,componentModel:t,itemName:P.name,itemTooltipOption:e.tooltip}),k(P,e.keyframeAnimation,t)}}))}},a.prototype._relocate=function(t,e){for(var n=t.option.elements,i=this.group,a=this._elMap,o=e.getWidth(),r=e.getHeight(),l=["x","y"],p=0;p<n.length;p++){var s=n[p];if((d=null!=(g=f(s.id,null))?a.get(g):null)&&d.isGroup){var u=(_=d.parent)===i,h=H(d),c=H(_);h.width=v(h.option.width,u?o:c.width)||0,h.height=v(h.option.height,u?r:c.height)||0}}for(p=n.length-1;p>=0;p--){var g,d;s=n[p];if(d=null!=(g=f(s.id,null))?a.get(g):null){var _=d.parent,C=(c=H(_),_===i?{width:o,height:r}:{width:c.width,height:c.height}),w={},O=m(d,s,C,null,{hv:s.hv,boundingMode:s.bounding},w);if(!H(d).isNew&&O){for(var M=s.transition,T={},I=0;I<l.length;I++){var b=l[I],A=w[b];M&&(D(M)||y(M,b)>=0)?T[b]=A:d[b]=A}x(d,T,t,0)}else d.attr(w)}}},a.prototype._clear=function(){var t=this,e=this._elMap;e.each((function(n){Q(n,H(n).option,e,t._lastGraphicModel)})),this._elMap=c()},a.prototype.dispose=function(){this._clear()},a.type="graphic",a}(_);function J(t){i(t,"graphic type MUST be set");var e=C(F,t)?F[t]:w(t);i(e,"graphic type "+t+" can not be found");var n=new e({});return H(n).type=t,n}function L(t,e,n,i){var a=J(n);return e.add(a),i.set(t,a),H(a).id=t,H(a).isNew=!0,a}function Q(t,e,n,i){t&&t.parent&&("group"===t.type&&t.traverse((function(t){Q(t,e,n,i)})),K(t,e,i),n.removeKey(H(t).id))}function R(t,e,i,a){t.isGroup||n([["cursor",M.prototype.cursor],["zlevel",a||0],["z",i||0],["z2",0]],(function(n){var i=n[0];C(e,i)?t[i]=O(e[i],n[1]):null==t[i]&&(t[i]=n[1])})),n(I(e),(function(n){if(0===n.indexOf("on")){var i=e[n];t[n]=T(i)?i:null}})),C(e,"draggable")&&(t.draggable=e.draggable),null!=e.name&&(t.name=e.name),null!=e.id&&(t.id=e.id)}function X(t){t.registerComponentModel(B),t.registerComponentView(W),t.registerPreprocessor((function(t){var e=t.graphic;z(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])}))}export{X as install};