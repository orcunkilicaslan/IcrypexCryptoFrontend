"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(o){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=o,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,o){o(1),t.exports=o(2)},function(t,e){var o,n,i;$("#headertitleareapricelite").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,items:3,margin:0,autoWidth:!0,animateOut:"fadeOut"}),o=$(".profile-login-settings-range-slider"),n=$(".profile-login-settings-range-slider-range"),i=$(".profile-login-settings-range-slider-value"),o.each(function(){i.each(function(){var t=$(this).prev().attr("value");$(this).html(t)}),n.on("input",function(){$(this).next(i).html(this.value)})}),$(document).ready(function(){$(".profilelabelhelp").tooltip({container:".profile-tooltiparea",html:!0,placement:"bottom"})}),$(document).ready(function(){$(".orderinformationhelp").tooltip({container:".order-orders-tooltiparea",html:!0,placement:"bottom"})}),console.log("Tradepage App Javascript Loading Successful")},function(t,e){jQuery(function(t){if(t(".stepwizard-tabcont-form").hasClass("formuinew")){window.onload=void(e||(t("#WinzardBottomButtonArea").tooltip({container:".stepwizard-tabcont-form-btn-tooltiparea",title:' "Okudum, anladım" İşaretleyiniz ',placement:"top"}),document.getElementById("WinzardBottomButtonDiv").classList.add("secondary"),document.getElementById("WinzardBottomButtonDiv").classList.remove("success"),document.getElementById("WinzardBottomButtonLink").classList.add("btn-secondary"),document.getElementById("WinzardBottomButtonLink").classList.remove("btn-success"),document.getElementById("WinzardBottomButtonLink").disabled=!0));var e=document.getElementById("WinzardiReadCheck").checked}}),$(document).ready(function(){$("#WinzardiReadCheck").click(function(){$("#WinzardiReadCheck").is(":checked")?$(document).ready(function(){$("#WinzardBottomButtonArea").tooltip("disable"),document.getElementById("WinzardBottomButtonDiv").classList.remove("secondary"),document.getElementById("WinzardBottomButtonDiv").classList.add("success"),document.getElementById("WinzardBottomButtonLink").classList.remove("btn-secondary"),document.getElementById("WinzardBottomButtonLink").classList.add("btn-success"),document.getElementById("WinzardBottomButtonLink").disabled=!1}):$(document).ready(function(){$("#WinzardBottomButtonArea").tooltip({container:".stepwizard-tabcont-form-btn-tooltiparea",title:' "Okudum, anladım" İşaretleyiniz ',placement:"top"}),document.getElementById("WinzardBottomButtonDiv").classList.add("secondary"),document.getElementById("WinzardBottomButtonDiv").classList.remove("success"),document.getElementById("WinzardBottomButtonLink").classList.add("btn-secondary"),document.getElementById("WinzardBottomButtonLink").classList.remove("btn-success"),document.getElementById("WinzardBottomButtonLink").disabled=!0})})}),console.log("Tradepage App Deposit-Withdraw Bottom Button Validation Javascript Loading Successful")}]);
//# sourceMappingURL=tradepage-app.js.map
