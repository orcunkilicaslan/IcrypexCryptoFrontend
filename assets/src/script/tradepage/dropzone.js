/* DropZone JS */
jQuery(function($) {
    if($('.profile-box-content').hasClass('dropzonearea')){

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

    }
});
/* DropZone JS */

/* Loading Info */
console.log("Tradepage App Dropzone Javascript Loading Successful");
/* Loading Info */