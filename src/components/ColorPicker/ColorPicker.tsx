import React, { useEffect, useState } from 'react';
import { findNearest } from '../../functions/findNearest';
import { makeColorObj } from '../../functions/makeColorObj';
import { ColorCard } from '../ColorCard';
import { Color } from '../colorInterface';
import './ColorPicker.scss';

export const ColorPicker = () => {
  const initialColor = '#719cfd';
  const [allColors, setAllColors] = useState<Array<Color>>([]);
  const [nearestColor, setNearestColor] = useState<Color | null>(null);
  // @ts-ignore
  const [currentColor, setCurrentColor] = useState<Color>(makeColorObj(initialColor));

  useEffect(() => {
    fetch('colors.json')
      .then((response) => response.json())
      .then((data) => {
        setAllColors(data);
        return data;
      })
      .then((data) => setNearestColor(findNearest(initialColor, data)));
  }, []);

  return (
    <div className="ColorPicker">
      {currentColor && (
        <ColorCard
          color={currentColor}
          withInput
          setCurrentColor={setCurrentColor}
          setNearestColor={setNearestColor}
          allColors={allColors}
        />
      )}
      {nearestColor && <ColorCard color={nearestColor} />}
    </div>
  );
};
