const ENTER_KEYCODE = 13;
const preloaderElement = document.querySelector('.preloader');
const showElements = document.querySelectorAll('[data-show]');

const preloader = () => {
  setTimeout(() => {
    preloaderCloseHandler();
  }, 4500);
};

const preloaderCloseHandler = () => {
  document.addEventListener('click', preloadClose);
  document.addEventListener('keydown', preloaderEnterClose);
};

const preloadClose = (e) => {
  if (e.target.closest('.preloader')) {
    preloaderElement.classList.add('preloader--inactive');
    showElements.forEach(item => {
      item.classList.add('show');
    });
  }
  document.removeEventListener('click', preloadClose);
  document.removeEventListener('keydown', preloaderEnterClose);
};

const preloaderEnterClose = (e) => {
  if (e.keyCode === ENTER_KEYCODE) {
    preloaderElement.classList.add('preloader--inactive');
    showElements.forEach(item => {
      item.classList.add('show');
    });
  }
  document.removeEventListener('click', preloadClose);
  document.removeEventListener('keydown', preloaderEnterClose);
};

const preloaderText = () => {
  const breakpointTablet = window.matchMedia('(min-width: 1024px)');
  const text = document.querySelector('.preloader__text');
  if (breakpointTablet.matches === false) {
    text.textContent = 'Кликните на экран';
  } else {
    text.textContent = 'Нажмите Enter';
  }
};

export {preloader, preloaderText};
