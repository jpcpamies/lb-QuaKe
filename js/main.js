
// Script event actual fixed movil
  var num = 95; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('.eventActual').addClass('fixed');
      } else {
          $('.eventActual').removeClass('fixed');
      }
  });
