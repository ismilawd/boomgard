$(document).ready(function () {

    $('.phone').attr('maxlength', 17);
    $('.phone').css({
        'user-select': 'none'
    });

    var KeyID;
    var back_space;
    $('.phone').keydown(function (e) {
        KeyID = event.keyCode;

        console.log(e.which);
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
            //display error message
            return false;
        }

    });


    var instrct = '+98';
    $('.phone').val(instrct);
    $('.phone').on('input', function (e) {

        var vall = $(this).val();
        if (vall.length <= 3) {

            $(this).val(instrct);
        }

        if (vall.length <= 4 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            $(this).val(instrct + '(' + temp[3]);

        } else if (vall.length == 6 && KeyID != 8) {

            $(this).val(vall + ')-');

        } else if (vall.length == 7 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[6];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5];
            $(this).val(temp_2 + ')-' + temp_1);

        } else if (vall.length == 8 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[7];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5] + temp[6];
            $(this).val(temp_2 + '-' + temp_1);

        } else if (vall.length == 12 && KeyID != 8) {

            $(this).val(vall + ' ');

        } else if (vall.length == 13 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[12];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5] + temp[6] + temp[7] + temp[8] + temp[9] + temp[10] + temp[11];
            $(this).val(temp_2 + ' ' + temp_1);

        }

        var type_hidden = $(this).next('.hidn').val(vall);
        var temp_count = type_hidden.val();
        temp_count = temp_count.replace("+98", "");
        temp_count = temp_count.replace(/[^a-zA-Z0-9 ]/g, "");
        temp_count = temp_count.replace(" ", "");
        type_hidden.val(temp_count);


        if (vall.length == 3) {

            $(this).siblings().find('span.nmb-1').css({
                'display': 'block'
            });

        } else if (vall.length == 4) {

            $(this).siblings().find('span.nmb-1').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-2').css({
                'display': 'block'
            });

        } else if (vall.length == 6) {

            $(this).siblings().find('span.nmb-2').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-3').css({
                'display': 'block'
            });

        } else if (vall.length == 9 || vall.length == 8 || vall.length == 7) {

            $(this).siblings().find('span.nmb-3').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-4').css({
                'display': 'block'
            });

        } else if (vall.length == 10) {

            $(this).siblings().find('span.nmb-4').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-5').css({
                'display': 'block'
            });

        } else if (vall.length == 11) {

            $(this).siblings().find('span.nmb-5').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-6').css({
                'display': 'block'
            });

        } else if (vall.length == 12) {

            $(this).siblings().find('span.nmb-6').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-7').css({
                'display': 'block'
            });

        } else if (vall.length == 14 || vall.length == 13) {

            $(this).siblings().find('span.nmb-7').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-8').css({
                'display': 'block'
            });

        } else if (vall.length == 15) {

            $(this).siblings().find('span.nmb-8').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-9').css({
                'display': 'block'
            });

        } else if (vall.length == 16) {

            $(this).siblings().find('span.nmb-9').css({
                'display': 'none'
            });
            $(this).siblings().find('span.nmb-10').css({
                'display': 'block'
            });

        } else if (vall.length == 17) {

            $(this).siblings().find('span.nmb-10').css({
                'display': 'none'
            });

        }



    });


    //-============================= end =====================================-//

});
