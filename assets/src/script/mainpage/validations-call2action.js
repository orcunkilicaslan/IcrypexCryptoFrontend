/* Call2Action Form */
const translateObject = {

    'tr': {
        'Call2ActionFirstNameNameAlert':'EN AZ 2 KARAKTER',
        'Call2ActionLastNameNameAlert':'EN AZ 2 KARAKTER',
        'Call2ActionPhoneAlert':'HATALI TELEFON',
        'Call2ActionEmailAlert':'HATALI E-POSTA',
    },
    'en':{
        'Call2ActionFirstNameNameAlert':'MINIMUM 2 CHARACTERS',
        'Call2ActionLastNameNameAlert':'MINIMUM 2 CHARACTERS',
        'Call2ActionPhoneAlert':'WRONG PHONE',
        'Call2ActionEmailAlert':'WRONG EMAIL',
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

/* Call2Action Form */
class Call2ActionForm {

    constructor(){}

    sendCall2ActionForm(){
        let FirstName = document.getElementById("inputC2AFirstNameId").value;
        let LastName = document.getElementById("inputC2ALastNameId").value;
        let Phone = document.getElementById("inputC2APhoneId").value;
        let Email = document.getElementById("inputC2AEmailId").value;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let validStatus = false;

        if(!validStatus) {

            if(FirstName.trim().length < 2){
                this.setCall2ActionFormErrorMessages("msgC2AFirstNameId", Translation.translate('tr','Call2ActionFirstNameNameAlert'));
                this.setCall2ActionFormErrorIcon("iconC2AFirstNameId","error", "check");
                //console.log("Error inputFirstNameId");
                validStatus = true;
            }
            if(LastName.trim().length < 2){
                this.setCall2ActionFormErrorMessages("msgC2ALastNameId", Translation.translate('tr','Call2ActionLastNameNameAlert'));
                this.setCall2ActionFormErrorIcon("iconC2ALastNameId","error", "check");
                //console.log("Error inputLastNameId");
                validStatus = true;
            }
            if(Phone.trim().replace(/\s/g, "").length < 11){
                this.setCall2ActionFormErrorMessages("msgC2APhoneId", Translation.translate('tr','Call2ActionPhoneAlert'));
                this.setCall2ActionFormErrorIcon("iconC2APhoneId","error", "check");
                //console.log("Error inputPhoneId");
                validStatus = true;
            }
            if(!emailPattern.test(Email)){
                this.setCall2ActionFormErrorMessages("msgC2AEmailId", Translation.translate('tr','Call2ActionEmailAlert'));
                this.setCall2ActionFormErrorIcon("iconC2AEmailId","error", "check");
                //console.log("Error inputEmailId");
                validStatus = true;
            }
            return true;

        }else{
            return false;

            document.getElementById('inputC2AFirstNameId').value = "";
            document.getElementById('inputC2ALastNameId').value = "";
            document.getElementById('inputC2APhoneId').value = "";
            document.getElementById('inputC2AEmailId').value = "";

            document.getElementById('msgC2AFirstNameId').innerHTML = " ";
            document.getElementById('msgC2ALastNameId').innerHTML = " ";
            document.getElementById('msgC2APhoneId').innerHTML = " ";
            document.getElementById('msgC2AEmailId').innerHTML = " ";

            document.getElementById('iconC2AFirstNameId').classList.remove("check");
            document.getElementById('iconC2AFirstNameId').classList.add("error");
            document.getElementById('iconC2ALastNameId').classList.remove("check");
            document.getElementById('iconC2ALastNameId').classList.add("error");
            document.getElementById('iconC2APhoneId').classList.remove("check");
            document.getElementById('iconC2APhoneId').classList.add("error");
            document.getElementById('iconC2AEmailId').classList.remove("check");
            document.getElementById('iconC2AEmailId').classList.add("error");
        }
    }

    setCall2ActionFormErrorMessages(inputIdSelector, inputErrorMessage, inputAddErrorMessageClass, inputRemoveErrorMessageClass){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.classList.add(inputAddErrorMessageClass);
        ErrorMessageText.classList.remove(inputRemoveErrorMessageClass);
    }
    setCall2ActionFormErrorInput(inputIdSelector){
        let ErrorInputClass = document.getElementById(inputIdSelector);
    }
    setCall2ActionFormErrorIcon(inputIdSelector, inputAddErrorIcon, inputRemoveErrorIcon){
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

            case "inputFirstNameProcess":
                if(val.length < 5){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionFirstNameNameAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }else{
                    this.setCall2ActionFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"check", "error");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 5){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionLastNameNameAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }else{
                    this.setCall2ActionFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"check", "error");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.replace(/\s/g, "").length < 11){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionPhoneAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }else{
                    this.setCall2ActionFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"check", "error");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionEmailAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }else{
                    this.setCall2ActionFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"check", "error");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
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

            case "inputFirstNameProcess":
                if(val.length===0){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionFirstNameNameAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionLastNameNameAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error", "check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionPhoneAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error","check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setCall2ActionFormErrorMessages(messageSpanSelector, Translation.translate('tr','Call2ActionEmailAlert'), "error", "check");
                    this.setCall2ActionFormErrorIcon(messageIconSelector,"error","check");
                    this.setCall2ActionFormErrorInput(inputIdSelector);
                }
                break;
        }
    }
}

window.call2actionform = new Call2ActionForm();
/* Call2Action Form */