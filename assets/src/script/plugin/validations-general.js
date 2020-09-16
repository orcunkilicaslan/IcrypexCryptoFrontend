/* General Valid Form */
const translateObject = {

    'tr': {
        'NameAlert':'En Az 2 Karakter',
        'SurnameAlert':'En Az 2 Karakter',
        'PhoneAlert':'',
        'EmailAlert':'Hatalı Format',
        'Min10Character':'En Az 10 Karakter',
        'PleaseChoose':'Lütfen Seçiniz',
        'MessageAlert':'En Az 10 Karakter',
        'MessageCharacterOutAlert':'En Fazla 2000 Karakter',
        'PasswordAlert':'En Az 8 Karakter',
        'RePasswordAlert':'Şifreler Uyuşmuyor',
        'IdentityNoAlert':'11 Karakter Giriniz',
        'DateSelectAlert':'Tarih Seçiniz'
    },
    'en':{
        'NameAlert':'En Az 2 Karakter',
        'SurnameAlert':'En Az 2 Karakter',
        'PhoneAlert':'',
        'EmailAlert':'Hatalı Format',
        'Min10Character':'En Az 10 Karakter',
        'PleaseChoose':'Lütfen Seçiniz',
        'MessageAlert':'En Az 10 Karakter',
        'MessageCharacterOutAlert':'En Fazla 2000 Karakter',
        'PasswordAlert':'En Az 8 Karakter',
        'RePasswordAlert':'Şifreler Uyuşmuyor',
        'IdentityNoAlert':'11 Karakter Giriniz',
        'DateSelectAlert':'Tarih Seçiniz'
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

/* General Valid Form */
class GeneralValidForm {

    constructor(){}

    sendGeneralValidForm(){}

    sendHomepageRegisterForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Password = document.getElementById("inputPasswordId").value;
        let RePassword = document.getElementById("inputRePasswordId").value;
        let termsOfUseCheck = document.getElementById("termsOfUseCheck").checked;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let validStatus = false;

        if(!validStatus) {

            if(FirstName.trim().length < 2){
                this.setGeneralValidFormErrorMessages("msgFirstNameId", Translation.translate('tr','NameAlert'));
                validStatus = true;
            }
            if(LastName.trim().length < 2){
                this.setGeneralValidFormErrorMessages("msgLastNameId", Translation.translate('tr','SurnameAlert'));
                validStatus = true;
            }
            if(Phone.trim().replace(/\s/g, "").length < 11){
                this.setGeneralValidFormErrorMessages("msgPhoneId", Translation.translate('tr','PhoneAlert'));
                validStatus = true;
            }
            if(!emailPattern.test(Email)){
                this.setGeneralValidFormErrorMessages("msgEmailId", Translation.translate('tr','EmailAlert'));
                validStatus = true;
            }
            if(Password.trim().length < 8){
                this.setGeneralValidFormErrorMessages("msgPasswordId", Translation.translate('tr','PasswordAlert'));
                validStatus = true;
            }
            if(RePassword.trim().length < 8 || (Password !== RePassword)){
                this.setGeneralValidFormErrorMessages("msgRePasswordId", Translation.translate('tr','RePasswordAlert'));
                validStatus = true;
            }
            if(!termsOfUseCheck){
                document.getElementById('labeltermsOfUseCheck').classList.add("checkederror");
                validStatus = true;
            }
            return true;

        }else{
            return false;

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
            this.setGeneralValidFormErrorMessages("msgFirstNameId", Translation.translate('tr','NameAlert'));
        }if(LastName.trim().length < 2){
            this.setGeneralValidFormErrorMessages("msgLastNameId", Translation.translate('tr','SurnameAlert'));
        }if(Phone.trim().length < 11){
            this.setGeneralValidFormErrorMessages("msgPhoneId", Translation.translate('tr','PhoneAlert'));
        }if(!emailPattern.test(Email)){
            this.setGeneralValidFormErrorMessages("msgEmailId", Translation.translate('tr','EmailAlert'));
        }if(Password.trim().length < 8){
            this.setGeneralValidFormErrorMessages("msgPasswordId", Translation.translate('tr','PasswordAlert'));
        }if(RePassword.trim().length < 8 || (Password !== RePassword)){
            this.setGeneralValidFormErrorMessages("msgRePasswordId", Translation.translate('tr','RePasswordAlert'));
        }if(!atouLabel){
            document.getElementById('atou').classList.add("checkederror");
        }else{
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

    sendLoginForm(){
        let Email = document.getElementById("loginemail").value;
        let Password = document.getElementById("loginpassword").value;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(!emailPattern.test(Email)){
            this.setGeneralValidFormErrorMessages("msgEmailId", Translation.translate('tr','EmailAlert'));
        }if(Password.trim().length < 8){
            this.setGeneralValidFormErrorMessages("msgPasswordId", Translation.translate('tr','PasswordAlert'));
        }else{
            document.getElementById('loginemail').value = "";
            document.getElementById('loginpassword').value = "";

            document.getElementById('loginemail').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('loginpassword').style.borderColor = "rgba(117,140,163,0.3)";

            document.getElementById('msgEmailId').innerHTML = " ";
            document.getElementById('msgPasswordId').innerHTML = " ";
        }
    }

    sendContactUsForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Message = document.getElementById("inputMessageId").value;
        let Subject = document.getElementById("inputSubjectId").value;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(FirstName.trim().length < 2){
            this.setGeneralValidFormErrorMessages("msgFirstNameId", Translation.translate('tr','NameAlert'));
        }if(LastName.trim().length < 2){
            this.setGeneralValidFormErrorMessages("msgLastNameId", Translation.translate('tr','SurnameAlert'));
        }if(Phone.trim().length < 14){
            this.setGeneralValidFormErrorMessages("msgPhoneId", Translation.translate('tr','PhoneAlert'));
        }if(!emailPattern.test(Email)){
            this.setGeneralValidFormErrorMessages("msgEmailId", Translation.translate('tr','EmailAlert'));
        }if(Subject == -1){
            this.setGeneralValidFormErrorMessages("msgSubjectId", Translation.translate('tr','PleaseChoose'));
        }if(Message.trim().length < 10){
            this.setGeneralValidFormErrorMessages("msgMessageId", Translation.translate('tr','MessageAlert'));
        }else{
            document.getElementById('contactusform').style.display = "none";
            document.getElementById('contactusinfo').style.display = "block";

            document.getElementById('inputFirstNameId').value = "";
            document.getElementById('inputLastNameId').value = "";
            document.getElementById('inputPhoneId').value = "";
            document.getElementById('inputEmailId').value = "";
            document.getElementById('inputSubjectId').value = "-1";
            document.getElementById('inputMessageId').value = "";

            document.getElementById('inputFirstNameId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputLastNameId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputPhoneId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputEmailId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputSubjectId').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('inputMessageId').style.borderColor = "rgba(117,140,163,0.3)";

            document.getElementById('msgFirstNameId').innerHTML = " ";
            document.getElementById('msgLastNameId').innerHTML = " ";
            document.getElementById('msgPhoneId').innerHTML = " ";
            document.getElementById('msgEmailId').innerHTML = " ";
            document.getElementById('msgSubjectId').innerHTML = " ";
            document.getElementById('msgMessageId').innerHTML = " ";

            document.getElementById('iconFirstNameId').style.display = "none";
            document.getElementById('iconLastNameId').style.display = "none";
            document.getElementById('iconPhoneId').style.display = "none";
            document.getElementById('iconEmailId').style.display = "none";
            document.getElementById('iconSubjectId').style.display = "none";
            document.getElementById('iconMessageId').style.display = "none";
        }
    }

    setGeneralValidFormErrorMessages(inputIdSelector, inputErrorMessage, inputAddErrorMessageClass, inputRemoveErrorMessageClass){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.classList.add(inputAddErrorMessageClass);
        ErrorMessageText.classList.remove(inputRemoveErrorMessageClass);
    }
    setGeneralValidFormErrorInput(inputIdSelector){
        let ErrorInputClass = document.getElementById(inputIdSelector);
    }
    setGeneralValidFormErrorIcon(inputIdSelector, inputAddErrorIcon, inputRemoveErrorIcon){
        let ErrorIconClass = document.getElementById(inputIdSelector);
        ErrorIconClass.classList.add(inputAddErrorIcon);
        ErrorIconClass.classList.remove(inputRemoveErrorIcon);
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let phonePatternGsm = /^\(5\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // GSM Phone Pattern
        let phonePatternAll = /^\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // ALL Phone Pattern
        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);

        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputNameProcess":
                if(val.length < 2){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','NameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSurnameProcess":
                if(val.length < 2){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','SurnameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneTurProcess":
                if(val.replace(/\s/g, "").length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PhoneAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','EmailAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMin10CharacterProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','Min10Character'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputIdentityProcess":
                if(val.length < 11){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','IdentityNoAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputDateSelectProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','DateSelectAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "selectPleaseChoose":
                if(val === ""){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PleaseChoose'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "textareaMessageProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else if(val.length >= 2000){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageCharacterOutAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PasswordAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);
        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputNameProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','NameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSurameProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','SurnameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneTurProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PhoneAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','EmailAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMin10CharacterProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','Min10Character'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr',''), "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check","error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputIdentityProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','IdentityNoAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputDateSelectProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','DateSelectAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "selectPleaseChoose":
                if(val === ""){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PleaseChoose'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr',''), "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check","error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "textareaMessageProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else if(val.length >= 2000){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageCharacterOutAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr',''), "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check","error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PasswordAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;
        }
    }
}

window.generalvalidform = new GeneralValidForm();
/* General Valid Form */