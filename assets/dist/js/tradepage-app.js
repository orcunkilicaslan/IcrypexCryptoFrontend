"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var s={};function o(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){r(1),r(2),r(3),e.exports=r(4)},function(e,t){var r,s,o;$("#headertitleareapricelite").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:0,autoWidth:!0,animateOut:"fadeOut",responsiveClass:!0,responsive:{0:{items:3,autoWidth:!1},480:{items:1,autoWidth:!1},992:{items:2,autoWidth:!1},1200:{items:3}}}),$("#headertitleareapricebig").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,items:7,margin:0,autoWidth:!1,animateOut:"fadeOut",responsiveClass:!0,responsive:{0:{items:1},576:{items:2},768:{items:3},992:{items:5},1200:{items:7,autoWidth:!0,loop:!1,nav:!1}}}),r=$(".profile-login-settings-range-slider"),s=$(".profile-login-settings-range-slider-range"),o=$(".profile-login-settings-range-slider-value"),r.each(function(){o.each(function(){var e=$(this).prev().attr("value");$(this).html(e)}),s.on("input",function(){$(this).next(o).html(this.value)})}),$(document).ready(function(){$(".profilelabelhelp").tooltip({container:".profile-tooltiparea",html:!0,placement:"bottom"})}),$(document).ready(function(){$(".orderinformationhelp").tooltip({container:".order-orders-tooltiparea",html:!0,placement:"bottom"})})},function(e,t){jQuery(function(t){if(t(".stepwizard-validation").hasClass("formlabelvalidation")){var r=t("#WinzardiReadCheck").is(":checked");window.onload=function(e){r||(t("#WinzardBottomButtonArea").tooltip({container:".stepwizard-tabcont-form-btn-tooltiparea",title:' "Okudum, anladım" İşaretleyiniz ',placement:"top"}).addClass("disabled"),t("#WinzardBottomButtonDiv").addClass("secondary").removeClass("success"),t("#WinzardBottomButtonLink").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0))}}}),$("#WinzardiReadCheck").click(function(e){$(this).is(":checked")?($("#WinzardBottomButtonArea").tooltip("disable").removeClass("disabled"),$("#WinzardBottomButtonDiv").addClass("success").removeClass("secondary"),$("#WinzardBottomButtonLink").addClass("btn-success").removeClass("btn-secondary").attr("disabled",!1)):($("#WinzardBottomButtonArea").tooltip("enable",{container:".stepwizard-tabcont-form-btn-tooltiparea",title:' "Okudum, anladım" İşaretleyiniz ',placement:"top"}).addClass("disabled"),$("#WinzardBottomButtonDiv").addClass("secondary").removeClass("success"),$("#WinzardBottomButtonLink").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0))})},function(e,t){var r={tr:{ProfileSettingsOldPasswordAlert:"EN AZ 8 KARAKTER",ProfileSettingsNewPasswordAlert:"EN AZ 8 KARAKTER",ProfileSettingsNewRePasswordAlert:"ŞİFRELER UYUŞMUYOR",ProfileSettingsOldSecurityAlert:"EN AZ 5 KARAKTER",ProfileSettingsNewSecurityAlert:"EN AZ 5 KARAKTER",ProfileSettingsNewReSecurityAlert:"KELİMELER UYUŞMUYOR"},en:{ProfileSettingsOldPasswordAlert:"EN AZ 8 KARAKTER",ProfileSettingsNewPasswordAlert:"EN AZ 8 KARAKTER",ProfileSettingsNewRePasswordAlert:"ŞİFRELER UYUŞMUYOR",ProfileSettingsOldSecurityAlert:"EN AZ 5 KARAKTER",ProfileSettingsNewSecurityAlert:"EN AZ 5 KARAKTER",ProfileSettingsNewReSecurityAlert:"KELİMELER UYUŞMUYOR"}},d=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.profilesettingsform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"setSignUpFormErrorMessages",value:function(e,t){document.getElementById(e).innerHTML=t}},{key:"setSignUpFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,r){var s=document.getElementById(t),o=(document.getElementById(r),s.value.trim()),i=document.getElementById("inputNewPasswordId").value.trim(),a=document.getElementById("inputNewRePasswordId").value.trim(),n=document.getElementById("inputNewSecurityId").value.trim(),l=document.getElementById("inputNewReSecurityId").value.trim();switch(e){case"inputOldPasswordProcess":o.length<8?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsOldPasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputNewPasswordProcess":o.length<8?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewPasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputNewRePasswordProcess":o.length<8||i!==a?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewRePasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputOldSecurityProcess":o.length<5?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsOldSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputNewSecurityProcess":o.length<5?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputNewReSecurityProcess":o.length<5||n!==l?(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewReSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorInput(t,"#70a800"))}}},{key:"verifyContentErrorDelete",value:function(e,t,r){var s=document.getElementById(t),o=(document.getElementById(r),s.value.trim());switch(e){case"inputOldPasswordProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsOldPasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputNewPasswordProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewPasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputNewRePasswordProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewRePasswordAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputOldSecurityProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsOldSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputNewSecurityProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputNewReSecurityProcess":0===o.length&&(this.setSignUpFormErrorMessages(r,d.translate("tr","ProfileSettingsNewReSecurityAlert")),this.setSignUpFormErrorInput(t,"#b82c0d"))}}}]),e}()),jQuery(function(t){t(".profile-box").hasClass("changepasswordandsecurity")&&(window.onload=function(e){""===t("#inputOldPasswordId").val().trim()&&""===t("#inputNewPasswordId").val().trim()&&""===t("#inputNewRePasswordId").val().trim()&&(t("#ProfileNewPasswordTooltip").tooltip({container:".profile-login-settings-tooltiparea",title:"Bilgileri Eksiksiz Giriniz",placement:"right"}),t("#ProfileNewPasswordButton").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0)),""===t("#inputOldSecurityId").val().trim()&&""===t("#inputNewSecurityId").val().trim()&&""===t("#inputNewReSecurityId").val().trim()&&(t("#ProfileNewSecurityTooltip").tooltip({container:".profile-login-settings-tooltiparea",title:"Bilgileri Eksiksiz Giriniz",placement:"right"}),t("#ProfileNewSecurityButton").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0))}),t(".changepassword").keyup(function(){8<=t("#inputOldPasswordId").val().trim().length&&8<=t("#inputNewPasswordId").val().trim().length&&t("#inputNewPasswordId").val().trim()===t("#inputNewRePasswordId").val().trim()?(t("#ProfileNewPasswordTooltip").tooltip("disable"),t("#ProfileNewPasswordButton").addClass("btn-success").removeClass("btn-secondary").attr("disabled",!1)):(t("#ProfileNewPasswordTooltip").tooltip({container:".profile-login-settings-tooltiparea",title:"Bilgileri Eksiksiz Giriniz",placement:"right"}),t("#ProfileNewPasswordButton").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0))}),t(".changesecurity").keyup(function(){5<=t("#inputOldSecurityId").val().trim().length&&5<=t("#inputNewSecurityId").val().trim().length&&t("#inputNewSecurityId").val().trim()===t("#inputNewReSecurityId").val().trim()?(t("#ProfileNewSecurityTooltip").tooltip("disable"),t("#ProfileNewSecurityButton").addClass("btn-success").removeClass("btn-secondary").attr("disabled",!1)):(t("#ProfileNewSecurityTooltip").tooltip({container:".profile-login-settings-tooltiparea",title:"Bilgileri Eksiksiz Giriniz",placement:"right"}),t("#ProfileNewSecurityButton").addClass("btn-secondary").removeClass("btn-success").attr("disabled",!0))})})},function(e,t){jQuery(function(e){e(window).width()<=991&&e(document).ready(function(e){var t=e(".sidebar-tradepage"),r=(e(".sidebar-navigasyon"),e(".sidebar-navigasyon-account")),s=e(".sidebar-navigasyon-security");t.find(r).find("ul.nav .sidebar-navigasyon-list-item").find(".active").text(),t.find(s).find("ul.nav .sidebar-navigasyon-list-item").find(".active").text(),t.find(r).find("ul.nav").find(".active").parent().remove(),t.find(s).find("ul.nav").find(".active").parent().remove(),t.find(r).find("ul.nav").addClass("dropdown-menu responsive-dropdown-menu responsive-dropdown-account-menu"),t.find(s).find("ul.nav").addClass("dropdown-menu responsive-dropdown-menu responsive-dropdown-security-menu"),t.find(r).append(e('<a class="responsive-dropdown-btn responsive-dropdown-account-btn btn" href="#" data-toggle="dropdown">HESABIM</a>')),t.find(s).append(e('<a class="responsive-dropdown-btn responsive-dropdown-security-btn btn" href="#" data-toggle="dropdown">GÜVENLİK</a>'))})}),$(window).on("load resize",function(e){$(window).width()<=767&&($(".easybuysell-mobiletabs-menu a.nav-link").click(function(){var e=$(this),t=$(e).find(".selecttext .selectcointext").text(),r=$(e).find(".selecttext .selectcoinicon").text(),s=$(e).data("value");$(this).parents(".easybuysell-mobiletabs").find(".easybuysell-mobiletabs-btn").html('<i class="icon-svg icon-svg icon-svg-titleicon'+r.toLocaleLowerCase()+'"></i> <span class="selecttext"><span class="selectcointext">'+t.toUpperCase()+'</span> [<span class="selectcoinicon">'+r.toUpperCase()+"</span>]</span>"),$(this).parents(".easybuysell-mobiletabs").find(".easybuysell-mobiletabs-btn").attr("data-value",s)}),$(".easybuysell-mobiletabs-content > .order-orders-list:first-child").addClass("active show"))}),$(window).on("load resize",function(e){$(window).width()<=767?$(document).ready(function(){$("#latesttransactionsowltable > tbody > tr").addClass("item"),$("#latesttransactionsowltable > tbody").addClass("latesttransactions-owl owl-carousel owl-theme"),$("#latesttransactionsowltable > tbody").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,items:5,margin:10,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1,loop:!1,autoplay:!1,nav:!0,dots:!0}}})}):$(document).ready(function(){$("#latesttransactionsowltable > tbody").removeClass("latesttransactions-owl owl-carousel owl-theme owl-loaded owl-drag"),$("#latesttransactionsowltable .owl-stage-outer").remove(),$("#latesttransactionsowltable .owl-nav").remove(),$("#latesttransactionsowltable .owl-dots").remove()})}),$(window).on("load resize",function(e){$(window).width()<=991?$(document).ready(function(){$("#sidebarmarketdataowltable > tbody > tr").addClass("item"),$("#sidebarmarketdataowltable > tbody").addClass("sidebarmarketdata-owl owl-carousel owl-theme"),$("#sidebarmarketdataowltable > tbody").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,items:5,margin:10,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1,loop:!0,autoplay:!0,margin:0},576:{items:2,loop:!0,autoplay:!0},768:{items:3,loop:!0,autoplay:!0,autoWidth:!1}}})}):$(document).ready(function(){$("#sidebarmarketdataowltable > tbody").removeClass("sidebarmarketdata-owl owl-carousel owl-theme owl-loaded owl-drag"),$("#sidebarmarketdataowltable .owl-stage-outer").remove(),$("#sidebarmarketdataowltable .owl-nav").remove(),$("#sidebarmarketdataowltable .owl-dots").remove()})})}]);
//# sourceMappingURL=tradepage-app.js.map
