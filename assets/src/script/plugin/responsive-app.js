
/* Responsive Jquery Scroll to Top Button */
jQuery(function($) {
    if($(window).width() < 991){

        $('.footer').append($('<div class="bottomtotopbutton"></div>'));

        jQuery(document).ready(function() {
            var duration = 300;
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 250) {
                    jQuery('.bottomtotopbutton').fadeIn(duration);
                } else {
                    jQuery('.bottomtotopbutton').fadeOut(duration);
                }
            });

            jQuery('.bottomtotopbutton').click(function(event) {
                event.preventDefault();
                jQuery('html,body').animate({scrollTop: 0}, duration);
                return false;
            })
        });
    } else {
        $('.bottomtotopbutton').remove();
    }
});
/* Responsive Jquery Scroll to Top Button */

/* Responsive Header User Dropdown Menu List */
jQuery(function($) {
    if($(window).width() < 991){

        jQuery(function($) {
            if($('body').hasClass('mainpage')){
                $(document).ready(function() {

                    $("#MobileMenuUserDropdownMenu").on("click", function (){

                        var userMenuList = $('#MobileMenuUserDropdownMenu .headusermenu-menulist');
                        var dropdownMobileTradepageMenu = $('#MobileMenuTradepageDropdownMenu');

                        if (userMenuList.height() == 0) {
                            userMenuList.animate({height: dropdownMobileTradepageMenu.height()+15});
                            dropdownMobileTradepageMenu.addClass("activeuserdropdownmenu");

                            $("#MobileMenuUserDropdownMenu").find('.headusermenu-box').addClass('showmenu');
                        }
                        else if (userMenuList.height() == dropdownMobileTradepageMenu.height()+15) {
                            userMenuList.animate({height: "0px"});

                            $("#MobileMenuUserDropdownMenu").find('.headusermenu-box').removeClass('showmenu');
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

                            $("#MobileMenuUserDropdownMenu").find('.headusermenu-box').addClass('showmenu');
                        }
                        else if (userMenuList.height() == dropdownMobileMainpageMenu.height()+15) {
                            userMenuList.animate({height: "0px"});

                            $("#MobileMenuUserDropdownMenu").find('.headusermenu-box').removeClass('showmenu');
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

/* Responsive Mobile Dropdown Menu Navigation List */
jQuery(function($) {
    $(".sitetabs-mobile a.nav-link").click(function(){
        var activeMobDropMenuLink      = $(this);
        var selectMobDropMenuLink      = $(activeMobDropMenuLink).find('.selecttabsmenuname').text();

        $(this).parents('.sitetabs-mobile').find('.responsive-dropdown-btn .selecttabsmenuname').html(selectMobDropMenuLink);
    });
});
/* Responsive Mobile Dropdown Menu Navigation List */

/* Loading Info */
// console.log("Plugin App Mobile Responsive Javascript Loading Successful");
/* Loading Info */