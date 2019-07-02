/* Header Nav Fixed */
$(window).scroll(function () {

    //var bodyWidth = window.innerWidth;
    //var bodyHeight = window.innerHeight;
    //var sliderHeight = $( ".scrollbannerheight" ).innerHeight();
    var scroll = $(window).scrollTop();

    if (scroll > 10) {
        $(".header").addClass("navscroll");
    } else {
        $(".header").removeClass("navscroll");
    }

});
/* Header Nav Fixed */

/* Header Bottom Space */
$(window).resize(function() {
    var headerHeight = $("header.header").height();
    $(".header-spacebottom").height(headerHeight);
});

$(".header .header-alert .close").click(function(){
    var headNavigation = $(".header-web").height();
    $(".header-spacebottom").height(headNavigation);
});

$(window).trigger('resize');
/* Header Bottom Space */

/* Navbar Menu */
$(function() {

    // Mobile Menu
    $('#dfn-navtggle').click(function () {
        $('.dfn-megamenu').toggleClass('dfn-canvaskapat');
    });
    $('.dfn-mobilemenu-mask').click(function () {
        $('.dfn-megamenu').removeClass('dfn-canvaskapat');
    });
    // Mobile Menu

    // Menu Active Class Added
    $('.dfn-menu-list > li > a').click(
        function(){

            $('.dfn-menu-list > li').removeClass('active navdropdown');
            $(this).parent().addClass('active navdropdown');

        }
    );
    // Menu Active Class Added

});
/* Navbar Menu */

/* Tooltip */
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
});
/* Tooltip */

/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */

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