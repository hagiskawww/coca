export function headerScroll() {
  const header = document.querySelector('.header');
  let scrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > scrollTop && currentScroll > header.offsetHeight) {
      header.classList.remove('fixed');
    } else {
      header.classList.add('fixed');
    }

    scrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
