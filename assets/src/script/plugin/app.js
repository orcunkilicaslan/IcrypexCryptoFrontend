/* Head Blur Tab Page Title */
$(function(){
    var $pageHeadTagTitle       = $('title');
    var $pageHeadTagTitleText   = $pageHeadTagTitle.text();

    $(window).focus(function(){
        $pageHeadTagTitle.text($pageHeadTagTitleText)
    });

    $(window).blur(function(){
        $pageHeadTagTitle.text('ICRYPEX')
    });
});
/* Head Blur Tab Page Title */

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

/* Header Bottom Space and Cookies Notification Messages */
$(window).resize(function() {
    var headerHeight = $("header.header").height();
    $(".header-spacebottom").height(headerHeight);
});

$(".header .header-alert .close").click(function(){
    var headNavigation = $(".header-web").height();
    $(".header-spacebottom").height(headNavigation);
});

$(window).resize(function() {
    var cookiesHeight = $(".cookies-notification").height();
    $(".cookies-notification").css("bottom", ("-"+cookiesHeight)+"px");
});

$(window).trigger('resize');
/* Header Bottom Space Cookies Notification Messages */

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

});
/* Navbar Menu */

/* Navbar Menu Active Class */
jQuery(function($) {
    if($(window).width() > 991){

        // Menu Active Class Added
        $('.dfn-menu-list > li > a').click(
            function(){
                $('.dfn-menu-list > li').removeClass('active');
                $(this).parent().addClass('active');
            }
        );
        // Menu Active Class Added

        // Homepage Menu UL Passive Class Added and Removed
        jQuery(function($) {
            if($('body').hasClass('homepage')){
                $(document).ready(function(e) {
                    $(".dfn-menu-list > li > a").click(function(event) {
                        $(this).parent().parent().addClass('passivemenu');
                        //event.stopPropagation();
                    });
                    $(document).click(function(event) {
                        if (!$(event.target).hasClass('active')) {
                            $(".dfn-menu-list").removeClass("passivemenu");
                            $(".dfn-menu-list > li").removeClass("active");
                        }
                    });
                });
            }
        });
        // Homepage Menu UL Passive Class Added and Removed

    }
});
/* Navbar Menu Active Class */

// Header User Dropdown Menu List
jQuery(function($) {
    if($('body').hasClass('mainpage')){
        $(document).ready(function() {
            $(".header-userarea-user").click(function() {
                $("#TradepageDropdownMenu").addClass("activeuserdropdownmenu");
            });
        });
    }else if($('body').hasClass('tradepage')){
        $(document).ready(function() {
            $(".header-userarea-user").click(function() {
                $("#MainpageDropdownMenu").addClass("activeuserdropdownmenu");
            });
        });
    } else {
        $(document).ready(function() {
            $(".header-userarea-user").click(function() {
                $("#MainpageDropdownMenu").addClass("activeuserdropdownmenu");
                $("#TradepageDropdownMenu").addClass("activeuserdropdownmenu");
            });
        });
    }
});
// Header User Dropdown Menu List

/* Tooltip */
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
});
/* Tooltip */

/* Input Mask */
$(document).ready(function(){
    $('.inputibanmask').inputmask('TR99 9999 9999 9999 9999 9999 99', {'placeholder': ""});
    $('.inputdatemask').inputmask('99/99/9999', {'placeholder': "MM/DD/YYYY"});
    $('.inputphonemask').inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: false,
        showMaskOnHover: false
    });
});
/* Input Mask */

/* Loading Info */
// console.log("Plugin App Javascript Loading Successful");
/* Loading Info */