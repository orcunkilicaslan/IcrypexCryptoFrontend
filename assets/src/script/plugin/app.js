/* Header Nav Fixed */
$(window).scroll(function () {

    //var bodyWidth = window.innerWidth;
    //var bodyHeight = window.innerHeight;
    //var sliderHeight = $( ".scrollbannerheight" ).innerHeight();
    var scroll = $(window).scrollTop();

    if (scroll > 10) {
        $(".header").addClass("navscroll");
    } else {
        $(".header").removeClass("navscroll");
    }

});
/* Header Nav Fixed */

/* Header Bottom Space */
$(window).resize(function() {
    var headerHeight = $("header.header").height();
    $(".header-spacebottom").height(headerHeight);
});

$(".header .header-alert .close").click(function(){
    var headNavigation = $(".header-web").height();
    $(".header-spacebottom").height(headNavigation);
});

$(window).trigger('resize');
/* Header Bottom Space */

/* Navbar Menu */
$(function() {

    // Mobile Menu
    $('#dfn-navtggle').click(function () {
        $('.dfn-megamenu').toggleClass('dfn-canvaskapat');
    });
    $('.dfn-mobilemenu-mask').click(function () {
        $('.dfn-megamenu').removeClass('dfn-canvaskapat');
    });
    // Mobile Menu

    // Menu Active Class Added
    $('.dfn-menu-list > li > a').click(
        function(){

            $('.dfn-menu-list > li').removeClass();
            $(this).parent().addClass('active navdropdown');

        }
    );
    // Menu Active Class Added

});
/* Navbar Menu */

/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */