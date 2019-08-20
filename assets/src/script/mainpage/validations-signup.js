/* Translation */
const translateObject = {

    'tr': {
        'SignUpFirstNameAlert':'EN AZ 2 KARAKTER',
        'SignUpLastNameAlert':'EN AZ 2 KARAKTER',
        'SignUpPhoneAlert':'HATALI TELEFON',
        'SignUpEmailAlert':'HATALI E-POSTA',
        'SignUpPasswordAlert':'EN AZ 8 KARAKTER',
        'SignUpRePasswordAlert':'ŞİFRELER UYUŞMUYOR'
    },
    'en':{
        'SignUpFirstNameAlert':'EN AZ 2 KARAKTER',
        'SignUpLastNameAlert':'EN AZ 2 KARAKTER',
        'SignUpPhoneAlert':'HATALI TELEFON',
        'SignUpEmailAlert':'HATALI E-POSTA',
        'SignUpPasswordAlert':'EN AZ 8 KARAKTER',
        'SignUpRePasswordAlert':'ŞİFRELER UYUŞMUYOR'
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

/* Login Sign Up Form */
class SignUpForm {

    constructor(){}

    sendSignUpForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Password = document.getElementById("inputPasswordId").value;
        let RePassword = document.getElementById("inputRePasswordId").value;
        let atouLabel = document.getElementById("atou").checked;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(FirstName.trim().length < 2){
            this.setSignUpFormErrorMessages("msgFirstNameId", Translation.translate('tr','SignUpFirstNameAlert'));
            this.setSignUpFormErrorInput("inputFirstNameId","#b82c0d");
        }if(LastName.trim().length < 2){
            this.setSignUpFormErrorMessages("msgLastNameId", Translation.translate('tr','SignUpLastNameAlert'));
            this.setSignUpFormErrorInput("inputLastNameId","#b82c0d");
        }if(Phone.trim().length < 14){
            this.setSignUpFormErrorMessages("msgPhoneId", Translation.translate('tr','SignUpPhoneAlert'));
            this.setSignUpFormErrorInput("inputPhoneId","#b82c0d");
        }if(!emailPattern.test(Email)){
            this.setSignUpFormErrorMessages("msgEmailId", Translation.translate('tr','SignUpEmailAlert'));
            this.setSignUpFormErrorInput("inputEmailId","#b82c0d");
        }if(Password.trim().length < 8){
            this.setSignUpFormErrorMessages("msgPasswordId", Translation.translate('tr','SignUpPasswordAlert'));
            this.setSignUpFormErrorInput("inputPasswordId","#b82c0d");
        }if(RePassword.trim().length < 8 || (Password !== RePassword)){
            this.setSignUpFormErrorMessages("msgRePasswordId", Translation.translate('tr','SignUpRePasswordAlert'));
            this.setSignUpFormErrorInput("inputRePasswordId","#b82c0d");
        }if(!atouLabel){
            document.getElementById('atou').classList.add("checkederror");
        }else{
            document.getElementById('signupform').style.display = "none";
            document.getElementById('signupinfo').style.display = "block";

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

    setSignUpFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.style.display = inputIconCheck;
    }
    setSignUpFormErrorInput(inputIdSelector, borderColor){
        let ErrorInputClass = document.getElementById(inputIdSelector);
        ErrorInputClass.style.borderColor = borderColor;
        //ErrorInputClass.classList.add(inputAddClass);
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
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpFirstNameAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpLastNameAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPhoneProcess":
                if(val.replace(/\s/g, "").length < 11){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpPhoneAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpEmailAlert'));
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpPasswordAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length < 8 || (Password !== RePassword)){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpRePasswordAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setSignUpFormErrorMessages(messageSpanSelector, "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setSignUpFormErrorInput(inputIdSelector,"#70a800");
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
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpFirstNameAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpLastNameAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.replace(/\s/g, "").length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpPhoneAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpEmailAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpPasswordAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length===0){
                    this.setSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','SignUpRePasswordAlert'), "");
                    this.setSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.signupform = new SignUpForm();
/* Login Sign Up Form */

/* Masked Input Plugin for jQuery */
$(document).ready(function(){
    $("#inputPhoneId").inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
});
/* Masked Input Plugin for jQuery */

/* Loading Info */
// console.log("Mainpage App Sign Up Form Validations Javascript Loading Successful");
/* Loading Info */