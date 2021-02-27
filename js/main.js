const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

  });


  $('.open-popup').click(function(e){
    e.preventDefault();
      $('.popup-bg').fadeIn(400);
      $('html').addClass('no-scroll');
  });

  $('.close-popup').click(function(){
    $('.popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
  });

  $('.popup-bg').click(function(){
  $('.popup-bg').fadeOut(400);
  $('html').removeClass('no-scroll');
  });
