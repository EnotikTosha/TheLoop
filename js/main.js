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

$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(400);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(400);
  $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function () {
  $('.popup-bg').fadeOut(400);
  $('html').removeClass('no-scroll');
});



let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function () {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });

  }
} else {
  body.classList.add('mouse');
}

$(document).ready(function () {
  $('.header_basket').click(function (event) {
    $('.header_basket').toggleClass('open-basket');
  });
});

$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_menu').toggleClass('open-menu');
    $('.header_burger').toggleClass('open-burger');
  });
});



