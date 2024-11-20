export function headerScroll() {
  const header = document.querySelector('.header');
  let scrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > scrollTop && currentScroll > header.offsetHeight) {
      header.classList.remove('header--fixed');
    } else {
      header.classList.add('header--fixed');
    }

    scrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
