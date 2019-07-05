/* Translation */
const translateObject = {

    'tr': {
        'HomepageRegisterFirstNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterLastNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterPhoneAlert':'HATALI TELEFON',
        'HomepageRegisterEmailAlert':'HATALI E-POSTA',
        'HomepageRegisterPasswordAlert':'EN AZ 8 KARAKTER',
        'HomepageRegisterRePasswordAlert':'ŞİFRELER UYUŞMUYOR'
    },
    'en':{
        'HomepageRegisterFirstNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterLastNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterPhoneAlert':'HATALI TELEFON',
        'HomepageRegisterEmailAlert':'HATALI E-POSTA',
        'HomepageRegisterPasswordAlert':'EN AZ 8 KARAKTER',
        'HomepageRegisterRePasswordAlert':'ŞİFRELER UYUŞMUYOR'
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

/* Homepage Register Form */
class HomepageRegisterForm {

    constructor(){}

    sendHomepageRegisterForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Password = document.getElementById("inputPasswordId").value;
        let RePassword = document.getElementById("inputRePasswordId").value;
        let termsOfUseCheck = document.getElementById("termsOfUseCheck").checked;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(FirstName.trim().length < 2){
            this.setHomepageRegisterFormErrorMessages("msgFirstNameId", Translation.translate('tr','HomepageRegisterFirstNameAlert'));
            this.setHomepageRegisterFormErrorInput("inputFirstNameId","#b82c0d");
        }if(LastName.trim().length < 2){
            this.setHomepageRegisterFormErrorMessages("msgLastNameId", Translation.translate('tr','HomepageRegisterLastNameAlert'));
            this.setHomepageRegisterFormErrorInput("inputLastNameId","#b82c0d");
        }if(Phone.trim().length < 14){
            this.setHomepageRegisterFormErrorMessages("msgPhoneId", Translation.translate('tr','HomepageRegisterPhoneAlert'));
            this.setHomepageRegisterFormErrorInput("inputPhoneId","#b82c0d");
        }if(!emailPattern.test(Email)){
            this.setHomepageRegisterFormErrorMessages("msgEmailId", Translation.translate('tr','HomepageRegisterEmailAlert'));
            this.setHomepageRegisterFormErrorInput("inputEmailId","#b82c0d");
        }if(Password.trim().length < 8){
            this.setHomepageRegisterFormErrorMessages("msgPasswordId", Translation.translate('tr','HomepageRegisterPasswordAlert'));
            this.setHomepageRegisterFormErrorInput("inputPasswordId","#b82c0d");
        }if(RePassword.trim().length < 8 || (Password !== RePassword)){
            this.setHomepageRegisterFormErrorMessages("msgRePasswordId", Translation.translate('tr','HomepageRegisterRePasswordAlert'));
            this.setHomepageRegisterFormErrorInput("inputRePasswordId","#b82c0d");
        }if(!termsOfUseCheck){
            document.getElementById('labeltermsOfUseCheck').classList.add("checkederror");
        }else{
            document.getElementById('homepageregisterform').style.display = "none";
            document.getElementById('homepageregisterinfo').style.display = "block";

            document.getElementById('inputFirstNameId').value = "";
            document.getElementById('inputLastNameId').value = "";
            document.getElementById('inputPhoneId').value = "";
            document.getElementById('inputEmailId').value = "";
            document.getElementById('inputPasswordId').value = "";
            document.getElementById('inputRePasswordId').value = "";

            document.getElementById('inputFirstNameId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputLastNameId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputPhoneId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputEmailId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputPasswordId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputRePasswordId').style.borderColor = "rgba(117,140,163,0.3)";

            document.getElementById('msgFirstNameId').innerHTML = " ";
            document.getElementById('msgLastNameId').innerHTML = " ";
            document.getElementById('msgPhoneId').innerHTML = " ";
            document.getElementById('msgEmailId').innerHTML = " ";
            document.getElementById('msgPasswordId').innerHTML = " ";
            document.getElementById('msgRePasswordId').innerHTML = " ";

            document.getElementById('iconFirstNameId').style.display = "none";
            document.getElementById('iconLastNameId').style.display = "none";
            document.getElementById('iconPhoneId').style.display = "none";
            document.getElementById('iconEmailId').style.display = "none";
            document.getElementById('iconPasswordId').style.display = "none";
            document.getElementById('iconRePasswordId').style.display = "none";
        }
    }

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
                if(val.length < 2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputPhoneProcess":
                if(val.length < 14){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
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
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPasswordAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "block");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length < 8 || (Password !== RePassword)){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterRePasswordAlert'), "");
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
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPasswordAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterRePasswordAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "none");
                    this.setHomepageRegisterFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.homepageregisterform = new HomepageRegisterForm();
/* Homepage Register Form */

/* Masked Input Plugin for jQuery */
jQuery(function($){
    $("#inputPhoneId").mask("0599 999 99 99");
});
/* Masked Input Plugin for jQuery */

/* Loading Info */
console.log("Mainpage App Homepage Register Form Validations Javascript Loading Successful");
/* Loading Info */