$(document).ready(function () {

    //------------------------------------ inner-page-width -------------------------------------

    var width_1 = $(window).width(),
        height_1 = $(window).height();

    if ((width_1 >= 1200) && (height_1 >= 0)) {

        var kirr = $(".footer .main-footer .about-us .text-about").width(); //----------- footer ---------
        var koll = $(window).width();
        kirr = koll - kirr;
        kirr = (kirr / 2) - 130;
        $("#width-before").css({ //----------- box-fix-width ---------  .support-main .support-container
            "padding-left": kirr,
            "padding-right": kirr
        });
        //----------- header-width --------- 
        $("body .Residence-page.Residence-header.side-pages-header .top-header").css({
            "padding-left": kirr,
            "padding-right": kirr
        });
    }

    var width_1 = $(window).width(),
        height_1 = $(window).height();

    if ((width_1 >= 1600) && (height_1 >= 0)) {

        var kirr = $(".footer .main-footer .about-us .text-about").width(); //----------- footer ---------
        var koll = $(window).width();
        kirr = koll - kirr;
        kirr = (kirr / 2.5) - 130;
        $("#width-before").css({ //----------- box-fix-width ---------  .support-main .support-container
            "padding-left": kirr,
            "padding-right": kirr
        });
        //----------- header-width --------- 
        $("body .Residence-page.Residence-header.side-pages-header .top-header").css({
            "padding-left": kirr,
            "padding-right": kirr
        });
    }

    //--------------------- .support-main .support-container .support-header-----------------------

    var ass = $("#header-fix-width").width();
    $("body").get(0).style.setProperty("--width", ass + "px");

    //------------------------------------ //inner-page-width// -------------------------------------
    //------------------------------------ residence-edite -------------------------------------

    if ($('.tab-residence').length) {

        //----------------------- change-tab --------------------------

        $('ul.tabs li').click(function () {
            $('.current').removeClass("current-animation");
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            var asnd = $("#" + tab_id).addClass('current'); //-----------------***--------------------

            setTimeout(function () {
                $('.current').addClass("current-animation");
            }, 10);

        });

        $('.tab-residence .next-page #btn-next').click(function () {
            $('.current').removeClass("current-animation");

            var act_li = $('ul.tabs li.current').attr('data-tab');
            act_li++;
            if (act_li == 7) {
                act_li = act_li - 6;
            }

            $('ul.tabs li').removeClass('current');
            $('[data-tab="' + act_li + '"]').addClass('current');

            $('.tab-content').removeClass('current');
            $("#" + act_li).addClass('current'); //-----------------***--------------------
            setTimeout(function () {
                $('.current').addClass("current-animation");
            }, 10);

        });

        //----------------------- tab-check-box ---------------------------

        //----------------------- tab-check-box ---------------------------
        //----------------------- //change-tab// --------------------------
        //----------------------- get-value-textatea --------------------------

        $('#get-val').click(function () {

            var count = $(".my-panel .main-panel .policy .inner-policy .content-policy .check-box").length;
            count = count + 2;
            var temp = $("#policy-txt-area").val().trim();
            if (temp != "") {
                $(".content-policy .inner-content .just-checked").append(" <div class = 'check-box' ><div class = 'mdc-form-field'><div class = 'mdc-checkbox'><input id=" + 'checkbox-' + count + " type='checkbox' class= 'mdc-checkbox__native-control' checked='checked'/><label for=" + 'checkbox-' + count + ">" + temp + "</label><div class = 'mdc-checkbox__background'><svg class = 'mdc-checkbox__checkmark' viewBox = '0 0 24 24' ><path class = 'mdc-checkbox__checkmark-path' fill = 'none' d = 'M1.73,12.91 8.1,19.28 22.79,4.59'/ ></svg><div class = 'mdc-checkbox__mixedmark'></div></div><div class = 'mdc-checkbox__ripple'></div></div></div></div>");
            }

            $('#policy-txt-area').val('');

        });

        //----------------------- //get-value-textatea// --------------------------
        //----------------------- //amenities// --------------------------

        $('#get-amen').click(function () {

            var count1 = $(".amenities .inner-amenities .checkeds .button-checkrd").length;
            count1 = count1 + 2;
            var temp1 = $("#amen").val().trim();
            if (temp1 != "") {
                $(".amenities .inner-amenities .checkeds").append("<div class='button-checkrd'><input id='amen-" + count1 + "' type='checkbox' checked='checked'><label for='amen-" + count1 + "' class='btns'>" + temp1 + "</label></div>");
            }

            $('#amen').val('');

        });

        //----------------------- //amenities// --------------------------
        //----------------------- height-box --------------------------

        var h_main_box = $(".tab-residence").height();
        var h_content = h_main_box - 120;
        $(".tab-content").css({
            "height": h_content
        });

        //----------------------- //height-box// --------------------------
    }
    //------------------------------------ //residence-edite// -------------------------------------
    //------------------------------------ input-select2 -------------------------------------

    if ($(".main-header .body-search.where .box-result").length) {
        $(".main-header .body-search.where .box-result").fadeOut(200);
        $(".main-header .body-search.count .box-result").fadeOut(200);
    }

    $(".main-header .body-search.where input").focusin(function () {
        $(".main-header .body-search.where .box-result").fadeIn(200);
    });
    $(".main-header .body-search.where input").focusout(function () {
        $(".main-header .body-search.where .box-result").fadeOut(200);
    });

    $(".main-header .body-search.count input").focusin(function () {
        $(".main-header .body-search.count .box-result").fadeIn(200);
    });
    $(".main-header .body-search.count input").focusout(function () {
        $(".main-header .body-search.count .box-result").fadeOut(200);
    });

    $("body").change(function () {
        $(".main-header .body-search.where .mdc-floating-label").removeClass("scl");
        $(".main-header .body-search.count .mdc-floating-label").removeClass("scl");
    });

    $(".main-header .body-search.where .box-result .inner-box li").click(function () {
        //        var a = $(this).text();
        //        a = a.replace(/ +/g, " ");
        //        var b = $(".main-header .body-search.where input").val(a);
        var title_h6 = $(this).find('h6').text();
        var subtitle_spn = $(this).find('.first-spn b').text();
        $('.main-header .body-search.where input').val(title_h6 + '، ' + subtitle_spn);
        //-===================================-
        $(".main-header .body-search.where .mdc-floating-label").addClass("mdc-floating-label--float-above");
        $(".main-header .body-search.where .mdc-floating-label").addClass("scl");
    });

    $(".main-header .body-search.count .box-result .inner-box li").click(function () {
        var a = $(this).find('span:first-child').text();
        a = a.replace(/ +/g, " ");
        var b = $(".main-header .body-search.count input").val(a);
        //-===================================-
        $(".main-header .body-search.count .mdc-floating-label").addClass("mdc-floating-label--float-above");
        $(".main-header .body-search.count .mdc-floating-label").addClass("scl");
    });

    //------------------------------------ input-select2 -------------------------------------

    var t;

    //------------------------------------ chart-js -------------------------------------

    if ($('#myChart').length) {
        ///////////////////////////////////////////////
        // Get the context of the Chart canvas element we want to select
        var ctx = $("#myChart");

        // Chart Options
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    fontSize: 14,
                    fontFamily: "IRANSans"
                }
            },
            hover: {
                mode: 'label'
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                        // labelString: 'Month'
                    },
                    ticks: {
                        fontSize: 14,
                        fontFamily: "IRANSans",
                    }
                    }],

                yAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                        // labelString: 'میزان بازدید'
                    },
                    ticks: {
                        fontSize: 14,
                        fontFamily: "IRANSans",
                    }
                    }]
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart - Legend'
            },
        };

        // Chart Data
        var chartData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],

            datasets: [{
                label: "میزان بازدید ",
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                lineTension: 0,
                fill: false,
                borderColor: "#ff495c",
                pointBorderColor: "#ff495c",
                pointBackgroundColor: "#ff495c",
                pointBorderWidth: 1,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                }]
        };

        var config = {
            type: 'line',
            // Chart Options
            options: chartOptions,
            data: chartData
        };

        // Create the chart
        var lineChart = new Chart(ctx, config);

        ///////////////////////////////////////////////
    }

    //------------------------------------ //chart-js// -------------------------------------
    //------------------------------------ datatable -------------------------------------

    if ($('.table-panel').length) {
        t = $('.table-panel').DataTable({
            "scrollY": "200px",
            info: true,
            "scrollCollapse": true,
            "initComplete": function (settings, json) {
                $('body').find('.dataTables_scrollBody').addClass("mCustomScrollbar");
            },
            "oLanguage": {
                "sSearch": "<a href'#'><i class='material-icons'>search</i></a>"
            },
            "sPaginationType": "listbox",
            "columnDefs": [{
                "searchable": false,
                "orderable": false,
                "targets": 0
            }]
        });

        t.on('order.dt search.dt', function () {
            t.column(0, {
                search: 'applied',
                order: 'applied'
            }).nodes().each(function (cell, i) {
                cell.innerHTML = i + 1;
            });
        }).draw();

        $(".dataTables_length select option").append("<span>رکورد در هر صفحه</span>");

        $(".dataTables_length select , .paging_listbox select").select2({
            "minimumResultsForSearch": -1
        });

        $(".my-panel .content-panel .dataTables_wrapper table.dataTable th").append("<i class='material-icons'>arrow_downward</i>");

        $('body').on('change', function () {
            $(".paging_listbox select").select2({
                "minimumResultsForSearch": -1
            });
        });

        $('.my-panel .content-panel .dataTables_wrapper .dataTables_filter label input').on('change', function () {
            $(".paging_listbox select").select2({
                "minimumResultsForSearch": -1
            });
        });
        //        var table = $('.table-panel').DataTable();



        setTimeout(function () {
            $(".content-panel .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody").addClass('mCustomScrollbar');
        }, 5000);

    }

    //------------------------------------ //datatable// -------------------------------------


    //------------------------------------ datatable -------------------------------------

    if ($('.owl-carousel').length) {

        $('.owl-carousel').owlCarousel({

            rtl: true,
            loop: true,
            nav: true,
            navText: ["<div class='arrow-prev'><i class = 'material-icons' >keyboard_arrow_left </i></div>", "<div class='arrow-next'><i class = 'material-icons' >keyboard_arrow_left </i></div>"],
            margin: 2,
            autoplay: false,
            dots: false,
            smartSpeed: 100,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }


    $("#login").click(function () {
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.reg-form").removeClass("show");
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.login-form").removeClass("hide");
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.reg-form").addClass("hide");
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.login-form").addClass("show");
    });

    $("#register").click(function () {
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.login-form").removeClass("show");
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.reg-form").removeClass("hide")
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.login-form").addClass("hide");
        $(".register-page .main-register .reg-sign .forms > .mdc-layout-grid_inner.reg-form").addClass("show");
    });


    $("#close-mdl").click(function () {
        $(".modal").css({
            "display": "none"
        });
    });

    $("#close").click(function () {
        $(function () {
            var width1 = $(window).width(),
                height1 = $(window).height();
            if ((width1 <= 10000) && (width1 >= 0)) {
                $("#tabs-panel").toggleClass("width-zero");
                $("#support").toggleClass("close-before");
                $("#content-panel").toggleClass("width-100");
                $("#main-tab").toggleClass("close-before");
            }
        });
    });


    //----------------------------- height-panel --------------------------------------//
    if ($('.pael').length) {

        var all_height = $(".pael").height();
        var main_height = $(".pael .header-panel").height();
        var main_h = all_height - main_height;
        $(".pael .my-panel").css({
            "height": main_h
        })
    }
    //----------------------------- //height-panel// --------------------------------------//
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
    //------------------------------------ test -----------------------------------

    var tst = $(".my-panel .main-panel .main-inner .content-panel .inner-art .page-details .inner-det").height();

    var hdr = $(".my-panel .content-panel .dataTables_wrapper .dataTables_filter").height();
    tst = tst - 100;
    var ok = tst - hdr;
    $(".content-panel .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody").css('height', ok);

    //------------------------------------ //test// -----------------------------------

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 30
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    //---------------------------------- drop-down-prev-next -----------------------------

    $(".paging_listbox").append("<div class='arrow-drp'><span value='prev' id='prevPage'><i class='material-icons'>keyboard_arrow_right</i></span><span value='next' id='nextPage'><i class='material-icons'>keyboard_arrow_left</i></span></div>");

    $('#nextPage').on('click', function () {
        var ass;
        var me;
        ass = t.page('next').draw('page');
        me = $('.select2-container').find('.select2-results ul li.select2-results__option--highlighted').data('select2-id');
    });

    $("#prevPage").click(function () {
        t.page('previous').draw('page');
    });

    if ($('.table-panel').length) {
        var table = $('.table-panel').dataTable().api();

        // Jump to the next page of data
        table.page('next').draw(true);
    }
    //---------------------------------- panel-struct -----------------------------

    $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li").click(function () {
        $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li").removeClass("active");
        $(this).addClass("active");
        var icon = $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li.active").index();
        icon = icon + 1;
        $(".my-panel .main-panel .main-inner .tabs-panel .titles-tab .inner-titles ul li").removeClass("active");
        $(".my-panel .main-panel .main-inner .tabs-panel .titles-tab .inner-titles ul li:nth-child(" + icon + ")").addClass("active");
    });

    $(".my-panel .main-panel .main-inner .tabs-panel .titles-tab .inner-titles ul li").click(function () {
        $(".my-panel .main-panel .main-inner .tabs-panel .titles-tab .inner-titles ul li").removeClass("active");
        var ttl = $(this).addClass("active");
        ttl = ttl.index();
        ttl = ttl + 1;
        $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li").removeClass("active");
        $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li:nth-child(" + ttl + ")").addClass("active");
    });

    //---------------------------------- //panel-struct// -----------------------------
    //---------------------------------- //loader// -----------------------------

    $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-icons li").click(function () {
        setTimeout(function () {
            $(".my-panel .main-panel .main-inner .content-panel .inner-art .page-details .loader").fadeIn();
        }, 2600);
    });

    $(".my-panel .main-panel .tabs-panel .main-tab .icons-tab .inner-titles li").click(function () {
        setTimeout(function () {
            $(".my-panel .main-panel .main-inner .content-panel .inner-art .page-details .loader").fadeIn();
        }, 2600);
    });

    setTimeout(function () {
        $(".my-panel .main-panel .main-inner .content-panel .inner-art .page-details .loader").fadeOut();
    }, 2600);

    //---------------------------------- //loader// -----------------------------
    //------------------------------------ //residence-edite// -------------------------------------
    //------------------------------------ //residence-edite// -------------------------------------

});
