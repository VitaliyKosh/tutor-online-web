import { isIphoneX } from '../is-iphone-x/is-iphone-x';
import { isStandalone } from '../is-standalone/is-standalone';

export const isStandaloneIphoneX = () => isStandalone() && isIphoneX();
