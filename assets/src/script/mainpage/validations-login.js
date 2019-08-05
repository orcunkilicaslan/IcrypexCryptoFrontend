/* Translation */
const translateObject = {

    'tr': {
        'LoginEmailAlert':'HATALI E-POSTA',
        'LoginPasswordAlert':'EN AZ 8 KARAKTER'
    },
    'en':{
        'LoginEmailAlert':'HATALI E-POSTA',
        'LoginPasswordAlert':'EN AZ 8 KARAKTER'
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
class LoginForm {

    constructor(){}

    sendLoginForm(){
        let Email = document.getElementById("loginemail").value;
        let Password = document.getElementById("loginpassword").value;

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if(!emailPattern.test(Email)){
            this.setLoginFormErrorMessages("msgEmailId", Translation.translate('tr','LoginEmailAlert'));
            this.setLoginFormErrorInput("loginemail","#b82c0d");
        }if(Password.trim().length < 8){
            this.setLoginFormErrorMessages("msgPasswordId", Translation.translate('tr','LoginPasswordAlert'));
            this.setLoginFormErrorInput("loginpassword","#b82c0d");
        }else{
            document.getElementById('loginemail').value = "";
            document.getElementById('loginpassword').value = "";

            document.getElementById('loginemail').style.borderColor = "rgba(117,140,163,0.3)";
            document.getElementById('loginpassword').style.borderColor = "rgba(117,140,163,0.3)";

            document.getElementById('msgEmailId').innerHTML = " ";
            document.getElementById('msgPasswordId').innerHTML = " ";
        }
    }

    setLoginFormErrorMessages(inputIdSelector, inputErrorMessage){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
    }
    setLoginFormErrorInput(inputIdSelector, borderColor){
        let ErrorInputClass = document.getElementById(inputIdSelector);
        ErrorInputClass.style.borderColor = borderColor;
        //ErrorInputClass.classList.add("mystyle");
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector){

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);

        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setLoginFormErrorMessages(messageSpanSelector, Translation.translate('tr','LoginEmailAlert'), "");
                    this.setLoginFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setLoginFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginFormErrorInput(inputIdSelector,"rgba(117,140,163,0.3)");
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setLoginFormErrorMessages(messageSpanSelector, Translation.translate('tr','LoginPasswordAlert'), "");
                    this.setLoginFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setLoginFormErrorMessages(messageSpanSelector,"", "");
                    this.setLoginFormErrorInput(inputIdSelector,"rgba(117,140,163,0.3)", "");
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputEmailProcess":
                if(val.length===0){
                    this.setLoginFormErrorMessages(messageSpanSelector, Translation.translate('tr','LoginEmailAlert'), "");
                    this.setLoginFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setLoginFormErrorMessages(messageSpanSelector, Translation.translate('tr','LoginPasswordAlert'), "");
                    this.setLoginFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.loginform = new LoginForm();
/* Login Sign Up Form */

/* Loading Info */
// console.log("Mainpage App Login Form Validations Javascript Loading Successful");
/* Loading Info */