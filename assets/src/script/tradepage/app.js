
/* Header Bottom Lite Price */
$('#headertitleareapricelite').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    //items:3,
    margin:0,
    autoWidth:true,
    animateOut: 'fadeOut',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoWidth:false
        },
        992:{
            items:2,
        },
        1400:{
            items:3
        }
    }
});
/* Header Bottom Lite Price */

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

/* Easy Buy Sell Tooltip */
$(document).ready(function(){
    $('.orderinformationhelp').tooltip({container: ".order-orders-tooltiparea", html: true, placement: "bottom" });
});
/* Easy Buy Sell Tooltip */

/* Loading Info */
// console.log("Tradepage App Javascript Loading Successful");
/* Loading Info */