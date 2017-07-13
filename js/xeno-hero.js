(function ($, Drupal) {

  "use strict";

  // Makes the parallax function.
  function parallaxIt() {

    // Create variables.
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Adds on window scroll event.
    $fwindow.on('scroll resize', function() {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    // For each of background parallax elements.
    $('.paragraph--type--xeno-hero .paragraph--type--xeno-hero__image').each(function(){
      var $backgroundObj = $(this);
      var yPos;
      var coords;
      var speed = $backgroundObj.parent().attr('data-speed');

      $backgroundObj.css('background-image', 'url(' + $backgroundObj.find('img').attr('src') + ')');

      $fwindow.on('scroll resize', function() {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        if ($backgroundObj.offset().top < docViewBottom) {
          yPos = + ((docViewBottom - $backgroundObj.offset().top - $backgroundObj.height()*1.25) / speed);
          coords = '50% '+ yPos + 'px';

          $backgroundObj.css({ backgroundPosition: coords });
        }
      });
    });

    // Triggers the window scroll for refresh.
    $fwindow.trigger('scroll');
  };

  parallaxIt();

})(jQuery, Drupal);
