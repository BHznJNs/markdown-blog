import{_ as e,ai as t,Z as a,e as i,aq as n,f as r,cF as o,bO as s,ab as l,bP as u,bV as d,z as c,dF as h,dt as g,aI as p,al as f,dG as v,aX as y,K as m,aW as M,bS as I,o as b,M as w,bL as x,j as P,A,i as D,b as V,dH as S}from"./core.js";import{g as _}from"./sectorHelper.js";import{r as T,a as N,T as R,w as k}from"./Tree.js";import{e as C}from"./enableAriaDecalForTree.js";import{d as L}from"./dataFilter.js";import"./linkSeriesData.js";var F=function(p){function v(e,i,n,r){var o=p.call(this)||this;o.z2=2,o.textConfig={inside:!0},t(o).seriesIndex=i.seriesIndex;var s=new a({z2:4,silent:e.getModel().get(["label","silent"])});return o.setTextContent(s),o.updateData(!0,e,i,n,r),o}return e(v,p),v.prototype.updateData=function(e,a,c,h,g){this.node=a,a.piece=this,c=c||this._seriesModel,h=h||this._ecModel;var p=this;t(p).dataIndex=a.dataIndex;var f=a.getModel(),v=f.getModel("emphasis"),y=a.getLayout(),m=i({},y);m.label=null;var M=a.getVisual("style");M.lineJoin="bevel";var I=a.getVisual("decal");I&&(M.decal=n(I,g));var b=_(f.getModel("itemStyle"),m,!0);i(m,b),r(o,(function(e){var t=p.ensureState(e),a=f.getModel([e,"itemStyle"]);t.style=a.getItemStyle();var i=_(a,m);i&&(t.shape=i)})),e?(p.setShape(m),p.shape.r=y.r0,s(p,{shape:{r:y.r}},c,a.dataIndex)):(l(p,{shape:m},c),u(p)),p.useStyle(M),this._updateLabel(c);var w=f.getShallow("cursor");w&&p.attr("cursor",w),this._seriesModel=c||this._seriesModel,this._ecModel=h||this._ecModel;var x=v.get("focus"),P="ancestor"===x?a.getAncestorsIndices():"descendant"===x?a.getDescendantIndices():x;d(this,P,v.get("blurScope"),v.get("disabled"))},v.prototype._updateLabel=function(e){var t=this,a=this.node.getModel(),i=a.getModel("label"),n=this.node.getLayout(),o=n.endAngle-n.startAngle,s=(n.startAngle+n.endAngle)/2,l=Math.cos(s),u=Math.sin(s),d=this,p=d.getTextContent(),v=this.node.dataIndex,y=i.get("minAngle")/180*Math.PI,m=i.get("show")&&!(null!=y&&Math.abs(o)<y);function M(e,t){var a=e.get(t);return null==a?i.get(t):a}p.ignore=!m,r(g,(function(i){var r="normal"===i?a.getModel("label"):a.getModel([i,"label"]),g="normal"===i,y=g?p:p.ensureState(i),m=e.getFormattedLabel(v,i);g&&(m=m||t.node.name),y.style=c(r,{},null,"normal"!==i,!0),m&&(y.style.text=m);var I=r.get("show");null==I||g||(y.ignore=!I);var b,w=M(r,"position"),x=g?d:d.states[i],P=x.style.fill;x.textConfig={outsideFill:"inherit"===r.get("color")?P:null,inside:"outside"!==w};var A=M(r,"distance")||0,D=M(r,"align");"outside"===w?(b=n.r+A,D=s>Math.PI/2?"right":"left"):D&&"center"!==D?"left"===D?(b=n.r0+A,s>Math.PI/2&&(D="right")):"right"===D&&(b=n.r-A,s>Math.PI/2&&(D="left")):(b=o===2*Math.PI&&0===n.r0?0:(n.r+n.r0)/2,D="center"),y.style.align=D,y.style.verticalAlign=M(r,"verticalAlign")||"middle",y.x=b*l+n.cx,y.y=b*u+n.cy;var V=M(r,"rotate"),S=0;"radial"===V?(S=h(-s))>Math.PI/2&&S<1.5*Math.PI&&(S+=Math.PI):"tangential"===V?(S=Math.PI/2-s)>Math.PI/2?S-=Math.PI:S<-Math.PI/2&&(S+=Math.PI):f(V)&&(S=V*Math.PI/180),y.rotation=h(S)})),p.dirtyStyle()},v}(p),j="sunburstRootToNode",U="sunburstHighlight",q="sunburstUnhighlight";var B=function(t){function a(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=a.type,e}return e(a,t),a.prototype.render=function(e,t,a,i){var n=this;this.seriesModel=e,this.api=a,this.ecModel=t;var r=e.getData(),o=r.tree.root,s=e.getViewRoot(),l=this.group,u=e.get("renderLabelForZeroData"),d=[];s.eachNode((function(e){d.push(e)}));var c=this._oldChildren||[];!function(i,n){if(0===i.length&&0===n.length)return;function s(e){return e.getId()}function d(s,d){!function(i,n){u||!i||i.getValue()||(i=null);if(i!==o&&n!==o)if(n&&n.piece)i?(n.piece.updateData(!1,i,e,t,a),r.setItemGraphicEl(i.dataIndex,n.piece)):function(e){if(!e)return;e.piece&&(l.remove(e.piece),e.piece=null)}(n);else if(i){var s=new F(i,e,t,a);l.add(s),r.setItemGraphicEl(i.dataIndex,s)}}(null==s?null:i[s],null==d?null:n[d])}new y(n,i,s,s).add(d).update(d).remove(m(d,null)).execute()}(d,c),function(i,r){r.depth>0?(n.virtualPiece?n.virtualPiece.updateData(!1,i,e,t,a):(n.virtualPiece=new F(i,e,t,a),l.add(n.virtualPiece)),r.piece.off("click"),n.virtualPiece.on("click",(function(e){n._rootToNode(r.parentNode)}))):n.virtualPiece&&(l.remove(n.virtualPiece),n.virtualPiece=null)}(o,s),this._initEvents(),this._oldChildren=d},a.prototype._initEvents=function(){var e=this;this.group.off("click"),this.group.on("click",(function(t){var a=!1;e.seriesModel.getViewRoot().eachNode((function(i){if(!a&&i.piece&&i.piece===t.target){var n=i.getModel().get("nodeClick");if("rootToNode"===n)e._rootToNode(i);else if("link"===n){var r=i.getModel(),o=r.get("link");if(o){var s=r.get("target",!0)||"_blank";M(o,s)}}a=!0}}))}))},a.prototype._rootToNode=function(e){e!==this.seriesModel.getViewRoot()&&this.api.dispatchAction({type:j,from:this.uid,seriesId:this.seriesModel.id,targetNode:e})},a.prototype.containPoint=function(e,t){var a=t.getData().getItemLayout(0);if(a){var i=e[0]-a.cx,n=e[1]-a.cy,r=Math.sqrt(i*i+n*n);return r<=a.r&&r>=a.r0}},a.type="sunburst",a}(I);function H(e){var t=0;r(e.children,(function(e){H(e);var a=e.value;P(a)&&(a=a[0]),t+=a}));var a=e.value;P(a)&&(a=a[0]),(null==a||isNaN(a))&&(a=t),a<0&&(a=0),P(e.value)?e.value[0]=a:e.value=a}var O=function(t){function a(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=a.type,e.ignoreStyleOnData=!0,e}return e(a,t),a.prototype.getInitialData=function(e,t){var a={name:e.name,children:e.data};H(a);var i=this._levelModels=b(e.levels||[],(function(e){return new w(e,this,t)}),this),n=R.createTree(a,this,(function(e){e.wrapMethod("getItemModel",(function(e,t){var a=n.getNodeByDataIndex(t),r=i[a.depth];return r&&(e.parentModel=r),e}))}));return n.data},a.prototype.optionUpdated=function(){this.resetViewRoot()},a.prototype.getDataParams=function(e){var a=t.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(e);return a.treePathInfo=k(i,this),a},a.prototype.getLevelModel=function(e){return this._levelModels&&this._levelModels[e.depth]},a.prototype.getViewRoot=function(){return this._viewRoot},a.prototype.resetViewRoot=function(e){e?this._viewRoot=e:e=this._viewRoot;var t=this.getRawData().tree.root;e&&(e===t||t.contains(e))||(this._viewRoot=t)},a.prototype.enableAriaDecal=function(){C(this)},a.type="series.sunburst",a.defaultOption={z:2,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,stillShowZeroSum:!0,nodeClick:"rootToNode",renderLabelForZeroData:!1,label:{rotate:"radial",show:!0,opacity:1,align:"center",position:"inside",distance:5,silent:!0},itemStyle:{borderWidth:1,borderColor:"white",borderType:"solid",shadowBlur:0,shadowColor:"rgba(0, 0, 0, 0.2)",shadowOffsetX:0,shadowOffsetY:0,opacity:1},emphasis:{focus:"descendant"},blur:{itemStyle:{opacity:.2},label:{opacity:.1}},animationType:"expansion",animationDuration:1e3,animationDurationUpdate:500,data:[],sort:"desc"},a}(x),Z=Math.PI/180;function z(e,t,a){t.eachSeriesByType(e,(function(e){var t=e.get("center"),i=e.get("radius");P(i)||(i=[0,i]),P(t)||(t=[t,t]);var n=a.getWidth(),o=a.getHeight(),s=Math.min(n,o),l=A(t[0],n),u=A(t[1],o),d=A(i[0],s/2),c=A(i[1],s/2),h=-e.get("startAngle")*Z,g=e.get("minAngle")*Z,p=e.getData().tree.root,f=e.getViewRoot(),v=f.depth,y=e.get("sort");null!=y&&E(f,y);var m=0;r(f.children,(function(e){!isNaN(e.getValue())&&m++}));var M=f.getValue(),I=Math.PI/(M||m)*2,b=f.depth>0,w=f.height-(b?-1:1),x=(c-d)/(w||1),D=e.get("clockwise"),V=e.get("stillShowZeroSum"),S=D?1:-1,_=function(t,a){if(t){var i=a;if(t!==p){var n=t.getValue(),o=0===M&&V?I:n*I;o<g&&(o=g),i=a+S*o;var c=t.depth-v-(b?-1:1),h=d+x*c,f=d+x*(c+1),y=e.getLevelModel(t);if(y){var m=y.get("r0",!0),w=y.get("r",!0),P=y.get("radius",!0);null!=P&&(m=P[0],w=P[1]),null!=m&&(h=A(m,s/2)),null!=w&&(f=A(w,s/2))}t.setLayout({angle:o,startAngle:a,endAngle:i,clockwise:D,cx:l,cy:u,r0:h,r:f})}if(t.children&&t.children.length){var T=0;r(t.children,(function(e){T+=_(e,a+T)}))}return i-a}};if(b){var T=d,N=d+x,R=2*Math.PI;p.setLayout({angle:R,startAngle:h,endAngle:h+R,clockwise:D,cx:l,cy:u,r0:T,r:N})}_(f,h)}))}function E(e,t){var a=e.children||[];e.children=function(e,t){if(D(t)){var a=b(e,(function(e,t){var a=e.getValue();return{params:{depth:e.depth,height:e.height,dataIndex:e.dataIndex,getValue:function(){return a}},index:t}}));return a.sort((function(e,a){return t(e.params,a.params)})),b(a,(function(t){return e[t.index]}))}var i="asc"===t;return e.sort((function(e,t){var a=(e.getValue()-t.getValue())*(i?1:-1);return 0===a?(e.dataIndex-t.dataIndex)*(i?-1:1):a}))}(a,t),a.length&&r(e.children,(function(e){E(e,t)}))}function G(e){var t={};e.eachSeriesByType("sunburst",(function(e){var a=e.getData(),n=a.tree;n.eachNode((function(r){var o=r.getModel().getModel("itemStyle").getItemStyle();o.fill||(o.fill=function(e,a,i){for(var n=e;n&&n.depth>1;)n=n.parentNode;var r=a.getColorFromPalette(n.name||n.dataIndex+"",t);return e.depth>1&&V(r)&&(r=S(r,(e.depth-1)/(i-1)*.5)),r}(r,e,n.root.height));var s=a.ensureUniqueItemVisual(r.dataIndex,"style");i(s,o)}))}))}function W(e){e.registerChartView(B),e.registerSeriesModel(O),e.registerLayout(m(z,"sunburst")),e.registerProcessor(m(L,"sunburst")),e.registerVisual(G),function(e){e.registerAction({type:j,update:"updateView"},(function(e,t){t.eachComponent({mainType:"series",subType:"sunburst",query:e},(function(t,a){var i=T(e,[j],t);if(i){var n=t.getViewRoot();n&&(e.direction=N(n,i.node)?"rollUp":"drillDown"),t.resetViewRoot(i.node)}}))})),e.registerAction({type:U,update:"none"},(function(e,t,a){e=i({},e),t.eachComponent({mainType:"series",subType:"sunburst",query:e},(function(t){var a=T(e,[U],t);a&&(e.dataIndex=a.node.dataIndex)})),v("sunburstHighlight","highlight"),a.dispatchAction(i(e,{type:"highlight"}))})),e.registerAction({type:q,update:"updateView"},(function(e,t,a){e=i({},e),v("sunburstUnhighlight","downplay"),a.dispatchAction(i(e,{type:"downplay"}))}))}(e)}export{W as install};