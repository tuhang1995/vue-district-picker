!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define("VueDistrictPicker",[],i):"object"==typeof exports?exports.VueDistrictPicker=i():t.VueDistrictPicker=i()}("undefined"!=typeof self?self:this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/dist/",i(i.s=3)}([function(t,i){t.exports=function(t,i,e,n,a,s){var r,o=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(r=t,o=t.default);var c="function"==typeof o?o.options:o;i&&(c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),a&&(c._scopeId=a);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=l,c.render=function(t,i){return l.call(i),d(t,i)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:r,exports:o,options:c}}},function(t,i,e){"use strict";var n=e(6),a=e(9),s=e.n(a),r=e(10),o=e.n(r),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};i.a={name:"VueDistrictPicker",components:{Navbar:n.a},props:{citydata:{type:Object},show:{type:Boolean,default:!1},zIndex:[Number],areaData:{type:Array,default:function(){return["340000","340100","340103"]}}},computed:{showThis:{set:function(t){this.$emit("update:show",t)},get:function(){return this.show}}},data:function(){return{changeCityData:!1,province:{data:this.citydata[86],index:0,target:null,touch:null,keys:[],id:"",value:""},city:{data:null,index:0,target:null,touch:null,keys:[],cityTouch:null,id:"",value:""},area:{data:null,index:0,target:null,touch:null,keys:[],area:null,id:"",value:""}}},created:function(){this.province.keys=Object.keys(this.province.data),this.province.id=this.areaData[0],this.city.id=this.areaData[1],this.area.id=this.areaData[2],this.areaData.length&&(this.province.index=this.idToIndex("86",this.areaData[0]),this.city.index=this.areaData[1]&&this.idToIndex(this.areaData[0],this.areaData[1]),this.area.index=this.areaData[2]&&this.idToIndex(this.areaData[1],this.areaData[2]))},mounted:function(){var t=this.province,i=this.city,e=this.area;t.target=this.$refs.province,t.touch=this.$refs.provinceTarget,i.target=this.$refs.city,i.touch=this.$refs.cityTarget,e.target=this.$refs.area,e.touch=this.$refs.areaTarget,o()(this.province.target),o()(this.city.target),o()(this.area.target),this.initialProvince(),this.initialCity(this.city.id),this.initialArea(this.area.id)},methods:{initialProvince:function(){var t=this;this.province.id=this.indexToId("86",this.province.index),this.province.value=this.getNameById("86",this.province.id);var i=this.config(this.province.touch,this.province.target,this.province.index,function(){t.province.index=e.currentPage,t.city.index=0,t.area.index=0,t.province.id=t.indexToId("86",t.province.index),t.province.value=t.getNameById("86",t.province.id),t.city.id=t.indexToId(t.province.id,0),t.area.id=t.indexToId(t.city.id,0),t.initialCity(t.city.id),t.initialArea(t.area.id)}),e=new s.a(i)},initialCity:function(t){var i=this;this.city.data=this.citydata[this.province.id]&&h({},this.citydata[this.province.id]),this.city.id=t,this.city.value=this.getNameById(this.province.id,this.city.id),this.cityTouch&&(this.cityTouch.stop(),this.cityTouch.destroy(),this.city.target.translateY=0),this.city.data&&this.$nextTick(function(){var t=i.config(i.city.touch,i.city.target,i.city.index,function(){i.city.index=i.cityTouch.currentPage,i.area.index=0,i.city.id=i.indexToId(i.province.id,i.city.index),i.city.value=i.getNameById(i.province.id,i.city.id),i.area.id=i.indexToId(i.city.id,0),i.initialArea(i.area.id)});i.cityTouch=new s.a(t)})},initialArea:function(t){var i=this;this.area.data=this.citydata[this.city.id]&&h({},this.citydata[this.city.id]),this.area.id=t,this.area.value=this.getNameById(this.city.id,this.area.id),this.areaTouch&&(this.areaTouch.stop(),this.areaTouch.destroy(),this.area.target.translateY=0),this.area.data&&this.$nextTick(function(){var t=i.config(i.area.touch,i.area.target,i.area.index,function(){i.area.index=i.areaTouch.currentPage,i.area.id=i.indexToId(i.city.id,i.area.index),i.area.value=i.getNameById(i.city.id,i.area.id)});i.areaTouch=new s.a(t)})},idToIndex:function(t,i){var e=this.citydata[t]&&Object.keys(this.citydata[t]).indexOf(i);return~e?e:0},indexToId:function(t,i){return this.citydata[t]&&Object.keys(this.citydata[t])[i]},getNameById:function(t,i){return this.citydata[t]&&this.citydata[t][i]},config:function(t,i,e,n,a){return{touch:t,target:i,vertical:"true",property:"translateY",initialValue:35*-e,min:-(i.getBoundingClientRect().height-35),max:0,bindSelf:!0,lockDirection:!0,step:35,touchStart:function(){a&&a()},animationEnd:function(t){n&&n()}}},cancel:function(){this.$emit("update:show",!this.show)},confirm:function(){var t=this.province,i=this.city,e=this.area;this.$emit("confirm",[t.id,i.id,e.id],[t.value,i.value,e.value]),this.$emit("update:show",!this.show)}}}},function(t,i,e){"use strict";i.a={name:"bar",props:{mode:{type:String,default:"side"},direction:{type:String,default:"left"},isExpand:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},zIndex:{type:String,default:"5000"}},methods:{close:function(){this.$emit("update:isExpand",!this.isExpand)}}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(4);i.default={install:function(t,i){t.component(n.a.name,n.a)}}},function(t,i,e){"use strict";function n(t){e(5)}var a=e(1),s=e(11),r=e(0),o=n,h=r(a.a,s.a,!1,o,null,null);i.a=h.exports},function(t,i){},function(t,i,e){"use strict";function n(t){e(7)}var a=e(2),s=e(8),r=e(0),o=n,h=r(a.a,s.a,!1,o,null,null);i.a=h.exports},function(t,i){},function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"bar-content",class:[t.mode,t.direction,{active:t.isExpand}],style:{zIndex:t.zIndex}},[t._t("default")],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mask,expression:"mask"}],staticClass:"tf-mask",class:{active:t.isExpand},on:{click:t.close}})])},a=[],s={render:n,staticRenderFns:a};i.a=s},function(t,i,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),function(){function e(t,i,e){t.addEventListener(i,e,!1)}function a(t,i,e){t.removeEventListener(i,e,!1)}function s(t){return Math.sqrt(1-Math.pow(t-1,2))}function r(t){return 1-Math.sqrt(1-t*t)}function o(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}var h,c,l,u=document.createElement("div").style;if("transform"in u)"transform",h="transitionend",c="transitionDuration",l="transitionTimingFunction";else{if(!("webkitTransform"in u))throw"please use a modern browser";"webkitTransform",h="webkitTransitionEnd",c="webkitTransitionDuration",l="webkitTransitionTimingFunction"}var d=function(t){this.element="string"==typeof t.touch?document.querySelector(t.touch):t.touch,this.target=this._getValue(t.target,this.element),this.vertical=this._getValue(t.vertical,!0),this.property=t.property,this.tickID=0,this.css=t.css||!1,this.initialValue=this._getValue(t.initialValue,this.target[this.property]),this.target[this.property]=this.initialValue,this.fixed=this._getValue(t.fixed,!1),this.sensitivity=this._getValue(t.sensitivity,1),this.moveFactor=this._getValue(t.moveFactor,1),this.factor=this._getValue(t.factor,1),this.outFactor=this._getValue(t.outFactor,.3),this.min=t.min,this.max=t.max,this.deceleration=6e-4,this.maxRegion=this._getValue(t.maxRegion,600),this.springMaxRegion=this._getValue(t.springMaxRegion,60),this.maxSpeed=t.maxSpeed,this.hasMaxSpeed=!(void 0===this.maxSpeed),this.lockDirection=this._getValue(t.lockDirection,!0);var i=function(){};if(this.change=t.change||i,this.touchEnd=t.touchEnd||i,this.touchStart=t.touchStart||i,this.touchMove=t.touchMove||i,this.touchCancel=t.touchCancel||i,this.reboundEnd=t.reboundEnd||i,this.animationEnd=t.animationEnd||i,this.correctionEnd=t.correctionEnd||i,this.tap=t.tap||i,this.pressMove=t.pressMove||i,this.forbiden=t.forbiden||!1,this.preventDefault=this._getValue(t.preventDefault,!0),this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},this.hasMin=!(void 0===this.min),this.hasMax=!(void 0===this.max),this.hasMin&&this.hasMax&&this.min>this.max)throw"the min value can't be greater than the max value.";this.isTouchStart=!1,this.step=t.step,this.inertia=this._getValue(t.inertia,!0),this._calculateIndex(),this.eventTarget=window,t.bindSelf&&(this.eventTarget=this.element),this._moveHandler=this._move.bind(this),this._startHandler=this._start.bind(this),this._endHandler=this._end.bind(this),this._cancelHandler=this._cancel.bind(this),this._transitionEndHandler=this._transitionEnd.bind(this),e(this.element,"touchstart",this._startHandler),e(this.eventTarget,"touchend",this._endHandler),e(this.eventTarget,"touchcancel",this._cancelHandler),this.css&&e(this.eventTarget,h,this._transitionEndHandler),this.eventTarget.addEventListener("touchmove",this._moveHandler,{passive:!1,capture:!1});this.x1=this.x2=this.y1=this.y2=null};d.prototype={intoView:function(t,i){var e=t.getBoundingClientRect(),n=this.vertical?e.height:e.width,a=i.getBoundingClientRect();return(this.vertical?a.top:a.left)<=n},destroy:function(){a(this.element,"touchstart",this._startHandler),a(this.eventTarget,"touchend",this._endHandler),a(this.eventTarget,"touchcancel",this._cancelHandler),this.eventTarget.removeEventListener("touchmove",this._moveHandler,{passive:!1,capture:!1})},_transitionEnd:function(){if(this._triggerTransitionEnd){var t=this.scroller[this.property];return t<this.min?void this.to(this.min,600,s):t>this.max?void this.to(this.max,600,s):void(this.step?(this.correction(),this._endCallbackTag&&(this._endTimeout=setTimeout(function(){this.animationEnd.call(this,t),cancelAnimationFrame(this.tickID)}.bind(this),400),this._endCallbackTag=!1)):(this.animationEnd.call(this,t),cancelAnimationFrame(this.tickID)))}},_getValue:function(t,i){return void 0===t?i:t},stop:function(){cancelAnimationFrame(this.tickID),this._calculateIndex()},_start:function(t){this.isTouchStart=!0,this.touchStart.call(this,t,this.target[this.property]),cancelAnimationFrame(this.tickID),this._calculateIndex(),this.startTime=(new Date).getTime(),this.x1=this.preX=t.touches[0].pageX,this.y1=this.preY=t.touches[0].pageY,this.start=this.vertical?this.preY:this.preX,this._firstTouchMove=!0,this._preventMove=!1},_move:function(t){if(this.preventDefault&&!o(t.target,this.preventDefaultException)&&t.preventDefault(),this.isTouchStart&&!this.forbiden){var i=t.touches.length,e=t.touches[0].pageX,n=t.touches[0].pageY;if(this._firstTouchMove&&this.lockDirection){var a=Math.abs(e-this.x1)-Math.abs(n-this.y1);a>0&&this.vertical?this._preventMove=!0:a<0&&!this.vertical&&(this._preventMove=!0),this._firstTouchMove=!1}if(!this._preventMove){var s=(this.vertical?n-this.preY:e-this.preX)*this.sensitivity,r=this.moveFactor;this.hasMax&&this.target[this.property]>this.max&&s>0?r=this.outFactor:this.hasMin&&this.target[this.property]<this.min&&s<0&&(r=this.outFactor),s*=r,this.preX=e,this.preY=n,this.fixed||(this.target[this.property]+=s),this.change.call(this,this.target[this.property]);var h=(new Date).getTime();h-this.startTime>300&&(this.startTime=h,this.start=this.vertical?this.preY:this.preX),this.touchMove.call(this,t,this.target[this.property])}1===i&&(null!==this.x2?(t.deltaX=e-this.x2,t.deltaY=n-this.y2):(t.deltaX=0,t.deltaY=0)),this.x2=e,this.y2=n}},_cancel:function(t){var i=this.target[this.property];this.touchCancel.call(this,t,i),this._end(t)},to:function(t,i,e){this._to(t,this._getValue(i,600),e||s,this.change,function(t){this._calculateIndex(),this.reboundEnd.call(this,t),this.animationEnd.call(this,t,this.currentPage)}.bind(this))},_calculateIndex:function(){this.hasMax&&this.hasMin&&(this.currentPage=Math.round((this.max-this.target[this.property])/this.step))},_end:function(t){if(this.isTouchStart){this.isTouchStart=!1;var i=this,e=this.target[this.property],n=Math.abs(t.changedTouches[0].pageX-this.x1)<30&&Math.abs(t.changedTouches[0].pageY-this.y1)<30;if(n&&this.tap.call(this,t,e),!1===this.touchEnd.call(this,t,e,this.currentPage))return;if(this.hasMax&&e>this.max)this._to(this.max,200,s,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(this.hasMin&&e<this.min)this._to(this.min,200,s,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(!this.inertia||n||this._preventMove)i._correction();else{var a=(new Date).getTime()-this.startTime;if(a<300){var o=((this.vertical?t.changedTouches[0].pageY:t.changedTouches[0].pageX)-this.start)*this.sensitivity,h=Math.abs(o)/a,c=this.factor*h;this.hasMaxSpeed&&c>this.maxSpeed&&(c=this.maxSpeed);var l=e+c*c/(2*this.deceleration)*(o<0?-1:1),u=1;l<this.min?l<this.min-this.maxRegion?(u=r((e-this.min+this.springMaxRegion)/(e-l)),l=this.min-this.springMaxRegion):(u=r((e-this.min+this.springMaxRegion*(this.min-l)/this.maxRegion)/(e-l)),l=this.min-this.springMaxRegion*(this.min-l)/this.maxRegion):l>this.max&&(l>this.max+this.maxRegion?(u=r((this.max+this.springMaxRegion-e)/(l-e)),l=this.max+this.springMaxRegion):(u=r((this.max+this.springMaxRegion*(l-this.max)/this.maxRegion-e)/(l-e)),l=this.max+this.springMaxRegion*(l-this.max)/this.maxRegion));var d=Math.round(h/i.deceleration)*u;i._to(Math.round(l),d,s,i.change,function(t){i.hasMax&&i.target[i.property]>i.max?(cancelAnimationFrame(i.tickID),i._to(i.max,600,s,i.change,i.animationEnd)):i.hasMin&&i.target[i.property]<i.min?(cancelAnimationFrame(i.tickID),i._to(i.min,600,s,i.change,i.animationEnd)):i._correction()})}else i._correction()}}this.x1=this.x2=this.y1=this.y2=null},_to:function(t,i,e,n,a){if(!this.fixed){var s=this.target,r=this.property,o=this;if(this.css)s.style[c]=this._getValue(i,600)+"ms",s.style[l]="cubic-bezier(0.25, 0.8, 0.25, 1)",s[r]=t,n&&n.call(o,s[r],this.currentPage),this._calculateIndex(),a();else{var h=s[r],u=t-h,d=new Date;!function c(){var l=new Date-d;if(l>=i)return s[r]=t,cancelAnimationFrame(o.tickID),o._calculateIndex(),void(a&&a.call(o,t));s[r]=u*e(l/i)+h,n&&n.call(o,s[r],o.currentPage),o.tickID=requestAnimationFrame(c)}()}}},_correction:function(){if(void 0!==this.step){var t=this.target,i=this.property,e=t[i],n=Math.floor(Math.abs(e/this.step)),a=e%this.step;Math.abs(a)>this.step/2?this._to((e<0?-1:1)*(n+1)*this.step,400,s,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this)):this._to((e<0?-1:1)*n*this.step,400,s,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))}}},void 0!==t&&"object"===n(i)?t.exports=d:window.AlloyTouch=d}()},function(t,i,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function e(t,i,e){for(var n=0,s=i.length;n<s;n++){a(t,i[n],e)}}function a(t,i,e){Object.defineProperty(t,i,{get:function(){return this["_"+i]},set:function(t){this["_"+i]=t,e()}})}function s(t){return"object"===("undefined"==typeof HTMLElement?"undefined":n(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":n(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,i){if(!t.hasOwnProperty("translateX")){var n=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],a=s(t);i||n.push("perspective"),e(t,n,function(){var e=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),n=(i?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(e.elements).join(",")+")";a?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=n:t.transform=n}),t.matrix3d=new h,i||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}var o=.017453292519943295,h=function(t,i,e,n,a,s,r,o,h,c,l,u,d,p,f,m){this.elements=window.Float32Array?new Float32Array(16):[];var v=this.elements;v[0]=void 0!==t?t:1,v[4]=i||0,v[8]=e||0,v[12]=n||0,v[1]=a||0,v[5]=void 0!==s?s:1,v[9]=r||0,v[13]=o||0,v[2]=h||0,v[6]=c||0,v[10]=void 0!==l?l:1,v[14]=u||0,v[3]=d||0,v[7]=p||0,v[11]=f||0,v[15]=void 0!==m?m:1};h.prototype={set:function(t,i,e,n,a,s,r,o,h,c,l,u,d,p,f,m){var v=this.elements;return v[0]=t,v[4]=i,v[8]=e,v[12]=n,v[1]=a,v[5]=s,v[9]=r,v[13]=o,v[2]=h,v[6]=c,v[10]=l,v[14]=u,v[3]=d,v[7]=p,v[11]=f,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,i){var e=t.elements,n=this.elements,a=e[0],s=e[4],r=e[8],o=e[12],h=e[1],c=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],m=e[14],v=e[3],y=e[7],g=e[11],x=e[15],_=i[0],T=i[1],w=i[2],b=i[3],M=i[4],k=i[5],E=i[6],D=i[7],X=i[8],Y=i[9],I=i[10],C=i[11],S=i[12],F=i[13],A=i[14],R=i[15];return n[0]=a*_+s*M+r*X+o*S,n[4]=a*T+s*k+r*Y+o*F,n[8]=a*w+s*E+r*I+o*A,n[12]=a*b+s*D+r*C+o*R,n[1]=h*_+c*M+l*X+u*S,n[5]=h*T+c*k+l*Y+u*F,n[9]=h*w+c*E+l*I+u*A,n[13]=h*b+c*D+l*C+u*R,n[2]=d*_+p*M+f*X+m*S,n[6]=d*T+p*k+f*Y+m*F,n[10]=d*w+p*E+f*I+m*A,n[14]=d*b+p*D+f*C+m*R,n[3]=v*_+y*M+g*X+x*S,n[7]=v*T+y*k+g*Y+x*F,n[11]=v*w+y*E+g*I+x*A,n[15]=v*b+y*D+g*C+x*R,this},_rounded:function(t,i){return i=Math.pow(10,i||15),Math.round(t*i)/i},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,i,e,n,a,s,r,h,c,l,u,d,p,f){var m=r*o,v=this._rounded(Math.cos(m)),y=this._rounded(Math.sin(m)),g=h*o,x=this._rounded(Math.cos(g)),_=this._rounded(Math.sin(g)),T=c*o,w=this._rounded(Math.cos(-1*T)),b=this._rounded(Math.sin(-1*T));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,v,y,i,0,-y,v,e,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([x,0,_,0,0,1,0,0,-_,0,x,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([w*n,b*a,0,0,-b*n,w*a,0,0,0,0,1*s,0,0,0,0,1])),(l||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(l*o)),this._rounded(Math.sin(l*o)),0,0,-1*this._rounded(Math.sin(u*o)),this._rounded(Math.cos(u*o)),0,0,0,0,1,0,0,0,0,1])),(d||p||f)&&(this.elements[12]-=d*this.elements[0]+p*this.elements[4]+f*this.elements[8],this.elements[13]-=d*this.elements[1]+p*this.elements[5]+f*this.elements[9],this.elements[14]-=d*this.elements[2]+p*this.elements[6]+f*this.elements[10]),this}};var c=function(t,i,e,n,a,s){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==n?1:n,this.tx=a||0,this.ty=s||0,this};c.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,i,e,n,a,s,r,h,c){if(a%360)var l=a*o,u=Math.cos(l),d=Math.sin(l);else u=1,d=0;return s||r?(s*=o,r*=o,this.append(Math.cos(r),Math.sin(r),-Math.sin(s),Math.cos(s),t,i),this.append(u*e,d*e,-d*n,u*n,0,0)):this.append(u*e,d*e,-d*n,u*n,t,i),(h||c)&&(this.tx-=h*this.a+c*this.c,this.ty-=h*this.b+c*this.d),this},append:function(t,i,e,n,a,s){var r=this.a,o=this.b,h=this.c,c=this.d;return this.a=t*r+i*h,this.b=t*o+i*c,this.c=e*r+n*h,this.d=e*o+n*c,this.tx=a*r+s*h+this.tx,this.ty=a*o+s*c+this.ty,this},initialize:function(t,i,e,n,a,s){return this.a=t,this.b=i,this.c=e,this.d=n,this.tx=a,this.ty=s,this},setValues:function(t,i,e,n,a,s){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==n?1:n,this.tx=a||0,this.ty=s||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},r.getMatrix3D=function(t){var i={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new h).identity().appendTransform(i.translateX,i.translateY,i.translateZ,i.scaleX,i.scaleY,i.scaleZ,i.rotateX,i.rotateY,i.rotateZ,i.skewX,i.skewY,i.originX,i.originY,i.originZ).elements},r.getMatrix2D=function(t){var i={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new c).identity().appendTransform(i.translateX,i.translateY,i.scaleX,i.scaleY,i.rotation,i.skewX,i.skewY,i.originX,i.originY)},void 0!==t&&"object"===n(i)?t.exports=r:window.Transform=r}()},function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("navbar",{attrs:{isExpand:t.showThis,mask:"",mode:"foot",direction:"bottom",zIndex:t.zIndex},on:{"update:isExpand":function(i){t.showThis=i}}},[e("div",{staticClass:"city-selector-box"},[e("div",{staticClass:"city-selector-header mr-flex  mr-1px-b mr-1px-t"},[e("span",{staticClass:"header-cancel",on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("span",{staticClass:"header-confirm",on:{click:t.confirm}},[t._v("确认")])]),t._v(" "),e("div",{staticClass:"city-selector-body"},[e("div",{staticClass:"top-mask mr-1px-b"}),t._v(" "),e("div",{staticClass:"bottom-mask mr-1px-t"}),t._v(" "),e("div",{staticClass:"main-body mr-flex"},[e("div",{staticClass:"mr-flex1 wheel"},[e("ul",{ref:"province"},t._l(t.province.data,function(i){return e("li",{key:i},[t._v(t._s(i))])})),t._v(" "),e("div",{ref:"provinceTarget",staticClass:"wheel-touch"})]),t._v(" "),e("div",{staticClass:"mr-flex1 wheel"},[e("ul",{ref:"city"},t._l(t.city.data,function(i){return e("li",{key:i},[t._v(t._s(i))])})),t._v(" "),e("div",{ref:"cityTarget",staticClass:"wheel-touch"})]),t._v(" "),e("div",{staticClass:"mr-flex1 wheel"},[e("ul",{ref:"area"},t._l(t.area.data,function(i){return e("li",{key:i},[t._v(t._s(i))])})),t._v(" "),e("div",{ref:"areaTarget",staticClass:"wheel-touch"})])])])])])},a=[],s={render:n,staticRenderFns:a};i.a=s}])});
//# sourceMappingURL=vue-district-picker.js.map