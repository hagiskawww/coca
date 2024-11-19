export const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--visible');
  });
};
