export default function calculate(input) {
  const numbers = input.split(',');

  if (numbers.length > 2) {
    throw new Error('Only 2 numbers are allowed');
  }

  const num1 = Number(numbers[0]) || 0;
  const num2 = Number(numbers[1]) || 0;

  return num1 + num2;
}
