/* Translation */
const translateObject = {

    'tr': {
        'ContactUsFirstNameAlert':'EN AZ 2 KARAKTER',
        'ContactUsLastNameAlert':'EN AZ 2 KARAKTER',
        'ContactUsPhoneAlert':'HATALI TELEFON',
        'ContactUsEmailAlert':'HATALI E-POSTA',
        'ContactUsSubjectAlert':'KONU SEÇİNİZ',
        'ContactUsMessageAlert':'EN AZ 10 KARAKTER',
        'ContactUsMessageCharacterOutAlert':'2000 KARAKTER SINIRI AŞILDI'
    },
    'en':{
        'ContactUsFirstNameAlert':'EN AZ 2 KARAKTER',
        'ContactUsLastNameAlert':'EN AZ 2 KARAKTER',
        'ContactUsPhoneAlert':'HATALI TELEFON',
        'ContactUsEmailAlert':'HATALI E-POSTA',
        'ContactUsSubjectAlert':'KONU SEÇİNİZ',
        'ContactUsMessageAlert':'EN AZ 10 KARAKTER',
        'ContactUsMessageCharacterOutAlert':'2000 KARAKTER SINIRI AŞILDI'
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
class ContactUsForm {

    constructor(){}

    sendContactUsForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let Message = document.getElementById("inputMessageId").value;
        let Subject = document.getElementById("inputSubjectId").value;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(FirstName.trim().length < 2){
            this.setContactUsFormErrorMessages("msgFirstNameId", Translation.translate('tr','ContactUsFirstNameAlert'));
            this.setContactUsFormErrorInput("inputFirstNameId","#b82c0d");
        }if(LastName.trim().length < 2){
            this.setContactUsFormErrorMessages("msgLastNameId", Translation.translate('tr','ContactUsLastNameAlert'));
            this.setContactUsFormErrorInput("inputLastNameId","#b82c0d");
        }if(Phone.trim().length < 14){
            this.setContactUsFormErrorMessages("msgPhoneId", Translation.translate('tr','ContactUsPhoneAlert'));
            this.setContactUsFormErrorInput("inputPhoneId","#b82c0d");
        }if(!emailPattern.test(Email)){
            this.setContactUsFormErrorMessages("msgEmailId", Translation.translate('tr','ContactUsEmailAlert'));
            this.setContactUsFormErrorInput("inputEmailId","#b82c0d");
        }if(Subject == -1){
            this.setContactUsFormErrorMessages("msgSubjectId", Translation.translate('tr','ContactUsSubjectAlert'));
            this.setContactUsFormErrorInput("inputSubjectId","#b82c0d");
        }if(Message.trim().length < 10){
            this.setContactUsFormErrorMessages("msgMessageId", Translation.translate('tr','ContactUsMessageAlert'));
            this.setContactUsFormErrorInput("inputMessageId","#b82c0d");
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

    setContactUsFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.style.display = inputIconCheck;
    }
    setContactUsFormErrorInput(inputIdSelector, borderColor){
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

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length < 2){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsFirstNameAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsLastNameAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputPhoneProcess":
                if(val.length < 14){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsPhoneAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsEmailAlert'));
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputSubjectProcess":
                if(val == "-1"){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsSubjectAlert'));
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputMessageProcess":
                if(val.length < 10){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsMessageAlert'));
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else if(val.length >= 2000){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsMessageCharacterOutAlert'));
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setContactUsFormErrorMessages(messageSpanSelector, "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
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
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsFirstNameAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsLastNameAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsPhoneAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUspEmailAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputSubjectProcess":
                if(val == "-1"){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsSubjectAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                } else {
                    this.setContactUsFormErrorMessages(messageSpanSelector, "", "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "block");
                    this.setContactUsFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputMessageProcess":
                if(val.length===0){
                    this.setContactUsFormErrorMessages(messageSpanSelector, Translation.translate('tr','ContactUsMessageAlert'), "");
                    this.setContactUsFormErrorMessages(messageIconSelector,"", "none");
                    this.setContactUsFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.contactform = new ContactUsForm();
/* Login Sign Up Form */

/* Masked Input Plugin for jQuery */
jQuery(function($){
    $("#inputPhoneId").mask("0599 999 99 99");
});
/* Masked Input Plugin for jQuery */

/* Loading Info */
// console.log("Mainpage App Contact Us Form Validations Javascript Loading Successful");
/* Loading Info */