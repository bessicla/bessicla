// init Masonry
var $grid = $('.masonry').masonry({
  // options
    columnWidth: '.grid-sizer',
  itemSelector: '.cover',
    transitionDuration: 0, 
  "percentPosition": true 
  
});


$grid.on( 'click', '.cover', function() {
  // change size of item via class
  $( this ).toggleClass('.masonry');
  $grid.masonry();
});