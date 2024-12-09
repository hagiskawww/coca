export const useChangeHero = () => {
  const themeSwitchBtn = document.querySelector('[data-theme-switcher]');
  const imgOne = document.querySelector('.hero__img-black');

  themeSwitchBtn.addEventListener('click', () => {
    imgOne.classList.toggle('__active');
  });
};
