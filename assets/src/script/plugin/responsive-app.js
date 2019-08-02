
/* Responsive User Dropdown Menu List */
jQuery(function($) {
    if($(window).width() > 767){

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
/* Responsive User Dropdown Menu List */

/* Loading Info */
console.log("Plugin App Mobile Responsive Javascript Loading Successful");
/* Loading Info */