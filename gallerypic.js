$('.masonry').masonry({
    // options
    columnWidth: '.grid-sizer',
    itemSelector: '.cover',
    transitionDuration: 0,
    "percentPosition": true

});

$(window).on('load', function () {
    setTimeout(function () {
        $("#hideAll").fadeOut(1000)
    }, 1000);
});