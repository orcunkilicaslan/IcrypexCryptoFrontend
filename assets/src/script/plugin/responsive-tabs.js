
/* Responsive Bootstrap Tabs - https://codepen.io/hayatbiralem/pen/KpzjOL */
jQuery(function($) {
    if($(window).width() <= 767){
        $(document).ready(function(){

            (function($) {
                $(document).on('show.bs.tab', '.nav-tabs-responsive', function(e) {
                    var $target = $(e.target);
                    var $tabs = $target.closest('.nav-tabs');
                    var $current = $target.closest('li');
                    var $parent = $current.closest('li.dropdown');
                    var $next = $current.next();
                    var $prev = $current.prev();
                    var updateDropdownMenu = function($el, position){
                        $el
                            .find('.dropdown-menu')
                            .removeClass('pull-xs-left pull-xs-center pull-xs-right')
                            .addClass( 'pull-xs-' + position );
                    };

                    $tabs.find('>li').removeClass('next active prev');
                    $prev.addClass('prev');
                    $next.addClass('next');
                    $current.addClass('active');

                    updateDropdownMenu( $prev, 'left' );
                    updateDropdownMenu( $current, 'center' );
                    updateDropdownMenu( $next, 'right' );
                });
            })(jQuery);

        });
    }else{}
});
/* Responsive Bootstrap Tabs */

/* Loading Info */
// console.log("Plugin App Mobile Responsive Javascript Loading Successful");
/* Loading Info */