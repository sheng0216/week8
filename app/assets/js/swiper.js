var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
	spaceBetween: 15,
	grid: {
		rows: 2,
		fill: 'row',
	},
  autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
  breakpoints: {
    768: {
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1.5,
        fill: 'column',
      },
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".comment", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'column',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
  },
});

// 選擇課程階級
var swiper = new Swiper(".reservation", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'column',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
  },
});