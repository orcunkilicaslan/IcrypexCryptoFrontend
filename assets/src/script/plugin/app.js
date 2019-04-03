/* Navbar Menu */
$(function() {
    $('#orc-navtggle').click(function () {
        $('.orc-menu-container').toggleClass('orc-canvaskapat');
    });
    $('.orc-mobilemenublckmask').click(function () {
        $('.orc-menu-container').removeClass('orc-canvaskapat');
    });

    // First Menu CSS
    $('.orc-menu-list > li').has('.orc-menu-altmenu').prepend('<span class="orc-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.orc-menu-list > li').has('.orc-menu-buyuk').prepend('<span class="orc-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.orc-menu-tikla').click(function(){
        $(this).toggleClass('orc-menu-aktifok')
            .parent().siblings().children().removeClass('orc-menu-aktifok');

        $(".orc-menu-altmenu, .orc-menu-buyuk").not($(this).siblings('.orc-menu-altmenu')).slideUp('slow');
        $(this).siblings('.orc-menu-altmenu').slideToggle('slow');
    });

    // Sub Menu ul Show JS
    $('.orc-menu-list > li > ul > li').has('.orc-menu-altmenu-alt').prepend('<span class="orc-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.orc-menu-list > li > ul > li > ul > li').has('.orc-menu-altmenu-alt-alt').prepend('<span class="orc-menu-tikla"><i class="fa fa-angle-down"></i></span>');

    $('.orc-menu-tikla').click(function(){
        $(this).children('.orc-menu-aktifok').toggleClass('orc-menu-rotate');
        $(this).siblings('.orc-menu-altmenu-alt').slideToggle('slow');
        $(this).siblings('.orc-menu-altmenu-alt-alt').slideToggle('slow');

    });
});
/* Navbar Menu */

/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    items:1,
    margin:10,
    animateOut: 'fadeOut'
})
/* Owl Carousel */

/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */

