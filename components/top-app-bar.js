!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="RXET")}({Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function r(t,e,r){return t.concat(e).map(function(t){return n(t,r)})}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}(t))}function o(t,e,r){var o={};return r.isMergeableObject(t)&&i(t).forEach(function(e){o[e]=n(t[e],r)}),i(e).forEach(function(i){r.isMergeableObject(e[i])&&t[i]?o[i]=function(t,e){if(!e.customMerge)return a;var n=e.customMerge(t);return"function"===typeof n?n:a}(i,r)(t[i],e[i],r):o[i]=n(e[i],r)}),o}function a(e,i,a){(a=a||{}).arrayMerge=a.arrayMerge||r,a.isMergeableObject=a.isMergeableObject||t;var s=Array.isArray(i),c=Array.isArray(e),u=s===c;return u?s?a.arrayMerge(e,i,a):o(e,i,a):n(i,a)}return a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return a(t,n,e)},{})},a}()},"HB+v":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o});var r={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},i={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},o={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},"J+RK":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("zOht"),i=n("oLRI"),o=n("HB+v"),a=n("MuGO"),s=["touchstart","pointerdown","mousedown","keydown"],c=["touchend","pointerup","mouseup","contextmenu"],u=[],d=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(t){return i.activate_(t)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.b},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=e.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(r),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(s.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):c.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;s.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),c.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&u.length>0&&u.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(u.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){u=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",d="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),p=l.startPoint,f=l.endPoint;u=p.x+"px, "+p.y+"px",d=f.x+"px, "+f.y+"px"}this.adapter_.updateCssVariable(r,u),this.adapter_.updateCssVariable(i,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(a.a)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,i=r.hasDeactivationUXRun,a=r.isActivated;(i||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},o.b.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=r.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(i.a)},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},MuGO:function(t,e,n){"use strict";var r;function i(t,e){void 0===e&&(e=!1);var n=t.CSS,i=r;if("boolean"===typeof r&&!e)return r;if(!(n&&"function"===typeof n.supports))return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var r=t.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),i}(t),e||(r=i),i}function o(t,e,n){if(!t)return{x:0,y:0};var r,i,o=e.x,a=e.y,s=o+n.left,c=a+n.top;if("touchstart"===t.type){var u=t;r=u.changedTouches[0].pageX-s,i=u.changedTouches[0].pageY-c}else{var d=t;r=d.pageX-s,i=d.pageY-c}return{x:r,y:i}}n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o})},QnW2:function(t,e,n){"use strict";var r=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(r,"$1").toLowerCase()}},RXET:function(t,e,n){"use strict";n.r(e);var r=n("iri3"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:t.className},[n("div",{staticClass:"mdc-top-app-bar__row"},[n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[n("button",{class:[t.UI_TOP_APP_BAR.SLOT_CLASS.icon,"mdc-top-app-bar__navigation-icon","mdc-icon-button"],attrs:{id:t.navIcon===t.UI_TOP_APP_BAR.EVENT.CLOSE?null:t.navId},on:{click:t.handleClick}},[t._t("nav-icon",[t._v(t._s(t.navIcon))])],2),t._v(" "),n("span",{staticClass:"mdc-top-app-bar__title"},[t._t("default",[t._v(t._s(t.title))])],2)]),t._v(" "),n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[t._t("toolbar",null,{iconClass:t.UI_TOP_APP_BAR.SLOT_CLASS.icon,itemClass:t.UI_TOP_APP_BAR.SLOT_CLASS.item})],2)])])};i._withStripped=!0;var o=n("zOht"),a=n("SBAC"),s=n("mE3l"),c={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},u={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},d={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},l=function(t){function e(n){return t.call(this,o.__assign({},e.defaultAdapter,n))||this}return o.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},e}(n("oLRI").a),p=0,f=function(t){function e(e){var n=t.call(this,e)||this;return n.wasDocked_=!0,n.isDockedShowing_=!0,n.currentAppBarOffsetTop_=0,n.isCurrentlyBeingResized_=!1,n.resizeThrottleId_=p,n.resizeDebounceId_=p,n.lastScrollPosition_=n.adapter_.getViewportScrollY(),n.topAppBarHeight_=n.adapter_.getTopAppBarHeight(),n}return o.__extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter_.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=p,t.throttledResizeHandler_()},u.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=p},u.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,r=e&&n;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return r},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-u.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},e}(l),_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled_=!1,e}return o.__extends(e,t),e.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(c.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(c.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},e}(f),h=function(t){function e(e){var n=t.call(this,e)||this;return n.isCollapsed_=!1,n}return o.__extends(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(c.SHORT_HAS_ACTION_ITEM_CLASS),this.handleTargetScroll()},e.prototype.handleTargetScroll=function(){this.adapter_.hasClass(c.SHORT_COLLAPSED_CLASS)||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&(this.adapter_.removeClass(c.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1):this.isCollapsed_||(this.adapter_.addClass(c.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0))},e}(l),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return s.a.attachTo(t)}),this.navIcon_=this.root_.querySelector(d.NAVIGATION_ICON_SELECTOR);var e=[].slice.call(this.root_.querySelectorAll(d.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(function(e){var n=t(e);return n.unbounded=!0,n}),this.scrollTarget_=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(c.FIXED_CLASS);this.root_.classList.contains(c.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},e.prototype.destroy=function(){this.iconRipples_.forEach(function(t){return t.destroy()}),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var e=this.root_.classList.contains(c.FIXED_CLASS);this.root_.classList.contains(c.SHORT_CLASS)||e||window.removeEventListener("resize",this.handleWindowResize_),t.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},getTopAppBarHeight:function(){return t.root_.clientHeight},notifyNavigationIconClicked:function(){return t.emit(d.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget_,n=t.scrollTarget_;return void 0!==e.pageYOffset?e.pageYOffset:n.scrollTop},getTotalActionItems:function(){return t.root_.querySelectorAll(d.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(c.SHORT_CLASS)?new h(e):this.root_.classList.contains(c.FIXED_CLASS)?new _(e):new f(e)},e}(a.a),m={ADJUST:{DEFAULT:"mdc-top-app-bar--fixed-adjust",PROMINENT:"mdc-top-app-bar--prominent-fixed-adjust",DENSE:"mdc-top-app-bar--dense-fixed-adjust",DENSE_PROMINENT:"mdc-top-app-bar--dense-prominent-fixed-adjust",SHORT:"mdc-top-app-bar--short-fixed-adjust"},EVENT:{NAV:"nav",CLOSE:"close"},SLOT_CLASS:{icon:n("oIJy").a.mdi,item:"mdc-top-app-bar__action-item mdc-icon-button"}},y={name:"ui-top-app-bar",props:{contentSelector:{type:String,required:!0},navId:String,navIcon:{type:String,default:"menu"},title:{type:String,default:""},fixed:{type:Boolean,default:!1},prominent:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},short:{type:Boolean,default:!1},alwaysClosed:{type:Boolean,default:!1}},data:function(){return{UI_TOP_APP_BAR:m,$topAppBar:null,contentElement:null}},computed:{className:function(){return{"mdc-top-app-bar":!0,"mdc-top-app-bar--fixed":this.fixed,"mdc-top-app-bar--prominent":this.prominent,"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--short":this.short,"mdc-top-app-bar--short-collapsed":this.alwaysClosed}}},watch:{fixed:function(){this.reset()},prominent:function(t){this.reset(),this.contentElement.classList.toggle(m.ADJUST.PROMINENT),this.updateDenseProminentFixedAdjust()},dense:function(t){this.reset(),this.contentElement.classList.toggle(m.ADJUST.DENSE),this.updateDenseProminentFixedAdjust()},short:function(t){this.reset(),this.contentElement.classList.toggle(m.ADJUST.SHORT)},alwaysClosed:function(){this.reset()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$nextTick(function(){t.createFixedAdjustElement(),t.$topAppBar=new v(t.$el)})},reset:function(){this.$topAppBar.destroy(),this.init()},createFixedAdjustElement:function(){this.contentSelector&&(this.contentElement=document.querySelector(this.contentSelector),this.contentElement.classList.contains(m.ADJUST.DEFAULT)||this.contentElement.classList.add(m.ADJUST.DEFAULT),this.short?this.contentElement.classList.add(m.ADJUST.SHORT):(this.prominent&&this.contentElement.classList.add(m.ADJUST.PROMINENT),this.dense&&this.contentElement.classList.add(m.ADJUST.DENSE),this.dense&&this.prominent&&this.contentElement.classList.add(m.ADJUST.DENSE_PROMINENT)))},updateDenseProminentFixedAdjust:function(){this.dense&&this.prominent?this.contentElement.classList.add(m.ADJUST.DENSE_PROMINENT):this.contentElement.classList.remove(m.ADJUST.DENSE_PROMINENT)},handleClick:function(){this.$emit(this.navIcon===m.EVENT.CLOSE?m.EVENT.CLOSE:m.EVENT.NAV)}}},g=n("KHd+"),b=Object(g.a)(y,i,[],!1,null,null,null);b.options.__file="src/scripts/components/app-bar/top-app-bar.vue";var S=b.exports;e.default=Object(r.a)(S)},SBAC:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("zOht"),i=n("oLRI"),o=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,r.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new i.a({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"===typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}()},gVot:function(t,e,n){"use strict";var r=n("Aqzh"),i=n.n(r),o=n("QnW2"),a=function(t){var e=t.componentProps,n=t.propName,r=t.props,a=e[n].default,s=r[n];"object"!==Object(o.a)(a)?e[n].default=s:e[n].default=i()(a,s)},s=function(t){var e=t.componentMixins,n=t.propName,r=t.props;if(e.length)for(var i=e.length;i--;)if(void 0!==e[i].props[n]){a({componentProps:e[i].props,propName:n,props:r});break}};e.a=function(t,e){Object.keys(e).forEach(function(n){t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):a({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})})}},iri3:function(t,e,n){"use strict";var r=n("kUbF"),i=n("gVot");e.a=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(i.a)(t,n),e.component(t.name,t)}};return Object(r.a)(e),e}},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},mE3l:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("zOht"),i=n("SBAC"),o=n("yvan"),a=n("rsrW"),s=n("J+RK"),c=n("MuGO"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return r.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var r=new e(t);return void 0!==n.isUnbounded&&(r.unbounded=n.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return c.b(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,Object(o.a)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,Object(o.a)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return Object(a.b)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,Object(o.a)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,Object(o.a)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new s.a(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(i.a)},oIJy:function(t,e,n){"use strict";e.a={mdi:"material-icons"}},oLRI:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}()},rsrW:function(t,e,n){"use strict";function r(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(i(n,e))return n;n=n.parentElement}return null}function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},yvan:function(t,e,n){"use strict";var r;function i(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===r||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(i){}r=n}return!!r&&{passive:!0}}n.d(e,"a",function(){return i})},zOht:function(t,e,n){(function(n){var r,i,o,a,s,c,u,d,l,p,f,_,h,v,m,y,g,b,S,A;!function(T){var E="object"===typeof n?n:"object"===typeof self?self:"object"===typeof this?this:{};function O(t,e){return t!==E&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(n,r){return t[n]=e?e(n,r):r}}void 0===(r=function(t){!function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};i=function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]]);return n},s=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=function(t,e){return function(n,r){e(n,r,t)}},u=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,e||[])).next())})},l=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},p=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},f=function(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},_=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},h=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t},v=function(t){return this instanceof v?(this.v=t,this):new v(t)},m=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(c,u):d(o[0][2],n)}catch(r){d(o[0][3],r)}var n}function c(t){s("next",t)}function u(t){s("throw",t)}function d(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}},y=function(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}},g=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=f(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){e=t[n](e),function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}(r,i,e.done,e.value)})}}},b=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},S=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},A=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",i),t("__assign",o),t("__rest",a),t("__decorate",s),t("__param",c),t("__metadata",u),t("__awaiter",d),t("__generator",l),t("__exportStar",p),t("__values",f),t("__read",_),t("__spread",h),t("__await",v),t("__asyncGenerator",m),t("__asyncDelegator",y),t("__asyncValues",g),t("__makeTemplateObject",b),t("__importStar",S),t("__importDefault",A)}(O(E,O(t)))}.apply(e,[e]))||(t.exports=r)}()}).call(this,n("yLpj"))}})});