import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Scrollbar],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
      hide: false,
    },
  });
};

export const sliderHero = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    effect: 'fade',
  });
};

export const activeSlider = () => {
  new Swiper('.active__swiper', {
    slidesPerView: 2.5,
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 0,
      },
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1470: {
        slidesPerView: 3,
      },
    },
  })
}
