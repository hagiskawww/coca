export const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.header__right');

  const closeBtn = () => {
    burgerBtn.classList.remove('burger--active');
    menu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    menu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
  });

  overlay.addEventListener('click', closeBtn);
};
