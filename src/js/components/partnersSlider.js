import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const sliderPartners = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
};
