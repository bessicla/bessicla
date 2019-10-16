$(document).ready(function () {
    
    var folder = "works/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("homegallery").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});
    ///shuffler
        $("#homegallery").html($("#homegallery").children().sort(function() { return 0.5 - Math.random() }));
      
    
    });


    



