import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const sandwich = document.querySelector('.sandwich');
const nav = document.querySelector('.main-nav');

const getSandwich = () => {
  if (sandwich) {
    sandwich.addEventListener('click', function () {
      if (!sandwich.classList.contains('sandwich--active')) {
        disableScrolling();
        sandwich.classList.add('sandwich--active');
        nav.classList.add('main-nav--active');
      } else {
        sandwich.classList.remove('sandwich--active');
        nav.classList.remove('main-nav--active');
        enableScrolling();
      }
    });
  }
};

export {getSandwich};
