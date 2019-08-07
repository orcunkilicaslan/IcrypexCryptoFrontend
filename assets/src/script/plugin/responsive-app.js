
/* Responsive Header User Dropdown Menu List */
jQuery(function($) {
    if($(window).width() < 767){
        jQuery(function($) {
            if($('body').hasClass('mainpage')){
                $(document).ready(function() {

                    $("#MobileMenuUserDropdownMenu").on("click", function (){

                        var userMenuList = $('#MobileMenuUserDropdownMenu .headusermenu-menulist');
                        var dropdownMobileTradepageMenu = $('#MobileMenuTradepageDropdownMenu');

                        if (userMenuList.height() == 0) {
                            userMenuList.animate({height: dropdownMobileTradepageMenu.height()+15});
                            dropdownMobileTradepageMenu.addClass("activeuserdropdownmenu");
                        }
                        else if (userMenuList.height() == dropdownMobileTradepageMenu.height()+15) {
                            userMenuList.animate({height: "0px"});
                        }
                    });

                });
            }else if($('body').hasClass('tradepage')){
                $(document).ready(function() {

                    $("#MobileMenuUserDropdownMenu").on("click", function (){

                        var userMenuList = $('#MobileMenuUserDropdownMenu .headusermenu-menulist');
                        var dropdownMobileMainpageMenu = $('#MobileMenuMainpageDropdownMenu');

                        if (userMenuList.height() == 0) {
                            userMenuList.animate({height: dropdownMobileMainpageMenu.height()+15});
                            dropdownMobileMainpageMenu.addClass("activeuserdropdownmenu");
                        }
                        else if (userMenuList.height() == dropdownMobileMainpageMenu.height()+15) {
                            userMenuList.animate({height: "0px"});
                        }
                    });

                });
            }
        });
    }
});
/* Responsive Header User Dropdown Menu List */

/* Responsive DFN Menu Navigation Language List */
jQuery(function($) {
    if($(window).width() < 991){
        $(".dfn-onlymobile-bottom a.sitelang-btn").click(function(){
            $(this).find('.sitelang-lang-text').html('DİL SEÇİNİZ');
        });
        $(".dfn-onlymobile-bottom a.dropdown-item").click(function(){
            var languageText            = $(this);
            var selLanguage             = $(languageText).find('.sitelang-lang-text').text();
            var selLanguageDataValue    = $(languageText).data("value");

            $(this).parents('.sitelang').find('.sitelang-btn').html('<i class="icon-svg icon-svg-headersitelang"></i> <span class="sitelang-lang-text">' + selLanguage + '</span>');
            $(this).parents('.sitelang').find('.sitelang-btn').attr('data-value', selLanguageDataValue);
        });
    }
});
/* Responsive DFN Menu Navigation Language List */

/* Loading Info */
// console.log("Plugin App Mobile Responsive Javascript Loading Successful");
/* Loading Info */