$(document).ready(function () {
    
    var index = 0;
    var folder = $("#folder").text();
    var tempImg = new Image();
    tempImg.onload = function () {
        appendImage();
    }
    var tryLoadImage = function (index) {
        tempImg.src = 'works/' + folder + '/' + index + '.png';
    }
    var appendImage = function () {

        $("<img />").attr('src', 'works/' + folder + '/' + index + '.png').addClass( "card").appendTo("#scrollgallery");
        $('img').on('error', function(){
            $(this).remove();
            $('#scrollgallery').addClass("js-flickity");
            $.getScript("/flickity.js");
            $('#scrollgallery').fadeIn("slow");
        });
        
        tryLoadImage(index++)
    }

    tryLoadImage(index);
   
    });