$(document).ready(function () {

    $('#show_menu').click(function () {

        $('#boomgard_menu').addClass('show');
    });
    $('#close_menu').click(function () {

        $('#boomgard_menu').removeClass('show');
    });

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 55
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    setTimeout(function () {
        $('#box_app_dw,#reserve_fix').addClass('show');
    }, 500);
    
    $('#close_app').click(function () {
    
        $('#box_app_dw').removeClass('show');
    });
});