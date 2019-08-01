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