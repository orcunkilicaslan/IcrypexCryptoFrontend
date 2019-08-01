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

/* Responsive Homepage Chart Area Owl Carousel */
jQuery(function($) {
    if($(window).width() <= 767){
        $(document).ready(function() {
            $('#homepagechartarea').addClass("homepage-chartarea-owl owl-carousel owl-theme");
            $('#homepagechartarea').owlCarousel({
                loop:true,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                items:1,
                margin:0,
                autoWidth:false,
                animateIn: 'slideInRight',
                animateOut: 'slideOutLeft',

            });
            $('.homepage-chartarea-column').addClass("item");
        });
    }else{
        $(document).ready(function() {
            $('#homepagechartarea').removeClass("homepage-chartarea-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('.homepage-chartarea-column').removeClass("item");
        });
    }
});
/* Responsive Homepage Chart Area Owl Carousel */

/* Responsive Homepage Big Price Area Owl Carousel */
jQuery(function($) {
    if($(window).width() <= 767){
        $(document).ready(function() {
            $('#homepagebigpricearea').addClass("homepage-bigprice-owl owl-carousel owl-theme");
            $('#homepagebigpricearea').owlCarousel({
                loop:true,
                nav:true,
                dots:false,
                autoplay:false,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                items:2,
                margin:0,
                autoWidth:false,
                animateOut: 'fadeOut',
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    }
                }
            });
            $('.homepage-bigprice-list-item').addClass("item");
        });
    }else{
        $(document).ready(function() {
            $('#homepagebigpricearea').removeClass("homepage-bigprice-owl owl-carousel owl-theme owl-loaded owl-drag");
            $('.homepage-bigprice-list-item').removeClass("item");
        });
    }
});
/* Responsive Homepage Big Price Area Owl Carousel */

/* Loading Info */
console.log("Mainpage App Responsive Javascript Loading Successful");
/* Loading Info */