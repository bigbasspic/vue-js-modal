!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-js-modal"]=t():e["vue-js-modal"]=t()}(global,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=11)}([function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("27d83796",i,!1,e)}},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("0e783494",i,!1,e)}},function(e,t,n){var i=n(10);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("17757f60",i,!1,e)}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";function i(e,t,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return o(i._styles)}}),i._renderStyles=o);var r=i._styles||(i._styles={});t=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=r[0],a={id:e+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var i=t[n].parts,o=0;o<i.length;o++){var r=i[o],s=r.media||"default",a=e[s];a?a.ids.indexOf(r.id)<0&&(a.ids.push(r.id),a.css+="\n"+r.css):e[s]={ids:[r.id],css:r.css,media:r.media}}}(r,t):function(e,t){for(var n=0;n<t.length;n++)for(var i=t[n].parts,o=0;o<i.length;o++){var r=i[o];e[r.id]={ids:[r.id],css:r.css,media:r.media}}}(r,t)}}function o(e){var t="";for(var n in e){var i=e[n];t+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return t}n.r(t),n.d(t,"default",(function(){return i}))},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-modal-resizer {\r\n  display: block;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999999;\r\n  background: transparent;\r\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  background: transparent;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 10px solid #ddd;\r\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\r\n  border-bottom: 10px solid #369be9;\n}\r\n",""])},function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.v--modal-block-scroll {\r\n  overflow: hidden;\r\n  width: 100vw;\n}\n.v--modal-overlay {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  z-index: 999;\r\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\r\n  margin-bottom: 2px;\n}\n.v--modal {\r\n  background-color: white;\r\n  text-align: left;\r\n  border-radius: 3px;\r\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\r\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  left: 0;\r\n  top: 0;\n}\n.v--modal-top-right {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\n}\n.overlay-fade-enter-active,\r\n.overlay-fade-leave-active {\r\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\r\n.overlay-fade-leave-active {\r\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\r\n.nice-modal-fade-leave-active {\r\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\r\n.nice-modal-fade-leave-active {\r\n  opacity: 0;\r\n  transform: translateY(-20px);\n}\r\n",""])},function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-dialog div {\r\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\r\n  width: 100%;\r\n  height: 100%;\n}\n.vue-dialog .dialog-content {\r\n  flex: 1 0 auto;\r\n  width: 100%;\r\n  padding: 15px;\r\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\r\n  font-weight: 600;\r\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\r\n  display: flex;\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\r\n  width: 100%;\r\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\r\n  font-size: 12px !important;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  line-height: 40px;\r\n  height: 40px;\r\n  color: inherit;\r\n  font: inherit;\r\n  outline: none;\n}\n.vue-dialog-button:hover {\r\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\r\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\r\n  border-left: 1px solid #eee;\n}\r\n",""])},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.overlayTransition}},[e.visibility.overlay?n("div",{ref:"overlay",class:e.overlayClass,attrs:{"aria-expanded":e.visibility.overlay.toString(),"data-modal":e.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)},touchstart:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)}}},[n("div",{staticClass:"v--modal-top-right"},[e._t("top-right")],2),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeTransitionEnter,"after-enter":e.afterTransitionEnter,"after-leave":e.afterTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight},on:{resize:e.handleModalResize}}):e._e()],2):e._e()])],1)]):e._e()])};i._withStripped=!0;var o=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className},[])};o._withStripped=!0;const r=((e=0)=>()=>(e++).toString())(),s=(e,t,n)=>n<e?e:n>t?t:n;function a(e,t,n,i,o,r,s,a){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}var l=a({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0}},data:()=>({clicked:!1,size:{}}),mounted(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault()},stop(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove(e){this.resize(e)},resize(e){var t=this.$el.parentElement;if(t){var n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop;n=s(this.minWidth,window.innerWidth,n),i=s(this.minHeight,window.innerHeight,i),this.size={width:n,height:i},t.style.width=n+"px",t.style.height=i+"px",this.$emit("resize",{element:t,size:this.size})}}}},o,[],!1,(function(e){var t=n(5);t.__inject__&&t.__inject__(e)}),null,"3c3a03f4");l.options.__file="src/Resizer.vue";var d=l.exports;const u=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}];const c=e=>{switch(typeof e){case"number":return{type:"px",value:e};case"string":return(e=>{if("auto"===e)return{type:e,value:0};for(var t=0;t<u.length;t++){const n=u[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}})(e);default:return{type:"",value:e}}},h=e=>{if("string"==typeof e){let t=c(e);return("%"===t.type||"px"===t.type)&&t.value>0}return e>=0};alert("hello");var p=a({name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:e=>e>=0},minHeight:{type:Number,default:0,validator:e=>e>=0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:h},height:{type:[Number,String],default:300,validator:e=>"auto"===e||h(e)},pivotX:{type:Number,default:.5,validator:e=>e>=0&&e<=1},pivotY:{type:Number,default:.5,validator:e=>e>=0&&e<=1}},components:{Resizer:d},data:()=>({visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null}),created(){this.setInitialSize()},beforeMount(){if(E.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn(`Modal "${this.name}" has scrollable flag set to true `+`but height is not "auto" (${this.height})`),this.isAutoHeight){const e=(()=>{if("undefined"!=typeof window){const e=["","WebKit","Moz","O","Ms"];for(let t=0;t<e.length;t++){let n=e[t]+"MutationObserver";if(n in window)return window[n]}}return!1})();e&&(this.mutationObserver=new e(e=>{this.updateRenderedHeight()}))}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy(){E.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{isAutoHeight(){return"auto"===this.modal.heightType},position(){const{window:e,shift:t,pivotX:n,pivotY:i,trueModalWidth:o,trueModalHeight:r}=this,a=e.width-o,l=e.height-r,d=t.left+n*a,u=t.top+i*l;return{left:parseInt(s(0,a,d)),top:parseInt(s(0,l,u))}},trueModalWidth(){const{window:e,modal:t,adaptive:n,minWidth:i,maxWidth:o}=this,r="%"===t.widthType?e.width/100*t.width:t.width,a=Math.min(e.width,o);return n?s(i,a,r):r},trueModalHeight(){const{window:e,modal:t,isAutoHeight:n,adaptive:i,maxHeight:o}=this,r="%"===t.heightType?e.height/100*t.height:t.height;if(n)return this.modal.renderedHeight;const a=Math.min(e.height,o);return i?s(this.minHeight,a,r):r},overlayClass(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass(){return["v--modal-box",this.classes]},modalStyle(){return alert("myModal1"),{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}}},watch:{visible(e){e?(this.visibility.overlay=!0,setTimeout(()=>{this.visibility.modal=!0,this.$nextTick(()=>{this.addDraggableListeners(),this.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(()=>{this.visibility.overlay=!1,this.$nextTick(()=>{this.removeDraggableListeners(),this.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent(e,t,n){if(this.name===e){const e=void 0===t?!this.visible:t;this.toggle(e,n)}},setInitialSize(){const{modal:e}=this,t=c(this.width),n=c(this.height);alert("myModal2"),e.width=t.value,e.widthType=t.type,e.height=n.value,e.heightType=n.type},handleEscapeKeyUp(e){27===e.which&&this.visible&&this.$modal.hide(this.name)},handleWindowResize(){alert("myModal3"),this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent(e={}){return((e={})=>({id:r(),timestamp:Date.now(),canceled:!1,...e}))({name:this.name,ref:this.$refs.modal,...e})},handleModalResize(e){alert("myModal4"),this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;const{size:t}=this.modal;this.$emit("resize",this.createModalEvent({size:t}))},toggle(e,t){const{reset:n,scrollable:i,visible:o}=this;if(o===e)return;const r=o?"before-close":"before-open";"before-open"===r?("undefined"==typeof document||!document.activeElement||"BODY"===document.activeElement.tagName||!document.activeElement.blur||document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");let s=!1;const a=this.createModalEvent({stop:()=>{s=!0},state:e,params:t});this.$emit(r,a),s||(this.visible=e)},getDraggableElement(){const e="string"!=typeof this.draggable?".v--modal-box":this.draggable;return e?this.$refs.overlay.querySelector(e):null},handleBackgroundClick(){this.clickToClose&&this.toggle(!1)},callAfterEvent(e){e?this.connectObserver():this.disconnectObserver();const t=e?"opened":"closed",n=this.createModalEvent({state:e});this.$emit(t,n)},addDraggableListeners(){if(!this.draggable)return;const e=this.getDraggableElement();if(e){let t=0,n=0,i=0,o=0;const r=e=>e.touches&&e.touches.length>0?e.touches[0]:e,s=e=>{let s=e.target;if(s&&"INPUT"===s.nodeName)return;let{clientX:d,clientY:u}=r(e);document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",l),document.addEventListener("touchend",l),t=d,n=u,i=this.shift.left,o=this.shift.top},a=e=>{let{clientX:s,clientY:a}=r(e);this.shift.left=i+s-t,this.shift.top=o+a-n,e.preventDefault()},l=e=>{this.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchend",l),e.preventDefault()};e.addEventListener("mousedown",s),e.addEventListener("touchstart",s)}},removeDraggableListeners(){},updateRenderedHeight(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter(){this.connectObserver()},afterTransitionEnter(){},afterTransitionLeave(){},ensureShiftInWindowBounds(){const{window:e,shift:t,pivotX:n,pivotY:i,trueModalWidth:o,trueModalHeight:r}=this,a=e.width-o,l=e.height-r,d=t.left+n*a,u=t.top+i*l;this.shift.left-=d-s(0,a,d),this.shift.top-=u-s(0,l,u)}}},i,[],!1,(function(e){var t=n(7);t.__inject__&&t.__inject__(e)}),null,"4db32463");p.options.__file="src/Modal.vue";var m=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:e.width,"pivot-y":.3,adaptive:!0,clickToClose:e.clickToClose,transition:e.transition},on:{"before-open":e.beforeOpened,"before-close":e.beforeClosed,opened:function(t){return e.$emit("opened",t)},closed:function(t){return e.$emit("closed",t)}}},[n("div",{staticClass:"dialog-content"},[e.params.title?n("div",{staticClass:"dialog-c-title",domProps:{innerHTML:e._s(e.params.title||"")}}):e._e(),e._v(" "),e.params.component?n(e.params.component,e._b({tag:"component"},"component",e.params.props,!1)):n("div",{staticClass:"dialog-c-text",domProps:{innerHTML:e._s(e.params.text||"")}})],1),e._v(" "),e.buttons?n("div",{staticClass:"vue-dialog-buttons"},e._l(e.buttons,(function(t,i){return n("button",{key:i,class:t.class||"vue-dialog-button",style:e.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:e._s(t.title)},on:{click:function(t){return t.stopPropagation(),e.click(i,t)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])})),0):n("div",{staticClass:"vue-dialog-buttons-none"})])};f._withStripped=!0;var v=a({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:()=>({params:{},defaultButtons:[{title:"CLOSE"}]}),computed:{buttons(){return this.params.buttons||this.defaultButtons},buttonStyle(){return{flex:`1 1 ${100/this.buttons.length}%`}}},methods:{beforeOpened(e){window.addEventListener("keyup",this.onKeyUp),this.params=e.params||{},this.$emit("before-opened",e)},beforeClosed(e){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",e)},click(e,t,n="click"){const i=this.buttons[e];i&&"function"==typeof i.handler?i.handler(e,t,{source:n}):this.$modal.hide("dialog")},onKeyUp(e){if(13===e.which&&this.buttons.length>0){const t=1===this.buttons.length?0:this.buttons.findIndex(e=>e.default);-1!==t&&this.click(t,e,"keypress")}}}},f,[],!1,(function(e){var t=n(9);t.__inject__&&t.__inject__(e)}),null,"6ee3ea02");v.options.__file="src/Dialog.vue";var g=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"modals-container"}},e._l(e.modals,(function(t){return n("modal",e._g(e._b({key:t.id,on:{closed:function(n){return e.remove(t.id)}}},"modal",t.modalAttrs,!1),t.modalListeners),[n(t.component,e._g(e._b({tag:"component",on:{close:function(n){return e.$modal.hide(t.modalAttrs.name)}}},"component",t.componentAttrs,!1),e.$listeners))],1)})),1)};b._withStripped=!0;var y=a({data:()=>({modals:[]}),created(){this.$root._dynamicContainer=this},methods:{add(e,t={},n={},i={}){const o=r(),s=n.name||"_dynamic_modal_"+o;this.modals.push({id:o,modalAttrs:{...n,name:s},modalListeners:i,component:e,componentAttrs:t}),this.$nextTick(()=>{this.$modal.show(s)})},remove(e){const t=this.modals.findIndex(t=>t.id===e);-1!==t&&this.modals.splice(t,1)}}},b,[],!1,null,null,"1a4988f1");y.options.__file="src/ModalsContainer.vue";var w=y.exports;n.d(t,"getModalsContainer",(function(){return _}));const _=(e,t,n)=>{if(!n._dynamicContainer&&t.injectModalsContainer){const t=(()=>{const e=document.createElement("div");return document.body.appendChild(e),e})();new e({parent:n,render:e=>e(w)}).$mount(t)}return n._dynamicContainer},x={install(e,t={}){if(this.installed)return;this.installed=!0,this.event=new e,this.rootInstance=null;const n=t.componentName||"Modal",i=t.dynamicDefaults||{};e.prototype.$modal={show(n,...o){switch(typeof n){case"string":return((e,t)=>{x.event.$emit("toggle",e,!0,t)})(n,...o);case"object":return t.dynamic?((n,o,r,s)=>{const a=r&&r.root?r.root:x.rootInstance,l=_(e,t,a);l?l.add(n,{...i,...o},r,s):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")})(n,...o):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals")}},hide(e,t){x.event.$emit("toggle",e,!1,t)},toggle(e,t){x.event.$emit("toggle",e,void 0,t)}},e.component(n,m),t.dialog&&e.component("VDialog",g),t.dynamic&&(e.component("ModalsContainer",w),e.mixin({beforeMount(){null===x.rootInstance&&(x.rootInstance=this.$root)}}))}};var E=t.default=x}])}));