$(function () {
    $("#fileupload").change(function () {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        if (regex.test($(this).val().toLowerCase())) {

                if (typeof (FileReader) != "undefined") {
                    $("#dvPreview").show();
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("#dvPreview").append("<img />");
                        $("#dvPreview img").attr("src", e.target.result);
                    }
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    alert("This browser does not support FileReader.");
                }
        } else {
            alert("Please upload a valid image file.");
        }
    });
});
