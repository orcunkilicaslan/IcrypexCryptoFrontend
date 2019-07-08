
/* Header Bottom Lite Price */
$('#headertitleareapricelite').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items:3,
    margin:0,
    autoWidth:true,
    animateOut: 'fadeOut'
});
/* Header Bottom Lite Price */

/* DropZone JS

Dropzone.options.profileKimlikOnYuz = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileKimlikArkaYuz = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileDilekceliFotograf = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileAdresTeyidi = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileBankaDokumu = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileCalismaBelgesi = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileBankaReferansi = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};
Dropzone.options.profileEkBelge = {
    paramName: "file", // The name that will be used to transfer the file
    dictDefaultMessage: "<i class='icon-svg icon-svg-profilefileuploaddragdrop'></i>" + "SÜRÜKLE & BIRAK" + "<br />" + "[JPG, PNG, PDF-MAKS 5MB]"
};

/* DropZone JS */

/* Profile Login Settings Range Slider */
var rangeSlider = function(){
    var slider = $('.profile-login-settings-range-slider'),
        range = $('.profile-login-settings-range-slider-range'),
        value = $('.profile-login-settings-range-slider-value');

    slider.each(function(){

        value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function(){
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();
/* Profile Login Settings Range Slider */

/* Profile Help Box Tooltip */
$(document).ready(function(){
    $('.profilelabelhelp').tooltip({container: ".profile-tooltiparea", html: true, placement: "bottom" });
});
/* Profile Help Box Tooltip */

/* Loading Info */
console.log("Tradepage App Javascript Loading Successful");
/* Loading Info */