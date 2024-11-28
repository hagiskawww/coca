import '../assets/scss/main.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { headerScroll } from './components/headerScroll.js';
import { useInsightSlider } from './components/slider.js';
import { sliderPartners } from './components/partnersSlider.js';
import { useTestimonialsSlider } from './components/home/slider.js';

useTheme();
useBurger();
headerScroll();
useInsightSlider();
sliderPartners();
useTestimonialsSlider();
