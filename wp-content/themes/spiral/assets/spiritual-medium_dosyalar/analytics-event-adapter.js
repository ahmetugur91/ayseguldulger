!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("promote-analytics-adapter",[],e):"object"==typeof exports?exports["promote-analytics-adapter"]=e():n["promote-analytics-adapter"]=e()}("undefined"!=typeof self?self:this,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="https://static.parastorage.com/services/promote-analytics-adapter/2.172.0/",t.p="undefined"!=typeof window&&window.__STATICS_BASE_URL__||t.p,t(t.s=29)}({1:function(n,e,t){"use strict";var r=function(n,e){var t=Object.keys(n);return 0===t.length?n:t.reduce(function(t,r){var o=e[r];return o&&(n[r]||0===n[r])&&(t[o]=n[r]),t},{})},o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};function i(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}var c={id:"id",price:"value",value:"value",revenue:"value",name:"content_name",category:"content_category",currency:"currency",content_ids:"content_ids",contents:"contents",type:"content_type",num_items:"num_items",quantity:"quantity",label:"content_name"},a=function(n){var e=n.type,t=void 0===e?"product":e,o=i(n,["type"]),a=Object.assign({},o,{type:t});return a.contents&&(a.contents=a.contents.map(function(n){return n.quantity=n.quantity||1,n.item_price=n.item_price||n.price||0,n}),a.price||a.value||a.revenue||(a.price=function(n){return(Number.parseFloat(n.tax)||0)+(Number.parseFloat(n.shipping)||0)+n.contents.reduce(function(n,e){return n+Number.parseFloat(e.item_price)*e.quantity},0)}(a).toString()),a.currency||(a.currency=function(n){return n.contents&&n.contents[0].currency}(a))),r(a,c)},u=function(n){if(n.contents&&!n.num_items){var e=o({},n);return e.num_items=e.contents.reduce(function(n,e){return n+(e.quantity||1)},0),e}return n},s={ViewContent:function(n){var e=n.id,t=i(n,["id"]);return[["track","ViewContent",o({},a(t),{content_ids:[e]})]]},AddToCart:function(n){var e=n.id,t=i(n,["id"]);return[["track","AddToCart",o({},a(t),{content_ids:[e]})]]},InitiateCheckout:function(n){return[["track","InitiateCheckout",o({},a(u(n)),n.contents&&{content_ids:n.contents.map(function(n){return n.id})})]]},AddPaymentInfo:function(n){return[["track","AddPaymentInfo",o({},a(u(n)),n.contents&&{content_ids:n.contents.map(function(n){return n.id})})]]},Purchase:function(n){return[["track","Purchase",o({},a(u(n)),n.contents&&{content_ids:n.contents.map(function(n){return n.id})})]]},Lead:function(n){return[["track","Lead",r(n,c)]]},CustomEvent:function(n){var e=n.event,t=n.eventAction,r=void 0===t?"customEvent":t,o=i(n,["event","eventAction"]);return[["trackCustom",e||r,o]]}},d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};var p={price:"price",sku:"id",id:"id",currency:"currency",name:"name",category:"category",brand:"brand",variant:"variant",list:"list",quantity:"quantity",step:"step",option:"option",position:"position",coupon:"coupon",affiliation:"affiliation",revenue:"revenue",tax:"tax",shipping:"shipping"};!function(){for(var n=1;n<=200;n++)p["dimension"+n]="dimension"+n,p["metric"+n]="metric"+n}();var f=function(n){return n?"Enhanced Ecommerce - "+n:"Enhanced Ecommerce"},v={AddProductImpression:function(n){var e=(n.contents||[]).map(function(n){return["ec:addImpression",r(n,p)]});return[["require","ec"]].concat(e).concat([["send","event",f(n.origin),"Product Impressions",{nonInteraction:!0}]])},ClickProduct:function(n){var e=n.name?n.name:"(not set)",t=n.list?n.list:"(not set)";return[["require","ec"]].concat([["ec:addProduct",r(n,p)]]).concat([["ec:setAction","click",{list:t}]]).concat([["send","event",f(n.origin),"Product Click",e]])},ViewContent:function(n){var e=n.name?n.name:"(not set)";return[["require","ec"]].concat([["ec:addImpression",r(n,p)]]).concat([["ec:setAction","detail"]]).concat([["send","event",f(n.origin),"View Content",e,{nonInteraction:!0}]])},AddToCart:function(n){var e=n.name?n.name:"(not set)";return[["require","ec"]].concat([["ec:addProduct",r(n,p)]]).concat([["ec:setAction","add"]]).concat([["send","event",f(n.origin),"Add to Cart",e]])},RemoveFromCart:function(n){var e=n.name?n.name:"(not set)";return[["require","ec"]].concat([["ec:addProduct",r(n,p)]]).concat([["ec:setAction","remove"]]).concat([["send","event",f(n.origin),"Remove from Cart",e]])},InitiateCheckout:function(n){var e=(n.contents||[]).map(function(n){return["ec:addProduct",r(n,p)]}),t=r({option:n.option},p);return[["require","ec"]].concat(e).concat([["ec:setAction","checkout",t]]).concat([["send","event",f(n.origin),"Initiate Checkout"]])},StartPayment:function(n){var e=r({step:1,option:n.option},p);return[["require","ec"]].concat([["ec:setAction","checkout_option",e]]).concat([["send","event",f(n.origin),"Start Payment"]])},AddPaymentInfo:function(n){var e=r({step:2,option:n.option},p);return[["require","ec"]].concat([["ec:setAction","checkout_option",e]]).concat([["send","event",f(n.origin),"Add Payment Info"]])},CheckoutStep:function(n){var e=r({step:n.step||3,option:n.option},p);return[["require","ec"]].concat([["ec:setAction","checkout_option",e]]).concat([["send","event",f(n.origin),"Checkout Step "+e.step]])},Purchase:function(n){var e=(n.contents||[]).map(function(n){return["ec:addProduct",r(n,p)]}),t={};return["id","affiliation","revenue","tax","shipping","coupon"].forEach(function(e){return n[e]&&(t[e]=n[e])}),[["require","ec"]].concat(e).concat([["ec:setAction","purchase",r(t,p)]]).concat([["send","event",f(n.origin),"Purchase"]])},Lead:function(n){var e=n.category,t=void 0===e?"Leads":e,r=n.action,o=void 0===r?"Submitted":r,i=n.label;return[["send","event",t,o,void 0===i?"New Lead":i]]},CustomEvent:function(n){var e=n.event,t=void 0===e?"customEvent":e,o=n.eventAction,i=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["event","eventAction"]);return"pageview"===t.toLowerCase()?[["send","pageview",r(i,p)]]:[["send","event",d({eventAction:o||t},i)]]}},l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};function m(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}var g={AddProductImpression:function(n){var e=n.contents,t=n.origin;return[[[l({event:"productImpression"},t&&{origin:t},{ecommerce:{impressions:e}})]]]},ClickProduct:function(n){var e=n.list,t=void 0===e?"(not set)":e,r=n.origin,o=m(n,["list","origin"]);return[[[l({event:"productClick"},r&&{origin:r},{ecommerce:{click:{actionField:{list:t},products:[o]}}})]]]},ViewContent:function(n){var e=n.list,t=void 0===e?"(not set)":e,r=n.origin,o=m(n,["list","origin"]);return[[[l({event:"viewContent"},r&&{origin:r},{ecommerce:{detail:{actionField:{list:t},products:[o]}}})]]]},AddToCart:function(n){var e=n.origin,t=m(n,["origin"]);return[[[l({event:"addToCart"},e&&{origin:e},{ecommerce:{add:{products:[t]}}})]]]},RemoveFromCart:function(n){var e=n.origin,t=m(n,["origin"]);return[[[l({event:"removeFromCart"},e&&{origin:e},{ecommerce:{remove:{products:[t]}}})]]]},InitiateCheckout:function(n){var e=n.contents,t=void 0===e?[]:e,r=n.origin,o=n.option,i=[].concat(t),c=Object.assign({},o&&{option:o});return[[[l({event:"checkout"},r&&{origin:r},{ecommerce:{checkout:{actionField:c,products:i}}})]]]},StartPayment:function(n){var e=n.origin;return[[[l({event:"checkoutOption"},e&&{origin:e},{ecommerce:{checkout_option:{actionField:{step:1}}}})]]]},AddPaymentInfo:function(n){var e=n.origin,t=n.option,r=Object.assign({step:2},t&&{option:t});return[[[l({event:"checkoutOption"},e&&{origin:e},{ecommerce:{checkout_option:{actionField:r}}})]]]},CheckoutStep:function(n){var e=n.step,t=void 0===e?3:e,r=n.origin,o=n.option,i=Object.assign({step:t},o&&{option:o});return[[[l({event:"checkoutOption"},r&&{origin:r},{ecommerce:{checkout_option:{actionField:i}}})]]]},Purchase:function(n){var e=n.contents,t=void 0===e?[]:e,r=n.origin,o=m(n,["contents","origin"]),i=[].concat(t),c={};return["id","affiliation","revenue","tax","shipping","coupon"].forEach(function(n){return o[n]&&(c[n]=o[n])}),[[[l({event:"purchase"},r&&{origin:r},{ecommerce:{purchase:{actionField:c,products:i}}})]]]},Lead:function(){return[[[{event:"lead"}]]]},CustomEvent:function(n){var e=n.event,t=void 0===e?"customEvent":e,r=m(n,["event"]);return[[[l({event:t},r)]]]}},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"object"===(void 0===n?"undefined":y(n))&&(n instanceof Number||n instanceof Boolean||n instanceof String?n=n.valueOf():null!==n&&(n=JSON.stringify(n))),n}function b(n){return"number"==typeof n?Math.round(1e4*n):n}var A={PageView:{table:"page_views",paramsMap:{pageId:"page_id",pageNumber:"page_number"}},AddProductImpression:{},ClickProduct:{},ViewContent:{},AddToCart:{},RemoveFromCart:{},InitiateCheckout:{},AddPaymentInfo:{},Purchase:{},Lead:{name:function(n){return function(n){return n&&(""+n).replace(/\s/g,"")}(n.label)},table:"lead_events"}};function _(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments[4],i={evt:n,evn:e,data:function(n){return Object.keys(n).reduce(function(e,t){return e[t]=h(n[t]),e},{})}(t)};return r.context&&r.context.appDefId&&(i.appId=r.context.appDefId),o&&(i.tbl=o),[[i]]}var C=Object.keys(A).reduce(function(n,e){var t=A[e],r=t.name,o=t.table,i=t.paramsMap;return n[e]=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return"function"==typeof r&&(r=r(n)),i&&(n=Object.keys(i).reduce(function(e,t){return e[i[t]]=n[t],e},{})),function(n,e,t,r){return _("p",n,e,t,r)}(r=r||e,n,t,o)},n},{CustomEvent:function(n,e){var t=n.event,r=n.targetTable;return function(n,e,t,r){return _("c",n,e,t,r)}(t,function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["event","targetTable"]),e,r)}}),I=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},O={product:["id","sku","name","category","price","currency","brand","variant","list","position"],productList:["contents"],payment:["option"],purchase:["id","affiliation","revenue","tax","shipping","coupon","contents"]},P={AddProductImpression:{params:{evid:1100},fields:O.productList},ClickProduct:{params:{evid:1101},fields:O.product},ViewContent:{params:{evid:1102},fields:O.product},AddToCart:{params:{evid:1103},fields:[].concat(O.product,["quantity"])},RemoveFromCart:{params:{evid:1104},fields:[].concat(O.product,["quantity"])},InitiateCheckout:{params:{evid:1105},fields:O.productList},AddPaymentInfo:{params:{evid:1106},fields:O.payment},Purchase:{params:{evid:1107},fields:O.purchase},Lead:{params:{evid:1108},fields:[]}},k={price:function(n){return{name:"price",value:b(n)}},revenue:function(n){return{name:"revenue",value:b(n)}},tax:function(n){return{name:"tax",value:b(n)}},shipping:function(n){return{name:"shipping",value:b(n)}}};var E=Object.keys(P).reduce(function(n,e){return n[e]=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=I({src:76},P[e].params,function(n,e){return n.reduce(function(n,t){var r=function(n,e,t){return"function"==typeof n[e]?n[e](t):{name:e,value:t}}(k,t,e[t]),o=r.name,i=r.value;return n[o]=h(i),n},{})}(P[e].fields,n));return t.context&&t.context.appDefId&&(r.appId=t.context.appDefId),[[r]]},n},{});var w={GA_TRACKING_ID:"GA_TRACKING_ID",pagePath:"page_path",pageTitle:"page_title"};!function(){for(var n=1;n<=200;n++)w["dimension"+n]="dimension"+n,w["metric"+n]="metric"+n}();var T,j,x={PageView:function(n,e){var t=e.config,o=n.GA_TRACKING_ID,i=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["GA_TRACKING_ID"]);return[["config",o||t.trackingId,r(i,w)]]}},S={},L=void 0,G=void 0,N=function(n,e){(function(n,e){return Object.prototype.hasOwnProperty.call(n,e)})(S,n)||(S[n]=e)},R=function(n,e){Object.keys(S).forEach(function(t){S[t].call(void 0,n,function(n){return Object.assign({},n,G)}(e))})},q=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};L&&L(n,e)};t.d(e,"a",function(){return F}),t.d(e,"b",function(){return V}),t.d(e,"c",function(){return D});var F={FACEBOOK_PIXEL:"facebookPixel",GOOGLE_ANALYTICS:"googleAnalytics",GOOGLE_TAG_MANAGER:"googleTagManager",WIX_ANALYTICS:"wixAnalytics",BI_ANALYTICS:"biAnalytics",GTAG:"gtag",VK_RETARGETING:"vkRetargeting",WIX_DEVELOPERS_ANALYTICS:"wix-developers-analytics"},V=((T={})[F.FACEBOOK_PIXEL]=s,T[F.GOOGLE_ANALYTICS]=v,T[F.GOOGLE_TAG_MANAGER]=g,T[F.WIX_ANALYTICS]=C,T[F.BI_ANALYTICS]=E,T[F.GTAG]=x,T[F.VK_RETARGETING]={PageView:function(){return[[]]}},T),D=((j={})[F.WIX_DEVELOPERS_ANALYTICS]=function(n,e){if(n)return window&&(window.wixDevelopersAnalytics=window.wixDevelopersAnalytics||{register:N,triggerEvent:q}),L=n,G=function(n){return{isPremium:function(n){return n.isPremium?n.isPremium():n.isPremiumDomain()||n.isPremiumUser()}(n),userId:n.getUserId(),metaSiteId:n.getMetaSiteId()}}(e),R},j)},29:function(n,e,t){"use strict";t.r(e);var r=t(3);t.d(e,"api",function(){return r});var o=t(1);t.d(e,"channelNames",function(){return o.a}),t.d(e,"listeners",function(){return o.c})},3:function(n,e,t){"use strict";t.r(e);var r=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],o=t.appDefId,i=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(t,["appDefId"]);return e.events?((r=r||{}).config=e.config,r.context=r.context||{},r.context.appDefId=r.context.appDefId||o,e.events[n]?e.events[n](i,r):[]):[[n,i].concat(r?[r]:[])]},o=function(n,e,t,o){n.forEach(function(n){r(e,n,t,o).forEach(function(e){return n.report.apply(n,e)})})},i=t(1);var c=function(){function n(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._channels=[],this._listeners=[],this.addChannel=function(n){e.isChannelAlreadyInit(n)||(e.isChannelPredefined(n)?e.populateChannelEvents(n):e.registerChannel(n),e.isChannelValid(n)&&e._channels.push(n))},this.addListener=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Array.isArray(n)&&n.forEach(function(n){if(e.isListenerInitializerValid(n)){var r=n(e.trackEvent,t);r&&e._listeners.push(r)}})},this.trackEvent=function(n,t,r){var i=e.getReporters();o(i,n,t,r)},this.getReporters=function(){var n=e._listeners.map(function(n){return{report:n}});return[].concat(n,e._channels)},this.isChannelAlreadyInit=function(n){return e._channels.some(function(e){return e.name===n.name})},this.isListenerInitializerValid=function(n){return n&&n instanceof Function},t.forEach(this.addChannel)}return n.prototype.isChannelPredefined=function(n){return i.b[n.name]},n.prototype.populateChannelEvents=function(n){n.events=i.b[n.name],n.events.publicTracking&&n.events.publicTracking instanceof Function&&n.events.publicTracking()},n.prototype.isChannelValid=function(n){var e=n.name,t=n.report,r=n.events&&Object.values(n.events).every(function(n){return"function"==typeof n});return e&&t&&r},n.prototype.registerChannel=function(n){this.isChannelValid(n)&&(i.b[n.name]=n.events)},n}();t.d(e,"init",function(){return u}),t.d(e,"addListener",function(){return s}),t.d(e,"trackEvent",function(){return d});var a=new c,u=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(a.addChannel)},s=function(n,e){a.addListener(n,e)},d=function(n,e,t){a.trackEvent(n,e,t)}}})});
//# sourceMappingURL=analytics-event-adapter.bundle.min.js.map