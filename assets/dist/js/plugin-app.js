"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var o={};function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==_typeof(n)&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){$(function(){var e=$("title"),n=e.text();$(window).focus(function(){e.text(n)}),$(window).blur(function(){e.text("ICRYPEX")})}),$(window).scroll(function(){10<$(window).scrollTop()?$(".header").addClass("navscroll"):$(".header").removeClass("navscroll")}),$(window).resize(function(){var e=$("header.header").height();$(".header-spacebottom").height(e)}),$(".header .header-alert .close").click(function(){var e=$(".header-web").height();$(".header-spacebottom").height(e)}),$(window).resize(function(){var e=$(".cookies-notification").height();$(".cookies-notification").css("bottom","-"+e+"px")}),$(window).trigger("resize"),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")}),$(".dfn-menu-list > li > a").click(function(){$(".dfn-menu-list > li").removeClass("active"),$(this).parent().addClass("active")}),jQuery(function(n){n("body").hasClass("homepage")&&n(document).ready(function(e){n(".dfn-menu-list > li > a").click(function(e){n(this).parent().parent().addClass("passivemenu")}),n(document).click(function(e){n(e.target).hasClass("active")||(n(".dfn-menu-list").removeClass("passivemenu"),n(".dfn-menu-list > li").removeClass("active"))})})})}),jQuery(function(e){e("body").hasClass("mainpage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})}):e("body").hasClass("tradepage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu")})}):e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu"),e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(function(e){e(".inputdatemask").mask("99/99/9999",{placeholder:"MM/DD/YYYY"}),e(".inputphonemask").mask("0599 999 99 99",{placeholder:"05__ ___ __ __"}),e(".inputibanmask").mask("TR99 9999 9999 9999 9999 9999 99",{placeholder:"TR__ ____ ____ ____ ____ ____ __"}),e(".inputgoogleauthmask").mask("999 999",{placeholder:"___ ___"})}),console.log("Plugin App Javascript Loading Successful")},function(e,n){jQuery(function(e){e(window).width()<=767&&e(document).ready(function(){var s;(s=jQuery)(document).on("show.bs.tab",".nav-tabs-responsive",function(e){function n(e,n){e.find(".dropdown-menu").removeClass("pull-xs-left pull-xs-center pull-xs-right").addClass("pull-xs-"+n)}var t=s(e.target),o=t.closest(".nav-tabs"),a=t.closest("li"),r=(a.closest("li.dropdown"),a.next()),i=a.prev();o.find(">li").removeClass("next active prev"),i.addClass("prev"),r.addClass("next"),a.addClass("active"),n(i,"left"),n(a,"center"),n(r,"right")})})}),console.log("Plugin App Mobile Responsive Javascript Loading Successful")}]);
//# sourceMappingURL=plugin-app.js.map
