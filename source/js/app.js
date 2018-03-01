;
window.onload = () => {
  slider();
  review();
  maskPhone();
  galeryShowMorePhoto();
  galeryMaximizePhoto();
  sertificateMaximizePhoto();
  serviceFQA();
  modalWindow(document.getElementsByClassName('btnConsult'), true);
  modalWindow(document.getElementsByClassName('header__call')[0]);
};

var slider = () => {
  if (document.getElementsByClassName('swiper-container')[0]) {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      loop: true
    });
    var _slider = document.getElementsByClassName('swiper-wrapper')[0];
    var slideW = parseInt(document.getElementsByClassName('slider__innerbox')[0].style.width);
    _slider.style.width = (document.getElementsByClassName('slider__innerbox').length + 1) * slideW + 'px';
    document.getElementsByClassName('swiper-container')[0].classList.remove("-noVisible");
  }
  if (document.getElementsByClassName('swiper-specialists')[0]) {
    var mySwiper = new Swiper('.swiper-specialists', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  if (document.getElementsByClassName('swiper-specialists-about')[0]) {
    var mySwiper = new Swiper('.swiper-specialists-about', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  if (document.getElementsByClassName('swiper-reviews')[0]) {
    var mySwiper = new Swiper('.swiper-reviews', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
};
var review = () => {
  var _autoHeight = () => {
    var h1 = 0,
      h2 = 0;
    var plate = document.getElementById('reviewsPlate');
    var plateItem = plate.children;
    for (let i = 0; i < plateItem.length; i++) {
      var el = plateItem[i];
      if (i < plateItem.length / 2) {
        h1 += el.offsetHeight + parseInt(getComputedStyle(el).marginTop);
      } else {
        h2 += el.offsetHeight + parseInt(getComputedStyle(el).marginTop);
      }
    }
    if (h2 > h1) plate.style.height = h2 + 'px';
    else plate.style.height = h1 - 1 + 'px';
  };

  if (document.getElementById('reviewsPlate')) {
    window.onresize = () => {
      if (window.outerWidth <= 1100) {
        document.getElementById('reviewsPlate').removeAttribute('style');
        return false
      }
      _autoHeight();
    };
    if (window.outerWidth <= 1100) return false
    _autoHeight();
  }
};
var galeryShowMorePhoto = () => {
  if (document.getElementsByClassName('galeryMoreBtn')[0]) {
    document.getElementsByClassName('galeryMoreBtn')[0].onclick = (e) => {
      document.getElementsByClassName('galery__list')[0].style.height = "auto";
      e.target.style.display = "none";
    };
  }
};
var galeryMaximizePhoto = () => {
  if (document.getElementsByClassName('galery')) {
    Array.from(document.getElementsByClassName('galery__item')).forEach(element => {
      element.onclick = (e) => {
        var src = element.getElementsByClassName('galery__photo')[0].getAttribute('src');
        src = src.replace("sm", "fs");
        var alt = element.getElementsByClassName('galery__photo')[0].getAttribute('alt');

        var PhotoBox = document.createElement('div');
        var Photo = document.createElement('img');

        PhotoBox.className = 'galery__maximizePhotoBox';
        Photo.className = 'galery__maximizePhoto';
        Photo.src = src;
        Photo.alt = alt;

        document.getElementsByClassName('galery')[0].appendChild(PhotoBox);
        PhotoBox.appendChild(Photo);

        PhotoBox.onclick = () =>
          document.getElementsByClassName('galery')[0].removeChild(PhotoBox);

        Photo.onmouseover = () => PhotoBox.onclick = () => {
          return false
        };

        Photo.onmouseout = () =>
          PhotoBox.onclick = () => {
            document.getElementsByClassName('galery')[0].removeChild(PhotoBox);
          };
      }
    });
  }
};
var sertificateMaximizePhoto = () => {
  if (document.getElementsByClassName('about__sertificates')) {
    Array.from(document.getElementsByClassName('about__sertificatesItem')).forEach(element => {
      element.onclick = (e) => {
        var src = element.getAttribute('src');
        src = src.replace("sm", "fs");
        var alt = element.getAttribute('alt');

        var PhotoBox = document.createElement('div');
        var Photo = document.createElement('img');

        PhotoBox.className = 'galery__maximizePhotoBox';
        Photo.className = 'galery__maximizePhoto';
        Photo.src = src;
        Photo.alt = alt;

        document.getElementsByClassName('about__sertificates')[0].appendChild(PhotoBox);
        PhotoBox.appendChild(Photo);

        PhotoBox.onclick = () =>
          document.getElementsByClassName('about__sertificates')[0].removeChild(PhotoBox);

        Photo.onmouseover = () => PhotoBox.onclick = () => {
          return false
        };

        Photo.onmouseout = () =>
          PhotoBox.onclick = () => {
            document.getElementsByClassName('about__sertificates')[0].removeChild(PhotoBox);
          };
      }
    });
  }
};
var maskPhone = () => {
  if (document.getElementById('phone')) {
    var _phone = document.getElementById('phone');
    var _format = '+7(___)___-__-__';
    _phone.value = _format;
    MaskedInput({
      elm: _phone,
      format: _format,
      separator: '+7()-'
    });
  }
  if (document.getElementById('phoneModal')) {
    var _phone = document.getElementById('phoneModal');
    var _format = '+7(___)___-__-__';
    _phone.value = _format;
    MaskedInput({
      elm: _phone,
      format: _format,
      separator: '+7()-'
    });
  }
};
var serviceFQA = () => {
  if (document.getElementsByClassName('someService__FAQ')[0]) {
    document.getElementsByClassName('someService__FAQItem')[0].classList.add('-active');
    Array.from(document.getElementsByClassName('someService__FAQItem')).forEach(element => {
      element.onclick = (e) => {
        e.target.parentElement.classList.toggle('-active');
      };
    });
  }
};
var modalWindow = (el, array) => {
  var modal = document.getElementsByClassName('modal')[0];

  var _open = () => {
    modal.style.display = "flex";
    modal.style.opacity = 1;
  };
  var _close = () => {
    modal.style.display = "none";
    modal.style.opacity = 0;
  };
  var _valid = () => {
    return true;
  };

  if (array === true) {
    Array.from(el).forEach(element => {
      element.onclick = (e) => {
        e.preventDefault();
        if (element.classList.contains('-nomodal')) return false
        _open();
      };
    });
  } else {
    el.onclick = (e) => {
      e.preventDefault();
      if (el.classList.contains('-nomodal')) return false
      _open();
    }
  }

  document.getElementsByClassName('modal__close')[0].onclick = () => {
    _close();
  };

  document.getElementsByClassName('modal__submit')[0].onclick = e => {
    var _modal = document.getElementsByClassName('modalForm')[0];
    e.preventDefault();
    var valid = _valid();
    if (valid !== true) return false
    _modal.classList.add('-send');
    var _send = document.createElement('h2');
    _send.className = "modal__send"
    _send.innerHTML = "Заявка отправленна"
    _modal.appendChild(_send);
    setTimeout(() => {
      _close();
      _modal.classList.remove('-send');
      _modal.removeChild(_send);
    }, 2000);
  };
};