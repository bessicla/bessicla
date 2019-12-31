/*jslint browser: true*/
/*global $*/


    var images = [
                "logogif/logo1.gif",
                "logogif/logo2.gif",
                "logogif/logo3.gif",
                "logogif/logo4.gif",
                "logogif/logo5.gif"
            ];

    function randImg() {
        var size = images.length
        var x = Math.floor(size * Math.random())
        document.getElementById('testa1').src = images[x];
        var x = Math.floor(size * Math.random())
        document.getElementById('testa2').src = images[x];
        var x = Math.floor(size * Math.random())
        document.getElementById('testa3').src = images[x];
    };
$(document).ready(function () {
    randImg();
});


$(window).on('load', function () {
    setTimeout(function () {
        $("#hideAll").fadeOut(1000)
    }, 800);   
    
});
