import { isIphoneX } from '../is-iphone-x/is-iphone-x';
import { getIsStandalone } from '../is-standalone/is-standalone';

export const isStandaloneIphoneX = () => getIsStandalone() && isIphoneX();
