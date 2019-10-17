$('.masonry').masonry({
  // options
    columnWidth: '.grid-sizer',
  itemSelector: '.cover',
    transitionDuration: 0, 
  "percentPosition": true 
  
});


$(window).load(function() { $( "#hideAll" ).fadeOut( 1500, function() {
    // Animation complete.
  }); });