$(document).ready(function () {

    $(document).on('click', '.change-img', function (e) {

        $('.overlay-imagespart,.modal-images').css({
            "display": 'block'
        });
        setTimeout(function () {
            $('.overlay-imagespart,.modal-images').addClass('show');
        }, 100);

        //        $('.modal-images .inner-mdlimg .main-boximages .mCustomScrollBox .mCSB_container').append(`
        //                <div class="item-images">
        //                    <div class="pic"><img src="images/Residences/Residence%201.jpg"></div>
        //                </div>`);

        var len_span = $(".file-row").length;
        var dataList_span = $(".file-row").map(function () {
            return $(this).find('img').attr('src');
        }).get();

        $('.modal-images .inner-mdlimg .main-boximages .mCustomScrollBox .mCSB_container').html('');

        for (var i = 0; i < len_span; i++) {

            $('.modal-images .inner-mdlimg .main-boximages .mCustomScrollBox .mCSB_container').append(`
                <div class="item-images">
                    <div class="pic"><img src="` + dataList_span[i] + `"></div>
                </div>
            `);

        }

        $('.modal-images .inner-mdlimg .main-boximages .mCSB_container .item-images:first-child').remove();

    });

    $('.overlay-imagespart,.modal-images .inner-mdlimg > span,.modal-images .item-images').click(function () {

        $('.overlay-imagespart,.modal-images').removeClass('show');
        setTimeout(function () {
            $('.overlay-imagespart,.modal-images').css({
                "display": 'none'
            });
        }, 300);

    });

    $(document).on('click', '.item-images', function () {

        var len_filerow = $(".file-row").length;
        var dataList_filerow = $(".file-row").map(function () {
            return $(this);
        }).get();

        var item_images = $(this).find('img').attr('src');
        var filerow_first = $('.file-row:first-child').find('img').attr('src');

        for (var i = 0; i < len_filerow; i++) {

            if ($(dataList_filerow[i]).find('img').attr('src') == item_images) {

                var dd = $(dataList_filerow[i]);
                var temp = $(dd).find('img').attr('src');
                $('.file-row:first-child').find('img').attr('src', temp);
                $(dd).find('img').attr('src', filerow_first);

            } else {
                console.log('else');
            }

        }

        $('.overlay-imagespart,.modal-images').removeClass('show');
        setTimeout(function () {
            $('.overlay-imagespart,.modal-images').css({
                "display": 'none'
            });
        }, 300);

    });

});

// Get the template HTML and remove it from the doument
var previewNode = document.querySelector("#template");
previewNode.id = "";
var previewTemplate = previewNode.parentNode.innerHTML;
previewNode.parentNode.removeChild(previewNode);

var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
    url: "../boomgard-99-2-28/upload.php", // Set the url
    thumbnailWidth: null,
    thumbnailHeight: null,
    parallelUploads: 20,
    previewTemplate: previewTemplate,
    autoQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#previews", // Define the container to display the previews
    clickable: "#myDropzone", // Define the element that should be used as click trigger to select files.
    accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
            done("Naha, you don't.");
        } else {
            done();
            upload_images(file);
            $('#myDropzone .notyet-pictures').html(`
                 <div class="notyet-pictures yets-photos">
                    <div class="inner-notyet">
                    <div class="pic-notyet icon-yet">
                        <span class="material-icons">add_a_photo</span>
                    </div>
                    <div class="ttl-addphoto"><span>افزودن تصویر...</span></div>
                      <div id="dvPreview" class="preview"></div>
                    </div>
                 </div>
            `);
        }
    }
});

myDropzone.on("addedfile", function (file) {
    // Hookup the start button    
    $('#previews .file-row').addClass('active');
    $('.delete').click(function () {
        if ($('#previews img').length != 0) {
            $('#myDropzone .notyet-pictures').html(`
                 <div class="notyet-pictures yets-photos">
                    <div class="inner-notyet">
                    <div class="pic-notyet icon-yet">
                        <span class="material-icons">add_a_photo</span>
                    </div>
                    <div class="ttl-addphoto"><span>افزودن تصویر...</span></div>
                      <div id="dvPreview" class="preview"></div>
                    </div>
                 </div>
            `);
        } else {
            $('#myDropzone .notyet-pictures').html(`
                <div class="notyet-pictures">
                    <div class="inner-notyet">

                        <div class="pic-notyet">
                            <img src="images/No%20Image.png">
                        </div>
                        <div class="decription-notyet">
                            <h4>!هیچ تصویری اضافه نکرده‌اید</h4>
                            <p>اضافه کردن تصاویر از اقامتگاه موجب دیده شدن هرچه بیشتر
                                اقامتگاه میشود، همچنین از اولویت بالایی در
                                جستجو برخوردار می‌شود.</p>
                        </div>
                        <div class="bnt-addpic">
                            <a class="btn-reg mdc-button mdc-button--raised mdc-ripple-upgraded">
                                <span class="mdc-button__ripple"></span>
                                <span class="rg-slch">
                                    <strong>افزودن تصاویر</strong>
                                    <i class="material-icons">
                                        add
                                    </i>
                                </span>
                            </a>
                        </div>

                        <div id="dvPreview" class="preview"></div>

                    </div>
                </div>
            `);
        }
    });

    if ($('#previews .file-row:nth-child(1) .change-img').length != 1) {

        $('#previews .file-row:nth-child(1) .bnt-detailes').append(`<span class="material-icons change-img">edit</span>`);
    }

});

function upload_images(file) {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
};
// Update the total progress bar
myDropzone.on("totaluploadprogress", function (progress) {
    $("#total-progress").css('width', progress + "%");
    if (progress == 100) {
        $('#previews .file-row').removeClass('active');
    }
});

myDropzone.on("thumbnail", function (file, dataUrl) {
    thumbnailHeight: file.height;
    thumbnailWidth: file.width;
});

myDropzone.on("sending", function (file) {});

document.querySelector("#actions .start").onclick = function () {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
};

var minSteps = 6,
    maxSteps = 60,
    timeBetweenSteps = 100,
    bytesPerStep = 100000;

myDropzone.uploadFiles = function (files) {
    var self = this;

    for (var i = 0; i < files.length; i++) {

        var file = files[i];
        totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (var step = 0; step < totalSteps; step++) {
            var duration = timeBetweenSteps * (step + 1);
            setTimeout(function (file, totalSteps, step) {
                return function () {
                    file.upload = {
                        progress: 100 * (step + 1) / totalSteps,
                        total: file.size,
                        bytesSent: (step + 1) * file.size / totalSteps
                    };

                    self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                    if (file.upload.progress == 100) {
                        file.status = Dropzone.SUCCESS;
                        self.emit("success", file, 'success', null);
                        self.emit("complete", file);
                        self.processQueue();
                    }
                };
            }(file, totalSteps, step), duration);
        }
    }
}


/*-=============================== end ================================-*/
