"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var o={};function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==_typeof(n)&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,t){t(1),t(2),e.exports=t(3)},function(e,n){$(function(){var e=$("title"),n=e.text();$(window).focus(function(){e.text(n)}),$(window).blur(function(){e.text("ICRYPEX")})}),$(window).scroll(function(){10<$(window).scrollTop()?$(".header").addClass("navscroll"):$(".header").removeClass("navscroll")}),$(window).on("load resize",function(e){var n=$("header.header").height();$(".header-spacebottom").height(n)}),$(".header .header-alert .close").click(function(){var e=$(".header-web").height();$(".header-spacebottom").height(e)}),$(window).on("load resize",function(e){var n=$(".cookies-notification").height();$(".cookies-notification").css("bottom","-"+n+"px")}),$(window).trigger("resize"),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")})}),jQuery(function(e){991<e(window).width()&&(e(".dfn-menu-list > li > a").click(function(){e(".dfn-menu-list > li").removeClass("active"),e(this).parent().addClass("active")}),jQuery(function(n){n("body").hasClass("homepage")&&n(document).ready(function(e){n(".dfn-menu-list > li > a").click(function(e){n(this).parent().parent().addClass("passivemenu")}),n(document).click(function(e){n(e.target).hasClass("active")||(n(".dfn-menu-list").removeClass("passivemenu"),n(".dfn-menu-list > li").removeClass("active"))})})}))}),jQuery(function(e){e("body").hasClass("mainpage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})}):e("body").hasClass("tradepage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu")})}):e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu"),e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(document).ready(function(){$(".inputonlytextmask").inputmask("AAA",{placeholder:""}),$(".inputibanmask").inputmask("TR99 9999 9999 9999 9999 9999 99",{placeholder:""}),$(".inputdatemask").inputmask("99/99/9999",{placeholder:"MM/DD/YYYY"}),$(".inputidentitymask").inputmask("99999999999",{placeholder:""}),$(".inputphonemask").inputmask({mask:"0599 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})}),$(window).on("load resize",function(e){768<=$(window).width()&&($(".cookies-notification").hasClass("show")?$("#sc924I > .psmw_924I").css("bottom","71px"):$("#sc924I > .psmw_924I").css("bottom","5px"),$(".cookies-notification a.notificationclose").click(function(){$("#sc924I > .psmw_924I").css("bottom","5px")}))})},function(e,n){jQuery(function(e){e(window).width()<991?(e(".footer").append(e('<div class="bottomtotopbutton"></div>')),jQuery(document).ready(function(){jQuery(window).scroll(function(){250<jQuery(this).scrollTop()?jQuery(".bottomtotopbutton").fadeIn(300):jQuery(".bottomtotopbutton").fadeOut(300)}),jQuery(".bottomtotopbutton").click(function(e){return e.preventDefault(),jQuery("html,body").animate({scrollTop:0},300),!1})})):e(".bottomtotopbutton").remove()}),jQuery(function(e){e(window).width()<991&&jQuery(function(t){t("body").hasClass("mainpage")?t(document).ready(function(){t("#MobileMenuUserDropdownMenu").on("click",function(){var e=t("#MobileMenuUserDropdownMenu .headusermenu-menulist"),n=t("#MobileMenuTradepageDropdownMenu");0==e.height()?(e.animate({height:n.height()+15}),n.addClass("activeuserdropdownmenu")):e.height()==n.height()+15&&e.animate({height:"0px"})})}):t("body").hasClass("tradepage")&&t(document).ready(function(){t("#MobileMenuUserDropdownMenu").on("click",function(){var e=t("#MobileMenuUserDropdownMenu .headusermenu-menulist"),n=t("#MobileMenuMainpageDropdownMenu");0==e.height()?(e.animate({height:n.height()+15}),n.addClass("activeuserdropdownmenu")):e.height()==n.height()+15&&e.animate({height:"0px"})})})})}),jQuery(function(o){o(window).width()<991&&o(".dfn-onlymobile-bottom a.dropdown-item").click(function(){var e=o(this),n=o(e).find(".sitelang-lang-text").text(),t=o(e).data("value");o(this).parents(".sitelang").find(".sitelang-btn").html('<i class="icon-svg icon-svg-headersitelang"></i> <span class="sitelang-lang-text">'+n+"</span>"),o(this).parents(".sitelang").find(".sitelang-btn").attr("data-value",t)})})},function(e,n){$(window).on("load",function(e){$(window).width()<=767&&($(".nav-tabs-responsive").find("ul.nav").find("li.nav-item:nth-child(1)").addClass("active"),$(".nav-tabs-responsive").find("ul.nav").find("li.nav-item:nth-child(2)").addClass("next"),$(document).ready(function(){var r;(r=jQuery)(document).on("show.bs.tab",".nav-tabs-responsive",function(e){function n(e,n){e.find(".dropdown-menu").removeClass("pull-xs-left pull-xs-center pull-xs-right").addClass("pull-xs-"+n)}var t=r(e.target),o=t.closest(".nav-tabs"),i=t.closest("li"),a=(i.closest("li.dropdown"),i.next()),s=i.prev();o.find(">li").removeClass("next active prev"),s.addClass("prev"),a.addClass("next"),i.addClass("active"),n(s,"left"),n(i,"center"),n(a,"right")})}))})}]);
//# sourceMappingURL=plugin-app.js.map
