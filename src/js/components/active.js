export const activeTab = () => {
  const btn = document.querySelectorAll('.active__button');
  const mainContent = document.querySelectorAll('.active__tab-pane');

  for (let item of btn) {
    item.addEventListener('click', () => {

      mainContent.forEach((el) => {
        el.classList.add('hidden')
        item.classList.add('act');
      })

      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden');
      item.classList.remove('act');
    })
  }
}
