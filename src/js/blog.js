import '../assets/scss/blog.scss';


import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { headerScroll } from './components/headerScroll.js';
import { activeTab } from './components/active.js';
import { sliderSwipe } from './components/slider.js';
import { activeSlider } from './components/slider.js';


useTheme();
useBurger();
headerScroll();
activeTab();
sliderSwipe()
activeSlider();
