export default function calculate(input) {
  const numbers = input.split(/(,|\n)/)
    // handle invalid and empty values, cast to number
    .map(n => Number(n) || 0)
    // exclude numbers over 1000
    .filter(n => n <= 1000);

  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`No negative numbers allowed, found ${negatives.join(', ')}`);
  }

  const sum = numbers.reduce((acc, num) => (acc + num), 0);
  return sum;
}
