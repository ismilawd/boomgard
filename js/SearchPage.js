    var width_msc = $(window).width(),
        height_msc = $(window).height();

    if ((width_msc >= 1080) && (height_msc >= 0)) {

        $(".search-page.search-main .popular .scroll-parts").addClass("mCustomScrollbar");
        var value = 0;
        var checkbox1 = document.getElementById("checkbox1")
        checkbox1.checked = value
        document.getElementById("checkbox1").addEventListener("change", function (element) {
            if(checkbox1.checked == true){
                $('.search-page').addClass('map-dis');
                $('.search-page.search-main .popular #mCSB_3_container').fadeOut();
                $('.search-page.search-main .popular #mCSB_3_container').fadeIn();
            }else if(checkbox1.checked == false){
                $('.search-page').removeClass('map-dis');
                
            }
        });
    }else{

        
        var value = 1;
        var checkbox1 = document.getElementById("checkbox1")
        checkbox1.checked = value
        document.getElementById("checkbox1").addEventListener("change", function (element) {
            if(checkbox1.checked == false){
                $('.search-page').addClass('map-dis');
                $('.search-page.search-main .popular #mCSB_3_container').fadeOut();
                $('.search-page.search-main .popular #mCSB_3_container').fadeIn();
            }else if(checkbox1.checked == true){
                $('.search-page').removeClass('map-dis');
                
            }
        });
    }

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
    // ------------------------------------ NoUiSlider Js -----------------------------------
    var pmdSliderrent = document.getElementById('pmd-slider-rent');
    noUiSlider.create(pmdSliderrent, {
        start: [0, 500],
        connect: true,
        direction: 'rtl',
        tooltips: [wNumb({
            decimals: 0
        }), wNumb({
            decimals: 0
        })],
        format: wNumb({
            decimals: 0,
            thousand: '',
        }),
        range: { // Slider can select '0' to '100'
            'min': 0,
            'max': 500
        }
    });
    var valueMaxrent = document.getElementById('value-Max-rent'),
        valueMinrent = document.getElementById('value-Min-rent');
    // When the slider value changes, update the input and span
    pmdSliderrent.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            valueMaxrent.innerHTML = values[handle];
        } else {
            valueMinrent.innerHTML = values[handle];
        }
    });

    // ------------------------------------ NoUi add filter number -----------------------------------

    pmdSliderrent.noUiSlider.on('update', function () {
        var handlerValue = pmdSliderrent.noUiSlider.get();
        if ((handlerValue[1] == 500) && (handlerValue[0] == 0)) {
            $(".price-period").removeClass("active");
        } else {
            $(".price-period").addClass("active");
        }
    });
    // ------------------------------------ NoUi add filter number -----------------------------------

    // ------------------------------------ NoUiSlider Js -----------------------------------
    // ------------------------------------ PopUp Js -----------------------------------
    function DestinationPopup() {
        document.getElementById("destinationPopup").style.visibility = "visible";
        document.getElementById("blacked").style.visibility = "visible";
        document.getElementById("numberPopup").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
        document.getElementById("account-popup").style.visibility = "hidden";

    }

    function closeDestinationPopup() {
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("blacked").style.visibility = "hidden";
    }

    function numberPopup() {
        document.getElementById("numberPopup").style.visibility = "visible";
        document.getElementById("blacked").style.visibility = "visible";
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
        document.getElementById("account-popup").style.visibility = "hidden";

    }

    function Close() {
        document.getElementById("blacked").style.visibility = "hidden";
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("numberPopup").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
        document.getElementById("account-popup").style.visibility = "hidden";

    }

    function openFilters() {
        document.getElementById("filterPopup").style.visibility = "visible";
        document.getElementById("blacked").style.visibility = "visible";
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("numberPopup").style.visibility = "hidden";
        document.getElementById("account-popup").style.visibility = "hidden";
    }

    $('#account-popup-button').click(function () {
        document.getElementById("account-popup").style.visibility = "visible";
        document.getElementById("blacked").style.visibility = "visible";
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("numberPopup").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
    });

    // ------------------------------------ PopUp Js -----------------------------------

    // Check Box Js
    $(".mdc-checkbox").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active")
        }
    });

    $('.box.chosenn').click(function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass("active");

        } else {
            $(this).addClass("active");
            this.style.transition = "background .5s";
        }
    });


    $('.box.places').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");

        } else {
            $(".box.places").removeClass("active");
            $(this).toggleClass("active");
        }

        if ($(".box.places").hasClass('active')) {
            $(".mdc-button.destination").removeClass("deactivated");
            $(".mdc-button.destination").addClass("activated");
        } else {
            $(".mdc-button.destination").removeClass("activated");
            $(".mdc-button.destination").addClass("deactivated");

        }
    });

    // --------------------------------- stepper touch ------------------------------- //
    var insidevalue = document.querySelector('.slide-1 .incrementer .value span');

    var maxCount = 10;
    var minCount = 1;
    var count = 0;
    var counter = 0;

    function add() {

        count++;

        if (count > maxCount) {
            count = maxCount;
        }

        updateValue();
    }

    function remove() {

        count--;

        if (count < minCount) {
            count = minCount;
        }

        updateValue();
    }

    function updateValue() {

        insidevalue.innerHTML = count;
        counter = count;
    }

    var insidevalue2 = document.querySelector('.slide-2 .incrementer .value span');

    var maxCount2 = 10;
    var minCount2 = 0;
    var count2 = 0;
    var counter2 = 0;

    function add2() {

        count2++;

        if (count2 > maxCount2) {
            count2 = maxCount2;
        }

        updateValue2();

        if (count == 0) {

            count++;
            insidevalue.innerHTML = count;
            counter = count;
        }

    }

    function remove2() {

        count2--;

        if (count2 < minCount2) {
            count2 = minCount2;
        }

        updateValue2();
    }

    function updateValue2() {
        insidevalue2.innerHTML = count2;
        counter2 = count2;


    }

    $('.mdc-button.up').click(function () {

        $(".number.to-put").html(counter + counter2);

    });

    $('.mdc-button.down').click(function () {

        $(".number.to-put").html(count + count2);

    });


    $('.number-popup .finalization .buttons button.choose').click(function () {
        if (count > 0 || count2 > 0) {
            $(".mdc-button.number-button").removeClass("deactivated");
            $(".mdc-button.number-button").addClass("activated");
            $(".search-page.search-header .top-header .travel .number-button .double").css("display", "block");
            $(".search-page.search-header .top-header .travel .number-button .variable").html(count + count2);
        } else {
            $(".mdc-button.number-button").removeClass("activated");
            $(".mdc-button.number-button").addClass("deactivated");
            $(".search-page.search-header .top-header .travel .number-button .double").css("display", "none");
            $(".search-page.search-header .top-header .travel .number-button .variable").empty();

        }
        document.getElementById("blacked").style.visibility = "hidden";
        document.getElementById("numberPopup").style.visibility = "hidden";

    });

    var insidevalue3 = document.querySelector('.slide-3 .incrementer .value span');

    var maxCount3 = 10;
    var minCount3 = 0;
    var count3 = 0;

    function add3() {

        count3++;

        if (count3 > maxCount3) {
            count3 = maxCount3;
        }

        updateValue3();
    }

    function remove3() {

        count3--;

        if (count3 < minCount3) {
            count3 = minCount3;
        }

        updateValue3();
    }

    function updateValue3() {
        insidevalue3.innerHTML = count3;

    }


    var insidevalue4 = document.querySelector('.slide-4 .incrementer .value span');

    var maxCount4 = 10;
    var minCount4 = 0;
    var count4 = 0;

    function add4() {

        count4++;

        if (count4 > maxCount4) {
            count4 = maxCount4;
        }

        updateValue4();
    }

    function remove4() {

        count4--;

        if (count4 < minCount4) {
            count4 = minCount4;
        }

        updateValue4();
    }

    function updateValue4() {
        insidevalue4.innerHTML = count4;
    }

    $('.mdc-button.up').click(function () {


    });



    $('.incrementer.room').click(function () {

        if (count3 > 0) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");


        }
    });
    $('.incrementer.bed').click(function () {

        if (count4 > 0) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });





    // console.log($("#filterPopup .active").length);
    $('#filterPopup').click(function () {
        $(".number.filter-num").html($("#filterPopup .active").length);

    });
    // ----------------------------------- pagination -------------------------- //
    $('.page').on('click', function () {
        $('.page').removeClass('active');
        $(this).addClass('active');
    });
    // ----------------------------------- pagination -------------------------- //







    // Set the Height of Search

    if (screen.width >= 1080) {



        $screenHeight = $(window).height();


        $headerHeight = $("header").outerHeight();

        $bodyHeight = $screenHeight - $headerHeight;

        $("#search-map").height($bodyHeight);
        $(".search-page.search-main .map .map-inner").height($bodyHeight);

        $(".popular").height($bodyHeight);
    } else if (screen.width <= 1080) {
        $popular = $(".popular").outerHeight();;

        $(".search-page.search-main .map .map-inner").height($popular);
        $(".search-page.search-main .map .map-inner").height($popular);

    }

    function owl() {

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

    setTimeout(owl, 1000);


    // ---------------------------------------- Clear all filters -------------------------------

    $('#clear-filters').on('click', function () {
        $('input:checked').prop('checked', false);
        $(".mdc-checkbox").removeClass("active");
        $(".box.chosenn").removeClass("active");
        count3 = 0;
        count4 = 0;
        insidevalue3.innerHTML = count3;
        insidevalue4.innerHTML = count4;
        $(".incrementer.room").removeClass("active");
        $(".incrementer.bed").removeClass("active");
        pmdSliderrent.noUiSlider.set([0, 500]);
        $(".filters .variable").empty();
        $('.filters button.filter-button .double').css("display", "none");
        $(".mdc-button.filter-button").removeClass("activated");
        $(".mdc-button.filter-button").addClass("deactivated");
    });


    $('#clear-numbers').on('click', function () {
        counter = 0;
        counter2 = 0;
        count = 0;
        count2 = 0;
        insidevalue.innerHTML = count;
        insidevalue2.innerHTML = count2;
        $(".number.to-put").html(count + count2);
        $(".travel .number-button.activated").removeClass("activated");
        $(".travel .number-button.activated").addClass("deactivated");
        $(".mdc-button.number-button").removeClass("activated");
        $(".mdc-button.number-button").addClass("deactivated");
        $(".search-page.search-header .top-header .travel .number-button .double").css("display", "none");
        $(".search-page.search-header .top-header .travel .number-button .variable").empty();



    });





    // -------------------------------------- Choose a city -------------------------------/
    $('.box.places').on('click', function () {
        if ($(".box.places").hasClass("active")) {
            $(".travel .destination .double").css("display", "block");
            $(".travel .destination .city").html($(".box.places.active .residence-describtion .name").text());
        } else {
            $(".travel .destination .double").css("display", "none");
            $(".travel .destination .city").empty();

        }
        document.getElementById("blacked").style.visibility = "hidden";
        document.getElementById("destinationPopup").style.visibility = "hidden";
        document.getElementById("numberPopup").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
        document.getElementById("account-popup").style.visibility = "hidden";




    });
    // ------------------------------------ clear the input value by pressing X -------------------------- //
    $('.destination-popup .search-input i').on('click', function () {
        $(".destination-popup .search-input input").val("");
    });

    $('#applyFilter').on('click', function () {

        if ($("#filterPopup .active").length == 0) {
            $(".filters .variable").empty();
            $('.filters button.filter-button .double').css("display", "none");
            $(".mdc-button.filter-button").addClass("deactivated");
            $(".mdc-button.filter-button").removeClass("activated");
        } else {
            $('.filters button.filter-button .double').css("display", "block");
            $(".filters .variable").html($("#filterPopup .active").length);
            $(".mdc-button.filter-button").removeClass("deactivated");
            $(".mdc-button.filter-button").addClass("activated");
        }
        document.getElementById("blacked").style.visibility = "hidden";
        document.getElementById("filterPopup").style.visibility = "hidden";
    });


    // function check() {
    //     if (count3 > 0 || count4 > 0 || ($(".mdc-checkbox").hasClass("active")) || ($(".box.chosenn").hasClass("active") || ($(".price-period").hasClass("active")))) {
    //         $(".mdc-button.filter-button").removeClass("deactivated");
    //         $(".mdc-button.filter-button").addClass("activated");

    //     }
    //     else {

    //         $(".mdc-button.filter-button").removeClass("activated");
    //         $(".mdc-button.filter-button").addClass("deactivated");

    //     }

    // }
    // setInterval("check()", 10);

    $('body').click(function () {

        if ($('#filterPopup').css('visibility') == 'visible' ||
            $('#numberPopup').css('visibility') == 'visible' ||
            $('#destinationPopup').css('visibility') == 'visible' ||
            $('#account-popup').css('visibility') == 'visible') {

            $('#over_ly').css({
                'display': 'block'
            });

            $('#blacked').css({
                'visibility': 'visible'
            });

        } else if ($('#filterPopup').css('visibility') == 'hidden' ||
            $('#numberPopup').css('visibility') == 'hidden' ||
            $('#destinationPopup').css('visibility') == 'hidden' ||
            $('#account-popup').css('visibility') == 'hidden') {

            $('#over_ly').css({
                'display': 'none'
            });

            $('#blacked').css({
                'visibility': 'hidden'
            });

        }

    });

    $('#over_ly').click(function () {

        $(this).css({
            'display': 'none'
        });

        $('#filterPopup,#numberPopup,#destinationPopup,#account-popup').css({
            'visibility': 'hidden'
        });

    });

