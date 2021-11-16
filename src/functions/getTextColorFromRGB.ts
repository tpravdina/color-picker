import { lightness } from './lightness';

export const getTextColorFromRGB = (rgbObj: { r: number; g: number; b: number }) => {
  if (lightness(rgbObj) < 50) {
    return 'white';
  }
  return '#4a4a4a';
};
