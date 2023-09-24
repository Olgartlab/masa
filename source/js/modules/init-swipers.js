import Swiper from '../vendor/swiper';

const initSwipers = () => {

  let heroSwiper;
  let programsSwiper;
  let reviewsSwiper;
  let newsSwiper;

  if (document.querySelector('.hero__swiper')) {
    heroSwiper = new Swiper('.hero__swiper', {
      loop: true,

      pagination: {
        el: '.hero__swiper-pagination',
        bulletClass: 'hero__pagination-bullet',
        bulletActiveClass: 'hero__pagination-bullet--active',
        clickable: true,
      },

      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },

      /*autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },*/
    });
  }

  if (document.querySelector('.programs__swiper')) {
    programsSwiper = new Swiper('.programs__swiper', {
      loop: false,

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2.1271,
          spaceBetween: 30,
          dragSize: 324,
        },
        1200: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 32,
          dragSize: 392,
        },
      },

      navigation: {
        nextEl: '.programs__button--next',
        prevEl: '.programs__button--prev',
      },

      scrollbar: {
        el: '.programs__scrollbar',
      },
    });
  }



  if (document.querySelector('.reviews__swiper')) {
    reviewsSwiper = new Swiper('.reviews__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 1.276271,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },

      scrollbar: {
        el: '.reviews__scrollbar',
      },
    });
  }

  if (document.querySelector('.news__swiper')) {
    newsSwiper = new Swiper('.news__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.news__button-next',
        prevEl: '.news__button-prev',
      },

      pagination: {
        el: '.news__swiper-pagination',
        clickable: true,
        // eslint-disable-next-line object-shorthand
        renderBullet: function (index, className) {
          return '<span class="' + className + ' news__swiper-bullet">' + (index + 1) + '</span>';
        },
      },
    });
  }

  return {
    heroSwiper,
    programsSwiper,
    reviewsSwiper,
    newsSwiper,
  };
};
export { initSwipers };
