import {enableScrolling} from '../utils/scroll-lock';

const getResize = () => {
  const breakpointTablet = window.matchMedia('(min-width: 1024px)');
  const nav = document.querySelector('.main-nav');
  const sandwich = document.querySelector('.sandwich');
  const promo = document.querySelector('.hero__promo');

  window.addEventListener('resize', resizeThrottler, false);
  let resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();
      }, 100);
    }
  }
  function actualResizeHandler() {
    if (breakpointTablet.matches === true) {
      if (promo.classList.contains('hero__promo--active')) {
        promo.classList.remove('hero__promo--active');
      }
      if (nav.classList.contains('main-nav--active')) {
        nav.classList.remove('main-nav--active');
        sandwich.classList.remove('sandwich--active');
        enableScrolling();
      }
    }
  }
};

export {getResize};
