$(document).ready(function () {

    var delay_intro;
    var firstScrollTop = 300;
    var lastScrollTop = 600;
    $(window).scroll(function (event) {
        var scrollPos = $(this).scrollTop();

        delay_intro = setTimeout(function () {

            if (scrollPos > firstScrollTop) {
                if (scrollY >= 300) {
                    $(".header-fix").addClass('reactive');
                }
            } else {
                if (scrollY < 300) {
                    $(".header-fix").removeClass('reactive');
                }
            }
            if (scrollPos > lastScrollTop) {
                if (scrollY >= 600) {
                    $(".header-fix").addClass('active');
                }
            } else {
                if (scrollY < 600) {
                    $(".header-fix").removeClass('active');
                }
            }

        }, 10);

    });

    $('#search_resp').focusin(function(){

        $(".header-fix").addClass('focused');
    });

    $('#search_resp').focusout(function(){

        $(".header-fix").removeClass('focused');
    });

    //------------------------------------ input-select2 -------------------------------------

    $(".boomgard-input.where input").focusin(function () {
        $(".boomgard-input.where .box-result").addClass('fade');
    });
    $(".boomgard-input.where input").focusout(function () {
        $(".boomgard-input.where .box-result").removeClass('fade');
    });

    $(".boomgard-input.count input").focusin(function () {
        $(".boomgard-input.count .box-result").addClass('fade');
    });
    $(".boomgard-input.count input").focusout(function () {
        $(".boomgard-input.count .box-result").removeClass('fade');
    });

    $(".boomgard-input.where .box-result .inner-box li").click(function () {
        var title_h6 = $(this).find('h6').text();
        var subtitle_spn = $(this).find('.first-spn b').text();
        $('.boomgard-input.where input').val(title_h6 + '، ' + subtitle_spn);
        //-===================================-
        $(".boomgard-input.where .mdc-floating-label").addClass("mdc-floating-label--float-above");
        $(".boomgard-input.where .mdc-floating-label").addClass("scl");
    });

    $(".boomgard-input.count .box-result .inner-box li").click(function () {
        var a = $(this).find('span:first-child').text();
        a = a.replace(/ +/g, " ");
        var b = $(".boomgard-input.count input").val(a);
        //-===================================-
        $(".boomgard-input.count .mdc-floating-label").addClass("mdc-floating-label--float-above");
        $(".boomgard-input.count .mdc-floating-label").addClass("scl");
    });

    $("body").change(function () {
        $(".boomgard-input.where .mdc-floating-label").removeClass("scl");
        $(".boomgard-input.count .mdc-floating-label").removeClass("scl");
    });

    //------------------------------------ input-select2 -------------------------------------

    if ($('.owl-carousel').length) {

        $('#owl_attributes').owlCarousel({

            rtl: true,
            loop: true,
            nav: true,
            navText: ["<div class='arrow-prev'><i class = 'material-icons' >keyboard_arrow_left </i></div>", "<div class='arrow-next'><i class = 'material-icons' >keyboard_arrow_right </i></div>"],
            margin: 0,
            dots: true,
            smartSpeed: 500,
            items: 1
        });
    }

});
