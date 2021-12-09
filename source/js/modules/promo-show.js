const breakpointTablet = window.matchMedia('(min-width: 1024px)');

const showPromo = () => {
  const hero = document.querySelector('.hero');
  const promo = document.querySelector('.hero__promo');
  hero.addEventListener('click', () => {
    if (breakpointTablet.matches === false) {
      promo.classList.toggle('hero__promo--active');
    }
  });
};

export {showPromo};

