"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,r){return o&&_defineProperties(e.prototype,o),r&&_defineProperties(e,r),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var t={};function i(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=r,i.c=t,i.d=function(e,o,r){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(o,e){if(1&e&&(o=i(o)),8&e)return o;if(4&e&&"object"==_typeof(o)&&o&&o.__esModule)return o;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)i.d(r,t,function(e){return o[e]}.bind(null,t));return r},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="",i(i.s=0)}([function(e,o,r){r(1),e.exports=r(2)},function(e,o){var r,t,i;$("#headertitleareapricelite").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,items:3,margin:0,autoWidth:!0,animateOut:"fadeOut"}),Dropzone.options.profileKimlikOnYuz={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileKimlikArkaYuz={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileDilekceliFotograf={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileAdresTeyidi={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileBankaDokumu={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileCalismaBelgesi={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileBankaReferansi={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},Dropzone.options.profileEkBelge={paramName:"file",dictDefaultMessage:"<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>SÜRÜKLE & BIRAK<br />[JPG, PNG, PDF-MAKS 5MB]"},r=$(".profile-login-settings-range-slider"),t=$(".profile-login-settings-range-slider-range"),i=$(".profile-login-settings-range-slider-value"),r.each(function(){i.each(function(){var e=$(this).prev().attr("value");$(this).html(e)}),t.on("input",function(){$(this).next(i).html(this.value)})}),$(document).ready(function(){$(".profilelabelhelp").tooltip({container:".profile-tooltiparea",html:!0,placement:"bottom"})}),console.log("Tradepage App Javascript Loading Successful")},function(e,o){console.log("Tradepage App Validates Javascript Loading Successful"),window.login=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendLoginForm",value:function(){var e=document.querySelector("#loginemail").value;document.querySelector("#loginpassword").value.trim().length<3&&this.setLoginFormErrorMessages("msgpassword","Pass Hata"),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(e.trim())||this.setLoginFormErrorMessages("msgemail","Mail Hata")}},{key:"setLoginFormErrorMessages",value:function(e,o){document.getElementById(e).innerHTML=o}},{key:"verifyFormContent",value:function(e,o,r){var t=document.getElementById(o),i=(document.getElementById(r),t.value.trim());switch(e){case"password":i.length<3?this.setLoginFormErrorMessages(r,"Pass Hata"):this.setLoginFormErrorMessages(r,"");break;case"email":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(i)?this.setLoginFormErrorMessages(r,""):this.setLoginFormErrorMessages(r,"Mail Hata")}}},{key:"verifyFormContentErrorDelete",value:function(e,o,r){var t=document.getElementById(o),i=(document.getElementById(r),t.value.trim());switch(e){case"password":0===i.length&&this.setLoginFormErrorMessages(r,"Pass Hata");break;case"email":0===i.length&&this.setLoginFormErrorMessages(r,"Mail Hata")}}}]),e}())}]);
//# sourceMappingURL=tradepage-app.js.map
