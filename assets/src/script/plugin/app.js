/* Navbar Menu */
$(function() {

    // Mobile Menu
    $('#orc-navtggle').click(function () {
        $('.orc-megamenu').toggleClass('orc-canvaskapat');
    });
    $('.orc-mobilemenublckmask').click(function () {
        $('.orc-megamenu').removeClass('orc-canvaskapat');
    });

    // Menu Active Class Added
    $('.orc-menu-list > li > a').click(function() {
        $('.orc-menu-list > li').removeClass();
        $(this).parent().addClass('active');
    });



});
/* Navbar Menu */


/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */