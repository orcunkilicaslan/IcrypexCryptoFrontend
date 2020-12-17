
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

/* Responsive Tradepage Easy Buy Sell Menu Dropdown */
$(window).on("load resize",function(e){
    if($(window).width() <= 767){

        $(".easybuysell-mobiletabs-menu a.nav-link").click(function(){

            var currencyText    = $(this);
            var selCoinText     = $(currencyText).find('.selecttext .selectcointext').text();
            var selCoinIcon     = $(currencyText).find('.selecttext .selectcoinicon').text();
            var selDataValue    = $(currencyText).data("value");

            $(this).parents('.easybuysell-mobiletabs').find('.easybuysell-mobiletabs-btn').html('<i class="icon-svg icon-svg icon-svg-titleicon' + selCoinIcon.toLocaleLowerCase() + '"></i> <span class="selecttext"><span class="selectcointext">' + selCoinText.toUpperCase() + '</span> [<span class="selectcoinicon">' + selCoinIcon.toUpperCase() + '</span>]</span>');
            $(this).parents('.easybuysell-mobiletabs').find('.easybuysell-mobiletabs-btn').attr('data-value', selDataValue);

        });

        $('.easybuysell-mobiletabs-content > .order-orders-list:first-child').addClass("active show");

    }
});
/* Responsive Tradepage Easy Buy Sell Menu Dropdown */

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
                //animateIn: 'fadeInDown',
                //animateOut: 'fadeOutDown',
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

/* Responsive Tradepage Trader Home Market Data Owl Carousel */
$(window).on("load resize",function(e){
    if($(window).width() <= 991){
        $(document).ready(function() {
            $('.jsmdowltable_old > tbody > tr').addClass("item");
            $('.jsmdowltable_old > tbody').addClass("sidebarmarketdata-owl owl-carousel owl-theme");
            $('.jsmdowltable_old > tbody').owlCarousel({
                loop:true,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                items:5,
                margin:0,
                //stagePadding: 20,
                autoWidth:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin:0,
                    },
                    400:{
                        items:2,
                    },
                    576:{
                        items:3,
                    },
                    768:{
                        items:4,
                    }
                }
            });
        });
    }else{
        $(document).ready(function() {
            $('.jsmdowltable_old > tbody').removeClass("sidebarmarketdata-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('.jsmdowltable_old .owl-stage-outer').remove();
            $('.jsmdowltable_old .owl-nav').remove();
            $('.jsmdowltable_old .owl-dots').remove();
        });
    }
});
/* Responsive Tradepage Trader Home Market Data Owl Carousel */

/* Responsive Tradepage Trader Home Order Open Owl Carousel */
$(window).on("load resize",function(e){
    if($(window).width() <= 767){
        $(document).ready(function() {
            $('#traderorderopensowltable > tbody > tr').addClass("item");
            $('#traderorderopensowltable > tbody').addClass("traderorderopen-owl owl-carousel owl-theme");
            $('#traderorderopensowltable > tbody').owlCarousel({
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
                //animateIn: 'fadeInDown',
                //animateOut: 'fadeOutDown',
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
            $('#traderorderopensowltable > tbody').removeClass("traderorderopen-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('#traderorderopensowltable .owl-stage-outer').remove();
            $('#traderorderopensowltable .owl-nav').remove();
            $('#traderorderopensowltable .owl-dots').remove();
        });
    }
});
/* Responsive Tradepage Trader Home Order Open Owl Carousel */

/* Loading Info */
// console.log("Tradepage App Responsive Javascript Loading Successful");
/* Loading Info */