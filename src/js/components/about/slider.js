import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

export const sliderHero = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    effect: 'fade',
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};

export const useCreatorSlider = () => {
  new Swiper('.creators__swiper', {
    modules: [Scrollbar],
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
      hide: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};
