import '../assets/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { headerScroll } from './components/headerScroll.js';
import { sliderHero, useCreatorSlider } from './components/about/slider.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();
sliderHero();
headerScroll();
useCreatorSlider();
