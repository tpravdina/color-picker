/* eslint-disable implicit-arrow-linebreak */
export const distance = (arr1: number[], arr2: number[]) =>
  Math.sqrt(arr1.reduce((accum, elem, index) => accum + (elem - arr2[index]) ** 2, 0));
