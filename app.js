
$(document).ready(function(){



    $("lazy").lazyload({
       threshold : 200
    });


    $('.chocolat-parent').Chocolat();


    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 200,
      percentPosition: true
    });
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

});

var myFunction = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
