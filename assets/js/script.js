$( function() {

  // Collapse menu
  $('.navbar .fa').click(function() {
    $('.navbar ul').slideToggle();
  });

  // Jeśli ktoś zamknie menu na małym ekranie i zmieni rozmiar okna to menu nie zniknie
  $(window).resize(function() {
    if($(window).width()>992) {
      $('.navbar ul').css('display', 'block');
    };
  });


// Animated Progress Bar

  $('#skills').one('inview', function(event, isInView) {
    if (isInView) {
      $('.inner-bar').each(function(){
        $(this).animate({
          width: $(this).attr('data-value') +'%'
        },1000);
      });
    }
  });

  // Menu tło na scroll
    function init() {
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 1,
      navbar = document.querySelector('.navbar');
      if (distanceY > shrinkOn) {
        classie.add(navbar,'smaller');
      } else {
        if (classie.has(navbar,'smaller')) {
          classie.remove(navbar,'smaller');
        }
      }
    });
  }
  window.onload = init();


  // match height 
  $(".portfolio-item").matchHeight();

  $('#fun-facts').one('inview', function(event, isInView) {
    if (isInView) {
      $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });


  // portfolio hover
  $('.portfolio-item').hover(
    function(){
      $(this).find('.overlay').animate({'opacity': '1'}, 300);
    },
    function(){
      $(this).find('.overlay').animate({'opacity': '0'}, 300);
  });



});