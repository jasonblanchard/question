export function average(numbers = []) {
  if (numbers.length === 0) return 0;
  return Math.round((sum(numbers) / numbers.length));
}

export function sum(numbers = []) {
  return numbers.reduce((accum, number) => {
    accum += number;
    return accum;
  }, 0);
}
