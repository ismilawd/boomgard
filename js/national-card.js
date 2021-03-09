$(document).ready(function () {

    $('.national-card').attr('maxlength', 12);
    $('.national-card').css({
        'user-select': 'none'
    });

    var KeyID;
    var back_space;
    $('.national-card').keydown(function (e) {
        KeyID = event.keyCode;

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
            //display error message
            return false;
        }
    });

    $('.national-card').on('input', function (e) {

        var vall = $(this).val();

        if (vall.length == 4 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[3];
            let temp_2 = temp[0] + temp[1] + temp[2];
            $(this).val(temp_2 + '-' + temp_1);

        } else if (vall.length == 11 && KeyID != 8) {

            let temp = [];
            temp = $(this).val();
            let temp_1 = temp[10];
            let temp_2 = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5] + temp[6] + temp[7] + temp[8] + temp[9];
            $(this).val(temp_2 + '-' + temp_1);

        }

        var type_hidden = $(this).next('.hidn').val(vall);
        var temp_count = type_hidden.val();
        temp_count = temp_count.replace(/[^a-zA-Z0-9 ]/g, "");
        temp_count = temp_count.replace(" ", "");
        type_hidden.val(temp_count);

    });

    //-============================= end =====================================-//

});
