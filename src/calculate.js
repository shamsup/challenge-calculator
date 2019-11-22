export default function calculate(input) {
  const numbers = input.split(',');

  const sum = numbers.reduce((acc, num) => (acc + (Number(num) || 0)), 0)
  return sum;
}
