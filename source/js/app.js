;
window.onload = () => {
  slider();
};

var slider = () => {
  var mySwiper = new Swiper('.swiper-container', {
    // autoplay: {
    //   // delay: 2500,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true
  });
  var _slider = document.getElementsByClassName('swiper-wrapper')[0];
  var slideW = parseInt(document.getElementsByClassName('swiper-slide')[0].style.width);
  _slider.style.width = (document.getElementsByClassName('swiper-slide').length + 1) * slideW + 'px';
  document.getElementsByClassName('swiper-container')[0].classList.remove("-noVisible");

  var mySwiper = new Swiper('.swiper-specialists', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var mySwiper = new Swiper('.swiper-reviews', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};