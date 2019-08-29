
/* Responsive Tradepage Profile Menu Dropdown */
jQuery(function($) {
    if($(window).width() <= 991){
        $(document).ready(function($){

            var sidebarProfileMenuLocation              = $('.sidebar-tradepage');
            var sidebarProfileMenuNavigation            = $('.sidebar-navigasyon');
            var sidebarProfileMenuNavigationAccount     = $('.sidebar-navigasyon-account');
            var sidebarProfileMenuNavigationSecurity    = $('.sidebar-navigasyon-security');

            var sidebarProfileMenuNavigationAccountActiveMenuText       = sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav .sidebar-navigasyon-list-item').find('.active').text();
            var sidebarProfileMenuNavigationSecurityActiveMenuText      = sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav .sidebar-navigasyon-list-item').find('.active').text();

            // Dropdown Menu Active Class Menu Remove
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav').find('.active').parent().remove();
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav').find('.active').parent().remove();

            // Dropdown Menu Add Class
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-account-menu');
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).find('ul.nav').addClass('dropdown-menu responsive-dropdown-menu responsive-dropdown-security-menu');

            // Dropdown Button Added
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationAccount).append($('<a class="responsive-dropdown-btn responsive-dropdown-account-btn btn" href="#" data-toggle="dropdown">' + 'HESABIM' + '</a>'));
            sidebarProfileMenuLocation.find(sidebarProfileMenuNavigationSecurity).append($('<a class="responsive-dropdown-btn responsive-dropdown-security-btn btn" href="#" data-toggle="dropdown">' + 'GÜVENLİK' + '</a>'));

        });
    }
});
/* Responsive Tradepage Profile Menu Dropdown */

/* Loading Info */
// console.log("Tradepage App Responsive Javascript Loading Successful");
/* Loading Info */