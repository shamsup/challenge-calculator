const newlineOrComma = /(,|\n)/;
const testCustomSingleDelimiter = /^\/\/(.)\n/;
const testCustomMultiDelimiter = /^\/\/\[([^\]]+)\]\n/;

const delimiterRules = [testCustomSingleDelimiter, testCustomMultiDelimiter];

function getNumbersFromInput(input) {
  let delimiter = newlineOrComma;
  let matchedRule = delimiterRules.find(rule => rule.test(input));
  if (matchedRule) {
    delimiter = input.match(matchedRule)[1];
    input = input.replace(matchedRule, '');
  }

  return input.split(delimiter)
    // handle invalid and empty values, cast to number
    .map(n => Number(n) || 0);
}

export default function calculate(input) {
  const numbers = getNumbersFromInput(input)
    // exclude numbers over 1000
    .filter(n => n <= 1000);

  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`No negative numbers allowed, found ${negatives.join(', ')}`);
  }

  const sum = numbers.reduce((acc, num) => (acc + num), 0);
  return sum;
}
