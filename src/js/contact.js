import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { headerScroll } from './components/headerScroll.js';
import { usePhone } from './components/contact/phone.js';
import { sliderPartners } from './components/partnersSlider.js';

useTheme();
useBurger();
usePhone();
headerScroll();
sliderPartners();
