"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){$(window).scroll(function(){10<$(window).scrollTop()?$(".header").addClass("navscroll"):$(".header").removeClass("navscroll")}),$(window).resize(function(){var e=$("header.header").height();$(".header-spacebottom").height(e)}),$(".header .header-alert .close").click(function(){var e=$(".header-web").height();$(".header-spacebottom").height(e)}),$(window).trigger("resize"),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")}),$(".dfn-menu-list > li > a").click(function(){$(".dfn-menu-list > li").removeClass("active"),$(this).parent().addClass("active")}),$(".dfn-menu-list > li").on("show.bs.dropdown",function(e){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown(150)}),$(".dfn-menu-list > li").on("hide.bs.dropdown",function(e){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp(150)})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),console.log("Plugin App Javascript Loading Successful")},function(e,t){window.testlabelform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendComponentLabelForm",value:function(){}},{key:"setComponentLabelFormErrorMessages",value:function(e,t,o){var n=document.getElementById(e);n.innerHTML=t,n.style.display=o}},{key:"setComponentLabelFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,o,n){var r=document.getElementById(t),s=(document.getElementById(o),document.getElementById(n),r.value.trim());switch(e){case"inputNameProcess":s.length<3?(this.setComponentLabelFormErrorMessages(o,"HATA",""),this.setComponentLabelFormErrorMessages(n,"","none"),this.setComponentLabelFormErrorInput(t,"#b82c0d","")):(this.setComponentLabelFormErrorMessages(o,"",""),this.setComponentLabelFormErrorMessages(n,"","block"),this.setComponentLabelFormErrorInput(t,"#70a800",""));break;case"inputPhoneProcess":s.length<14?(this.setComponentLabelFormErrorMessages(o,"HATA",""),this.setComponentLabelFormErrorMessages(n,"","none"),this.setComponentLabelFormErrorInput(t,"#b82c0d")):(this.setComponentLabelFormErrorMessages(o,"",""),this.setComponentLabelFormErrorMessages(n,"","block"),this.setComponentLabelFormErrorInput(t,"#70a800"));break;case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(s)?(this.setComponentLabelFormErrorMessages(o,"",""),this.setComponentLabelFormErrorMessages(n,"","block"),this.setComponentLabelFormErrorInput(t,"#70a800")):(this.setComponentLabelFormErrorMessages(o,"HATA",""),this.setComponentLabelFormErrorMessages(n,"","none"),this.setComponentLabelFormErrorInput(t,"#b82c0d"))}}},{key:"verifyContentErrorDelete",value:function(e,t,o,n){var r=document.getElementById(t),s=(document.getElementById(o),document.getElementById(n),r.value.trim());switch(e){case"inputNameProcess":case"inputPhoneProcess":case"inputEmailProcess":0===s.length&&(this.setComponentLabelFormErrorMessages(o,"HATA",""),this.setComponentLabelFormErrorMessages(n,"","none"),this.setComponentLabelFormErrorInput(t,"#b82c0d"))}}}]),e}()),jQuery(function(e){e("#inputPhoneId").mask("0999 999 99 99")}),console.log("Plugin App Component Label Form Validations Javascript Loading Successful")}]);
//# sourceMappingURL=plugin-app.js.map
