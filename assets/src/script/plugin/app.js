/* Navbar Menu */
$(function() {
    $('#jcq-navtggle').click(function () {
        $('.jcq-menucontainer').toggleClass('jcqcanvaskapat');
    });
    $('.jcq-mobilemenublckmask').click(function () {
        $('.jcq-menucontainer').removeClass('jcqcanvaskapat');
    });

    // First Menu CSS
    $('.jcq-menu-list > li').has('.jcq-menu-altmenu').prepend('<span class="jcq-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.jcq-menu-list > li').has('.jcq-buyukmenu').prepend('<span class="jcq-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.jcq-menu-tikla').click(function(){
        $(this).toggleClass('jcq-menuaktifok')
            .parent().siblings().children().removeClass('jcq-menuaktifok');

        $(".jcq-menu-altmenu, .jcq-buyukmenu").not($(this).siblings('.jcq-menu-altmenu')).slideUp('slow');
        $(this).siblings('.jcq-menu-altmenu').slideToggle('slow');
    });

    // Sub Menu ul Show JS
    $('.jcq-menu-list > li > ul > li').has('.jcq-menu-altmenu-alt').prepend('<span class="jcq-menu-tikla"><i class="fa fa-angle-down"></i></span>');
    $('.jcq-menu-list > li > ul > li > ul > li').has('.jcq-menu-altmenu-alt-alt').prepend('<span class="jcq-menu-tikla"><i class="fa fa-angle-down"></i></span>');

    $('.jcq-menu-tikla').click(function(){
        $(this).children('.jcq-menuaktifok').toggleClass('jcq-menu-rotate');
        $(this).siblings('.jcq-menu-altmenu-alt').slideToggle('slow');
        $(this).siblings('.jcq-menu-altmenu-alt-alt').slideToggle('slow');

    });
});
/* Navbar Menu */

/* Loading Info */
console.log("Plugin App Javascript Loading Successful");
/* Loading Info */