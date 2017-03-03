/*Intervalo de tiempo para el slider*/
$('.carousel-fluid').carousel({
  interval: 7000,
  wrap: true,
  pause: "false"
});
$('.carousel-modal').carousel({
  interval: 5000,
  wrap: true
})
$('.owl-carousel').owlCarousel({
      rtl:false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop:true,
      margin:30,
      nav:true,
      navText : [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })

$(document).ready(function () {
    $("#carousel-ecobags").swipe({
        swipeLeft: function () {
            $("#carousel-ecobags").swipe("enable");
            $(this).carousel('next');

        },
        swipeRight: function () {
            $("#carousel-ecobags").swipe("enable");
            $(this).carousel('prev');
        },
        preventDefaultEvents: false,
        threshold: 0,
        allowPageScroll: "vertical"
    });
});
$(document).ready(function () {
    $(".swipe-carousel").swipe({
        swipeLeft: function () {
            $(".swipe-carousel").swipe("enable");
            $(this).carousel('next');

        },
        swipeRight: function () {
            $(".swipe-carousel").swipe("enable");
            $(this).carousel('prev');
        },
        preventDefaultEvents: false,
        threshold: 0,
        allowPageScroll: "vertical"
    });
});

(function($) {
    "use strict";

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Scrolling menú de navegación
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Offset para menú de navegacion principal
    $('#main-navbar-menu').affix({
        offset: {
            top: 100
        }
    })

    // Inicializa plugin WOW.js
    new WOW().init();

    // Inicializa efecto Tooltip para Bootstrap
    $('[data-toggle="tooltip"]').tooltip(); 

    // Preloader del sitio web
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow');

})(jQuery);
