// external JS: masonry.pkgd.js

var $grid = $('.masonry').masonry({
    columnWidth: '.cover',
  itemSelector: '.cover',
  
});

$grid.on( 'click', '.cover', function() {
  // change size of item via class
  window.location.href='newpage.php';
  // trigger layout
  $grid.masonry();
});

