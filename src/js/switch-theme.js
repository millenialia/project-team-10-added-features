import { shopping_info, saveShoppingList } from './shopping-list';

const buttonSwitchTheme = document.querySelector('.switcher');

export function renderTheme(theme) {
  const elements = document.querySelectorAll('.theme-switch');

  switch (theme) {
    case 'light':
      elements.forEach(function (el) {
        el.classList.add('light-theme');
        el.classList.remove('dark-theme');
      });
      break;
    case 'dark':
      elements.forEach(function (el) {
        el.classList.add('dark-theme');
        el.classList.remove('light-theme');
      });
      break;
  }
}

function switchTheme() {
  if (shopping_info.theme === 'light') {
    renderTheme('light');
  } else {
    renderTheme('dark');
  }
}

function switchCheck() {
  if (this.getAttribute('data-checked') === 'true') {
    shopping_info.theme = 'light';
  } else {
    shopping_info.theme = 'dark';
  }
  saveShoppingList(shopping_info);
  switchTheme();
}

function loadSwitchButton() {
  if (shopping_info.theme === 'light') {
    buttonSwitchTheme.classList.remove('active');
    buttonSwitchTheme.setAttribute('data-checked', false);
    renderTheme('light');
  } else {
    buttonSwitchTheme.classList.add('active');
    buttonSwitchTheme.setAttribute('data-checked', true);
    renderTheme('dark');
  }
}

buttonSwitchTheme.addEventListener('click', switchCheck);
window.addEventListener('load', loadSwitchButton);


const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', function () {
  if (this.getAttribute('data-checked') === 'true') {
    this.classList.remove('active');
    this.setAttribute('data-checked', false);
  } else {
    this.classList.add('active');
    this.setAttribute('data-checked', true);
  }
});

// for_THEME DarkandWhite-LOGO
function toggleLogoImage() {
  const logoImages = document.querySelectorAll('.logo-image');

  logoImages.forEach(logoImage => {
    if (logoImage.classList.contains('light-theme')) {
      logoImage.src = require('/src/images/header/logo-light.png');
    } else if (logoImage.classList.contains('dark-theme')) {
      logoImage.src = require('/src/images/header/logo-dark.png');
    }
  });
}

window.addEventListener('load', function () {
  toggleLogoImage();

  const themeSwitch = document.querySelector('.theme-switch');
  themeSwitch.addEventListener('click', function () {
    toggleLogoImage();
  });
});
