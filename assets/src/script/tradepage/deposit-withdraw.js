/* Deposit-Withdraw Checkbox Button Validation */
window.onload = checkedCheckboxOnPageLoad();
var WinzardiReadCheck = document.getElementById("WinzardiReadCheck").checked;

function checkedCheckboxOnPageLoad() {
    if(!WinzardiReadCheck){
        $('#WinzardBottomButtonArea').tooltip({container: ".stepwizard-tabcont-form-btn-tooltiparea", title: ' "Okudum, anladım" İşaretleyiniz ', placement: 'top'});
        document.getElementById("WinzardBottomButtonDiv").classList.add('secondary');
        document.getElementById("WinzardBottomButtonDiv").classList.remove('success');
        document.getElementById("WinzardBottomButtonLink").classList.add('btn-secondary');
        document.getElementById("WinzardBottomButtonLink").classList.remove('btn-success');
        document.getElementById("WinzardBottomButtonLink").disabled = true;
    }
};

$(document).ready(function(){
    $("#WinzardiReadCheck").click(function(){
        if($("#WinzardiReadCheck").is(':checked')){
            $(document).ready(function() {
                $('#WinzardBottomButtonArea').tooltip('disable');
                document.getElementById("WinzardBottomButtonDiv").classList.remove('secondary');
                document.getElementById("WinzardBottomButtonDiv").classList.add('success');
                document.getElementById("WinzardBottomButtonLink").classList.remove('btn-secondary');
                document.getElementById("WinzardBottomButtonLink").classList.add('btn-success');
                document.getElementById("WinzardBottomButtonLink").disabled = false;
            });
        }else{
            $(document).ready(function() {
                $('#WinzardBottomButtonArea').tooltip({container: ".stepwizard-tabcont-form-btn-tooltiparea", title: ' "Okudum, anladım" İşaretleyiniz ', placement: 'top'});
                document.getElementById("WinzardBottomButtonDiv").classList.add('secondary');
                document.getElementById("WinzardBottomButtonDiv").classList.remove('success');
                document.getElementById("WinzardBottomButtonLink").classList.add('btn-secondary');
                document.getElementById("WinzardBottomButtonLink").classList.remove('btn-success');
                document.getElementById("WinzardBottomButtonLink").disabled = true;
            });
        }
    });
});
/* Deposit-Withdraw Checkbox Button Validation */

/* Loading Info */
console.log("Tradepage App Deposit-Withdraw Bottom Button Validation Javascript Loading Successful");
/* Loading Info */