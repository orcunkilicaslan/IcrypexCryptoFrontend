"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var s={};function o(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){r(1),r(2),r(3),r(4),e.exports=r(5)},function(e,t){$("#homepageslider").owlCarousel({loop:!0,nav:!1,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,items:1,margin:10,animateIn:"fadeInDown",animateOut:"fadeOutDown"}),jQuery(function(e){e(window).width(),e(document).ready(function(){})}),jQuery(function(e){e("body").hasClass("homepage")&&e(document).ready(function(){e(".homepage-register-collapse-btn").click(function(){e(this).addClass("d-none").removeClass("d-block")})})}),$(document).ready(function(){$(".accordion-item .heading").on("click",function(e){e.preventDefault(),$(this).closest(".accordion-item").hasClass("active")?$(".accordion-item").removeClass("active"):($(".accordion-item").removeClass("active"),$(this).closest(".accordion-item").addClass("active"));var t=$(this).next();t.slideToggle(100),$(".accordion-item .content").not(t).slideUp("fast")})}),console.log("Mainpage App Javascript Loading Successful")},function(e,t){var r={tr:{HomepageRegisterFirstNameAlert:"EN AZ 2 KARAKTER",HomepageRegisterLastNameAlert:"EN AZ 2 KARAKTER",HomepageRegisterPhoneAlert:"HATALI TELEFON",HomepageRegisterEmailAlert:"HATALI E-POSTA",HomepageRegisterPasswordAlert:"EN AZ 8 KARAKTER",HomepageRegisterRePasswordAlert:"ŞİFRELER UYUŞMUYOR"},en:{HomepageRegisterFirstNameAlert:"EN AZ 2 KARAKTER",HomepageRegisterLastNameAlert:"EN AZ 2 KARAKTER",HomepageRegisterPhoneAlert:"HATALI TELEFON",HomepageRegisterEmailAlert:"HATALI E-POSTA",HomepageRegisterPasswordAlert:"EN AZ 8 KARAKTER",HomepageRegisterRePasswordAlert:"ŞİFRELER UYUŞMUYOR"}},m=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.homepageregisterform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendHomepageRegisterForm",value:function(){var e=document.getElementById("inputFirstNameId").value,t=document.getElementById("inputLastNameId").value,r=document.getElementById("inputPhoneId").value,s=document.getElementById("inputEmailId").value,o=document.getElementById("inputPasswordId").value,n=document.getElementById("inputRePasswordId").value,a=document.getElementById("termsOfUseCheck").checked,i=!1;return!i&&(e.trim().length<2&&(this.setHomepageRegisterFormErrorMessages("msgFirstNameId",m.translate("tr","HomepageRegisterFirstNameAlert")),this.setHomepageRegisterFormErrorInput("inputFirstNameId","#b82c0d"),i=!0),t.trim().length<2&&(this.setHomepageRegisterFormErrorMessages("msgLastNameId",m.translate("tr","HomepageRegisterLastNameAlert")),this.setHomepageRegisterFormErrorInput("inputLastNameId","#b82c0d"),i=!0),r.trim().length<14&&(this.setHomepageRegisterFormErrorMessages("msgPhoneId",m.translate("tr","HomepageRegisterPhoneAlert")),this.setHomepageRegisterFormErrorInput("inputPhoneId","#b82c0d"),i=!0),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(s)||(this.setHomepageRegisterFormErrorMessages("msgEmailId",m.translate("tr","HomepageRegisterEmailAlert")),this.setHomepageRegisterFormErrorInput("inputEmailId","#b82c0d"),i=!0),o.trim().length<8&&(this.setHomepageRegisterFormErrorMessages("msgPasswordId",m.translate("tr","HomepageRegisterPasswordAlert")),this.setHomepageRegisterFormErrorInput("inputPasswordId","#b82c0d"),i=!0),(n.trim().length<8||o!==n)&&(this.setHomepageRegisterFormErrorMessages("msgRePasswordId",m.translate("tr","HomepageRegisterRePasswordAlert")),this.setHomepageRegisterFormErrorInput("inputRePasswordId","#b82c0d"),i=!0),a||(document.getElementById("labeltermsOfUseCheck").classList.add("checkederror"),i=!0),!0)}},{key:"setHomepageRegisterFormErrorMessages",value:function(e,t,r){var s=document.getElementById(e);s.innerHTML=t,s.style.display=r}},{key:"setHomepageRegisterFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim()),a=document.getElementById("inputPasswordId").value.trim(),i=document.getElementById("inputRePasswordId").value.trim();switch(e){case"inputFirstNameProcess":n.length<2?(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterFirstNameAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d","")):(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800",""));break;case"inputLastNameProcess":n.length<2?(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterLastNameAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d","")):(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800",""));break;case"inputPhoneProcess":n.length<14?(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterPhoneAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d")):(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800"));break;case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)?(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800")):(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterEmailAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":n.length<8?(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterPasswordAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d","")):(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800",""));break;case"inputRePasswordProcess":n.length<8||a!==i?(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterRePasswordAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d","")):(this.setHomepageRegisterFormErrorMessages(r,"",""),this.setHomepageRegisterFormErrorMessages(s,"","block"),this.setHomepageRegisterFormErrorInput(t,"#70a800",""))}}},{key:"verifyContentErrorDelete",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterFirstNameAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputLastNameProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterLastNameAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputPhoneProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterPhoneAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputEmailProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterEmailAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterPasswordAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"));break;case"inputRePasswordProcess":0===n.length&&(this.setHomepageRegisterFormErrorMessages(r,m.translate("tr","HomepageRegisterRePasswordAlert"),""),this.setHomepageRegisterFormErrorMessages(s,"","none"),this.setHomepageRegisterFormErrorInput(t,"#b82c0d"))}}}]),e}()),jQuery(function(e){e("#inputPhoneId").mask("0599 999 99 99")}),console.log("Mainpage App Homepage Register Form Validations Javascript Loading Successful")},function(e,t){var r={tr:{SignUpFirstNameAlert:"EN AZ 2 KARAKTER",SignUpLastNameAlert:"EN AZ 2 KARAKTER",SignUpPhoneAlert:"HATALI TELEFON",SignUpEmailAlert:"HATALI E-POSTA",SignUpPasswordAlert:"EN AZ 8 KARAKTER",SignUpRePasswordAlert:"ŞİFRELER UYUŞMUYOR"},en:{SignUpFirstNameAlert:"EN AZ 2 KARAKTER",SignUpLastNameAlert:"EN AZ 2 KARAKTER",SignUpPhoneAlert:"HATALI TELEFON",SignUpEmailAlert:"HATALI E-POSTA",SignUpPasswordAlert:"EN AZ 8 KARAKTER",SignUpRePasswordAlert:"ŞİFRELER UYUŞMUYOR"}},m=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.signupform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendSignUpForm",value:function(){var e=document.getElementById("inputFirstNameId").value,t=document.getElementById("inputLastNameId").value,r=document.getElementById("inputPhoneId").value,s=document.getElementById("inputEmailId").value,o=document.getElementById("inputPasswordId").value,n=document.getElementById("inputRePasswordId").value,a=document.getElementById("atou").checked;e.trim().length<2&&(this.setSignUpFormErrorMessages("msgFirstNameId",m.translate("tr","SignUpFirstNameAlert")),this.setSignUpFormErrorInput("inputFirstNameId","#b82c0d")),t.trim().length<2&&(this.setSignUpFormErrorMessages("msgLastNameId",m.translate("tr","SignUpLastNameAlert")),this.setSignUpFormErrorInput("inputLastNameId","#b82c0d")),r.trim().length<14&&(this.setSignUpFormErrorMessages("msgPhoneId",m.translate("tr","SignUpPhoneAlert")),this.setSignUpFormErrorInput("inputPhoneId","#b82c0d")),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(s)||(this.setSignUpFormErrorMessages("msgEmailId",m.translate("tr","SignUpEmailAlert")),this.setSignUpFormErrorInput("inputEmailId","#b82c0d")),o.trim().length<8&&(this.setSignUpFormErrorMessages("msgPasswordId",m.translate("tr","SignUpPasswordAlert")),this.setSignUpFormErrorInput("inputPasswordId","#b82c0d")),(n.trim().length<8||o!==n)&&(this.setSignUpFormErrorMessages("msgRePasswordId",m.translate("tr","SignUpRePasswordAlert")),this.setSignUpFormErrorInput("inputRePasswordId","#b82c0d")),a?(document.getElementById("signupform").style.display="none",document.getElementById("signupinfo").style.display="block",document.getElementById("inputFirstNameId").value="",document.getElementById("inputLastNameId").value="",document.getElementById("inputPhoneId").value="",document.getElementById("inputEmailId").value="",document.getElementById("inputPasswordId").value="",document.getElementById("inputRePasswordId").value="",document.getElementById("inputFirstNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputLastNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPhoneId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputEmailId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPasswordId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputRePasswordId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgFirstNameId").innerHTML=" ",document.getElementById("msgLastNameId").innerHTML=" ",document.getElementById("msgPhoneId").innerHTML=" ",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgPasswordId").innerHTML=" ",document.getElementById("msgRePasswordId").innerHTML=" ",document.getElementById("iconFirstNameId").style.display="none",document.getElementById("iconLastNameId").style.display="none",document.getElementById("iconPhoneId").style.display="none",document.getElementById("iconEmailId").style.display="none",document.getElementById("iconPasswordId").style.display="none",document.getElementById("iconRePasswordId").style.display="none"):document.getElementById("atou").classList.add("checkederror")}},{key:"setSignUpFormErrorMessages",value:function(e,t,r){var s=document.getElementById(e);s.innerHTML=t,s.style.display=r}},{key:"setSignUpFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim()),a=document.getElementById("inputPasswordId").value.trim(),i=document.getElementById("inputRePasswordId").value.trim();switch(e){case"inputFirstNameProcess":n.length<2?(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpFirstNameAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputLastNameProcess":n.length<2?(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpLastNameAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputPhoneProcess":n.length<14?(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpPhoneAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)?(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800")):(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpEmailAlert")),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":n.length<8?(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpPasswordAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800"));break;case"inputRePasswordProcess":n.length<8||a!==i?(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpRePasswordAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d")):(this.setSignUpFormErrorMessages(r,""),this.setSignUpFormErrorMessages(s,"","block"),this.setSignUpFormErrorInput(t,"#70a800"))}}},{key:"verifyContentErrorDelete",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpFirstNameAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputLastNameProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpLastNameAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputPhoneProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpPhoneAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputEmailProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpEmailAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpPasswordAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"));break;case"inputRePasswordProcess":0===n.length&&(this.setSignUpFormErrorMessages(r,m.translate("tr","SignUpRePasswordAlert"),""),this.setSignUpFormErrorMessages(s,"","none"),this.setSignUpFormErrorInput(t,"#b82c0d"))}}}]),e}()),jQuery(function(e){e("#inputPhoneId").mask("0599 999 99 99")}),console.log("Mainpage App Sign Up Form Validations Javascript Loading Successful")},function(e,t){var r={tr:{LoginEmailAlert:"HATALI E-POSTA",LoginPasswordAlert:"EN AZ 8 KARAKTER"},en:{LoginEmailAlert:"HATALI E-POSTA",LoginPasswordAlert:"EN AZ 8 KARAKTER"}},n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.loginform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendLoginForm",value:function(){var e=document.getElementById("loginemail").value,t=document.getElementById("loginpassword").value;/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(e)||(this.setLoginFormErrorMessages("msgEmailId",n.translate("tr","LoginEmailAlert")),this.setLoginFormErrorInput("loginemail","#b82c0d")),t.trim().length<8?(this.setLoginFormErrorMessages("msgPasswordId",n.translate("tr","LoginPasswordAlert")),this.setLoginFormErrorInput("loginpassword","#b82c0d")):(document.getElementById("loginemail").value="",document.getElementById("loginpassword").value="",document.getElementById("loginemail").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("loginpassword").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgPasswordId").innerHTML=" ")}},{key:"setLoginFormErrorMessages",value:function(e,t){document.getElementById(e).innerHTML=t}},{key:"setLoginFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,r){var s=document.getElementById(t),o=(document.getElementById(r),s.value.trim());switch(e){case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(o)?(this.setLoginFormErrorMessages(r,"",""),this.setLoginFormErrorInput(t,"rgba(117,140,163,0.3)")):(this.setLoginFormErrorMessages(r,n.translate("tr","LoginEmailAlert"),""),this.setLoginFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":o.length<8?(this.setLoginFormErrorMessages(r,n.translate("tr","LoginPasswordAlert"),""),this.setLoginFormErrorInput(t,"#b82c0d","")):(this.setLoginFormErrorMessages(r,"",""),this.setLoginFormErrorInput(t,"rgba(117,140,163,0.3)",""))}}},{key:"verifyContentErrorDelete",value:function(e,t,r){var s=document.getElementById(t),o=(document.getElementById(r),s.value.trim());switch(e){case"inputEmailProcess":0===o.length&&(this.setLoginFormErrorMessages(r,n.translate("tr","LoginEmailAlert"),""),this.setLoginFormErrorInput(t,"#b82c0d"));break;case"inputPasswordProcess":0===o.length&&(this.setLoginFormErrorMessages(r,n.translate("tr","LoginPasswordAlert"),""),this.setLoginFormErrorInput(t,"#b82c0d"))}}}]),e}()),console.log("Mainpage App Login Form Validations Javascript Loading Successful")},function(e,t){var r={tr:{ContactUsFirstNameAlert:"EN AZ 2 KARAKTER",ContactUsLastNameAlert:"EN AZ 2 KARAKTER",ContactUsPhoneAlert:"HATALI TELEFON",ContactUsEmailAlert:"HATALI E-POSTA",ContactUsSubjectAlert:"KONU SEÇİNİZ",ContactUsMessageAlert:"EN AZ 10 KARAKTER",ContactUsMessageCharacterOutAlert:"2000 KARAKTER SINIRI AŞILDI"},en:{ContactUsFirstNameAlert:"EN AZ 2 KARAKTER",ContactUsLastNameAlert:"EN AZ 2 KARAKTER",ContactUsPhoneAlert:"HATALI TELEFON",ContactUsEmailAlert:"HATALI E-POSTA",ContactUsSubjectAlert:"KONU SEÇİNİZ",ContactUsMessageAlert:"EN AZ 10 KARAKTER",ContactUsMessageCharacterOutAlert:"2000 KARAKTER SINIRI AŞILDI"}},a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.contactform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendContactUsForm",value:function(){var e=document.getElementById("inputFirstNameId").value,t=document.getElementById("inputLastNameId").value,r=document.getElementById("inputPhoneId").value,s=document.getElementById("inputEmailId").value,o=document.getElementById("inputMessageId").value,n=document.getElementById("inputSubjectId").value;e.trim().length<2&&(this.setContactUsFormErrorMessages("msgFirstNameId",a.translate("tr","ContactUsFirstNameAlert")),this.setContactUsFormErrorInput("inputFirstNameId","#b82c0d")),t.trim().length<2&&(this.setContactUsFormErrorMessages("msgLastNameId",a.translate("tr","ContactUsLastNameAlert")),this.setContactUsFormErrorInput("inputLastNameId","#b82c0d")),r.trim().length<14&&(this.setContactUsFormErrorMessages("msgPhoneId",a.translate("tr","ContactUsPhoneAlert")),this.setContactUsFormErrorInput("inputPhoneId","#b82c0d")),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(s)||(this.setContactUsFormErrorMessages("msgEmailId",a.translate("tr","ContactUsEmailAlert")),this.setContactUsFormErrorInput("inputEmailId","#b82c0d")),-1==n&&(this.setContactUsFormErrorMessages("msgSubjectId",a.translate("tr","ContactUsSubjectAlert")),this.setContactUsFormErrorInput("inputSubjectId","#b82c0d")),o.trim().length<10?(this.setContactUsFormErrorMessages("msgMessageId",a.translate("tr","ContactUsMessageAlert")),this.setContactUsFormErrorInput("inputMessageId","#b82c0d")):(document.getElementById("contactusform").style.display="none",document.getElementById("contactusinfo").style.display="block",document.getElementById("inputFirstNameId").value="",document.getElementById("inputLastNameId").value="",document.getElementById("inputPhoneId").value="",document.getElementById("inputEmailId").value="",document.getElementById("inputSubjectId").value="-1",document.getElementById("inputMessageId").value="",document.getElementById("inputFirstNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputLastNameId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputPhoneId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputEmailId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputSubjectId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("inputMessageId").style.borderColor="rgba(117,140,163,0.3)",document.getElementById("msgFirstNameId").innerHTML=" ",document.getElementById("msgLastNameId").innerHTML=" ",document.getElementById("msgPhoneId").innerHTML=" ",document.getElementById("msgEmailId").innerHTML=" ",document.getElementById("msgSubjectId").innerHTML=" ",document.getElementById("msgMessageId").innerHTML=" ",document.getElementById("iconFirstNameId").style.display="none",document.getElementById("iconLastNameId").style.display="none",document.getElementById("iconPhoneId").style.display="none",document.getElementById("iconEmailId").style.display="none",document.getElementById("iconSubjectId").style.display="none",document.getElementById("iconMessageId").style.display="none")}},{key:"setContactUsFormErrorMessages",value:function(e,t,r){var s=document.getElementById(e);s.innerHTML=t,s.style.display=r}},{key:"setContactUsFormErrorInput",value:function(e,t){document.getElementById(e).style.borderColor=t}},{key:"verifyContent",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":n.length<2?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsFirstNameAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"));break;case"inputLastNameProcess":n.length<2?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsLastNameAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"));break;case"inputPhoneProcess":n.length<14?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsPhoneAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"));break;case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)?(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800")):(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsEmailAlert")),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"));break;case"inputSubjectProcess":"-1"==n?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsSubjectAlert")),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"));break;case"inputMessageProcess":n.length<10?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsMessageAlert")),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):2e3<=n.length?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsMessageCharacterOutAlert")),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"))}}},{key:"verifyContentErrorDelete",value:function(e,t,r,s){var o=document.getElementById(t),n=(document.getElementById(r),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":0===n.length&&(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsFirstNameAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"));break;case"inputLastNameProcess":0===n.length&&(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsLastNameAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"));break;case"inputPhoneProcess":0===n.length&&(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsPhoneAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"));break;case"inputEmailProcess":0===n.length&&(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUspEmailAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"));break;case"inputSubjectProcess":"-1"==n?(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsSubjectAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d")):(this.setContactUsFormErrorMessages(r,"",""),this.setContactUsFormErrorMessages(s,"","block"),this.setContactUsFormErrorInput(t,"#70a800"));break;case"inputMessageProcess":0===n.length&&(this.setContactUsFormErrorMessages(r,a.translate("tr","ContactUsMessageAlert"),""),this.setContactUsFormErrorMessages(s,"","none"),this.setContactUsFormErrorInput(t,"#b82c0d"))}}}]),e}()),jQuery(function(e){e("#inputPhoneId").mask("0599 999 99 99")}),console.log("Mainpage App Contact Us Form Validations Javascript Loading Successful")}]);
//# sourceMappingURL=mainpage-app.js.map
