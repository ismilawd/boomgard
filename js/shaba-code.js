$(document).ready(function () {

    $('.shaba-code').attr('maxlength', 29);
    $('.shaba-code').css({
        'user-select': 'none'
    });

    var KeyID;
    var back_space;
    $('.shaba-code').keydown(function (e) {
        KeyID = event.keyCode;
        
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
            //display error message
            return false;
        }
    });

    var instrct = 'IR';
    $('.shaba-code').val(instrct);
    $('.shaba-code').on('input', function (e) {

        var vall = $(this).val();
        if (vall.length <= 2) {

            $(this).val(instrct);
        }

        if (vall.length <= 3 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            $(this).val(instrct + ' ' + temp[2]);

        }else if (vall.length == 6 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[5];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4];
            $(this).val(temp_2 + ' ' + temp_1);

        }else if (vall.length == 10 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[9];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5] + temp[6] + temp[7] + temp[8];
            $(this).val(temp_2 + ' ' + temp_1);

        }
        
        var type_hidden = $(this).next('.hidn').val(vall);
        var temp_count = type_hidden.val();
        temp_count = temp_count.replace("IR", "");
        type_hidden.val(temp_count);

    });

    //-============================= end =====================================-//

});
