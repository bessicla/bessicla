/*jslint browser: true*/
/*global $*/

$(document).ready(function () {

    var images = [
                "logogif/logo1.gif",
                "logogif/logo2.gif",
                "logogif/logo3.gif",
                "logogif/logo4.gif"
            ];

    function randImg() {
        var size = images.length
        var x = Math.floor(size * Math.random())
        document.getElementById('testa').src = images[x];
    }

    randImg();
});
