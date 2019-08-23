/* Responsive Homepage Register Collapse */
jQuery(function($) {
    if($(window).width() <= 991){
        $(document).ready(function() {
            //$(".homepage-register-collapse").removeClass("show");
            //$(".homepage-register-collapse-btn").addClass("d-block").removeClass("d-none");
        });
    }else{
        $(document).ready(function() {
            //$(".homepage-register-collapse").addClass("show");
            //$(".homepage-register-collapse-btn").addClass("d-none").removeClass("d-block");
        });
    }
});

jQuery(function($) {
    if($('body').hasClass('homepage')){
        $(document).ready(function() {
            $(".homepage-register-collapse-btn").click(function() {
                $(this).addClass("d-none").removeClass("d-block");
            });
        });
    }
});
/* Responsive Homepage Register Collapse */

/* Responsive Homepage Big Price Area Owl Carousel */
$(window).on("load resize",function(e){
    if($(window).width() <= 991){
        $(document).ready(function() {
            $('#homepagebigpricearea').addClass("homepage-bigprice-owl owl-carousel owl-theme");
            $('#homepagebigpricearea').owlCarousel({
                loop:false,
                nav:false,
                dots:false,
                autoplay:false,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                items:5,
                margin:20,
                //stagePadding: 20,
                autoWidth:false,
                animateIn: 'slideInRight',
                animateOut: 'slideOutLeft',
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        loop:true,
                        autoplay:true,
                        nav:true
                    },
                    400:{
                        items:2,
                        loop:true,
                        autoplay:true,
                        nav:true
                    },
                    767:{
                        items:3,
                        loop:true,
                        autoplay:true,
                        nav:true
                    }
                }
            });
        });
    }else{
        $(document).ready(function() {
            $('#homepagebigpricearea').removeClass("homepage-bigprice-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('.homepage-bigprice-list-item').removeClass("item");
            $('.homepage-bigprice .owl-stage-outer').remove();
            $('.homepage-bigprice-list .owl-nav').remove();
            $('.homepage-bigprice-list .owl-dots').remove();
        });
    }
});
/* Responsive Homepage Big Price Area Owl Carousel */

/* Responsive Tab Menu Dropdown */
jQuery(function($) {
    if($(window).width() <= 767){
        $(document).ready(function($){

            var menuLocation        = $('.sitetabs');
            var menuWrapper         = $('.sitetabs-wrapper');
            var menuWrapper01       = $('.sitetabs-wrapper-01');
            var menuWrapper02       = $('.sitetabs-wrapper-02');
            //var menuWrapper03       = $('.sitetabs-wrapper-03');
            var activeMenuText01      = menuLocation.find(menuWrapper01).find('ul.nav .nav-item').find('.active').text();
            var activeMenuText02      = menuLocation.find(menuWrapper02).find('ul.nav .nav-item').find('.active').text();
            //var activeMenuText03      = menuLocation.find(menuWrapper03).find('ul.nav .nav-item').find('.active').text();

            // Dropdown Menu Active Class Menu Remove
            menuLocation.find(menuWrapper01).find('ul.nav').find('.active').parent().remove();
            menuLocation.find(menuWrapper02).find('ul.nav').find('.active').parent().remove();

            // Dropdown Menu Add Class
            menuLocation.find(menuWrapper01).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-top-menu');
            menuLocation.find(menuWrapper02).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-bottom-menu');
            //menuLocation.find(menuWrapper03).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu');

            // Dropdown Button Added
            menuLocation.find(menuWrapper01).append($('<a class="responsive-dropdown-btn responsive-dropdown-top-btn btn" href="#" data-toggle="dropdown">' + activeMenuText01 + '</a>'));
            menuLocation.find(menuWrapper02).append($('<a class="responsive-dropdown-btn responsive-dropdown-bottom-btn btn" href="#" data-toggle="dropdown">' + activeMenuText02 + '</a>'));
            //menuLocation.find(menuWrapper03).append($('<a class="responsive-dropdown-btn btn" href="#" data-toggle="dropdown">' + activeMenuText03 + '</a>'));

            if(!activeMenuText02){
                menuLocation.find(menuWrapper02).find('a.responsive-dropdown-btn').remove();
                menuLocation.find(menuWrapper02).append($('<a class="responsive-dropdown-btn responsive-dropdown-bottom-btn btn" href="#" data-toggle="dropdown">' + 'MENÜ' + '</a>'));
            }

        });
    }
});
/* Responsive Tab Menu Dropdown */

/* Responsive Block Chain Tab Menu Dropdown */
jQuery(function($) {
    if($(window).width() <= 767){
        $(document).ready(function($){

            var menuLocation                    = $('.sitetabs');
            var menuWrapperBlockChain01         = $('.sitetabs-wrapper-blockchain-01');

            // Dropdown Menu Active Class Menu Remove
            menuLocation.find(menuWrapperBlockChain01).find('ul.sitetabs-wrapper-blockchain-01-dropdown-menu').find('.active').parent().remove();

            // Dropdown Menu Add Class
            menuLocation.find(menuWrapperBlockChain01).find('a.sitetabs-wrapper-blockchain-01-dropdown-link').addClass('responsive-dropdown-btn responsive-dropdown-top-btn btn');
            menuLocation.find(menuWrapperBlockChain01).find('ul.sitetabs-wrapper-blockchain-01-dropdown-menu').addClass('responsive-dropdown-menu responsive-dropdown-top-menu');

        });
    }
});
/* Responsive Block Chain Tab Menu Dropdown */

/* Loading Info */
// console.log("Mainpage App Responsive Javascript Loading Successful");
/* Loading Info */