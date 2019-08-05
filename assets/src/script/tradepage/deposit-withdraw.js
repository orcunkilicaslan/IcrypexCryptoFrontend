/* Deposit-Withdraw Checkbox Button Validation */
jQuery(function($) {
    if($('.stepwizard-validation').hasClass('formlabelvalidation')){
        var WinzardiReadCheck = $('#WinzardiReadCheck').is(':checked');
        window.onload = function(e){
            if(!WinzardiReadCheck){
                $('#WinzardBottomButtonArea').tooltip({container: '.stepwizard-tabcont-form-btn-tooltiparea', title: ' "Okudum, anladım" İşaretleyiniz ', placement: 'top'}).addClass('disabled');
                $('#WinzardBottomButtonDiv').addClass('secondary').removeClass('success');
                $('#WinzardBottomButtonLink').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
            }
        }
    }
});

$("#WinzardiReadCheck").click(function(e){
    if(($(this)).is(':checked')){
        $('#WinzardBottomButtonArea').tooltip('disable').removeClass('disabled');;
        $('#WinzardBottomButtonDiv').addClass('success').removeClass('secondary');
        $('#WinzardBottomButtonLink').addClass('btn-success').removeClass('btn-secondary').attr("disabled", false);
    }else{
        $('#WinzardBottomButtonArea').tooltip('enable', {container: '.stepwizard-tabcont-form-btn-tooltiparea', title: ' "Okudum, anladım" İşaretleyiniz ', placement: 'top'}).addClass('disabled');
        $('#WinzardBottomButtonDiv').addClass('secondary').removeClass('success');
        $('#WinzardBottomButtonLink').addClass('btn-secondary').removeClass('btn-success').attr("disabled", true);
    }
});
/* Deposit-Withdraw Checkbox Button Validation */

/* Loading Info */
// console.log("Tradepage App Deposit-Withdraw Bottom Button Validation Javascript Loading Successful");
/* Loading Info */