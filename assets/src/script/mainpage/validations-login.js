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

/* Login Sign Up Form */
class LoginSignUpForm {

    constructor(){}

    sendLoginSignUpForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Password = document.getElementById("inputPasswordId").value;
        let RePassword = document.getElementById("inputRePasswordId").value;
        let termsOfUseCheck = document.getElementById("termsOfUseCheck").checked;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(FirstName.trim().length < 2){
            this.setLoginSignUpFormErrorMessages("msgFirstNameId", Translation.translate('tr','HomepageRegisterFirstNameAlert'));
            this.setLoginSignUpFormLoginSignUpFormErrorInput("inputFirstNameId","#b82c0d");
        }if(LastName.trim().length < 2){
            this.setLoginSignUpFormErrorMessages("msgLastNameId", Translation.translate('tr','HomepageRegisterLastNameAlert'));
            this.setLoginSignUpFormErrorInput("inputLastNameId","#b82c0d");
        }if(Phone.trim().length < 14){
            this.setLoginSignUpFormErrorMessages("msgPhoneId", Translation.translate('tr','HomepageRegisterPhoneAlert'));
            this.setLoginSignUpFormErrorInput("inputPhoneId","#b82c0d");
        }if(!emailPattern.test(Email)){
            this.setLoginSignUpFormErrorMessages("msgEmailId", Translation.translate('tr','HomepageRegisterEmailAlert'));
            this.setLoginSignUpFormErrorInput("inputEmailId","#b82c0d");
        }if(Password.trim().length < 8){
            this.setLoginSignUpFormErrorMessages("msgPasswordId", Translation.translate('tr','HomepageRegisterPasswordAlert'));
            this.setLoginSignUpFormErrorInput("inputPasswordId","#b82c0d");
        }if(RePassword.trim().length < 8 || (Password !== RePassword)){
            this.setLoginSignUpFormErrorMessages("msgRePasswordId", Translation.translate('tr','HomepageRegisterRePasswordAlert'));
            this.setLoginSignUpFormErrorInput("inputRePasswordId","#b82c0d");
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

    setLoginSignUpFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.style.display = inputIconCheck;
    }
    setLoginSignUpFormErrorInput(inputIdSelector, borderColor){
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
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputPhoneProcess":
                if(val.length < 14){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setLoginSignUpFormLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setLoginSignUpFormLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPasswordAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length < 8 || (Password !== RePassword)){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterRePasswordAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setLoginSignUpFormLoginSignUpFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "block");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#70a800", "");
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
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPasswordAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputRePasswordProcess":
                if(val.length===0){
                    this.setLoginSignUpFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterRePasswordAlert'), "");
                    this.setLoginSignUpFormErrorMessages(messageIconSelector,"", "none");
                    this.setLoginSignUpFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.loginsignupform = new LoginSignUpForm();
/* Login Sign Up Form */

/* Loading Info */
console.log("Mainpage App Login Sign Up Form Validations Javascript Loading Successful");
/* Loading Info */