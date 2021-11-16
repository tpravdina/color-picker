export const lightness = (rgbObj: { r: number; g: number; b: number }) => {
  const cmin = Math.min(rgbObj?.r, rgbObj?.g, rgbObj?.b);
  const cmax = Math.max(rgbObj?.r, rgbObj?.g, rgbObj?.b);
  const l = Math.round(((cmax + cmin) / 2 / 255) * 100);
  return l;
};
