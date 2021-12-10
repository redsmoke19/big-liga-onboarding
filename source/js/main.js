import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {getSandwich} from './modules/sandwich';
import {showPromo} from './modules/promo-show';
import {getResize} from './modules/rezise';
import {preloaderText, preloader} from './modules/preloader';

import {initModals} from './modules/init-modals';

// Utils
ieFix();
iosVhFix();
// ---------------------------------

// Modules
showPromo();
getResize();
preloaderText();
preloader();
// ---------------------------------

initModals();
getSandwich();
