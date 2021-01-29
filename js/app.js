// external js: packery.pkgd.js, imagesloaded.pkgd.js

// init Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  percentPosition: true
});
// layout Packery after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.packery();
});  
