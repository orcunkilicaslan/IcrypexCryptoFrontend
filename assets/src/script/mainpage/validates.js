/* Loading Info */
console.log("Mainpage App Validates Javascript Loading Successful");
/* Loading Info */

/* Component Label Form */
class HomepageRegisterForm {

    constructor(){}

    sendHomepageRegisterForm(){}

    setHomepageRegisterFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.style.display = inputIconCheck;
    }
    setHomepageRegisterFormErrorInput(inputIdSelector, borderColor){
        let ErrorInputClass = document.getElementById(inputIdSelector);
        ErrorInputClass.style.borderColor = borderColor;
        //ErrorInputClass.classList.add("mystyle");
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let phonePatternGsm = /^\(5\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // GSM Phone Pattern
        let phonePatternAll = /^\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // ALL Phone Pattern
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);

        let val = inputSelectorTag.value.trim();

        let Password = document.getElementById("inputPasswordId").value.trim();
        let RePassword = document.getElementById("inputRePasswordId").value.trim();

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length<2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 2 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputLastNameProcess":
                if(val.length<2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 2 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputPhoneProcess":
                if(val.length<14){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"HATALI TELEFON", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"HATALI E-POSTA", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPasswordProcess":
                if(val.length<6){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 6 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length<6 || (Password !== RePassword)){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"ŞİFRELER UYUŞMUYOR", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);
        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 2 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 2 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"HATALI TELEFON", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"HATALI E-POSTA", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"EN AZ 6 KARAKTER", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"ŞİFRELER UYUŞMUYOR", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.homepageregisterform = new HomepageRegisterForm();
/* Component Label Form */

/* Masked Input Plugin for jQuery */
jQuery(function($){
    $("#inputPhoneId").mask("0999 999 99 99");
});
/* Masked Input Plugin for jQuery */