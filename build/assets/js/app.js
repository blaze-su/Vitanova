"use strict";window.onload=function(){slider(),review(),maskPhone(),galeryShowMorePhoto(),galeryMaximizePhoto(),serviceFQA(),modalWindow(document.getElementsByClassName("btnConsult"),!0),modalWindow(document.getElementsByClassName("header__call")[0])};var slider=function(){if(document.getElementsByClassName("swiper-container")[0]){new Swiper(".swiper-container",{autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0},loop:!0});var e=document.getElementsByClassName("swiper-wrapper")[0],t=parseInt(document.getElementsByClassName("slider__innerbox")[0].style.width);e.style.width=(document.getElementsByClassName("slider__innerbox").length+1)*t+"px",document.getElementsByClassName("swiper-container")[0].classList.remove("-noVisible")}if(document.getElementsByClassName("swiper-specialists")[0])new Swiper(".swiper-specialists",{slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});if(document.getElementsByClassName("swiper-specialists-about")[0])new Swiper(".swiper-specialists-about",{slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});if(document.getElementsByClassName("swiper-reviews")[0])new Swiper(".swiper-reviews",{slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},review=function(){var e=function(){for(var e=0,t=0,n=document.getElementById("reviewsPlate"),s=n.children,o=0;o<s.length;o++){var a=s[o];o<s.length/2?e+=a.offsetHeight+parseInt(getComputedStyle(a).marginTop):t+=a.offsetHeight+parseInt(getComputedStyle(a).marginTop)}n.style.height=t>e?t+"px":e-1+"px"};if(document.getElementById("reviewsPlate")){if(window.onresize=function(){if(window.outerWidth<=1100)return document.getElementById("reviewsPlate").removeAttribute("style"),!1;e()},window.outerWidth<=1100)return!1;e()}},galeryShowMorePhoto=function(){document.getElementsByClassName("galeryMoreBtn")[0]&&(document.getElementsByClassName("galeryMoreBtn")[0].onclick=function(e){document.getElementsByClassName("galery__list")[0].style.height="auto",e.target.style.display="none"})},galeryMaximizePhoto=function(){document.getElementsByClassName("galery")&&Array.from(document.getElementsByClassName("galery__item")).forEach(function(e){e.onclick=function(t){var n=e.getElementsByClassName("galery__photo")[0].getAttribute("src");n=n.replace("sm","fs");var s=e.getElementsByClassName("galery__photo")[0].getAttribute("alt"),o=document.createElement("div"),a=document.createElement("img");o.className="galery__maximizePhotoBox",a.className="galery__maximizePhoto",a.src=n,a.alt=s,document.getElementsByClassName("galery")[0].appendChild(o),o.appendChild(a),o.onclick=function(){return document.getElementsByClassName("galery")[0].removeChild(o)},a.onmouseover=function(){return o.onclick=function(){return!1}},a.onmouseout=function(){return o.onclick=function(){document.getElementsByClassName("galery")[0].removeChild(o)}}}})},maskPhone=function(){if(document.getElementById("phone")){var e="+7(___)___-__-__";(t=document.getElementById("phone")).value=e,MaskedInput({elm:t,format:e,separator:"+7()-"})}if(document.getElementById("phoneModal")){var t;e="+7(___)___-__-__";(t=document.getElementById("phoneModal")).value=e,MaskedInput({elm:t,format:e,separator:"+7()-"})}},serviceFQA=function(){document.getElementsByClassName("someService__FAQ")[0]&&(document.getElementsByClassName("someService__FAQItem")[0].classList.add("-active"),Array.from(document.getElementsByClassName("someService__FAQItem")).forEach(function(e){e.onclick=function(e){e.target.parentElement.classList.toggle("-active")}}))},modalWindow=function(e,t){var n=document.getElementsByClassName("modal")[0],s=function(){n.style.display="flex",n.style.opacity=1},o=function(){n.style.display="none",n.style.opacity=0};!0===t?Array.from(e).forEach(function(e){e.onclick=function(t){if(t.preventDefault(),e.classList.contains("-nomodal"))return!1;s()}}):e.onclick=function(t){if(t.preventDefault(),e.classList.contains("-nomodal"))return!1;s()},document.getElementsByClassName("modal__close")[0].onclick=function(){o()},document.getElementsByClassName("modal__submit")[0].onclick=function(e){var t=document.getElementsByClassName("modalForm")[0];e.preventDefault();t.classList.add("-send");var n=document.createElement("h2");n.className="modal__send",n.innerHTML="Заявка отправленна",t.appendChild(n),setTimeout(function(){o(),t.classList.remove("-send"),t.removeChild(n)},2e3)}};