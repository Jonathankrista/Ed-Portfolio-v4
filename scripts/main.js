$(document).ready(function() {
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop(),
      sectThree = $('.section-3'),
      mainHead = $('.main-head'),
      mainHeadItems = $('.flex-nav li a'),
      logoReveal = $('.logo-reveal'),
      logoHidden = $('.logo-hidden'),
      sectTwo = $('.section-2');

    if (scroll > 1) {
      mainHead.css({
        fontSize: '1.5em'
      });
    } else {
      mainHead.css({
        fontSize: '',
      });
    }
    if (scroll > 900 ) {
      mainHeadItems.css({
        color: 'black'
      });
      mainHead.css({
        fontSize: '1.5em',
        backgroundColor: 'rgb(221, 221, 221)'
      });
      logoReveal.detach();
      logoHidden.css({
        visibility: 'inherit',
      });
    }

    else {
      mainHeadItems.css({
        color: ''
      });
      mainHead.css({
        fontSize: '',
        backgroundColor: ''
      });
    }
  });
  setTimeout(function() {
    $('#css-pourcent').html('90%');
  }, 3500);
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme, img').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });
});
