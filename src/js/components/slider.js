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
