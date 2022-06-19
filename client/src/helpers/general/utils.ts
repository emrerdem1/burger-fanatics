export const getDecimalValue = (nums: number[]): number =>
  +(nums.reduce((acc, curr) => acc + curr, 0) / nums.length).toFixed(2);
