"use strict";

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {});
"use strict";

(function (d) {
  var config = {
    kitId: 'wvk5prl',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document);
"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    rows: 2,
    fill: 'row'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30
    },
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1.5,
        fill: 'column'
      },
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper(".comment", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'column'
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'column'
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'column'
      }
    }
  }
}); // 選擇課程階級

var swiper = new Swiper(".reservation", {
  slidesPerView: 1,
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
});
//# sourceMappingURL=all.js.map
