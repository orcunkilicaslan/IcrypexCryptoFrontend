
/* Component Label Form */
class ComponentLabelForm {

    constructor(){}

    sendComponentLabelForm(){}

    setComponentLabelFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.style.display = inputIconCheck;
    }
    setComponentLabelFormErrorInput(inputIdSelector, borderColor){
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

        switch (inputProcessName) {

            case "inputNameProcess":
                if(val.length<3){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d", "");
                }else{
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "block");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#70a800", "");
                }
                break;

            case "inputPhoneProcess":
                if(val.length<14){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "block");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#70a800");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d");
                }else{
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "block");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#70a800");
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

            case "inputNameProcess":
                if(val.length===0){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setComponentLabelFormErrorMessages(messageSpanSelector,"HATA", "");
                    this.setComponentLabelFormErrorMessages(messageIconSelector,"", "none");
                    this.setComponentLabelFormErrorInput(inputIdSelector,"#b82c0d");
                }
                break;
        }
    }
}

window.testlabelform = new ComponentLabelForm();
/* Component Label Form */

/* Masked Input Plugin for jQuery */
jQuery(function($){
    $("#inputPhoneId").mask("0999 999 99 99");
});
/* Masked Input Plugin for jQuery */

/* Loading Info */
// console.log("Plugin App Component Label Form Validations Javascript Loading Successful");
/* Loading Info */