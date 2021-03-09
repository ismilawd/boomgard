$(document).ready(function () {
    //------------------------------------------ lrn-wrk ------------------------------------------------
    //------------------------------------------ lrn-wrk ------------------------------------------------
    //------------------------------------------ lrn-wrk ------------------------------------------------
    //------------------------------------------ lrn-wrk ------------------------------------------------
    //------------------------------------------ lrn-wrk ------------------------------------------------

    // ----------- Parallex intro  js --------------

    var delay_intro;
    var lastScrollTop_intro = 0;
    $(window).scroll(function (event) {
        var scrollPos_sa = $(this).scrollTop();

        delay_intro = setTimeout(function () {

            if (scrollPos_sa > lastScrollTop_intro) {
                if (scrollY >= 100) {
                    $("#sb-res").addClass('active');
                }
            } else {
                if (scrollY < 80) {
                    $("#sb-res").removeClass('active');
                }
            }

        }, 10);

    });

    // ----------- Parallex intro js ----------------

    //-------------------------------------------- ediet-lrn-wrk ---------------------------------------
    //--------------------- anim-register-login -----------------------

    $("#res-reg").click(function () {

        $("#firstLevel.reg-form").removeClass("show");
        $("#secondLevel").removeClass("hide");
        $("#firstLevel.reg-form").addClass("hide");
        $("#secondLevel").addClass("show");

    });

    $("#register").click(function () {

        $("#secondLevel").removeClass("show");
        $("#firstLevel.reg-form").removeClass("hide")
        $("#secondLevel").addClass("hide");
        $("#firstLevel.reg-form").addClass("show");

    });

    //---------------------- anim-register-login ----------------------

    $("#res-reg").click(function () {

        $("#firstLevel").removeClass("show");
        $("#firstLevel").addClass("hide");
        $("#secondLevel").removeClass("hide");
        $("#secondLevel").addClass("show");

    });

    $("#lg-in").click(function () {

        $("#secondLevel").removeClass("show");
        $("#secondLevel").addClass("hide");
        $("#firstLevel").removeClass("hide");
        $("#firstLevel").addClass("show");

    });

    $("#reg-res").click(function () {

        $(".Residence-page.Residence-main .register-popup .signin-popup").addClass("dsb-blk");
        $(".Residence-page.Residence-main .register-popup .black-layout").addClass("show-bk");
        setTimeout(function () {
            $(".Residence-page.Residence-main .register-popup .signin-popup").addClass("show");
        }, 100);

    });

    $("#close-sign").click(function () {

        $(".Residence-page.Residence-main .register-popup .signin-popup").removeClass("show");
        setTimeout(function () {
            $(".Residence-page.Residence-main .register-popup .signin-popup").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);

    });

    $(".Residence-page.Residence-main .register-popup .black-layout").click(function () {

        $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        $(".Residence-page.Residence-main .register-popup .signin-popup").removeClass("show");
        setTimeout(function () {
            $(".Residence-page.Residence-main .register-popup .signin-popup").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);



        $(".Residence-page.Residence-main .gallery-popup .gallery").removeClass("show");
        setTimeout(function () {
            $(".Residence-page.Residence-main .gallery-popup .gallery").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);


        $("#popup").removeClass("show");
        setTimeout(function () {
            $("#popup").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);


    });

    $(".pic-res-mdl").click(function () {

        $(".Residence-page.Residence-main .gallery-popup .gallery").addClass("dsb-blk");
        $(".Residence-page.Residence-main .register-popup .black-layout").addClass("show-bk");
        setTimeout(function () {
            $(".Residence-page.Residence-main .gallery-popup .gallery").addClass("show");
        }, 100);

    });

    $("#close-pic").click(function () {

        $(".Residence-page.Residence-main .gallery-popup .gallery").removeClass("show");
        setTimeout(function () {
            $(".Residence-page.Residence-main .gallery-popup .gallery").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);

    });

    $(".pic-res-mdl").click(function () {

        $(".pic-res-mdl").removeClass("active");
        $(this).addClass("active");
        var srcc = $(".pic-res-mdl.active img").attr('src');
        $(".Residence-page.Residence-main .gallery__bigImage img").attr("src", srcc);
        $(".gallery__item").removeClass("active");

        var lngh_tiem = $(".gallery__item").length;
        var asasas = [];
        asasas = $(".gallery__item").find('img');

        for (var d = 0; d < lngh_tiem; d++) {

            var rslt_tiem = $(asasas[d]).attr("src");

            if (rslt_tiem == srcc) {
                $(".gallery__item").removeClass('active');
                $(asasas[d]).parents(".gallery__item").addClass('active');
                var indx_tiem = $(".gallery__item.active").index();
                $('.Residence-page.Residence-main .gallery__bigImage .counter .counter-num').html(indx_tiem + 1);
            }

        }

    });


    $(".gallery__item").click(function () {

        $(".gallery__item").removeClass("active");
        $(this).addClass("active");
        var srcc = $(".gallery__item.active img").attr('src');
        console.log(srcc);
        $(".Residence-page.Residence-main .gallery__bigImage img").attr("src", srcc);

        var indx = $(this).index();
        indx = indx + 1;

        $(".Residence-page.Residence-main .gallery__bigImage .counter .counter-num").text(indx);

    });

    var len = $(".gallery__item").length;
    $(".Residence-page.Residence-main .gallery__bigImage .counter .max").text(len);

    $(".Residence-main .gallery__next i").click(function () {

        var act = $(".gallery__item.active");
        $(".gallery__item").removeClass("active");
        act.prev().addClass("active");
        var srcc = $(".gallery__item.active img").attr('src');
        console.log(srcc);
        $(".Residence-page.Residence-main .gallery__bigImage img").attr("src", srcc);

        var indx = $(".gallery__item.active").index();
        indx = indx + 1;
        $(".Residence-page.Residence-main .gallery__bigImage .counter .counter-num").text(indx);

        if ($(".gallery__item.active").index() == -1) {

            $(".gallery__item").removeClass('active');
            $(".gallery__item:last-child").addClass('active');
            var lld = $('.Residence-page.Residence-main .gallery__bigImage .counter .max').text();
            $(".Residence-page.Residence-main .gallery__bigImage .counter .counter-num").text(lld);
        }

    });

    $(" .Residence-main .gallery__prev").click(function () {

        var act = $(".gallery__item.active");
        $(".gallery__item").removeClass("active");
        act.next().addClass("active");
        var srcc = $(".gallery__item.active img").attr('src');
        console.log(srcc);
        $(".Residence-page.Residence-main .gallery__bigImage img").attr("src", srcc);

        var indx = $(".gallery__item.active").index();
        indx = indx + 1;
        $(".Residence-page.Residence-main .gallery__bigImage .counter .counter-num").text(indx);

        if ($(".gallery__item.active").index() == -1) {

            $(".gallery__item").removeClass('active');
            $(".gallery__item:nth-child(1)").addClass('active');
            $(".Residence-page.Residence-main .gallery__bigImage .counter .counter-num").text(indx+1);
        }

    });

    $("body .Residence-page.Residence-header .fixed-box .reserve-req button").click(function () {

        $("#popup").addClass("dsb-blk");
        $(".Residence-page.Residence-main .register-popup .black-layout").addClass("show-bk");
        setTimeout(function () {
            $("#popup").addClass("show");
        }, 100);

    });

    $("#close-sign").click(function () {

        $("#popup").removeClass("show");
        setTimeout(function () {
            $("#popup").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);

    });

    $(".Residence-page.Residence-main .popup .close i").click(function () {

        $("#popup").removeClass("show");
        setTimeout(function () {
            $("#popup").removeClass("dsb-blk");
            $(".Residence-page.Residence-main .register-popup .black-layout").removeClass("show-bk");
        }, 100);

    });

    $(".Residence-page.Residence-main .popup .description .overall .discount .title .sub-title").click(function () {

        $(".Residence-page.Residence-main .popup .description .overall .discount").toggleClass("active");

    });

    $(".Residence-page.Residence-main .popup .description .overall .discount .have-code button").click(function () {

        $(".Residence-page.Residence-main .popup .description .overall .discount .your-discount").addClass("active");
        $(".Residence-page.Residence-main .popup .description .overall .discount .have-code").addClass("disable");

    });

    $(".Residence-page.Residence-main .popup .description").addClass('mCustomScrollbar');

    $("body .Residence-page.Residence-header .fixed-box .client-data .number-btn").click(function () {

        $("body .Residence-page.Residence-header .fixed-box .client-data .number-popup").toggleClass("active");

    });

    // --------- Parallex Gallery  js --------------

    var $gallery = $("#gallery");
    var delay;
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var scrollPos = $(this).scrollTop();

        delay = setTimeout(function () {

            if (scrollPos > lastScrollTop) {
                if (scrollY >= 100) {
                    $gallery.css("top", ((scrollY - 100) / 4));
                }
            } else {
                if (scrollY < 100) {
                    $gallery.css("top", ((scrollY) / 4));
                }
            }

        }, 10);

    });

    // ----------- Gallery  js ----------------

    $('body').click(function (event) {

        if (!$(event.target).is('#btn_cntchild') && !$(event.target).closest('.nmp-closset').length) {
            $('.number-popup').removeClass('active');
        } else {
            if ($(event.target).is('#btn_cntchild') && $('.number-popup').hasClass('active'));
        }

    });

    //---------------- steppers ------------------

    var maxCount = 10;
    var minCount = 0;
    var count = 0;

    $('.up_stpadlt').click(function () {

        count++;
        if (count > maxCount) {
            count = maxCount;
        }
        $(this).next(".value").text(count);
        all_p();

    });
    $('.dwn_stpadlt').click(function () {

        count--;
        if (count < minCount) {
            count = minCount;
        }
        $(this).prev(".value").text(count);
        all_p();

    });

    var maxCount1 = 10;
    var minCount1 = 0;
    var count1 = 0;

    $('.up_stpchld').click(function () {

        count1++;
        if (count1 > maxCount1) {
            count1 = maxCount1;
        }
        $(this).next(".value").text(count1);
        all_p();

    });
    $('.dwn_stpchld').click(function () {

        count1--;
        if (count1 < minCount1) {
            count1 = minCount1;
        }
        $(this).prev(".value").text(count1);
        all_p();

    });

    function all_p() {

        var all_prsn1 = parseInt($(".Residence-page.Residence-header .incrementer .value.adlt").text());
        var all_prsn2 = parseInt($(".Residence-page.Residence-header .incrementer .value.chld").text());
        var all_sum = all_prsn1 + all_prsn2;
        $(".Residence-page.Residence-header .finalization .number.to-put").html(all_sum);

    }

    $("#submit_numbers").click(function () {
        var btn_show = $(".Residence-page.Residence-header .finalization .number.to-put").text();
        if (btn_show == 0) {

            $(".Residence-page.Residence-header .fixed-box .client-data .number-popup").removeClass("active");
            $("#btn_cntchild .oldn,#btn_cntchild .num ,#btn_cntchild .young,.Residence-page.Residence-header .client-data .number-btn .label").removeClass("active");

        } else {

            $(".Residence-page.Residence-header .fixed-box .client-data .number-popup").removeClass("active");
            $("#btn_cntchild .oldn,#btn_cntchild .num ,#btn_cntchild .young").addClass("active");
            $(".Residence-page.Residence-header .client-data .number-btn .oldn").text(btn_show);
            $("#btn_cntchild .young.n").text($(".up_stpchld ~ .chld").text());
            $(".Residence-page.Residence-header .client-data .number-btn .label").addClass("active");
        }

    });

    $("#clear_numbers").click(function () {

        count1 = 0;
        count = 0;
        $(".Residence-page.Residence-header .incrementer .value.chld,.Residence-page.Residence-header .incrementer .value.adlt,.Residence-page.Residence-header .finalization .number.to-put").text(0);
        $("#btn_cntchild .oldn,#btn_cntchild .num ,#btn_cntchild .young,.Residence-page.Residence-header .client-data .number-btn .label").removeClass("active");

    });


    //---------------- steppers ------------------

    //------------------------------------------- //ediet-lrn-wrk// -----------------------------------------
    //------------------------------------------- //ediet-lrn-wrk// -----------------------------------------
    //------------------------------------------- //ediet-lrn-wrk// -----------------------------------------
    //------------------------------------------- //ediet-lrn-wrk// -----------------------------------------
    //------------------------------------------- //ediet-lrn-wrk// -----------------------------------------


    // ------------------------- side-pages-header -------------------------
    $('#search-bar').click(function () {

        if ($(".search-bar").hasClass('visible')) {
            $(".search-bar").removeClass("visible");
            $(".search-bar").addClass("not-visible");
        } else {
            $(".search-bar").removeClass("not-visible");
            $(".search-bar").addClass("visible");
        }
    });
    // ------------------------- end of side-pages-header -------------------------

    $('a.pagescroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    //------------------------------------ //residence-edite// -------------------------------------

    $('body').click(function () {

        setTimeout(function () {
            if ($('#register-popup').hasClass('show') || $('#gallery-popup').hasClass('show') || $('#popup').hasClass('show')) {

                $('.Residence-page.Residence-header .fixed-box').css({
                    "display": "none"
                })

            } else {

                $('.Residence-page.Residence-header .fixed-box').css({
                    "display": "block"
                })

            }
        }, 100);

    });

});
