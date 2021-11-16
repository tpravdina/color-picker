import React from 'react';
import { getTextColorFromRGB } from '../../functions/getTextColorFromRGB';
import { Color } from '../colorInterface';
import './ColorCard.scss';
import { CopyButton } from '../CopyButton';
import { makeColorObj } from '../../functions/makeColorObj';
import { findNearest } from '../../functions/findNearest';

interface ColorCardProps {
  color: Color;
  withInput?: boolean;
  allColors?: Array<Color>;
  setCurrentColor?: (color: Color) => void;
  setNearestColor?: (color: Color) => void;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  color,
  withInput,
  allColors,
  setCurrentColor,
  setNearestColor,
}) => (
  <div className="ColorCard">
    {withInput && (
      <input
        className="ColorCard__input ColorCard__color"
        type="color"
        id="colorpicker"
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          if (setCurrentColor) {
            // @ts-ignore
            setCurrentColor(makeColorObj(target.value));
          }
          if (setNearestColor && allColors) {
            // @ts-ignore
            setNearestColor(findNearest(target.value, allColors));
          }
        }}
      />
    )}
    <p>
      <b>R: </b>
      {color.rgb.r}
    </p>
    <p>
      <b>G: </b>
      {color.rgb.g}
    </p>
    <p>
      <b>B: </b>
      {color.rgb.b}
    </p>
    <div className="ColorCard__color" style={{ backgroundColor: `${color.hex}` }} />
    <p className="ColorCard__name" style={{ color: getTextColorFromRGB(color.rgb) }}>
      {`${color.name}`}
    </p>
    <CopyButton
      className="ColorCard__copyButton"
      color={getTextColorFromRGB(color.rgb)}
      toCopyData={color.name}
    />
  </div>
);
