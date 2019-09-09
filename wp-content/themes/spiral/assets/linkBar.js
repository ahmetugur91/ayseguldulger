define("linkBar",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins"],function(i,e,t,n,o,s){return function(i){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return i[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=i,t.c=e,t.d=function(i,e,n){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:n})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var o in i)t.d(n,o,function(e){return i[e]}.bind(null,o));return n},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=876)}({0:function(e,t){e.exports=i},1:function(i,t){i.exports=e},2:function(i,e){i.exports=t},258:function(i,e,t){var n,o;n=[t(0),t(3),t(1),t(4),t(2)],void 0===(o=function(i,e,t,n,o){"use strict";var s=t.linkRenderer;function r(e){return i.assign({},e,{alt:e.title})}return{displayName:"LinkBarItem",mixins:[e.mixins.skinBasedComp,e.mixins.createChildComponentMixin],propTypes:i.assign({linkRenderInfo:o.santaTypesDefinitions.Link.renderInfo.isRequired,rootNavigationInfo:o.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,compData:o.santaTypesDefinitions.Component.compData.isRequired,compProp:o.santaTypesDefinitions.Component.compProp.isRequired,style:n.object,id:o.santaTypesDefinitions.Component.id.isRequired,isExperimentOpen:o.santaTypesDefinitions.isExperimentOpen.isRequired,parentId:n.string,itemStyle:n.object},o.utils.santaTypesUtils.getSantaTypesFromPropTypes(o.components.Image.propTypes)),getSkinProperties:function(){var e=this.props.compData,t=this.props.compProp,n=t.iconSize,o={link:e.link?s.renderLink(e.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{style:{cursor:"default"}},image:this.createChildComponent(e,"core.components.Image","image",{id:this.props.id+"image",ref:"image",imageData:r(e),containerWidth:n,containerHeight:n,displayMode:"fill",autoLayout:!0,wixImageLayout:this.props.isExperimentOpen("bv_wixImage"),containerId:this.props.parentId,style:i.assign({},this.props.style,{position:"absolute",width:n,height:n})})};return o[""]={tagName:"li",style:{width:t.iconSize,height:t.iconSize,marginBottom:this.props.itemStyle.marginBottom,marginRight:this.props.itemStyle.marginRight,display:this.props.itemStyle.display}},o}}}.apply(e,n))||(i.exports=o)},3:function(i,e){i.exports=n},4:function(i,e){i.exports=o},5:function(i,e){i.exports=s},876:function(i,e,t){var n,o;n=[t(877),t(258),t(5),t(878),t(3)],void 0===(o=function(i,e,t,n,o){"use strict";var s={linkBar:i,linkBarItem:e};return o.compRegistrar.register("wysiwyg.viewer.components.LinkBar",s.linkBar).register("wysiwyg.viewer.components.LinkBarItem",s.linkBarItem),t.skinsMap.addBatch(n),s}.apply(e,n))||(i.exports=o)},877:function(i,e,t){var n,o;n=[t(2),t(0),t(3),t(258)],void 0===(o=function(i,e,t,n){"use strict";var o={HORIZ:"HORIZ",VERTICAL:"VERTICAL"};var s=function(i){var e=i.compData,t=i.compProp,n=i.isMobileView,s=e.items.length,r=t.iconSize,a=t.spacing,p=s*(r+a)-a,l=t.orientation===o.HORIZ;return n?function(i,e,t,n,o){if(0===i)return{width:5,height:e};var s=void 0,r=void 0,a=void 0,p=e+t;return n?(s=Math.min(o,300),a=Math.floor((s+t)/p),r=Math.ceil(i/a)*e):(s=e,r=o),{width:s,height:r}}(s,r,a,l,p):0!==s?{width:l?p:r,height:l?r:p}:void 0};return{displayName:"LinkBar",mixins:[t.mixins.skinBasedComp,t.mixins.createChildComponentMixin],propTypes:e.assign({compData:i.santaTypesDefinitions.Component.compData.isRequired,isMobileView:i.santaTypesDefinitions.isMobileView,isResponsive:i.santaTypesDefinitions.RendererModel.isResponsive,compProp:i.santaTypesDefinitions.Component.compProp.isRequired},i.utils.santaTypesUtils.getSantaTypesByDefinition(n)),getInitialState:function(){var i={};return this.props.isMobileView&&(i.$mobile="mobileView"),i},getChildren:function(){return e.map(this.props.compData.items,function(i,t){return this.createChildComponent(i,"wysiwyg.viewer.components.LinkBarItem","imageItem",{itemStyle:(n=this.props,s=n.compProp,r=n.isResponsive,a=s.orientation===o.HORIZ,p=s.spacing,l={marginRight:a?p:0,marginBottom:a?0:p},r?l:e.assign({display:a?"inline-block":"block"},l)),ref:t,id:this.props.id+t+"image",parentId:this.props.id});var n,s,r,a,p,l}.bind(this))},getItemsContainerStyle:function(){return this.props.isResponsive?{flexDirection:this.props.compProp.orientation===o.HORIZ?"row":"column"}:{}},getRootStyles:function(){return this.props.isResponsive?{}:s(this.props)},getSkinProperties:function(){return{"":e.assign({"data-is-responsive":this.props.isResponsive,style:this.getRootStyles()},!this.props.isResponsive&&{"data-hide-prejs":!0}),itemsContainer:{"aria-label":"Social bar",style:this.getItemsContainerStyle(),children:this.getChildren()}}}}}.apply(e,n))||(i.exports=o)},878:function(i,e,t){var n,o,s;"undefined"!=typeof self&&self,o=[],void 0===(s="function"==typeof(n=function(){"use strict";var i={"wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin":{react:[["a","link",[],{},["div","image",[],{}]]],exports:{image:{skin:"skins.core.ImageSkin"}},css:{"%link":"cursor:pointer;"}},"wysiwyg.viewer.skins.displayers.LinkBarItemSkin":{react:[["a","link",[],{},["span","image",[],{}]]],exports:{image:{skin:"skins.core.ImageSkin"}},params:{bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",bgh:"BG_COLOR_ALPHA"},paramsDefaults:{bg:"color_11",rd:"100%",bgh:"color_11"},css:{"%link":"cursor:pointer;","%image":"z-index:10;","%imageBG":"overflow:hidden;background-color:[bg];[rd]  position:relative !important;top:0;left:0;","%imageBG:hover":"background-color:[bgh];"}},"wysiwyg.viewer.skins.LinkBarNoBGSkin":{react:[["ul","itemsContainer",[],{}]],exports:{imageItem:{skin:"wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin",styleGroup:"displayer"}},css:{'%[data-is-responsive~="false"] %itemsContainer':"position:absolute;width:100%;height:100%;white-space:nowrap;",'%[data-is-responsive~="false"][data-state~="mobileView"] %itemsContainer':"position:absolute;width:100%;height:100%;white-space:normal;",'%[data-is-responsive~="true"]':"display:table;",'%[data-is-responsive~="true"] %itemsContainer':"display:-webkit-box;display:-webkit-flex;display:flex;","%itemsContainer > li:last-child":"margin:0 !important;","% a":"display:block;height:100%;"}}};return i})?n.apply(e,o):n)||(i.exports=s)}})});
//# sourceMappingURL=linkBar.min.js.map