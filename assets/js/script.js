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

  $('.inner-bar').each(function(){
    $(this).css('width', $(this).attr('data-value') +'%');
  })

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
      $(this).find('.overlay').animate({'opacity': '0.7'}, 300);
    },
    function(){
      $(this).find('.overlay').animate({'opacity': '0'}, 300);
  });



});