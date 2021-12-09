import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {getSandwich} from './modules/sandwich';
import {showPromo} from './modules/promo-show';
import {getResize} from './modules/rezise';

import {initModals} from './modules/init-modals';

// Utils
let unlock = true;
// ---------------------------------

ieFix();
iosVhFix();
// if (breakpointTablet.matches === false) {
//   showPromo();
// }
showPromo();
getResize();

// Modules
// ---------------------------------

initModals();
getSandwich();
