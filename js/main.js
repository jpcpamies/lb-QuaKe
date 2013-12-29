
// Script event actual fixed movil
  var evento = 95; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > evento) {
          $('.eventActual').addClass('fixed');
      } else {
          $('.eventActual').removeClass('fixed');
      }
  });


// Script Ir inicio 
var inicio = 95; //number of pixels before modifying styles

		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > inicio) {
		        $('.boton').addClass('inici');
		    } else {
		        $('.boton').removeClass('inici');
		    }
		});