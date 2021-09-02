// const elem = document.querySelector('input[name="datepicker"]');
// const datepicker = new Datepicker(elem, {
//     autohide: true,
// }); 
"use strict";
"use strict";

var swiper = new Swiper(".design", {
  slidesPerView: 2,
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      slidesPerColumnFill: 'row',
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 1.4,
      spaceBetween: 30,
      slidesPerColumnFill: 'row',
      slidesPerColumn: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
      allowTouchMove: true
    }
  }
});
var swiper = new Swiper(".comment", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  slidesPerColumn: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerColumnFill: 'row',
      slidesPerColumn: 2
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerColumnFill: 'row',
      slidesPerColumn: 2
    }
  }
}); // 選擇課程階級

var swiper = new Swiper(".reservation", {
  // slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'column'
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
}); // 課程推薦

var swiper = new Swiper(".recommend", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
