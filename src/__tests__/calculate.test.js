import calculate from '../calculate';

it('should add two numbers', () => {
  const input = '4,3';
  const expected = 7;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should add all given numbers', () => {
  const input = '1,2,3,4,5,6,7,8,9,10,11,12';
  const expected = 78;

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

it('should default missing numbers to zero', () => {
  const input = ',15,,20,';
  const expected = 35;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should default invalid numbers to zero', () => {
  const input = 'abc,15,a,20,tytyty';
  const expected = 35;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should allow the newline (\\n) character as a delimiter', () => {
  const input = '1\n2,3';
  const expected = 6;

  const actual = calculate(input);
  expect(actual).toBe(expected);
});

it('should throw an exception when negative numbers are given', () => {
  const input = '4,-3,-5,6';
  expect(() => calculate(input)).toThrow('No negative numbers allowed, found -3, -5');
});
