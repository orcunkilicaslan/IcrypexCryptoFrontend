/* Homepage Slider */
$('#homepageslider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    items:1,
    margin:10,
    //animateIn: 'bounceInDown',
    //animateIn: 'bounceInLeft',
    animateIn: 'fadeInDown',
    //animateOut: 'slideOutDown',
    //animateOut: 'bounceOutRight',
    animateOut: 'fadeOutDown',
});
/* Homepage Slider */

/* Homepage Register Collapse */
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
/* Homepage Register Collapse */

/* Accordion */
$(document).ready(function () {
    $('.accordion-item .heading').on('click', function (e) {
        e.preventDefault();

        // Add the correct active class
        if ($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });
});
/* Accordion */

/* Loading Info */
console.log("Mainpage App Javascript Loading Successful");
/* Loading Info */