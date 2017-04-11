jQuery(document).ready(function($){

// makes the parallax elements
function parallaxIt() {

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // for each of background parallax element
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
        yPos = - ((docViewBottom - $backgroundObj.offset().top) / speed); 
        coords = '50% '+ yPos + 'px';

        $backgroundObj.css({ backgroundPosition: coords });
      }
    }); 
  }); 

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};
parallaxIt();
});