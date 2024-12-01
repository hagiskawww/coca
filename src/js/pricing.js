import '../assets/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { headerScroll } from './components/headerScroll.js';
import { usePriceSwitcher } from './components/pricing/priceSwticher.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();
usePriceSwitcher();
headerScroll();
