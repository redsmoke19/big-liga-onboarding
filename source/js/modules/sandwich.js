import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const sandwich = document.querySelector('.sandwich');
const nav = document.querySelector('.main-nav');

let unlock = true;

const getSandwich = () => {
  if (sandwich !== null) {
    sandwich.addEventListener('click', function (e) {
      if (unlock) {
        disableScrolling();
        sandwich.classList.add('sandwich--active');
        nav.classList.add('main-nav--active');
        unlock = false;
      } else {
        disableScrolling();
        sandwich.classList.remove('sandwich--active');
        nav.classList.remove('main-nav--active');
        enableScrolling();
        unlock = true;
      }
    });
  }
};

export {getSandwich};
