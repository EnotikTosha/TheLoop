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