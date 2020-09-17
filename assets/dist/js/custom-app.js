"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==_typeof(r)&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r,t){t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),e.exports=t(9)},function(e,r){$(window).on("load scroll",function(e){var r=$(window).scrollTop(),t=$("header.header");r>t.height()?(t.css("top",0),t.addClass("navscroll"),$(".header-spacebottom").show()):(t.css("top","-"+t.height()+"px"),t.removeClass("navscroll"),$(".header-spacebottom").hide())}),$(window).on("load resize",function(e){var r=$("header.header").height();$(".header-spacebottom").height(r)}),$(".header .header-alert .close").click(function(){var e=$(".header-web").height();$(".header-spacebottom").height(e)}),$(window).on("load resize",function(e){var r=$(".cookies-notification").height();$(".cookies-notification").css("bottom","-"+r+"px")}),$(window).trigger("resize"),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")})}),jQuery(function(e){991<e(window).width()&&(e(".dfn-menu-list > li > a").click(function(){e(".dfn-menu-list > li").removeClass("active"),e(this).parent().addClass("active")}),jQuery(function(r){r("body").hasClass("homepage")&&r(document).ready(function(e){r(".dfn-menu-list > li > a").click(function(e){r(this).parent().parent().addClass("passivemenu")}),r(document).click(function(e){r(e.target).hasClass("active")||(r(".dfn-menu-list").removeClass("passivemenu"),r(".dfn-menu-list > li").removeClass("active"))})})}))}),jQuery(function(e){e("body").hasClass("mainpage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})}):e("body").hasClass("tradepage")?e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu")})}):e(document).ready(function(){e(".header-userarea-user").click(function(){e("#MainpageDropdownMenu").addClass("activeuserdropdownmenu"),e("#TradepageDropdownMenu").addClass("activeuserdropdownmenu")})})}),$(function(){$(".selectpickerclass").selectpicker()}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$('[data-toggle="popover"]').popover()}),$(document).ready(function(){$(".formuitooltipgrayautowidth").tooltip({container:".formuinew-tooltipgrayautowidth"})}),$(document).ready(function(){$(".inputphonemask").inputmask({mask:"0599 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputphonemaskonlytr").inputmask({mask:"999 999 9999",greedy:!1,placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1,onBeforeWrite:function(e){if(48==e.which&&0==$(".inputphonemaskonlytr").val())return $(".inputerrormessage.phoneerror").show(),!1;$(".inputerrormessage.phoneerror").hide()}}),$(".inputphonemaskonlyint").inputmask({mask:"999 9999999999999",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputibanmask").inputmask({mask:"TR99 9999 9999 9999 9999 9999 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputidentitymask").inputmask({mask:"999999999999999",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatemask").inputmask({mask:"99/99/9999",placeholder:"MM/DD/YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatedottedmask").inputmask({mask:"99.99.9999",placeholder:"MM.DD.YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputonlytextmask").inputmask({mask:"AAA",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})}),$(document).ready(function(){$(".inputphonemaskdatamask").inputmask({mask:"999 999 9999",greedy:!1,placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1,onBeforeWrite:function(e){if(48==e.which&&0==$(".inputphonemaskdatamask").val())return $(".inputerrormessage.phoneerror").show(),!1;$(".inputerrormessage.phoneerror").hide()}}),$(".jsCountryCode").change(function(){switch($(this).val()){case"90":$(".inputphonemaskdatamask").inputmask({mask:"999 999 9999",greedy:!1,placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1,onBeforeWrite:function(e){if(48==e.which&&0==$(".inputphonemaskdatamask").val())return $(".inputerrormessage.phoneerror").show(),!1;$(".inputerrormessage.phoneerror").hide()}});break;default:$(".inputphonemaskdatamask").inputmask({mask:"9999999999999",greedy:!1,placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})}})}),jQuery.fn.inputFilter=function(e){return this.on("input keydown keyup mousedown mouseup select contextmenu drop",function(){e(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""})},$(".inputfilter-integer").inputFilter(function(e){return/^-?\d*$/.test(e)}),$(".inputfilter-limitinteger").inputFilter(function(e){return/^\d*$/.test(e)&&(""===e||parseInt(e)<=500)}),$(".inputfilter-floatinteger").inputFilter(function(e){return/^-?\d*[.,]?\d*$/.test(e)}),$(".inputfilter-cyrpto").inputFilter(function(e){return/^-?\d*[.]?\d*$/.test(e)}),$(".inputfilter-currency").inputFilter(function(e){return/^-?\d*[.]?\d{0,2}$/.test(e)}),$(".inputfilter-latinonly").inputFilter(function(e){return/^[a-z]*$/i.test(e)}),$(".inputfilter-hexadecimal").inputFilter(function(e){return/^[0-9a-f]*$/i.test(e)}),$(window).on("load resize",function(e){768<=$(window).width()&&($(".cookies-notification").hasClass("show")?$("#sc924I > div[style*='fixed']").css("bottom","71px"):$("#sc924I > div[style*='fixed']").css("bottom","5px"),$(".cookies-notification a.notificationclose").click(function(){$("#sc924I > div[style*='fixed']").css("bottom","5px")}))})},function(e,r){jQuery(function(e){e(window).width()<991?(e(".footer").append(e('<div class="bottomtotopbutton"></div>')),jQuery(document).ready(function(){jQuery(window).scroll(function(){250<jQuery(this).scrollTop()?jQuery(".bottomtotopbutton").fadeIn(300):jQuery(".bottomtotopbutton").fadeOut(300)}),jQuery(".bottomtotopbutton").click(function(e){return e.preventDefault(),jQuery("html,body").animate({scrollTop:0},300),!1})})):e(".bottomtotopbutton").remove()}),jQuery(function(e){e(window).width()<991&&jQuery(function(t){t("body").hasClass("mainpage")?t(document).ready(function(){t("#MobileMenuUserDropdownMenu").on("click",function(){var e=t("#MobileMenuUserDropdownMenu .headusermenu-menulist"),r=t("#MobileMenuTradepageDropdownMenu");0==e.height()?(e.animate({height:r.height()+15}),r.addClass("activeuserdropdownmenu"),t("#MobileMenuUserDropdownMenu").find(".headusermenu-box").addClass("showmenu")):e.height()==r.height()+15&&(e.animate({height:"0px"}),t("#MobileMenuUserDropdownMenu").find(".headusermenu-box").removeClass("showmenu"))})}):t("body").hasClass("tradepage")&&t(document).ready(function(){t("#MobileMenuUserDropdownMenu").on("click",function(){var e=t("#MobileMenuUserDropdownMenu .headusermenu-menulist"),r=t("#MobileMenuMainpageDropdownMenu");0==e.height()?(e.animate({height:r.height()+15}),r.addClass("activeuserdropdownmenu"),t("#MobileMenuUserDropdownMenu").find(".headusermenu-box").addClass("showmenu")):e.height()==r.height()+15&&(e.animate({height:"0px"}),t("#MobileMenuUserDropdownMenu").find(".headusermenu-box").removeClass("showmenu"))})})})}),jQuery(function(n){n(window).width()<991&&n(".dfn-onlymobile-bottom a.dropdown-item").click(function(){var e=n(this),r=n(e).find(".sitelang-lang-text").text(),t=n(e).data("value");n(this).parents(".sitelang").find(".sitelang-btn").html('<i class="icon-svg icon-svg-headersitelang"></i> <span class="sitelang-lang-text">'+r+"</span>"),n(this).parents(".sitelang").find(".sitelang-btn").attr("data-value",t)})}),jQuery(function(t){t(".sitetabs-mobile a.nav-link").click(function(){var e=t(this),r=t(e).find(".selecttabsmenuname").text();t(this).parents(".sitetabs-mobile").find(".responsive-dropdown-btn .selecttabsmenuname").html(r)})})},function(e,r){$(window).on("load",function(e){$(window).width()<=767&&($(".nav-tabs-responsive").find("ul.nav").find("li.nav-item:nth-child(1)").addClass("active"),$(".nav-tabs-responsive").find("ul.nav").find("li.nav-item:nth-child(2)").addClass("next"),$(document).ready(function(){var i;(i=jQuery)(document).on("show.bs.tab",".nav-tabs-responsive",function(e){function r(e,r){e.find(".dropdown-menu").removeClass("pull-xs-left pull-xs-center pull-xs-right").addClass("pull-xs-"+r)}var t=i(e.target),n=t.closest(".nav-tabs"),o=t.closest("li"),a=(o.closest("li.dropdown"),o.next()),s=o.prev();n.find(">li").removeClass("next active prev"),s.addClass("prev"),a.addClass("next"),o.addClass("active"),r(s,"left"),r(o,"center"),r(a,"right")})}))})},function(e,r){var t={tr:{NameAlert:"En Az 2 Karakter",SurnameAlert:"En Az 2 Karakter",PhoneAlert:"Hatalı Format",EmailAlert:"Hatalı Format",Min10Character:"En Az 10 Karakter",PleaseChoose:"Lütfen Seçiniz",MessageAlert:"En Az 10 Karakter",MessageCharacterOutAlert:"En Fazla 2000 Karakter",PasswordAlert:"En Az 8 Karakter",RePasswordAlert:"Şifreler Uyuşmuyor",IdentityNoAlert:"11 Karakter Giriniz",DateSelectAlert:"Tarih Seçiniz"},en:{NameAlert:"En Az 2 Karakter",SurnameAlert:"En Az 2 Karakter",PhoneAlert:"",EmailAlert:"Hatalı Format",Min10Character:"En Az 10 Karakter",PleaseChoose:"Lütfen Seçiniz",MessageAlert:"En Az 10 Karakter",MessageCharacterOutAlert:"En Fazla 2000 Karakter",PasswordAlert:"En Az 8 Karakter",RePasswordAlert:"Şifreler Uyuşmuyor",IdentityNoAlert:"11 Karakter Giriniz",DateSelectAlert:"Tarih Seçiniz"}},l=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,r){return t.hasOwnProperty(e)&&t[e].hasOwnProperty(r)?t[e][r]:""}}]),e}();window.generalvalidform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendGeneralValidForm",value:function(){}},{key:"sendHomepageRegisterForm",value:function(){var e=document.getElementById("inputFirstNameId").value,r=document.getElementById("inputLastNameId").value,t=document.getElementById("inputPhoneId").value,n=document.getElementById("inputEmailId").value,o=document.getElementById("inputPasswordId").value,a=document.getElementById("inputRePasswordId").value,s=document.getElementById("termsOfUseCheck").checked,i=!1;return!i&&(e.trim().length<2&&(this.setGeneralValidFormErrorMessages("msgFirstNameId",l.translate("tr","NameAlert")),i=!0),r.trim().length<2&&(this.setGeneralValidFormErrorMessages("msgLastNameId",l.translate("tr","SurnameAlert")),i=!0),t.trim().replace(/\s/g,"").length<10&&(this.setGeneralValidFormErrorMessages("msgPhoneId",l.translate("tr","PhoneAlert")),i=!0),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)||(this.setGeneralValidFormErrorMessages("msgEmailId",l.translate("tr","EmailAlert")),i=!0),o.trim().length<8&&(this.setGeneralValidFormErrorMessages("msgPasswordId",l.translate("tr","PasswordAlert")),i=!0),(a.trim().length<8||o!==a)&&(this.setGeneralValidFormErrorMessages("msgRePasswordId",l.translate("tr","RePasswordAlert")),i=!0),s||(document.getElementById("labeltermsOfUseCheck").classList.add("checkederror"),i=!0),!0)}},{key:"sendSignUpForm",value:function(){var e=document.getElementById("inputFirstNameId").value,r=document.getElementById("inputLastNameId").value,t=document.getElementById("inputPhoneId").value,n=document.getElementById("inputEmailId").value,o=document.getElementById("inputPasswordId").value,a=document.getElementById("inputRePasswordId").value,s=document.getElementById("atou").checked;e.trim().length<2&&this.setGeneralValidFormErrorMessages("msgFirstNameId",l.translate("tr","NameAlert")),r.trim().length<2&&this.setGeneralValidFormErrorMessages("msgLastNameId",l.translate("tr","SurnameAlert")),t.trim().length<10&&this.setGeneralValidFormErrorMessages("msgPhoneId",l.translate("tr","PhoneAlert")),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)||this.setGeneralValidFormErrorMessages("msgEmailId",l.translate("tr","EmailAlert")),o.trim().length<8&&this.setGeneralValidFormErrorMessages("msgPasswordId",l.translate("tr","PasswordAlert")),(a.trim().length<8||o!==a)&&this.setGeneralValidFormErrorMessages("msgRePasswordId",l.translate("tr","RePasswordAlert")),s?(document.getElementById("inputFirstNameId").value="",document.getElementById("inputLastNameId").value="",document.getElementById("inputPhoneId").value="",document.getElementById("inputEmailId").value="",document.getElementById("inputPasswordId").value="",document.getElementById("inputRePasswordId").value="",document.getElementById("inputFirstNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputLastNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPhoneId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputEmailId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPasswordId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputRePasswordId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgFirstNameId").innerHTML=" ",document.getElementById("msgLastNameId").innerHTML=" ",document.getElementById("msgPhoneId").innerHTML=" ",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgPasswordId").innerHTML=" ",document.getElementById("msgRePasswordId").innerHTML=" ",document.getElementById("iconFirstNameId").style.display="none",document.getElementById("iconLastNameId").style.display="none",document.getElementById("iconPhoneId").style.display="none",document.getElementById("iconEmailId").style.display="none",document.getElementById("iconPasswordId").style.display="none",document.getElementById("iconRePasswordId").style.display="none"):document.getElementById("atoulabel").classList.add("checkederror")}},{key:"sendLoginForm",value:function(){var e=document.getElementById("loginemail").value,r=document.getElementById("loginpassword").value;/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(e)||this.setGeneralValidFormErrorMessages("msgEmailId",l.translate("tr","EmailAlert")),r.trim().length<8?this.setGeneralValidFormErrorMessages("msgPasswordId",l.translate("tr","PasswordAlert")):(document.getElementById("loginemail").value="",document.getElementById("loginpassword").value="",document.getElementById("loginemail").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("loginpassword").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgPasswordId").innerHTML=" ")}},{key:"sendContactUsForm",value:function(){var e=document.getElementById("inputFirstNameId").value,r=document.getElementById("inputLastNameId").value,t=document.getElementById("inputPhoneId").value,n=document.getElementById("inputEmailId").value,o=document.getElementById("inputMessageId").value,a=document.getElementById("inputSubjectId").value;e.trim().length<2&&this.setGeneralValidFormErrorMessages("msgFirstNameId",l.translate("tr","NameAlert")),r.trim().length<2&&this.setGeneralValidFormErrorMessages("msgLastNameId",l.translate("tr","SurnameAlert")),t.trim().length<10&&this.setGeneralValidFormErrorMessages("msgPhoneId",l.translate("tr","PhoneAlert")),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)||this.setGeneralValidFormErrorMessages("msgEmailId",l.translate("tr","EmailAlert")),-1==a&&this.setGeneralValidFormErrorMessages("msgSubjectId",l.translate("tr","PleaseChoose")),o.trim().length<10?this.setGeneralValidFormErrorMessages("msgMessageId",l.translate("tr","MessageAlert")):(document.getElementById("contactusform").style.display="none",document.getElementById("contactusinfo").style.display="block",document.getElementById("inputFirstNameId").value="",document.getElementById("inputLastNameId").value="",document.getElementById("inputPhoneId").value="",document.getElementById("inputEmailId").value="",document.getElementById("inputSubjectId").value="-1",document.getElementById("inputMessageId").value="",document.getElementById("inputFirstNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputLastNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPhoneId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputEmailId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputSubjectId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputMessageId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgFirstNameId").innerHTML=" ",document.getElementById("msgLastNameId").innerHTML=" ",document.getElementById("msgPhoneId").innerHTML=" ",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgSubjectId").innerHTML=" ",document.getElementById("msgMessageId").innerHTML=" ",document.getElementById("iconFirstNameId").style.display="none",document.getElementById("iconLastNameId").style.display="none",document.getElementById("iconPhoneId").style.display="none",document.getElementById("iconEmailId").style.display="none",document.getElementById("iconSubjectId").style.display="none",document.getElementById("iconMessageId").style.display="none")}},{key:"setGeneralValidFormErrorMessages",value:function(e,r,t,n){var o=document.getElementById(e);o.innerHTML=r,o.classList.add(t),o.classList.remove(n)}},{key:"setGeneralValidFormErrorInput",value:function(e){document.getElementById(e)}},{key:"setGeneralValidFormErrorIcon",value:function(e,r,t){var n=document.getElementById(e);n.classList.add(r),n.classList.remove(t)}},{key:"verifyContent",value:function(e,r,t,n){var o=document.getElementById(r),a=(document.getElementById(t),document.getElementById(n),o.value.trim());switch(e){case"inputNameProcess":a.length<2?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","NameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputSurnameProcess":a.length<2?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","SurnameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputPhoneTurProcess":a.replace(/\s/g,"").length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PhoneAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputEmailProcess":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")):(this.setGeneralValidFormErrorMessages(t,l.translate("tr","EmailAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")),this.setGeneralValidFormErrorInput(r);break;case"inputMin10CharacterProcess":a.length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","Min10Character"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputIdentityProcess":a.length<11?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","IdentityNoAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputDateSelectProcess":a.length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","DateSelectAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"selectPleaseChoose":""===a?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PleaseChoose"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"textareaMessageProcess":a.length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","MessageAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):2e3<=a.length?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputPasswordProcess":a.length<8?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PasswordAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r)}}},{key:"verifyContentErrorDelete",value:function(e,r,t,n){var o=document.getElementById(r),a=(document.getElementById(t),document.getElementById(n),o.value.trim());switch(e){case"inputNameProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","NameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"inputSurameProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","SurnameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"inputPhoneTurProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PhoneAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"inputEmailProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","EmailAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"inputMin10CharacterProcess":a.length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","Min10Character"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,l.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputIdentityProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","IdentityNoAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"inputDateSelectProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","DateSelectAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r));break;case"selectPleaseChoose":""===a?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PleaseChoose"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,l.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"textareaMessageProcess":a.length<10?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","MessageAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):2e3<=a.length?(this.setGeneralValidFormErrorMessages(t,l.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check")):(this.setGeneralValidFormErrorMessages(t,l.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(n,"check","error")),this.setGeneralValidFormErrorInput(r);break;case"inputPasswordProcess":0===a.length&&(this.setGeneralValidFormErrorMessages(t,l.translate("tr","PasswordAlert"),"error","check"),this.setGeneralValidFormErrorIcon(n,"error","check"),this.setGeneralValidFormErrorInput(r))}}}]),e}())},function(e,r){},function(e,r){$(window).on("load",function(e){var r={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"UnknownBrowser",this.OS=this.searchString(this.dataOS)||"UnknownOS"},searchString:function(e){for(var r=0;r<e.length;r++){var t=e[r].string,n=e[r].prop;if(this.versionSearchString=e[r].versionSearch||e[r].identity,t){if(-1!=t.indexOf(e[r].subString))return e[r].identity}else if(n)return e[r].identity}},searchVersion:function(e){var r=e.indexOf(this.versionSearchString);if(-1!=r)return parseFloat(e.substring(r+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};r.init(),"Chrome"===r.browser?$("html").addClass(r.OS+" Chrome Chrome"+r.version):"Firefox"===r.browser?$("html").addClass(r.OS+" Firefox Firefox"+r.version):"MS Edge"===r.browser?($("html").addClass(r.OS+" Edge Edge"+r.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">')):"Explorer"===r.browser&&($("html").addClass(r.OS+" IExplorer IExplorer"+r.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">'))})},function(e,r){$("#homepageslider").owlCarousel({loop:!0,nav:!1,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,items:1,margin:10,animateIn:"fadeInDown",animateOut:"fadeOutDown"}),$(document).ready(function(){$("#homepagechartarea").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,items:2,margin:15,autoWidth:!1,animateIn:"slideInRight",animateOut:"slideOutLeft",responsiveClass:!0,responsive:{0:{items:1,loop:!0,autoplay:!0},767:{items:2}}}),$(".homepage-chartarea-column").addClass("item")}),$("#researchothersentries").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:15,autoWidth:!1,animateOut:"fadeOut",responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:4}}}),$(document).ready(function(){$(".accordion-item .heading").on("click",function(e){e.preventDefault(),$(this).closest(".accordion-item").hasClass("active")?$(".accordion-item").removeClass("active"):($(".accordion-item").removeClass("active"),$(this).closest(".accordion-item").addClass("active"));var r=$(this).next();r.slideToggle(100),$(".accordion-item .content").not(r).slideUp("fast")})})},function(e,r){var t={tr:{Call2ActionFirstNameNameAlert:"EN AZ 2 KARAKTER",Call2ActionLastNameNameAlert:"EN AZ 2 KARAKTER",Call2ActionPhoneAlert:"HATALI TELEFON",Call2ActionEmailAlert:"HATALI E-POSTA"},en:{Call2ActionFirstNameNameAlert:"MINIMUM 2 CHARACTERS",Call2ActionLastNameNameAlert:"MINIMUM 2 CHARACTERS",Call2ActionPhoneAlert:"WRONG PHONE",Call2ActionEmailAlert:"WRONG EMAIL"}},s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,r){return t.hasOwnProperty(e)&&t[e].hasOwnProperty(r)?t[e][r]:""}}]),e}();window.call2actionform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendCall2ActionForm",value:function(){var e=document.getElementById("inputC2AFirstNameId").value,r=document.getElementById("inputC2ALastNameId").value,t=document.getElementById("inputC2APhoneId").value,n=document.getElementById("inputC2AEmailId").value,o=!1;return!o&&(e.trim().length<2&&(this.setCall2ActionFormErrorMessages("msgC2AFirstNameId",s.translate("tr","Call2ActionFirstNameNameAlert")),this.setCall2ActionFormErrorIcon("iconC2AFirstNameId","error","check"),o=!0),r.trim().length<2&&(this.setCall2ActionFormErrorMessages("msgC2ALastNameId",s.translate("tr","Call2ActionLastNameNameAlert")),this.setCall2ActionFormErrorIcon("iconC2ALastNameId","error","check"),o=!0),t.trim().replace(/\s/g,"").length<10&&(this.setCall2ActionFormErrorMessages("msgC2APhoneId",s.translate("tr","Call2ActionPhoneAlert")),this.setCall2ActionFormErrorIcon("iconC2APhoneId","error","check"),o=!0),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)||(this.setCall2ActionFormErrorMessages("msgC2AEmailId",s.translate("tr","Call2ActionEmailAlert")),this.setCall2ActionFormErrorIcon("iconC2AEmailId","error","check"),o=!0),!0)}},{key:"setCall2ActionFormErrorMessages",value:function(e,r,t,n){var o=document.getElementById(e);o.innerHTML=r,o.classList.add(t),o.classList.remove(n)}},{key:"setCall2ActionFormErrorInput",value:function(e){document.getElementById(e)}},{key:"setCall2ActionFormErrorIcon",value:function(e,r,t){var n=document.getElementById(e);n.classList.add(r),n.classList.remove(t)}},{key:"verifyContent",value:function(e,r,t,n){var o=document.getElementById(r),a=(document.getElementById(t),document.getElementById(n),o.value.trim());switch(e){case"inputFirstNameProcess":a.length<2?(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionFirstNameNameAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check")):(this.setCall2ActionFormErrorMessages(t,"","check","error"),this.setCall2ActionFormErrorIcon(n,"check","error")),this.setCall2ActionFormErrorInput(r);break;case"inputLastNameProcess":a.length<2?(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionLastNameNameAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check")):(this.setCall2ActionFormErrorMessages(t,"","check","error"),this.setCall2ActionFormErrorIcon(n,"check","error")),this.setCall2ActionFormErrorInput(r);break;case"inputPhoneTurProcess":a.replace(/\s/g,"").length<10?(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionPhoneAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check")):(this.setCall2ActionFormErrorMessages(t,"","check","error"),this.setCall2ActionFormErrorIcon(n,"check","error")),this.setCall2ActionFormErrorInput(r);break;case"inputEmailProcess":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?(this.setCall2ActionFormErrorMessages(t,"","check","error"),this.setCall2ActionFormErrorIcon(n,"check","error")):(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionEmailAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check")),this.setCall2ActionFormErrorInput(r)}}},{key:"verifyContentErrorDelete",value:function(e,r,t,n){var o=document.getElementById(r),a=(document.getElementById(t),document.getElementById(n),o.value.trim());switch(e){case"inputFirstNameProcess":0===a.length&&(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionFirstNameNameAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check"),this.setCall2ActionFormErrorInput(r));break;case"inputLastNameProcess":0===a.length&&(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionLastNameNameAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check"),this.setCall2ActionFormErrorInput(r));break;case"inputPhoneTurProcess":0===a.length&&(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionPhoneAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check"),this.setCall2ActionFormErrorInput(r));break;case"inputEmailProcess":0===a.length&&(this.setCall2ActionFormErrorMessages(t,s.translate("tr","Call2ActionEmailAlert"),"error","check"),this.setCall2ActionFormErrorIcon(n,"error","check"),this.setCall2ActionFormErrorInput(r))}}}]),e}())},function(e,r){jQuery(function(e){e(window).width(),e(document).ready(function(){})}),jQuery(function(e){e("body").hasClass("homepage")&&e(document).ready(function(){e(".homepage-register-collapse-btn").click(function(){e(this).addClass("d-none").removeClass("d-block")})})}),$(window).on("load resize",function(e){$(window).width()<=991?$(document).ready(function(){$("#homepagebigpricearea").addClass("homepage-bigprice-owl owl-carousel owl-theme"),$("#homepagebigpricearea").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,items:5,margin:20,autoWidth:!1,animateIn:"slideInRight",animateOut:"slideOutLeft",responsiveClass:!0,responsive:{0:{items:1,loop:!0,autoplay:!0,nav:!0},400:{items:2,loop:!0,autoplay:!0,nav:!0},767:{items:3,loop:!0,autoplay:!0,nav:!0}}})}):$(document).ready(function(){$("#homepagebigpricearea").removeClass("homepage-bigprice-owl owl-carousel owl-theme owl-loaded owl-drag"),$(".homepage-bigprice-list-item").removeClass("item"),$(".homepage-bigprice .owl-stage-outer").remove(),$(".homepage-bigprice-list .owl-nav").remove(),$(".homepage-bigprice-list .owl-dots").remove()})}),jQuery(function(e){e(window).width()<=767&&e(document).ready(function(e){var r=e(".sitetabs"),t=(e(".sitetabs-wrapper"),e(".sitetabs-wrapper-01")),n=e(".sitetabs-wrapper-02"),o=r.find(t).find("ul.nav .nav-item").find(".active").text(),a=r.find(n).find("ul.nav .nav-item").find(".active").text();r.find(t).find("ul.nav").find(".active").parent().remove(),r.find(n).find("ul.nav").find(".active").parent().remove(),r.find(t).find("ul.nav").addClass("dropdown-menu responsive-dropdown-menu responsive-dropdown-top-menu"),r.find(n).find("ul.nav").addClass("dropdown-menu responsive-dropdown-menu responsive-dropdown-bottom-menu"),r.find(t).append(e('<a class="responsive-dropdown-btn responsive-dropdown-top-btn btn" href="#" data-toggle="dropdown">'+o+"</a>")),r.find(n).append(e('<a class="responsive-dropdown-btn responsive-dropdown-bottom-btn btn" href="#" data-toggle="dropdown">'+a+"</a>")),a||(r.find(n).find("a.responsive-dropdown-btn").remove(),r.find(n).append(e('<a class="responsive-dropdown-btn responsive-dropdown-bottom-btn btn" href="#" data-toggle="dropdown">MENÜ</a>')))})}),jQuery(function(e){e(window).width()<=767&&e(document).ready(function(e){var r=e(".sitetabs"),t=e(".sitetabs-wrapper-blockchain-01");r.find(t).find("ul.sitetabs-wrapper-blockchain-01-dropdown-menu").find(".active").parent().remove(),r.find(t).find("a.sitetabs-wrapper-blockchain-01-dropdown-link").addClass("responsive-dropdown-btn responsive-dropdown-top-btn btn"),r.find(t).find("ul.sitetabs-wrapper-blockchain-01-dropdown-menu").addClass("responsive-dropdown-menu responsive-dropdown-top-menu")})})}]);
//# sourceMappingURL=custom-app.js.map
