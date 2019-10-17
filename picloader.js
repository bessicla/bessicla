$(document).ready(function () {

    var index = 1;
    var folder = $("#folder").text();
    var tempImg = new Image();
    tempImg.onload = function () {
        appendImage();
    }
    var tryLoadImage = function (index) {
        tempImg.src = 'works/' + folder + '/' + index + '.png';
    }
    var appendImage = function () {

        $("<img />").attr('src', 'works/' + folder + '/' + index + '.png').attr('class', "cover").appendTo(".masonry");
        $('img').error(function () {
            $(this).remove().ready(function () {

                $('.masonry').masonry({
                    // options
                    columnWidth: '.grid-sizer',
                    itemSelector: '.cover',
                    transitionDuration: 0,
                    "percentPosition": true

                });
            });
        });
        tryLoadImage(index++)
    }

    tryLoadImage(index);

});