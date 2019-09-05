
/* Responsive Tradepage Profile Menu Dropdown */
jQuery(function($) {
    if($(window).width() <= 991){
        $(document).ready(function($){

            var sidebarProfileMenuLocation              = $('.sidebar-tradepage');
            var sidebarProfileMenuNavigation            = $('.sidebar-navigasyon');
            var sidebarProfileMenuNavigationAccount     = $('.sidebar-navigasyon-account');
            var sidebarProfileMenuNavigationSecurity    = $('.sidebar-navigasyon-security');

            var sidebarProfileMenuNavigationAccountActiveMenuText       = sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav .sidebar-navigasyon-list-item').find('.active').text();
            var sidebarProfileMenuNavigationSecurityActiveMenuText      = sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav .sidebar-navigasyon-list-item').find('.active').text();

            // Dropdown Menu Active Class Menu Remove
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav').find('.active').parent().remove();
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav').find('.active').parent().remove();

            // Dropdown Menu Add Class
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-account-menu');
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-security-menu');

            // Dropdown Button Added
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).append($('<a class="responsive-dropdown-btn responsive-dropdown-account-btn btn" href="#" data-toggle="dropdown">' + 'HESABIM' + '</a>'));
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).append($('<a class="responsive-dropdown-btn responsive-dropdown-security-btn btn" href="#" data-toggle="dropdown">' + 'GÜVENLİK' + '</a>'));

        });
    }
});
/* Responsive Tradepage Profile Menu Dropdown */

/* Responsive Tradepage Deposit-Withdraw Latest Transactions Owl Carousel */
$(window).on("load resize",function(e){
    if($(window).width() <= 767){
        $(document).ready(function() {
            $('#latesttransactionsowltable > tbody > tr').addClass("item");
            $('#latesttransactionsowltable > tbody').addClass("latesttransactions-owl owl-carousel owl-theme");
            $('#latesttransactionsowltable > tbody').owlCarousel({
                loop:false,
                nav:false,
                dots:false,
                autoplay:false,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                items:5,
                margin:10,
                //stagePadding: 20,
                autoWidth:false,
                animateIn: 'fadeInDown',
                animateOut: 'fadeOutDown',
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        loop:false,
                        autoplay:false,
                        nav:true,
                        dots:true,
                    }
                }
            });
        });
    }else{
        $(document).ready(function() {
            $('#latesttransactionsowltable > tbody').removeClass("latesttransactions-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('#latesttransactionsowltable .owl-stage-outer').remove();
            $('#latesttransactionsowltable .owl-nav').remove();
            $('#latesttransactionsowltable .owl-dots').remove();
        });
    }
});
/* Responsive Tradepage Deposit-Withdraw Latest Transactions Owl Carousel */

/* Loading Info */
// console.log("Tradepage App Responsive Javascript Loading Successful");
/* Loading Info */