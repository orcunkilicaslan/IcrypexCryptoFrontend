/* Homepage Slider */
$('#homepageslider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    items:1,
    margin:10,
    animateIn: 'fadeInDown',
    animateOut: 'fadeOutDown',
});
/* Homepage Slider */

/* Homepage Chart Area Owl Carousel */
$(document).ready(function() {
    $('#homepagechartarea').owlCarousel({
        loop:false,
        nav:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items:2,
        margin:15,
        //stagePadding: 10,
        autoWidth:false,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true,
                autoplay:true,
            },
            767:{
                items:2
            }
        }
    });
    $('.homepage-chartarea-column').addClass("item");
});
/* Homepage Chart Area Owl Carousel */

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
// console.log("Mainpage App Javascript Loading Successful");
/* Loading Info */