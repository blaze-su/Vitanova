;
window.onload = () => {
  slider();
  specialistPlate();

};

var slider = () => {
  if (window.location.pathname == '/') {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
      },
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
  }
};

var specialistPlate = () => {
  var _autoHeight = () => {
    var h1 = 0, h2 = 0;
    for (let i = 0; i < document.getElementsByClassName('specialistPage__reviewItem').length; i++) {
      var el = document.getElementsByClassName('specialistPage__reviewItem')[i];
      if (i % 2 == 0) h2 += el.offsetHeight + parseInt(getComputedStyle(el).marginTop);
      else h1 += el.offsetHeight + parseInt(getComputedStyle(el).marginTop);
    }
    if (h2 > h1) document.getElementsByClassName('specialistPage__reviewList')[0].style.height = h2 - 24 + "px";
    else document.getElementsByClassName('specialistPage__reviewList')[0].style.height = h1 - 24 + "px";
  };

  if (window.location.pathname.indexOf("specialist") != -1) {
    _autoHeight();
    document.getElementsByClassName('specialistPage__galeryMoreBtn')[0].onclick = (e) => {
      document.getElementsByClassName('specialistPage__galeryList')[0].style.height = "auto";
      e.target.style.display = "none";
    };
    window.onresize = () => {_autoHeight();};
  }
};