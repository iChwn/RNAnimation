import { Platform, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')

export { default as ImagesPath } from './img.js';
// export { default as SoundsPath } from './sounds.js';

// export { default as Languages } from './languages';
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const HEADER_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;