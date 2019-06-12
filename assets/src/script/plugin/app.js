/* Header Nav Fixed */
$(window).scroll(function () {

    //var bodyWidth = window.innerWidth;
    //var bodyHeight = window.innerHeight;
    //var sliderHeight = $( ".scrollbannerheight" ).innerHeight();
    var scroll = $(window).scrollTop();

    if (scroll > 30) {
        $(".header").addClass("navscroll")
    } else {
        $(".header").removeClass("navscroll")
    }

});
/* Header Nav Fixed */

/* Navbar Menu */
$(function() {

    // Mobile Menu
    $('#dfn-navtggle').click(function () {
        $('.dfn-megamenu').toggleClass('dfn-canvaskapat');
    });
    $('.dfn-mobilemenu-mask').click(function () {
        $('.dfn-megamenu').removeClass('dfn-canvaskapat');
    });

    // Menu Active Class Added
    $('.dfn-menu-list > li > a').click(
        function(){

            $('.dfn-menu-list > li').removeClass();
            $(this).parent().addClass('active navdropdown');

        }
    );

});
/* Navbar Menu */


/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */