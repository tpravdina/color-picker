import { hexToRgb } from './hexToRgb';

export const makeColorObj = (hexColor: string) => ({
  name: hexColor,
  hex: hexColor,
  rgb: hexToRgb(hexColor),
});
