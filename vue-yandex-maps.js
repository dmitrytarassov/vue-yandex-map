!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vueYandexMaps={})}(this,function(e){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){var a=[];return function e(t,r){if(t===r)return!0;if(t instanceof Date&&r instanceof Date)return+t==+r;if("object"!==i(t)||"object"!==i(r))return!1;if(function(e,t){for(var r=a.length;r--;)if(!(a[r][0]!==e&&a[r][0]!==t||a[r][1]!==t&&a[r][1]!==e))return!0;return!1}(t,r))return!0;a.push([t,r]);var o=Object.keys(t),n=o.length;if(Object.keys(r).length!==n)return!1;for(;n--;)if(!e(t[o[n]],r[o[n]]))return!1;return!0}(e,t)}var t=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,r,o;return t=e,(r=[{key:"$on",value:function(e,t){var r=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){r.events[e]=r.events[e].filter(function(e){return t!==e})}}},{key:"$emit",value:function(e,t){var r=this.events[e];r&&r.forEach(function(e){return e(t)})}}])&&n(t.prototype,r),o&&n(t,o),e}()),r=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routePanelControl"];function o(e){return 0===e.filter(function(e){return![].concat(r,["default"]).includes(e)}).length}function h(e,t){var r=y(e);if(!t)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}function b(e,t){var r=t?{type:"Feature",id:e.properties.markerId,geometry:{type:e.markerType,coordinates:e.coords},properties:e.properties,options:e.options}:new ymaps[e.markerType](e.coords,e.properties,e.options);return r.clusterName=e.clusterName,t||function(e,t){if(e&&"object"===i(e))for(var r in e)t.events.add(r,e[r])}(e.callbacks,r),r}var a={pluginOptions:{},data:function(){return{ymapEventBus:t,ymapId:"yandexMap"+Math.round(1e5*Math.random()),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;"}},props:{coords:{type:Array,validator:function(e){return!e.filter(function(e){return isNaN(e)}).length},required:!0},zoom:{validator:function(e){return!isNaN(e)},default:18},clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return o(e)}},detailedControls:{type:Object,validator:function(e){return o(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},zoomControl:Object,mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},mapLink:String,debug:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}}},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{getMarkersFromSlots:function(){return this.$slots.default&&this.$slots.default.map(function(e){var t=e.componentOptions&&e.componentOptions.propsData;if(t){var r={};if(t.balloonTemplate)r={balloonContentLayout:ymaps.templateLayoutFactory.createClass(t.balloonTemplate)};var o={markerId:t.markerId,markerType:t.markerType,coords:function t(e){return e.map(function(e){return Array.isArray(e)?t(e):+e})}(t.coords),hintContent:t.hintContent,markerFill:t.markerFill,circleRadius:+t.circleRadius,clusterName:t.clusterName,markerStroke:t.markerStroke,balloon:t.balloon,callbacks:t.callbacks,properties:t.properties,options:t.options,balloonOptions:r};return t.icon&&"default#image"===t.icon.layout?(o.iconLayout=t.icon.layout,o.iconImageHref=t.icon.imageHref,o.iconImageSize=t.icon.imageSize,o.iconImageOffset=t.icon.imageOffset):o.icon=t.icon,o}}).filter(function(e){return e&&e.markerType})||[]},createMarkers:function(){for(var e,f=this,d=[],t=this.getMarkersFromSlots(),r=0;r<t.length;r++){var o=t[r],n=h(o.markerType,this.useObjectManager),a={hintContent:o.hintContent,iconContent:o.icon&&o.icon.content,markerId:o.markerId},i=o.balloon?{balloonContentHeader:o.balloon.header,balloonContentBody:o.balloon.body,balloonContentFooter:o.balloon.footer}:{},s=Object.assign(a,i,o.properties),c=o.iconLayout?{iconLayout:o.iconLayout,iconImageHref:o.iconImageHref,iconImageSize:o.iconImageSize,iconImageOffset:o.iconImageOffset}:{preset:o.icon&&"islands#".concat((e=o,(e.icon.color||"blue")+(e.icon.glyph?y(e.icon.glyph):e.icon.content?"Stretchy":"")),"Icon")},l=o.markerStroke?{strokeColor:o.markerStroke.color||"0066ffff",strokeOpacity:0<=parseFloat(o.markerStroke.opacity)?parseFloat(o.markerStroke.opacity):1,strokeStyle:o.markerStroke.style,strokeWidth:0<=parseFloat(o.markerStroke.width)?parseFloat(o.markerStroke.width):1}:{},u=o.markerFill?{fill:o.markerFill.enabled||!0,fillColor:o.markerFill.color||"0066ff99",fillOpacity:0<=parseFloat(o.markerFill.opacity)?parseFloat(o.markerFill.opacity):1,fillImageHref:o.markerFill.imageHref||""}:{},p=Object.assign(c,l,u,o.balloonOptions,o.options);"Circle"===n&&(o.coords=[o.coords,o.circleRadius]);var m=b({properties:s,options:p,markerType:n,coords:o.coords,clusterName:o.clusterName,callbacks:o.callbacks},this.useObjectManager);d.push(m)}return this.placemarks&&this.placemarks.forEach(function(e){var t=e.markerType,r=void 0===t?"Placemark":t,o=e.properties,n=e.options,a=void 0===n?{}:n,i=e.coords,s=e.clusterName,c=e.callbacks,l=e.balloonTemplate,u=h(r,f.useObjectManager);if(l){var p=ymaps.templateLayoutFactory.createClass(l);a.balloonContentLayout=p}var m=b({properties:o,options:a,markerType:u,coords:i,clusterName:s,callbacks:c},f.useObjectManager);d.push(m)}),d},setMarkers:function(){var e={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};!function(e,t){var r=t.options,o=t.callbacks,n=t.map,a=t.useObjectManager,i=t.objectManagerClusterize,s={},c=[],l=!0,u=!1,p=void 0;try{for(var m,f=e[Symbol.iterator]();!(l=(m=f.next()).done);l=!0){var d=m.value;d.clusterName?s[d.clusterName]=s[d.clusterName]?[].concat(j(s[d.clusterName]),[d]):[d]:c.push(d)}}catch(e){u=!0,p=e}finally{try{l||null==f.return||f.return()}finally{if(u)throw p}}for(var y in s){var h=r[y]||{},b=o[y]||{},v=h.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";if(h.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(v),a){var k=new ymaps.ObjectManager(Object.assign({clusterize:i},h));for(var g in b)k.clusters.events.add(g,b[g]);k.add(s[y]),n.geoObjects.add(k)}else{var O=new ymaps.Clusterer(h);for(var M in b)O.events.add(M,b[M]);O.add(s[y]),n.geoObjects.add(O)}}if(c.length){var C=a?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;c.forEach(function(e){return C.add(e)}),n.geoObjects.add(C)}}(this.createMarkers(),e)},init:function(){var t=this;if(window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){if(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)}),this.zoomControl&&(this.myMap.controls.remove("zoomControl"),this.myMap.controls.add(new ymaps.control.ZoomControl(this.zoomControl))),this.detailedControls)Object.keys(this.detailedControls).forEach(function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])});!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.setMarkers(),this.$emit("map-was-initialized",this.myMap)}}},watch:{coordinates:function(e){this.myMap.panTo&&this.myMap.panTo(e)},placemarks:function(){window.ymaps&&(this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.setMarkers())},zoom:function(){this.myMap.setZoom(this.zoom)}},render:function(e){return e("section",{class:"ymap-container",ref:"mapContainer"},[e("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),e("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var e=this;this.markerObserver=new MutationObserver(function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.setMarkers()}.bind(this)),this.mapObserver=new MutationObserver(function(){this.myMap.container.fitToViewport()}.bind(this));var t=this.$refs,r=t.markersContainer,o=t.mapContainer;if(this.markerObserver.observe(r,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.mapObserver.observe(o,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),this.ymapEventBus.scriptIsNotAttached){var n=document.createElement("SCRIPT"),a=Object.assign({},this.$options.pluginOptions,this.options),i=a.apiKey,s=void 0===i?"":i,c=a.lang,l=void 0===c?"ru_RU":c,u=a.version,p=void 0===u?"2.1":u,m=this.debug?"debug":"release",f=this.mapLink||"https://api-maps.yandex.ru/".concat(p,"/?lang=").concat(l).concat(s&&"&apikey=".concat(s),"&mode=").concat(m);n.setAttribute("src",f),n.setAttribute("async",""),n.setAttribute("defer",""),document.body.appendChild(n),this.ymapEventBus.scriptIsNotAttached=!1,n.onload=function(){e.ymapEventBus.ymapReady=!0,e.ymapEventBus.$emit("scriptIsLoaded")}}this.ymapEventBus.ymapReady?ymaps.ready(this.init):this.ymapEventBus.$on("scriptIsLoaded",function(){e.ymapEventBus.updateMap=function(){e.myMap.geoObjects&&e.myMap.geoObjects.removeAll(),e.setMarkers()},ymaps.ready(e.init)})},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.markerObserver.disconnect()}},c={data:function(){return{ymapEventBus:t,unwatchArr:[]}},props:{coords:{type:Array,required:!0},hintContent:String,icon:Object,balloon:Object,markerType:{type:String,required:!0},markerFill:Object,markerStroke:Object,clusterName:String,circleRadius:{validator:function(e){return!isNaN(e)},default:1e3},callbacks:Object,balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},render:function(){},mounted:function(){var a=this;for(var e in this.$props)this.unwatchArr.push(this.$watch(e,function(e,t){return r=e,o=t,n=a.ymapEventBus,void(s(r,o)||(n.rerender&&clearTimeout(n.rerender),n.rerender=setTimeout(function(){return n.updateMap&&n.updateMap()},10)));var r,o,n}))},beforeDestroy:function(){this.unwatchArr.forEach(function(e){return e()})}};a.install=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};a.pluginOptions=t,e.component("yandex-map",a),e.component("ymap-marker",c)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(a);var l=a,u=c;e.yandexMap=l,e.ymapMarker=u,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})});
