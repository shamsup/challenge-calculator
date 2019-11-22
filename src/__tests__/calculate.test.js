import calculate from '../calculate';

it('should add two numbers', () => {
  const input = '4,-3';
  const expected = 1;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default empty input to zero', () => {
  const input = '';
  const expected = 0;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should allow a single number with no delimiter', () => {
  const input = '500';
  const expected = 500;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default missing numbers to zero - both numbers', () => {
  const input = ',';
  const expected = 0;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default missing numbers to zero - first number', () => {
  const input = ',10';
  const expected = 10;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default missing numbers to zero - second number', () => {
  const input = '10,';
  const expected = 10;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default invalid numbers to zero - both numbers', () => {
  const input = 'abc,ab';
  const expected = 0;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default invalid numbers to zero - first number', () => {
  const input = 'abc,15';
  const expected = 15;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default invalid numbers to zero - second number', () => {
  const input = '5,tytyty';
  const expected = 5;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should throw an exception if more than two numbers are given', () => {
  const input = '1,1,1';
  expect(() => calculate(input)).toThrow('Only 2 numbers are allowed')
});
