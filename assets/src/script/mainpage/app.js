/* Homepage Slider */
$('#homepageslider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    items:1,
    margin:10,
    animateOut: 'fadeOut'
});
/* Homepage Slider */

// SSSPage Accordion
$(document).ready(function () {
    $('.whathow-accordion-item .heading').on('click', function (e) {
        e.preventDefault();

        // Add the correct active class
        if ($(this).closest('.whathow-accordion-item').hasClass('active')) {
            // Remove active classes
            $('.whathow-accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.whathow-accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.whathow-accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.whathow-accordion-item .content').not($content).slideUp('fast');
    });
});

/* Loading Info */
console.log("Mainpage App Javascript Loading Successful");
/* Loading Info */