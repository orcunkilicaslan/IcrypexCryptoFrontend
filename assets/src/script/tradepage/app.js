/* Login */
class LoginForm{

   sendLoginForm(){

       let email = document.querySelector('#loginemail').value;
       let password = document.querySelector('#loginpassword').value;

       let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

       if(password.trim().length<3){

           this.setLoginFormErrorMessages("msgpassword", "Pass Hata");

       }if(!emailPattern.test(email.trim())){

           this.setLoginFormErrorMessages("msgemail", "Mail Hata");
       }
       else
       {
           //XMLHttpRequest()
       }
   }

   setLoginFormErrorMessages(selector, message){
       let inputerrormessage = document.getElementById(selector);
       inputerrormessage.innerHTML  = message;
   }

   verifyFormContent(processName, inputSelector, messageSpanSelector){

       let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

       let inputSelectorTag = document.getElementById(inputSelector);
       let messageSpanSelectorTag = document.getElementById(messageSpanSelector);

       let val = inputSelectorTag.value.trim();

       switch (processName) {

           case "password":

               if(val.length<3){
                   this.setLoginFormErrorMessages(messageSpanSelector, "Pass Hata");
               }else{
                   this.setLoginFormErrorMessages(messageSpanSelector, "");
               }
               break;

           case "email":

               if(!emailPattern.test(val)){
                   this.setLoginFormErrorMessages(messageSpanSelector, "Mail Hata");
               }else{
                   this.setLoginFormErrorMessages(messageSpanSelector, "");
               }
               break;

       }

   }

   verifyFormContentErrorDelete(processName, inputSelector, messageSpanSelector){

       let inputSelectorTag = document.getElementById(inputSelector);
       let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
       let val = inputSelectorTag.value.trim();

       switch (processName) {

           case "password":

               if(val.length===0){
                   this.setLoginFormErrorMessages(messageSpanSelector, "Pass Hata");
               }
               break;

           case "email":

               if(val.length===0){
                   this.setLoginFormErrorMessages(messageSpanSelector, "Mail Hata");
               }
               break;

       }

   }

}

window.login = new LoginForm();
/* Login */

/* Header Bottom Lite Price */
$('#headerbottompricelite').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    items:3,
    margin:10,
    animateOut: 'fadeOut'
});
/* Header Bottom Lite Price */

/* Deposit and Withdraw */
$(document).ready(function() {
    $('#depositwizard').bootstrapWizard({onNext: function(tab, navigation, index) {
            if(index==2) {
                // Make sure we entered the name
                if(!$('#name').val()) {
                    alert('You must enter your name');
                    $('#name').focus();
                    return false;
                }
            }

            // Set the name for the next tab
            $('#tab3').html('Hello, ' + $('#name').val());

        }, onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#depositwizard .progress-bar').css({width:$percent+'%'});
        }});
    window.prettyPrint && prettyPrint()
});
/* Deposit and Withdraw */


/* Loading Info */
console.log("Tradepage App Javascript Loading Successful");
/* Loading Info */