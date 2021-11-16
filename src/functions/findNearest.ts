import { Color } from '../components/colorInterface';
import { distance } from './distance';
import { makeColorObj } from './makeColorObj';

export const findNearest = (hex: string, colorsArray: Array<Color>): Color => {
  const initialRGB = Object.values(makeColorObj(hex).rgb);
  let nearestColor: Color = colorsArray[0];
  let minDistance = Number.MAX_VALUE;

  colorsArray.forEach((elem: Color) => {
    const currentRGB = [elem.rgb.r, elem.rgb.g, elem.rgb.b];
    if (distance(initialRGB, currentRGB) < minDistance) {
      minDistance = distance(initialRGB, currentRGB);
      nearestColor = elem;
    }
  });

  return nearestColor;
};
