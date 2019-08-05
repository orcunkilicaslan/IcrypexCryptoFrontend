/* Translation */
const translateObject = {

    'tr': {
        'ProfileSettingsOldPasswordAlert':'EN AZ 8 KARAKTER',
        'ProfileSettingsNewPasswordAlert':'EN AZ 8 KARAKTER',
        'ProfileSettingsNewRePasswordAlert':'ŞİFRELER UYUŞMUYOR',
        'ProfileSettingsOldSecurityAlert':'EN AZ 5 KARAKTER',
        'ProfileSettingsNewSecurityAlert':'EN AZ 5 KARAKTER',
        'ProfileSettingsNewReSecurityAlert':'KELİMELER UYUŞMUYOR'
    },
    'en':{
        'ProfileSettingsOldPasswordAlert':'EN AZ 8 KARAKTER',
        'ProfileSettingsNewPasswordAlert':'EN AZ 8 KARAKTER',
        'ProfileSettingsNewRePasswordAlert':'ŞİFRELER UYUŞMUYOR',
        'ProfileSettingsOldSecurityAlert':'EN AZ 5 KARAKTER',
        'ProfileSettingsNewSecurityAlert':'EN AZ 5 KARAKTER',
        'ProfileSettingsNewReSecurityAlert':'KELİMELER UYUŞMUYOR'
    }
};

class Translation {
    static translate(language, translationKey){
        if(translateObject.hasOwnProperty(language)){

            if(translateObject[language].hasOwnProperty(translationKey)){
                return translateObject[language][translationKey];
            }
            return "";
        }
        return "";
    }
}
/* Translation */

/* Profile Login Settings Form */
class ProfileSettingsLoginForm {

    constructor(){}


    setSignUpFormErrorMessages(inputIdSelector, inputErrorMessage){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
    }
    setSignUpFormErrorInput(inputIdSelector, borderColor){
        let ErrorInputClass = document.getElementById(inputIdSelector);
        ErrorInputClass.style.borderColor = borderColor;
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);

        let val = inputSelectorTag.value.trim();

        let Password = document.getElementById("inputNewPasswordId").value.trim();
        let RePassword = document.getElementById("inputNewRePasswordId").value.trim();

        let Security = document.getElementById("inputNewSecurityId").value.trim();
        let ReSecurity = document.getElementById("inputNewReSecurityId").value.trim();

        switch (inputProcessName) {

            case "inputOldPasswordProcess":
                if(val.length < 8){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsOldPasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputNewPasswordProcess":
                if(val.length < 8){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewPasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputNewRePasswordProcess":
                if(val.length < 8 || (Password !== RePassword)){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewRePasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputOldSecurityProcess":
                if(val.length < 5){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsOldSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputNewSecurityProcess":
                if(val.length < 5){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputNewReSecurityProcess":
                if(val.length < 5 || (Security !== ReSecurity)){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewReSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputOldPasswordProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsOldPasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputNewPasswordProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewPasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputNewRePasswordProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewRePasswordAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputOldSecurityProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsOldSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputNewSecurityProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputNewReSecurityProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','ProfileSettingsNewReSecurityAlert'));
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.profilesettingsform = new ProfileSettingsLoginForm();
/* Profile Login Settings Form */


/* Profile Login Settings Button Validation */
jQuery(function($) {

    if($('.profile-box').hasClass('changepasswordandsecurity')){
        window.onload = function(e){
            if($('#inputOldPasswordId').val().trim() === "" && $('#inputNewPasswordId').val().trim() === "" && $('#inputNewRePasswordId').val().trim() === ""){
                $('#ProfileNewPasswordTooltip').tooltip({container: '.profile-login-settings-tooltiparea', title: 'Bilgileri Eksiksiz Giriniz', placement: 'right'});
                $('#ProfileNewPasswordButton').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
            }
            if($('#inputOldSecurityId').val().trim() === "" && $('#inputNewSecurityId').val().trim() === "" && $('#inputNewReSecurityId').val().trim() === ""){
                $('#ProfileNewSecurityTooltip').tooltip({container: '.profile-login-settings-tooltiparea', title: 'Bilgileri Eksiksiz Giriniz', placement: 'right'});
                $('#ProfileNewSecurityButton').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
            }
        }
    }

    $('.changepassword').keyup(function() {
        if( $('#inputOldPasswordId').val().trim().length >= 8 && $('#inputNewPasswordId').val().trim().length >= 8 && ($('#inputNewPasswordId').val().trim() === $('#inputNewRePasswordId').val().trim()) ){
            $('#ProfileNewPasswordTooltip').tooltip('disable');
            $('#ProfileNewPasswordButton').addClass('btn-success').removeClass('btn-secondary').attr("disabled", false);
        }else{
            $('#ProfileNewPasswordTooltip').tooltip({container: '.profile-login-settings-tooltiparea', title: 'Bilgileri Eksiksiz Giriniz', placement: 'right'});
            $('#ProfileNewPasswordButton').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
        }
    });

    $('.changesecurity').keyup(function() {
        if( $('#inputOldSecurityId').val().trim().length >= 5 && $('#inputNewSecurityId').val().trim().length >= 5 && ($('#inputNewSecurityId').val().trim() === $('#inputNewReSecurityId').val().trim()) ){
            $('#ProfileNewSecurityTooltip').tooltip('disable');
            $('#ProfileNewSecurityButton').addClass('btn-success').removeClass('btn-secondary').attr("disabled", false);
        }else{
            $('#ProfileNewSecurityTooltip').tooltip({container: '.profile-login-settings-tooltiparea', title: 'Bilgileri Eksiksiz Giriniz', placement: 'right'});
            $('#ProfileNewSecurityButton').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
        }
    });

});
/* Profile Login Settings Button Validation */

/* Loading Info */
// console.log("Tradepage App Profile Login Settings Login Form Validations Javascript Loading Successful");
/* Loading Info */