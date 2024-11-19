export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitchBtn = document.querySelector('[data-theme-switcher]');
  const themeTargetSet = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';

  if (theme === 'dark') {
    themeSwitchBtn.checked = true;
  }

  themeTargetSet.theme = theme;

  themeSwitchBtn.addEventListener('click', () => {
    if (themeTargetSet.theme === 'light') {
      themeTargetSet.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetSet.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
